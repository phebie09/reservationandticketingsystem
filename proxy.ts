import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

export default async function proxy(request: NextRequest) {
    // Update session for all requests
    const response = await updateSession(request)

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()
    const role = user?.user_metadata?.role || 'customer'

    const url = new URL(request.url)

    // Define public paths that don't require authentication
    const publicPaths = ['/login', '/register']
    const isPublicPath = publicPaths.some(path => url.pathname === path || url.pathname.startsWith(path + '/'))

    // Protect /admin routes - require admin role
    if (url.pathname.startsWith('/admin')) {
        if (!user) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        if (role !== 'admin') {
            // Redirect non-admins to client dashboard
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }

    // Redirect logged-in users away from auth pages to their respective dashboards
    if (isPublicPath && user) {
        // Redirect based on role
        if (role === 'admin') {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return response
}


export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}

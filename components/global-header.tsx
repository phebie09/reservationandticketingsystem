"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function GlobalHeader() {
    const pathname = usePathname();

    // Hide header on admin routes to avoid redundancy with admin sidebar
    if (pathname?.startsWith("/admin")) {
        return null;
    }

    return (
        <header className="border-b bg-white dark:bg-zinc-950">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    TicketSys
                </Link>
                <nav className="flex items-center gap-6">
                    {/* Only show these links if NOT on client dashboard, or keep them? 
                        The user didn't complain about client dashboard redundancy yet.
                        We'll keep them consistent for now or hide if needed.
                    */}
                    {!pathname?.startsWith("/dashboard") && (
                        <>
                            <Link
                                href="/admin/reservations"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Reservations
                            </Link>
                            <Link
                                href="/admin/tickets"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Tickets
                            </Link>
                        </>
                    )}

                    {/* Conditionally render Login/Logout or Dashboard link based on path? 
                        Ideally we check auth state, but this is a simple client component.
                        We can just show 'Dashboard' if on public pages.
                    */}

                    <Link
                        href="/login"
                        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
}

import Link from "next/link";
import { Ticket, CalendarCheck, ShieldCheck, UserCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 text-center">
            <div className="max-w-4xl space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-900 dark:text-zinc-50">
                        Streamline Your <span className="text-blue-600">Reservations</span>
                    </h1>
                    <p className="mx-auto max-w-[600px] text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        A comprehensive ticketing system powered by Next.js, Supabase, and Shadcn UI. Manage, track, and secure your bookings with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Link
                        href="/admin/reservations"
                        className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-white p-8 transition-all hover:border-blue-500 hover:shadow-lg dark:bg-zinc-900"
                    >
                        <div className="rounded-full bg-blue-100 p-4 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30">
                            <CalendarCheck className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Reservations</h3>
                            <p className="text-sm text-zinc-500">Manage all incoming bookings and schedules.</p>
                        </div>
                    </Link>

                    <Link
                        href="/admin/tickets"
                        className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-white p-8 transition-all hover:border-green-500 hover:shadow-lg dark:bg-zinc-900"
                    >
                        <div className="rounded-full bg-green-100 p-4 transition-colors group-hover:bg-green-600 group-hover:text-white dark:bg-green-900/30">
                            <Ticket className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Tickets</h3>
                            <p className="text-sm text-zinc-500">Issue and validate event tickets seamlessly.</p>
                        </div>
                    </Link>

                    <Link
                        href="/register"
                        className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-white p-8 transition-all hover:border-purple-500 hover:shadow-lg dark:bg-zinc-900 sm:col-span-2 lg:col-span-1"
                    >
                        <div className="rounded-full bg-purple-100 p-4 transition-colors group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-900/30">
                            <UserCircle className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Onboarding</h3>
                            <p className="text-sm text-zinc-500">Create accounts and manage user profiles.</p>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secure authentication via Supabase Auth</span>
                </div>
            </div>
        </div>
    );
}

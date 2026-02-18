import Link from "next/link";
import { CalendarCheck, ShieldCheck } from "lucide-react";

export default function Home() {
    // This page is only shown to client users (admins are redirected to /admin by middleware)
    return (
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 text-center">
            <div className="max-w-4xl space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-900 dark:text-zinc-50">
                        <span className="text-red-600">Super</span><span className="text-blue-600">lines</span>
                    </h1>
                    <p className="mx-auto max-w-[600px] text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        A comprehensive and integrated reservation & ticketing system powered by our team. Manage, track, and secure your bookings with ease.
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* Check Available Reservation */}
                    <Link
                        href="/login"
                        className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-white p-8 transition-all hover:border-blue-500 hover:shadow-lg dark:bg-zinc-900 w-full max-w-sm"
                    >
                        <div className="rounded-full bg-blue-100 p-4 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30">
                            <CalendarCheck className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Check Available Reservation</h3>
                            <p className="text-sm text-zinc-500">Listed all incoming bookings and schedules.</p>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secured Authentication.</span>
                </div>
            </div>
        </div>
    );
}

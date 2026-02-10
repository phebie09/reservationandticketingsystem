import Link from "next/link";
import { CalendarCheck, Ticket, User, Clock } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-[calc(100vh-64px)]">
            {/* Client Navigation Bar */}
            <nav className="border-b bg-white dark:bg-zinc-950">
                <div className="container mx-auto flex h-12 items-center gap-6 px-4">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600"
                    >
                        <User className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="/my-reservations"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600"
                    >
                        <CalendarCheck className="h-4 w-4" />
                        My Reservations
                    </Link>
                    <Link
                        href="/my-tickets"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600"
                    >
                        <Ticket className="h-4 w-4" />
                        My Tickets
                    </Link>
                    <Link
                        href="/history"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600"
                    >
                        <Clock className="h-4 w-4" />
                        History
                    </Link>
                </div>
            </nav>
            {/* Main Content */}
            <div className="container mx-auto p-6">{children}</div>
        </div>
    );
}

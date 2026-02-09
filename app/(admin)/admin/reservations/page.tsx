import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarCheck, Search, Filter, Plus } from "lucide-react";

export default function ReservationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Reservations</h1>
                    <p className="text-muted-foreground">Manage all incoming bookings and schedules.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Reservation
                </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search reservations..." className="pl-10" />
                </div>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                </Button>
            </div>

            {/* Reservations List */}
            <Card>
                <CardHeader>
                    <CardTitle>All Reservations</CardTitle>
                    <CardDescription>A list of all reservations in the system.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                    <CalendarCheck className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">Reservation #{1000 + i}</p>
                                    <p className="text-sm text-muted-foreground">Customer: John Doe • Feb {10 + i}, 2026</p>
                                </div>
                                <span className={`rounded-full px-2 py-1 text-xs font-medium ${i % 3 === 0
                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    }`}>
                                    {i % 3 === 0 ? "Pending" : "Confirmed"}
                                </span>
                                <Button variant="ghost" size="sm">View</Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

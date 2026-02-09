import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Ticket, Clock, ArrowRight } from "lucide-react";

export default function ClientDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome Back!</h1>
                <p className="text-muted-foreground">
                    Manage your reservations and tickets from your personal dashboard.
                </p>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="group cursor-pointer transition-all hover:border-blue-500 hover:shadow-md">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                                <CalendarCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="mb-2">New Reservation</CardTitle>
                        <CardDescription>Book a new reservation for your upcoming event.</CardDescription>
                    </CardContent>
                </Card>

                <Card className="group cursor-pointer transition-all hover:border-green-500 hover:shadow-md">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                                <Ticket className="h-6 w-6 text-green-600" />
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="mb-2">View Tickets</CardTitle>
                        <CardDescription>Access your purchased tickets and QR codes.</CardDescription>
                    </CardContent>
                </Card>

                <Card className="group cursor-pointer transition-all hover:border-purple-500 hover:shadow-md">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                                <Clock className="h-6 w-6 text-purple-600" />
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="mb-2">History</CardTitle>
                        <CardDescription>View your past reservations and transactions.</CardDescription>
                    </CardContent>
                </Card>
            </div>

            {/* Upcoming Reservations */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Upcoming Reservations</CardTitle>
                            <CardDescription>Your next scheduled events.</CardDescription>
                        </div>
                        <Button variant="outline" asChild>
                            <Link href="/my-reservations">View All</Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                                <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                    <span className="text-xs font-medium text-blue-600">FEB</span>
                                    <span className="text-lg font-bold text-blue-600">{15 + i}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">Event Reservation #{i}</p>
                                    <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM • Main Hall</p>
                                </div>
                                <Button variant="ghost" size="sm">Details</Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

"use client"

import { BrandIcons } from "#/components/ui/brandIcons"
import { Button } from "#/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "#/components/ui/card"
import DynamicIcon from "#/components/ui/dynamicIcon"
import { Input } from "#/components/ui/input"
import { Label } from "#/components/ui/label"

export function DemoCreateAccount() {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        <BrandIcons.apple className="mr-2 h-4 w-4" />
                        Apple
                    </Button>
                    <Button variant="outline">
                        <BrandIcons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Create account</Button>
            </CardFooter>
        </Card>
    )
}

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import GoogleAuthButton from '../navigation/authButtons/google';
import FacebookAuthButton from '../navigation/authButtons/facebook';
import { getProviders } from "next-auth/react"
import clsx from 'clsx';


interface SignupCardProps {
    container?: string
}

const SignupCard = async ({ container }: SignupCardProps) => {
    const providers = await getProviders()
    return (
        <Card className={clsx(container && container)}>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    {providers?.google && <GoogleAuthButton providerId={providers.google.id} />}
                    {providers?.facebook && <FacebookAuthButton providerId={providers.facebook.id} />}
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


SignupCard.displayName = "SignupCard"


export default SignupCard;

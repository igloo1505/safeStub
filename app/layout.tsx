import clsx from 'clsx'
import '#/styles/global.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Toaster } from '#/components/ui/toaster'
import { Lexend_Giga } from 'next/font/google'
import appConfig from "#/data/appConfig.json"
import Notifications from '#/components/notifications/NotificationWrapper'
const lexand = Lexend_Giga({
    subsets: ['latin'],
    variable: "--font-lexand"
})


export const metadata: Metadata = {
    title: 'Safe Stub',
    description: 'Putting tickets back in fan\'s hands.',
}

const RootLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {
    const cookieJar = cookies()
    const darkMode = cookieJar.has("darkMode")
    return (
        <html lang="en"
            className={clsx("group/html overscroll-y-none", darkMode && "dark", lexand.variable)}
            suppressHydrationWarning
        >
            <head>
                <meta name="application-name" content="Safe Stub" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Safe Stub" />
                <meta name="description" content={appConfig.app.slogan} />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#030712" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://www.safestub.com" />
                <meta name="twitter:title" content="Safe Stub" />
                <meta name="twitter:description" content={appConfig.app.slogan} />
                <meta name="twitter:image" content="https://www.safestub.com/appIcons/icon-512.png" />
                <meta name="twitter:creator" content={appConfig.twitter.name} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={appConfig.app.title} />
                <meta property="og:description" content={appConfig.app.slogan} />
                <meta property="og:site_name" content={appConfig.app.title} />
                <meta property="og:url" content={appConfig.app.url} />
                <meta property="og:image" content={`${appConfig.app.url}/appIcons/apple-icon.png`} />
                <link rel="icon" href="/appIcons/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/appIcons/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content={appConfig.app.logoBg} />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, height=device-height'
                />
            </head>
            <body className={"group/body overscroll-y-none"}>
                {children}
                <Toaster />
                <Notifications />
            </body>
        </html>
    )
}



export default RootLayout

import clsx from 'clsx'
import '#/styles/global.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Toaster } from '#/components/ui/toaster'
import { Lexend_Giga } from 'next/font/google'
import appConfig from "#/data/appConfig.json"
import Script from 'next/script'
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
            /* className={clsx("group/html", darkMode && "dark")} */
            className={clsx("group/html", "dark", lexand.variable)}
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
                <meta name="twitter:image" content="https://www.safestub.com/appIcons/android-chrome-192x192.png" />
                <meta name="twitter:creator" content={appConfig.twitter.name} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={appConfig.app.title} />
                <meta property="og:description" content={appConfig.app.slogan} />
                <meta property="og:site_name" content={appConfig.app.title} />
                <meta property="og:url" content={appConfig.app.url} />
                <meta property="og:image" content={`${appConfig.app.url}/appIcons/apple-icon.png`} />
                <link href="/appIcons/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
                <link href="/appIcons/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
                <link href="/appIcons/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
                <link href="/appIcons/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
                <link href="/appIcons/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
                <link href="/appIcons/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
                <link href="/appIcons/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" />
                <link rel="apple-touch-icon" sizes="57x57" href="/appIcons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/appIcons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/appIcons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/appIcons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/appIcons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/appIcons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/appIcons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/appIcons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/appIcons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/appIcons/android-icon-192x192.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content={appConfig.app.logoBg} />
                <meta name="msapplication-TileImage" content="/appIcons/ms-icon-144x144.png" />
                <meta
                    name='viewport'
                    /* content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' */
                    content='minimum-scale=1, initial-scale=1, width=device-width, height=device-height, viewport-fit=cover'
                />
            </head>
            <body className={"group/body"}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}


export default RootLayout

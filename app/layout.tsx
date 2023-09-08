import clsx from 'clsx'
import '#/styles/global.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Script from 'next/script'
import { Toaster } from '#/components/ui/toaster'
import { Lexend_Giga } from 'next/font/google'
import { Providers } from './providers'
const lexand = Lexend_Giga({
    subsets: ['latin'],
    variable: "--font-lexand"
})

console.log("lexand: ", lexand)
/* className={inter.className} */

export const metadata: Metadata = {
    title: 'Safe Stub',
    description: 'The safe way to transfer tickets.',
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
            className={clsx("dark", lexand.variable)}
            suppressHydrationWarning
        >
            <body className={"group/body"}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}


export default RootLayout

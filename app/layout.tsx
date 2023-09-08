import clsx from 'clsx'
import '#/styles/global.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Toaster } from '#/components/ui/toaster'
import { Lexend_Giga } from 'next/font/google'
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
            <body className={"group/body"}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}


export default RootLayout

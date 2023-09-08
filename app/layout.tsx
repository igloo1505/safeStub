import clsx from 'clsx'
import '#/styles/global.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Script from 'next/script'
import { Toaster } from '#/components/ui/toaster'

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
            className={"dark"}
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

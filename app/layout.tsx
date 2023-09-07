import clsx from 'clsx'
import '#/styles/global.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Script from 'next/script'
import { Toaster } from '#/components/ui/toaster'
import { NextUIProvider } from '@nextui-org/react'

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
        <html lang="en" className={clsx("group/html", darkMode && "dark")}>
            <head>
                <Script id={"facebook-sdk-init"} async>
                    {`window.fbAsyncInit = function() {
    FB.init({
      appId      : '1297753057515059',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
`}</Script>
            </head>
            <NextUIProvider>
                <body className={"group/body"}>
                    {children}
                    <Toaster />
                </body>
            </NextUIProvider>
        </html>
    )
}


export default RootLayout

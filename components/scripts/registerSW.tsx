import Script from 'next/script';
import React from 'react'


const RegisterServiceWorker = () => {
    return (
        <Script id="register-sw">
            {`if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }`}
        </Script>
    )
}


RegisterServiceWorker.displayName = "RegisterServiceWorker"


export default RegisterServiceWorker;

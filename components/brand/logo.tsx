import { LockIcon, LucideProps, ShieldCheck } from 'lucide-react';
import React from 'react'


const Logo = (props: LucideProps) => {
    return (
        <ShieldCheck {...props} />
    )
}


Logo.displayName = "Logo"


export default Logo;

import React from 'react'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';


interface DynamicIconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name])
    return <LucideIcon {...props} />;
};


DynamicIcon.displayName = "DynamicIcon"


export default DynamicIcon;

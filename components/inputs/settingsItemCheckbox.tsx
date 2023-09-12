import { Checkbox } from '#/components/ui/checkbox'
import React from 'react'



interface SettingsItemCheckboxProps {
    label: string
    subtitle?: string
    name: string
    value: boolean
    onChange: () => void
}

const SettingsItemCheckbox = ({ label, name, subtitle, value, onChange }: SettingsItemCheckboxProps) => {

    return (
        <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
                <Checkbox
                    name={name}
                    checked={value}
                    onClick={onChange}
                />
            </div>
            <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900 dark:text-gray-200">
                    {label}
                </label>
                {subtitle && <p className="text-gray-500">{subtitle}</p>}
            </div>
        </div>
    )
}


SettingsItemCheckbox.displayName = "SettingsItemCheckbox"


export default SettingsItemCheckbox;

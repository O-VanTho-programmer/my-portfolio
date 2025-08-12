import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react'

type Props = {
    icon: 'Github' | 'Linkedin' | 'Mail',
    label: string,
    href: string,
    color_hover: string,
}

export default function SocialIcon({ icon, label, href, color_hover }: Props) {
    const IconComponent = {Github, Linkedin, Mail}[icon];

    return (
        <a
            href={href}
            aria-label={label}
            target={href.startsWith('#') ? undefined : '_blank'}
            rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
            className={`group w-16 h-16 rounded-2xl bg-blue-100 hover:bg-blue-200 border border-blue-200 flex items-center justify-center transition-all duration-300 ${color_hover} hover:scale-110`}
        >
            <IconComponent size={24} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
        </a>
    )
}
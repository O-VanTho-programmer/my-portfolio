import { Code, Globe, Palette, Zap, GitPullRequest } from 'lucide-react'
import React from 'react'

type Props = {
    icon: string,
    title: string,
    desc: string,
    color: string
}

export default function Skill({ icon, title, desc, color }: Props) {
    const IconComponent = { Code, Palette, Zap, Globe, GitPullRequest }[icon];
    return (
        <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className={`w-fit rounded-2xl bg-gradient-to-r ${color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {IconComponent && <IconComponent size={28} className="text-white" />}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
    )
}
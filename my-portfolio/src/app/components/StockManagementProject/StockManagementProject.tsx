import { Projects } from '@/models/Projects'
import { ExternalLink, Github, CheckCircle2, ScanText } from 'lucide-react' // Added ScanText icon
import React from 'react'

interface Props {
    project: Projects
}

export default function StockManagementProject({ project }: Props) {
    // We update features to include the Scanner
    const features = [
        "Automated Invoice Scanning (OCR)",
        "Low-Stock Alerts"
    ];

    return (
        <section className="w-full min-h-screen flex items-center justify-center py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Visual Side (Left) */}
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                            <img
                                className='w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700'
                                src={project.image}
                                alt={project.title}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                <a 
                                    href={project.liveUrl} 
                                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                                <a 
                                    href={project.githubUrl} 
                                    className="bg-gray-900 border border-gray-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all"
                                >
                                    <Github size={18} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Side (Right) */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
                        <div>
                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full mb-4">
                                {project.description}
                            </span>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                {project.title}
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.longDescription}
                            </p>
                        </div>

                        {/* --- NEW: Feature Spotlight Card --- */}
                        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-indigo-600">
                                <ScanText size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-indigo-900 text-base mb-1">
                                    Intelligent Invoice Scanner
                                </h4>
                                <p className="text-sm text-indigo-700 leading-relaxed">
                                    Integrated OCR technology to automatically parse uploaded physical invoices. This feature reduces manual data entry time by 80% and minimizes human error.
                                </p>
                            </div>
                        </div>
                        {/* ----------------------------------- */}

                        {/* Key Features List */}
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                                Core Functionalities
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-gray-100 text-gray-700 border border-gray-200 rounded-md text-xs font-semibold uppercase tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { Projects } from '@/models/Projects'
import { ExternalLink, Github } from 'lucide-react'
import React from 'react'

interface Props {
    project: Projects
}

export default function StockManagementProject({ project }: Props) {
    return (
        <section className="bg-blue-200 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-8 lg:px-16">
                {/* Visual */}
                <div className="space-y-6">
                    <div className="relative group">
                        <img
                            className='w-full h-72 md:h-96 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300'
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                                <a href={project.liveUrl} className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a href={project.githubUrl} className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
                                    <Github size={16} />
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 mb-3">Featured Project</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {project.title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <a href={project.liveUrl} className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                            View Live
                        </a>
                        <a href={project.githubUrl} className="px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { Projects } from "@/models/Projects"
import { CheckCircle2, Container, ExternalLink, Github } from "lucide-react"

export default function ClassManagementProject(project: Projects) {
    const features = [
        "Automated CI/CD Pipeline Deployment",
        "Real-time Notification System (SignalR)",
        "Conflict-Free Scheduling Algorithm",
        "Role-Based Access Control (RBAC)"
    ]

    return (
        <section className="w-full min-h-screen flex items-center justify-center py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual Side (Left) */}
                    <div className="order-2 lg:order-1 relative group">
                        {/* Gradient Glow Effect - Tech focused (Blue/Cyan) */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white aspect-video">
                            <img
                                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                                src={project.image}
                                alt={project.title}
                            />

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                <a
                                    href={project.liveUrl}
                                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all transform hover:scale-105"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    className="bg-slate-900 border border-slate-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all transform hover:scale-105"
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
                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4 border border-blue-100">
                                {project.description}
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                {project.title}
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.longDescription}
                            </p>
                        </div>

                        {/* --- FEATURE SPOTLIGHT (Technical/DevOps Focus) --- */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                                <Container size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-base mb-1">
                                    Containerized Architecture
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Fully containerized using <strong>Docker</strong> to ensure consistency across development and production environments. Integrated with <strong>GitHub Actions</strong> for automated testing and deployment.
                                </p>
                            </div>
                        </div>
                        {/* --------------------------------------------------------- */}

                        {/* Core Features List */}
                        <div className="border-t border-gray-100 pt-6">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                                Key Technical Features
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack Chips */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-white text-slate-600 border border-slate-200 rounded-md text-xs font-semibold uppercase tracking-wide hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-default"
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
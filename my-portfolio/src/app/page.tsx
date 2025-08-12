'use client';

import { Menu, Github, Linkedin, Mail, Code, Palette, Zap, Globe, ArrowRight, Download, X, ArrowUp } from "lucide-react";
import SocialIcon from "./components/SocialIcon/SocialIcon";
import Skill from "./components/Skill/Skill";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        isOpenNav &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpenNav(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenNav]);

  const [showGoTop, setShowGoTop] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setShowGoTop(window.pageYOffset > 50));
  }, [])

  return (
    <main className="min-h-screen bg-white text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
      </div>

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8">
        <div className="w-[120px]">
          <img src={'/logo_nobg.PNG'} alt="Logo" className="w-full" />
        </div>
        <button
          ref={buttonRef}
          onClick={() => setIsOpenNav((s) => !s)}
          aria-haspopup="true"
          aria-expanded={isOpenNav}
          aria-controls="main-menu"
          className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 relative"
        >
          {isOpenNav ? (
            <X size={22} className="text-blue-700 mx-auto" />
          ) : (
            <svg
              className="w-6 h-6 mx-auto text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}

          {isOpenNav && (
            <ul
              id="main-menu"
              ref={menuRef}
              className="absolute right-[80px] top-[45px] md:right-8 z-30 w-56 bg-white text-gray-800 shadow-2xl rounded-2xl border border-blue-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
              role="menu"
            >
              {[
                { href: '#projects', label: 'My Projects' },
                { href: '#education', label: 'Education' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href} role="none">
                  <a
                    role="menuitem"
                    href={item.href}
                    onClick={() => setIsOpenNav(false)}
                    className="block px-4 py-3 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </button>
      </nav>

      {showGoTop && (
        <button onClick={goToTop} className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-blue-400 to-cyan-400 text-white rounded-full shadow-lg
        hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
        transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 cursor-pointer">
          <ArrowUp/>
        </button>
      )}

      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 lg:px-16 pt-8 pb-20 min-h-[80vh]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 mb-16 lg:mb-0">

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-400 uppercase leading-none mb-4 tracking-tight" style={{
            WebkitTextStroke: '1px rgb(103 140 221)',
            WebkitTextFillColor: 'transparent'
          }}>
            WEB DEVELOPER
          </h1>

          <div className="ml-16">
            <p className="text-xl md:text-2xl mb-4 text-gray-600">
              👋 Hello there, I'm <strong className="text-gray-900">Van Tho</strong>
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-gray-800">
              Building <span className="text-blue-600">high-performance, results-driven</span> web applications
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              that are scalable, visually appealing, and optimized for exceptional user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 flex items-center gap-2">
                Contact With Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button className="group bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-full text-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 flex items-center gap-2" type="button">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-2xl opacity-40"></div>
            <img
              src="/Avata.jpg"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl shadow-xl object-cover border-4 border-white"
              alt="Van Tho - Web Developer"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 px-6 md:px-8 lg:px-16 py-20 bg-gray-50 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A selection of work that showcases problem solving, performance and polish</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-blue-100 to-cyan-100" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project {i}</h3>
                <p className="text-gray-600 mb-4">Short description of the project highlighting the stack and impact.</p>
                <a href="#contact" className="inline-flex items-center text-blue-700 font-medium group-hover:gap-2 transition-all">View more <ArrowRight size={18} className="ml-1" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Education */}
      <section id="education" className="relative z-10 px-6 md:px-8 lg:px-16 py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">Education</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Your University / Program</h3>
                <p className="text-gray-600">B.S. in Computer Science • 2019 – 2023</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200">Graduated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-6 md:px-8 lg:px-16 py-20 bg-gray-50 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I specialize in modern web technologies and frameworks that deliver exceptional user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'Code', title: "Frontend Development", desc: "React, Next.js, TypeScript, Tailwind CSS", color: "from-blue-500 to-blue-600" },
            { icon: 'Palette', title: "UI/UX Design", desc: "Responsive design, modern aesthetics, user-centered approach", color: "from-teal-500 to-teal-600" },
            { icon: 'Zap', title: "Performance", desc: "Optimization, SEO, fast loading times", color: "from-green-500 to-green-600" },
            { icon: 'Globe', title: "Full-Stack", desc: "Node.js, databases, API development", color: "from-blue-500 to-teal-600" },
          ].map((skill, index) => (
            <Skill key={index} icon={skill.icon} title={skill.title} color={skill.color} desc={skill.desc} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 md:px-8 lg:px-16 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <SocialIcon icon="Github" label="GitHub" href="#" color_hover="hover:bg-gray-800" />
          <SocialIcon icon="Linkedin" label="LinkedIn" href="#" color_hover="hover:bg-blue-600" />
          <SocialIcon icon="Mail" label="Email" href="#" color_hover="hover:bg-red-600" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-blue-200 bg-blue-50">
        <p className="text-blue-700">
          © 2024 Van Tho. Built with ❤️ and Next.js
        </p>
      </footer>
    </main>
  );
}

import React from 'react';
import {
  Code2,
  Database,
  Workflow,
  Server,
  Layers,
  Languages,
  Box,
  Terminal,
} from 'lucide-react';
import SkillRow from './SkillRow';

const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
  .paused {
    animation-play-state: paused;
  }
`;
export interface SkillItem {
  name: string;
  icon: string | React.ReactNode;
  isImage?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryIcon: React.ReactNode;
  skills: SkillItem[];
  disableAnimation?: boolean
  theme: SkillTheme;
}

interface SkillTheme {
  text: string;
  bg: string;
  border: string;
  iconColor: string;
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Language",
    categoryIcon: <Code2 className="w-8 h-8 text-blue-600" />,
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", isImage: true },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", isImage: true },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", isImage: true },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", isImage: true },
    ],
    theme: {
      text: "text-blue-700",
      bg: "hover:bg-blue-50",
      border: "hover:border-blue-500",
      iconColor: "text-blue-600 bg-blue-100",
    },
  },
  {
    title: "Frameworks",
    categoryIcon: <Layers className="w-8 h-8 text-cyan-500" />,
    skills: [
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", isImage: true },
      { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", isImage: true },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", isImage: true },
      { name: "Tailwind CSS", icon: "/tailwind-svgrepo-com.svg", isImage: true },
    ],
    theme: {
      text: "text-cyan-700",
      bg: "hover:bg-cyan-50",
      border: "hover:border-cyan-500",
      iconColor: "text-cyan-600 bg-cyan-100",
    },
  },
  {
    title: "Database",
    categoryIcon: <Database className="w-8 h-8 text-green-600" />,
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", isImage: true },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", isImage: true },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", isImage: true },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", isImage: true },
    ],
    theme: {
      text: "text-emerald-700",
      bg: "hover:bg-emerald-50",
      border: "hover:border-emerald-500",
      iconColor: "text-emerald-600 bg-emerald-100",
    }
  },
  {
    title: "DevOps & Cloud",
    categoryIcon: <Server className="w-8 h-8 text-orange-500" />,
    skills: [
      { name: "Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", isImage: true },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", isImage: true },
      { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", isImage: true },
      { name: "Linux (Ubuntu)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", isImage: true },
      { name: "Bash Script", icon: <Terminal className="w-12 h-12 text-gray-700" />, isImage: false },
    ],
    theme: {
      text: "text-orange-700",
      bg: "hover:bg-orange-50",
      border: "hover:border-orange-500",
      iconColor: "text-orange-600 bg-orange-100",
    }
  },
  {
    title: "Techniques & Tools",
    categoryIcon: <Workflow className="w-8 h-8 text-purple-600" />,
    skills: [
      { name: "OOP", icon: <Box className="w-12 h-12 text-purple-600" />, isImage: false },
      { name: "Design Patterns", icon: <Workflow className="w-12 h-12 text-blue-600" />, isImage: false },
      { name: "DSA", icon: <Code2 className="w-12 h-12 text-red-600" />, isImage: false },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", isImage: true },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", isImage: true },
    ],
    theme: {
      text: "text-purple-700",
      bg: "hover:bg-purple-50",
      border: "hover:border-purple-500",
      iconColor: "text-purple-600 bg-purple-100",
    }
  },
  {
    title: "Languages",
    categoryIcon: <Languages className="w-8 h-8 text-indigo-500" />,
    // disableAnimation: true, // Example: Uncomment this line to make this row static
    skills: [
      { name: "English (IELTS 6.5)", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg", isImage: true },
      { name: "Vietnamese (Native)", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg", isImage: true },
    ],
    theme: {
      text: "text-pink-700",
      bg: "hover:bg-pink-50",
      border: "hover:border-pink-500",
      iconColor: "text-pink-600 bg-pink-100",
    }
  },
];

// --- Main Component ---
const SkillsSection = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen flex flex-col items-center py-20">
      <style>{styles}</style>

      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Hover over each section to explore my technical expertise
        </p>
      </div>

      <div className="w-full bg-white shadow-xl border-y border-gray-200">
        {SKILLS_DATA.map((category, index) => (
          <SkillRow key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
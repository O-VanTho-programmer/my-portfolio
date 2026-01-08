import { Projects } from '@/models/Projects';
import React, { useState, useEffect, useRef } from 'react';
import StockManagementProject from '../StockManagementProject/StockManagementProject';
import CaloriesTracker from '../CaloriesTracker/CaloriesTracker';

// Project data configuration
const PROJECTS_DATA: Projects[] = [
  {
    id: 'project-1',
    title: 'Inventory & Warehouse Management System',
    description: 'A comprehensive full-stack solution for real-time inventory tracking and supply chain optimization.',
    longDescription: 'Designed and developed a scalable web application to digitize warehouse operations. The system features a real-time dashboard for stock monitoring, automated low-stock alert. I implemented a RESTful API architecture to ensure seamless data flow between the client and server, optimizing database queries to handle large datasets efficiently.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'MySql'],
    image: 'projects/project1.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    description: 'Developed a full-stack e-commerce solution with product listings, shopping cart functionality, secure checkout, and admin panel for inventory management. Built with modern web technologies.',
    longDescription: 'This platform integrates Stripe for payment processing and uses a microservices architecture for scalability.',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    image: 'projects/project1.png',
    liveUrl: '#',
    githubUrl: '#'
  },
];

// Custom hook for scroll animations
function useScrollAnimation() {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id || entry.target.className;
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set(prev).add(id));
          } else {
            setAnimatedElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsToObserve = document.querySelectorAll('.project-item-animated');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return animatedElements;
}

// Project component mapping
const PROJECT_COMPONENTS = {
  'StockManagement': StockManagementProject,
  'CaloriesTracker': CaloriesTracker
};

export default function ProjectSection() {
  const animatedElements = useScrollAnimation();
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation class helper
  const getAnimationClass = (projectId: string) => {
    const isVisible = animatedElements.has(projectId);
    return `w-full flex items-center justify-center transition-all duration-1000 ease-out project-item-animated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`;
  };

  const renderProjectComponent = (project: Projects, index: number) => {
    let ComponentType = null;

    switch (index) {
      case 0:
        ComponentType = PROJECT_COMPONENTS.StockManagement;
        break;
      case 1:
        ComponentType = PROJECT_COMPONENTS.CaloriesTracker;
        break;
    
      default:
        ComponentType = PROJECT_COMPONENTS.StockManagement;
        break;
    }

    return <ComponentType project={project} />;
  };

  return (
    <section
      id='projects'
      className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 w-full mt-8 h-fit min-h-screen"
    >
      <div className="h-full overflow-y-hidden custom-scrollbar scroll-smooth">
        {/* Header Section */}
        <div className='title w-full min-h-screen flex items-center justify-center px-4 py-6 md:p-8 transition-all duration-500 ease-out transform hover:scale-[1.005]'>
          <h1 className="text-6xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MY WORKS.
          </h1>
        </div>

        {/* Project Items */}
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => { projectRefs.current[index] = el; }}
            id={`proj-${index + 1}`}
            className={getAnimationClass(`proj-${index + 1}`)}
          >
            {renderProjectComponent(project, index)}
          </div>
        ))}
      </div>
    </section>
  );
}
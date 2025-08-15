import { Projects } from '@/models/Projects';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react'
import StockManagementProject from '../StockManagementProject/StockManagementProject';
import CaloriesTracker from '../CaloriesTracker/CaloriesTracker';

const projectsData: Projects[] = [
    {
        id: 'project-1',
        title: 'Interactive Dashboard',
        description: 'A responsive web application dashboard built with React and D3.js, featuring real-time data visualization, customizable widgets, and user authentication. It allows users to track key performance indicators and generate reports.',
        longDescription: 'This project involved complex state management, API integration, and performance optimization for large datasets. I focused on creating an intuitive user interface and ensuring cross-browser compatibility. Technologies used include React, Redux, D3.js, Node.js, Express, and MongoDB.',
        techStack: ['React', 'Redux', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
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
    {
        id: 'project-3',
        title: 'Mobile Recipe App',
        description: 'A cross-platform mobile application for discovering, saving, and managing recipes. Features include ingredient search, meal planning, and offline access. Developed using React Native.',
        longDescription: 'The app provides a seamless user experience across iOS and Android devices. It incorporates a powerful search algorithm, allowing users to find recipes by ingredients, cuisine, or dietary preferences. Favorite recipes can be saved locally, and users can create custom meal plans. Technologies: React Native, Firebase, Expo.',
        techStack: ['React Native', 'Firebase', 'Expo', 'JavaScript'],
        image: 'projects/project1.png',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 'project-4',
        title: 'AI Chatbot Integration',
        description: 'Integrated a custom-trained AI chatbot into an existing customer support portal, enhancing user interaction and automating common queries. Utilized natural language processing.',
        longDescription: 'This project focused on improving customer service efficiency by deploying a conversational AI. The chatbot can handle FAQs, guide users through troubleshooting steps, and escalate complex issues to human agents. Natural Language Understanding (NLU) was crucial for accurate intent intent recognition. Technologies: Python, Flask, TensorFlow, Dialogflow, React.',
        techStack: ['Python', 'Flask', 'TensorFlow', 'Dialogflow', 'React', 'NLP'],
        image: 'projects/project1.png',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 'project-5',
        title: 'Game Development Project',
        description: 'Developed a 2D platformer game using JavaScript and HTML Canvas. Features include character animation, collision detection, and multiple levels. Focused on game mechanics and performance.',
        longDescription: 'This retro-style platformer emphasizes engaging gameplay and smooth mechanics. I designed all the level layouts, character sprites, and sound effects. The game engine was custom-built, demonstrating a deep understanding of core game development principles. Technologies: JavaScript, HTML Canvas, Web Audio API.',
        techStack: ['JavaScript', 'HTML Canvas', 'Web Audio API', 'Game Development'],
        image: 'projects/project1.png',
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 'project-6',
        title: 'Personal Portfolio Website',
        description: 'The very website you are viewing! Designed and developed to showcase my skills, projects, and educational background. Focus on responsiveness and modern UI/UX principles.',
        longDescription: 'This portfolio site is a testament to my front-end development capabilities. It features smooth scrolling, interactive elements, and a clean, minimalist design. I paid close attention to accessibility and performance optimization to ensure a positive user experience. Technologies: React, Tailwind CSS, Framer Motion (for animations).',
        techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js'],
        image: 'projects/project1.png',
        liveUrl: '#',
        githubUrl: '#'
    },
];

export default function ProjectSection() {

    const stockManagementProjectData = projectsData[0];
    const caloriesTrackerData = projectsData[1];

    return (
        <section
            id='projects'
            className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 w-full mt-8 h-screen 
             overflow-y-scroll p-4 md:p-6 bg-gray-50 custom-scrollbar"
        >
            {/* Header */}
            <div className='title w-full min-h-screen sticky top-0 flex items-center justify-center
            px-4 py-6 md:p-8 transition-all duration-300 ease-in-out transform hover:scale-[1.005]'
            >
                <h1 className="text-9xl font-extrabold">
                    MY WORKS.
                </h1>
            </div>

            <div id="proj-1" // Important for scroll-based navigation or direct linking
                className="sticky mx-auto w-[70%] px-4 py-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200
                 transition-all duration-300 ease-in-out transform hover:scale-[1.005]"
                style={{ top: `20px`, zIndex: 1 }}
            >
                <StockManagementProject project={stockManagementProjectData} />

            </div>

            <div id="proj-2" // Important for scroll-based navigation or direct linking
                className="sticky mx-auto w-[80%] px-4 py-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200
                 transition-all duration-300 ease-in-out transform hover:scale-[1.005]"
                style={{ top: `20px`, zIndex: 2 }}
            >
                <CaloriesTracker project={caloriesTrackerData} />
            </div>

            <div id="proj-3" // Important for scroll-based navigation or direct linking
                className="sticky mx-auto w-full px-4 py-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200
                 transition-all duration-300 ease-in-out transform hover:scale-[1.005]"
                style={{ top: `20px`, zIndex: 3 }}
            >
                <StockManagementProject project={stockManagementProjectData} />

            </div>

            <div id="proj-4" // Important for scroll-based navigation or direct linking
                className="sticky mx-auto w-full px-4 py-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200
                 transition-all duration-300 ease-in-out transform hover:scale-[1.005]"
                style={{ top: `20px`, zIndex: 4 }}
            >
                <CaloriesTracker project={caloriesTrackerData} />
            </div>
        </section>
    )
}
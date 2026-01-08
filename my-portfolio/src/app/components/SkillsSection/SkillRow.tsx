import ScrollingSkills from "./ScrollingSkills";
import { SkillCategory } from "./SkillsSection";

export default function SkillRow({ category }: { category: SkillCategory }) {

    const { theme } = category;

    return (
        <div className={`group relative w-full bg-white border-b border-gray-200 overflow-hidden transition-all duration-500 ease-in-out h-24 hover:h-64 hover:border-l-8 ${theme.bg} ${theme.border}`}>

            <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:blur-md group-hover:scale-110">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${theme.iconColor}`}>
                    {category.categoryIcon}
                </div>
                <h3 className={`text-2xl font-bold tracking-tight text-gray-800 group-hover:${theme.text} transition-colors duration-300`}>
                    {category.title}
                </h3>
            </div>

            <div className="absolute inset-0 flex items-center opacity-0 transition-opacity duration-700 ease-in-out delay-100 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <div className="w-full relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <ScrollingSkills skills={category.skills} />
                </div>
            </div>

        </div>
    );
};

import { SkillItem } from "./SkillsSection";

export default function ScrollingSkills({ skills }: { skills: SkillItem[] }) {
    const seamlessSkills = [...skills, ...skills, ...skills, ...skills];

    return (
        <div className="flex overflow-hidden w-full mask-linear-fade">
            <div className="flex animate-scroll hover:paused gap-16 py-4 items-center">
                {seamlessSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 min-w-[120px] transition-transform hover:scale-110 cursor-pointer"
                    >
                        <div className="h-20 w-20 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                            {skill.isImage ? (
                                <img
                                    src={skill.icon as string}
                                    alt={skill.name}
                                    className="h-full w-full object-contain"
                                />
                            ) : (
                                <div className="scale-125">
                                    {skill.icon}
                                </div>
                            )}
                        </div>
                        <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
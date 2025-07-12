import Image from "next/image";
import Link from "next/link";
import { skill } from "./SkillsList";
interface skillProps {
  skill: skill;
}
export const SkillCard = ({ skill }: skillProps) => {
  return (
    <Link href={skill.link}>
      <div className="flex flex-col items-center justify-center gap-4 h-24 w-24 border border-gray-600 rounded-2xl p-4 bg-black-100">
        <Image src={skill.icon} width={32} height={32} alt="skill-image" />
        <h1 className="text-xs text-center">{skill.title}</h1>
      </div>
    </Link>
  );
};

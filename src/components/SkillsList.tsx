import Image from "next/image";
import { SkillCard } from "./SkillCard";
export interface skill {
  title: string;
  icon: string;
  link: string;
}
interface skillsListProps {
  skills: skill[];
}
export const SkillsList = ({ skills }: skillsListProps) => {
  return (
    <div className="grid max-md:grid-cols-3 grid-cols-4 gap-4">
      {skills.map((skill, id) => (
        <SkillCard skill={skill} key={id} />
      ))}
    </div>
  );
};

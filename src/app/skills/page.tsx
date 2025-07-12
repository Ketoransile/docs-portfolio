"use client";
import Image from "next/image";

const skills = [
  { title: "HTML", icon: "/techIcons/html.svg" },
  { title: "CSS", icon: "/techIcons/css.svg" },
  { title: "JavaScript", icon: "/techIcons/javascript.svg" },
  { title: "TypeScript", icon: "/techIcons/typescript.svg" },
  { title: "ReactJS", icon: "/techIcons/react.svg" },
  { title: "NextJS", icon: "/techIcons/next.svg" },
  { title: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
  { title: "shadcn/ui", icon: "/techIcons/material.svg" },
  { title: "NodeJS", icon: "/techIcons/node.svg" },
  { title: "ExpressJS", icon: "/techIcons/express-js.svg" },
  { title: "MongoDB", icon: "/techIcons/mongodb.svg" },
  { title: "Git", icon: "/toolsImage/git.svg" },
  { title: "GitHub", icon: "/toolsImage/github.svg" },
  { title: "Vercel", icon: "/toolsImage/vercel.svg" },
  { title: "Figma", icon: "/toolsImage/figma.svg" },
  { title: "NPM", icon: "/toolsImage/npm.svg" },
  { title: "Vite", icon: "/toolsImage/vite.svg" },
  { title: "VS Code", icon: "/toolsImage/vscode.svg" },
  { title: "Python", icon: "/techIcons/python.svg" },
  { title: "C++", icon: "/techIcons/cpp.svg" },
];

export default function Skills() {
  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-foreground tracking-tight">Skills &amp; Tools</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-muted-foreground tracking-tight">
        Learned by building, breaking, and rebuilding—again and again!
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-full font-medium">
        As a full-stack developer, I thrive on turning ideas into robust digital products. My toolkit spans from intuitive frontends with React and Next.js to scalable backends with Node.js, Express, and MongoDB. I'm always exploring new technologies and best practices to deliver seamless, high-performance solutions.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 w-full">
        {skills.map((skill) => (
          <span key={skill.title} className="flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl bg-card border border-border text-card-foreground font-semibold text-base shadow-md hover:shadow-lg transition-shadow hover:border-fuchsia-500 hover:bg-fuchsia-950/10 cursor-pointer w-full">
            <Image src={skill.icon} alt={skill.title} width={32} height={32} className="mb-2" />
            <span className="text-center">{skill.title}</span>
          </span>
        ))}
      </div>
      <div className="w-full max-w-full mt-8 ">
        <div className="text-base font-semibold text-foreground mb-2">skills.ts</div>
        <pre className="bg-card rounded-lg p-4 text-sm text-card-foreground overflow-x-auto border border-border w-full">
          <code>{`const mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Tailwind CSS",
  "shadcn/ui", "NodeJS", "ExpressJS", "MongoDB", "Git", "GitHub", "Vercel",
  "Figma", "NPM", "Vite", "VS Code", "Python", "C++"
];

const getSkills = () => {
  return mySkills.length > 0
    ? mySkills.join(", ")
    : "No skills found.";
};`}</code>
        </pre>
      </div>
      <div className="flex justify-between items-center mt-8">
        <a href="/projects" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">&lt; Projects</a>
        <a href="/experience" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">Experience &gt;</a>
      </div>
    </section>
  );
}

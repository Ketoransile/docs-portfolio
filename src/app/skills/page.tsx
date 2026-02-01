"use client";
import Image from "next/image";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const techSkills = [
  // Frontend Web
  { title: "HTML", icon: "/techIcons/html.svg" },
  { title: "CSS", icon: "/techIcons/css.svg" },
  { title: "JavaScript", icon: "/techIcons/javascript.svg" },
  { title: "TypeScript", icon: "/techIcons/typescript.svg" },
  { title: "React", icon: "/techIcons/react.svg" },
  { title: "Next.js", icon: "/techIcons/next.svg" },
  { title: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
  { title: "Material UI", icon: "/techIcons/material.svg" },
  // Backend Web
  { title: "Node.js", icon: "/techIcons/node.svg" },
  { title: "Express.js", icon: "/techIcons/express-js.svg" },
  { title: "MongoDB", icon: "/techIcons/mongodb.svg" },
  { title: "PostgreSQL", icon: "/techIcons/postgresql.svg" },
  { title: "Supabase", icon: "/techIcons/supabase.svg" },
  { title: "Stripe", icon: "/techIcons/stripe.png" },
  // Mobile & Others
  { title: "React Native", icon: "/techIcons/react.svg" },
  { title: "Expo", icon: "/techIcons/expo.svg" },
  { title: "Python", icon: "/techIcons/python.svg" },
  { title: "C++", icon: "/techIcons/cpp.svg" },
];

const tools = [
  { title: "Figma", icon: "/toolsImage/figma.svg" },
  { title: "Git", icon: "/toolsImage/git.svg" },
  { title: "GitHub", icon: "/toolsImage/github.svg" },
  { title: "Netlify", icon: "/toolsImage/netlify.svg" },
  { title: "npm", icon: "/toolsImage/npm.svg" },
  { title: "Vercel", icon: "/toolsImage/vercel.svg" },
  { title: "Vite", icon: "/toolsImage/vite.svg" },
  { title: "VSCode", icon: "/toolsImage/vscode.svg" },
];

export default function Skills() {
  const codeString = `const techSkills = [${techSkills.map(s => '"' + s.title + '"').join(", ")}];\nconst tools = [${tools.map(t => '"' + t.title + '"').join(", ")}];`;

  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 tracking-tight">Skills & Tools</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-neutral-400 tracking-tight">
        Learned by building, breaking, and rebuilding—again and again!
      </h2>
      <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-full font-medium leading-relaxed">
        As a full-stack developer, I thrive on turning ideas into robust digital products. My toolkit spans from intuitive frontends with React and Next.js to scalable backends with Node.js, Express, and MongoDB. I'm always exploring new technologies and best practices to deliver seamless, high-performance solutions.
      </p>

      <h3 className="text-2xl font-bold mb-6 mt-12 text-white border-b border-neutral-800 pb-2">Tech Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 w-full">
        {techSkills.map((skill) => (
          <div key={skill.title} className="group relative flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/80 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1 cursor-pointer w-full">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image src={skill.icon} alt={skill.title} fill className="object-contain" />
            </div>
            <span className="text-center font-medium text-neutral-200 group-hover:text-blue-400 transition-colors">{skill.title}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-6 mt-12 text-white border-b border-neutral-800 pb-2">Tools</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 w-full">
        {tools.map((tool) => (
          <div key={tool.title} className="group relative flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/80 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 cursor-pointer w-full">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image src={tool.icon} alt={tool.title} fill className="object-contain" />
            </div>
            <span className="text-center font-medium text-neutral-200 group-hover:text-purple-400 transition-colors">{tool.title}</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-full mt-12">
        <div className="text-sm font-mono text-neutral-400 mb-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2">skills.ts</span>
        </div>
        <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{ margin: 0, padding: '1.5rem', background: '#0a0a0a' }}
            showLineNumbers={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="flex justify-between items-center mt-16 pt-8 border-t border-neutral-800">
        <a href="/projects" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
          <span className="transform group-hover:-translate-x-1 transition-transform">&lt;</span> Projects
        </a>
        <a href="/experience" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
          Experience <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
        </a>
      </div>
    </section>
  );
}

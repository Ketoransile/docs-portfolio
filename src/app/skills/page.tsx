"use client";
import Image from "next/image";

const techSkills = [
  { title: "C++", icon: "/techIcons/cpp.svg" },
  { title: "CSS", icon: "/techIcons/css.svg" },
  { title: "Express.js", icon: "/techIcons/express-js.svg" },

  { title: "HTML", icon: "/techIcons/html.svg" },
  { title: "JavaScript", icon: "/techIcons/javascript.svg" },
  { title: "Material UI", icon: "/techIcons/material.svg" },
  { title: "MongoDB", icon: "/techIcons/mongodb.svg" },
  { title: "Next.js", icon: "/techIcons/next.svg" },

  { title: "Node.js", icon: "/techIcons/node.svg" },
  { title: "PostgreSQL", icon: "/techIcons/postgresql.svg" },
  { title: "Python", icon: "/techIcons/python.svg" },
  { title: "React", icon: "/techIcons/react.svg" },
  { title: "Stripe", icon: "/techIcons/stripe.png" },
  { title: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
  { title: "TypeScript", icon: "/techIcons/typescript.svg" },
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
  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-foreground tracking-tight">Skills &amp; Tools</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-muted-foreground tracking-tight">
        Learned by building, breaking, and rebuilding—again and again!
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-full font-medium">
        As a full-stack developer, I thrive on turning ideas into robust digital products. My toolkit spans from intuitive frontends with React and Next.js to scalable backends with Node.js, Express, and MongoDB. I'm always exploring new technologies and best practices to deliver seamless, high-performance solutions.
      </p>
      <h3 className="text-xl font-bold mb-4 mt-8 text-foreground">Tech Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 w-full">
        {techSkills.map((skill) => (
          <span key={skill.title} className="flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl bg-card border border-border text-card-foreground font-semibold text-base shadow-md hover:shadow-lg transition-shadow hover:border-fuchsia-500 hover:bg-fuchsia-950/10 cursor-pointer w-full">
            <Image src={skill.icon} alt={skill.title} width={32} height={32} className="mb-2" />
            <span className="text-center">{skill.title}</span>
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4 mt-8 text-foreground">Tools</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 w-full">
        {tools.map((tool) => (
          <span key={tool.title} className="flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl bg-card border border-border text-card-foreground font-semibold text-base shadow-md hover:shadow-lg transition-shadow hover:border-blue-500 hover:bg-blue-950/10 cursor-pointer w-full">
            <Image src={tool.icon} alt={tool.title} width={32} height={32} className="mb-2" />
            <span className="text-center">{tool.title}</span>
          </span>
        ))}
      </div>
      <div className="w-full max-w-full mt-8 ">
        <div className="text-base font-semibold text-foreground mb-2">skills.ts</div>
        <pre className="bg-card rounded-lg p-4 text-sm text-card-foreground overflow-x-auto border border-border w-full">
          <code>{`const techSkills = [${techSkills.map(s => '"' + s.title + '"').join(", ")}];\nconst tools = [${tools.map(t => '"' + t.title + '"').join(", ")}];`}</code>
        </pre>
      </div>
      <div className="flex justify-between items-center mt-8">
        <a href="/projects" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">&lt; Projects</a>
        <a href="/experience" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">Experience &gt;</a>
      </div>
    </section>
  );
}

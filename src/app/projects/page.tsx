import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface Project {
  title: string;
  description: string;
  img: string;
  tech: string[];
  live?: string;
  github?: string;
  backend?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "An innovative web application that leverages AI (GPT-5) to analyze resumes against job descriptions, providing instant fit scores and actionable feedback to optimize job applications.",
    img: "/projectsPictures/resumeAnalyzer.png",
    tech: [
      "/techIcons/next.svg",
      "/techIcons/typescript.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/node.svg",
      "/techIcons/express.svg",
      "/techIcons/openai.svg",
    ],
    live: "https://elevatcv.vercel.app/",
    github: "https://github.com/Ketoransile/ResumeAnalyzerFrontend",
    backend: "https://github.com/Ketoransile/ResumeAnalyzerBackend",
  },
  {
    title: "Ethio Shop Ecommerce",
    description:
      "A sleek and scalable ecommerce app built with modern tools like Next.js and Stripe. Features include product browsing, secure checkout, and responsive performance for a smooth shopping experience.",
    img: "/projectsPictures/ethioShop.png",
    tech: [
      "/techIcons/next.svg",
      "/techIcons/typescript.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/stripe.png",
      "/techIcons/mongodb.svg",
    ],
    live: "https://ethio-shop.vercel.app/",
    github: "https://github.com/Ketoransile/EthioShop",
  },
  {
    title: "Drivezy Car Rental",
    description:
      "A comprehensive car‑rental platform built with Vite, React, and TypeScript. Users can browse the fleet, filter cars by make, model, price, or features, and place bookings through a fast, responsive interface backed by a secure Node/Express API and MongoDB database.",
    img: "/projectsPictures/drivezyCarRental.png",
    tech: [
      "/techIcons/react.svg",
      "/techIcons/typescript.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/node.svg",
      "/techIcons/express.svg",
    ],
    live: "https://drivezy-car-rental.vercel.app/",
    github: "https://github.com/Ketoransile/CarRental",
  },
  {
    title: "NextJobs",
    description:
      "A modern job application platform built with Next.js and a Node.js/Express backend. Users can browse job listings, filter by category or location, and apply directly with an intuitive and responsive interface.",
    img: "/projectsPictures/nextJobs.png",
    tech: [
      "/techIcons/next.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/typescript.svg",
      "/techIcons/node.svg",
      "/techIcons/javascript.svg",
      "/techIcons/express.svg",
    ],
    live: "https://job-portal-omega-flame.vercel.app/",
    github: "https://github.com/Ketoransile/JobPortal",
  },
  {
    title: "Bet Real Estate Platform",
    description:
      "A dynamic real estate platform built with the MERN stack. Enables users to explore properties, connect with agents, and manage listings through a clean, responsive interface and robust backend.",
    img: "/projectsPictures/betRealEstate.png",
    tech: [
      "/techIcons/react.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/express-js.svg",
      "/techIcons/javascript.svg",
    ],
    live: "https://bet-real-estate.vercel.app/",
    github: "https://github.com/Ketoransile/Bet-Real-EstateProject",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col md:flex-row bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full mb-8 hover:-translate-y-1 hover:border-blue-500/30">
      <div className="w-full md:w-64 h-48 md:h-auto mb-6 md:mb-0 md:mr-8 relative rounded-xl overflow-hidden border border-neutral-800 bg-black flex-shrink-0 group-hover:scale-[1.02] transition-transform duration-500">
        <Image
          src={project.img}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h2>
          <p className="text-base text-neutral-400 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((icon: string, idx: number) => (
              <div
                key={idx}
                className="bg-neutral-800/50 p-2 rounded-lg border border-neutral-700/50"
                title={icon.split("/").pop()?.split(".")[0]}
              >
                <Image
                  src={icon}
                  alt="tech"
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-6 mt-2 text-sm font-semibold">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600/20 hover:border-blue-600/50 transition-all flex items-center gap-2"
            >
              <span>Deployed App</span>
              <span className="text-xs">↗</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all flex items-center gap-2"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          )}
          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all flex items-center gap-2"
            >
              <span>Backend</span>
              <span className="text-xs">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const codeString = `export const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    description: "Analyzes resumes against job descriptions using GPT-5.",
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    live: "https://quantumcv.vercel.app/",
  },
  {
    title: "Ethio Shop Ecommerce",
    description: "Full-stack ecommerce with Stripe payments.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    live: "https://ethio-shop.vercel.app/",
  },
  {
    title: "Drivezy Car Rental",
    description: "Car booking platform with complex filtering.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://drivezy-car-rental.vercel.app/",
  },
  // ... more projects
];`;

  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 tracking-tight">
        Projects
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-neutral-400 tracking-tight">
        A lot of ideas, but{" "}
        <span className="text-blue-400">
          some are still under construction!
        </span>
      </h2>
      <div className="flex flex-col gap-6 mb-16 w-full">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="w-full max-w-3xl mb-12">
        <div className="text-sm font-mono text-neutral-400 mb-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2">projects.ts</span>
        </div>
        <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "#0a0a0a",
            }}
            showLineNumbers={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="flex justify-between items-center mt-16 pt-8 border-t border-neutral-800">
        <a
          href="/about"
          className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            &lt;
          </span>{" "}
          About Me
        </a>
        <a
          href="/skills"
          className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group"
        >
          Skills & Tools{" "}
          <span className="transform group-hover:translate-x-1 transition-transform">
            &gt;
          </span>
        </a>
      </div>
    </section>
  );
}

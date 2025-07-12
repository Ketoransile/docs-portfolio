import Image from "next/image";

interface Project {
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
      "An innovative web application that leverages AI (GPT-4.1) to analyze resumes against job descriptions, providing instant fit scores and actionable feedback to optimize job applications.",
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
    live: "https://quantumcv.vercel.app/",
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
    title: "Food Delivery App",
    description:
      "A modern food delivery platform using Next.js with SSR and SSG. Users can browse restaurants, view menus, and place orders through a smooth and responsive interface designed for performance.",
    img: "/projectsPictures/foodDelivery.png",
    tech: [
      "/techIcons/next.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/typescript.svg",
    ],
    live: "https://food-delivery-nextjs-gamma.vercel.app/",
    github: "https://github.com/Ketoransile/FoodDeliveryNextjs",
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
  {
    title: "YourNote - Note Taking Web App",
    description:
      "YourNote is a sleek, responsive web app for creating and managing notes effortlessly, backed by a reliable and robust backend",
    img: "/projectsPictures/yourNote.png",
    tech: [
      "/techIcons/react.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/express-js.svg",
      "/techIcons/javascript.svg",
    ],
    live: "https://yournote-3pnr.onrender.com",
    github: "https://github.com/Ketoransile/YourNote",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row bg-card border border-border rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 h-full mb-6">
      <div className="w-full md:w-56 h-40 md:h-32 mb-4 md:mb-0 md:mr-6 relative rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center flex-shrink-0">
        <Image src={project.img} alt={project.title} fill style={{objectFit:'cover'}} className="rounded-lg" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-1">{project.title}</h2>
          <p className="text-[0.95rem] text-muted-foreground mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((icon: string, idx: number) => (
              <Image key={idx} src={icon} alt="tech" width={20} height={20} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-2 text-[0.9rem]">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Live</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline font-medium">GitHub</a>
          )}
          {project.backend && (
            <a href={project.backend} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline font-medium">Backend</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-foreground tracking-tight">Projects</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-muted-foreground tracking-tight">
        A lot of ideas, but some are still under construction!
      </h2>
      <div className="flex flex-col gap-4 mb-12 w-full">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="w-full max-w-full mt-8 ">
        <div className="text-base font-semibold text-white mb-2">projects.ts</div>
        <pre className="bg-zinc-900 rounded-lg p-4 text-sm text-zinc-200 overflow-x-auto border border-zinc-800 w-full">
          <code>{`export const projects = [
  // ...your project data here
];`}</code>
        </pre>
      </div>
      <div className="flex justify-between items-center mt-8">
        <a href="/about" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">&lt; About Me</a>
        <a href="/skills" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">Skills & Tools &gt;</a>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Experience {
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description?: string;
  skills: string;
  logo: string;
}

const workExperience: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Information Network Security Agency",
    type: "Internship",
    date: "Jul 2025 – Sep 2025 · 3 months",
    location: "Addis Ababa, Ethiopia · On-site",
    description: "Built a microservice-oriented inventory management application with a React frontend during my Software Developer Internship at INSA.",
    skills: "",
    logo: "/insa_logo.png", // Replace with actual logo if available, else use a placeholder
  },
  {
    title: "Full Stack Engineer",
    company: "Ministry of Innovation And Technology - Ethiopia",
    type: "Internship",
    date: "Jul 2024 – Sep 2024 · 3 months",
    location: "Addis Ababa, Ethiopia · On-site",
    description:
      "Developed a scalable real estate website using the MERN stack during a two-month internship. Spearheaded both frontend and backend development, enhancing UI/UX with React and Material-UI while optimizing performance and security.",
    skills: "",
    logo: "/mit_logo.png", // Replace with actual logo if available, else use a placeholder
  },
];

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 mb-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1">
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-neutral-800 shadow-inner">
        <Image src={exp.logo} alt={exp.company} width={48} height={48} className="object-contain" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
          <h2 className="text-xl font-bold text-white mr-2">{exp.title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-medium">@ {exp.company}</span>
            <span className="px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-400 font-medium whitespace-nowrap">{exp.type}</span>
          </div>
        </div>
        <div className="text-neutral-500 text-sm mb-1 font-mono">{exp.date}</div>
        <div className="text-neutral-500 text-sm mb-4">{exp.location}</div>
        {exp.description && (
          <div className="text-neutral-300 text-base leading-relaxed max-w-4xl">{exp.description}</div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const codeString = `const careers = [
  { role: "Intern", company: "INSA" },
  { role: "Intern", company: "MinT" }
];`;

  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 tracking-tight" style={{ fontFamily: 'var(--font-geist-sans)' }}>Experience</h1>

      <div className="w-full mb-12">
        {workExperience.map((exp: Experience) => (
          <ExperienceCard key={exp.title + exp.company} exp={exp} />
        ))}
      </div>

      <div className="w-full max-w-3xl mb-12">
        <div className="text-sm font-mono text-neutral-400 mb-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2">career.ts</span>
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
        <a href="/skills" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
          <span className="transform group-hover:-translate-x-1 transition-transform">&lt;</span> Skills & Tools
        </a>
        <a href="/education" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
          Education <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
        </a>
      </div>
    </section>
  );
}

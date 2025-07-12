import Image from "next/image";

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
    date: "Jul 2025 – Present · 1 mo",
    location: "Addis Ababa, Ethiopia · On-site",
    description: undefined,
    skills: "",
    logo: "/insa_logo.png", // Replace with actual logo if available, else use a placeholder
  },
  {
    title: "Full Stack Engineer",
    company: "Ministry of Innovation And Technology - Ethiopia",
    type: "Internship",
    date: "Jul 2024 – Sep 2024 · 3 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    description:
      "Developed a scalable real estate website using the MERN stack during a two-month internship. Spearheaded both frontend and backend development, enhancing UI/UX with React and Material-UI while optimizing performance and security.",
    skills: "",
    logo: "/mit_logo.png", // Replace with actual logo if available, else use a placeholder
  },
];

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 mb-8 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow ">
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-background rounded-lg border border-border">
        <Image src={exp.logo} alt={exp.company} width={48} height={48} className="object-contain rounded" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
          <h2 className="text-lg font-bold text-foreground mr-2">{exp.title}</h2>
          <span className="text-muted-foreground font-medium">{exp.company}</span>
          <span className="text-secondary text-sm ml-2">· {exp.type}</span>
        </div>
        <div className="text-secondary text-sm mb-1">{exp.date}</div>
        <div className="text-secondary text-sm mb-2">{exp.location}</div>
        {exp.description && (
          <div className="text-muted-foreground text-base mb-2">{exp.description}</div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="pt-10 pb-20 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-foreground tracking-tight" style={{fontFamily:'var(--font-geist-sans)'}}>Experience</h1>
      <div className="w-full">
      {workExperience.map((exp: Experience) => (
        <ExperienceCard key={exp.title + exp.company} exp={exp} />
      ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <a href="/skills" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">&lt; Skills & Tools</a>
        <a href="/education" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">Education &gt;</a>
      </div>
    </section>
  );
}

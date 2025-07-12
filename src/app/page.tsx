import Link from "next/link";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="pt-10 pb-20 min-h-[80vh] flex flex-col gap-10">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-foreground tracking-tight">
          Abdi Worku
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 text-muted-foreground tracking-tight">A coder by day, problem-solver by night!</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-full mb-10 font-medium">
          I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, and Tailwind CSS. I am always expanding my skills and aiming to deliver comprehensive, user-centric software solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
          <a
            href="https://drive.google.com/file/d/1fqCcDc2Rbrd-mviQbuoKTI1LBxO5p0Kk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Get Resume <FaExternalLinkAlt className="text-sm sm:text-base" />
          </a>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-neutral-600 hover:bg-neutral-700 text-foreground text-base sm:text-lg transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
          >
            <FaEnvelope className="text-base sm:text-lg" /> Send Mail
          </a>
        </div>
        <div className="mb-8 w-full">
          <div className="text-base font-semibold text-foreground mb-2">welcome.ts</div>
          <pre className="bg-card rounded-lg p-4 text-sm text-card-foreground overflow-x-auto border border-border w-full">
            <code>
{`// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to my portfolio!" }, { status: 200 });
}`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div></div>
        <a href="/about" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">About Me &gt;</a>
      </div>
    </section>
  );
}

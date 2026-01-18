import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Home() {
  const codeString = `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to my portfolio!" }, { status: 200 });
}`;

  return (
    <section className="pt-12 pb-24 min-h-[80vh] flex flex-col justify-center gap-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text Section */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 relative z-10">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium text-sm mb-4">
              👋 Welcome to my digital space
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 tracking-tight leading-[1.1]">
              Abdi Worku
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-400 tracking-tight">
              Coder by day, <span className="text-blue-400">Builder</span> by night.
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
            A dedicated Software Engineer crafting responsive web solutions with <span className="text-white font-medium">Next.js, React, and Tailwind CSS</span>.
            Specializing in scalable backend systems using Node.js, Express, and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a
              href="https://drive.google.com/file/d/1L9sYzYjDeH14Hqpj6eYLIQ-i6v7V-0ro/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
            >
              <span>Get Resume</span>
              <span className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-[0.6rem] group-hover:rotate-45 transition-transform duration-300">
                <FaExternalLinkAlt />
              </span>
            </a>

            <a
              href="mailto:abdisileshi123@email.com"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-neutral-700 text-neutral-300 font-medium text-lg hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              <FaEnvelope className="text-lg" />
              <span>Send Mail</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neutral-800 animate-pulse-glow">
              <Image
                src="/myFinalImage.png"
                alt="Abdi Worku"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Subtle glow behind - reduced opacity since main container glows now */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Code Block Section */}
      <div className="w-full max-w-4xl mx-auto mt-12 bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-2 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800/50 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-xs font-mono text-neutral-500">welcome.ts</span>
        </div>
        <div className="rounded-xl overflow-hidden">
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
            showLineNumbers={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 pt-8 border-t border-neutral-900">
        <div></div>
        <a
          href="/about"
          className="flex items-center gap-2 text-neutral-500 hover:text-blue-400 transition-colors font-medium text-lg group"
        >
          About Me <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
        </a>
      </div>
    </section>
  );
}

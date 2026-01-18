"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Education() {
  const codeString = `const education = {
  degree: "B.Sc. Software Engineering",
  school: "ASTU",
  year: "2026"
};`;

  return (
    <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 tracking-tight">Education</h1>

      <div className="bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-10 max-w-full hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Bachelor of Engineering in Software Engineering</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-blue-400 font-medium text-lg">
              <span>Adama Science and Technology University (ASTU)</span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="text-neutral-400">Adama, Ethiopia</span>
            </div>
            <div className="text-neutral-500 text-sm mt-3 font-mono bg-neutral-800/50 px-3 py-1 rounded-full inline-block">Expected July 2026</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            <span className="font-semibold text-white">Relevant coursework:</span> Software Engineering Principles, Data Structures & Algorithms, Database Systems, Web Development, Artificial Intelligence.
          </div>
          <p className="text-neutral-400 italic border-l-4 border-blue-500/50 pl-4 py-1">
            Pursuing a strong academic record and hands-on experience in full-stack software engineering.
          </p>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-12">
        <div className="text-sm font-mono text-neutral-400 mb-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2">education.ts</span>
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
        <a href="/experience" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
          <span className="transform group-hover:-translate-x-1 transition-transform">&lt;</span> Experience
        </a>
        <a href="/contact" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
          Contact <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
        </a>
      </div>
    </section>
  );
} 
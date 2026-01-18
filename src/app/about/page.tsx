"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function About() {
  const codeString = `const superpower = () => "Writing clean, efficient, and user-friendly code!";
console.log('My superpower is: ' + superpower());`;

  return (
    <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 tracking-tight">About Abdi</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-neutral-400 tracking-tight">
        More than just a title—<span className="text-blue-400">let's dive deeper!</span>
      </h2>
      <div className="w-full">
        <p className="text-lg sm:text-xl text-neutral-300 mb-8 font-medium leading-relaxed max-w-4xl">
          I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.
        </p>
        <p className="text-lg sm:text-xl text-neutral-400 mb-8 leading-relaxed max-w-4xl">
          With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. I specialize in backend development using <span className="text-white font-semibold">Node.js, Express, and MongoDB</span>, ensuring robust performance and server-side logic. Currently, I am also diving deeper into mobile development with React Native and Expo to expand my skillset.
        </p>
        <p className="text-lg sm:text-xl text-neutral-400 mb-12 leading-relaxed max-w-4xl">
          Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.
        </p>

        <div className="w-full max-w-3xl mb-12">
          <div className="text-sm font-mono text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-2">aboutMe.ts</span>
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
          <a href="/" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
            <span className="transform group-hover:-translate-x-1 transition-transform">&lt;</span> Introduction
          </a>
          <a href="/projects" className="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors font-medium text-lg group">
            Projects <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

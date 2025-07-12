"use client";

export default function About() {
  return (
    <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-foreground tracking-tight">About Abdi</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-muted-foreground tracking-tight">
        More than just a title—<span className="text-foreground">let's dive deeper!</span>
      </h2>
      <div className="w-full">
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 font-medium">
          I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.
        </p>
        <p className="text-base sm:text-lg text-secondary mb-8">
          With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into mobile development with React Native and Expo to expand my skill set and deliver versatile, cross-platform solutions.
        </p>
        <p className="text-base sm:text-lg text-secondary mb-12">
          Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.
        </p>
        <div className="mb-10">
          <div className="text-base font-semibold text-foreground mb-2">aboutMe.ts</div>
          <pre className="bg-card rounded-lg p-4 text-sm text-card-foreground overflow-x-auto border border-border">
            <code>{`const superpower = () => "Writing clean, efficient, and user-friendly code!";\nconsole.log('My superpower is: ' + superpower());`}</code>
          </pre>
      </div>
        <div className="flex justify-between items-center mt-8">
          <a href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">&lt; Introduction</a>
          <a href="/projects" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">Projects &gt;</a>
      </div>
      </div>
    </section>
  );
}

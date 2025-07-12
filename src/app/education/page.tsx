"use client";

export default function Education() {
  return (
    <section className="pt-10 pb-20 min-h-[60vh] w-full max-w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-foreground tracking-tight">Education</h1>
      <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10 max-w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Bachelor of Engineering in Software Engineering</h2>
            <div className="text-muted-foreground font-semibold mb-1">Adama Science and Technology University (ASTU)</div>
            <div className="text-secondary text-base mb-1">Adama, Ethiopia</div>
            <div className="text-secondary text-base mb-2">Expected July 2026</div>
          </div>
        </div>
        <div className="text-muted-foreground text-base sm:text-lg">
          Relevant coursework: Software Engineering Principles, Data Structures & Algorithms, Database Systems, Web Development, Artificial Intelligence.<br />
          <span className="text-secondary">Pursuing a strong academic record and hands-on experience in full-stack software engineering.</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <a href="/experience" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">&lt; Experience</a>
        <a href="/contact" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg">Contact &gt;</a>
      </div>
    </section>
  );
} 
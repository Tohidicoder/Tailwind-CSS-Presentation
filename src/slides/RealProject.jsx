import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function RealProject() {
  const [activePartName, setActivePartName] = useState("Navbar");

  const projectParts = [
    {
      name: "Navbar",
      description:
        "A simple navigation bar for moving between pages or sections.",
      code: `<nav className="flex items-center justify-between px-6 py-4">
  <h2 className="text-xl font-bold text-white">
    MyPortfolio
  </h2>

  <div className="flex gap-5 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
    },

    {
      name: "Hero",
      description:
        "The Hero introduces the website and gives visitors a clear first impression.",
      code: `<section className="px-6 py-20 text-center">
  <p className="text-cyan-400">
    Web Developer
  </p>

  <h1 className="mt-3 text-4xl font-bold text-white">
    Build. Create. Learn.
  </h1>

  <button className="mt-6 rounded-lg bg-cyan-500 px-5 py-3 text-white">
    View Projects
  </button>
</section>`,
    },

    {
      name: "Project Card",
      description:
        "A reusable card can display a project, product, or other content.",
      code: `function ProjectCard() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-lg">
      <h2 className="text-xl font-bold text-slate-900">
        My Portfolio
      </h2>

      <p className="mt-2 text-slate-600">
        Built with React and Tailwind CSS.
      </p>

      <button className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-white">
        View Project
      </button>
    </div>
  );
}`,
    },

    {
      name: "Contact",
      description:
        "A contact section gives visitors a way to communicate with the developer.",
      code: `<section className="rounded-2xl bg-slate-900 p-8 text-center">
  <h2 className="text-2xl font-bold text-white">
    Let's Work Together
  </h2>

  <p className="mt-2 text-slate-400">
    Have a project in mind?
  </p>

  <button className="mt-5 rounded-lg bg-cyan-500 px-5 py-3 text-white">
    Contact Me
  </button>
</section>`,
    },

    {
      name: "Footer",
      description:
        "The Footer contains simple information, links, or copyright text.",
      code: `<footer className="border-t border-white/10 px-6 py-6 text-center">
  <p className="text-sm text-slate-400">
    © 2026 MyPortfolio
  </p>
</footer>`,
    },
  ];

  const activePart = projectParts.find((part) => part.name === activePartName);

  return (
    <Section
      number="23"
      label="Real Project"
      title="Tailwind in a Real Project"
    >
      {/* Introduction */}
      <p className="mb-7 max-w-3xl text-lg leading-8 text-slate-300">
        In a real project, we combine small reusable components to build a
        complete website. Tailwind controls the design of each component.
      </p>

      {/* Project Flow */}
      <div className="mb-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="mb-4 text-lg font-bold text-white">
          Example: Portfolio Website
        </h3>

        <div className="flex flex-wrap items-center gap-2">
          {projectParts.map((part, index) => (
            <div key={part.name} className="flex items-center gap-2">
              <button
                onClick={() => setActivePartName(part.name)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activePartName === part.name
                    ? "bg-cyan-500 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {part.name}
              </button>

              {index < projectParts.length - 1 && (
                <span className="text-slate-600">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Part */}
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <div className="mb-5">
          <span className="text-sm font-semibold text-cyan-400">
            Selected Part
          </span>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {activePart.name}
          </h3>

          <p className="mt-2 leading-7 text-slate-400">
            {activePart.description}
          </p>
        </div>

        <CodeBlock>{activePart.code}</CodeBlock>
      </div>

      {/* Mental Model */}
      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="mb-4 text-lg font-bold text-white">Keep This in Mind</h3>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-cyan-400/10 p-4 text-center">
            <p className="font-bold text-cyan-300">React</p>

            <p className="mt-1 text-sm text-slate-400">Builds components</p>
          </div>

          <div className="rounded-xl bg-purple-400/10 p-4 text-center">
            <p className="font-bold text-purple-300">Tailwind</p>

            <p className="mt-1 text-sm text-slate-400">Styles components</p>
          </div>

          <div className="rounded-xl bg-emerald-400/10 p-4 text-center">
            <p className="font-bold text-emerald-300">Real Project</p>

            <p className="mt-1 text-sm text-slate-400">Combines everything</p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <h3 className="mb-2 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          A real Tailwind project is built from reusable components. Each
          component can use Tailwind classes for layout, spacing, colors, and
          responsive design.
        </p>
      </div>
    </Section>
  );
}

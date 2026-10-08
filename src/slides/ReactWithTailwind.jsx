import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function ReactWithTailwind() {
  const technologies = [
    {
      id: "html",
      number: "01",
      name: "HTML",
      type: "Web Markup",
      canUse: true,
      description:
        "Tailwind can be used directly with HTML to style buttons, cards, forms, layouts, and other web elements.",
      example: `<button class="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600">
  Get Started </button>`,
      memory: "HTML + Tailwind",
    },
    {
      id: "javascript",
      number: "02",
      name: "JavaScript",
      type: "Programming Language",
      canUse: true,
      description:
        "JavaScript can create or change HTML elements, while Tailwind classes control how those elements look.",
      example: `const button = document.createElement("button");

button.className =
"rounded-lg bg-cyan-500 px-5 py-3 text-white";

button.textContent = "Get Started";`,
      memory: "JavaScript controls behavior",
    },
    {
      id: "react",
      number: "03",
      name: "React",
      type: "UI Library",
      canUse: true,
      description:
        "React creates reusable components, while Tailwind classes style those components.",
      example: `<button className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600">
Get Started </button>`,
      memory: "React + Tailwind",
    },
    {
      id: "vue",
      number: "04",
      name: "Vue",
      type: "Frontend Framework",
      canUse: true,
      description:
        "Vue templates can use Tailwind utility classes to style their components.",
      example: `<button class="rounded-lg bg-cyan-500 px-5 py-3 text-white">
Get Started </button>`,
      memory: "Vue + Tailwind",
    },
    {
      id: "next",
      number: "05",
      name: "Next.js",
      type: "React Framework",
      canUse: true,
      description:
        "Next.js is built around React, so Tailwind can be used naturally inside its components.",
      example: `<button className="rounded-lg bg-cyan-500 px-5 py-3 text-white">
Get Started </button>`,
      memory: "Next.js + Tailwind",
    },
    {
      id: "laravel",
      number: "06",
      name: "Laravel",
      type: "PHP Framework",
      canUse: true,
      description:
        "Laravel projects can use Tailwind in Blade templates to style their web pages.",
      example: `<button class="rounded-lg bg-cyan-500 px-5 py-3 text-white">
Get Started </button>`,
      memory: "Laravel + Tailwind",
    },
    {
      id: "django",
      number: "07",
      name: "Django",
      type: "Python Web Framework",
      canUse: true,
      description:
        "Django generates web pages, so Tailwind can be used in its HTML templates.",
      example: `<button class="rounded-lg bg-cyan-500 px-5 py-3 text-white">
Get Started </button>`,
      memory: "Django + Tailwind",
    },
    {
      id: "desktop",
      number: "08",
      name: "Desktop App",
      type: "Non-Web UI",
      canUse: false,
      description:
        "Tailwind is designed for web styling. It is not a general styling system for traditional desktop applications.",
      example: `Tailwind is mainly for
HTML-based web interfaces.`,
      memory: "Not the main use case",
    },
  ];

  const [selectedId, setSelectedId] = useState("react");

  const selected =
    technologies.find((item) => item.id === selectedId) || technologies[2];

  return (
    <Section
      number="22"
      label="React with Tailwind"
      title="Tailwind CSS with Web Technologies"
    >
      {/* Main Idea */}{" "}
      <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        {" "}
        <div className="flex flex-wrap items-center gap-3">
          {" "}
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
            MAIN IDEA{" "}
          </span>
          ```
          <span className="text-sm text-slate-400">
            Tailwind is a CSS framework
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">
          Tailwind is not a programming language.
        </h3>
        <p className="mt-3 max-w-4xl leading-8 text-slate-300">
          Tailwind is a CSS framework used to style web interfaces. It is not
          limited to React. It can work with many different web technologies.
        </p>
      </div>
      {/* Where Can We Use It? */}
      <div>
        <div className="mb-5">
          <h3 className="text-xl font-bold text-white">
            Where Can We Use Tailwind?
          </h3>

          <p className="mt-2 text-slate-400">
            Click a technology to see a real example.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => {
            const isActive = selectedId === technology.id;

            return (
              <button
                key={technology.id}
                onClick={() => setSelectedId(technology.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? technology.canUse
                      ? "border-cyan-400 bg-cyan-400/10"
                      : "border-amber-400 bg-amber-400/10"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold ${
                      technology.canUse ? "text-cyan-400" : "text-amber-400"
                    }`}
                  >
                    {technology.number}
                  </span>

                  <span
                    className={`text-xs font-semibold ${
                      technology.canUse ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {technology.canUse ? "Works" : "Not Main Use"}
                  </span>
                </div>

                <h4 className="mt-3 text-lg font-bold text-white">
                  {technology.name}
                </h4>

                <p className="mt-1 text-xs text-slate-500">{technology.type}</p>
              </button>
            );
          })}
        </div>
      </div>
      {/* Selected Technology */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Explanation */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm font-semibold ${
                  selected.canUse ? "text-cyan-400" : "text-amber-400"
                }`}
              >
                {selected.type}
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                {selected.name}
              </h3>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                selected.canUse
                  ? "bg-emerald-400/10 text-emerald-400"
                  : "bg-amber-400/10 text-amber-400"
              }`}
            >
              {selected.canUse ? "Yes" : "Not the main use"}
            </span>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            {selected.description}
          </p>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Remember
            </p>

            <p className="mt-2 font-semibold text-slate-200">
              {selected.memory}
            </p>
          </div>
        </div>

        {/* Code */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Real Example</h3>

            <span className="text-xs text-slate-500">{selected.name}</span>
          </div>

          <CodeBlock>{selected.example}</CodeBlock>
        </div>
      </div>
      {/* Important Clarification */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-xl font-bold text-white">
          Can We Use Tailwind With Every Programming Language?
        </h3>

        <p className="mt-3 max-w-4xl leading-8 text-slate-400">
          Not exactly. Tailwind is made for web styling, not for every
          programming language itself. The important question is whether the
          project creates a web interface that can use Tailwind CSS.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <p className="text-sm font-bold text-emerald-400">
              Think Web Project
            </p>

            <p className="mt-2 leading-7 text-slate-300">
              HTML, React, Vue, Next.js, Laravel, Django, and other web
              technologies can use Tailwind.
            </p>
          </div>

          <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
            <p className="text-sm font-bold text-amber-400">
              Think Non-Web Application
            </p>

            <p className="mt-2 leading-7 text-slate-300">
              A traditional desktop or terminal application is not Tailwind's
              main target.
            </p>
          </div>
        </div>
      </div>
      {/* Mental Model */}
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-bold text-cyan-400">HTML</p>
          <p className="mt-2 font-semibold text-white">Structure</p>
          <p className="mt-1 text-sm text-slate-500">What is on the page?</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-bold text-cyan-400">JavaScript</p>
          <p className="mt-2 font-semibold text-white">Behavior</p>
          <p className="mt-1 text-sm text-slate-500">What does it do?</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-bold text-cyan-400">React</p>
          <p className="mt-2 font-semibold text-white">Components</p>
          <p className="mt-1 text-sm text-slate-500">How is UI organized?</p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <p className="text-sm font-bold text-cyan-400">Tailwind</p>
          <p className="mt-2 font-semibold text-white">Styling</p>
          <p className="mt-1 text-sm text-slate-500">How does it look?</p>
        </div>
      </div>
      {/* Key Takeaway */}
      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Tailwind is not tied to one language or framework. It is a CSS
          framework for web interfaces, so it can be used with many web
          technologies. React is just one of them.
        </p>
      </div>
    </Section>
  );
}

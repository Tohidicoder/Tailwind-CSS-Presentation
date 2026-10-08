import { useState } from "react";
import Section from "../components/Section";

const concepts = [
  {
    id: "tailwind",
    title: "Tailwind CSS",
    short: "Utility-first CSS framework",
    meaning:
      "Tailwind gives you small utility classes so you build the design directly in your HTML.",
    example: "bg-blue-500 px-6 py-3 rounded-lg text-white",
    buttonClass:
      "rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105",
    memory: "Build the design yourself.",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    short: "Component-focused CSS framework",
    meaning:
      "Bootstrap gives you ready-made components and predefined classes that you can use quickly.",
    example: "btn btn-primary",
    buttonClass:
      "rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-105",
    memory: "Use ready-made styles and components.",
  },
];

const differences = [
  {
    title: "Approach",
    tailwind: "Utility-first",
    bootstrap: "Component-focused",
  },
  {
    title: "Styling",
    tailwind: "Build your own design",
    bootstrap: "Use predefined styles",
  },
  {
    title: "Customization",
    tailwind: "Very flexible",
    bootstrap: "Customizable with CSS/Sass",
  },
  {
    title: "Components",
    tailwind: "Build them yourself",
    bootstrap: "Many ready-made components",
  },
  {
    title: "Classes",
    tailwind: "Many small utility classes",
    bootstrap: "Short component classes",
  },
];

const similarities = [
  "Both are CSS frameworks.",
  "Both help build interfaces faster.",
  "Both support responsive design.",
  "Both provide reusable classes.",
  "Both can be customized.",
  "Both can be used with React.",
];

export default function TailwindVsBootstrap() {
  const [selectedId, setSelectedId] = useState("tailwind");

  const selected =
    concepts.find((item) => item.id === selectedId) || concepts[0];

  return (
    <Section
      number="20"
      label="Tailwind vs Bootstrap"
      title="Two Different Ways to Build UI"
    >
      {/* Introduction */}

      <div className="mb-8 max-w-4xl">
        <p className="text-lg leading-8 text-slate-300">
          Tailwind CSS and Bootstrap are both CSS frameworks. They help
          developers build modern and responsive websites faster, but they solve
          the styling problem in different ways.
        </p>
      </div>

      {/* Simple Definitions */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Tailwind */}

        <div className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 shadow-xl shadow-cyan-950/10 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.09]">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-300">
              Tailwind
            </span>

            <span className="text-sm font-medium text-slate-400">
              Utility-first
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white">Tailwind CSS</h3>

          <p className="mt-3 leading-7 text-slate-300">
            Tailwind gives you small utility classes such as{" "}
            <span className="font-semibold text-cyan-300">bg-blue-500</span>,{" "}
            <span className="font-semibold text-cyan-300">px-6</span>,{" "}
            <span className="font-semibold text-cyan-300">rounded-lg</span>, and{" "}
            <span className="font-semibold text-cyan-300">text-white</span>.
          </p>

          <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4 shadow-inner">
            <code className="text-sm leading-7 text-cyan-300">
              bg-blue-500 px-6 py-3 rounded-lg text-white
            </code>
          </div>

          <p className="mt-4 font-semibold text-cyan-300">
            → Build the design yourself.
          </p>
        </div>

        {/* Bootstrap */}

        <div className="group rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] p-6 shadow-xl shadow-violet-950/10 backdrop-blur-sm transition hover:border-violet-400/40 hover:bg-violet-400/[0.09]">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-sm font-semibold text-violet-300">
              Bootstrap
            </span>

            <span className="text-sm font-medium text-slate-400">
              Component-focused
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white">Bootstrap</h3>

          <p className="mt-3 leading-7 text-slate-300">
            Bootstrap provides ready-made styles and components. For example, a
            button can use{" "}
            <span className="font-semibold text-violet-300">
              btn btn-primary
            </span>
            .
          </p>

          <div className="mt-5 rounded-xl border border-violet-400/10 bg-slate-950/70 p-4 shadow-inner">
            <code className="text-sm leading-7 text-violet-300">
              btn btn-primary
            </code>
          </div>

          <p className="mt-4 font-semibold text-violet-300">
            → Use ready-made styles.
          </p>
        </div>
      </div>

      {/* Main Visual Difference */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-7">
        <div className="mb-7">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Compare the approach
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white md:text-3xl">
            The Main Difference
          </h3>

          <p className="mt-2 max-w-3xl leading-7 text-slate-400">
            The easiest way to understand the difference is to build the same
            button with both frameworks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Tailwind Example */}

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6 shadow-lg shadow-cyan-950/10">
            <div className="mb-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
                Tailwind
              </p>

              <h4 className="mt-1 text-xl font-bold text-white">
                Build the button
              </h4>
            </div>

            <div className="flex min-h-32 items-center justify-center rounded-xl border border-cyan-400/10 bg-slate-950/70">
              <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105">
                Get Started
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-black/30 p-4">
              <code className="block whitespace-pre-wrap text-sm leading-7 text-cyan-300">
                {`<button className="bg-cyan-500 px-6 py-3 rounded-lg text-white">
  Get Started
</button>`}
              </code>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              You choose the background, padding, radius, text color, size,
              spacing, hover effect, and more.
            </p>
          </div>

          {/* Bootstrap Example */}

          <div className="rounded-2xl border border-violet-400/20 bg-slate-900/80 p-6 shadow-lg shadow-violet-950/10">
            <div className="mb-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-400">
                Bootstrap
              </p>

              <h4 className="mt-1 text-xl font-bold text-white">
                Use a ready-made button
              </h4>
            </div>

            <div className="flex min-h-32 items-center justify-center rounded-xl border border-violet-400/10 bg-slate-950/70">
              <button className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-105">
                Get Started
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-violet-400/10 bg-black/30 p-4">
              <code className="block whitespace-pre-wrap text-sm leading-7 text-violet-300">
                {`<button className="btn btn-primary">
  Get Started
</button>`}
              </code>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Bootstrap already defines the button style behind the{" "}
              <span className="font-semibold text-violet-300">btn</span> and{" "}
              <span className="font-semibold text-violet-300">btn-primary</span>{" "}
              classes.
            </p>
          </div>
        </div>

        {/* One-line Memory */}

        <div className="mt-6 rounded-2xl border border-fuchsia-400/20 bg-gradient-to-r from-cyan-400/[0.08] via-violet-400/[0.08] to-fuchsia-400/[0.08] p-5 text-center shadow-lg shadow-violet-950/10">
          <p className="text-lg font-bold text-white md:text-xl">
            Tailwind ={" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Build the style
            </span>
            <span className="mx-3 text-slate-600">vs</span>
            Bootstrap ={" "}
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Use ready-made style
            </span>
          </p>
        </div>
      </div>

      {/* Interactive Example */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-7">
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/60" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              Try it
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Interactive Example
          </h3>

          <p className="mt-2 text-slate-400">
            Click each framework to see how its approach works.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {concepts.map((item) => {
            const isSelected = selected.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`rounded-2xl border p-5 text-left transition ${
                  isSelected
                    ? item.id === "tailwind"
                      ? "border-cyan-400/50 bg-cyan-400/10 shadow-lg shadow-cyan-950/20"
                      : "border-violet-400/50 bg-violet-400/10 shadow-lg shadow-violet-950/20"
                    : "border-white/10 bg-slate-900/60 hover:border-white/20 hover:bg-slate-900/90"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{item.title}</span>

                  <span
                    className={`text-sm font-semibold ${
                      isSelected
                        ? item.id === "tailwind"
                          ? "text-cyan-300"
                          : "text-violet-300"
                        : "text-slate-500"
                    }`}
                  >
                    {isSelected ? "Selected" : "Click"}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">{item.short}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              What it means
            </p>

            <h4 className="mt-2 text-2xl font-bold text-white">
              {selected.title}
            </h4>

            <p className="mt-3 leading-7 text-slate-400">{selected.meaning}</p>

            <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Example
              </p>

              <code
                className={`text-sm ${
                  selected.id === "tailwind"
                    ? "text-cyan-300"
                    : "text-violet-300"
                }`}
              >
                {selected.example}
              </code>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-white">Remember:</p>

              <p className="mt-1 text-sm text-slate-400">{selected.memory}</p>
            </div>
          </div>

          <div className="flex min-h-72 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <div className="text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Live Result
              </p>

              <button className={selected.buttonClass}>Get Started</button>

              <p className="mt-5 text-xs text-slate-500">
                Same goal — different styling approach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Differences Table */}

      <div className="mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">
              At a glance
            </p>

            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Quick Comparison
            </h3>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl shadow-black/10">
          <div className="grid grid-cols-3 border-b border-white/10 bg-gradient-to-r from-cyan-400/[0.08] via-violet-400/[0.08] to-fuchsia-400/[0.08]">
            <div className="p-4 text-sm font-bold uppercase tracking-wider text-slate-300">
              Feature
            </div>

            <div className="border-l border-white/10 p-4 text-sm font-bold uppercase tracking-wider text-cyan-300">
              Tailwind
            </div>

            <div className="border-l border-white/10 p-4 text-sm font-bold uppercase tracking-wider text-violet-300">
              Bootstrap
            </div>
          </div>

          {differences.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.025]"
            >
              <div className="p-4 text-sm font-bold text-white">
                {item.title}
              </div>

              <div className="border-l border-white/10 p-4 text-sm leading-6 text-slate-300">
                {item.tailwind}
              </div>

              <div className="border-l border-white/10 p-4 text-sm leading-6 text-slate-300">
                {item.bootstrap}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Similarities */}

      <div className="mt-10">
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Shared features
          </p>

          <h3 className="text-2xl font-bold text-white md:text-3xl">
            What They Have in Common
          </h3>

          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400" />

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Even though their styling approaches are different, both frameworks
            help developers build modern interfaces faster.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {similarities.map((item, index) => (
            <div
              key={item}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 opacity-70 transition group-hover:opacity-100" />
              </div>

              <p className="mt-4 text-sm font-medium leading-6 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* When to Choose */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.04] p-6 shadow-lg shadow-cyan-950/10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Tailwind
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Choose Tailwind when...
          </h3>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li>✓ You want a custom design.</li>
            <li>✓ You want detailed control over every element.</li>
            <li>✓ You are comfortable with utility classes.</li>
            <li>✓ You want a design system that fits your project.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-400/[0.08] to-fuchsia-500/[0.04] p-6 shadow-lg shadow-violet-950/10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/60" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              Bootstrap
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Choose Bootstrap when...
          </h3>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li>✓ You want ready-made components.</li>
            <li>✓ You want to build common UI quickly.</li>
            <li>✓ You prefer shorter component classes.</li>
            <li>✓ You need a familiar predefined design system.</li>
          </ul>
        </div>
      </div>

      {/* Final Memory */}

      <div className="mt-10 overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-cyan-400/[0.07] via-violet-400/[0.08] to-fuchsia-400/[0.07] p-7 text-center shadow-2xl shadow-violet-950/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
          Final Memory
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          Tailwind gives you the building blocks.
        </h3>

        <p className="mt-2 text-xl font-semibold text-slate-300">
          Bootstrap gives you more ready-made building blocks.
        </p>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
          Both can create modern responsive websites. The biggest difference is
          how you build and style the interface.
        </p>
      </div>
    </Section>
  );
}

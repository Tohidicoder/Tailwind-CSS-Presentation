import { useState } from "react";
import Section from "../components/Section";

export default function AdvancedInteractivity() {
  // 1. Main state
  const [activeDemo, setActiveDemo] = useState("scroll-snap");

  // 2. Concepts
  const concepts = [
    {
      id: "appearance",
      number: "01",
      title: "Appearance",
      description: "Controls the browser's default styling of form elements.",
      utility: "appearance-none",
    },
    {
      id: "caret",
      number: "02",
      title: "Caret Color",
      description: "Changes the color of the text cursor inside an input.",
      utility: "caret-cyan-400",
    },
    {
      id: "scroll",
      number: "03",
      title: "Scroll Behavior",
      description: "Controls whether scrolling happens smoothly or instantly.",
      utility: "scroll-smooth",
    },
    {
      id: "scroll-snap",
      number: "04",
      title: "Scroll Snap",
      description: "Makes a scrolling area stop at specific positions.",
      utility: "snap-x snap-mandatory",
    },
    {
      id: "touch",
      number: "05",
      title: "Touch Action",
      description: "Controls which touch gestures are allowed on an element.",
      utility: "touch-pan-x",
    },
  ];

  return (
    <Section
      number="31"
      label="Advanced Interactivity"
      title="Advanced Interactivity Utilities"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        These utilities control how users interact with forms, scrolling areas,
        sliders, and touch-based interfaces.
      </p>

      {/* 2. What We Learn */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            type="button"
            onClick={() => setActiveDemo(concept.id)}
            className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
              activeDemo === concept.id
                ? "border-cyan-400/60 bg-cyan-400/10"
                : "border-white/10 bg-white/[0.05] hover:border-cyan-400/30"
            }`}
          >
            <span className="text-sm font-bold text-cyan-400">
              {concept.number}
            </span>

            <h3 className="mt-3 text-lg font-bold text-white">
              {concept.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {concept.description}
            </p>

            <code className="mt-4 inline-block rounded-lg bg-slate-950 px-3 py-2 text-xs text-cyan-300">
              {concept.utility}
            </code>
          </button>
        ))}
      </div>

      {/* 3. Live Demo */}
      <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Live Demo
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {concepts.find((item) => item.id === activeDemo)?.title}
          </h3>

          <p className="mt-2 max-w-2xl leading-7 text-slate-400">
            {concepts.find((item) => item.id === activeDemo)?.description}
          </p>
        </div>

        {/* Appearance Demo */}
        {activeDemo === "appearance" && (
          <div className="rounded-2xl bg-slate-900 p-8">
            <p className="mb-4 text-sm text-slate-400">
              Compare the browser default with a custom styled select.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold text-white">
                  Browser Default
                </p>

                <select className="w-full rounded-xl px-4 py-3">
                  <option>Default Select</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-white">
                  appearance-none
                </p>

                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border border-cyan-400/40 bg-slate-950 px-4 py-3 text-white outline-none">
                    <option>Custom Select</option>
                    <option>Option 2</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                    ▼
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Caret Demo */}
        {activeDemo === "caret" && (
          <div className="rounded-2xl bg-slate-900 p-8">
            <p className="mb-4 text-sm text-slate-400">
              Click inside the inputs and type to see the cursor color.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold text-white">
                  Default Caret
                </p>

                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-lg text-white outline-none"
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-cyan-300">
                  caret-cyan-400
                </p>

                <input
                  autoFocus
                  type="text"
                  placeholder="Type here..."
                  className="w-full caret-cyan-400 rounded-xl border border-cyan-400/30 bg-slate-950 px-4 py-4 text-lg text-white outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Scroll Behavior Demo */}
        {activeDemo === "scroll" && (
          <div className="rounded-2xl bg-slate-900 p-8">
            <p className="mb-4 text-sm text-slate-400">
              Click a button to move to another section.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              <a
                href="#scroll-demo-1"
                className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white"
              >
                Slide 1
              </a>

              <a
                href="#scroll-demo-2"
                className="rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white"
              >
                Slide 2
              </a>

              <a
                href="#scroll-demo-3"
                className="rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white"
              >
                Slide 3
              </a>
            </div>

            <div className="scroll-smooth flex gap-4 overflow-x-auto rounded-xl bg-slate-950 p-4">
              <div
                id="scroll-demo-1"
                className="min-w-full rounded-xl bg-cyan-500 p-12 text-center text-2xl font-bold text-white"
              >
                Slide 1
              </div>

              <div
                id="scroll-demo-2"
                className="min-w-full rounded-xl bg-purple-500 p-12 text-center text-2xl font-bold text-white"
              >
                Slide 2
              </div>

              <div
                id="scroll-demo-3"
                className="min-w-full rounded-xl bg-pink-500 p-12 text-center text-2xl font-bold text-white"
              >
                Slide 3
              </div>
            </div>
          </div>
        )}

        {/* Scroll Snap Demo */}
        {activeDemo === "scroll-snap" && (
          <div className="rounded-2xl bg-slate-900 p-8">
            <p className="mb-4 text-sm text-slate-400">
              Scroll horizontally. Each slide automatically snaps into position.
            </p>

            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto rounded-xl bg-slate-950 p-5">
              <div className="min-w-[85%] snap-center rounded-2xl bg-cyan-500 p-16 text-center text-3xl font-bold text-white">
                Slide 1
              </div>

              <div className="min-w-[85%] snap-center rounded-2xl bg-purple-500 p-16 text-center text-3xl font-bold text-white">
                Slide 2
              </div>

              <div className="min-w-[85%] snap-center rounded-2xl bg-pink-500 p-16 text-center text-3xl font-bold text-white">
                Slide 3
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-cyan-300">
              ← Scroll or drag horizontally →
            </p>
          </div>
        )}

        {/* Touch Action Demo */}
        {activeDemo === "touch" && (
          <div className="rounded-2xl bg-slate-900 p-8">
            <p className="mb-6 text-sm text-slate-400">
              This utility is mainly useful on touch devices. It controls which
              direction the user can pan.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="touch-pan-x rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-8 text-center">
                <div className="text-3xl">↔</div>
                <h4 className="mt-3 font-bold text-white">touch-pan-x</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Allow horizontal panning.
                </p>
              </div>

              <div className="touch-pan-y rounded-2xl border border-purple-400/30 bg-purple-400/10 p-8 text-center">
                <div className="text-3xl">↕</div>
                <h4 className="mt-3 font-bold text-white">touch-pan-y</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Allow vertical panning.
                </p>
              </div>

              <div className="touch-auto rounded-2xl border border-pink-400/30 bg-pink-400/10 p-8 text-center">
                <div className="text-3xl">✋</div>
                <h4 className="mt-3 font-bold text-white">touch-auto</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Use the browser default.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Current Utility */}
        <div className="mt-6 rounded-xl bg-slate-950 p-5">
          <p className="mb-2 text-sm font-semibold text-slate-400">
            Current Utility
          </p>

          <code className="text-cyan-300">
            {concepts.find((item) => item.id === activeDemo)?.utility}
          </code>
        </div>
      </div>

      {/* 4. Key Takeaway */}
      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <h3 className="mb-2 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Advanced Interactivity utilities control how users interact with
          forms, scrolling areas, sliders, and touch-based interfaces.
        </p>
      </div>
    </Section>
  );
}

import { useState } from "react";
import Section from "../components/Section";

export default function Preflight() {
  const [activeDemo, setActiveDemo] = useState("problem");

  const concepts = [
    {
      id: "problem",
      number: "01",
      title: "The Problem",
      utility: "Browser Defaults",
      description:
        "Browsers automatically add default styles to HTML elements.",
      why: "Different browsers can start with different default styles.",
    },
    {
      id: "preflight",
      number: "02",
      title: "What is Preflight?",
      utility: "Preflight",
      description:
        "Preflight is Tailwind's base style reset that gives your project a clean starting point.",
      why: "It removes many browser defaults so your design starts from a more predictable base.",
    },
    {
      id: "automatic",
      number: "03",
      title: "Automatic",
      utility: '@import "tailwindcss"',
      description:
        "Preflight is included automatically when Tailwind CSS is imported.",
      why: "You normally do not need to install or enable Preflight separately.",
    },
    {
      id: "base",
      number: "04",
      title: "Base Layer",
      utility: "@layer base",
      description: "Preflight belongs to Tailwind's base styling layer.",
      why: "Base styles provide the foundation before you add component and utility styles.",
    },
    {
      id: "custom",
      number: "05",
      title: "Customize It",
      utility: "@layer base",
      description:
        "You can add your own global styles when the project needs them.",
      why: "Preflight gives you a starting point, but you can still control your global design.",
    },
  ];

  const activeConcept = concepts.find((concept) => concept.id === activeDemo);

  return (
    <Section
      number="34"
      label="Preflight"
      title="Preflight — The Clean Starting Point"
    >
      {/* 1. What Is Preflight? */}

      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        Every browser has its own default styles for HTML elements. Tailwind
        Preflight removes many of those defaults so your project starts from a
        more consistent foundation.
      </p>

      {/* 2. Real-World Idea */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="text-lg font-bold text-cyan-300">
          Think About It Like This
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Imagine you buy a new notebook. Before you start writing, you want
          every page to look clean and empty. Preflight does something similar
          for your HTML elements: it gives Tailwind a cleaner starting point.
        </p>
      </div>

      {/* 3. What We Learn */}

      <div className="mt-10">
        <h3 className="mb-5 text-xl font-bold text-white">What We Learn</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setActiveDemo(concept.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                activeDemo === concept.id
                  ? "border-cyan-400/50 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-cyan-400">
                  {concept.number}
                </span>

                <code className="rounded-lg bg-slate-950 px-2 py-1 text-xs text-cyan-300">
                  {concept.utility}
                </code>
              </div>

              <h4 className="mt-4 text-lg font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {concept.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Live Demo */}

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-bold text-white">Live Demo</h3>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="mb-6">
            <span className="text-sm font-bold text-cyan-400">
              {activeConcept.number}
            </span>

            <h4 className="mt-2 text-2xl font-bold text-white">
              {activeConcept.title}
            </h4>

            <p className="mt-2 max-w-2xl leading-7 text-slate-400">
              {activeConcept.description}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              <span className="font-semibold text-slate-300">Why?</span>{" "}
              {activeConcept.why}
            </p>
          </div>

          {/* Browser Defaults */}

          {activeDemo === "problem" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="mb-4 text-sm font-semibold text-red-300">
                  Browser Defaults
                </p>

                <div className="rounded-xl bg-white p-5 text-slate-900">
                  <h5 className="text-xl font-bold">Default Heading</h5>

                  <p className="mt-3">
                    Browsers provide their own default styles.
                  </p>

                  <ul className="mt-4 list-disc pl-5">
                    <li>Default spacing</li>
                    <li>Default font sizes</li>
                    <li>Default margins</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="mb-4 text-sm font-semibold text-cyan-300">
                  Why This Can Be a Problem
                </p>

                <div className="rounded-xl bg-slate-900 p-5">
                  <p className="leading-7 text-slate-300">
                    If you want complete control over your design, browser
                    defaults can create unexpected spacing and sizing.
                  </p>

                  <div className="mt-5 rounded-lg bg-slate-800 p-4">
                    <code className="text-sm text-cyan-300">
                      Browser → Default Styles
                    </code>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* What Is Preflight */}

          {activeDemo === "preflight" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm font-semibold text-slate-400">
                  Without a Clean Base
                </p>

                <div className="mt-5 rounded-xl bg-white p-5 text-slate-900">
                  <h5 className="text-2xl font-bold">Browser Defaults</h5>

                  <p className="mt-3">
                    Elements can have default browser styling.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                <p className="text-sm font-semibold text-cyan-300">
                  With Tailwind Preflight
                </p>

                <div className="mt-5 rounded-xl bg-slate-900 p-5">
                  <p className="leading-7 text-slate-300">
                    Tailwind starts from a more consistent base, then you decide
                    how the elements should look.
                  </p>

                  <code className="mt-5 block rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                    Preflight → Clean Base → Your Styles
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* Automatic */}

          {activeDemo === "automatic" && (
            <div className="rounded-2xl bg-white/[0.04] p-6">
              <p className="text-sm text-slate-400">
                You normally get Preflight automatically when Tailwind is
                imported.
              </p>

              <code className="mt-5 block rounded-xl bg-slate-900 p-5 text-sm leading-7 text-cyan-300">
                @import "tailwindcss";
              </code>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-slate-900 p-5 text-center">
                  <p className="text-sm text-slate-400">1</p>

                  <p className="mt-2 font-semibold text-white">
                    Import Tailwind
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-5 text-center">
                  <p className="text-sm text-slate-400">2</p>

                  <p className="mt-2 font-semibold text-white">
                    Preflight Included
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-5 text-center">
                  <p className="text-sm text-slate-400">3</p>

                  <p className="mt-2 font-semibold text-white">Start Styling</p>
                </div>
              </div>
            </div>
          )}

          {/* Base Layer */}

          {activeDemo === "base" && (
            <div className="rounded-2xl bg-white/[0.04] p-6">
              <p className="text-sm leading-6 text-slate-400">
                Preflight is part of Tailwind's base styles. You can also add
                your own global styles in the base layer.
              </p>

              <code className="mt-5 block rounded-xl bg-slate-900 p-5 text-sm leading-7 text-cyan-300">
                @layer base {"{"}
                <br />
                &nbsp;&nbsp;body {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>

              <div className="mt-6 rounded-xl bg-white p-6 text-slate-900">
                <h5 className="text-2xl font-bold">Global Style</h5>

                <p className="mt-3 leading-7 text-slate-600">
                  This is an example of a style that can be applied globally.
                </p>
              </div>
            </div>
          )}

          {/* Customize */}

          {activeDemo === "custom" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.04] p-6">
                <p className="text-sm text-slate-400">
                  Preflight gives you the starting point.
                </p>

                <div className="mt-5 rounded-xl bg-slate-900 p-5">
                  <code className="text-sm leading-7 text-cyan-300">
                    Preflight
                    <br />
                    ↓
                    <br />
                    Your Base Styles
                    <br />
                    ↓
                    <br />
                    Your Components
                    <br />
                    ↓
                    <br />
                    Your Utilities
                  </code>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                <p className="text-sm font-semibold text-cyan-300">
                  Your Global Style
                </p>

                <code className="mt-5 block rounded-xl bg-slate-950 p-5 text-sm leading-7 text-cyan-300">
                  @layer base {"{"}
                  <br />
                  &nbsp;&nbsp;body {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;background: #0f172a;
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </code>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Easy Rule */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-lg font-bold text-white">Easy Rule to Remember</h3>

        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
          <p>
            <span className="font-semibold text-cyan-300">Browser</span> →
            starts with its own default styles.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">Preflight</span> →
            gives Tailwind a cleaner and more consistent starting point.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">Base Styles</span> →
            let you add your own global defaults.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">Utilities</span> → let
            you control individual elements.
          </p>
        </div>
      </div>

      {/* 6. Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Preflight is not a utility class and it is not something you use
          directly on an element. It is Tailwind's base reset that prepares HTML
          elements for your own styling.
        </p>
      </div>
    </Section>
  );
}

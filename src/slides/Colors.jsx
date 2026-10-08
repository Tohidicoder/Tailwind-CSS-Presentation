

import { useState } from "react";
import Section from "../components/Section";

export default function Colors() {
  /*
    ARRAY OF OBJECTS
    Each object represents one Color concept.
    We keep the information in one place and use map()
    to display the concepts in the UI.
  */

  const concepts = [
    {
      id: "text",
      number: "01",
      title: "Text Color",
      question: "What color should the text be?",
      classes: "text-blue-500",
      description: "Change the color of your text.",
      example: "Tailwind CSS",
      note: "Use text-* classes for text colors.",
    },

    {
      id: "background",
      number: "02",
      title: "Background",
      question: "What color should the background be?",
      classes: "bg-blue-500",
      description: "Change the background color of an element.",
      example: "Colorful Card",
      note: "Use bg-* classes for background colors.",
    },

    {
      id: "border",
      number: "03",
      title: "Border Color",
      question: "What color should the border be?",
      classes: "border-blue-500",
      description: "Change the color of an element's border.",
      example: "Border Example",
      note: "Use border-* classes together with a border width.",
    },

    {
      id: "shade",
      number: "04",
      title: "Color Shades",
      question: "How light or dark should the color be?",
      classes: "blue-200 • blue-500 • blue-900",
      description: "Use different shades of the same color.",
      example: "Different Shades",
      note: "Lower numbers are usually lighter and higher numbers are darker.",
    },

    {
      id: "opacity",
      number: "05",
      title: "Opacity",
      question: "How transparent should the color be?",
      classes: "bg-blue-500/50",
      description: "Control how transparent a color appears.",
      example: "50% Opacity",
      note: "The number after / controls the color opacity.",
    },

    {
      id: "gradient",
      number: "06",
      title: "Gradient",
      question: "How can multiple colors blend together?",
      classes: "from-blue-500 • via-purple-500 • to-pink-500",
      description: "Combine multiple colors to create a smooth transition.",
      example: "Beautiful Gradient",
      note: "Use from, via, and to to build a gradient.",
    },
  ];

  /*
    useState
    selected stores which Color concept is currently selected
    in the interactive playground.
  */

  const [selected, setSelected] = useState("text");

  /*
    Find the selected object from the ARRAY OF OBJECTS.
  */

  const current = concepts.find((concept) => concept.id === selected);

  return (
    <Section
      number="11"
      label="Colors"
      title="How Do You Use Colors?"
      description="Tailwind gives you simple utilities to control text, backgrounds, borders, shades, opacity, and gradients."
    >
      {/* =========================
          MAIN IDEA
      ========================= */}

      <div className="mb-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          The Main Idea
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          Color = Make Your UI Look Alive
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          When you hear{" "}
          <strong className="text-white">Colors</strong>, remember
          these six things:
        </p>

        {/* ARRAY OF OBJECTS + map()
            We use the concepts array to create these badges. */}

        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap justify-center gap-3">
          {concepts.map((concept) => (
            <span
              key={concept.id}
              className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-cyan-300"
            >
              {concept.title}
            </span>
          ))}
        </div>
      </div>

      {/* =========================
          EASY MEMORY MODEL
      ========================= */}

      <div className="mb-10 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Easy Mental Model
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          Ask These 6 Questions
        </h3>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="rounded-2xl bg-white/[0.04] p-4"
            >
              <span className="text-cyan-300">
                {concept.number}
              </span>

              <h4 className="mt-2 font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                {concept.question}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          INTERACTIVE PLAYGROUND
      ========================= */}

      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl md:p-8">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Interactive Playground
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Explore Tailwind Colors
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Choose a color concept and see the class, meaning, and
            live result.
          </p>
        </div>

        {/* =========================
            DROPDOWN
            =========================
            We use a dropdown to let the student
            choose one item from the concepts array.
        */}

        <label className="mb-2 block text-sm font-semibold text-white">
          What do you want to control?
        </label>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
        >
          {concepts.map((concept) => (
            <option
              key={concept.id}
              value={concept.id}
              className="bg-slate-900"
            >
              {concept.number} — {concept.title} — {concept.question}
            </option>
          ))}
        </select>

        {/* =========================
            SELECTED CONCEPT
        ========================= */}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* LEFT SIDE — INFORMATION */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <span className="text-sm font-bold text-cyan-400">
              {current.number}
            </span>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {current.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {current.description}
            </p>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Tailwind Class
              </p>

              <code className="mt-2 block break-words text-sm leading-7 text-cyan-200">
                {current.classes}
              </code>
            </div>

            <div className="mt-4 rounded-xl bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Remember
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {current.question}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — LIVE RESULT */}

          <div className="rounded-2xl border border-dashed border-white/15 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Live Result
              </h3>

              <span className="text-xs text-slate-500">
                {current.classes}
              </span>
            </div>

            <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-slate-950 p-6">
              {/* TEXT COLOR */}

              {selected === "text" && (
                <p className="text-4xl font-bold text-blue-500">
                  Tailwind CSS
                </p>
              )}

              {/* BACKGROUND COLOR */}

              {selected === "background" && (
                <div className="rounded-2xl bg-blue-500 px-10 py-8 text-xl font-bold text-white shadow-lg">
                  Colorful Card
                </div>
              )}

              {/* BORDER COLOR */}

              {selected === "border" && (
                <div className="rounded-2xl border-4 border-blue-500 px-10 py-8 text-xl font-bold text-white">
                  Border Example
                </div>
              )}

              {/* COLOR SHADES */}

              {selected === "shade" && (
                <div className="grid w-full max-w-md grid-cols-3 gap-3 text-center text-sm font-bold">
                  <div className="rounded-xl bg-blue-200 p-6 text-slate-900">
                    200
                  </div>

                  <div className="rounded-xl bg-blue-500 p-6 text-white">
                    500
                  </div>

                  <div className="rounded-xl bg-blue-900 p-6 text-white">
                    900
                  </div>
                </div>
              )}

              {/* OPACITY */}

              {selected === "opacity" && (
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-32 w-32 rounded-full bg-blue-500" />

                  <div className="relative rounded-2xl bg-blue-500/50 px-8 py-6 text-xl font-bold text-white">
                    50% Opacity
                  </div>
                </div>
              )}

              {/* GRADIENT */}

              {selected === "gradient" && (
                <div className="w-full max-w-md rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-10 text-center">
                  <p className="text-2xl font-bold text-white">
                    Beautiful Gradient
                  </p>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {current.note}
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          QUICK REFERENCE
      ========================= */}

      <div className="mt-10">
        <h3 className="mb-5 text-xl font-bold text-white">
          Quick Reference
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="text-xs font-bold text-cyan-400">
                {concept.number}
              </span>

              <h4 className="mt-2 font-bold text-white">
                {concept.title}
              </h4>

              <code className="mt-3 block break-words text-sm text-cyan-300">
                {concept.classes}
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          FINAL MEMORY
      ========================= */}

      <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Remember
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Colors = Control the Look
        </h2>

        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap justify-center gap-3">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Text → text-blue-500
          </span>

          <span className="rounded-full bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            Background → bg-blue-500
          </span>

          <span className="rounded-full bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
            Border → border-blue-500
          </span>

          <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Shades → blue-200 → blue-900
          </span>

          <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
            Opacity → /50
          </span>

          <span className="rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Gradient → from → via → to
          </span>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400">
          When you hear <strong className="text-white">Colors</strong>,
          remember:
          <br />

          <strong className="text-white">
            Text → Background → Border → Shades → Opacity → Gradient
          </strong>
        </p>
      </div>
    </Section>
  );
}


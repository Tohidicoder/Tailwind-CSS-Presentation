


import { useState } from "react";
import Section from "../components/Section";

export default function Typography() {
  const [selected, setSelected] = useState("font");

  const concepts = {
    font: {
      number: "01",
      title: "Font Family",
      short: "What type of letters?",
      description:
        "Controls the style or family of the letters used in your text.",
      classes: "font-sans • font-serif • font-mono",
      exampleClass: "font-serif",
      meaning: "Think: What kind of letters do I want?",
      demo: "Beautiful Design",
      note: "Serif fonts are often used for elegant headings and editorial designs.",
    },

    size: {
      number: "02",
      title: "Font Size",
      short: "How big is the text?",
      description:
        "Controls how large or small the text appears on the screen.",
      classes: "text-sm • text-lg • text-2xl • text-4xl",
      exampleClass: "text-4xl",
      meaning: "Think: How big should this text be?",
      demo: "Big Heading",
      note: "Use larger sizes for headings and smaller sizes for supporting text.",
    },

    weight: {
      number: "03",
      title: "Font Weight",
      short: "How bold is the text?",
      description:
        "Controls how thin, normal, medium, or bold the text appears.",
      classes: "font-light • font-normal • font-medium • font-bold",
      exampleClass: "font-bold",
      meaning: "Think: Should this text look light or strong?",
      demo: "Important Text",
      note: "Bold text is useful for headings, buttons, and important information.",
    },

    alignment: {
      number: "04",
      title: "Text Alignment",
      short: "Where does the text sit?",
      description:
        "Controls whether text is aligned to the left, center, or right.",
      classes: "text-left • text-center • text-right",
      exampleClass: "text-center",
      meaning: "Think: Where should the text be placed?",
      demo: "Centered Text",
      note: "Center alignment is common for hero sections, titles, and cards.",
    },

    lineHeight: {
      number: "05",
      title: "Line Height",
      short: "How much space between lines?",
      description:
        "Controls the vertical space between lines of text.",
      classes: "leading-5 • leading-7 • leading-10",
      exampleClass: "leading-10",
      meaning: "Think: How much breathing room should each line have?",
      demo:
        "Typography becomes easier to read when line spacing is comfortable.",
      note: "Larger line height can make paragraphs easier to read.",
    },

    color: {
      number: "06",
      title: "Text Color",
      short: "What color is the text?",
      description: "Controls the color of your text.",
      classes: "text-white • text-gray-400 • text-blue-500",
      exampleClass: "text-blue-500",
      meaning: "Think: What color should the text be?",
      demo: "Colored Text",
      note: "Use color to create hierarchy and highlight important content.",
    },
  };

  const current = concepts[selected];

  return (
    <Section
      number="10"
      label="Typography"
      title="How Do You Style Text?"
      description="Typography controls how text looks, feels, and reads on a website."
    >
      {/* =========================
          MAIN IDEA
      ========================= */}

      <div className="mb-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          The Main Idea
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          Typography = How Text Looks
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          When you hear{" "}
          <strong className="text-white">Typography</strong>, think
          about six things:
        </p>

        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-3">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Font
          </span>

          <span className="rounded-full bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            Size
          </span>

          <span className="rounded-full bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
            Weight
          </span>

          <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Alignment
          </span>

          <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
            Line Height
          </span>

          <span className="rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Color
          </span>
        </div>
      </div>

      {/* =========================
          MEMORY MODEL
      ========================= */}

      <div className="mb-10 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Easy Mental Model
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Ask These 6 Questions
          </h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <span className="text-cyan-300">01</span>
            <h4 className="mt-2 font-bold text-white">Font</h4>
            <p className="mt-1 text-sm text-slate-400">
              What type of letters?
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <span className="text-violet-300">02</span>
            <h4 className="mt-2 font-bold text-white">Size</h4>
            <p className="mt-1 text-sm text-slate-400">
              How big is the text?
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <span className="text-pink-300">03</span>
            <h4 className="mt-2 font-bold text-white">Weight</h4>
            <p className="mt-1 text-sm text-slate-400">
              How bold is the text?
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <span className="text-emerald-300">04</span>
            <h4 className="mt-2 font-bold text-white">Alignment</h4>
            <p className="mt-1 text-sm text-slate-400">
              Left, center, or right?
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <span className="text-amber-300">05</span>
            <h4 className="mt-2 font-bold text-white">Line Height</h4>
            <p className="mt-1 text-sm text-slate-400">
              How much space between lines?
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-4">
            <span className="text-blue-300">06</span>
            <h4 className="mt-2 font-bold text-white">Color</h4>
            <p className="mt-1 text-sm text-slate-400">
              What color is the text?
            </p>
          </div>
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
            Choose a Typography Concept
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Select a topic and see its meaning, Tailwind classes, and
            live result.
          </p>
        </div>

        {/* Dropdown */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            What do you want to control?
          </label>

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
          >
            {Object.entries(concepts).map(([key, concept]) => (
              <option
                key={key}
                value={key}
                className="bg-slate-900"
              >
                {concept.number} — {concept.title} — {concept.short}
              </option>
            ))}
          </select>
        </div>

        {/* Selected Concept */}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Concept Information */}

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
                Tailwind Classes
              </p>

              <code className="mt-2 block text-sm leading-7 text-cyan-200">
                {current.classes}
              </code>
            </div>

            <div className="mt-4 rounded-xl bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Remember
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {current.meaning}
              </p>
            </div>
          </div>

          {/* Live Result */}

          <div className="rounded-2xl border border-dashed border-white/15 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Live Result
              </h3>

              <span className="text-xs text-slate-500">
                {current.exampleClass}
              </span>
            </div>

            <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-slate-950 p-6">
              <div
                className={`max-w-lg text-white transition-all duration-300 ${selected === "font" ? "font-serif" : ""
                  } ${selected === "size" ? "text-4xl" : ""
                  } ${selected === "weight" ? "font-bold" : ""
                  } ${selected === "alignment" ? "text-center" : ""
                  } ${selected === "lineHeight" ? "leading-10" : ""
                  } ${selected === "color" ? "text-blue-500" : ""
                  }`}
              >
                {selected === "lineHeight" ? (
                  <>
                    Typography becomes easier to understand when
                    there is enough space between each line of text.
                  </>
                ) : (
                  current.demo
                )}
              </div>
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
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <code className="text-cyan-300">font-*</code>

            <h4 className="mt-2 font-bold text-white">
              Font Family
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Choose the type of letters.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <code className="text-violet-300">text-*</code>

            <h4 className="mt-2 font-bold text-white">
              Size / Color
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Control text size or color depending on the class.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <code className="text-pink-300">font-bold</code>

            <h4 className="mt-2 font-bold text-white">
              Weight
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Make text stronger or lighter.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <code className="text-emerald-300">
              text-center
            </code>

            <h4 className="mt-2 font-bold text-white">
              Alignment
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Move text left, center, or right.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <code className="text-amber-300">
              leading-7
            </code>

            <h4 className="mt-2 font-bold text-white">
              Line Height
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Control the space between lines.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <code className="text-blue-300">
              text-blue-500
            </code>

            <h4 className="mt-2 font-bold text-white">
              Text Color
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Change the color of your text.
            </p>
          </div>
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
          Typography = How Text Looks
        </h2>

        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-3">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Font → Type
          </span>

          <span className="rounded-full bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            Size → Big / Small
          </span>

          <span className="rounded-full bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
            Weight → Thin / Bold
          </span>

          <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Alignment → Position
          </span>

          <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
            Line Height → Space
          </span>

          <span className="rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Color → Text Color
          </span>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
          When you hear{" "}
          <strong className="text-white">Typography</strong>, remember:
          <br />

          <strong className="text-white">
            Font → Size → Weight → Alignment → Line Height → Color
          </strong>
        </p>
      </div>
    </Section>
  );
}
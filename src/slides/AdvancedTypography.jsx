import { useState } from "react";
import Section from "../components/Section";

export default function AdvancedTypography() {
  // --------------------------------------------------
  // STATE
  // These states control the Live Example.
  // When we change a dropdown, the preview updates.
  // --------------------------------------------------

  const [spacing, setSpacing] = useState("tracking-wide");
  const [transform, setTransform] = useState("uppercase");
  const [decoration, setDecoration] = useState("underline");
  const [overflow, setOverflow] = useState("truncate");
  const [whitespace, setWhitespace] = useState("whitespace-normal");

  return (
    <Section
      number="28"
      label="Advanced Typography"
      title="Advanced Typography Utilities"
    >
      {/* --------------------------------------------------
          1. SHORT INTRODUCTION
      -------------------------------------------------- */}

      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Advanced Typography utilities give you more control over spacing,
        capitalization, decoration, and text wrapping.
      </p>

      {/* --------------------------------------------------
          2. WHAT WE LEARN
      -------------------------------------------------- */}

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Letter Spacing */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">tracking-wide</code>

          <h3 className="mt-3 font-semibold text-white">Letter Spacing</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Controls the space between letters.
          </p>
        </div>

        {/* Text Transform */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">uppercase</code>

          <h3 className="mt-3 font-semibold text-white">Text Transform</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Changes text capitalization.
          </p>
        </div>

        {/* Text Decoration */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">underline</code>

          <h3 className="mt-3 font-semibold text-white">Text Decoration</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Adds decoration such as an underline.
          </p>
        </div>

        {/* Text Overflow */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">truncate</code>

          <h3 className="mt-3 font-semibold text-white">Text Overflow</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Controls long text inside a limited space.
          </p>
        </div>

        {/* White Space */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">whitespace-nowrap</code>

          <h3 className="mt-3 font-semibold text-white">White Space</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Controls how text wraps.
          </p>
        </div>
      </div>

      {/* --------------------------------------------------
          3. LIVE EXAMPLE
      -------------------------------------------------- */}

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        {/* Live Example Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Live Example</h3>

          <p className="mt-2 text-slate-400">
            Change the utilities and see the text update.
          </p>
        </div>

        {/* --------------------------------------------------
            DROPDOWN CONTROLS
        -------------------------------------------------- */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Letter Spacing */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Letter Spacing
            </label>

            <select
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="tracking-normal">tracking-normal</option>

              <option value="tracking-wide">tracking-wide</option>

              <option value="tracking-wider">tracking-wider</option>

              <option value="tracking-widest">tracking-widest</option>
            </select>
          </div>

          {/* Text Transform */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Text Transform
            </label>

            <select
              value={transform}
              onChange={(e) => setTransform(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="normal-case">normal-case</option>
              <option value="uppercase">uppercase</option>
              <option value="lowercase">lowercase</option>
              <option value="capitalize">capitalize</option>
            </select>
          </div>

          {/* Text Decoration */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Text Decoration
            </label>

            <select
              value={decoration}
              onChange={(e) => setDecoration(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="no-underline">no-underline</option>

              <option value="underline">underline</option>

              <option value="overline">overline</option>

              <option value="line-through">line-through</option>
            </select>
          </div>

          {/* Text Overflow */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Text Overflow
            </label>

            <select
              value={overflow}
              onChange={(e) => setOverflow(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="truncate">truncate</option>
              <option value="text-clip">text-clip</option>
            </select>
          </div>

          {/* White Space */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              White Space
            </label>

            <select
              value={whitespace}
              onChange={(e) => setWhitespace(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="whitespace-normal">whitespace-normal</option>

              <option value="whitespace-nowrap">whitespace-nowrap</option>

              <option value="whitespace-pre">whitespace-pre</option>
            </select>
          </div>
        </div>

        {/* --------------------------------------------------
            LIVE RESULT
        -------------------------------------------------- */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Preview */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Live Result
            </p>

            <div className="rounded-xl bg-slate-900 p-6">
              {/* Heading */}
              <h2
                className={`text-2xl font-bold text-white ${spacing} ${transform} ${decoration}`}
              >
                Tailwind CSS
              </h2>

              {/* Long Text */}
              <p
                className={`mt-5 max-w-xs text-slate-300 ${overflow} ${whitespace}`}
              >
                Tailwind CSS makes it easy to control typography directly with
                utility classes.
              </p>
            </div>
          </div>

          {/* Current Classes */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Current Classes
            </p>

            <div className="rounded-xl bg-slate-950 p-5">
              <code className="text-sm leading-8 text-cyan-300">
                {spacing}
                <br />
                {transform}
                <br />
                {decoration}
                <br />
                {overflow}
                <br />
                {whitespace}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          4. KEY TAKEAWAY
      -------------------------------------------------- */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <h3 className="mb-2 font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Advanced Typography utilities help control how text looks, wraps, and
          behaves.
        </p>
      </div>
    </Section>
  );
}

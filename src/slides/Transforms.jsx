import { useState } from "react";
import Section from "../components/Section";

export default function Transforms() {
  // --------------------------------------------------
  // STATE
  // These states control the Live Example.
  // When we change a dropdown, the element updates.
  // --------------------------------------------------

  const [scale, setScale] = useState("scale-100");
  const [rotate, setRotate] = useState("rotate-0");
  const [translate, setTranslate] = useState("translate-y-0");
  const [skew, setSkew] = useState("skew-x-0");
  const [origin, setOrigin] = useState("origin-center");

  return (
    <Section number="30" label="Transforms" title="Transform Utilities">
      {/* --------------------------------------------------
          1. WHAT IS TRANSFORM?
      -------------------------------------------------- */}

      <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-xl font-bold text-cyan-300">
          What is Transform?
        </h3>

        <p className="max-w-4xl text-lg leading-8 text-slate-300">
          Transform utilities change the position, size, angle, or shape of an
          element without changing the normal document layout.
        </p>

        <div className="mt-5 rounded-xl bg-slate-950 p-4">
          <p className="text-sm leading-7 text-slate-400">In simple words:</p>

          <p className="mt-1 font-semibold text-white">
            Move → Scale → Rotate → Skew
          </p>
        </div>
      </div>

      {/* --------------------------------------------------
          2. WHAT WE LEARN
      -------------------------------------------------- */}

      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold text-white">What We Learn</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Scale */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <code className="text-cyan-300">scale-105</code>

            <h4 className="mt-3 font-semibold text-white">Scale</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Makes an element larger or smaller.
            </p>
          </div>

          {/* Rotate */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <code className="text-cyan-300">rotate-6</code>

            <h4 className="mt-3 font-semibold text-white">Rotate</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Rotates an element around a point.
            </p>
          </div>

          {/* Translate */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <code className="text-cyan-300">translate-y-2</code>

            <h4 className="mt-3 font-semibold text-white">Translate</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Moves an element horizontally or vertically.
            </p>
          </div>

          {/* Skew */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <code className="text-cyan-300">skew-x-6</code>

            <h4 className="mt-3 font-semibold text-white">Skew</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tilts an element along an axis.
            </p>
          </div>

          {/* Transform Origin */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <code className="text-cyan-300">origin-center</code>

            <h4 className="mt-3 font-semibold text-white">Transform Origin</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Controls the point where the transformation starts.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          3. LIVE EXAMPLE
      -------------------------------------------------- */}

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Live Example</h3>

          <p className="mt-2 text-slate-400">
            Change the transform utilities and see the result.
          </p>
        </div>

        {/* --------------------------------------------------
            CONTROLS
        -------------------------------------------------- */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Scale */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Scale</label>

            <select
              value={scale}
              onChange={(e) => setScale(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="scale-75">scale-75</option>
              <option value="scale-90">scale-90</option>
              <option value="scale-100">scale-100</option>
              <option value="scale-105">scale-105</option>
              <option value="scale-110">scale-110</option>
            </select>
          </div>

          {/* Rotate */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Rotate</label>

            <select
              value={rotate}
              onChange={(e) => setRotate(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="rotate-0">rotate-0</option>
              <option value="rotate-3">rotate-3</option>
              <option value="rotate-6">rotate-6</option>
              <option value="rotate-12">rotate-12</option>
              <option value="-rotate-6">-rotate-6</option>
            </select>
          </div>

          {/* Translate */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Translate Y
            </label>

            <select
              value={translate}
              onChange={(e) => setTranslate(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="translate-y-0">translate-y-0</option>
              <option value="-translate-y-1">-translate-y-1</option>
              <option value="-translate-y-2">-translate-y-2</option>
              <option value="translate-y-2">translate-y-2</option>
              <option value="translate-y-4">translate-y-4</option>
            </select>
          </div>

          {/* Skew */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Skew</label>

            <select
              value={skew}
              onChange={(e) => setSkew(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="skew-x-0">skew-x-0</option>
              <option value="skew-x-3">skew-x-3</option>
              <option value="skew-x-6">skew-x-6</option>
              <option value="skew-x-12">skew-x-12</option>
              <option value="-skew-x-6">-skew-x-6</option>
            </select>
          </div>

          {/* Transform Origin */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Transform Origin
            </label>

            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="origin-center">origin-center</option>

              <option value="origin-top">origin-top</option>

              <option value="origin-bottom">origin-bottom</option>

              <option value="origin-left">origin-left</option>

              <option value="origin-right">origin-right</option>
            </select>
          </div>
        </div>

        {/* --------------------------------------------------
            LIVE RESULT
        -------------------------------------------------- */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Result */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Live Result
            </p>

            <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-slate-950">
              <div
                className={`flex h-32 w-32 items-center justify-center rounded-2xl bg-cyan-500 text-center font-bold text-white shadow-xl transition-all duration-300 ${scale} ${rotate} ${translate} ${skew} ${origin}`}
              >
                Transform
              </div>
            </div>
          </div>

          {/* Current Classes */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Current Classes
            </p>

            <div className="rounded-xl bg-slate-950 p-5">
              <code className="text-sm leading-8 text-cyan-300">
                {scale}
                <br />
                {rotate}
                <br />
                {translate}
                <br />
                {skew}
                <br />
                {origin}
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
          Transform utilities let you move, resize, rotate, and tilt elements
          without changing the normal layout.
        </p>
      </div>
    </Section>
  );
}




import { useState } from "react";
import Section from "../components/Section";

export default function Layout() {
  /*
    React Basic Concept:
    useState()

    State is used because the user can change
    Layout classes from the dropdowns.
  */

  const [display, setDisplay] = useState("flex");
  const [direction, setDirection] = useState("flex-row");
  const [justify, setJustify] = useState("justify-center");
  const [align, setAlign] = useState("items-center");
  const [gap, setGap] = useState("gap-4");
  const [position, setPosition] = useState("relative");
  const [overflow, setOverflow] = useState("overflow-hidden");
  const [zIndex, setZIndex] = useState("z-10");

  const displayOptions = ["block", "flex", "grid", "hidden"];

  const directionOptions = ["flex-row", "flex-col"];

  const justifyOptions = [
    "justify-start",
    "justify-center",
    "justify-end",
    "justify-between",
    "justify-around",
  ];

  const alignOptions = [
    "items-start",
    "items-center",
    "items-end",
    "items-stretch",
  ];

  const gapOptions = ["gap-2", "gap-4", "gap-6", "gap-8"];

  const positionOptions = [
    "static",
    "relative",
    "absolute",
    "fixed",
    "sticky",
  ];

  const overflowOptions = [
    "overflow-hidden",
    "overflow-auto",
    "overflow-scroll",
  ];

  const zIndexOptions = ["z-0", "z-10", "z-20", "z-50"];

  const resetLayout = () => {
    setDisplay("flex");
    setDirection("flex-row");
    setJustify("justify-center");
    setAlign("items-center");
    setGap("gap-4");
    setPosition("relative");
    setOverflow("overflow-hidden");
    setZIndex("z-10");
  };

  const layoutClasses = [
    display,
    direction,
    justify,
    align,
    gap,
    position,
    overflow,
    zIndex,
  ].join(" ");

  return (
    <Section
      number="07"
      label="Layout"
      title="How Does Layout Work in Tailwind CSS?"
    >
      <div className="max-w-5xl space-y-7">

        {/* Short Introduction */}

        <div>
          <p className="text-xl font-bold leading-8 text-white">
            Layout controls{" "}
            <span className="text-cyan-300">
              how elements are arranged, positioned, and layered.
            </span>
          </p>

          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-400">
            Use the controls below to build and understand a layout
            visually.
          </p>
        </div>

        {/* =====================================================
            BUILD THE LAYOUT YOURSELF
        ===================================================== */}

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Interactive Layout Playground
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Build the Layout Yourself
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Change the Tailwind classes and watch the layout update
            instantly.
          </p>

          {/* Dropdowns */}

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {/* Display */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Display
              </label>

              <select
                value={display}
                onChange={(e) => setDisplay(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {displayOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Direction */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Direction
              </label>

              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {directionOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Justify */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Justify
              </label>

              <select
                value={justify}
                onChange={(e) => setJustify(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {justifyOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Align */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Align
              </label>

              <select
                value={align}
                onChange={(e) => setAlign(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {alignOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Gap */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Gap
              </label>

              <select
                value={gap}
                onChange={(e) => setGap(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {gapOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Position */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Position
              </label>

              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {positionOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Overflow */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Overflow
              </label>

              <select
                value={overflow}
                onChange={(e) => setOverflow(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {overflowOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Z-Index */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Z-Index
              </label>

              <select
                value={zIndex}
                onChange={(e) => setZIndex(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {zIndexOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Current Classes */}

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-black/30 p-5">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Current Layout Classes
            </p>

            <div className="mt-4 rounded-xl bg-slate-950 p-5">

              <code className="block break-words font-mono text-sm leading-7 text-emerald-300">
                {layoutClasses}
              </code>

            </div>

          </div>

          {/* Live Result */}

          <div className="mt-6">

            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Live Result
            </p>

            <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-slate-950 p-6">

              <div
                className={`
                  ${display}
                  ${direction}
                  ${justify}
                  ${align}
                  ${gap}
                  ${position}
                  ${overflow}
                  ${zIndex}
                  min-h-[290px]
                  w-full
                  transition-all
                  duration-300
                `}
              >

                <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 font-black text-white shadow-lg">
                  Item 1
                </div>

                <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl bg-violet-500 font-black text-white shadow-lg">
                  Item 2
                </div>

                <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 font-black text-white shadow-lg">
                  Item 3
                </div>

              </div>

            </div>

          </div>

          {/* Quick Explanation */}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-black/20 p-4">
              <code className="font-bold text-cyan-300">
                Display
              </code>
              <p className="mt-1 text-xs text-slate-400">
                Controls the layout type.
              </p>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <code className="font-bold text-cyan-300">
                Flexbox
              </code>
              <p className="mt-1 text-xs text-slate-400">
                Controls direction and alignment.
              </p>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <code className="font-bold text-cyan-300">
                Position
              </code>
              <p className="mt-1 text-xs text-slate-400">
                Controls where elements are placed.
              </p>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <code className="font-bold text-cyan-300">
                Z-Index
              </code>
              <p className="mt-1 text-xs text-slate-400">
                Controls overflow and stacking.
              </p>
            </div>

          </div>

          {/* Reset */}

          <div className="mt-6 flex justify-center">

            <button
              onClick={resetLayout}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Reset Layout
            </button>

          </div>

        </div>

        {/* Key Point */}

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Remember
          </p>

          <h3 className="mt-3 text-2xl font-black text-white">
            Layout = Arrange + Align + Position + Layer
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Use Tailwind Layout utilities to control where elements
            appear, how they align, and how they interact.
          </p>

        </div>

      </div>
    </Section>
  );
}
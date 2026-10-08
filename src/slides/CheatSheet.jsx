import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function CheatSheet() {
  const [padding, setPadding] = useState("p-6");
  const [radius, setRadius] = useState("rounded-2xl");
  const [background, setBackground] = useState("bg-slate-900");

  const categories = [
    {
      title: "Layout",
      items: ["block", "flex", "grid", "hidden", "relative", "absolute"],
    },
    {
      title: "Spacing",
      items: ["p-4", "px-6", "py-3", "m-4", "mt-6", "gap-4"],
    },
    {
      title: "Sizing",
      items: ["w-full", "w-1/2", "h-screen", "min-h-screen", "max-w-xl"],
    },
    {
      title: "Typography",
      items: [
        "text-xl",
        "font-bold",
        "text-center",
        "leading-7",
        "text-gray-500",
      ],
    },
    {
      title: "Colors",
      items: [
        "bg-blue-500",
        "text-white",
        "border-gray-300",
        "from-blue-500",
        "to-purple-500",
      ],
    },
    {
      title: "Responsive",
      items: ["sm:", "md:", "lg:", "xl:", "2xl:"],
    },
    {
      title: "States",
      items: ["hover:", "focus:", "active:", "disabled:", "group-hover:"],
    },
    {
      title: "Effects",
      items: ["shadow-lg", "opacity-50", "blur-sm", "grayscale"],
    },
  ];

  return (
    <Section
      number="26"
      label="Cheat Sheet"
      title="Quick Reference for Common Tailwind Classes"
    >
      {/* 1. What is a Cheat Sheet? */}
      <div className="mb-8">
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          A cheat sheet is a quick reference for finding Tailwind classes when
          you need them.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-950/70 p-5">
            <p className="text-sm text-slate-500">I need...</p>

            <p className="mt-2 font-semibold text-white">A flex layout</p>
          </div>

          <div className="flex items-center justify-center text-2xl text-cyan-400">
            →
          </div>

          <div className="rounded-xl bg-slate-950/70 p-5">
            <p className="text-sm text-slate-500">Find</p>

            <code className="mt-2 block font-semibold text-cyan-300">flex</code>
          </div>
        </div>
      </div>

      {/* 2. Real Example */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Real Example
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          Build a Profile Card
        </h3>

        <p className="mt-2 max-w-3xl leading-7 text-slate-400">
          We will change Tailwind utilities and see the result immediately.
        </p>
      </div>

      {/* 3. Choose a Utility */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Padding */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-400">
            Change Padding
          </label>

          <select
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
          >
            <option value="p-2">p-2</option>
            <option value="p-4">p-4</option>
            <option value="p-6">p-6</option>
            <option value="p-10">p-10</option>
          </select>
        </div>

        {/* Radius */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-400">
            Change Radius
          </label>

          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
          >
            <option value="rounded-none">rounded-none</option>
            <option value="rounded-lg">rounded-lg</option>
            <option value="rounded-2xl">rounded-2xl</option>
            <option value="rounded-full">rounded-full</option>
          </select>
        </div>

        {/* Background */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-400">
            Change Background
          </label>

          <select
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
          >
            <option value="bg-slate-900">bg-slate-900</option>
            <option value="bg-blue-600">bg-blue-600</option>
            <option value="bg-purple-600">bg-purple-600</option>
            <option value="bg-green-600">bg-green-600</option>
          </select>
        </div>
      </div>

      {/* 4. Result */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">
        <p className="mb-4 text-sm font-semibold text-slate-400">Result</p>

        <div className="flex justify-center">
          <div
            className={`flex items-center gap-4 ${padding} ${radius} ${background} shadow-lg`}
          >
            {/* flex stays fixed */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
              FT
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Faezeh Tohidi</h4>

              <p className="mt-1 text-sm text-slate-300">Web Developer</p>
            </div>
          </div>
        </div>

        {/* Current Classes */}
        <div className="mt-6">
          <p className="mb-3 text-sm text-slate-400">Current Classes</p>

          <div className="flex flex-wrap gap-2">
            {[
              "flex",
              "items-center",
              "gap-4",
              padding,
              radius,
              background,
              "shadow-lg",
            ].map((item) => (
              <code
                key={item}
                className="rounded-lg bg-slate-950 px-3 py-2 text-sm text-cyan-300"
              >
                {item}
              </code>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Short Code */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">The Code</h3>

        <CodeBlock>
          {`<div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900 shadow-lg">
  <div className="rounded-full bg-blue-500 p-3 font-bold text-white">
    FT
  </div>

  <div>
    <h4 className="text-xl font-bold text-white">
      Faezeh Tohidi
    </h4>

    <p className="text-sm text-slate-300">
      Web Developer
    </p>
  </div>
</div>`}
        </CodeBlock>
      </div>

      {/* 6. Important Classes */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          What Does Each Class Do?
        </h3>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["flex", "Creates the layout"],
            ["items-center", "Centers items vertically"],
            ["gap-4", "Adds space between items"],
            ["p-6", "Adds inner space"],
            ["rounded-2xl", "Rounds the corners"],
            ["shadow-lg", "Adds a shadow"],
          ].map(([className, description]) => (
            <div
              key={className}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <code className="font-semibold text-cyan-300">{className}</code>

              <p className="mt-2 text-sm text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Quick Reference */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">Quick Reference</h3>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
            >
              <h4 className="mb-4 text-lg font-bold text-cyan-300">
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <code
                    key={item}
                    className="rounded-lg bg-slate-950/80 px-3 py-2 text-sm text-cyan-200"
                  >
                    {item}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Key Takeaway */}
      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          You do not need to memorize every Tailwind class. Find the utility you
          need, use it, and see the result.
        </p>

        <div className="mt-4 rounded-xl bg-slate-950/70 p-4">
          <p className="font-mono text-sm text-cyan-300">
            Need → Find Utility → See the Result
          </p>
        </div>
      </div>
    </Section>
  );
}

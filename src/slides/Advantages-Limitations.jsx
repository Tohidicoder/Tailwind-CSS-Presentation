import { useState } from "react";
import Section from "../components/Section";

const topics = [
  {
    id: "custom",
    type: "Advantage",
    title: "Custom Design",
    short: "You control the design.",
    explanation:
      "Tailwind lets you choose the exact colors, spacing, size, radius, and effects you want.",
    classes: "bg-cyan-500 rounded-2xl p-5 shadow-xl",
    memory: "More control over the design.",
  },
  {
    id: "responsive",
    type: "Advantage",
    title: "Responsive",
    short: "The design can change by screen size.",
    explanation:
      "Responsive prefixes such as md: let the same element look different on larger screens.",
    classes: "p-4 md:p-8 md:flex-row",
    memory: "One design can adapt to different screens.",
  },
  {
    id: "fast",
    type: "Advantage",
    title: "Fast Styling",
    short: "Style directly with utilities.",
    explanation:
      "You can change the design directly in className without creating a separate CSS rule for every small change.",
    classes: "bg-cyan-500 px-5 py-3 text-white",
    memory: "Write utilities and see the result quickly.",
  },
  {
    id: "long",
    type: "Limitation",
    title: "Long Class Names",
    short: "Many utilities can make code long.",
    explanation:
      "The same flexibility can make className crowded when an element needs many styles.",
    classes: "rounded-2xl bg-white p-5 shadow-xl hover:-translate-y-1 md:p-8",
    memory: "More utilities can mean longer code.",
  },
];

export default function AdvantagesLimitations() {
  const [selectedId, setSelectedId] = useState("custom");

  const selected = topics.find((item) => item.id === selectedId) || topics[0];

  const isLimitation = selected.type === "Limitation";

  return (
    <Section
      number="21"
      label="Advantages & Limitations"
      title="See the Good and the Challenging Side"
    >
      {/* Short Introduction */}

      <p className="mb-7 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind gives you more control and faster styling, but that flexibility
        can also make the code longer.
      </p>

      {/* Topic Buttons */}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => {
          const isSelected = topic.id === selectedId;

          return (
            <button
              key={topic.id}
              onClick={() => setSelectedId(topic.id)}
              className={`rounded-xl border p-4 text-left transition ${
                isSelected
                  ? topic.type === "Advantage"
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-purple-400 bg-purple-400/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    topic.type === "Advantage"
                      ? "text-cyan-400"
                      : "text-purple-400"
                  }`}
                >
                  {topic.type}
                </span>

                {isSelected && (
                  <span className="text-xs text-slate-500">Selected</span>
                )}
              </div>

              <h3 className="mt-2 font-bold text-white">{topic.title}</h3>

              <p className="mt-1 text-sm text-slate-400">{topic.short}</p>
            </button>
          );
        })}
      </div>

      {/* Main Live Example */}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Live UI */}

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <div className="mb-5">
            <p
              className={`text-sm font-semibold uppercase tracking-widest ${
                isLimitation ? "text-purple-400" : "text-cyan-400"
              }`}
            >
              Live Example
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">Product Card</h3>
          </div>

          <div className="flex min-h-[390px] items-center justify-center rounded-xl bg-slate-950 p-5">
            <div
              className={`w-full max-w-sm rounded-2xl bg-white text-slate-900 shadow-xl transition-all duration-500 ${
                selected.id === "responsive" ? "p-4 md:p-8" : "p-5"
              } ${
                selected.id === "custom" ? "rounded-3xl shadow-cyan-500/20" : ""
              } ${selected.id === "long" ? "shadow-2xl" : ""}`}
            >
              {/* Product Image */}

              <div
                className={`flex h-32 items-center justify-center rounded-xl bg-slate-200 text-5xl ${
                  selected.id === "custom" ? "bg-cyan-100" : ""
                }`}
              >
                💻
              </div>

              {/* Product Info */}

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-bold">Laptop Pro</h4>

                    <p className="mt-1 text-sm text-slate-500">
                      For modern developers.
                    </p>
                  </div>

                  <span className="font-bold text-cyan-600">$899</span>
                </div>

                <button
                  className={`mt-5 w-full rounded-lg px-5 py-3 font-semibold text-white transition ${
                    selected.id === "custom"
                      ? "bg-cyan-500 hover:bg-cyan-600"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div
            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              isLimitation
                ? "bg-purple-400/10 text-purple-400"
                : "bg-cyan-400/10 text-cyan-400"
            }`}
          >
            {selected.type}
          </div>

          <h3 className="mt-4 text-3xl font-bold text-white">
            {selected.title}
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            {selected.explanation}
          </p>

          {/* Code */}

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-slate-500">
              Tailwind utilities
            </p>

            <div className="overflow-x-auto rounded-xl bg-slate-950 p-5">
              <code
                className={`text-sm leading-7 ${
                  isLimitation ? "text-purple-300" : "text-cyan-300"
                }`}
              >
                {selected.classes}
              </code>
            </div>
          </div>

          {/* Visual Explanation */}

          <div className="mt-6 rounded-xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm font-semibold text-slate-500">
              What should you notice?
            </p>

            <p className="mt-2 leading-7 text-white">
              {selected.id === "custom" &&
                "The card has its own colors, rounded corners, spacing, and shadow. You decide exactly how it looks."}

              {selected.id === "responsive" &&
                "Resize the screen. The padding changes at md:, so the same card adapts to a larger screen."}

              {selected.id === "fast" &&
                "The button styling is created directly with utility classes. No separate CSS rule is needed for this example."}

              {selected.id === "long" &&
                "Look at the className. As we add more design requirements, more utility classes are added and the code becomes longer."}
            </p>
          </div>

          {/* Memory */}

          <div className="mt-5 border-l-2 border-cyan-400 pl-4">
            <p className="text-sm font-semibold text-cyan-400">Remember</p>

            <p className="mt-1 font-medium text-white">{selected.memory}</p>
          </div>
        </div>
      </div>

      {/* Simple Comparison */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Advantages
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            More control + faster styling
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            You can create custom designs and responsive layouts directly with
            utility classes.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-purple-400">
            Limitations
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            More utilities = more code
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            You need to learn the classes, and complex elements can have long
            className values.
          </p>
        </div>
      </div>

      {/* Final Memory */}

      <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Final Memory
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Tailwind gives you freedom.
        </h3>

        <p className="mt-2 text-lg text-slate-300">
          The trade-off is learning and managing more utility classes.
        </p>
      </div>
    </Section>
  );
}

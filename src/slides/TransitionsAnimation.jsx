import { useState } from "react";
import Section from "../components/Section";

export default function TransitionsAnimation() {
  const concepts = [
    {
      id: "transition",
      number: "01",
      title: "Transition",
      question: "How can we make a style change smooth?",
      description:
        "Transition makes a change happen smoothly instead of instantly.",
      classes: "transition • transition-all",
      realUse: "Buttons, cards, links, hover effects",
      memory: "Transition = Smooth Change",
    },
    {
      id: "duration",
      number: "02",
      title: "Duration",
      question: "How long should the change take?",
      description:
        "Duration controls how much time a transition or animation takes.",
      classes: "duration-300 • duration-500 • duration-1000",
      realUse: "Control the speed of interactions",
      memory: "Duration = Time",
    },
    {
      id: "transform",
      number: "03",
      title: "Transform",
      question: "What should physically change?",
      description:
        "Transform changes an element's size, position, or rotation.",
      classes: "scale-110 • rotate-6 • translate-x-4",
      realUse: "Hover effects, cards, buttons, images",
      memory: "Transform = Change Shape or Position",
    },
    {
      id: "animation",
      number: "04",
      title: "Animation",
      question: "How can an element move automatically?",
      description:
        "Animation creates continuous or repeated movement without needing a hover.",
      classes: "animate-spin • animate-pulse • animate-bounce",
      realUse: "Loaders, notifications, attention effects",
      memory: "Animation = Automatic Movement",
    },
  ];

  const [selectedId, setSelectedId] = useState("transition");

  const selectedConcept = concepts.find(
    (concept) => concept.id === selectedId
  );

  return (
    <Section
      number="14"
      label="Transitions & Animation"
      title="How Do We Make Elements Move Smoothly?"
    >
      {/* Main Idea */}

      <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h2 className="text-2xl font-bold text-white">
          Transition ≠ Animation
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white/[0.05] p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Transition
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              Makes a change smooth
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Usually happens when a state changes, such as hover.
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.05] p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-purple-400">
              Animation
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              Creates movement
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Can start and repeat automatically without user interaction.
            </p>
          </div>
        </div>
      </div>

      {/* What We Learn */}

      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          What Should We Learn?
        </h3>

        <div className="grid gap-3 md:grid-cols-4">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelectedId(concept.id)}
              className={`rounded-xl border p-4 text-left transition-all duration-200 ${selectedId === concept.id
                ? "border-cyan-400/50 bg-cyan-400/10"
                : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                }`}
            >
              <span className="text-xs font-bold text-cyan-400">
                {concept.number}
              </span>

              <h4 className="mt-2 font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                {concept.memory}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Playground */}

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Interactive Playground
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {selectedConcept.title}
            </h3>
          </div>

          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
          >
            {concepts.map((concept) => (
              <option key={concept.id} value={concept.id}>
                {concept.number} — {concept.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Explanation */}

          <div className="rounded-2xl bg-slate-950/60 p-6">
            <p className="text-lg font-semibold text-white">
              {selectedConcept.question}
            </p>

            <p className="mt-3 leading-7 text-slate-400">
              {selectedConcept.description}
            </p>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Tailwind Classes
              </p>

              <code className="mt-2 block text-sm leading-7 text-cyan-200">
                {selectedConcept.classes}
              </code>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              <span className="font-semibold text-white">
                Real use:
              </span>{" "}
              {selectedConcept.realUse}
            </p>
          </div>

          {/* Live Example */}

          <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-slate-950/60 p-8">
            {selectedId === "transition" && (
              <div className="text-center">
                <button className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition-all duration-500 hover:scale-110 hover:bg-purple-500">
                  Hover Me
                </button>

                <p className="mt-5 text-sm text-slate-400">
                  Hover → the color and size change smoothly.
                </p>
              </div>
            )}

            {selectedId === "duration" && (
              <div className="flex flex-col items-center gap-5">
                <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white transition-all duration-1000 hover:scale-125">
                  Hover Slowly
                </button>

                <p className="text-center text-sm text-slate-400">
                  duration-1000 = the change takes 1 second.
                </p>
              </div>
            )}

            {selectedId === "transform" && (
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-2xl font-bold text-white transition-transform duration-500 hover:scale-110 hover:rotate-6">
                  Box
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Hover → scale + rotate change the element.
                </p>
              </div>
            )}

            {selectedId === "animation" && (
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white">
                  ↑
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  This animation starts automatically.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Reference */}

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
          >
            <p className="font-bold text-white">
              {concept.title}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {concept.memory}
            </p>
          </div>
        ))}
      </div>

      {/* Final Memory */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="text-lg font-bold text-cyan-300">
          Final Memory
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <p className="text-slate-300">
            <span className="font-bold text-white">
              Transition
            </span>{" "}
            → Smooth Change
          </p>

          <p className="text-slate-300">
            <span className="font-bold text-white">
              Duration
            </span>{" "}
            → Time
          </p>

          <p className="text-slate-300">
            <span className="font-bold text-white">
              Transform
            </span>{" "}
            → Size / Position / Rotation
          </p>

          <p className="text-slate-300">
            <span className="font-bold text-white">
              Animation
            </span>{" "}
            → Automatic Movement
          </p>
        </div>
      </div>
    </Section>
  );
}

import { useState } from "react";
import Section from "../components/Section";

export default function Effects() {
  /*
    ARRAY OF OBJECTS

    Each object represents one Effects concept.
    We keep all concepts in one place and use map()
    to display them in the presentation.
  */
  const concepts = [
    {
      id: "shadow",
      number: "01",
      title: "Shadow",
      question: "How can we give an element depth?",
      description:
        "Shadow creates depth by making an element look separated from the background.",
      classes: "shadow-sm • shadow-md • shadow-lg • shadow-xl",
      realUse: "Cards, buttons, modals",
      memory: "Shadow = Depth",
    },
    {
      id: "opacity",
      number: "02",
      title: "Opacity",
      question: "How transparent should the element be?",
      description:
        "Opacity controls how visible or transparent an element appears.",
      classes: "opacity-25 • opacity-50 • opacity-75 • opacity-100",
      realUse: "Overlays, disabled elements, subtle content",
      memory: "Opacity = Transparency",
    },
    {
      id: "blur",
      number: "03",
      title: "Blur",
      question: "How soft or blurry should the element look?",
      description:
        "Blur makes an element visually softer and less sharp.",
      classes: "blur-sm • blur-md • blur-lg",
      realUse: "Images, backgrounds, glass effects",
      memory: "Blur = Softness",
    },
    {
      id: "filters",
      number: "04",
      title: "Filters",
      question: "How can we change the visual appearance?",
      description:
        "Filters change the appearance of an element or image using effects such as grayscale, brightness, and contrast.",
      classes:
        "grayscale • brightness-110 • brightness-75 • contrast-125",
      realUse: "Images, galleries, hover effects",
      memory: "Filters = Appearance",
    },
  ];

  /*
    useState

    selected stores the Effects concept currently selected
    in the interactive playground.
  */
  const [selected, setSelected] = useState("shadow");

  /*
    find()

    Finds the selected concept from our array of objects.
  */
  const current = concepts.find((concept) => concept.id === selected);

  return (
    <Section
      number="13"
      label="Effects"
      title="How Does an Element Look?"
    >
      {/* Main Idea */}

      <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Main Idea
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Effects = How an Element Looks
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Effects change the visual appearance of an element
          without changing its content.
        </p>
      </div>

      {/* Easy Mental Model */}

      <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Easy Mental Model
        </p>

        <h3 className="mt-3 text-xl font-bold text-white">
          Ask: “How should this element look?”
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Shadow", "Add Depth"],
            ["Opacity", "Add Transparency"],
            ["Blur", "Make It Soft"],
            ["Filters", "Change Appearance"],
          ].map(([title, meaning]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-slate-950/60 p-4"
            >
              <p className="font-bold text-white">{title}</p>

              <p className="mt-1 text-sm text-slate-400">
                {meaning}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Learn */}

      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          What We Learn
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          Four practical Effects
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelected(concept.id)}
              className={`rounded-xl border p-4 text-left transition ${selected === concept.id
                ? "border-cyan-400/50 bg-cyan-400/10"
                : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                }`}
            >
              <span className="text-xs font-bold text-cyan-400">
                {concept.number}
              </span>

              <p className="mt-2 font-semibold text-white">
                {concept.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {concept.memory}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Playground */}

      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Interactive Playground
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              See the Effect
            </h3>
          </div>

          {/* Dropdown */}

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-white outline-none"
          >
            {concepts.map((concept) => (
              <option key={concept.id} value={concept.id}>
                {concept.number} — {concept.title}
              </option>
            ))}
          </select>
        </div>

        {/* Selected Concept */}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Explanation */}

          <div>
            <span className="text-sm font-bold text-cyan-400">
              {current.number}
            </span>

            <h4 className="mt-2 text-2xl font-bold text-white">
              {current.title}
            </h4>

            <p className="mt-2 font-medium text-slate-300">
              {current.question}
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              {current.description}
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                Tailwind Classes
              </p>

              <code className="text-sm leading-7 text-cyan-200">
                {current.classes}
              </code>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Real Use
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {current.realUse}
              </p>
            </div>
          </div>

          {/* Live Example */}

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-cyan-400">
              Live Example
            </p>

            <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900 p-8">

              {/* Shadow */}

              {selected === "shadow" && (
                <div className="text-center">
                  <div className="rounded-2xl bg-white px-12 py-10 text-xl font-bold text-slate-900 shadow-2xl">
                    Card
                  </div>

                  <p className="mt-5 text-sm text-slate-400">
                    shadow-2xl → creates depth
                  </p>
                </div>
              )}

              {/* Opacity */}

              {selected === "opacity" && (
                <div className="w-full max-w-sm space-y-3">
                  <div className="rounded-xl bg-cyan-400 p-4 text-center font-bold text-slate-950">
                    opacity-100
                  </div>

                  <div className="rounded-xl bg-cyan-400 p-4 text-center font-bold text-slate-950 opacity-75">
                    opacity-75
                  </div>

                  <div className="rounded-xl bg-cyan-400 p-4 text-center font-bold text-slate-950 opacity-50">
                    opacity-50
                  </div>

                  <div className="rounded-xl bg-cyan-400 p-4 text-center font-bold text-slate-950 opacity-25">
                    opacity-25
                  </div>

                  <p className="pt-2 text-center text-sm text-slate-400">
                    Lower opacity → more transparent
                  </p>
                </div>
              )}

              {/* Blur */}

              {selected === "blur" && (
                <div className="text-center">
                  <div className="rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 px-14 py-12 text-2xl font-bold text-white blur-md">
                    Blur
                  </div>

                  <p className="mt-5 text-sm text-slate-400">
                    blur-md → makes the element softer
                  </p>
                </div>
              )}

              {/* Filters */}

              {selected === "filters" && (
                <div className="w-full">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-linear-to-br from-blue-500 to-purple-500 p-6 text-center font-bold text-white">
                      Normal
                    </div>

                    <div className="rounded-xl bg-linear-to-br from-blue-500 to-purple-500 p-6 text-center font-bold text-white grayscale">
                      Grayscale
                    </div>

                    <div className="rounded-xl bg-linear-to-br from-blue-500 to-purple-500 p-6 text-center font-bold text-white brightness-110">
                      Brightness
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="font-semibold text-white">
                        brightness-110
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Makes the element brighter than normal.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="font-semibold text-white">
                        contrast-125
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Makes light and dark areas more different.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filters Explanation */}

      {selected === "filters" && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Filters — Easy Explanation
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Filters change how an image or element looks.
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <code className="text-cyan-300">grayscale</code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Removes most color and creates a black-and-white look.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <code className="text-cyan-300">
                brightness-110
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Makes the element brighter than normal.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <code className="text-cyan-300">
                brightness-75
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Makes the element darker than normal.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <code className="text-cyan-300">
                contrast-125
              </code>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Makes light and dark areas more different.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
            <p className="text-sm leading-6 text-slate-300">
              <span className="font-bold text-cyan-300">
                Remember:
              </span>{" "}
              Numbers like 110 and 125 represent visual
              intensity. They are not pixels.
            </p>
          </div>
        </div>
      )}

      {/* Quick Reference */}

      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Quick Reference
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="grid gap-2 border-b border-white/10 bg-white/[0.03] p-4 last:border-b-0 sm:grid-cols-[150px_1fr]"
            >
              <span className="font-semibold text-white">
                {concept.title}
              </span>

              <code className="text-sm text-cyan-200">
                {concept.classes}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Final Memory */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Final Memory
        </p>

        <h3 className="mt-3 text-xl font-bold text-white">
          Shadow → Opacity → Blur → Filters
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white/[0.05] p-4">
            <p className="font-bold text-white">Shadow</p>
            <p className="mt-1 text-sm text-slate-400">
              Adds depth
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.05] p-4">
            <p className="font-bold text-white">Opacity</p>
            <p className="mt-1 text-sm text-slate-400">
              Controls transparency
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.05] p-4">
            <p className="font-bold text-white">Blur</p>
            <p className="mt-1 text-sm text-slate-400">
              Makes it softer
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.05] p-4">
            <p className="font-bold text-white">Filters</p>
            <p className="mt-1 text-sm text-slate-400">
              Changes appearance
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}


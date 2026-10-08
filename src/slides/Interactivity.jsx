
import { useState } from "react";
import Section from "../components/Section";

export default function Interactivity() {
  const concepts = [
    {
      id: "cursor",
      number: "01",
      title: "Cursor",
      question: "What should the mouse cursor look like?",
      description:
        "Cursor changes the appearance of the mouse pointer when it is over an element.",
      classes: "cursor-pointer • cursor-not-allowed • cursor-wait",
      realUse: "Buttons, disabled elements, loading states",
      memory: "Cursor = Mouse Pointer",
    },
    {
      id: "pointer",
      number: "02",
      title: "Pointer Events",
      question: "Should this element receive pointer interaction?",
      description:
        "Pointer Events control whether an element can receive mouse or pointer interactions.",
      classes: "pointer-events-none • pointer-events-auto",
      realUse: "Disabled layers, overlays, decorative elements",
      memory: "Pointer Events = Interaction On / Off",
    },
    {
      id: "resize",
      number: "03",
      title: "Resize",
      question: "Can the user resize this element?",
      description:
        "Resize allows the user to change the size of an element, usually a textarea.",
      classes: "resize • resize-x • resize-y • resize-none",
      realUse: "Textareas, text editors, input areas",
      memory: "Resize = Change Size",
    },
    {
      id: "select",
      number: "04",
      title: "User Select",
      question: "Can the user select this content?",
      description:
        "User Select controls whether text or other content can be selected.",
      classes: "select-none • select-text • select-all",
      realUse: "Buttons, labels, code, selectable content",
      memory: "User Select = Text Selection",
    },
  ];

  const [selectedId, setSelectedId] = useState("cursor");

  const selectedConcept = concepts.find(
    (concept) => concept.id === selectedId
  );

  return (<Section
    number="15"
    label="Interactivity"
    title="How Does the User Interact with an Element?"
  >
    {/* Main Idea */}


    <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <h2 className="text-2xl font-bold text-white">
        Interactivity = User Interaction
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Interactivity controls what users can do with an element and
        how the element responds to mouse, pointer, and text actions.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white/[0.05] p-4">
          <p className="font-bold text-white">Cursor</p>
          <p className="mt-1 text-sm text-slate-400">
            Change the mouse pointer
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.05] p-4">
          <p className="font-bold text-white">Pointer Events</p>
          <p className="mt-1 text-sm text-slate-400">
            Allow or block interaction
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.05] p-4">
          <p className="font-bold text-white">Resize</p>
          <p className="mt-1 text-sm text-slate-400">
            Change element size
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.05] p-4">
          <p className="font-bold text-white">User Select</p>
          <p className="mt-1 text-sm text-slate-400">
            Control text selection
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

        <div className="flex min-h-[280px] items-center justify-center rounded-2xl bg-slate-950/60 p-8">
          {selectedId === "cursor" && (
            <div className="text-center">
              <button className="cursor-pointer rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white">
                Move Cursor Here
              </button>

              <p className="mt-5 text-sm text-slate-400">
                The cursor changes to show that this is clickable.
              </p>
            </div>
          )}

          {selectedId === "pointer" && (
            <div className="text-center">
              <div className="pointer-events-none rounded-xl bg-slate-700 px-7 py-4 font-bold text-slate-400">
                Pointer Events Disabled
              </div>

              <p className="mt-5 text-sm text-slate-400">
                This element ignores pointer interaction.
              </p>
            </div>
          )}

          {selectedId === "resize" && (
            <div className="w-full max-w-sm">
              <textarea
                className="resize w-full rounded-xl border border-cyan-400/30 bg-slate-900 p-4 text-white outline-none"
                rows="4"
                placeholder="Try to resize me..."
              />

              <p className="mt-4 text-center text-sm text-slate-400">
                Drag the corner → change the textarea size.
              </p>
            </div>
          )}

          {selectedId === "select" && (
            <div className="space-y-5 text-center">
              <p className="select-none rounded-xl bg-cyan-500/10 p-4 text-white">
                Try to select this text — you cannot.
              </p>

              <p className="select-text rounded-xl bg-purple-500/10 p-4 text-white">
                Try to select this text — you can.
              </p>

              <p className="text-sm text-slate-400">
                User Select controls text selection.
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
          <p className="font-bold text-white">{concept.title}</p>

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
          <span className="font-bold text-white">Cursor</span>
          {" → "}Mouse Pointer
        </p>

        <p className="text-slate-300">
          <span className="font-bold text-white">Pointer Events</span>
          {" → "}Interaction On / Off
        </p>

        <p className="text-slate-300">
          <span className="font-bold text-white">Resize</span>
          {" → "}Change Size
        </p>

        <p className="text-slate-300">
          <span className="font-bold text-white">User Select</span>
          {" → "}Text Selection
        </p>
      </div>
    </div>
  </Section>


  );
}

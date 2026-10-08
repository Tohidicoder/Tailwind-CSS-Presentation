// import { useState } from "react";
// import Section from "../components/Section";
// import CodeBlock from "../components/CodeBlock";

// export default function Customization() {
//   const concepts = [
//     {
//       id: "styles",
//       number: "01",
//       title: "Custom Styles",
//       question: "What if Tailwind classes are not enough?",
//       description:
//         "Create your own reusable style when the available Tailwind utilities do not match your design.",
//       example: "@utility",
//       memory: "Create Your Own Style",
//     },
//     {
//       id: "theme",
//       number: "02",
//       title: "Theme Variables",
//       question: "How do we create our own design values?",
//       description:
//         "Define custom colors, fonts, spacing, and other design values for your project.",
//       example: "--color-brand",
//       memory: "Define Your Design",
//     },
//     {
//       id: "directives",
//       number: "03",
//       title: "Functions & Directives",
//       question: "How do we extend Tailwind?",
//       description:
//         "Use Tailwind directives and tools to organize and extend custom styles.",
//       example: "@theme  @utility",
//       memory: "Extend Tailwind",
//     },
//   ];

//   const [selectedId, setSelectedId] = useState("theme");

//   const selected =
//     concepts.find((concept) => concept.id === selectedId) || concepts[1];

//   return (
//     <Section
//       number="19"
//       label="Customization"
//       title="How Do We Customize Tailwind CSS?"
//     >
//       {/* Main Idea */}
//       <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Main Idea
//         </p>

//         <h2 className="mt-2 text-2xl font-bold text-white">
//           Customization = Make Tailwind Fit Your Project
//         </h2>

//         <p className="mt-3 max-w-3xl leading-7 text-slate-300">
//           Tailwind gives us many ready-made utility classes. When we
//           need our own colors, fonts, or custom styles, we can customize
//           Tailwind for our project.
//         </p>

//         <div className="mt-5 rounded-xl bg-slate-950/70 p-4">
//           <p className="font-bold text-white">Simple Example</p>

//           <p className="mt-2 text-sm leading-7 text-slate-400">
//             Tailwind has ready-made colors, but our website may have
//             its own brand color. We can define that color once and
//             reuse it throughout the project.
//           </p>
//         </div>
//       </div>

//       {/* Core Concepts */}
//       <div className="mb-8">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Core Concepts
//         </p>

//         <h3 className="mt-1 text-xl font-bold text-white">
//           Click a concept to see what it does
//         </h3>

//         <div className="mt-4 grid gap-4 md:grid-cols-3">
//           {concepts.map((concept) => {
//             const active = selectedId === concept.id;

//             return (
//               <button
//                 key={concept.id}
//                 type="button"
//                 onClick={() => setSelectedId(concept.id)}
//                 className={`rounded-2xl border p-6 text-left transition-all duration-300 ${active
//                   ? "border-cyan-400/60 bg-cyan-400/10 shadow-lg shadow-cyan-400/10"
//                   : "border-white/10 bg-white/[0.04] hover:border-cyan-400/30 hover:bg-white/[0.07]"
//                   }`}
//               >
//                 <span className="text-sm font-bold text-cyan-400">
//                   {concept.number}
//                 </span>

//                 <h4 className="mt-3 text-xl font-bold text-white">
//                   {concept.title}
//                 </h4>

//                 <p className="mt-2 text-sm text-slate-400">
//                   {concept.memory}
//                 </p>

//                 {active && (
//                   <p className="mt-4 text-xs font-bold text-cyan-400">
//                     ✓ Showing below
//                   </p>
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Selected Concept */}
//       <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Selected Concept
//         </p>

//         <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h3 className="text-2xl font-bold text-white">
//               {selected.title}
//             </h3>

//             <p className="mt-1 text-cyan-300">
//               {selected.question}
//             </p>
//           </div>

//           <code className="rounded-lg bg-slate-950 px-4 py-2 text-sm text-cyan-200">
//             {selected.example}
//           </code>
//         </div>

//         <p className="mt-4 leading-7 text-slate-400">
//           {selected.description}
//         </p>
//       </div>

//       {/* Live Example */}
//       <div className="mb-8">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Live Example
//         </p>

//         <h3 className="mt-1 text-xl font-bold text-white">
//           Custom Brand Design
//         </h3>

//         <p className="mt-2 text-sm leading-6 text-slate-400">
//           Click the concepts above. The highlighted area below shows
//           what that customization concept means in a real interface.
//         </p>

//         {/* Fake Website */}
//         <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
//           {/* Navbar */}
//           <div
//             className={`border-b border-white/10 px-5 py-4 transition-all ${selectedId === "styles"
//               ? "ring-2 ring-cyan-400 ring-inset"
//               : ""
//               }`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-bold text-white">My Website</p>

//                 <p className="text-xs text-slate-500">
//                   Custom Tailwind Design
//                 </p>
//               </div>

//               <div className="hidden gap-5 text-sm text-slate-400 sm:flex">
//                 <span>Home</span>
//                 <span>Projects</span>
//                 <span>About</span>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="p-6 sm:p-10">
//             <div className="mx-auto max-w-2xl text-center">
//               <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//                 My Portfolio
//               </p>

//               <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
//                 Build Your Own Design
//               </h3>

//               <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
//                 Tailwind gives us the tools. Customization lets us
//                 create a design that matches our own brand.
//               </p>

//               {/* Custom Brand Button */}
//               <div
//                 className={`mt-7 inline-block rounded-2xl p-2 transition-all ${selectedId === "theme"
//                   ? "ring-2 ring-cyan-400 ring-offset-4 ring-offset-slate-950"
//                   : ""
//                   }`}
//               >
//                 <button
//                   type="button"
//                   className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
//                 >
//                   View Portfolio
//                 </button>
//               </div>
//             </div>

//             {/* Components */}
//             <div
//               className={`mt-10 grid gap-4 sm:grid-cols-3 transition-all ${selectedId === "directives"
//                 ? "rounded-2xl ring-2 ring-cyan-400 ring-offset-4 ring-offset-slate-950"
//                 : ""
//                 }`}
//             >
//               <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
//                 <p className="text-xs text-slate-500">Projects</p>

//                 <p className="mt-2 text-2xl font-bold text-white">24</p>
//               </div>

//               <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
//                 <p className="text-xs text-slate-500">Clients</p>

//                 <p className="mt-2 text-2xl font-bold text-white">12</p>
//               </div>

//               <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
//                 <p className="text-xs text-slate-500">Tasks</p>

//                 <p className="mt-2 text-2xl font-bold text-white">48</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Explanation */}
//         <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
//           <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//             What Are We Customizing?
//           </p>

//           <h4 className="mt-3 text-lg font-bold text-white">
//             {selected.title}
//           </h4>

//           <p className="mt-2 leading-7 text-slate-400">
//             {selected.id === "styles" &&
//               "We can create our own reusable style when Tailwind's existing utilities are not enough."}

//             {selected.id === "theme" &&
//               "We define our own brand color and use it in our website instead of relying only on Tailwind's default colors."}

//             {selected.id === "directives" &&
//               "Tailwind provides special directives such as @theme and @utility to extend and organize custom styles."}
//           </p>
//         </div>
//       </div>

//       {/* Real Code */}
//       <div className="mb-8">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Real Code
//         </p>

//         <h3 className="mt-2 text-xl font-bold text-white">
//           Create Your Own Brand Color
//         </h3>

//         <div className="mt-4">
//           <CodeBlock>{`@import "tailwindcss";

// @theme {
//   --color-brand: #06b6d4;
// }`}</CodeBlock>
//         </div>

//         <div className="mt-4">
//           <CodeBlock>{`<button className="bg-brand text-white px-5 py-3 rounded-xl">
//   View Portfolio
// </button>`}</CodeBlock>
//         </div>

//         <p className="mt-4 leading-7 text-slate-400">
//           We define our own brand color once and reuse it across
//           buttons, links, cards, and other parts of the website.
//         </p>
//       </div>

//       {/* Easy Mental Model */}
//       <div className="mb-8">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Easy Mental Model
//         </p>

//         <div className="mt-4 grid gap-4 md:grid-cols-3">
//           {concepts.map((concept) => (
//             <div
//               key={concept.id}
//               className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
//             >
//               <p className="font-bold text-white">{concept.title}</p>

//               <p className="mt-2 text-sm leading-6 text-slate-400">
//                 {concept.memory}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Final Memory */}
//       <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Final Memory
//         </p>

//         <p className="mt-3 text-lg font-bold text-white">
//           Customization = Make Tailwind fit your design.
//         </p>

//         <p className="mt-2 leading-7 text-slate-400">
//           Ready-made utilities → Custom values → Custom styles → Your own design system
//         </p>
//       </div>
//     </Section>
//   );
// }

import { useState } from "react";
import Section from "../components/Section";

export default function Customization() {
  const concepts = [
    {
      id: "styles",
      number: "01",
      title: "Custom Styles",
      question: "Can I create my own reusable style?",
      meaning:
        "Yes. Custom Styles let you create a reusable utility for a style that you use again and again.",
      code: `@utility card-custom {
  border-radius: 1rem;
  padding: 1.5rem;
}`,
      usage: `class="card-custom"`,
      before: "Default Card",
      after: "Custom Card",
      target: "card",
      memory: "Create Your Own Style",
    },
    {
      id: "theme",
      number: "02",
      title: "Theme Variables",
      question: "Can I create my own project colors?",
      meaning:
        "Yes. Theme Variables let you define your own colors, fonts, spacing, and other design values.",
      code: `@theme {   --color-brand: #06b6d4;
}`,
      usage: `class="bg-brand"`,
      before: "Default Button",
      after: "Brand Button",
      target: "button",
      memory: "Define Your Design",
    },
    {
      id: "directives",
      number: "03",
      title: "Functions & Directives",
      question: "Can I extend how Tailwind works?",
      meaning:
        "Yes. Functions and directives let you extend Tailwind with custom utilities and project-specific behavior.",
      code: `@theme {
--color-brand: #06b6d4;
}

@utility card-custom {
border-radius: 1rem;
}`,
      usage: `class="card-custom bg-brand"`,
      before: "Default UI",
      after: "Extended UI",
      target: "ui",
      memory: "Extend Tailwind",
    },
  ];

  const [selectedId, setSelectedId] = useState("theme");

  const current = concepts.find((concept) => concept.id === selectedId);

  return (
    <Section
      number="19"
      label="Customization"
      title="How Do We Make Tailwind Fit Our Project?"
    >
      {/* Main Idea */}

      <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Main Idea
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Customization = Make Tailwind Your Own
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Tailwind gives us ready-made utilities. Customization lets us create
          our own styles, colors, and design rules for a specific project.
        </p>
      </div>

      {/* Concepts */}

      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Choose What You Want to Customize
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelectedId(concept.id)}
              className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                selectedId === concept.id
                  ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/10"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400">
                  {concept.number}
                </span>

                {selectedId === concept.id && (
                  <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    Selected
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-bold text-white">
                {concept.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">{concept.memory}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Click → Meaning */}

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            01 — Meaning
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            {current.title}
          </h3>

          <p className="mt-3 text-lg font-semibold text-slate-200">
            {current.question}
          </p>

          <p className="mt-4 leading-7 text-slate-400">{current.meaning}</p>

          <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Easy Memory
            </p>

            <p className="mt-2 font-semibold text-white">{current.memory}</p>
          </div>
        </div>

        {/* Code */}

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            02 — Code
          </p>

          <h3 className="mt-3 text-xl font-bold text-white">
            What do we write?
          </h3>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-cyan-200">
            <code>{current.code}</code>
          </pre>

          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Then use it
            </p>

            <code className="mt-2 block rounded-lg bg-white/[0.05] p-3 text-sm text-purple-300">
              {current.usage}
            </code>
          </div>
        </div>
      </div>

      {/* Before / After */}

      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            03 — Before → Customize → After
          </p>

          <h3 className="text-2xl font-bold text-white">
            See Exactly What Changes
          </h3>

          <p className="max-w-3xl text-sm leading-6 text-slate-400">
            The blue highlight shows the exact part of the interface affected by
            the selected customization.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Before */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Before
            </p>

            <div className="mt-5 flex min-h-[150px] items-center justify-center">
              {selectedId === "styles" && (
                <div className="rounded-lg bg-slate-800 px-8 py-6 text-center text-white">
                  Default Card
                </div>
              )}

              {selectedId === "theme" && (
                <button className="rounded-xl bg-slate-700 px-7 py-4 font-bold text-white">
                  Default Button
                </button>
              )}

              {selectedId === "directives" && (
                <div className="flex gap-2">
                  <div className="rounded-lg bg-slate-800 px-4 py-3 text-sm text-white">
                    Card
                  </div>

                  <div className="rounded-lg bg-slate-800 px-4 py-3 text-sm text-white">
                    Button
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Arrow */}

          <div className="flex justify-center text-2xl font-bold text-cyan-400">
            →
          </div>

          {/* After */}

          <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              After
            </p>

            <div className="mt-5 flex min-h-[150px] items-center justify-center">
              {selectedId === "styles" && (
                <div
                  className={`rounded-2xl bg-slate-800 px-8 py-6 text-center text-white ${
                    current.target === "card"
                      ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950"
                      : ""
                  }`}
                >
                  <p className="font-bold">Custom Card</p>

                  <p className="mt-2 text-xs text-slate-400">card-custom</p>
                </div>
              )}

              {selectedId === "theme" && (
                <button
                  className={`rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 ${
                    current.target === "button"
                      ? "ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950"
                      : ""
                  }`}
                >
                  Brand Button
                </button>
              )}

              {selectedId === "directives" && (
                <div className="flex gap-3">
                  <div
                    className={`rounded-2xl bg-slate-800 px-5 py-4 text-sm font-semibold text-white ${
                      current.target === "ui"
                        ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950"
                        : ""
                    }`}
                  >
                    Custom Card
                  </div>

                  <button
                    className={`rounded-2xl bg-cyan-500 px-5 py-4 text-sm font-semibold text-white ${
                      current.target === "ui"
                        ? "ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950"
                        : ""
                    }`}
                  >
                    Brand
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What Changed */}

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                What Changed?
              </p>

              <p className="mt-2 text-white">
                <span className="text-slate-400">Before:</span> {current.before}
              </p>

              <p className="mt-1 text-white">
                <span className="text-slate-400">After:</span> {current.after}
              </p>
            </div>

            <div className="rounded-xl bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300">
              {current.memory}
            </div>
          </div>
        </div>
      </div>

      {/* Connection */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div
          className={`rounded-2xl border p-5 transition ${
            selectedId === "styles"
              ? "border-cyan-400 bg-cyan-400/10"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <p className="text-xs font-bold text-cyan-400">CUSTOM STYLES</p>

          <p className="mt-2 font-bold text-white">Create a reusable style</p>

          <p className="mt-2 text-sm text-slate-400">
            Example: custom card style
          </p>
        </div>

        <div
          className={`rounded-2xl border p-5 transition ${
            selectedId === "theme"
              ? "border-cyan-400 bg-cyan-400/10"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <p className="text-xs font-bold text-cyan-400">THEME VARIABLES</p>

          <p className="mt-2 font-bold text-white">Define your design</p>

          <p className="mt-2 text-sm text-slate-400">
            Example: custom brand color
          </p>
        </div>

        <div
          className={`rounded-2xl border p-5 transition ${
            selectedId === "directives"
              ? "border-cyan-400 bg-cyan-400/10"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <p className="text-xs font-bold text-cyan-400">
            FUNCTIONS & DIRECTIVES
          </p>

          <p className="mt-2 font-bold text-white">Extend Tailwind</p>

          <p className="mt-2 text-sm text-slate-400">
            Example: combine custom utilities
          </p>
        </div>
      </div>

      {/* Final Memory */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Final Memory
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Customization = Make Tailwind Fit Your Project
        </h3>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div>
            <p className="font-bold text-white">Custom Styles</p>

            <p className="mt-1 text-sm text-slate-400">
              Create your own reusable styles.
            </p>
          </div>

          <div>
            <p className="font-bold text-white">Theme Variables</p>

            <p className="mt-1 text-sm text-slate-400">
              Define your own design values.
            </p>
          </div>

          <div>
            <p className="font-bold text-white">Functions & Directives</p>

            <p className="mt-1 text-sm text-slate-400">
              Extend Tailwind for your project.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

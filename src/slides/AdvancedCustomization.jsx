// import Section from "../components/Section";
// import CodeBlock from "../components/CodeBlock";

// export default function AdvancedCustomization() {
//           const concepts = [
//                     {
//                               number: "01",
//                               title: "Theme Variables",
//                               description:
//                                         "Define reusable design values such as colors, fonts, and spacing.",
//                               example: "--color-brand",
//                               detail:
//                                         "Useful when you want a consistent design system across a project.",
//                     },
//                     {
//                               number: "02",
//                               title: "Custom Utilities",
//                               description:
//                                         "Create your own utility classes for repeated styles.",
//                               example: "@utility",
//                               detail:
//                                         "Useful when a project needs a custom utility that Tailwind does not provide.",
//                     },
//                     {
//                               number: "03",
//                               title: "Custom Components",
//                               description:
//                                         "Create reusable component styles for common UI elements.",
//                               example: "@layer components",
//                               detail:
//                                         "Useful for buttons, cards, navigation, and other repeated UI patterns.",
//                     },
//                     {
//                               number: "04",
//                               title: "Base Styles",
//                               description:
//                                         "Customize the default styles used across the application.",
//                               example: "@layer base",
//                               detail:
//                                         "Useful for setting global styles such as body or heading defaults.",
//                     },
//                     {
//                               number: "05",
//                               title: "Custom CSS",
//                               description:
//                                         "Add normal CSS when a utility class is not enough.",
//                               example: "custom.css",
//                               detail:
//                                         "Tailwind can work together with regular CSS when more control is needed.",
//                     },
//           ];

//           return (
//                     <Section
//                               number="34"
//                               label="Advanced Customization"
//                               title="Advanced Customization & Base Styles"
//                     >
//                               <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
//                                         Tailwind CSS can be customized to match a project's design
//                                         system while still allowing regular CSS when necessary.
//                               </p>

//                               <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
//                                         {concepts.map((concept) => (
//                                                   <div
//                                                             key={concept.number}
//                                                             className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
//                                                   >
//                                                             <span className="text-sm font-bold text-cyan-400">
//                                                                       {concept.number}
//                                                             </span>

//                                                             <h3 className="mt-4 text-xl font-bold text-white">
//                                                                       {concept.title}
//                                                             </h3>

//                                                             <p className="mt-3 leading-7 text-slate-400">
//                                                                       {concept.description}
//                                                             </p>

//                                                             <div className="mt-auto pt-5">
//                                                                       <code className="rounded-lg bg-slate-950 px-3 py-2 text-sm text-cyan-300">
//                                                                                 {concept.example}
//                                                                       </code>

//                                                                       <p className="mt-4 text-sm leading-6 text-slate-500">
//                                                                                 {concept.detail}
//                                                                       </p>
//                                                             </div>
//                                                   </div>
//                                         ))}
//                               </div>

//                               <div className="mt-10">
//                                         <h3 className="mb-4 text-xl font-bold text-white">
//                                                   Practical Example
//                                         </h3>

//                                         <CodeBlock>
//                                                   {`@import "tailwindcss";

// @theme {
//   --color-brand: #06b6d4;
// }

// @utility text-brand {
//   color: var(--color-brand);
// }

// @layer base {
//   body {
//     font-family: sans-serif;
//   }
// }`}
//                                         </CodeBlock>

//                                         <p className="mt-4 leading-7 text-slate-400">
//                                                   This example shows how a project can define a custom theme
//                                                   value, create a reusable utility, and add a global base style.
//                                         </p>
//                               </div>

//                               <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//                                         <h3 className="mb-3 text-lg font-bold text-cyan-300">
//                                                   Key Takeaway
//                                         </h3>

//                                         <p className="leading-7 text-slate-300">
//                                                   Tailwind is customizable. You can extend the theme, create
//                                                   custom utilities, define base styles, and still use regular
//                                                   CSS when needed.
//                                         </p>
//                               </div>
//                     </Section>
//           );
// }

import { useState } from "react";
import Section from "../components/Section";

export default function AdvancedCustomization() {
  const [activeDemo, setActiveDemo] = useState("theme");

  const concepts = [
    {
      id: "theme",
      number: "01",
      title: "Theme Variables",
      utility: "--color-brand",
      description:
        "Create reusable design values such as brand colors, fonts, and spacing.",
      why: "Use this when the same design value appears in many places.",
    },
    {
      id: "utility",
      number: "02",
      title: "Custom Utilities",
      utility: "@utility",
      description:
        "Create your own utility class when Tailwind does not provide the exact style you need.",
      why: "Use this for a small reusable style that you want to apply with a class.",
    },
    {
      id: "components",
      number: "03",
      title: "Custom Components",
      utility: "@layer components",
      description:
        "Create reusable styles for UI elements such as buttons, cards, and navigation.",
      why: "Use this when the same group of styles is repeated across many elements.",
    },
    {
      id: "base",
      number: "04",
      title: "Base Styles",
      utility: "@layer base",
      description:
        "Define global styles that should affect elements across the entire application.",
      why: "Use this for defaults such as body, headings, links, and form elements.",
    },
    {
      id: "css",
      number: "05",
      title: "Custom CSS",
      utility: "custom.css",
      description:
        "Use normal CSS when Tailwind utilities are not enough for a specific design.",
      why: "Tailwind and regular CSS can work together in the same project.",
    },
  ];

  const activeConcept = concepts.find((concept) => concept.id === activeDemo);

  return (
    <Section
      number="33"
      label="Advanced Customization"
      title="Customize Tailwind for Your Project"
    >
      {/* 1. What Is Customization? */}

      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind gives you ready-made utilities, but real projects often need
        their own colors, styles, and reusable patterns. Customization lets you
        extend Tailwind instead of writing everything from scratch.
      </p>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="text-lg font-bold text-cyan-300">
          Real Project Example
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Imagine a website that always uses the same brand color, button style,
          and font. Instead of repeating the same CSS everywhere, we can define
          these styles once and reuse them.
        </p>
      </div>

      {/* 2. What We Learn */}

      <div className="mt-10">
        <h3 className="mb-5 text-xl font-bold text-white">What We Learn</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setActiveDemo(concept.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                activeDemo === concept.id
                  ? "border-cyan-400/50 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cyan-400">
                  {concept.number}
                </span>

                <code className="rounded-lg bg-slate-950 px-2 py-1 text-xs text-cyan-300">
                  {concept.utility}
                </code>
              </div>

              <h4 className="mt-4 text-lg font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {concept.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Live Demo */}

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-bold text-white">Live Demo</h3>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="mb-6">
            <span className="text-sm font-bold text-cyan-400">
              {activeConcept.number}
            </span>

            <h4 className="mt-2 text-2xl font-bold text-white">
              {activeConcept.title}
            </h4>

            <p className="mt-2 max-w-2xl leading-7 text-slate-400">
              {activeConcept.description}
            </p>

            <p className="mt-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-300">Why use it?</span>{" "}
              {activeConcept.why}
            </p>
          </div>

          {/* Theme Variables */}

          {activeDemo === "theme" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Theme Variable</p>

                <code className="mt-3 block rounded-xl bg-slate-900 p-4 text-sm text-cyan-300">
                  --color-brand: #06b6d4;
                </code>
              </div>

              <div className="rounded-2xl bg-cyan-400 p-6 text-slate-950">
                <p className="text-sm font-semibold">Brand Color</p>

                <h5 className="mt-2 text-2xl font-bold">My Website</h5>

                <button className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                  Get Started
                </button>
              </div>
            </div>
          )}

          {/* Custom Utilities */}

          {activeDemo === "utility" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Custom Utility</p>

                <code className="mt-3 block rounded-xl bg-slate-900 p-4 text-sm leading-6 text-cyan-300">
                  @utility text-brand {"{"}
                  <br />
                  &nbsp;&nbsp;color: #06b6d4;
                  <br />
                  {"}"}
                </code>
              </div>

              <div className="flex items-center justify-center rounded-2xl bg-white/[0.04] p-8">
                <p className="text-3xl font-bold text-cyan-400">Brand Text</p>
              </div>
            </div>
          )}

          {/* Custom Components */}

          {activeDemo === "components" && (
            <div className="rounded-2xl bg-white/[0.04] p-6">
              <p className="mb-5 text-sm text-slate-400">
                One reusable button style can be used in many places.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
                  Get Started
                </button>

                <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
                  Learn More
                </button>

                <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
                  Contact Us
                </button>
              </div>

              <code className="mt-6 block rounded-xl bg-slate-900 p-4 text-sm text-cyan-300">
                .btn-primary {"{"}
                <br />
                &nbsp;&nbsp;@apply rounded-xl bg-cyan-400 px-5 py-3;
                <br />
                {"}"}
              </code>
            </div>
          )}

          {/* Base Styles */}

          {activeDemo === "base" && (
            <div className="rounded-2xl bg-white/[0.04] p-6">
              <p className="text-sm text-slate-400">
                Global styles affect the whole application.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-6 text-slate-900">
                <h5 className="text-2xl font-bold">Welcome to My Website</h5>

                <p className="mt-3 leading-7 text-slate-600">
                  This heading and paragraph can follow global base styles.
                </p>
              </div>

              <code className="mt-6 block rounded-xl bg-slate-900 p-4 text-sm leading-6 text-cyan-300">
                @layer base {"{"}
                <br />
                &nbsp;&nbsp;body {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </div>
          )}

          {/* Custom CSS */}

          {activeDemo === "css" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.04] p-6">
                <p className="text-sm text-slate-400">Tailwind Utility</p>

                <div className="mt-5 rounded-2xl bg-cyan-400 p-6 text-center font-bold text-slate-950">
                  Tailwind Classes
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] p-6">
                <p className="text-sm text-slate-400">Custom CSS</p>

                <div
                  className="mt-5 rounded-2xl bg-slate-900 p-6 text-center font-bold text-white"
                  style={{
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  Regular CSS
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Easy Rule */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-lg font-bold text-white">Easy Rule to Remember</h3>

        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
          <p>
            <span className="font-semibold text-cyan-300">Theme Variables</span>{" "}
            → define reusable design values.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">
              Custom Utilities
            </span>{" "}
            → create a small reusable utility.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">
              Custom Components
            </span>{" "}
            → reuse complete UI styles.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">Base Styles</span> →
            control global defaults.
          </p>

          <p>
            <span className="font-semibold text-cyan-300">Custom CSS</span> →
            handle styles that need normal CSS.
          </p>
        </div>
      </div>

      {/* 5. Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Tailwind does not mean "only use Tailwind classes." You can customize
          the design system, create reusable utilities and components, define
          global styles, and use regular CSS whenever you need more control.
        </p>
      </div>
    </Section>
  );
}



// import Section from "../components/Section";

// export default function CoreIdea() {
//   return (
//     <Section
//       number="02"
//       label="Core Idea"
//       title="How does the utility-first approach work?"
//     >
//       <div className="grid gap-5 md:grid-cols-2">

//         <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
//           <p className="text-3xl">🎨</p>

//           <h3 className="mt-4 text-xl font-bold text-white">
//             Small Utility Classes
//           </h3>

//           <p className="mt-3 leading-7 text-slate-400">
//             Tailwind provides small classes for common CSS properties such as
//             colors, spacing, sizing, typography, and layout.
//           </p>
//         </div>

//         <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
//           <p className="text-3xl">⚡</p>

//           <h3 className="mt-4 text-xl font-bold text-white">
//             Build Directly in HTML
//           </h3>

//           <p className="mt-3 leading-7 text-slate-400">
//             We can combine utility classes directly in HTML or JSX to create
//             our designs quickly.
//           </p>
//         </div>

//         <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
//           <p className="text-3xl">📱</p>

//           <h3 className="mt-4 text-xl font-bold text-white">
//             Responsive Design
//           </h3>

//           <p className="mt-3 leading-7 text-slate-400">
//             Tailwind includes responsive utilities that help us create layouts
//             for different screen sizes.
//           </p>
//         </div>

//         <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
//           <p className="text-3xl">🧩</p>

//           <h3 className="mt-4 text-xl font-bold text-white">
//             Flexible & Customizable
//           </h3>

//           <p className="mt-3 leading-7 text-slate-400">
//             We can combine utilities and customize the design according to
//             the needs of our project.
//           </p>
//         </div>

//       </div>

//       <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <h3 className="mb-3 text-xl font-bold text-white">
//           Simple Example
//         </h3>

//         <p className="font-mono text-cyan-300">
//           className="bg-blue-500 text-white p-4 rounded-lg"
//         </p>

//         <p className="mt-4 leading-7 text-slate-300">
//           Instead of writing separate CSS rules, we combine utility classes
//           directly in our HTML or JSX.
//         </p>
//       </div>
//     </Section>
//   );
// }


import Section from "../components/Section";

export default function CoreIdea() {
  return (
    <Section
      number="02"
      label="Utility Classes"
      title="How Do Tailwind Classes Build a Design?"
    >
      <div className="max-w-5xl space-y-7">

        {/* Short Explanation */}
        <div>
          <p className="text-xl font-bold leading-8 text-white">
            Each Tailwind class controls one part of the design.
          </p>

          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-400">
            We combine these small classes to create a complete UI.
          </p>
        </div>

        {/* Utility Classes */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="font-mono font-bold text-cyan-300">
              bg-white
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Background
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="font-mono font-bold text-cyan-300">
              p-6
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Padding
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="font-mono font-bold text-cyan-300">
              rounded-2xl
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Rounded corners
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="font-mono font-bold text-cyan-300">
              shadow-lg
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Shadow
            </p>
          </div>

        </div>

        {/* Live Example */}
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Live Example
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                Build a Card
              </h3>
            </div>

            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
              Live
            </span>
          </div>

          <div className="mt-6 grid items-center gap-6 lg:grid-cols-2">

            {/* Code */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Code
              </p>

              <div className="rounded-2xl bg-black/40 p-5 font-mono text-sm leading-7">
                <span className="text-slate-500">
                  &lt;div
                </span>{" "}
                <span className="text-cyan-300">
                  className
                </span>
                <span className="text-slate-500">
                  =
                </span>
                <span className="text-emerald-300">
                  "bg-white p-6 rounded-2xl shadow-lg"
                </span>
                <span className="text-slate-500">
                  &gt;
                </span>

                <br />

                <span className="ml-4 text-slate-300">
                  Hello Tailwind!
                </span>

                <br />

                <span className="text-slate-500">
                  &lt;/div&gt;
                </span>
              </div>
            </div>

            {/* Result */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Result
              </p>

              <div className="flex min-h-[170px] items-center justify-center rounded-2xl bg-slate-900 p-5">

                <div className="w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-lg">

                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-lg">
                    ✨
                  </div>

                  <h4 className="mt-3 text-lg font-black text-slate-900">
                    Hello Tailwind!
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Built with utility classes.
                  </p>

                  <button className="mt-4 rounded-xl bg-cyan-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-cyan-600">
                    Learn More
                  </button>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Simple Formula */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Simple Formula
          </p>

          <p className="mt-3 text-xl font-black text-white">
            Small Classes
            <span className="mx-2 text-cyan-300">+</span>
            Combined Together
            <span className="mx-2 text-cyan-300">=</span>
            Complete Design
          </p>

        </div>

        {/* Key Point */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5">

          <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
            Remember
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            One Class, One Job.
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Combine utility classes to build your interface.
          </p>

        </div>

      </div>
    </Section>
  );
}
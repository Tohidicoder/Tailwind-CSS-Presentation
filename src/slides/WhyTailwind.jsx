

// import Section from "../components/Section";

// export default function WhyTailwind() {
//   const reasons = [
//     {
//       title: "Fast Development",
//       text: "Build interfaces quickly using ready-to-use utility classes.",
//     },
//     {
//       title: "Responsive Design",
//       text: "Create layouts that work well on different screen sizes.",
//     },
//     {
//       title: "Consistent Design",
//       text: "Keep spacing, colors, and sizing consistent across the project.",
//     },
//     {
//       title: "Easy Prototyping",
//       text: "Turn design ideas into working interfaces quickly.",
//     },
//     {
//       title: "Less Custom CSS",
//       text: "Reduce the need to write separate CSS rules for every element.",
//     },
//   ];

//   return (
//     <Section
//       number="03"
//       label="Why Tailwind?"
//       title="Why do developers use it?"
//     >
//       {/* Cards */}
//       <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//         {reasons.map((reason, index) => (
//           <div
//             key={reason.title}
//             className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
//           >
//             <span className="text-sm font-bold text-cyan-400">
//               0{index + 1}
//             </span>

//             <h3 className="mt-4 text-xl font-bold text-white">
//               {reason.title}
//             </h3>

//             <p className="mt-3 leading-7 text-slate-400">
//               {reason.text}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Key Point */}
//       <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
//         <h3 className="font-bold text-cyan-400">
//           Key Point
//         </h3>

//         <p className="mt-2 leading-7 text-slate-300">
//           Tailwind CSS helps developers build responsive and
//           consistent interfaces faster with utility classes.
//         </p>
//       </div>
//     </Section>
//   );
// }

import Section from "../components/Section";

export default function WhyTailwind() {
  const reasons = [
    {
      icon: "⚡",
      title: "Faster Development",
      text: "Build interfaces quickly with ready-to-use utility classes.",
    },
    {
      icon: "🎨",
      title: "Consistent Design",
      text: "Keep colors, spacing, sizes, and styles consistent across the project.",
    },
    {
      icon: "🧩",
      title: "Less Custom CSS",
      text: "Write fewer separate CSS rules and keep styling close to your HTML or JSX.",
    },
    {
      icon: "🚀",
      title: "Easy Prototyping",
      text: "Turn an idea into a working interface quickly.",
    },
  ];

  return (
    <Section
      number="03"
      label="Why Tailwind?"
      title="Why Do Developers Choose Tailwind?"
    >
      <div className="max-w-5xl space-y-7">

        {/* Short Explanation */}
        <div>
          <p className="text-xl font-bold leading-8 text-white">
            Tailwind makes UI development faster and easier to manage.
          </p>

          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-400">
            Developers can build interfaces quickly without writing lots of
            custom CSS.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                  {reason.icon}
                </div>

                <div>
                  <h3 className="font-black text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {reason.text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Real Example */}
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Real Example
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              Build a Button
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Compare traditional CSS with Tailwind.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">

            {/* Traditional CSS */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Traditional CSS
              </p>

              <pre className="mt-4 overflow-x-auto rounded-xl bg-black/30 p-4 text-xs leading-6 text-slate-300">
                {`.button {
  background: #06b6d4;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: bold;
}`}
              </pre>

              <button className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white">
                Get Started
              </button>

            </div>

            {/* Tailwind */}
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">

              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Tailwind
              </p>

              <div className="mt-4 rounded-xl bg-black/30 p-4 font-mono text-xs leading-6 text-emerald-300">
                bg-cyan-500 text-white
                <br />
                px-6 py-3 rounded-xl
                <br />
                font-bold
              </div>

              <button className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white">
                Get Started
              </button>

            </div>

          </div>
        </div>

        {/* Key Point */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Remember
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            Faster Development + Less Custom CSS
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Build your interface directly with utility classes.
          </p>

        </div>

      </div>
    </Section>
  );
}


// import Section from "../components/Section";

// export default function Introduction() {
//   return (
//     <Section
//       number="01"
//       label="Introduction"
//       title="What is Tailwind CSS?"
//     >
//       <div className="max-w-5xl space-y-8">

//         {/* Main Definition */}
//         <div>
//           <p className="text-2xl font-bold leading-relaxed text-white">
//             Tailwind CSS is a{" "}
//             <span className="text-cyan-300">utility-first CSS framework</span>{" "}
//             that lets us build interfaces by combining small CSS utility
//             classes.
//           </p>

//           <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
//             Instead of writing custom CSS for every element, we use ready-made
//             classes directly in our HTML or JSX.
//           </p>
//         </div>

//         {/* The Main Idea */}
//         <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
//           <h3 className="text-2xl font-black text-white">
//             The main idea 💡
//           </h3>

//           <p className="mt-3 text-lg leading-8 text-slate-300">
//             Think of Tailwind classes like{" "}
//             <span className="font-bold text-cyan-300">
//               small building blocks.
//             </span>
//           </p>

//           <p className="mt-2 text-slate-400">
//             Each class does one small job — and we combine them to create a
//             complete design.
//           </p>
//         </div>

//         {/* Utility Classes */}
//         <div>
//           <h3 className="text-2xl font-black text-white">
//             What is a Utility Class?
//           </h3>

//           <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-400">
//             A utility class is a small class that applies{" "}
//             <span className="font-bold text-cyan-300">
//               one specific CSS property
//             </span>{" "}
//             to an element.
//           </p>
//         </div>

//         {/* Live Example */}
//         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">

//           <h3 className="text-xl font-black text-white">
//             Live Example
//           </h3>

//           <div className="mt-6 grid gap-6 lg:grid-cols-2">

//             {/* Code */}
//             <div>
//               <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
//                 Tailwind
//               </p>

//               <div className="rounded-2xl bg-black/40 p-5 font-mono text-sm leading-8">
//                 <span className="text-slate-300">&lt;button</span>{" "}
//                 <span className="text-cyan-300">className</span>
//                 <span className="text-slate-300">=</span>
//                 <span className="text-emerald-300">
//                   "bg-cyan-500 text-white px-6 py-3 rounded-xl"
//                 </span>
//                 <span className="text-slate-300">&gt;</span>
//                 <br />
//                 <span className="text-slate-300 ml-4">
//                   Get Started
//                 </span>
//                 <br />
//                 <span className="text-slate-300">&lt;/button&gt;</span>
//               </div>
//             </div>

//             {/* Result */}
//             <div>
//               <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
//                 Result
//               </p>

//               <div className="flex min-h-[150px] items-center justify-center rounded-2xl bg-slate-900">
//                 <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg">
//                   Get Started
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* Explain Classes */}
//           <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

//             <div className="rounded-xl bg-white/5 p-4">
//               <p className="font-mono font-bold text-cyan-300">
//                 bg-cyan-500
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Background color
//               </p>
//             </div>

//             <div className="rounded-xl bg-white/5 p-4">
//               <p className="font-mono font-bold text-cyan-300">
//                 text-white
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Text color
//               </p>
//             </div>

//             <div className="rounded-xl bg-white/5 p-4">
//               <p className="font-mono font-bold text-cyan-300">
//                 px-6 py-3
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Horizontal & vertical padding
//               </p>
//             </div>

//             <div className="rounded-xl bg-white/5 p-4">
//               <p className="font-mono font-bold text-cyan-300">
//                 rounded-xl
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Border radius
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* Why Tailwind */}
//         <div className="grid gap-4 md:grid-cols-3">

//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
//             <h4 className="font-black text-white">
//               ⚡ Faster
//             </h4>
//             <p className="mt-2 text-sm leading-6 text-slate-400">
//               Build designs quickly without writing lots of custom CSS.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
//             <h4 className="font-black text-white">
//               🎯 Consistent
//             </h4>
//             <p className="mt-2 text-sm leading-6 text-slate-400">
//               Use the same design system and spacing throughout your project.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
//             <h4 className="font-black text-white">
//               📱 Responsive
//             </h4>
//             <p className="mt-2 text-sm leading-6 text-slate-400">
//               Easily create layouts that work across different screen sizes.
//             </p>
//           </div>

//         </div>

//         {/* Memory Box */}
//         <div className="rounded-3xl border border-violet-400/20 bg-violet-400/5 p-7">

//           <p className="text-sm font-bold uppercase tracking-widest text-violet-300">
//             Remember this
//           </p>

//           <h3 className="mt-3 text-2xl font-black text-white">
//             Small classes → Combined together → Complete design
//           </h3>

//           <p className="mt-3 text-lg leading-8 text-slate-300">
//             Tailwind is like having a toolbox. Each utility class is one tool,
//             and we combine those tools to build our interface.
//           </p>

//         </div>

//       </div>
//     </Section>
//   );
// }



// import Section from "../components/Section";

// export default function Introduction() {
//   return (<Section
//     number="01"
//     label="Introduction"
//     title="What is Tailwind CSS?"
//   > <div className="max-w-5xl space-y-7">


//       {/* Main Definition */}
//       <div>
//         <p className="text-2xl font-bold leading-relaxed text-white">
//           Tailwind CSS is a{" "}
//           <span className="text-cyan-300">
//             utility-first CSS framework
//           </span>{" "}
//           for building modern user interfaces.
//         </p>

//         <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-400">
//           It lets us style HTML and JSX directly using small, ready-to-use
//           utility classes.
//         </p>
//       </div>

//       {/* History */}
//       <div className="grid gap-4 md:grid-cols-3">

//         <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
//           <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//             When?
//           </p>

//           <h3 className="mt-2 text-xl font-black text-white">
//             2017
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-slate-400">
//             Tailwind CSS started around 2017.
//           </p>
//         </div>

//         <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
//           <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//             Created by
//           </p>

//           <h3 className="mt-2 text-xl font-black text-white">
//             Adam Wathan
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-slate-400">
//             Tailwind was created by Adam Wathan and contributors.
//           </p>
//         </div>

//         <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
//           <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//             Why?
//           </p>

//           <h3 className="mt-2 text-xl font-black text-white">
//             Faster Styling
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-slate-400">
//             It was designed to make building custom interfaces faster and
//             more flexible.
//           </p>
//         </div>

//       </div>

//       {/* Main Idea */}
//       <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

//         <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//           The Main Idea
//         </p>

//         <h3 className="mt-2 text-2xl font-black text-white">
//           Small Building Blocks
//         </h3>

//         <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
//           Tailwind gives us small utility classes. Each class controls a
//           specific part of the design, and we combine them to build our UI.
//         </p>

//       </div>

//       {/* Utility Class */}
//       <div>
//         <h3 className="text-2xl font-black text-white">
//           What is a Utility Class?
//         </h3>

//         <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-400">
//           A utility class is a small class that applies one specific style
//           to an element.
//         </p>
//       </div>

//       {/* Live Example */}
//       <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

//         <div>
//           <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//             Live Example
//           </p>

//           <h3 className="mt-2 text-xl font-black text-white">
//             Build a Button
//           </h3>
//         </div>

//         <div className="mt-5 grid gap-5 lg:grid-cols-2">

//           {/* Code */}
//           <div>
//             <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
//               Tailwind Code
//             </p>

//             <div className="rounded-2xl bg-black/40 p-5 font-mono text-sm leading-7">

//               <span className="text-slate-300">
//                 &lt;button
//               </span>{" "}

//               <span className="text-cyan-300">
//                 className
//               </span>

//               <span className="text-slate-300">
//                 =
//               </span>

//               <span className="text-emerald-300">
//                 "bg-cyan-500 text-white px-6 py-3 rounded-xl"
//               </span>

//               <span className="text-slate-300">
//                 &gt;
//               </span>

//               <br />

//               <span className="ml-4 text-slate-300">
//                 Get Started
//               </span>

//               <br />

//               <span className="text-slate-300">
//                 &lt;/button&gt;
//               </span>

//             </div>
//           </div>

//           {/* Result */}
//           <div>
//             <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
//               Result
//             </p>

//             <div className="flex min-h-[140px] items-center justify-center rounded-2xl bg-slate-900">

//               <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg">
//                 Get Started
//               </button>

//             </div>
//           </div>

//         </div>

//         {/* Class Breakdown */}
//         <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

//           <div className="rounded-xl bg-white/5 p-4">
//             <p className="font-mono font-bold text-cyan-300">
//               bg-cyan-500
//             </p>

//             <p className="mt-1 text-sm text-slate-400">
//               Background
//             </p>
//           </div>

//           <div className="rounded-xl bg-white/5 p-4">
//             <p className="font-mono font-bold text-cyan-300">
//               text-white
//             </p>

//             <p className="mt-1 text-sm text-slate-400">
//               Text color
//             </p>
//           </div>

//           <div className="rounded-xl bg-white/5 p-4">
//             <p className="font-mono font-bold text-cyan-300">
//               px-6 py-3
//             </p>

//             <p className="mt-1 text-sm text-slate-400">
//               Padding
//             </p>
//           </div>

//           <div className="rounded-xl bg-white/5 p-4">
//             <p className="font-mono font-bold text-cyan-300">
//               rounded-xl
//             </p>

//             <p className="mt-1 text-sm text-slate-400">
//               Rounded corners
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* Memory Box */}
//       <div className="rounded-3xl border border-violet-400/20 bg-violet-400/5 p-6">

//         <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
//           Remember
//         </p>

//         <h3 className="mt-2 text-2xl font-black text-white">
//           What → Who → Why → Example
//         </h3>

//         <p className="mt-2 text-base leading-7 text-slate-300">
//           Tailwind CSS started around 2017, was created by Adam Wathan and
//           contributors, and was designed to make custom UI styling faster
//           and more flexible.
//         </p>

//       </div>

//     </div>
//   </Section>


//   );
// }




import Section from "../components/Section";

export default function Introduction() {
  return (
    <Section
      number="01"
      label="Introduction"
      title="What is Tailwind CSS?"
    >
      <div className="max-w-5xl space-y-7">

        {/* Definition */}
        <div>
          <p className="text-2xl font-bold leading-relaxed text-white">
            Tailwind CSS is a{" "}
            <span className="text-cyan-300">
              utility-first CSS framework
            </span>{" "}
            for building modern user interfaces.
          </p>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-400">
            It lets us style HTML and JSX directly using small,
            ready-to-use utility classes.
          </p>
        </div>

        {/* History */}
        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              When?
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              2017
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tailwind CSS started around 2017.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Created by
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              Adam Wathan
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Created by Adam Wathan and contributors.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Why?
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              Faster Styling
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Designed to make custom UI styling faster and more flexible.
            </p>
          </div>

        </div>

        {/* Main Idea */}
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Main Idea
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Small Building Blocks
          </h3>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Tailwind gives us small utility classes. Each class controls
            one part of the design, and we combine them to build our UI.
          </p>

        </div>

        {/* Live Example */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Live Example
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              Build a Button
            </h3>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">

            {/* Code */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Tailwind Code
              </p>

              <div className="rounded-2xl bg-black/40 p-5 font-mono text-sm leading-7">

                <span className="text-slate-300">
                  &lt;button
                </span>{" "}

                <span className="text-cyan-300">
                  className
                </span>

                <span className="text-slate-300">
                  =
                </span>

                <span className="text-emerald-300">
                  "bg-cyan-500 text-white px-6 py-3 rounded-xl"
                </span>

                <span className="text-slate-300">
                  &gt;
                </span>

                <br />

                <span className="ml-4 text-slate-300">
                  Get Started
                </span>

                <br />

                <span className="text-slate-300">
                  &lt;/button&gt;
                </span>

              </div>
            </div>

            {/* Result */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Result
              </p>

              <div className="flex min-h-[140px] items-center justify-center rounded-2xl bg-slate-900">

                <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg">
                  Get Started
                </button>

              </div>
            </div>

          </div>

          {/* Class Breakdown */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-white/5 p-4">
              <p className="font-mono font-bold text-cyan-300">
                bg-cyan-500
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Background
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="font-mono font-bold text-cyan-300">
                text-white
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Text color
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="font-mono font-bold text-cyan-300">
                px-6 py-3
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Padding
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="font-mono font-bold text-cyan-300">
                rounded-xl
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Border radius
              </p>
            </div>

          </div>

        </div>

        {/* Key Point */}
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5">

          <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
            Remember
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            Small Classes → Complete Design
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Tailwind combines small utility classes to build complete
            interfaces quickly.
          </p>

        </div>

      </div>
    </Section>
  );
}
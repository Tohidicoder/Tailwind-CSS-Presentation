
// import { useState } from "react";
// import Section from "../components/Section";

// export default function BackgroundsBorders() {
//   /*
//     ARRAY OF OBJECTS

//     Each object represents one Backgrounds & Borders concept.

//     Instead of writing every concept separately,
//     we keep the information in one array and use map()
//     to display it.
//   */
//   const concepts = [
//     {
//       id: "background",
//       number: "01",
//       title: "Background Color",
//       question: "What is behind the element?",
//       description:
//         "Controls the color behind the content of an element.",
//       classes: "bg-blue-500 • bg-gray-900 • bg-white",
//       realUse: "Cards, buttons, sections",
//     },
//     {
//       id: "image",
//       number: "02",
//       title: "Background Image",
//       question: "What image is behind the content?",
//       description:
//         "Places an image behind the content and controls how it appears.",
//       classes: "bg-[url(...)] • bg-cover • bg-center",
//       realUse: "Hero sections and banners",
//     },
//     {
//       id: "gradient",
//       number: "03",
//       title: "Gradient",
//       question: "How can colors smoothly change?",
//       description:
//         "Creates a smooth transition between two or more colors.",
//       classes: "bg-linear-to-r • from-blue-500 • to-purple-500",
//       realUse: "Hero sections and modern cards",
//     },
//     {
//       id: "border",
//       number: "04",
//       title: "Border",
//       question: "What line surrounds the element?",
//       description:
//         "Adds an outline around an element and controls its thickness.",
//       classes: "border • border-2 • border-4",
//       realUse: "Cards, inputs, buttons",
//     },
//     {
//       id: "radius",
//       number: "05",
//       title: "Border Radius",
//       question: "How round should the corners be?",
//       description:
//         "Controls how rounded the corners of an element are.",
//       classes: "rounded • rounded-lg • rounded-full",
//       realUse: "Cards, buttons, images",
//     },
//     {
//       id: "borderColor",
//       number: "06",
//       title: "Border Color",
//       question: "What color should the border be?",
//       description:
//         "Controls the color of the border around an element.",
//       classes: "border-blue-500 • border-gray-300",
//       realUse: "Inputs, cards, active states",
//     },
//   ];

//   /*
//     useState

//     selected stores the concept currently chosen
//     in the interactive playground.
//   */
//   const [selected, setSelected] = useState("background");

//   /*
//     find()

//     Find the selected concept from our array of objects.
//   */
//   const current = concepts.find((concept) => concept.id === selected);

//   return (
//     <Section
//       number="12"
//       label="Backgrounds & Borders"
//       title="What Is Behind and Around an Element?"
//     >
//       {/* Main Idea */}

//       <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//           Main Idea
//         </p>

//         <h2 className="mt-3 text-2xl font-bold text-white">
//           Background = Inside
//           <span className="mx-3 text-slate-500">•</span>
//           Border = Around
//         </h2>

//         <p className="mt-4 max-w-3xl leading-7 text-slate-300">
//           Background controls what appears behind an element,
//           while Border creates a visible line around it.
//           Together, they help us style cards, buttons, inputs,
//           hero sections, and other UI elements.
//         </p>
//       </div>

//       {/* What We Learn */}

//       <div className="mb-8">
//         <div className="mb-4">
//           <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//             What We Learn
//           </p>

//           <h3 className="mt-2 text-xl font-bold text-white">
//             Six practical concepts
//           </h3>
//         </div>

//         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {concepts.map((concept) => (
//             <button
//               key={concept.id}
//               onClick={() => setSelected(concept.id)}
//               className={`rounded-xl border p-4 text-left transition ${selected === concept.id
//                 ? "border-cyan-400/50 bg-cyan-400/10"
//                 : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
//                 }`}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-xs font-bold text-cyan-400">
//                   {concept.number}
//                 </span>

//                 <span className="font-semibold text-white">
//                   {concept.title}
//                 </span>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Easy Mental Model */}

//       <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
//         <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//           Easy Mental Model
//         </p>

//         <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
//           {[
//             ["Background", "Inside"],
//             ["Border", "Around"],
//             ["Radius", "Corners"],
//             ["Gradient", "Color Transition"],
//             ["Image", "Behind"],
//           ].map(([title, meaning]) => (
//             <div
//               key={title}
//               className="rounded-xl border border-white/10 bg-slate-950/60 p-4"
//             >
//               <p className="font-bold text-white">{title}</p>
//               <p className="mt-1 text-sm text-slate-400">{meaning}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Interactive Playground */}

//       <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-6">
//         <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//               Interactive Playground
//             </p>

//             <h3 className="mt-2 text-xl font-bold text-white">
//               Explore the concepts
//             </h3>
//           </div>

//           {/* Dropdown */}

//           <select
//             value={selected}
//             onChange={(e) => setSelected(e.target.value)}
//             className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-white outline-none"
//           >
//             {concepts.map((concept) => (
//               <option key={concept.id} value={concept.id}>
//                 {concept.number} — {concept.title}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Selected Concept */}

//         <div className="mt-6 grid gap-6 lg:grid-cols-2">
//           <div>
//             <span className="text-sm font-bold text-cyan-400">
//               {current.number}
//             </span>

//             <h4 className="mt-2 text-2xl font-bold text-white">
//               {current.title}
//             </h4>

//             <p className="mt-2 font-medium text-slate-300">
//               {current.question}
//             </p>

//             <p className="mt-4 leading-7 text-slate-400">
//               {current.description}
//             </p>

//             <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
//               <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
//                 Tailwind Classes
//               </p>

//               <code className="text-sm leading-7 text-cyan-200">
//                 {current.classes}
//               </code>
//             </div>

//             <div className="mt-4">
//               <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
//                 Real Use
//               </span>

//               <p className="mt-1 text-sm text-slate-300">
//                 {current.realUse}
//               </p>
//             </div>
//           </div>

//           {/* Live Example */}

//           <div>
//             <p className="mb-3 text-sm font-bold uppercase tracking-wider text-cyan-400">
//               Live Example
//             </p>

//             <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900 p-6">

//               {/* Background Color */}

//               {selected === "background" && (
//                 <div className="rounded-2xl bg-blue-500 px-10 py-8 text-center text-xl font-bold text-white shadow-lg">
//                   Background Color
//                 </div>
//               )}

//               {/* Background Image */}

//               {selected === "image" && (
//                 <div
//                   className="flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-cover bg-center p-8"
//                   style={{
//                     backgroundImage:
//                       "url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80')",
//                   }}
//                 >
//                   <div className="rounded-xl bg-black/50 px-6 py-4 text-center">
//                     <p className="text-xl font-bold text-white">
//                       Background Image
//                     </p>

//                     <p className="mt-2 text-sm text-white/80">
//                       Hero Section
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Gradient */}

//               {selected === "gradient" && (
//                 <div className="w-full rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-10 text-center text-xl font-bold text-white">
//                   Smooth Color Transition
//                 </div>
//               )}

//               {/* Border */}

//               {selected === "border" && (
//                 <div className="rounded-2xl border-4 border-blue-500 px-10 py-8 text-center text-xl font-bold text-white">
//                   Border
//                 </div>
//               )}

//               {/* Border Radius */}

//               {selected === "radius" && (
//                 <div className="rounded-full bg-blue-500 px-10 py-8 text-center text-xl font-bold text-white">
//                   Rounded Corners
//                 </div>
//               )}

//               {/* Border Color */}

//               {selected === "borderColor" && (
//                 <div className="w-full max-w-sm">
//                   <label className="mb-2 block text-sm text-slate-400">
//                     Email Address
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="you@example.com"
//                     className="w-full rounded-xl border-2 border-blue-500 bg-slate-900 px-4 py-3 text-white outline-none"
//                   />

//                   <p className="mt-2 text-xs text-slate-500">
//                     Blue border shows the active state.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Real UI Example */}

//       <div className="mt-8">
//         <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//           Real UI Example
//         </p>

//         <h3 className="mt-2 text-xl font-bold text-white">
//           One Card, Multiple Utilities
//         </h3>

//         <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
//           <div className="bg-linear-to-r from-blue-500 to-purple-500 p-8">
//             <h4 className="text-2xl font-bold text-white">
//               Build Better Interfaces
//             </h4>

//             <p className="mt-2 text-white/80">
//               Background + Gradient + Border + Radius
//             </p>
//           </div>

//           <div className="p-6">
//             <p className="text-slate-300">
//               This is how several small Tailwind utilities
//               work together to create a real UI component.
//             </p>

//             <button className="mt-4 rounded-xl border border-blue-400/30 bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Quick Reference */}

//       <div className="mt-8">
//         <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//           Quick Reference
//         </p>

//         <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
//           {concepts.map((concept) => (
//             <div
//               key={concept.id}
//               className="grid gap-2 border-b border-white/10 bg-white/[0.03] p-4 last:border-b-0 sm:grid-cols-[180px_1fr]"
//             >
//               <span className="font-semibold text-white">
//                 {concept.title}
//               </span>

//               <code className="text-sm text-cyan-200">
//                 {concept.classes}
//               </code>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Final Memory */}

//       <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
//           Remember
//         </p>

//         <h3 className="mt-3 text-xl font-bold text-white">
//           Background → Border → Radius → Gradient → Image
//         </h3>

//         <p className="mt-3 max-w-3xl leading-7 text-slate-300">
//           Background controls what is behind the element.
//           Border controls what surrounds it.
//           Radius controls the corners.
//           Gradient creates smooth color transitions.
//           Background Image places an image behind the content.
//         </p>
//       </div>
//     </Section>
//   );
// }



// :::writing{variant="document" id="58347" title="BackgroundsBorder.jsx — Fixed"}
import { useState } from "react";
import Section from "../components/Section";

export default function BackgroundsBorder() {
  const concepts = [
    {
      id: "background",
      number: "01",
      title: "Background Color",
      question: "What is behind the element?",
      description:
        "Controls the color behind the content of an element.",
      classes: "bg-blue-500 • bg-gray-900 • bg-white",
      realUse: "Cards, buttons, sections",
    },
    {
      id: "image",
      number: "02",
      title: "Background Image",
      question: "What image is behind the content?",
      description:
        "Places an image behind the content and controls how it appears.",
      classes: "bg-[url(...)] • bg-cover • bg-center",
      realUse: "Hero sections and banners",
    },
    {
      id: "gradient",
      number: "03",
      title: "Gradient",
      question: "How can colors smoothly change?",
      description:
        "Creates a smooth transition between two or more colors.",
      classes: "bg-linear-to-r • from-blue-500 • to-purple-500",
      realUse: "Hero sections and modern cards",
    },
    {
      id: "border",
      number: "04",
      title: "Border",
      question: "What line surrounds the element?",
      description:
        "Adds an outline around an element and controls its thickness.",
      classes: "border • border-2 • border-4",
      realUse: "Cards, inputs, buttons",
    },
    {
      id: "radius",
      number: "05",
      title: "Border Radius",
      question: "How round should the corners be?",
      description:
        "Controls how rounded the corners of an element are.",
      classes: "rounded • rounded-lg • rounded-full",
      realUse: "Cards, buttons, images",
    },
    {
      id: "borderColor",
      number: "06",
      title: "Border Color",
      question: "What color should the border be?",
      description:
        "Controls the color of the border around an element.",
      classes: "border-blue-500 • border-gray-300",
      realUse: "Inputs, cards, active states",
    },
  ];

  const [selected, setSelected] = useState("background");

  const current = concepts.find(
    (concept) => concept.id === selected
  );

  return (
    <Section
      number="12"
      label="Backgrounds & Borders"
      title="What Is Behind and Around an Element?"
    >
      {/* Main Idea */}
      <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Main Idea
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Background = Inside
          <span className="mx-3 text-slate-500">•</span>
          Border = Around
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Background controls what appears behind an element,
          while Border creates a visible line around it.
          Together, they help us style cards, buttons, inputs,
          hero sections, and other UI elements.
        </p>
      </div>

      {/* What We Learn */}
      <div className="mb-8">
        <div className="mb-4">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            What We Learn
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Six practical concepts
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelected(concept.id)}
              className={`rounded-xl border p-4 text-left transition ${selected === concept.id
                  ? "border-cyan-400/50 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-cyan-400">
                  {concept.number}
                </span>

                <span className="font-semibold text-white">
                  {concept.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Easy Mental Model */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Easy Mental Model
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Background", "Inside"],
            ["Border", "Around"],
            ["Radius", "Corners"],
            ["Gradient", "Color Transition"],
            ["Image", "Behind"],
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

      {/* Interactive Playground */}
      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Interactive Playground
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Explore the concepts
            </h3>
          </div>

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

            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Real Use
              </span>

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

            <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900 p-6">
              {selected === "background" && (
                <div className="rounded-2xl bg-blue-500 px-10 py-8 text-center text-xl font-bold text-white shadow-lg">
                  Background Color
                </div>
              )}

              {selected === "image" && (
                <div
                  className="flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-cover bg-center p-8"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80')",
                  }}
                >
                  <div className="rounded-xl bg-black/50 px-6 py-4 text-center">
                    <p className="text-xl font-bold text-white">
                      Background Image
                    </p>

                    <p className="mt-2 text-sm text-white/80">
                      Hero Section
                    </p>
                  </div>
                </div>
              )}

              {selected === "gradient" && (
                <div className="w-full rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-10 text-center text-xl font-bold text-white">
                  Smooth Color Transition
                </div>
              )}

              {selected === "border" && (
                <div className="rounded-2xl border-4 border-blue-500 px-10 py-8 text-center text-xl font-bold text-white">
                  Border
                </div>
              )}

              {selected === "radius" && (
                <div className="rounded-full bg-blue-500 px-10 py-8 text-center text-xl font-bold text-white">
                  Rounded Corners
                </div>
              )}

              {selected === "borderColor" && (
                <div className="w-full max-w-sm">
                  <label className="mb-2 block text-sm text-slate-400">
                    Email Address
                  </label>

                  <input
                    type="text"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border-2 border-blue-500 bg-slate-900 px-4 py-3 text-white outline-none"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Blue border shows the active state.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Real UI Example */}
      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Real UI Example
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          One Card, Multiple Utilities
        </h3>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          <div className="bg-linear-to-r from-blue-500 to-purple-500 p-8">
            <h4 className="text-2xl font-bold text-white">
              Build Better Interfaces
            </h4>

            <p className="mt-2 text-white/80">
              Background + Gradient + Border + Radius
            </p>
          </div>

          <div className="p-6">
            <p className="text-slate-300">
              This is how several small Tailwind utilities
              work together to create a real UI component.
            </p>

            <button className="mt-4 rounded-xl border border-blue-400/30 bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Quick Reference
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="grid gap-2 border-b border-white/10 bg-white/[0.03] p-4 last:border-b-0 sm:grid-cols-[180px_1fr]"
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
          Remember
        </p>

        <h3 className="mt-3 text-xl font-bold text-white">
          Background → Border → Radius → Gradient → Image
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-slate-300">
          Background controls what is behind the element.
          Border controls what surrounds it.
          Radius controls the corners.
          Gradient creates smooth color transitions.
          Background Image places an image behind the content.
        </p>
      </div>
    </Section>
  );
}
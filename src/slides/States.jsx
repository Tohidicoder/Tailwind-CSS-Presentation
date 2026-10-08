// // import Section from "../components/Section";
// // import CodeBlock from "../components/CodeBlock";

// // export default function States() {
// //   const concepts = [
// //     {
// //       number: "01",
// //       title: "Hover",
// //       description:
// //         "Applies styles when the user moves the mouse over an element.",
// //       example: "hover:bg-blue-700  hover:scale-105",
// //     },
// //     {
// //       number: "02",
// //       title: "Focus",
// //       description:
// //         "Applies styles when an element receives focus, such as an input field.",
// //       example: "focus:ring-2  focus:ring-blue-500",
// //     },
// //     {
// //       number: "03",
// //       title: "Active",
// //       description:
// //         "Applies styles while an element is being pressed or activated.",
// //       example: "active:scale-95  active:bg-blue-800",
// //     },
// //     {
// //       number: "04",
// //       title: "Disabled",
// //       description:
// //         "Applies styles to elements that are disabled and cannot be interacted with.",
// //       example: "disabled:opacity-50  disabled:cursor-not-allowed",
// //     },
// //     {
// //       number: "05",
// //       title: "Group",
// //       description:
// //         "Allows a child element to change its style when the parent group is hovered or focused.",
// //       example: "group  group-hover:text-cyan-400",
// //     },
// //   ];

// //   return (
// //     <Section
// //       number="17"
// //       label="States"
// //       title="Styling Interactive States"
// //     >
// //       <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
// //         Tailwind CSS provides state variants that allow us to
// //         change an element's appearance based on user interaction,
// //         such as hover, focus, active, and disabled states.
// //       </p>

// //       <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
// //         {concepts.map((concept) => (
// //           <div
// //             key={concept.number}
// //             className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
// //           >
// //             <span className="text-sm font-bold text-cyan-400">
// //               {concept.number}
// //             </span>

// //             <h3 className="mt-4 text-xl font-bold text-white">
// //               {concept.title}
// //             </h3>

// //             <p className="mt-3 flex-1 leading-7 text-slate-400">
// //               {concept.description}
// //             </p>

// //             <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
// //               <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
// //                 Tailwind Classes
// //               </p>

// //               <code className="break-words text-sm leading-7 text-cyan-200">
// //                 {concept.example}
// //               </code>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="mt-8">
// //         <h3 className="mb-4 text-xl font-bold text-white">
// //           Example — Hover
// //         </h3>

// //         <CodeBlock>{`<button
// //   className="rounded-lg bg-blue-500 px-6 py-3
// //   font-semibold text-white transition
// //   hover:bg-blue-700 hover:scale-105"
// // >
// //   Hover Me
// // </button>`}</CodeBlock>

// //         <p className="mt-4 leading-7 text-slate-400">
// //           In this example, the button changes its background color
// //           and becomes slightly larger when the user moves the mouse
// //           over it.
// //         </p>
// //       </div>

// //       <div className="mt-8">
// //         <h3 className="mb-4 text-xl font-bold text-white">
// //           Example — Focus
// //         </h3>

// //         <CodeBlock>{`<input
// //   type="text"
// //   placeholder="Enter your name"
// //   className="rounded-lg border border-gray-600
// //   bg-gray-900 px-4 py-3 text-white
// //   outline-none focus:border-blue-500
// //   focus:ring-2 focus:ring-blue-500"
// // />`}</CodeBlock>

// //         <p className="mt-4 leading-7 text-slate-400">
// //           When the input receives focus, the border and focus ring
// //           change color to show the user which field is active.
// //         </p>
// //       </div>

// //       <div className="mt-8">
// //         <h3 className="mb-4 text-xl font-bold text-white">
// //           Example — Disabled
// //         </h3>

// //         <CodeBlock>{`<button
// //   disabled
// //   className="rounded-lg bg-blue-500 px-6 py-3
// //   text-white disabled:cursor-not-allowed
// //   disabled:opacity-50"
// // >
// //   Disabled
// // </button>`}</CodeBlock>

// //         <p className="mt-4 leading-7 text-slate-400">
// //           The disabled variants make it clear that the button
// //           cannot currently be used.
// //         </p>
// //       </div>

// //       <div className="mt-8">
// //         <h3 className="mb-4 text-xl font-bold text-white">
// //           Example — Group
// //         </h3>

// //         <CodeBlock>{`<div className="group rounded-xl bg-slate-800 p-6">
// //   <h2 className="text-white group-hover:text-cyan-400">
// //     Hover the Card
// //   </h2>

// //   <p className="mt-2 text-gray-400">
// //     The title changes when the card is hovered.
// //   </p>
// // </div>`}</CodeBlock>

// //         <p className="mt-4 leading-7 text-slate-400">
// //           The group class is added to the parent element.
// //           Then group-hover allows a child element to change
// //           when the parent is hovered.
// //         </p>
// //       </div>

// //       <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
// //         <h3 className="mb-3 text-lg font-bold text-cyan-300">
// //           Key Takeaway
// //         </h3>

// //         <p className="leading-7 text-slate-300">
// //           State variants allow us to create interactive interfaces.
// //           Hover responds to the mouse, Focus responds to focused
// //           elements, Active responds to pressing, Disabled controls
// //           disabled elements, and Group connects a parent's state
// //           to its children.
// //         </p>
// //       </div>
// //     </Section>
// //   );
// // }


// import { useState } from "react";
// import Section from "../components/Section";

// export default function States() {
//   const concepts = [
//     {
//       id: "hover",
//       number: "01",
//       title: "Hover",
//       question: "What happens when the mouse is over an element?",
//       description:
//         "Hover changes an element when the user moves the mouse over it.",
//       classes: "hover:bg-blue-700 • hover:scale-105",
//       realUse: "Buttons, cards, links",
//       memory: "Hover = Mouse Over",
//     },
//     {
//       id: "focus",
//       number: "02",
//       title: "Focus",
//       question: "What happens when an input is selected?",
//       description:
//         "Focus styles show that an input, button, or other interactive element is currently selected.",
//       classes: "focus:border-blue-500 • focus:ring-2",
//       realUse: "Inputs, forms, search boxes",
//       memory: "Focus = Selected",
//     },
//     {
//       id: "active",
//       number: "03",
//       title: "Active",
//       question: "What happens while an element is being pressed?",
//       description:
//         "Active applies styles while the user is pressing or activating an element.",
//       classes: "active:scale-95 • active:bg-blue-800",
//       realUse: "Buttons, clickable controls",
//       memory: "Active = Pressing",
//     },
//     {
//       id: "disabled",
//       number: "04",
//       title: "Disabled",
//       question: "What happens when an element cannot be used?",
//       description:
//         "Disabled styles make it clear that an element is unavailable or cannot currently be interacted with.",
//       classes: "disabled:opacity-50 • disabled:cursor-not-allowed",
//       realUse: "Buttons, form controls",
//       memory: "Disabled = Unavailable",
//     },
//     {
//       id: "group",
//       number: "05",
//       title: "Group",
//       question: "How can a parent control a child's state?",
//       description:
//         "Group lets a child change its style when the parent is hovered or focused.",
//       classes: "group • group-hover:text-cyan-400",
//       realUse: "Cards, menus, product items",
//       memory: "Group = Parent → Child",
//     },
//   ];

//   const [selectedId, setSelectedId] = useState("hover");

//   const selected =
//     concepts.find((concept) => concept.id === selectedId) || concepts[0];

//   return (<Section
//     number="17"
//     label="States"
//     title="How Does an Element React to User Interaction?"
//   >
//     {/* Main Idea */} <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"> <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//       Main Idea </p>

//       ```
//       <h2 className="mt-2 text-2xl font-bold text-white">
//         State = What Is Happening to the Element?
//       </h2>

//       <p className="mt-3 max-w-3xl leading-7 text-slate-300">
//         A state describes what the user is doing with an element.
//         Tailwind uses state prefixes to change styles when that
//         situation happens.
//       </p>

//       <div className="mt-5 rounded-xl bg-slate-950/60 p-4">
//         <p className="font-bold text-white">
//           Think of it like this:
//         </p>

//         <p className="mt-2 text-sm leading-7 text-slate-400">
//           Normal → Hover → Active → Released
//         </p>

//         <p className="mt-1 text-sm text-slate-500">
//           The element can look different depending on what the user is doing.
//         </p>
//       </div>
//     </div>

//     {/* State Cards */}
//     <div className="mb-8">
//       <div className="mb-4">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Common States
//         </p>

//         <h3 className="mt-1 text-xl font-bold text-white">
//           Click a state to learn it
//         </h3>
//       </div>

//       <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {concepts.map((concept) => {
//           const active = selectedId === concept.id;

//           return (
//             <button
//               key={concept.id}
//               onClick={() => setSelectedId(concept.id)}
//               className={`rounded-xl border p-4 text-left transition-all duration-200 ${active
//                   ? "border-cyan-400/50 bg-cyan-400/10 shadow-lg shadow-cyan-400/5"
//                   : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
//                 }`}
//             >
//               <span className="text-xs font-bold text-cyan-400">
//                 {concept.number}
//               </span>

//               <h4 className="mt-3 text-xl font-bold text-white">
//                 {concept.title}
//               </h4>

//               <p className="mt-2 text-sm text-slate-400">
//                 {concept.memory}
//               </p>

//               {active && (
//                 <p className="mt-3 text-xs font-bold text-cyan-400">
//                   ✓ Selected
//                 </p>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>

//     {/* Selected State */}
//     <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
//       <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//         Selected State
//       </p>

//       <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h3 className="text-2xl font-bold text-white">
//             {selected.title}
//           </h3>

//           <p className="mt-1 text-cyan-300">
//             {selected.question}
//           </p>
//         </div>

//         <code className="rounded-lg bg-slate-950 px-4 py-2 text-sm text-cyan-200">
//           {selected.classes}
//         </code>
//       </div>

//       <p className="mt-4 leading-7 text-slate-400">
//         {selected.description}
//       </p>

//       <div className="mt-4 rounded-xl bg-slate-950/60 p-4">
//         <p className="text-xs text-slate-500">Real Use</p>
//         <p className="mt-1 font-semibold text-white">
//           {selected.realUse}
//         </p>
//       </div>
//     </div>

//     {/* Live Example */}
//     <div className="mb-8">
//       <div className="mb-5">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Live Example
//         </p>

//         <h3 className="mt-1 text-xl font-bold text-white">
//           Try the {selected.title} State
//         </h3>

//         <p className="mt-2 text-sm leading-6 text-slate-400">
//           Interact with the example and see the state change immediately.
//         </p>
//       </div>

//       <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 p-8">
//         {/* Hover */}
//         {selected.id === "hover" && (
//           <div className="text-center">
//             <button
//               className="
//               rounded-xl bg-blue-500 px-8 py-4
//               font-bold text-white
//               shadow-lg
//               transition-all duration-300
//               hover:scale-105 hover:bg-blue-700
//             "
//             >
//               Hover Me
//             </button>

//             <p className="mt-5 text-sm text-slate-500">
//               Move your mouse over the button.
//             </p>
//           </div>
//         )}

//         {/* Focus */}
//         {selected.id === "focus" && (
//           <div className="w-full max-w-md">
//             <input
//               type="text"
//               placeholder="Click here and type..."
//               className="
//               w-full rounded-xl border border-white/10
//               bg-slate-900 px-5 py-4 text-white
//               outline-none
//               placeholder:text-slate-600
//               transition-all
//               focus:border-cyan-400
//               focus:ring-2
//               focus:ring-cyan-400/30
//             "
//             />

//             <p className="mt-5 text-center text-sm text-slate-500">
//               Click the input to activate Focus.
//             </p>
//           </div>
//         )}

//         {/* Active */}
//         {selected.id === "active" && (
//           <div className="text-center">
//             <button
//               className="
//               rounded-xl bg-purple-500 px-8 py-4
//               font-bold text-white
//               transition-all duration-150
//               active:scale-95
//               active:bg-purple-700
//             "
//             >
//               Press Me
//             </button>

//             <p className="mt-5 text-sm text-slate-500">
//               Hold the mouse button down to see Active.
//             </p>
//           </div>
//         )}

//         {/* Disabled */}
//         {selected.id === "disabled" && (
//           <div className="text-center">
//             <button
//               disabled
//               className="
//               rounded-xl bg-cyan-500 px-8 py-4
//               font-bold text-white
//               disabled:cursor-not-allowed
//               disabled:opacity-40
//             "
//             >
//               Disabled Button
//             </button>

//             <p className="mt-5 text-sm text-slate-500">
//               This button cannot be clicked.
//             </p>
//           </div>
//         )}

//         {/* Group */}
//         {selected.id === "group" && (
//           <div
//             className="
//             group w-full max-w-md
//             cursor-pointer rounded-2xl
//             border border-white/10
//             bg-slate-900 p-6
//             transition-all duration-300
//             hover:border-cyan-400/40
//           "
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <h4
//                   className="
//                   text-xl font-bold text-white
//                   transition-colors
//                   group-hover:text-cyan-400
//                 "
//                 >
//                   Hover the Card
//                 </h4>

//                 <p className="mt-2 text-sm text-slate-500">
//                   The title reacts to the parent.
//                 </p>
//               </div>

//               <span
//                 className="
//                 text-2xl text-slate-600
//                 transition-transform duration-300
//                 group-hover:translate-x-2
//                 group-hover:text-cyan-400
//               "
//               >
//                 →
//               </span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Code */}
//       <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
//         <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//           Tailwind Code
//         </p>

//         {selected.id === "hover" && (
//           <code className="mt-3 block text-sm leading-7 text-cyan-200">
//             hover:bg-blue-700 hover:scale-105
//           </code>
//         )}

//         {selected.id === "focus" && (
//           <code className="mt-3 block text-sm leading-7 text-cyan-200">
//             focus:border-cyan-400 focus:ring-2
//           </code>
//         )}

//         {selected.id === "active" && (
//           <code className="mt-3 block text-sm leading-7 text-cyan-200">
//             active:scale-95 active:bg-purple-700
//           </code>
//         )}

//         {selected.id === "disabled" && (
//           <code className="mt-3 block text-sm leading-7 text-cyan-200">
//             disabled:opacity-40 disabled:cursor-not-allowed
//           </code>
//         )}

//         {selected.id === "group" && (
//           <code className="mt-3 block text-sm leading-7 text-cyan-200">
//             group + group-hover:text-cyan-400
//           </code>
//         )}
//       </div>
//     </div>

//     {/* Mental Model */}
//     <div className="mb-8">
//       <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//         Easy Mental Model
//       </p>

//       <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
//         {concepts.map((concept) => (
//           <div
//             key={concept.id}
//             className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
//           >
//             <p className="font-bold text-white">
//               {concept.title}
//             </p>

//             <p className="mt-2 text-sm text-slate-400">
//               {concept.memory}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Final Memory */}
//     <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//       <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
//         Final Memory
//       </p>

//       <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
//         <div className="rounded-xl bg-slate-950/50 p-4">
//           <p className="font-bold text-white">Hover</p>
//           <p className="mt-1 text-sm text-slate-500">
//             Mouse Over
//           </p>
//         </div>

//         <div className="rounded-xl bg-slate-950/50 p-4">
//           <p className="font-bold text-white">Focus</p>
//           <p className="mt-1 text-sm text-slate-500">
//             Selected
//           </p>
//         </div>

//         <div className="rounded-xl bg-slate-950/50 p-4">
//           <p className="font-bold text-white">Active</p>
//           <p className="mt-1 text-sm text-slate-500">
//             Pressing
//           </p>
//         </div>

//         <div className="rounded-xl bg-slate-950/50 p-4">
//           <p className="font-bold text-white">Disabled</p>
//           <p className="mt-1 text-sm text-slate-500">
//             Unavailable
//           </p>
//         </div>

//         <div className="rounded-xl bg-slate-950/50 p-4">
//           <p className="font-bold text-white">Group</p>
//           <p className="mt-1 text-sm text-slate-500">
//             Parent → Child
//           </p>
//         </div>
//       </div>

//       <div className="mt-5 border-t border-white/10 pt-4">
//         <p className="font-bold text-white">
//           Remember:
//         </p>

//         <p className="mt-1 text-sm leading-6 text-slate-400">
//           States tell Tailwind when an element should change its style
//           based on user interaction.
//         </p>
//       </div>
//     </div>
//   </Section>


//   );
// }




import { useState } from "react";
import Section from "../components/Section";

export default function States() {
  const concepts = [
    {
      id: "hover",
      number: "01",
      title: "Hover",
      question: "What happens when the mouse is over an element?",
      description:
        "Hover changes an element when the user moves the mouse over it.",
      classes: "hover:bg-blue-700 • hover:scale-105",
      realUse: "Buttons, cards, links",
      memory: "Mouse Over",
    },
    {
      id: "focus",
      number: "02",
      title: "Focus",
      question: "What happens when an input is selected?",
      description:
        "Focus styles show that an input, button, or other interactive element is currently selected.",
      classes: "focus:border-blue-500 • focus:ring-2",
      realUse: "Inputs, forms, search boxes",
      memory: "Selected",
    },
    {
      id: "active",
      number: "03",
      title: "Active",
      question: "What happens while an element is being pressed?",
      description:
        "Active applies styles while the user is pressing or activating an element.",
      classes: "active:scale-95 • active:bg-blue-800",
      realUse: "Buttons, clickable controls",
      memory: "Pressing",
    },
    {
      id: "disabled",
      number: "04",
      title: "Disabled",
      question: "What happens when an element cannot be used?",
      description:
        "Disabled styles make it clear that an element is unavailable or cannot currently be interacted with.",
      classes: "disabled:opacity-50 • disabled:cursor-not-allowed",
      realUse: "Buttons, form controls",
      memory: "Unavailable",
    },
    {
      id: "group",
      number: "05",
      title: "Group",
      question: "How can a parent control a child's state?",
      description:
        "Group lets a child change its style when the parent is hovered or focused.",
      classes: "group • group-hover:text-cyan-400",
      realUse: "Cards, menus, product items",
      memory: "Parent → Child",
    },
  ];

  const [selectedId, setSelectedId] = useState("hover");

  const selected =
    concepts.find((concept) => concept.id === selectedId) || concepts[0];

  return (<Section
    number="17"
    label="States"
    title="How Does an Element React to User Interaction?"
  >
    {/* Main Idea */} <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"> <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
      Main Idea </p>


      <h2 className="mt-2 text-2xl font-bold text-white">
        State = What Is Happening to the Element?
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A state describes what the user is doing with an element.
        Tailwind uses state prefixes to change styles when that
        situation happens.
      </p>

      <div className="mt-5 rounded-xl bg-slate-950/60 p-4">
        <p className="font-bold text-white">
          Think of it like this:
        </p>

        <p className="mt-2 text-sm leading-7 text-slate-400">
          Normal → Hover → Active → Released
        </p>

        <p className="mt-1 text-sm text-slate-500">
          The element can look different depending on what the user is doing.
        </p>
      </div>
    </div>

    {/* State Cards */}
    <div className="mb-8">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Common States
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          Click a state to learn it
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => {
          const active = selectedId === concept.id;

          return (
            <button
              key={concept.id}
              onClick={() => setSelectedId(concept.id)}
              className={`rounded-xl border p-4 text-left transition-all duration-200 ${active
                ? "border-cyan-400/50 bg-cyan-400/10 shadow-lg shadow-cyan-400/5"
                : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
            >
              <span className="text-xs font-bold text-cyan-400">
                {concept.number}
              </span>

              <h4 className="mt-3 text-xl font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                {concept.memory}
              </p>

              {active && (
                <p className="mt-3 text-xs font-bold text-cyan-400">
                  ✓ Selected
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>

    {/* Selected State */}
    <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Selected State
      </p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {selected.title}
          </h3>

          <p className="mt-1 text-cyan-300">
            {selected.question}
          </p>
        </div>

        <code className="rounded-lg bg-slate-950 px-4 py-2 text-sm text-cyan-200">
          {selected.classes}
        </code>
      </div>

      <p className="mt-4 leading-7 text-slate-400">
        {selected.description}
      </p>

      <div className="mt-4 rounded-xl bg-slate-950/60 p-4">
        <p className="text-xs text-slate-500">Real Use</p>

        <p className="mt-1 font-semibold text-white">
          {selected.realUse}
        </p>
      </div>
    </div>

    {/* Live Example */}
    <div className="mb-8">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Live Example
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          Try the {selected.title} State
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Interact with the example and see the state change immediately.
        </p>
      </div>

      <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 p-8">
        {/* Hover */}
        {selected.id === "hover" && (
          <div className="text-center">
            <button
              className="
              rounded-xl bg-blue-500 px-8 py-4
              font-bold text-white
              shadow-lg
              transition-all duration-300
              hover:scale-105 hover:bg-blue-700
            "
            >
              Hover Me
            </button>

            <p className="mt-5 text-sm text-slate-500">
              Move your mouse over the button.
            </p>
          </div>
        )}

        {/* Focus */}
        {selected.id === "focus" && (
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Click here and type..."
              className="
              w-full rounded-xl border border-white/10
              bg-slate-900 px-5 py-4 text-white
              outline-none
              placeholder:text-slate-600
              transition-all
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/30
            "
            />

            <p className="mt-5 text-center text-sm text-slate-500">
              Click the input to activate Focus.
            </p>
          </div>
        )}

        {/* Active */}
        {selected.id === "active" && (
          <div className="text-center">
            <button
              className="
              rounded-xl bg-purple-500 px-8 py-4
              font-bold text-white
              transition-all duration-150
              active:scale-95
              active:bg-purple-700
            "
            >
              Press Me
            </button>

            <p className="mt-5 text-sm text-slate-500">
              Hold the mouse button down to see Active.
            </p>
          </div>
        )}

        {/* Disabled */}
        {selected.id === "disabled" && (
          <div className="text-center">
            <button
              disabled
              className="
              rounded-xl bg-cyan-500 px-8 py-4
              font-bold text-white
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
            >
              Disabled Button
            </button>

            <p className="mt-5 text-sm text-slate-500">
              This button cannot be clicked.
            </p>
          </div>
        )}

        {/* Group */}
        {selected.id === "group" && (
          <div
            className="
            group w-full max-w-md
            cursor-pointer rounded-2xl
            border border-white/10
            bg-slate-900 p-6
            transition-all duration-300
            hover:border-cyan-400/40
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <h4
                  className="
                  text-xl font-bold text-white
                  transition-colors
                  group-hover:text-cyan-400
                "
                >
                  Hover the Card
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  The title reacts to the parent.
                </p>
              </div>

              <span
                className="
                text-2xl text-slate-600
                transition-transform duration-300
                group-hover:translate-x-2
                group-hover:text-cyan-400
              "
              >
                →
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Code */}
      <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Tailwind Code
        </p>

        {selected.id === "hover" && (
          <code className="mt-3 block text-sm leading-7 text-cyan-200">
            hover:bg-blue-700 hover:scale-105
          </code>
        )}

        {selected.id === "focus" && (
          <code className="mt-3 block text-sm leading-7 text-cyan-200">
            focus:border-cyan-400 focus:ring-2
          </code>
        )}

        {selected.id === "active" && (
          <code className="mt-3 block text-sm leading-7 text-cyan-200">
            active:scale-95 active:bg-purple-700
          </code>
        )}

        {selected.id === "disabled" && (
          <code className="mt-3 block text-sm leading-7 text-cyan-200">
            disabled:opacity-40 disabled:cursor-not-allowed
          </code>
        )}

        {selected.id === "group" && (
          <code className="mt-3 block text-sm leading-7 text-cyan-200">
            group + group-hover:text-cyan-400
          </code>
        )}
      </div>
    </div>

    {/* Easy Mental Model */}
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Easy Mental Model
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
          >
            <p className="font-bold text-white">
              {concept.title}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {concept.memory}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Final Memory */}
    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Final Memory
      </p>

      <p className="mt-3 text-lg font-bold text-white">
        States = Change the style based on what the user is doing.
      </p>

      <p className="mt-2 leading-7 text-slate-400">
        Hover, Focus, Active, Disabled, and Group help us create
        interactive interfaces without writing custom CSS.
      </p>
    </div>
  </Section>


  );
}

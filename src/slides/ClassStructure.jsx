
// import Section from "../components/Section";
// import CodeBlock from "../components/CodeBlock";

// export default function ClassStructure() {
//   return (
//     <Section
//       number="06"
//       label="Class Structure"
//       title="How to Read Tailwind Classes?"
//     >
//       <div className="max-w-5xl space-y-7">

//         {/* Introduction */}
//         <div>
//           <p className="text-xl font-bold text-white">
//             Read the class name to understand the style.
//           </p>

//           <p className="mt-2 text-slate-400">
//             Each part tells us what to change and how much.
//           </p>
//         </div>

//         {/* Example 1 */}
//         <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-2">

//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//               Example 01
//             </p>

//             <h3 className="mt-2 text-xl font-black text-white">
//               Background Color
//             </h3>

//             <div className="mt-4">
//               <CodeBlock>{`bg-cyan-500`}</CodeBlock>
//             </div>

//             <div className="mt-4 space-y-2 text-sm">
//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   bg
//                 </span>{" "}
//                 → Background
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   cyan
//                 </span>{" "}
//                 → Color
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   500
//                 </span>{" "}
//                 → Shade
//               </p>
//             </div>
//           </div>

//           <div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-slate-900">

//             <div className="rounded-xl bg-cyan-500 px-6 py-4 font-bold text-white">
//               Cyan Background
//             </div>

//           </div>

//         </div>

//         {/* Example 2 */}
//         <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-2">

//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//               Example 02
//             </p>

//             <h3 className="mt-2 text-xl font-black text-white">
//               Padding + Rounded Corners
//             </h3>

//             <div className="mt-4">
//               <CodeBlock>{`p-6 rounded-2xl`}</CodeBlock>
//             </div>

//             <div className="mt-4 space-y-2 text-sm">
//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   p
//                 </span>{" "}
//                 → Padding
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   6
//                 </span>{" "}
//                 → Padding size
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   rounded
//                 </span>{" "}
//                 → Border radius
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   2xl
//                 </span>{" "}
//                 → Radius size
//               </p>
//             </div>
//           </div>

//           <div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-slate-900">

//             <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

//               <p className="font-bold text-slate-900">
//                 Rounded Card
//               </p>

//               <p className="mt-1 text-sm text-slate-500">
//                 p-6 + rounded-2xl
//               </p>

//             </div>

//           </div>

//         </div>

//         {/* Example 3 */}
//         <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-2">

//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
//               Example 03
//             </p>

//             <h3 className="mt-2 text-xl font-black text-white">
//               Maximum Width + Shadow
//             </h3>

//             <div className="mt-4">
//               <CodeBlock>{`max-w-md shadow-lg`}</CodeBlock>
//             </div>

//             <div className="mt-4 space-y-2 text-sm">
//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   max-w
//                 </span>{" "}
//                 → Maximum width
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   md
//                 </span>{" "}
//                 → Width size
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   shadow
//                 </span>{" "}
//                 → Box shadow
//               </p>

//               <p>
//                 <span className="font-mono font-bold text-cyan-300">
//                   lg
//                 </span>{" "}
//                 → Shadow size
//               </p>
//             </div>
//           </div>

//           <div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-slate-900">

//             <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-lg">

//               <p className="font-bold text-slate-900">
//                 Max Width Card
//               </p>

//               <p className="mt-1 text-sm text-slate-500">
//                 max-w-md + shadow-lg
//               </p>

//             </div>

//           </div>

//         </div>

//         {/* Key Point */}
//         <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5 text-center">

//           <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
//             Remember
//           </p>

//           <h3 className="mt-2 text-xl font-black text-white">
//             Prefix → Value → Style
//           </h3>

//           <p className="mt-2 text-sm text-slate-400">
//             Read the class and you can understand what it does.
//           </p>

//         </div>

//       </div>
//     </Section>
//   );
// }

import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function ClassStructure() {
  /*
    React Basic Concept:
    useState()

    We use state because the user can select
    different Tailwind classes from the dropdowns.
  */

  const [background, setBackground] = useState("bg-cyan-500");

  const [textColor, setTextColor] = useState("text-white");

  const [padding, setPadding] = useState("p-6");

  const [radius, setRadius] = useState("rounded-2xl");

  const [maxWidth, setMaxWidth] = useState("max-w-md");

  const [shadow, setShadow] = useState("shadow-lg");

  /*
    ----------------------------------------
    TAILWIND CLASS INFORMATION
    ----------------------------------------

    Each selected value maps to a complete
    Tailwind class.

    This also keeps the classes visible to
    Tailwind's scanner.
  */

  const backgroundInfo = {
    "bg-slate-500": {
      className: "bg-slate-500",
      property: "bg",
      value: "slate",
      shade: "500",
      meaning: "Slate background color",
    },

    "bg-cyan-500": {
      className: "bg-cyan-500",
      property: "bg",
      value: "cyan",
      shade: "500",
      meaning: "Cyan background color",
    },

    "bg-violet-500": {
      className: "bg-violet-500",
      property: "bg",
      value: "violet",
      shade: "500",
      meaning: "Violet background color",
    },

    "bg-emerald-500": {
      className: "bg-emerald-500",
      property: "bg",
      value: "emerald",
      shade: "500",
      meaning: "Emerald background color",
    },

    "bg-orange-500": {
      className: "bg-orange-500",
      property: "bg",
      value: "orange",
      shade: "500",
      meaning: "Orange background color",
    },
  };

  const textInfo = {
    "text-white": {
      className: "text-white",
      property: "text",
      value: "white",
      shade: "—",
      meaning: "White text color",
    },

    "text-slate-900": {
      className: "text-slate-900",
      property: "text",
      value: "slate",
      shade: "900",
      meaning: "Dark slate text color",
    },

    "text-cyan-300": {
      className: "text-cyan-300",
      property: "text",
      value: "cyan",
      shade: "300",
      meaning: "Light cyan text color",
    },

    "text-violet-300": {
      className: "text-violet-300",
      property: "text",
      value: "violet",
      shade: "300",
      meaning: "Light violet text color",
    },
  };

  const paddingInfo = {
    "p-2": {
      className: "p-2",
      property: "p",
      value: "2",
      meaning: "Small padding",
    },

    "p-4": {
      className: "p-4",
      property: "p",
      value: "4",
      meaning: "Medium padding",
    },

    "p-6": {
      className: "p-6",
      property: "p",
      value: "6",
      meaning: "Large padding",
    },

    "p-8": {
      className: "p-8",
      property: "p",
      value: "8",
      meaning: "Extra large padding",
    },
  };

  const radiusInfo = {
    "rounded-lg": {
      className: "rounded-lg",
      property: "rounded",
      value: "lg",
      meaning: "Large border radius",
    },

    "rounded-xl": {
      className: "rounded-xl",
      property: "rounded",
      value: "xl",
      meaning: "Extra large border radius",
    },

    "rounded-2xl": {
      className: "rounded-2xl",
      property: "rounded",
      value: "2xl",
      meaning: "Very rounded corners",
    },

    "rounded-3xl": {
      className: "rounded-3xl",
      property: "rounded",
      value: "3xl",
      meaning: "Very large rounded corners",
    },

    "rounded-full": {
      className: "rounded-full",
      property: "rounded",
      value: "full",
      meaning: "Fully rounded shape",
    },
  };

  const widthInfo = {
    "max-w-xs": {
      className: "max-w-xs",
      property: "max-w",
      value: "xs",
      meaning: "Extra small maximum width",
    },

    "max-w-sm": {
      className: "max-w-sm",
      property: "max-w",
      value: "sm",
      meaning: "Small maximum width",
    },

    "max-w-md": {
      className: "max-w-md",
      property: "max-w",
      value: "md",
      meaning: "Medium maximum width",
    },

    "max-w-lg": {
      className: "max-w-lg",
      property: "max-w",
      value: "lg",
      meaning: "Large maximum width",
    },
  };

  const shadowInfo = {
    "shadow-none": {
      className: "shadow-none",
      property: "shadow",
      value: "none",
      meaning: "No shadow",
    },

    "shadow-sm": {
      className: "shadow-sm",
      property: "shadow",
      value: "sm",
      meaning: "Small shadow",
    },

    "shadow-md": {
      className: "shadow-md",
      property: "shadow",
      value: "md",
      meaning: "Medium shadow",
    },

    "shadow-lg": {
      className: "shadow-lg",
      property: "shadow",
      value: "lg",
      meaning: "Large shadow",
    },

    "shadow-xl": {
      className: "shadow-xl",
      property: "shadow",
      value: "xl",
      meaning: "Extra large shadow",
    },
  };

  /*
    ----------------------------------------
    CURRENT INFORMATION
    ----------------------------------------
  */

  const selectedBackground = backgroundInfo[background];

  const selectedText = textInfo[textColor];

  const selectedPadding = paddingInfo[padding];

  const selectedRadius = radiusInfo[radius];

  const selectedWidth = widthInfo[maxWidth];

  const selectedShadow = shadowInfo[shadow];

  /*
    ----------------------------------------
    COMPLETE LIVE CLASS
    ----------------------------------------
  */

  const liveClasses = `
    ${background}
    ${textColor}
    ${padding}
    ${radius}
    ${maxWidth}
    ${shadow}
  `.trim();

  /*
    ----------------------------------------
    RESET
    ----------------------------------------
  */

  const resetStructure = () => {
    setBackground("bg-cyan-500");
    setTextColor("text-white");
    setPadding("p-6");
    setRadius("rounded-2xl");
    setMaxWidth("max-w-md");
    setShadow("shadow-lg");
  };

  return (
    <Section
      number="06"
      label="Class Structure"
      title="How to Read Tailwind Classes?"
    >
      <div className="max-w-5xl space-y-8">

        {/* =====================================
            INTRODUCTION
        ====================================== */}

        <div>
          <p className="text-xl font-bold leading-8 text-white">
            Tailwind class names are designed to be readable.
          </p>

          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-400">
            Read the parts of a class name to understand
            what it changes and how much.
          </p>
        </div>

        {/* =====================================
            BASIC STRUCTURE
        ====================================== */}

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Basic Structure
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Property → Value → Size
          </h3>

          <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-center">

            <code className="text-2xl font-black text-cyan-300">
              bg-cyan-500
            </code>

            <div className="mt-6 grid gap-3 md:grid-cols-3">

              <div className="rounded-xl bg-white/5 p-4">
                <code className="font-bold text-cyan-300">
                  bg
                </code>

                <p className="mt-2 text-sm text-slate-400">
                  Property
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Background
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <code className="font-bold text-cyan-300">
                  cyan
                </code>

                <p className="mt-2 text-sm text-slate-400">
                  Value
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Color
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <code className="font-bold text-cyan-300">
                  500
                </code>

                <p className="mt-2 text-sm text-slate-400">
                  Shade
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Color intensity
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =====================================
            INTERACTIVE PLAYGROUND
        ====================================== */}

        <div className="rounded-3xl border border-violet-400/20 bg-violet-400/5 p-6">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
              Interactive Playground
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Build a Tailwind Class Step by Step
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Choose a property from each dropdown and watch
              the class and result change instantly.
            </p>
          </div>

          {/* =====================================
              DROPDOWNS
          ====================================== */}

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* Background */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Background
              </label>

              <select
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="bg-slate-500">
                  bg-slate-500
                </option>

                <option value="bg-cyan-500">
                  bg-cyan-500
                </option>

                <option value="bg-violet-500">
                  bg-violet-500
                </option>

                <option value="bg-emerald-500">
                  bg-emerald-500
                </option>

                <option value="bg-orange-500">
                  bg-orange-500
                </option>
              </select>
            </div>

            {/* Text */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Text Color
              </label>

              <select
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="text-white">
                  text-white
                </option>

                <option value="text-slate-900">
                  text-slate-900
                </option>

                <option value="text-cyan-300">
                  text-cyan-300
                </option>

                <option value="text-violet-300">
                  text-violet-300
                </option>
              </select>
            </div>

            {/* Padding */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Padding
              </label>

              <select
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="p-2">p-2</option>
                <option value="p-4">p-4</option>
                <option value="p-6">p-6</option>
                <option value="p-8">p-8</option>
              </select>
            </div>

            {/* Radius */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Border Radius
              </label>

              <select
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="rounded-lg">
                  rounded-lg
                </option>

                <option value="rounded-xl">
                  rounded-xl
                </option>

                <option value="rounded-2xl">
                  rounded-2xl
                </option>

                <option value="rounded-3xl">
                  rounded-3xl
                </option>

                <option value="rounded-full">
                  rounded-full
                </option>
              </select>
            </div>

            {/* Max Width */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Maximum Width
              </label>

              <select
                value={maxWidth}
                onChange={(e) => setMaxWidth(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="max-w-xs">
                  max-w-xs
                </option>

                <option value="max-w-sm">
                  max-w-sm
                </option>

                <option value="max-w-md">
                  max-w-md
                </option>

                <option value="max-w-lg">
                  max-w-lg
                </option>
              </select>
            </div>

            {/* Shadow */}

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Shadow
              </label>

              <select
                value={shadow}
                onChange={(e) => setShadow(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                <option value="shadow-none">
                  shadow-none
                </option>

                <option value="shadow-sm">
                  shadow-sm
                </option>

                <option value="shadow-md">
                  shadow-md
                </option>

                <option value="shadow-lg">
                  shadow-lg
                </option>

                <option value="shadow-xl">
                  shadow-xl
                </option>
              </select>
            </div>

          </div>

          {/* =====================================
              CURRENT CLASS
          ====================================== */}

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-black/30 p-5">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Current Tailwind Classes
            </p>

            <div className="mt-4 rounded-xl bg-slate-950 p-5">

              <code className="block break-words font-mono text-sm leading-7 text-emerald-300">
                {liveClasses}
              </code>

            </div>

          </div>

          {/* =====================================
              LIVE RESULT
          ====================================== */}

          <div className="mt-6">

            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Live Result
            </p>

            <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-slate-950 p-6">

              <div
                className={`${background} ${textColor} ${padding} ${radius} ${maxWidth} ${shadow} w-full text-center transition-all duration-300`}
              >
                <p className="text-xl font-black">
                  Tailwind Card
                </p>

                <p className="mt-2 text-sm opacity-80">
                  Change the dropdowns and watch me change.
                </p>

                <div className="mt-5 rounded-lg bg-black/20 p-3">

                  <code className="break-words text-xs">
                    {background}
                  </code>

                  <br />

                  <code className="break-words text-xs">
                    {padding}
                  </code>

                  <br />

                  <code className="break-words text-xs">
                    {radius}
                  </code>

                  <br />

                  <code className="break-words text-xs">
                    {maxWidth}
                  </code>

                  <br />

                  <code className="break-words text-xs">
                    {shadow}
                  </code>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================
            SELECTED CLASS BREAKDOWN
        ====================================== */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Class Breakdown
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            What Does Each Part Mean?
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {/* Background Breakdown */}

            <div className="rounded-2xl bg-black/20 p-5">

              <code className="text-lg font-black text-cyan-300">
                {selectedBackground.className}
              </code>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedBackground.property}
                  </span>{" "}
                  → Background property
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedBackground.value}
                  </span>{" "}
                  → Color
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedBackground.shade}
                  </span>{" "}
                  → Shade
                </p>

              </div>

              <p className="mt-4 text-sm text-slate-400">
                {selectedBackground.meaning}
              </p>

            </div>

            {/* Text Breakdown */}

            <div className="rounded-2xl bg-black/20 p-5">

              <code className="text-lg font-black text-cyan-300">
                {selectedText.className}
              </code>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedText.property}
                  </span>{" "}
                  → Text property
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedText.value}
                  </span>{" "}
                  → Color
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedText.shade}
                  </span>{" "}
                  → Shade
                </p>

              </div>

              <p className="mt-4 text-sm text-slate-400">
                {selectedText.meaning}
              </p>

            </div>

            {/* Padding Breakdown */}

            <div className="rounded-2xl bg-black/20 p-5">

              <code className="text-lg font-black text-cyan-300">
                {selectedPadding.className}
              </code>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedPadding.property}
                  </span>{" "}
                  → Padding
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedPadding.value}
                  </span>{" "}
                  → Padding size
                </p>

              </div>

              <p className="mt-4 text-sm text-slate-400">
                {selectedPadding.meaning}
              </p>

            </div>

            {/* Radius Breakdown */}

            <div className="rounded-2xl bg-black/20 p-5">

              <code className="text-lg font-black text-cyan-300">
                {selectedRadius.className}
              </code>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedRadius.property}
                  </span>{" "}
                  → Border radius
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedRadius.value}
                  </span>{" "}
                  → Radius size
                </p>

              </div>

              <p className="mt-4 text-sm text-slate-400">
                {selectedRadius.meaning}
              </p>

            </div>

            {/* Width Breakdown */}

            <div className="rounded-2xl bg-black/20 p-5">

              <code className="text-lg font-black text-cyan-300">
                {selectedWidth.className}
              </code>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedWidth.property}
                  </span>{" "}
                  → Maximum width
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedWidth.value}
                  </span>{" "}
                  → Width size
                </p>

              </div>

              <p className="mt-4 text-sm text-slate-400">
                {selectedWidth.meaning}
              </p>

            </div>

            {/* Shadow Breakdown */}

            <div className="rounded-2xl bg-black/20 p-5">

              <code className="text-lg font-black text-cyan-300">
                {selectedShadow.className}
              </code>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedShadow.property}
                  </span>{" "}
                  → Box shadow
                </p>

                <p>
                  <span className="font-mono font-bold text-cyan-300">
                    {selectedShadow.value}
                  </span>{" "}
                  → Shadow size
                </p>

              </div>

              <p className="mt-4 text-sm text-slate-400">
                {selectedShadow.meaning}
              </p>

            </div>

          </div>

        </div>

        {/* =====================================
            REAL EXAMPLES
        ====================================== */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Real Examples
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Read These Classes Like a Developer
          </h3>

          <div className="mt-6 space-y-5">

            {/* Example 01 */}

            <div className="rounded-2xl bg-black/20 p-5">

              <CodeBlock>{`bg-cyan-500`}</CodeBlock>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                <strong className="text-white">
                  bg
                </strong>{" "}
                means background,
                <strong className="text-white">
                  {" "}cyan
                </strong>{" "}
                is the color, and
                <strong className="text-white">
                  {" "}500
                </strong>{" "}
                is the shade.
              </p>

            </div>

            {/* Example 02 */}

            <div className="rounded-2xl bg-black/20 p-5">

              <CodeBlock>{`p-6 rounded-2xl`}</CodeBlock>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                <strong className="text-white">
                  p-6
                </strong>{" "}
                controls padding, while
                <strong className="text-white">
                  {" "}rounded-2xl
                </strong>{" "}
                controls the corner radius.
              </p>

            </div>

            {/* Example 03 */}

            <div className="rounded-2xl bg-black/20 p-5">

              <CodeBlock>{`max-w-md shadow-lg`}</CodeBlock>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                <strong className="text-white">
                  max-w-md
                </strong>{" "}
                controls the maximum width, while
                <strong className="text-white">
                  {" "}shadow-lg
                </strong>{" "}
                controls the shadow size.
              </p>

            </div>

          </div>

        </div>

        {/* =====================================
            RESET
        ====================================== */}

        <div className="flex justify-center">

          <button
            onClick={resetStructure}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Reset Structure
          </button>

        </div>

        {/* =====================================
            KEY POINT
        ====================================== */}

        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
            Remember
          </p>

          <h3 className="mt-3 text-2xl font-black text-white">
            Read the Class → Understand the Style
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Tailwind class names are meaningful. Once you understand
            the structure, you can often predict what a class will do
            before using it.
          </p>

          <div className="mt-5 text-lg font-black text-cyan-300">
            Property → Value → Size
          </div>

        </div>

      </div>
    </Section>
  );
}
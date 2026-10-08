// import Section from "../components/Section";
// import CodeBlock from "../components/CodeBlock";

// export default function Benefits() {
//   const benefits = [
//     {
//       number: "01",
//       title: "Faster Development",
//       description:
//         "Build interfaces faster by using ready-to-use utility classes.",
//     },
//     {
//       number: "02",
//       title: "Responsive Interfaces",
//       description:
//         "Create layouts that adapt to different screen sizes with responsive utilities.",
//     },
//     {
//       number: "03",
//       title: "Consistent Design",
//       description:
//         "Use consistent spacing, colors, typography, and sizing throughout a project.",
//     },
//     {
//       number: "04",
//       title: "Reusable Components",
//       description:
//         "Combine Tailwind with React components to create reusable UI elements.",
//     },
//     {
//       number: "05",
//       title: "Easy Customization",
//       description:
//         "Customize the design when the default utilities are not enough.",
//     },
//   ];

//   return (
//     <Section
//       number="26"
//       label="Benefits"
//       title="Benefits of Using Tailwind CSS"
//     >
//       <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
//         Tailwind CSS provides practical benefits that can make
//         the development process faster, more consistent, and
//         easier to customize.
//       </p>

//       <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
//         {benefits.map((benefit) => (
//           <div
//             key={benefit.number}
//             className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
//           >
//             <span className="text-sm font-bold text-cyan-400">
//               {benefit.number}
//             </span>

//             <h3 className="mt-4 text-xl font-bold text-white">
//               {benefit.title}
//             </h3>

//             <p className="mt-3 leading-7 text-slate-400">
//               {benefit.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <h3 className="mb-4 text-xl font-bold text-white">
//           Simple Example
//         </h3>

//         <CodeBlock>{`<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//   <div className="rounded-xl bg-blue-500 p-6 text-white">
//     Card 1
//   </div>

//   <div className="rounded-xl bg-purple-500 p-6 text-white">
//     Card 2
//   </div>

//   <div className="rounded-xl bg-cyan-500 p-6 text-white">
//     Card 3
//   </div>
// </div>`}</CodeBlock>

//         <p className="mt-4 leading-7 text-slate-400">
//           A small set of utility classes can create a responsive
//           layout without writing separate CSS rules.
//         </p>
//       </div>

//       <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <h3 className="mb-3 text-lg font-bold text-cyan-300">
//           Key Takeaway
//         </h3>

//         <p className="leading-7 text-slate-300">
//           Tailwind CSS can help developers build responsive,
//           consistent, customizable, and reusable interfaces
//           more efficiently.
//         </p>
//       </div>
//     </Section>
//   );
// }

import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Benefits() {
  const benefits = [
    {
      id: "speed",
      number: "01",
      title: "Faster Development",
      description:
        "Build a complete UI quickly by combining ready-to-use utility classes.",
      label: "Change the spacing",
      options: [
        {
          name: "Small",
          className: "p-3",
          code: "p-3",
        },
        {
          name: "Medium",
          className: "p-6",
          code: "p-6",
        },
        {
          name: "Large",
          className: "p-10",
          code: "p-10",
        },
      ],
    },
    {
      id: "colors",
      number: "02",
      title: "Easy Customization",
      description:
        "Change colors, backgrounds, and text without writing separate CSS rules.",
      label: "Change the color",
      options: [
        {
          name: "Blue",
          className: "bg-blue-500",
          code: "bg-blue-500",
        },
        {
          name: "Purple",
          className: "bg-purple-500",
          code: "bg-purple-500",
        },
        {
          name: "Green",
          className: "bg-green-500",
          code: "bg-green-500",
        },
      ],
    },
    {
      id: "responsive",
      number: "03",
      title: "Responsive Interfaces",
      description:
        "Create layouts that automatically adapt to different screen sizes.",
      label: "Choose the layout",
      options: [
        {
          name: "1 Column",
          className: "grid-cols-1",
          code: "grid-cols-1",
        },
        {
          name: "2 Columns",
          className: "grid-cols-1 md:grid-cols-2",
          code: "grid-cols-1 md:grid-cols-2",
        },
        {
          name: "3 Columns",
          className: "grid-cols-1 md:grid-cols-3",
          code: "grid-cols-1 md:grid-cols-3",
        },
      ],
    },
    {
      id: "design",
      number: "04",
      title: "Consistent Design",
      description:
        "Use the same spacing, radius, typography, and colors across your project.",
      label: "Change the corners",
      options: [
        {
          name: "Small Radius",
          className: "rounded-md",
          code: "rounded-md",
        },
        {
          name: "Large Radius",
          className: "rounded-2xl",
          code: "rounded-2xl",
        },
        {
          name: "Full Radius",
          className: "rounded-full",
          code: "rounded-full",
        },
      ],
    },
  ];

  const [selectedBenefit, setSelectedBenefit] = useState(benefits[0]);
  const [selectedOption, setSelectedOption] = useState(benefits[0].options[1]);

  const handleBenefitChange = (event) => {
    const benefit = benefits.find((item) => item.id === event.target.value);

    setSelectedBenefit(benefit);
    setSelectedOption(benefit.options[1] || benefit.options[0]);
  };

  const handleOptionChange = (event) => {
    const option = selectedBenefit.options.find(
      (item) => item.name === event.target.value,
    );

    setSelectedOption(option);
  };

  const getPreviewClass = () => {
    if (selectedBenefit.id === "speed") {
      return `rounded-2xl bg-blue-500 ${selectedOption.className}`;
    }

    if (selectedBenefit.id === "colors") {
      return `rounded-2xl p-8 text-white ${selectedOption.className}`;
    }

    if (selectedBenefit.id === "design") {
      return `bg-purple-500 p-8 text-white ${selectedOption.className}`;
    }

    return "";
  };

  return (
    <Section
      number="25"
      label="Benefits"
      title="What Can Tailwind CSS Help Us Do?"
    >
      {/* Introduction */}
      <div className="mb-8 max-w-3xl">
        <p className="text-lg leading-8 text-slate-300">
          A benefit is a practical advantage you get from using Tailwind CSS.
          Instead of only reading about the benefits, let's see how a small
          utility change can immediately change a real interface.
        </p>
      </div>

      {/* What does Benefit mean? */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          What does "Benefit" mean?
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Benefit = A useful advantage
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          For example, instead of writing CSS to change padding, color, or
          layout, Tailwind lets us change a utility class directly in the HTML.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-black/20 p-4">
            <p className="text-sm text-slate-500">Traditional CSS</p>

            <p className="mt-2 font-mono text-sm text-slate-300">
              Write CSS → create a class → apply the class
            </p>
          </div>

          <div className="rounded-xl bg-cyan-400/10 p-4">
            <p className="text-sm text-cyan-300">Tailwind CSS</p>

            <p className="mt-2 font-mono text-sm text-slate-300">
              Add a utility class → see the change
            </p>
          </div>
        </div>
      </div>

      {/* Benefit selector */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Choose a benefit
            </label>

            <select
              value={selectedBenefit.id}
              onChange={handleBenefitChange}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              {benefits.map((benefit) => (
                <option key={benefit.id} value={benefit.id}>
                  {benefit.number} — {benefit.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              {selectedBenefit.label}
            </label>

            <select
              value={selectedOption.name}
              onChange={handleOptionChange}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              {selectedBenefit.options.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Benefit explanation */}
      <div className="mb-8">
        <div className="mb-5">
          <span className="text-sm font-bold text-cyan-400">
            {selectedBenefit.number}
          </span>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {selectedBenefit.title}
          </h3>

          <p className="mt-2 max-w-3xl leading-7 text-slate-400">
            {selectedBenefit.description}
          </p>
        </div>

        {/* Live Preview */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-300">Live Preview</p>

            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Changes instantly
            </span>
          </div>

          {selectedBenefit.id === "responsive" ? (
            <div className={`grid gap-4 ${selectedOption.className}`}>
              <div className="rounded-xl bg-blue-500 p-6 text-center font-bold text-white">
                Card 1
              </div>

              <div className="rounded-xl bg-purple-500 p-6 text-center font-bold text-white">
                Card 2
              </div>

              <div className="rounded-xl bg-cyan-500 p-6 text-center font-bold text-white">
                Card 3
              </div>
            </div>
          ) : (
            <div className="flex min-h-36 items-center justify-center">
              <div
                className={`${getPreviewClass()} text-center font-bold text-white transition-all duration-300`}
              >
                Tailwind Utility
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Code */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          The class that creates the change
        </h3>

        <CodeBlock>
          {selectedBenefit.id === "responsive"
            ? `<div className="grid ${selectedOption.code} gap-4">`
            : `<div className="${selectedOption.code}">`}
        </CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          Change the utility class and the design changes immediately. This is
          one of the practical benefits of Tailwind CSS.
        </p>
      </div>

      {/* Benefits summary */}
      <div>
        <h3 className="mb-4 text-xl font-bold text-white">Main Benefits</h3>

        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <button
              key={benefit.id}
              onClick={() => {
                setSelectedBenefit(benefit);
                setSelectedOption(benefit.options[1] || benefit.options[0]);
              }}
              className={`rounded-2xl border p-5 text-left transition ${
                selectedBenefit.id === benefit.id
                  ? "border-cyan-400/50 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <span className="text-sm font-bold text-cyan-400">
                {benefit.number}
              </span>

              <h4 className="mt-2 font-bold text-white">{benefit.title}</h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {benefit.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Key takeaway */}
      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Tailwind CSS is useful because developers can build, change, and
          maintain interfaces quickly by combining small utility classes instead
          of writing many custom CSS rules.
        </p>
      </div>
    </Section>
  );
}

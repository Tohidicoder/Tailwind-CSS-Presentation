

import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function BackgroundsBorders() {
  // Array of Objects
  // Each object contains information about a background or border concept.

  const concepts = [
    {
      number: "01",
      title: "Background Color",
      description:
        "Controls the background color of an element.",
      example: "bg-blue-500  bg-gray-900  bg-white",
    },
    {
      number: "02",
      title: "Background Image",
      description:
        "Adds a background image and controls how the image appears.",
      example:
        "bg-[url('/image.jpg')]  bg-cover  bg-center",
    },
    {
      number: "03",
      title: "Gradient",
      description:
        "Creates a smooth transition between two or more colors.",
      example:
        "bg-linear-to-r  from-blue-500  to-purple-500",
    },
    {
      number: "04",
      title: "Border",
      description:
        "Adds a border around an element and controls its width.",
      example: "border  border-2  border-4",
    },
    {
      number: "05",
      title: "Border Radius",
      description:
        "Controls how rounded the corners of an element are.",
      example: "rounded  rounded-lg  rounded-full",
    },
    {
      number: "06",
      title: "Border Color",
      description:
        "Controls the color of an element's border.",
      example: "border-blue-500  border-gray-300",
    },
  ];

  return (
    <Section
      number="12"
      label="Backgrounds & Borders"
      title="Styling Backgrounds and Borders"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes for controlling
        backgrounds, gradients, borders, colors, and rounded corners.
      </p>

      {/* Concept Cards */}

      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <div
            key={concept.number}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              {concept.number}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {concept.title}
            </h3>

            <p className="mt-3 flex-1 leading-7 text-slate-400">
              {concept.description}
            </p>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Tailwind Classes
              </p>

              <code className="text-sm leading-7 text-cyan-200">
                {concept.example}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* Example */}

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example
        </h3>

        <CodeBlock>{`<div className="rounded-xl border-2 border-blue-500 bg-linear-to-r from-blue-500 to-purple-500 p-6">
  <h2 className="text-xl font-bold text-white">
    Hello Tailwind
  </h2>

  <p className="mt-2 text-white">
    Background, gradient, and border example.
  </p>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, border-2 adds a border,
          border-blue-500 changes its color, rounded-xl rounds
          the corners, and bg-linear-to-r creates a gradient
          from blue to purple.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Background controls the inside of an element,
          while borders control its outline, color, and shape.
          Gradients add smooth color transitions.
        </p>
      </div>
    </Section>
  );
}

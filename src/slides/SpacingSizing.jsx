


import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function SpacingSizing() {
  // Array of Objects
  // Each object contains a spacing or sizing concept.

  const concepts = [
    {
      number: "01",
      title: "Padding",
      description:
        "Controls the inner space between an element's content and its border.",
      example: "p-4  px-6  py-3",
    },
    {
      number: "02",
      title: "Margin",
      description:
        "Controls the outer space around an element.",
      example: "m-4  mt-6  mx-auto",
    },
    {
      number: "03",
      title: "Width",
      description:
        "Controls how wide an element is.",
      example: "w-full  w-1/2  w-64",
    },
    {
      number: "04",
      title: "Height",
      description:
        "Controls how tall an element is.",
      example: "h-20  h-64  h-screen",
    },
    {
      number: "05",
      title: "Min / Max",
      description:
        "Sets minimum and maximum width or height limits for an element.",
      example: "min-h-screen  max-w-3xl",
    },
  ];

  return (
    <Section
      number="09"
      label="Spacing & Sizing"
      title="Controlling Spacing and Element Size"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes for controlling the
        spacing and size of elements in a simple and consistent way.
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

        <CodeBlock>{`<div className="w-full max-w-md mx-auto p-6 m-4 bg-blue-500 rounded-xl">
  <h2 className="text-white">Hello Tailwind</h2>

  <p className="mt-2 text-white">
    Spacing and sizing example.
  </p>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, w-full and max-w-md control the width,
          mx-auto centers the element, p-6 adds inner spacing,
          and m-4 adds outer spacing.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Padding controls inner space, Margin controls outer space,
          and Width and Height define the size of an element.
        </p>
      </div>
    </Section>
  );
}

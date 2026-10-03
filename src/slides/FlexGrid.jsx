import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function FlexboxGrid() {
  // Array of Objects
  // Each object contains information about a Flexbox or Grid concept.

  const concepts = [
    {
      number: "01",
      title: "Flex",
      description:
        "Flexbox helps us arrange elements in a row or column.",
      example: "flex",
    },
    {
      number: "02",
      title: "Flex Direction",
      description:
        "Controls whether flex items are arranged in a row or a column.",
      example: "flex-row  flex-col",
    },
    {
      number: "03",
      title: "Grid",
      description:
        "Grid helps us create layouts using rows and columns.",
      example: "grid",
    },
    {
      number: "04",
      title: "Columns / Rows",
      description:
        "Controls the number of columns and rows in a grid layout.",
      example: "grid-cols-3  grid-rows-2",
    },
    {
      number: "05",
      title: "Gap",
      description:
        "Controls the space between flex or grid items.",
      example: "gap-4  gap-6",
    },
    {
      number: "06",
      title: "Alignment",
      description:
        "Controls how items are aligned horizontally and vertically.",
      example: "items-center  justify-center",
    },
  ];

  return (
    <Section
      number="08"
      label="Flexbox & Grid"
      title="Building Layouts with Flexbox & Grid"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes for Flexbox and Grid
        that make it easier to create flexible and organized layouts.
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

        <CodeBlock>{`<div className="grid grid-cols-3 gap-4">
  <div className="p-4">Item 1</div>
  <div className="p-4">Item 2</div>
  <div className="p-4">Item 3</div>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, grid creates the layout, grid-cols-3
          creates three columns, and gap-4 adds space between the items.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Flexbox arranges items in a row or column.
          Grid organizes items in rows and columns.
        </p>
      </div>
    </Section>
  );
}

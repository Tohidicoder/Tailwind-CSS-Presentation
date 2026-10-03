import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Layout() {
  // Array of Objects:
  // Each object contains the title and description of a layout concept.

  const layoutItems = [
    {
      number: "01",
      title: "Display",
      description:
        "Controls how an element is displayed, such as block, flex, grid, or hidden.",
      example: "block flex grid hidden",
    },
    {
      number: "02",
      title: "Position",
      description:
        "Controls how an element is positioned within a page or its parent.",
      example: "static relative absolute fixed sticky",
    },
    {
      number: "03",
      title: "Overflow",
      description:
        "Controls what happens when content exceeds the size of its container.",
      example: "overflow-hidden overflow-auto overflow-scroll",
    },
    {
      number: "04",
      title: "Z-index",
      description:
        "Controls the stacking order of overlapping elements.",
      example: "z-0 z-10 z-20 z-50",
    },
  ];

  return (
    <Section
      number="07"
      label="Layout"
      title="Understanding Layout in Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes that help us control
        the position, display, and behavior of elements on a webpage.
      </p>

      {/* Layout Concept Cards */}

      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {layoutItems.map((item) => (
          <div
            key={item.number}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              {item.number}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 flex-1 leading-7 text-slate-400">
              {item.description}
            </p>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Tailwind Classes
              </p>

              <code className="text-sm leading-7 text-cyan-200">
                {item.example}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* Code Example */}

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example
        </h3>

        <CodeBlock>{`<div className="relative">
  <div className="absolute right-0 top-0 z-10">
    Tailwind CSS
  </div>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, relative establishes a positioning context,
          absolute positions the child element, and z-10 controls
          its stacking order.
        </p>
      </div>
    </Section>
  );
}

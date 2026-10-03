

import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function ReactWithTailwind() {
  const concepts = [
    {
      number: "01",
      title: "Use Classes in JSX",
      description:
        "Tailwind utility classes are written directly inside the className attribute.",
    },
    {
      number: "02",
      title: "React Components",
      description:
        "React components can be styled directly with Tailwind classes.",
    },
    {
      number: "03",
      title: "Responsive Design",
      description:
        "Responsive classes such as md and lg can be used inside JSX.",
    },
    {
      number: "04",
      title: "Interactive States",
      description:
        "States such as hover and focus can be added directly to elements.",
    },
    {
      number: "05",
      title: "Reusable UI",
      description:
        "React components and Tailwind utilities can be combined to build reusable interfaces.",
    },
  ];

  return (
    <Section
      number="23"
      label="React with Tailwind"
      title="Using Tailwind CSS with React"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS works well with React because we can use
        utility classes directly inside JSX and style reusable
        React components.
      </p>

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

            <p className="mt-3 leading-7 text-slate-400">
              {concept.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Simple Example
        </h3>

        <CodeBlock>{`<button className="rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-700">
  Get Started
</button>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          React uses className, while Tailwind classes control
          the appearance of the button.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          React handles components and structure, while Tailwind
          handles styling and responsive design.
        </p>
      </div>
    </Section>
  );
}
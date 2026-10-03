import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Faster Development",
      description:
        "Build interfaces faster by using ready-to-use utility classes.",
    },
    {
      number: "02",
      title: "Responsive Interfaces",
      description:
        "Create layouts that adapt to different screen sizes with responsive utilities.",
    },
    {
      number: "03",
      title: "Consistent Design",
      description:
        "Use consistent spacing, colors, typography, and sizing throughout a project.",
    },
    {
      number: "04",
      title: "Reusable Components",
      description:
        "Combine Tailwind with React components to create reusable UI elements.",
    },
    {
      number: "05",
      title: "Easy Customization",
      description:
        "Customize the design when the default utilities are not enough.",
    },
  ];

  return (
    <Section
      number="26"
      label="Benefits"
      title="Benefits of Using Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides practical benefits that can make
        the development process faster, more consistent, and
        easier to customize.
      </p>

      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.number}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              {benefit.number}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {benefit.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Simple Example
        </h3>

        <CodeBlock>{`<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
  <div className="rounded-xl bg-blue-500 p-6 text-white">
    Card 1
  </div>

  <div className="rounded-xl bg-purple-500 p-6 text-white">
    Card 2
  </div>

  <div className="rounded-xl bg-cyan-500 p-6 text-white">
    Card 3
  </div>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          A small set of utility classes can create a responsive
          layout without writing separate CSS rules.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Tailwind CSS can help developers build responsive,
          consistent, customizable, and reusable interfaces
          more efficiently.
        </p>
      </div>
    </Section>
  );
}
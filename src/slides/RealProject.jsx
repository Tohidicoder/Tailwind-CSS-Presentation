import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function RealProject() {
  const concepts = [
    {
      number: "01",
      title: "Project Structure",
      description:
        "A real project can be divided into reusable React components.",
    },
    {
      number: "02",
      title: "Tailwind Styling",
      description:
        "Tailwind utility classes can be used directly inside each component.",
    },
    {
      number: "03",
      title: "Responsive Layout",
      description:
        "Responsive classes help the project work on different screen sizes.",
    },
    {
      number: "04",
      title: "Reusable Components",
      description:
        "Components such as Navbar, Hero, Cards, and Footer can be reused.",
    },
  ];

  return (
    <Section
      number="24"
      label="Real Project"
      title="Using Tailwind in a Real Project"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS can be used in real websites and applications
        to create responsive layouts, reusable components, and
        consistent designs.
      </p>

      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
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
          Real Project Example
        </h3>

        <CodeBlock>{`function Card() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold text-gray-900">
        My Project
      </h2>

      <p className="mt-2 text-gray-600">
        Built with React and Tailwind CSS.
      </p>
    </div>
  );
}`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          This example shows how a reusable React component can
          be styled with Tailwind utility classes.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="mb-4 text-xl font-bold text-white">
          Typical Project Components
        </h3>

        <div className="flex flex-wrap gap-3">
          {["Navbar", "Hero", "Cards", "Sections", "Footer"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          In a real project, Tailwind CSS can be combined with
          React components to create clean, responsive, and
          reusable user interfaces.
        </p>
      </div>
    </Section>
  );
}
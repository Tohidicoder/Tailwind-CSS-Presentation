

import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function CoreConcepts() {
  const concepts = [
    {
      number: "01",
      title: "Utility Classes",
      description:
        "Small, single-purpose classes that control styling directly in HTML or JSX.",
    },
    {
      number: "02",
      title: "Hover & Focus",
      description:
        "Apply different styles when users hover over or focus on an element.",
    },
    {
      number: "03",
      title: "Responsive Design",
      description:
        "Use responsive prefixes to adapt layouts to different screen sizes.",
    },
    {
      number: "04",
      title: "Dark Mode",
      description:
        "Apply different styles for dark themes using the dark variant.",
    },
    {
      number: "05",
      title: "Theme Variables",
      description:
        "Customize design values such as colors, fonts, and spacing for a project.",
    },
  ];

  return (
    <Section
      number="06"
      label="Core Concepts"
      title="Understanding the Core Concepts"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes and built-in variants
        that help developers create flexible and responsive user interfaces.
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <div
            key={concept.number}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
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
          Example
        </h3>

        <CodeBlock>{`<button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700">
  Click Me
</button>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, Tailwind utility classes control the
          background, text color, padding, border radius, and hover effect.
        </p>
      </div>
    </Section>
  );
}
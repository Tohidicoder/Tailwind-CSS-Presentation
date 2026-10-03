


import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Typography() {
  // Array of Objects
  // Each object contains information about a typography concept.

  const concepts = [
    {
      number: "01",
      title: "Font",
      description:
        "Controls the font family used for text.",
      example: "font-sans  font-serif  font-mono",
    },
    {
      number: "02",
      title: "Font Size",
      description:
        "Controls how large or small the text appears.",
      example: "text-sm  text-lg  text-2xl",
    },
    {
      number: "03",
      title: "Font Weight",
      description:
        "Controls how thin or bold the text appears.",
      example: "font-light  font-medium  font-bold",
    },
    {
      number: "04",
      title: "Text Alignment",
      description:
        "Controls the horizontal alignment of text.",
      example: "text-left  text-center  text-right",
    },
    {
      number: "05",
      title: "Line Height",
      description:
        "Controls the vertical space between lines of text.",
      example: "leading-5  leading-7  leading-10",
    },
    {
      number: "06",
      title: "Text Color",
      description:
        "Controls the color of text.",
      example: "text-white  text-gray-400  text-blue-500",
    },
  ];

  return (
    <Section
      number="10"
      label="Typography"
      title="Styling Text with Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes that make it easy to
        control fonts, text size, weight, alignment, spacing, and color.
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

        <CodeBlock>{`<h1 className="text-3xl font-bold text-center text-blue-500">
  Hello Tailwind
</h1>

<p className="mt-2 text-lg leading-7 text-gray-400">
  Typography example with Tailwind CSS.
</p>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, text-3xl controls the font size,
          font-bold controls the font weight, text-center aligns
          the heading, text-blue-500 changes the text color,
          and leading-7 controls the line height.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Typography controls how text looks, including its font,
          size, weight, alignment, line height, and color.
        </p>
      </div>
    </Section>
  );
}
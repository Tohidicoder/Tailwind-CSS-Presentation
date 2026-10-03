import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Effects() {
  // Array of Objects
  // Each object contains information about an Effects concept.

  const concepts = [
    {
      number: "01",
      title: "Shadow",
      description:
        "Adds a shadow around an element to create depth and visual separation.",
      example: "shadow-sm  shadow-md  shadow-lg",
    },
    {
      number: "02",
      title: "Opacity",
      description:
        "Controls how transparent or visible an element is.",
      example: "opacity-50  opacity-75  opacity-100",
    },
    {
      number: "03",
      title: "Blur",
      description:
        "Applies a blur effect to an element.",
      example: "blur-sm  blur-md  blur-lg",
    },
    {
      number: "04",
      title: "Filters",
      description:
        "Applies visual effects such as grayscale, brightness, or contrast.",
      example: "grayscale  brightness-110  contrast-125",
    },
  ];

  return (
    <Section
      number="13"
      label="Effects"
      title="Adding Visual Effects with Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes for adding visual effects
        such as shadows, transparency, blur, and image filters.
      </p>

      {/* Concept Cards */}

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

        <CodeBlock>{`<div className="rounded-xl bg-white p-6 shadow-lg">
  <h2 className="text-xl font-bold text-gray-900">
    Hello Tailwind
  </h2>

  <p className="mt-2 text-gray-600 opacity-75">
    This element uses visual effects.
  </p>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, shadow-lg adds a large shadow,
          rounded-xl rounds the corners, and opacity-75 makes
          the paragraph slightly transparent.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Effects add visual details to elements.
          Shadow creates depth, Opacity controls transparency,
          Blur softens elements, and Filters add visual effects.
        </p>
      </div>
    </Section>
  );
}
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Colors() {
  const concepts = [
    {
      number: "01",
      title: "Text Color",
      description:
        "Controls the color of text using Tailwind's color utilities.",
      example: "text-blue-500  text-gray-700  text-white",
    },
    {
      number: "02",
      title: "Background Color",
      description:
        "Controls the background color of an element.",
      example: "bg-blue-500  bg-gray-900  bg-white",
    },
    {
      number: "03",
      title: "Border Color",
      description:
        "Controls the color of an element's border.",
      example: "border-blue-500  border-gray-300",
    },
    {
      number: "04",
      title: "Color Shades",
      description:
        "Tailwind provides different shades of colors for more control over a design.",
      example: "blue-100  blue-500  blue-900",
    },
    {
      number: "05",
      title: "Opacity",
      description:
        "Controls how transparent a color appears.",
      example: "text-blue-500/50  bg-black/20",
    },
    {
      number: "06",
      title: "Gradient Colors",
      description:
        "Combines multiple colors to create a smooth color transition.",
      example: "from-blue-500  via-purple-500  to-pink-500",
    },
  ];

  return (
    <Section
      number="11"
      label="Colors"
      title="Working with Colors in Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides a large color system that can be used
        for text, backgrounds, borders, gradients, and other parts
        of a user interface.
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

            <p className="mt-3 flex-1 leading-7 text-slate-400">
              {concept.description}
            </p>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Tailwind Classes
              </p>

              <code className="break-words text-sm leading-7 text-cyan-200">
                {concept.example}
              </code>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Color Example
        </h3>

        <CodeBlock>{`<div className="rounded-xl bg-blue-500 p-6">
  <h2 className="text-2xl font-bold text-white">
    Tailwind CSS
  </h2>

  <p className="mt-2 text-blue-100">
    Working with colors.
  </p>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, bg-blue-500 sets the background color,
          text-white changes the heading color, and text-blue-100
          creates a lighter color for the paragraph.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Color Shades
        </h3>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-200 p-5 text-gray-900">
            blue-200
          </div>

          <div className="rounded-xl bg-blue-500 p-5 text-white">
            blue-500
          </div>

          <div className="rounded-xl bg-blue-900 p-5 text-white">
            blue-900
          </div>
        </div>

        <p className="mt-4 leading-7 text-slate-400">
          Tailwind provides different shades of many colors.
          Lower numbers are generally lighter, while higher
          numbers are generally darker.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Gradient Example
        </h3>

        <CodeBlock>{`<div className="rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
  <h2 className="text-2xl font-bold text-white">
    Beautiful Gradient
  </h2>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          The from, via, and to utilities define the colors
          used in the gradient.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Tailwind's color utilities control text, backgrounds,
          borders, opacity, and gradients. Color shades give us
          more control over the appearance of our design.
        </p>
      </div>
    </Section>
  );
}
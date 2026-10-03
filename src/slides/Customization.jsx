import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Customization() {
  // Array of Objects
  // Each object contains information about a customization concept.

  const concepts = [
    {
      number: "01",
      title: "Custom Styles",
      description:
        "Allows developers to create their own CSS styles when utility classes are not enough.",
      example: "@layer components",
    },
    {
      number: "02",
      title: "Theme Variables",
      description:
        "Defines custom design values such as colors, fonts, and breakpoints.",
      example: "--color-brand: #06b6d4;",
    },
    {
      number: "03",
      title: "Functions & Directives",
      description:
        "Provides special CSS features and directives for organizing and customizing Tailwind.",
      example: "@theme  @apply  @utility",
    },
  ];

  return (
    <Section
      number="19"
      label="Customization"
      title="Customizing Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Customization allows developers to adjust Tailwind CSS
        according to their project needs by defining custom styles,
        theme variables, and reusable utilities.
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
                Example
              </p>

              <code className="break-words text-sm leading-7 text-cyan-200">
                {concept.example}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* Example */}

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example — Custom Theme
        </h3>

        <CodeBlock>{`@import "tailwindcss";

@theme {
  --color-brand: #06b6d4;
  --font-display: "Arial", sans-serif;
}`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, we define a custom brand color
          and a font family inside the theme.
          We can then use them through Tailwind utility classes.
        </p>

        <div className="mt-5">
          <CodeBlock>{`<h1 className="bg-brand font-display text-white p-4">
  My Custom Design
</h1>`}</CodeBlock>
        </div>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Customization allows us to adapt Tailwind CSS to our
          design needs by creating custom styles, defining theme
          variables, and extending its utilities.
        </p>
      </div>
    </Section>
  );
}
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function DarkMode() {
  // Array of Objects
  // Each object contains information about Dark Mode styling.

  const concepts = [
    {
      number: "01",
      title: "Dark Variant",
      description:
        "The dark: prefix applies styles when dark mode is active.",
      example: "dark:bg-gray-900",
    },
    {
      number: "02",
      title: "Background Color",
      description:
        "Changes the background color for light and dark themes.",
      example: "bg-white dark:bg-gray-900",
    },
    {
      number: "03",
      title: "Text Color",
      description:
        "Changes text color to maintain readability in both themes.",
      example: "text-gray-900 dark:text-white",
    },
    {
      number: "04",
      title: "Border Color",
      description:
        "Adjusts border colors for different theme appearances.",
      example: "border-gray-200 dark:border-gray-700",
    },
  ];

  return (
    <Section
      number="18"
      label="Dark Mode"
      title="Creating Light and Dark Themes"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Dark Mode allows a website to display a darker color
        scheme. Tailwind CSS uses the dark: variant to apply
        different styles when dark mode is active.
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
          Example
        </h3>

        <CodeBlock>{`<div className="rounded-xl bg-white p-6 text-gray-900 dark:bg-gray-900 dark:text-white">
  <h2 className="text-xl font-bold">
    Hello Tailwind
  </h2>

  <p className="mt-2 text-gray-600 dark:text-gray-300">
    This element supports light and dark themes.
  </p>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, the element uses a white background
          and dark text in light mode. In dark mode, the background
          becomes dark and the text becomes light.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Dark Mode changes the appearance of a website for
          a darker theme. The dark: variant lets us define
          different styles for light and dark modes.
        </p>
      </div>
    </Section>
  );
}
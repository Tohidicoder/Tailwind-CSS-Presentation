
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function ResponsiveDesign() {
  // Array of Objects
  // Each object contains information about a responsive breakpoint.

  const breakpoints = [
    {
      number: "01",
      title: "sm",
      size: "640px",
      description:
        "Applies styles at small screens and larger.",
      example: "sm:text-lg",
    },
    {
      number: "02",
      title: "md",
      size: "768px",
      description:
        "Applies styles at medium screens and larger.",
      example: "md:grid-cols-2",
    },
    {
      number: "03",
      title: "lg",
      size: "1024px",
      description:
        "Applies styles at large screens and larger.",
      example: "lg:grid-cols-3",
    },
    {
      number: "04",
      title: "xl",
      size: "1280px",
      description:
        "Applies styles at extra-large screens and larger.",
      example: "xl:text-2xl",
    },
    {
      number: "05",
      title: "2xl",
      size: "1536px",
      description:
        "Applies styles at very large screens and larger.",
      example: "2xl:max-w-7xl",
    },
  ];

  return (
    <Section
      number="16"
      label="Responsive Design"
      title="Designing for Different Screen Sizes"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Responsive Design allows a website to adapt its layout
        and appearance to different screen sizes, including
        mobile phones, tablets, and desktops.
      </p>

      {/* Breakpoint Cards */}

      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {breakpoints.map((breakpoint) => (
          <div
            key={breakpoint.number}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              {breakpoint.number}
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              {breakpoint.title}
            </h3>

            <p className="mt-2 text-sm font-medium text-cyan-300">
              {breakpoint.size} and above
            </p>

            <p className="mt-3 flex-1 leading-7 text-slate-400">
              {breakpoint.description}
            </p>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Example Class
              </p>

              <code className="text-sm text-cyan-200">
                {breakpoint.example}
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

        <CodeBlock>{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="rounded-lg bg-blue-500 p-6 text-white">
    Item 1
  </div>

  <div className="rounded-lg bg-purple-500 p-6 text-white">
    Item 2
  </div>

  <div className="rounded-lg bg-cyan-500 p-6 text-white">
    Item 3
  </div>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, the layout displays one column on
          small screens, two columns at md, and three columns
          at lg and larger screens.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Responsive Design makes websites adapt to different
          screen sizes. Tailwind uses breakpoint prefixes such
          as sm, md, lg, xl, and 2xl to apply styles at different widths.
        </p>
      </div>
    </Section>
  );
}
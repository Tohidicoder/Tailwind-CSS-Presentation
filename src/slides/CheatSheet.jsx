import Section from "../components/Section";

export default function CheatSheet() {
  const categories = [
    {
      title: "Layout",
      items: [
        "block",
        "flex",
        "grid",
        "hidden",
        "relative",
        "absolute",
      ],
    },
    {
      title: "Spacing",
      items: [
        "p-4",
        "px-6",
        "py-3",
        "m-4",
        "mt-6",
        "gap-4",
      ],
    },
    {
      title: "Sizing",
      items: [
        "w-full",
        "w-1/2",
        "h-screen",
        "min-h-screen",
        "max-w-xl",
      ],
    },
    {
      title: "Typography",
      items: [
        "text-xl",
        "font-bold",
        "text-center",
        "leading-7",
        "text-gray-500",
      ],
    },
    {
      title: "Colors",
      items: [
        "bg-blue-500",
        "text-white",
        "border-gray-300",
        "from-blue-500",
        "to-purple-500",
      ],
    },
    {
      title: "Responsive",
      items: [
        "sm:",
        "md:",
        "lg:",
        "xl:",
        "2xl:",
      ],
    },
    {
      title: "States",
      items: [
        "hover:",
        "focus:",
        "active:",
        "disabled:",
        "group-hover:",
      ],
    },
    {
      title: "Effects",
      items: [
        "shadow-lg",
        "opacity-50",
        "blur-sm",
        "grayscale",
      ],
    },
  ];

  return (
    <Section
      number="27"
      label="Cheat Sheet"
      title="Tailwind CSS Quick Reference"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        A quick reference of commonly used Tailwind CSS utility
        classes for everyday development.
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <h3 className="mb-4 text-xl font-bold text-cyan-300">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <code
                  key={item}
                  className="rounded-lg bg-slate-950/80 px-3 py-2 text-sm text-cyan-200"
                >
                  {item}
                </code>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Tailwind CSS provides small utility classes that can be
          combined to build complete user interfaces quickly.
          This cheat sheet can be used as a quick reference while
          developing a project.
        </p>
      </div>
    </Section>
  );
}
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function States() {
  const concepts = [
    {
      number: "01",
      title: "Hover",
      description:
        "Applies styles when the user moves the mouse over an element.",
      example: "hover:bg-blue-700  hover:scale-105",
    },
    {
      number: "02",
      title: "Focus",
      description:
        "Applies styles when an element receives focus, such as an input field.",
      example: "focus:ring-2  focus:ring-blue-500",
    },
    {
      number: "03",
      title: "Active",
      description:
        "Applies styles while an element is being pressed or activated.",
      example: "active:scale-95  active:bg-blue-800",
    },
    {
      number: "04",
      title: "Disabled",
      description:
        "Applies styles to elements that are disabled and cannot be interacted with.",
      example: "disabled:opacity-50  disabled:cursor-not-allowed",
    },
    {
      number: "05",
      title: "Group",
      description:
        "Allows a child element to change its style when the parent group is hovered or focused.",
      example: "group  group-hover:text-cyan-400",
    },
  ];

  return (
    <Section
      number="17"
      label="States"
      title="Styling Interactive States"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides state variants that allow us to
        change an element's appearance based on user interaction,
        such as hover, focus, active, and disabled states.
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
          Example — Hover
        </h3>

        <CodeBlock>{`<button
  className="rounded-lg bg-blue-500 px-6 py-3
  font-semibold text-white transition
  hover:bg-blue-700 hover:scale-105"
>
  Hover Me
</button>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, the button changes its background color
          and becomes slightly larger when the user moves the mouse
          over it.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example — Focus
        </h3>

        <CodeBlock>{`<input
  type="text"
  placeholder="Enter your name"
  className="rounded-lg border border-gray-600
  bg-gray-900 px-4 py-3 text-white
  outline-none focus:border-blue-500
  focus:ring-2 focus:ring-blue-500"
/>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          When the input receives focus, the border and focus ring
          change color to show the user which field is active.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example — Disabled
        </h3>

        <CodeBlock>{`<button
  disabled
  className="rounded-lg bg-blue-500 px-6 py-3
  text-white disabled:cursor-not-allowed
  disabled:opacity-50"
>
  Disabled
</button>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          The disabled variants make it clear that the button
          cannot currently be used.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example — Group
        </h3>

        <CodeBlock>{`<div className="group rounded-xl bg-slate-800 p-6">
  <h2 className="text-white group-hover:text-cyan-400">
    Hover the Card
  </h2>

  <p className="mt-2 text-gray-400">
    The title changes when the card is hovered.
  </p>
</div>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          The group class is added to the parent element.
          Then group-hover allows a child element to change
          when the parent is hovered.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          State variants allow us to create interactive interfaces.
          Hover responds to the mouse, Focus responds to focused
          elements, Active responds to pressing, Disabled controls
          disabled elements, and Group connects a parent's state
          to its children.
        </p>
      </div>
    </Section>
  );
}
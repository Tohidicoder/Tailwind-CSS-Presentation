import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function TransitionsAnimation() {
  // Array of Objects
  // Each object contains information about a
  // Transition or Animation concept.

  const concepts = [
    {
      number: "01",
      title: "Transition",
      description:
        "Creates a smooth change between different styles of an element.",
      example: "transition  transition-all",
    },
    {
      number: "02",
      title: "Duration",
      description:
        "Controls how long a transition or animation takes to complete.",
      example: "duration-300  duration-500  duration-1000",
    },
    {
      number: "03",
      title: "Transform",
      description:
        "Changes the size, position, rotation, or shape of an element.",
      example: "scale-110  rotate-6  translate-x-4",
    },
    {
      number: "04",
      title: "Animation",
      description:
        "Adds predefined animations such as spin, pulse, bounce, or ping.",
      example: "animate-spin  animate-pulse  animate-bounce",
    },
  ];

  return (
    <Section
      number="14"
      label="Transitions & Animation"
      title="Creating Smooth Transitions and Animations"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS provides utility classes for creating smooth
        visual changes, transformations, and animations.
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

        <CodeBlock>{`<button
  className="rounded-lg bg-blue-500 px-6 py-3 text-white
  transition duration-300 hover:scale-110 hover:bg-blue-700"
>
  Hover Me
</button>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          In this example, transition creates a smooth change,
          duration-300 controls the speed, and hover:scale-110
          makes the button slightly larger when the user hovers over it.
        </p>
      </div>

      {/* Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Transition makes changes smooth, Duration controls the speed,
          Transform changes the appearance or position, and Animation
          adds movement to elements.
        </p>
      </div>
    </Section>
  );
}
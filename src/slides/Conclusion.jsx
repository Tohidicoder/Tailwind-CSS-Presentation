import Section from "../components/Section";

export default function Conclusion() {
  const keyPoints = [
    {
      number: "01",
      title: "Utility-First",
      description:
        "Build interfaces by combining small utility classes instead of writing large amounts of custom CSS.",
    },
    {
      number: "02",
      title: "Responsive",
      description:
        "Use responsive utilities to create layouts that work across mobile, tablet, and desktop.",
    },
    {
      number: "03",
      title: "Customizable",
      description:
        "Customize colors, spacing, typography, themes, components, and other parts of your design system.",
    },
    {
      number: "04",
      title: "Reusable",
      description:
        "Combine Tailwind with React components to create reusable and consistent UI.",
    },
    {
      number: "05",
      title: "Practical",
      description:
        "Use the utilities you learned to build real websites and applications faster.",
    },
  ];

  return (
    <Section
      number="36"
      label="Conclusion"
      title="Tailwind CSS — From Utilities to Real Projects"
    >
      {/* 1. Final Introduction */}

      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        We started with simple utility classes and learned how to use them to
        build layouts, style content, create responsive designs, add
        interactions, customize Tailwind, and build real interfaces.
      </p>

      {/* 2. What We Learned */}

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white">What We Learned</h3>

        <p className="mt-2 text-sm text-slate-500">
          These are the 5 main ideas to remember from this presentation.
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {keyPoints.map((point) => (
            <div
              key={point.number}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]"
            >
              <span className="text-sm font-bold text-cyan-400">
                {point.number}
              </span>

              <h4 className="mt-4 text-xl font-bold text-white">
                {point.title}
              </h4>

              <p className="mt-3 leading-7 text-slate-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Main Idea */}

      <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            The Main Idea
          </span>

          <h3 className="mt-4 text-3xl font-bold text-white">
            Learn the Utilities. Combine Them. Build Real Interfaces.
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tailwind becomes powerful when we understand what each utility does
            and combine small utilities to create complete designs.
          </p>
        </div>
      </div>

      {/* 4. From Learning to Building */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8">
        <h3 className="text-2xl font-bold text-white">
          From Learning to Building
        </h3>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-950 p-5">
            <span className="text-sm font-bold text-cyan-400">01</span>

            <h4 className="mt-3 font-bold text-white">Learn</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Understand the utility classes.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5">
            <span className="text-sm font-bold text-cyan-400">02</span>

            <h4 className="mt-3 font-bold text-white">Practice</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Try the utilities with small examples.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5">
            <span className="text-sm font-bold text-cyan-400">03</span>

            <h4 className="mt-3 font-bold text-white">Combine</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Combine utilities to create components.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5">
            <span className="text-sm font-bold text-cyan-400">04</span>

            <h4 className="mt-3 font-bold text-white">Build</h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use them in real projects.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Personal Takeaway */}

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
        <h3 className="text-2xl font-bold text-white">My Takeaway</h3>

        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          Tailwind CSS makes web development more practical by giving developers
          small, reusable utilities that can be combined to create modern,
          responsive, and consistent interfaces.
        </p>
      </div>

      {/* 6. Final Message */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.05] p-10 text-center">
        <h3 className="text-4xl font-bold text-white">Thank You! 🙌</h3>

        <p className="mt-4 text-lg text-slate-400">Questions?</p>

        <div className="mx-auto mt-6 h-px w-24 bg-cyan-400/40" />

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          Tailwind CSS Presentation
        </p>
      </div>
    </Section>
  );
}

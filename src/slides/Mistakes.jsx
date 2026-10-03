import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Mistakes() {
  const mistakes = [
    {
      number: "01",
      title: "Too Many Classes",
      description:
        "Using too many utility classes can make JSX difficult to read and maintain.",
    },
    {
      number: "02",
      title: "Ignoring Responsive Design",
      description:
        "A design should be tested on different screen sizes instead of focusing only on desktop.",
    },
    {
      number: "03",
      title: "Repeating the Same Styles",
      description:
        "Repeated styles can make the code harder to maintain when reusable components could be used.",
    },
    {
      number: "04",
      title: "Not Understanding the Classes",
      description:
        "Using classes without understanding what they do can make debugging and future changes difficult.",
    },
    {
      number: "05",
      title: "Poor Class Organization",
      description:
        "Unorganized utility classes can make a component harder to read and understand.",
    },
  ];

  return (
    <Section
      number="25"
      label="Common Mistakes"
      title="Common Mistakes When Using Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind CSS is powerful, but using it effectively requires
        understanding how to organize utility classes and build
        reusable components.
      </p>

      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mistakes.map((mistake) => (
          <div
            key={mistake.number}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              {mistake.number}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {mistake.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {mistake.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Example
        </h3>

        <CodeBlock>{`<button
  className="rounded-lg bg-blue-500 px-5 py-3
  font-semibold text-white transition
  hover:bg-blue-700"
>
  Get Started
</button>`}</CodeBlock>

        <p className="mt-4 leading-7 text-slate-400">
          Instead of adding random classes, understand what each
          utility does and keep the styling organized.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">
          Key Takeaway
        </h3>

        <p className="leading-7 text-slate-300">
          Good Tailwind code is not only about using utility classes.
          It is also about keeping the code readable, responsive,
          organized, and reusable.
        </p>
      </div>
    </Section>
  );
}
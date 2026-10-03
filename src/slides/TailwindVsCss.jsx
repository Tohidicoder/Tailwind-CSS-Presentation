import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function TailwindVsCss() {
  return (
    <Section
      number="04"
      label="Comparison"
      title="Traditional CSS vs Tailwind CSS"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-400">
        Both approaches can create the same design, but they use
        different ways to write styles.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Traditional CSS */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">
            Traditional CSS
          </h3>

          <CodeBlock>{`.button {
  background: blue;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}`}</CodeBlock>

          <p className="mt-4 leading-7 text-slate-400">
            We write CSS rules separately and connect them to an HTML element
            using a class name.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">
            Tailwind CSS
          </h3>

          <CodeBlock>{`<button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
  Click Me
</button>`}</CodeBlock>

          <p className="mt-4 leading-7 text-slate-400">
            We use utility classes directly inside the HTML or JSX element
            to apply styles.
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-xl font-bold text-white">
          Key Difference
        </h3>

        <p className="leading-8 text-slate-300">
          Traditional CSS separates styling into CSS rules, while Tailwind
          allows us to apply utility classes directly to elements.
          Both approaches can be used to build responsive and modern websites.
        </p>
      </div>
    </Section>
  );
}
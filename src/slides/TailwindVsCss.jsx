
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function TailwindVsCss() {
  return (<Section
    number="04"
    label="CSS Comparison"
    title="Traditional CSS vs Tailwind CSS"
  > <div className="max-w-5xl space-y-7">


      {/* Short Introduction */}
      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        **Same design, two different ways to style it.**
      </p>

      {/* Comparison */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Traditional CSS */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="text-xl font-black text-white">
            Traditional CSS
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Write styles in a separate CSS file.
          </p>

          <div className="mt-5">
            <CodeBlock>{`.button {


background: #3b82f6;
color: white;
padding: 12px 24px;
border-radius: 8px;
}`}</CodeBlock> </div>


          <button className="mt-5 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white">
            Click Me
          </button>

          <p className="mt-4 text-sm text-slate-400">
            HTML: <span className="font-mono text-cyan-300">class="button"</span>
          </p>
        </div>

        {/* Tailwind CSS */}
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <h3 className="text-xl font-black text-white">
            Tailwind CSS
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Apply utility classes directly in JSX.
          </p>

          <div className="mt-5">
            <CodeBlock>{`<button className="bg-blue-500


text-white px-6 py-3 rounded-lg">
Click Me </button>`}</CodeBlock> </div>

          <button className="mt-5 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white">
            Click Me
          </button>

          <p className="mt-4 text-sm text-slate-400">
            No separate button class is needed for this example.
          </p>
        </div>

      </div>

      {/* Key Difference */}
      <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
          Key Difference
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="font-bold text-white">
              Traditional CSS
            </h4>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Create a CSS rule, then apply its class to the element.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Tailwind CSS
            </h4>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Combine utility classes directly on the element.
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="font-black text-cyan-300">
            Remember: Same result, different styling workflow.
          </p>
        </div>
      </div>

    </div>
  </Section>


  );
}

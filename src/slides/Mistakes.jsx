import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Mistakes() {
  const badCode = `<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
  Buy Now
</button>`;

  const reusableCode = `function Button({ children }) {
  return (
    <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
      {children}
    </button>
  );
}`;

  const usageCode = `<Button>Buy Now</Button>
<Button>Add to Cart</Button>`;

  return (
    <Section
      number="24"
      label="Best Practices"
      title="Write Better Tailwind Code"
    >
      {/* Introduction */}
      <div className="max-w-3xl">
        <p className="text-lg leading-8 text-slate-300">
          Good Tailwind code should be simple, readable, and reusable.
        </p>
      </div>

      {/* Three Main Ideas */}
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <span className="text-sm font-bold text-cyan-400">01</span>

          <h3 className="mt-2 text-lg font-bold text-white">Keep It Simple</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Use only the classes you actually need.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <span className="text-sm font-bold text-cyan-400">02</span>

          <h3 className="mt-2 text-lg font-bold text-white">
            Keep It Readable
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Write clean JSX that is easy to understand.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <span className="text-sm font-bold text-cyan-400">03</span>

          <h3 className="mt-2 text-lg font-bold text-white">
            Reuse Components
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Build once and use the same component many times.
          </p>
        </div>
      </div>

      {/* Real Example */}
      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-wider text-purple-400">
          Real Example
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">Reusable Button</h3>

        <p className="mt-2 text-slate-400">
          Instead of writing the same button styles again and again, create one
          reusable component.
        </p>
      </div>

      {/* Example Code */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {/* Before */}
        <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
          <div className="mb-4">
            <span className="rounded-full bg-red-400/10 px-3 py-1 text-xs font-bold text-red-300">
              BEFORE
            </span>

            <p className="mt-3 text-sm text-slate-400">
              The same styling may be repeated many times.
            </p>
          </div>

          <CodeBlock>{badCode}</CodeBlock>
        </div>

        {/* Better */}
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
          <div className="mb-4">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
              BETTER
            </span>

            <p className="mt-3 text-sm text-slate-400">
              Create the button once and reuse it.
            </p>
          </div>

          <CodeBlock>{reusableCode}</CodeBlock>
        </div>
      </div>

      {/* Usage */}
      <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <p className="mb-3 text-sm font-bold text-cyan-400">
          Use the component
        </p>

        <CodeBlock>{usageCode}</CodeBlock>
      </div>

      {/* Key Takeaway */}
      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
          Remember
        </p>

        <p className="mt-2 text-lg font-bold text-white">
          Simple → Readable → Reusable
        </p>
      </div>
    </Section>
  );
}

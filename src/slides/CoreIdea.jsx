

import Section from "../components/Section";

export default function CoreIdea() {
  return (
    <Section
      number="02"
      label="Core Idea"
      title="How does the utility-first approach work?"
    >
      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-3xl">🎨</p>

          <h3 className="mt-4 text-xl font-bold text-white">
            Small Utility Classes
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            Tailwind provides small classes for common CSS properties such as
            colors, spacing, sizing, typography, and layout.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-3xl">⚡</p>

          <h3 className="mt-4 text-xl font-bold text-white">
            Build Directly in HTML
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            We can combine utility classes directly in HTML or JSX to create
            our designs quickly.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-3xl">📱</p>

          <h3 className="mt-4 text-xl font-bold text-white">
            Responsive Design
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            Tailwind includes responsive utilities that help us create layouts
            for different screen sizes.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-3xl">🧩</p>

          <h3 className="mt-4 text-xl font-bold text-white">
            Flexible & Customizable
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            We can combine utilities and customize the design according to
            the needs of our project.
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-xl font-bold text-white">
          Simple Example
        </h3>

        <p className="font-mono text-cyan-300">
          className="bg-blue-500 text-white p-4 rounded-lg"
        </p>

        <p className="mt-4 leading-7 text-slate-300">
          Instead of writing separate CSS rules, we combine utility classes
          directly in our HTML or JSX.
        </p>
      </div>
    </Section>
  );
}
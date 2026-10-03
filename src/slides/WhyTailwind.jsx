

import Section from "../components/Section";

export default function WhyTailwind() {
  const reasons = [
    {
      title: "Fast Development",
      text: "Build interfaces quickly using ready-to-use utility classes.",
    },
    {
      title: "Responsive Design",
      text: "Create layouts that work well on different screen sizes.",
    },
    {
      title: "Consistent Design",
      text: "Keep spacing, colors, and sizing consistent across the project.",
    },
    {
      title: "Easy Prototyping",
      text: "Turn design ideas into working interfaces quickly.",
    },
    {
      title: "Less Custom CSS",
      text: "Reduce the need to write separate CSS rules for every element.",
    },
  ];

  return (
    <Section
      number="03"
      label="Why Tailwind?"
      title="Why do developers use it?"
    >
      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              0{index + 1}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {reason.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {reason.text}
            </p>
          </div>
        ))}
      </div>

      {/* Key Point */}
      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
        <h3 className="font-bold text-cyan-400">
          Key Point
        </h3>

        <p className="mt-2 leading-7 text-slate-300">
          Tailwind CSS helps developers build responsive and
          consistent interfaces faster with utility classes.
        </p>
      </div>
    </Section>
  );
}
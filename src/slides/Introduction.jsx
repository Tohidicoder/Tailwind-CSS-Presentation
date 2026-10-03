
import Section from "../components/Section";

export default function Introduction() {
  return (
    <Section
      number="01"
      label="Introduction"
      title="What is Tailwind CSS?"
    >
      <div className="max-w-4xl space-y-6">
        <p className="text-xl leading-9 text-slate-300">
          Tailwind CSS is a utility-first CSS framework for building modern,
          responsive, and customizable user interfaces.
        </p>

        <p className="text-lg leading-8 text-slate-400">
          Tailwind CSS was created by Adam Wathan and started around 2017.
          It was designed to make styling websites faster, easier, and more
          flexible.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "📅 When?",
            text: "Tailwind CSS started around 2017.",
          },
          {
            title: "👨‍💻 Created by",
            text: "Tailwind CSS was created by Adam Wathan.",
          },
          {
            title: "🎯 Why?",
            text: "It was created to make styling websites faster and more flexible.",
          },
          {
            title: "💻 What is it?",
            text: "It is a utility-first CSS framework for building modern and responsive interfaces.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="mb-3 text-lg font-bold text-cyan-300">
              {item.title}
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-xl font-bold text-white">
          In simple words
        </h3>

        <p className="leading-8 text-slate-300">
          Tailwind CSS gives us small utility classes that we can combine
          directly in HTML or JSX to create our designs without writing a lot
          of custom CSS.
        </p>
      </div>
    </Section>
  );
}

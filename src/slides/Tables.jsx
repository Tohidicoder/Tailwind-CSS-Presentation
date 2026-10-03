import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Tables() {
          const concepts = [
                    {
                              number: "01",
                              title: "Border Collapse",
                              description:
                                        "Controls whether table borders are combined into a single border.",
                              example: "border-collapse",
                              detail:
                                        "Useful for creating clean and connected table borders.",
                    },
                    {
                              number: "02",
                              title: "Border Spacing",
                              description:
                                        "Controls the space between table cells.",
                              example: "border-spacing-2",
                              detail:
                                        "Useful when you want visible space between individual cells.",
                    },
                    {
                              number: "03",
                              title: "Table Layout",
                              description:
                                        "Controls how the browser calculates the width of table columns.",
                              example: "table-fixed",
                              detail:
                                        "Useful when you want predictable and consistent column widths.",
                    },
                    {
                              number: "04",
                              title: "Caption Side",
                              description:
                                        "Controls the position of a table caption.",
                              example: "caption-top",
                              detail:
                                        "Useful for placing a table title above or below the table.",
                    },
          ];

          return (
                    <Section
                              number="36"
                              label="Tables"
                              title="Table Utilities"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides utilities for controlling table borders,
                                        spacing, layout, and captions.
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

                                                            <p className="mt-3 leading-7 text-slate-400">
                                                                      {concept.description}
                                                            </p>

                                                            <div className="mt-auto pt-5">
                                                                      <code className="rounded-lg bg-slate-950 px-3 py-2 text-sm text-cyan-300">
                                                                                {concept.example}
                                                                      </code>

                                                                      <p className="mt-4 text-sm leading-6 text-slate-500">
                                                                                {concept.detail}
                                                                      </p>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>

                              <div className="mt-10">
                                        <h3 className="mb-4 text-xl font-bold text-white">
                                                  Practical Example
                                        </h3>

                                        <CodeBlock>
                                                  {`<table className="w-full table-fixed border-collapse text-left">
  <caption className="caption-top mb-3 text-lg font-bold">
    Students
  </caption>

  <thead>
    <tr className="border-b border-slate-600">
      <th className="p-3">Name</th>
      <th className="p-3">Course</th>
      <th className="p-3">Level</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-b border-slate-700">
      <td className="p-3">Faeza</td>
      <td className="p-3">Web Development</td>
      <td className="p-3">Beginner</td>
    </tr>
  </tbody>
</table>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  This table uses a fixed layout, collapsed borders, a top
                                                  caption, and spacing utilities for the cells.
                                        </p>
                              </div>

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Table utilities make it easier to control the structure,
                                                  spacing, borders, and appearance of HTML tables.
                                        </p>
                              </div>
                    </Section>
          );
}
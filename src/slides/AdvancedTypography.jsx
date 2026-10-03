import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function AdvancedTypography() {
          const concepts = [
                    {
                              number: "01",
                              title: "Letter Spacing",
                              description:
                                        "Controls the space between letters in a text.",
                              example: "tracking-wide",
                              detail:
                                        "Useful for headings, labels, buttons, and uppercase text.",
                    },
                    {
                              number: "02",
                              title: "Text Transform",
                              description:
                                        "Changes the capitalization of text.",
                              example: "uppercase",
                              detail:
                                        "Common options include uppercase, lowercase, and capitalize.",
                    },
                    {
                              number: "03",
                              title: "Text Decoration",
                              description:
                                        "Adds or controls decorations such as underlines.",
                              example: "underline",
                              detail:
                                        "Useful for links and highlighting important text.",
                    },
                    {
                              number: "04",
                              title: "Text Overflow",
                              description:
                                        "Controls what happens when text is too long for its container.",
                              example: "truncate",
                              detail:
                                        "Useful for cards, lists, and fixed-width text areas.",
                    },
                    {
                              number: "05",
                              title: "White Space & Word Break",
                              description:
                                        "Controls how text wraps and breaks inside a container.",
                              example: "whitespace-nowrap",
                              detail:
                                        "Useful when text should stay on one line or break in a controlled way.",
                    },
          ];

          return (
                    <Section
                              number="29"
                              label="Advanced Typography"
                              title="Advanced Typography Utilities"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS also provides utilities for controlling letter
                                        spacing, text transformation, decoration, and text wrapping.
                              </p>

                              {/* Concepts */}
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

                              {/* Practical Example */}
                              <div className="mt-10">
                                        <h3 className="mb-4 text-xl font-bold text-white">
                                                  Practical Example
                                        </h3>

                                        <CodeBlock>
                                                  {`<div className="max-w-sm rounded-xl bg-slate-800 p-5">
  <h2 className="mb-2 text-xl font-bold uppercase tracking-wide">
    Tailwind CSS
  </h2>

  <p className="truncate text-slate-300">
    This is a very long text that may not fit inside the container.
  </p>

  <a
    href="#"
    className="mt-3 inline-block underline"
  >
    Learn More
  </a>
</div>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  This example combines letter spacing, text transformation,
                                                  text decoration, and text overflow utilities.
                                        </p>
                              </div>

                              {/* Key Takeaway */}
                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Advanced typography utilities give you more control over
                                                  text appearance, spacing, decoration, and wrapping.
                                        </p>
                              </div>
                    </Section>
          );
}
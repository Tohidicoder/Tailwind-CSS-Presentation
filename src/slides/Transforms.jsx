import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Transforms() {
          const concepts = [
                    {
                              number: "01",
                              title: "Scale",
                              description:
                                        "Changes the size of an element.",
                              example: "scale-105",
                              detail:
                                        "Useful for hover effects and making elements slightly larger or smaller.",
                    },
                    {
                              number: "02",
                              title: "Rotate",
                              description:
                                        "Rotates an element around its center.",
                              example: "rotate-6",
                              detail:
                                        "Useful for icons, images, cards, and decorative elements.",
                    },
                    {
                              number: "03",
                              title: "Translate",
                              description:
                                        "Moves an element horizontally or vertically.",
                              example: "translate-y-2",
                              detail:
                                        "Useful for small movements and interactive hover effects.",
                    },
                    {
                              number: "04",
                              title: "Skew",
                              description:
                                        "Tilts an element along the horizontal or vertical axis.",
                              example: "skew-x-6",
                              detail:
                                        "Useful for creating creative shapes and visual effects.",
                    },
                    {
                              number: "05",
                              title: "Transform Origin",
                              description:
                                        "Controls the point around which an element transforms.",
                              example: "origin-center",
                              detail:
                                        "Useful when you want a rotation or scale effect to start from a specific point.",
                    },
          ];

          return (
                    <Section
                              number="31"
                              label="Transforms"
                              title="Transform Utilities"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Transform utilities allow you to move, rotate, scale, and
                                        skew elements without writing custom CSS.
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
                                                  {`<button
  className="rounded-lg bg-cyan-500 px-6 py-3 text-white
  transition duration-300
  hover:scale-105
  hover:rotate-1
  hover:-translate-y-1"
>
  Hover Me
</button>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  When the user hovers over the button, it becomes slightly
                                                  larger, rotates, and moves upward.
                                        </p>
                              </div>

                              {/* Key Takeaway */}
                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Transform utilities make it easy to create movement,
                                                  rotation, scaling, and interactive visual effects.
                                        </p>
                              </div>
                    </Section>
          );
}
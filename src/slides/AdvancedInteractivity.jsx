import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function AdvancedInteractivity() {
          const concepts = [
                    {
                              number: "01",
                              title: "Appearance",
                              description:
                                        "Controls the default browser appearance of form elements.",
                              example: "appearance-none",
                              detail:
                                        "Useful when creating custom select, checkbox, or input designs.",
                    },
                    {
                              number: "02",
                              title: "Caret Color",
                              description:
                                        "Changes the color of the text cursor inside an input.",
                              example: "caret-cyan-400",
                              detail:
                                        "Useful for making text inputs match your design.",
                    },
                    {
                              number: "03",
                              title: "Scroll Behavior",
                              description:
                                        "Controls how scrolling happens inside a page or container.",
                              example: "scroll-smooth",
                              detail:
                                        "Useful when navigating smoothly between sections.",
                    },
                    {
                              number: "04",
                              title: "Scroll Snap",
                              description:
                                        "Makes scrolling stop at specific positions.",
                              example: "snap-x snap-mandatory",
                              detail:
                                        "Useful for sliders, image galleries, and horizontal cards.",
                    },
                    {
                              number: "05",
                              title: "Touch Action",
                              description:
                                        "Controls how touch gestures work on an element.",
                              example: "touch-pan-x",
                              detail:
                                        "Useful for touch-based sliders and mobile interactions.",
                    },
          ];

          return (
                    <Section
                              number="32"
                              label="Advanced Interactivity"
                              title="Advanced Interactivity Utilities"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS also provides utilities for controlling form
                                        appearance, text cursors, scrolling, snapping, and touch
                                        interactions.
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
                                                  {`<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth">
  <div className="min-w-full snap-center rounded-xl bg-slate-800 p-8">
    Slide 1
  </div>

  <div className="min-w-full snap-center rounded-xl bg-slate-800 p-8">
    Slide 2
  </div>

  <div className="min-w-full snap-center rounded-xl bg-slate-800 p-8">
    Slide 3
  </div>
</div>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  The container scrolls horizontally, moves smoothly, and
                                                  snaps each slide into position.
                                        </p>
                              </div>

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Advanced interactivity utilities help you create better
                                                  forms, scrolling experiences, sliders, and touch-friendly
                                                  interfaces.
                                        </p>
                              </div>
                    </Section>
          );
}
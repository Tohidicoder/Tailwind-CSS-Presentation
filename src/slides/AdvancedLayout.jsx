import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function AdvancedLayout() {
          const concepts = [
                    {
                              number: "01",
                              title: "Aspect Ratio",
                              description:
                                        "Controls the width-to-height proportion of an element.",
                              example: "aspect-video",
                              detail:
                                        "Useful for videos, images, and media containers.",
                    },
                    {
                              number: "02",
                              title: "Object Fit",
                              description:
                                        "Controls how an image or video fits inside its container.",
                              example: "object-cover",
                              detail:
                                        "Useful for keeping images inside cards without distortion.",
                    },
                    {
                              number: "03",
                              title: "Object Position",
                              description:
                                        "Controls which part of an image is visible inside its container.",
                              example: "object-center",
                              detail:
                                        "Useful when an image is cropped inside a card or banner.",
                    },
                    {
                              number: "04",
                              title: "Columns",
                              description:
                                        "Arranges content into multiple columns.",
                              example: "columns-2",
                              detail:
                                        "Useful for text content, lists, and simple layouts.",
                    },
                    {
                              number: "05",
                              title: "Visibility",
                              description:
                                        "Controls whether an element is visible while keeping its space.",
                              example: "invisible",
                              detail:
                                        "Useful when an element should be hidden but keep its layout space.",
                    },
          ];

          return (
                    <Section
                              number="28"
                              label="Advanced Layout"
                              title="Advanced Layout Utilities"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides additional layout utilities for
                                        controlling images, content columns, and element visibility.
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
                                                  {`<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div className="overflow-hidden rounded-xl">
    <img
      src="/images/photo.jpg"
      alt="Nature"
      className="aspect-video w-full object-cover object-center"
    />
  </div>

  <div className="columns-2 gap-4">
    <p className="mb-4 rounded-lg bg-slate-800 p-4">
      Column One
    </p>

    <p className="mb-4 rounded-lg bg-slate-800 p-4">
      Column Two
    </p>
  </div>
</div>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  This example combines responsive Grid, aspect ratio,
                                                  object fitting, object positioning, and columns.
                                        </p>
                              </div>

                              {/* Key Takeaway */}
                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Advanced layout utilities help you control images,
                                                  content columns, and visibility more precisely.
                                        </p>
                              </div>
                    </Section>
          );
}
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function AdvancedEffects() {
          const concepts = [
                    {
                              number: "01",
                              title: "Text Shadow",
                              description:
                                        "Adds a shadow effect to text.",
                              example: "text-shadow-md",
                              detail:
                                        "Useful for headings and text that need more visual depth.",
                    },
                    {
                              number: "02",
                              title: "Blend Mode",
                              description:
                                        "Controls how an element blends with the content behind it.",
                              example: "mix-blend-multiply",
                              detail:
                                        "Useful for creative overlays and image effects.",
                    },
                    {
                              number: "03",
                              title: "Blur",
                              description:
                                        "Applies a blur effect to an element.",
                              example: "blur-sm",
                              detail:
                                        "Useful for images, backgrounds, and visual effects.",
                    },
                    {
                              number: "04",
                              title: "Grayscale",
                              description:
                                        "Removes color from an element and creates a grayscale effect.",
                              example: "grayscale",
                              detail:
                                        "Useful for image galleries and hover effects.",
                    },
                    {
                              number: "05",
                              title: "Brightness",
                              description:
                                        "Controls the brightness of an element.",
                              example: "brightness-75",
                              detail:
                                        "Useful for adjusting images without editing the original file.",
                    },
                    {
                              number: "06",
                              title: "Contrast",
                              description:
                                        "Controls the contrast of an element.",
                              example: "contrast-125",
                              detail:
                                        "Useful for improving or changing the visual appearance of images.",
                    },
          ];

          return (
                    <Section
                              number="30"
                              label="Advanced Effects"
                              title="Advanced Effects & Filters"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides advanced effects and filters for
                                        creating visual changes without writing custom CSS.
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
                                                  {`<div className="group overflow-hidden rounded-xl">
  <img
    src="/images/photo.jpg"
    alt="Nature"
    className="w-full grayscale transition duration-300
    group-hover:grayscale-0 group-hover:brightness-110"
  />
</div>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  The image starts in grayscale and becomes colorful and
                                                  brighter when the user hovers over it.
                                        </p>
                              </div>

                              {/* Key Takeaway */}
                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Effects and filters help create visual depth, image effects,
                                                  and interactive designs with utility classes.
                                        </p>
                              </div>
                    </Section>
          );
}
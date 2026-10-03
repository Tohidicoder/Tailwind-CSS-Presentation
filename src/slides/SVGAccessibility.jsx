import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function SVGAccessibility() {
          const concepts = [
                    {
                              number: "01",
                              title: "SVG Fill",
                              description:
                                        "Controls the inside color of an SVG icon or shape.",
                              example: "fill-cyan-400",
                              detail:
                                        "Useful for icons, logos, and SVG illustrations.",
                    },
                    {
                              number: "02",
                              title: "SVG Stroke",
                              description:
                                        "Controls the outline color of an SVG.",
                              example: "stroke-cyan-400",
                              detail:
                                        "Useful for line icons and outlined illustrations.",
                    },
                    {
                              number: "03",
                              title: "Stroke Width",
                              description:
                                        "Controls the thickness of an SVG outline.",
                              example: "stroke-2",
                              detail:
                                        "Useful when you need thicker or thinner icon outlines.",
                    },
                    {
                              number: "04",
                              title: "Current Color",
                              description:
                                        "Allows an SVG to use the current text color.",
                              example: "fill-current",
                              detail:
                                        "Useful when an icon should automatically follow the text color.",
                    },
                    {
                              number: "05",
                              title: "Forced Colors",
                              description:
                                        "Helps control how elements behave in forced-color modes.",
                              example: "forced-color-adjust-none",
                              detail:
                                        "Useful for improving accessibility in special display modes.",
                    },
          ];

          return (
                    <Section
                              number="33"
                              label="SVG & Accessibility"
                              title="SVG & Accessibility Utilities"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS includes utilities for styling SVG icons and
                                        supporting accessibility features such as forced colors.
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
                                                  {`<button className="flex items-center gap-2 text-cyan-400">
  <svg
    className="size-6 fill-none stroke-current stroke-2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M12 5l7 7-7 7"
    />
  </svg>

  Learn More
</button>`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  The SVG uses the button's current text color, has no fill,
                                                  and uses a two-pixel stroke.
                                        </p>
                              </div>

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Tailwind makes it easy to style SVG icons while also
                                                  providing utilities that can support accessible interfaces.
                                        </p>
                              </div>
                    </Section>
          );
}
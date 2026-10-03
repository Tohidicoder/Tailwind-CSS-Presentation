import Section from "../components/Section";

export default function Conclusion() {
          const keyPoints = [
                    {
                              number: "01",
                              title: "Utility-First",
                              description:
                                        "Tailwind lets you build interfaces using small utility classes.",
                    },
                    {
                              number: "02",
                              title: "Responsive",
                              description:
                                        "Responsive utilities make it easier to create layouts for different screen sizes.",
                    },
                    {
                              number: "03",
                              title: "Customizable",
                              description:
                                        "You can customize colors, spacing, typography, themes, and components.",
                    },
                    {
                              number: "04",
                              title: "Reusable",
                              description:
                                        "Tailwind works well with reusable components in React and other frameworks.",
                    },
                    {
                              number: "05",
                              title: "Practical",
                              description:
                                        "It helps developers build modern interfaces quickly and consistently.",
                    },
          ];

          return (
                    <Section
                              number="37"
                              label="Conclusion"
                              title="Tailwind CSS — From Utilities to Real Projects"
                    >
                              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides a flexible way to build modern,
                                        responsive, and customizable user interfaces.
                              </p>

                              <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                                        {keyPoints.map((point) => (
                                                  <div
                                                            key={point.number}
                                                            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
                                                  >
                                                            <span className="text-sm font-bold text-cyan-400">
                                                                      {point.number}
                                                            </span>

                                                            <h3 className="mt-4 text-xl font-bold text-white">
                                                                      {point.title}
                                                            </h3>

                                                            <p className="mt-3 leading-7 text-slate-400">
                                                                      {point.description}
                                                            </p>
                                                  </div>
                                        ))}
                              </div>

                              <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center">
                                        <h3 className="text-2xl font-bold text-white">
                                                  The Main Idea
                                        </h3>

                                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                                                  Learn the utilities, understand how they work, and combine
                                                  them to build real interfaces.
                                        </p>
                              </div>

                              <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
                                        <h3 className="text-2xl font-bold text-white">
                                                  My Idea About Tailwind CSS
                                        </h3>

                                        <p className="mt-4 leading-8 text-slate-300">
                                                  My idea is that Tailwind CSS makes web development easier,
                                                  faster, and more flexible by using simple utility classes
                                                  to build modern and responsive interfaces.
                                        </p>
                              </div>

                              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center">
                                        <h3 className="text-3xl font-bold text-white">
                                                  Thank You! 🙌
                                        </h3>

                                        <p className="mt-3 text-lg text-slate-400">
                                                  Questions?
                                        </p>

                                        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-cyan-400">
                                                  Tailwind CSS Presentation
                                        </p>
                              </div>
                    </Section>
          );
}
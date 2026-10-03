
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function TailwindVsBootstrap() {
          const differences = [
                    {
                              number: "01",
                              title: "Styling Approach",
                              tailwind: "Utility-first",
                              bootstrap: "Component-focused",
                    },
                    {
                              number: "02",
                              title: "Ease of Use",
                              tailwind: "Can feel easy with utility classes and custom styling.",
                              bootstrap: "Can feel easy with ready-made components.",
                    },
                    {
                              number: "03",
                              title: "Colors",
                              tailwind: "Provides a large color palette with many shades.",
                              bootstrap:
                                        "Provides predefined theme colors and supports customization.",
                    },
                    {
                              number: "04",
                              title: "Customization",
                              tailwind: "Highly customizable for custom designs.",
                              bootstrap: "Customizable with CSS, Sass, and variables.",
                    },
                    {
                              number: "05",
                              title: "Components",
                              tailwind: "Build components using utility classes.",
                              bootstrap: "Provides many ready-made components.",
                    },
                    {
                              number: "06",
                              title: "Classes",
                              tailwind: "Many small utility classes.",
                              bootstrap: "Uses component and utility classes.",
                    },
          ];

          const similarities = [
                    "Both help developers build user interfaces faster.",
                    "Both support responsive web design.",
                    "Both provide reusable CSS classes.",
                    "Both can be customized.",
                    "Both can be used with React and other modern web technologies.",
          ];

          return (
                    <Section
                              number="21"
                              label="Tailwind vs Bootstrap"
                              title="Understanding the Differences"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS and Bootstrap are both tools for building
                                        modern user interfaces. They have some similarities,
                                        but their approach to styling is different.
                              </p>

                              {/* Differences */}

                              <div>
                                        <h3 className="mb-5 text-xl font-bold text-white">
                                                  Main Differences
                                        </h3>

                                        <div className="overflow-hidden rounded-2xl border border-white/10">
                                                  <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.05]">
                                                            <div className="p-4 font-bold text-cyan-300">
                                                                      Feature
                                                            </div>

                                                            <div className="p-4 font-bold text-cyan-300">
                                                                      Tailwind CSS
                                                            </div>

                                                            <div className="p-4 font-bold text-cyan-300">
                                                                      Bootstrap
                                                            </div>
                                                  </div>

                                                  {differences.map((item) => (
                                                            <div
                                                                      key={item.number}
                                                                      className="grid grid-cols-3 border-b border-white/10 last:border-b-0"
                                                            >
                                                                      <div className="p-4 text-sm font-semibold text-white">
                                                                                {item.title}
                                                                      </div>

                                                                      <div className="p-4 text-sm leading-6 text-slate-400">
                                                                                {item.tailwind}
                                                                      </div>

                                                                      <div className="p-4 text-sm leading-6 text-slate-400">
                                                                                {item.bootstrap}
                                                                      </div>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              {/* Color Example */}

                              <div className="mt-8">
                                        <h3 className="mb-4 text-xl font-bold text-white">
                                                  Color Example
                                        </h3>

                                        <CodeBlock>{`// Tailwind CSS
<button className="bg-blue-500 text-white px-4 py-2">
  Button
</button>

// Bootstrap
<button className="btn btn-primary">
  Button
</button>`}</CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  Tailwind provides many color names and different shades,
                                                  while Bootstrap provides predefined theme colors such as
                                                  primary, success, danger, warning, info, light, and dark.
                                        </p>
                              </div>

                              {/* Bootstrap Link Example */}

                              <div className="mt-8">
                                        <h3 className="mb-4 text-xl font-bold text-white">
                                                  Bootstrap Button and Link
                                        </h3>

                                        <CodeBlock>{`// Bootstrap Button
<button className="btn btn-primary">
  Get Started
</button>

// Bootstrap Link Style
<a href="#" className="btn btn-link">
  Learn More
</a>`}</CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  Bootstrap provides predefined button classes.
                                                  The btn-link class can style an element like a link,
                                                  and Bootstrap button classes can also be used on links.
                                        </p>
                              </div>

                              {/* Similarities */}

                              <div className="mt-8">
                                        <h3 className="mb-5 text-xl font-bold text-white">
                                                  Similarities
                                        </h3>

                                        <div className="grid gap-4 md:grid-cols-2">
                                                  {similarities.map((item, index) => (
                                                            <div
                                                                      key={item}
                                                                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                                                            >
                                                                      <span className="text-sm font-bold text-cyan-400">
                                                                                0{index + 1}
                                                                      </span>

                                                                      <p className="mt-3 leading-7 text-slate-400">
                                                                                {item}
                                                                      </p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              {/* Key Takeaway */}

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Tailwind CSS focuses on combining utility classes
                                                  to create custom designs, while Bootstrap provides
                                                  many ready-made components and predefined styles.
                                                  Both can be used to build responsive and modern interfaces.
                                        </p>
                              </div>
                    </Section>
          );
}

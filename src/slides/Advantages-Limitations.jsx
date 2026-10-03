
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function AdvantagesLimitations() {
          const advantages = [
                    {
                              number: "01",
                              title: "Fast Development",
                              description:
                                        "Utility classes help developers build interfaces quickly.",
                    },
                    {
                              number: "02",
                              title: "Customization",
                              description:
                                        "Developers can create unique designs without depending only on ready-made components.",
                    },
                    {
                              number: "03",
                              title: "Responsive Design",
                              description:
                                        "Responsive classes make it easier to create layouts for different screen sizes.",
                    },
                    {
                              number: "04",
                              title: "Consistent Design",
                              description:
                                        "Using a common set of utilities helps keep spacing, colors, and sizing consistent.",
                    },
          ];

          const limitations = [
                    {
                              number: "01",
                              title: "Long Class Names",
                              description:
                                        "Using many utility classes can sometimes make HTML or JSX look crowded.",
                    },
                    {
                              number: "02",
                              title: "Learning Curve",
                              description:
                                        "Beginners need time to learn Tailwind's utility classes and naming system.",
                    },
                    {
                              number: "03",
                              title: "Less Ready-made UI",
                              description:
                                        "Tailwind focuses on utilities, so developers often build components themselves.",
                    },
                    {
                              number: "04",
                              title: "Class Repetition",
                              description:
                                        "The same utility classes may be repeated when similar elements are created.",
                    },
          ];

          return (
                    <Section
                              number="22"
                              label="Advantages & Limitations"
                              title="Advantages and Limitations of Tailwind CSS"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides many useful features for modern web
                                        development, but like any tool, it also has some limitations.
                              </p>

                              {/* Advantages */}

                              <div>
                                        <h3 className="mb-5 text-xl font-bold text-white">
                                                  Advantages
                                        </h3>

                                        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
                                                  {advantages.map((item) => (
                                                            <div
                                                                      key={item.number}
                                                                      className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
                                                            >
                                                                      <span className="text-sm font-bold text-cyan-400">
                                                                                {item.number}
                                                                      </span>

                                                                      <h4 className="mt-4 text-xl font-bold text-white">
                                                                                {item.title}
                                                                      </h4>

                                                                      <p className="mt-3 flex-1 leading-7 text-slate-400">
                                                                                {item.description}
                                                                      </p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              {/* Limitations */}

                              <div className="mt-10">
                                        <h3 className="mb-5 text-xl font-bold text-white">
                                                  Limitations
                                        </h3>

                                        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
                                                  {limitations.map((item) => (
                                                            <div
                                                                      key={item.number}
                                                                      className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
                                                            >
                                                                      <span className="text-sm font-bold text-cyan-400">
                                                                                {item.number}
                                                                      </span>

                                                                      <h4 className="mt-4 text-xl font-bold text-white">
                                                                                {item.title}
                                                                      </h4>

                                                                      <p className="mt-3 flex-1 leading-7 text-slate-400">
                                                                                {item.description}
                                                                      </p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              {/* Example */}

                              <div className="mt-8">
                                        <h3 className="mb-4 text-xl font-bold text-white">
                                                  Example
                                        </h3>

                                        <CodeBlock>{`<button
  className="rounded-lg bg-blue-500 px-6 py-3
  font-semibold text-white hover:bg-blue-700"
>
  Get Started
</button>`}</CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  Tailwind allows us to create a complete button by combining
                                                  small utility classes for color, spacing, typography,
                                                  rounded corners, and hover effects.
                                        </p>
                              </div>

                              {/* Key Takeaway */}

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Tailwind CSS can make development fast and flexible,
                                                  especially for custom designs. However, developers
                                                  need to learn its utility classes and manage long
                                                  class names carefully.
                                        </p>
                              </div>
                    </Section>
          );
}

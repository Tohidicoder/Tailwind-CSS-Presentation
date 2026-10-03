import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Preflight() {
          const concepts = [
                    {
                              number: "01",
                              title: "What is Preflight?",
                              description:
                                        "Preflight is Tailwind CSS's base style reset for HTML elements.",
                              example: "Preflight",
                              detail:
                                        "It gives your project a more consistent starting point.",
                    },
                    {
                              number: "02",
                              title: "Consistent Defaults",
                              description:
                                        "It removes or normalizes some browser default styles.",
                              example: "Base Styles",
                              detail:
                                        "This helps elements behave more consistently across browsers.",
                    },
                    {
                              number: "03",
                              title: "Automatic",
                              description:
                                        "Preflight is included automatically when Tailwind CSS is imported.",
                              example: '@import "tailwindcss";',
                              detail:
                                        "You normally do not need to install or enable it separately.",
                    },
                    {
                              number: "04",
                              title: "Base Layer",
                              description:
                                        "Preflight is part of Tailwind's base styles.",
                              example: "@layer base",
                              detail:
                                        "Base styles are applied before your component and utility styles.",
                    },
                    {
                              number: "05",
                              title: "Customizable",
                              description:
                                        "You can add your own base styles when your project needs them.",
                              example: "@layer base",
                              detail:
                                        "This lets you customize global styles while using Tailwind.",
                    },
          ];

          return (
                    <Section
                              number="35"
                              label="Preflight"
                              title="Preflight — Tailwind's Base Styles"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Preflight is Tailwind CSS's base style reset. It provides a
                                        consistent starting point by normalizing common browser
                                        default styles.
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
                                                  {`@import "tailwindcss";

@layer base {
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  body {
    margin: 0;
  }
}`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  Tailwind provides the base styles automatically, and you can
                                                  add your own global styles when needed.
                                        </p>
                              </div>

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Preflight gives Tailwind projects a consistent base and
                                                  reduces differences between browser default styles.
                                        </p>
                              </div>
                    </Section>
          );
}
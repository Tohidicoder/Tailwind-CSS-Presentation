import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function AdvancedCustomization() {
          const concepts = [
                    {
                              number: "01",
                              title: "Theme Variables",
                              description:
                                        "Define reusable design values such as colors, fonts, and spacing.",
                              example: "--color-brand",
                              detail:
                                        "Useful when you want a consistent design system across a project.",
                    },
                    {
                              number: "02",
                              title: "Custom Utilities",
                              description:
                                        "Create your own utility classes for repeated styles.",
                              example: "@utility",
                              detail:
                                        "Useful when a project needs a custom utility that Tailwind does not provide.",
                    },
                    {
                              number: "03",
                              title: "Custom Components",
                              description:
                                        "Create reusable component styles for common UI elements.",
                              example: "@layer components",
                              detail:
                                        "Useful for buttons, cards, navigation, and other repeated UI patterns.",
                    },
                    {
                              number: "04",
                              title: "Base Styles",
                              description:
                                        "Customize the default styles used across the application.",
                              example: "@layer base",
                              detail:
                                        "Useful for setting global styles such as body or heading defaults.",
                    },
                    {
                              number: "05",
                              title: "Custom CSS",
                              description:
                                        "Add normal CSS when a utility class is not enough.",
                              example: "custom.css",
                              detail:
                                        "Tailwind can work together with regular CSS when more control is needed.",
                    },
          ];

          return (
                    <Section
                              number="34"
                              label="Advanced Customization"
                              title="Advanced Customization & Base Styles"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS can be customized to match a project's design
                                        system while still allowing regular CSS when necessary.
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

@theme {
  --color-brand: #06b6d4;
}

@utility text-brand {
  color: var(--color-brand);
}

@layer base {
  body {
    font-family: sans-serif;
  }
}`}
                                        </CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  This example shows how a project can define a custom theme
                                                  value, create a reusable utility, and add a global base style.
                                        </p>
                              </div>

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Tailwind is customizable. You can extend the theme, create
                                                  custom utilities, define base styles, and still use regular
                                                  CSS when needed.
                                        </p>
                              </div>
                    </Section>
          );
}
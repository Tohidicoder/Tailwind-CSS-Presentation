



import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function ComponentsUI() {
          // Array of Objects
          // Each object represents a common UI component.

          const components = [
                    {
                              number: "01",
                              title: "Buttons",
                              description:
                                        "Create buttons with different colors, sizes, states, and styles.",
                              example: "bg-blue-500  px-4  py-2  rounded-lg",
                    },
                    {
                              number: "02",
                              title: "Cards",
                              description:
                                        "Create content containers for information, products, or other UI elements.",
                              example: "rounded-xl  p-6  shadow-lg  bg-white",
                    },
                    {
                              number: "03",
                              title: "Navbar",
                              description:
                                        "Build navigation bars for menus, links, logos, and other navigation items.",
                              example: "flex  items-center  justify-between",
                    },
                    {
                              number: "04",
                              title: "Dropdown",
                              description:
                                        "Create menus that show additional options when the user interacts with them.",
                              example: "relative  absolute  hidden  group-hover:block",
                    },
                    {
                              number: "05",
                              title: "Search",
                              description:
                                        "Create search fields that allow users to find information or content.",
                              example: "border  rounded-lg  px-4  py-2",
                    },
                    {
                              number: "06",
                              title: "Modal",
                              description:
                                        "Create popup windows that display messages, forms, or additional information.",
                              example: "fixed  inset-0  flex  items-center  justify-center",
                    },
                    {
                              number: "07",
                              title: "Forms",
                              description:
                                        "Style inputs, labels, buttons, and other form elements.",
                              example: "border  rounded-lg  px-4  py-2",
                    },
          ];

          return (
                    <Section
                              number="20"
                              label="Components & UI"
                              title="Building Common UI Components"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides utility classes that can be combined
                                        to create common user interface components.
                              </p>

                              {/* Component Cards */}

                              <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
                                        {components.map((component) => (
                                                  <div
                                                            key={component.number}
                                                            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
                                                  >
                                                            <span className="text-sm font-bold text-cyan-400">
                                                                      {component.number}
                                                            </span>

                                                            <h3 className="mt-4 text-xl font-bold text-white">
                                                                      {component.title}
                                                            </h3>

                                                            <p className="mt-3 flex-1 leading-7 text-slate-400">
                                                                      {component.description}
                                                            </p>

                                                            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
                                                                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                                                                Tailwind Classes
                                                                      </p>

                                                                      <code className="break-words text-sm leading-7 text-cyan-200">
                                                                                {component.example}
                                                                      </code>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>

                              {/* Example */}

                              <div className="mt-8">
                                        <h3 className="mb-4 text-xl font-bold text-white">
                                                  Example
                                        </h3>

                                        <CodeBlock>{`<button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-700">
  Get Started
</button>`}</CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  In this example, utility classes are combined to create
                                                  a styled button with spacing, color, rounded corners,
                                                  font weight, and a hover effect.
                                        </p>
                              </div>

                              {/* Key Takeaway */}

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Tailwind CSS provides utility classes that can be combined
                                                  to build common UI components such as buttons, cards,
                                                  navigation bars, dropdowns, search fields, modals, and forms.
                                        </p>
                              </div>
                    </Section>
          );
}
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function Interactivity() {
          // Array of Objects
          // Each object contains information about an Interactivity concept.

          const concepts = [
                    {
                              number: "01",
                              title: "Cursor",
                              description:
                                        "Controls the appearance of the mouse cursor when it is over an element.",
                              example: "cursor-pointer  cursor-not-allowed",
                    },
                    {
                              number: "02",
                              title: "Pointer Events",
                              description:
                                        "Controls whether an element can receive mouse or pointer interactions.",
                              example: "pointer-events-none  pointer-events-auto",
                    },
                    {
                              number: "03",
                              title: "Resize",
                              description:
                                        "Controls whether an element can be resized by the user.",
                              example: "resize  resize-x  resize-y",
                    },
                    {
                              number: "04",
                              title: "User Select",
                              description:
                                        "Controls whether the user can select text or other content.",
                              example: "select-none  select-text  select-all",
                    },
          ];

          return (
                    <Section
                              number="15"
                              label="Interactivity"
                              title="Controlling User Interaction"
                    >
                              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
                                        Tailwind CSS provides utility classes that control how users
                                        interact with elements using the mouse, pointer, and text selection.
                              </p>

                              {/* Concept Cards */}

                              <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
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

                                                            <p className="mt-3 flex-1 leading-7 text-slate-400">
                                                                      {concept.description}
                                                            </p>

                                                            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-slate-950/70 p-4">
                                                                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                                                                Tailwind Classes
                                                                      </p>

                                                                      <code className="text-sm leading-7 text-cyan-200">
                                                                                {concept.example}
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

                                        <CodeBlock>{`<button
  className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3 text-white"
>
  Click Me
</button>

<p className="select-none">
  This text cannot be selected.
</p>`}</CodeBlock>

                                        <p className="mt-4 leading-7 text-slate-400">
                                                  In this example, cursor-pointer changes the mouse cursor
                                                  to indicate that the button is clickable, while select-none
                                                  prevents the user from selecting the text.
                                        </p>
                              </div>

                              {/* Key Takeaway */}

                              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-cyan-300">
                                                  Key Takeaway
                                        </h3>

                                        <p className="leading-7 text-slate-300">
                                                  Interactivity controls how users interact with elements.
                                                  Cursor changes the pointer, Pointer Events control interactions,
                                                  Resize allows resizing, and User Select controls text selection.
                                        </p>
                              </div>
                    </Section>
          );
}
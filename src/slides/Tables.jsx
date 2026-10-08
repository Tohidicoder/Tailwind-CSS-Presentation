import { useState } from "react";
import Section from "../components/Section";

export default function Tables() {
  const [activeDemo, setActiveDemo] = useState("collapse");

  const concepts = [
    {
      id: "collapse",
      number: "01",
      title: "Border Collapse",
      shortTitle: "Connect Borders",
      utility: "border-collapse",
      description:
        "Controls whether the borders of table cells connect together.",
      why: "Use it when you want one clean, connected border around the table.",
    },
    {
      id: "spacing",
      number: "02",
      title: "Border Spacing",
      shortTitle: "Space Between Cells",
      utility: "border-spacing-2",
      description: "Controls the space between individual table cells.",
      why: "Use it when you want visible space between cells.",
    },
    {
      id: "layout",
      number: "03",
      title: "Table Layout",
      shortTitle: "Control Columns",
      utility: "table-fixed",
      description:
        "Controls how the browser calculates the width of table columns.",
      why: "Use it when you want predictable and consistent column widths.",
    },
    {
      id: "caption",
      number: "04",
      title: "Caption Side",
      shortTitle: "Move Table Title",
      utility: "caption-top",
      description: "Controls where the table caption appears.",
      why: "Use it when you want the table title above or below the table.",
    },
  ];

  const activeConcept = concepts.find((concept) => concept.id === activeDemo);

  const students = [
    {
      name: "Faeza",
      course: "Web Development",
      level: "Beginner",
    },
    {
      name: "Sara",
      course: "UI Design",
      level: "Intermediate",
    },
    {
      name: "Ahmad",
      course: "JavaScript",
      level: "Beginner",
    },
  ];

  return (
    <Section number="35" label="Tables" title="Table Utilities">
      {/* 1. What Is This Section? */}

      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        Tailwind provides utilities that help us control the structure and
        appearance of HTML tables.
      </p>

      {/* 2. What We Learn */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-cyan-300">
              What We Learn in This Section
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              We focus on 4 important table concepts:
            </p>
          </div>

          <div className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-cyan-300">
            4 Main Concepts
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <span className="text-xs font-bold text-cyan-400">
                {concept.number}
              </span>

              <h4 className="mt-2 font-bold text-white">
                {concept.shortTitle}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {concept.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Real Example */}

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-lg font-bold text-white">Real Example</h3>

        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          Imagine a student dashboard. We can use a table to show student names,
          courses, and levels. These four utilities help us control how that
          table looks.
        </p>
      </div>

      {/* 4. Choose a Concept */}

      <div className="mt-10">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-white">Choose a Concept</h3>

          <p className="mt-2 text-sm text-slate-500">
            Click a concept to see the result in the live example.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setActiveDemo(concept.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                activeDemo === concept.id
                  ? "border-cyan-400/50 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-cyan-400">
                  {concept.number}
                </span>

                {activeDemo === concept.id && (
                  <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs font-semibold text-cyan-300">
                    Active
                  </span>
                )}
              </div>

              <h4 className="mt-4 text-lg font-bold text-white">
                {concept.title}
              </h4>

              <code className="mt-3 inline-block rounded-lg bg-slate-950 px-2 py-1 text-xs text-cyan-300">
                {concept.utility}
              </code>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {concept.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Live Demo */}

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-bold text-white">Live Demo</h3>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-cyan-400">
                {activeConcept.number}
              </span>

              <span className="rounded-lg bg-white/[0.06] px-3 py-1 text-xs text-slate-400">
                {activeConcept.title}
              </span>
            </div>

            <h4 className="mt-3 text-2xl font-bold text-white">
              {activeConcept.shortTitle}
            </h4>

            <p className="mt-2 max-w-2xl leading-7 text-slate-400">
              {activeConcept.description}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              <span className="font-semibold text-slate-300">Why use it?</span>{" "}
              {activeConcept.why}
            </p>
          </div>

          {/* Border Collapse */}

          {activeDemo === "collapse" && (
            <div>
              <p className="mb-4 text-sm text-slate-400">
                Compare separated borders with connected borders.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.04] p-5">
                  <p className="mb-4 text-sm font-semibold text-red-300">
                    Without border-collapse
                  </p>

                  <table className="w-full border-separate text-left">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 p-3">Name</th>

                        <th className="border border-slate-600 p-3">Course</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-slate-600 p-3">Faeza</td>

                        <td className="border border-slate-600 p-3">React</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-5">
                  <p className="mb-4 text-sm font-semibold text-cyan-300">
                    With border-collapse
                  </p>

                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 p-3">Name</th>

                        <th className="border border-slate-600 p-3">Course</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-slate-600 p-3">Faeza</td>

                        <td className="border border-slate-600 p-3">React</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <code className="mt-5 block rounded-xl bg-slate-900 p-4 text-sm text-cyan-300">
                className="border-collapse"
              </code>
            </div>
          )}

          {/* Border Spacing */}

          {activeDemo === "spacing" && (
            <div>
              <p className="mb-4 text-sm text-slate-400">
                Border spacing creates visible space between cells.
              </p>

              <div className="overflow-x-auto rounded-2xl bg-white/[0.04] p-5">
                <table className="w-full border-separate border-spacing-2 text-left">
                  <thead>
                    <tr>
                      <th className="rounded-lg bg-slate-800 p-3">Product</th>

                      <th className="rounded-lg bg-slate-800 p-3">Price</th>

                      <th className="rounded-lg bg-slate-800 p-3">Stock</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="rounded-lg bg-slate-900 p-3">Laptop</td>

                      <td className="rounded-lg bg-slate-900 p-3">$900</td>

                      <td className="rounded-lg bg-slate-900 p-3">12</td>
                    </tr>

                    <tr>
                      <td className="rounded-lg bg-slate-900 p-3">Keyboard</td>

                      <td className="rounded-lg bg-slate-900 p-3">$50</td>

                      <td className="rounded-lg bg-slate-900 p-3">30</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <code className="mt-5 block rounded-xl bg-slate-900 p-4 text-sm text-cyan-300">
                className="border-separate border-spacing-2"
              </code>
            </div>
          )}

          {/* Table Layout */}

          {activeDemo === "layout" && (
            <div>
              <p className="mb-4 text-sm text-slate-400">
                Table-fixed gives the columns a predictable layout.
              </p>

              <div className="overflow-x-auto rounded-2xl bg-white/[0.04] p-5">
                <table className="w-full table-fixed text-left">
                  <thead>
                    <tr>
                      <th className="w-1/3 border border-slate-700 bg-slate-800 p-3">
                        Student
                      </th>

                      <th className="w-1/3 border border-slate-700 bg-slate-800 p-3">
                        Course
                      </th>

                      <th className="w-1/3 border border-slate-700 bg-slate-800 p-3">
                        Level
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.map((student) => (
                      <tr key={student.name}>
                        <td className="border border-slate-700 p-3">
                          {student.name}
                        </td>

                        <td className="border border-slate-700 p-3">
                          {student.course}
                        </td>

                        <td className="border border-slate-700 p-3">
                          {student.level}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <code className="mt-5 block rounded-xl bg-slate-900 p-4 text-sm text-cyan-300">
                className="table-fixed"
              </code>
            </div>
          )}

          {/* Caption Side */}

          {activeDemo === "caption" && (
            <div>
              <p className="mb-4 text-sm text-slate-400">
                The caption gives the table a clear title.
              </p>

              <div className="rounded-2xl bg-white/[0.04] p-5">
                <table className="w-full border-collapse text-left">
                  <caption className="caption-top mb-4 text-left text-lg font-bold text-cyan-300">
                    Student Progress
                  </caption>

                  <thead>
                    <tr>
                      <th className="border border-slate-700 bg-slate-800 p-3">
                        Name
                      </th>

                      <th className="border border-slate-700 bg-slate-800 p-3">
                        Course
                      </th>

                      <th className="border border-slate-700 bg-slate-800 p-3">
                        Level
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-3">Faeza</td>

                      <td className="border border-slate-700 p-3">
                        Web Development
                      </td>

                      <td className="border border-slate-700 p-3">Beginner</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <code className="mt-5 block rounded-xl bg-slate-900 p-4 text-sm text-cyan-300">
                className="caption-top"
              </code>
            </div>
          )}
        </div>
      </div>

      {/* 6. Easy Rule */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-lg font-bold text-white">Easy Rule to Remember</h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-cyan-300">border-collapse</span>{" "}
            → connect borders.
          </p>

          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-cyan-300">border-spacing</span>{" "}
            → add space between cells.
          </p>

          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-cyan-300">table-fixed</span> →
            control column layout.
          </p>

          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-cyan-300">caption-top</span> →
            place the table title on top.
          </p>
        </div>
      </div>

      {/* 7. Key Takeaway */}

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-lg font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          For this section, remember these 4 ideas:{" "}
          <span className="font-semibold text-white">
            borders, spacing, column layout, and captions.
          </span>{" "}
          These are the main Tailwind table utilities you need to understand
          before moving to more advanced table styling.
        </p>
      </div>
    </Section>
  );
}

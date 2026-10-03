
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function GettingStarted() {
  // Array of Objects:
  // We store information about each step inside an object.
  // The objects are organized in an array.

  const steps = [
    {
      number: "01",
      title: "Installation",
      description:
        "Install Tailwind CSS in your project using npm and configure it with Vite.",
    },
    {
      number: "02",
      title: "Editor Setup",
      description:
        "Use a code editor such as Visual Studio Code and install the Tailwind CSS IntelliSense extension.",
    },
    {
      number: "03",
      title: "Compatibility",
      description:
        "Tailwind CSS works with modern web development tools and frameworks such as React, Vite, and other supported environments.",
    },
  ];

  // Array of Strings:
  // We store the names of development tools in a simple array.

  const tools = ["VS Code", "Node.js", "npm", "Vite", "React"];

  return (
    <Section
      number="05"
      label="Getting Started"
      title="How can we start using Tailwind CSS?"
    >
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Before using Tailwind CSS, we need to install it, prepare our
        development environment, and configure it for our project.
      </p>

      {/* Three equal cards using CSS Grid */}

      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="text-sm font-bold text-cyan-400">
              {step.number}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {step.title}
            </h3>

            <p className="mt-3 flex-1 leading-7 text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Installation Commands */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="mb-4 text-xl font-bold text-white">
          Installation Commands
        </h3>

        <p className="mb-5 leading-7 text-slate-400">
          Use the following npm commands to create a Vite project
          and install Tailwind CSS.
        </p>

        <CodeBlock>{`npm create vite@latest my-project
cd my-project
npm install
npm install tailwindcss @tailwindcss/vite`}</CodeBlock>

        <h4 className="mb-4 mt-6 text-lg font-semibold text-cyan-300">
          Vite Configuration
        </h4>

        <CodeBlock>{`import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});`}</CodeBlock>
      </div>

      {/* Development Tools */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="mb-3 text-xl font-bold text-white">
          Development Tools
        </h3>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-cyan-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

// import Section from "../components/Section";
// import CodeBlock from "../components/CodeBlock";

// export default function GettingStarted() {
//   // Array of Objects:
//   // We store information about each step inside an object.
//   // The objects are organized in an array.

//   const steps = [
//     {
//       number: "01",
//       title: "Installation",
//       description:
//         "Install Tailwind CSS in your project using npm and configure it with Vite.",
//     },
//     {
//       number: "02",
//       title: "Editor Setup",
//       description:
//         "Use a code editor such as Visual Studio Code and install the Tailwind CSS IntelliSense extension.",
//     },
//     {
//       number: "03",
//       title: "Compatibility",
//       description:
//         "Tailwind CSS works with modern web development tools and frameworks such as React, Vite, and other supported environments.",
//     },
//   ];

//   // Array of Strings:
//   // We store the names of development tools in a simple array.

//   const tools = ["VS Code", "Node.js", "npm", "Vite", "React"];

//   return (
//     <Section
//       number="05"
//       label="Getting Started"
//       title="How can we start using Tailwind CSS?"
//     >
//       <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
//         Before using Tailwind CSS, we need to install it, prepare our
//         development environment, and configure it for our project.
//       </p>

//       {/* Three equal cards using CSS Grid */}

//       <div className="grid items-stretch gap-5 md:grid-cols-3">
//         {steps.map((step) => (
//           <div
//             key={step.number}
//             className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6"
//           >
//             <span className="text-sm font-bold text-cyan-400">
//               {step.number}
//             </span>

//             <h3 className="mt-4 text-xl font-bold text-white">
//               {step.title}
//             </h3>

//             <p className="mt-3 flex-1 leading-7 text-slate-400">
//               {step.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Installation Commands */}

//       <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
//         <h3 className="mb-4 text-xl font-bold text-white">
//           Installation Commands
//         </h3>

//         <p className="mb-5 leading-7 text-slate-400">
//           Use the following npm commands to create a Vite project
//           and install Tailwind CSS.
//         </p>

//         <CodeBlock>{`npm create vite@latest my-project
// cd my-project
// npm install
// npm install tailwindcss @tailwindcss/vite`}</CodeBlock>

//         <h4 className="mb-4 mt-6 text-lg font-semibold text-cyan-300">
//           Vite Configuration
//         </h4>

//         <CodeBlock>{`import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [tailwindcss()],
// });`}</CodeBlock>
//       </div>

//       {/* Development Tools */}

//       <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
//         <h3 className="mb-3 text-xl font-bold text-white">
//           Development Tools
//         </h3>

//         <div className="flex flex-wrap gap-3">
//           {tools.map((tool) => (
//             <span
//               key={tool}
//               className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-cyan-300"
//             >
//               {tool}
//             </span>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }


import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

export default function GettingStarted() {
  /*
    React Basic Concept:
    Array of Objects + map()

    We store our steps inside an array.
    Each step is an object with its own information.
    Then .map() displays each step as a card.
  */

  const steps = [
    {
      number: "01",
      title: "Create a Project",
      description: "Create a new Vite project for our React application.",
    },
    {
      number: "02",
      title: "Install Tailwind",
      description: "Install Tailwind CSS and its Vite plugin using npm.",
    },
    {
      number: "03",
      title: "Start Coding",
      description: "Run the project and start building the interface with Tailwind classes.",
    },
  ];

  /*
    React Basic Concept:
    Simple Array

    We use a simple array to store the names
    of the tools used in our development environment.
  */

  const tools = [
    "Node.js",
    "npm",
    "Vite",
    "React",
    "VS Code",
  ];

  return (
    <Section
      number="05"
      label="Getting Started"
      title="How Do We Start Using Tailwind CSS?"
    >
      <div className="max-w-5xl space-y-7">

        {/* Introduction */}

        <div>
          <p className="text-xl font-bold leading-8 text-white">
            Start with a React project, install Tailwind CSS, and run the app.
          </p>

          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-400">
            In this example, we use React + Vite + Tailwind CSS.
          </p>
        </div>


        {/* Step 1 — 2 — 3 */}

        <div>
          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Getting Started
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Three Simple Steps
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {/*
              .map()

              React uses map() to turn each object
              in the array into a UI card.
            */}

            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {step.number}
                </span>

                <h4 className="mt-3 text-lg font-black text-white">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>


        {/* Real Project Example */}

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Real Project Example
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Create a Tailwind React Project
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              These are the commands we would actually use in the terminal.
            </p>
          </div>


          {/* Terminal */}

          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              Terminal
            </p>

            <CodeBlock>{`npm create vite@latest my-project
cd my-project
npm install
npm install tailwindcss @tailwindcss/vite`}</CodeBlock>
          </div>


          {/* What each command does */}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            <div className="rounded-xl bg-black/20 p-4">
              <p className="font-mono text-sm font-bold text-cyan-300">
                npm create vite
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Creates a new Vite project.
              </p>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <p className="font-mono text-sm font-bold text-cyan-300">
                cd my-project
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Moves into the project folder.
              </p>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <p className="font-mono text-sm font-bold text-cyan-300">
                npm install
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Installs the project dependencies.
              </p>
            </div>

            <div className="rounded-xl bg-black/20 p-4">
              <p className="font-mono text-sm font-bold text-cyan-300">
                npm install tailwindcss
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Adds Tailwind CSS to the project.
              </p>
            </div>

          </div>

        </div>


        {/* Vite Configuration */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Configuration
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            Connect Tailwind with Vite
          </h3>

          <p className="mt-2 mb-4 text-sm leading-6 text-slate-400">
            Add the Tailwind Vite plugin to your Vite configuration.
          </p>

          <CodeBlock>{`import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});`}</CodeBlock>

        </div>


        {/* Development Tools */}

        <div>

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Development Environment
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            Tools We Use
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">

            {/*
              Simple Array + map()

              We map over the tools array
              to create each tool badge.
            */}

            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300"
              >
                {tool}
              </span>
            ))}

          </div>

        </div>


        {/* Key Point */}

        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
            Remember
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            Create → Install → Configure → Code
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Create the project, install Tailwind, configure Vite, and start
            building your interface.
          </p>

        </div>

      </div>
    </Section>
  );
}
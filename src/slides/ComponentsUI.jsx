import { useState } from "react";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";

const components = [
  {
    id: "button",
    number: "01",
    title: "Button",
    meaning: "A button lets users perform an action.",
    realUse: "Add to Cart, Submit, Buy Now",
    code: "bg-cyan-500 px-5 py-3 rounded-lg text-white",
    memory: "Button = Action",
  },
  {
    id: "card",
    number: "02",
    title: "Card",
    meaning: "A card groups related information together.",
    realUse: "Product Card, Course Card, Profile Card",
    code: "rounded-2xl bg-white p-5 shadow-lg",
    memory: "Card = Group Information",
  },
  {
    id: "navbar",
    number: "03",
    title: "Navbar",
    meaning: "A navbar helps users navigate between pages.",
    realUse: "Home, About, Services, Contact",
    code: "flex items-center justify-between px-6 py-4",
    memory: "Navbar = Navigation",
  },
  {
    id: "dropdown",
    number: "04",
    title: "Dropdown",
    meaning: "A dropdown shows additional options when needed.",
    realUse: "Profile Menu, Categories, Settings",
    code: "rounded-lg border bg-white p-3 shadow-lg",
    memory: "Dropdown = More Options",
  },
  {
    id: "search",
    number: "05",
    title: "Search",
    meaning: "A search field helps users find information.",
    realUse: "Search Products, Courses, Articles",
    code: "rounded-lg border px-4 py-3 outline-none",
    memory: "Search = Find",
  },
  {
    id: "modal",
    number: "06",
    title: "Modal",
    meaning: "A modal displays important content above the page.",
    realUse: "Login, Confirmation, Details",
    code: "rounded-2xl bg-white p-6 shadow-2xl",
    memory: "Modal = Focus",
  },
  {
    id: "form",
    number: "07",
    title: "Form",
    meaning: "A form collects information from users.",
    realUse: "Login, Signup, Contact Form",
    code: "space-y-4 rounded-2xl bg-white p-6 shadow-lg",
    memory: "Form = Collect Data",
  },
];

export default function ComponentsUI() {
  const [selectedId, setSelectedId] = useState("button");

  const selected =
    components.find((item) => item.id === selectedId) || components[0];

  const renderLiveExample = () => {
    switch (selected.id) {
      case "button":
        return (
          <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-cyan-400">
            Add to Cart
          </button>
        );

      case "card":
        return (
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 text-slate-900 shadow-xl">
            <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-slate-200 text-4xl">
              💻
            </div>

            <h3 className="text-xl font-bold">Web Development Course</h3>

            <p className="mt-2 text-sm text-slate-500">
              Learn HTML, CSS, JavaScript and React.
            </p>

            <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              View Course
            </button>
          </div>
        );

      case "navbar":
        return (
          <div className="w-full max-w-xl rounded-xl border border-slate-700 bg-[#100817] px-5 py-4 text-white shadow-xl">
            <div className="flex items-center justify-between gap-6">
              <div className="text-lg font-bold">
                <span className="text-cyan-400">My</span>Site
              </div>

              <div className="hidden gap-5 text-sm sm:flex">
                <span className="text-cyan-400">Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Contact</span>
              </div>

              <button className="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950">
                Login
              </button>
            </div>
          </div>
        );

      case "dropdown":
        return (
          <div className="relative w-64 rounded-xl bg-white p-4 text-slate-900 shadow-xl">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="font-semibold">My Account</span>
              <span className="text-slate-400">⌄</span>
            </div>

            <div className="space-y-1 pt-3 text-sm">
              <div className="rounded-lg px-3 py-2 hover:bg-slate-100">
                Profile
              </div>

              <div className="rounded-lg px-3 py-2 hover:bg-slate-100">
                Settings
              </div>

              <div className="rounded-lg px-3 py-2 text-red-500 hover:bg-red-50">
                Logout
              </div>
            </div>
          </div>
        );

      case "search":
        return (
          <div className="flex w-full max-w-md items-center gap-2 rounded-xl bg-white p-2 shadow-xl">
            <span className="px-2 text-xl text-slate-400">⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-transparent px-2 py-2 text-slate-900 outline-none"
            />

            <button className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white">
              Search
            </button>
          </div>
        );

      case "modal":
        return (
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Delete Account?</h3>

              <span className="cursor-pointer text-xl text-slate-400">×</span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              This action cannot be undone. Are you sure you want to continue?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">
                Cancel
              </button>

              <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                Delete
              </button>
            </div>
          </div>
        );

      case "form":
        return (
          <form className="w-full max-w-md space-y-4 rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
            <div>
              <label className="mb-2 block text-sm font-semibold">Email</label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white"
            >
              Sign In
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <Section
      number="20"
      label="Components & UI"
      title="Build Real UI with Tailwind"
    >
      {/* Header */}
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Tailwind CSS
        </p>

        <p className="text-lg leading-8 text-slate-300">
          Build real interface parts by combining Tailwind utility classes.
        </p>
      </div>

      {/* Main Idea */}
      <div className="mb-10 rounded-2xl border border-violet-500/15 bg-[#11091a]/85 p-6 shadow-2xl shadow-black/25 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white">Main Idea</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-400/15 bg-[#0d111b]/90 p-5">
            <p className="text-sm font-medium text-cyan-400">UI</p>

            <h3 className="mt-2 text-lg font-bold text-white">
              What users see
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Buttons, cards, menus, forms and everything users interact with.
            </p>
          </div>

          <div className="rounded-xl border border-violet-400/15 bg-[#120b1d]/90 p-5">
            <p className="text-sm font-medium text-violet-400">Component</p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Reusable UI part
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              A specific piece of the interface that can be reused.
            </p>
          </div>

          <div className="rounded-xl border border-fuchsia-400/15 bg-[#180a19]/90 p-5">
            <p className="text-sm font-medium text-fuchsia-400">Tailwind</p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Build the component
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Utility classes are combined to create the final UI.
            </p>
          </div>
        </div>
      </div>

      {/* Component Selector */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Choose a Component
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {components.map((component) => {
            const isSelected = selected.id === component.id;

            return (
              <button
                key={component.id}
                onClick={() => setSelectedId(component.id)}
                className={`rounded-xl border p-4 text-left shadow-lg transition ${
                  isSelected
                    ? "border-cyan-400/50 bg-[#08232b]/90 shadow-cyan-500/10"
                    : "border-violet-500/10 bg-[#11091a]/80 hover:border-violet-400/30 hover:bg-[#180c24]/90"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-bold ${
                      isSelected
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "border-violet-400/10 bg-[#09050e]/70 text-violet-300"
                    }`}
                  >
                    {component.number}
                  </span>

                  <span className="font-semibold text-slate-100">
                    {component.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Component */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-violet-500/15 bg-[#11091a]/85 p-6 shadow-2xl shadow-black/25 backdrop-blur-sm">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Selected Component
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {selected.title}
            </h2>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-400">Meaning</p>

              <p className="mt-1 text-lg text-white">{selected.meaning}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-400">
                Real Example
              </p>

              <p className="mt-1 text-lg text-white">{selected.realUse}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-400">
                Tailwind Classes
              </p>

              <div className="mt-2 overflow-x-auto rounded-xl border border-violet-500/10 bg-[#09050e]/95 p-4">
                <code className="text-sm text-cyan-300">{selected.code}</code>
              </div>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4">
              <p className="text-sm font-semibold text-cyan-400">
                What to remember
              </p>

              <p className="mt-1 font-medium text-white">{selected.memory}</p>
            </div>
          </div>
        </div>

        {/* Live UI */}
        <div className="rounded-2xl border border-violet-500/15 bg-[#11091a]/85 p-6 shadow-2xl shadow-black/25 backdrop-blur-sm">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Live UI
            </p>

            <p className="mt-1 text-sm text-slate-400">
              This is what the component can look like in a real website.
            </p>
          </div>

          <div className="flex min-h-[430px] items-center justify-center rounded-2xl border border-violet-500/10 bg-[#09050e]/80 p-6">
            <div className="rounded-2xl ring-2 ring-cyan-400/60 ring-offset-4 ring-offset-transparent">
              {renderLiveExample()}
            </div>
          </div>
        </div>
      </div>

      {/* Real Website Flow */}
      <div className="mt-10 rounded-2xl border border-violet-500/15 bg-[#11091a]/85 p-6 shadow-2xl shadow-black/25 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white">Real Website Example</h2>

        <p className="mt-2 text-slate-400">
          An online store can combine multiple components into one UI.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {["Navbar", "Search", "Product Card", "Button"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="rounded-xl border border-violet-500/10 bg-[#09050e]/80 px-5 py-3 font-medium text-slate-100 shadow-lg">
                {item}
              </div>

              {index < 3 && <span className="text-xl text-cyan-400">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Final Memory */}
      <div className="mt-10 rounded-2xl border border-cyan-400/25 bg-[#0d101c]/80 p-6 text-center shadow-2xl shadow-cyan-500/5">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Final Memory
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          UI is what users see.
        </h2>

        <p className="mt-2 text-lg text-slate-300">
          Components are the reusable parts we build it with.
        </p>

        <p className="mt-3 text-slate-400">
          Tailwind utilities help us style those components.
        </p>
      </div>
    </Section>
  );
}

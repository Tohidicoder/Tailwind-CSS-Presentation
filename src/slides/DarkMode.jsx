


import { useState } from "react";
import Section from "../components/Section";

export default function DarkMode() {
  const concepts = [
    {
      id: "variant",
      number: "01",
      title: "Dark Variant",
      question: "How do we create a dark style?",
      description:
        "The dark: prefix tells Tailwind which style to use when dark mode is active.",
      example: "dark:bg-slate-900",
      memory: "dark: = Dark Style",
    },
    {
      id: "background",
      number: "02",
      title: "Background",
      question: "How does the background change?",
      description:
        "The background can switch from a light color to a dark color when the theme changes.",
      example: "bg-white dark:bg-slate-900",
      memory: "Background = Theme",
    },
    {
      id: "text",
      number: "03",
      title: "Text",
      question: "How does text stay readable?",
      description:
        "Text color changes between light and dark themes so the content remains readable.",
      example: "text-slate-900 dark:text-white",
      memory: "Text = Readability",
    },
    {
      id: "border",
      number: "04",
      title: "Border",
      question: "How do borders adapt?",
      description:
        "Border colors can change to create the correct contrast for each theme.",
      example: "border-slate-200 dark:border-slate-700",
      memory: "Border = Separation",
    },
    {
      id: "ui",
      number: "05",
      title: "UI Components",
      question: "Can complete components change?",
      description:
        "Cards, inputs, buttons, navigation, and other UI components can all have dark styles.",
      example: "bg-white dark:bg-slate-800",
      memory: "UI = Whole Interface",
    },
  ];

  const [selectedId, setSelectedId] = useState("variant");
  const [isDark, setIsDark] = useState(false);

  const selected =
    concepts.find((concept) => concept.id === selectedId) || concepts[0];

  return (<Section
    number="18"
    label="Dark Mode"
    title="How Does a Website Switch Between Light and Dark?"
  >
    {/* Main Idea */} <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"> <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
      Main Idea </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Dark Mode = A Different Theme
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Dark Mode changes the appearance of the interface so that
        backgrounds, text, borders, cards, inputs, and other UI elements
        work well in a darker theme.
      </p>

      <div className="mt-5 rounded-xl bg-slate-950/60 p-4">
        <p className="font-bold text-white">
          Important:
        </p>

        <p className="mt-2 text-sm leading-7 text-slate-400">
          The moon or sun button is only the control. Dark Mode itself
          is the complete visual theme that changes across the interface.
        </p>
      </div>
    </div>

    {/* Concepts */}
    <div className="mb-8">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Core Concepts
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          Click a concept to see its effect
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {concepts.map((concept) => {
          const active = selectedId === concept.id;

          return (
            <button
              key={concept.id}
              onClick={() => setSelectedId(concept.id)}
              className={`rounded-xl border p-5 text-left transition-all duration-300 ${active
                ? "border-cyan-400/60 bg-cyan-400/10 shadow-lg shadow-cyan-400/10"
                : "border-white/10 bg-white/[0.04] hover:border-cyan-400/30 hover:bg-white/[0.07]"
                }`}
            >
              <span className="text-xs font-bold text-cyan-400">
                {concept.number}
              </span>

              <h4 className="mt-3 text-lg font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                {concept.memory}
              </p>

              {active && (
                <p className="mt-3 text-xs font-bold text-cyan-400">
                  ✓ Showing below
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>

    {/* Selected Concept */}
    <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Selected Concept
      </p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {selected.title}
          </h3>

          <p className="mt-1 text-cyan-300">
            {selected.question}
          </p>
        </div>

        <code className="rounded-lg bg-slate-950 px-4 py-2 text-sm text-cyan-200">
          {selected.example}
        </code>
      </div>

      <p className="mt-4 leading-7 text-slate-400">
        {selected.description}
      </p>
    </div>

    {/* Live Result */}
    <div className="mb-8">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Live Result
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          {selected.title} in a Real UI
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Select a concept above, then switch the theme to see exactly
          what that concept changes.
        </p>
      </div>

      {/* Theme Toggle */}
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-500 ${isDark
          ? "border-slate-700 bg-slate-950"
          : "border-slate-200 bg-slate-100"
          }`}
      >
        <div
          className={`flex items-center justify-between border-b px-5 py-4 transition-all duration-500 ${isDark
            ? "border-slate-800 bg-slate-900"
            : "border-slate-200 bg-white"
            }`}
        >
          <div>
            <p
              className={`font-bold ${isDark ? "text-white" : "text-slate-900"
                }`}
            >
              Live Website
            </p>

            <p
              className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"
                }`}
            >
              {isDark ? "Dark Mode" : "Light Mode"}
            </p>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${isDark
              ? "bg-white text-slate-900 hover:bg-slate-200"
              : "bg-slate-900 text-white hover:bg-slate-700"
              }`}
          >
            <span>{isDark ? "☀️" : "🌙"}</span>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Website Preview */}
        <div className="p-5 sm:p-8">
          <div
            className={`mx-auto max-w-3xl overflow-hidden rounded-2xl border transition-all duration-500 ${isDark
              ? "border-slate-700 bg-slate-900"
              : "border-slate-200 bg-white"
              }`}
          >
            {/* Website Header */}
            <div
              className={`flex items-center justify-between border-b px-5 py-4 transition-all duration-500 ${isDark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-white"
                } ${selectedId === "variant"
                  ? "ring-2 ring-cyan-400 ring-inset"
                  : ""
                }`}
            >
              <div>
                <p
                  className={`font-bold ${isDark ? "text-white" : "text-slate-900"
                    }`}
                >
                  My Website
                </p>

                <p
                  className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"
                    }`}
                >
                  Light & Dark Theme
                </p>
              </div>

              <div className="flex gap-3 text-xs font-semibold">
                <span
                  className={
                    isDark ? "text-slate-400" : "text-slate-600"
                  }
                >
                  Home
                </span>

                <span
                  className={
                    isDark ? "text-slate-400" : "text-slate-600"
                  }
                >
                  Projects
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-5 sm:p-8">
              {/* Background Demo */}
              <div
                className={`rounded-2xl p-6 transition-all duration-500 ${isDark
                  ? "bg-slate-800"
                  : "bg-slate-100"
                  } ${selectedId === "background"
                    ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent"
                    : ""
                  }`}
              >
                {/* Text Demo */}
                <div
                  className={
                    selectedId === "text"
                      ? "rounded-xl ring-2 ring-cyan-400 ring-offset-4"
                      : ""
                  }
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-cyan-400" : "text-blue-600"
                      }`}
                  >
                    Dashboard
                  </p>

                  <h4
                    className={`mt-2 text-3xl font-bold transition-colors ${isDark ? "text-white" : "text-slate-900"
                      }`}
                  >
                    Welcome back!
                  </h4>

                  <p
                    className={`mt-3 max-w-xl leading-7 transition-colors ${isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                  >
                    This same website supports both light and dark themes.
                  </p>
                </div>

                {/* UI Components */}
                <div
                  className={`mt-6 grid gap-4 sm:grid-cols-3 ${selectedId === "ui"
                    ? "rounded-2xl ring-2 ring-cyan-400 ring-offset-4"
                    : ""
                    }`}
                >
                  <div
                    className={`rounded-xl border p-4 transition-all duration-500 ${isDark
                      ? "border-slate-700 bg-slate-900"
                      : "border-slate-200 bg-white"
                      }`}
                  >
                    <p
                      className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                    >
                      Projects
                    </p>

                    <p
                      className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"
                        }`}
                    >
                      24
                    </p>
                  </div>

                  <div
                    className={`rounded-xl border p-4 transition-all duration-500 ${isDark
                      ? "border-slate-700 bg-slate-900"
                      : "border-slate-200 bg-white"
                      }`}
                  >
                    <p
                      className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                    >
                      Clients
                    </p>

                    <p
                      className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"
                        }`}
                    >
                      12
                    </p>
                  </div>

                  <div
                    className={`rounded-xl border p-4 transition-all duration-500 ${isDark
                      ? "border-slate-700 bg-slate-900"
                      : "border-slate-200 bg-white"
                      }`}
                  >
                    <p
                      className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                    >
                      Tasks
                    </p>

                    <p
                      className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"
                        }`}
                    >
                      48
                    </p>
                  </div>
                </div>

                {/* Input + Border */}
                <div
                  className={`mt-6 ${selectedId === "border"
                    ? "rounded-xl ring-2 ring-cyan-400 ring-offset-4"
                    : ""
                    }`}
                >
                  <label
                    className={`mb-2 block text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                  >
                    Search
                  </label>

                  <input
                    type="text"
                    placeholder="Search projects..."
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${isDark
                      ? "border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-400"
                      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500"
                      }`}
                  />
                </div>

                {/* Button */}
                <button
                  className={`mt-6 rounded-xl px-5 py-3 font-bold transition-all ${isDark
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Effect */}
        <div
          className={`border-t px-5 py-4 transition-all duration-500 ${isDark
            ? "border-slate-800 bg-slate-900"
            : "border-slate-200 bg-white"
            }`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-cyan-400" : "text-blue-600"
                  }`}
              >
                Currently Showing
              </p>

              <p
                className={`mt-1 font-bold ${isDark ? "text-white" : "text-slate-900"
                  }`}
              >
                {selected.title}
              </p>
            </div>

            <code
              className={`rounded-lg px-3 py-2 text-xs ${isDark
                ? "bg-slate-950 text-cyan-300"
                : "bg-slate-100 text-blue-700"
                }`}
            >
              {selected.example}
            </code>
          </div>
        </div>
      </div>
    </div>

    {/* How It Works */}
    <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        How It Works
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        Light style first → Dark style second
      </h3>

      <div className="mt-5 rounded-xl bg-slate-950/70 p-5">
        <code className="block text-sm leading-8 text-cyan-200">
          bg-white dark:bg-slate-900
          <br />
          text-slate-900 dark:text-white
          <br />
          border-slate-200 dark:border-slate-700
        </code>
      </div>

      <p className="mt-4 leading-7 text-slate-400">
        The normal class controls the light theme. The{" "}
        <span className="font-bold text-cyan-300">dark:</span> variant
        controls the dark theme.
      </p>
    </div>

    {/* Easy Mental Model */}
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Easy Mental Model
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
          >
            <p className="font-bold text-white">
              {concept.title}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {concept.memory}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Final Memory */}
    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Final Memory
      </p>

      <p className="mt-3 text-lg font-bold text-white">
        Dark Mode = A complete dark theme, not just a dark background.
      </p>

      <p className="mt-2 leading-7 text-slate-400">
        Toggle → Theme → Background → Text → Borders → Components
      </p>
    </div>
  </Section>


  );
}

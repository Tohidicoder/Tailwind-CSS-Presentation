
import { useState } from "react";
import Section from "../components/Section";

export default function ResponsiveDesign() {
  const breakpoints = [
    {
      id: "default",
      number: "01",
      title: "Default",
      size: "< 640px",
      device: "Mobile",
      description: "The base style for small screens.",
      example: "text-sm p-4",
      icon: "📱",
      previewWidth: "max-w-[300px]",
      padding: "p-4",
      text: "text-2xl",
      columns: "grid-cols-1",
    },
    {
      id: "sm",
      number: "02",
      title: "sm",
      size: "≥ 640px",
      device: "Large Mobile",
      description: "Applies styles at 640px and wider.",
      example: "sm:text-base",
      icon: "📱",
      previewWidth: "max-w-[360px]",
      padding: "p-5",
      text: "text-3xl",
      columns: "grid-cols-1",
    },
    {
      id: "md",
      number: "03",
      title: "md",
      size: "≥ 768px",
      device: "Tablet",
      description: "Applies styles at 768px and wider.",
      example: "md:grid-cols-2",
      icon: "📱",
      previewWidth: "max-w-[560px]",
      padding: "p-6",
      text: "text-4xl",
      columns: "grid-cols-2",
    },
    {
      id: "lg",
      number: "04",
      title: "lg",
      size: "≥ 1024px",
      device: "Laptop",
      description: "Applies styles at 1024px and wider.",
      example: "lg:grid-cols-3",
      icon: "💻",
      previewWidth: "max-w-[760px]",
      padding: "p-8",
      text: "text-5xl",
      columns: "grid-cols-3",
    },
    {
      id: "xl",
      number: "05",
      title: "xl",
      size: "≥ 1280px",
      device: "Desktop",
      description: "Applies styles at 1280px and wider.",
      example: "xl:text-6xl",
      icon: "🖥️",
      previewWidth: "max-w-[980px]",
      padding: "p-10",
      text: "text-6xl",
      columns: "grid-cols-3",
    },
    {
      id: "2xl",
      number: "06",
      title: "2xl",
      size: "≥ 1536px",
      device: "Large Desktop",
      description: "Applies styles at 1536px and wider.",
      example: "2xl:max-w-7xl",
      icon: "🖥️",
      previewWidth: "max-w-[1100px]",
      padding: "p-12",
      text: "text-6xl",
      columns: "grid-cols-3",
    },
  ];

  const [selectedBreakpoint, setSelectedBreakpoint] = useState("default");

  const breakpoint =
    breakpoints.find((item) => item.id === selectedBreakpoint) ||
    breakpoints[0];

  return (<Section
    number="16"
    label="Responsive Design"
    title="How Does a Website Adapt to Different Screens?"
  >
    {/* Main Idea */}


    <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Main Idea
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Responsive Design = Adapt to Screen Size
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A responsive website changes its spacing, text size, and layout
        depending on the screen width.
      </p>

      <div className="mt-5 rounded-xl bg-slate-950/60 p-4">
        <p className="font-bold text-white">
          Tailwind is Mobile-First.
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          Start with the default style, then use sm, md, lg, xl, and 2xl
          as the screen becomes wider.
        </p>
      </div>
    </div>

    {/* Breakpoints */}

    <div className="mb-8">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Breakpoints
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          Click a breakpoint to see the change
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {breakpoints.map((item) => {
          const active = selectedBreakpoint === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedBreakpoint(item.id)}
              className={`rounded-xl border p-4 text-left transition-all duration-200 ${active
                ? "border-cyan-400/50 bg-cyan-400/10 shadow-lg shadow-cyan-400/5"
                : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400">
                  {item.number}
                </span>

                <span className="text-xs text-slate-500">
                  {item.size}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm font-semibold text-cyan-300">
                    {item.device}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-400">
                {item.description}
              </p>

              {active && (
                <p className="mt-3 text-xs font-bold text-cyan-400">
                  ✓ Selected
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>

    {/* Selected Breakpoint */}

    <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Selected
      </p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{breakpoint.icon}</span>

          <div>
            <h3 className="text-2xl font-bold text-white">
              {breakpoint.title}
            </h3>

            <p className="text-sm text-cyan-300">
              {breakpoint.size} → {breakpoint.device}
            </p>
          </div>
        </div>

        <code className="rounded-lg bg-slate-950 px-4 py-2 text-sm text-cyan-200">
          {breakpoint.example}
        </code>
      </div>

      {selectedBreakpoint === "md" && (
        <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/5 p-4">
          <p className="text-sm text-slate-300">
            <span className="font-bold text-purple-300">Remember:</span>{" "}
            md means <strong className="text-white">768px and wider</strong>.
            It is a breakpoint, not a device name.
          </p>
        </div>
      )}
    </div>

    {/* Live Preview */}

    <div className="mb-8">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Live Example
        </p>

        <h3 className="mt-1 text-xl font-bold text-white">
          {breakpoint.icon} {breakpoint.device} Preview
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Click another breakpoint above. The same component changes its
          spacing, text size, and columns.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6">
        {/* Preview Header */}

        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-bold text-white">
              {breakpoint.device}
            </p>

            <p className="text-xs text-slate-500">
              {breakpoint.size}
            </p>
          </div>

          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
            {breakpoint.title}
          </span>
        </div>

        {/* Device */}

        <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-slate-950/70 p-4 sm:p-8">
          <div className={`w-full ${breakpoint.previewWidth}`}>
            <div className="overflow-hidden rounded-2xl border-4 border-slate-700 bg-slate-900 shadow-2xl">

              {/* Device Top Bar */}

              <div className="flex h-8 items-center gap-1 bg-slate-800 px-3">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />

                <span className="ml-3 text-[10px] text-slate-500">
                  responsive-preview
                </span>
              </div>

              {/* Website */}

              <div className={`${breakpoint.padding} bg-slate-900`}>

                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="font-bold text-white">
                    My Website
                  </p>

                  <div className="hidden gap-4 text-xs text-slate-400 sm:flex">
                    <span>Home</span>
                    <span>About</span>
                    <span>Projects</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                    Responsive Design
                  </p>

                  <h4
                    className={`mt-2 ${breakpoint.text} font-bold leading-tight text-white`}
                  >
                    Hello, {breakpoint.device}!
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    The same component adapts to the available space.
                  </p>
                </div>

                <div
                  className={`mt-5 grid gap-3 ${breakpoint.columns}`}
                >
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-bold text-white">
                      Card 1
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Responsive spacing
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-bold text-white">
                      Card 2
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Responsive layout
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-bold text-white">
                      Card 3
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Responsive text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Values */}

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-950/60 p-4">
            <p className="text-xs text-slate-500">Padding</p>
            <p className="mt-1 font-bold text-cyan-300">
              {breakpoint.padding}
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/60 p-4">
            <p className="text-xs text-slate-500">Text Size</p>
            <p className="mt-1 font-bold text-cyan-300">
              {breakpoint.text}
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/60 p-4">
            <p className="text-xs text-slate-500">Columns</p>
            <p className="mt-1 font-bold text-cyan-300">
              {breakpoint.columns}
            </p>
          </div>
        </div>
      </div>

      {/* Code */}

      <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          The Code Behind It
        </p>

        <code className="mt-3 block text-sm leading-7 text-cyan-200">
          p-4 md:p-6 lg:p-8 xl:p-10
          <br />
          text-2xl md:text-4xl lg:text-5xl xl:text-6xl
          <br />
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        </code>
      </div>
    </div>

    {/* Responsive Mindset */}

    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Easy Mental Model
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-bold text-white">📱 Mobile</p>
          <p className="mt-1 text-sm text-slate-400">
            Small space → simple layout
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-bold text-white">📱 Tablet</p>
          <p className="mt-1 text-sm text-slate-400">
            More space → two columns
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-bold text-white">💻 Laptop</p>
          <p className="mt-1 text-sm text-slate-400">
            More space → three columns
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-bold text-white">🖥️ Desktop</p>
          <p className="mt-1 text-sm text-slate-400">
            Wide space → more room
          </p>
        </div>
      </div>
    </div>

    {/* Final Memory */}

    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
        Final Memory
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {breakpoints.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-slate-950/50 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>

              <div>
                <p className="font-bold text-white">
                  {item.title}
                </p>

                <p className="text-xs text-slate-500">
                  {item.size}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="font-bold text-white">
          Remember:
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Breakpoints are screen widths, not device names.
        </p>
      </div>
    </div>
  </Section>


  );
}

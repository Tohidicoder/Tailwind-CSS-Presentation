import { useState } from "react";
import Section from "../components/Section";
import images from "../assets/images/b.jpg";

export default function AdvancedLayout() {
  // Store the selected image utility
  const [fit, setFit] = useState("object-cover");

  // Store the selected image position
  const [position, setPosition] = useState("object-center");

  return (
    <Section
      number="27"
      label="Advanced Layout"
      title="Advanced Layout Utilities"
    >
      {/* Short explanation */}
      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Advanced Layout utilities give us more control over images, proportions,
        and content columns.
      </p>

      {/* --------------------------------------------------
          IMPORTANT UTILITIES
      -------------------------------------------------- */}

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">aspect-video</code>
          <p className="mt-2 text-sm text-slate-400">Creates a 16:9 ratio.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">object-cover</code>
          <p className="mt-2 text-sm text-slate-400">
            Fills the image container.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">object-center</code>
          <p className="mt-2 text-sm text-slate-400">Centers the image.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <code className="text-cyan-300">columns-2</code>
          <p className="mt-2 text-sm text-slate-400">
            Creates two text columns.
          </p>
        </div>
      </div>

      {/* --------------------------------------------------
          LIVE EXAMPLE
      -------------------------------------------------- */}

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Live Example</h3>

          <p className="mt-2 text-slate-400">
            Change the utilities and see the layout update.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          {/* Object Fit */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Object Fit
            </label>

            <select
              value={fit}
              onChange={(e) => setFit(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            >
              <option value="object-cover">object-cover</option>
              <option value="object-contain">object-contain</option>
              <option value="object-fill">object-fill</option>
            </select>
          </div>

          {/* Object Position */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Object Position
            </label>

            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            >
              <option value="object-center">object-center</option>
              <option value="object-top">object-top</option>
              <option value="object-bottom">object-bottom</option>
              <option value="object-left">object-left</option>
              <option value="object-right">object-right</option>
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Image */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Image Result
            </p>

            <div className="overflow-hidden rounded-xl bg-slate-900">
              <img
                src={images}
                alt="Nature"
                className={`aspect-video w-full ${fit} ${position}`}
              />
            </div>
          </div>

          {/* Code */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Tailwind Classes
            </p>

            <div className="rounded-xl bg-slate-950 p-5">
              <code className="text-sm leading-7 text-cyan-300">
                aspect-video
                <br />
                w-full
                <br />
                {fit}
                <br />
                {position}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          COLUMNS EXAMPLE
      -------------------------------------------------- */}

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-bold text-white">
          Another Example: Columns
        </h3>

        <div className="columns-2 gap-4 rounded-xl bg-slate-900 p-5 text-sm leading-7 text-slate-300">
          <p className="mb-4">
            Tailwind CSS makes it easy to control layout directly with utility
            classes.
          </p>

          <p className="mb-4">
            The columns-2 class divides content into two columns without writing
            custom CSS.
          </p>

          <p>This is useful for articles, lists, and text-heavy content.</p>
        </div>
      </div>

      {/* --------------------------------------------------
          KEY TAKEAWAY
      -------------------------------------------------- */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <h3 className="mb-2 font-bold text-cyan-300">Key Takeaway</h3>

        <p className="text-slate-300">
          Advanced Layout utilities give you precise control over images and
          content layout.
        </p>
      </div>
    </Section>
  );
}

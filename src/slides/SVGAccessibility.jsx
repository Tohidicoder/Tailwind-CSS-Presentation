import { useState } from "react";
import Section from "../components/Section";
import image from "../assets/images/b.jpg";

export default function SVGAccessibility() {
  const [activeDemo, setActiveDemo] = useState("svg");

  const concepts = [
    {
      id: "svg",
      number: "01",
      title: "SVG — Icons & Shapes",
      description:
        "Use SVG when you need an icon, logo, arrow, or simple graphic that you want to style with Tailwind.",
      utility: "fill-* / stroke-* / size-*",
    },
    {
      id: "image",
      number: "02",
      title: "<img> — Photos",
      description:
        "Use <img> when you want to display a real image such as a photo, course image, or project screenshot.",
      utility: "w-* / h-* / rounded-* / object-cover",
    },
    {
      id: "svg-style",
      number: "03",
      title: "Style an SVG",
      description:
        "Tailwind can change the SVG color, outline, thickness, and size.",
      utility: "fill-* / stroke-* / stroke-* / size-*",
    },
    {
      id: "image-style",
      number: "04",
      title: "Style an Image",
      description:
        "Tailwind can change an image size, shape, border, and how the image fits inside its box.",
      utility: "w-* / h-* / rounded-* / object-cover",
    },
    {
      id: "accessibility",
      number: "05",
      title: "Accessibility",
      description:
        "Use alt for meaningful images and aria-hidden for decorative icons.",
      utility: "alt / aria-hidden",
    },
    {
      id: "react-images",
      number: "06",
      title: "React Images",
      description:
        "Images in src are imported. Images in public use a direct path.",
      utility: "import image / /images/photo.jpg",
    },
  ];

  const activeConcept = concepts.find((item) => item.id === activeDemo);

  return (
    <Section
      number="32"
      label="SVG & Accessibility"
      title="SVG, Images & Accessibility"
    >
      {/* 1. Main Idea */}

      <div className="max-w-4xl">
        <p className="text-lg leading-8 text-slate-300">
          The easiest way to understand this section is to ask:
          <span className="font-bold text-cyan-300"> What am I showing?</span>
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <div className="text-3xl">➜</div>

            <h3 className="mt-4 font-bold text-white">Icon or Shape?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">Use SVG.</p>
          </div>

          <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-5">
            <div className="text-3xl">🖼️</div>

            <h3 className="mt-4 font-bold text-white">Real Photo?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use &lt;img&gt;.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <div className="text-3xl">♿</div>

            <h3 className="mt-4 font-bold text-white">Need Accessibility?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use alt or aria-hidden.
            </p>
          </div>
        </div>
      </div>

      {/* 2. What We Learn */}

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white">What We Learn</h3>

        <p className="mt-2 text-sm text-slate-500">
          Click each concept to see a real example.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setActiveDemo(concept.id)}
              className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                activeDemo === concept.id
                  ? "border-cyan-400/60 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.05] hover:border-cyan-400/30"
              }`}
            >
              <span className="text-sm font-bold text-cyan-400">
                {concept.number}
              </span>

              <h4 className="mt-3 text-lg font-bold text-white">
                {concept.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {concept.description}
              </p>

              <code className="mt-4 inline-block rounded-lg bg-slate-950 px-3 py-2 text-xs text-cyan-300">
                {concept.utility}
              </code>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Live Demo */}

      <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Live Demo
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {activeConcept?.title}
          </h3>

          <p className="mt-2 max-w-3xl leading-7 text-slate-400">
            {activeConcept?.description}
          </p>
        </div>

        {/* SVG */}

        {activeDemo === "svg" && (
          <div className="mt-8 rounded-2xl bg-slate-900 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-cyan-300">
                  SVG is good for:
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>• Icons</li>
                  <li>• Arrows</li>
                  <li>• Logos</li>
                  <li>• Simple shapes</li>
                </ul>
              </div>

              <div className="flex items-center justify-center rounded-2xl bg-slate-950 p-8">
                <svg
                  className="size-24 fill-cyan-400"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-slate-950 p-4">
              <code className="text-sm text-cyan-300">
                &lt;svg className="size-24 fill-cyan-400"&gt;
              </code>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Here we are not showing a photo. We are creating a graphic shape,
              so SVG is a good choice.
            </p>
          </div>
        )}

        {/* IMG */}

        {activeDemo === "image" && (
          <div className="mt-8 rounded-2xl bg-slate-900 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-purple-300">
                  Use &lt;img&gt; for:
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>• Photos</li>
                  <li>• Project screenshots</li>
                  <li>• Course images</li>
                  <li>• User profile pictures</li>
                </ul>
              </div>

              <div className="flex items-center justify-center rounded-2xl bg-slate-950 p-6">
                <img
                  src={image}
                  alt="Nature landscape"
                  className="h-48 w-full max-w-sm rounded-2xl object-cover"
                />
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-slate-950 p-4">
              <code className="text-sm text-purple-300">
                &lt;img src={image} alt="Nature landscape" /&gt;
              </code>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This is a real photograph, so we use an image element instead of
              drawing it with SVG.
            </p>
          </div>
        )}

        {/* SVG Styling */}

        {activeDemo === "svg-style" && (
          <div className="mt-8 rounded-2xl bg-slate-900 p-8">
            <p className="mb-8 text-sm leading-6 text-slate-400">
              SVG can be styled directly with Tailwind classes. Change the
              color, outline, thickness, or size.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="text-center">
                <svg
                  className="mx-auto size-20 fill-cyan-400"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="35" />
                </svg>

                <p className="mt-3 text-sm text-cyan-300">fill-cyan-400</p>
              </div>

              <div className="text-center">
                <svg
                  className="mx-auto size-20 fill-none stroke-purple-400 stroke-4"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="35" />
                </svg>

                <p className="mt-3 text-sm text-purple-300">
                  stroke-purple-400
                </p>
              </div>

              <div className="text-center">
                <svg
                  className="mx-auto size-28 fill-none stroke-pink-400 stroke-8"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="35" />
                </svg>

                <p className="mt-3 text-sm text-pink-300">size-28 + stroke-8</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-slate-950 p-5">
              <p className="text-sm text-slate-500">Main utilities</p>

              <div className="mt-3 flex flex-wrap gap-3">
                <code className="rounded-lg bg-slate-900 px-3 py-2 text-cyan-300">
                  fill-*
                </code>

                <code className="rounded-lg bg-slate-900 px-3 py-2 text-cyan-300">
                  stroke-*
                </code>

                <code className="rounded-lg bg-slate-900 px-3 py-2 text-cyan-300">
                  stroke-2
                </code>

                <code className="rounded-lg bg-slate-900 px-3 py-2 text-cyan-300">
                  size-*
                </code>
              </div>
            </div>
          </div>
        )}

        {/* Image Styling */}

        {activeDemo === "image-style" && (
          <div className="mt-8 rounded-2xl bg-slate-900 p-8">
            <p className="mb-8 text-sm leading-6 text-slate-400">
              Tailwind can style an image without changing the actual image
              file.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <img
                  src={image}
                  alt="Nature landscape"
                  className="mx-auto h-32 w-32 object-cover"
                />

                <p className="mt-3 text-sm text-slate-300">w-32 h-32</p>
              </div>

              <div className="text-center">
                <img
                  src={image}
                  alt="Nature landscape"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />

                <p className="mt-3 text-sm text-slate-300">rounded-full</p>
              </div>

              <div className="text-center">
                <img
                  src={image}
                  alt="Nature landscape"
                  className="mx-auto h-32 w-48 rounded-2xl object-cover"
                />

                <p className="mt-3 text-sm text-slate-300">
                  rounded-2xl + object-cover
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-slate-950 p-5">
              <p className="text-sm text-slate-500">Main utilities</p>

              <div className="mt-3 flex flex-wrap gap-3">
                <code className="rounded-lg bg-slate-900 px-3 py-2 text-purple-300">
                  w-*
                </code>

                <code className="rounded-lg bg-slate-900 px-3 py-2 text-purple-300">
                  h-*
                </code>

                <code className="rounded-lg bg-slate-900 px-3 py-2 text-purple-300">
                  rounded-*
                </code>

                <code className="rounded-lg bg-slate-900 px-3 py-2 text-purple-300">
                  object-cover
                </code>
              </div>
            </div>
          </div>
        )}

        {/* Accessibility */}

        {activeDemo === "accessibility" && (
          <div className="mt-8 rounded-2xl bg-slate-900 p-8">
            <p className="mb-8 text-sm leading-6 text-slate-400">
              Accessibility tells assistive technologies what an image or icon
              means.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="font-semibold text-cyan-300">Meaningful Image</p>

                <img
                  src={image}
                  alt="Nature landscape"
                  className="mt-5 h-40 w-full rounded-xl object-cover"
                />

                <code className="mt-4 block text-sm text-slate-400">
                  alt="Nature landscape"
                </code>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  A screen reader can describe this image.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="font-semibold text-purple-300">Decorative Icon</p>

                <svg
                  className="mt-5 size-20 fill-purple-400"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="40" />
                </svg>

                <code className="mt-4 block text-sm text-slate-400">
                  aria-hidden="true"
                </code>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  A screen reader can ignore this decorative icon.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="font-semibold text-white">Easy Rule</p>

              <p className="mt-2 leading-7 text-slate-300">
                Real meaning → use <code className="text-cyan-300">alt</code>.
                Decorative icon → use{" "}
                <code className="text-cyan-300">aria-hidden="true"</code>.
              </p>
            </div>
          </div>
        )}

        {/* React Images */}

        {activeDemo === "react-images" && (
          <div className="mt-8 rounded-2xl bg-slate-900 p-8">
            <h4 className="text-xl font-bold text-white">
              Where is the image stored?
            </h4>

            <p className="mt-3 leading-7 text-slate-400">
              In React, the image path depends on whether the file is inside{" "}
              <code className="text-cyan-300">src</code> or{" "}
              <code className="text-cyan-300">public</code>.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-6">
                <span className="rounded-lg bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300">
                  src/assets/images
                </span>

                <p className="mt-5 font-semibold text-white">Import first</p>

                <code className="mt-4 block rounded-xl bg-slate-900 p-4 text-sm leading-7 text-cyan-300">
                  import image from
                  <br />
                  "../assets/images/b.jpg";
                  <br />
                  <br />
                  {'<img src={image} alt="Nature" />'}
                </code>
              </div>

              <div className="rounded-2xl border border-purple-400/20 bg-slate-950 p-6">
                <span className="rounded-lg bg-purple-400/10 px-3 py-2 text-xs font-semibold text-purple-300">
                  public/images
                </span>

                <p className="mt-5 font-semibold text-white">No import</p>

                <code className="mt-4 block rounded-xl bg-slate-900 p-4 text-sm leading-7 text-purple-300">
                  {"<img"}
                  <br />
                  {'  src="/images/photo.jpg"'}
                  <br />
                  {'  alt="Photo"'}
                  <br />
                  {"/>"}
                </code>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <p className="font-semibold text-yellow-300">Easy Rule</p>

              <p className="mt-2 leading-7 text-slate-300">
                <code className="text-cyan-300">src</code> → import the image.
                <br />
                <code className="text-purple-300">public</code> → use the direct
                path.
              </p>
            </div>
          </div>
        )}

        {/* Current Utility */}

        <div className="mt-6 rounded-xl bg-slate-950 p-5">
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Main Concept
          </p>

          <code className="text-cyan-300">{activeConcept?.utility}</code>
        </div>
      </div>

      {/* 4. Final Rule */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="text-lg font-bold text-cyan-300">
          Easy Rule to Remember
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-950 p-5">
            <p className="text-2xl">➜</p>

            <h4 className="mt-3 font-bold text-white">Icon?</h4>

            <p className="mt-2 text-sm text-slate-400">Use SVG.</p>
          </div>

          <div className="rounded-xl bg-slate-950 p-5">
            <p className="text-2xl">🖼️</p>

            <h4 className="mt-3 font-bold text-white">Photo?</h4>

            <p className="mt-2 text-sm text-slate-400">Use &lt;img&gt;.</p>
          </div>

          <div className="rounded-xl bg-slate-950 p-5">
            <p className="text-2xl">♿</p>

            <h4 className="mt-3 font-bold text-white">Accessibility?</h4>

            <p className="mt-2 text-sm text-slate-400">
              Use alt or aria-hidden.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Key Takeaway */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
        <h3 className="text-lg font-bold text-white">Key Takeaway</h3>

        <p className="mt-3 max-w-4xl leading-7 text-slate-300">
          SVG is mainly for icons, logos, and simple graphics.
          <code className="mx-1 text-cyan-300">&lt;img&gt;</code>
          is mainly for real images and photos. Tailwind can style both, and
          accessibility attributes help users understand meaningful images and
          ignore decorative icons.
        </p>
      </div>
    </Section>
  );
}

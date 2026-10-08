import { useState } from "react";
import Section from "../components/Section";
import image from "../assets/images/b.jpg";

export default function AdvancedEffects() {
  // --------------------------------------------------
  // STATE
  // These states control our Live Example.
  // When we change a dropdown, the image updates.
  // --------------------------------------------------

  const [blur, setBlur] = useState("blur-0");
  const [grayscale, setGrayscale] = useState("grayscale-0");
  const [brightness, setBrightness] = useState("brightness-100");
  const [contrast, setContrast] = useState("contrast-100");
  const [blend, setBlend] = useState("mix-blend-normal");

  return (
    <Section
      number="29"
      label="Advanced Effects"
      title="Advanced Effects & Filters"
    >
      {/* 
          1. SHORT INTRODUCTION
       */}

      <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
        Advanced Effects utilities let you change the visual appearance of
        images and elements without writing custom CSS.
      </p>

      {/* 
          2. WHAT WE LEARN
      - */}

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Blur */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <code className="text-cyan-300">blur-sm</code>

          <h3 className="mt-3 font-semibold text-white">Blur</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Makes an image or element look softer and blurred.
          </p>
        </div>

        {/* Grayscale */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <code className="text-cyan-300">grayscale</code>

          <h3 className="mt-3 font-semibold text-white">Grayscale</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Removes color and creates a black-and-white effect.
          </p>
        </div>

        {/* Brightness */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <code className="text-cyan-300">brightness-75</code>

          <h3 className="mt-3 font-semibold text-white">Brightness</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Makes an image darker or brighter.
          </p>
        </div>

        {/* Contrast */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <code className="text-cyan-300">contrast-125</code>

          <h3 className="mt-3 font-semibold text-white">Contrast</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Controls the difference between light and dark areas.
          </p>
        </div>

        {/* Blend Mode */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <code className="text-cyan-300">mix-blend-multiply</code>

          <h3 className="mt-3 font-semibold text-white">Blend Mode</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Controls how an element blends with the content behind it.
          </p>
        </div>

        {/* Text Shadow */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <code className="text-cyan-300">drop-shadow-lg</code>

          <h3 className="mt-3 font-semibold text-white">Shadow</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Adds depth by creating a shadow around an element.
          </p>
        </div>
      </div>

      {/* 
          3. LIVE EXAMPLE
       */}

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Live Example</h3>

          <p className="mt-2 text-slate-400">
            Change the effects and see the image update instantly.
          </p>
        </div>

        {/* 
            CONTROLS
         */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Blur */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Blur</label>

            <select
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="blur-0">blur-0</option>
              <option value="blur-sm">blur-sm</option>
              <option value="blur-md">blur-md</option>
              <option value="blur-lg">blur-lg</option>
            </select>
          </div>

          {/* Grayscale */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Grayscale
            </label>

            <select
              value={grayscale}
              onChange={(e) => setGrayscale(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="grayscale-0">grayscale-0</option>
              <option value="grayscale">grayscale</option>
            </select>
          </div>

          {/* Brightness */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Brightness
            </label>

            <select
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="brightness-75">brightness-75</option>
              <option value="brightness-100">brightness-100</option>
              <option value="brightness-125">brightness-125</option>
            </select>
          </div>

          {/* Contrast */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Contrast
            </label>

            <select
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="contrast-75">contrast-75</option>
              <option value="contrast-100">contrast-100</option>
              <option value="contrast-125">contrast-125</option>
            </select>
          </div>

          {/* Blend Mode */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Blend Mode
            </label>

            <select
              value={blend}
              onChange={(e) => setBlend(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
            >
              <option value="mix-blend-normal">normal</option>

              <option value="mix-blend-multiply">multiply</option>

              <option value="mix-blend-screen">screen</option>
            </select>
          </div>
        </div>

        {/* 
            RESULT + CURRENT CLASSES
       */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Image Result */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Live Result
            </p>

            <div className="overflow-hidden rounded-xl bg-slate-900">
              <img
                src={image}
                alt="Nature"
                className={`h-72 w-full object-cover ${blur} ${grayscale} ${brightness} ${contrast} ${blend}`}
              />
            </div>
          </div>

          {/* Current Classes */}
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">
              Current Classes
            </p>

            <div className="rounded-xl bg-slate-950 p-5">
              <code className="text-sm leading-8 text-cyan-300">
                {blur}
                <br />
                {grayscale}
                <br />
                {brightness}
                <br />
                {contrast}
                <br />
                {blend}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          4. KEY TAKEAWAY
      -------------------------------------------------- */}

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <h3 className="mb-2 font-bold text-cyan-300">Key Takeaway</h3>

        <p className="leading-7 text-slate-300">
          Advanced Effects let you change images and visual elements quickly
          using utility classes.
        </p>
      </div>
    </Section>
  );
}

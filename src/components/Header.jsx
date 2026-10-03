
import tailwindLogo from "../assets/images/Tailwind_CSS.webp";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">

        {/* Left: Logo and title */}
        <div className="flex items-center gap-3">

          {/* Tailwind Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <img
              src={tailwindLogo}
              alt="Tailwind CSS logo"
              className="h-6 w-6"
            />
          </div>

          {/* Title */}
          <div>
            <p className="text-lg font-black tracking-tight text-white">
              Tailwind CSS
            </p>

            <p className="text-xs text-slate-400">
              Modern CSS Framework
            </p>
          </div>
        </div>

        {/* Right: Presentation label */}
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
          Complete Presentation
        </span>

      </div>
    </header>
  );
}

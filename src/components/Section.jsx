export default function Section({ number, label, title, children }) {
  return (
    <section className="min-h-[70vh] border-b border-fuchsia-400/10 py-20 md:py-28">
      <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-fuchsia-400">
        {number} / {label}
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
        {title}
      </h2>

      <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-400 to-rose-500" />

      <div className="mt-10">{children}</div>
    </section>
  );
}

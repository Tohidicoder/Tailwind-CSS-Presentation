export default function CodeBlock({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-2xl">
      <div className="flex gap-2 border-b border-white/10 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
      </div>
      <pre className="overflow-x-auto p-6 text-sm leading-7 text-cyan-200">
        <code>{children}</code>
      </pre>
    </div>
  );
}

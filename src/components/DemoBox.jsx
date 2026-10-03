export default function DemoBox({ children }) {
  return (
    <div className="rounded-2xl border border-cyan-400/15 bg-white/[0.04] p-8">
      {children}
    </div>
  );
}

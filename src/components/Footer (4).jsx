/**
 * EdgeFrame
 * ---------
 * Subtle premium "interface" framing for a section's inner content block —
 * partial top/bottom guide lines, small corner brackets, and a faint
 * background glow. Intentionally NOT a full rectangle: only top+bottom
 * hairlines are drawn, with brackets only at two opposing corners, so it
 * reads as a high-end UI seam rather than a box around the content.
 */
export default function EdgeFrame({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* faint radial glow behind the framed block */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(64,184,239,0.08),transparent_70%)]"
      />

      {/* partial top guide line with a small illuminated segment */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/[0.06]">
        <div className="h-full w-24 bg-gradient-to-r from-transparent via-accent-bright/60 to-transparent sm:w-32" />
      </div>

      {/* corner brackets, top-left and bottom-right only */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-4 w-4 border-l border-t border-accent-bright/40"
      />
      <span
        aria-hidden
        className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-accent-bright/40"
      />

      {/* partial bottom guide line */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06]">
        <div className="ml-auto h-full w-24 bg-gradient-to-l from-transparent via-accent-bright/40 to-transparent sm:w-32" />
      </div>

      <div className="py-10 sm:py-12">{children}</div>
    </div>
  )
}

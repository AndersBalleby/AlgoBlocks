export default function TestCase({id, array, target, expected, status, isActive, onClick}) {
  const isNotFound = (v) => v === -1 || v === "ikke fundet";
  const shortArray =
    array.length > 5 
    ? `[${array.slice(0, 5).join(", ")}, …]`
    : `[${array.join(", ")}]`;
  const expectedText = isNotFound(expected) ? "ikke fundet" : `indeks ${expected}`;

  // Base classes
  const baseClasses = "flex items-center gap-[10px] px-[0.85rem] py-[0.6rem] border rounded-[8px] select-none transition-[background,border-color] duration-[150ms] ease-[ease]";
  
  const statusClasses = {
    pass: "bg-[#f0fdf9] border-[#6ee7b7] text-[#065f46]",
    fail: "bg-[#fff5f5] border-[#fca5a5] text-[#7f1d1d]",
    skipped: "opacity-40 cursor-default bg-[#f8fafc] border-[#e8ecf4] text-[#64748b]",
    default: "bg-[#f8fafc] border-[#e8ecf4] text-[#64748b] cursor-pointer hover:bg-[#f1f5f9] hover:border-[#c7d2e8]"
  };
  
  const bubbleClasses = {
    pass: "bg-[#10b981] text-white",
    fail: "bg-[#ef4444] text-white",
    default: "bg-[#e2e8f0] text-[#64748b]"
  };

  const statusIconClasses = {
    pass: "text-[#10b981]",
    fail: "text-[#ef4444]",
    default: "text-[#cbd5e1]"
  };

  return (
    <div 
      className={`${baseClasses} ${statusClasses[status] || statusClasses.default} ${isActive ? 'border-[#818cf8] bg-[#eef2ff]' : ''}`} 
      id={`test-preview-${id}`}
      onClick={onClick}
      style={{ fontFamily: '"Fira Code", monospace' }}
    >
      {/* Number bubble */}
      <div 
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-[background,color] duration-200`}
        style={{ 
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.68rem',
          fontWeight: 700
        }}
      >
        <span className={bubbleClasses[status] || bubbleClasses.default} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
          {id + 1}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col gap-[2px] min-w-0">
        {/* Top row */}
        <div 
          className="whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ 
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.78rem',
            color: '#334155',
            fontWeight: 500
          }}
        >
          Søg efter <em style={{ fontStyle: 'normal', color: '#6366f1', fontWeight: 700 }}>{target}</em> → <em style={{ fontStyle: 'normal', color: '#6366f1', fontWeight: 700 }}>{expectedText}</em>
        </div>
        {/* Bottom row */}
        <div 
          className="whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ 
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.72rem',
            color: '#94a3b8'
          }}
        >
          {shortArray}
        </div>
      </div>

      {/* Status icon */}
      <div 
        className={`shrink-0 ${statusIconClasses[status] || statusIconClasses.default}`}
        style={{ 
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.8rem',
          fontWeight: 700
        }}
      >
        {status === 'pass' ? '✓' : status === 'fail' ? '✗' : '○'}
      </div>
    </div>
  );
}
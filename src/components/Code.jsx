export default function Code({ highlighted = true, children }) {
  return (
    <code
      className="px-2 py-1 rounded text-sm mx-1"
      style={
        highlighted
          ? {
              backgroundColor: "#f3f4f6",
              color: "#6366f1",
              fontFamily: '"Fira Code", monospace',
            }
          : {
              backgroundColor: "#f3f4f6",
              color: "#374151",
              fontFamily: '"Fira Code", monospace',
            }
      }
    >
      {children}
    </code>
  );
}

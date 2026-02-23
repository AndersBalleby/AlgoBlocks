export default function Example({ index, array, target, output, explanation }) {
  return (
    <div
      className="mb-4 rounded-lg border overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-2 font-extrabold text-sm border-b"
        style={{
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          color: "#374151",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Eksempel {index + 1}
      </div>

      {/* Content */}
      <div className="p-4" style={{ fontFamily: '"Fira Code", monospace' }}>
        {/* Input */}
        <div className="mb-3">
          <span
            className="font-semibold text-sm block mb-2"
            style={{ color: "#374151" }}
          >
            Input:
          </span>
          <div className="flex flex-col gap-1">
            <code
              className="px-2 py-1 rounded text-sm block"
              style={{
                backgroundColor: "#f3f4f6",
                color: "#1f2937",
                fontFamily: '"Fira Code", monospace',
              }}
            >
              liste = [{array.join(", ")}]
            </code>
            <code
              className="px-2 py-1 rounded text-sm block"
              style={{
                backgroundColor: "#f3f4f6",
                color: "#1f2937",
                fontFamily: '"Fira Code", monospace',
              }}
            >
              søgeværdi = {target}
            </code>
          </div>
        </div>

        {/* Output */}
        <div className="mb-3">
          <span className="font-semibold text-sm" style={{ color: "#374151" }}>
            Output:{" "}
          </span>
          <code
            className="px-2 py-1 rounded text-sm"
            style={{
              backgroundColor: "#f3f4f6",
              color: "#1f2937",
              fontFamily: '"Fira Code", monospace',
            }}
          >
            {output}
          </code>
        </div>

        {/* Explanation */}
        {explanation && (
          <div>
            <span
              className="font-semibold text-sm block mb-1"
              style={{ color: "#374151" }}
            >
              Forklaring:
            </span>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "#6b7280",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

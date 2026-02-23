import { useState } from "react";
import TestCase from "./TestCase";

export default function TestCaseTab() {
  const [selectedTestCase, setSelectedTestCase] = useState(null);

  /* Linear Search test cases */
  const testCases = [
    { array: [3, 7, 12, 18, 23, 31, 45], target: 18, expected: 3 },
    { array: [3, 7, 12, 18, 23, 31, 45], target: 3, expected: 0 },
    { array: [3, 7, 12, 18, 23, 31, 45], target: 45, expected: 6 },
    { array: [3, 7, 12, 18, 23, 31, 45], target: 99, expected: -1 },
    { array: [5], target: 5, expected: 0 },
  ];

  return (
    <>
      <section className="problem-section">
        <h3>Test Cases</h3>
        <div className="mb-3">
          <div className="flex flex-col gap-[5px] mb-3" id="testPreviewList">
            {testCases.map((testCase, index) => {
              return (
                <TestCase
                  key={index}
                  id={index}
                  array={testCase.array}
                  target={testCase.target}
                  expected={testCase.expected}
                  status={"default"}
                  isActive={selectedTestCase === index}
                  onClick={() => setSelectedTestCase(index)}
                />
              );
            })}
          </div>
        </div>
        <div
          className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[0.82rem] min-h-[80px] transition-all duration-200 mt-1"
          id="testDetailPanel"
        >
          {selectedTestCase === null ? (
            <span className="text-slate-400 italic">
              Klik på en test for at se detaljer
            </span>
          ) : (
            <div>
              <div
                className="font-bold mb-2 text-lg"
                style={{ color: "#6366f1" }}
              >
                Test Case #{selectedTestCase + 1}
              </div>
              <div className="mb-1">
                <span style={{ color: "#64748b" }}>Søg efter: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  {testCases[selectedTestCase].target}
                </span>
              </div>
              <div className="mb-1">
                <span style={{ color: "#64748b" }}>Liste: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  [{testCases[selectedTestCase].array.join(", ")}]
                </span>
              </div>
              <div>
                <span style={{ color: "#64748b" }}>Forventet resultat: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  {`indeks ${testCases[selectedTestCase].expected}`}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

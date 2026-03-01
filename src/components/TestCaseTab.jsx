import { useEffect, useState } from "react";
import TestCase from "./TestCase";

export default function TestCaseTab({
  isRunning,
  generatedCode,
  onRun,
  onReset,
  onFinished,
}) {
  const [selectedTestCase, setSelectedTestCase] = useState(null);

  /* Linear Search test cases */
  const [testCases, setTestCases] = useState([
    {
      array: [3, 7, 12, 18, 23, 31, 45],
      target: 18,
      expected: 3,
      status: "default",
    },
    {
      array: [3, 7, 12, 18, 23, 31, 45],
      target: 3,
      expected: 0,
      status: "default",
    },
    {
      array: [3, 7, 12, 18, 23, 31, 45],
      target: 45,
      expected: 6,
      status: "default",
    },
    {
      array: [3, 7, 12, 18, 23, 31, 45],
      target: 99,
      expected: -1,
      status: "default",
    },
    { array: [5], target: 5, expected: 0, status: "default" },
  ]);

  /* For at afprøve test cases */
  /* Det evaluerer ingen kode endnu :) */
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (!isRunning || !generatedCode) return;

    setTestCases((prev) => prev.map((tc) => ({ ...tc, status: "default" })));

    const runTests = async () => {
      const code = generatedCode;
      for (let i = 0; i < testCases.length; ++i) {
        const { array, target, expected } = testCases[i];

        let result;
        try {
          const wrapped = `
              ${code}
              lineærSøgning([${array}], ${target});
            `;

          result = eval(wrapped);
        } catch (e) {
          result = null;
        }

        const status = result === expected ? "pass" : "fail";
        setTestCases((prev) =>
          prev.map((tc, index) => (index === i ? { ...tc, status } : tc)),
        );

        await sleep(600);
      }
      onFinished();
    };

    runTests();
  }, [isRunning, generatedCode]);

  return (
    <>
      <section className="problem-section">
        <h3>Test Cases</h3>
        <div className="mb-3">
          <div className="flex flex-col gap-1.25 mb-3" id="testPreviewList">
            {testCases.map((testCase, index) => {
              return (
                <TestCase
                  key={index}
                  id={index}
                  array={testCase.array}
                  target={testCase.target}
                  expected={testCase.expected}
                  status={testCase.status}
                  isActive={selectedTestCase === index}
                  onClick={() => setSelectedTestCase(index)}
                />
              );
            })}
          </div>
        </div>
        <div
          className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[0.82rem] min-h-20 transition-all duration-200 mt-1"
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
              <div className="mb-1 text-sm">
                <span style={{ color: "#64748b" }}>Søg efter: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  {testCases[selectedTestCase].target}
                </span>
              </div>
              <div className="mb-1 text-sm">
                <span style={{ color: "#64748b" }}>Liste: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  [{testCases[selectedTestCase].array.join(", ")}]
                </span>
              </div>
              <div className="text-sm">
                <span style={{ color: "#64748b" }}>Forventet resultat: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  {testCases[selectedTestCase].expected}
                </span>
              </div>
            </div>
          )}
        </div>
        <div id="testCaseButtons">
          <button
            className={`action-btn run-btn ${isRunning ? "btn-loading" : ""}`}
            onClick={onRun}
            disabled={isRunning}
            style={isRunning ? { cursor: "not-allowed " } : {}}
          >
            {isRunning ? "Kører..." : "Kør Algoritme"}
          </button>
          <button
            className="action-btn reset-btn"
            disabled={isRunning}
            onClick={onReset}
            style={isRunning ? { cursor: "not-allowed " } : {}}
          >
            Nulstil
          </button>
        </div>
        <div id="codeTab" className="pt-5">
          <h3>Din Genererede Kode</h3>
          <div className="pseudocodeContent">
            {/* Ved ikke hvorfor den ikke viser det af default?? */}
            {generatedCode ? generatedCode : "Ingen kode endnu"}
          </div>
        </div>
      </section>
    </>
  );
}

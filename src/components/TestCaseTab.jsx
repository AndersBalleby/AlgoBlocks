import { useEffect, useState, useRef } from "react";
import TestCase from "./TestCase";

function safeEval(code, timeoutMS = 3000) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(
      URL.createObjectURL(
        new Blob(
          [
            `
          self.onmessage = function(e) {
            try {
              const result = eval(e.data);
              self.postMessage({ result });
            } catch(err) {
              self.postMessage({ error: err.message }); 
            }
          }  
        `,
          ],
          { type: "application/javascript" },
        ),
      ),
    );

    const timer = setTimeout(() => {
      worker.terminate();
      reject(
        new Error(
          "Koden brugte for lang tid - måske har du et uendeligt loop?",
        ),
      );
    }, timeoutMS);

    worker.onmessage = (e) => {
      clearTimeout(timer);
      worker.terminate();
      if (e.data.error) reject(new Error(e.data.error));
      else resolve(e.data.result);
    };

    worker.postMessage(code);
  });
}

function translateError(message) {
  if (message.includes("uendeligt loop")) return message;
  if (message.includes("Maximum call stack"))
    return "Din funktion kalder sig selv for mange gange — måske mangler der et stop-kriterie?";
  if (message.includes("is not defined"))
    return `En variabel eller funktion blev brugt uden at være defineret — har du husket at definere din funktion?`;
  if (message.includes("is not a function"))
    return "Du prøver at kalde noget som ikke er en funktion.";
  if (message.includes("Cannot read propert"))
    return "Du prøver at tilgå en egenskab på en tom værdi (undefined eller null).";
  return `Ukendt fejl: ${message}`;
}

export default function TestCaseTab({
  isRunning,
  generatedCode,
  onRun,
  onReset,
  onFinished,
}) {
  const [selectedTestCase, setSelectedTestCase] = useState(null);
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

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (!isRunning || !generatedCode || generatedCode === "Ingen kode endnu")
      return;

    setTestCases((prev) => prev.map((tc) => ({ ...tc, status: "default" })));

    const runTests = async () => {
      const code = generatedCode;
      for (let i = 0; i < testCases.length; ++i) {
        const { array, target, expected } = testCases[i];

        let result;
        let error = null;
        try {
          const wrapped = `
              ${code}
              lineærSøgning([${array}], ${target});
            `;

          result = await safeEval(wrapped);
        } catch (e) {
          result = null;
          error = e.message;
        }

        const status = error ? "error" : result === expected ? "pass" : "fail";
        setTestCases((prev) =>
          prev.map((tc, index) =>
            index === i ? { ...tc, status, actual: result, error } : tc,
          ),
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
              <div className="mb-1 text-sm">
                <span style={{ color: "#64748b" }}>Forventet resultat: </span>
                <span style={{ color: "#6366f1", fontWeight: "bold" }}>
                  {testCases[selectedTestCase].expected}
                </span>
              </div>

              {testCases[selectedTestCase].actual !== undefined && (
                <div className="mb-1 text-sm">
                  <span style={{ color: "#64748b" }}>Dit resultat: </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color:
                        testCases[selectedTestCase].status === "pass"
                          ? "#10b981"
                          : "#ef4444",
                    }}
                  >
                    {String(testCases[selectedTestCase].actual)}
                  </span>
                </div>
              )}

              {testCases[selectedTestCase].error && (
                <div
                  className="mt-2 p-2 rounded text-sm"
                  style={{
                    background: "#fff5f5",
                    border: "1px solid #fca5a5",
                    color: "#7f1d1d",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Fejl: </span>
                  {translateError(testCases[selectedTestCase].error)}
                </div>
              )}
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
          <div className="pseudocodeContent">{generatedCode}</div>
        </div>
      </section>
    </>
  );
}

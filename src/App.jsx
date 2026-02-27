import { useCallback, useState } from "react";
import BlocklyWorkspace from "./components/BlocklyWorkspace";
import "./app.css";
import TestCaseTab from "./components/TestCaseTab";
import ProblemTab from "./components/ProblemTab";
import { linearSearchToolbox } from "./toolbox";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  const [activeTab, setActiveTab] = useState("problemTab");
  const [isRunning, setIsRunning] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);

  const handleRun = useCallback(
    function () {
      if (generatedCode) {
        setActiveTab("solutionTab");
      }
      setIsRunning(true);
    },
    [generatedCode],
  );

  function handleReset() {
    setIsRunning(false);
    setGeneratedCode(null);
  }

  const handleCodeGenerated = useCallback(function (code) {
    setGeneratedCode(code);
  }, []);

  function onFinished() {
    setIsRunning(false);
  }

  return (
    <>
      <div id="app">
        <div id="header">
          <h1>Workshop | Algoritmer</h1>
          <div id="headerButtons">
            <button className="action-btn run-btn" onClick={handleRun}>
              Kør Algoritme
            </button>
            <button className="action-btn reset-btn" onClick={handleReset}>
              Nulstil
            </button>
          </div>
        </div>

        <div id="pageContainer">
          <div id="leftPane">
            <div id="leftTabs">
              <button
                className={`tab-btn ${activeTab === "problemTab" ? "active" : ""}`}
                onClick={() => setActiveTab("problemTab")}
              >
                Beskrivelse
              </button>

              <button
                className={`tab-btn ${activeTab === "solutionTab" ? "active" : ""}`}
                onClick={() => setActiveTab("solutionTab")}
              >
                Test Cases
              </button>
            </div>

            <div id="tabContent">
              {/* PROBLEM TAB */}
              <div
                className={`tab-panel ${activeTab === "problemTab" ? "active" : ""}`}
                id="problemTab"
              >
                <ProblemTab />
              </div>

              <div
                className={`tab-panel ${activeTab === "solutionTab" ? "active" : ""}`}
                id="solutionTab"
              >
                <TestCaseTab
                  isRunning={isRunning}
                  generatedCode={generatedCode}
                  onRun={handleRun}
                  onReset={handleReset}
                  onFinished={onFinished}
                />
              </div>
            </div>
          </div>

          <ErrorBoundary>
            <BlocklyWorkspace
              toolbox={linearSearchToolbox}
              isRunning={isRunning}
              setIsRunning={setIsRunning}
              onRun={handleCodeGenerated}
            />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

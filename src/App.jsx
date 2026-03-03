import { useCallback, useEffect, useState } from "react";
import BlocklyWorkspace from "./components/BlocklyWorkspace";
import "./app.css";
import TestCaseTab from "./components/TestCaseTab";
import ProblemTab from "./components/ProblemTab";
import { linearSearchToolbox } from "./toolbox";
import { ErrorBoundary } from "./components/ErrorBoundary";
import UnsupportedScreen from "./components/UnsupportedScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("problemTab");
  const [isRunning, setIsRunning] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("Ingen kode endnu");
  const [isTooSmall, setIsTooSmall] = useState(window.innerWidth < 1024);

  const handleRun = useCallback(function () {
    setIsRunning(true);
  }, []);

  function handleReset() {
    setIsRunning(false);
    setGeneratedCode("Ingen kode endnu");
  }

  const handleCodeGenerated = useCallback(function (code) {
    setGeneratedCode(code);
    setActiveTab("solutionTab");
  }, []);

  const handleCodeChange = useCallback(function (code) {
    setGeneratedCode(code);
  }, []);

  function onFinished() {
    setIsRunning(false);
  }

  useEffect(() => {
    function handleResize() {
      setIsTooSmall(window.innerWidth < 1024);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleReset);
  }, []);

  if (isTooSmall) return <UnsupportedScreen />;

  return (
    <>
      <div id="app">
        <div id="header">
          <h1>Workshop | Algoritmer</h1>
          <div id="headerButtons">
            <button
              className="action-btn run-btn"
              onClick={handleRun}
              style={isRunning ? { cursor: "not-allowed " } : {}}
            >
              Kør Algoritme
            </button>
            <button
              className={`action-btn reset-btn`}
              disabled={isRunning}
              onClick={handleReset}
              style={isRunning ? { cursor: "not-allowed " } : {}}
            >
              Nulstil
            </button>
          </div>
          <p>
            Powered by{" "}
            <span className="text-[#6366f1] underline">
              <a href="https://ballebysoftware.dk/">BallebySoftware</a>
            </span>
          </p>
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
              onCodeChange={handleCodeChange}
            />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

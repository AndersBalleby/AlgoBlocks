import { useState } from "react";
import BlocklyWorkspace from "./BlocklyWorkspace";
import "./app.css";
import TestCase from "./components/TestCase";
import TestCaseTab from "./components/TestCaseTab";
import DescriptionTab from "./components/ProblemTab";

export default function App() {
  const [activeTab, setActiveTab] = useState("problemTab");

  return (
    <>
      <body>
        <div id="header">
          <h1>Workshop | Algoritmer</h1>
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
                <DescriptionTab />
              </div>

              <div
                className={`tab-panel ${activeTab === "solutionTab" ? "active" : ""}`}
                id="solutionTab"
              >
                <TestCaseTab />
              </div>
            </div>
          </div>

          <BlocklyWorkspace />
        </div>
      </body>
    </>
  );
}

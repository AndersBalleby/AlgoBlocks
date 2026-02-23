import { useState } from "react"
import BlocklyWorkspace from "./BlocklyWorkspace"
import './app.css'
import TestCase from "./components/TestCase";

export default function App() {
  const [activeTab, setActiveTab] = useState('problemTab');

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
  <body>
    <div id="header">
      <h1>Workshop | Algoritmer</h1>
    </div>

    <div id="pageContainer">
      <div id="leftPane">
        <div id="leftTabs">
          <button 
            className={`tab-btn ${activeTab === 'problemTab' ? 'active' : ''}`}
            onClick={() => setActiveTab('problemTab')}
            >
              Beskrivelse
          </button>
          
          <button
            className={`tab-btn ${activeTab === 'solutionTab' ? 'active' : ''}`}
            onClick={() => setActiveTab('solutionTab')}
          >
            Test Cases
          </button>
        </div>

        <div id="tabContent">
          {/* PROBLEM TAB */}
          <div className={`tab-panel ${activeTab === 'problemTab' ? 'active' : ''}`} id="problemTab">
            <section className="problem-section">
              <h3>Algoritme: Lineær Søgning</h3>
              <div className="section-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius justo eu risus pulvinar fermentum. Sed metus libero, maximus et mi pulvinar, aliquam consequat urna. Curabitur quis commodo tellus. Fusce eros arcu, rhoncus vel nibh quis, ornare aliquet tellus. Duis risus mauris, maximus a faucibus quis, sollicitudin ac nunc.
                </p>
              </div>
            </section>

            <section className="problem-section">
              <h3>Pseudokode</h3>
              <div id="pseudocodeContent">
                TODO: Opsæt pseudocode
              </div>
            </section>

            <section className="problem-section">
              <h3>Eksempler</h3>

            </section>
          </div>

          {/* TEST CASES TAB */}
          <div className={`tab-panel ${activeTab === 'solutionTab' ? 'active' : ''}`} id="solutionTab">
            <section className="problem-section">
              <h3>Test Cases</h3>
              <div className="section-box">
                <p>Skriv noget om Test Cases her</p>
              </div>
              <div className="mb-3">
                <div className="flex flex-col gap-[5px] mb-3" id="testPreviewList">
                  {testCases.map((testCase, index) => {
                    return (<TestCase key={index} id={index} array={testCase.array} target={testCase.target} expected={testCase.expected} status={"default"} isActive={false} onClick={() => {}} />)
                  })}
                </div>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-mono text-[0.82rem] min-h-[80px] transition-all duration-200 mt-1" id="testDetailPanel">
                <span className="text-slate-400 italic">
                  Klik på en test for at se detaljer
                </span>
              </div>
            </section>
          </div>

        </div>
      </div>

      <BlocklyWorkspace />
    </div>
  </body>
    </>
  )
}
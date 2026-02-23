import BlocklyWorkspace from "./BlocklyWorkspace"
import './app.css'

export default function App() {
  return (
    <>
  <body>
    <div id="header">
      <h1>Workshop | Algoritmer</h1>
    </div>

    <div id="pageContainer">
      <div id="leftPane">
        <div id="leftTabs">
          <button class="tab-btn active" data-tab="problemTab">Beskrivelse</button>
          <button class="tab-btn" data-tab="solutionTab" id="solutionTabBtn">Test Cases</button>
        </div>

        <div id="tabContent">
          <div class="tab-panel active" id="problemTab">
            <section class="problem-section">
              <h3>Algoritme: Lineær Søgning</h3>
              <div class="section-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius justo eu risus pulvinar fermentum. Sed metus libero, maximus et mi pulvinar, aliquam consequat urna. Curabitur quis commodo tellus. Fusce eros arcu, rhoncus vel nibh quis, ornare aliquet tellus. Duis risus mauris, maximus a faucibus quis, sollicitudin ac nunc.
                </p>
              </div>
            </section>

            <section class="problem-section">
              <h3>Pseudokode</h3>
              <div id="pseudocodeContent">
                TODO: Opsæt pseudocode
              </div>
            </section>

            <section class="problem-section">
              <h3>Eksempler</h3>

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

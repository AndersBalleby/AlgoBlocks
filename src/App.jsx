import BlocklyWorkspace from "./BlocklyWorkspace"
import { linearSearchToolbox } from "./toolbox";
import './app.css'

export default function App() {
  return (
    <>
      {/* Header */}
      <div id="header">
        <h1>Workshop | Algoritmer</h1>
      </div>

      <div id="pageContainer">
        <div id="leftPane">
          <div id="leftTabs">
            <button className="active">Beskrivelse</button>
            <button>Løsning</button>
          </div>

          <div id="tabContent">
            <div className="active" id="problemTab">
              <section id="problem-section">
                <h3>Algoritme: Lineær Søgning</h3>
                <div id="section-box">
                  <p>
                    Implementer algoritmen Lineær Søgning. Gennemgå elementerne i listen fra start til slut, indtil søgeværdien er fundet.
                    Du kan bruge Pseudokoden som reference til algoritmen. Når din algoritme er færdig, kan du afprøve den under Test Cases.
                  </p>
                </div>
              </section>

              <section id="problem-section">
                <h3>Pseudokode</h3>
                <div id="pseudocodeContent">
{`FUNKTION lineær_søgning(liste, værdi):
  FOR HVER indeks i fra 0 til længde af liste:
    HVIS element ved indeks i == værdi:
      Returner indeks i
  Returner -1`}
                </div>
              </section>

              <section id="problem-section">
                <h3>Test Cases</h3>
                <div id="section-box">
                  Tilføj test cases
                </div>
              </section>
            </div>
          </div>
        </div>
        
        <BlocklyWorkspace toolbox={linearSearchToolbox} />
      </div>
    </>
  )
}
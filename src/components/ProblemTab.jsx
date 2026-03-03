import Example from "./Example";
import Code from "./Code";
import PseudoSection from "./PseudoSection";

export default function ProblemTab() {
  const examples = [
    {
      array: [18, 7, 23, 3, 12],
      target: 7,
      output: 1,
      explanation: (
        <>
          I programmering tæller vi fra 0. Vi leder efter tallet 7 som ligger
          ved indeks 1 i listen. Derfor er svaret 1.
        </>
      ),
    },
    {
      array: [2, 10, 3, 6, 7],
      target: 500,
      output: -1,
      explanation: (
        <>
          Vi leder efter tallet 500. Vi kan se, at 500 er ikke i listen. Derfor
          er svaret -1.
        </>
      ),
    },
  ];

  return (
    <>
      <section className="problem-section">
        <h3>Algoritme: Lineær Søgning</h3>
        <div className="section-box mb-2">
          <p>
            Implementer algoritmen
            <Code>Lineær Søgning</Code> Gennemgå
            <Code highlighted={false}>elementerne</Code>i listen fra start til
            slut, indtil<Code highlighted={false}>søgeværdien</Code>er fundet.
            Benyt<Code highlighted={false}>Pseudokoden</Code>som reference til
            algoritmen. Når din algoritme er færdig, kan du afprøve den under
            fanen<Code>Test Cases</Code>
          </p>
        </div>

        <div
          className="mt-3 p-4 rounded-lg border"
          style={{ backgroundColor: "#f5f3ff", borderColor: "#c4b5fd" }}
        >
          <div
            className="text-base font-bold mb-2"
            style={{ color: "#7c3aed" }}
          >
            Din funktion skal hedde:
          </div>
          <code
            className="text-sm block mb-3 p-2 rounded"
            style={{
              backgroundColor: "#ede9fe",
              color: "#4c1d95",
              fontFamily: '"Fira Code", monospace',
            }}
          >
            lineærSøgning(liste, værdi)
          </code>
          <div
            className="flex flex-col gap-1.5 text-sm"
            style={{ color: "#6d28d9", fontFamily: "Inter, sans-serif" }}
          >
            <div>
              <span style={{ fontWeight: 800 }}>liste</span> — listen af tal du
              søger i
            </div>
            <div>
              <span style={{ fontWeight: 800 }}>værdi</span> — tallet du leder
              efter
            </div>
            <div>
              <span style={{ fontWeight: 800 }}>returner</span> — indekset hvis
              fundet, ellers -1
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Pseudokode</h3>
        <PseudoSection />
      </section>

      <section className="problem-section">
        <h3>Eksempler</h3>
        {examples.map(({ array, target, output, explanation }, index) => {
          return (
            <Example
              key={index}
              index={index}
              array={array}
              target={target}
              output={output}
              explanation={explanation}
            />
          );
        })}
      </section>

      <section className="problem-section">
        <h3>Tips</h3>
        <div className="flex flex-col gap-2">
          {[
            "Husk at din løkke skal starte fra indeks 0.",
            "Brug 'få element ved indeks' blokken til at hente et element fra listen.",
            "Hvis søgeværdien ikke findes i listen, skal du returnere -1 efter løkken.",
            "Brug == til at sammenligne elementet med søgeværdien.",
          ].map((tip, index) => (
            <div
              key={index}
              className="flex gap-2 items-start p-3 rounded-lg border text-sm"
              style={{
                backgroundColor: "#f0fdf4",
                borderColor: "#bbf7d0",
                color: "#166534",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span className="shrink-0 font-bold" style={{ color: "#16a34a" }}>
                💡
              </span>
              {tip}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

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
          I programmering tæller vi fra 0. Vi leder efter tallet
          7 som ligger ved indeks 1 i listen. Derfor er
          svaret 1.
        </>
      ),
    },
    {
      array: [2, 10, 3, 6, 7],
      target: 500,
      output: -1,
      explanation: (
        <>
          Vi leder efter tallet 500. Vi kan se, at 500
          er ikke i listen. Derfor er svaret -1.
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
              index={index}
              array={array}
              target={target}
              output={output}
              explanation={explanation}
            />
          );
        })}
      </section>
    </>
  );
}

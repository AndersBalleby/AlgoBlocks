import Example from "./Example";
import Code from "./Code";

export default function ProblemTab() {
  const examples = [
    {
      array: [18, 7, 23, 3, 12],
      target: 7,
      output: 1,
      explanation: (
        <>
          I programmering tæller vi fra<Code>0</Code>. Vi leder efter tallet
          <Code>7</Code> som ligger ved<Code>indeks 1</Code>i listen. Derfor er
          svaret<Code>1</Code>.
        </>
      ),
    },
    {
      array: [2, 10, 3, 6, 7],
      target: 500,
      output: -1,
      explanation: (
        <>
          Vi leder efter tallet<Code>500</Code>. Vi kan se, at<Code>500</Code>{" "}
          er ikke i listen. Derfor er svaret<Code>-1</Code>.
        </>
      ),
    },
  ];

  return (
    <>
      <section className="problem-section">
        <h3>Algoritme: Lineær Søgning</h3>
        <div className="section-box">
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
        <div id="pseudocodeContent">TODO: Opsæt pseudocode</div>
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

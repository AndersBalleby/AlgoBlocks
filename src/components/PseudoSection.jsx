function highlightPseudocode(code) {
  const keywords = ["FUNKTION", "FOR", "HVER", "HVIS", "ELLERS", "MENS", "RETURNER"];
  const variables = ["start", "slut", "midte", "indeks", "liste", "array", "værdi", "søgeværdi", "i"];

  return code
    .split("\n")
    .map((line) => {
      let highlighted = line;

      
      // Strings først
      highlighted = highlighted.replace(
        /"([^"]*)"/g,
        '<span class="ps-string">"$1"</span>',
      );

      // Keywords
      keywords.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, "g");
        highlighted = highlighted.replace(
          regex,
          `<span class="ps-keyword">${word}</span>`,
        );
      });

      // Numbers
      highlighted = highlighted.replace(
        /\b\d+\b/g,
        (match) => `<span class="ps-number">${match}</span>`,
      );

      // Variables
      variables.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, "g");
        highlighted = highlighted.replace(
          regex,
          `<span class="ps-variable">${word}</span>`,
        );
      });

      return highlighted;
    })
    .join("\n");
}

export default function PseudoSection() {
  return (
  <>
    <div 
    className="pseudocodeContent"
    dangerouslySetInnerHTML={{
      __html: highlightPseudocode(`FUNKTION linearSøgning(liste, værdi):
  FOR HVER indeks i fra 0 til længde af liste:
      HVIS element ved indeks i == værdi:
          RETURNER indeks i
  RETURNER -1`)
    }}>
    </div>
  </>
  );
}
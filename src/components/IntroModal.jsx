import { useState, useEffect } from "react";

export default function IntroModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("introModalSeen");
    if (!seen) setVisible(true);
  }, []);

  function handleClose() {
    localStorage.setItem("introModalSeen", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          padding: "3rem 2.5rem",
          borderRadius: "24px",
          maxWidth: "700px",
          width: "90%",
          maxHeight: "85vh",
          overflowY: "auto",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(102,126,234,0.1)",
          animation: "slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -3,
            borderRadius: "24px",
            padding: "3px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 800,
            margin: "0 0 1.5rem 0",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.5px",
            }}
          >
            Hej med dig!
          </span>{" "}
          👋
        </h2>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "#4a5568",
            margin: "1rem 0",
            textAlign: "center",
          }}
        >
          Din opgave er at bygge algoritmen <strong>Lineær Søgning</strong>.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0" }}>
          {[
            <>
              Kig igennem <strong>pseudo-koden</strong> (opskriften) i
              sidepanelet.
            </>,
            <>
              Forbind de korrekte <strong>kodeblokke</strong> så de passer med
              pseudo-koden.
            </>,
            <>
              Afprøv din <strong>algoritme</strong> ved at trykke{" "}
              <strong>"Kør Algoritme"</strong>.
            </>,
            <>
              Tjek dit <strong>resultat</strong> og vær en guide for dine{" "}
              <strong>kammerater</strong>.
            </>,
            <>
              Er du <strong>nysgerrig?</strong> Du kan tjekke den kode du
              genererer i test case sidepanelet!
            </>,
          ].map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "#2d3748",
                margin: "1rem 0",
                paddingLeft: "2rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  fontSize: "1.3rem",
                }}
              >
                ▷
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "2px solid #e2e8f0",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#64748b",
            marginBottom: "0.5rem",
          }}
        >
          Har du spørgsmål eller brug for hjælp?
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "#94a3b8",
            marginTop: "0.25rem",
            fontStyle: "italic",
            textAlign: "left",
          }}
        >
          Prøv først at spørge dine sidekammerater. <br />
          Hvis det ikke løser det, så kan du spørge Anders om hjælp!
        </p>

        <button
          onClick={handleClose}
          style={{
            display: "block",
            margin: "2rem auto 0",
            padding: "1.25rem 3rem",
            border: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            cursor: "pointer",
            borderRadius: "16px",
            fontSize: "1.2rem",
            fontWeight: 700,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            boxShadow:
              "0 8px 24px rgba(102,126,234,0.4), 0 4px 12px rgba(118,75,162,0.3)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
            e.currentTarget.style.boxShadow =
              "0 12px 32px rgba(102,126,234,0.5), 0 6px 16px rgba(118,75,162,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(102,126,234,0.4), 0 4px 12px rgba(118,75,162,0.3)";
          }}
        >
          Kom i gang
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

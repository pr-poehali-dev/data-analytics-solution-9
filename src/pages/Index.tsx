const Index = () => {
  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  // March 2026 starts on Sunday (day index 6)
  const firstDayOfWeek = 6; // Sunday = index 6 in Mon-Sun grid
  const totalDays = 31;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff0f5 0%, #fffde7 40%, #e3f2fd 100%)",
        fontFamily: "'Georgia', serif",
        color: "#111",
      }}
    >
      {/* Hero photo */}
      <div style={{ position: "relative", width: "100%", height: 320, overflow: "hidden" }}>
        <img
          src="https://cdn.poehali.dev/projects/154cc041-caf3-457f-a6d4-88b04187719a/files/e9105bda-51bd-408a-86e7-c3c7abd356ad.jpg"
          alt="День рождения"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.6rem, 5vw, 3rem)",
              fontWeight: "bold",
              color: "#111",
              textAlign: "center",
              textShadow: "0 2px 12px rgba(255,255,255,0.8)",
              padding: "0 16px",
            }}
          >
            Приглашаю вас на мой день рождения!
          </h1>
        </div>
      </div>

      {/* Calendar */}
      <div
        style={{
          maxWidth: 480,
          margin: "48px auto 0",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginBottom: 20,
            color: "#111",
            letterSpacing: 2,
          }}
        >
          МАРТ 2026
        </h2>

        {/* Day headers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 4 }}>
          {days.map((d) => (
            <div
              key={d}
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: "#555",
                padding: "4px 0",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar cells */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {cells.map((day, idx) => (
            <div
              key={idx}
              style={{
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                background: day === 26 ? "rgba(176,199,220,0.35)" : "transparent",
                position: "relative",
                fontSize: "0.9rem",
                fontWeight: day === 26 ? "bold" : "normal",
                color: "#111",
              }}
            >
              {day === 26 ? (
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                  <span style={{ fontSize: "1.1rem", color: "#7fa8c4" }}>♥</span>
                  <span style={{ fontSize: "0.85rem" }}>26</span>
                </span>
              ) : (
                day
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Address */}
      <div
        style={{
          maxWidth: 480,
          margin: "48px auto 0",
          padding: "24px 24px",
          background: "rgba(255,255,255,0.75)",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(180,200,220,0.18)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>📍</div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: 8, color: "#111" }}>
          Место празднования
        </h3>
        <p style={{ fontSize: "1rem", color: "#222", lineHeight: 1.7 }}>
          г. Тула, р-н Привокзальный<br />
          д. Дементеево, территория Поле-1, 176
        </p>
      </div>

      {/* Yandex Map */}
      <div
        style={{
          maxWidth: 480,
          margin: "32px auto 0",
          padding: "0 16px",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=37.6173&z=15&pt=37.6173,54.2013"
          title="Карта места"
          width="100%"
          height="320"
          frameBorder="0"
          style={{ borderRadius: 16, display: "block" }}
          allowFullScreen
        />
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <a
            href="https://yandex.ru/maps/-/CPRSiFmx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 4,
              padding: "8px 20px",
              background: "#b0c7dc",
              color: "#111",
              borderRadius: 24,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            Открыть на Яндекс Картах →
          </a>
        </div>
      </div>

      {/* Dress code */}
      <div
        style={{
          maxWidth: 480,
          margin: "40px auto 0",
          padding: "24px",
          background: "rgba(255,255,255,0.75)",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(180,200,220,0.18)",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: 12, color: "#111" }}>
          Дресс-код
        </h3>
        <div style={{ fontSize: "2.5rem", display: "flex", justifyContent: "center", gap: 16 }}>
          <span style={{ color: "#c8b49a" }}>♥</span>
          <span style={{ color: "#ffffff", WebkitTextStroke: "1.5px #ccc" }}>♥</span>
        </div>
        <p style={{ marginTop: 8, color: "#555", fontSize: "0.9rem" }}>бежевый · белый</p>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 16px 32px",
          marginTop: 48,
          color: "#111",
          fontSize: "1rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <span>26.03.2026 г.</span>
        <span style={{ color: "#7fa8c4", fontSize: "1.4rem" }}>♥</span>
      </footer>
    </div>
  );
};

export default Index;

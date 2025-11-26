import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import heroRoof from "./assets/hero-roof.jpg";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>
      {/* TOP BAR */}
      <header
        style={{
          width: "100%",
          background: "#e66a1f",
          color: "white",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 30,
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "20px" }}>Sekhon Roofing Ltd</h2>

        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: "14px",
            flexWrap: "wrap",
            marginTop: "5px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Phone size={16} /> 07415 293 877
          </span>

          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Mail size={16} /> sekhonroofinglimited@gmail.com
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "35px 5vw",
          gap: "20px",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* TEXT LEFT */}
        <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "30px",
              marginBottom: "10px",
              lineHeight: 1.25,
            }}
          >
            Reliable Roofing Services You Can Trust
          </motion.h1>

          <p
            style={{
              marginBottom: "18px",
              fontSize: "16px",
              color: "#555",
            }}
          >
            Sekhon Roofing Ltd provides expert installation, repair and
            maintenance for pitched and flat roofs, gutters, fascias and all
            timber work. Professional service across the local area.
          </p>

          <button
            style={{
              background: "#e66a1f",
              color: "white",
              padding: "14px 22px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
              width: "100%",
              maxWidth: "230px",
            }}
          >
            Request a Free Quote
          </button>
        </div>

        {/* IMAGE RIGHT */}
        <div style={{ flex: "1 1 360px", minWidth: "280px" }}>
          <img
            src={heroRoof}
            alt="Recent roofing project"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "35px 20px", maxWidth: 1100, margin: "auto" }}>
        <h2
          style={{
            fontSize: "26px",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Our Roofing Services
        </h2>

        <div
          style={{
            display: "grid",
            gap: "15px",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {[
            "New Roofs",
            "All Timber Work",
            "Flat & Slate Roofs",
            "Gutters / Fascias",
            "Repairs",
          ].map((s) => (
            <div
              key={s}
              style={{
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "white",
                fontSize: "16px",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>Get in Touch</h2>

        <div
          style={{
            fontSize: "17px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div>
            <Phone /> 07415 293 877
          </div>
          <div>
            <Mail /> sekhonroofinglimited@gmail.com
          </div>
        </div>

        <button
          style={{
            background: "#e66a1f",
            color: "white",
            padding: "12px 18px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Request a Quote
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          color: "#777",
          background: "#fff",
        }}
      >
        © {new Date().getFullYear()} Sekhon Roofing Ltd. All rights reserved.
      </footer>
    </div>
  );
}

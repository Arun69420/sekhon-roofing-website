import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import heroRoof from "./assets/hero-roof.jpg";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>

      {/* ORANGE TOP BAR */}
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
        }}
      >
        <h2 style={{ margin: 0 }}>Sekhon Roofing Ltd</h2>
        <div style={{ display: "flex", gap: "25px", fontSize: "15px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Phone size={16} /> 07415 293 877
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Mail size={16} /> sekhonroofinglimited@gmail.com
          </span>
        </div>
      </header>

      {/* HERO SECTION – FULL WIDTH */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "40px 6vw",
          gap: "30px",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        {/* TEXT LEFT */}
        <div style={{ flex: "1 1 280px", minWidth: 260 }}>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "34px", marginBottom: "10px" }}
          >
            Reliable Roofing Services You Can Trust
          </motion.h1>

          <p
            style={{
              marginBottom: "18px",
              fontSize: "15px",
              color: "#555",
              maxWidth: 480,
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
              padding: "12px 22px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Request a Free Quote
          </button>
        </div>

        {/* IMAGE RIGHT – FULL FIT, NOT CROPPED */}
        <div style={{ flex: "1 1 360px", minWidth: 300 }}>
          <img
            src={heroRoof}
            alt="Recent roofing project"
            style={{
              width: "100%",
              borderRadius: "14px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: 30 }}>
          Our Roofing Services
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                borderRadius: 16,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: 20 }}>Get in Touch</h2>

        <div
          style={{
            fontSize: "18px",
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
            padding: "12px 20px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: 20,
          }}
        >
          Request a Quote
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 14,
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Sekhon Roofing Ltd. All rights reserved.
      </footer>
    </div>
  );
}

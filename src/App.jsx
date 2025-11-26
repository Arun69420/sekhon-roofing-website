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

          {/* BUTTON THAT SCROLLS TO THE FORM */}
          <button
            onClick={() => {
              document.getElementById("quote-form").scrollIntoView({
                behavior: "smooth",
              });
            }}
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
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >

          {/* NEW ROOFS */}
          <div
            style={{
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>New Roofs</h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Complete new roof installations for all property types, built to a high professional standard.
            </p>
          </div>

          {/* ALL TIMBER WORK */}
          <div
            style={{
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>All Timber Work</h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Structural roofing timber, joists, battens and all essential carpentry work professionally handled.
            </p>
          </div>

          {/* FLAT/SLATE */}
          <div
            style={{
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>Flat / Slate Roofs</h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Expert installation and repairs for flat, slate and felt roofing systems for long-lasting performance.
            </p>
          </div>

          {/* GUTTERS */}
          <div
            style={{
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>Gutters / Fascias</h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Professional replacement and repair of gutters, fascias and soffits to ensure proper drainage.
            </p>
          </div>

          {/* REPAIRS */}
          <div
            style={{
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>Repairs</h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Fast, reliable fixes for leaks, broken tiles, storm damage and general roofing issues.
            </p>
          </div>

        </div>
      </section>

      {/* QUOTE FORM */}
      <section
        id="quote-form"
        style={{
          padding: "40px 20px",
          maxWidth: "600px",
          margin: "50px auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "26px",
            color: "#222",
          }}
        >
          Request a Free Quote
        </h2>

        <form
          action="https://formsubmit.co/sekhonroofinglimited@gmail.com"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Describe your roofing issue"
            rows="4"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              background: "#e66a1f",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Send Request
          </button>
        </form>
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

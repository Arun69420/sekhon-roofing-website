import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import React from "react";
import heroRoof from "./assets/hero-roof.jpg";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>

      {/* TOP ORANGE BAR */}
      <header
        style={{
          width: "100%",
          background: "#e66a1f",
          color: "white",
          padding: "15px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 30,
        }}
      >
        <h2 style={{ margin: 0 }}>Sekhon Roofing Ltd</h2>

        <div style={{ display: "flex", gap: "25px", fontSize: "15px", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Phone size={16} /> 07415 293 877
          </span>

          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Mail size={16} /> sekhonroofinglimited@gmail.com
          </span>
        </div>
      </header>

      {/* FULL IMAGE HERO SECTION */}
      <section
        style={{
          width: "100%",
          height: "380px",
          backgroundImage: `url(${heroRoof})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Optional dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
          }}
        ></div>

        {/* Text over the image */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "40px 25px",
            maxWidth: "700px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "42px",
              color: "white",
              fontWeight: "bold",
              marginBottom: "10px",
              textShadow: "0px 0px 6px rgba(0,0,0,0.4)",
            }}
          >
            Reliable Roofing Services You Can Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              maxWidth: "520px",
              fontSize: "18px",
              color: "white",
              marginBottom: "18px",
              textShadow: "0px 0px 6px rgba(0,0,0,0.4)",
            }}
          >
            Expert installation and repair of pitched and flat roofs, guttering,
            fascias and all timber work. Proudly serving the local area.
          </motion.p>

          <button
            style={{
              background: "#e66a1f",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Request a Free Quote
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "50px 25px", maxWidth: "1100px", margin: "auto" }}>
        <h2
          style={{
            fontSize: "30px",
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
                padding: "20px",
                background: "white",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Get in Touch</h2>

        <div style={{ fontSize: "18px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Phone /> 07415 293 877
          </span>

          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Mail /> sekhonroofinglimited@gmail.com
          </span>
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
            marginTop: "20px",
          }}
        >
          Request a Quote
        </button>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          color: "#777",
        }}

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import heroRoof from './assets/hero-roof.jpg';

const ORANGE = '#e66a1f';

function Card({ title, text }) {
  return (
    <div
      style={{
        borderRadius: '16px',
        padding: '18px 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        backgroundColor: 'white',
        textAlign: 'left',
      }}
    >
      <h3 style={{ margin: '0 0 6px', fontSize: '18px' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{text}</p>
    </div>
  );
}

function Button({ children }) {
  return (
    <button
      style={{
        padding: '10px 20px',
        borderRadius: '999px',
        border: 'none',
        backgroundColor: ORANGE,
        color: 'white',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#222', backgroundColor: '#fafafa' }}>
      {/* Top bar */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 6vw',
          borderBottom: '1px solid #eee',
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: ORANGE }}>
          Sekhon Roofing Ltd
        </div>
        <div style={{ display: 'flex', gap: '18px', fontSize: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Phone size={16} /> 07415 293 877
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Mail size={16} /> sekhonroofinglimited@gmail.com
          </span>
        </div>
      </header>

      {/* Hero band with image */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '40px 6vw 30px',
          gap: '30px',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
        }}
      >
        {/* Text side */}
        <div style={{ flex: '1 1 280px', minWidth: 260 }}>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '34px',
              marginBottom: '10px',
            }}
          >
            Reliable Roofing Services You Can Trust
          </motion.h1>
          <p style={{ marginBottom: '18px', fontSize: '15px', color: '#555', maxWidth: 480 }}>
            Sekhon Roofing Ltd provides expert installation, repair and maintenance for pitched and flat roofs,
            gutters, fascias and all timber work. Professional service across the local area.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button>Request a Free Quote</Button>
            <span style={{ fontSize: '13px', color: '#666' }}>Fast response · Fully insured</span>
          </div>
        </div>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: '1 1 260px',
            minWidth: 260,
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            position: 'relative',
            height: 230,
          }}
        >
          <img
            src={heroRoof}
            alt="Completed roofing project"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.1) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 14,
              left: 16,
              color: 'white',
              fontSize: 14,
            }}
          >
            <div style={{ fontWeight: 600 }}>Recent project</div>
            <div>High-performance slate roof with timber detailing</div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section style={{ padding: '40px 6vw', backgroundColor: '#fafafa' }}>
        <h2
          style={{
            fontSize: '26px',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Our Roofing Services
        </h2>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '26px',
            fontSize: '14px',
            color: '#666',
          }}
        >
          From complete re-roofs to small repairs, we handle every job with care and attention to detail.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '18px',
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          <Card
            title="New Roofs"
            text="High quality tiled and slate roofs installed to the highest standards, built to last for decades."
          />
          <Card
            title="All Timber Work"
            text="Expert timber structures and supports, including rafters, joists and bespoke carpentry."
          />
          <Card
            title="Flat & Slate Roofs"
            text="Modern flat roofing solutions and traditional slate finishes, tailored to your property."
          />
          <Card
            title="Gutters & Fascias"
            text="Supply and fitting of gutters, fascias and soffits to protect your home from the elements."
          />
          <Card
            title="Repairs & Maintenance"
            text="Fast, reliable repairs to leaks, broken tiles, storm damage and general roof maintenance."
          />
        </div>
      </section>

      {/* Contact strip */}
      <section
        style={{
          padding: '26px 6vw',
          backgroundColor: ORANGE,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '22px', margin: '0 0 8px' }}>Ready to discuss your roofing project?</h2>
        <p style={{ margin: '0 0 16px', fontSize: '14px' }}>
          Call us today or send an email and we&apos;ll get back to you as soon as possible.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '15px',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Phone /> 07415 293 877
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mail /> sekhonroofinglimited@gmail.com
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '16px',
          fontSize: '13px',
          color: '#aaa',
          backgroundColor: '#111',
        }}
      >
        © {new Date().getFullYear()} Sekhon Roofing Ltd. All rights reserved.
      </footer>
    </div>
  );
}

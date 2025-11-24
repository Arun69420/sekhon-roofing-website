import { motion } from 'framer-motion'; import { Phone, Mail } from 'lucide-react'; import React from 'react';

function Card({ children }) { return <div style={{borderRadius:'16px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',padding:'20px',textAlign:'center'}}>{children}</div>; }
function Button({ children }) { return <button style={{background:'#e66a1f',color:'white',padding:'12px 20px',borderRadius:'12px',border:'none',cursor:'pointer',fontSize:'16px',marginTop:'20px'}}>{children}</button>; }

export default function App() {
  return (
    <div style={{fontFamily:'Arial',color:'#222'}}>
      <section style={{background:'#e66a1f',color:'white',padding:'60px 20px',textAlign:'center'}}>
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{fontSize:'36px',fontWeight:'bold'}}>Sekhon Roofing Ltd</motion.h1>
        <p style={{maxWidth:'600px',margin:'20px auto',fontSize:'18px'}}>Professional roofing services you can trust — New Roofs, Timber Work, Flat & Slate Roofs, Gutters, Fascias, Repairs.</p>
      </section>

      <section style={{padding:'40px 20px',maxWidth:'1000px',margin:'auto'}}>
        <h2 style={{fontSize:'28px',textAlign:'center',marginBottom:'30px'}}>Our Services</h2>
        <div style={{display:'grid',gap:'20px',gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))'}}>
          {['New Roofs','All Timber Work','Flat / Slate Roofs','Gutters / Fascias','Repairs'].map(s => <Card key={s}>{s}</Card>)}
        </div>
      </section>

      <section style={{background:'#f5f5f5',padding:'40px 20px',textAlign:'center'}}>
        <h2 style={{fontSize:'28px',marginBottom:'20px'}}>Get in Touch</h2>
        <div style={{fontSize:'18px',display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
          <div><Phone /> 07415 293 877</div>
          <div><Mail /> sekhonroofinglimited@gmail.com</div>
        </div>
        <Button>Request a Quote</Button>
      </section>

      <footer style={{textAlign:'center',padding:'20px',fontSize:'14px',color:'#777'}}>© {new Date().getFullYear()} Sekhon Roofing Ltd. All rights reserved.</footer>
    </div>
  );
}
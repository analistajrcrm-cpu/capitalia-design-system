import React from 'react';

/** Lámina de beneficios: campo plum, título centrado y arcos numerados. */
export function BeneficiosSlide({title='Beneficios',items=[]}){
  return <div style={{position:'relative',width:1280,height:720,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <h2 style={{position:'absolute',left:0,right:0,top:72,textAlign:'center',margin:0,
      font:'var(--fw-regular) 40px/1.2 var(--font-sans)',color:'var(--bone-200)'}}>{title}</h2>
    <div style={{position:'absolute',left:0,right:0,top:170,bottom:60}}>
      {items.map((it,i)=>{
        const top=i*150;
        return <div key={i} style={{position:'absolute',left:0,right:0,top}}>
          <div style={{position:'absolute',left:'-22%',right:'-22%',top:0,height:300,
            borderTop:'1px solid var(--bone-a40)',borderRadius:'50% 50% 0 0 / 100% 100% 0 0'}}/>
          <div style={{position:'relative',width:44,height:44,margin:'-22px auto 0',borderRadius:'999px',
            border:'1px solid var(--bone-a40)',background:'var(--plum-900)',display:'grid',placeItems:'center',
            font:'var(--fw-regular) 18px/1 var(--font-sans)',color:'var(--bone-200)'}}>{i+1}</div>
          <p style={{margin:'18px auto 0',maxWidth:'42ch',textAlign:'center',
            font:'var(--fw-regular) 16px/1.5 var(--font-sans)',color:'var(--bone-300)'}}>{it}</p>
        </div>;})}
    </div>
  </div>;
}

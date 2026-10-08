import React from 'react';

/** Lámina de detalle: foto en pétalo con placa naranja, lista con línea de tiempo y párrafo. */
export function DetalleSlide({eyebrow='Amenidades',items=[],body,stat,statLabel,photo,assetBase='../assets'}){
  return <div style={{position:'relative',width:1280,height:720,overflow:'hidden',background:'var(--bone-200)',fontFamily:'var(--font-sans)'}}>
    <div style={{position:'absolute',left:96,top:88,width:420,height:544,overflow:'hidden',borderRadius:'var(--shape-petal-photo)'}}>
      <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    </div>
    {stat&&<div style={{position:'absolute',left:330,top:520,background:'var(--orange-500)',color:'var(--white)',
      borderRadius:'var(--radius-petal)',padding:'22px 34px',textAlign:'center'}}>
      <div style={{font:'var(--fw-bold) 34px/1 var(--font-sans)',letterSpacing:'var(--ls-display)'}}>{stat}</div>
      {statLabel&&<div style={{marginTop:4,font:'var(--fw-regular) 14px/1.2 var(--font-sans)'}}>{statLabel}</div>}
    </div>}
    <div style={{position:'absolute',left:640,top:96,right:96}}>
      <div style={{font:'var(--type-eyebrow)',fontSize:14,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--plum-700)'}}>{eyebrow}</div>
      <div style={{marginTop:28,position:'relative'}}>
        {items.map((it,i)=><div key={i} style={{display:'flex',gap:20,alignItems:'flex-start',paddingBottom:i===items.length-1?0:28,position:'relative'}}>
          <span style={{width:14,height:14,borderRadius:'999px',border:'1px solid var(--plum-900)',flex:'0 0 auto',marginTop:5,background:'var(--bone-200)',zIndex:1}}/>
          {i!==items.length-1&&<span style={{position:'absolute',left:6,top:19,bottom:0,width:1,background:'var(--plum-900)',opacity:.35}}/>}
          <span style={{font:'var(--fw-regular) 20px/1.35 var(--font-sans)',color:'var(--plum-900)'}}>{it}</span>
        </div>)}
      </div>
      {body&&<p style={{marginTop:48,font:'var(--fw-regular) 16px/1.5 var(--font-sans)',color:'var(--plum-800)',maxWidth:'46ch'}}>{body}</p>}
    </div>
  </div>;
}

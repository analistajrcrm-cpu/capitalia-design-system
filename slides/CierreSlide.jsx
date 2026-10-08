import React from 'react';

/** Lámina de cierre: render a sangre con scrim plum, lockup, oferta y cápsula de URL. */
export function CierreSlide({headline=['Si se vive,','SE VENDE'],label='Mensualidades desde',amount='$2,900',unit='mxn',note,photo,url='capitalia.mx',assetBase='../assets'}){
  return <div style={{position:'relative',width:1280,height:720,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(49,30,52,.92) 0%,rgba(49,30,52,.72) 46%,rgba(49,30,52,.15) 100%)'}}/>
    <img src={assetBase+'/logo/lockup-horizontal-bone.png'} alt="Capitalia" style={{position:'absolute',left:80,top:64,height:32}}/>
    <h2 style={{position:'absolute',left:80,top:220,margin:0,font:'var(--fw-bold) 76px/1.02 var(--font-sans)',
      letterSpacing:'var(--ls-display)',color:'var(--bone-200)'}}>
      {headline.map((l,i)=><span key={i} style={{display:'block',color:i?'var(--orange-500)':undefined}}>{l}</span>)}</h2>
    <div style={{position:'absolute',left:80,bottom:120}}>
      <div style={{font:'var(--fw-bold) 18px/1.3 var(--font-sans)',color:'var(--bone-200)'}}>{label}</div>
      <div style={{display:'flex',alignItems:'baseline',gap:8}}>
        <span style={{font:'var(--fw-bold) 56px/1 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--orange-500)'}}>{amount}</span>
        <span style={{font:'var(--fw-regular) 26px/1 var(--font-sans)',color:'var(--bone-200)'}}>{unit}</span>
      </div>
      {note&&<div style={{marginTop:10,font:'var(--fw-regular) 16px/1.4 var(--font-sans)',color:'var(--bone-300)'}}>{note}</div>}
    </div>
    <span style={{position:'absolute',left:80,bottom:56,background:'var(--bone-200)',color:'var(--plum-900)',
      font:'var(--fw-medium) 16px/1 var(--font-sans)',padding:'9px 18px',borderRadius:'var(--radius-petal)'}}>{url}</span>
  </div>;
}

import React from 'react';

/** Lámina de etapa: campo naranja, cápsula ETAPA, wordmark de submarca y banda de render en arco. */
export function EtapaSlide({stage='Etapa 1',brand='RECOLETA',title=['Recoleta, donde','la vida inicia'],body,photo,assetBase='../assets'}){
  const letters=brand.split('');
  return <div style={{position:'relative',width:1280,height:720,overflow:'hidden',background:'var(--orange-500)',fontFamily:'var(--font-sans)'}}>
    <div style={{position:'absolute',right:-160,top:-220,width:620,height:620,border:'1px solid rgba(255,255,255,.25)',borderRadius:'999px'}}/>
    <span style={{position:'absolute',left:80,top:64,background:'var(--bone-200)',color:'var(--plum-900)',
      font:'var(--fw-medium) 18px/1 var(--font-sans)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',
      padding:'11px 22px',borderRadius:'var(--radius-petal)'}}>{stage}</span>
    <div style={{position:'absolute',left:80,top:152,display:'flex',alignItems:'center',gap:2}}>
      {letters.map((ch,i)=> ch==='C'
        ? <img key={i} src={assetBase+'/logo/mark-bone.png'} alt="C" style={{height:38,margin:'0 3px'}}/>
        : <span key={i} style={{font:'var(--fw-bold) 44px/1 var(--font-sans)',letterSpacing:'.04em',color:'var(--bone-200)'}}>{ch}</span>)}
    </div>
    <h2 style={{position:'absolute',left:80,top:228,width:460,margin:0,font:'var(--fw-regular) 40px/1.2 var(--font-sans)',color:'var(--bone-200)'}}>
      {title.map((l,i)=><span key={i} style={{display:'block'}}>{l}</span>)}</h2>
    {body&&<p style={{position:'absolute',right:80,top:152,width:320,margin:0,font:'var(--fw-regular) 16px/1.45 var(--font-sans)',color:'var(--bone-200)'}}>{body}</p>}
    <div style={{position:'absolute',left:0,right:0,bottom:0,height:300,overflow:'hidden',borderRadius:'240px 240px 0 0'}}>
      <img src={photo||assetBase+'/img/plaza-recoleta.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    </div>
  </div>;
}

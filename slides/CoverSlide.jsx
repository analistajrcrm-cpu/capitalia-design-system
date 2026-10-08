import React from 'react';

/** Portada: panel plum, borde en arco, pétalos naranjas en la costura, render a sangre. */
export function CoverSlide({eyebrow,title=['Una ciudad','no solo crece:','se planea'],lead,photo,assetBase='../assets',url='capitalia.mx'}){
  return <div style={{position:'relative',width:1280,height:720,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{position:'absolute',right:0,top:0,width:'56%',height:'100%',objectFit:'cover'}}/>
    <img src={assetBase+'/logo/mark-orange.png'} alt="" style={{position:'absolute',left:'34%',top:104,height:520}}/>
    <div style={{position:'absolute',left:0,top:0,bottom:0,width:'50%',background:'var(--plum-900)',borderRadius:'0 999px 999px 0'}}/>
    <div style={{position:'absolute',left:80,top:96,width:520}}>
      {eyebrow&&<div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--bone-500)',marginBottom:20}}>{eyebrow}</div>}
      <h1 style={{font:'var(--fw-bold) 68px/1.05 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--bone-200)',margin:0}}>
        {title.map((l,i)=><span key={i} style={{display:'block'}}>{l}</span>)}</h1>
    </div>
    {lead&&<p style={{position:'absolute',left:80,bottom:96,width:400,font:'var(--fw-regular) 20px/1.5 var(--font-sans)',color:'var(--bone-300)',margin:0}}>{lead}</p>}
    <img src={assetBase+'/logo/lockup-horizontal-bone.png'} alt="Capitalia" style={{position:'absolute',right:64,bottom:56,height:34}}/>
    <span style={{position:'absolute',right:64,top:56,background:'var(--bone-200)',color:'var(--plum-900)',
      font:'var(--fw-medium) 18px/1 var(--font-sans)',padding:'10px 20px',borderRadius:'var(--radius-petal)'}}>{url}</span>
  </div>;
}

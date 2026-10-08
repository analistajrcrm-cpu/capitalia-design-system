import React from 'react';

/** Post 2 — render desenfocado, copy centrado con regla vertical. (sources/06-social.png, centro) */
export function PostFoto({title='Una ciudad no solo crece:',accent='SE PLANEA',body='La plusvalía no nace solo del tiempo. Nace de la vida que un lugar es capaz de generar',photo,url='capitalia.mx',assetBase='../../assets'}){
  return <div style={{position:'relative',width:1080,height:1080,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:'blur(9px) saturate(1.05)',transform:'scale(1.08)'}}/>
    <div style={{position:'absolute',inset:0,background:'rgba(49,30,52,.22)'}}/>
    <img src={assetBase+'/logo/wordmark-bone.png'} alt="Capitalia" style={{position:'absolute',left:'50%',top:86,transform:'translateX(-50%)',height:44}}/>
    <div style={{position:'absolute',left:110,right:110,top:340,textAlign:'center'}}>
      <div style={{font:'var(--fw-regular) 46px/1.24 var(--font-sans)',color:'var(--white)'}}>{title} <span style={{fontWeight:'var(--fw-bold)'}}>{accent}</span></div>
      <div style={{width:1,height:120,margin:'52px auto',background:'rgba(255,255,255,.85)'}}/>
      <p style={{margin:'0 auto',maxWidth:'34ch',font:'var(--fw-regular) 26px/1.45 var(--font-sans)',color:'var(--white)'}}>{body}</p>
    </div>
    <span style={{position:'absolute',left:'50%',bottom:92,transform:'translateX(-50%)',background:'var(--bone-200)',color:'var(--plum-900)',
      font:'var(--fw-medium) 26px/1 var(--font-sans)',padding:'16px 30px',borderRadius:'var(--radius-petal)'}}>{url}</span>
  </div>;
}

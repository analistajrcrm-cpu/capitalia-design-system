import React from 'react';

/** Post 1 — campo plum, foto en círculo, oferta y cápsula de URL. (sources/06-social.png, izquierda) */
export function PostPlum({lead='Una ciudad planeada no solo se construye;',accent='SE VIVE',label='Mensualidades desde',amount='$2,900',unit='mxn',photo,url='capitalia.mx',assetBase='../../assets'}){
  return <div style={{position:'relative',width:1080,height:1080,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <div style={{position:'absolute',right:-120,top:0,width:820,height:1080,overflow:'hidden',borderRadius:'50% 0 0 50%'}}>
      <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    </div>
    <img src={assetBase+'/logo/wordmark-bone.png'} alt="Capitalia" style={{position:'absolute',left:72,top:72,height:44}}/>
    <div style={{position:'absolute',left:72,top:190,width:420}}>
      <div style={{font:'var(--fw-bold) 46px/1.12 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--bone-200)'}}>{lead}</div>
      <div style={{marginTop:8,font:'var(--fw-bold) 60px/1 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--orange-500)'}}>{accent}</div>
    </div>
    <div style={{position:'absolute',left:72,bottom:230}}>
      <div style={{font:'var(--fw-bold) 26px/1.3 var(--font-sans)',color:'var(--bone-200)'}}>{label}</div>
      <div style={{display:'flex',alignItems:'baseline',gap:10}}>
        <span style={{font:'var(--fw-bold) 76px/1 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--orange-500)'}}>{amount}</span>
        <span style={{font:'var(--fw-regular) 40px/1 var(--font-sans)',color:'var(--bone-200)'}}>{unit}</span>
      </div>
    </div>
    <span style={{position:'absolute',left:72,bottom:110,background:'var(--bone-200)',color:'var(--plum-900)',
      font:'var(--fw-medium) 26px/1 var(--font-sans)',padding:'16px 30px',borderRadius:'var(--radius-petal)'}}>{url}</span>
  </div>;
}

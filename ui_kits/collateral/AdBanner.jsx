import React from 'react';

/** Anuncio horizontal: panel plum en arco, cúmulo de pétalos en la costura, render a sangre. (sources/04-ad.png) */
export function AdBanner({title=['Una ciudad','no solo crece:','se planea'],lead='Una ciudad planeada no solo se construye; se vive, se recorre y se convierte en comunidad.',photo,url='capitalia.mx',assetBase='../../assets'}){
  return <div style={{position:'relative',width:1584,height:772,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{position:'absolute',right:0,top:0,width:'52%',height:'100%',objectFit:'cover'}}/>
    <img src={assetBase+'/logo/mark-orange.png'} alt="" style={{position:'absolute',left:'36%',top:92,height:580}}/>
    <div style={{position:'absolute',left:0,top:0,bottom:0,width:'46%',background:'var(--plum-900)',borderRadius:'0 999px 999px 0'}}/>
    <h1 style={{position:'absolute',left:40,top:52,margin:0,font:'var(--fw-bold) 46px/1.14 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--bone-200)'}}>
      {title.map((l,i)=><span key={i} style={{display:'block'}}>{l}</span>)}</h1>
    <p style={{position:'absolute',left:40,bottom:56,width:360,margin:0,font:'var(--fw-regular) 19px/1.45 var(--font-sans)',color:'var(--bone-300)'}}>{lead}</p>
    <div style={{position:'absolute',right:48,top:34,textAlign:'right',font:'var(--fw-regular) 22px/1.35 var(--font-sans)',color:'var(--white)'}}>
      Conoce más en:<br/><span style={{fontWeight:'var(--fw-bold)'}}>{url.split('.')[0]}</span>.{url.split('.').slice(1).join('.')}
    </div>
    <img src={assetBase+'/logo/lockup-horizontal-bone.png'} alt="Capitalia" style={{position:'absolute',right:48,bottom:44,height:40}}/>
  </div>;
}

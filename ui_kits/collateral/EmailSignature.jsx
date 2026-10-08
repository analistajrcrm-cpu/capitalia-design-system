import React from 'react';

/** Firma de correo: banda plum con retrato y símbolo, banda naranja con datos, cápsula bone con el dominio. (sources/05-signature.png) */
export function EmailSignature({name=['Juan','Pérez'],role='Mánager de Ventas',email='juanperez@capitalia.mx',phone='999 315 2501',portrait,url='capitalia.mx',assetBase='../../assets'}){
  return <div style={{width:1536,fontFamily:'var(--font-sans)'}}>
    <div style={{position:'relative',height:248,background:'var(--plum-900)',overflow:'hidden'}}>
      <img src={portrait||assetBase+'/img/retrato-ventas.png'} alt="" style={{position:'absolute',left:38,top:42,width:168,height:152,objectFit:'cover'}}/>
      <div style={{position:'absolute',left:250,top:34,font:'var(--fw-light) 62px/1.08 var(--font-sans)',color:'var(--bone-200)'}}>
        {name.map((n,i)=><span key={i} style={{display:'block'}}>{n}</span>)}</div>
      <img src={assetBase+'/logo/mark-bone.png'} alt="" style={{position:'absolute',left:620,top:-4,height:250}}/>
      <div style={{position:'absolute',left:1070,top:56}}>
        <span aria-hidden="true" style={{font:'var(--fw-light) 46px/1 var(--font-sans)',color:'var(--bone-200)'}}>{'\u2198'}</span>
        <div style={{marginTop:14,display:'inline-block',background:'var(--bone-200)',color:'var(--plum-900)',
          font:'var(--fw-regular) 30px/1 var(--font-sans)',padding:'10px 16px'}}>{role}</div>
      </div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1070px 1fr',height:92}}>
      <div style={{background:'var(--orange-500)',display:'flex',gap:96,alignItems:'center',padding:'0 38px',color:'var(--white)'}}>
        <div><div style={{font:'var(--fw-regular) 20px/1.3 var(--font-sans)'}}>Email</div>
          <div style={{font:'var(--fw-regular) 22px/1.3 var(--font-sans)'}}>{email}</div></div>
        <div><div style={{font:'var(--fw-regular) 20px/1.3 var(--font-sans)'}}>Celular</div>
          <div style={{font:'var(--fw-regular) 22px/1.3 var(--font-sans)'}}>{phone}</div></div>
      </div>
      <div style={{background:'var(--bone-100)',display:'grid',placeItems:'center',
        font:'var(--fw-regular) 26px/1 var(--font-sans)',color:'var(--plum-900)'}}>{url}</div>
    </div>
  </div>;
}

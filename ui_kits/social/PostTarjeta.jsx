import React from 'react';

/** Post 3 — render a sangre con tarjeta crema encima: titular, foto en pétalo y oferta. (sources/06-social.png, derecha) */
export function PostTarjeta({head='Si se vive,',accent='SE VENDE',url='capitalia.mx',amount='$2,900',amountPre='Desde',amountPost='al mes',note='Lotes desde 140 m²',delivery='Entrega Julio 2030',photo,cardPhoto,assetBase='../../assets'}){
  return <div style={{position:'relative',width:1080,height:1080,overflow:'hidden',background:'var(--plum-900)',fontFamily:'var(--font-sans)'}}>
    <img src={photo||assetBase+'/img/parque-render.png'} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
    <img src={assetBase+'/logo/wordmark-bone.png'} alt="Capitalia" style={{position:'absolute',left:'50%',top:80,transform:'translateX(-50%)',height:44}}/>
    <div style={{position:'absolute',left:170,right:170,top:190,bottom:150,background:'var(--bone-100)',padding:'44px 40px',textAlign:'center'}}>
      <div style={{font:'var(--fw-regular) 42px/1.15 var(--font-sans)',color:'var(--plum-900)'}}>{head}</div>
      <div style={{font:'var(--fw-bold) 52px/1.05 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--plum-900)'}}>{accent}</div>
      <div style={{marginTop:10,font:'var(--fw-medium) 22px/1 var(--font-sans)',color:'var(--plum-700)'}}>{url}</div>
      <div style={{margin:'30px auto 0',width:400,height:300,overflow:'hidden',borderRadius:'50%'}}>
        <img src={cardPhoto||assetBase+'/img/plaza-recoleta.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>
      <div style={{marginTop:34,font:'var(--fw-bold) 24px/1.2 var(--font-sans)',color:'var(--plum-900)'}}>{amountPre}</div>
      <div style={{display:'flex',alignItems:'baseline',gap:8,justifyContent:'center'}}>
        <span style={{font:'var(--fw-bold) 62px/1 var(--font-sans)',letterSpacing:'var(--ls-display)',color:'var(--orange-500)'}}>{amount}</span>
        <span style={{font:'var(--fw-bold) 28px/1 var(--font-sans)',color:'var(--plum-900)'}}>{amountPost}</span>
      </div>
      <div style={{marginTop:8,font:'var(--fw-bold) 24px/1.2 var(--font-sans)',color:'var(--plum-900)'}}>Lotes desde <span style={{color:'var(--orange-500)'}}>{note.replace('Lotes desde ','')}</span></div>
    </div>
    <div style={{position:'absolute',left:0,right:0,bottom:78,textAlign:'center',font:'var(--fw-regular) 26px/1 var(--font-sans)',color:'var(--white)'}}>
      Entrega <span style={{fontWeight:'var(--fw-bold)'}}>{delivery.replace('Entrega ','')}</span></div>
  </div>;
}

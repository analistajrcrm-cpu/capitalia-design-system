import React from 'react';

/** "Mensualidades desde $2,900 mxn" — the offer stack used across social and print. */
export function PriceCallout({label='Mensualidades desde',amount='$2,900',unit='mxn',note,tone='inverse',align='left',style,...rest}){
  const ink=tone==='inverse'?'var(--bone-200)':'var(--plum-900)';
  return <div style={{textAlign:align,...style}} {...rest}>
    <div style={{font:'var(--type-label)',fontWeight:'var(--fw-bold)',color:ink}}>{label}</div>
    <div style={{display:'flex',alignItems:'baseline',gap:6,justifyContent:align==='center'?'center':'flex-start',marginTop:2}}>
      <span style={{font:'var(--type-h1)',fontWeight:'var(--fw-bold)',color:'var(--orange-500)',letterSpacing:'var(--ls-display)'}}>{amount}</span>
      {unit&&<span style={{font:'var(--type-h3)',fontWeight:'var(--fw-regular)',color:ink}}>{unit}</span>}
    </div>
    {note&&<div style={{marginTop:'var(--space-2)',font:'var(--type-body-sm)',color:ink,opacity:.85}}>{note}</div>}
  </div>;
}

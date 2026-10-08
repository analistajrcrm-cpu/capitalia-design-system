import React from 'react';

/** Figure + label pair, e.g. "25k m² de áreas verdes". */
export function Stat({value,label,tone='default',petal=false,align='left',style,...rest}){
  const ink=tone==='inverse'?'var(--bone-200)':'var(--plum-900)';
  const body=<div style={{textAlign:align,...(petal?{background:'var(--orange-500)',color:'var(--white)',
    borderRadius:'var(--radius-petal)',padding:'var(--space-5) var(--space-6)',display:'inline-block'}:null)}}>
    <div style={{font:'var(--type-h1)',fontWeight:'var(--fw-bold)',lineHeight:1,letterSpacing:'var(--ls-display)',
      color:petal?'var(--white)':tone==='accent'?'var(--orange-500)':ink}}>{value}</div>
    {label&&<div style={{marginTop:'var(--space-2)',fontSize:'var(--fs-body-sm)',fontFamily:'var(--font-sans)',
      color:petal?'var(--white)':tone==='inverse'?'var(--bone-300)':'var(--text-muted)'}}>{label}</div>}
  </div>;
  return <div {...rest} style={style}>{body}</div>;
}

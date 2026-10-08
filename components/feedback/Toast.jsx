import React from 'react';

const TONE={info:{background:'var(--plum-900)',color:'var(--bone-200)'},
 success:{background:'var(--green-600)',color:'var(--white)'},
 danger:{background:'var(--red-600)',color:'var(--white)'}};

/** Transient confirmation strip. */
export function Toast({children,tone='info',action,onClose,style,...rest}){
  return <div role="status" {...rest} style={{display:'inline-flex',alignItems:'center',gap:'var(--space-4)',
    padding:'12px 16px',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-raised)',
    font:'var(--type-body-sm)',...TONE[tone],...style}}>
    <span>{children}</span>
    {action}
    {onClose&&<button type="button" aria-label="Cerrar" onClick={onClose}
      style={{border:0,background:'transparent',color:'inherit',cursor:'pointer',fontSize:16,lineHeight:1,opacity:.8}}>{'\u00D7'}</button>}
  </div>;
}

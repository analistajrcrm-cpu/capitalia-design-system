import React from 'react';

/** Centred modal over a plum scrim. */
export function Dialog({open=true,title,children,footer,onClose,width=520,style,...rest}){
  if(!open) return null;
  return <div role="dialog" aria-modal="true" onClick={onClose} style={{position:'fixed',inset:0,zIndex:60,
    background:'var(--plum-a60)',display:'grid',placeItems:'center',padding:'var(--space-6)'}}>
    <div onClick={e=>e.stopPropagation()} {...rest} style={{width:'100%',maxWidth:width,background:'var(--surface-card)',
      borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-overlay)',padding:'var(--space-8)',...style}}>
      <div style={{display:'flex',alignItems:'start',justifyContent:'space-between',gap:'var(--space-6)'}}>
        {title&&<h3 style={{font:'var(--type-h3)',margin:0}}>{title}</h3>}
        {onClose&&<button type="button" aria-label="Cerrar" onClick={onClose}
          style={{border:0,background:'transparent',cursor:'pointer',fontSize:20,lineHeight:1,color:'var(--text-muted)'}}>{'\u00D7'}</button>}
      </div>
      <div style={{marginTop:'var(--space-4)',font:'var(--type-body)',color:'var(--text-secondary)'}}>{children}</div>
      {footer&&<div style={{marginTop:'var(--space-8)',display:'flex',gap:'var(--space-3)',justifyContent:'flex-end'}}>{footer}</div>}
    </div>
  </div>;
}

import React from 'react';

/** Square check control. */
export function Checkbox({label,checked=false,onChange,disabled=false,description,style,...rest}){
  return <label style={{display:'grid',gridTemplateColumns:'20px 1fr',gap:'var(--space-3)',alignItems:'start',
    cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <span style={{position:'relative',width:20,height:20,display:'block'}}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest}
        style={{appearance:'none',width:20,height:20,margin:0,borderRadius:'var(--radius-sm)',
          border:'1px solid '+(checked?'var(--orange-500)':'var(--border-strong)'),
          background:checked?'var(--orange-500)':'var(--surface-card)',cursor:'inherit',
          transition:'var(--motion-hover)'}}/>
      {checked&&<span aria-hidden="true" style={{position:'absolute',inset:0,display:'grid',placeItems:'center',
        color:'var(--white)',fontSize:13,fontWeight:'var(--fw-bold)',pointerEvents:'none'}}>{'\u2713'}</span>}
    </span>
    <span>
      <span style={{font:'var(--type-body)',color:'var(--text-primary)'}}>{label}</span>
      {description&&<span style={{display:'block',fontSize:'var(--fs-body-sm)',color:'var(--text-muted)'}}>{description}</span>}
    </span>
  </label>;
}

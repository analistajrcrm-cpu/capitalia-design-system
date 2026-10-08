import React from 'react';

/** On/off toggle for immediate settings. */
export function Switch({checked=false,onChange,label,description,disabled=false,style,...rest}){
  return <label style={{display:'flex',gap:'var(--space-4)',alignItems:'center',justifyContent:'space-between',
    cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <span>
      {label&&<span style={{display:'block',font:'var(--type-body)'}}>{label}</span>}
      {description&&<span style={{display:'block',fontSize:'var(--fs-body-sm)',color:'var(--text-muted)'}}>{description}</span>}
    </span>
    <span style={{position:'relative',width:44,height:26,borderRadius:'999px',flex:'0 0 auto',
      background:checked?'var(--orange-500)':'var(--bone-300)',transition:'background var(--dur-fast) var(--ease-standard)'}}>
      <span style={{position:'absolute',top:3,left:checked?21:3,width:20,height:20,borderRadius:'999px',
        background:'var(--white)',transition:'left var(--dur-fast) var(--ease-standard)'}}/>
    </span>
    <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest}
      style={{position:'absolute',opacity:0,width:0,height:0}}/>
  </label>;
}

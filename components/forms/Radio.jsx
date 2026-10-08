import React from 'react';

/** Radio group: all options visible. */
export function Radio({name,options=[],value,onChange,label,direction='column',disabled=false,style,...rest}){
  return <div role="radiogroup" aria-label={label} style={{display:'grid',gap:'var(--space-3)',...style}} {...rest}>
    {label&&<span style={{font:'var(--type-label)',color:'var(--text-secondary)'}}>{label}</span>}
    <div style={{display:'flex',flexDirection:direction,gap:direction==='row'?'var(--space-6)':'var(--space-3)'}}>
      {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;const on=value===v;
        return <label key={v} style={{display:'flex',gap:'var(--space-3)',alignItems:'center',
          cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1}}>
          <span style={{width:20,height:20,borderRadius:'999px',display:'grid',placeItems:'center',
            border:'1px solid '+(on?'var(--orange-500)':'var(--border-strong)'),transition:'var(--motion-hover)'}}>
            <span style={{width:10,height:10,borderRadius:'999px',background:on?'var(--orange-500)':'transparent'}}/>
          </span>
          <input type="radio" name={name} value={v} checked={on} onChange={onChange} disabled={disabled}
            style={{position:'absolute',opacity:0,width:0,height:0}}/>
          <span style={{font:'var(--type-body)'}}>{l}</span>
        </label>;})}
    </div>
  </div>;
}

import React from 'react';
const useHot=()=>{const[h,setH]=React.useState(false),[a,setA]=React.useState(false);return[{onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},onMouseDown:()=>setA(true),onMouseUp:()=>setA(false)},h,a]};
/** Underlined tab strip. */
export function Tabs({items=[],value,onChange,tone='default',style,...rest}){
  const active=value??(typeof items[0]==='string'?items[0]:items[0]&&items[0].value);
  const ink=tone==='inverse'?'var(--bone-200)':'var(--plum-900)';
  const line=tone==='inverse'?'var(--bone-a24)':'var(--border-subtle)';
  return <div role="tablist" {...rest} style={{display:'flex',gap:'var(--space-8)',borderBottom:'1px solid '+line,...style}}>
    {items.map(it=>{const v=typeof it==='string'?it:it.value,l=typeof it==='string'?it:it.label;const on=v===active;
      return <button key={v} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(v)}
        style={{border:0,background:'transparent',padding:'0 0 10px',cursor:'pointer',
          font:'var(--type-label)',fontSize:'var(--fs-body)',color:on?ink:tone==='inverse'?'var(--plum-200)':'var(--text-muted)',
          borderBottom:'2px solid '+(on?'var(--orange-500)':'transparent'),marginBottom:-1,
          transition:'var(--motion-hover)'}}>{l}</button>;})}
  </div>;
}

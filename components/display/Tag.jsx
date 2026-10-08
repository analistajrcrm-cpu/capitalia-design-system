import React from 'react';
const useHot=()=>{const[h,setH]=React.useState(false),[a,setA]=React.useState(false);return[{onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},onMouseDown:()=>setA(true),onMouseUp:()=>setA(false)},h,a]};
/** Metadata chip, optionally removable or selectable. */
export function Tag({children,selected=false,onRemove,onClick,style,...rest}){
  const [bind,h]=useHot();
  return <span {...bind} {...rest} onClick={onClick} style={{display:'inline-flex',alignItems:'center',gap:8,height:28,
    padding:'0 12px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-sans)',fontSize:'var(--fs-body-sm)',
    cursor:onClick?'pointer':'default',transition:'var(--motion-hover)',
    background:selected?'var(--plum-900)':h&&onClick?'var(--plum-a08)':'transparent',
    color:selected?'var(--bone-200)':'var(--text-primary)',
    boxShadow:selected?'none':'inset 0 0 0 1px var(--border-subtle)',...style}}>
    {children}
    {onRemove&&<button type="button" onClick={e=>{e.stopPropagation();onRemove(e);}} aria-label="Quitar"
      style={{border:0,background:'transparent',color:'inherit',cursor:'pointer',padding:0,fontSize:14,lineHeight:1}}>{'\u00D7'}</button>}
  </span>;
}

import React from 'react';

/** Hover/focus label for an icon-only control. */
export function Tooltip({label,children,placement='top',style,...rest}){
  const [open,setOpen]=React.useState(false);
  const pos=placement==='top'?{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}
    :placement==='bottom'?{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}
    :placement==='left'?{right:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'}
    :{left:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'};
  return <span {...rest} style={{position:'relative',display:'inline-flex',...style}}
    onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
    onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)}>
    {children}
    {open&&<span role="tooltip" style={{position:'absolute',zIndex:70,whiteSpace:'nowrap',padding:'6px 10px',
      borderRadius:'var(--radius-sm)',background:'var(--plum-900)',color:'var(--bone-200)',
      fontFamily:'var(--font-sans)',fontSize:'var(--fs-caption)',boxShadow:'var(--shadow-card)',...pos}}>{label}</span>}
  </span>;
}

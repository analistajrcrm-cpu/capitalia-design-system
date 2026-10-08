import React from 'react';
const useHot=()=>{const[h,setH]=React.useState(false),[a,setA]=React.useState(false);return[{onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},onMouseDown:()=>setA(true),onMouseUp:()=>setA(false)},h,a]};
const SIZE={sm:32,md:40,lg:48};
const TONE={
 ghost:{base:{background:'transparent',color:'var(--text-primary)'},hover:{background:'var(--plum-a08)'}},
 solid:{base:{background:'var(--plum-900)',color:'var(--bone-200)'},hover:{background:'var(--plum-800)'}},
 accent:{base:{background:'var(--orange-500)',color:'var(--white)'},hover:{background:'var(--orange-600)'}},
 outline:{base:{background:'transparent',color:'var(--text-primary)',boxShadow:'inset 0 0 0 1px var(--border-strong)'},hover:{background:'var(--plum-a08)'}},
 inverse:{base:{background:'transparent',color:'var(--bone-200)',boxShadow:'inset 0 0 0 1px var(--border-inverse)'},hover:{background:'var(--bone-a24)'}}
};

/** Square-ish icon-only control. */
export function IconButton({children,label,variant='ghost',size='md',shape='pill',disabled=false,style,...rest}){
  const [bind,h]=useHot();const s=SIZE[size];const t=TONE[variant]||TONE.ghost;
  return <button type="button" aria-label={label} disabled={disabled} {...bind} {...rest}
    style={{width:s,height:s,display:'inline-grid',placeItems:'center',border:0,padding:0,
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,transition:'var(--motion-hover)',
      borderRadius:shape==='petal'?'var(--radius-petal)':shape==='square'?'var(--radius-sm)':'var(--radius-pill)',
      ...t.base,...(!disabled&&h?t.hover:null),...style}}>{children}</button>;
}

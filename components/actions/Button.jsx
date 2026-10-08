import React from 'react';
const useHot=()=>{const[h,setH]=React.useState(false),[a,setA]=React.useState(false);return[{onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},onMouseDown:()=>setA(true),onMouseUp:()=>setA(false)},h,a]};
const SIZE={sm:{height:'var(--control-h-sm)',padding:'0 16px',fontSize:14},
 md:{height:'var(--control-h-md)',padding:'0 24px',fontSize:16},
 lg:{height:'var(--control-h-lg)',padding:'0 32px',fontSize:18}};
const TONE={
 primary:{base:{background:'var(--orange-500)',color:'var(--white)'},hover:{background:'var(--orange-600)'},active:{background:'var(--orange-700)'}},
 secondary:{base:{background:'var(--plum-900)',color:'var(--bone-200)'},hover:{background:'var(--plum-800)'},active:{background:'var(--plum-900)'}},
 outline:{base:{background:'transparent',color:'var(--text-primary)',boxShadow:'inset 0 0 0 1px var(--border-strong)'},hover:{background:'var(--plum-a08)'},active:{background:'var(--plum-a12)'}},
 ghost:{base:{background:'transparent',color:'var(--text-primary)'},hover:{background:'var(--plum-a08)'},active:{background:'var(--plum-a12)'}},
 inverse:{base:{background:'var(--bone-200)',color:'var(--plum-900)'},hover:{background:'var(--bone-100)'},active:{background:'var(--bone-300)'}}
};

/** Primary action. Pill by default; petal for brand moments. */
export function Button({children,variant='primary',size='md',shape='pill',disabled=false,iconLeft,iconRight,fullWidth=false,style,...rest}){
  const [bind,h,a]=useHot();
  const t=TONE[variant]||TONE.primary;
  return <button type="button" disabled={disabled} {...bind} {...rest}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
      width:fullWidth?'100%':undefined,border:0,cursor:disabled?'not-allowed':'pointer',
      fontFamily:'var(--font-sans)',fontWeight:'var(--fw-medium)',lineHeight:1,
      borderRadius:shape==='petal'?'var(--radius-petal)':shape==='square'?'var(--radius-sm)':'var(--radius-pill)',
      transition:'var(--motion-hover)',opacity:disabled?.4:1,
      ...SIZE[size],...t.base,...(!disabled&&h?t.hover:null),...(!disabled&&a?t.active:null),...style}}>
    {iconLeft}{children}{iconRight}
  </button>;
}

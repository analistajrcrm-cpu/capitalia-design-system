import React from 'react';
const useHot=()=>{const[h,setH]=React.useState(false),[a,setA]=React.useState(false);return[{onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},onMouseDown:()=>setA(true),onMouseUp:()=>setA(false)},h,a]};
const DIR={'down-right':'\u2198','right':'\u2192','down':'\u2193'};

/** The brand's arrow + block-label motif (email signature, deck callouts). */
export function ArrowLink({children,href='#',direction='down-right',tone='default',style,...rest}){
  const [bind,h]=useHot();
  const ink=tone==='inverse'?'var(--bone-200)':'var(--plum-900)';
  return <a href={href} {...bind} {...rest} style={{display:'inline-flex',flexDirection:'column',gap:'var(--space-2)',
    alignItems:'flex-start',textDecoration:'none',border:0,color:ink,...style}}>
    <span aria-hidden="true" style={{font:'var(--type-h2)',lineHeight:1,fontWeight:'var(--fw-light)',
      transform:h?'translate(2px,2px)':'none',transition:'transform var(--dur-fast) var(--ease-standard)'}}>{DIR[direction]}</span>
    <span style={{font:'var(--type-label)',fontSize:'var(--fs-body)',padding:'2px 10px',
      background:tone==='inverse'?'var(--bone-200)':'var(--plum-900)',
      color:tone==='inverse'?'var(--plum-900)':'var(--bone-200)'}}>{children}</span>
  </a>;
}

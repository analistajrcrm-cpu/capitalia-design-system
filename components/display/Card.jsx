import React from 'react';
const useHot=()=>{const[h,setH]=React.useState(false),[a,setA]=React.useState(false);return[{onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},onMouseDown:()=>setA(true),onMouseUp:()=>setA(false)},h,a]};
/** Content container. Flat and square-ish by default; the brand is print-flat. */
export function Card({children,tone='default',padding='var(--space-6)',interactive=false,media,mediaShape='arc',style,...rest}){
  const [bind,h]=useHot();
  const TONE={
    default:{background:'var(--surface-card)',color:'var(--text-primary)',border:'1px solid var(--border-subtle)'},
    bone:{background:'var(--bone-100)',color:'var(--text-primary)',border:'1px solid transparent'},
    ink:{background:'var(--plum-900)',color:'var(--bone-200)',border:'1px solid transparent'},
    accent:{background:'var(--orange-500)',color:'var(--white)',border:'1px solid transparent'}
  };
  const MEDIA={arc:'0 0 var(--radius-lg) var(--radius-lg) / 0 0 64px 64px',square:'0',petal:'0 0 0 68%'};
  return <div {...(interactive?bind:{})} {...rest} style={{borderRadius:'var(--radius-lg)',overflow:'hidden',
    transition:'var(--motion-hover), box-shadow var(--dur-fast) var(--ease-standard)',
    boxShadow:interactive&&h?'var(--shadow-card)':'var(--shadow-none)',
    cursor:interactive?'pointer':'default',...TONE[tone],...style}}>
    {media&&<div style={{overflow:'hidden',borderRadius:MEDIA[mediaShape]}}>
      <img src={media} alt="" style={{width:'100%',height:200,objectFit:'cover',display:'block',
        transform:interactive&&h?'scale(1.02)':'none',transition:'transform var(--dur-slow) var(--ease-standard)'}}/></div>}
    <div style={{padding}}>{children}</div>
  </div>;
}

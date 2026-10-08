import React from 'react';

const TONE={
  neutral:{background:'var(--bone-200)',color:'var(--plum-900)'},
  accent:{background:'var(--orange-100)',color:'var(--orange-700)'},
  success:{background:'rgba(79,122,82,.14)',color:'var(--green-600)'},
  warning:{background:'rgba(192,138,46,.16)',color:'var(--amber-600)'},
  danger:{background:'rgba(179,59,43,.14)',color:'var(--red-600)'},
  ink:{background:'var(--plum-900)',color:'var(--bone-200)'}
};

/** Small status marker. */
export function Badge({children,tone='neutral',dot=false,style,...rest}){
  return <span {...rest} style={{display:'inline-flex',alignItems:'center',gap:6,height:22,padding:'0 10px',
    borderRadius:'var(--radius-pill)',fontFamily:'var(--font-sans)',fontSize:'var(--fs-caption)',
    fontWeight:'var(--fw-medium)',...TONE[tone],...style}}>
    {dot&&<span style={{width:6,height:6,borderRadius:'999px',background:'currentColor'}}/>}{children}</span>;
}

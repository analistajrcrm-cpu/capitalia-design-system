import React from 'react';

const CORNER={br:'999px 999px 0 999px',bl:'999px 999px 999px 0',tr:'999px 0 999px 999px',tl:'0 999px 999px 999px'};
const TONE={
  bone:{background:'var(--bone-200)',color:'var(--plum-900)'},
  plum:{background:'var(--plum-900)',color:'var(--bone-200)'},
  orange:{background:'var(--orange-500)',color:'var(--white)'},
  outline:{background:'transparent',color:'var(--text-primary)',boxShadow:'inset 0 0 0 1px var(--border-strong)'}
};
const SIZE={sm:{height:24,padding:'0 12px',fontSize:12},md:{height:32,padding:'0 16px',fontSize:14},lg:{height:44,padding:'0 24px',fontSize:18}};

/** The petal tag: a pill with one squared corner — Capitalia's signature label shape. */
export function PetalTag({children,tone='bone',size='md',corner='br',uppercase=false,style,...rest}){
  return <span style={{display:'inline-flex',alignItems:'center',gap:8,
    fontFamily:'var(--font-sans)',fontWeight:'var(--fw-medium)',letterSpacing:uppercase?'var(--ls-eyebrow)':'0',
    textTransform:uppercase?'uppercase':'none',whiteSpace:'nowrap',
    borderRadius:CORNER[corner],...SIZE[size],...TONE[tone],...style}} {...rest}>{children}</span>;
}

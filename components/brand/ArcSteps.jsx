import React from 'react';

/** Numbered concentric arcs — the deck's "Beneficios" layout. */
export function ArcSteps({items=[],tone='inverse',style,...rest}){
  const line=tone==='inverse'?'var(--bone-a40)':'var(--plum-a12)';
  const ink=tone==='inverse'?'var(--bone-200)':'var(--plum-900)';
  return <div style={{position:'relative',display:'grid',gap:'var(--space-12)',...style}} {...rest}>
    {items.map((it,i)=>(
      <div key={i} style={{position:'relative',paddingTop:'var(--space-6)'}}>
        <div style={{position:'absolute',left:'-22%',right:'-22%',top:0,height:170,
          borderTop:'1px solid '+line,borderRadius:'50% 50% 0 0 / 100% 100% 0 0',pointerEvents:'none'}}/>
        <div style={{position:'relative',width:40,height:40,margin:'-20px auto 0',borderRadius:'999px',
          border:'1px solid '+line,display:'grid',placeItems:'center',font:'var(--type-body-sm)',color:ink}}>{i+1}</div>
        <p style={{margin:'var(--space-4) auto 0',maxWidth:'34ch',textAlign:'center',font:'var(--type-body-sm)',color:ink,opacity:.9}}>{it}</p>
      </div>
    ))}
  </div>;
}

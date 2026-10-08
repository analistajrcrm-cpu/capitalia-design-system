import React from 'react';

const CDN='https://unpkg.com/lucide-static@0.441.0/icons/';

/** Lucide outline glyph tinted with currentColor (see readme, Iconography). */
export function Icon({name='arrow-right',size=20,strokeWidth,style,...rest}){
  const url=CDN+name+'.svg';
  return <span role="img" aria-hidden="true" {...rest} style={{display:'inline-block',width:size,height:size,
    background:'currentColor',WebkitMaskImage:'url('+url+')',maskImage:'url('+url+')',
    WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskSize:'contain',maskSize:'contain',
    WebkitMaskPosition:'center',maskPosition:'center',flex:'0 0 auto',...style}}/>;
}

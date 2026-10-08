import React from 'react';

const SRC={
  'lockup-vertical':{plum:'lockup-vertical.png',bone:'lockup-vertical-bone.png'},
  'lockup-horizontal':{plum:'lockup-horizontal-plum.png',bone:'lockup-horizontal-bone.png'},
  mark:{plum:'mark-plum.png',orange:'mark-orange.png',bone:'mark-bone.png',white:'mark-white.png'},
  wordmark:{plum:'wordmark-plum.png',bone:'wordmark-bone.png'}
};

/** Official Capitalia artwork. Never re-draw the mark — always render these files. */
export function Logo({variant='lockup-horizontal',tone='plum',height,assetBase='assets/logo',style,...rest}){
  const set=SRC[variant]||SRC['lockup-horizontal'];
  const file=set[tone]||Object.values(set)[0];
  const h=height||(variant==='mark'?40:variant==='lockup-vertical'?96:32);
  return <img src={assetBase+'/'+file} alt="Capitalia" style={{height:h,width:'auto',display:'block',...style}} {...rest}/>;
}

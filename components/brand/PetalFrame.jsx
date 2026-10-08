import React from 'react';

const SHAPE={
  petal:{br:'68% 68% 0 68%',bl:'68% 68% 68% 0',tr:'68% 0 68% 68%',tl:'0 68% 68% 68%'},
  leaf:{br:'100% 0 100% 0',bl:'0 100% 0 100%',tr:'0 100% 0 100%',tl:'100% 0 100% 0'},
  circle:{br:'50%',bl:'50%',tr:'50%',tl:'50%'},
  arc:{br:'0 999px 999px 0',bl:'999px 0 0 999px',tr:'999px 999px 0 0',tl:'0 0 999px 999px'}
};

/** Photography masked into a brand shape. Wrap an <img> or pass src. */
export function PetalFrame({src,alt='',shape='petal',point='br',size,ratio='1 / 1',children,style,...rest}){
  return <div style={{position:'relative',overflow:'hidden',width:size||'100%',aspectRatio:size?undefined:ratio,
    height:size||undefined,borderRadius:(SHAPE[shape]||SHAPE.petal)[point],background:'var(--surface-sunken)',...style}} {...rest}>
    {src?<img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:children}
  </div>;
}

import React from 'react';

/** Marco de feed: avatar con el símbolo, handle y acciones en contorno. */
export function Feed({children,handle='capitalia',assetBase='../../assets',scale=1}){
  const items=React.Children.toArray(children);
  const [liked,setLiked]=React.useState({});
  const [saved,setSaved]=React.useState({});
  const ico=n=>'https://unpkg.com/lucide-static@0.441.0/icons/'+n+'.svg';
  const glyph=(n,on,color)=><span style={{display:'inline-block',width:30,height:30,background:on?color:'#fff',
    WebkitMaskImage:'url('+ico(n)+')',maskImage:'url('+ico(n)+')',WebkitMaskSize:'contain',maskSize:'contain',
    WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat'}}/>;
  return <div style={{display:'grid',gridTemplateColumns:'repeat('+items.length+',1fr)',gap:56,padding:'40px 44px',background:'#191919'}}>
    {items.map((el,i)=>(
      <div key={i}>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <span style={{width:56,height:56,borderRadius:'999px',background:'var(--bone-200)',display:'grid',placeItems:'center'}}>
            <img src={assetBase+'/logo/mark-plum.png'} alt="" style={{height:28}}/></span>
          <span style={{font:'var(--fw-regular) 24px/1 var(--font-sans)',color:'#fff'}}>{handle}</span>
        </div>
        <div style={{marginTop:18,width:'100%',aspectRatio:'1',overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',top:0,left:0,width:1080,height:1080,transform:'scale('+scale+')',transformOrigin:'top left'}}>{el}</div>
        </div>
        <div style={{marginTop:18,display:'flex',alignItems:'center',gap:16}}>
          <button onClick={()=>setLiked(s=>({...s,[i]:!s[i]}))} style={{border:0,background:'transparent',padding:0,cursor:'pointer'}}>
            {glyph('heart',liked[i],'var(--orange-500)')}</button>
          <button style={{border:0,background:'transparent',padding:0,cursor:'pointer'}}>{glyph('message-circle',false)}</button>
          <button onClick={()=>setSaved(s=>({...s,[i]:!s[i]}))} style={{border:0,background:'transparent',padding:0,cursor:'pointer',marginLeft:'auto'}}>
            {glyph('bookmark',saved[i],'var(--bone-200)')}</button>
        </div>
      </div>))}
  </div>;
}

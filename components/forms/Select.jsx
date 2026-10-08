import React from 'react';
const FIELD={width:'100%',height:'var(--control-h-md)',padding:'0 14px',background:'var(--surface-card)',
  color:'var(--text-primary)',font:'var(--type-body)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)',
  transition:'var(--motion-hover)',outline:'none'};
/** Native select with brand chrome. */
export function Select({label,hint,error,options=[],value,onChange,placeholder='Selecciona…',disabled=false,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const auto=React.useMemo(()=>'sel-'+Math.random().toString(36).slice(2,8),[]);
  const fid=id||auto;
  return <div style={{display:'grid',gap:'var(--space-2)',...style}}>
    {label&&<label htmlFor={fid} style={{font:'var(--type-label)',color:'var(--text-secondary)'}}>{label}</label>}
    <div style={{position:'relative'}}>
      <select id={fid} value={value} onChange={onChange} disabled={disabled}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest}
        style={{...FIELD,appearance:'none',paddingRight:36,cursor:'pointer',opacity:disabled?.5:1,
          borderColor:error?'var(--status-danger)':focus?'var(--orange-500)':'var(--border-subtle)',
          boxShadow:focus?'var(--ring-focus)':'none'}}>
        {placeholder&&<option value="">{placeholder}</option>}
        {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;
          return <option key={v} value={v}>{l}</option>;})}
      </select>
      <span aria-hidden="true" style={{position:'absolute',right:14,top:'50%',transform:'translateY(-60%)',
        color:'var(--text-muted)',fontSize:12,pointerEvents:'none'}}>{'\u25BE'}</span>
    </div>
    {(error||hint)&&<span style={{fontSize:'var(--fs-caption)',fontFamily:'var(--font-sans)',
      color:error?'var(--status-danger)':'var(--text-muted)'}}>{error||hint}</span>}
  </div>;
}

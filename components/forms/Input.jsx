import React from 'react';
const FIELD={width:'100%',height:'var(--control-h-md)',padding:'0 14px',background:'var(--surface-card)',
  color:'var(--text-primary)',font:'var(--type-body)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)',
  transition:'var(--motion-hover)',outline:'none'};
/** Labelled text field. */
export function Input({label,hint,error,value,onChange,placeholder,type='text',multiline=false,rows=4,disabled=false,required=false,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const auto=React.useMemo(()=>'in-'+Math.random().toString(36).slice(2,8),[]);
  const fid=id||auto;
  const border=error?'var(--status-danger)':focus?'var(--orange-500)':'var(--border-subtle)';
  const common={...FIELD,borderColor:border,boxShadow:focus?'var(--ring-focus)':'none',opacity:disabled?.5:1};
  return <div style={{display:'grid',gap:'var(--space-2)',...style}}>
    {label&&<label htmlFor={fid} style={{font:'var(--type-label)',color:'var(--text-secondary)'}}>
      {label}{required&&<span style={{color:'var(--orange-500)'}}> *</span>}</label>}
    {multiline
      ? <textarea id={fid} rows={rows} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest}
          style={{...common,height:'auto',padding:'10px 14px',resize:'vertical',fontFamily:'var(--font-sans)'}}/>
      : <input id={fid} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest} style={common}/>}
    {(error||hint)&&<span style={{font:'var(--type-body-sm)',fontSize:'var(--fs-caption)',
      color:error?'var(--status-danger)':'var(--text-muted)'}}>{error||hint}</span>}
  </div>;
}

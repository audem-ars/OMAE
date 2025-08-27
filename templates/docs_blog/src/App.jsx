import React,{useState} from 'react'
export default function App(){const[t,setT]=useState('intro');return(<div><h1>{{TITLE}}</h1><div><button onClick={()=>setT('intro')}>Intro</button><button onClick={()=>setT('guide')}>Guide</button><button onClick={()=>setT('api')}>API</button></div>{t==='intro'&&<p>Welcome</p>}{t==='guide'&&<p>Use it</p>}{t==='api'&&<p>Endpoints</p>}</div>)}

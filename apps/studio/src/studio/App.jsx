import React, { useState, useEffect } from 'react'
const pipelines=[
  {group:'Build', id:'site_template', label:'Template -> Site'},
  {group:'Build', id:'site_dashboard_csv', label:'CSV -> Dashboard'},
  {group:'Build', id:'site_prompt', label:'Prompt -> Site'},
  {group:'Build', id:'site_inspire_rebuild', label:'URL -> Rebuild'},
  {group:'Docs', id:'docs_generate', label:'Write Doc'},
  {group:'Ops', id:'email_console', label:'Send Email (dev)'},
  {group:'Finance', id:'research_report', label:'Research Report'},
  {group:'Finance', id:'market_monitor', label:'Market Monitor'},
  {group:'Finance', id:'options_analyzer', label:'Options Analyzer'},
  {group:'Finance', id:'portfolio_caps_etf', label:'Portfolio Builder'}
]
const templates=[
  {id:'landing_saas',label:'Landing (SaaS)'},
  {id:'map_leaflet',label:'Map (Leaflet)'},
  {id:'chat_basic',label:'Chat (WS)'},
  {id:'gallery_photo',label:'Gallery'},
  {id:'dashboard_csv',label:'CSV Dashboard'},
  {id:'docs_blog',label:'Docs/Blog'},
  {id:'saas_dashboard',label:'SaaS Dashboard'}
]
export default function App(){
  const[owner,setOwner]=useState(''); const[repo,setRepo]=useState(''); const[token,setToken]=useState('')
  const[pipeline,setPipeline]=useState(pipelines[0].id)
  const[tpl,setTpl]=useState(templates[0].id); const[title,setTitle]=useState('Acme'); const[tagline,setTagline]=useState('Do more, faster.'); const[cta,setCta]=useState('Get Started'); const[url,setUrl]=useState('https://example.com')
  const[log,setLog]=useState(''); const[runs,setRuns]=useState([])
  const baseUrl = owner && repo ? `https://${owner}.github.io/${repo}` : 'https://<owner>.github.io/<repo>'
  async function run(){
    setLog('Dispatching workflow...')
    try{
      if(!owner||!repo||!token) throw new Error('Missing owner/repo/token')
      const body={ref:'main', inputs:{ pipeline, prompt:`Build ${title}`, template_id:tpl, title, tagline, cta, url }}
      const r=await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/omae_dispatch.yml/dispatches`,{method:'POST', headers:{'Authorization':`Bearer ${token}`,'Accept':'application/vnd.github+json'}, body:JSON.stringify(body)})
      if(r.status===204){ setLog(l=>l+'\nWorkflow dispatched.'); loadRuns() } else { throw new Error(await r.text()) }
    }catch(e){ setLog(l=>l+'\nERROR: '+(e?.message||String(e))) }
  }
  async function loadRuns(){
    try{
      if(!owner||!repo||!token) return
      const r=await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/omae_dispatch.yml/runs?per_page=10`,{headers:{'Authorization':`Bearer ${token}`,'Accept':'application/vnd.github+json'}})
      if(r.ok){ const d=await r.json(); setRuns(d.workflow_runs||[]) }
    }catch{}
  }
  useEffect(()=>{ loadRuns() }, [owner,repo,token])
  return (<div className="container">
    <div className="h">OMAe Studio - FULL-FAT</div>
    <div className="small">Sites: <b>{baseUrl}/apps/current/</b> - Candidate: <b>{baseUrl}/apps/candidate/</b> - Releases: <b>{baseUrl}/releases/</b></div>
    <div className="card">
      <div className="grid">
        <div><label>Owner</label><input className="input" value={owner} onChange={e=>setOwner(e.target.value)} placeholder="your-username-or-org"/></div>
        <div><label>Repo</label><input className="input" value={repo} onChange={e=>setRepo(e.target.value)} placeholder="your-repo"/></div>
        <div><label>Token</label><input className="input" type="password" value={token} onChange={e=>setToken(e.target.value)} placeholder="ghp_..."/></div>
        <div><label>Pipeline</label><select className="input" value={pipeline} onChange={e=>setPipeline(e.target.value)}>{pipelines.map(p=>(<option key={p.id} value={p.id}>{p.group} - {p.label}</option>))}</select></div>
        <div><label>Template</label><select className="input" value={tpl} onChange={e=>setTpl(e.target.value)}>{templates.map(t=>(<option key={t.id} value={t.id}>{t.label}</option>))}</select></div>
      </div>
    </div>
    <div className="card"><div className="grid">
      <div><label>Title</label><input className="input" value={title} onChange={e=>setTitle(e.target.value)}/></div>
      <div><label>Tagline</label><input className="input" value={tagline} onChange={e=>setTagline(e.target.value)}/></div>
      <div><label>CTA</label><input className="input" value={cta} onChange={e=>setCta(e.target.value)}/></div>
      <div><label>Source URL (rebuild)</label><input className="input" value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://example.com"/></div>
    </div></div>
    <div className="card"><button className="btn" onClick={run}>Run</button><div className="log" style={{marginTop:12}}>{log||'Idle. Fill in owner/repo/token and press Run.'}</div></div>
    <div className="card"><div className="h" style={{fontSize:18}}>Recent Runs</div>
      <table className="table"><thead><tr><th>When</th><th>Status</th><th>Conclusion</th><th>URL</th></tr></thead>
      <tbody>{runs.map(r=>(<tr key={r.id}><td>{new Date(r.created_at).toLocaleString()}</td><td>{r.status}</td><td>{r.conclusion||'-'}</td><td><a className="small" href={r.html_url} target="_blank" rel="noreferrer">Action</a></td></tr>))}{!runs.length && <tr><td colSpan="4" className="small">No runs yet.</td></tr>}</tbody></table>
    </div>
  </div>)
}

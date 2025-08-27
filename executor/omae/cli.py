import argparse, json
from .dag import load_playbook
from . import actions

ACTION_MAP={
  'echo': actions.echo,
  'scaffold_site_from_prompt': actions.scaffold_site_from_prompt,
  'scaffold_from_template': actions.scaffold_from_template,
  'generate_inspired_site': actions.generate_inspired_site,
  'copy_csv_to_site_public': actions.copy_csv_to_site_public,
  'inject_seo_meta': actions.inject_seo_meta,
  'research_compile_stub': actions.research_compile_stub,
  'market_monitor_eval_stub': actions.market_monitor_eval_stub,
  'options_analyze_stub': actions.options_analyze_stub,
  'portfolio_build_caps': actions.portfolio_build_caps,
  'write_report': actions.write_report
}

def run_playbook(path: str):
  nodes = load_playbook(path)
  ctx={'log':[],'skipped_nodes':[]}
  done=set(); changed=True
  while len(done)<len(nodes) and changed:
    changed=False
    for n in nodes:
      if n.id in done: continue
      reqs=n.requires if isinstance(n.requires,list) else [n.requires]
      if any(r not in done for r in reqs if r): continue
      fn=ACTION_MAP.get(n.action)
      if not fn:
        ctx['log'].append(f"SKIP unknown action {n.action}"); ctx['skipped_nodes'].append(n.id); done.add(n.id); changed=True; continue
      res=fn(ctx, **n.inputs)
      if not (res if isinstance(res,dict) else {'ok':True}).get('ok',True): ctx['skipped_nodes'].append(n.id)
      done.add(n.id); changed=True
  actions.write_report(ctx, out='run_report.json')
  return ctx

def main():
  p=argparse.ArgumentParser()
  p.add_argument('--playbook','-p', default='../playbooks/site_template.yaml')
  a=p.parse_args()
  run_playbook(a.playbook)
  print(json.dumps({'ok':True,'report':'run_report.json'}, indent=2))

if __name__=='__main__':
  main()

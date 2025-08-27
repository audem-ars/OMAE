import yaml
from typing import List
from .models import Node, Bounds

def load_playbook(path: str) -> List[Node]:
    with open(path,'r',encoding='utf-8') as f:
        y=yaml.safe_load(f) or {}
    nodes=[]
    for s in y.get('steps',[]):
        b=s.get('bounds',{})
        nodes.append(Node(
            id=s['id'],
            role=s.get('role','agent'),
            action=s['action'],
            intent=s.get('intent','invoke'),
            inputs=s.get('inputs',{}),
            requires=s.get('pre',[]) or s.get('requires',[]),
            bounds=Bounds(max_cost_usd=float(b.get('max_cost',0)), max_time_s=int(b.get('max_time',1200)))
        ))
    return nodes

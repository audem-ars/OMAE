from dataclasses import dataclass, field
from typing import Any, Dict, List

@dataclass
class Bounds:
    max_cost_usd: float = 0.0
    max_time_s: int = 1200

@dataclass
class Node:
    id: str
    role: str
    action: str
    intent: str = "invoke"
    inputs: Dict[str, Any] = field(default_factory=dict)
    requires: List[str] = field(default_factory=list)
    bounds: Bounds = field(default_factory=Bounds)

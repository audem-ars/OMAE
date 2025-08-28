# executor/omae/dag.py
import yaml

def load_playbook(path: str):
    with open(path, 'r', encoding='utf-8') as f:
        raw = f.read()

    # First parse
    y = yaml.safe_load(raw)

    # If the file parsed as a scalar/string, try parsing *that* again.
    # This covers cases where the file contains an embedded YAML string.
    if isinstance(y, str):
        try:
            y = yaml.safe_load(y)
        except Exception:
            pass

    # At this point we need a mapping/dict with 'steps'
    if not isinstance(y, dict):
        raise ValueError(
            f"Playbook '{path}' is not a YAML mapping. "
            f"Got {type(y).__name__}. Ensure the file starts with 'steps:'"
        )

    steps = y.get('steps', [])
    if steps is None:
        steps = []
    if not isinstance(steps, list):
        raise ValueError(
            f"'steps' in '{path}' must be a list, got {type(steps).__name__}"
        )

    nodes = []
    for s in steps:
        # Keep original behavior but stay safe if someone puts non-maps in steps
        if not isinstance(s, dict):
            raise ValueError(
                f"Each item in 'steps' must be a mapping, got {type(s).__name__}"
            )
        nodes.append(s)
    return nodes

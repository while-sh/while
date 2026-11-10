# A scheduled job: it prints the time and exits with code 0.
from datetime import datetime, timezone
print(f"report of {datetime.now(timezone.utc).isoformat()}")

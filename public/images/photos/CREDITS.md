# Photography credits

Interim stock photography, to be replaced with NICS's own photographs of the
Chennai delivery centre and team when the client supplies them.

Eleven of the twelve workplace photographs come from a **single office shoot**
(Pexels ids 7580xxx–7581xxx), which is deliberate: frames from one shoot share a
location, lighting, wardrobe and cast, so the site reads as one company rather
than a stock-photo grab bag. Replacements should keep that property — prefer a
set of frames from one real NICS shoot over individually "better" pictures from
different sources.

All files are from Pexels under the Pexels License (free for commercial use, no
attribution required), except `sydney.avif` from Unsplash under the Unsplash
License. Credited here for traceability only.

| File | Source | Subject |
|---|---|---|
| delivery-floor.avif | pexels 7580648 | Open-plan floor, team at desks and monitors |
| office-team.avif | pexels 7580645 | Colleagues working at monitors with paperwork |
| accounting-work.avif | pexels 7580641 | Keyboard and printed trend charts on a desk |
| document-review.avif | pexels 7580636 | Two colleagues reviewing a document |
| team-collaboration.avif | pexels 7581119 | Team reviewing a folder together |
| workshop-session.avif | pexels 7581110 | Standup at the whiteboard |
| interview.avif | pexels 7581123 | New-hire welcome at the board |
| support-agent.avif | pexels 7581120 | Team discussion on the floor |
| workspace-sunlit.avif | pexels 7580650 | Working at a keyboard with documents |
| team-meeting.avif | pexels 7580644 | Three professionals reviewing documents |
| focused-work.avif | pexels 7580649 | Preparing work at a desk |
| data-security.avif | pexels 7580642 | Hands at a controlled workstation |
| sydney.avif | unsplash photo-1544698202-afeeb997d98c | Sydney Harbour panorama |

Source URLs: `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg`
and `https://images.unsplash.com/photo-<id>`.

## Grading

Every photograph gets the **same** fixed grade (see `scripts/grade_photos.py`) —
saturation 0.90, contrast 1.08, brightness 1.02, and a 10% brand-blue (#0056b3)
tint weighted into the shadows. It is applied uniformly on purpose: per-image
auto-correction pulls each frame toward its own optimum and pushes the set
apart, which is what makes a stock set look unrelated.

Encoded to AVIF at 1920px wide, quality 62.

## Replacing these

Each file is referenced by path only. Drop a replacement at the same filename
and the site picks it up — no code change needed. Keep the 3:2 landscape aspect
ratio to avoid re-cropping, and run the new photograph through the grade script
so it stays consistent with the rest.

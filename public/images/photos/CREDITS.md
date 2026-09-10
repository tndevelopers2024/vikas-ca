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

---

# Home-page section photographs

The photographs behind the home page sit in `public/images/bright/` and are
rebuilt by `scripts/build_home_photos.py`, which holds the authoritative
name → Pexels-id mapping. Each frame was chosen for the subject of the section
it appears in — the previous set had US IRS tax forms behind an Australian SMSF
service and a Lady Justice statue behind a standards notice, which is the
failure mode this mapping exists to prevent.

All are Pexels, under the Pexels License (free for commercial use, attribution
not required). Credited here for traceability only.

| File | Pexels | Section | Subject |
|---|---|---|---|
| announce-security.jpg | 1181354 | Announcement slider | Controlled access to the data floor |
| announce-standards.jpg | 8171198 | Announcement slider | Reviewing documents against a reporting pack |
| announce-scale.jpg | 7693700 | Announcement slider | Team working through printed schedules |
| culture-team.jpg | 7108454 | Culture statement | Diverse team around a meeting table |
| service-accounting.jpg | 8296970 | Services — Accounting & Finance | Ledger, calculator and working papers |
| service-practice.jpg | 5439162 | Services — Practice Support | Firm-side review meeting |
| service-smsf.jpg | 8441811 | Services — SMSF | Adviser walking clients through their fund |
| service-finance.jpg | 8145328 | Services — Finance | Management reporting spread across the table |
| service-operations.jpg | 8867246 | Services — Operations | Back-office support floor |
| careers-quality.jpg | 7658433 | Careers banner | Delivery floor in India |
| location-chennai.jpg | 9432498 | Locations | Chennai skyline (pairs with the Sydney frame) |
| insight-security.jpg | 442150 | Insights | Access control at the network rack |
| insight-practice.jpg | 7947999 | Insights | Reporting dashboard on the desk |
| insight-smsf.jpg | 7821566 | Insights | Marked-up balance sheet |
| insight-scaling.jpg | 7654129 | Insights | One person becoming a team |

## Rebuilding or replacing one

Change the id in `scripts/build_home_photos.py` and re-run it; the script
downloads (cached in `/tmp/pexels-src`), crops to the 1200×900 card shape and
applies the same fixed grade as the rest of the library, so a replacement stays
consistent with the set:

    python3 scripts/build_home_photos.py

The hero frames (`hero-*.jpg`, 1376×768) and story frames (`story-*.jpg`, 1376×768)
are custom generated high-end corporate photography matching the brand aesthetic
and are **not** managed by this script.

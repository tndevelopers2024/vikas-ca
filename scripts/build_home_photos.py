"""
Rebuild the home-page section photographs from their Pexels sources.

NICS sells accounting capacity, not software. Server racks, data centres and
laptop dashboards make the page read as a SaaS vendor — the client said exactly
that — so the security and reporting sections are illustrated with people on a
managed floor rather than with infrastructure.

Every home-page section gets a photograph chosen for *that section's subject* —
the mapping below is the record of which frame belongs where, so a replacement
is a one-line change rather than an archaeology exercise. Frames are cropped to
a single 4:3 card shape and pushed through the same fixed grade as the rest of
the library (see grade_photos.grade) so the page reads as one set.

    python3 scripts/build_home_photos.py [--out public/images/bright]

Downloads are cached in /tmp so re-runs are cheap.
"""
import argparse, os, sys, urllib.request
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from grade_photos import grade

CARD = (1200, 900)          # 4:3 — every card slot crops down from this
CACHE = "/tmp/pexels-src"
CDN = "https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=2000"

# name -> (pexels id, vertical crop bias 0=top 1=bottom, pre-crop top fraction)
PHOTOS = {
    # Delivery-centre proof band
    "delivery-floor":      (7580648,  0.42, 0.0),   # the managed floor, people at desks
    # Announcement slider
    "announce-security":   (7580642,  0.42, 0.0),   # clean desk, controlled workstation
    "announce-standards":  (8171198,  0.42, 0.0),   # reviewing documents against a reporting pack
    "announce-scale":      (7693700,  0.42, 0.0),   # team growing around printed schedules
    # Culture statement
    "culture-team":        (7108454,  0.42, 0.0),
    # Services explorer
    "service-accounting":  (8296970,  0.42, 0.0),   # ledger work at the desk
    "service-practice":    (5439162,  0.42, 0.0),   # firm-side review meeting
    "service-smsf":        (8441811,  0.42, 0.0),   # adviser walking clients through super
    "service-finance":     (7433869,  0.42, 0.0),   # advisers working through client papers
    "service-operations":  (8867246,  0.42, 0.0),   # back-office support floor
    # Client stories (custom artwork generated for NICS delivery & governance models)
    # "story-governance":    (7433919,  0.42, 0.0),   # who signs what
    # "story-advantage":     (7433853,  0.42, 0.0),
    # "story-engagement":    (7964413,  0.42, 0.0),
    # Careers banner
    "careers-quality":     (7658433,  0.42, 0.0),   # the delivery floor in India
    # Locations
    "location-chennai":    (9432498,  0.50, 0.42),  # skyline only: the top 42% is sky
    # Insights
    "insight-security":    (7580645,  0.42, 0.0),   # supervised floor, work under review
    "insight-practice":    (7580849,  0.42, 0.0),   # colleagues working a file together
    "insight-smsf":        (7821566,  0.42, 0.0),   # marked-up balance sheet
    "insight-scaling":     (7654129,  0.42, 0.0),
}


def source(pid):
    """Fetch (and cache) the original frame. The CDN refuses the default
    urllib user agent, hence the explicit browser string."""
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, f"{pid}.jpg")
    if not os.path.exists(path):
        req = urllib.request.Request(
            CDN.format(id=pid),
            headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                                   "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"},
        )
        with urllib.request.urlopen(req, timeout=60) as r, open(path, "wb") as f:
            f.write(r.read())
    return Image.open(path).convert("RGB")


def cover(im, size, yfrac):
    """Fill `size` without distortion, biasing the crop window vertically."""
    tw, th = size
    r = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
    x = (im.width - tw) // 2
    y = max(0, min(im.height - th, round((im.height - th) * yfrac)))
    return im.crop((x, y, x + tw, y + th))


def main(out_dir):
    os.makedirs(out_dir, exist_ok=True)
    for name, (pid, yfrac, top) in PHOTOS.items():
        im = source(pid)
        if top:
            im = im.crop((0, int(im.height * top), im.width, im.height))
        out = os.path.join(out_dir, name + ".jpg")
        grade(cover(im, CARD, yfrac)).save(out, "JPEG", quality=88, optimize=True)
        print(f"{name:<22} <- pexels {pid}  {os.path.getsize(out)//1024}KB")


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--out", default="public/images/bright")
    main(p.parse_args().out)

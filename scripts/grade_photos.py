"""
Apply one fixed grade to every photo so the set reads as a single shoot.

Deliberately NOT per-image auto-contrast: that pulls each frame toward its own
optimum and pushes the set apart. The same transform on every frame is what
makes them look related.
"""
from PIL import Image, ImageEnhance, ImageOps
import os, sys

BRAND = (0x00, 0x56, 0xb3)   # #0056b3 — shadows get a hint of this
TINT_STRENGTH = 0.10         # max shadow tint opacity
TARGET_W = 1920

def grade(im):
    im = im.convert("RGB")
    im = ImageEnhance.Color(im).enhance(0.90)      # pull back stock-photo saturation
    im = ImageEnhance.Contrast(im).enhance(1.08)
    im = ImageEnhance.Brightness(im).enhance(1.02)

    # Tint the shadows toward the brand blue: mask is the inverse of luminance,
    # so highlights stay clean and only dark areas pick up the cast.
    lum = ImageOps.grayscale(im)
    mask = lum.point(lambda v: int((255 - v) * TINT_STRENGTH))
    tint = Image.new("RGB", im.size, BRAND)
    im = Image.composite(tint, im, mask.point(lambda v: v)) if False else Image.blend(
        im, Image.composite(tint, im, mask), 1.0)
    return im

def main(src_dir, out_dir, mapping):
    os.makedirs(out_dir, exist_ok=True)
    for name, src in mapping.items():
        p = os.path.join(src_dir, src)
        im = Image.open(p)
        if im.width > TARGET_W:
            im = im.resize((TARGET_W, round(im.height * TARGET_W / im.width)), Image.LANCZOS)
        out = os.path.join(out_dir, name + ".jpg")
        grade(im).save(out, "JPEG", quality=92)
        print(f"{name:<22} <- {src}  {im.width}x{im.height}")

if __name__ == "__main__":
    MAP = {
        "delivery-floor":     "p7580648.jpg",
        "office-team":        "p7580645.jpg",
        "accounting-work":    "p7580755.jpg",
        "document-review":    "p7580636.jpg",
        "team-collaboration": "p7581119.jpg",
        "workshop-session":   "p7581110.jpg",
        "interview":          "p7580644.jpg",
        "support-agent":      "p7581120.jpg",
        "workspace-sunlit":   "p7581113.jpg",
        "team-meeting":       "p7580824.jpg",
        "focused-work":       "p7581016.jpg",
        "data-security":      "p7581122.jpg",
    }
    main(sys.argv[1], sys.argv[2], MAP)

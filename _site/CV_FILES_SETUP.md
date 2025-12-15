# CV Files Setup Guide

## Where to Add CV Files

### Audio CV File
**Location:** `/files/cv-audio.mp3` (or `.ogg`, `.wav`)

**Steps:**
1. Record your audio CV (recommended: 2-5 minutes)
2. Export as MP3 format (best compatibility)
3. Place the file in the `files/` directory
4. Name it: `cv-audio.mp3`

**Alternative formats supported:**
- `cv-audio.ogg` (for better compression)
- `cv-audio.wav` (for highest quality)

The modal will automatically try all three formats.

### Visual CV File
**Location:** `/images/cv-visual.png` or `/files/cv-visual.pdf`

**Steps:**
1. Create your visual CV (the infographic-style resume you showed)
2. Export as PNG (for web display) or PDF (for download)
3. Place in:
   - PNG: `images/cv-visual.png`
   - PDF: `files/cv-visual.pdf`

### Text CV PDF
**Location:** `/files/cv-text.pdf`

**Steps:**
1. Export your text CV as PDF
2. Place in `files/cv-text.pdf`

---

## File Structure

```
vibe_coding_rupak_thapa/
├── files/
│   ├── cv-audio.mp3      ← Add your audio CV here
│   ├── cv-text.pdf       ← Add text CV PDF here
│   └── cv-visual.pdf     ← Add visual CV PDF here (optional)
└── images/
    └── cv-visual.png     ← Add visual CV image here (for preview)
```

---

## Current File Paths in Code

The modal is configured to look for:
- **Audio:** `/files/cv-audio.mp3` (with fallbacks to `.ogg` and `.wav`)
- **Visual Image:** `/images/cv-visual.png`
- **Visual PDF:** `/files/cv-visual.pdf`
- **Text PDF:** `/files/cv-text.pdf`

If you use different filenames, update the paths in `_includes/cv-modal.html`.

---

## Testing

After adding files:
1. Restart Jekyll server if needed
2. Click each CV button in the hero section
3. Verify:
   - Text CV opens in iframe
   - Visual CV displays image
   - Audio CV plays audio
   - Download buttons work

---

## Audio Recording Tips

- **Format:** MP3, 128-192 kbps bitrate
- **Duration:** 2-5 minutes recommended
- **Content:** Brief professional summary, key experiences, skills
- **Quality:** Use a good microphone, quiet environment
- **File size:** Keep under 10MB for web hosting


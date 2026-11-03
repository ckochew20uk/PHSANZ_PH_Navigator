# Logo kit and logo-derived colour preview

Prepared 3 November 2026 following the user's request for a standard digital kit and coordinated website preview.

## Source and files

The uploaded SVG is stored unmodified at `design/brand/logo-master.svg`. Derived digital exports, the palette, license attribution, usage guide, visual kit page and downloadable ZIP are in `artifacts/ph-navigator/public/brand/`.

Open `/brand/` on the preview site to compare nine variants and download files. `brand/ph-navigator-digital-kit.zip` includes the original source, horizontal and stacked wordmarks, colour/white/navy marks, SVG and PNG exports, browser icons, home-screen icon, social image and usage notes. No external fonts are needed to display the outlined SVG wordmarks. The wordmark uses outlined DejaVu Sans Bold; license attribution is included.

## Website application

- Colour horizontal wordmark in navigation, white horizontal wordmark directly on the footer navy background.
- Updated browser favicon and 180px home-screen icon; icon URLs use Vite's base URL.
- Shared light-mode primary/foreground tokens use logo navy, secondary/focus tokens use accessible deep teal, with sea-mist accent surfaces. Homepage scoped colours and its placeholder illustration match the kit. Existing warm peach/lavender accents and white space are retained.
- Full desktop navigation starts at 1280px so the wordmark fits without overflow. The existing compact navigation is available below that breakpoint, with matching bottom padding.
- Restored browser pinch zoom by removing the maximum-scale restriction.
- A social-card asset is included; publishing absolute social-image metadata awaits a chosen canonical URL.

This is the requested brand application, not completion of the original Stage 2 or Stage 3 programme. Clinical content, existing routes, backend services and secrets are preserved. No organisations are newly represented as endorsing the identity.

## Validation

- Frontend TypeScript passes.
- Cloudflare production build (`BASE_PATH=/`) passes; existing Vite bundle-size advisory remains.
- Chromium layouts at 320, 390, 768, 1024, 1280 and 1440px have no horizontal overflow.
- All 12 homepage destinations render. Keyboard focus and reduced-motion checks pass; no runtime errors observed.
- Nine logo variants load; brand-kit page fits desktop and mobile; header/footer assets and all six primary download destinations return successfully.
- Contrast on white: navy 13.31:1; deep teal 5.37:1. Brighter sail teal 3.35:1 and ocean blue 4.01:1 are decorative accents, not small-text colours.
- SVG exports parse as XML. PNG exports have the documented dimensions; transparent logos retain alpha and the home-screen icon has an opaque background. Original source is byte-for-byte identical to the upload.

Screenshots: [homepage desktop](stage-1-screenshots/homepage-desktop.png), [homepage mobile](stage-1-screenshots/homepage-mobile.png), [brand kit](stage-1-screenshots/brand-kit-desktop.png).

A full WCAG audit and all-page design-system review remain outstanding. Shared dark-mode tokens are unchanged. No newsletter test submission was made.

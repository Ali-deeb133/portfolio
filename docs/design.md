# Design

## Feel
Clean, modern, professional, lots of whitespace. Light and fresh, with tasteful motion that adds polish without distracting from the content.

## Colors
| Role | Value |
|---|---|
| Primary (sky blue) | `#0EA5E9` |
| Primary light | `#38BDF8` |
| Tint backgrounds | `#E0F2FE` / `#F0F9FF` |
| Background | `#FFFFFF` |
| Text | `#0F172A` |
| Secondary text | `#475569` |

Define these as Tailwind theme colors so they can be changed in one place.

## Typography
- Headings: a bold modern sans-serif (e.g. Inter or Plus Jakarta Sans)
- Body: same family, regular weight
- Small labels / tech tags: a monospace font (e.g. JetBrains Mono)

## Animations (Framer Motion)
- **Hero layout:** split — text on the left, code editor visual on the right; on mobile they stack with the visual below the text
- **Hero entrance:** name, title, subtitle, buttons and the editor appear with a staggered fade-up
- **Hero subtitle:** "I build [word]" — the last word rotates through a list every ~2.5s with a smooth slide/fade
- **Hero code editor:** dark editor window (macOS-style dots, file tab) that types out a short React component snippet, pauses, clears, then types a short Express endpoint snippet, and loops. Syntax highlighting with sky-blue accents. Subtle 3D tilt on mouse move
- **Hero background:** subtle dot-grid pattern + a soft sky-blue radial glow that follows the cursor (devices with a mouse only; static elsewhere)
- **Hero buttons:** slight magnetic pull toward the cursor on hover
- **Scroll-down indicator:** small arrow at the bottom of the hero with a gentle bounce (large screens only); links to the next section
- **Sections:** fade/slide in when scrolled into view (once, not on every scroll)
- **Project cards:** lift slightly with a stronger shadow on hover
- **Buttons:** smooth color/scale transitions on hover
- **Scroll progress bar:** thin sky-blue bar at the top of the page
- **Navbar:** transparent at the top; white with blur + subtle shadow after scrolling
- All motion is disabled or reduced when `prefers-reduced-motion` is set. The hero then shows its final static state: one subtitle word, the first snippet fully typed, no tilt, no cursor glow movement, no magnetic pull, no bounce

Keep it tasteful, not overwhelming. The rotating words and code snippets live in `data.ts`.

## Navigation
- Sticky navbar with links: Home, About, Skills, Projects, Contact
- Clicking a link smooth-scrolls to its section
- The active link is highlighted based on the current scroll position
- Mobile: hamburger menu with an animated open/close

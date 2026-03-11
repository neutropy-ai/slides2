# Neutropy Decks

Presentation-style slide deck framework built with React, Tailwind CSS, and a liquid glass component system.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Use arrow keys, spacebar, or swipe to navigate.

## Deploy to Vercel

```bash
npm run build
npx vercel --yes --prod
```

Or connect the repo and Vercel auto-deploys on push.

## Architecture

```
src/
├── components/           # Reusable Neutropy deck system
│   ├── Deck.jsx          # Slide engine (nav, keyboard, touch, context)
│   ├── Slide.jsx         # Base slide (bg, activation, re-mount for anim re-trigger)
│   ├── Topbar.jsx        # Logo + metadata bar
│   ├── glass/            # Liquid glass component library
│   │   ├── GlassCard.jsx     # Card with backdrop blur + refraction highlight
│   │   ├── GlassPhone.jsx    # Phone mockup with frosted frame
│   │   ├── GlassNav.jsx      # Navigation dots in frosted pill
│   │   ├── GlassDivider.jsx  # Gradient-faded divider with teal glow
│   │   └── FrostedOverlay.jsx # Overlay panel for callouts
│   └── anim/             # Animation primitives
│       ├── SlideUpLine.jsx    # Clip-mask reveal (headings)
│       ├── BlurReveal.jsx     # Blur dissolve (body text, metadata)
│       └── FadeUp.jsx         # Translate + opacity (cards, stats)
├── decks/
│   └── cervino/          # Cervino Medical deck
│       ├── index.jsx     # Deck assembly
│       └── slides/       # Individual slide components
├── App.jsx
└── main.jsx
```

## Adding a New Client Deck

1. Create `src/decks/your-client/`
2. Create slide components using the shared system:

```jsx
import Slide from '../../components/Slide'
import Topbar, { SlideNumber } from '../../components/Topbar'
import { GlassDivider, GlassCard } from '../../components/glass'
import { SlideUpLine, BlurReveal, FadeUp } from '../../components/anim'

export default function MySlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} atmosphere="radial-gradient(...)">
      <Topbar right={<SlideNumber n={1} />} />
      <GlassDivider />
      {/* Your content */}
    </Slide>
  )
}
```

3. Assemble in `index.jsx`:

```jsx
import Deck from '../../components/Deck'
import MySlide from './slides/MySlide'

export default function MyDeck() {
  return <Deck><MySlide /></Deck>
}
```

4. Update `App.jsx` to render your deck.

## Glass Component API

### GlassCard
- `variant`: 'default' | 'elevated' | 'teal' | 'solid'
- `hover`: boolean (hover lift effect)
- `glow`: boolean (teal glow on hover)

### GlassPhone
Wraps phone screen content. Use with `PhoneCallHeader`, `PhoneTranscript`, `TranscriptMsg`, `RoutingTag`.

### FrostedOverlay
- `tealAccent`: boolean (left accent bar + teal tint)

### GlassDivider
Drop-in horizontal divider with gradient fade and teal underglow.

### GlassNav
Auto-rendered by `Deck`. Frosted pill with gradient active dot.

## Animation API

All animation components re-trigger when navigating back to a slide (via Slide's key re-mount).

### SlideUpLine
Clip-mask reveal. Use for heading lines.
- `delay`: seconds
- `duration`: seconds (default 0.7)

### BlurReveal
Blur dissolve. Use for body text, kickers, metadata.
- `delay`, `duration` (default 0.9)
- `as`: HTML tag (default 'div')

### FadeUp
Translate + fade. Use for cards, stats, UI elements.
- `delay`, `duration` (default 0.6), `distance` (default 30px)

## Video Backgrounds

Add video backgrounds to any slide via the `background` prop on `Slide`:

```jsx
<Slide
  background={
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="https://stream.mux.com/..."
      autoPlay muted loop playsInline
    />
  }
>
```

For HLS streams, add hls.js and use useEffect to attach.

## Color System

- Teal: `#06b6d4` (primary accent)
- Teal 2: `#0ea5e9` (gradient endpoint)
- Muted: `#80838e` (secondary text)
- Muted 2: `#3d4250` (tertiary)
- Background: `#000000`

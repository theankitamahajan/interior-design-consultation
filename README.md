# InteriorDesignConsultation 

A digital presence for Atelier Maren — an interior design studio focused on restraint, material clarity, and spatial calm.

This project is a Next.js application exploring how digital interfaces can reflect the same discipline as physical design: intentional spacing, quiet typography, and minimal friction between intent and outcome.

---

## Perspective

Rather than treating this as a standard marketing site or form-driven application, the focus was to approach it as a **design artifact** in itself.

Every decision prioritizes:
- reduction over addition  
- clarity over abstraction  
- composition over complexity  

The result is a system that behaves more like an editorial space than a conventional web app.

---

## Stack

- Next.js (App Router)
- TypeScript
- React Server Components
- Server Actions / Route Handlers
- CSS Variables as design tokens
- File-based persistence (development context)

---

## Structure

app/
  page.tsx                  # Studio home
  consultation/            # Multi-step client intake
components/                # UI primitives and composition blocks
data/
  submissions.json         # Development persistence layer
app/globals.css           # Design tokens and global styles

---

## Consultation Flow

The consultation experience is intentionally structured as a **guided conversation** rather than a form.

It is composed of three stages:

### 1. Aesthetic Direction
Clients are introduced to curated spatial languages such as:
- Warm Minimalism
- Japandi Calm
- Modern Heritage
- Soft Industrial
- Quiet Luxury

Each option is written as a design statement rather than a selectable field.

### 2. Project Scope
Defines spatial and logistical boundaries:
- Program (rooms / areas)
- Timeline expectations
- Budget range

### 3. Contact
A minimal capture of identity and intent:
- Name
- Email
- Notes (optional context)

---

## Design System

The interface is governed entirely through existing design tokens defined in `globals.css`.

No additional visual language was introduced.

Principles:
- consistent typographic rhythm
- restrained color usage
- deliberate whitespace
- absence of decorative UI patterns

The intention is coherence with the studio’s physical design ethos.

---

## Data Handling

Submissions are persisted via a server-side write operation during development.

This is intentionally simple:
- no external database layer
- no orchestration overhead
- explicit, traceable data flow

It reflects the project’s focus on clarity over infrastructure complexity.

---

## Running Locally

npm install
npm run dev

Application available at:
http://localhost:3000

---

## Tooling

npm run build        # production build
npm run lint         # linting
npm run typecheck    # type validation

---

## Notes

- Client-side interactivity is used only where necessary
- Server-first patterns are preferred
- Refactoring focused on reducing conceptual weight, not increasing abstraction
- UI decisions prioritize continuity with the existing design language

---

## AI Collaboration

An AI assistant was used as a collaborative tool during development for:
- iterative refactoring suggestions
- scaffolding of server actions and form flow
- validation of implementation approaches

A full interaction log is included in `/conversation`, reflecting the iterative nature of the work.

---

## Future Direction

With additional time, the system could evolve toward:
- persistent database layer (PostgreSQL / Prisma)
- asynchronous submission handling and notifications
- administrative review interface
- refined motion system for state transitions

The current implementation intentionally stops short of over-engineering.

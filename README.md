# Atelier Maren — Candidate Evaluation

Thanks for taking the time to work through this. We're hiring engineers who pair good code judgment with a designer's eye, and this exercise is shaped around both.

The repo contains a small Next.js site for **Atelier Maren**, a (fictional) interior design studio. Parts of it were written carefully. Parts of it were generated quickly with an AI assistant and never cleaned up. Your job has two parts.

---

## Part 1 — Refactor (~45 min)

Some of the components and data-fetching code in this repo are messy: over-abstracted, defensively coded, ignoring the design tokens, or using client-side patterns where the server would be cleaner. Find them, simplify them, and bring them up to the standard of the rest of the codebase.

We're more interested in your judgment about **what to fix** than in finding every single issue. A short note in your PR description about what you found and what you chose to leave alone (and why) is welcome.

## Part 2 — Build (~45 min)

Add a **`/consultation`** page where a prospective client can request a design consultation. It should be a short multi-step intake — something like:

1. Style preferences (offer a few options of your choosing)
2. Project scope (rooms, timeline, budget range)
3. Contact details

Submissions should persist via a route handler or server action. `data/submissions.json` is set up for you to append to, but feel free to take a different approach if you'd rather.

**The page should look like it belongs in this site.** Match the type, palette, spacing, and tone of the existing pages. Reuse the design tokens defined in `app/globals.css` — don't introduce new colors, font stacks, or border-radius values without a reason.

A note on tone: the consultation is often the first thing a prospective client does with us, and it's an opportunity to demonstrate our taste before they ever meet us. Treat it as a small introduction, not an intake form. Style preferences in particular should feel like how a designer talks about style — not how a CRM does. We trust your judgment on the specifics.

---

## What we're looking at

- **Code judgment** — what you fix, what you delete, what you leave alone
- **Design taste** — does the new page feel like part of the same site?
- **Technical decisions** — server vs client components, validation, error states, accessibility
- **Restraint** — small, considered diffs over sprawling rewrites

## Working with an AI assistant

We expect most candidates will use one — we use them ourselves daily. If you do, **please include your full conversation history** in the `conversation/` directory at the root of the repo. Any format is fine: copy-pasted markdown, exported JSON, screenshots, whatever your tool produces.

We're not grading you on it. We want to understand how you collaborate with the agent: where you steered it, where you pushed back, and where you accepted what it gave you.

If you didn't use one, that's also fine. Just note it in your PR description.

## Submitting

Open a PR against `main` from a branch named `candidate/<your-name>`. Your PR description should be brief — a few bullets on what you changed, anything you'd flag, and anything you'd do next with more time.

## Running it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Time budget

We're targeting **1–2 hours total**. If you spend longer, that's your call — but we're not expecting more. Please don't feel pressure to polish endlessly.

Questions? Email graham@theinteractiveabode.com

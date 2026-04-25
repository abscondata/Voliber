# Voliber Claude Instructions

## Project Context

Voliber is a revenue recovery company for small businesses. It runs disciplined follow-up for unpaid invoices, stale estimates, missed calls, dormant leads, and neglected follow-up so revenue already in the pipeline does not sit untouched.

Voliber is not an AI company, VA company, marketing agency, broad consultancy, law firm, or collections agency. Do not make the site sound or feel like any of those categories.

## Brand And Copy Rules

- Keep the voice institutional, restrained, direct, and operational.
- Lead with revenue already in the pipeline, process ownership, documentation, and client control.
- Avoid harsh collections language, legal pressure, aggressive sales language, fake friendliness, and motivational fluff.
- Do not use AI-forward language.
- Do not invent proof, clients, metrics, scale, testimonials, case studies, certifications, or backend capabilities.
- Keep the visual system minimal: white or off-white background, dark text, one muted accent, large spacing, sharp typography, no illustrations, no gradient blobs.
- Do not use em dashes in public-facing copy.

## Technical Direction

- Use Next.js App Router, TypeScript, and Tailwind CSS.
- Prefer static Server Components for this marketing site.
- Keep components small and reusable only when reuse is real.
- Do not add backend infrastructure unless the project already has the provider and environment setup.
- Keep the contact form honest. If it is a mailto shell, make that behavior clear in code and copy.

## Coding Discipline

Use the principles from forrestchang/andrej-karpathy-skills, adapted for this project:

### 1. Think Before Coding

- Do not assume ambiguous requirements.
- State assumptions before implementation.
- Present tradeoffs when there are multiple reasonable interpretations.
- Push back if a simpler approach is better.
- Stop and ask when the task is unclear.

### 2. Simplicity First

- Use the minimum code that solves the stated problem.
- Do not add speculative features.
- Do not create abstractions for one-off use.
- Do not add configurability unless requested.
- If a change can be 50 lines instead of 200, simplify it.

### 3. Surgical Changes

- Touch only the files required for the task.
- Do not refactor unrelated code.
- Do not reformat unrelated sections.
- Match existing style.
- Remove only unused imports, variables, or code created by your own changes.
- Mention unrelated dead code instead of deleting it.

### 4. Goal-Driven Execution

- Convert each task into verifiable success criteria.
- For bugs, reproduce or identify the failure before changing code.
- For feature work, define what must be true when complete.
- Run the smallest relevant verification command.
- Loop until the stated checks pass.

For every non-trivial task, begin with:

- Assumptions
- Success criteria
- Minimal plan
- Verification steps

For trivial one-line fixes, keep the process lightweight.

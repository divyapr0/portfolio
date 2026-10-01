# Pleurat Shala — Product Designer and AI Product Builder

## Mission
Create implementation-ready, token-driven UI guidance for Pleurat Shala — Product Designer and AI Product Builder that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Pleurat Shala — Product Designer and AI Product Builder
- URL: https://www.pleurat.com/
- Audience: readers and knowledge seekers
- Product surface: dashboard web app

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=General Sans`, `font.family.stack=General Sans, Helvetica Neue, Helvetica, Arial, sans-serif`, `font.size.base=17px`, `font.weight.base=400`, `font.lineHeight.base=26.35px`
- Typography scale: `font.size.xs=10.5px`, `font.size.sm=12px`, `font.size.md=12.5px`, `font.size.lg=13px`, `font.size.xl=14.5px`, `font.size.2xl=15px`, `font.size.3xl=16px`, `font.size.4xl=17px`
- Color palette: `color.text.primary=#16140e`, `color.text.secondary=#57534a`, `color.text.tertiary=#8b8577`, `color.surface.muted=#fbf7e6`, `color.surface.base=#000000`, `color.surface.raised=#f3b44a`, `color.surface.strong=#efe9d2`
- Spacing scale: `space.1=4px`, `space.2=6px`, `space.3=7px`, `space.4=9px`, `space.5=9.61px`, `space.6=9.62px`, `space.7=10px`, `space.8=11px`
- Radius/shadow/motion tokens: `radius.xs=3px`, `radius.sm=50px` | `shadow.1=rgba(22, 20, 14, 0.07) 2px 3px 0px 0px`, `shadow.2=rgba(22, 20, 14, 0.16) 0px 0px 0px 1px inset`, `shadow.3=rgb(22, 20, 14) 2px 0px 0px 0px inset`, `shadow.4=rgba(22, 20, 14, 0.05) 3px 5px 0px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=250ms`, `motion.duration.normal=500ms`, `motion.duration.slow=800ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (27), cards (13), buttons (11), navigation (3), inputs (1).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

# Sprint 1 Planning

## Sprint 1 Goal

Stand up the CareerConnect project (repo, board, docs, AI logging) and
deliver two working, demoable features — account registration/login and
resume upload/profile management — on a real (if minimal) tech stack,
so Sprint 2 can build job postings and applications on solid ground.

## Product Backlog

All 10 user stories (see `docs/user-stories.md`) grouped into epics:

| Epic | Stories | Sprint |
|------|---------|--------|
| Authentication | US-01, US-02 | Sprint 1 — done |
| Profile & Resume | US-03, US-04 | Sprint 1 — done |
| Job Postings | US-05, US-06, US-07 | Sprint 2+ |
| Applications | US-08, US-09 | Sprint 2+ |
| Saved Jobs | US-10 | Sprint 3+ |

## Prioritization

| Story | Priority | Rationale |
|-------|----------|-----------|
| US-01, US-02 | High | Required Sprint 1 demo feature; every other feature depends on having an account. |
| US-03, US-04 | High | Required Sprint 1 demo feature. |
| US-08, US-09 | High | Core value proposition of the app (application tracking) — target early in Sprint 2. |
| US-05, US-07 | Medium | Needed before applications are meaningful, but not blocking Sprint 1. |
| US-06, US-10 | Low | Nice-to-have refinements, not core path. |

## Effort Estimation (story points, Fibonacci)

| Story | Points | Actual (Sprint 1) |
|-------|--------|---------------------|
| US-01 | 2 | Done |
| US-02 | 2 | Done |
| US-03 | 3 | Done |
| US-04 | 2 | Done |
| US-05 | 3 | Backlog |
| US-06 | 2 | Backlog |
| US-07 | 3 | Backlog |
| US-08 | 3 | Backlog |
| US-09 | 3 | Backlog |
| US-10 | 2 | Backlog |

Sprint 1 delivered: **9 points** (US-01–US-04).

## Team Capacity

**Team size:** 1 (solo for Sprint 1; will revise when teammates join).

> **Needs your input:** estimate realistic hours/week you can commit to
> this project alongside coursework. Placeholder below assumes 10 hrs/week
> — adjust and I'll recompute the sprint capacity.

- Sprint 1 window: Sept 15 – Sept 28, 2026 (13 days / ~1.9 weeks)
- Estimated capacity at 10 hrs/week: **~19 hours**
- Actual Sprint 1 scope (9 points) fit comfortably within this — Sprint 2
  should plan for a full team's combined capacity once members join.

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Solo team = single point of failure (illness, other coursework deadlines) | Medium | High | Keep scope minimal per sprint; document everything (this repo) so a joining teammate can onboard fast. |
| Team roster may change after Sprint 1 (teammates assigned) | Medium | Medium | Keep backlog/estimates in GitHub Issues, not just this doc, so re-planning capacity is a quick edit, not a rebuild. |
| SQLite dev database is local-only, not production-durable | Low (Sprint 1), High (later) | Medium | Fine for Sprint 1 demo; flag as a Sprint 2+ decision point (Postgres migration before deploying anywhere shared). |
| Uploaded resumes are stored on local disk (`public/uploads/`), not durable in a serverless deploy | Low (Sprint 1) | Medium | Acceptable for local demo; revisit storage (e.g. blob storage) before any real deployment. |
| Submission deadline (Sept 28) leaves limited buffer if scope creeps | Medium | High | Track every deliverable in the Sprint 1 tracker; cut scope (not quality) if behind. |

## Definition of Ready / Definition of Done

See `docs/team-process.md`.

## Appendix A — Sprint 1 Work Plan

| Issue # | Title | Type | Owner | Target Date | Priority | Status |
|---------|-------|------|-------|--------------|----------|--------|
| — | GitHub repo, folders, README, tracker | Task | Mahmoud Abdalla | Sept 15 | High | Completed |
| — | Tech stack decision + app scaffold | Task | Mahmoud Abdalla | Sept 15 | High | Completed |
| [#1](https://github.com/MahmoudAbdalla28/CareerConnect/issues/1) | US-01: Account registration | User Story | Mahmoud Abdalla | Sept 15 | High | Completed |
| [#2](https://github.com/MahmoudAbdalla28/CareerConnect/issues/2) | US-02: Secure login | User Story | Mahmoud Abdalla | Sept 15 | High | Completed |
| [#3](https://github.com/MahmoudAbdalla28/CareerConnect/issues/3) | US-03: Resume upload | User Story | Mahmoud Abdalla | Sept 15 | High | Completed |
| [#4](https://github.com/MahmoudAbdalla28/CareerConnect/issues/4) | US-04: Profile editing | User Story | Mahmoud Abdalla | Sept 15 | High | Completed |
| [#5](https://github.com/MahmoudAbdalla28/CareerConnect/issues/5) | US-05: Post a job opening | User Story | Unassigned | Sprint 2 | Medium | Backlog |
| [#6](https://github.com/MahmoudAbdalla28/CareerConnect/issues/6) | US-06: Edit/close a job posting | User Story | Unassigned | Sprint 2 | Low | Backlog |
| [#7](https://github.com/MahmoudAbdalla28/CareerConnect/issues/7) | US-07: Search/filter jobs | User Story | Unassigned | Sprint 2 | Medium | Backlog |
| [#8](https://github.com/MahmoudAbdalla28/CareerConnect/issues/8) | US-08: Submit an application | User Story | Unassigned | Sprint 2 | High | Backlog |
| [#9](https://github.com/MahmoudAbdalla28/CareerConnect/issues/9) | US-09: Track application status | User Story | Unassigned | Sprint 2 | High | Backlog |
| [#10](https://github.com/MahmoudAbdalla28/CareerConnect/issues/10) | US-10: Save favorite jobs | User Story | Unassigned | Sprint 3 | Low | Backlog |
| — | AI usage log (Sprint 1) | Task | Mahmoud Abdalla | Sept 28 | High | In Progress |
| — | Team-generated user stories | Task | Mahmoud Abdalla | Sept 28 | High | Not Started |
| — | Meeting minutes | Task | Mahmoud Abdalla | Sept 28 | Medium | Not Started |
| — | Sprint 1 submission package | Task | Mahmoud Abdalla | Sept 28 | High | Not Started |

**Sprint 1 deadline: September 28, 2026.**

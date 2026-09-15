# Team Process

## Workflow

Work is tracked as GitHub Issues on the [CareerConnect project board](https://github.com/users/MahmoudAbdalla28/projects/1),
moving through these columns:

1. **Backlog** — identified, not yet scheduled into a sprint.
2. **To Do** — scheduled for the current sprint, not started.
3. **In Progress** — actively being worked on.
4. **In Review** — code complete, pull request open, awaiting review/testing.
5. **Done** — merged to `main` and verified working.

Every issue is a user story (label `user-story`) or a task (label `task`),
tagged with a priority (`priority:high/medium/low`) and a feature area
(`area:auth`, `area:profile`, `area:jobs`, `area:applications`).

## Branching Strategy

- `main` is always deployable.
- New work happens on `feature/<issue-number>-<short-slug>`, e.g.
  `feature/5-post-job-opening`.
- Bug fixes use `fix/<issue-number>-<short-slug>`.
- Branches are deleted after merging.

## Pull Request Process

- Every non-trivial change goes through a PR referencing its issue
  (`Closes #5`).
- While the team is solo, PRs are self-reviewed against the Definition of
  Done below before merging — this keeps the habit in place so it's a
  non-event once teammates join and reviews become mandatory.
- Once the team has 2+ members: at least one other member must approve
  before merge; no self-merging your own PR.
- CI (once configured) must pass before merge.

## Code Review Process

Reviewers check for:
- Does it satisfy the linked issue's acceptance criteria?
- Was it actually run/tested, not just read? (Screenshots or a short
  test note in the PR description.)
- No obvious security issues (unvalidated input, exposed secrets,
  unescaped output).
- Consistent with existing patterns in the codebase (naming, file
  structure, error handling).

## Definition of Ready

A story can enter a sprint when it has:
- A clear "As a ___, I want ___, so that ___" statement.
- An owner assigned.
- A priority and effort estimate.
- No unresolved blocking dependency on another story.

## Definition of Done

A story is Done when:
- The feature works end-to-end and has been manually tested (not just
  "compiles"), ideally in the actual running app.
- Code is merged to `main` via a reviewed PR.
- Any new environment variables, setup steps, or schema changes are
  reflected in the README.
- Any AI assistance used to build it is logged in `AI_Log/`.
- The corresponding GitHub Issue is closed and its project board status
  is moved to Done.

# CareerConnect

## Sprint 1 Submission — SOEN 341 Software Process, Fall 2026

**Team Members:** Mahmoud Abdalla

<div style="page-break-after: always;"></div>

## README

# CareerConnect

## Project Description
CareerConnect is a web-based platform designed to help job seekers manage their job search activities. The system allows users to create profiles, upload and manage resumes, search for job opportunities, track submitted applications, and follow the progress of their application process. The platform centralizes job-search activities and helps users stay organized throughout their career development journey.

**Primary Users:** Job Seekers and Recruiters.

### Problem
Job seekers typically juggle applications across many different companies and platforms, with no single place to track statuses, deadlines, or resume versions. Recruiters similarly lack a lightweight way to post jobs and see qualified applicants in one place.

### Proposed Solution
A centralized platform where job seekers can register, build a profile, upload resumes, search and save job postings, apply to jobs, and track the status of every application (Applied, Interview, Offered, Rejected) from one dashboard. Recruiters can post and manage job listings. The platform will also include a Generative AI feature to assist with resume feedback / job matching.

### Team Members
| Name | GitHub Username |
|------|------------------|
| Mahmoud Abdalla | MahmoudAbdalla28 |

### Technologies
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database:** SQLite via Prisma ORM
- **Authentication:** NextAuth.js (credentials-based, hashed with bcrypt)
- **AI integration:** TBD — planned for the resume feedback / job-matching feature

### Setup Instructions
1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/MahmoudAbdalla28/CareerConnect.git
   cd CareerConnect
   npm install
   ```
2. Create a `.env` file in the project root:
   ```bash
   DATABASE_URL="file:/absolute/path/to/CareerConnect/prisma/dev.db"
   NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
   NEXTAUTH_URL="http://localhost:3000"
   ```
   Use an **absolute path** for `DATABASE_URL` — a relative path resolves differently for the Prisma CLI vs. the running app.
3. Apply the database schema:
   ```bash
   npx prisma migrate dev
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000.

### Proposed Features
- User registration, authentication, and profile management
- Resume upload and management
- Job posting management for recruiters
- Job search and filtering capabilities
- Job application submission
- Application status tracking (Applied, Interview, Offered, Rejected)
- Application history dashboard
- Notifications and reminders for application deadlines
- Saved jobs and favourites
- AI-assisted resume feedback / job-matching suggestions (Generative AI feature)

---

## GitHub Repository Link

**https://github.com/MahmoudAbdalla28/CareerConnect**

---

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
| — | Meeting minutes | Task | Mahmoud Abdalla | Sept 28 | Medium | In Progress |
| — | Sprint 1 submission package | Task | Mahmoud Abdalla | Sept 28 | High | In Progress |

**Sprint 1 deadline: September 28, 2026.**

_Full detail on backlog, prioritization rationale, risks, and effort
estimation is in `docs/sprint-planning.md`; team process (workflow,
branching, DoR/DoD) is in `docs/team-process.md`; user stories are in
`docs/user-stories.md`; the AI usage log is in
`AI_Log/Mahmoud_Abdalla/sprint1-ai-usage-log.md`._

# CareerConnect

## Project Description
CareerConnect is a web-based platform designed to help job seekers manage their job search activities. The system allows users to create profiles, upload and manage resumes, search for job opportunities, track submitted applications, and follow the progress of their application process. The platform centralizes job-search activities and helps users stay organized throughout their career development journey.

**Primary Users:** Job Seekers and Recruiters.

## Problem
Job seekers typically juggle applications across many different companies and platforms, with no single place to track statuses, deadlines, or resume versions. Recruiters similarly lack a lightweight way to post jobs and see qualified applicants in one place.

## Proposed Solution
A centralized platform where job seekers can register, build a profile, upload resumes, search and save job postings, apply to jobs, and track the status of every application (Applied, Interview, Offered, Rejected) from one dashboard. Recruiters can post and manage job listings. The platform will also include a Generative AI feature to assist with resume feedback / job matching.

## Team Members
| Name | GitHub Username |
|------|------------------|
| Mahmoud Abdalla | MahmoudAbdalla28 |

## Technologies
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database:** SQLite via Prisma ORM
- **Authentication:** NextAuth.js (credentials-based, hashed with bcrypt)
- **AI integration:** TBD — planned for the resume feedback / job-matching feature

## Setup Instructions
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

## Proposed Features
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

## Repository
https://github.com/MahmoudAbdalla28/CareerConnect

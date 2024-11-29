# 📦 Dynamic Blog Content Application + CMS

## 📚 Navigation

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features & Functionality](#features-and-functionality)
  - [Task 1: Project Setup and Configuration](#task-1-project-setup-and-configuration)
  - [Task 2: Core Blog Functionality](#task-2-core-blog-functionality)
  - [Task 3: SEO, Performance, and Deployment](#task-3-seo-performance-and-deployment)
- [Project Files Overview](#project-files-overview)
- [Instructions to Run the Project](#instructions-to-run-the-project)
- [License](#license)

## Project Description

This project is a **Dynamic Blog Content Application** built using **Next.js 15 App Router** with **React Server Components (RSC)** and **TypeScript**. It integrates with **Strapi CMS** to provide dynamic blog content. The application is optimized for SEO, supports modern image handling, and implements advanced features like **Incremental Static Regeneration (ISR)**, **error boundaries**, and **partial prerendering**.

## Tech Stack

- **Next.js 15**: With **App Router** and **React Server Components (RSC)**.
- **React 19**: UI components.
- **TypeScript**: Type safety for JavaScript.
- **Strapi 5**: Headless CMS for managing blog posts and content.
- **Tailwind CSS**: For fast, responsive UI development.
- **React Markdown**: To render rich text content.
- **Rehype-raw**: For rendering raw HTML content in React components.
- **Remark-gfm**: For GitHub Flavored Markdown (GFM) support in markdown rendering.
- **Next.js Image Optimization**: For modern image handling and performance.
- **Sitemap and Robots.txt**: For SEO and search engine crawl optimization.

## Features & Functionality

### Task 1: Project Setup and Configuration

- Initialized a **Next.js 14+** project with **TypeScript** and **App Router**.
- Set up **Strapi CMS** to manage blog content.
- Configured environment variables for CMS and app integration.
- Established the basic project structure with API routes, components, and pages.

### Task 2: Core Blog Functionality

#### Blog List Page (/blog)

- Implemented a **paginated blog list** (with a minimum of 2 pages).
- Each post displays a **featured image**, **title**, **description**, **date**, and an optional **read-time estimate**.
- Built **server-side search functionality** with query parameters.
- Included **loading states** for better UX during data fetching.

#### Single Post Page (/blog/[slug])

- Implemented **dynamic routing** for individual blog posts.
- Rendered **rich text content** and **optimized images**.
- Added **dynamic metadata** for SEO purposes.

### Task 3: SEO, Performance, and Deployment

- Implemented **dynamic metadata** for SEO, ensuring correct `<meta>` tags and **structured data**.
- Maintained proper **heading hierarchy** for accessibility and SEO.
- Configured **sitemap.xml** and **robots.txt** for better crawlability and SEO.
- Deployed the application on **Vercel** and connected it to **Strapi Cloud**.

## Project Files Overview

### Frontend

<img alt="App ScreenShots" src="https://i.imgur.com/i7BzsJs.png">

### Backend

The **backend** consists of **Strapi CMS** integrated into the application.

- **Strapi CMS**:
  - Default structure for handling blog posts, including fields for title, description, content, date, cover image, etc.
  - Provides an API for fetching blog content via REST endpoints.

  The backend setup is fairly standard for a headless CMS, with a RESTful API that is used by the frontend to fetch data dynamically.

# Instructions to Run the Project

## 1. Clone the repository:

```bash
git clone https://github.com/KhromenkoDaniel/promova_blog_test_task.git
```

## 2. Navigate to the project directory:

```bash
cd promova_blog_test_task
```

## 3. Navigate to the backend directory:

```bash
cd backend
```

## 4. Install the dependencies:

```bash
npm install
```

## 5. Set up environment variables:

```bash

# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=54Eosb60EwUXGeViGpa5XQ==,gd2Wr5QTs/C/9lxqLHXxWQ==,uMTy0VaL8ho8v3WHKN+WcQ==,i0M//vvWEdSDeHKNOi1+Uw==
API_TOKEN_SALT=EWG33CJo8wGpd5D5sHaCGQ==
ADMIN_JWT_SECRET=/HIzoU5NFD95FbTMqXWlgw==
TRANSFER_TOKEN_SALT=PmGMiTix9CXEoxDUEBrwpg==

# Database
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=G6jWcDsJYiWf6HegefVbmQ==

DEBUG=strapi:* npm start
```

## 6. Start the backend server:

```bash
npm run develop
```

// now frontend part

## 7. Navigate to the frontend directory:

```bash
cd ../frontend
```

## 8. Install the dependencies:

```bash
npm install --legacy-peer-deps
```

## 9. Set up environment variables:

```bash
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_API_TOKEN=dd2617010ed2210f703843ab7ce42c2e61531cad1ae94e4496aab56ce3c6133ab78c8337d85fd07cf5c7f831295d4c761b070181f194043b8c1de6a3086ad08d15db2a7e9aa68e3d1674eb3aac5cc25cbb37db98d8dac2683992eaa1c7ef16a1295b56bfe128dd09ecd2b8a0f16e329f271bf4f179699afda51cdc8eab82bc75
```

## 10. Start the frontend server:

```bash
npm run dev
```

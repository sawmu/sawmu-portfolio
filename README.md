# 🧑‍💻 Portfolio

A modern, responsive **developer portfolio** built with **Next.js 16**, **Sanity.io**, and **Tailwind CSS** — designed to showcase your skills, experience, and projects with a beautiful, data-driven interface.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **CMS** | [Sanity.io](https://www.sanity.io) |
| **Language** | TypeScript |
| **Deployment** | [Vercel](https://vercel.com) |

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sawmu/sawmu-portfolio.git
cd sawmu-portfolio
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Create a `.env.local` file
Add your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

### 4. Run the development server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Generate Sanity types (optional)
Whenever you update your Sanity schema, regenerate the local TypeScript types:
```bash
npm run typegen
```

---

## 🧠 Folder Structure
```
sawmu-portfolio/
├── app/
│   ├── (portfolio)/       # Main portfolio routes
│   ├── globals.css        # Global Tailwind styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI sections
├── sanity/                # Sanity config, queries, and schemas
├── Data/                  # Dummy data for Sanity
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

---

## 🪄 Import Dummy Data (Sanity)

1. Install the Sanity CLI (if not already):
   ```bash
   npm install -g @sanity/cli
   ```

2. Go to the Data folder:
   ```bash
   cd Data
   ```

3. Import all sample data:
   ```bash
   for file in *.ndjson; do sanity dataset import $file production --replace; done
   ```

This will populate your Sanity Studio with skills, projects, blogs, and other portfolio data.

---

## ✨ Features

- ⚡ Server Components with async data fetching  
- 💅 Beautiful Tailwind styling  
- 🧱 Modular component structure  
- 🗂️ Sanity CMS integration for all content  
- 🌗 Dark mode–ready design (optional)  
- 🧑‍🎨 Fully customizable dummy data  

---

## 🧰 Troubleshooting

| Issue | Solution |
|--------|-----------|
| `Error: Unauthorized - Session not found` | Run `sanity logout && sanity login` |
| Node version warning | Use Node `>=20.19` or `>=22.12` |
| `await` not allowed in function | Make the component `async` |
| `Cannot find module 'react'` | Run `npm i react react-dom @types/react` |

---

## 📤 Deployment

Deploy instantly on **Vercel**:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Then connect your GitHub repo to [Vercel](https://vercel.com/new) — it will auto-detect your Next.js app.

### 🔄 Automated CI/CD (GitHub → Vercel)

This repo ships with a GitHub Actions workflow (`.github/workflows/ci-cd.yml`) that:

1. Installs dependencies and runs `npm run lint` + `npm run build` on every push / PR.
2. Deploys to Vercel automatically when the `main` branch passes checks.

To enable it:

1. **Create / link your project on Vercel** and note the following values:
   - `VERCEL_TOKEN` – create in **Account Settings → Tokens**
   - `VERCEL_ORG_ID` – found in the project settings URL (`/dashboard/<org-id>/...`)
   - `VERCEL_PROJECT_ID` – in the project’s **Settings → General**
2. **Add GitHub repository secrets** (Settings → Secrets → Actions):
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
3. **Mirror your environment variables on Vercel** (Project → Settings → Environment Variables) so production builds have Clerk, Sanity, and OpenAI keys.

Once the secrets are in place, pushes to `main` will:

- Validate the code (Biome + `next build`)
- Run a production `vercel build`
- Publish with `vercel deploy --prebuilt --prod`

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity CLI Docs](https://www.sanity.io/docs/cli)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 🧾 License

This project is open source under the **MIT License**.  
Feel free to customize and use it for your own portfolio!

---

**👨‍💻 Created by Saw Mu**  
_Designed to inspire and empower developers to showcase their work beautifully._

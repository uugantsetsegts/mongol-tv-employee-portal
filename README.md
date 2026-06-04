# Монгол ТВ - Ажилтны портал

## Deploy заавар

### 1. GitHub-д оруулах

```bash
# Git суулгах (хэрэв байхгүй бол)
# Windows: https://git-scm.com/download/win

# Repo үүсгэх
git init
git add .
git commit -m "Initial commit"
git branch -M main

# GitHub-руу push
git remote add origin https://github.com/uugantsetsegts/mongol-tv-employee-portal.git
git push -u origin main
```

### 2. Vercel Deploy

#### Option A: Vercel CLI
```bash
# Vercel CLI суулгах
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Option B: GitHub Integration
1. vercel.com рүү орох
2. "Add New Project" дарна
3. GitHub repo сонгоно
4. "Deploy" дарна

### 3. Environment Variables

Vercel-д оруулах:
```
ERXES_ENDPOINT=https://unamongoltv.next.erxes.io/gateway/graphql
ERXES_APP_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ERXES_CMS_ID=6a20179f1919f0d9688404be
CLIENT_PORTAL_ID=juSIlUCnATezkuR0ipTXs
```

## Эхлүүлэх

```bash
npm install
npm run dev
```

Browser: http://localhost:3000

# CI/CD Implementation Guide

## 📋 Overview

This project now has a complete CI/CD pipeline configured for automated testing and deployment.

## 🚀 GitHub Actions Workflows

### 1. Main CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

**Jobs:**

#### 1️⃣ Lint & Type Check
- Runs ESLint
- TypeScript type checking
- Ensures code quality

#### 2️⃣ Build
- Builds Next.js application
- Uploads build artifacts
- Validates production build

#### 3️⃣ E2E Tests
- Runs Playwright tests
- **Multi-browser**: Chromium, Firefox, WebKit
- Parallel execution
- Uploads test results and screenshots

#### 4️⃣ Deploy Preview (PRs only)
- Comments on PR with deployment info
- Automatic preview via Vercel/Netlify

#### 5️⃣ Deploy Production (main branch)
- Automatic deployment on merge
- Post-deploy health checks

### 2. Lighthouse CI (`.github/workflows/lighthouse.yml`)

**Triggers:** Pull requests to `main`

**Features:**
- Performance benchmarking
- Accessibility audits
- Best practices checks
- SEO validation
- Tests multiple pages

### 3. Dependency Review (`.github/workflows/dependency-review.yml`)

**Triggers:** Pull requests

**Features:**
- Security vulnerability scanning
- License compliance
- Dependency updates review
- Automatic PR comments

### 4. CodeQL Analysis (`.github/workflows/codeql.yml`)

**Triggers:**
- Push to main/develop
- Pull requests
- Weekly schedule (Mondays)

**Features:**
- Security vulnerability detection
- Code quality analysis
- JavaScript/TypeScript scanning

## 🎯 Deployment Platforms

### Vercel (Recommended)

**Configuration:** `vercel.json`

**Setup Steps:**

1. **Connect Repository:**
   ```bash
   # Go to vercel.com/new
   # Import your GitHub repository
   # Select: Laboratory_NEXT
   ```

2. **Configure Project:**
   - Framework: Next.js
   - Root Directory: `./`
   - Build Command: `yarn build`
   - Output Directory: `.next`
   - Install Command: `yarn install`

3. **Environment Variables:**
   ```
   NODE_VERSION=22
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

4. **Deploy:**
   - Automatic on git push
   - Preview deployments for PRs
   - Production deployment on main branch

**Features:**
- ✅ Automatic deployments
- ✅ Preview URLs for PRs
- ✅ Edge network (global CDN)
- ✅ Analytics included
- ✅ Zero configuration

### Netlify (Alternative)

**Configuration:** `netlify.toml`

**Setup Steps:**

1. **Connect Repository:**
   ```bash
   # Go to app.netlify.com
   # New site from Git
   # Select your repository
   ```

2. **Build Settings:**
   - Build command: `yarn build`
   - Publish directory: `.next`
   - Node version: 22

3. **Install Plugin:**
   ```bash
   # Netlify will auto-install @netlify/plugin-nextjs
   ```

4. **Deploy:**
   - Automatic on git push
   - Branch deploys enabled

## 🔄 Workflow Process

### For Pull Requests:

```
1. Create PR → 2. CI/CD Runs → 3. Tests Pass → 4. Preview Deploy → 5. Review → 6. Merge
```

**Checks that run:**
- ✅ ESLint
- ✅ TypeScript
- ✅ Build
- ✅ E2E Tests (3 browsers)
- ✅ Lighthouse
- ✅ Dependency Review
- ✅ CodeQL

### For Main Branch:

```
1. Merge PR → 2. CI/CD Runs → 3. Tests Pass → 4. Deploy Production → 5. Health Check
```

## 📊 Status Badges

Add to your README.md:

```markdown
[![CI/CD](https://github.com/YOUR_USERNAME/Laboratory_NEXT/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/YOUR_USERNAME/Laboratory_NEXT/actions/workflows/ci-cd.yml)
[![CodeQL](https://github.com/YOUR_USERNAME/Laboratory_NEXT/actions/workflows/codeql.yml/badge.svg)](https://github.com/YOUR_USERNAME/Laboratory_NEXT/actions/workflows/codeql.yml)
[![Lighthouse](https://github.com/YOUR_USERNAME/Laboratory_NEXT/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/YOUR_USERNAME/Laboratory_NEXT/actions/workflows/lighthouse.yml)
```

## 🛡️ Branch Protection Rules

Recommended settings for `main` branch:

```
☑️ Require pull request reviews before merging
☑️ Require status checks to pass before merging
   - lint
   - build
   - e2e-tests (chromium)
   - e2e-tests (firefox)
   - e2e-tests (webkit)
☑️ Require branches to be up to date before merging
☑️ Require linear history
☑️ Include administrators
```

**Setup:**
1. Go to: Settings → Branches
2. Add rule for `main` branch
3. Enable above protections

## 🔐 Secrets & Environment Variables

### GitHub Secrets (if needed):

```bash
# Settings → Secrets and variables → Actions

# For Vercel deployment (if manual)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id

# For notifications (optional)
SLACK_WEBHOOK_URL=your_slack_webhook
DISCORD_WEBHOOK_URL=your_discord_webhook
```

### Environment Variables:

**Local (.env.local):**
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Production (Vercel/Netlify):**
```bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_VERSION=22
```

## 📈 Monitoring & Analytics

### Vercel Analytics
- Automatic with Vercel deployment
- Real-time performance metrics
- Core Web Vitals tracking

### GitHub Actions Insights
- Workflow run history
- Success/failure rates
- Performance metrics

## 🐛 Troubleshooting

### Build Fails in CI

```bash
# Check logs in GitHub Actions
# Common fixes:
- Ensure yarn.lock is committed
- Check Node version matches (22.x)
- Verify all dependencies are listed
```

### E2E Tests Timeout

```bash
# Increase timeout in playwright.config.ts:
timeout: 60000  # 60 seconds

# Or in workflow:
- name: Run E2E tests
  run: yarn test:e2e --timeout=60000
```

### Deployment Fails

```bash
# Vercel:
- Check build logs in Vercel dashboard
- Verify environment variables
- Ensure build command is correct

# Netlify:
- Check deploy logs
- Verify plugin installation
- Check netlify.toml syntax
```

## ✅ Verification Checklist

After setup, verify:

- [ ] GitHub Actions workflows appear in "Actions" tab
- [ ] Pull requests trigger CI/CD
- [ ] All checks pass on sample PR
- [ ] Vercel/Netlify connected
- [ ] Preview deployments work
- [ ] Production deployment works
- [ ] Branch protection enabled
- [ ] Status badges added to README

## 🚀 Next Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: add CI/CD pipeline"
   git push origin main
   ```

2. **Connect Vercel/Netlify:**
   - Import repository
   - Configure build settings
   - Deploy!

3. **Test CI/CD:**
   - Create a test PR
   - Verify all checks run
   - Check preview deployment

4. **Configure Branch Protection:**
   - Add protection rules
   - Require passing checks

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Playwright CI](https://playwright.dev/docs/ci)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**Status:** ✅ CI/CD Pipeline Ready  
**Version:** 2.1.0  
**Date:** Enero 13, 2026

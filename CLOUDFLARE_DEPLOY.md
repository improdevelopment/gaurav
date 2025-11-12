# 🚀 Cloudflare Pages Deployment with Wrangler CLI

## ✅ Setup Complete!

Wrangler CLI is now installed and configured for your project.

## 🔧 First Time Setup

### 1. Login to Cloudflare
```bash
npx wrangler login
```
This will open your browser to authenticate with Cloudflare.

### 2. Create Cloudflare Pages Project (First Time Only)
```bash
# Build your site first
pnpm run build

# Deploy and create project
npx wrangler pages deploy dist --project-name=gaurav-agarwal
```

Follow the prompts to:
- Select your Cloudflare account
- Create a new Pages project
- Set project name: `gaurav-agarwal`

## 🚀 Deploy Commands

### Quick Deploy (Development)
```bash
pnpm run deploy
```
This will:
1. Build your site (`pnpm run build`)
2. Deploy to Cloudflare Pages
3. Give you a preview URL

### Production Deploy
```bash
pnpm run deploy:prod
```
This will:
1. Build your site
2. Deploy to production branch (main)
3. Update your live site

### Manual Deploy
```bash
# Build first
pnpm run build

# Deploy
npx wrangler pages deploy dist
```

## 📋 Deployment Workflow

### Every Time You Update:

```bash
# 1. Make your changes
# (edit files, add research articles, etc.)

# 2. Deploy
pnpm run deploy

# 3. Done! ✅
# Your site is live at: https://gaurav-agarwal.pages.dev
```

### For Production Updates:
```bash
pnpm run deploy:prod
```

## 🌐 Your URLs

After deployment, you'll get:

### Preview URL (Development)
```
https://[hash].gaurav-agarwal.pages.dev
```

### Production URL
```
https://gaurav-agarwal.pages.dev
```

### Custom Domain (After Setup)
```
https://gaurav.imapro.in
```

## 🔗 Connect Custom Domain

### In Cloudflare Dashboard:

1. Go to **Pages** → **gaurav-agarwal** → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `gaurav.imapro.in`
4. Add DNS records (Cloudflare will guide you)
5. Wait for DNS propagation (5-10 minutes)

### DNS Records Needed:
```
Type: CNAME
Name: gaurav
Content: gaurav-agarwal.pages.dev
Proxy: Yes (Orange cloud)
```

## 📊 Deployment Status

### Check Deployment Status:
```bash
npx wrangler pages deployment list
```

### View Logs:
```bash
npx wrangler pages deployment tail
```

## 🔄 Automatic Deployments

### Option 1: CLI (Manual)
```bash
pnpm run deploy
```

### Option 2: Git Integration (Automatic)
Connect your GitHub repo in Cloudflare Dashboard:
1. Go to **Pages** → **gaurav-agarwal** → **Settings**
2. Connect to Git
3. Select repository
4. Every push to `main` auto-deploys! 🎉

## 🎯 Quick Commands Reference

| Command | Description |
|---------|-------------|
| `pnpm run deploy` | Build + Deploy (preview) |
| `pnpm run deploy:prod` | Build + Deploy (production) |
| `npx wrangler login` | Login to Cloudflare |
| `npx wrangler pages deploy dist` | Deploy manually |
| `npx wrangler pages deployment list` | List deployments |

## 🔐 Environment Variables (If Needed)

### Set via CLI:
```bash
npx wrangler pages secret put VARIABLE_NAME
```

### Set via Dashboard:
1. Go to **Pages** → **gaurav-agarwal** → **Settings** → **Environment variables**
2. Add your variables

## 🐛 Troubleshooting

### "Not logged in"
```bash
npx wrangler login
```

### "Project not found"
```bash
# Create project first
npx wrangler pages deploy dist --project-name=gaurav-agarwal
```

### "Build failed"
```bash
# Test build locally first
pnpm run build
```

### "Permission denied"
```bash
# Re-authenticate
npx wrangler logout
npx wrangler login
```

## 📈 Deployment Checklist

Before deploying:
- [ ] Test locally: `pnpm run dev`
- [ ] Build successfully: `pnpm run build`
- [ ] Check sitemap: `http://localhost:4321/sitemap.xml`
- [ ] Verify all pages work
- [ ] Check research articles load

After deploying:
- [ ] Visit preview URL
- [ ] Test all pages
- [ ] Check sitemap: `https://your-url/sitemap.xml`
- [ ] Test research articles
- [ ] Verify custom domain (if set up)

## 🎉 You're Ready!

Your deployment setup is complete:
- ✅ Wrangler CLI installed
- ✅ Configuration file created
- ✅ Deploy scripts added
- ✅ Ready to deploy with one command

**Deploy now:**
```bash
pnpm run deploy
```

🚀 **Your site will be live in seconds!**

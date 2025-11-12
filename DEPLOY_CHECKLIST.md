# ✅ Deployment Checklist - Ready to Deploy!

## 🎯 Your Setup

### Cloudflare Pages URL:
```
https://gaurav.pages.dev
```

### Custom Domain (Subdomain):
```
https://gaurav.imapro.in
```

## ✅ Configuration Verified

### 1. Wrangler Config (`wrangler.toml`)
```toml
name = "gaurav"  ✅
pages_build_output_dir = "./dist"  ✅
```

### 2. Astro Config (`astro.config.mjs`)
```javascript
site: 'https://gaurav.imapro.in'  ✅
```

### 3. Package.json Scripts
```json
"deploy": "pnpm run build && wrangler pages deploy dist"  ✅
"deploy:prod": "pnpm run build && wrangler pages deploy dist --branch=main"  ✅
```

### 4. Sitemap & Robots.txt
```
Sitemap: https://gaurav.imapro.in/sitemap.xml  ✅
```

## 🚀 Deployment Steps

### Step 1: Login to Cloudflare (First Time Only)
```bash
npx wrangler login
```
- Opens browser
- Login with your Cloudflare account
- Authorize Wrangler

### Step 2: Deploy to Cloudflare Pages
```bash
pnpm run deploy
```

When prompted:
- **Project name**: `gaurav`
- **Production branch**: `main`

### Step 3: Your Site is Live! 🎉
```
https://gaurav.pages.dev
```

## 🌐 Connect Custom Domain

### In Cloudflare Dashboard:

1. **Go to Pages**
   - https://dash.cloudflare.com/
   - Click **Pages**
   - Select **gaurav** project

2. **Add Custom Domain**
   - Click **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `gaurav.imapro.in`
   - Click **Continue**

3. **DNS Configuration**
   Cloudflare will show you the DNS records needed:
   ```
   Type: CNAME
   Name: gaurav
   Target: gaurav.pages.dev
   Proxy: Enabled (Orange cloud)
   ```

4. **Add DNS Record**
   - Go to **DNS** → **Records**
   - Add the CNAME record
   - Wait 5-10 minutes for propagation

5. **Done!** ✅
   Your site will be live at:
   - `https://gaurav.pages.dev` (Cloudflare Pages URL)
   - `https://gaurav.imapro.in` (Your custom domain)

## 📋 Pre-Deployment Checklist

Before deploying, verify:

### Local Testing
- [ ] `pnpm run dev` - Site works locally
- [ ] `pnpm run build` - Build succeeds
- [ ] Check homepage: `http://localhost:4321/`
- [ ] Check research: `http://localhost:4321/research`
- [ ] Check sitemap: `http://localhost:4321/sitemap.xml`
- [ ] Check robots.txt: `http://localhost:4321/robots.txt`

### Content Verification
- [ ] All research articles load
- [ ] Navigation links work
- [ ] Footer links work
- [ ] Images load
- [ ] Favicon shows

### SEO Verification
- [ ] Sitemap includes all pages
- [ ] Robots.txt points to correct sitemap
- [ ] Meta tags on all pages
- [ ] Canonical URLs correct

## 🎯 Deployment Commands

### Quick Deploy (Development)
```bash
pnpm run deploy
```

### Production Deploy
```bash
pnpm run deploy:prod
```

### Check Deployment Status
```bash
npx wrangler pages deployment list
```

## 🔄 Update Workflow

### When You Make Changes:

```bash
# 1. Make your changes
# (edit files, add research articles, etc.)

# 2. Test locally
pnpm run dev

# 3. Build
pnpm run build

# 4. Deploy
pnpm run deploy

# 5. Done! ✅
```

## 📊 After Deployment

### Verify Everything Works:

1. **Visit Cloudflare Pages URL**
   ```
   https://gaurav.pages.dev
   ```

2. **Check All Pages**
   - [ ] Homepage loads
   - [ ] Research index loads
   - [ ] Research articles load
   - [ ] Navigation works
   - [ ] Footer links work

3. **Check SEO**
   - [ ] Sitemap: `https://gaurav.pages.dev/sitemap.xml`
   - [ ] Robots.txt: `https://gaurav.pages.dev/robots.txt`
   - [ ] Meta tags in page source

4. **Test Custom Domain** (After DNS setup)
   ```
   https://gaurav.imapro.in
   ```

## 🎉 You're Ready to Deploy!

Everything is configured correctly:
- ✅ Wrangler CLI installed
- ✅ Project name: `gaurav`
- ✅ Pages URL: `gaurav.pages.dev`
- ✅ Custom domain: `gaurav.imapro.in`
- ✅ Sitemap configured
- ✅ SEO ready
- ✅ Deploy scripts ready

**Deploy now:**
```bash
npx wrangler login
pnpm run deploy
```

🚀 **Your site will be live in seconds!**

# 🔒 Block gaurav-92i.pages.dev from Google

## ✅ What I Set Up

### 1. **`_headers` file** (Blocks indexing)
Tells Google not to index `.pages.dev` URLs

### 2. **`_redirects` file** (Redirects traffic)
Redirects all `.pages.dev` traffic to `gaurav.imapro.in`

### 3. **Middleware** (Server-side blocking)
Adds `X-Robots-Tag: noindex` header to `.pages.dev` requests

## 🎯 How It Works

### When Google Crawls:

**`gaurav-92i.pages.dev`**
- ✅ Gets `X-Robots-Tag: noindex, nofollow` header
- ✅ Redirects to `gaurav.imapro.in`
- ❌ Won't be indexed by Google

**`gaurav.imapro.in`**
- ✅ Gets `X-Robots-Tag: index, follow` header
- ✅ Will be indexed by Google
- ✅ Appears in search results

## 🚀 Deploy Changes

```bash
# Build with new files
pnpm run build

# Deploy
pnpm run deploy
```

The `_headers` and `_redirects` files will be deployed automatically!

## 🔧 Additional Cloudflare Settings

### Option 1: Disable Preview Deployments

1. **Go to Cloudflare Dashboard**
   - https://dash.cloudflare.com/
   - **Pages** → **gaurav**

2. **Settings → Builds & deployments**
   - Find **Preview deployments**
   - Toggle **OFF**

This prevents new preview URLs from being created.

### Option 2: Add Custom Headers (Manual)

1. **Go to Cloudflare Dashboard**
   - **Pages** → **gaurav**
   - **Settings** → **Functions**

2. **Add Custom Headers**
   ```
   X-Robots-Tag: noindex, nofollow
   ```
   For domain: `*.pages.dev`

## 📋 Verification Steps

### After Deployment:

1. **Test .pages.dev URL**
   ```bash
   curl -I https://gaurav-92i.pages.dev
   ```
   Should show:
   ```
   X-Robots-Tag: noindex, nofollow
   Location: https://gaurav.imapro.in
   ```

2. **Test Custom Domain**
   ```bash
   curl -I https://gaurav.imapro.in
   ```
   Should show:
   ```
   X-Robots-Tag: index, follow
   ```

3. **Check in Browser**
   - Visit: `https://gaurav-92i.pages.dev`
   - Should redirect to: `https://gaurav.imapro.in`

4. **View Page Source**
   - Right-click → View Source
   - Check for: `<meta name="robots" content="noindex, nofollow">`

## 🔍 Google Search Console

### Remove .pages.dev from Google (If Already Indexed)

1. **Go to Google Search Console**
   - https://search.google.com/search-console

2. **Add Property** (if not added)
   - Add: `gaurav-92i.pages.dev`
   - Verify ownership

3. **Request Removal**
   - Go to **Removals** (left sidebar)
   - Click **New Request**
   - Enter: `https://gaurav-92i.pages.dev`
   - Select: **Remove all URLs with this prefix**
   - Submit

4. **Wait for Processing**
   - Takes 1-2 days
   - URL will be removed from Google

### Add Custom Domain to Google

1. **Add Property**
   - Add: `gaurav.imapro.in`
   - Verify ownership

2. **Submit Sitemap**
   - Go to **Sitemaps**
   - Add: `https://gaurav.imapro.in/sitemap.xml`
   - Submit

## 🎯 What Happens Now

### Immediate Effects:
- ✅ `.pages.dev` URLs redirect to custom domain
- ✅ `X-Robots-Tag: noindex` header added
- ✅ New crawls won't index `.pages.dev`

### Within 1-2 Weeks:
- ✅ Google removes `.pages.dev` from index
- ✅ Only `gaurav.imapro.in` appears in search
- ✅ All traffic goes to custom domain

## 📊 Files Created

### `public/_headers`
```
https://gaurav-92i.pages.dev/*
  X-Robots-Tag: noindex, nofollow
```

### `public/_redirects`
```
https://gaurav-92i.pages.dev/* https://gaurav.imapro.in/:splat 301
```

### `src/middleware.ts`
```typescript
// Adds X-Robots-Tag header server-side
```

## ✅ Summary

Your setup now:
- ✅ Blocks `.pages.dev` from Google
- ✅ Redirects to custom domain
- ✅ Only `gaurav.imapro.in` will be indexed
- ✅ Automatic on every deployment

**Deploy now:**
```bash
pnpm run build
pnpm run deploy
```

🔒 **Your .pages.dev URL is now blocked from Google!**

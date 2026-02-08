# Artifex Vanilla - Setup & Deployment Guide

## 📋 What You Received

Your complete Artifex website in vanilla HTML, CSS, and JavaScript:

```
artifex-vanilla/
├── 📄 7 HTML pages (fully functional)
├── 🎨 Complete CSS design system
├── ⚡ JavaScript for interactivity
├── 🖼️ Your Artifex logo
└── 📖 Comprehensive README
```

## ✅ Immediate Next Steps

### 1. Test Locally (5 minutes)

**Option A: Direct Open**
- Navigate to the `artifex-vanilla` folder
- Double-click `index.html`
- ✅ Should open in your browser

**Option B: Local Server (Recommended)**
```bash
cd artifex-vanilla
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### 2. Customize Your Content (30 minutes)

**Priority Updates:**

1. **Logo** ✅ Already using your uploaded logo!
   - Located at: `images/logo.svg`

2. **Colors** (Optional)
   - Open: `css/styles.css`
   - Find: `:root {` (line ~18)
   - Change: `--primary: hsl(220, 99%, 61%);` to your brand color

3. **Contact Info**
   - Search all HTML files for:
     - `hello@artifex.design` → your email
     - Social links in footer

4. **Copy/Content**
   - All text is editable directly in HTML files
   - No build step needed!

### 3. Deploy to Web (15 minutes)

**Easiest: Netlify Drop**
1. Go to: https://app.netlify.com/drop
2. Drag the entire `artifex-vanilla` folder
3. ✅ Live in seconds!

**GitHub Pages:**
```bash
cd artifex-vanilla
git init
git add .
git commit -m "Initial Artifex site"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Then enable Pages in repo settings.

**Vercel:**
```bash
cd artifex-vanilla
vercel
```

## 🎨 Customization Guide

### Change Primary Color

**In `css/styles.css`:**
```css
:root {
  --primary: hsl(220, 99%, 61%);  /* ← Change this */
  /* Example blue: hsl(220, 99%, 61%) */
  /* Example purple: hsl(270, 80%, 60%) */
  /* Example green: hsl(150, 70%, 45%) */
}
```

All buttons, links, and accents will update automatically!

### Replace Logo

1. Save your new logo as `logo.svg` (or `.png`)
2. Replace `images/logo.svg`
3. If using PNG, update all `<img src="images/logo.svg">` to `.png`

**Logo size recommendation:** 
- Height: 32-40px
- Width: Auto
- Format: SVG (scalable) or PNG (2x for retina)

### Update Fonts

Current fonts:
- **Display:** DM Serif Display
- **Body:** Inter

To change:
1. Choose fonts from Google Fonts
2. Replace the `@import` in `css/styles.css` (line 2)
3. Update `font-family` values

### Add New Pages

1. Copy `about.html` as template
2. Rename to `your-page.html`
3. Update `<title>` and content
4. Add link to navigation in ALL pages:

```html
<li><a href="your-page.html">Your Page</a></li>
```

## 🔧 Technical Details

### No Dependencies
- ✅ No npm install
- ✅ No build process
- ✅ No React/Vue/framework
- ✅ Works on any server
- ✅ Works offline

### Browser Support
- ✅ Chrome, Firefox, Safari, Edge (modern versions)
- ✅ Mobile browsers
- ⚠️ IE11 not supported (uses CSS Grid, CSS Variables)

### File Size
- Total: ~50KB (before images)
- CSS: ~15KB
- JavaScript: ~5KB
- HTML: ~30KB combined

Lightning fast! ⚡

## 🚀 Performance Tips

### Before Launch
1. **Optimize Images**
   - Compress any photos you add
   - Use WebP format when possible
   - Keep images under 200KB each

2. **Minify (Optional)**
   - Use https://www.toptal.com/developers/cssminifier/
   - Use https://www.toptal.com/developers/javascript-minifier/
   - Rename to `styles.min.css` and update links

3. **Add Favicon**
   ```html
   <!-- Add to <head> of all pages -->
   <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
   ```

## 📱 Mobile Testing

Test on:
- iPhone Safari (iOS)
- Chrome Android
- Responsive mode in Chrome DevTools (Cmd+Shift+M)

The site is mobile-first and should work perfectly!

## 🎯 What's Working Now

✅ Responsive navigation  
✅ Smooth scroll  
✅ Mobile menu  
✅ Multi-step form  
✅ Tag selection  
✅ Animations  
✅ All pages linked  

## ⚠️ What's Not Implemented (Yet)

These are placeholders for when you connect a backend:

- ❌ Form submission (no backend)
- ❌ User accounts
- ❌ Actual AI generation
- ❌ Data persistence
- ❌ Chat widget (just visual)

## 🔐 Adding Form Submission

When ready to connect a backend:

**Option 1: Formspree (Easiest)**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- Your form fields -->
</form>
```

**Option 2: Netlify Forms**
Add `netlify` attribute:
```html
<form name="contact" method="POST" netlify>
```

**Option 3: Custom Backend**
Update `get-started.js` to POST to your API.

## 📊 Analytics

**Add Google Analytics:**
```html
<!-- Before </head> in all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## 🐛 Troubleshooting

**Logo not showing?**
- Check file path: `images/logo.svg`
- Try absolute path: `/images/logo.svg`
- Check browser console for errors

**Mobile menu not working?**
- Check if `js/main.js` is loading
- Look for JavaScript errors in console

**Styles not applying?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check CSS file path is correct
- Verify no syntax errors in CSS

**Form not advancing?**
- Check browser console
- Make sure `js/get-started.js` is loaded
- Try in different browser

## 💼 Portfolio Ready

This project demonstrates:
- ✅ Semantic HTML5
- ✅ Modern CSS (Grid, Flexbox, Variables)
- ✅ Vanilla JavaScript
- ✅ Responsive design
- ✅ Accessibility basics
- ✅ Performance optimization
- ✅ Component thinking
- ✅ Design systems

Perfect for showing you can build without frameworks!

## 📞 Support

**File Issues:**
Document any bugs or needed features

**Questions:**
- Check the main README.md first
- Look at code comments
- All code is readable and well-structured

## 🎉 You're Ready!

Your site is production-ready. Just:
1. ✅ Test locally
2. ✅ Customize content
3. ✅ Deploy
4. ✅ Share!

---

**Built for Jasmine** | Vanilla HTML/CSS/JS | 2026

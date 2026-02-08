# Artifex — Vanilla HTML/CSS/JavaScript Version

This is the vanilla HTML, CSS, and JavaScript conversion of the Artifex React project. No build tools, no dependencies — just clean, standards-compliant web technologies.

## 📁 Project Structure

```
artifex-vanilla/
├── index.html              # Landing page
├── product.html            # Product details page
├── examples.html           # Examples gallery
├── pricing.html            # Pricing page
├── about.html              # About page
├── legal.html              # Legal/Terms page
├── get-started.html        # Multi-step form for creating directions
├── css/
│   └── styles.css          # All styles (converted from Tailwind)
├── js/
│   ├── main.js             # Global JavaScript (navigation, animations)
│   └── get-started.js      # Form logic for get-started page
└── images/
    └── logo.svg            # Artifex logo
```

## 🚀 Getting Started

### No Build Required

Simply open `index.html` in your browser or serve via any web server:

**Option 1: Direct Open**
```bash
# Just double-click index.html or open it in your browser
open index.html
```

**Option 2: Python Server**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 3: PHP Server**
```bash
php -S localhost:8000
# Visit http://localhost:8000
```

**Option 4: Node.js**
```bash
npx serve
# or
npx http-server
```

## ✨ What's Included

### Pages
- **Landing Page** (`index.html`) — Full homepage with all sections
- **Product** (`product.html`) — Feature details and use cases
- **Examples** (`examples.html`) — Example direction outputs
- **Pricing** (`pricing.html`) — Pricing tiers
- **About** (`about.html`) — Company/product philosophy
- **Get Started** (`get-started.html`) — Interactive 3-step form
- **Legal** (`legal.html`) — Terms and privacy policy

### Features
- ✅ Fully responsive design (mobile-first)
- ✅ Custom CSS variables for easy theming
- ✅ Smooth scroll navigation
- ✅ Intersection Observer animations
- ✅ Mobile menu toggle
- ✅ Multi-step form with validation
- ✅ Tag selection UI (single and multi-select)
- ✅ No external dependencies

## 🎨 Design System

### Colors
All colors use CSS variables defined in `:root`:

```css
--background: hsl(220, 20%, 4%)
--foreground: hsl(220, 20%, 96%)
--primary: hsl(220, 99%, 61%)
--card: hsl(222, 22%, 8%)
--muted: hsl(220, 14%, 12%)
```

### Typography
- **Display Font:** DM Serif Display (Google Fonts)
- **Body Font:** Inter (Google Fonts)

### Spacing
Uses a consistent spacing scale:
```css
--spacing-xs: 0.5rem   (8px)
--spacing-sm: 0.75rem  (12px)
--spacing-md: 1rem     (16px)
--spacing-lg: 1.5rem   (24px)
--spacing-xl: 2rem     (32px)
--spacing-2xl: 3rem    (48px)
```

## 🔧 Customization

### Change Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary: hsl(220, 99%, 61%);  /* Change to your brand color */
  --background: hsl(220, 20%, 4%);
}
```

### Modify Logo
Replace `images/logo.svg` with your own logo (SVG recommended).

The navbar expects a logo height of ~32px. Adjust in CSS:

```css
.logo {
  height: 32px;  /* Adjust as needed */
  width: auto;
}
```

### Add New Pages
1. Copy an existing HTML file as template
2. Update navigation links
3. Add content in the `<main>` section
4. Include `<script src="js/main.js"></script>` before `</body>`

## 📱 Responsive Breakpoints

```css
/* Mobile: < 768px (default styles) */
/* Tablet and up: 768px+ */
@media (max-width: 768px) {
  /* Mobile overrides */
}
```

## 🎯 JavaScript Features

### main.js
- Mobile menu toggle
- Smooth scroll for anchor links
- Intersection Observer for fade-in animations
- Chat widget placeholder

### get-started.js
- Multi-step form navigation
- Tag selection (single and multi-select)
- Form data collection
- Results display

## 🚢 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Deploy Artifex"
git push origin main

# Enable GitHub Pages in repo settings
# Choose main branch → / (root)
```

### Netlify
1. Drag and drop the entire folder to Netlify
2. Or connect GitHub repo for automatic deploys

### Vercel
```bash
vercel --prod
```

### Traditional Hosting
Upload all files via FTP to your web host.

## 🔍 SEO Ready

All pages include:
- Semantic HTML5 structure
- Meta descriptions
- Proper heading hierarchy
- Alt text for images
- Open Graph tags (index.html)

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Semantic HTML structure
- Focus states on all interactive elements

## 📦 What Was Changed from React

| React Version | Vanilla Version |
|--------------|-----------------|
| React components | HTML pages |
| Tailwind utility classes | Custom CSS classes |
| React Router | Standard `<a>` links |
| JSX | HTML |
| useState/useEffect | Vanilla JavaScript |
| Component props | HTML attributes |
| Lucide React icons | Inline SVG or Unicode |

## 🐛 Known Limitations

- No client-side routing (full page reloads)
- No state management across pages
- Chat widget is placeholder only
- Form doesn't actually submit data (demo only)
- Examples use placeholder gradients (no real images)

## 💡 Next Steps

To turn this into a real product:

1. **Backend Integration**
   - Connect form to API endpoint
   - Add user authentication
   - Store project data in database

2. **Real AI Integration**
   - Connect to OpenAI/Claude API
   - Generate actual mood boards
   - Process user inputs through prompt engineering

3. **Enhanced Features**
   - Save user projects to localStorage
   - Export functionality (download as ZIP)
   - Social sharing features

4. **Performance**
   - Optimize images
   - Minify CSS/JS
   - Add service worker for offline support

## 📄 License

MIT License — use freely for portfolio or commercial projects.

## 👩‍💻 Credits

**Designed & Developed by:** Jasmine  
**Original Framework:** React + TypeScript  
**Converted to:** Vanilla HTML/CSS/JavaScript  

---

**Questions?** Open an issue or contact me!

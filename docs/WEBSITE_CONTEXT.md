# 🌐 Nexaro.tech Website - Development Context

**Founder:** Abdelrahman Mohamed  
**Location:** Egypt  
**Current Status:** MVP Functional, Needs Design Polish  
**Last Updated:** April 23, 2026

---

## 📁 Current File Structurecat > docs/WEBSITE_CONTEXT.md << 'EOF'
# 🌐 Nexaro.tech Website - Development Context

**Founder:** Abdelrahman Mohamed  
**Location:** Egypt  
**Current Status:** MVP Functional, Needs Design Polish  
**Last Updated:** April 23, 2026

---

## 📁 Current File Structure
src/ ├── app/ │ ├── [locale]/ │ │ ├── layout.tsx (Root layout with Navbar + Footer) │ │ ├── page.tsx (Homepage) │ │ ├── about/page.tsx ✅ │ │ ├── blog/page.tsx ✅ │ │ ├── contact/page.tsx ✅ │ │ ├── portfolio/page.tsx ✅ │ │ └── services/page.tsx ✅ │ └── globals.css ├── components/ │ ├── layout/ │ │ ├── navbar.tsx ⚠️ (BROKEN - needs fix) │ │ └── footer.tsx ✅ │ └── ui/ │ ├── glass-card.tsx ✅ │ ├── neon-button.tsx ✅ │ ├── particles-bg.tsx ✅ │ └── tech-marquee.tsx ✅ └── lib/ └── i18n/ (routing config)

---

## 🎨 Current Design Issues

### ❌ Critical Problems
1. **Navbar:** Broken syntax error `<motion(Link)>`, clunky mobile menu
2. **Raw Text:** Tech stacks show as "SQLRedisNext.js" (no spacing)
3. **Tags:** Show as "Product#AI#SaaS" (no separation)
4. **Buttons:** Look like default HTML buttons
5. **Layouts:** Vertical lists instead of modern grids
6. **Spacing:** Inconsistent padding/margins
7. **Typography:** Needs better hierarchy

### ✅ What's Working
- All pages render (Home, Services, Portfolio, About, Contact, Blog)
- Routing works (`/en/...` paths)
- i18n setup complete
- Basic components exist (GlassCard, ParticlesBg)

---

## 🎯 Design Goals (From Other Chat)

### Visual Style
- **Theme:** Cyberpunk + Minimal Apple
- **Colors:** 
  - Primary: Cyan (#00F5FF)
  - Secondary: Purple (#B829F7)
  - Background: Space Blue (#0A0E27)
  - Accent: Gold (#FFD700)

### Components to Build
1. **Floating Glass Navbar** (centered, premium)
2. **TechBadge** (pill-shaped, monospace font)
3. **TagPill** (spaced, colored backgrounds)
4. **Gradient Buttons** (Cyan→Purple, hover effects)
5. **Bento Grid Layouts** (replace vertical lists)
6. **Animated Cards** (Framer Motion hover effects)

---

## 📋 Immediate Action Items

### Priority 1 (Fix Broken)
- [ ] Fix navbar.tsx syntax error
- [ ] Add spacing to tech stack displays
- [ ] Fix tag separation in portfolio

### Priority 2 (Design Polish)
- [ ] Implement floating glass navbar
- [ ] Create TechBadge component
- [ ] Create TagPill component
- [ ] Update button styles

### Priority 3 (Layout Redesign)
- [ ] Convert Services to bento grid
- [ ] Improve Portfolio card design
- [ ] Add proper spacing throughout

---

## 🔧 Tech Stack
- **Framework:** Next.js 16.2.4 (Turbopack)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **i18n:** next-intl
- **Fonts:** Orbitron, Rajdhani, Inter, Tajawal

---

## 📝 Notes
- Terminal gets stuck with `echo` commands → avoid them
- Use `cat > file << 'EOF'` for file creation
- Always escape brackets in paths: `\[locale\]`
- Test on mobile (responsive critical)

---

**Next Sprint:** Design Polish & Component Refinement

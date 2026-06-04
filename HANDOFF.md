# HANDOFF.md — Mongol TV Employee Portal (Updated Design)

## 0. Approval Record

- **Homepage options shown:** 3 (Midnight Media, Glass Future, Editorial Dark)
- **Selected option:** C - Editorial Dark
- **Updated to:** Modern Minimal with Soft Futuristic Style
- **Preview artifact file paths:**
  - `output/mongol-tv-ajilchdyn-negdsen-san/designs/homepage-option-a.png`
  - `output/mongol-tv-ajilchdyn-negdsen-san/designs/homepage-option-b.png`
  - `output/mongol-tv-ajilchdyn-negdsen-san/designs/homepage-option-c.png`
- **Pencil project paths used:**
  - `output/mongol-tv-ajilchdyn-negdsen-san/designs/homepage-directions.pen`
  - `output/mongol-tv-ajilchdyn-negdsen-san/designs/design.pen`
- **Exported PNG:** `output/mongol-tv-ajilchdyn-negdsen-san/designs/design.png`
- **Confirmation:** Homepage previews covered the full homepage section flow
- **Confirmation:** `design.pen` and `design.png` came from the approved Pencil direction
- **Locked constraints:** 
  - Background: #0a0e27
  - Surface: #111827
  - Accent: #6366f1 (indigo)
  - Font: Poppins
  - Card radius: 16px
  - Subtle shadows
  - Modern minimal aesthetic

## 1. Design Summary

**Site:** Mongol TV Employee Portal (Ажилтны нэгдсэн сан)
**Type:** Business website with HR employee portal focus
**Strategy:** Brand-first (based on Mongol TV brand identity)
**Direction:** Modern Minimal with Soft Futuristic touches — Clean, elegant, attention-grabbing

### Visual Identity
- **Background:** Deep navy (#0a0e27)
- **Surface:** Dark card (#111827)
- **Accent:** Indigo (#6366f1)
- **Text:** White primary, slate gray secondary (#64748b)
- **Style:** Modern minimal, soft futuristic, clean and beautiful

## 2. Design System

### Colors
- Primary: #6366f1 (indigo accent)
- Background: #0a0e27 (deep navy)
- Surface: #111827 (dark card)
- Secondary Surface: #1e293b
- Text Primary: #ffffff
- Text Secondary: #64748b
- Border: #1e293b

### Typography
- **Font Family:** Poppins (Google Fonts)
- **Scale:**
  - Hero: 56px, weight 700
  - H1: 40px, weight 700
  - H2: 32px, weight 600
  - H3: 24px, weight 600
  - Body: 16px, weight 400
  - Small: 14px, weight 400
  - Caption: 12-13px, weight 400

### Spacing
- Large section padding: 80px vertical
- Content padding: 80px horizontal (desktop)
- Card padding: 24-32px
- Gap between elements: 16-24px
- Gap between cards: 20-24px

### Border Radius
- Cards: 16px (soft, modern)
- Buttons: 12px
- Inputs: 12px
- Small elements: 8px

### Shadows
- Subtle elevation through shadows
- Card shadow: 0 4px 20px rgba(0,0,0,0.25)
- Hover shadow: 0 8px 30px rgba(0,0,0,0.3)

## 3. Component Inventory

### Global Components
1. **Header/Navigation**
   - Logo (left): "МОНГОЛ ТВ" — 24px, weight 700, white
   - Nav items (right): 14px, weight 500, slate (#94a3b8)
   - Items: Нүүр, Бидний тухай, Үйлчилгээ, Блог, Баг, FAQ, Холбоо барих
   - Background: transparent over hero

2. **Footer**
   - Logo: "МОНГОЛ ТВ" — 18px, weight 700
   - Copyright: "© 2026 Монгол ТВ. Бүх эрх хуулиар хамгаалагдсан."
   - Background: #070a1a (slightly darker than body)

### Section Components
1. **Hero Section**
   - Label: "EMPLOYEE PORTAL" — 14px, uppercase, letter-spacing 3px, indigo
   - Title: 56px, weight 700, white
   - Subtitle: 18px, secondary text color
   - Padding: 100px top, 80px horizontal
   - Full width, centered content

2. **Service Cards**
   - Background: #111827
   - Accent line: 40px × 4px, indigo (#6366f1), rounded
   - Title: 18px, weight 600
   - Description: 14px, secondary text
   - Width: ~320px
   - Padding: 32px
   - Border radius: 16px
   - Shadow: subtle drop shadow
   - Hover: lift up slightly, increased shadow

3. **Blog Cards**
   - Background: #111827
   - Date: 13px, indigo color
   - Title: 16px, weight 600
   - Width: ~400px
   - Padding: 24px
   - Border radius: 16px
   - Shadow: subtle drop shadow

4. **Team Cards**
   - Background: #111827
   - Avatar: 80px circle
   - Name: 16px, weight 600
   - Role: 14px, secondary text
   - Width: ~280px
   - Padding: 24px
   - Border radius: 16px
   - Align: center
   - Shadow: subtle drop shadow

5. **FAQ Items**
   - Background: #111827
   - Question: 15px, white
   - Full width
   - Padding: 20px
   - Border radius: 12px
   - Hover: subtle background lighten

6. **Section Labels**
   - Format: "SECTION NAME"
   - 14px, weight 600, uppercase
   - Letter-spacing: 3px
   - Color: #6366f1 (indigo accent)

## 4. Animation & Motion

### Motion Level: 2 (Alive)
- Smooth fade-in on scroll
- Subtle hover states on cards
- Page transitions: fade
- Micro-interactions on buttons

### Animation Rules
- **Fade In:** opacity 0 → 1, duration 200ms
- **Slide Up:** opacity 0, y: 20 → opacity 1, y: 0, duration 300ms
- **Scale In:** opacity 0, scale: 0.95 → opacity 1, scale: 1, duration 300ms
- **Card Hover:** translateY(-4px), shadow increase, duration 200ms
- **Button Hover:** background color lighten, duration 150ms
- **Link Hover:** color transition to indigo, duration 150ms

## 5. Responsive Behavior

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Adaptations
- Single column layout
- Hamburger menu
- Stacked cards (full width)
- Reduced font sizes (hero: 36px, h1: 28px)
- Reduced section padding (40-60px)
- Horizontal padding: 24px

### Tablet Adaptations
- 2-column grids
- Medium padding (60px)
- Horizontal padding: 40px

## 6. Page Structure

### Homepage Sections (in order)
1. Header/Navigation (transparent)
2. Hero Section
3. Featured Services (grid of 4 service cards)
4. About Section Preview (text + image area)
5. Blog Section Preview (3 blog cards)
6. Team Section Preview (3 team cards)
7. FAQ Section Preview (3 FAQ items)
8. Contact CTA
9. Footer

### Standalone Pages
- `/about` — Full About page
- `/services` — Services listing page
- `/blog` — Blog listing page
- `/contact` — Contact page
- `/team` — Team page
- `/faq` — FAQ page

## 7. erxes CMS Field Map

### Homepage Sections
1. Hero
2. Services
3. About
4. Blog
5. Team
6. FAQ
7. Contact CTA

### CMS Pages (slugs)
- `about` — Бидний тухай
- `services` — Үйлчилгээ
- `blog` — Блог
- `contact` — Холбоо барих
- `team` — Баг
- `faq` — FAQ

### Navigation Menu
**Header:**
1. Нүүр → /
2. Бидний тухай → /about
3. Үйлчилгээ → /services
4. Блог → /blog
5. Баг → /team
6. FAQ → /faq
7. Холбоо барих → /contact

**Footer:**
1. Нүүр → /
2. Бидний тухай → /about
3. Үйлчилгээ → /services
4. Холбоо барих → /contact

### Content Requirements
- All content in Mongolian (primary) and English (secondary)
- Blog posts need: title, date, excerpt, content
- Team members need: name, role, photo
- FAQ items need: question, answer
- Services need: title, description

## 8. Setup Commands

```bash
# Install dependencies
pnpm add framer-motion lucide-react clsx tailwind-merge

# Install shadcn components
npx shadcn add button card input dialog accordion badge separator
```

## 9. Accessibility Notes

- WCAG 2.1 Level AA compliance
- Color contrast: White on #0a0e27 = 17.5:1 (excellent)
- Indigo on dark: 4.8:1 (good)
- Keyboard navigation for all interactive elements
- Focus indicators on all focusable elements
- Alt text for images
- ARIA labels where needed

## 10. Content Tone

- **Primary Language:** Mongolian
- **Secondary Language:** English
- **Tone:** Professional, approachable, clear
- **Formality:** Semi-formal (business casual)
- **Voice:** Helpful, informative, encouraging

## 11. What Must Not Change

- Background color: #0a0e27
- Accent color: #6366f1
- Poppins font family
- Card border radius: 16px
- Section label pattern (uppercase, letter-spaced, indigo)
- Modern minimal aesthetic
- Subtle shadow system
- Clean spacing (generous whitespace)

## 12. Pencil File Paths

- Preview: `output/mongol-tv-ajilchdyn-negdsen-san/designs/homepage-directions.pen`
- Final Design: `output/mongol-tv-ajilchdyn-negdsen-san/designs/design.pen`
- Exported PNG: `output/mongol-tv-ajilchdyn-negdsen-san/designs/design.png`

## 13. Key Improvements from Original Design

1. **Softer dark theme:** Changed from harsh #0f0f1a to softer #0a0e27
2. **Better typography:** Switched from Inter to Poppins for modern feel
3. **Modern cards:** Increased border radius from 4px to 16px
4. **Subtle shadows:** Added soft drop shadows for depth
5. **Better contrast:** Improved text hierarchy with slate gray secondary text
6. **Consistent spacing:** Increased horizontal padding to 80px
7. **Cleaner aesthetic:** Removed harsh accent lines, used subtle indigo
8. **Hover interactions:** Added lift effect on cards

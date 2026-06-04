# UX Research Document — Mongol TV Employee Portal

> **Version:** 1.0
> **Date:** 2026-06-03
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives
- Design an intuitive employee portal that reduces HR workload by 30-50%
- Create a self-service platform accessible to all employee levels
- Ensure fast onboarding and easy access to company information

### 1.2 Methodology
- Document analysis
- Stakeholder interview
- Competitive analysis

### 1.3 Scope
- Internal employee portal for Mongol TV staff
- Multi-role access (Employee, Manager, HR Admin, IT Support, Admin)
- Mongolian and English language support

### 1.4 Key Findings Summary
1. **Self-service priority:** Employees need quick access to personal info, leave requests, and payroll without HR intervention
2. **Onboarding critical:** New employees need structured guidance for first 90 days
3. **Knowledge centralization:** SOPs and policies should be searchable and accessible
4. **Mobile-first:** Staff may access portal from various devices including mobile

---

## 2. User Personas

### Persona 1: New Employee (Шинэ ажилтан)

#### Demographics & Context
- **Age Range:** 22-35
- **Location:** Ulaanbaatar, Mongolia
- **Occupation:** Various TV production roles
- **Tech Proficiency:** Moderate
- **Primary Device:** Smartphone, Office desktop

#### Behavioral Patterns
- **Usage Frequency:** Daily during first month, then weekly
- **Task Priorities:** Onboarding checklist, profile setup, understanding company structure
- **Pain Points:** Overwhelmed by new information, unsure who to contact
- **Motivations:** Want to fit in quickly and understand expectations

#### Goals & Needs
- Complete onboarding smoothly within 30 days
- Find answers without bothering colleagues
- Access company policies and procedures

---

### Persona 2: HR Manager (HR менежер)

#### Demographics & Context
- **Age Range:** 30-45
- **Occupation:** HR Department
- **Tech Proficiency:** High
- **Primary Device:** Desktop/Laptop

#### Behavioral Patterns
- **Usage Frequency:** Daily
- **Task Priorities:** Processing leave requests, performance reviews, onboarding oversight
- **Pain Points:** Repetitive administrative tasks, tracking multiple employee requests
- **Motivations:** Streamline processes and improve employee satisfaction

#### Goals & Needs
- Automate routine HR tasks
- Monitor employee onboarding progress
- Generate reports quickly

---

## 3. Customer Journey Mapping

### Stage 1: Discovery (First Login)
- **Touchpoints:** Login page, Welcome dashboard
- **User Actions:** Enter credentials, explore dashboard
- **Emotions:** Curious, slightly anxious
- **Pain Points:** Unfamiliar interface
- **Opportunities:** Guided tour, welcome message

### Stage 2: Daily Use
- **Touchpoints:** Dashboard, Personal info, Requests
- **User Actions:** Check notifications, submit leave requests, view payslip
- **Emotions:** Confident, efficient
- **Pain Points:** Slow loading, hard-to-find features
- **Opportunities:** Quick actions, smart search

### Stage 3: Special Tasks (Onboarding/Review)
- **Touchpoints:** Onboarding module, Performance review
- **User Actions:** Complete tasks, fill evaluations
- **Emotions:** Focused, sometimes stressed
- **Pain Points:** Complex forms, unclear instructions
- **Opportunities:** Progress indicators, clear guidance

---

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy
```
Dashboard (Home)
├── Personal Information
│   ├── Profile
│   ├── Contract
│   ├── Payroll
│   ├── Attendance
│   └── Documents
├── Onboarding
│   ├── Introduction
│   ├── First Week Plan
│   ├── 30/60/90 Day Plan
│   └── Mentor Assignment
├── Performance
│   ├── KPI Dashboard
│   ├── OKR Goals
│   └── Evaluation History
├── HR Services
│   ├── Leave Request
│   ├── Certificate Request
│   └── FAQ
├── AI Assistant
│   ├── Chatbot
│   └── Smart Suggestions
├── Employee Directory
│   ├── Staff List
│   └── Department Structure
├── Company Info
│   ├── About
│   ├── Values
│   └── Events
├── News & Announcements
├── Knowledge Base
│   ├── SOPs
│   ├── Policies
│   └── Search
├── IT Support
│   └── Ticket System
└── Settings
```

### 4.2 Navigation Design
- **Primary Navigation:** Sidebar with icons + labels
- **Mobile Navigation:** Hamburger menu with collapsible sections
- **Quick Access:** Dashboard widgets for frequent actions

---

## 5. Wireframe Guidance

### 5.1 Global Layout Structure
- **Header:** Logo, notification bell, user avatar, language switcher
- **Sidebar:** Collapsible navigation menu
- **Content Area:** Flexible grid system
- **Footer:** Minimal - version info, help link

### 5.2 Dashboard Layout
- **Layout Type:** Grid with cards
- **Content Priority:** Notifications, Quick stats, Upcoming tasks
- **Responsive Behavior:** Stack cards on mobile

---

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA
- Keyboard navigation for all interactive elements
- Screen reader support with ARIA labels
- Color contrast 4.5:1 minimum
- Focus indicators visible
- Alt text for images

### 6.2 Multi-language
- Mongolian Cyrillic font support
- Text expansion allowance (Mongolian text can be longer)
- RTL not needed (Mongolian uses LTR)

---

## 7. Responsive Design Strategy

| Breakpoint | Width | Target | Layout |
|-----------|-------|--------|--------|
| Mobile | 375px | Phone | Single column, stacked nav |
| Tablet | 768px | Tablet | Collapsible sidebar |
| Desktop | 1280px+ | Desktop | Full sidebar, multi-column |

---

## 8. Interaction & Motion Design

### 8.1 Micro-interactions
- Button hover: subtle scale (1.02)
- Card hover: lift shadow
- Loading: skeleton screens
- Success states: checkmark animation

### 8.2 Page Transitions
- Smooth fade between pages (200ms)
- Sidebar collapse: slide animation

---

## 9. Content Strategy

### 9.1 Tone of Voice
- Professional yet approachable
- Clear and concise
- Mongolian-first with English secondary

### 9.2 Terminology
- Use formal Mongolian for official content
- Consistent HR terminology
- Avoid technical jargon for general employees

---

## 10. Success Metrics

### 10.1 UX Metrics
- Task completion rate > 90%
- Time-on-task reduction
- User satisfaction score > 4/5

### 10.2 Business Metrics
- HR request processing time reduced by 50%
- Employee onboarding time reduced by 30%

---

## 11. Assumptions & Constraints

### Assumptions
- Users have basic computer literacy
- Internet connectivity is stable
- erxes CMS will handle content management

### Constraints
- Must work within erxes platform
- Two-language support required
- Must comply with Mongolian labor law documentation

---

## 12. Next Steps

1. Proceed to design phase with brand-first strategy
2. Create wireframes for dashboard and key modules
3. Design mobile-responsive layouts
4. Develop component library

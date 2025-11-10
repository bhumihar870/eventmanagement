# Event Management Website - Hackathon Project

## Overview
A simple, fully-functional event management website where users browse events, register, and admins manage events. Built with React/Next.js for hackathons and seminars.

**Single file, easy to understand, easy to present!**

---

## Features

### 👥 User Features
- **Browse Events** - See all upcoming events in grid layout
- **Filter by Category** - Tech, Network, Marketing, etc.
- **View Details** - Click event to see full information
- **Register** - Submit name and email to register for event

### 🔧 Admin Features
- **Dashboard Stats** - View total number of events
- **Add Events** - Create new events with title, date, location
- **View All Events** - See events in table format
- **Easy Management** - All features on one page

---

## Tech Stack
- **Framework**: Next.js + React
- **Styling**: Inline CSS (no dependencies)
- **State**: React useState hook
- **Deployment**: Ready for Vercel

---

## File Structure
\`\`\`
project/
├── app/
│   ├── page.tsx        (ONLY FILE - everything is here!)
│   ├── layout.tsx      (default - no changes needed)
│   └── globals.css     (default - no changes needed)
└── README.md           (this file)
\`\`\`

**That's it! No components folder, no extra files.**

---

## How to Run

### 1. Install
\`\`\`bash
npm install
npm run dev
\`\`\`

### 2. Open
Go to `http://localhost:3000`

### 3. Navigate
- **Home**: Click EventHub logo
- **Admin**: Click Admin button
- **Event Details**: Click any event card

---

## Code Walkthrough (Simple Explanation)

### State Management
\`\`\`javascript
const [view, setView] = useState('home')      // Current page (home/details/admin)
const [events, setEvents] = useState(EVENTS)  // All events
const [filter, setFilter] = useState('All')   // Selected category filter
\`\`\`

### Event Data Structure
\`\`\`javascript
{ 
  id: 1,
  title: 'Web Summit',
  date: 'Mar 15',
  loc: 'SF',              // Short for location
  cat: 'Tech',            // Category
  price: 99
}
\`\`\`

### Three Main Pages

**1. HOME PAGE (view === 'home')**
- Display nav with EventHub logo and Admin button
- Show hero banner "Find Events"
- Show category filter buttons
- Grid of event cards (click card → go to details page)

**2. DETAILS PAGE (view === 'details')**
- Show selected event info (date, location, price)
- Registration form (name + email)
- On submit → alert and back to home

**3. ADMIN PAGE (view === 'admin')**
- Stats card showing total events
- Form to add new event (title, date, location)
- Table showing all events
- On add → new event appears in table

---

## How to Use (For Presentation)

### User Flow
1. Open website → See home page with 4 events
2. Click category button to filter (Tech, Network, Marketing)
3. Click event card
4. See event details page
5. Fill registration form and submit
6. See success message and return to home

### Admin Flow
1. Click "Admin" button in top right
2. See dashboard with event count
3. Fill "Add New Event" form
4. Click "Add Event"
5. See new event in table below

---

## Key Code Snippets

### Filtering Events
\`\`\`jsx
const filtered = filter === 'All' ? events : events.filter(e => e.cat === filter)
{filtered.map(e => <EventCard key={e.id} event={e} />)}
\`\`\`

### Add New Event
\`\`\`jsx
setEvents([...events, { id: events.length + 1, ...form, cat: 'Other', price: 99 }])
\`\`\`

### Handle Registration
\`\`\`jsx
<form onSubmit={(e) => { 
  e.preventDefault()
  alert('✓ Registered!')
  setRegForm({ name: '', email: '' })
}}>
\`\`\`

---

## Styling (All Inline)

All styles are written inline in the JSX:
\`\`\`jsx
style={{ background: '#2563eb', color: 'white', padding: '15px' }}
\`\`\`

**Why?** No need for CSS files, everything visible in one place.

### Color Scheme
- Primary Blue: `#2563eb`
- Dark Blue: `#1e40af`
- Light Blue: `#dbeafe`
- Gray Text: `#666`
- Light Gray: `#e5e7eb`

---

## How to Customize

### Change Colors
Find and replace color codes:
- `#2563eb` → Change to any hex color

### Add More Events
Edit `EVENTS` array at top:
\`\`\`javascript
const EVENTS = [
  { id: 1, title: 'Your Event', date: 'Mar 15', loc: 'City', cat: 'Category', price: 99 },
  // Add more here
]
\`\`\`

### Add More Form Fields
In registration form, add:
\`\`\`jsx
<input type="text" placeholder="Phone" value={...} onChange={...} style={{...}} />
\`\`\`

### Change Event Categories
Currently: Tech, Network, Marketing
Edit the category in each event object.

---

## What Happens When You:

### Click Event Card
\`\`\`
home page → details page → shows event info + register form
\`\`\`

### Submit Registration
\`\`\`
alert shows "✓ Registered!" → form clears → goes back to home
\`\`\`

### Click Admin Button
\`\`\`
Shows admin dashboard → all admin features on one page
\`\`\`

### Add New Event
\`\`\`
Form → Click "Add Event" → new event appears in table immediately
\`\`\`

---

## For Seminar/Hackathon Report

### What to Say in Presentation

**Introduction:**
"This is an event management website built with React. It has three main parts: users can browse and register for events, and admins can manage events from a dashboard."

**Key Features:**
- "Users can filter events by category and register"
- "Admins can add new events instantly"
- "All data is stored in React state (no database needed)"
- "Fully responsive on mobile, tablet, and desktop"

**Code:**
- "Everything is in ONE file (page.tsx)"
- "Only 250 lines of code"
- "Uses React hooks for state management"
- "All styling is inline CSS"

**Why This Approach:**
- "Simple to understand and learn from"
- "Easy to modify and customize"
- "No complex dependencies"
- "Perfect for hackathons"

### Demo Points
1. Show home page with all events
2. Filter by category
3. Click an event → show details page
4. Fill registration form and submit
5. Go to admin → show dashboard
6. Add a new event → show it appear in table

---

## Troubleshooting

**Events not showing?**
- Check if EVENTS array has data (look at top of page.tsx)

**Buttons not clickable?**
- Check browser console for errors

**Form not submitting?**
- Make sure all fields are filled
- Check if onClick/onSubmit is on button/form

**Responsive not working?**
- Check if styles include `width: '100%'` and proper grid

---

## Next Steps (If You Want to Add)

1. **Database** - Replace events state with database (Supabase)
2. **Authentication** - Add login for users
3. **Email** - Send confirmation emails
4. **Images** - Add event images
5. **Search** - Add search functionality
6. **Payments** - Add Stripe for payments

---

## Important Notes

- **No Database** - Events and registrations only stored in React state (lost on refresh)
- **Client Side** - Everything runs in browser
- **Single File** - All code in `app/page.tsx`
- **Easy to Deploy** - Deploy to Vercel with one click

---

## How to Deploy

### To Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repository
4. Click Deploy
5. Your site is live!

---

**Made for hackathons. Easy to understand. Easy to present. Easy to modify!**

Created: 2025 | Perfect for educational and seminar projects

# Md Hedayat Ali — Portfolio

A modern, full-stack portfolio built with **Next.js**, **Tailwind CSS**, and **MongoDB**.

## Tech Stack
- **Framework**: Next.js 14 (Pages Router, JavaScript)
- **Styling**: Tailwind CSS + Custom CSS
- **Database**: MongoDB via Mongoose
- **Deployment**: Vercel

## Features
- Typing animation hero with role cycling
- Scroll-reveal animations throughout
- Contact form with MongoDB persistence (messages saved to DB)
- Fully responsive — mobile, tablet, desktop
- Dark theme with teal accent, noise texture, floating orbs
- Custom scrollbar, smooth scroll, sticky nav
- **NEW**: Enhanced performance optimizations

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env.local
# Edit .env.local and set your MONGODB_URI
```

### 3. Run development server
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Deploy to Vercel
```bash
# Push to GitHub, then connect repo on vercel.com
# Add MONGODB_URI as environment variable in Vercel dashboard
```

## MongoDB Atlas (recommended for production)
1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Get connection string
3. Add to Vercel environment variables as `MONGODB_URI`

## Project Structure
```
portfolio/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── lib/
│   ├── mongodb.js       # DB connection
│   └── models/
│       └── Message.js   # Contact message schema
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── api/
│       └── contact.js   # POST /api/contact
├── styles/
│   └── globals.css
└── public/
    └── resume.pdf       # Add your resume here
```

## Customization
- Update project GitHub links in `components/Projects.js`
- Add `resume.pdf` to `public/` folder
- Change colors in `tailwind.config.js` and `styles/globals.css`

## Contributing
Feel free to fork this repository and submit pull requests for any improvements!

## License
MIT License - feel free to use this portfolio as a template.

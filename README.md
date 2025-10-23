# Free Modern React Website Template - Open Source

**FREE** professional website template built with React 19, Vite, Tailwind CSS, and Framer Motion. Perfect for developers, agencies, startups, and businesses looking for a modern, responsive website template.

**Keywords:** `free website template` `react template` `open source` `modern website` `responsive template` `business website` `portfolio template` `agency template`

## Live Demo - Try It Free

**[View Live Demo](https://ALPHA0978.github.io/Free_cool_website_tamplate)**

Experience the template in action with all features including:
- Animated WebGL shader backgrounds
- Dark/Light mode switching
- Responsive mobile design
- Interactive components and animations

## Screenshots

### Hero Section with Animated Background
![Hero Section](https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop)

### Mobile Development Services
![Mobile Services](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop)

### Features Showcase
![Features](https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop)

### Responsive Design
![Responsive](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop)

## Why Choose This Free Template

- **100% Free & Open Source** - No hidden costs, use for personal and commercial projects
- **Lightning Fast** - Built with Vite for optimal development experience  
- **Modern Design** - Clean, professional design with smooth animations
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode** - Built-in theme switching capability
- **Smooth Animations** - Powered by Framer Motion for engaging UX
- **SEO Optimized** - Semantic HTML structure for better search rankings
- **Easy Customization** - Well-documented component architecture
- **Production Ready** - Optimized build process and deployment configs

## Technology Stack

- **React 19** - Latest React with concurrent features and modern hooks
- **Vite** - Next-generation frontend build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready motion library for React
- **React Router** - Declarative routing for React applications
- **Lucide React** - Beautiful, customizable SVG icons
- **WebGL Shaders** - Custom animated backgrounds with Three.js
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/manishraj27/modern-react-website-template.git
cd modern-react-website-template
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Architecture

```
src/
├── components/
│   ├── common/              # Reusable utility components
│   │   ├── AnimatedGroup.jsx    # Animation wrapper component
│   │   ├── InfiniteSlider.jsx   # Infinite scrolling slider
│   │   └── Logo.jsx             # Brand logo component
│   ├── sections/            # Page section components
│   │   ├── Header.jsx           # Navigation header
│   │   ├── HeroSection.jsx      # Landing hero section
│   │   ├── FeaturesSection.jsx  # Features showcase
│   │   ├── ShowcaseSection.jsx  # Service showcase
│   │   ├── ValuesSection.jsx    # Company values
│   │   ├── PricingSection.jsx   # Pricing plans
│   │   ├── TestimonialsSection.jsx # Customer testimonials
│   │   ├── FAQSection.jsx       # Frequently asked questions
│   │   ├── ContactSection.jsx   # Contact information
│   │   └── Footer.jsx           # Site footer
│   └── ui/                  # UI component library
│       ├── button.jsx           # Button variants
│       ├── card.jsx             # Card components
│       ├── bento-grid.jsx       # Grid layout system
│       ├── display-cards.jsx    # Interactive display cards
│       ├── cta-3.jsx           # Call-to-action component
│       └── database-with-rest-api.jsx # API visualization
├── pages/                   # Route page components
│   ├── AboutUs.jsx
│   ├── Contact.jsx
│   ├── MobileApps.jsx
│   ├── WebDevelopment.jsx
│   └── CloudSolutions.jsx
├── hooks/                   # Custom React hooks
│   └── useMeasure.js
├── lib/                     # Utility functions
│   └── utils.js
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css               # Global styles and CSS variables
```

## Customization

### Colors & Theming

Edit the CSS variables in `src/index.css` to customize colors:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
```

### Content

1. **Logo**: Replace the SVG in `src/components/common/Logo.jsx`
2. **Images**: Update image URLs in section components
3. **Text Content**: Edit the content directly in each section component
4. **Contact Info**: Update contact details in `ContactSection.jsx`

### Sections

Each section is a separate component in `src/components/sections/`. You can:
- Modify existing sections
- Remove unwanted sections from `App.jsx`
- Add new sections by creating new components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Vercel
```bash
npm run build
# Deploy the dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

### Usage Requirements

You are free to use this template for personal and commercial projects. If you use this template, please:

1. **Attribution Required**: Include a credit to the original author (Manish Raj) in your project
2. **Recommended Attribution**: Add a link back to this repository in your footer or about page
3. **Example Attribution**: "Website template by [Manish Raj](https://github.com/ALPHA0978)"

### What You Can Do

- Use for personal and commercial projects
- Modify and customize the code
- Distribute and sell websites built with this template
- Create derivative works

### What You Cannot Do

- Remove or modify the license file
- Claim the original template as your own work
- Redistribute the template itself without attribution

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you find this template helpful:

- Give it a star on GitHub
- Share it with others
- Report bugs by opening an issue
- Suggest improvements through discussions

For questions or support, please open an issue on GitHub.

## Author

**Manish Raj**
- GitHub: [@manishraj27](https://github.com/ALPHA0978)
- LinkedIn: [Manish Raj](https://www.linkedin.com/in/manish-raj-2x145/)

## Acknowledgments

- Design inspiration from modern SaaS and technology websites
- Icons provided by [Lucide](https://lucide.dev/)
- Stock images from [Unsplash](https://unsplash.com/)
- Color palette inspired by modern design systems
- Animation patterns from contemporary web design trends

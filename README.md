# Developer Portfolio Website

![Portfolio Preview](https://imgix.cosmicjs.com/bc53e240-7ec0-11f0-8dcc-651091f6a7c0-photo-1611224923853-80b023f02d71-1755802670553.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional developer portfolio website built with Next.js 15 and powered by Cosmic CMS. This fully responsive portfolio showcases your projects, skills, work experience, and client testimonials with elegant design and optimal performance.

## ✨ Features

- **🚀 Modern Tech Stack** - Built with Next.js 15, TypeScript, and Tailwind CSS
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Performance Optimized** - Static generation with image optimization
- **🎨 Professional Design** - Clean, modern interface with smooth animations
- **📊 Dynamic Content** - Powered by your existing Cosmic CMS data
- **🔍 SEO Ready** - Optimized meta tags and structured data
- **💼 Project Showcase** - Featured projects with live demos and source code
- **🛠️ Skills Matrix** - Organized by category with proficiency indicators
- **👔 Work Timeline** - Professional experience with achievements
- **⭐ Client Testimonials** - Social proof with ratings and client photos

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68a76b4dffd08cae13b80313&clone_repository=68a791ee0ad7a37495ba188f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Cosmic headless CMS
- **Deployment**: Vercel (recommended)
- **Performance**: Static Site Generation (SSG)
- **Fonts**: Inter for optimal readability

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Bun package manager
- Cosmic account with portfolio content

### Installation

1. **Clone and install dependencies**
```bash
git clone <your-repo>
cd developer-portfolio
bun install
```

2. **Environment Setup**
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. **Run Development Server**
```bash
bun run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 📡 Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getProjects() {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Project[]
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Fetching Skills by Category
```typescript
export async function getSkillsByCategory() {
  const skills = await getSkills()
  
  return skills.reduce((acc, skill) => {
    const category = skill.metadata?.category?.key || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)
}
```

## 🎨 Cosmic CMS Integration

### Content Types Used

- **Projects** (`projects`) - Portfolio projects with images, technologies, and links
- **Skills** (`skills`) - Technical skills organized by category and proficiency
- **Work Experience** (`work-experience`) - Professional employment history
- **Testimonials** (`testimonials`) - Client testimonials with ratings and photos

### Content Structure

The website automatically adapts to your existing Cosmic content structure:

- **Featured Projects** - Projects marked with `featured: true`
- **Skill Categories** - Frontend, Backend, Database, Tools & DevOps
- **Work Timeline** - Chronological work experience with current position highlighting
- **Client Reviews** - 5-star rating system with client information

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with automatic optimizations

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out`
4. Add environment variables

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

Your professional portfolio will be live and ready to impress clients and employers!

<!-- README_END -->
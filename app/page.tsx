import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { getFeaturedProjects, getSkillsByCategory, getWorkExperience, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [featuredProjects, skillsByCategory, workExperience, testimonials] = await Promise.all([
    getFeaturedProjects(),
    getSkillsByCategory(),
    getWorkExperience(),
    getTestimonials()
  ])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects projects={featuredProjects} />
        <Skills skillsByCategory={skillsByCategory} />
        <WorkExperience experiences={workExperience} />
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  )
}
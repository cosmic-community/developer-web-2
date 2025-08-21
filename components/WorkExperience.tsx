import { type WorkExperience } from '@/types'

interface WorkExperienceProps {
  experiences: WorkExperience[]
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-gray-600">Experience information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return 'Present'
    
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      })
    } catch {
      return dateString
    }
  }

  const formatAchievements = (achievements: string | undefined): string[] => {
    if (!achievements) return []
    
    return achievements
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^[•\-\*]\s*/, '').trim())
  }

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience) => {
            const jobTitle = experience.metadata?.job_title
            const companyName = experience.metadata?.company_name
            const companyWebsite = experience.metadata?.company_website
            const startDate = experience.metadata?.start_date
            const endDate = experience.metadata?.end_date
            const isCurrent = experience.metadata?.current
            const description = experience.metadata?.description
            const achievements = experience.metadata?.achievements
            const technologies = experience.metadata?.technologies

            return (
              <div key={experience.id} className="card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {jobTitle}
                    </h3>
                    {companyName && (
                      <div className="text-lg font-semibold text-primary-600 mb-2">
                        {companyWebsite ? (
                          <a 
                            href={companyWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-700 transition-colors"
                          >
                            {companyName}
                          </a>
                        ) : (
                          companyName
                        )}
                      </div>
                    )}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {formatDate(startDate)} - {isCurrent ? 'Present' : formatDate(endDate)}
                  </div>
                </div>

                {description && (
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {description}
                  </p>
                )}

                {achievements && formatAchievements(achievements).length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {formatAchievements(achievements).map((achievement, index) => (
                        <li key={index} className="text-gray-700">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {technologies && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.split(',').map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
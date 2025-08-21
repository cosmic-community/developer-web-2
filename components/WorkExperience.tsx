import { WorkExperience } from '@/types'

interface WorkExperienceProps {
  experiences: WorkExperience[]
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="section-padding bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-gray-600">Experience information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and key accomplishments in web development roles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => {
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
                <div key={experience.id} className="relative">
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-full bg-gray-200"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-2 top-6 w-4 h-4 rounded-full ${
                    isCurrent ? 'bg-primary-600' : 'bg-gray-400'
                  }`}></div>

                  {/* Content */}
                  <div className="ml-12 card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {jobTitle}
                        </h3>
                        <div className="flex items-center gap-2">
                          {companyWebsite ? (
                            <a
                              href={companyWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700 font-medium"
                            >
                              {companyName}
                            </a>
                          ) : (
                            <span className="text-primary-600 font-medium">
                              {companyName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <span className="text-sm text-gray-600">
                          {startDate ? formatDate(startDate) : 'Start Date'} - {
                            isCurrent ? 'Present' : endDate ? formatDate(endDate) : 'End Date'
                          }
                        </span>
                        {isCurrent && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {description && (
                      <p className="text-gray-600 mb-4">
                        {description}
                      </p>
                    )}

                    {achievements && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                        <div className="text-gray-600">
                          {achievements.split('\n').map((achievement, i) => (
                            <p key={i} className="mb-1">
                              {achievement}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {technologies && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
                        <p className="text-gray-600 text-sm">
                          {technologies}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
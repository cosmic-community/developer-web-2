import { Skill } from '@/types'

interface SkillsProps {
  skillsByCategory: Record<string, Skill[]>
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend', 
  database: 'Database',
  tools: 'Tools & DevOps',
  other: 'Other'
}

const categoryOrder = ['frontend', 'backend', 'database', 'tools', 'other']

const proficiencyColors: Record<string, string> = {
  beginner: 'bg-gray-200',
  intermediate: 'bg-yellow-200', 
  advanced: 'bg-green-200',
  expert: 'bg-blue-200'
}

export default function Skills({ skillsByCategory }: SkillsProps) {
  const hasSkills = Object.keys(skillsByCategory).length > 0

  if (!hasSkills) {
    return (
      <section id="skills" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600">Skills information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies.
          </p>
        </div>

        <div className="space-y-12">
          {categoryOrder
            .filter(categoryKey => {
              const skills = skillsByCategory[categoryKey]
              return skills && skills.length > 0
            })
            .map((categoryKey) => {
              const skills = skillsByCategory[categoryKey]
              
              if (!skills || skills.length === 0) {
                return null
              }

              return (
                <div key={categoryKey}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                    {categoryLabels[categoryKey] || categoryKey}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill) => {
                      const skillName = skill.metadata?.skill_name || skill.title
                      const proficiency = skill.metadata?.proficiency
                      const yearsExperience = skill.metadata?.years_experience
                      const icon = skill.metadata?.icon
                      const proficiencyKey = proficiency?.key || 'beginner'

                      return (
                        <div key={skill.id} className="card p-6 text-center">
                          {icon && (
                            <div className="w-12 h-12 mx-auto mb-3 overflow-hidden rounded">
                              <img
                                src={`${icon.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                                alt={`${skillName} icon`}
                                width="48"
                                height="48"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {skillName}
                          </h4>
                          {proficiency && (
                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${proficiencyColors[proficiencyKey]} text-gray-800 mb-2`}>
                              {proficiency.value}
                            </span>
                          )}
                          {yearsExperience && (
                            <p className="text-sm text-gray-600">
                              {yearsExperience} year{yearsExperience !== 1 ? 's' : ''} experience
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
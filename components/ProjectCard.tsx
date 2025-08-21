import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const projectName = project.metadata?.project_name || project.title
  const description = project.metadata?.description
  const technologies = project.metadata?.technologies
  const projectImage = project.metadata?.project_image
  const liveUrl = project.metadata?.live_url
  const githubUrl = project.metadata?.github_url
  const status = project.metadata?.status

  return (
    <div className="card overflow-hidden group">
      {projectImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={`${projectImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={projectName}
            width="300"
            height="200"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
            {projectName}
          </h3>
          {status && (
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              status.key === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : status.key === 'in_progress'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {status.value}
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
        )}
        
        {technologies && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 font-medium mb-1">Technologies:</p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {technologies}
            </p>
          </div>
        )}
        
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-center text-sm"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-center text-sm"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
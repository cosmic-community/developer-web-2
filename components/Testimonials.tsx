import { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600">Testimonials will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  const renderStars = (rating: string) => {
    const numStars = parseInt(rating) || 0
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => {
            const clientName = testimonial.metadata?.client_name
            const clientTitle = testimonial.metadata?.client_title
            const companyName = testimonial.metadata?.company_name
            const testimonialText = testimonial.metadata?.testimonial
            const rating = testimonial.metadata?.rating
            const clientPhoto = testimonial.metadata?.client_photo
            const relatedProject = testimonial.metadata?.related_project

            return (
              <div key={testimonial.id} className="card p-6">
                {rating && (
                  <div className="mb-4">
                    {renderStars(rating.key)}
                  </div>
                )}

                {testimonialText && (
                  <blockquote className="text-gray-600 mb-6 italic">
                    "{testimonialText}"
                  </blockquote>
                )}

                <div className="flex items-center">
                  {clientPhoto && (
                    <div className="flex-shrink-0 w-12 h-12 mr-4">
                      <img
                        src={`${clientPhoto.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                        alt={`${clientName} photo`}
                        width="48"
                        height="48"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {clientName}
                    </div>
                    {clientTitle && companyName && (
                      <div className="text-sm text-gray-600">
                        {clientTitle} at {companyName}
                      </div>
                    )}
                    {relatedProject && (
                      <div className="text-xs text-primary-600 mt-1">
                        Project: {relatedProject.metadata?.project_name || relatedProject.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
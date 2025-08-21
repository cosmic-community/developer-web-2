export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Full Stack
            <span className="text-primary-600 block">Web Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            I create modern, scalable web applications using cutting-edge technologies. 
            Passionate about clean code, user experience, and turning ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="#projects"
              className="btn-primary px-8 py-3 text-lg"
            >
              View My Work
            </a>
            <a
              href="#experience"
              className="btn-secondary px-8 py-3 text-lg"
            >
              My Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
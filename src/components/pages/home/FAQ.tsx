import HomeProjectForm from '@/components/forms/HomeProjectForm'

export default function FAQ() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden border-t border-gray-200"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-1/2 lg:pr-8 lg:border-r lg:border-gray-300 flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofia-bold text-[rgb(0,15,69)] mb-6">
                Discuter de mon projet
              </h2>
              <p className="text-gray-600 mb-8 font-inter">
                Vous avez une idée d'application ou un projet en tête ? Prenez contact avec nous pour en discuter.
              </p>
            </div>

            <div className="lg:w-1/2 lg:pl-8 flex-grow">
              <HomeProjectForm source="FAQ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

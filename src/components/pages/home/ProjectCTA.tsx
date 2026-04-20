'use client'

export default function ProjectCTA() {
  const languages = [
    '.Net',
    'PHP',
    'Python',
    'Ruby',
    'React Native',
    'Kotlin',
    'AWS',
    'Azure',
    'Adobe Commerce (Magento)',
    'Java',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Angular',
    'Node.js',
    'Flutter',
    'Swift',
    'C#',
    'Go',
    'Rust',
    'Xamarin',
    'Ionic',
  ]

  return (
    <div className="bg-white overflow-hidden">
      <div className="w-full">
        <div className="relative bg-gradient-to-r from-[#001432] via-[#001F45] to-[#001432] py-5 overflow-hidden border-y border-white/5">
          <div className="flex animate-scroll mask-fade-x">
            {languages.map((language, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 flex items-center px-6">
                <span className="text-white/90 font-inter font-medium whitespace-nowrap text-sm tracking-wide">
                  {language}
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#DBFF00]/60 ml-6" />
              </div>
            ))}
            {languages.map((language, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 flex items-center px-6">
                <span className="text-white/90 font-inter font-medium whitespace-nowrap text-sm tracking-wide">
                  {language}
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#DBFF00]/60 ml-6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  )
}

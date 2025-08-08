'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

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
        {/* Infnite Slider - Blue Bar Style */}
        <div className="relative bg-[#001F45] py-4 overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of languages */}
            {languages.map((language, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-8 py-4">
                <span className="text-white font-medium whitespace-nowrap text-sm">{language}</span>
                {index < languages.length - 1 && <span className="text-white/50 ml-8">•</span>}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {languages.map((language, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 px-8 py-4">
                <span className="text-white font-medium whitespace-nowrap text-sm">{language}</span>
                {index < languages.length - 1 && <span className="text-white/50 ml-8">•</span>}
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

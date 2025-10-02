'use client';

const companies = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/200px-Tesla_T_symbol.svg.png' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/200px-Spotify_logo_without_text.svg.png' },
];

export default function CompanyCarousel() {
  return (
    <section id="companies" className="py-12 sm:py-16 lg:py-24 pb-16 sm:pb-24 lg:pb-32 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Leading Organizations
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands of organizations and companies that trust EXIBY for their event management needs.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 sm:space-x-12">
            {/* First set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 sm:w-48 sm:h-24 lg:w-64 lg:h-32 flex items-center justify-center"
              >
                <img 
                  src={company.logo}
                  alt={company.name}
                  className="max-w-16 max-h-8 sm:max-w-24 sm:max-h-12 lg:max-w-32 lg:max-h-16 object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 sm:w-48 sm:h-24 lg:w-64 lg:h-32 flex items-center justify-center"
              >
                <img 
                  src={company.logo}
                  alt={company.name}
                  className="max-w-16 max-h-8 sm:max-w-24 sm:max-h-12 lg:max-w-32 lg:max-h-16 object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Third set for truly endless loop */}
            {companies.map((company, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-32 h-16 sm:w-48 sm:h-24 lg:w-64 lg:h-32 flex items-center justify-center"
              >
                <img 
                  src={company.logo}
                  alt={company.name}
                  className="max-w-16 max-h-8 sm:max-w-24 sm:max-h-12 lg:max-w-32 lg:max-h-16 object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity"
                />
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
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
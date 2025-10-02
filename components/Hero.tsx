'use client';

const eventHistory = [
  {
    title: "Tech Innovation Summit 2024",
    attendees: "2,500+",
    date: "March 15, 2024",
    type: "Technology Conference",
    success: "98% satisfaction rate"
  },
  {
    title: "Global Marketing Expo",
    attendees: "1,800+",
    date: "February 28, 2024",
    type: "Marketing Event",
    success: "500+ leads generated"
  },
  {
    title: "Healthcare Professionals Meet",
    attendees: "3,200+",
    date: "January 20, 2024",
    type: "Medical Conference",
    success: "95% would recommend"
  },
  {
    title: "Startup Pitch Competition",
    attendees: "1,200+",
    date: "December 10, 2023",
    type: "Business Event",
    success: "$2M funding raised"
  },
  {
    title: "Digital Transformation Forum",
    attendees: "2,100+",
    date: "November 25, 2023",
    type: "Corporate Event",
    success: "300+ partnerships formed"
  },
  {
    title: "AI & Machine Learning Summit",
    attendees: "2,800+",
    date: "October 15, 2023",
    type: "Technology Conference",
    success: "99% attendance rate"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 overflow-hidden pt-24 sm:pt-32 pb-8 sm:pb-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Event Management
              <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Empower organizations to create seamless events while enabling attendees 
              to join effortlessly with QR code technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="text-center lg:text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-2xl lg:text-3xl font-bold text-[#2684FC] mb-1 lg:mb-2">1000+</div>
                <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">Events Created</div>
              </div>
              <div className="text-center lg:text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-2xl lg:text-3xl font-bold text-[#2684FC] mb-1 lg:mb-2">50K+</div>
                <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">Happy Attendees</div>
              </div>
              <div className="text-center lg:text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg sm:col-span-3 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-[#2684FC] mb-1 lg:mb-2">200+</div>
                <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">Organizations</div>
              </div>
            </div>
          </div>

          {/* Right Side - Event History Cards */}
          <div className="relative lg:pl-8 mt-8 lg:mt-0">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              <div className="animate-scroll-vertical space-y-4 lg:space-y-6">
                {/* First set */}
                {eventHistory.map((event, index) => (
                  <div
                    key={`first-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-200 dark:border-gray-700 shadow-lg min-h-[160px] lg:min-h-[180px]"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 lg:mb-4">
                      <h3 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2 sm:mb-0">
                        {event.title}
                      </h3>
                      <span className="text-xs lg:text-sm text-[#2684FC] font-medium bg-blue-50 dark:bg-blue-900/30 px-2 lg:px-3 py-1 rounded-full self-start">
                        {event.type}
                      </span>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Attendees:</span>
                        <span className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">{event.attendees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Date:</span>
                        <span className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Success:</span>
                        <span className="text-sm lg:text-base font-semibold text-green-600 dark:text-green-400">{event.success}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {eventHistory.map((event, index) => (
                  <div
                    key={`second-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-200 dark:border-gray-700 shadow-lg min-h-[160px] lg:min-h-[180px]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {event.title}
                      </h3>
                      <span className="text-sm text-[#2684FC] font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Attendees:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{event.attendees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Date:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Success:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{event.success}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
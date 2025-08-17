export default function PartnersSection() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16 my-12">
      <div className="bg-gray-100 rounded-2xl sm:rounded-3xl py-6 sm:py-8 px-4 sm:px-8 lg:px-12 shadow-sm overflow-hidden">
        <div className="flex animate-scroll">
          {/* Premier set de logos */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-w-full">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              CHASE
              <div className="ml-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#7384bc] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              <div className="flex items-center mr-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7384bc] rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7384bc] rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7384bc] rounded-full"></div>
              </div>
              asana
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture whitespace-nowrap">
              BuzzFeed
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              Walmart
              <span className="ml-2 text-[#7384bc] text-base sm:text-lg">✱</span>
            </div>
          </div>

          {/* Deuxième set de logos (duplication pour l'effet continu) */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-w-full">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              CHASE
              <div className="ml-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#7384bc] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              <div className="flex items-center mr-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7384bc] rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7384bc] rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7384bc] rounded-full"></div>
              </div>
              asana
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture whitespace-nowrap">
              BuzzFeed
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-[#7384bc] transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              Walmart
              <span className="ml-2 text-[#7384bc] text-base sm:text-lg">✱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
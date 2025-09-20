export default function PartnersSection() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16 my-12">
      <div className="bg-gradient-to-r from-red-50 via-blue-50 to-yellow-50 rounded-2xl sm:rounded-3xl py-6 sm:py-8 px-4 sm:px-8 lg:px-12 shadow-lg overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-lg font-bold text-slate-700 font-architecture mb-2">Nos partenaires de confiance</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-aximotravo-red to-aximotravo-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="flex animate-scroll">
          {/* Premier set de logos */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-w-full">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-red transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              
              <div className="ml-2 w-5 h-5 sm:w-6 sm:h-6 bg-aximotravo-red rounded-full flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-blue transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              <div className="flex items-center mr-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aximotravo-blue rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aximotravo-red rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aximotravo-yellow rounded-full"></div>
              </div>
              IMMOBILIER+
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-yellow transition-colors cursor-pointer font-architecture whitespace-nowrap">
              EXPERTIMO
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-red transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              PARISIMMOBILIER
              <span className="ml-2 text-aximotravo-red text-base sm:text-lg">✱</span>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-blue transition-colors cursor-pointer font-architecture whitespace-nowrap">
              VENDRAPIDE
            </div>
          </div>
          
          {/* Deuxième set de logos (duplication pour l'effet continu) */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-w-full">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-red transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              AXIMOTRAVO
              <div className="ml-2 w-5 h-5 sm:w-6 sm:h-6 bg-aximotravo-red rounded-full flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-blue transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              <div className="flex items-center mr-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aximotravo-blue rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aximotravo-red rounded-full mr-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aximotravo-yellow rounded-full"></div>
              </div>
              IMMOBILIER+
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-yellow transition-colors cursor-pointer font-architecture whitespace-nowrap">
              EXPERTIMO
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-red transition-colors cursor-pointer font-architecture flex items-center whitespace-nowrap">
              PARISIMMOBILIER
              <span className="ml-2 text-aximotravo-red text-base sm:text-lg">✱</span>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 hover:text-aximotravo-blue transition-colors cursor-pointer font-architecture whitespace-nowrap">
              VENDRAPIDE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
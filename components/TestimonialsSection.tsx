'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const PurpleQuote = () => (
    <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 0C21.5081 0 27 5.49187 27 13.5C27 21.5081 21.5081 27 13.5 27C12.3954 27 11.3287 26.8707 10.3125 26.6289C11.4375 29.25 13.5 31.5 16.875 31.5V40.5C7.59375 40.5 0 32.9062 0 22.5V13.5C0 5.49187 5.49187 0 13.5 0Z" fill="#8B5CF6"/>
      <path d="M46.5 0C54.5081 0 60 5.49187 60 13.5C60 21.5081 54.5081 27 46.5 27C45.3954 27 44.3287 26.8707 43.3125 26.6289C44.4375 29.25 46.5 31.5 49.875 31.5V40.5C40.5938 40.5 33 32.9062 33 22.5V13.5C33 5.49187 38.4919 0 46.5 0Z" fill="#8B5CF6"/>
    </svg>
  );

  const TealQuote = () => (
    <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 0C21.5081 0 27 5.49187 27 13.5C27 21.5081 21.5081 27 13.5 27C12.3954 27 11.3287 26.8707 10.3125 26.6289C11.4375 29.25 13.5 31.5 16.875 31.5V40.5C7.59375 40.5 0 32.9062 0 22.5V13.5C0 5.49187 5.49187 0 13.5 0Z" fill="#14B8A6"/>
      <path d="M46.5 0C54.5081 0 60 5.49187 60 13.5C60 21.5081 54.5081 27 46.5 27C45.3954 27 44.3287 26.8707 43.3125 26.6289C44.4375 29.25 46.5 31.5 49.875 31.5V40.5C40.5938 40.5 33 32.9062 33 22.5V13.5C33 5.49187 38.4919 0 46.5 0Z" fill="#14B8A6"/>
    </svg>
  );

  const OrangeQuote = () => (
    <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 0C21.5081 0 27 5.49187 27 13.5C27 21.5081 21.5081 27 13.5 27C12.3954 27 11.3287 26.8707 10.3125 26.6289C11.4375 29.25 13.5 31.5 16.875 31.5V40.5C7.59375 40.5 0 32.9062 0 22.5V13.5C0 5.49187 5.49187 0 13.5 0Z" fill="#F97316"/>
      <path d="M46.5 0C54.5081 0 60 5.49187 60 13.5C60 21.5081 54.5081 27 46.5 27C45.3954 27 44.3287 26.8707 43.3125 26.6289C44.4375 29.25 46.5 31.5 49.875 31.5V40.5C40.5938 40.5 33 32.9062 33 22.5V13.5C33 5.49187 38.4919 0 46.5 0Z" fill="#F97316"/>
    </svg>
  );

  const testimonials = [
    {
      id: 1,
      quote: "Vendre mon appartement aurait été un casse-tête… Olivier et son équipe ont simplifié chaque étape. Résultat : vente rapide et au prix souhaité !",
      name: "Mathieu Richard",
      title: "PDG et auteur",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bgColor: "bg-purple-100",
      quoteColor: "text-purple-600",
      nameColor: "text-purple-600",
      avatarBg: "bg-purple-400",
      QuoteIcon: PurpleQuote,
    },
    {
      id: 2,
      quote: "La double expertise immobilier et travaux m’a permis d’augmenter la valeur de mon bien avant même la mise en vente. Une vraie réussite !",
      name: "Vincent Roy",
      title: "Co-Fondateur, EntrepriseX",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bgColor: "bg-teal-100",
      quoteColor: "text-teal-600",
      nameColor: "text-teal-600",
      avatarBg: "bg-teal-400",
      QuoteIcon: TealQuote,
    },
    {
      id: 3,
      quote: "Professionnalisme, transparence et accompagnement total. Je recommande à 100 % pour vendre sans stress.",
      name: "Camille Dupuis",
      title: "VP du produit",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bgColor: "bg-orange-100",
      quoteColor: "text-orange-500",
      nameColor: "text-orange-500",
      avatarBg: "bg-orange-400",
      QuoteIcon: OrangeQuote,
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture">
            <span className="text-slate-900">Vous hésitez ?</span>{' '}
            <span className="text-[#7384bc]">Découvrez pourquoi</span>{' '}
            <span className="text-slate-900">nos clients nous font confiance !</span>
          </h2>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto font-architecture">
            Plus de 230 propriétaires ont vendu rapidement et au meilleur prix grâce à notre expertise unique immobilier + travaux.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className={`${currentTestimonial.bgColor} rounded-[3rem] p-8 lg:p-12 relative transition-all duration-500 ease-in-out`}>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 z-10">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="flex justify-start">
                  <currentTestimonial.QuoteIcon />
                </div>
                <blockquote className="text-2xl lg:text-3xl leading-relaxed font-architecture">
                  <span className="text-slate-900 font-semibold">{currentTestimonial.quote}</span>
                </blockquote>
                <div className="space-y-2">
                  <h3 className={`text-xl font-bold ${currentTestimonial.nameColor} font-architecture`}>{currentTestimonial.name}</h3>
                  <p className="text-slate-600 font-architecture">{currentTestimonial.title}</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className={`w-64 h-64 ${currentTestimonial.avatarBg} rounded-full overflow-hidden shadow-2xl`}>
                  <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-slate-800 scale-125' : 'bg-slate-400 hover:bg-slate-600'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

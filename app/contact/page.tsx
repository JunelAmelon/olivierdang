'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare, Star, ArrowRight, Shield, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    message: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec design identique à la page services */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7384bc]/10 to-blue-50 rounded-full mb-8">
              <MessageSquare className="w-5 h-5 text-[#7384bc] mr-2" />
              <span className="text-[#7384bc] font-semibold font-architecture">Parlons de votre projet</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-architecture mb-8">
              <span className="text-slate-900">Transformons votre</span><br />
              <span className="bg-gradient-to-r from-[#7384bc] to-blue-600 bg-clip-text text-transparent">projet immobilier</span><br />
              <span className="text-slate-900">en réussite</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-architecture">
              Une question ? Un projet de vente ? Notre équipe d'experts vous accompagne pour maximiser 
              la valeur de votre bien et accélérer sa vente.
            </p>
          </div>
        </div>
      </section>

      {/* Section principale avec design inspiré de l'image */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-5 min-h-[700px]">
              
              {/* Sidebar violet - Informations de contact */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#7384bc] to-[#5a6ba8] p-8 lg:p-12 text-white relative overflow-hidden">
                {/* Motifs décoratifs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-architecture">
                      Prenons contact
                    </h2>
                    <p className="text-blue-100 font-architecture leading-relaxed">
                      Notre équipe d'experts vous accompagne dans votre projet immobilier. 
                      Contactez-nous pour une consultation personnalisée.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Chat */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 font-architecture">Chat en direct</h3>
                        <p className="text-blue-100 text-sm font-architecture">
                          Notre équipe est là pour vous aider
                        </p>
                        <p className="text-white/80 text-sm font-architecture mt-1">
                          contact@olivierdang.fr
                        </p>
                      </div>
                    </div>

                    {/* Bureau */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 font-architecture">Bureau</h3>
                        <p className="text-blue-100 text-sm font-architecture">
                          Venez nous rendre visite à notre bureau
                        </p>
                        <p className="text-white/80 text-sm font-architecture mt-1">
                          123 Avenue des Champs-Élysées<br />
                          75008 Paris, France
                        </p>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 font-architecture">Téléphone</h3>
                        <p className="text-blue-100 text-sm font-architecture">
                          Du lundi au vendredi de 9h à 19h
                        </p>
                        <p className="text-white/80 text-sm font-architecture mt-1">
                          +33 1 23 45 67 89
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="pt-8 border-t border-white/20">
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire - Design épuré */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="max-w-2xl">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 font-architecture">
                      Boostez votre projet
                    </h2>
                    <p className="text-slate-600 font-architecture">
                      Vous pouvez nous joindre à tout moment sur{' '}
                      <a href="mailto:contact@olivierdang.fr" className="text-[#7384bc] hover:underline">
                        contact@olivierdang.fr
                      </a>
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">
                        Message envoyé !
                      </h3>
                      <p className="text-slate-600 font-architecture mb-6">
                        Merci pour votre confiance. Nous vous recontacterons dans les 2 heures.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2 font-architecture">
                          Nom
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7384bc] focus:border-transparent transition-all duration-200 font-architecture placeholder-gray-400"
                          placeholder="Votre nom"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2 font-architecture">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7384bc] focus:border-transparent transition-all duration-200 font-architecture placeholder-gray-400"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2 font-architecture">
                          Numéro de téléphone
                        </label>
                        <div className="flex">
                          <select className="px-3 py-3 border border-gray-200 rounded-l-xl focus:ring-2 focus:ring-[#7384bc] focus:border-transparent bg-gray-50 font-architecture">
                            <option>FR</option>
                          </select>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="flex-1 px-4 py-3 border border-l-0 border-gray-200 rounded-r-xl focus:ring-2 focus:ring-[#7384bc] focus:border-transparent transition-all duration-200 font-architecture placeholder-gray-400"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2 font-architecture">
                          Adresse complète
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7384bc] focus:border-transparent transition-all duration-200 font-architecture placeholder-gray-400"
                          placeholder="123 Rue de la Paix, 75001 Paris"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2 font-architecture">
                          Comment pouvons-nous vous aider ?
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7384bc] focus:border-transparent transition-all duration-200 font-architecture resize-none placeholder-gray-400"
                          placeholder="Parlez-nous un peu de votre projet..."
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3 font-architecture">
                          Services
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'Estimation immobilière',
                            'Vente rapide',
                            'Travaux de valorisation',
                            'Accompagnement complet'
                          ].map((service) => (
                            <label key={service} className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[#7384bc] rounded focus:ring-[#7384bc] border-gray-300"
                              />
                              <span className="ml-2 text-sm text-slate-600 font-architecture">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-[#7384bc] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#5a6ba8] hover:shadow-lg transform hover:-translate-y-0.5 font-architecture"
                      >
                        Commencer
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section carte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-architecture">
              Venez nous rencontrer
            </h2>
            <p className="text-lg text-slate-600 font-architecture">
              Notre bureau est situé au cœur de Paris, facilement accessible
            </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2739080260937!2d2.3016005156743896!3d48.87240097928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8d%3A0x40b82c3688c9460!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1642678901234!5m2!1sen!2sfr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
            
            {/* Overlay avec informations */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#7384bc] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-architecture mb-1">Notre bureau</h3>
                  <p className="text-sm text-slate-600 font-architecture mb-2">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Ouvert
                    </span>
                    <span>Métro: George V</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
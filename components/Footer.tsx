import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-aximotravo-red via-aximotravo-red-dark to-red-800 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-xl tracking-tight">O</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-aximotravo-blue to-aximotravo-blue-dark rounded-lg flex items-center justify-center shadow-md transform -rotate-12">
                  <span className="text-white font-bold text-xs">D</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight tracking-tight font-architecture">
                  Olivier <span className="text-aximotravo-red">DANG</span>
                </span>
                <span className="text-sm text-slate-400 font-medium font-architecture">Expert Immobilier & Travaux</span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed font-architecture">
              Votre expert immobilier de confiance. Plus de 10 ans d'expérience pour vendre rapidement et au meilleur prix.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-aximotravo-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-aximotravo-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-aximotravo-yellow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-aximotravo-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white font-architecture">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-aximotravo-red transition-colors font-architecture">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-slate-300 hover:text-aximotravo-red transition-colors font-architecture">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-aximotravo-red transition-colors font-architecture">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-aximotravo-red transition-colors font-architecture">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white font-architecture">Nos Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 font-architecture hover:text-aximotravo-blue transition-colors cursor-pointer">Estimation immobilière</li>
              <li className="text-slate-300 font-architecture hover:text-aximotravo-blue transition-colors cursor-pointer">Vente rapide</li>
              <li className="text-slate-300 font-architecture hover:text-aximotravo-blue transition-colors cursor-pointer">Valorisation travaux</li>
              <li className="text-slate-300 font-architecture hover:text-aximotravo-blue transition-colors cursor-pointer">Accompagnement complet</li>
              <li className="text-slate-300 font-architecture hover:text-aximotravo-blue transition-colors cursor-pointer">Home staging</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white font-architecture">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-aximotravo-red mt-1 flex-shrink-0" />
                <div className="text-slate-300 font-architecture">
                  <p>123 Avenue des Champs-Élysées</p>
                  <p>75008 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-aximotravo-blue flex-shrink-0" />
                <span className="text-slate-300 font-architecture">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-aximotravo-yellow flex-shrink-0" />
                <span className="text-slate-300 font-architecture">contact@olivierdang.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-aximotravo-red mt-1 flex-shrink-0" />
                <div className="text-slate-300 font-architecture">
                  <p>Lun - Ven: 9h00 - 19h00</p>
                  <p>Sam: 9h00 - 17h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm font-architecture">
              © 2024 Olivier DANG. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-slate-400 hover:text-aximotravo-red transition-colors font-architecture">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-slate-400 hover:text-aximotravo-blue transition-colors font-architecture">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-generales" className="text-slate-400 hover:text-aximotravo-yellow transition-colors font-architecture">
                Conditions générales
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-aximotravo-red transition-colors font-architecture">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
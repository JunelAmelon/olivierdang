'use client';
import { useState } from 'react';
import { X, Home, MapPin, Ruler, Users, Calendar, Euro, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface EstimationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimationPopup({ isOpen, onClose }: EstimationPopupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    surface: '',
    rooms: '',
    location: '',
    yearBuilt: '',
    condition: '',
    hasGarden: false,
    hasParking: false,
    hasBalcony: false,
    floor: '',
    elevator: false,
    contact: {
      name: '',
      email: '',
      phone: ''
    }
  });
  const [estimation, setEstimation] = useState<number | null>(null);

  const handleInputChange = (field: string, value: any) => {
    if (field.startsWith('contact.')) {
      const contactField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        contact: {
          ...prev.contact,
          [contactField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const calculateEstimation = () => {
    let basePrice = 0;
    
    switch (formData.propertyType) {
      case 'appartement':
        basePrice = 8500;
        break;
      case 'maison':
        basePrice = 6800;
        break;
      case 'studio':
        basePrice = 9200;
        break;
      case 'duplex':
        basePrice = 7500;
        break;
      default:
        basePrice = 7000;
    }

    const locationMultiplier = formData.location.toLowerCase().includes('paris') ? 1.4 :
      formData.location.toLowerCase().includes('neuilly') ? 1.3 :
      formData.location.toLowerCase().includes('boulogne') ? 1.2 : 1.0;

    const conditionMultiplier = formData.condition === 'excellent' ? 1.15 :
      formData.condition === 'bon' ? 1.0 :
      formData.condition === 'travaux' ? 0.85 : 1.0;

    let bonusMultiplier = 1.0;
    if (formData.hasGarden) bonusMultiplier += 0.08;
    if (formData.hasParking) bonusMultiplier += 0.05;
    if (formData.hasBalcony) bonusMultiplier += 0.03;
    if (formData.elevator && formData.propertyType === 'appartement') bonusMultiplier += 0.04;

    const surface = parseInt(formData.surface) || 0;
    const estimatedPrice = Math.round(basePrice * surface * locationMultiplier * conditionMultiplier * bonusMultiplier);
    
    setEstimation(estimatedPrice);
    setStep(4);
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      calculateEstimation();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      propertyType: '',
      surface: '',
      rooms: '',
      location: '',
      yearBuilt: '',
      condition: '',
      hasGarden: false,
      hasParking: false,
      hasBalcony: false,
      floor: '',
      elevator: false,
      contact: {
        name: '',
        email: '',
        phone: ''
      }
    });
    setEstimation(null);
  };

  const handleTakeAppointment = () => {
    if (estimation) {
      localStorage.setItem('estimationData', JSON.stringify({
        ...formData,
        estimation,
        timestamp: new Date().toISOString()
      }));
    }
    onClose();
    window.location.href = '/contact';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-architecture">
              Estimation gratuite de votre bien
            </h2>
            <p className="text-slate-600 font-architecture">
              Étape {step} sur {step === 4 ? 4 : 3}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-aximotravo-red to-aximotravo-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Home className="w-12 h-12 text-aximotravo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 font-architecture mb-2">
                  Parlez-nous de votre bien
                </h3>
                <p className="text-slate-600 font-architecture">
                  Ces informations nous permettront de vous donner une estimation précise
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3 font-architecture">
                    Type de bien *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'appartement', label: 'Appartement' },
                      { value: 'maison', label: 'Maison' },
                      { value: 'studio', label: 'Studio' },
                      { value: 'duplex', label: 'Duplex' }
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => handleInputChange('propertyType', type.value)}
                        className={`p-4 rounded-xl border-2 transition-all font-architecture ${
                          formData.propertyType === type.value
                            ? 'border-aximotravo-red bg-red-50 text-aximotravo-red'
                            : 'border-gray-200 hover:border-aximotravo-red/30'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                      Surface (m²) *
                    </label>
                    <input
                      type="number"
                      value={formData.surface}
                      onChange={(e) => handleInputChange('surface', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-red focus:border-transparent font-architecture"
                      placeholder="Ex: 75"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                      Nombre de pièces *
                    </label>
                    <select
                      value={formData.rooms}
                      onChange={(e) => handleInputChange('rooms', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-red focus:border-transparent font-architecture"
                    >
                      <option value="">Sélectionner</option>
                      <option value="1">1 pièce</option>
                      <option value="2">2 pièces</option>
                      <option value="3">3 pièces</option>
                      <option value="4">4 pièces</option>
                      <option value="5">5 pièces</option>
                      <option value="6+">6+ pièces</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                    Localisation *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-red focus:border-transparent font-architecture"
                    placeholder="Ex: Paris 16ème, Neuilly-sur-Seine..."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Ruler className="w-12 h-12 text-aximotravo-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 font-architecture mb-2">
                  Caractéristiques du bien
                </h3>
                <p className="text-slate-600 font-architecture">
                  Plus de détails pour affiner l'estimation
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                      Année de construction
                    </label>
                    <input
                      type="number"
                      value={formData.yearBuilt}
                      onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-blue focus:border-transparent font-architecture"
                      placeholder="Ex: 1990"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                      État général *
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) => handleInputChange('condition', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-blue focus:border-transparent font-architecture"
                    >
                      <option value="">Sélectionner</option>
                      <option value="excellent">Excellent</option>
                      <option value="bon">Bon état</option>
                      <option value="moyen">État moyen</option>
                      <option value="travaux">Travaux nécessaires</option>
                    </select>
                  </div>
                </div>

                {formData.propertyType === 'appartement' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                        Étage
                      </label>
                      <input
                        type="number"
                        value={formData.floor}
                        onChange={(e) => handleInputChange('floor', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-blue focus:border-transparent font-architecture"
                        placeholder="Ex: 3"
                      />
                    </div>
                    <div className="flex items-center pt-8">
                      <label className="flex items-center cursor-pointer font-architecture">
                        <input
                          type="checkbox"
                          checked={formData.elevator}
                          onChange={(e) => handleInputChange('elevator', e.target.checked)}
                          className="mr-2 w-4 h-4 text-aximotravo-blue rounded focus:ring-aximotravo-blue"
                        />
                        Ascenseur
                      </label>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3 font-architecture">
                    Équipements et extérieurs
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer font-architecture">
                      <input
                        type="checkbox"
                        checked={formData.hasParking}
                        onChange={(e) => handleInputChange('hasParking', e.target.checked)}
                        className="mr-3 w-4 h-4 text-aximotravo-blue rounded focus:ring-aximotravo-blue"
                      />
                      Parking / Garage
                    </label>
                    <label className="flex items-center cursor-pointer font-architecture">
                      <input
                        type="checkbox"
                        checked={formData.hasBalcony}
                        onChange={(e) => handleInputChange('hasBalcony', e.target.checked)}
                        className="mr-3 w-4 h-4 text-aximotravo-blue rounded focus:ring-aximotravo-blue"
                      />
                      Balcon / Terrasse
                    </label>
                    <label className="flex items-center cursor-pointer font-architecture">
                      <input
                        type="checkbox"
                        checked={formData.hasGarden}
                        onChange={(e) => handleInputChange('hasGarden', e.target.checked)}
                        className="mr-3 w-4 h-4 text-aximotravo-blue rounded focus:ring-aximotravo-blue"
                      />
                      Jardin
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-aximotravo-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 font-architecture mb-2">
                  Vos coordonnées
                </h3>
                <p className="text-slate-600 font-architecture">
                  Pour recevoir votre estimation personnalisée
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={formData.contact.name}
                    onChange={(e) => handleInputChange('contact.name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-yellow focus:border-transparent font-architecture"
                    placeholder="Votre nom et prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => handleInputChange('contact.email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-yellow focus:border-transparent font-architecture"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 font-architecture">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) => handleInputChange('contact.phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aximotravo-yellow focus:border-transparent font-architecture"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 font-architecture">
                    <strong>Confidentialité garantie :</strong> Vos données sont protégées et ne seront jamais partagées.
                    Nous vous contacterons uniquement pour votre estimation immobilière.
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 4 && estimation && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-architecture mb-2">
                  Estimation de votre bien
                </h3>
                <p className="text-slate-600 font-architecture">
                  Basée sur les données du marché et notre expertise
                </p>
              </div>

              <div className="bg-gradient-to-br from-aximotravo-red to-aximotravo-blue rounded-2xl p-8 text-white text-center">
                <div className="mb-4">
                  <Euro className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-lg opacity-90 font-architecture">Estimation actuelle</p>
                </div>
                <div className="text-4xl font-bold mb-4 font-architecture">
                  {new Intl.NumberFormat('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(estimation)}
                </div>
                <div className="flex items-center justify-center text-aximotravo-yellow">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-architecture">Potentiel d'augmentation : +15 à +25%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Calendar className="w-6 h-6 text-aximotravo-blue mx-auto mb-2" />
                  <p className="text-sm text-slate-600 font-architecture">Délai de vente estimé</p>
                  <p className="font-bold text-slate-900 font-architecture">8-15 jours</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <TrendingUp className="w-6 h-6 text-aximotravo-yellow mx-auto mb-2" />
                  <p className="text-sm text-slate-600 font-architecture">Avec nos services</p>
                  <p className="font-bold text-aximotravo-yellow font-architecture">
                    +{new Intl.NumberFormat('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(Math.round(estimation * 0.2))}
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2 font-architecture">
                  📞 Prochaines étapes
                </h4>
                <ul className="text-sm text-orange-700 space-y-1 font-architecture">
                  <li>• Visite gratuite sous 48h pour affiner l'estimation</li>
                  <li>• Analyse des travaux de valorisation possibles</li>
                  <li>• Stratégie de vente personnalisée</li>
                  <li>• Accompagnement jusqu'à la signature</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={resetForm}
                  className="flex-1 px-6 py-3 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors font-architecture"
                >
                  Nouvelle estimation
                </button>
                <button
                  onClick={handleTakeAppointment}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-aximotravo-red to-aximotravo-red-dark text-white rounded-lg hover:shadow-lg transition-all duration-300 font-architecture flex items-center justify-center"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        {step < 4 && (
          <div className="flex justify-between p-6 border-t border-gray-100">
            <button
              onClick={step === 1 ? onClose : prevStep}
              className="px-6 py-2 text-slate-600 hover:text-slate-900 transition-colors font-architecture"
            >
              {step === 1 ? 'Annuler' : 'Précédent'}
            </button>
            <button
              onClick={nextStep}
              disabled={
                (step === 1 && (!formData.propertyType || !formData.surface || !formData.rooms || !formData.location)) ||
                (step === 2 && !formData.condition) ||
                (step === 3 && (!formData.contact.name || !formData.contact.email || !formData.contact.phone))
              }
              className="px-6 py-2 bg-gradient-to-r from-aximotravo-red to-aximotravo-blue text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-architecture flex items-center"
            >
              {step === 3 ? 'Calculer l\'estimation' : 'Suivant'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
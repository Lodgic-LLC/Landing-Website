'use client'

import { useState, useEffect } from 'react'
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaCog,
} from 'react-icons/fa'
import { FaComputer, FaMobile, FaClock, FaCreditCard, FaBell, FaMap, FaChartBar, FaLock } from 'react-icons/fa6'
import { useAnalytics } from '@/hooks/useAnalytics'

// Helper function to delay opening a URL until a gtag event is sent.

function gtagSendEvent(url?: string) {
  const callback = function () {
    if (typeof url === 'string') {
      window.location.href = url
    }
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion_event_submit_lead_form', {
      event_callback: callback,
      event_timeout: 2000,
    })
  } else {
    // Fallback si gtag n'est pas disponible
    callback()
  }
  return false
}

interface EstimateModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  projectType: 'website' | 'mobile' | ''
  websiteType?: 'vitrine' | 'ecommerce' | 'webapp' | 'blog' | ''
  platforms?: ('ios' | 'android')[]
  complexity: 'simple' | 'classic' | 'complex' | ''
  features: {
    auth: boolean
    payment: boolean
    notifications: boolean
    maps: boolean
    analytics: boolean
    backoffice: boolean
  }
  timeline: 'standard' | 'asap' | ''
  contact: {
    name: string
    email: string
  }
}

const initialFormData: FormData = {
  projectType: '',
  websiteType: '',
  platforms: [],
  complexity: '',
  features: {
    auth: false,
    payment: false,
    notifications: false,
    maps: false,
    analytics: false,
    backoffice: false,
  },
  timeline: '',
  contact: {
    name: '',
    email: '',
  },
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const analytics = useAnalytics()

  const totalSteps = 6

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1)
      setFormData(initialFormData)
      setSubmitStatus(null)
    }
  }, [isOpen])

  const complexityDescriptions = {
    simple: 'Interface basique, fonctionnalités essentielles',
    classic: 'Design personnalisé, fonctionnalités avancées',
    complex: 'Architecture complexe, intégrations multiples',
  }

  const featuresPricing = {
    auth: 800,
    payment: 1200,
    notifications: 600,
    maps: 900,
    analytics: 700,
    backoffice: 1500,
  }

  const basePricing = {
    website: {
      vitrine: { simple: 2500, classic: 3500, complex: 6000 },
      ecommerce: { simple: 4000, classic: 5500, complex: 9000 },
      webapp: { simple: 6000, classic: 8000, complex: 14000 },
      blog: { simple: 2000, classic: 3000, complex: 5000 },
    },
    mobile: {
      ios: { simple: 2700, classic: 5000, complex: 8300 },
      android: { simple: 2700, classic: 5000, complex: 8300 },
      both: { simple: 4000, classic: 7300, complex: 12700 },
    },
  }

  const calculatePrice = () => {
    let basePrice = 0

    if (formData.projectType === 'website' && formData.websiteType && formData.complexity) {
      basePrice = basePricing.website[formData.websiteType][formData.complexity]
    } else if (formData.projectType === 'mobile' && formData.platforms && formData.complexity) {
      const platformKey = formData.platforms.length === 2 ? 'both' : formData.platforms[0]
      basePrice = basePricing.mobile[platformKey as keyof typeof basePricing.mobile][formData.complexity]
    }

    // Add features pricing
    const featuresPrice = Object.entries(formData.features)
      .filter(([_, enabled]) => enabled)
      .reduce((sum, [feature, _]) => sum + featuresPricing[feature as keyof typeof featuresPricing], 0)

    let totalPrice = basePrice + featuresPrice

    // Add ASAP surcharge
    if (formData.timeline === 'asap') {
      totalPrice *= 1.1
    }

    return Math.round(totalPrice)
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const estimatedPrice = calculatePrice()
      const featuresSelected = Object.entries(formData.features)
        .filter(([_, enabled]) => enabled)
        .map(([feature, _]) => feature)

      const formDataObj = new FormData()
      formDataObj.append('name', formData.contact.name)
      formDataObj.append('email', formData.contact.email)
      formDataObj.append('_subject', 'Nouvelle estimation de devis')
      formDataObj.append('_next', 'https://lodgic-dev.com/merci')
      formDataObj.append('_captcha', 'false')

      // Add estimate details
      formDataObj.append('project_type', formData.projectType)
      if (formData.websiteType) formDataObj.append('website_type', formData.websiteType)
      if (formData.platforms) formDataObj.append('platforms', formData.platforms.join(', '))
      formDataObj.append('complexity', formData.complexity)
      formDataObj.append('features', featuresSelected.join(', '))
      formDataObj.append('timeline', formData.timeline)
      formDataObj.append('estimated_price', `${estimatedPrice}€`)

      const response = await fetch('https://formsubmit.co/ajax/c1f6460b84bc25bfcdc7f63d038c2dfd', {
        method: 'POST',
        body: formDataObj,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Estimation envoyée avec succès !' })

        // Envoyer l'événement de conversion Google Tag
        gtagSendEvent()

        setTimeout(() => {
          onClose()
        }, 2000)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== ''
      case 2:
        if (formData.projectType === 'website') return formData.websiteType !== ''
        if (formData.projectType === 'mobile') return formData.platforms && formData.platforms.length > 0
        return false
      case 3:
        return formData.complexity !== ''
      case 4:
        return true // Features are optional
      case 5:
        return formData.timeline !== ''
      case 6:
        return formData.contact.name && formData.contact.email
      default:
        return false
    }
  }

  const canGoNext = isStepValid() && currentStep < totalSteps

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 font-bricolage-grotesque-regular">Estimation de devis</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>
              Étape {currentStep} sur {totalSteps}
            </span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#DBFF00] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quel type de projet souhaitez-vous développer ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData({ ...formData, projectType: 'website' })}
                  className={`p-6 border-2 rounded-lg transition-all duration-200 flex cursor-pointer flex-col items-center space-y-3 ${
                    formData.projectType === 'website'
                      ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <FaComputer size={32} className="text-gray-600" />
                  <span className="font-medium text-gray-900">Site Web</span>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, projectType: 'mobile' })}
                  className={`p-6 border-2 rounded-lg transition-all duration-200 flex cursor-pointer flex-col items-center space-y-3 ${
                    formData.projectType === 'mobile'
                      ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <FaMobile size={32} className="text-gray-600" />
                  <span className="font-medium text-gray-900">Application Mobile</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Website Type or Mobile Platforms */}
          {currentStep === 2 && (
            <div className="space-y-6">
              {formData.projectType === 'website' && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quel type de site web ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'vitrine', label: 'Site Vitrine', desc: 'Présentation de votre entreprise' },
                      { key: 'ecommerce', label: 'E-commerce', desc: 'Boutique en ligne' },
                      { key: 'webapp', label: 'Application Web', desc: 'Plateforme interactive' },
                      { key: 'blog', label: 'Blog/Magazine', desc: 'Site de contenu' },
                    ].map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setFormData({ ...formData, websiteType: type.key as any })}
                        className={`p-4 border-2 rounded-lg transition-all duration-200 text-left cursor-pointer ${
                          formData.websiteType === type.key
                            ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900">{type.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {formData.projectType === 'mobile' && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sur quelles plateformes ?</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'ios', label: 'iOS (iPhone/iPad)', icon: '🍎' },
                      { key: 'android', label: 'Android', icon: '🤖' },
                    ].map((platform) => (
                      <label
                        key={platform.key}
                        className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-gray-300"
                      >
                        <input
                          type="checkbox"
                          checked={formData.platforms?.includes(platform.key as any) || false}
                          onChange={(e) => {
                            const platforms = formData.platforms || []
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                platforms: [...platforms, platform.key as 'ios' | 'android'],
                              })
                            } else {
                              setFormData({
                                ...formData,
                                platforms: platforms.filter((p) => p !== platform.key),
                              })
                            }
                          }}
                          className="mr-3 h-4 w-4 text-[#DBFF00] border-gray-300 rounded focus:ring-[#DBFF00]"
                        />
                        <span className="font-medium text-gray-900">{platform.label}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 3: Complexity */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Niveau de complexité souhaité ?</h3>
              <div className="space-y-4">
                {[
                  { key: 'simple', label: 'Simple' },
                  { key: 'classic', label: 'Classique' },
                  { key: 'complex', label: 'Complexe' },
                ].map((complexity) => (
                  <button
                    key={complexity.key}
                    onClick={() => setFormData({ ...formData, complexity: complexity.key as any })}
                    className={`w-full p-4 border-2 rounded-lg transition-all duration-200 text-left cursor-pointer ${
                      formData.complexity === complexity.key
                        ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{complexity.label}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {complexityDescriptions[complexity.key as keyof typeof complexityDescriptions]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Features */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités additionnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: 'auth', label: 'Authentification', icon: FaLock, desc: 'Connexion utilisateur' },
                  { key: 'payment', label: 'Système de paiement', icon: FaCreditCard, desc: 'Paiements en ligne' },
                  { key: 'notifications', label: 'Notifications', icon: FaBell, desc: 'Push notifications' },
                  { key: 'maps', label: 'Carte interactive', icon: FaMap, desc: 'Géolocalisation' },
                  { key: 'analytics', label: 'Statistiques', icon: FaChartBar, desc: 'Tableau de bord' },
                  { key: 'backoffice', label: 'Back-office', icon: FaCog, desc: 'Administration' },
                ].map((feature) => (
                  <label
                    key={feature.key}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.features[feature.key as keyof typeof formData.features]
                        ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.features[feature.key as keyof typeof formData.features]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          features: {
                            ...formData.features,
                            [feature.key]: e.target.checked,
                          },
                        })
                      }
                      className="mt-1 mr-3 h-4 w-4 text-[#DBFF00] border-gray-300 rounded focus:ring-[#DBFF00]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <feature.icon className="text-gray-600" size={16} />
                        <span className="font-medium text-gray-900">{feature.label}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{feature.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Timeline */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Délai souhaité ?</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setFormData({ ...formData, timeline: 'standard' })}
                  className={`w-full p-4 border-2 rounded-lg transition-all duration-200 text-left cursor-pointer ${
                    formData.timeline === 'standard'
                      ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Standard (4-12 semaines)</div>
                      <div className="text-sm text-gray-600">Délai classique de développement</div>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, timeline: 'asap' })}
                  className={`w-full p-4 border-2 rounded-lg transition-all duration-200 text-left cursor-pointer ${
                    formData.timeline === 'asap'
                      ? 'border-[#DBFF00] bg-[#DBFF00]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-orange-600" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Express (1-4 semaines)
                        <span className="ml-2 px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">+10%</span>
                      </div>
                      <div className="text-sm text-gray-600">Développement prioritaire</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Summary and Contact */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Résumé et contact</h3>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-gray-900">Estimation du projet</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Type de projet:</span>
                    <span className="font-medium">
                      {formData.projectType === 'website' ? 'Site Web' : 'Application Mobile'}
                      {formData.websiteType && ` (${formData.websiteType})`}
                      {formData.platforms && ` (${formData.platforms.join(', ')})`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complexité:</span>
                    <span className="font-medium capitalize">{formData.complexity}</span>
                  </div>
                  {Object.entries(formData.features).some(([_, enabled]) => enabled) && (
                    <div className="flex justify-between">
                      <span>Fonctionnalités:</span>
                      <span className="font-medium">
                        {Object.entries(formData.features)
                          .filter(([_, enabled]) => enabled)
                          .map(([feature, _]) => feature)
                          .join(', ')}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Délai:</span>
                    <span className="font-medium">
                      {formData.timeline === 'standard' ? '4-12 semaines' : '1-4 semaines (Express)'}
                    </span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold text-black bg-[#DBFF00] px-4 py-2 rounded-lg">
                    <span>Prix estimé:</span>
                    <span>{calculatePrice().toLocaleString()}€ HT</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.contact.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contact: { ...formData.contact, name: e.target.value },
                          })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBFF00] focus:border-[#DBFF00] outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.contact.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contact: { ...formData.contact, email: e.target.value },
                          })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBFF00] focus:border-[#DBFF00] outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DBFF00] hover:bg-[#DBFF00]/80 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Recevoir l'estimation détaillée
                    </>
                  )}
                </button>
              </form>

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.success
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <div className="flex items-center">
                    {submitStatus.success ? (
                      <FaCheckCircle className="mr-2 text-green-600" />
                    ) : (
                      <FaTimes className="mr-2 text-red-600" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center text-gray-600 hover:text-gray-800 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Précédent
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="flex items-center bg-[#DBFF00] hover:bg-[#DBFF00]/80 text-black cursor-pointer font-medium py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Suivant
              <FaArrowRight className="ml-2" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

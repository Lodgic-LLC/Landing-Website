# Guide du Système d'Analytics Avancé

## Vue d'ensemble

Ce système d'analytics avancé permet de tracker toutes les interactions utilisateur sur votre site web pour améliorer la conversion et obtenir des données précieuses. Il s'intègre parfaitement avec Google Analytics et Google Ads.

## Fonctionnalités principales

### 🎯 **Tracking automatique des pages**
- Temps passé sur chaque page
- Profondeur de scroll avec seuils (10%, 25%, 50%, 75%, 90%, 100%)
- Sections visitées et temps passé dans chaque section
- Exit intent detection

### 📝 **Tracking des formulaires**
- Focus sur les champs
- Taux d'abandon par champ
- Temps de remplissage
- Erreurs de validation
- Conversions réussies

### 🖱️ **Tracking des interactions**
- Clics sur tous les éléments
- Mouvements de souris (détection de frustration)
- Navigation entre pages
- Liens externes et internes

### ⚡ **Tracking des performances**
- Temps de chargement des pages
- Métriques Web Vitals
- Erreurs JavaScript
- Métriques d'engagement

### 🚪 **Tracking de sortie**
- Exit intent (mouvement vers la barre d'adresse)
- Changement d'onglet/fenêtre
- Fermeture du navigateur
- Navigation vers d'autres pages

## Configuration

### 1. Configuration de base dans `layout.tsx`

```tsx
<AnalyticsProvider
  config={{
    debug: process.env.NODE_ENV === 'development',
    enableAutoTracking: true,
    scrollThreshold: 25,
    timeThreshold: 10,
    exitIntentEnabled: true,
  }}
>
  {/* Votre application */}
</AnalyticsProvider>
```

### 2. Tracking d'une page

```tsx
// Page simple avec tracking de base
export default function MaPage() {
  return (
    <>
      <PageTracker 
        pageName="NomDeLaPage" 
        pageCategory="categorie_page"
        additionalData={{
          page_type: 'landing',
          conversion_goal: 'lead_generation'
        }}
      />
      
      {/* Contenu de la page */}
    </>
  )
}
```

### 3. Tracking avancé avec toutes les métriques

```tsx
export default function PageAvancee() {
  return (
    <>
      <PageTracker pageName="PageAvancee" />
      <AdvancedTracker
        pageName="PageAvancee"
        enableExitIntent={true}
        enableMouseTracking={true}
        enableIdleTracking={true}
        enablePerformanceTracking={true}
        idleTimeout={60000} // 1 minute
        mouseTrackingThreshold={500} // 500ms
      />
      
      {/* Contenu */}
    </>
  )
}
```

### 4. Tracking des sections

```tsx
<TrackingSection 
  sectionName="hero" 
  trackOnView={true} 
  trackTimeSpent={true}
  minTimeToTrack={5} // 5 secondes minimum
>
  <Hero />
</TrackingSection>
```

### 5. Tracking des boutons avec conversion

```tsx
<TrackingButton
  elementType="cta_button"
  elementId="primary_cta"
  category="conversion"
  conversionType="cta_click"
  conversionValue={15}
  className="btn btn-primary"
>
  Contactez-nous
</TrackingButton>
```

### 6. Tracking des liens

```tsx
<TrackingLink
  href="mailto:contact@lodgic-dev.com"
  conversionType="email_click"
  elementId="contact_email"
  category="conversion"
>
  Nous contacter
</TrackingLink>
```

## Événements trackés automatiquement

### 📊 **Événements de page**
- `page_view` - Vue de page avec informations contextuelles
- `page_load` - Temps de chargement
- `page_exit` - Sortie de page avec métriques
- `scroll_depth` - Profondeur de scroll atteinte

### 🎯 **Événements d'engagement**
- `section_view` - Section vue par l'utilisateur
- `section_time` - Temps passé dans une section
- `section_exit` - Sortie d'une section
- `time_on_page` - Temps total sur la page
- `engagement_high` - Engagement élevé détecté

### 💼 **Événements de conversion**
- `conversion` - Conversion réussie (formulaire, CTA, etc.)
- `contact_form_submit` - Soumission du formulaire de contact
- `email_click` - Clic sur un lien email
- `phone_click` - Clic sur un numéro de téléphone
- `cta_click` - Clic sur un bouton d'action

### 📝 **Événements de formulaire**
- `form_focus` - Focus sur un champ
- `form_submit` - Soumission du formulaire
- `form_abandon` - Abandon du formulaire

### 🖱️ **Événements d'interaction**
- `click` - Clic sur un élément
- `exit_intent` - Intention de quitter la page
- `rapid_movement` - Mouvement rapide de souris (frustration)
- `user_idle` - Utilisateur inactif
- `javascript_error` - Erreur JavaScript

## Données collectées

### Pour chaque événement :
- **Informations de base** : timestamp, page, titre, URL
- **Données utilisateur** : user agent, référent, langue
- **Métriques d'engagement** : temps passé, interactions
- **Position** : scroll, position de la souris pour les clics
- **Contexte** : section, élément, type d'interaction

### Exemples de données envoyées :

```javascript
// Événement de conversion
{
  event_category: 'conversion',
  event_label: 'contact_form',
  value: 10,
  conversion_type: 'contact_form',
  form_completion: 100,
  time_to_conversion: 45,
  page_name: 'Contact'
}

// Exit intent
{
  event_category: 'engagement',
  event_label: 'exit_intent',
  mouse_position: { x: 534, y: 12 },
  time_on_page: 127,
  interaction_count: 15,
  scroll_count: 8
}
```

## Configuration Google Analytics

### Événements personnalisés recommandés à configurer :

1. **Conversions** (Google Ads)
   - `contact_form_submit` 
   - `email_click`
   - `phone_click`
   - `cta_click`

2. **Engagement**
   - `high_engagement` (temps > 3 minutes)
   - `exit_intent`
   - `section_completion`

3. **Performance**
   - `slow_page_load` (> 3 secondes)
   - `javascript_error`

## Utilisation avancée

### Hook useAnalytics

```tsx
const analytics = useAnalytics({
  pageName: 'MaPage',
  enableAutoTracking: true,
  enableScrollTracking: true,
  enableTimeTracking: true,
  enableExitTracking: true
})

// Tracking manuel
analytics.trackClick('button', 'custom-btn', 'Mon Bouton')
analytics.trackConversion('custom_conversion', 25)
analytics.trackSectionEngagement('custom-section', 'enter')
```

### Tracking conditionnel

```tsx
// Tracker seulement certaines actions
if (userIsLoggedIn) {
  analytics.trackConversion('user_login', 50)
}

// Tracker avec données contextuelles
analytics.trackClick('product-card', productId, productName, 'product', {
  product_category: category,
  product_price: price,
  user_segment: userSegment
})
```

## Debugging

### Mode debug activé
En mode développement, tous les événements sont loggés dans la console :

```
🔍 [Analytics] click: {
  action: "click",
  category: "interaction",
  element_type: "button",
  element_id: "cta-contact",
  page_name: "Home"
}
```

### Vérification dans Google Analytics
1. Allez dans **Temps réel** > **Événements**
2. Vérifiez que vos événements personnalisés apparaissent
3. Configurez des **Audiences** basées sur ces événements
4. Créez des **Entonnoirs de conversion**

## Meilleures pratiques

### 1. **Nommage des événements**
- Utilisez des noms cohérents et descriptifs
- Préfixez par catégorie (`form_`, `nav_`, `conversion_`)
- Évitez les caractères spéciaux

### 2. **Données sensibles**
- Ne trackez jamais d'informations personnelles
- Utilisez des IDs anonymes
- Respectez le RGPD

### 3. **Performance**
- Le système est optimisé avec throttling et debouncing
- Évitez de tracker trop d'événements simultanés
- Testez l'impact sur les performances

### 4. **Conversions**
- Définissez clairement vos objectifs de conversion
- Attribuez des valeurs cohérentes
- Suivez l'entonnoir de conversion complet

## Rapports et analyses

### Métriques clés à surveiller :
1. **Taux d'engagement** : temps passé, profondeur de scroll
2. **Points de sortie** : où les utilisateurs abandonnent
3. **Efficacité des CTA** : taux de clic par bouton
4. **Performance des formulaires** : taux d'abandon par champ
5. **Intention de sortie** : moments critiques d'abandon

### Création de tableaux de bord
Utilisez Google Analytics 4 ou Google Data Studio pour créer des rapports personnalisés basés sur ces événements.

## Support et personnalisation

Ce système est entièrement modulaire et peut être étendu selon vos besoins spécifiques. Chaque composant peut être configuré indépendamment pour s'adapter à votre stratégie d'analytics.

Pour des besoins spécifiques, vous pouvez :
- Créer de nouveaux types d'événements
- Ajouter des métriques personnalisées
- Intégrer d'autres plateformes d'analytics
- Personnaliser les seuils et conditions de tracking 
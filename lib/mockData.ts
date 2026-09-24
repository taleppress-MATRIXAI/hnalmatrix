export const dashboardMetrics = {
  totalLeads: 214,
  qualifiedLeads: 91,
  bookings: 46,
  revenue: 27540,
  activeChats: 18,
  conversionRate: 42,
};

export const leadRows = [
  { id: 'L-1042', name: 'Amina B.', source: 'Website', status: 'New', value: 450, channel: 'Chat' },
  { id: 'L-1043', name: 'Youssef K.', source: 'WhatsApp', status: 'Qualified', value: 1500, channel: 'WhatsApp' },
  { id: 'L-1044', name: 'Hassan I.', source: 'Instagram', status: 'Booked', value: 800, channel: 'Instagram' },
  { id: 'L-1045', name: 'Sara T.', source: 'Email', status: 'Contacted', value: 600, channel: 'Email' },
  { id: 'L-1046', name: 'Mouad L.', source: 'Website', status: 'Sales', value: 2000, channel: 'Chat' },
];

export const businessOverview = {
  businessName: 'Maison de Santé El Amine',
  industry: 'Clinics',
  currency: 'MAD',
  locale: 'fr',
  language: 'ar/fr/en'
};

export const chatMessages = [
  {
    id: 'm-1',
    role: 'assistant',
    text: 'Bonjour ! Je peux vous aider à reserver un rendez-vous ou demander un devis.'
  },
  {
    id: 'm-2',
    role: 'customer',
    text: 'Je veux une consultation pour mon salon.'
  },
  {
    id: 'm-3',
    role: 'assistant',
    text: 'Très bien. Donnez-moi votre nom et votre numéro de téléphone pour confirmer votre demande.'
  }
];

export const subscriptionPlans = [
  {
    name: 'Starter',
    price: 49,
    features: ['AI chatbot', 'Lead collection', 'Basic dashboard', '1 business profile']
  },
  {
    name: 'Professional',
    price: 149,
    popular: true,
    features: ['All Starter features', 'Multi-channel inbox', 'Booking automation', 'Lead scoring']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Multi-branch support', 'Custom workflows', 'Dedicated onboarding', 'Priority support']
  }
];

// Phone numbers are client-supplied. Email addresses and social links are
// still non-operational placeholders.
export const contact = {
  phone: '+91 90762 29076',
  // Also the WhatsApp number.
  appointmentPhone: '+91 77770 08464',
  whatsappNumber: '+91 77770 08464' as string | null,
  email: 'care@skace.example',
  corporateEmail: 'corporate@skace.example',
  investorEmail: 'investors@skace.example',
  socialLinks: [
    { label: 'Facebook', url: '/contact#social' },
    { label: 'Instagram', url: '/contact#social' },
    { label: 'LinkedIn', url: '/contact#social' },
    { label: 'YouTube', url: '/contact#social' },
    { label: 'X', url: '/contact#social' },
  ],
};
export const whatsappUrl = contact.whatsappNumber
  ? `https://wa.me/${contact.whatsappNumber.replace(/\D/g, '')}`
  : null;
export const telUrl = (n: string) => `tel:${n.replace(/[^\d+]/g, '')}`;

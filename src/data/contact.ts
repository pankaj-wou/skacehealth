// All contact values are deliberately non-operational synthetic examples.
export const contact = {
  phone: '+91 00000 00100',
  appointmentPhone: '+91 00000 00101',
  whatsappNumber: null as string | null,
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

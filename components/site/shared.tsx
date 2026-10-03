'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  MessageCircle,
  HeartPulse,
  Building2,
  Network,
  MapPin,
  Stethoscope,
  ShieldCheck,
  Brain,
  Bone,
  Baby,
  Droplet,
  Activity,
  Ribbon,
  Check,
  Users,
  CalendarDays,
  Monitor,
  Leaf,
} from 'lucide-react';
import { navigation } from '@/src/data/navigation';
import { company, careJourney, roadmap, pillars } from '@/src/data/company';
import { contact, whatsappUrl, telUrl } from '@/src/data/contact';
import { services, departments, type Service } from '@/src/data/services';
import { hospitals, type Hospital } from '@/src/data/hospitals';
import { team, capabilities } from '@/src/data/team';
export function Brand() {
  return (
    <a className="brand" href="/" aria-label="SKACE Healthtech home">
      <img
        className="brand-mark"
        src="/images/brand/skace-mark.webp"
        alt=""
        width={43}
        height={48}
      />
      <img
        className="brand-wordmark"
        src="/images/brand/skace-wordmark.webp"
        alt="SKACE Healthtech"
        width={165}
        height={40}
      />
    </a>
  );
}
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Brand />
        <nav aria-label="Main navigation">
          {navigation
            .filter(([n]) => n !== 'Home')
            .map(([n, url]) => (
              <a
                key={url}
                href={url}
                aria-current={path === url ? 'page' : undefined}
              >
                {n}
              </a>
            ))}
        </nav>
        <a className="button header-cta" href="/book-appointment">
          Book Appointment <ArrowUpRight size={16} />
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                className="mobile-menu"
                variant="ghost"
                aria-label="Open navigation"
              />
            }
          >
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetTitle>Explore SKACE</SheetTitle>
            <SheetDescription>Care, people and possibilities.</SheetDescription>
            <nav aria-label="Mobile navigation">
              {navigation.map(([n, url]) => (
                <a
                  href={url}
                  key={url}
                  onClick={() => setOpen(false)}
                  aria-current={path === url ? 'page' : undefined}
                >
                  {n}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </nav>
            <a className="button" href="/book-appointment">
              Book Appointment
            </a>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <>
      <section className="cta-band">
        <div className="wrap">
          <div>
            <span className="eyebrow">HERE FOR YOUR NEXT STEP</span>
            <h2>Let’s find your path to better care.</h2>
          </div>
          <a className="button" href="/book-appointment">
            Book an Appointment <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <footer className="footer wrap">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>
              Clinical excellence.
              <br />
              Intelligent connections.
              <br />
              Healthcare built around you.
            </p>
          </div>
          <div>
            <h3>Quick links</h3>
            <a href="/leadership">Leadership</a>
            <a href="/careers">Careers</a>
            <a href="/news">News & stories</a>
            {navigation
              .filter(([n]) =>
                ['About Us', 'Doctors', 'Technology', 'Investors'].includes(n),
              )
              .map(([n, u]) => (
                <a href={u} key={u}>
                  {n}
                </a>
              ))}
          </div>
          <div>
            <h3>Specialities</h3>
            {departments.map((s) => (
              <a href={`/specialities/${s.slug}`} key={s.slug}>
                {s.name}
              </a>
            ))}
            <a href="/specialities">View all specialities →</a>
          </div>
          <div>
            <h3>Our network</h3>
            <a href="/network">Superspeciality hospitals</a>
            <a href="/network">Satellite general hospitals</a>
            <a href="/network">Micro clinics</a>
            <h3 className="footer-subhead">Patient services</h3>
            <a href="/book-appointment">Book Appointment</a>
            <a href="/patient-services">Patient information & FAQs</a>
          </div>
          <div>
            <h3>Get in touch</h3>
            <a href="/contact">Contact Us</a>
            <a href={telUrl(contact.phone)}>{contact.phone}</a>
            <a href={telUrl(contact.appointmentPhone)}>
              {contact.appointmentPhone}
            </a>
            <a href={whatsappUrl ?? '/contact#contact-details'}>WhatsApp</a>
            <a href="/contact?subject=investor">Investor enquiries</a>
            {contact.socialLinks.length ? (
              contact.socialLinks.map((s) => (
                <a href={s.url} key={s.label}>
                  {s.label}
                </a>
              ))
            ) : (
              <span>Social links to be updated</span>
            )}
          </div>
        </div>
        <p className="disclaimer">{company.disclaimer}</p>
        <div className="footer-bottom">
          <span>© 2026 SKACE Healthtech Pvt Ltd. All Rights Reserved.</span>
          <div>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/medical-disclaimer">Medical Disclaimer</a>
          </div>
        </div>
      </footer>
      <a
        className="whatsapp"
        href={whatsappUrl ?? '/contact#contact-details'}
        aria-label={
          whatsappUrl
            ? 'Contact us on WhatsApp'
            : 'WhatsApp contact details pending'
        }
        title={whatsappUrl ? 'WhatsApp' : 'Contact details'}
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  link,
  href,
}: {
  eyebrow: string;
  title: string;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {link && (
        <a className="text-link" href={href}>
          {link}
          <ArrowUpRight size={18} />
        </a>
      )}
    </div>
  );
}
const icons = {
  shield: ShieldCheck,
  heart: HeartPulse,
  bone: Bone,
  brain: Brain,
  baby: Baby,
  droplet: Droplet,
  activity: Activity,
  ribbon: Ribbon,
  stethoscope: Stethoscope,
};
export function ServiceCard({ service: s }: { service: Service }) {
  const Icon = icons[s.icon as keyof typeof icons];
  return (
    <a className="service-card" href={`/specialities/${s.slug}`}>
      <Icon size={32} />
      <h3>{s.name}</h3>
      <p>{s.description}</p>
      <span className="text-link card-arrow">
        Learn more <ArrowUpRight size={18} />
      </span>
    </a>
  );
}
export function HospitalCard({ hospital: h }: { hospital: Hospital }) {
  return (
    <article className="hospital-card">
      <div className="hospital-thumbnail sheet-photo">
        <img
          src={h.image}
          alt="Illustrative hospital exterior — not a photograph of this facility"
          loading="lazy"
          style={{ width: '200%', height: '200%', maxWidth: 'none' }}
        />
        <span className="demo-label">Illustrative image</span>
      </div>
      <div className="card-body">
        <span className="eyebrow">{h.type}</span>
        <h3>{h.name}</h3>
        <p className="location">
          <MapPin size={15} />
          {h.location}
        </p>
        <p>Beds: {h.beds ?? 'To be confirmed'}</p>
        <p className="small">
          {h.specialities
            .map((slug) => services.find((s) => s.slug === slug)?.name)
            .join(' · ')}
        </p>
        <p className="small">Phone: {h.phone ?? 'To be updated'}</p>
        <div className="card-actions">
          <a className="text-link" href={`/network/${h.slug}`}>
            View Hospital <ArrowUpRight size={16} />
          </a>
          <a
            className="text-link"
            href={`/book-appointment?hospital=${h.slug}`}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </article>
  );
}
export function HubSpokeDiagram() {
  return (
    <div
      className="network-diagram"
      aria-label="2 superspeciality hospital hubs connect to 5 satellite general hospital spokes, which connect to 10 community micro clinics"
    >
      <div className="network-tier">
        <span className="diagram-icon">
          <Building2 size={28} />
        </span>
        <div>
          <span className="eyebrow">THE HUBS</span>
          <h3>2 Superspeciality Hospitals</h3>
          <p>Kalyan West & Diva · 50 beds each.</p>
        </div>
      </div>
      <div className="connector">↓</div>
      <div className="network-tier">
        <span className="diagram-icon">
          <Network size={28} />
        </span>
        <div>
          <span className="eyebrow">THE SPOKES</span>
          <h3>5 Satellite General Hospitals</h3>
          <p>
            Ambernath, Kalyan East, Titwala, Ambivli and Murbad · 25–35 beds
            each.
          </p>
        </div>
      </div>
      <div className="connector">↓</div>
      <div className="network-tier">
        <span className="diagram-icon">
          <MapPin size={28} />
        </span>
        <div>
          <span className="eyebrow">COMMUNITY ACCESS</span>
          <h3>10 Micro Clinics</h3>
          <p>A local connection to a wider network.</p>
        </div>
      </div>
    </div>
  );
}
export function NetworkSection() {
  return (
    <section className="tinted">
      <div className="section wrap split">
        <div>
          <span className="eyebrow">CONNECTED CARE. CLOSER TO HOME.</span>
          <h2>An integrated hub & spoke healthcare network.</h2>
          <p className="lead">
            One connected ecosystem, built to bring the right care within reach.
          </p>
          <ul className="check-list">
            {[
              'Specialist access & referral coordination',
              'Healthcare reach & patient convenience',
              'Continuity of care & operational efficiency',
            ].map((t) => (
              <li key={t}>
                <Check size={18} />
                {t}
              </li>
            ))}
          </ul>
          <a className="text-link" href="/network">
            Explore our network <ArrowRight size={18} />
          </a>
        </div>
        <HubSpokeDiagram />
      </div>
    </section>
  );
}
export function HealthcareJourney() {
  const icons = [CalendarDays, Stethoscope, HeartPulse, Leaf];
  return (
    <div className="grid four journey-grid">
      {careJourney.map((j, i) => {
        const Icon = icons[i];
        return (
          <article key={j.name} className="journey-card">
            <span className="step-number">0{i + 1}</span>
            <Icon size={29} />
            <h3>{j.name}</h3>
            <p>{j.text}</p>
            <ul>
              {j.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
export function TechnologyRoadmap() {
  return (
    <section className="roadmap">
      <div>
        <span className="pill">Technology roadmap · Future vision</span>
        <h2>Building an AI-enabled healthcare ecosystem.</h2>
        <p>
          SKACE envisions intelligent digital support across pre-care, post-care
          and preventive healthcare. These capabilities are a future roadmap,
          subject to development and clinical oversight.
        </p>
      </div>
      <div className="roadmap-items">
        {roadmap.map((t) => (
          <div key={t}>
            <span /> {t}
          </div>
        ))}
      </div>
    </section>
  );
}
export function InvestorSection() {
  return (
    <section className="section wrap">
      <SectionTitle
        eyebrow="A VISION THAT GOES FURTHER"
        title="Building a scalable healthcare ecosystem"
        link="Explore our vision"
        href="/investors"
      />
      <div className="grid three">
        {pillars.map(([t, d], i) => (
          <article className="pillar" key={t}>
            <span>0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function TeamSection() {
  return (
    <>
      <div className="grid three leadership-grid">
        {team.map((t) => (
          <article className="team-card" key={t.name}>
            <ProfileIdentity name={t.name} image={t.image || undefined} />
            <div className="card-body">
              <span className="eyebrow">{t.role}</span>
              <h3>{t.name}</h3>
              <p className="small">{t.qualification}</p>
              <p>{t.bio}</p>
              {t.achievements.length > 0 && (
                <>
                  <h4>Key achievements</h4>
                  <ul>
                    {t.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
export function TechnologyTeam() {
  return (
    <div className="grid three">
      {capabilities.map((c) => (
        <article className="service-card" key={c}>
          <Monitor size={28} />
          <h3>{c}</h3>
          <p>
            A technology focus described in the leadership profiles, supporting
            patient monitoring, preventive healthcare research and hospital
            digitisation.
          </p>
        </article>
      ))}
    </div>
  );
}
export function ProfileIdentity({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  if (image)
    return (
      <div className="profile-photo">
        <img src={image} alt={name} loading="lazy" />
      </div>
    );
  const initials = name
    .replace(/^(Dr\.|Mr\.)\s*/, '')
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      className="profile-identity"
      aria-label={`Photograph not yet supplied for ${name}`}
    >
      <span aria-hidden="true">{initials}</span>
      <small>Photograph to follow</small>
    </div>
  );
}
export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion>
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={i}>
          <AccordionTrigger className="faq-trigger">{item.q}</AccordionTrigger>
          <AccordionContent className="faq-content">
            <p>{item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

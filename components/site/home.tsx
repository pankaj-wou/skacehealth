'use client';
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react';
import { company } from '@/src/data/company';
import { services } from '@/src/data/services';
import { hospitals } from '@/src/data/hospitals';
import {
  SectionTitle,
  ServiceCard,
  NetworkSection,
  HospitalCard,
  HealthcareJourney,
  TechnologyRoadmap,
  InvestorSection,
} from './shared';
import { DoctorFinder } from './doctors';
import { AppointmentForm } from './forms';
export function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> ACE GROUP OF HOSPITALS
          </div>
          <h1>
            Expert care.
            <br />
            Connected by
            <br />
            <em>possibility.</em>
          </h1>
          <p>
            Advancing healthcare through clinical excellence and intelligent
            technology. For you, your family, and a healthier tomorrow.
          </p>
          <div className="actions">
            <a className="button" href="/book-appointment">
              <CalendarDays size={18} /> Book an Appointment{' '}
              <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="/network">
              Explore Our Network <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-note">
            <ShieldCheck size={20} /> Superspeciality care in Kalyan & Diva
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={company.heroImage}
            alt="Illustrative healthcare professional in a bright hospital"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
          <div className="image-label">Illustrative image</div>
          <div className="care-badge">
            <span className="icon-box">
              <HeartPulse />
            </span>
            <div>
              <strong>Care that stays connected.</strong>
              <small>From your first visit to every next step.</small>
            </div>
          </div>
          <div className="image-caption">
            <span /> CLINICAL EXCELLENCE. HUMAN CONNECTION.
          </div>
        </div>
      </section>
      <section className="stats wrap">
        {company.stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>
      <section className="section wrap">
        <SectionTitle
          eyebrow="CARE WITHOUT COMPROMISE"
          title="Specialist expertise. A personal approach."
          link="Explore all specialities"
          href="/specialities"
        />
        <div className="grid four">
          {services.map((s) => (
            <ServiceCard service={s} key={s.slug} />
          ))}
        </div>
      </section>
      <section className="about-preview wrap split">
        <div>
          <span className="eyebrow">OUR PURPOSE, ALWAYS</span>
          <h2>
            Healthcare built
            <br />
            around people.
          </h2>
        </div>
        <div>
          <p className="lead">{company.intro}</p>
          <p>
            Our next chapter connects that clinical experience through a hub &
            spoke model, technology and a future vision for AI-enabled patient
            support.
          </p>
          <a className="text-link" href="/about">
            Know more about SKACE <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <NetworkSection />
      <section className="section wrap">
        <SectionTitle
          eyebrow="EXPERTISE YOU CAN CONNECT WITH"
          title="Find your specialist"
          link="Meet all specialists"
          href="/doctors"
        />
        <p className="section-intro">
          Explore the Ace Group of Hospitals doctor panel. Consultation
          schedules and individual hospital assignments will be added when
          available.
        </p>
        <DoctorFinder compact />
      </section>
      <section className="tinted">
        <div className="section wrap">
          <SectionTitle
            eyebrow="OUR HEALTHCARE NETWORK"
            title="The right care. Within reach."
            link="Explore our facilities"
            href="/network"
          />
          <div className="grid four">
            {hospitals.slice(0, 4).map((h) => (
              <HospitalCard hospital={h} key={h.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionTitle
          eyebrow="CONNECTED THROUGH EVERY CHAPTER"
          title="Technology supporting every stage of the patient journey"
          link="Our technology vision"
          href="/technology"
        />
        <HealthcareJourney />
        <TechnologyRoadmap />
      </section>
      <InvestorSection />
      <section className="tinted" id="appointment-form">
        <div className="section wrap split">
          <div>
            <span className="eyebrow">TAKE THE NEXT STEP</span>
            <h2>
              Your care journey
              <br />
              starts with a conversation.
            </h2>
            <p className="lead">
              Choose a hospital, explore a speciality and share your
              preferences.
            </p>
            <p>
              This demonstration lets you explore the experience. Live
              appointments will be available in a future phase.
            </p>
          </div>
          <div className="form-panel">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}

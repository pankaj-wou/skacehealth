import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Network,
  MapPin,
  HeartPulse,
  Check,
  Cpu,
  Wifi,
  Glasses,
} from 'lucide-react';
import { SectionTitle } from './shared';
import {
  aboutSections,
  aboutIntro,
  vision,
  careModel,
  carePathway,
  coreServices,
  additionalServices,
  preventiveCare,
  technologyAreas,
  visionStatement,
  missionStatement,
  missionAims,
  whySkace,
  promiseLines,
  type AboutService,
} from '@/src/data/about';

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="about-list">
      {items.map((t) => (
        <li key={t}>
          <Check size={16} />
          {t}
        </li>
      ))}
    </ul>
  );
}

function ServiceBlock({ service: s }: { service: AboutService }) {
  return (
    <article className="about-service" id={s.id}>
      <h3>{s.name}</h3>
      {s.tagline && <p className="about-tagline">{s.tagline}</p>}
      <p>{s.intro}</p>
      <h4>{s.listLabel}:</h4>
      <ItemList items={s.items} />
      {s.subsections?.map((sub) => (
        <div className="about-subsection" key={sub.name}>
          <h4>{sub.name}</h4>
          {sub.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      ))}
      {s.note && <p className="about-note">{s.note}</p>}
      {s.slug && (
        <a className="text-link" href={`/specialities/${s.slug}`}>
          View speciality & doctors <ArrowUpRight size={16} />
        </a>
      )}
    </article>
  );
}

const modelIcons = [Building2, Network, MapPin];
const techIcons = [Cpu, Wifi, Glasses];

export function AboutPage() {
  return (
    <>
      <nav className="about-toc wrap" aria-label="On this page">
        <span>On this page</span>
        <div>
          {aboutSections.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section className="section wrap split about-anchor" id="who-we-are">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Building integrated, connected healthcare</h2>
          <p className="lead">{aboutIntro[0]}</p>
          {aboutIntro.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="about-vision">
          <HeartPulse size={30} />
          <span className="eyebrow">OUR VISION IS SIMPLE</span>
          <p>{vision}</p>
          <div className="actions">
            <a className="button" href="/specialities">
              Explore our specialities <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href="/contact">
              Contact us <ArrowRight size={16} />
            </a>
          </div>
        </aside>
      </section>

      <section className="tinted about-anchor" id="healthcare-model">
        <div className="section wrap">
          <SectionTitle
            eyebrow="OUR HEALTHCARE MODEL"
            title="A hub & spoke super-speciality healthcare network"
            link="Explore our network"
            href="/network"
          />
          <p className="about-section-intro">
            SKACE Health is developing an integrated hub & spoke healthcare
            model designed to extend advanced medical services beyond major
            metropolitan centres. Each healthcare cluster is envisioned around
            three connected levels of care.
          </p>
          <div className="grid three">
            {careModel.map((m, i) => {
              const Icon = modelIcons[i];
              return (
                <article className="info-card about-card" key={m.name}>
                  <Icon size={28} />
                  <span className="eyebrow">{m.label.toUpperCase()}</span>
                  <h3>{m.name}</h3>
                  <p className="about-capacity">{m.capacity}</p>
                  <p>{m.text}</p>
                </article>
              );
            })}
          </div>
          <p className="about-section-intro about-after">
            Together, these facilities are designed to create a connected
            healthcare ecosystem in which patients can enter the system closer
            to home and move seamlessly to higher levels of speciality care
            whenever required.
          </p>
          <ol className="about-pathway" aria-label="Patient pathway">
            {carePathway.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section wrap about-anchor" id="services">
        <SectionTitle
          eyebrow="OUR SUPER-SPECIALITY SERVICES"
          title="Comprehensive expertise. Coordinated care."
          link="View all specialities"
          href="/specialities"
        />
        <p className="about-section-intro">
          SKACE Health is developing a multidisciplinary clinical ecosystem
          focused on some of the most critical areas of modern healthcare. Our
          super-speciality services are designed around coordinated clinical
          pathways, specialist expertise, advanced diagnostics, surgical
          intervention, intensive care and long-term follow-up.
        </p>
        <nav className="about-chips" aria-label="Services on this page">
          {[...coreServices, ...additionalServices].map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.name}
            </a>
          ))}
        </nav>
        <h3 className="about-group-title">Core super-speciality programmes</h3>
        <div className="about-services">
          {coreServices.map((s) => (
            <ServiceBlock service={s} key={s.id} />
          ))}
        </div>
        <h3 className="about-group-title">
          Further specialities and clinical services
        </h3>
        <div className="about-services">
          {additionalServices.map((s) => (
            <ServiceBlock service={s} key={s.id} />
          ))}
        </div>
      </section>

      <section className="tinted about-anchor" id="preventive-care">
        <div className="section wrap split">
          <div>
            <span className="eyebrow">PREVENTIVE & PREDICTIVE HEALTHCARE</span>
            <h2>Moving from reactive medicine to proactive healthcare</h2>
            <p className="lead">{preventiveCare.intro}</p>
            <h4 className="about-list-label">
              Special attention is being given to chronic conditions such as:
            </h4>
            <ItemList items={preventiveCare.conditions} />
            <p>{preventiveCare.note}</p>
          </div>
          <div className="info-card about-card">
            <h3>Our preventive healthcare vision combines</h3>
            <ItemList items={preventiveCare.approach} />
          </div>
        </div>
      </section>

      <section className="section wrap about-anchor" id="technology">
        <SectionTitle
          eyebrow="AI & CONNECTED HEALTHCARE"
          title="Technology enabling better access to care"
          link="Our technology vision"
          href="/technology"
        />
        <p className="about-section-intro">
          SKACE Health aims to integrate emerging technologies across its
          healthcare network to improve accessibility, continuity and patient
          experience.
        </p>
        <div className="grid three">
          {technologyAreas.map((t, i) => {
            const Icon = techIcons[i];
            return (
              <article className="info-card about-card" key={t.name}>
                <Icon size={28} />
                <h3>{t.name}</h3>
                <p>{t.intro}</p>
                <ItemList items={t.items} />
              </article>
            );
          })}
        </div>
        <p className="about-callout">
          Technology at SKACE Health is intended to support clinicians and
          strengthen patient care, not to replace the judgement, expertise and
          relationship between healthcare professionals and their patients.
        </p>
      </section>

      <section className="tinted about-anchor" id="vision-mission">
        <div className="section wrap split">
          <div>
            <span className="eyebrow">OUR VISION</span>
            <p className="about-statement">{visionStatement}</p>
          </div>
          <div>
            <span className="eyebrow">OUR MISSION</span>
            <p className="about-statement">{missionStatement}</p>
            <h4 className="about-list-label">We aim to:</h4>
            <ItemList items={missionAims} />
          </div>
        </div>
      </section>

      <section className="section wrap about-anchor" id="why-skace">
        <SectionTitle
          eyebrow="WHY SKACE HEALTH?"
          title="What guides the way we care"
        />
        <div className="grid three about-why">
          {whySkace.map(([t, d], i) => (
            <article className="pillar" key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tinted about-anchor" id="our-promise">
        <div className="section wrap split">
          <div>
            <span className="eyebrow">OUR PROMISE</span>
            <h2>Advanced care. Closer to you.</h2>
            <p className="lead">
              From a micro clinic in the community to a satellite hospital and
              an advanced super-speciality hub, SKACE Health is creating a
              connected network designed around each patient’s complete
              healthcare journey.
            </p>
            <div className="actions">
              <a className="button" href="/network">
                Explore our network <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="/leadership">
                Meet our leadership <ArrowRight size={16} />
              </a>
              <a className="text-link" href="/contact">
                Contact us <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="about-promise">
            {promiseLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
            <span>
              SKACE Health — Building the Future of Connected Healthcare.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

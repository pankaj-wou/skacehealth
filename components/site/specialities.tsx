import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SectionTitle, ServiceCard } from './shared';
import { otherServices } from '@/src/data/services';
import {
  specialitiesIntro,
  specialityBlocks,
  criticalCareUnits,
  criticalCarePathway,
  careApproach,
  type SpecialityBlock,
} from '@/src/data/specialities';

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

function BlockLinks({ block: b }: { block: SpecialityBlock }) {
  return (
    <div className="spec-links">
      {b.slug && (
        <a className="text-link" href={`/specialities/${b.slug}`}>
          View specialists <ArrowUpRight size={16} />
        </a>
      )}
      <a
        className="text-link"
        href={
          b.slug
            ? `/book-appointment?speciality=${b.slug}`
            : '/book-appointment'
        }
      >
        Book an appointment <ArrowRight size={16} />
      </a>
    </div>
  );
}

// Full-width card: description on the left, service list on the right.
function SpecialitySection({ block: b }: { block: SpecialityBlock }) {
  return (
    <article className="spec-block about-anchor" id={b.id}>
      <div>
        <h3>{b.name}</h3>
        <p className="about-tagline">{b.tagline}</p>
        {b.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {b.notes.map((n) => (
          <p className="about-note" key={n}>
            {n}
          </p>
        ))}
        <BlockLinks block={b} />
      </div>
      <div>
        <h4>{b.listLabel}:</h4>
        <ItemList items={b.items} />
      </div>
    </article>
  );
}

// Compact card used for the three intensive-care units.
function UnitCard({ block: b }: { block: SpecialityBlock }) {
  return (
    <article className="about-service spec-unit about-anchor" id={b.id}>
      <h3>{b.name}</h3>
      <p className="about-tagline">{b.tagline}</p>
      {b.intro.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h4>{b.listLabel}:</h4>
      <ItemList items={b.items} />
      {b.notes.map((n) => (
        <p className="about-note" key={n}>
          {n}
        </p>
      ))}
      <BlockLinks block={b} />
    </article>
  );
}

// Specialities covered above are not repeated in the panel grid.
const covered = new Set(
  [...specialityBlocks, ...criticalCareUnits].map((b) => b.slug),
);
const panelOnly = otherServices.filter((s) => !covered.has(s.slug));

export default function SpecialitiesPage() {
  return (
    <>
      <section className="section wrap">
        {specialitiesIntro.map((p, i) => (
          <p className={i === 0 ? 'lead spec-intro' : 'spec-intro'} key={p}>
            {p}
          </p>
        ))}
        <nav className="about-chips" aria-label="Specialities on this page">
          {[...specialityBlocks, ...criticalCareUnits].map((b) => (
            <a href={`#${b.id}`} key={b.id}>
              {b.name}
            </a>
          ))}
          <a href="#our-approach">Our approach</a>
        </nav>
        <section aria-labelledby="speciality-programmes">
          <h2 className="about-group-title" id="speciality-programmes">
            Our speciality programmes
          </h2>
          <div className="spec-blocks">
            {specialityBlocks.map((b) => (
              <SpecialitySection block={b} key={b.id} />
            ))}
          </div>
        </section>
      </section>

      <section className="tinted about-anchor" id="critical-care">
        <div className="section wrap">
          <SectionTitle
            eyebrow="ADVANCED CRITICAL CARE"
            title="ICCU, PICU and NICU services"
          />
          <section aria-label="Intensive care units">
            <div className="grid three spec-units">
              {criticalCareUnits.map((b) => (
                <UnitCard block={b} key={b.id} />
              ))}
            </div>
          </section>
          <div className="spec-integrated">
            <span className="eyebrow">INTEGRATED CRITICAL CARE</span>
            <h3>One connected system of advanced care</h3>
            <p>
              Our ICCU, PICU and NICU services form an important part of the
              SKACE Health superspeciality ecosystem. These critical care
              services are designed to support patients who require intensive
              monitoring, rapid intervention and multidisciplinary medical
              management.
            </p>
            <h4 className="about-list-label">
              Our wider care pathway connects:
            </h4>
            <ol className="spec-pathway" aria-label="Critical care pathway">
              {criticalCarePathway.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              This integrated approach helps maintain continuity throughout some
              of the most critical stages of a patient’s healthcare journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap split about-anchor" id="our-approach">
        <div>
          <span className="eyebrow">OUR APPROACH TO SPECIALITY CARE</span>
          <h2>More than treatment. A complete care journey.</h2>
          <p className="lead">
            At SKACE Health, speciality care is built around the complete needs
            of the patient.
          </p>
          <h3 className="about-list-label">Our approach brings together:</h3>
          <ItemList items={careApproach} />
        </div>
        <div className="about-promise">
          <span className="spec-promise-intro">
            Whether a patient requires a specialist consultation, surgery,
            critical care or long-term management, our objective remains the
            same:
          </span>
          <p>The right care.</p>
          <p>The right expertise.</p>
          <p>At the right time.</p>
          <span>SKACE Health — Advanced Care. Closer to You.</span>
        </div>
      </section>

      <section className="tinted">
        <div className="section wrap">
          <SectionTitle
            eyebrow="ALSO ON OUR DOCTOR PANEL"
            title="Other specialities"
            link="Find a doctor"
            href="/doctors"
          />
          <div className="grid four">
            {panelOnly.map((s) => (
              <ServiceCard service={s} key={s.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';
import { Suspense } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Building2,
  Check,
  ShieldCheck,
  Users,
  CalendarDays,
} from 'lucide-react';
import { Home } from './home';
import { AboutPage } from './about';
import {
  SectionTitle,
  ServiceCard,
  HospitalCard,
  HubSpokeDiagram,
  HealthcareJourney,
  TechnologyRoadmap,
  InvestorSection,
  TeamSection,
  TechnologyTeam,
  FAQAccordion,
  ProfileIdentity,
} from './shared';
import { DoctorFinder, DoctorCard } from './doctors';
import { AppointmentForm, ContactForm } from './forms';
import { company } from '@/src/data/company';
import { services } from '@/src/data/services';
import { hospitals } from '@/src/data/hospitals';
import { doctors, matchesSpeciality } from '@/src/data/doctors';
import { researchCollaboration } from '@/src/data/team';
import { contact } from '@/src/data/contact';
import { pageInfo } from '@/src/data/pages';
import { patientFAQs, testimonials, news, jobs } from '@/src/data/editorial';
function Intro({ path }: { path: string }) {
  const info = pageInfo(path);
  return (
    <section className="page-intro tinted">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          {path.includes('/') && (
            <>
              <a href={`/${path.split('/')[0]}`}>{path.split('/')[0]}</a>
              <span>/</span>
            </>
          )}
          <span>
            {'breadcrumb' in info && info.breadcrumb
              ? info.breadcrumb
              : info.title}
          </span>
        </div>
        <span className="eyebrow">
          {'eyebrow' in info && info.eyebrow
            ? info.eyebrow
            : 'SKACE HEALTHTECH'}
        </span>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </div>
    </section>
  );
}
export function SitePage({ path }: { path: string }) {
  path =
    (
      {
        appointments: 'book-appointment',
        privacy: 'privacy-policy',
        terms: 'terms-and-conditions',
      } as Record<string, string>
    )[path] ?? path;
  if (!path)
    return (
      <Suspense>
        <Home />
      </Suspense>
    );
  const service = services.find((s) => path === `specialities/${s.slug}`);
  const doctor = doctors.find((d) => path === `doctors/${d.slug}`);
  const hospital = hospitals.find((h) => path === `network/${h.slug}`);
  const article = news.find((n) => path === `news/${n.slug}`);
  return (
    <>
      <Intro path={path} />
      {path === 'about' && <AboutPage />}
      {path === 'specialities' && (
        <section className="section wrap">
          <div className="grid four">
            {services.map((s) => (
              <ServiceCard service={s} key={s.slug} />
            ))}
          </div>
        </section>
      )}
      {service && (
        <>
          <section className="section wrap split">
            <div>
              <span className="eyebrow">ACE GROUP OF HOSPITALS</span>
              <h2>{service.name}</h2>
              <p className="lead">{service.description}</p>
              <p>
                The group’s service portfolio and doctor panel bring together
                expertise across clinical disciplines. Explore the services
                below and the related specialists to learn more about the areas
                of care.
              </p>
              <p>
                Individual facility availability and consultation arrangements
                will be confirmed by the care team. The appointment form on this
                preview demonstrates a request only.
              </p>
              <a
                className="button"
                href={`/book-appointment?speciality=${service.slug}`}
              >
                Request an Appointment <ArrowUpRight size={18} />
              </a>
            </div>
            {service.imageIndex !== null ? (
              <figure>
                <div className="service-photo sheet-photo">
                  <img
                    src="/images/services/clinical-care.webp"
                    alt="Illustrative clinical scene, not an actual facility photograph"
                    style={{
                      width: '400%',
                      height: '200%',
                      maxWidth: 'none',
                      transform: `translate(-${(service.imageIndex % 4) * 25}%,-${Math.floor(service.imageIndex / 4) * 50}%)`,
                    }}
                  />
                </div>
                <figcaption>Generated illustration</figcaption>
              </figure>
            ) : (
              <div className="info-card">
                <h3>Specialist care</h3>
                <p>{service.description}</p>
                <a className="text-link" href="/doctors">
                  Explore the doctor panel <ArrowRight size={16} />
                </a>
              </div>
            )}
          </section>
          <section className="tinted">
            <div className="section wrap">
              <SectionTitle
                eyebrow="CLINICAL FOCUS"
                title="Services & expertise"
              />
              <div className="grid three">
                {service.procedures.map((t) => (
                  <article className="info-card" key={t}>
                    <Check />
                    <h3>{t}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section wrap">
            <SectionTitle eyebrow="DOCTOR PANEL" title="Related specialists" />
            {doctors.some((d) => matchesSpeciality(d, service.slug)) ? (
              <div className="grid three">
                {doctors
                  .filter((d) => matchesSpeciality(d, service.slug))
                  .map((d) => (
                    <DoctorCard doctor={d} key={d.slug} />
                  ))}
              </div>
            ) : (
              <p>
                Specialist assignments for this service will be confirmed.{' '}
                <a className="text-link" href="/doctors">
                  View the full doctor panel
                </a>
              </p>
            )}
          </section>
          <section className="section wrap">
            <SectionTitle
              eyebrow="OUR NETWORK"
              title="Superspeciality hospital locations"
            />
            <p className="section-intro">
              Please confirm service availability at your preferred hospital.
            </p>
            <div className="grid three">
              {hospitals
                .filter((h) => h.type === 'Hub')
                .map((h) => (
                  <HospitalCard hospital={h} key={h.slug} />
                ))}
            </div>
          </section>
          <section className="section wrap narrow">
            <h2>Questions about your visit</h2>
            <FAQAccordion items={patientFAQs.slice(0, 4)} />
          </section>
        </>
      )}
      {path === 'doctors' && (
        <section className="section wrap">
          <div className="editorial-quote">
            <p>
              “Thoughtful care starts with listening. Our shared purpose is to
              help every patient understand their options and feel supported
              through the next step.”
            </p>
            <span>Illustrative message from medical leadership</span>
          </div>
          <DoctorFinder />
        </section>
      )}
      {doctor && (
        <section className="section wrap">
          <div className="profile-layout">
            <div>
              <ProfileIdentity name={doctor.name} image={doctor.image} />
            </div>
            <div>
              <span className="eyebrow">
                {services.find((s) => s.slug === doctor.speciality)?.name}
              </span>
              <h2>{doctor.name}</h2>
              <p className="lead">{doctor.designation}</p>
              <div className="details-grid">
                {[
                  ['Qualifications', doctor.qualification],
                  ['Experience', doctor.experience],
                  ['Sub-speciality', doctor.subSpeciality],
                  ['Languages', doctor.languages],
                  [
                    'Hospital',
                    hospitals.find((h) => h.slug === doctor.hospital)?.name ??
                      'Individual hospital assignment to be confirmed',
                  ],
                  ['Consultation days', doctor.days],
                  ['Consultation timings', doctor.timings],
                ].map(([t, v]) => (
                  <div key={t}>
                    <span>{t}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
              <a
                className="button"
                href={`/book-appointment?doctor=${doctor.slug}`}
              >
                Book Appointment <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="prose">
            <h2>Professional biography</h2>
            <p>{doctor.biography}</p>
          </div>
        </section>
      )}
      {path === 'network' && (
        <>
          <section className="section wrap split">
            <div>
              <span className="eyebrow">ACE GROUP OF HOSPITALS</span>
              <h2>
                Specialist care,
                <br />
                community connections.
              </h2>
              <p className="lead">
                Two 50-bed superspeciality hospitals. Five satellite hospitals.
                Sixteen micro clinic locations.
              </p>
              <p>
                The group’s network extends from Kalyan and Diva to community
                locations including Ambernath, Ambivli, Titwala, Badlapur,
                Murbad and surrounding areas.
              </p>
              <div className="map-schematic">
                <MapPin />
                <h3>Maharashtra healthcare network</h3>
                <p>Kalyan ↔ Diva</p>
                <p>
                  Satellite hospitals: Kalyan East, Ambernath East, Ambernath
                  West, Ambivli and Titwala.
                </p>
                <small>
                  Location overview · detailed addresses and directions to
                  follow
                </small>
              </div>
            </div>
            <HubSpokeDiagram />
          </section>
          {[
            ['Hub', 'Superspeciality hospitals'],
            ['Spoke', 'Satellite hospitals'],
            ['Community access', 'Micro clinic locations'],
          ].map(([type, title]) => (
            <section className="section wrap" key={type}>
              <SectionTitle eyebrow="EXPLORE THE NETWORK" title={title} />
              <div className="grid three">
                {hospitals
                  .filter((h) => h.type === type)
                  .map((h) => (
                    <HospitalCard hospital={h} key={h.slug} />
                  ))}
              </div>
            </section>
          ))}
        </>
      )}
      {hospital && (
        <>
          <section className="section wrap split">
            <div>
              <span className="eyebrow">{hospital.type}</span>
              <h2>Care connected to {hospital.location}.</h2>
              <p className="lead">{hospital.description}</p>
              <div className="details-grid">
                {[
                  ['Address', hospital.address],
                  [
                    'Bed capacity',
                    hospital.beds ? `${hospital.beds} beds` : 'To be confirmed',
                  ],
                  ['Main phone', hospital.phone],
                  ['Emergency phone', hospital.emergencyPhone],
                ].map(([t, v]) => (
                  <div key={t}>
                    <span>{t}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
              <a
                className="button"
                href={`/book-appointment?hospital=${hospital.slug}`}
              >
                Book Appointment <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="facility-feature sheet-photo">
              <img
                src={hospital.image}
                alt="Illustrative hospital exterior — not a photograph of this facility"
                style={{ width: '200%', height: '200%', maxWidth: 'none' }}
              />
            </div>
          </section>
          <section className="section wrap">
            <SectionTitle
              eyebrow="CLINICAL EXPERTISE"
              title="Explore the group’s services"
            />
            <p className="section-intro">
              Facility-specific services and doctor assignments are to be
              confirmed.
            </p>
            <a className="button" href="/specialities">
              View all specialities <ArrowUpRight size={18} />
            </a>
          </section>
          <section className="section wrap">
            <SectionTitle
              eyebrow="A LOOK INSIDE"
              title="Illustrative healthcare spaces"
            />
            <div className="grid three">
              {['Reception', 'Patient room', 'Diagnostics'].map((t, i) => (
                <figure key={t}>
                  <div className="gallery-photo sheet-photo">
                    <img
                      src={hospital.image}
                      alt={`Generated fictional ${t.toLowerCase()}`}
                      style={{
                        width: '200%',
                        height: '200%',
                        maxWidth: 'none',
                        transform: `translate(-${((i + 1) % 2) * 50}%,-${Math.floor((i + 1) / 2) * 50}%)`,
                      }}
                    />
                  </div>
                  <figcaption>{t} · generated image</figcaption>
                </figure>
              ))}
            </div>
            <div className="map-schematic" id="facility-map">
              <MapPin />
              <h3>
                {hospital.location}, {hospital.state}
              </h3>
              <p>{hospital.address}</p>
              <p>
                Detailed addresses and map directions have not yet been
                supplied.
              </p>
            </div>
          </section>
        </>
      )}
      {path === 'technology' && (
        <>
          <section className="section wrap split">
            <div>
              <span className="eyebrow">PATIENT MONITORING</span>
              <h2>Step Down ICU at Home.</h2>
              <p className="lead">
                A care concept launched in 2016 through cloud-based patient
                monitoring.
              </p>
              <p>
                Dr. Kuldeep Mahajan introduced Step Down ICU at Home as part of
                the group’s healthcare work. That experience with patient
                monitoring informs the current focus on connected services and
                preventive healthcare.
              </p>
            </div>
            <div className="info-card">
              <span className="eyebrow">RESEARCH IN DEVELOPMENT</span>
              <h2>Prediction of Chronic Diseases</h2>
              <p>
                The proposed “Virtual Super Specialist Doctor” platform focuses
                on prediction and early diagnosis of chronic diseases, using
                artificial intelligence, machine learning and Internet of Things
                technology.
              </p>
              <p>
                This research is led by Dr. Kuldeep Mahajan, with Mr. Sandeep
                Mahajan and the research team. It is not an available diagnostic
                tool on this website.
              </p>
            </div>
          </section>
          <section className="tinted">
            <div className="section wrap">
              <SectionTitle
                eyebrow="RESEARCH & COLLABORATION"
                title="Healthcare expertise meets technology"
              />
              <p className="lead">{researchCollaboration}</p>
              <TechnologyTeam />
            </div>
          </section>
          <section className="section wrap">
            <SectionTitle
              eyebrow="FUTURE PATIENT EXPERIENCE"
              title="Connecting each stage of care"
            />
            <p className="section-intro">
              The following journey describes the website’s future digital-care
              vision.
            </p>
            <HealthcareJourney />
            <TechnologyRoadmap />
            <a className="text-link" href="/leadership">
              Meet the leadership and technology team <ArrowRight size={18} />
            </a>
          </section>
        </>
      )}
      {path === 'investors' && (
        <>
          <section className="section wrap split">
            <div>
              <span className="eyebrow">CLINICAL CARE & TECHNOLOGY</span>
              <h2>
                An established network.
                <br />A preventive healthcare focus.
              </h2>
              <p className="lead">{company.intro}</p>
              <p>
                The leadership team combines critical-care experience with
                hospital operations, quality management and a commitment to
                digitising hospital services. The group’s research direction
                focuses on AI/ML-supported prediction and early diagnosis of
                chronic diseases.
              </p>
              <a className="button" href="/contact?subject=investor">
                Connect With Our Leadership <ArrowUpRight size={18} />
              </a>
            </div>
            <HubSpokeDiagram />
          </section>
          <div className="stats wrap">
            {company.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <InvestorSection />
          <section className="section wrap">
            <SectionTitle
              eyebrow="LEADERSHIP & RESEARCH"
              title="Building on clinical and operational experience"
            />
            <p className="lead">
              Dr. Kuldeep Mahajan brings 18 years of critical-care experience.
              Mr. Sandeep Mahajan brings 11 years in hospital operations and
              management. The Step Down ICU at Home concept was launched in 2016
              using cloud-based monitoring.
            </p>
            <p>
              The chronic-disease prediction platform remains research in
              development. No financial projections, confirmed expansion
              timetable or institutional endorsements are presented here.
            </p>
            <a className="text-link" href="/leadership">
              Meet the leadership <ArrowRight size={18} />
            </a>
          </section>
        </>
      )}
      {path === 'leadership' && (
        <section className="section wrap">
          <TeamSection />
        </section>
      )}
      {path === 'book-appointment' && (
        <section className="section wrap split" id="appointment-form">
          <div>
            <span className="eyebrow">A SIMPLE, GUIDED EXPERIENCE</span>
            <h2>
              Choose care.
              <br />
              Share your preferences.
            </h2>
            <ol className="steps">
              <li>Select a hospital and speciality</li>
              <li>Choose a doctor and preferred time</li>
              <li>Explore the demo confirmation</li>
            </ol>
            <p>
              The proposed workflow uses 30-minute consultations within a 30-day
              booking window. A coordinator would confirm availability before a
              real appointment. No OTP, payment or reminder service is active.
            </p>
            <FAQAccordion items={patientFAQs.slice(0, 4)} />
          </div>
          <div className="form-panel">
            <Suspense>
              <AppointmentForm />
            </Suspense>
          </div>
        </section>
      )}
      {path === 'contact' && (
        <>
          <section className="section wrap split">
            <div id="contact-details">
              <span className="eyebrow">WE’RE HERE TO CONNECT</span>
              <h2>A conversation is a good place to start.</h2>
              <p className="lead">
                For the first version, all contact details below are
                non-operational synthetic examples.
              </p>
              <div className="contact-list">
                {[
                  ['General phone', contact.phone],
                  ['Appointment helpline', contact.appointmentPhone],
                  ['WhatsApp', '+91 00000 00102 · demo only'],
                  ['General email', contact.email],
                  ['Corporate enquiries', contact.corporateEmail],
                  ['Investor enquiries', contact.investorEmail],
                ].map(([t, v]) => (
                  <div key={t}>
                    <span>{t}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
              <div id="social">
                <h3>Connect with our community</h3>
                <p>Facebook · Instagram · LinkedIn · YouTube · X</p>
                <p className="small">
                  Official profiles will replace these sample channel labels
                  before public launch.
                </p>
              </div>
            </div>
            <div className="form-panel">
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>
          </section>
          <section className="section wrap">
            <SectionTitle
              eyebrow="FIND YOUR LOCAL CONNECTION"
              title="Hospital addresses"
            />
            <div className="grid three">
              {hospitals.map((h) => (
                <article className="info-card" key={h.slug}>
                  <MapPin />
                  <h3>{h.name}</h3>
                  <p>{h.address}</p>
                  <a
                    className="text-link"
                    href={`/network/${h.slug}#facility-map`}
                  >
                    View location details <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
      {path === 'patient-services' && (
        <>
          <section className="section wrap">
            <SectionTitle
              eyebrow="PATIENT INFORMATION"
              title="A clearer path through your care"
            />
            <div className="grid three">
              {[
                [
                  'Preparing for your visit',
                  'The sample preparation checklist includes identification, previous reports and a medication list. A care coordinator would share any service-specific instructions.',
                ],
                [
                  'Insurance assistance',
                  'An illustrative help desk explains documents and pre-authorisation. No insurer, TPA or cashless arrangement is confirmed.',
                ],
                [
                  'Emergency information',
                  'This demonstration is not an emergency service. Its sample phone numbers and addresses do not connect to care.',
                ],
              ].map(([t, d]) => (
                <article className="info-card" key={t}>
                  <ShieldCheck />
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="section wrap narrow">
            <h2>Frequently asked questions</h2>
            <FAQAccordion items={patientFAQs} />
          </section>
          <section className="tinted">
            <div className="section wrap">
              <SectionTitle
                eyebrow="ILLUSTRATIVE PATIENT VOICES"
                title="The experience we aim to create"
              />
              <div className="grid three">
                {testimonials.map((t) => (
                  <blockquote className="info-card" key={t.name}>
                    <p>“{t.quote}”</p>
                    <cite>{t.name}</cite>
                  </blockquote>
                ))}
              </div>
              <p className="small">
                Synthetic testimonials for design review. These are not real
                patient endorsements.
              </p>
            </div>
          </section>
        </>
      )}
      {path === 'careers' && (
        <section className="section wrap">
          <SectionTitle
            eyebrow="GROW WITH PURPOSE"
            title="Bring your expertise to a connected mission"
          />
          <p className="section-intro">
            Illustrative opportunities only. These are not active vacancies and
            applications are not collected.
          </p>
          <div className="grid three">
            {jobs.map((j) => (
              <article className="info-card" key={j.title}>
                <span className="eyebrow">{j.team}</span>
                <h3>{j.title}</h3>
                <p>
                  {j.location} · {j.type}
                </p>
                <p>{j.description}</p>
                <a className="text-link" href="/contact">
                  Explore a demo enquiry <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
      {path === 'news' && (
        <section className="section wrap">
          <div className="grid three">
            {news.map((n) => (
              <article className="info-card" key={n.slug}>
                <span className="eyebrow">
                  {n.category} · illustrative article
                </span>
                <h2>{n.title}</h2>
                <p>{n.summary}</p>
                <a className="text-link" href={`/news/${n.slug}`}>
                  Read story <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
      {article && (
        <article className="section wrap narrow prose">
          <span className="eyebrow">
            ILLUSTRATIVE EDITORIAL · {article.category}
          </span>
          <h2>{article.title}</h2>
          <p className="lead">{article.summary}</p>
          <p>{article.body}</p>
          <a className="text-link" href="/news">
            Back to stories <ArrowRight size={16} />
          </a>
        </article>
      )}
      {[
        'privacy-policy',
        'terms-and-conditions',
        'medical-disclaimer',
      ].includes(path) && (
        <section className="section wrap narrow prose">
          {path === 'privacy-policy' ? (
            <>
              <h2>Privacy in this demonstration</h2>
              <p>
                Appointment and contact forms process input temporarily in your
                browser to show a sample result. This website does not
                intentionally save form entries, send enquiries, create patient
                records or set analytics cookies. Please use synthetic
                information when exploring the forms.
              </p>
              <h2>Hosting and external services</h2>
              <p>
                The hosting service may process technical request information to
                deliver the website. Any external service reached through a link
                has its own privacy practices. An approved company privacy
                policy, contact details and retention rules would be required
                before live patient services are introduced.
              </p>
              <h2>Contact</h2>
              <p>
                care@skace.example is a non-operational sample address. This
                draft is first-version website copy, not an approved company
                privacy policy.
              </p>
            </>
          ) : path === 'terms-and-conditions' ? (
            <>
              <h2>Demonstration website</h2>
              <p>
                This website demonstrates a proposed SKACE Healthtech digital
                experience. Company-supplied doctor names, qualifications,
                leadership profiles and facility locations appear alongside
                clearly labelled illustrative content. Consultation schedules,
                individual hospital assignments and contact details are not yet
                confirmed. This preview does not establish live clinical
                availability or employment offers.
              </p>
              <h2>Appointments and enquiries</h2>
              <p>
                Submitting a form does not book a consultation or deliver a
                message. No payments, authentication, clinical records or
                backend services are implemented.
              </p>
              <h2>Content and launch review</h2>
              <p>
                Generated assets and draft copy should be reviewed and replaced
                or approved before a public operational launch. These are sample
                terms and do not replace the company’s approved legal terms.
              </p>
            </>
          ) : (
            <>
              <h2>General information</h2>
              <p>{company.disclaimer}</p>
              <h2>Clinical profiles and illustrative imagery</h2>
              <p>
                Doctor names, qualifications and experience have been
                transcribed from the company-supplied content. Individual
                schedules and hospital assignments have not been supplied.
                Facility imagery is illustrative and does not depict the actual
                hospitals. Named doctor and leadership profiles do not use
                generated portraits.
              </p>
              <h2>Future technology</h2>
              <p>
                AI capabilities are described as a roadmap. This website does
                not offer diagnosis, personalised medical advice or emergency
                support.
              </p>
            </>
          )}
        </section>
      )}
    </>
  );
}

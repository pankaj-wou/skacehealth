# SKACE Healthtech website

Responsive, static React/TypeScript website built with the Sites Vinext starter. Run with Node 22.13+ (Node 24 tested). Current client preview: https://skace-healthtech-demo-20260908.surge.sh.

## Run

- `npm install`
- `npm run dev`
- `npm run build` generates static output in `dist/client`.
- `npx tsc --noEmit` checks TypeScript.

## Content

`src/data` contains company, doctors, hospitals, services, team, contact, editorial and route data. `components/site` contains reusable visual sections, forms, directory filters and page layouts. Images live in `public/images` by category. Clinical and facility images are labelled illustrations. Named doctors and leaders use initials until their photographs are supplied.

The workbook was used as a content schema, not as instructions to change accounts or services. Its source was read-only; it has not been modified.

The company content document supplied on 15 September 2026 replaces synthetic doctor, facility, leadership and service data. See `docs/content-update-2026-09-15.md` for provenance and remaining source gaps. Qualification spellings are retained from the document. Research descriptions do not imply institutional endorsement or clinical validation.

## Static boundary

Forms validate locally and show demo confirmation. They do not transmit or persist submitted entries. No database, authentication, clinical records, payment service, appointment API, analytics or SMS integration is present. Contact values use deliberately non-operational numbers and `.example` addresses. WhatsApp falls back to the contact page until a verified number is configured.

## Workbook coverage

- Company & Brand: Home, About, shared brand and theme tokens.
- Hospitals & Clinics: Network plus 7 facility detail pages; 2 superspeciality hubs (Kalyan West, Diva; 50 beds each), 5 satellite general hospitals (Ambernath, Kalyan East, Titwala, Ambivli, Murbad; 25–35 beds each) and 10 micro clinics (locations to be confirmed).
- Doctors: searchable panel plus 30 company-supplied profile pages. Schedules and facility assignments remain unconfirmed.
- Services: 16 detail pages with the supplied clinical areas, services, related panel members and FAQs.
- Leadership & Team: Dr. Kuldeep Mahajan, Mr. Sandeep Mahajan, Dr. Hemachandran K and Dr. Rajesh Kumar KV, with photographs.
- Appointments: frontend-only guided request form, dependent selections and demo confirmation.
- Contact & Social: contact form, six sample contact channels, addresses and labelled social channel examples.
- Website Content: About, Patient Services, synthetic testimonials, Careers and News.
- Photos & Media: generated hero, facility views and clinical scenes remain labelled illustrations. Generated portraits are no longer displayed against real names.
- Investor & AI: source-derived network metrics and chronic-disease prediction research.
- Technical: this readme and hosting configuration. No credentials, accounts or actual service connections were fabricated.

Before operational public use, review the synthetic content and replace contact information, profiles, schedules, addresses and policies with approved facts.

## Future integration

Appointment and contact logic is isolated in `components/site/forms.tsx`. Replace the local success handlers with validated API adapters in a later phase. The directory reads typed data that can later be supplied by a CMS. WebMCP `filter_demo_doctors` uses the same filter state as the visible directory and rejects invalid filters.

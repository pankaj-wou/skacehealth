// About Us content. Source: client-supplied About Us copy (October 2026),
// updated with the client's confirmed network figures, six service
// departments and founders (3 October 2026). Copy-edited for grammar and
// consistency only; planned technologies keep their "aims to" wording.

export const aboutSections = [
  ['who-we-are', 'Who we are'],
  ['founders', 'Our founders'],
  ['healthcare-model', 'Our healthcare model'],
  ['services', 'Service departments'],
  ['preventive-care', 'Preventive care'],
  ['technology', 'AI & connected healthcare'],
  ['vision-mission', 'Vision & mission'],
  ['why-skace', 'Why SKACE Health'],
  ['our-promise', 'Our promise'],
] as const;

export const aboutIntro = [
  'SKACE Healthtech Pvt. Ltd. is building a new generation of integrated healthcare services, with a mission to make quality superspeciality care cost-effective, accessible and hassle-free for every section of society.',
  'Our healthcare journey began in 2009 with a commitment to bring dependable medical care closer to communities. Today, we are expanding that vision through an integrated network of superspeciality hospitals, satellite hospitals and micro clinics, supported by modern medical infrastructure and emerging healthcare technologies.',
  'Our clinical focus is centred on high-demand superspeciality services, including cancer care, cardiac sciences, neurosciences, orthopaedics and joint replacement, paediatric and neonatal care, and advanced critical care, supported by ICCU, NICU and PICU services.',
  'Beyond treating illness, SKACE Health is working towards a healthcare model focused on the early identification of health risks, prevention of chronic diseases, continuous monitoring and timely clinical intervention.',
  'Through the responsible adoption of Artificial Intelligence (AI), the Internet of Things (IoT), connected healthcare systems, data analytics and immersive technologies such as Virtual Reality (VR), we aim to make healthcare more proactive, connected and accessible, particularly for people in Tier II and Tier III cities.',
];

export const vision = 'Advanced healthcare should not be limited by geography.';

export const careModel = [
  {
    label: 'The hubs',
    name: 'Superspeciality Hospitals',
    capacity: '2 hospitals · 50 beds each · Kalyan West and Diva',
    text: 'The primary centres for advanced diagnostics, specialised medical and surgical care, critical care and multidisciplinary treatment.',
  },
  {
    label: 'The spokes',
    name: 'Satellite General Hospitals',
    capacity: '5 hospitals · 25–35 beds each',
    text: 'Located in Ambernath, Kalyan East, Titwala, Ambivli and Murbad, and connected to the hubs, providing secondary care, specialist consultations, diagnostics, minor procedures, emergency stabilisation and coordinated referrals.',
  },
  {
    label: 'Community access',
    name: 'Micro Clinics',
    capacity: '10 micro clinics',
    text: 'Convenient community-level access for consultations, preventive screening, follow-up care, chronic-disease management and technology-enabled health monitoring.',
  },
];

export const carePathway = [
  'Micro Clinic',
  'Satellite General Hospital',
  'Superspeciality Hospital',
  'Recovery & Continuous Care',
];

export type AboutService = {
  id: string;
  name: string;
  tagline?: string;
  intro: string;
  listLabel: string;
  items: string[];
  note?: string;
  subsections?: { name: string; text: string[] }[];
  // Matching page under /specialities, where one exists.
  slug?: string;
};

// The six service departments, in the order the client lists them.
export const coreServices: AboutService[] = [
  {
    id: 'orthopaedics',
    name: 'Orthopaedics, Joint Replacement & Sports Injury Care',
    tagline: 'Restoring mobility. Rebuilding independence.',
    intro:
      'Our Orthopaedics programme focuses on restoring mobility, reducing pain and helping patients return to active living.',
    listLabel: 'Services include',
    items: [
      'General orthopaedics',
      'Joint replacement',
      'Knee and hip care',
      'Arthritis management',
      'Arthroscopy',
      'Sports injuries',
      'Ligament and tendon injuries',
      'Fracture management',
      'Trauma orthopaedics',
      'Spine disorders',
      'Musculoskeletal rehabilitation',
      'Physiotherapy',
      'Post-operative rehabilitation',
      'Osteoporosis and bone-health management',
    ],
    note: 'Treatment pathways are designed to combine clinical assessment, surgical and non-surgical management, and structured rehabilitation.',
    slug: 'orthopaedics',
  },
  {
    id: 'neurosciences',
    name: 'Neurosciences',
    tagline: 'Advanced brain, spine and nervous system care',
    intro:
      'Our Neurosciences programme brings together medical and surgical expertise for disorders affecting the brain, spine, peripheral nerves and nervous system.',
    listLabel: 'Areas of focus include',
    items: [
      'Neurology',
      'Neurosurgery',
      'Stroke evaluation and management',
      'Epilepsy care',
      'Headache and migraine management',
      'Movement disorders',
      'Neuromuscular disorders',
      'Brain and spinal disorders',
      'Spine surgery',
      'Neuro-trauma',
      'Neuro-rehabilitation',
      'Neurological diagnostics',
      'Neuro-critical care',
    ],
    note: 'Early assessment and timely intervention remain central to our approach, particularly in neurological emergencies such as stroke and trauma.',
    slug: 'neuro-care',
  },
  {
    id: 'cancer-care',
    name: 'Cancer Care & Oncology',
    tagline: 'Multidisciplinary cancer care',
    intro:
      'Our Oncology programme focuses on coordinated, compassionate care across the cancer journey, from screening and diagnosis to treatment, recovery and surveillance.',
    listLabel: 'Services are structured around',
    items: [
      'Cancer screening and early detection',
      'Medical oncology',
      'Surgical oncology',
      'Chemotherapy',
      'Cancer diagnostics',
      'Tumour assessment',
      'Multidisciplinary treatment planning',
      'Pain and symptom management',
      'Supportive and palliative care',
      'Nutrition support',
      'Post-treatment follow-up',
      'Cancer survivorship monitoring',
    ],
    note: 'Our approach emphasises early detection, personalised treatment planning and coordinated multidisciplinary care.',
    slug: 'cancer-care',
  },
  {
    id: 'cardiac-sciences',
    name: 'Cardiac Sciences',
    tagline: 'Comprehensive heart care',
    intro:
      'Our Cardiac Sciences programme focuses on the prevention, diagnosis and management of cardiovascular diseases through integrated cardiology and cardiac surgical services.',
    listLabel: 'Areas of care include',
    items: [
      'Cardiology consultations',
      'Preventive cardiac screening',
      'Non-invasive cardiology',
      'Interventional cardiology',
      'Coronary artery disease management',
      'Heart rhythm disorders',
      'Hypertension management',
      'Heart failure management',
      'Cardiothoracic and vascular surgical care',
      'Post-cardiac surgery monitoring',
      'Cardiac rehabilitation',
      'Cardiac critical care',
      'ICCU-supported cardiac management',
    ],
    note: 'The objective is to provide coordinated care, from early identification of cardiac risk to advanced intervention and rehabilitation.',
    slug: 'cardiac-care',
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics & Child Health',
    tagline: 'Specialised care for every stage of childhood',
    intro:
      'Our Paediatric services focus on comprehensive healthcare for infants, children and adolescents.',
    listLabel: 'Areas of care include',
    items: [
      'General paediatrics',
      'Paediatric surgery',
      'Neonatology',
      'Newborn care',
      'Developmental assessment',
      'Paediatric respiratory care',
      'Paediatric neurology',
      'Paediatric cardiology support',
      'Paediatric emergencies',
      'Nutrition and growth monitoring',
      'Childhood infection management',
      'Preventive paediatric care',
      'Vaccination guidance',
      'Paediatric intensive care',
    ],
    subsections: [
      {
        name: 'Neonatal Intensive Care (NICU)',
        text: [
          'Our NICU services are designed to provide specialised monitoring and critical care support for newborns requiring intensive medical attention.',
          'Neonatal care focuses on premature babies, low-birth-weight newborns, respiratory difficulties, infections and other neonatal complications requiring specialised observation and intervention.',
        ],
      },
      {
        name: 'Paediatric Intensive Care (PICU)',
        text: [
          'Our PICU services provide specialised intensive care for infants, children and adolescents requiring continuous clinical monitoring and critical care intervention.',
          'PICU care is supported by multidisciplinary clinical coordination for medical, surgical and emergency paediatric conditions.',
        ],
      },
    ],
    slug: 'paediatric-care',
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    tagline:
      'Including appendix, hernia, gallbladder stone and urology procedures',
    intro:
      'Our surgical services focus on safe, evidence-based treatment supported by appropriate diagnostics, anaesthesia and post-operative care.',
    listLabel: 'Areas include',
    items: [
      'General surgery',
      'Laparoscopic surgery',
      'Appendix surgery',
      'Hernia surgery',
      'Gallbladder (GB) stone surgery',
      'Gastrointestinal surgery',
      'Urological surgical care',
      'Kidney stone management',
      'Prostate and bladder conditions',
      'Urinary tract disorders',
      'Minor and major surgical procedures',
      'Post-operative monitoring',
      'Surgical rehabilitation and follow-up',
    ],
    slug: 'general-surgery',
  },
];

// Supporting clinical services from the supplied About copy.
export const additionalServices: AboutService[] = [
  {
    id: 'critical-care',
    name: 'Critical Care & Intensive Care',
    tagline: 'Advanced care when every moment matters',
    intro:
      'Critical care forms an important part of the SKACE Health healthcare ecosystem.',
    listLabel: 'Our critical care framework includes',
    items: [
      'Intensive Care Unit (ICU)',
      'Intensive Cardiac Care Unit (ICCU)',
      'Neonatal Intensive Care Unit (NICU)',
      'Paediatric Intensive Care Unit (PICU)',
      'Post-operative critical care',
      'Emergency stabilisation',
      'Continuous patient monitoring',
      'Respiratory support',
      'Multidisciplinary critical care management',
      'Step-down care',
      'Post-ICU recovery support',
    ],
    note: 'Our objective is to maintain continuity from emergency stabilisation and intensive care through to recovery and follow-up.',
    slug: 'critical-care',
  },
  {
    id: 'emergency',
    name: 'Emergency & Trauma Care',
    tagline: 'Ready when care cannot wait',
    intro:
      'Our emergency care model is designed to provide timely assessment, stabilisation and appropriate specialist referral for acute medical and surgical conditions.',
    listLabel: 'Services include',
    items: [
      'Emergency medicine',
      'Trauma assessment',
      'Cardiac emergencies',
      'Neurological emergencies',
      'Paediatric emergencies',
      'Acute surgical conditions',
      'Emergency stabilisation',
      'Critical care referral',
      'Ambulance-linked care coordination',
    ],
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine & Chronic Disease Management',
    intro:
      'Internal medicine forms an important bridge between preventive care, diagnosis and speciality treatment.',
    listLabel: 'Our focus includes',
    items: [
      'Diabetes',
      'Hypertension',
      'Thyroid disorders',
      'Respiratory diseases',
      'Lifestyle-related conditions',
      'Infectious diseases',
      'Chronic disease management',
      'Preventive health assessments',
      'Long-term clinical monitoring',
    ],
    slug: 'general-medicine',
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology & Digestive Sciences',
    intro:
      'Our Digestive Sciences services focus on conditions affecting the digestive system, liver, pancreas and gastrointestinal tract.',
    listLabel: 'Areas of care include',
    items: [
      'Gastroenterology',
      'Digestive disorders',
      'Liver disorders',
      'Pancreatic disorders',
      'Gastrointestinal diagnostics',
      'Endoscopy',
      'Hepatology',
      'Gastrointestinal surgery',
      'Minimally invasive GI procedures',
      'Nutrition-related gastrointestinal management',
    ],
    slug: 'gastroenterology',
  },
  {
    id: 'nephrology',
    name: 'Nephrology & Kidney Care',
    intro:
      'Our Nephrology services focus on the prevention, diagnosis and management of kidney-related diseases.',
    listLabel: 'Services include',
    items: [
      'Kidney disease evaluation',
      'Chronic kidney disease management',
      'Acute kidney injury management',
      'Hypertension-related kidney disease',
      'Diabetic kidney disease',
      'Electrolyte disorders',
      'Dialysis support',
      'Preventive kidney-health assessment',
    ],
    slug: 'nephrology',
  },
];

export const preventiveCare = {
  intro:
    'At SKACE Health, we believe the future of medicine is not only about treating disease; it is about identifying risk earlier and helping to prevent disease progression.',
  approach: [
    'Regular health screening',
    'Chronic disease risk assessment',
    'Health trend monitoring',
    'Lifestyle risk assessment',
    'Preventive consultations',
    'Connected medical devices',
    'Remote patient monitoring',
    'Data-driven health insights',
    'AI-assisted clinical decision support',
    'Long-term patient follow-up',
  ],
  conditions: [
    'Diabetes',
    'Hypertension',
    'Cardiovascular disease',
    'Kidney disease',
    'Obesity and metabolic disorders',
    'Chronic respiratory disease',
  ],
  note: 'This approach is particularly relevant to communities in Tier II and Tier III cities, where early access to specialists can often be challenging.',
};

export const technologyAreas = [
  {
    name: 'Artificial Intelligence (AI)',
    intro:
      'AI-enabled systems can support healthcare professionals in areas such as:',
    items: [
      'Health-risk stratification',
      'Preventive screening',
      'Clinical data interpretation',
      'Patient monitoring',
      'Decision-support systems',
      'Healthcare analytics',
      'Early-warning systems',
    ],
  },
  {
    name: 'Internet of Things (IoT)',
    intro: 'Connected medical devices can support:',
    items: [
      'Remote patient monitoring',
      'Vital-sign monitoring',
      'Chronic disease tracking',
      'Post-discharge monitoring',
      'Hospital-to-home connectivity',
    ],
  },
  {
    name: 'Virtual & Immersive Technologies',
    intro:
      'Virtual Reality and other immersive technologies may support selected applications, including:',
    items: [
      'Rehabilitation',
      'Patient education',
      'Clinical training',
      'Therapy support',
      'Medical visualisation',
    ],
  },
];

export const visionStatement =
  'To build an accessible and trusted network of technology-enabled superspeciality healthcare facilities that brings advanced medical expertise closer to communities across India.';

export const missionStatement =
  'To provide cost-effective, accessible and hassle-free healthcare for all sections of society by integrating clinical expertise, superspeciality hospitals, community healthcare infrastructure, preventive medicine and responsible healthcare technology.';

export const missionAims = [
  'Expand access to high-quality superspeciality healthcare.',
  'Establish an integrated hub & spoke hospital network.',
  'Strengthen healthcare availability in Tier II and Tier III cities.',
  'Promote preventive and early-intervention healthcare.',
  'Use AI, IoT and digital technologies responsibly to strengthen clinical care.',
  'Maintain continuity from diagnosis and treatment to recovery and long-term monitoring.',
  'Deliver healthcare with compassion, transparency and respect.',
];

export const whySkace = [
  [
    'Accessible healthcare',
    'Extending specialist healthcare closer to underserved and emerging communities.',
  ],
  [
    'Super-speciality expertise',
    'Building focused capabilities across cardiac sciences, oncology, neurosciences, orthopaedics, paediatrics and critical care.',
  ],
  [
    'Connected healthcare network',
    'Integrating hub hospitals, satellite hospitals and micro clinics into one coordinated ecosystem.',
  ],
  [
    'Preventive approach',
    'Moving healthcare towards screening, early risk identification and long-term health management.',
  ],
  [
    'Technology-enabled healthcare',
    'Using AI, IoT, digital health and connected monitoring to complement clinical care.',
  ],
  [
    'Cost-conscious care',
    'Working towards making advanced healthcare financially accessible across different sections of society.',
  ],
  [
    'Continuity of care',
    'Connecting prevention, diagnosis, hospital treatment, critical care, rehabilitation and follow-up.',
  ],
] as const;

export const promiseLines = [
  'Accessible care.',
  'Advanced medicine.',
  'Intelligent technology.',
  'Compassionate healthcare.',
];

// Specialities page content. Source: client-supplied "Our Specialities"
// copy (4 October 2026), copy-edited for grammar and consistency only.

export type SpecialityBlock = {
  id: string;
  name: string;
  tagline: string;
  intro: string[];
  listLabel: string;
  items: string[];
  notes: string[];
  // Matching detail page under /specialities, where one exists.
  slug?: string;
};

export const specialitiesIntro = [
  'Our multidisciplinary clinical teams bring together specialist consultation, advanced diagnostics, medical and surgical treatment, intensive care, rehabilitation and long-term follow-up.',
  'We focus on some of the most critical areas of modern healthcare, including orthopaedics, oncology, neurosciences, paediatrics, cardiac sciences, urology, general surgery and advanced critical care through ICCU, PICU and NICU services.',
];

export const specialityBlocks: SpecialityBlock[] = [
  {
    id: 'orthopaedics',
    name: 'Orthopaedics & Joint Care',
    tagline: 'Restoring movement. Rebuilding confidence.',
    intro: [
      'Our Orthopaedics & Joint Care services focus on helping patients overcome pain, injury, degenerative conditions and mobility limitations so they can return to active, independent lives.',
      'From common bone and joint disorders to complex orthopaedic conditions, our approach combines specialist evaluation, advanced diagnostics, non-surgical treatment, surgical intervention and structured rehabilitation.',
    ],
    listLabel: 'Our orthopaedic services include',
    items: [
      'General orthopaedics',
      'Joint replacement surgery',
      'Knee replacement',
      'Hip replacement',
      'Arthroscopy',
      'Sports injury management',
      'Ligament injuries',
      'Meniscus injuries',
      'Tendon injuries',
      'Fracture management',
      'Trauma orthopaedics',
      'Arthritis management',
      'Spine-related orthopaedic conditions',
      'Osteoporosis & bone health',
      'Musculoskeletal disorders',
      'Physiotherapy & rehabilitation',
      'Post-operative rehabilitation',
    ],
    notes: [
      'Our aim is not merely to treat an injury or joint condition, but to help patients restore mobility, reduce pain and regain quality of life.',
    ],
    slug: 'orthopaedics',
  },
  {
    id: 'oncology',
    name: 'Oncology & Cancer Care',
    tagline: 'Comprehensive cancer care with compassion',
    intro: [
      'Cancer treatment requires more than one specialist. It requires coordinated expertise across diagnosis, medical management, surgery, supportive care and long-term follow-up.',
      'Our Oncology & Cancer Care programme is designed around a multidisciplinary approach that supports patients from early detection through treatment and recovery.',
    ],
    listLabel: 'Our oncology services include',
    items: [
      'Cancer screening',
      'Early cancer detection',
      'Medical oncology',
      'Surgical oncology',
      'Chemotherapy',
      'Cancer diagnostics',
      'Tumour evaluation',
      'Biopsy coordination',
      'Multidisciplinary cancer consultation',
      'Treatment planning',
      'Pain management',
      'Supportive oncology care',
      'Palliative care',
      'Nutritional support',
      'Post-treatment surveillance',
      'Cancer survivorship follow-up',
    ],
    notes: [
      'Our focus is on early diagnosis, personalised treatment planning, coordinated specialist care and compassionate support throughout the cancer journey.',
    ],
    slug: 'cancer-care',
  },
  {
    id: 'neurosciences',
    name: 'Neurosciences',
    tagline: 'Advanced care for the brain, spine and nervous system',
    intro: [
      'Neurological conditions can affect movement, memory, speech, behaviour and quality of life.',
      'Our Neurosciences programme brings together neurological and neurosurgical expertise to diagnose and manage conditions involving the brain, spine, spinal cord, nerves and neuromuscular system.',
    ],
    listLabel: 'Our neuroscience services include',
    items: [
      'Neurology',
      'Neurosurgery',
      'Stroke management',
      'Epilepsy care',
      'Headache & migraine management',
      'Movement disorders',
      'Parkinson’s disease management',
      'Neuromuscular disorders',
      'Brain disorders',
      'Spine disorders',
      'Spine surgery',
      'Neuro-trauma',
      'Brain injury management',
      'Spinal injury management',
      'Neurological diagnostics',
      'Neuro-critical care',
      'Neuro-rehabilitation',
    ],
    notes: [
      'Particular emphasis is placed on rapid assessment and timely intervention in neurological emergencies such as stroke, brain injury and spinal trauma.',
      'Our objective is to combine clinical expertise, timely diagnosis and rehabilitation to help patients achieve the best possible neurological recovery.',
    ],
    slug: 'neuro-care',
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics & Child Health',
    tagline: 'Specialised care for growing lives',
    intro: [
      'Children need healthcare designed around their age, development and unique medical needs.',
      'Our Paediatrics & Child Health services provide comprehensive care for newborns, infants, children and adolescents through preventive, medical, surgical and intensive-care services.',
    ],
    listLabel: 'Our paediatric services include',
    items: [
      'General paediatrics',
      'Paediatric consultations',
      'Paediatric surgery',
      'Neonatology',
      'Newborn care',
      'Growth monitoring',
      'Developmental assessment',
      'Childhood infection management',
      'Paediatric respiratory care',
      'Paediatric neurology',
      'Paediatric cardiology support',
      'Nutrition & growth management',
      'Vaccination guidance',
      'Preventive child health',
      'Paediatric emergency care',
      'Paediatric intensive care',
    ],
    notes: [
      'Our aim is to provide safe, compassionate and family-centred care through every stage of a child’s growth and development.',
    ],
    slug: 'paediatric-care',
  },
  {
    id: 'cardiac-sciences',
    name: 'Cardiac Sciences',
    tagline: 'Comprehensive heart care. From prevention to recovery.',
    intro: [
      'Our Cardiac Sciences programme focuses on the prevention, early identification, diagnosis and management of cardiovascular diseases.',
      'We aim to bring together cardiology, cardiac surgery, critical care and rehabilitation within a coordinated heart-care pathway.',
    ],
    listLabel: 'Our cardiac services include',
    items: [
      'Cardiology consultation',
      'Preventive cardiac screening',
      'Cardiac risk assessment',
      'Non-invasive cardiology',
      'Interventional cardiology',
      'Coronary artery disease management',
      'Hypertension management',
      'Heart rhythm disorder management',
      'Heart failure management',
      'Cardiothoracic surgery',
      'Vascular surgical care',
      'Post-cardiac surgery monitoring',
      'Cardiac rehabilitation',
      'Cardiac critical care',
      'ICCU-supported cardiac monitoring',
    ],
    notes: [
      'Our approach extends beyond treatment to include prevention, early risk identification, intervention, recovery and long-term cardiac health management.',
    ],
    slug: 'cardiac-care',
  },
  {
    id: 'urology',
    name: 'Urology',
    tagline: 'Advanced care for urinary and urological conditions',
    intro: [
      'Our Urology services focus on the diagnosis and management of conditions affecting the kidneys, urinary tract, bladder, prostate and male reproductive system.',
      'We aim to provide timely diagnosis, appropriate medical treatment and surgical intervention where clinically required.',
    ],
    listLabel: 'Our urology services include',
    items: [
      'Kidney stone management',
      'Urinary tract disorders',
      'Prostate disorders',
      'Bladder conditions',
      'Urinary tract infections',
      'Male urological health',
      'Urinary obstruction',
      'Urological diagnostics',
      'Endoscopic urological procedures',
      'Minimally invasive urological surgery',
      'Urological surgical care',
      'Post-operative follow-up',
    ],
    notes: [
      'Our objective is to provide effective, discreet and patient-centred urological care across common and complex conditions.',
    ],
    slug: 'urology',
  },
  {
    id: 'general-surgery',
    name: 'General & Minimal Access Surgery',
    tagline: 'Modern surgical care with patient safety at the centre',
    intro: [
      'Our General & Minimal Access Surgery services provide surgical management for a wide range of conditions using evidence-based approaches and, wherever clinically appropriate, minimally invasive techniques.',
    ],
    listLabel: 'Our surgical services include',
    items: [
      'General surgery',
      'Laparoscopic surgery',
      'Hernia surgery',
      'Gallbladder surgery',
      'Appendix surgery',
      'Gastrointestinal surgery',
      'Abdominal surgery',
      'Soft tissue surgery',
      'Minor surgical procedures',
      'Major surgical procedures',
      'Day-care surgery',
      'Emergency surgical care',
      'Post-operative monitoring',
      'Surgical follow-up',
      'Rehabilitation support',
    ],
    notes: [
      'Minimally invasive approaches may offer selected patients benefits such as smaller incisions, reduced discomfort, shorter hospital stays and faster recovery.',
      'Our focus remains on safe surgery, appropriate clinical decision-making and smooth recovery.',
    ],
    slug: 'general-surgery',
  },
];

export const criticalCareUnits: SpecialityBlock[] = [
  {
    id: 'iccu',
    name: 'ICCU – Intensive Cardiac Care Unit',
    tagline: 'Critical heart care when every second matters',
    intro: [
      'Our Intensive Cardiac Care Unit (ICCU) is designed to provide continuous monitoring and advanced care for patients with serious or potentially life-threatening cardiac conditions.',
      'The ICCU supports patients requiring close cardiac observation, rapid clinical assessment and intensive intervention.',
    ],
    listLabel: 'ICCU care may include',
    items: [
      'Acute cardiac monitoring',
      'Continuous ECG monitoring',
      'Acute coronary syndrome care',
      'Heart attack management',
      'Severe arrhythmia monitoring',
      'Heart failure management',
      'Post-cardiac procedure monitoring',
      'Haemodynamic monitoring',
      'Emergency cardiac stabilisation',
      'Multidisciplinary cardiac critical care',
    ],
    notes: [
      'The objective is to provide rapid, closely monitored cardiac care supported by specialist clinical teams.',
    ],
    slug: 'critical-care',
  },
  {
    id: 'picu',
    name: 'PICU – Paediatric Intensive Care Unit',
    tagline: 'Advanced critical care for children',
    intro: [
      'Our Paediatric Intensive Care Unit (PICU) is designed to provide specialised care for infants, children and adolescents requiring continuous clinical observation and intensive medical support.',
      'Critically ill children require a highly coordinated approach involving paediatricians, intensive-care teams and speciality consultants.',
    ],
    listLabel: 'PICU care may include',
    items: [
      'Paediatric emergency stabilisation',
      'Severe respiratory conditions',
      'Serious infections',
      'Neurological emergencies',
      'Cardiac conditions',
      'Post-operative paediatric care',
      'Trauma',
      'Continuous vital monitoring',
      'Respiratory support',
      'Multi-system illness management',
      'Critical care observation',
    ],
    notes: [
      'Our goal is to provide specialised, compassionate and closely monitored intensive care for children when they need it most.',
    ],
    slug: 'critical-care',
  },
  {
    id: 'nicu',
    name: 'NICU – Neonatal Intensive Care Unit',
    tagline: 'Specialised care for our smallest patients',
    intro: [
      'Newborn babies requiring intensive medical attention need highly specialised care and continuous monitoring.',
      'Our Neonatal Intensive Care Unit (NICU) is designed to support premature babies, low-birth-weight newborns and infants with medical complications requiring close observation and specialised neonatal care.',
    ],
    listLabel: 'NICU care may include',
    items: [
      'Premature baby care',
      'Low-birth-weight baby care',
      'Respiratory support',
      'Neonatal infection management',
      'Feeding support',
      'Neonatal monitoring',
      'Newborn stabilisation',
      'Post-operative neonatal care',
      'High-risk newborn monitoring',
      'Developmental support',
      'Family counselling & guidance',
    ],
    notes: [
      'Our neonatal care philosophy is centred on clinical vigilance, specialised newborn support and compassionate involvement of the family.',
    ],
    slug: 'neonatology',
  },
];

export const criticalCarePathway = [
  'Emergency assessment',
  'Specialist intervention',
  'Intensive care',
  'Step-down care',
  'Recovery',
  'Rehabilitation',
  'Follow-up',
];

export const careApproach = [
  'Specialist expertise',
  'Advanced diagnostics',
  'Medical & surgical care',
  'Critical care support',
  'Multidisciplinary clinical collaboration',
  'Preventive healthcare',
  'Rehabilitation',
  'Long-term follow-up',
  'Technology-enabled monitoring',
  'Patient & family support',
];

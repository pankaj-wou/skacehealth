"""Import supplied clinical records without inventing missing fields."""
import json
import re
from pathlib import Path
from docx import Document
source = Path(r'D:\Website\Skace Healthtech Pvt Ltd website content.docx')
document = Document(source)
paragraphs = [p.text.strip() for p in document.paragraphs if p.text.strip()]
categories = {
 'Physician': ('general-medicine', 'Physician'),
 'Anaesthetic': ('anaesthesiology', 'Anaesthetist & Intensive Care'),
 'Orthopaedics': ('orthopaedics', 'Orthopaedic Specialist'),
 'Oncology': ('cancer-care', 'Oncology Specialist'),
 'Neurology': ('neuro-care', 'Neurology & Neurosurgery Specialist'),
 'Cardiology': ('cardiac-care', 'Cardiology & Cardiac Surgery Specialist'),
 'General Laproscopic Surgery': ('general-surgery', 'General & Laparoscopic Surgeon'),
 'Paediatrics': ('paediatric-care', 'Paediatric Specialist'),
 'Urology': ('urology', 'Urology Specialist'),
 'Gastro Enterologist': ('gastroenterology', 'Gastroenterologist'),
 'Nephrologist': ('nephrology', 'Nephrologist'),
 'Plastic Surgeon': ('plastic-surgery', 'Plastic Surgeon'),
 'Maxillofacial Surgeon': ('maxillofacial-surgery', 'Oral & Maxillofacial Surgeon'),
 'ENT Surgeon': ('ent', 'ENT Surgeon'),
}
doctors = []
category = None
for line in paragraphs:
 if line.startswith('Dr. Kuldeep Mahajan'): break
 if line in categories: category = categories[line]
 if not category or not line.startswith('Dr '): continue
 name, detail = re.split(r' (?=MBBS|MBB,|BDS)', line, maxsplit=1)
 match = re.search(r'(\d+) years [Ee]xperienced', detail)
 experience = f'{match.group(1)} years of experience' if match else 'Experience details to be confirmed'
 qualification = re.sub(r'\s*\d+ years [Ee]xperienced', '', detail).strip()
 name = name.replace('Dr ', 'Dr. ', 1)
 doctors.append({'id': f'D{len(doctors)+1:02}', 'slug':name[4:].lower().replace(' ','-'), 'name':name, 'designation':category[1], 'qualification':qualification,'speciality':category[0], 'subSpeciality':category[1], 'experience':experience, 'hospital':'', 'location':'Hospital assignment to be confirmed', 'languages':'Languages to be confirmed','days':'Consultation days to be confirmed','timings':'Consultation timings to be confirmed','image':'','imageIndex':-1,'biography':f'{name} is listed on the Ace Group of Hospitals doctor panel in {category[1].lower()}. Qualifications and clinical focus: {qualification}. '+(f'The supplied profile lists {match.group(1)} years of experience. ' if match else '')+'Individual hospital assignments, consultation schedules and photographs will be added when available.', 'demo':False})
Path('src/data/doctors.json').write_text(json.dumps(doctors, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
hospitals=[]
groups=[('Hub',['Kalyan','Diva']),('Spoke',['Kalyan East','Ambernath East','Ambernath West','Ambivli','Titwala']),('Community access',['Kalyan East','Kalyan West','Kongaon','Ambivli East','Ambivli West','Padgha','Shahpur','Khadavli','Murbad','Saralgaon','Tokowda','Ulhasnagar','Ambernath East','Ambernath West','Badlapur East','Badlapur West'])]
for kind,locations in groups:
 for i,location in enumerate(locations):
  hub=kind=='Hub'
  slug=f'superspeciality-hospital-0{i+1}' if hub else ('satellite-' if kind=='Spoke' else 'micro-clinic-')+location.lower().replace(' ','-')
  name=f'Ace Hospital & Research Centre — {location}' if hub else f'{location} '+('Satellite Hospital' if kind=='Spoke' else 'Micro Clinic')
  hospitals.append({'id':f'H{i+1}' if hub else f'S{i+1}' if kind=='Spoke' else f'M{i+1}', 'slug':slug,'name':name,'type':kind,'location':location,'city':location,'state':'Maharashtra','pin':'','address':f'{location}, Maharashtra. Full street address to be confirmed.','beds':50 if hub else None,'phone':'Contact number to be confirmed','emergencyPhone':'Emergency contact to be confirmed','mapUrl':None,'image':'/images/hospitals/facilities.webp','specialities':[], 'description':f'Ace Hospital & Research Centre in {location} is a 50-bed superspeciality hospital within Ace Group of Hospitals.' if hub else f'The {location} '+('satellite hospital' if kind=='Spoke' else 'micro clinic')+' is listed in the Ace Group of Hospitals network. Facility-specific services and contact details will be added when available.','demo':False})
Path('src/data/hospitals.json').write_text(json.dumps(hospitals,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'Imported {len(doctors)} doctors and {len(hospitals)} facilities; embedded images: {len(document.inline_shapes)}')

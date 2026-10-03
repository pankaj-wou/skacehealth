"""Extract supplied portraits, mapped by DOCX caption and drawing position.

The file order is not the visual order: pairs use right/left anchors, and
images 5/6 appear below 7/8. Keep existing profile URLs stable.
"""
import json
from pathlib import Path
from zipfile import ZipFile

SOURCE = Path(r'C:\Users\Rajkumar-SOB\Downloads\Document (2).docx')
SLUGS = [
    'manish-arora', 'shamal-goregaonkar', 'saiket-jena', 'santosh-yadav',
    'deep-mashru', 'aditya-manke', 'sameer-shelawale', 'satish-puranik',
    'shifali-shetty', 'sagar-gawali', 'darshan-suchak', 'amit-shukla',
    'shaishnav-bhanushali', 'kshitij-shetty', 'deepak-jaiswal',
    'ashok-shelke', 'vaibhav-lokhande', 'amit-uttarwar', 'chetan-ghadekar',
    'prasad-brahme', 'vineet-chaudhari', 'ganpathi-kini', 'mataf-farid',
    'shrikant-vanjari', 'girish-kulkarni',
]
data_path = Path('src/data/doctors.json')
doctors = json.loads(data_path.read_text(encoding='utf-8'))
records = {d['slug']: d for d in doctors}
assert len(set(SLUGS)) == 25 and all(s in records for s in SLUGS)
output = Path('public/images/doctors')
output.mkdir(parents=True, exist_ok=True)
with ZipFile(SOURCE) as document:
    for index, slug in enumerate(SLUGS, start=1):
        filename = f'{slug}.jpeg'
        (output / filename).write_bytes(document.read(f'word/media/image{index}.jpeg'))
        doctor = records[slug]
        doctor['image'] = f'/images/doctors/{filename}'
        doctor['biography'] = doctor['biography'].replace(
            'Individual hospital assignments, consultation schedules and photographs will be added when available.',
            'Individual hospital assignments and consultation schedules will be added when available.')
        if slug == 'shaishnav-bhanushali':
            doctor['name'] = 'Dr. Shaishav Bhanushali'
            doctor['biography'] = doctor['biography'].replace('Shaishnav', 'Shaishav')
data_path.write_text(json.dumps(doctors, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Imported {len(SLUGS)} supplied doctor photographs.')
print('Photos not supplied:', ', '.join(d['name'] for d in doctors if not d['image']))

import records from './doctors.json';
export const doctors = records;
export type Doctor = (typeof doctors)[number];
export function matchesSpeciality(doctor: Doctor, speciality: string) {
  return doctor.speciality === speciality ||
    (speciality === 'neonatology' && /neonatal/i.test(doctor.qualification)) ||
    (speciality === 'critical-care' && /intensive care/i.test(doctor.qualification));
}

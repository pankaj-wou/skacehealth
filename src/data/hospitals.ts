import records from './hospitals.json';
export const hospitals = records.map((h) => ({
  ...h,
  specialities: h.specialities as string[],
}));
export type Hospital = (typeof hospitals)[number];

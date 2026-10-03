'use client';
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { doctors, matchesSpeciality, type Doctor } from '@/src/data/doctors';
import { services } from '@/src/data/services';
import { hospitals } from '@/src/data/hospitals';
import { ArrowUpRight, MapPin, Search } from 'lucide-react';
import { ProfileIdentity } from './shared';
export function DoctorCard({ doctor: d }: { doctor: Doctor }) {
  return (
    <article className="doctor-card">
      <ProfileIdentity name={d.name} image={d.image} />
      <div className="card-body">
        <span className="eyebrow">
          {services.find((s) => s.slug === d.speciality)?.name}
        </span>
        <h3>{d.name}</h3>
        <p>{d.qualification}</p>
        <p>{d.experience}</p>
        <p className="location">
          <MapPin size={15} />
          {d.location}
        </p>
        <p>{hospitals.find((h) => h.slug === d.hospital)?.name}</p>
        <div className="card-actions">
          <a className="text-link" href={`/doctors/${d.slug}`}>
            View Profile <ArrowUpRight size={16} />
          </a>
          <a className="text-link" href={`/book-appointment?doctor=${d.slug}`}>
            Book Appointment
          </a>
        </div>
      </div>
    </article>
  );
}
export function DoctorFinder({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [hospital, setHospital] = useState('');
  const [location, setLocation] = useState('');
  const filtered = doctors.filter(
    (d) =>
      (!query || d.name.toLowerCase().includes(query.toLowerCase())) &&
      (!speciality || matchesSpeciality(d, speciality)) &&
      (!hospital || d.hospital === hospital) &&
      (!location || d.location === location),
  );
  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (tool: object, options: object) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context) return;
    const lifecycle = new AbortController();
    try {
      void Promise.resolve(
        context.registerTool(
          {
            name: 'filter_demo_doctors',
            description:
              'Filter the visible company-supplied doctor panel. Does not book an appointment.',
            inputSchema: {
              type: 'object',
              properties: {
                query: { type: 'string' },
                speciality: {
                  type: 'string',
                  enum: ['', ...services.map((s) => s.slug)],
                },
              },
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false },
            execute(input: unknown) {
              if (!input || typeof input !== 'object' || Array.isArray(input))
                throw new Error('Expected filter object');
              const v = input as Record<string, unknown>;
              if (
                Object.keys(v).some(
                  (k) => !['query', 'speciality'].includes(k),
                ) ||
                (v.query !== undefined && typeof v.query !== 'string') ||
                (v.speciality !== undefined &&
                  (typeof v.speciality !== 'string' ||
                    (v.speciality !== '' &&
                      !services.some((s) => s.slug === v.speciality))))
              )
                throw new Error('Invalid doctor filter');
              const q = (v.query as string) || '';
              const s = (v.speciality as string) || '';
              flushSync(() => {
                setQuery(q);
                setSpeciality(s);
                setHospital('');
                setLocation('');
              });
              return {
                demo: false,
                doctors: doctors
                  .filter(
                    (d) =>
                      (!q || d.name.toLowerCase().includes(q.toLowerCase())) &&
                      (!s || matchesSpeciality(d, s)),
                  )
                  .map((d) => ({ name: d.name, slug: d.slug })),
              };
            },
          },
          { signal: lifecycle.signal },
        ),
      ).catch(() => {});
    } catch {}
    return () => lifecycle.abort();
  }, []);
  return (
    <>
      <div className="filter-bar">
        <label>
          <span>
            <Search size={14} /> Doctor name
          </span>
          <Input
            placeholder="Search a specialist"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label>
          Speciality
          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          >
            <option value="">All specialities</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Hospital
          <select
            value={hospital}
            disabled={!doctors.some(d=>d.hospital)}
            onChange={(e) => setHospital(e.target.value)}
          >
            <option value="">Hospital assignments pending</option>
            {hospitals
              .filter((h) => doctors.some((d) => d.hospital === h.slug))
              .map((h) => (
                <option key={h.slug} value={h.slug}>
                  {h.name}
                </option>
              ))}
          </select>
        </label>
        <label>
          Location
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All locations</option>
            {[...new Set(doctors.map((d) => d.location))].map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="result-row">
        <p role="status">
          {filtered.length} specialist{filtered.length === 1 ? '' : 's'} found
          {compact && filtered.length > 3 ? ' · showing first 3' : ''}
        </p>
        <Button
          variant="ghost"
          onClick={() => {
            setQuery('');
            setSpeciality('');
            setHospital('');
            setLocation('');
          }}
        >
          Reset filters
        </Button>
      </div>
      {filtered.length ? (
        <div className="grid three">
          {(compact ? filtered.slice(0, 3) : filtered).map((d) => (
            <DoctorCard doctor={d} key={d.slug} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <Search size={32} />
          <h3>No matching specialists</h3>
          <p>Try another name or reset your filters.</p>
        </div>
      )}
    </>
  );
}

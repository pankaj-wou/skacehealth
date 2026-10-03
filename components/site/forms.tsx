'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { doctors, matchesSpeciality } from '@/src/data/doctors';
import { services } from '@/src/data/services';
import { hospitals } from '@/src/data/hospitals';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
export function AppointmentForm() {
  const params = useSearchParams();
  const [hospital, setHospital] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [doctor, setDoctor] = useState('');
  const [done, setDone] = useState(false);
  const [today, setToday] = useState('');
  const [lastDate, setLastDate] = useState('');
  useEffect(() => {
    const d = doctors.find((d) => d.slug === params.get('doctor'));
    const h = hospitals.find((h) => h.slug === params.get('hospital'));
    const s = services.find((s) => s.slug === params.get('speciality'));
    if (d) {
      setHospital(d.hospital);
      setSpeciality(d.speciality);
      setDoctor(d.slug);
    } else {
      if (h) setHospital(h.slug);
      if (s) setSpeciality(s.slug);
    }
    const last = new Date();
    last.setDate(last.getDate() + 30);
    setLastDate(
      `${last.getFullYear()}-${String(last.getMonth() + 1).padStart(2, '0')}-${String(last.getDate()).padStart(2, '0')}`,
    );
    const now = new Date();
    setToday(
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`,
    );
  }, [params]);
  const availableServices = services;
  const availableDoctors = doctors.filter(
    (d) =>
      (!hospital || !d.hospital || d.hospital === hospital) &&
      (!speciality || matchesSpeciality(d, speciality)),
  );
  if (done)
    return (
      <div className="success" role="status">
        <CheckCircle2 size={42} />
        <h2>Thank you.</h2>
        <p>
          Your appointment request has been recorded for demonstration purposes.
        </p>
        <p>
          No appointment has been booked. Your information has not been sent or
          stored.
        </p>
        <Button className="button" onClick={() => setDone(false)}>
          Explore another request
        </Button>
      </div>
    );
  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
        document
          .getElementById('appointment-form')
          ?.scrollIntoView({ block: 'start' });
      }}
    >
      <div className="notice full">
        Demo experience · No live booking or confirmed availability. Please use
        sample information. Doctor and service availability at your preferred
        facility must be confirmed.
      </div>
      <label>
        Hospital
        <select
          required
          value={hospital}
          onChange={(e) => {
            setHospital(e.target.value);
            setSpeciality('');
            setDoctor('');
          }}
        >
          <option value="">Select a hospital</option>
          {hospitals.map((h) => (
            <option key={h.slug} value={h.slug}>
              {h.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Speciality
        <select
          required
          value={speciality}
          onChange={(e) => {
            setSpeciality(e.target.value);
            setDoctor('');
          }}
        >
          <option value="">Select a speciality</option>
          {availableServices.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className="full">
        Doctor
        <select
          required
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value="">Select a doctor</option>
          <option value="any">No preference · care team to advise</option>
          {availableDoctors.map((d) => (
            <option value={d.slug} key={d.slug}>
              {d.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Preferred date
        <Input type="date" name="date" min={today} max={lastDate} required />
      </label>
      <label>
        Preferred time
        <select name="time" required>
          <option value="">Select a time preference</option>
          <option>Morning (9 am – 12 pm)</option>
          <option>Afternoon (12 pm – 4 pm)</option>
          <option>Evening (4 pm – 7 pm)</option>
        </select>
      </label>
      <label>
        Patient name
        <Input
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          placeholder="Enter sample name"
        />
      </label>
      <label>
        Mobile number
        <Input
          name="mobile"
          type="tel"
          inputMode="tel"
          required
          pattern="[+]?[0-9\s()-]{7,20}"
          placeholder="Enter sample mobile number"
        />
      </label>
      <label className="full">
        Email
        <Input
          name="email"
          type="email"
          required
          placeholder="name@example.com"
        />
      </label>
      <label className="full">
        Reason for visit
        <textarea
          name="reason"
          maxLength={1000}
          rows={3}
          placeholder="Brief reason (use sample information only)"
        />
      </label>
      <div className="full">
        <Button type="submit" className="button">
          Request Appointment <ArrowUpRight size={18} />
        </Button>
      </div>
    </form>
  );
}
export function ContactForm() {
  const params = useSearchParams();
  const [done, setDone] = useState(false);
  return done ? (
    <div className="success" role="status">
      <CheckCircle2 size={40} />
      <h2>Thank you for connecting.</h2>
      <p>This was a demonstration. Your enquiry has not been sent or saved.</p>
      <Button className="button" onClick={() => setDone(false)}>
        Start another enquiry
      </Button>
    </div>
  ) : (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <div className="notice full">
        Demo enquiry form · Please use sample information. Messages are not
        sent.
      </div>
      <label>
        Name
        <Input name="name" required maxLength={100} />
      </label>
      <label>
        Mobile
        <Input
          name="mobile"
          type="tel"
          required
          pattern="[+]?[0-9\s()-]{7,20}"
        />
      </label>
      <label className="full">
        Email
        <Input name="email" type="email" required />
      </label>
      <label>
        Subject
        <select
          name="subject"
          defaultValue={
            params.get('subject') === 'investor'
              ? 'Investor enquiry'
              : 'General enquiry'
          }
        >
          <option>General enquiry</option>
          <option>Appointment enquiry</option>
          <option>Partnership enquiry</option>
          <option>Investor enquiry</option>
        </select>
      </label>
      <label>
        Hospital enquiry
        <select name="hospital">
          <option>Corporate / general enquiry</option>
          {hospitals.map((h) => (
            <option key={h.slug}>{h.name}</option>
          ))}
        </select>
      </label>
      <label className="full">
        Message
        <textarea required name="message" rows={5} maxLength={2000} />
      </label>
      <div className="full">
        <Button type="submit" className="button">
          Send demo enquiry <ArrowUpRight size={18} />
        </Button>
      </div>
    </form>
  );
}

import React from "react";
import { Phone, MapPin, Clock, Wrench, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

// Single-page marketing site (React + Tailwind)
// Update these constants to match your Google Business Profile exactly.
const BUSINESS = {
  name: "Nishand Truck & Trailer Repair Inc",
  phoneDisplay: "(916) 544-2361",
  phoneE164: "+19165442361",
  addressLine1: "971 F St",
  cityStateZip: "West Sacramento, CA 95605",
  primaryCtaText: "Call for Service",
  // If you have a real website URL, replace this.
  websiteUrl: "#",
  // Replace with your actual Google Maps share link when ready.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=957%20F%20St%2C%20West%20Sacramento%2C%20CA%2095605",
  hours: [
    { day: "Mon", hours: "8:30 AM – 6:00 PM" },
    { day: "Tue", hours: "8:30 AM – 6:00 PM" },
    { day: "Wed", hours: "8:30 AM – 6:00 PM" },
    { day: "Thu", hours: "8:30 AM – 6:00 PM" },
    { day: "Fri", hours: "8:30 AM – 6:00 PM" },
    { day: "Sat", hours: "9:00 AM – 4:00 PM" },
    { day: "Sun", hours: "Closed" },
  ],
  serviceArea: ["West Sacramento", "Sacramento", "Woodland", "Davis", "Elk Grove", "Natomas", "Roseville", "Vacaville","Galt", "Lodi","Rancho Cordova"],
};

const SERVICES = [
  {title: "Road Call Service",
  desc: "On-site roadside assistance for breakdowns, no-starts, and minor repairs to get you moving safely.",
  icon: Truck,
  },
  {
    title: "Preventive Maintenance (PM)",
    desc: "Oil & filter service, grease, inspections, fluid checks, and DOT-ready maintenance to reduce downtime.",
    icon: ShieldCheck,
  },
  {
    title: "Truck & Trailer Repair",
    desc: "Mechanical repairs for heavy-duty trucks and trailers—diagnostics through repair with fast turnaround.",
    icon: Truck,
  },
  {
    title: "Electrical & Diagnostics",
    desc: "Check-engine concerns, electrical issues, and drivability diagnostics with clear findings and next steps.",
    icon: Wrench,
  },
  {
    title: "Fleet Service",
    desc: "Consistent maintenance standards for fleets—scheduling, documentation, and reliable communication.",
    icon: BadgeCheck,
  },
];

const FAQ = [
  {
    q: "Do you work on fleets and owner-operators?",
    a: "Yes—both. We support fleets with repeatable PM standards and also take care of owner-operators who need a shop they can trust.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us with your unit details and the issue. If possible, share fault codes and photos so we can move faster.",
  },
  {
    q: "Where are you located?",
    a: `${BUSINESS.addressLine1}, ${BUSINESS.cityStateZip}. Use the Directions button to open Google Maps.`,
  },
];

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

export default function NishandTruckSite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    telephone: BUSINESS.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addressLine1,
      addressLocality: "West Sacramento",
      addressRegion: "CA",
      postalCode: "95605",
      addressCountry: "US",
    },
    areaServed: BUSINESS.serviceArea,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Top bar */}
      <div className="border-b border-white/10 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide">{BUSINESS.name}</div>
              <div className="text-xs text-slate-300">Truck & Trailer Repair • Fleet Maintenance</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-white/5 md:inline-flex"
            >
              <MapPin className="h-4 w-4" />
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_90%_30%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Diesel Truck & Trailer Repair in <span className="text-slate-200">West Sacramento</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
                Fast, straightforward service for fleets and owner-operators—PMs, diagnostics, electrical, and
                heavy-duty repairs.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS.primaryCtaText}
                </a>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="mt-7 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-slate-200" />
                  <div>
                    <div className="text-sm font-semibold">Hours</div>
                    <div className="mt-1 text-sm text-slate-300">
                      {BUSINESS.hours.map((h) => (
                        <div key={h.day} className="flex justify-between gap-6">
                          <span className="w-10 text-slate-300">{h.day}</span>
                          <span className="text-slate-200">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-slate-200" />
                  <div>
                    <div className="text-sm font-semibold">Address</div>
                    <div className="text-sm text-slate-300">
                      {BUSINESS.addressLine1}, {BUSINESS.cityStateZip}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="text-sm font-semibold text-slate-200">What we do</div>
              <div className="mt-4 grid gap-4">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 hover:bg-slate-950/60"
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-base font-bold">{s.title}</div>
                          <div className="mt-1 text-sm text-slate-300">{s.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Service area</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {BUSINESS.serviceArea.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services section */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Services</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Built for uptime. Clear communication, documented work, and quick turnarounds.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="hidden rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200 md:inline-flex"
          >
            Call Now
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      <li>• Transparent findings and recommendations</li>
                      <li>• Fleet-friendly scheduling and documentation</li>
                      <li>• Focused on reducing downtime</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">About</h2>
              <p className="mt-3 text-slate-300">
                {BUSINESS.name} serves fleets and owner-operators with dependable truck and trailer repair in West
                Sacramento. We keep the process simple: diagnose, explain, repair—then get you back on the road.
              </p>
              <div className="mt-5 grid gap-3">
                {["Straight answers", "Fast turnaround", "Fleet-first mindset"].map((x) => (
                  <div key={x} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    <div className="text-sm font-semibold text-slate-200">{x}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-slate-200">Quick contact</div>
              <div className="mt-4 space-y-3">
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 hover:bg-slate-950/60"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Call</div>
                    <div className="text-sm text-slate-300">{BUSINESS.phoneDisplay}</div>
                  </div>
                </a>

                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 hover:bg-slate-950/60"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Visit</div>
                    <div className="text-sm text-slate-300">
                      {BUSINESS.addressLine1}, {BUSINESS.cityStateZip}
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Need service faster?</div>
                <p className="mt-2 text-sm text-slate-300">
                  When you call, have your unit number/VIN, symptoms, and any fault codes ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {FAQ.map((item) => (
            <details key={item.q} className="group rounded-3xl border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer list-none text-base font-bold">
                <span className="mr-2 inline-block rounded-full border border-white/10 bg-slate-950/40 px-2 py-0.5 text-xs text-slate-300">
                  Q
                </span>
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">{BUSINESS.name}</div>
              <div className="text-sm text-slate-400">
                {BUSINESS.addressLine1}, {BUSINESS.cityStateZip}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
              >
                Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5"
              >
                Directions
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

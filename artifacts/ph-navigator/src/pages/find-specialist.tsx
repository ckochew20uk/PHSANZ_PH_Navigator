import { Link } from "wouter";
import { SectionHeading } from "@/components/content/SectionHeading";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Info, ExternalLink, Search } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Centre {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: "AU" | "NZ";
  phone: string;
  website?: string;
  type: "Adult" | "Paediatric" | "Adult & Paediatric" | "Age group: confirm";
  referenceListed?: boolean;
  lat?: number;
  lng?: number;
}

const centres: Centre[] = [
  // ── New South Wales ──────────────────────────────────────
  {
    referenceListed: true,
    id: 1,
    country: "AU",
    state: "NSW",
    name: "St Vincent's Hospital",
    address: "390 Victoria St",
    city: "Darlinghurst",
    phone: "(02) 8382 1111",
    type: "Adult",
    lat: -33.8796,
    lng: 151.2227,
    website: "https://www.svhs.org.au",
  },
  {
    referenceListed: true,
    id: 2,
    country: "AU",
    state: "NSW",
    name: "Royal Prince Alfred Hospital",
    address: "50 Missenden Rd",
    city: "Camperdown",
    phone: "(02) 9515 6111",
    type: "Adult",
    lat: -33.8892,
    lng: 151.1847,
    website: "https://www.slhd.nsw.gov.au/rpa",
  },
  {
    id: 3,
    country: "AU",
    state: "NSW",
    name: "Sydney Children's Hospital",
    address: "High St",
    city: "Randwick",
    phone: "(02) 9382 1111",
    type: "Paediatric",
    lat: -33.9142,
    lng: 151.2413,
    website: "https://www.schn.health.nsw.gov.au",
  },
  {
    referenceListed: true,
    id: 4,
    country: "AU",
    state: "NSW",
    name: "The Children's Hospital at Westmead",
    address: "Cnr Hawkesbury Rd & Hainsworth St",
    city: "Westmead",
    phone: "(02) 7825 0000",
    type: "Paediatric",
    lat: -33.8075,
    lng: 150.9876,
    website: "https://www.schn.health.nsw.gov.au",
  },
  // ── Victoria ──────────────────────────────────────────────
  {
    referenceListed: true,
    id: 5,
    country: "AU",
    state: "VIC",
    name: "The Alfred Hospital",
    address: "55 Commercial Rd",
    city: "Melbourne",
    phone: "(03) 9076 2000",
    type: "Adult",
    lat: -37.8457,
    lng: 144.9843,
    website: "https://www.alfredhealth.org.au",
  },
  {
    referenceListed: true,
    id: 6,
    country: "AU",
    state: "VIC",
    name: "Austin Hospital",
    address: "145 Studley Rd",
    city: "Heidelberg",
    phone: "(03) 9496 5000",
    type: "Adult",
    lat: -37.7512,
    lng: 145.0656,
    website: "https://www.austin.org.au",
  },
  {
    referenceListed: true,
    id: 7,
    country: "AU",
    state: "VIC",
    name: "Royal Children's Hospital",
    address: "50 Flemington Rd",
    city: "Parkville",
    phone: "(03) 9345 5522",
    type: "Paediatric",
    lat: -37.7963,
    lng: 144.9539,
    website: "https://www.rch.org.au",
  },
  // ── Queensland ────────────────────────────────────────────
  {
    referenceListed: true,
    id: 8,
    country: "AU",
    state: "QLD",
    name: "The Prince Charles Hospital",
    address: "627 Rode Rd",
    city: "Chermside",
    phone: "(07) 3139 4000",
    type: "Adult",
    lat: -27.3896,
    lng: 153.0244,
    website: "https://metronorth.health.qld.gov.au/prince-charles-hospital",
  },
  {
    referenceListed: true,
    id: 9,
    country: "AU",
    state: "QLD",
    name: "Queensland Children's Hospital",
    address: "501 Stanley St",
    city: "South Brisbane",
    phone: "(07) 3068 1111",
    type: "Paediatric",
    lat: -27.4977,
    lng: 153.0131,
    website: "https://www.childrens.health.qld.gov.au",
  },
  // ── South Australia ───────────────────────────────────────
  {
    referenceListed: true,
    id: 10,
    country: "AU",
    state: "SA",
    name: "Royal Adelaide Hospital",
    address: "Port Rd",
    city: "Adelaide",
    phone: "(08) 7074 0000",
    type: "Adult",
    lat: -34.9209,
    lng: 138.5917,
    website: "https://www.rah.sa.gov.au",
  },
  {
    referenceListed: true,
    id: 11,
    country: "AU",
    state: "SA",
    name: "Women's and Children's Hospital",
    address: "72 King William Rd",
    city: "North Adelaide",
    phone: "(08) 8161 7000",
    type: "Paediatric",
    lat: -34.9065,
    lng: 138.5964,
    website: "https://www.wch.sa.gov.au",
  },
  // ── Western Australia ─────────────────────────────────────
  {
    referenceListed: true,
    id: 12,
    country: "AU",
    state: "WA",
    name: "Fiona Stanley Hospital",
    address: "11 Robin Warren Dr",
    city: "Murdoch",
    phone: "(08) 6152 2222",
    type: "Adult",
    lat: -32.0663,
    lng: 115.8373,
    website: "https://fsh.health.wa.gov.au",
  },
  {
    id: 13,
    country: "AU",
    state: "WA",
    name: "Perth Children's Hospital",
    address: "15 Hospital Ave",
    city: "Nedlands",
    phone: "(08) 6456 2222",
    type: "Paediatric",
    lat: -31.9794,
    lng: 115.816,
    website: "https://pch.health.wa.gov.au",
  },
  // ── ACT ───────────────────────────────────────────────────
  {
    id: 14,
    country: "AU",
    state: "ACT",
    name: "Canberra Hospital",
    address: "Yamba Dr",
    city: "Garran",
    phone: "(02) 5124 0000",
    type: "Adult",
    lat: -35.3621,
    lng: 149.0887,
    website:
      "https://www.health.act.gov.au/hospitals-and-health-centres/canberra-hospital",
  },
  // ── Tasmania ──────────────────────────────────────────────
  {
    referenceListed: true,
    id: 15,
    country: "AU",
    state: "TAS",
    name: "Royal Hobart Hospital",
    address: "48 Liverpool St",
    city: "Hobart",
    phone: "(03) 6166 8308",
    type: "Adult",
    lat: -42.8891,
    lng: 147.3257,
    website: "https://www.dhhs.tas.gov.au/hospitals/royal_hobart_hospital",
  },
  // ── New Zealand ───────────────────────────────────────────
  {
    referenceListed: true,
    id: 16,
    country: "NZ",
    state: "Auckland",
    name: "Auckland City Hospital",
    address: "2 Park Rd, Grafton",
    city: "Auckland",
    phone: "+64 9 367 0000",
    type: "Adult & Paediatric",
    lat: -36.8609,
    lng: 174.7673,
    website: "https://www.healthpoint.co.nz/hospitals/auckland-city-hospital",
  },
  {
    id: 17,
    country: "NZ",
    state: "Wellington",
    name: "Wellington Hospital",
    address: "Riddiford St, Newtown",
    city: "Wellington",
    phone: "+64 4 385 5999",
    type: "Adult & Paediatric",
    lat: -41.312,
    lng: 174.7744,
    website:
      "https://www.healthpoint.co.nz/hospitals/wellington-regional-hospital",
  },
  {
    referenceListed: true,
    id: 18,
    country: "NZ",
    state: "Canterbury",
    name: "Christchurch Hospital",
    address: "2 Riccarton Ave",
    city: "Christchurch",
    phone: "+64 3 364 0640",
    type: "Adult & Paediatric",
    lat: -43.5235,
    lng: 172.637,
    website: "https://www.healthpoint.co.nz/hospitals/christchurch-hospital",
  },
  {
    id: 19,
    country: "AU",
    state: "NSW",
    name: "John Hunter Hospital",
    city: "New Lambton Heights",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 20,
    country: "AU",
    state: "NSW",
    name: "University Hospital (Macquarie University)",
    city: "Macquarie University",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 21,
    country: "AU",
    state: "NSW",
    name: "Nepean Hospital",
    city: "Kingswood",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 22,
    country: "AU",
    state: "NSW",
    name: "St George Hospital",
    city: "Kogarah",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 23,
    country: "AU",
    state: "NSW",
    name: "Westmead Hospital",
    city: "Westmead",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 24,
    country: "AU",
    state: "QLD",
    name: "Gold Coast University Hospital",
    city: "Southport",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 25,
    country: "AU",
    state: "QLD",
    name: "Princess Alexandra Hospital",
    city: "Woolloongabba",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 26,
    country: "AU",
    state: "QLD",
    name: "Sunshine Coast University Hospital",
    city: "Birtinya",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 27,
    country: "AU",
    state: "QLD",
    name: "Wesley Pulmonary Hypertension Unit",
    city: "Auchenflower",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 28,
    country: "AU",
    state: "SA",
    name: "Flinders Medical Centre",
    city: "Bedford Park",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
  {
    id: 29,
    country: "NZ",
    state: "Auckland",
    name: "Starship Children's Hospital",
    city: "Auckland",
    address:
      "See the current PHSANZ reference for location and referral details",
    phone: "Confirm contact purpose with the service",
    website: "https://www.phsanz.org/resources/expert-referral-centres/",
    type: "Age group: confirm",
    referenceListed: true,
  },
];

// ── Custom map marker icons ────────────────────────────────────────────────────

function makeIcon(active: boolean) {
  const bg = active ? "#17748c" : "#172e5b";
  const ring = active ? "#11566a" : "#101f3e";
  return L.divIcon({
    className: "",
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.5 14 22 14 22S28 23.5 28 14C28 6.27 21.73 0 14 0z" fill="${ring}"/>
      <path d="M14 1.5C7.1 1.5 1.5 7.1 1.5 14c0 8.8 12.5 20.5 12.5 20.5S26.5 22.8 26.5 14C26.5 7.1 20.9 1.5 14 1.5z" fill="${bg}"/>
      <circle cx="14" cy="14" r="5.5" fill="white"/>
    </svg>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -38],
  });
}

// ── Sub-component: imperative map controller ───────────────────────────────────

interface MapControllerProps {
  target: { lat: number; lng: number } | null;
}
function MapController({ target }: MapControllerProps) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lng], 13, {
        duration: 0.8,
        animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    }
  }, [target, map]);
  return null;
}

// ── Filters ────────────────────────────────────────────────────────────────────

const AU_STATES = ["NSW", "VIC", "QLD", "SA", "WA", "ACT", "TAS", "NT"];
const NZ_REGIONS = ["Auckland", "Wellington", "Canterbury"];

export default function FindSpecialist() {
  const [country, setCountry] = useState<"All" | "AU" | "NZ">("All");
  const [stateFilter, setStateFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [mapTarget, setMapTarget] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Derived state options
  const stateOptions =
    country === "NZ"
      ? NZ_REGIONS
      : country === "AU"
        ? AU_STATES
        : [...AU_STATES, ...NZ_REGIONS];

  const filtered = centres.filter((c) => {
    if (country !== "All" && c.country !== country) return false;
    if (stateFilter !== "All" && c.state !== stateFilter) return false;
    if (typeFilter !== "All" && c.type !== typeFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      if (
        !c.name.toLowerCase().includes(q) &&
        !c.city.toLowerCase().includes(q) &&
        !c.state.toLowerCase().includes(q)
      )
        return false;
    }
    return true;
  });

  const handleCardClick = useCallback((centre: Centre) => {
    setActiveId(centre.id);
    if (typeof centre.lat === "number" && typeof centre.lng === "number")
      setMapTarget({ lat: centre.lat, lng: centre.lng });
  }, []);

  const handleMarkerClick = useCallback((centre: Centre) => {
    setActiveId(centre.id);
    if (typeof centre.lat === "number" && typeof centre.lng === "number")
      setMapTarget({ lat: centre.lat, lng: centre.lng });
    setTimeout(() => {
      cardRefs.current[centre.id]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  }, []);

  const resetFilters = () => {
    setCountry("All");
    setStateFilter("All");
    setTypeFilter("All");
    setSearch("");
    setActiveId(null);
    setMapTarget(null);
  };

  return (
    <div className="w-full">
      {/* ── Hero ── */}
      <section className="bg-muted py-8 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              as="h1"
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
            >
              Finding specialist PH care
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Find PH services in Australia and New Zealand. Confirm referral
              requirements, age eligibility and contact details with the
              provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Telehealth banner ── */}
      <section className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-7xl py-5">
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl flex gap-3 items-start">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/90 m-0">
              <strong>Ask about telehealth:</strong> Your service can confirm
              which appointments can happen remotely and which tests need
              attendance. Plan local and specialist care, travel and support
              arrangements with your team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main: map + list ── */}
      <section className="bg-white">
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* ── Left panel: filters + card list ── */}
            <div className="w-full lg:w-[420px] shrink-0">
              {/* Filters */}
              <div className="bg-muted/40 border border-border/50 rounded-2xl p-5 mb-5 space-y-3">
                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Filter Centres
                </h2>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    aria-label="Search specialist centres"
                    placeholder="Search by name or city…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                {/* Country */}
                <Select
                  value={country}
                  onValueChange={(v) => {
                    setCountry(v as "All" | "AU" | "NZ");
                    setStateFilter("All");
                  }}
                >
                  <SelectTrigger aria-label="Country" className="text-sm">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">
                      Australia &amp; New Zealand
                    </SelectItem>
                    <SelectItem value="AU">Australia only</SelectItem>
                    <SelectItem value="NZ">New Zealand only</SelectItem>
                  </SelectContent>
                </Select>

                {/* State / Region */}
                <Select value={stateFilter} onValueChange={setStateFilter}>
                  <SelectTrigger
                    aria-label="State or region"
                    className="text-sm"
                  >
                    <SelectValue placeholder="State / Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">
                      All states &amp; regions
                    </SelectItem>
                    {stateOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Type */}
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger aria-label="Centre type" className="text-sm">
                    <SelectValue placeholder="Centre type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">Adult &amp; Paediatric</SelectItem>
                    <SelectItem value="Adult">Adult only</SelectItem>
                    <SelectItem value="Paediatric">Paediatric only</SelectItem>
                    <SelectItem value="Age group: confirm">
                      Age group to confirm
                    </SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-muted-foreground">
                    {filtered.length} centre{filtered.length !== 1 ? "s" : ""}{" "}
                    shown
                  </span>
                  <button
                    onClick={resetFilters}
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Reset filters
                  </button>
                </div>
              </div>

              {/* Card list */}
              <div className="space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 scroll-smooth">
                {filtered.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground text-sm">
                    No centres match your filters. Try widening your search.
                  </div>
                )}
                {filtered.map((centre) => {
                  const isActive = activeId === centre.id;
                  return (
                    <div
                      key={centre.id}
                      ref={(el) => {
                        cardRefs.current[centre.id] = el;
                      }}
                      onClick={
                        typeof centre.lat === "number"
                          ? () => handleCardClick(centre)
                          : undefined
                      }
                      className={`rounded-xl border p-4 transition-all duration-200 ${typeof centre.lat === "number" ? "cursor-pointer" : ""} ${
                        isActive
                          ? "border-secondary bg-accent shadow-md ring-2 ring-secondary/30"
                          : "border-border/50 bg-white hover:border-primary/30 hover:shadow-sm"
                      }`}
                      style={{
                        borderTopColor: isActive ? "#17748c" : undefined,
                        borderTopWidth: isActive ? 3 : undefined,
                      }}
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="font-bold text-primary text-sm leading-snug">
                          {typeof centre.lat === "number" ? (
                            <button
                              type="button"
                              className="text-left underline-offset-4 hover:underline"
                              onClick={() => handleCardClick(centre)}
                              aria-label={`Show ${centre.name} on map`}
                            >
                              {centre.name}
                            </button>
                          ) : (
                            centre.name
                          )}
                        </h3>
                        <span
                          className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
                            centre.country === "NZ"
                              ? "bg-accent text-primary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {centre.state}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        Listed age group: {centre.type} · {centre.city}
                      </p>
                      <p className="mb-3 text-xs font-medium text-primary">
                        {centre.referenceListed
                          ? "PHSANZ registry reference · details require confirmation"
                          : "Service confirmation pending · not found on the inspected registry reference"}
                      </p>
                      <div className="flex flex-col gap-1.5 text-xs text-foreground/70">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span>
                            {centre.address}, {centre.city}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span>
                            {typeof centre.lat === "number"
                              ? "Hospital/general contact: "
                              : ""}
                            {centre.phone}
                            {centre.id === 7
                              ? " (switchboard; confirm PH clinic contact)"
                              : ""}
                          </span>
                        </div>
                        {centre.website && (
                          <a
                            href={centre.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                            <span>View provider or reference details</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right panel: map ── */}
            <div className="w-full lg:flex-1 sticky top-4">
              <div
                className="rounded-2xl overflow-hidden border border-border/50 shadow-sm"
                style={{ height: 640 }}
              >
                <MapContainer
                  center={[-30, 148]}
                  zoom={4}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <MapController target={mapTarget} />
                  {filtered
                    .filter(
                      (centre) =>
                        typeof centre.lat === "number" &&
                        typeof centre.lng === "number",
                    )
                    .map((centre) => (
                      <Marker
                        key={centre.id}
                        title={centre.name}
                        alt={centre.name}
                        position={[centre.lat!, centre.lng!]}
                        icon={makeIcon(activeId === centre.id)}
                        eventHandlers={{
                          click: () => handleMarkerClick(centre),
                        }}
                      >
                        <Popup>
                          <div className="text-sm space-y-1 min-w-[180px]">
                            <p className="font-bold text-primary leading-tight">
                              {centre.name}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              Listed age group: {centre.type}
                            </p>
                            <p className="text-foreground/70 text-xs">
                              {centre.address}, {centre.city}
                            </p>
                            <p className="text-foreground/70 text-xs">
                              {centre.phone}
                            </p>
                            {centre.website && (
                              <a
                                href={centre.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-xs hover:underline flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" /> Provider or
                                reference
                              </a>
                            )}
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                </MapContainer>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Only locations with existing coordinates are shown on the map.
                The full list includes additional reference entries. Map data ©
                OpenStreetMap contributors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <section className="border-t border-border/50 bg-muted/30 py-8">
        <div className="container mx-auto px-4 max-w-7xl text-center text-sm text-muted-foreground">
          <p>
            This directory forms part of PH Navigator, an initiative of PHSANZ.
            Always confirm contact details and service availability directly
            with the hospital before attending.
          </p>
          <p className="mt-1">
            A directory-corrections contact route is being confirmed. Check the{" "}
            <a
              href="https://www.phsanz.org/resources/expert-referral-centres/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              PHSANZ reference
            </a>{" "}
            and the provider directly. Reference participation is not
            accreditation or a guarantee of service availability. Reference
            checked 3 November 2026.
          </p>
        </div>
      </section>
    </div>
  );
}

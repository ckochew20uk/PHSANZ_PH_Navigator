import { SectionHeading } from "@/components/content/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Plane, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TravelOxygen() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-6 -ml-4 text-primary hover:bg-primary/10"
          >
            <Link href="/living-well">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Living Well
            </Link>
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              as="h1"
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
            >
              Travel & Oxygen Logistics
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Living with PH doesn't mean you can't travel, but it does require
              careful planning, especially when flying or visiting high
              altitudes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl mb-10 flex gap-4 items-start">
              <Plane className="h-8 w-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mt-0 mb-2 text-primary">
                  The Golden Rule of PH Travel
                </h3>
                <p className="m-0 text-foreground/90">
                  Always consult your PH specialist team <strong>before</strong>{" "}
                  booking any flights or trips to high-altitude destinations.
                  Never assume you are fit to fly without medical clearance.
                </p>
              </div>
            </div>

            <h2>Flying with PH</h2>
            <p>
              Aircraft cabin pressure is lower than at sea level and oxygen
              levels can fall during a flight. Your PH team can assess what this
              means for you, considering your current health and travel plans,
              and whether oxygen or other arrangements are needed.
            </p>

            <h3>The Hypoxia Altitude Simulation Test (HAST)</h3>
            <p>
              If your doctor is unsure how you will cope with a flight, they may
              arrange a HAST. During this test, you breathe a mixture of air
              that simulates cabin pressure to see how your body reacts. The
              results help your team assess oxygen needs alongside your health
              and travel plans; they do not determine the whole
              fitness-to-travel decision by themselves.
            </p>

            <h2>Travelling with Oxygen</h2>
            <p>
              If you require oxygen for a flight, the planning process must
              start weeks or months in advance.
            </p>
            <ul>
              <li>
                <strong>Airline Policies:</strong> Every airline has its own
                policy regarding medical oxygen. Some require you to use their
                oxygen (and will charge a fee), while others allow you to bring
                an Portable Oxygen Concentrator (POC) accepted by the operating
                airline.
              </li>
              <li>
                <strong>Medical Forms:</strong> You will almost certainly need a
                "Fitness to Fly" or medical clearance form filled out by your
                specialist.
              </li>
              <li>
                Check the current rules of every operating airline for medical
                clearance, accepted equipment, battery capacity, spare batteries
                and booking lead times. Your PH team will advise about fitness
                to fly and oxygen assessment. Do not rely on a generic battery
                percentage or assume a device accepted by one airline is
                accepted by another.
              </li>
              <li>
                <strong>Destination Oxygen:</strong> You must arrange for oxygen
                supply at your destination. Your current oxygen provider can
                often help coordinate a rental at your holiday location.
              </li>
            </ul>

            <div className="flex gap-4 items-start my-8 bg-muted p-6 rounded-xl">
              <Mountain className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mt-0 mb-2 text-primary">
                  Beware of High Altitudes
                </h3>
                <p className="m-0 text-foreground/90">
                  Higher-altitude destinations can also affect oxygen levels,
                  including when reached by road or rail. Discuss the
                  destination, journey and access to care with your PH team
                  before booking. Do not assume that advice for one person or a
                  previous trip applies to a different journey.
                </p>
              </div>
            </div>

            <h2>General Travel Tips</h2>
            <ul>
              <li>
                <strong>Medications:</strong> Always pack all your medications
                in your carry-on luggage, never in checked baggage. Bring more
                than you need for the trip in case of delays.
              </li>
              <li>
                <strong>Medical Summary:</strong> Carry a letter from your
                specialist summarising your condition, your current medications,
                your specialist's contact details, and emergency instructions.
              </li>
              <li>
                <strong>Travel Insurance:</strong> Obtain comprehensive travel
                insurance that explicitly covers pre-existing medical conditions
                (including pulmonary hypertension). This can be difficult to
                find and expensive, but it is absolutely essential.
              </li>
              <li>
                Follow the fluid plan agreed with your PH team during travel.
                Ask about leg movement, mobility support, clot prevention and
                oxygen before departure; do not independently increase fluids,
                oxygen or medicines.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

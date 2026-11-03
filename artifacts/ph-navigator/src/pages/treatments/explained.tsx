import { SectionHeading } from "@/components/content/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function TreatmentsExplained() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-6 -ml-4 text-primary hover:bg-primary/10"
          >
            <Link href="/treatments">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Treatments
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
              Treatments Explained
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              An overview of the targeted therapies and supportive treatments
              used to manage pulmonary hypertension.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none mb-12">
            <h2>Targeted PH Therapies</h2>
            <p>
              Treatment depends on the cause and type of PH. Medicines used for
              PAH are not suitable for every PH group. This overview describes
              treatment approaches; Australian registration, subsidy and supply
              vary by medicine and indication. Your specialist and pharmacist
              can explain the options that apply to you.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-16">
            <AccordionItem
              value="era"
              className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">
                    Endothelin Receptor Antagonists (ERAs)
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">
                  People with PAH often have too much endothelin, a substance in
                  the blood that causes blood vessels to constrict (narrow).
                  ERAs block the effect of endothelin, helping vessels relax.
                </p>
                <p>
                  <strong>Common examples:</strong> Bosentan, Macitentan,
                  Ambrisentan.
                </p>
                <p>
                  <strong>How taken:</strong> Oral tablets.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="pde5"
              className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">
                    Phosphodiesterase-5 (PDE-5) Inhibitors
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">
                  PDE-5 inhibitors, such as sildenafil and tadalafil, help a
                  natural blood-vessel relaxation signal last longer by reducing
                  the breakdown of cGMP. Your specialist decides whether this
                  medicine is suitable for your type of PH.
                </p>
                <p>
                  <strong>Common examples:</strong> Sildenafil, Tadalafil.
                </p>
                <p>
                  <strong>How taken:</strong> Oral tablets.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="sgc"
              className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">
                    Soluble Guanylate Cyclase (sGC) Stimulators
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">
                  Riociguat acts on the sGC/cGMP pathway to help blood vessels
                  relax. It may be used for selected PAH patients and for
                  inoperable or persistent/recurrent CTEPH after surgery,
                  following specialist assessment.
                </p>
                <p>
                  <strong>Common example:</strong> Riociguat.
                </p>
                <p>
                  <strong>How taken:</strong> Oral tablets.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="prostacyclin"
              className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">
                    Prostacyclin Analogues & Agonists
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">
                  Prostacyclin is a natural substance that keeps blood vessels
                  open and prevents clots. People with PAH often do not produce
                  enough of it. These medications replace or mimic it.
                </p>
                <p>
                  <strong>Common examples:</strong> Epoprostenol, Iloprost,
                  Treprostinil, Selexipag.
                </p>
                <p>
                  <strong>How taken:</strong> Depending on the specific
                  medication, they can be given via continuous intravenous (IV)
                  infusion, continuous subcutaneous (under the skin) infusion,
                  inhaled via a nebuliser, or as oral tablets.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            <h2>Medicine safety and monitoring</h2>
            <p>
              Only take combinations prescribed by your PH team. Riociguat must
              not be taken with PDE-5 inhibitors such as sildenafil or
              tadalafil, and nitrate medicines can also be unsafe with these
              treatments. Ask your pharmacist or PH team before adding any
              medicine, including non-prescription or herbal products.
            </p>
            <p>
              Ask for your own monitoring, side-effect, missed-dose and supply
              plan. If pregnancy is possible, ask about medicine-specific
              precautions, contraception and testing. Do not independently
              change or stop a PH medicine.
            </p>
            <p>
              <Link
                href="/treatments/medicine-safety"
                className="text-secondary underline"
              >
                Read the medicine safety guide
              </Link>
            </p>
            <h2>Newer treatment approaches</h2>
            <p>
              Sotatercept acts on the activin-signalling pathway and may have a
              role for selected adults with PAH. Treatment guidance continues to
              develop. Australian registration, subsidy, supply and individual
              suitability are separate questions: ask your PH team about current
              options. Detailed clinical review and access verification are
              pending.
            </p>
            <h2>Treatment after selected specialist testing</h2>
            <p>
              A small, selected group of people with certain types of PAH may be
              offered calcium-channel blockers after specialist testing. They
              are not suitable for everyone with PH and should not be started or
              adjusted for PH without specialist advice.
            </p>
            <h2>Supportive Therapies</h2>
            <p>
              In addition to targeted therapies, your doctor may prescribe
              medications to manage symptoms or complications of PH.
            </p>
            <ul>
              <li>
                <strong>Diuretics (water pills):</strong> Help the kidneys
                remove excess fluid from the body, reducing swelling in the legs
                and abdomen, and decreasing the workload on the heart.
              </li>
              <li>
                <strong>Anticoagulants (blood thinners):</strong> Prevent blood
                clots from forming or growing larger, especially important in
                CTEPH.
              </li>
              <li>
                <strong>Oxygen Therapy:</strong> Supplemental oxygen may be
                required if oxygen levels in your blood are low, especially
                during exertion, sleep, or air travel.
              </li>
            </ul>

            <h2 className="mt-12">Surgical Options</h2>
            <p>
              For specific types of PH or very advanced disease, surgical
              interventions may be considered.
            </p>
            <ul>
              <li>
                <strong>Pulmonary Endarterectomy (PEA):</strong> A highly
                specialised surgery specifically for Group 4 (CTEPH) patients to
                remove old blood clots from the lung arteries. It can be
                potentially curative.
              </li>
              <li>
                <strong>Balloon Pulmonary Angioplasty (BPA):</strong> A less
                invasive procedure for CTEPH patients who are not suitable for
                PEA. A balloon is inflated to widen narrowed arteries.
              </li>
              <li>
                <strong>Lung Transplantation:</strong> Specialist assessment for
                transplantation may be appropriate for selected people. Discuss
                timing with your team; referral and eventual listing are
                different decisions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

import { SectionHeading } from "@/components/content/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarerWellbeing() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-6 -ml-4 text-primary hover:bg-primary/10"
          >
            <Link href="/caring-for-someone">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Carers Hub
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
              Protecting Your Own Wellbeing
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Caring can be demanding, and your own needs matter too. Feeling
              tired, worried or conflicted does not mean you are failing.
              Support and breaks can help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            <h2>Recognising Carer Burnout</h2>
            <p>
              Caring for someone with a chronic illness is a marathon, not a
              sprint. Over time, the constant vigilance and emotional strain can
              lead to burnout. Signs include:
            </p>
            <ul>
              <li>Feeling constantly exhausted, even after sleeping.</li>
              <li>
                Becoming easily irritable or angry with the person you care for,
                followed by intense guilt.
              </li>
              <li>Losing interest in activities you used to enjoy.</li>
              <li>Withdrawing from friends and family.</li>
              <li>Changes in your own eating or sleeping habits.</li>
              <li>Finding it harder to keep up with your own health needs.</li>
            </ul>

            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl my-10">
              <h3 className="font-bold text-xl mt-0 mb-2 text-destructive">
                Your feelings and needs matter
              </h3>
              <p className="m-0 text-foreground/90">
                It is very common to feel guilty when you want a break, or when
                you feel frustrated by your caring duties. Acknowledge these
                feelings without judgment. They do not mean you love the person
                any less; they simply mean you are human and you are tired.
              </p>
            </div>

            <h2>Setting Sustainable Limits</h2>
            <p>
              Setting boundaries can help make caring more sustainable. This
              means learning to say "no" to non-essential demands and learning
              to ask for help from others. People often say "let me know if I
              can help"—take them up on it. Ask a friend to do the grocery
              shopping, mow the lawn, or sit with your loved one for two hours
              so you can go for a walk alone.
            </p>

            <h2>Respite Options</h2>
            <p>
              Respite care provides temporary relief for carers. It can take
              several forms:
            </p>
            <ul>
              <li>
                <strong>In-home respite:</strong> A support worker comes to your
                home to care for your loved one while you go out or rest.
              </li>
              <li>
                <strong>Centre-based respite:</strong> Your loved one attends a
                day centre or program.
              </li>
              <li>
                <strong>Residential respite:</strong> A short stay in an aged
                care or specialized facility to give you a longer break (e.g., a
                week to go on holiday or recover from your own surgery).
              </li>
            </ul>
            <p>
              My Aged Care may help eligible people access support after
              assessment. Age, needs and circumstances matter, with earlier
              pathways for some people, including Aboriginal and Torres Strait
              Islander people. Ask the service or hospital social worker which
              pathway applies.
            </p>

            <h2>Your Own Health Appointments</h2>
            <p>
              Do not neglect your own GP, dentist, or specialist appointments.
              Carers frequently put their own health needs on hold, leading to
              severe health crises of their own. Prioritise your medical
              check-ups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { SectionHeading } from "@/components/content/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MentalWellbeing() {
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
              Mental Wellbeing & Coping
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              A diagnosis of pulmonary hypertension changes your life. It is
              entirely normal to experience a wide range of emotions, including
              grief, anger, anxiety, and depression.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl mb-10">
              <h3 className="font-bold text-xl mt-0 mb-2 text-destructive">
                You are not alone
              </h3>
              <p className="m-0 text-foreground/90">
                Lifeline offers crisis support in Australia on 13 11 14, 24
                hours a day. For a medical emergency or immediate danger, call
                000 in Australia or 111 in New Zealand. Ask your healthcare team
                about other appropriate local support.
              </p>
            </div>

            <h2>The Psychological Impact of PH</h2>
            <p>
              People experience PH differently. Uncertainty, symptoms,
              appointments and practical pressures can affect emotional
              wellbeing. Your healthcare team can explain what your condition
              means for you and help you find appropriate support.
            </p>
            <p>
              Anxiety and physical symptoms can influence each other. New or
              worsening breathlessness, chest pain, fainting or other concerning
              symptoms should not be assumed to be anxiety. Follow your PH
              team’s symptom plan and seek urgent help when needed.
            </p>

            <h2>Strategies for Coping</h2>
            <ul>
              <li>
                <strong>Acknowledge your feelings:</strong> Don't try to force
                yourself to be "positive" all the time. Allow yourself to feel
                angry or sad. Toxic positivity can be exhausting.
              </li>
              <li>
                <strong>Find support with daily care:</strong> Focus on the
                parts of daily life you can influence, and ask for support with
                the things that are difficult. Your PH team can explain the
                options for your particular condition.
              </li>
              <li>
                <strong>Communicate openly:</strong> Talk to your family and
                friends. Because PH is an "invisible illness" (you might look
                perfectly healthy while feeling terrible), people around you may
                not understand your limitations unless you explain them.
              </li>
              <li>
                <strong>Mindfulness and relaxation:</strong> Techniques such as
                gentle meditation, progressive muscle relaxation, or simply
                taking time to rest quietly can help break the cycle of anxiety
                and breathlessness.
              </li>
            </ul>

            <div className="bg-muted p-8 rounded-xl my-10">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold mt-0 mb-0 text-primary">
                  Seeking Professional Help
                </h3>
              </div>
              <p className="mb-4">
                You do not have to manage these feelings on your own. Speaking
                with a psychologist or counsellor who specialises in chronic
                illness can be transformative.
              </p>
              <p className="mb-0">
                If eligible, a mental health treatment plan and referral can
                support Medicare rebates for up to 10 individual and 10 group
                sessions each calendar year with eligible mental health
                professionals. A rebate may not cover the full fee. Ask about
                costs, referral requirements and other support options.
              </p>
            </div>

            <h2>The Power of Peer Support</h2>
            <p>
              Living with PH can feel isolating. Connecting with people who
              understand your experience may help. Different people prefer
              different kinds of support; ask what is available and suitable for
              you.
            </p>
            <p>
              Ask your PH healthcare team about peer-support options and patient
              organisations such as PHA Australia. Check current groups,
              services and participation arrangements directly with the
              organisation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

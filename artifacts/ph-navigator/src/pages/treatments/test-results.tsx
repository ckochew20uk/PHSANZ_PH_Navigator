import { SectionHeading } from "@/components/content/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestResults() {
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
              Understanding Test Results
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Medical reports are full of acronyms and numbers. This guide helps
              you understand what your test results actually mean.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="shadow-sm border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl font-heading text-primary">
                    Right Heart Catheterisation (RHC)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-6">
                  RHC is the definitive test for diagnosing PH. It measures the
                  pressures inside your heart and lungs directly.
                </p>
                <div className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary text-lg">
                      mPAP (Mean Pulmonary Arterial Pressure)
                    </h4>
                    <p className="text-foreground/80 mt-1">
                      This is the average pressure in your lung arteries. A
                      normal mPAP at rest is generally around 14 mmHg.{" "}
                      <strong>
                        A value of &gt; 20 mmHg at rest indicates pulmonary
                        hypertension.
                      </strong>
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary text-lg">
                      PCWP / PAWP (Pulmonary Capillary Wedge Pressure)
                    </h4>
                    <p className="text-foreground/80 mt-1">
                      Wedge pressure helps your team understand whether pressure
                      from the left side of the heart contributes to PH. It is
                      interpreted alongside pulmonary vascular resistance,
                      imaging and your medical history; it cannot identify your
                      PH group by itself.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary text-lg">
                      PVR (Pulmonary Vascular Resistance)
                    </h4>
                    <p className="text-foreground/80 mt-1">
                      Pre-capillary PH is defined at right heart catheterisation
                      by mPAP &gt;20 mmHg, PAWP ≤15 mmHg and PVR &gt;2 Wood
                      units. Your specialist interprets these measurements with
                      other tests to identify the cause; they should not be used
                      to diagnose yourself or decide treatment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Echocardiogram (Echo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  An ultrasound of the heart that provides an estimate of
                  pulmonary pressures and shows how well the right heart is
                  coping.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-foreground/80">
                  <li>
                    <strong>RVSP (Right Ventricular Systolic Pressure):</strong>{" "}
                    An estimate of the pressure in the lung arteries.
                  </li>
                  <li>
                    <strong>TAPSE:</strong> Measures right ventricular function
                    (how well the right side is pumping).
                  </li>
                  <li>
                    <strong>Right Atrial/Ventricular Dilatation:</strong> The
                    report may note if the right side of the heart is enlarged,
                    which is common in PH as the heart works harder.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Functional & Blood Tests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      6-Minute Walk Test (6MWT)
                    </h4>
                    <p className="text-foreground/80 mt-1 text-lg">
                      Measures the distance you can walk on a flat surface in 6
                      minutes. It is a vital tool used regularly to monitor how
                      well your treatment is working and your overall functional
                      capacity.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      NT-proBNP or BNP (Blood Test)
                    </h4>
                    <p className="text-foreground/80 mt-1 text-lg">
                      BNP and NT-proBNP are related blood markers that can help
                      your team assess strain on the heart and follow changes
                      over time. They are different tests. Your clinician
                      interprets the result alongside symptoms, other tests and
                      factors such as kidney function; it does not determine
                      your outlook on its own.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="container mx-auto mt-10 max-w-4xl px-4">
          <h2 className="font-heading text-2xl font-bold text-primary">
            PH group, functional class and risk are different
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Your PH group describes the cause. WHO functional class describes
            how symptoms affect activity: class I has no resulting activity
            limitation, class II slight limitation, class III marked limitation
            and class IV symptoms at rest or difficulty with activity. Your team
            assesses this in context; it is not a self-diagnosis or a fixed
            prediction.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Risk assessment brings together symptoms, examination, tests and
            changes over time. A walk distance, blood result or scan on its own
            cannot determine your outlook or which treatment you should have.
            Ask what a result means for your own care plan.
          </p>
          <p className="mt-4">
            <Link
              href="/treatments/tests-and-procedures"
              className="text-secondary underline"
            >
              Prepare for tests and procedures
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

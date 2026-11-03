import { SectionHeading } from "@/components/content/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FinancialSupport() {
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
              Financial & Practical Support
            </SectionHeading>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Navigating life with a chronic illness often brings financial
              challenges and logistical hurdles. Learn about the systems
              available in Australia to support you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card className="shadow-sm border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  The NDIS and PH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Some people with PH may meet NDIS access requirements;
                  diagnosis alone does not determine eligibility. Age, residence
                  and disability or early-intervention requirements apply. Ask
                  your treating professionals to document your functional impact
                  accurately, including how it varies over time, treatments
                  tried and support needed.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  To be eligible, you must prove that your condition
                  significantly impacts your ability to perform everyday
                  activities (like showering, cooking, or moving around your
                  home) and that these impairments are likely to be permanent.
                </p>
                <p className="text-lg text-foreground/80">
                  Ask your treating professionals to describe your function
                  accurately: usual needs, how symptoms vary, the frequency of
                  difficult days, assistance required and treatments tried. A
                  diagnosis alone does not determine access.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Medications and the PBS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Targeted PH therapies are extremely expensive, but in
                  Australia, they are heavily subsidised by the government
                  through the Pharmaceutical Benefits Scheme (PBS) if you meet
                  strict medical criteria.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  PBS access depends on the medicine, indication and current
                  restriction. PAH authority applications are managed by a
                  physician with expertise in PAH under the applicable hospital
                  arrangements. Your treating team and pharmacist can explain
                  eligibility, costs and supply; CTEPH has separate
                  arrangements. The PBS Safety Net applies to eligible costs and
                  may require a card; some extra charges can remain.
                </p>
                <p className="text-lg text-foreground/80">
                  <strong>The PBS Safety Net:</strong> Eligible medicine
                  spending can count towards the annual threshold. Check current
                  rules, keep appropriate records and ask about applying for a
                  Safety Net card. Costs after reaching the threshold depend on
                  your circumstances, and some charges, including brand
                  premiums, may remain. Ask your pharmacist which costs count.
                  Check current Services Australia guidance rather than assuming
                  every medicine becomes free.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Travel Assistance Schemes (IPTAAS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  You may be eligible for help with travel and accommodation for
                  specialist care. Each state and territory has its own rules
                  and claim process, and assistance may cover only part of the
                  cost. Check eligibility and any approvals before travel with
                  the scheme or hospital social worker.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  Each state and territory has its own scheme. For example, in
                  NSW it is called the Isolated Patients Travel and
                  Accommodation Assistance Scheme (IPTAAS); in Victoria, it's
                  the VPTAS; in Queensland, the PTSS.
                </p>
                <p className="text-lg text-foreground/80">
                  Your hospital social worker can provide the forms and help you
                  understand what you are entitled to claim. Make sure you get
                  the paperwork signed by your doctor during your visit.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-destructive">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Work and Centrelink
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Many people with PH find they need to reduce their working
                  hours, change the type of work they do, or stop working
                  altogether due to severe fatigue and breathlessness.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-foreground/80">
                  <li>
                    DSP has medical and non-medical eligibility rules. These
                    include how long your impairment is expected to last,
                    treatment and stabilisation, assessed functional impact and
                    work capacity. Program of Support rules may apply. Check
                    current Services Australia guidance and consider help from a
                    hospital social worker or welfare-rights service.
                  </li>
                  <li>
                    <strong>Superannuation / Income Protection:</strong> Check
                    your superannuation policy. Many include Income Protection
                    Insurance or Total and Permanent Disability (TPD) insurance,
                    which you may be able to claim if you can no longer work.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

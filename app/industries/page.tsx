import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Factory,
  Workflow,
  ChevronRight,
} from "lucide-react";
import CtaBand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
export const metadata: Metadata = {
  title: "Industries",
  description:
    "Business IT services shaped for professional services, healthcare, education, retail, manufacturing and multi-office organisations.",
};
const items = [
  {
    t: "Professional Services",
    d: "Support for connected teams, secure business information and the everyday tools that keep client work moving.",
    i: Building2,
  },
  {
    t: "Healthcare & Clinics",
    d: "Dependable workplace IT, network connectivity and data protection for busy clinical and administrative environments.",
    i: Stethoscope,
  },
  {
    t: "Education & Training",
    d: "Technology foundations that support staff, learners, shared devices and connected learning spaces.",
    i: GraduationCap,
  },
  {
    t: "Retail & E-commerce",
    d: "Reliable connectivity, endpoint support and infrastructure for customer-facing and back-office operations.",
    i: ShoppingBag,
  },
  {
    t: "Manufacturing & Logistics",
    d: "Practical IT support and network infrastructure for operational sites, teams and business systems.",
    i: Factory,
  },
  {
    t: "Corporate & Multi-office Businesses",
    d: "Consistent IT standards, support and infrastructure planning across teams and locations.",
    i: Workflow,
  },
];
export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Industries</span>
          </div>
          <span className="eyebrow">
            <i /> INDUSTRIES WE SUPPORT
          </span>
          <h1>IT that understands your working environment.</h1>
          <p>
            Different industries work in different ways. We shape our support
            and technology services around the needs, workflows and priorities
            of your organisation.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="YOUR SECTOR, YOUR NEEDS"
            title="A practical fit for different ways of working."
            description="Explore how Teralink can support your workplace with dependable IT services and infrastructure."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((x, i) => (
              <article
                className="border border-[#DCEBE7] rounded-lg p-7 bg-white"
                key={x.t}
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="service-icon">
                    <x.i size={23} />
                  </span>
                  <span className="service-index">0{i + 1}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-[#003C3C] mb-3">
                  {x.t}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[#6b817b]">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

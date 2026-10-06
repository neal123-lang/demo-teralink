import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Compass,
  Handshake,
  ShieldCheck,
  Workflow,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Teralink Technical Solutions and our practical, people-first approach to business IT.",
};
export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>About us</span>
          </div>
          <span className="eyebrow">
            <i /> ABOUT TERALINK
          </span>
          <h1>Technology should move your business forward.</h1>
          <p>
            We bring together IT support, infrastructure and practical expertise
            to help organisations get more from their technology.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="Your technology partner, not just another IT vendor."
              description="Teralink Technical Solutions is focused on making business technology more manageable. We help organisations plan, implement and maintain the IT systems their teams rely on."
            />
            <p className="text-[16px] leading-[1.75] text-[#607774]">
              Our approach starts with understanding how your business works.
              From there, we recommend solutions that fit your environment,
              support your people and make sense for the long term.
            </p>
            <div className="feature-list">
              {[
                "Clear, practical technology guidance",
                "Support across the wider IT environment",
                "A focus on reliability, security and continuity",
              ].map((x) => (
                <div className="feature-item" key={x}>
                  <span className="feature-check">
                    <Check size={13} />
                  </span>
                  <strong>{x}</strong>
                </div>
              ))}
            </div>
            <Link href="/contact" className="text-link">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="editorial-visual">
            <div className="visual-copy">
              <span>OUR PURPOSE</span>
              <h3>Make complex technology feel manageable.</h3>
              <p>
                We believe dependable IT begins with listening, planning and
                doing the fundamentals well.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="The principles behind our work."
            description="A consistent way of working helps us deliver technology that fits the people and organisations using it."
          />
          <div className="service-grid">
            {[
              {
                i: Compass,
                t: "Understand first",
                d: "We take time to understand your requirements before recommending a solution.",
              },
              {
                i: Handshake,
                t: "Work as a partner",
                d: "We value clear communication and a collaborative working relationship.",
              },
              {
                i: ShieldCheck,
                t: "Build with care",
                d: "We consider reliability, security and continuity throughout the IT lifecycle.",
              },
              {
                i: Workflow,
                t: "Keep it practical",
                d: "We focus on useful outcomes, sensible implementation and ongoing support.",
              },
            ].map((x, i) => (
              <div className="service-card" key={x.t}>
                <div className="service-card-top">
                  <span className="service-icon">
                    <x.i size={23} />
                  </span>
                  <span className="service-index">0{i + 1}</span>
                </div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

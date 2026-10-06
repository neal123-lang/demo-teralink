"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ChevronRight } from "lucide-react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Contact</span>
          </div>
          <span className="eyebrow">
            <i /> CONTACT TERALINK
          </span>
          <h1>Let’s make your IT work better.</h1>
          <p>
            Have a project in mind, need ongoing support or simply want to
            explore your options? Tell us what you’re looking for.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">
              <i /> START A CONVERSATION
            </span>
            <h2>Tell us what your business needs.</h2>
            <p>
              Share a few details about your organisation and the technology
              support you’re looking for. We’ll use this information to
              understand how we can help.
            </p>
            <div className="contact-card">
              <Mail size={19} />
              <div>
                <strong>Enquiries</strong>
                <span>info@teralink.ae</span>
              </div>
            </div>
            <div className="contact-card">
              <Phone size={19} />
              <div>
                <strong>Request a call back</strong>
                <span>+971 56 691 4197</span>
              </div>
            </div>
            <div className="contact-card">
              <MapPin size={19} />
              <div>
                <strong>Remote & on-site support</strong>
                <span>216-217, Deira Tower, Dubai</span>
              </div>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent && (
              <div className="form-success">
                Thank you for your enquiry. This demo form is ready to be
                connected to your email or CRM service.
              </div>
            )}
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" placeholder="Company name" />
              </div>
              <div className="field">
                <label htmlFor="email">Business email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your contact number"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="service">What can we help with?</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>IT Support & Maintenance</option>
                <option>Network & Wi-Fi Solutions</option>
                <option>Cybersecurity Solutions</option>
                <option>Cloud & Microsoft 365</option>
                <option>Server & IT Infrastructure</option>
                <option>Data Backup & Recovery</option>
                <option>IT Equipment Supply & Installation</option>
                <option>IT Consulting & Office Setup</option>
                <option>Other / Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Tell us about your requirements *</label>
              <textarea
                id="message"
                name="message"
                placeholder="A little about your business and what you need..."
                required
              />
            </div>
            <button type="submit" className="button button-primary">
              Send enquiry <ArrowUpRight size={16} />
            </button>
            <p className="text-[10px] text-[#849791] mt-4">
              By submitting this form, you agree to be contacted about your
              enquiry.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

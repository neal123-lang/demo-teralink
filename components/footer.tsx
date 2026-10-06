import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { services } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/logos/teralink-logo-white.svg"
              alt="Teralink Technical Solutions"
              width={210}
              height={150}
            />
            <p>
              Practical technology. Dependable support. A stronger foundation
              for your business.
            </p>
            <Link href="/contact" className="footer-cta">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/about">About us</Link>
            <Link href="/services">Our services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/faqs">Faqs</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Our services</h4>
            {services.slice(0, 5).map((s) => (
              <Link key={s.slug} href={"/services/" + s.slug}>
                {s.title}
              </Link>
            ))}
            <Link href="/services" className="footer-more">
              View all services <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="footer-contact">
            <h4>Get in touch</h4>
            <p>
              <MapPin size={16} /> 216-217, Deira Tower, Dubai
            </p>
            <p>
              <Mail size={16} /> info@teralink.ae
            </p>
            <p>
              <Phone size={16} /> +971 56 691 4197
            </p>
            {/* <Link
              href="/contact"
              className="text-teal-300 underline underline-offset-4"
            >
              Send an enquiry
            </Link> */}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Teralink Technical Solutions. All
            rights reserved.
          </span>

          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

# Teralink Technical Solutions — Next.js Website

A multi-page corporate website built with Next.js App Router, TypeScript and Tailwind CSS v4. Brand logos and favicon assets are taken from the supplied Teralink engineer pack.

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` before deployment.

## Pages
- `/` — Home
- `/about` — About Teralink
- `/services` — Services overview
- `/services/[slug]` — Eight individual service pages, generated statically
- `/industries` — Industries
- `/contact` — Contact form UI

## Brand and typography
- Deep teal: `#003C3C`
- Primary teal: `#008276`
- Bright teal: `#00A79A`
- Supporting surface: `#F4FAF8`
- Body text: `#163D3A`
- Typography: DM Sans-inspired modern sans-serif system stack (no external font dependency)

## Before launch
- Replace `https://teralink.example` in `app/layout.tsx` with the final production domain.
- Connect the contact form in `app/contact/page.tsx` to an email service, CRM or API endpoint. It currently demonstrates the UI only and does not transmit enquiries.
- Confirm company address, phone, email, legal entity details and any approved claims before publishing.
- Add a privacy policy and any required cookie/consent notice.

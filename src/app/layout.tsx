import type { Metadata } from "next";
import "./globals.css";
import { COMPANY_INFO } from "./config/links";
import { FAQS } from "./config/faqs";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.url),
  title: "Santifa.io - eBay, Etsy Management Service and Creative Facebook Ads Agency",
  description: "Three services. One team. Built for ecom sellers. You want to scale your business? Hire us!",
  openGraph: {
    type: "website",
    title: "Santifa.io - eBay, Etsy Management Service and Creative Facebook Ads Agency",
    description: "Three services. One team. Built for ecom sellers. You want to scale your business? Hire us!",
    url: COMPANY_INFO.url,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/img/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Santifa — Ecommerce Operations, Design, and Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santifa.io - eBay, Etsy Management Service and Creative Facebook Ads Agency",
    description: "Three services. One team. Built for ecom sellers. You want to scale your business? Hire us!",
    images: ["/img/og-cover.png"],
  },
  icons: {
    icon: "/img/icon.avif",
    apple: "/img/icon.avif",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_INFO.name,
  image: `${COMPANY_INFO.url}/img/logo-stf.png`,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressCountry: COMPANY_INFO.address.country,
  },
  url: COMPANY_INFO.url,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}

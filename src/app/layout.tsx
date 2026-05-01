import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santifa.io - eBay, Etsy Management Service and Creative Facebook Ads Agency",
  description: "Three services. One team. Built for ecom sellers. You want to scale your business? Hire us!",
  openGraph: {
    type: "website",
    title: "Santifa.io - eBay, Etsy Management Service and Creative Facebook Ads Agency",
    description: "Three services. One team. Built for ecom sellers. You want to scale your business? Hire us!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santifa.io - eBay, Etsy Management Service and Creative Facebook Ads Agency",
    description: "Three services. One team. Built for ecom sellers. You want to scale your business? Hire us!",
  },
  icons: {
    icon: "/img/icon.avif",
    apple: "/img/icon.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}

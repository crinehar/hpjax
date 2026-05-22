import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hpjax.com"),
  title: {
    default: "Fertility & Chronic Pain Acupuncture in Jacksonville, FL | Health Pointe Jacksonville",
    template: "%s | Health Pointe Jacksonville",
  },
  description:
    "Struggling with fertility, chronic pain, or women's health issues? Jacksonville's ABORM-certified acupuncture clinic. Real treatment plans. Real results. Health Pointe Jacksonville.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hpjax.com",
    siteName: "Health Pointe Jacksonville",
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Health Pointe Jacksonville — Acupuncture Wellness Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        url: "/images/health-pointe-jacksonville-acupuncture-clinic-team.jpg",
        width: 1200,
        height: 630,
        alt: "Health Pointe Jacksonville acupuncture clinic team outside the office at 3840 Belfort Rd, Jacksonville FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/health-pointe-jacksonville-acupuncture-clinic-team.jpg"],
  },
  icons: {
    icon: "/images/health-pointe-jacksonville-icon.png",
    apple: "/images/health-pointe-jacksonville-icon.png",
    shortcut: "/images/health-pointe-jacksonville-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "IeNyhIp2Vnb-SClTxC_zv7fVwNEqlt-MssFHYiYdE88",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Layout>{children}</Layout>

        {/* Google Analytics 4 + Google Ads — afterInteractive so they fire on page load without blocking render */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VR6WY1K69L"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VR6WY1K69L');
            gtag('config', 'AW-987449154');
          `}
        </Script>

        {/* Meta Pixel — afterInteractive */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '835649702775002');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=835649702775002&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* LeadConnector Chat Widget — lazyOnload so it never touches PageSpeed */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6914a1e7f9ec171147626373"
          strategy="lazyOnload"
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

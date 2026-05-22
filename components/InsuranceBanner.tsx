import Image from "next/image";
import Link from "next/link";

const insurers = [
  { name: "United Healthcare", src: "/images/insurance-logo-united-healthcare.png", width: 180, height: 97 },
  { name: "Humana", src: "/images/insurance-logo-humana.png", width: 160, height: 90 },
  { name: "Blue Cross Blue Shield", src: "/images/insurance-logo-blue-cross-blue-shield.jpg", width: 180, height: 101 },
  { name: "Anthem Blue Cross Blue Shield", src: "/images/insurance-logo-anthem-bcbs.png", width: 160, height: 43 },
];

export default function InsuranceBanner() {
  return (
    <section className="bg-surface border-y border-surface-muted py-10" aria-labelledby="insurance-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="insurance-heading" className="text-2xl md:text-3xl font-heading font-bold text-ink mb-3">
          We accept most insurance
        </h2>
        <p className="text-ink-muted text-base max-w-xl mx-auto mb-8">
          Many insurance plans cover acupuncture and complementary alternative medicine, and we&apos;re happy to accept them. Click below to check if your plan is covered.
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-8 mb-8" aria-label="Accepted insurance providers">
          {insurers.map(({ name, src, width, height }) => (
            <li key={name}>
              <Image
                src={src}
                alt={`${name} insurance accepted at Health Pointe Jacksonville`}
                width={width}
                height={height}
                className="h-[68px] w-auto object-contain"
              />
            </li>
          ))}
        </ul>
        <Link
          href="http://admin.mindfulbillingllc.com//patient/add?crpId=USAvXG4oMeMZJ%2FiJW%2Bt0Sw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Verify Your Insurance
        </Link>
        <p className="mt-4 text-sm text-ink">
          Not sure if your plan is covered?{" "}
          <a
            href="tel:9044480046"
            className="font-semibold underline underline-offset-2 hover:text-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm"
          >
            Call (904) 448-0046
          </a>{" "}
          and we&apos;ll verify your benefits.
        </p>
      </div>
    </section>
  );
}

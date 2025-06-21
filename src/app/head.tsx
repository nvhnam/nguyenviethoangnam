export default function Head() {
  return (
    <>
      <title>Nguyen Viet Hoang Nam</title>
      <meta
        name="description"
        content="Nguyen Viet Hoang Nam is a Java Developer Intern and Human-Computer Interaction researcher focused on AI, AR/VR, and computer vision. Explore his research, conference activities, and technical projects."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta name="application-name" content="Nguyen Viet Hoang Nam" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/profile/Nguyen Viet Hoang Nam.webp" />
      <meta property="og:title" content="Nguyen Viet Hoang Nam | Portfolio" />
      <meta
        property="og:description"
        content="Java Developer Intern and HCI Researcher using AI and computer vision to solve real-world problems."
      />
      <meta
        property="og:url"
        content="https://nguyenviethoangnam.vercel.app/"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nguyen Viet Hoang Nam",
            hasOccupation: [
              {
                "@type": "Occupation",
                name: "Java Developer Intern",
                hiringOrganization: {
                  "@type": "Organization",
                  name: "M_Service JSC (MoMo)",
                },
                startDate: "2025-06",
                location: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ho Chi Minh City",
                    addressCountry: "Vietnam",
                  },
                },
                description:
                  "Developing and maintaining Java-based applications, collaborating in Agile teams, and improving code quality.",
              },
              {
                "@type": "Occupation",
                name: "IT Support Intern",
                hiringOrganization: {
                  "@type": "Organization",
                  name: "Yusen Logistics Co., Ltd.",
                },
                startDate: "2023-07",
                endDate: "2023-10",
                location: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ho Chi Minh City",
                    addressCountry: "Vietnam",
                  },
                },
                description:
                  "Diagnosed and resolved technical issues across office workstations, wrote clear documentation for troubleshooting and software installations, and supported users with Microsoft Office, email systems, and basic networking.",
              },
              {
                "@type": "Occupation",
                name: "Researcher",
                location: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ho Chi Minh City",
                    addressCountry: "Vietnam",
                  },
                },
                description:
                  "Human-Computer Interaction (HCI), particularly in applying computer vision, artificial intelligence, and VR/AR to improve health awareness and user interaction.",
              },
            ],
            affiliation: "International University, VNU-HCMC",
            jobTitle: "Java Developer Intern / HCI Researcher",
            sameAs: [
              "https://github.com/nvhnam",
              "https://orcid.org/0009-0005-7710-6385",
              "https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en",
              "https://linkedin.com/in/nvhnam01",
            ],
          }),
        }}
      />
    </>
  );
}

export default function Head() {
  return (
    <>
      <title>Nguyen Viet Hoang Nam | Research & Publications</title>
      <meta
        name="description"
        content="Explore Nguyen Viet Hoang Nam's research in HCI, AI, and UX."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#ffffff" />
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
            affiliation: "International University, VNU-HCMC",
            jobTitle: "Undergraduate Researcher",
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

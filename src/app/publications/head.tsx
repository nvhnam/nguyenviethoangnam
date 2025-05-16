export default function Head() {
  return (
    <>
      <title>Publications | Nguyen Viet Hoang Nam</title>
      <meta
        name="description"
        content="Research publications by Nguyen Viet Hoang Nam, including conference proceedings and book chapters in AI, computer vision, and nutrition tracking."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nguyen Viet Hoang Nam",
            affiliation: "International University, VNU-HCMC",
            jobTitle: "Undergraduate Researcher",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://nguyenviethoangnam.vercel.app/publications",
            },
            knowsAbout: [
              "Computer Vision",
              "Human Behavior",
              "AI in Nutrition",
              "VietFood67",
              "FoodDetector",
              "Human-computer Interaction (HCI)",
            ],
            url: "https://nguyenviethoangnam.vercel.app",
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

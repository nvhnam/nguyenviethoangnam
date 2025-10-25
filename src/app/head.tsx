import { descriptionText, jobTitle, jsonLd, latestJob } from "@/constants";

export default function Head() {
  const companyName = latestJob?.company || "Technology Company";
  return (
    <>
      <title>Nguyen Viet Hoang Nam</title>
      <meta name="description" content={descriptionText} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta name="application-name" content="Nguyen Viet Hoang Nam" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`Nguyen Viet Hoang Nam | ${jobTitle} at ${companyName}`}
      />
      <meta property="og:description" content={descriptionText} />
      <meta property="og:image" content="/profile/Nguyen Viet Hoang Nam.webp" />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

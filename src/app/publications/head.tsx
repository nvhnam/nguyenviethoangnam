import { jsonLd } from "@/constants";

export default function Head() {
  return (
    <>
      <title>Nguyen Viet Hoang Nam</title>
      <meta
        name="description"
        content="Research publications by Nguyen Viet Hoang Nam, including conference proceedings and book chapters in HCI, Extended Reality (XR), computer vision, and nutrition tracking."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

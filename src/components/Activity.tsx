"use client";

import { activities } from "@/constants";
import Head from "next/head";
import Image from "next/image";

const Activity = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nguyen Viet Hoang Nam",
              sameAs: [
                "https://github.com/nvhnam",
                "https://orcid.org/0009-0005-7710-6385",
                "https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en",
                "https://www.linkedin.com/in/nguyenviethoangnam",
              ],
              affiliation: {
                "@type": "Organization",
                name: "International University - VNU HCMC",
              },
            }),
          }}
        />
      </Head>
      <section
        itemScope
        itemType="https://schema.org/CreativeWork"
        className="mt-10 text-left"
      >
        <span className="sr-only">
          Nguyen Viet Hoang Nam presenting research activities and awards
          related to HCI, BCI, AI, and computer vision.
        </span>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Activities
        </h2>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
              itemScope
              itemType="https://schema.org/ScholarlyArticle"
            >
              <span
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="sr-only"
              >
                <meta itemProp="name" content="Nguyen Viet Hoang Nam" />
                <link
                  itemProp="sameAs"
                  href="https://www.linkedin.com/in/nguyenviethoangnam"
                />
                <span
                  itemProp="affiliation"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <meta
                    itemProp="name"
                    content="International University - VNU HCMC"
                  />
                </span>
              </span>
              <div className="w-full md:w-[45%] h-[220px] sm:h-[260px] md:h-[240px] overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  width={420}
                  height={280}
                  className={`object-cover w-full h-full ${
                    activity.image.includes("/profile/ICCIT2.webp")
                      ? "object-left transform scale-125"
                      : "object-center"
                  }`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 280px"
                  itemProp="image"
                />
              </div>

              <div className="w-full md:w-[55%] flex flex-col justify-start space-y-3 text-base text-gray-800">
                <h3
                  className="text-xl font-semibold text-gray-900 leading-snug"
                  itemProp="headline"
                >
                  {activity.title}
                </h3>
                <p itemProp="about" className="leading-relaxed">
                  {activity.description}
                </p>
                <p>
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    itemProp="url"
                  >
                    Learn more{" "}
                    <span className="sr-only"> about {activity.title}</span>
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Activity;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { bookChapters, conferenceProceedings } from "@/constants";
import Head from "next/head";
import React from "react";

const highlightAuthor = (authors: string) => {
  return authors.replace(
    /Nguyen,\s*V\.?\s*H\.?\s*N\.?/g,
    "<strong>Nguyen, V. H. N.</strong>"
  );
};

const groupByYear = (
  list: typeof conferenceProceedings | typeof bookChapters
) => {
  return list.reduce((acc, item) => {
    acc[item.year] = acc[item.year] || [];
    acc[item.year].push(item);
    return acc;
  }, {} as Record<number, typeof conferenceProceedings>);
};

function renderCitationMetaFor(pub: any) {
  const authorList = pub.authors
    .replace(/\s+&\s+/g, ", ")
    .split(/\s*,\s*/)
    .map((a: string) => a.trim())
    .filter(Boolean);

  const pubDate = pub.datePublished || `${pub.year}/01/01`;

  return (
    <meta
      key={pub.title + "-meta"}
      dangerouslySetInnerHTML={{
        __html: `
        <meta name="citation_title" content="${escapeHtml(pub.title)}" />
        ${authorList
          .map(
            (a: string | undefined) =>
              `<meta name="citation_author" content="${escapeHtml(a)}" />`
          )
          .join("\n")}
        <meta name="citation_publication_date" content="${escapeHtml(
          pubDate
        )}" />
        ${
          pub.venue
            ? `<meta name="citation_conference_title" content="${escapeHtml(
                pub.venue
              )}" />`
            : ""
        }
        ${
          pub.doi
            ? `<meta name="citation_doi" content="${escapeHtml(pub.doi)}" />`
            : ""
        }
        ${
          pub.url
            ? `<meta name="citation_public_url" content="${escapeHtml(
                pub.url
              )}" />`
            : ""
        }
      `,
      }}
    />
  );
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default function Publications() {
  const groupedConference = groupByYear(conferenceProceedings);
  const groupedBooks = groupByYear(bookChapters);

  const allPubs = [...conferenceProceedings, ...bookChapters];

  return (
    <>
      <Head>
        <title>Publications — Nguyen Viet Hoang Nam</title>
        <meta
          name="description"
          content="Research publications of Nguyen Viet Hoang Nam in HCI, BCI, XR and computer vision."
        />
        <link rel="canonical" href="https://nguyenviethoangnam.vercel.app" />
        {allPubs.map((p) => (
          <React.Fragment key={p.title}>
            {renderCitationMetaFor(p)}
          </React.Fragment>
        ))}
      </Head>
      <div className="space-y-10">
        {/* Nguyen Viet Hoang Nam - research publications */}

        <h1 className="sr-only">
          Research publications of Nguyen Viet Hoang Nam in HCI, Extended
          Reality (XR), and computer vision
        </h1>
        {/* Conference Proceedings */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Conference Proceedings
          </h2>
          {Object.entries(groupedConference)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, pubs]) => (
              <div key={year} className="mb-6">
                <ul className="space-y-3">
                  {pubs.map((pub, i) => (
                    <article
                      key={i}
                      itemScope
                      itemType="https://schema.org/ScholarlyArticle"
                      className="block"
                    >
                      <p>
                        <span
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <span
                            itemProp="name"
                            dangerouslySetInnerHTML={{
                              __html: highlightAuthor(pub.authors),
                            }}
                          />
                        </span>
                        .{" "}
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                          itemProp="url"
                        >
                          <em itemProp="name">{pub.title}</em>
                        </a>
                        .{" "}
                        <span
                          itemProp="identifier"
                          itemScope
                          itemType="https://schema.org/PropertyValue"
                        >
                          <meta itemProp="propertyID" content="DOI" />
                          <meta itemProp="value" content={pub.doi} />
                        </span>
                        <span itemProp="publisher">
                          {pub.venue}, {pub.year}.
                        </span>
                        <span itemProp="description" className="sr-only">
                          {pub.abstract}
                        </span>
                      </p>
                    </article>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        {/* Book Chapters */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Book Chapters</h2>
          {Object.entries(groupedBooks)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, pubs]) => (
              <div key={year} className="mb-6">
                <ul className="space-y-3">
                  {pubs.map((pub, i) => (
                    <li key={i} itemScope itemType="https://schema.org/Chapter">
                      <p>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlightAuthor(pub.authors),
                          }}
                        />
                        .{" "}
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                          itemProp="url"
                        >
                          <em itemProp="name">{pub.title}</em>
                        </a>
                        .{" "}
                        <span
                          itemProp="identifier"
                          itemScope
                          itemType="https://schema.org/PropertyValue"
                        >
                          <meta itemProp="propertyID" content="DOI" />
                          <meta itemProp="value" content={pub.doi} />
                        </span>
                        <span itemProp="publisher">
                          {pub.venue}, {pub.year}.
                        </span>
                        <span itemProp="description" className="sr-only">
                          {pub.abstract}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      </div>
    </>
  );
}

import { bookChapters, conferenceProceedings } from "@/constants";

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

export default function Publications() {
  const groupedConference = groupByYear(conferenceProceedings);
  const groupedBooks = groupByYear(bookChapters);

  return (
    <div className="space-y-10">
      {/* Nguyen Viet Hoang Nam - research publishcations */}

      <h1 className="sr-only">
        Research publications of Nguyen Viet Hoang Nam in HCI, Extended Reality
        (XR), and computer vision
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
                      <span itemProp="publisher">
                        {pub.venue}, {pub.year}.
                      </span>
                      <span itemProp="description" className="sr-only">
                        This paper introduces a real-time food recognition
                        system using YOLOv10 and the VietFood67 dataset to
                        improve user dietary awareness through visual AR
                        feedback.
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
                      <span itemProp="publisher">
                        {pub.venue}, {pub.year}.
                      </span>
                      <span itemProp="description" className="sr-only">
                        This paper introduces a real-time food recognition
                        system using YOLOv10 and the VietFood67 dataset to
                        improve user dietary awareness through visual AR
                        feedback.
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </div>
  );
}

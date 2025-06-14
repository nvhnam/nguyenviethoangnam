const conferenceProceedings = [
  {
    title:
      "Now I Know What I Am Eating: Real-Time Tracking and Nutritional Insights Using VietFood67 to Enhance User Experience",
    authors: "Nguyen, V. H. N., Tran, B. T., That, M. V. T., & Vi, C. T.",
    year: 2024,
    venue:
      "Information and Communication Technology – Proceedings of the 13th International Symposium on Information and Communication Technology (SOICT 2024), Communications in Computer and Information Science, vol. 2352, Springer, Singapore",
    url: "https://doi.org/10.1007/978-981-96-4288-5_35",
  },
  {
    title:
      "Navigating Nutrition: Online Grocery Solutions with Traffic Light Labels and AI Support in Vietnam",
    authors: "Nguyen, V. H. N., Tran, B. T., Nguyen, S. H., & Vi, C. T.",
    year: 2024,
    venue: "International University Annual Scientific Conference",
    url: "https://drive.google.com/file/d/1mbRsFIv5GcVdwPfHO66movCc8WN9yFca/view?usp=sharing",
  },
];

const bookChapters = [
  {
    title:
      "It’s Yummy: Real-Time Detection and Recognition of Vietnamese Dishes",
    authors: "Nguyen, V. H. N., & Vi, C. T.",
    year: 2025,
    venue:
      "In A. Bijalwan (Ed.), Navigating Computing Challenges for a Sustainable World (pp. 1–16). IGI Global Scientific Publishing",
    url: "https://doi.org/10.4018/979-8-3373-0462-5.ch001",
  },
];

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
    <div className="space-y-10 ">
      {/* Nguyen Viet Hoang Nam - personal academic publishcations */}

      <span className="sr-only">
        <strong>Nguyen Viet Hoang Nam</strong> is a researcher in HCI and
        computer vision, with works like VietFood67 and FoodDetector.
      </span>
      {/* Conference Proceedings */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Conference Proceedings
        </h2>
        {Object.entries(groupedConference)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, pubs]) => (
            <div key={year} className="mb-6">
              <ul className="space-y-3">
                {pubs.map((pub, i) => (
                  <li
                    key={i}
                    itemScope
                    itemType="https://schema.org/ScholarlyArticle"
                  >
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
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      {/* Book Chapters */}
      <section>
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

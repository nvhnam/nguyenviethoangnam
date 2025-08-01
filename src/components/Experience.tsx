import { workExperience } from "@/constants";
import Script from "next/script";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-10 px-4"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Script
        type="application/ld+json"
        id="structured-data"
        strategy="afterInteractive"
      >
        {JSON.stringify({
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
          ],
        })}
      </Script>

      <span className="sr-only" itemProp="name">
        Nguyen Viet Hoang Nam professional working experience in researching AI
        advantages in positively influencing human behavior and as a
        professional Java developer.
      </span>
      <meta itemProp="jobTitle" content="Java Developer Intern at Momo" />
      <meta itemProp="address" content="Vietnam" />

      <h2
        id="experience-heading"
        className="sr-only text-2xl font-bold text-gray-900"
      >
        Professional Experience
      </h2>

      {workExperience.map((exp, idx) => (
        <article
          key={idx}
          className="mb-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <header className="flex flex-col sm:flex-row justify-between sm:items-center">
            <div>
              <h3
                className="text-xl font-semibold text-gray-900"
                itemProp="name"
              >
                {exp.company}
              </h3>
              <p className="italic text-gray-700" itemProp="department">
                {exp.position}
              </p>
            </div>
            <div className="text-sm text-right mt-2 sm:mt-0">
              <time
                className="text-gray-900 font-medium"
                itemProp="startDate"
                dateTime={getDateISOString(exp.date)}
              >
                {exp.date}
              </time>
              <p className="italic text-gray-600" itemProp="location">
                {exp.location}
              </p>
            </div>
          </header>

          {exp.responsibilities && (
            <ul className="list-disc list-inside mt-3 space-y-2 text-[17px] leading-relaxed text-gray-800">
              {exp.responsibilities.map((item, i) => (
                <li key={i} itemProp="description">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
}

function getDateISOString(dateStr: string): string {
  const match = dateStr.match(/(\w+)\s(\d{4})/);
  if (!match) return "";
  const month = new Date(`${match[1]} 1, ${match[2]}`).getMonth() + 1;
  return `${match[2]}-${month.toString().padStart(2, "0")}-01`;
}

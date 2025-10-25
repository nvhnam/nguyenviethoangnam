// experience.tsx
import { workExperience } from "@/constants";
import Script from "next/script";
import Image from "next/image";
import React from "react";

export default function Experience() {
  const companies = groupByCompany(workExperience);
  const personStructuredData = buildPersonStructuredData({
    name: "Nguyen Viet Hoang Nam",
    experiences: workExperience,
  });
  const latestPosition = workExperience[0]?.position ?? "Software Engineer";

  return (
    <section
      id="experience"
      className="mt-10 px-4 max-w-5xl mx-auto"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Script
        type="application/ld+json"
        id="structured-data"
        strategy="afterInteractive"
      >
        {JSON.stringify(personStructuredData)}
      </Script>

      <span className="sr-only" itemProp="name">
        Nguyen Viet Hoang Nam — Professional experience and roles.
      </span>
      <meta itemProp="jobTitle" content={latestPosition} />
      <meta itemProp="address" content="Vietnam" />

      <h2 id="experience-heading" className="sr-only">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {companies.map((company) => (
          <article
            key={company.company}
            className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden bg-white"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <header className="flex items-center justify-between gap-4 p-6 -mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {company.logo ? (
                    <div className="relative w-20 h-12 sm:w-24 sm:h-14 flex-shrink-0">
                      <Image
                        src={company.logo}
                        alt={`${company.company} logo`}
                        fill
                        className="object-contain rounded-md border"
                        sizes="(max-width: 640px) 80px, 96px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-600">
                      {/* fallback initials */}
                      <span className="font-semibold">
                        {company.company
                          .split(" ")
                          .map((s) => s[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    </div>
                  )}
                  <div
                    className="flex flex-col gap-1 sm:gap-1.5"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <h3
                      className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug"
                      itemProp="name"
                    >
                      {company.company}
                    </h3>

                    {company.location && (
                      <p
                        className="flex items-center gap-2 text-sm sm:text-base text-slate-500 italic"
                        itemProp="address"
                        itemScope
                        itemType="https://schema.org/PostalAddress"
                      >
                        <span itemProp="addressLocality">
                          {company.location}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </header>

            {/* Roles list */}
            <div className="p-6 space-y-4">
              {company.positions.map((exp, idx) => {
                const startISO = getDateISOString(exp.date, "start");
                const endISO = getDateISOString(exp.date, "end");
                return (
                  <div
                    key={exp.slug ?? idx}
                    className="rounded-lg border border-gray-100 bg-slate-50 p-5"
                    itemScope
                    itemType="https://schema.org/Occupation"
                  >
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          aria-hidden
                          className="w-1.5 h-8 rounded-full"
                          style={{ background: "#3b82f6" }}
                        />
                        <div>
                          <p
                            className="text-base sm:text-lg font-medium italic text-slate-800"
                            itemProp="roleName"
                          >
                            {exp.position}
                          </p>
                          {exp.responsibilities &&
                            exp.responsibilities.length > 0 && (
                              <meta
                                itemProp="description"
                                content={exp.responsibilities
                                  .slice(0, 4)
                                  .join(" ")}
                              />
                            )}
                        </div>
                      </div>

                      <div className="mt-2 sm:mt-0 text-right text-sm text-slate-700">
                        <time
                          className="font-medium"
                          itemProp="startDate"
                          dateTime={startISO || undefined}
                        >
                          {formatDateRangeForDisplay(exp.date)}
                        </time>
                        {startISO && (
                          <meta itemProp="startDate" content={startISO} />
                        )}
                        {endISO && <meta itemProp="endDate" content={endISO} />}
                      </div>
                    </div>

                    {/* responsibilities */}
                    {exp.responsibilities?.length ? (
                      <ul
                        className="
                          mt-4 list-disc list-inside space-y-2
                          text-[15px] sm:text-[16px] leading-relaxed text-slate-700
                          text-justify md:text-justify lg:text-left
                        "
                        itemProp="description"
                      >
                        {exp.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            className="break-words hyphens-auto"
                            itemProp="responsibility"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

interface WorkExperienceItem {
  company: string;
  position: string;
  date: string;
  location?: string;
  responsibilities?: string[];
  slug?: string;
  logo?: string;
}

type ExpType = WorkExperienceItem;

function groupByCompany(exps: ExpType[]) {
  const map = new Map<
    string,
    { company: string; positions: ExpType[]; location?: string; logo?: string }
  >();

  for (const e of exps) {
    if (!map.has(e.company)) {
      map.set(e.company, {
        company: e.company,
        positions: [],
        location: e.location,
        logo: e.logo,
      });
    }
    const rec = map.get(e.company)!;
    if (!rec.location && e.location) rec.location = e.location;
    if (!rec.logo && e.logo) rec.logo = e.logo;
    rec.positions.push(e);
  }

  const arr = Array.from(map.values()).map((c) => {
    c.positions.sort((a, b) => {
      const aStart = parseMonthYear(a.date) ?? "0000-01";
      const bStart = parseMonthYear(b.date) ?? "0000-01";
      return bStart.localeCompare(aStart);
    });
    return { ...c, location: c.location ?? "", logo: c.logo ?? "" };
  });

  return arr;
}

function buildPersonStructuredData({
  name,
  experiences,
}: {
  name: string;
  experiences: ExpType[];
}) {
  const companyMeta = new Map<string, { logo?: string; location?: string }>();
  for (const e of experiences) {
    if (!companyMeta.has(e.company)) {
      companyMeta.set(e.company, { logo: e.logo, location: e.location });
    }
  }

  const occupations = experiences.map((exp) => {
    const [start, end] = parseDateRange(exp.date);
    const meta = companyMeta.get(exp.company) ?? {};
    const companyLoc = meta.location ?? exp.location ?? "";
    return {
      "@type": "Occupation",
      name: exp.position,
      hiringOrganization: {
        "@type": "Organization",
        name: exp.company,
        ...(meta.logo ? { logo: meta.logo } : {}),
      },
      ...(start ? { startDate: start } : {}),
      ...(end ? { endDate: end } : {}),
      ...(companyLoc
        ? {
            location: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: companyLoc.split(",")[0] ?? companyLoc,
                addressCountry: companyLoc.includes("Vietnam")
                  ? "Vietnam"
                  : undefined,
              },
            },
          }
        : {}),
      description: exp.responsibilities?.slice(0, 5).join(" ") ?? exp.position,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    hasOccupation: occupations,
  };
}

/* date helpers (same as before) */
function parseDateRange(dateStr: string): [string | null, string | null] {
  if (!dateStr) return [null, null];
  const normalized = dateStr.replace(/\u2013|\u2014/g, "-");
  const parts = normalized.split("-").map((p) => p.trim());
  const rangeParts =
    parts.length >= 2 ? [parts[0], parts.slice(1).join("-")] : [dateStr.trim()];
  const start = parseMonthYear(rangeParts[0]);
  let end = null;
  if (rangeParts[1]) {
    const candidate = rangeParts[1].trim();
    if (/now|present|current/i.test(candidate)) {
      end = null;
    } else {
      end = parseMonthYear(candidate);
    }
  }
  return [start, end];
}

function parseMonthYear(text: string): string | null {
  if (!text) return null;
  const t = text.trim();
  const m1 = t.match(/([A-Za-z]+)\s+(\d{4})/);
  if (m1) {
    const monthName = m1[1];
    const year = m1[2];
    const month = new Date(`${monthName} 1, ${year}`).getMonth() + 1;
    if (!Number.isNaN(month)) {
      return `${year}-${String(month).padStart(2, "0")}`;
    }
  }
  const m2 = t.match(/(\d{4})/);
  if (m2) return `${m2[1]}-01`;
  return null;
}

function getDateISOString(dateStr: string, typeArg: "start" | "end" = "start") {
  const [start, end] = parseDateRange(dateStr);
  const val = typeArg === "start" ? start : end;
  return val ? `${val}-01` : "";
}

function formatDateRangeForDisplay(dateStr: string) {
  return dateStr.replace(/\s*[-–—]\s*/g, " – ");
}

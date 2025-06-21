import { awards, certificates, educations } from "@/constants";
import Image from "next/image";
// import Activity from "./Activity";
import dynamic from "next/dynamic";

/* eslint-disable react/no-unescaped-entities */
const Activity = dynamic(() => import("@/components/Activity"));
export default function Home() {
  return (
    <main
      itemScope
      itemType="https://schema.org/Person"
      className="p-6 md:p-12 max-w-6xl mx-auto text-left md:text-justify space-y-6 "
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              {
                "@type": "Occupation",
                name: "Researcher",
                location: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ho Chi Minh City",
                    addressCountry: "Vietnam",
                  },
                },
                description:
                  "Human-Computer Interaction (HCI), particularly in applying computer vision, artificial intelligence, and VR/AR to improve health awareness and user interaction.",
              },
            ],
            affiliation: "Momo and International University, VNU-HCMC",
            jobTitle: "Java Developer Intern / Researcher",
            sameAs: [
              "https://github.com/nvhnam",
              "https://orcid.org/0009-0005-7710-6385",
              "https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en",
              "https://linkedin.com/in/nvhnam01",
            ],
          }),
        }}
      />

      {/* Nguyen Viet Hoang Nam - personal portfolio */}

      <span className="sr-only">
        <strong>Nguyen Viet Hoang Nam</strong> is a researcher in HCI and
        computer vision, with works like VietFood67 and FoodDetector.{" "}
        <strong>Nguyen Viet Hoang Nam</strong> currently a Java Developer intern
        at <strong>Momo</strong> in Vietnam.
      </span>
      <article className="text-gray-800 leading-relaxed space-y-8 text-lg">
        <Image
          src="/profile/Nguyen Viet Hoang Nam.webp"
          alt="Portrait of Nguyen Viet Hoang Nam"
          width={280}
          height={320}
          className="float-left mr-6 mb-4 rounded-lg object-cover"
          priority={true}
          itemProp="image"
          loading="eager"
          sizes="(max-width: 768px) 100vw, 280px"
        />

        <section>
          <p>
            Welcome to my personal website. I'm a recent gradutate majoring in{" "}
            <strong>Information Technology</strong> at International University
            – VNU-HCM, Vietnam and currently a{" "}
            <strong>Java Developer Intern</strong> at Momo. This platform serves
            as a hub to showcase my academic journey, research work, and passion
            for using technology to create meaningful innovation.
          </p>
        </section>

        <section>
          <p>
            My research is centered on{" "}
            <strong>Human-Computer Interaction (HCI)</strong>, particularly in
            applying computer vision, artificial intelligence, and VR/AR to
            improve health awareness and user interaction. I have created the
            largest Vietnamese food image dataset, <strong>VietFood67</strong>,
            to fine-tune the <strong>YOLOv10</strong> models for real-time food
            detection, nutritional analysis, and user interaction through a
            responsive and accessible platform.
          </p>
        </section>

        <section>
          <p>
            Additionally, I’m deeply passionate about pushing boundaries in both
            research and development. I enjoy creating tools that are not only
            technically sound but also serve real-world needs. My skills span
            across:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Programming Language (Python, Java, JavaScript)</li>
            <li>
              Backend Development (NodeJS, ExpressJS, Springboot, FastAPI,
              MySQL)
            </li>
            <li>Computer Vision (YOLO, OpenCV, Roboflow)</li>
            <li>AI Integration (LangChain, CrewAI, Gemini API)</li>
            <li>
              Research Interests (HCI, Deep Learning, Computer Vision, VR/AR)
            </li>
          </ul>
        </section>

        <section>
          <p>
            Whether you're a fellow researcher, developer, or someone interested
            in AI for health and human behavior, I hope you find inspiration
            here. Feel free to explore my projects and publications or connect
            with me through my contact links on the left sidebar.
          </p>
        </section>

        <section
          itemScope
          itemType="https://schema.org/EducationOccupationalCredential"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Education
          </h2>

          <div className="space-y-6 text-base text-gray-800">
            {educations.map((edu, index) => (
              <article
                key={index}
                itemProp="educationalCredentialAwarded"
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
              >
                <p className="italic text-gray-700 mb-1">
                  <time itemProp="startDate" dateTime={edu.startTime}>
                    {edu.startTime}
                  </time>{" "}
                  -{" "}
                  <time itemProp="endDate" dateTime={edu.endTime}>
                    {edu.endTime}
                  </time>
                </p>
                <p>
                  <span itemProp="name">{edu.title}</span>,{" "}
                  <span itemProp="educationalInstitution">
                    {edu.institution}.
                  </span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section itemScope itemType="https://schema.org/CreativeWork">
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Certificates
          </h2>
          <ul className="list-disc pl-6 text-base text-gray-700">
            {certificates.map((cert, index) => (
              <li key={index}>
                {cert.title}{" "}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                  itemProp="url"
                >
                  [View]
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section itemScope itemType="https://schema.org/CreativeWork">
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Awards
          </h2>
          <ul className="list-disc pl-6 text-base text-gray-700">
            {awards.map((award, index) => (
              <li key={index}>
                {award.title}{" "}
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                  itemProp="url"
                >
                  [View]
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Activity />
      </article>
    </main>
  );
}

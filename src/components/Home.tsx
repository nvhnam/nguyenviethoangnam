import { awards, certificates, educations } from "@/constants";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="p-6 md:p-12 max-w-6xl mx-auto text-left md:text-justify space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nguyen Viet Hoang Nam",
            affiliation: "International University, VNU-HCMC",
            jobTitle: "Undergraduate Researcher",
            sameAs: [
              "https://github.com/nvhnam",
              "https://orcid.org/0009-0005-7710-6385",
              "https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en",
              "https://linkedin.com/in/nvhnam01",
            ],
          }),
        }}
      />
      {/* Nguyen Viet Hoang Nam - personal academic portfolio */}

      <span className="sr-only">
        <strong>Nguyen Viet Hoang Nam</strong>
        is a researcher in HCI and computer vision, with works like VietFood67
        and FoodDetector.
      </span>
      <article className="text-gray-800 leading-relaxed space-y-8 text-lg">
        <Image
          src="/profile/Nguyen Viet Hoang Nam.webp"
          alt="Nguyen Viet Hoang Nam"
          width={280}
          height={320}
          className="float-left mr-6 mb-4 rounded-lg object-cover"
          priority={true}
        />

        <section>
          <p>
            Welcome to my personal website. I'm a recent gradutate majoring in{" "}
            <strong>Information Technology</strong> at International University
            – VNU-HCM, Vietnam. This platform serves as a hub to showcase my
            academic journey, research work, and passion for using technology to
            create meaningful innovation.
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
      </article>
    </main>
  );
}

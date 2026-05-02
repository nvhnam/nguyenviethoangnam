import {
  awards,
  certificates,
  educations,
  jsonLd,
  latestJob,
} from "@/constants";
import Image from "next/image";
import dynamic from "next/dynamic";

/* eslint-disable react/no-unescaped-entities */
const Activity = dynamic(() => import("@/components/Activity"));

interface Award {
  title: string;
  date: string;
  link?: string;
}

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
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Nguyen Viet Hoang Nam - personal portfolio */}

      <span className="sr-only">
        <strong>Nguyen Viet Hoang Nam</strong> is a researcher in HCI and
        computer vision, with works like VietFood67 and FoodDetector.{" "}
        <strong>Nguyen Viet Hoang Nam</strong> currently a{" "}
        {latestJob ? (
          <>
            <strong>{latestJob.title}</strong> at{" "}
            <strong>{latestJob.company}</strong>
          </>
        ) : (
          "software engineer "
        )}{" "}
        in Vietnam.
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
            Welcome to my personal website. Currently, I am a Master's student
            in <strong>Computer Science</strong> at University of Information
            Technology (UIT) - VNU-HCM, Vietnam, and a{" "}
            {latestJob ? (
              <>
                <strong>{latestJob.title}</strong> at{" "}
                <strong>{latestJob.company}</strong>
              </>
            ) : (
              "software engineer"
            )}
            . This platform serves as a hub to showcase my academic journey,
            research work, and passion for using technology to create meaningful
            innovation.
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
            <li>Programming Language (Python, Java)</li>
            <li>
              Frameworks/Libraries (Vert.x, Springboot, FastAPI, LangGraph)
            </li>
            <li>Databases (MySQL, Oracle, PostgreSQL)</li>
            <li>
              Developer Tools (Claude Code, Gemini CLI, Git, RabbitMQ, Kafka,
              MQTT, Unleash, OpenAI, Ollama, Grafana)
            </li>
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
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">
            Honors & Media
          </h2>
          <div className="space-y-6 text-base">
            {awards.map((award: Award, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">
                    {award.title}
                    {award.title !== "Featured in Thanh Nien Newspaper" && (
                      <>
                        {" "}
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline font-normal"
                          itemProp="url"
                        >
                          [View]
                        </a>
                      </>
                    )}
                  </h3>
                  <span className="italic text-gray-600 text-sm">
                    {award.date}
                  </span>
                </div>
                {award.title === "Featured in Thanh Nien Newspaper" &&
                  award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 italic underline break-all mt-1"
                      itemProp="url"
                    >
                      {award.link}
                    </a>
                  )}
              </div>
            ))}
          </div>
        </section>

        <Activity />
      </article>
    </main>
  );
}

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project?.title || "Project Not Found",
    description: project?.shortDescription || "",
  };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-lg mb-4">{project.shortDescription}</p>
      <h2 className="font-semibold mt-6 mb-2">Tech Stack:</h2>
      <ul className="list-disc list-inside">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

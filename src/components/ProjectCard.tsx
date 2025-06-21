"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  detailsUrl: string;
};

export default function ProjectCard({
  title,
  image,
  techStack,
  liveUrl,
  detailsUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white cursor-pointer rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:scale-[1.01]">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} Cover`}
          sizes="(max-width: 768px) 100vw, 280px"
          fill
          className="object-cover"
          itemProp="image"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col justify-between grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 ">{title}</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100  text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 "
            >
              🔗 View Live
            </a>
          )}

          <Link
            href={detailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600  "
          >
            📄 View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

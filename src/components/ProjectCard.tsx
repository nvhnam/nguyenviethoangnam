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
    <div className="bg-white cursor-pointer dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:scale-[1.01]">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} Cover`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-4 flex flex-col justify-between grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-sm px-2 py-1 rounded-full text-gray-800 dark:text-white"
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
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              🔗 View Live
            </a>
          )}

          <Link
            href={detailsUrl}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            📄 View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

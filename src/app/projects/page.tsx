import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "FoodDetector V2",
    image: "/projects/FoodDetector.jpg",
    techStack: ["Streamlit", "YOLOv10", "OpenCV", "Python"],
    liveUrl: "https://fooddetectorv2.streamlit.app",
    detailsUrl: "/projects/fooddetector-v2",
  },
  {
    title: "NutriGuide",
    image: "/projects/NutriGuide.jpg",
    techStack: ["React", "Node.js", "MySQL", "LangGraph"],
    liveUrl: "https://nutriguiding.vercel.app",
    detailsUrl: "/projects/grocery-ai",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

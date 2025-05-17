import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "FoodDetectorV2",
    image: "/projects/FoodDetector.jpg",
    techStack: ["Streamlit", "YOLOv10", "OpenCV", "Python"],
    liveUrl: "https://fooddetectorv2.streamlit.app",
    // detailsUrl: "/projects/fooddetector-v2",
    detailsUrl: "https://github.com/nvhnam/FoodDetector",
  },
  {
    title: "NutriGuide",
    image: "/projects/NutriGuide.jpg",
    techStack: [
      "ReactJS",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "Langchain",
    ],
    liveUrl: "https://nutriguiding.vercel.app",
    // detailsUrl: "/projects/grocery-ai",
    detailsUrl: "https://github.com/nvhnam/NutriGuiding",
  },
  {
    title: "TheBlog",
    image: "/projects/TheBlog.png",
    techStack: ["ReactJS", "SpringBoot", "Hibernate", "MySQL", "Docker"],
    liveUrl: "https://theblog-nvhnam.vercel.app/home",
    detailsUrl: "https://github.com/nvhnam/TheBLOG",
  },
  {
    title: "MySQL AI Agent",
    image: "/projects/MySQLAI.png",
    techStack: ["Streamlit", "Langchain", "MySQL", "Python"],
    liveUrl: "https://mysqlagent.streamlit.app/",
    detailsUrl: "https://github.com/nvhnam/MySQL_AI_Agent",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

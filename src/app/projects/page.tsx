import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "FoodDetectorV2",
    image: "/projects/FoodDetector.webp",
    techStack: ["Streamlit", "YOLOv10", "OpenCV", "Python", "Roboflow"],
    liveUrl: "https://fooddetectorv2.streamlit.app",
    // detailsUrl: "/projects/fooddetector-v2",
    detailsUrl: "https://github.com/nvhnam/FoodDetector",
  },
  {
    title: "NutriGuide",
    image: "/projects/NutriGuide.webp",
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
    image: "/projects/TheBlog.webp",
    techStack: ["ReactJS", "SpringBoot", "Hibernate", "MySQL", "Docker"],
    liveUrl: "https://theblog-nvhnam.vercel.app/home",
    detailsUrl: "https://github.com/nvhnam/TheBLOG",
  },
  {
    title: "MySQL AI Agent",
    image: "/projects/MySQLAI.webp",
    techStack: ["Streamlit", "Langchain", "MySQL", "Python"],
    liveUrl: "https://mysqlagent.streamlit.app/",
    detailsUrl: "https://github.com/nvhnam/MySQL_AI_Agent",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <span className="sr-only">
        <strong>Nguyen Viet Hoang Nam</strong>
        is a researcher in HCI and computer vision, with works like VietFood67
        and FoodDetector.
      </span>
      <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

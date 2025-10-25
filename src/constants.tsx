export const MY_CV_URL = "/cv/AI-Engineer-Intern_Nam-Nguyen_Resume.pdf";

export const educations = [
  {
    title: "B.Eng. in Information Technology",
    institution:
      "Vietnam National University, International University, Ho Chi Minh City, Vietnam",
    time: "2019 - 2025",
    startTime: "2019",
    endTime: "2025",
  },
];

export const activities = [
  {
    title: "SOICT 2024 — Symposium on Information and Communication Technology",
    image: "/profile/SOICT4.webp",
    alt: "Nguyen Viet Hoang Nam presenting paper at SOICT 2024 on real-time Vietnamese food tracking and nutrition analysis using VietFood67",
    name: "Now I Know What I am Eating: Real-time Tracking and Nutritional Insights Using VietFood67 to Enhance User Experience",
    description:
      'At the SOICT 2024 conference, I presented my accepted paper titled "Now I Know What I am Eating: Real-time Tracking and Nutritional Insights Using VietFood67 to Enhance User Experience." This research focuses on the intersection of human-computer interaction and computer vision, using the YOLOv10 model with a custom largest Vietnamese food dataset, VietFood67 to help users visualize nutritional values in real time, which was evaluated via a 35 participants user study.',
    link: "https://soict.org/2024/",
  },
  {
    title:
      "ICCIT 2024 — International Conference on Innovation and Challenges in Computing & Innovative Technologies for a Sustainable Future",
    image: "/profile/ICCIT2.webp",
    alt: "Nguyen Viet Hoang Nam presenting at ICCIT 2024 on real-time Vietnamese food detection using VietFood57",
    name: "It’s Yummy: Real-Time Detection and Recognition of Vietnamese Dishes",
    description:
      'I had the honor of presenting my accepted paper titled "It’s Yummy: Real-Time Detection and Recognition of Vietnamese Dishes" at ICCIT 2024, hosted by the British University Vietnam. This research explores the integration of YOLOv10 into web application to enhance health awareness using real-time Vietnamese food detection.',
    link: "https://www.buv.edu.vn/iccit-2024-diem-hen-doi-moi-sang-tao-va-phat-trien-ben-vung-tai-buv/",
  },
];

export const workExperience = [
  {
    company: "M_Service JSC (MoMo)",
    position: "Software Engineering Trainee",
    date: "October 2025 – Now",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Engineered backend API endpoints using Java Vert.x and gRPC modules for the high-throughput processing of user-submitted scam report information.",
      "Developed and deployed an unsupervised machine learning system using K-means clustering to automatically detect anomalies in log metrics sourced from Prometheus, enhancing system monitoring capabilities.",
    ],
    logo: "/companies/momo_converted.webp",
    slug: "momo-software-engineering-trainee",
  },
  {
    company: "M_Service JSC (MoMo)",
    position: "Java Developer Intern",
    date: "June 2025 – September 2025",
    responsibilities: [],
    slug: "momo-java-developer-intern",
  },
  {
    company: "Yusen Logistics Co., Ltd.",
    position: "IT Support Intern",
    date: "July 2023 – October 2023",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Diagnosed and resolved technical issues across office workstations.",
      "Wrote clear documentation for troubleshooting processes and software installations, improving support efficiency and technical communication.",
      "Supported internal users with Microsoft Office, email systems, and basic network issues.",
    ],
    logo: "/companies/yusen_converted_2.webp",
    slug: "yusen-logistics-it-intern",
  },
];

export const certificates = [
  {
    title: "IELTS - 7.5 (11/2024 - 11/2026)",
    link: "https://drive.google.com/file/d/1D9fx4QZ7_IgaWVPx9aUVj9p44eNUSDx2/view",
  },
];

export const awards = [
  {
    title: "Best Paper Runner-Up Award at SOICT 2024",
    link: "https://drive.google.com/file/d/18-Fm370f3JQQHRhvzPCz9ztQUqQEk6c-/view",
  },
];

export const conferenceProceedings = [
  {
    title:
      "FlavorSync: An Interactive Multisensory Platform for Flavorful Smell and Taste Experience",
    authors:
      "Duong, T. N., Ha, N., Bao, V. H., Minh, H. N., Nguyen, V. H. N., Huynh, T., & Vi, C. T.",
    year: 2025,
    datePublished: "2025/09/28",
    venue:
      "Adjunct Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST Adjunct '25), September 28-October 1, 2025, Busan, Republic of Korea. ACM, New York, NY, USA",
    url: "https://doi.org/10.1145/3746058.3758395",
    doi: "10.1145/3746058.3758395",
    abstract:
      "This paper present FlavorSync, a novel system for simultaneously smell and taste stimulus delivery for the users. Prior systems have explored unisensory stimulation but fall short in coordinating these sensory channels in real time, which is an essential aspect of authentic flavor perception. FlavorSync has smell and taste dispensers that can control the timing, intensity, and duration of both smell and taste stimuli. A unified control interface enables precise temporal and volumetric control, supporting rich, multisensory experiences. This research aims to advance the field of multisensory interaction by offering a tool for synchronized smelling and tasting, which could be utilized in virtual reality, personalized health and nutrition, and the culinary arts.",
  },
  {
    title:
      "Now I Know What I Am Eating: Real-Time Tracking and Nutritional Insights Using VietFood67 to Enhance User Experience",
    authors: "Nguyen, V. H. N., Tran, B. T., That, M. V. T., & Vi, C. T.",
    year: 2024,
    datePublished: "2025/04/28",
    venue:
      "Information and Communication Technology – Proceedings of the 13th International Symposium on Information and Communication Technology (SOICT 2024), Communications in Computer and Information Science, vol. 2352, Springer, Singapore",
    url: "https://doi.org/10.1007/978-981-96-4288-5_35",
    doi: "10.1007/978-981-96-4288-5_35",
    abstract:
      "Maintaining a balanced diet is vital for preventing diseases like diabetes and cancer, but busy lifestyles make tracking food intake difficult. Traditional dietary assessment methods, such as questionnaires, are often labor-intensive and inaccurate. The need for real-time, userfriendly nutrition tools has grown, especially after the COVID-19 pandemic. This paper introduces VietFood67, the biggest Vietnamese food dataset, featuring 33,003 images across 68 classes, including human face detection, built on VietFood57. A fine-tuned YOLOv10 model achieved a mAP50 score of 0.92, showing strong performance on the larger dataset. Additionally, the enhanced FoodDetector website now offers real-time nutritional information for detected dishes. A user study with 35 participants showed high satisfaction and increased nutritional awareness, highlighting the system’s potential to encourage healthier eating habits through efficient, online dietary tracking.",
  },
  {
    title:
      "Navigating Nutrition: Online Grocery Solutions with Traffic Light Labels and AI Support in Vietnam",
    authors: "Nguyen, V. H. N., Tran, B. T., Nguyen, S. H., & Vi, C. T.",
    year: 2024,
    datePublished: "2024/10/28",
    venue: "International University Annual Scientific Conference",
    url: "https://drive.google.com/file/d/1mbRsFIv5GcVdwPfHO66movCc8WN9yFca/view?usp=sharing",
    abstract:
      "Online grocery shopping offers convenience, yet many Vietnamese platforms lack effective nutritional labeling tools. Mandatory nutritional labels help consumers make healthier food choices in regions like the U.S. and EU by providing clear, accessible information. This study examines the impact of the traffic light labeling system on Vietnamese consumers’ shopping behavior and the role of an AI assistant in enhancing user experience. In Study One, 24 participants evaluated visualization methods, with the traffic light system proving the most effective. Study Two compared food choices on two website versions—one with and one without traffic light labels—among 22 participants. Study Three engaged 21 participants, focusing on personalized recommendations provided by the AI assistant to improve their shopping experience. Results showed that traffic light labels significantly reduced selected items’ total energy, fat, sugar, and salt content. Additionally, the AI assistant enhanced the user experience, with many participants recommending its integration into other grocery platforms. These findings highlight the potential of traffic light labeling and AI assistance to promote healthier food choices in Vietnam’s online grocery market.",
  },
];

export const bookChapters = [
  {
    title:
      "It’s Yummy: Real-Time Detection and Recognition of Vietnamese Dishes",
    authors: "Nguyen, V. H. N., & Vi, C. T.",
    year: 2025,
    datePublished: "2025/05/13",
    venue:
      "In A. Bijalwan (Ed.), Navigating Computing Challenges for a Sustainable World (pp. 1–16). IGI Global Scientific Publishing",
    url: "https://doi.org/10.4018/979-8-3373-0462-5.ch001",
    doi: "10.4018/979-8-3373-0462-5.ch001",
    abstract:
      "In today’s fast-paced society, the demands of work often overshadow the importance of healthy eating habits across various age groups. Poor dietary choices and irregular food consumption can lead to significant health issues, highlighting the need for tools that promote better eating behaviors. This paper presents VietFood57, a comprehensive Vietnamese food dataset consisting of 22,920 images across 57 local dish categories, along with an additional class for human faces, all annotated with bounding boxes. The YOLOv10 object detection model was fine-tuned on this dataset, achieving a high accuracy rate of 93.4%, surpassing previous results in Vietnamese food detection. Furthermore, FoodDetector, a web application integrating the model, was developed for real-time analysis of images, videos, webcams, and IP cameras. This system facilitates remote monitoring of eating behaviors in the elderly and assists users of all ages in tracking food intake, ultimately supporting healthier dietary habits across the population.",
  },
];

function getLatestJob() {
  if (!workExperience || workExperience.length === 0) return null;
  const latest = workExperience[0];
  return {
    title: latest.position,
    company: latest.company,
  };
}

export const latestJob = getLatestJob();

export const jobTitle = latestJob?.title || "Software Engineer";

const parseDateRange = (dateString: string) => {
  if (!dateString) return {};
  const [start, end] = dateString.split("–").map((s) => s.trim());
  return {
    startDate: start || undefined,
    endDate: end && end.toLowerCase() !== "now" ? end : undefined,
  };
};
const parseLocation = (loc: string) => {
  if (!loc) return {};
  const [city, country] = loc.split(",").map((s) => s.trim());
  return {
    addressLocality: city || undefined,
    addressCountry: country || undefined,
  };
};
const occupationSchema = workExperience.map((exp) => {
  const { startDate, endDate } = parseDateRange(exp.date);
  const { addressLocality, addressCountry } = parseLocation(
    exp.location ? exp.location : "Ho Chi Minh City, Vietnam"
  );
  return {
    "@type": "Occupation",
    name: exp.position,
    hiringOrganization: exp.company
      ? {
          "@type": "Organization",
          name: exp.company,
        }
      : undefined,
    startDate,
    endDate,
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: addressLocality,
        addressCountry: addressCountry,
      },
    },
    description: exp.responsibilities
      ? exp.responsibilities.join(" ")
      : undefined,
  };
});

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyen Viet Hoang Nam",
  jobTitle: `${jobTitle} / HCI Researcher`,
  hasOccupation: occupationSchema,
  affiliation: "International University, VNU-HCMC",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://nguyenviethoangnam.vercel.app",
  },
  knowsAbout: [
    "Computer Vision",
    "Human Behavior",
    "FlavorSync",
    jobTitle,
    "Java Developer",
    "AI in Nutrition",
    "VietFood67",
    "FoodDetector",
    "Human-computer Interaction (HCI)",
  ],
  url: "https://nguyenviethoangnam.vercel.app",
  sameAs: [
    "https://github.com/nvhnam",
    "https://orcid.org/0009-0005-7710-6385",
    "https://scholar.google.com/citations?user=EjUQvtUAAAAJ&hl=en",
    "https://linkedin.com/in/nvhnam01",
  ],
};

export const descriptionText = `Nguyen Viet Hoang Nam is a ${jobTitle} at ${latestJob?.company} and a Human-Computer Interaction researcher focused on AI, AR/VR, and computer vision. Explore his research, conference activities, and technical projects.`;

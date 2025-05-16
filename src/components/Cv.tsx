import Link from "next/link";
import { MY_CV_URL } from "@/constants";

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>

      <div className=" mb-10">
        <Link
          href={MY_CV_URL}
          download
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Download PDF
        </Link>
      </div>

      <div className="border rounded-md overflow-hidden h-[80vh] mb-6">
        <iframe
          src={MY_CV_URL}
          className="w-full h-[80vh]"
          title="Nguyen Viet Hoang Nam CV"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

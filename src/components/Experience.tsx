export default function Experience() {
  return (
    <section id="experience" className="mt-10">
      {/* <h2 className="text-3xl font-bold mb-6">Experience</h2> */}
      <span className="sr-only">
        <strong>Nguyen Viet Hoang Nam</strong> is a researcher in HCI and
        computer vision, with works like VietFood67 and FoodDetector.
      </span>
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Yusen Logistics Co., Ltd.
            </h3>
            <p className="italic text-gray-700">IT Support Intern</p>
          </div>
          <div className="text-sm text-right mt-2 sm:mt-0">
            <p className="text-gray-900 font-medium">
              July 2023 – October 2023
            </p>
            <p className="italic text-gray-600">Ho Chi Minh City, Vietnam</p>
          </div>
        </div>

        <ul className="list-disc list-inside mt-3 space-y-2 text-[17px] leading-relaxed text-gray-800">
          <li>
            Diagnosed and resolved technical issues across office workstations.
          </li>
          <li>
            Wrote clear documentation for troubleshooting processes and software
            installations, improving support efficiency and technical
            communication.
          </li>
          <li>
            Supported internal users with Microsoft Office, email systems, and
            basic network issues.
          </li>
        </ul>
      </div>
    </section>
  );
}

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className={"bg-gradient-to-b from-gray-800 to-black text-white min-h-screen"}>
      <Navbar/>
      <main className={"max-w-4xl mx-auto py-12 px-6"}>
        <h1 className={"text-4xl font-bold mb-6 text-center"}>About Me</h1>

        {/* Quick Bio Section */}
        <section className="mb-12">
          <h2 className={"text-2xl font-semibold mb-2"}>My Journey</h2>
          <ul className={"space-y-3 text-gray-300"}>
            <li>🇲🇾 Began my adventure from Malaysia to the U.S. to pursue Computer Engineering.</li>
            <li>💻 Passionate about software development, from frontend UI to backend systems.</li>
            <li>🛠 Always building—whether it's web apps, personal projects, or hands-on work with wood, metal, and
              vehicles.
            </li>
            <li>🚀 Aspiring entrepreneur, aiming to launch my own business.</li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className={"mb-12"}>
          <h2 className={"text-2xl font-semibold mb-4"}>Work Experience</h2>
          <div className={"space-y-6"}>
            {/* Energy Domain */}
            <div className={"bg-gray-700 p-6 rounded-lg shadow"}>
              <h3 className={"text-xl font-semibold"}>Full Stack Software Developer</h3>
              <p className={"text-gray-400"}>June 2023 — June 2024 | Energy Domain, Fort Worth, TX</p>
              <ul className={"list-disc list-inside text-gray-300 mt-2"}>
                <li>Revamped an existing Django-based frontend with React, improving UI responsiveness.</li>
                <li>Optimized a live WebSocket bidding system for seamless real-time interactions.</li>
                <li>Enhanced an old Django API by integrating JWT authentication and performance upgrades.</li>
                <li>Collaborated with an external developer to ensure smooth React frontend integration.</li>
                <li>Implemented D3.js charts for better data visualization in the oil & gas industry.</li>
              </ul>
            </div>

            {/* Dynamic Medical Management Solutions */}
            <div className={"bg-gray-700 p-6 rounded-lg shadow"}>
              <h3 className={"text-xl font-semibold"}>Full Stack Software Developer</h3>
              <p className={"text-gray-400"}>Aug 2021 — May 2023 | Dynamic Medical Management Solutions, Columbia, MO</p>
              <ul className={"list-disc list-inside text-gray-300 mt-2"}>
                <li>Developed a web app automating AWS Textract to PostgreSQL, boosting efficiency by 60%.</li>
                <li>Built a cross-platform medical billing system using Quasar (Vue.js) and Django.</li>
                <li>Containerized multi-tenant projects with Docker and automated CI/CD deployments.</li>
                <li>Generated SQL-based client reports and automated recurring reports via GitLab CI/CD.</li>
                <li>Led new feature implementations and actively contributed to code reviews.</li>
              </ul>
            </div>

            {/* Engineering Researcher */}
            <div className={"bg-gray-700 p-6 rounded-lg shadow"}>
              <h3 className={"text-xl font-semibold"}>Engineering Researcher</h3>
              <p className={"text-gray-400"}>Aug 2020 — May 2021 | University of Missouri, Columbia</p>
              <ul className={"list-disc list-inside text-gray-300 mt-2"}>
                <li>Developed an object detection system using YOLOv3 and OpenCV.</li>
                <li>Designed an automatic room management system to enforce social distancing.</li>
                <li>Implemented I2C communication for multi-controller systems, improving performance.</li>
                <li>Documented and presented research findings to the PI and the team.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Personal Interests Section */}
        <section>
          <h2 className={"text-2xl font-semibold mb-4"}>Beyond Coding</h2>
          <p className={"text-gray-300"}>
            When I'm not developing software, you’ll find me crafting with wood and metal, fixing vehicles, or planning
            my future business ventures. I believe in building—both in the digital world and in real life.
          </p>
        </section>
      </main>
    </div>
  );
}

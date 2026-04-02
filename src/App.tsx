import Links from "./components/Links";

// Images
import wordle_image from "./assets/wordle.png";
import weather_image from "./assets/weather/weather-desktop.png";
import stepup_image from "./assets/stepup.png";
import picture from "./assets/me.png";
import Card from "./components/Card";

function App() {
  window.addEventListener("load", () => {
    selector: document.querySelector(".js-slider-wrapper");
  });

  return (
    <div className="min-h-screen flex flex-col snap-mandatory snap-y dark:bg-[#0d0d0f] dark:text-gray-100 ">
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Links />
      <section id="home" className="section">
        <div className="flex-col items-center w-full text-center space-y-4">
          <div className="flex justify-center">
            <img className="rounded-full w-40" src={picture} alt="picture" />
          </div>
          <h1 className="text-3xl font-bold">Hi, I'm Daniel Fernandes </h1>
          <div className="text-lg max-w-xl mx-auto ">
            I'm a Web Developer with a CTeSP in Web Development from ESTG -
            Politécnico do Porto. I enjoy building modern and responsive web
            applications, always looking to improve my skills and learn new
            technologies.
          </div>
        </div>
      </section>
      <section id="projects" className="section">
        <div className="flex-col items-center w-full">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Projects I've Build
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card
              image={stepup_image}
              title="StepUp"
              description="StepUp is a modern footwear e-commerce application developed to demonstrate a clean and scalable web architecture using modern technologies."
              demo_url="https://stepup-coral.vercel.app"
              github_url="https://github.com/DannySF01/stepup"
              tags={["NEXT.JS", "TAILWIND", "TYPESCRIPT", "SUPABASE"]}
            />
            <Card
              image={weather_image}
              title="Weather App"
              description="A weather forecasting web app that uses an API to display current weather conditions and temperatures for any city."
              demo_url="https://weather-app-three-coral-81.vercel.app"
              github_url="https://github.com/DannySF01/weather-app"
              tags={["NEXT.JS", "TYPESCRIPT", "TAILWIND"]}
            />
            <Card
              image={wordle_image}
              title="Wordle Clone"
              description="A JavaScript-based Wordle clone with interactive gameplay, animations, and dynamic word validation."
              demo_url="https://dannysf01.github.io/wordle-clone/"
              github_url="https://github.com/DannySF01/wordle-clone"
              tags={["HTML", "CSS", "JavaScript"]}
            />
            <Card
              image={undefined}
              title="E Commerce"
              description="An e-commerce website made with MERN stack"
              demo_url="https://dannysf01.github.io/mern-stack-app/"
              github_url="https://github.com/DannySF01/mern-stack-app"
              tags={[
                "TYPESCRIPT",
                "MONGODB",
                "EXPRESS",
                "REACT",
                "NODE.JS",
                "TAILWIND",
              ]}
            />

            <Card
              image={undefined}
              title="Task Manager"
              description="A simple task manager that allows adding, removing, and filtering tasks."
              demo_url="https://dannysf01.github.io/task-manager/"
              github_url="https://github.com/DannySF01/task-manager"
              tags={["HTML", "CSS", "JavaScript"]}
            />
          </div>
        </div>
      </section>
      <section id="skills" className="section section-odd-bg">
        <div className="flex-col items-center w-full">
          <h1 className="text-3xl font-bold mb-10 text-center">Skills</h1>
          <div className="text-center">
            <div className="items-center">
              <div className="mt-12 text-m">
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="HTML"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    />
                    HTML
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="CSS"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    />
                    CSS
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="JavaScript"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                    JavaScript
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="TypeScript"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    />
                    TypeScript
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="React"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    React
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="Tailwindcss"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    />
                    Tailwindcss
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="Nextjs"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    />
                    Nextjs
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="Node.js"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    />
                    Node.js
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="Express"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    />
                    Express
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold">
                    <img
                      alt="Git"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="sm:h-8 sm:w-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    />
                    Git
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-10 text-center">
          Professional Experience
        </h1>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="text-xl font-semibold">
              Web Developer Intern — Neoscopio SA
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Porto, Portugal | Mar 2021 – Jul 2021
            </p>
            <p>
              Worked on the development of a website and a mobile application,
              collaborating in both front-end and basic back-end tasks using
              HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="text-xl font-semibold">
              Administrative Assistant — Hospital da Misericórdia
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Castelo de Paiva, Portugal | 2018 – 2019
            </p>
            <p>
              Performed data entry, documentation updates, and information
              system management, gaining organizational and digital skills
              useful for structured web development workflows.
            </p>
          </div>
        </div>
      </section>
      <section id="education" className="py-20 section-odd-bg">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-10">Education</h1>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">
                CTeSP in Web and Mobile Development (Level 5 Certification)
              </h4>
              <p className="dark:text-gray-300">
                ESTG - Escola Superior de Tecnologia e Gestão | Politécnico do
                Porto (2019 – 2021)
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                High School Diploma - Technician for Management and Programming
                of IT Systems (Level 4 Certification)
              </h4>
              <p className="dark:text-gray-300">
                Escola Secundária de Castelo de Paiva (2016 – 2019)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 py-20 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Let's connect! I'm open to internships, junior web developer roles, or
          collaborations on exciting projects.
        </p>
        <div className="flex justify-center gap-6">
          <a
            className="hover:text-blue-800 transition"
            href="https://github.com/DannySF01"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className="svg-inline--fa fa-github w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-f-874186115"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v14h-4V8zm7.5 0h3.84v1.92h.05c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.21V22h-4v-6.97c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.66 1.8-2.66 3.67V22h-4V8z" />
            </svg>
          </a>
          <a
            href="mailto:danielsilva01-@hotmail.com"
            className="hover:text-blue-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4h16v16H4z"
              />
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 6l-10 7L2 6"
              />
            </svg>
          </a>
        </div>
      </section>
      <footer className="py-6 border-t text-center dark:border-[#1f1f22] dark:text-gray-400 text-gray-500 text-sm">
        © 2026 Daniel Fernandes | All rights reserved
      </footer>
    </div>
  );
}

export default App;

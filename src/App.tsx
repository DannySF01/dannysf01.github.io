import Links from "./components/Links";

// Images
import wordle_image from "./assets/wordle/wordle.png";
import weather_image from "./assets/weather/weather-desktop.png";
import stepup_image from "./assets/stepup.png";
import picture from "./assets/me.png";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
  window.addEventListener("load", () => {
    selector: document.querySelector(".js-slider-wrapper");
  });

  const skills = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Tailwindcss", icon: "tailwindcss" },
    { name: "Nextjs", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "Git", icon: "git" },
  ];

  return (
    <div className="min-h-screen flex flex-col snap-mandatory snap-y dark:bg-[#0d0d0f] dark:text-gray-100 ">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-zinc-50 dark:bg-[#050505]">
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full 
    bg-blue-500/40 dark:bg-blue-400/50 
    blur-[100px] animate-mesh-1 mix-blend-multiply dark:mix-blend-screen"
        />

        <div
          className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full 
    bg-purple-500/30 dark:bg-purple-400/40 
    blur-[100px] animate-mesh-2 mix-blend-multiply dark:mix-blend-screen"
        />

        <div
          className="absolute bottom-[-10%] left-[10%] w-[55%] h-[55%] rounded-full 
    bg-cyan-400/30 dark:bg-cyan-400/40 
    blur-[100px] animate-mesh-3 mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <Links />
      <Section id="home">
        <div className="flex flex-col items-center w-full text-center px-6">
          <div className="flex justify-center mb-8">
            <div className="p-1 rounded-full border-2 border-blue-500/20 dark:border-blue-500/10">
              <img
                className="rounded-full w-40 h-40 object-cover shadow-xl"
                src={picture}
                alt="Daniel Fernandes"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Daniel Fernandes
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-6">
            Full Stack Web Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm a Web Developer with a{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">
              CTeSP in Web Development
            </span>{" "}
            from ESTG - Politécnico do Porto. I specialize in building modern,
            responsive applications with a focus on clean code and user
            experience.
          </p>

          <div className="mt-10">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              View My Work
            </button>
          </div>
        </div>
      </Section>
      <Section id="projects">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center w-full">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                Featured Projects
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
                description="A clone of the popular game Wordle."
                demo_url="https://dannysf01.github.io/wordle-clone/"
                github_url="https://github.com/DannySF01/wordle-clone"
                tags={["HTML", "CSS", "JAVASCRIPT"]}
              />
              <Card
                image={undefined}
                title="E Commerce"
                description="An e-commerce website made with MERN stack"
                demo_url="https://dannysf01.github.io/mern-stack-app/"
                github_url="https://github.com/DannySF01/mern-stack-app"
                tags={["TYPESCRIPT", "MONGODB", "EXPRESS", "REACT", "NODE.JS"]}
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
        </div>
      </Section>
      <Section id="skills">
        <div className="flex flex-col items-center w-full px-6">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Technical Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-xl bg-zinc-50 dark:bg-[#111113] border border-gray-200 dark:border-[#1f1f22] px-5 py-3 font-semibold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <img
                  alt={skill.name}
                  loading="lazy"
                  width="32"
                  height="32"
                  className="w-8 h-8 object-contain"
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                />
                <span className="text-zinc-800 dark:text-zinc-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="experience">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Experience
          </h2>

          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0">
            <div className="mb-12 ml-8 relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-[#0d0d0f]" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Web Developer Intern
                </h4>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Mar 2021 – Jul 2021
                </span>
              </div>

              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-400 mb-3">
                Neoscopio SA —{" "}
                <span className="text-zinc-500">Porto, Portugal</span>
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                Worked on the development of a website and a mobile application,
                collaborating in both front-end and basic back-end tasks using
                <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                  {" "}
                  HTML, CSS, and JavaScript.
                </span>
              </p>
            </div>

            <div className="mb-8 ml-8 relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-400 border-4 border-white dark:border-[#0d0d0f]" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Administrative Assistant
                </h4>
                <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                  2018 – 2019
                </span>
              </div>

              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-400 mb-3">
                Hospital da Misericórdia —{" "}
                <span className="text-zinc-500">Castelo de Paiva</span>
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                Performed data entry, documentation updates, and information
                system management, gaining organizational and digital skills
                useful for structured web development workflows.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section id="education">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Education
          </h2>

          <div className="grid gap-6">
            <div className="group relative p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#111113] shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                      Level 5 Certification
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    CTeSP in Web and Mobile Development
                  </h4>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    ESTG — Politécnico do Porto
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-500">
                    2019 — 2021
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#111113] shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                      Level 4 Certification
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    Management and Programming of IT Systems
                  </h4>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    Escola Secundária de Castelo de Paiva
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-500">
                    2016 — 2019
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Available for Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Let's build something{" "}
            <span className="text-blue-600">together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for junior web developer roles or internship
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="mailto:danielsilva01-@hotmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
            >
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-f-874186115"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#111113] border border-gray-200 dark:border-zinc-800 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </Section>
      <footer className="relative py-12 mt-20 border-t border-gray-100 dark:border-[#1f1f22] overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        <div className="container mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center text-gray-500 text-sm font-medium">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()}
              <span className="text-zinc-800 dark:text-zinc-300">
                Daniel Fernandes
              </span>
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mt-4">
            Aveiro, Portugal • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

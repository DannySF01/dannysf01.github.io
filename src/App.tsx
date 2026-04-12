import Links from "./components/Links";

// Images
import wordle_image from "./assets/wordle/wordle.png";
import weather_image from "./assets/weather/weather-desktop.png";
import stepup_image from "./assets/stepup.png";
import picture from "./assets/me.png";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
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
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <div className="orb w-screen h-[100vw] -top-[30%] -left-[20%] bg-accent/0.5 animate-mesh-1" />
        <div className="orb w-[80vw] h-[80vw] top-[10%] -right-[10%] bg-[oklch(0.6_0.1_300/0.5)] animate-mesh-2" />
        <div className="orb w-[70vw] h-[70vw] -bottom-[20%] left-[10%] bg-[oklch(0.7_0.1_220/0.5)] animate-mesh-3" />
      </div>

      <div className="relative z-10">
        <Links />
        <Section id="home">
          <div className="flex flex-col items-center w-full text-center px-6">
            <div className="flex justify-center mb-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-accent to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                <div className="relative p-1 rounded-full border border-card-border bg-card backdrop-blur-md shadow-2xl">
                  <img
                    className="rounded-full w-40 h-40 object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                    src={picture}
                    alt="Daniel Fernandes"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 text-ink">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-accent via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Daniel Fernandes
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-ink/60 mb-6 tracking-tight">
              Full Stack Web Developer
            </h2>

            <p className="text-lg md:text-xl text-ink/80 max-w-2xl mx-auto leading-relaxed font-normal">
              I'm a Web Developer with a{" "}
              <span className="text-accent font-semibold italic">
                CTeSP in Web Development
              </span>{" "}
              from ESTG - Politécnico do Porto. I specialize in building modern,
              responsive applications.
            </p>

            <div className="mt-12">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-4 bg-ink text-canvas rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-accent/20"
              >
                <span className="relative z-10">View My Work</span>
                {/* Efeito de brilho interno no hover */}
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </Section>

        <Section id="projects" className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col items-center w-full">
              <div className="mb-16 text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                  Featured Projects
                </h2>
                <div className="h-1.5 w-12 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(var(--color-accent),0.5)]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <Card
                  image={stepup_image}
                  title="StepUp"
                  description="A modern footwear e-commerce application demonstrating clean, scalable web architecture."
                  demo_url="https://stepup-coral.vercel.app"
                  github_url="https://github.com/DannySF01/stepup"
                  tags={["Next.js", "Tailwind", "TypeScript"]}
                />

                <Card
                  image={weather_image}
                  title="Weather App"
                  description="Real-time forecasting app using modern APIs to display global weather conditions."
                  demo_url="https://weather-app-three-coral-81.vercel.app"
                  github_url="https://github.com/DannySF01/weather-app"
                  tags={["Next.js", "TypeScript", "Tailwind"]}
                />

                <Card
                  image={wordle_image}
                  title="Wordle Clone"
                  description="A clone of the popular game Wordle, developed to be loyal to the original, with complex logic and fluid animations."
                  demo_url="https://dannysf01.github.io/wordle-clone/"
                  github_url="https://github.com/DannySF01/wordle-clone"
                  tags={["HTML", "CSS", "JavaScript"]}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" className="py-24">
          <div className="flex flex-col items-center w-full px-6">
            <div className="mb-16 text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Technical Skills
              </h2>
              <div className="h-1.5 w-12 bg-accent mx-auto rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-2xl bg-surface-raised border border-border-subtle px-6 py-3.5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
                >
                  <div className="relative">
                    <img
                      alt={skill.name}
                      loading="lazy"
                      width="32"
                      height="32"
                      className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                    />
                  </div>

                  <span className="font-bold tracking-tight text-ink/90 group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Experience
              </h2>
              <div className="h-1.5 w-12 bg-accent mx-auto rounded-full" />
            </div>

            <div className="relative border-l-2 border-border-subtle ml-4 md:ml-0">
              <div className="mb-16 ml-8 relative group">
                <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-accent border-3 border-canvas shadow-[0_0_10px_rgba(var(--color-accent),0.3)] transition-transform group-hover:scale-125" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                  <h4 className="text-2xl font-bold text-ink">
                    Web Developer Intern
                  </h4>
                  <span className="text-sm font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                    Mar 2021 – Jul 2021
                  </span>
                </div>

                <p className="text-lg font-medium text-ink/80 mb-4">
                  Neoscopio SA —{" "}
                  <span className="text-ink/50">Porto, Portugal</span>
                </p>

                <div className="glass-card p-6">
                  <p className="text-ink/70 leading-relaxed">
                    Collaborated on front-end and back-end development for web
                    and mobile platforms using
                    <span className="text-ink font-semibold italic">
                      {" "}
                      HTML, CSS, and JavaScript.
                    </span>
                  </p>
                </div>
              </div>

              <div className="mb-8 ml-8 relative group">
                <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-border-subtle border-3 border-canvas transition-transform group-hover:scale-125" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                  <h4 className="text-2xl font-bold text-ink">
                    Administrative Assistant
                  </h4>
                  <span className="text-sm font-bold text-ink/40 uppercase tracking-widest">
                    2018 – 2019
                  </span>
                </div>

                <p className="text-lg font-medium text-ink/80 mb-4">
                  Hospital da Misericórdia —{" "}
                  <span className="text-ink/50">Castelo de Paiva</span>
                </p>

                <div className="glass-card p-6 border-dashed opacity-80">
                  <p className="text-ink/70 leading-relaxed">
                    Managed data entry and information systems, developing
                    organizational workflows that now enhance my structured
                    approach to web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Education
              </h2>
              <div className="h-1.5 w-12 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid gap-6">
              <div className="glass-card group relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest border border-accent/20">
                        Level 5 Certification
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-ink mb-1 group-hover:text-accent transition-colors">
                      CTeSP in Web and Mobile Development
                    </h4>
                    <p className="text-lg text-ink/70 font-medium">
                      ESTG — Politécnico do Porto
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 rounded-lg bg-canvas border border-border-subtle text-sm font-bold text-ink/50">
                      2019 — 2021
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card group relative opacity-90">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-bold uppercase tracking-widest border border-border-subtle">
                        Level 4 Certification
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-ink mb-1 group-hover:text-ink/70 transition-colors">
                      Management and Programming of IT Systems
                    </h4>
                    <p className="text-lg text-ink/70 font-medium">
                      Escola Secundária de Castelo de Paiva
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 rounded-lg bg-canvas border border-border-subtle text-sm font-bold text-ink/50">
                      2016 — 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-accent/10 border border-accent/20 animate-pulse">
              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
                Available for Work
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-ink">
              Let's build something{" "}
              <span className="text-accent">together</span>
            </h2>

            <p className="text-lg md:text-xl text-ink/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm currently looking for junior web developer roles or internship
              opportunities. Whether you have a question or just want to say hi,
              my inbox is always open!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:danielsilva01-@hotmail.com"
                className="w-full sm:w-auto px-10 py-4 bg-ink text-canvas font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/10 flex items-center justify-center gap-2"
              >
                Send an Email
              </a>

              <a
                href="https://www.linkedin.com/in/daniel-f-874186115"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-ink flex items-center justify-center gap-2"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[120px] -z-10 rounded-full" />
        </Section>

        <footer className="relative py-16 mt-20 border-t border-border-subtle overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"></div>

          <div className="container mx-auto px-6 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <p className="flex items-center gap-2 text-ink/50 font-medium">
                <span>© {new Date().getFullYear()}</span>
                <span className="h-4 w-px bg-border-subtle" />{" "}
                <span className="text-ink font-bold tracking-tight">
                  Daniel Fernandes
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink/30 font-bold">
                Aveiro, Portugal • All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

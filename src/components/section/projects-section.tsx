import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-3 items-center justify-center text-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="border bg-primary/10 border-primary/20 rounded-full px-3.5 py-1 shadow-xs">
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">Portfolio & Systems</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
          <div className="flex flex-col gap-y-2 items-center justify-center max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects & Systems</h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-balance">
              From flagship cybersecurity ML platforms to full-stack fintech applications, AI chatbots, and robotics simulations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.04}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

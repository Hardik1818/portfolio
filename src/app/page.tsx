/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, Award, ExternalLink, GraduationCap, Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-12 sm:gap-16 relative">
      {/* Hero Section */}
      <section id="hero" className="w-full">
        <div className="mx-auto w-full space-y-6">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3 flex-1 min-w-0">

              <BlurFadeText
                delay={BLUR_FADE_DELAY * 1.5}
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />

              <BlurFadeText
                className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed text-pretty"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="shrink-0 self-center md:self-auto">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />
                <Avatar className="relative size-28 sm:size-32 md:size-36 border-2 border-background/80 rounded-full shadow-xl ring-2 ring-border/50 overflow-hidden">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover"
                    style={{ objectPosition: "center bottom" }}
                  />
                  <AvatarFallback className="text-lg font-semibold">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground dark:prose-invert bg-card/40 border border-border/60 rounded-2xl p-4 sm:p-5 shadow-xs">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Experience & Fellowships</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target={education.href.startsWith("http") ? "_blank" : undefined}
                  rel={education.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between group p-4 rounded-2xl border border-border/70 bg-card/50 hover:bg-card/90 transition-all hover:border-primary/30 shadow-xs"
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <div className="size-9 sm:size-10 rounded-full border border-primary/20 bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shadow-xs flex-none">
                      <GraduationCap className="size-4" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold text-sm sm:text-base leading-snug flex items-center gap-2">
                        <span>{education.school}</span>
                        {education.href.startsWith("http") && (
                          <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                        )}
                      </div>
                      <div className="font-sans text-xs sm:text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground pl-12.5 sm:pl-0 flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Skills & Tech Stack</h2>
          </BlurFade>
          
          {/* Primary Featured Skills */}
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.03}>
                <div className="border border-border/80 bg-card/80 hover:bg-card rounded-xl h-9 px-3.5 flex items-center gap-2 shadow-xs hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-xs sm:text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Extended Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {DATA.allSkills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.02}>
                <Badge
                  variant="secondary"
                  className="text-[11px] sm:text-xs px-2.5 py-0.5 font-normal bg-muted/60 dark:bg-muted/40 hover:bg-muted text-foreground/90 border border-border/50"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* Hackathons */}
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* Certifications & Credentials */}
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex items-center gap-2">
              <Award className="size-5 text-primary" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Certifications & Credentials</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DATA.certifications.map((cert, index) => (
              <BlurFade
                key={cert.title + cert.issuer}
                delay={BLUR_FADE_DELAY * 15 + index * 0.04}
              >
                <div className="group relative border border-border/70 bg-card/60 hover:bg-card/90 rounded-2xl p-4 flex flex-col justify-between h-full shadow-xs hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-xs sm:text-sm leading-snug group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      {cert.link && (
                        <Link
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary shrink-0 mt-0.5 p-0.5 rounded"
                          aria-label={`Open certificate for ${cert.title}`}
                        >
                          <ExternalLink className="size-3.5" />
                        </Link>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                    <span>{cert.date}</span>
                    {cert.credentialId && (
                      <span className="bg-muted px-1.5 py-0.5 rounded text-[10px]">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

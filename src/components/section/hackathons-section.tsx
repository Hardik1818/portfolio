/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Trophy } from "lucide-react";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-3 items-center justify-center text-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="border bg-primary/10 border-primary/20 rounded-full px-3.5 py-1 shadow-xs">
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">Hackathons & Programs</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
          <div className="flex flex-col gap-y-2 items-center justify-center max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Collaborative Sprints & Fellowships</h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-balance">
              Building rapid prototypes, collaborating in high-stakes hackathons, and participating in nationwide data fellowships.
            </p>
          </div>
        </div>

        <Timeline className="px-0 sm:px-2">
          {DATA.hackathons.map((hackathon) => (
            <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-3 sm:gap-6">
              <TimelineConnectItem className="flex items-start justify-center">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-9 sm:size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow-xs ring-1 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-9 sm:size-10 rounded-full border border-primary/20 bg-primary/10 text-primary flex items-center justify-center shadow-xs flex-none z-10">
                    <Trophy className="size-4" />
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-1.5 min-w-0 bg-card/40 border border-border/70 rounded-xl p-4 shadow-xs hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-semibold text-sm sm:text-base leading-snug">{hackathon.title}</h3>
                  {hackathon.dates && (
                    <time className="text-[11px] font-mono text-muted-foreground shrink-0">{hackathon.dates}</time>
                  )}
                </div>
                {hackathon.location && (
                  <p className="text-xs text-muted-foreground font-medium">{hackathon.location}</p>
                )}
                {hackathon.description && (
                  <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                    {hackathon.description}
                  </p>
                )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-2 flex flex-row flex-wrap items-start gap-1.5">
                    {hackathon.links.map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1 text-[11px] bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 shadow-none font-medium">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}

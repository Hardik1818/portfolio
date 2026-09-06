import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-3 sm:bottom-4 z-40 px-3 flex justify-center">
      <Dock className="z-50 pointer-events-auto relative h-13 sm:h-14 p-1.5 sm:p-2 max-w-full w-fit mx-auto flex items-center gap-1 sm:gap-2 border border-border/70 bg-card/80 dark:bg-card/75 backdrop-blur-2xl shadow-lg shadow-primary/5 rounded-full ring-1 ring-border/20">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                >
                  <DockIcon className="rounded-full cursor-pointer size-9 sm:size-10 bg-background/80 p-0 text-muted-foreground hover:text-foreground hover:bg-muted/80 backdrop-blur-md border border-border/60 transition-colors shadow-xs">
                    <item.icon className="size-4 sm:size-4.5 rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-3.5 py-1.5 text-xs font-medium shadow-md"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-6 sm:h-7 m-auto w-px bg-border/80 mx-0.5"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http") || social.url.startsWith("mailto");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal && !social.url.startsWith("mailto") ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={name}
                  >
                    <DockIcon className="rounded-full cursor-pointer size-9 sm:size-10 bg-background/80 p-0 text-muted-foreground hover:text-foreground hover:bg-muted/80 backdrop-blur-md border border-border/60 transition-colors shadow-xs">
                      <IconComponent className="size-4 sm:size-4.5 rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-3.5 py-1.5 text-xs font-medium shadow-md"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-6 sm:h-7 m-auto w-px bg-border/80 mx-0.5"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-full cursor-pointer size-9 sm:size-10 bg-background/80 p-0 text-muted-foreground hover:text-foreground hover:bg-muted/80 backdrop-blur-md border border-border/60 transition-colors shadow-xs">
              <ModeToggle className="size-full cursor-pointer flex items-center justify-center" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-3.5 py-1.5 text-xs font-medium shadow-md"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </nav>
  );
}

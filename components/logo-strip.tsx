import { cn } from "@/lib/utils";

interface LogoStripProps {
  className?: string;
}

// Placeholder wordmarks — replace with real client SVG/PNG logos when available.
const clients = [
  { id: "01", name: "KOVOTECH", style: "text-lg font-semibold tracking-tight" },
  { id: "02", name: "Meridia", style: "font-serif text-xl italic" },
  { id: "03", name: "BRAVOS", style: "text-sm font-bold uppercase tracking-[0.3em]" },
  { id: "04", name: "lignum", style: "text-xl font-medium lowercase tracking-wide" },
  { id: "05", name: "Artemo Group", style: "text-lg font-semibold tracking-tight" },
  { id: "06", name: "SILVERIT", style: "font-mono text-base tracking-widest" },
];

const LogoStrip = ({ className }: LogoStripProps) => {
  return (
    <div className={cn(className)}>
      <div className="overflow-hidden">
        <div className="-mt-px -ml-px grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="relative flex h-36 items-center justify-center border-t border-l lg:h-40"
            >
              <span className="absolute top-3 left-4 text-xs text-muted-foreground/70">
                {client.id}
              </span>
              <span
                className={cn(
                  "text-foreground/75 transition-colors hover:text-foreground",
                  client.style,
                )}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { LogoStrip };

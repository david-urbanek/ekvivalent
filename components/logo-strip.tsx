import { cn } from "@/lib/utils";

interface LogoStripProps {
  className?: string;
}

// Logos are unified to a single gray tone via CSS filters:
// - transparent-background logos are flattened with brightness-0 + opacity
// - Credium (solid color box with white text) keeps its shape via grayscale
const clients = [
  {
    id: "01",
    name: "Minority Investments",
    image: "/firm-logos/minority-investments.webp",
    imgClass: "max-h-12 brightness-0 opacity-45",
  },
  {
    id: "02",
    name: "Dürr",
    image: "/firm-logos/durr.webp",
    // White text knocked out of a solid box — grayscale + invert flips it to
    // dark letters, brightness blows the box out so only the wordmark remains
    imgClass: "max-h-20 [filter:grayscale(1)_invert(1)_brightness(1.5)] opacity-45",
  },
  {
    id: "03",
    name: "Spilberk",
    image: "/firm-logos/spilberk.webp",
    imgClass: "max-h-9 brightness-0 opacity-45",
  },
  {
    id: "04",
    name: "Credium",
    image: "/firm-logos/credium.webp",
    imgClass: "max-h-16 grayscale opacity-55",
  },
  {
    id: "05",
    name: "Rentback",
    image: "/firm-logos/rentback.svg",
    imgClass: "max-h-7 brightness-0 opacity-45",
  },
];

const LogoStrip = ({ className }: LogoStripProps) => {
  return (
    <div className={cn(className)}>
      <div className="overflow-hidden">
        <div className="-mt-px -ml-px grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={cn(
                "relative h-36 items-center justify-center border-t border-l px-8 lg:h-40",
                index === 4 ? "hidden md:flex" : "flex",
              )}
            >
              <span className="absolute top-3 left-4 text-xs text-muted-foreground/70">
                {client.id}
              </span>
              <img
                src={client.image}
                alt={client.name}
                className={cn(
                  "w-auto max-w-full object-contain transition-opacity hover:opacity-80",
                  client.imgClass,
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { LogoStrip };

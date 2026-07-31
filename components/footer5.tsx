import { FaLinkedin } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterSocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterBasicProps {
  sections?: FooterSection[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  className?: string;
}

interface Footer5Props extends FooterBasicProps {}
type Props = Partial<Footer5Props>;

const defaultProps: Footer5Props = {
  sections: [
    {
      title: "Služby",
      links: [
        { name: "Zvýšení hodnoty firmy", href: "/sluzby/zvyseni-hodnoty-firmy" },
        { name: "Prodej firmy", href: "/sluzby/prodej-firmy" },
        { name: "Koupě firmy", href: "/sluzby/koupe-firmy" },
        { name: "Management Buy-Out", href: "/sluzby/management-buy-out" },
        { name: "Generační obměna", href: "/generacni-obmena" },
      ],
    },
    {
      title: "Společnost",
      links: [
        { name: "O nás", href: "/#o-nas" },
        { name: "Kontakt", href: "/#kontakt" },
      ],
    },
    {
      title: "Kontakt",
      links: [
        { name: "info@ekvivalent.cz", href: "mailto:info@ekvivalent.cz" },
        { name: "+420 603 488 705", href: "tel:+420603488705" },
        { name: "Příčná 1892/4, Praha 1", href: "#" },
        { name: "IČO: 078 13 473", href: "#" },
      ],
    },
  ],
  socialLinks: [
    {
      icon: <FaLinkedin className="size-5" />,
      href: "https://www.linkedin.com/company/ekvivalent-capital/",
      label: "LinkedIn",
    },
  ],
  copyright: "© 2025 ekvivalent s.r.o. Diskrétnost a dlouhodobé partnerství jsou základem naší práce.",
};

const MAX_SECTIONS = 4;
const MAX_SOCIAL_LINKS = 5;

const Footer5 = (props: Props) => {
  const { sections, socialLinks, copyright, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);
  const visibleSocialLinks = (socialLinks ?? []).slice(0, MAX_SOCIAL_LINKS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {/* Brand column */}
            <div className="col-span-2 flex flex-col justify-between gap-8 lg:col-span-1">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-tight">
                  ekvivalent s.r.o.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  M&A poradenství a strategický rozvoj rodinných firem.
                </p>
              </div>
              {visibleSocialLinks.length > 0 && (
                <ul className="flex flex-wrap items-center gap-2">
                  {visibleSocialLinks.map((social, idx) => (
                    <li key={idx}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <span className="flex size-10 items-center justify-center rounded-sm bg-muted transition-colors hover:text-primary [&_svg]:size-5">
                          {social.icon}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Nav sections */}
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-center text-xs font-medium text-muted-foreground">
              {copyright}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer5 };

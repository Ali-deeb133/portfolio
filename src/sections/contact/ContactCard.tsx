import type { SocialLink } from '../../shared/data/types';

function ContactCard({ link }: { link: SocialLink }) {
  // mailto: links should not open a new tab
  const isExternal = link.href.startsWith('http');

  return (
    <a
      href={link.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-tint bg-background p-6 shadow-sm transition duration-300 hover:border-primary hover:shadow-lg motion-safe:hover:-translate-y-1"
    >
      {/* "group-hover" styles react to hovering the whole card, not just the icon */}
      <span className="rounded-full bg-tint p-4 text-primary-dark transition-colors group-hover:bg-primary-dark group-hover:text-white">
        <link.icon className="size-6" />
      </span>
      <span className="font-semibold">{link.label}</span>
    </a>
  );
}

export default ContactCard;

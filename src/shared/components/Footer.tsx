import { a11y, footer, socialLinks } from '../data/data';

function Footer() {
  return (
    <footer className="border-t border-tint">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">{footer.copyright}</p>

        <ul aria-label={a11y.socialLinks} className="flex gap-4">
          {socialLinks.map((link) => {
            // mailto: links should not open a new tab
            const isExternal = link.href.startsWith('http');
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-muted transition-colors hover:text-primary-dark"
                >
                  <link.icon className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

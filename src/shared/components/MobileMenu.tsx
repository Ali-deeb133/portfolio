import { motion } from 'framer-motion';
import type { NavLink, SectionId } from '../data/types';

interface MobileMenuProps {
  id: string;
  links: NavLink[];
  activeId: SectionId;
  onNavigate: () => void;
}

function MobileMenu({ id, links, activeId, onNavigate }: MobileMenuProps) {
  return (
    <motion.ul
      id={id}
      className="absolute inset-x-0 top-full flex flex-col gap-1 bg-background px-6 py-4 shadow-md md:hidden"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
    >
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={onNavigate}
            aria-current={link.id === activeId ? 'location' : undefined}
            className={`block rounded-lg px-3 py-2 transition-colors ${
              link.id === activeId
                ? 'bg-tint-soft font-semibold text-primary-dark'
                : 'text-muted hover:text-ink'
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </motion.ul>
  );
}

export default MobileMenu;

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { a11y, navLinks, site } from '../data/data';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import MobileMenu from './MobileMenu';

const sectionIds = navLinks.map((link) => link.id);
const mobileMenuId = 'mobile-menu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Transparent at the very top; solid once scrolled or when the menu is open
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'bg-background/80 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label={a11y.mainNav}
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a href="#home" className="text-lg font-bold">
          {site.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={link.id === activeId ? 'location' : undefined}
                className={`transition-colors ${
                  link.id === activeId
                    ? 'font-semibold text-primary-dark'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-label={menuOpen ? a11y.closeMenu : a11y.openMenu}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* AnimatePresence lets the menu play its exit animation before it is removed */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            id={mobileMenuId}
            links={navLinks}
            activeId={activeId}
            onNavigate={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

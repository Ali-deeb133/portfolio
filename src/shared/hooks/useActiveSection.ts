import { useEffect, useState } from 'react';
import type { SectionId } from '../data/types';

// Returns the id of the section currently crossing the middle of the screen.
export function useActiveSection(ids: SectionId[]) {
  const [activeId, setActiveId] = useState<SectionId>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id as SectionId);
        }
      },
      // Shrinks the observed area to a thin line at the middle of the viewport
      { rootMargin: '-50% 0px -50% 0px' },
    );

    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

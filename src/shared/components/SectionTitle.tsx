import type { ReactNode } from 'react';

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold sm:text-4xl">
      {children}
      <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-primary" />
    </h2>
  );
}

export default SectionTitle;

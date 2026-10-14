import type { ReactNode } from 'react';
import type { Icon } from '../data/types';

interface TagProps {
  icon?: Icon;
  children: ReactNode;
}

// Small monospace chip, used for skills and project tech stacks.
function Tag({ icon: TagIcon, children }: TagProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-tint bg-tint-soft px-3 py-1.5 font-mono text-sm">
      {TagIcon && <TagIcon className="size-4 text-primary-dark" />}
      {children}
    </span>
  );
}

export default Tag;

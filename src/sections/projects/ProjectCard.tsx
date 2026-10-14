import { motion } from 'framer-motion';
import { Check, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import Button from '../../shared/components/Button';
import Tag from '../../shared/components/Tag';
import { projects } from '../../shared/data/data';
import type { Project } from '../../shared/data/types';
import ApiPreview from './ApiPreview';

function ProjectCard({ project }: { project: Project }) {
  // The backend card is wide: visual on the left, text on the right (from tablet up)
  const isBackend = project.kind === 'backend';
  // A project can set its own label; otherwise the shared "Live Demo" text is used
  const liveLabel = project.liveLabel ?? projects.liveButton;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-tint bg-background shadow-sm transition-shadow duration-300 hover:shadow-xl ${
        isBackend ? 'md:flex-row' : ''
      }`}
    >
      <div className={isBackend ? 'md:w-1/2' : ''}>
        {project.kind === 'backend' ? (
          <ApiPreview code={project.codeSample} />
        ) : (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h4 className="text-xl font-bold">{project.name}</h4>
        <p className="text-muted">{project.description}</p>

        {project.kind === 'backend' && (
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-muted">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary-dark" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        {/* mt-auto pushes the buttons to the bottom, so they line up across cards */}
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              ariaLabel={`${liveLabel}: ${project.name}`}
            >
              <ExternalLink className="size-4" />
              {liveLabel}
            </Button>
          )}
          <Button
            href={project.githubUrl}
            variant="secondary"
            ariaLabel={`${projects.githubButton}: ${project.name}`}
          >
            <SiGithub className="size-4" />
            {projects.githubButton}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

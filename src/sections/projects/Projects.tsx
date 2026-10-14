import { Info } from 'lucide-react';
import Reveal from '../../shared/components/Reveal';
import SectionTitle from '../../shared/components/SectionTitle';
import { projects } from '../../shared/data/data';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects" className="bg-tint-soft">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionTitle>{projects.heading}</SectionTitle>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 text-xl font-semibold">{projects.frontendHeading}</h3>
        </Reveal>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {projects.frontend.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.15}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 text-xl font-semibold">{projects.backendHeading}</h3>
        </Reveal>
        <div className="mt-6 grid gap-8">
          {projects.backend.map((project) => (
            <Reveal key={project.name}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 flex items-center gap-2 text-sm text-muted">
            <Info aria-hidden="true" className="size-4 shrink-0" />
            {projects.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;

import Reveal from '../../shared/components/Reveal';
import SectionTitle from '../../shared/components/SectionTitle';
import { skills } from '../../shared/data/data';
import SkillGroup from './SkillGroup';

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionTitle>{skills.heading}</SectionTitle>
      </Reveal>

      {/* divide-y draws a thin line between the rows */}
      <div className="mt-10 divide-y divide-tint">
        {skills.groups.map((group, index) => (
          // Each row appears slightly after the one above it
          <Reveal key={group.title} delay={index * 0.1}>
            <SkillGroup group={group} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;

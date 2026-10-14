import Reveal from '../../shared/components/Reveal';
import SectionTitle from '../../shared/components/SectionTitle';
import { about } from '../../shared/data/data';

function About() {
  return (
    <section id="about" className="bg-tint-soft">
      {/* Title on the left, text on the right (stacked on mobile) */}
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-24 md:grid-cols-3">
        <Reveal>
          <SectionTitle>{about.heading}</SectionTitle>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <p className="text-lg leading-relaxed text-muted">{about.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;

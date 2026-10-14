import Reveal from '../../shared/components/Reveal';
import SectionTitle from '../../shared/components/SectionTitle';
import { contact, socialLinks } from '../../shared/data/data';
import ContactCard from './ContactCard';

function Contact() {
  return (
    // min-h keeps this last section tall enough to reach the middle of the screen,
    // which is what marks "Contact" as active in the navbar
    <section id="contact" className="mx-auto min-h-[60vh] max-w-5xl px-6 py-24">
      <Reveal>
        <SectionTitle>{contact.heading}</SectionTitle>
        <p className="mt-6 max-w-2xl text-lg text-muted">{contact.text}</p>
      </Reveal>

      {/* Cards share the row equally (flex-1), however many links there are;
          below ~10rem each they wrap onto the next line */}
      <ul className="mt-10 flex flex-wrap gap-4 md:gap-6">
        {socialLinks.map((link, index) => (
          <li key={link.label} className="min-w-40 flex-1">
            <Reveal delay={index * 0.1}>
              <ContactCard link={link} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;

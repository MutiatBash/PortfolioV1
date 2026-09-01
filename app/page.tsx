'use client';

import { useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
const cursiveFont = Dancing_Script({ subsets: ['latin'], weight: '700' });

const NAV_LINKS = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
];

const SKILLS = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'HubSpot'];

const PROJECTS = [
  {
    name: 'OpenNest Africa',
    description:
      "Making open source accessible to everyone — building a diverse, inclusive community where knowledge is shared freely and innovation thrives.",
    tags: ['React'],
    url: 'https://opennestafrica.netlify.app/',
    repo: 'https://github.com/open-nest-africa/website',
  },
  {
    name: 'EquiNest',
    description:
      'Informative, engaging financial resources for women of all backgrounds — simplifying complex financial concepts to help women save and invest for a better tomorrow.',
    tags: ['React'],
    url: 'https://afrihacks-equinest.vercel.app/',
    repo: 'https://github.com/MutiatBash/Afrihacks-Equinest',
  },
  {
    name: 'TicketMynt',
    description:
      'A Web3-based platform to find and create events, using NFT tickets as digital assets — built for organizers and attendees.',
    tags: ['Web3'],
    url: 'https://ticketmynt.vercel.app/',
    repo: 'https://github.com/MutiatBash/ticket-mint',
  },
];

const FolderIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="var(--accent)"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
);

const Nav = () => (
  <nav className="flex items-center justify-between py-4 text-[13px] text-secondary sticky top-0 z-50 bg-background">
    <span className={`${cursiveFont.className} text-xl`} style={{ color: 'var(--accent)' }}>
      MB
    </span>
    <div className="flex gap-5">
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} className="hover:text-(--accent) transition-colors capitalize">
          {link.label}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section className="border-b border-neutral-200 py-12 sm:pt-16">
    <h1 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
      Mutiat Bashua
    </h1>
    <p className="mt-4 max-w-sm sm:max-w-lg text-[15px] text-secondary">
      Frontend developer, curious builder, and lifelong learner.
    </p>
    <a
      href="#work"
      className="mt-6 inline-block border-b text-sm font-medium"
      style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
    >
      View my work
    </a>
  </section>
);

const About = () => (
  <section id="about" className="border-b border-neutral-200 py-12">
    <p className="mb-3 text-[13px] uppercase tracking-wide text-muted font-semibold">A little about me</p>
    <p className="max-w-lg text-[15px] leading-relaxed">
      I'm a frontend developer with a background in Psychology and a curiosity that often takes me beyond my comfort zone.
      I enjoy understanding how people interact with technology and turning that understanding into interfaces that are intuitive, functional, and enjoyable to use.
      Outside of frontend development, I've been exploring mobile development, illustration, animation, and other creative skills. I'm always learning something new and looking for opportunities to turn what I learn into something tangible.
    </p>
  </section>
);

const Skills = () => (
  <section className="border-b border-neutral-200 py-12">
    <p className="mb-4 text-[13px] uppercase tracking-wide text-muted font-semibold">skills</p>
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-neutral-200 px-3 py-1.5 text-[13px]"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => (
  <div className="group block rounded-xl border border-neutral-200 p-5 transition-colors hover:border-(--accent)">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FolderIcon />
        <p className="text-[15px] font-medium">{project.name}</p>
      </div>
      <div className="flex gap-3 text-[13px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-(--accent)">
          Github ↗
        </a>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-(--accent)">
          Live ↗
        </a>
      </div>
    </div>
    <p className="mt-2 text-[13px] leading-relaxed text-secondary">{project.description}</p>
    <div className="mt-3 flex gap-2">
      {project.tags.map((tag) => (
        <span key={tag} className="text-[12px] text-muted">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Work = () => (
  <section id="work" className="border-b border-neutral-200 py-12">
    <p className="mb-4 text-[13px] uppercase tracking-wide text-muted font-semibold">selected work</p>
    <div className="flex flex-col gap-3">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'error' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    // TODO: wire this up to an email service (e.g. Resend, Formspree) or an API route.
    setStatus('submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm flex-col gap-3">
      <input
        name="name"
        placeholder="your name"
        className="border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-400"
      />
      <input
        name="email"
        type="email"
        placeholder="your email"
        className="border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-400"
      />
      <textarea
        name="message"
        placeholder="what's on your mind"
        rows={3}
        className="border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-400"
      />
      {status === 'error' && (
        <p className="text-[13px] text-red-600">Fill in all fields before sending.</p>
      )}
      {status === 'submitted' ? (
        <p className="text-[13px] text-secondary">Thanks — I&apos;ll get back to you soon.</p>
      ) : (
        <button
          type="submit"
          className="text-black mt-1 w-fit rounded-full border border-neutral-900 px-5 py-2 text-[13px] font-semibold transition-transform active:scale-[0.98] bg-(--accent) cursor-pointer"
        >
          Send
        </button>
      )}
    </form>
  );
};

const Contact = () => (
  <section id="contact" className="py-12">
    <p className="mb-3 text-[13px] uppercase tracking-wide text-muted font-semibold">contact</p>
    <h2 className="text-2xl font-medium">Let&apos;s build something.</h2>
    <div className="flex flex-col gap-1">
      <a href="mailto:mutiatbashua@gmail.com" style={{ color: 'var(--accent)' }} className="text-sm">
        mutiatbashua@gmail.com ↗
      </a>
    </div>
    <ContactForm />
  </section>
);

const Footer = () => (
  <footer className="flex items-center justify-between py-8 text-[12px] text-muted">
    <span>© {new Date().getFullYear()} Mutiat Bashua</span>
    <div className="flex gap-4">
       <a
        href="https://github.com/MutiatBash"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-(--accent)"
      >
        github
      </a>
      <a href="https://www.linkedin.com/in/mutiat-bashua" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-(--accent)">
        linkedin
      </a>
      <a href="https://twitter.com/dev_mutiah" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-(--accent)">
        twitter
      </a>
    </div>
  </footer>
);

const PortfolioPage = () => {
  return (
    <>
      <CustomCursor />
      <main className="mx-auto max-w-xl px-4">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default PortfolioPage;
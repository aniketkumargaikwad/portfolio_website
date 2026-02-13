'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeading from '@/components/SectionHeading';
import { portfolio } from '@/data/portfolio';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
  viewport: { once: true, amount: 0.3 },
};

export default function Home() {
  return (
    <main className="relative pb-24">
      <Navigation />
      <section
        id="home"
        className="relative bg-hero-gradient px-6 pb-16 pt-20 sm:px-10"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <motion.div className="space-y-4" {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.35em] text-neon-green">
              {portfolio.location}
            </p>
            <h1 className="text-3xl font-display font-semibold text-white sm:text-5xl">
              {portfolio.name}
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              {portfolio.role}
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-white/10 bg-midnight/70 p-6 shadow-neon"
            {...fadeUp}
          >
            <p className="text-lg font-display text-white">
              {portfolio.heroTagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {portfolio.heroDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-neon-cyan px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-night"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
          <motion.div
            className="grid gap-4 rounded-3xl border border-white/10 bg-midnight/50 p-6"
            {...fadeUp}
          >
            {portfolio.highlights.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-green">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="About" eyebrow="Intro" />
          <motion.div className="space-y-4" {...fadeUp}>
            <p className="text-base font-medium text-white">
              {portfolio.about.intro}
            </p>
            {portfolio.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-white/70"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="grid gap-4 rounded-2xl border border-white/10 bg-midnight/60 p-6 text-sm text-white/70"
            {...fadeUp}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neon-cyan">
                Education
              </p>
              {portfolio.education.map((item) => (
                <div key={item.program} className="mt-2">
                  <p className="font-semibold text-white">{item.program}</p>
                  <p>{item.school}</p>
                  <p>{item.period}</p>
                  <p className="text-white/60">{item.details}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neon-cyan">
                Languages
              </p>
              <ul className="mt-2 space-y-1">
                {portfolio.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-white/10 bg-midnight/60 p-6 text-sm text-white/70"
            {...fadeUp}
          >
            <p>{portfolio.about.reachOut}</p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white"
            >
              Contact me
            </a>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="Skills" eyebrow="Stack" />
          <motion.div className="flex flex-wrap gap-3" {...fadeUp}>
            {portfolio.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-midnight/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="work" className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="Experience" eyebrow="Impact" />
          {portfolio.experience.length > 0 && (
            <div className="space-y-4">
              {portfolio.experience.map((job) => (
                <motion.article
                  key={`${job.period}-${job.role}`}
                  className="rounded-2xl border border-white/10 bg-midnight/70 p-6"
                  {...fadeUp}
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neon-green">
                    <span>{job.role}</span>
                    <span>{job.period}</span>
                  </div>
                  {job.company && (
                    <p className="mt-2 text-sm font-semibold text-white">
                      {job.company}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {job.summary}
                  </p>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="projects" className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="Projects" eyebrow="Selected" />
          <div className="grid gap-4">
            {portfolio.projects.map((project) => (
              <motion.article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-midnight/70 p-6"
                {...fadeUp}
              >
                <h3 className="text-lg font-display text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {project.summary}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/50">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-glow px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-neon-cyan"
                  >
                    View Project →
                  </a>
                ) : (
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
                    Details coming soon
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {portfolio.testimonials.length > 0 && (
        <section id="testimonials" className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-3xl space-y-8">
            <SectionHeading title="Testimonials" eyebrow="Trust" />
            <div className="space-y-4">
              {portfolio.testimonials.map((testimonial) => (
                <motion.blockquote
                  key={testimonial.name}
                  className="rounded-2xl border border-white/10 bg-midnight/70 p-6"
                  {...fadeUp}
                >
                  <p className="text-sm leading-relaxed text-white/70">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-neon-green">
                    {testimonial.name} · {testimonial.title}
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="Contact" eyebrow="Let’s Connect" />
          <motion.div
            className="rounded-2xl border border-white/10 bg-midnight/70 p-6"
            {...fadeUp}
          >
            <p className="text-sm text-white/70">
              {portfolio.contact.callToAction}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>{portfolio.contact.email}</p>
              <p>{portfolio.contact.location}</p>
            </div>
            <form className="mt-6 grid gap-4">
              <input
                className="w-full rounded-xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Your name"
                type="text"
                name="name"
                autoComplete="name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Email address"
                type="email"
                name="email"
                autoComplete="email"
              />
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Tell me about your project"
                name="message"
              />
              <button
                className="rounded-full bg-neon-green px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-night"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/60 sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em]">
            {portfolio.contact.socials.map((social) => (
              <a key={social.label} href={social.href} className="text-neon-cyan">
                {social.label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

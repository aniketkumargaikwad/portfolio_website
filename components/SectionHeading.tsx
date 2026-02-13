import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true, amount: 0.3 },
};

export default function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <motion.div className="space-y-2" {...fadeUp}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-display font-semibold text-white sm:text-3xl">
        {title}
      </h2>
      <div className="neon-divider h-px w-16" />
    </motion.div>
  );
}

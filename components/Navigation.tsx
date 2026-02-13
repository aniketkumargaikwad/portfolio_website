import Link from 'next/link';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-full border border-white/10 bg-midnight/80 px-4 py-3 shadow-neon backdrop-blur">
      <ul className="flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="rounded-full px-2 py-1 transition hover:text-neon-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

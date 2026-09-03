// Single source of truth for every word and link on the site.
// Edit here — the components read from this file and never hardcode content.

export const person = {
  name: 'Manoj Kumar',
  short: 'Manoj',
  initials: 'MK',
  role: 'Lead Engineer',
  email: 'import.manoj@gmail.com',
  avatar: '/profile.png',
  available: true,
  availableLabel: 'Open to interesting conversations',
}

export const hero = {
  // Each line renders on its own row; the line containing `emphasis` has that
  // phrase swapped into the serif accent face.
  headline: ['Building systems that scale,', 'not just interfaces.'],
  emphasis: 'not just interfaces',
  // Deliberately does not repeat the role or company — the eyebrow above it
  // already carries both, and saying it twice wastes the hero.
  intro:
    'I build enterprise platforms with Node.js, TypeScript, PostgreSQL and cloud infrastructure. I design APIs, optimize data pipelines, and still write production code every day.',
  ctaPrimary: { label: 'Get in touch', href: 'mailto:import.manoj@gmail.com' },
  ctaSecondary: { label: 'View projects', href: '#work' },
}

export const stats = [
  { value: '5+', label: 'Years building for the web' },
  { value: '19', label: 'Dev tools shipped on CodeScript' },
  { value: '3', label: 'Packages published to npm' },
]

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  PLACEHOLDERS BELOW — replace every bracketed value and every unset year
//     before deploying. `npm run check` fails the build while any remain.
// ─────────────────────────────────────────────────────────────────────────────
export const experience = [
  {
    role: 'Lead Engineer',
    company: 'UptimeAI',
    companyUrl: '',
    start: 'Dec 2022',
    end: 'Present',
    current: true,
    summary:
      'Leading the development of enterprise-scale full-stack applications, driving architecture decisions, engineering quality, and delivery across frontend and backend systems.',
    highlights: [
      'Lead architecture, delivery, and technical decisions across Node.js services, PostgreSQL, Angular applications and cross-functional engineering initiatives.',
      'Improved API response times by 10× by redesigning the existing API architecture and optimizing aggregation pipelines.',
      'Improved application load times by approximately 30% through performance optimization and strategic refactoring.',
      'Designed reusable UI architecture and backend integrations powering configurable enterprise workflows.',
      'Mentor engineers through code reviews, technical guidance, and engineering best practices.',
    ],
    tech: ['TypeScript', 'Node.js', 'Angular', 'Python', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    role: 'Software Engineer',
    company: 'Simplilearn',
    companyUrl: '',
    start: 'Jul 2021',
    end: 'Dec 2022',
    current: false,
    summary:
      'Built full-stack features for a Learning Management System, focusing on virtual learning and secure authentication.',
    highlights: [
      'Integrated the Zoom Web SDK into the LMS to enhance virtual classroom experiences.',
      'Implemented secure authentication using AWS Cognito User Pools.',
      'Developed scalable React and Node.js features across frontend and backend.',
    ],
    tech: ['React', 'Node.js', 'AWS Cognito', 'JavaScript'],
  },
]

// Whichever experience entry is marked `current` drives the hero eyebrow, so
// changing jobs is a one-line edit in `experience` above.
export const currentRole = experience.find((role) => role.current) ?? experience[0]

export const spotlight = {
  name: 'CodeScript',
  tagline: 'Free developer tools that run entirely in your browser.',
  body: 'A growing toolkit for the small jobs that interrupt real work — formatting a payload, decoding a token, checking a regex. Everything runs client-side, so nothing you paste ever leaves your machine. Alongside the tools sit cheat sheets, interview questions and language roadmaps.',
  href: 'https://codescript.in',
  repo: 'https://github.com/mjmaurya/codescript',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  metrics: [
    { value: '19', label: 'Tools shipped' },
    { value: '100%', label: 'Client-side' },
    { value: '0', label: 'Data collected' },
  ],
  tools: [
    'JSON Formatter',
    'JSON Validator',
    'JSON Diff',
    'JSON ↔ YAML',
    'JSONPath Tester',
    'JWT Decoder',
    'JWT Generator',
    'Base64',
    'UUID Generator',
    'Regex Tester',
    'SQL Formatter',
    'Timestamp Converter',
    'Hash Generator',
    'Password Generator',
    'QR Generator',
    'URL Encoder',
    'HTML Escape',
    'Case Converter',
  ],
}

export const projects = [
  {
    name: 'plotly-timezone',
    year: '2026',
    summary:
      'Feed Plotly.js a UTC timestamp and an IANA zone and get correct, DST-aware axes — without paying for a per-point Intl call.',
    tech: ['TypeScript', 'Plotly.js', 'npm'],
    href: 'https://www.npmjs.com/package/plotly-timezone',
    hrefLabel: 'npm',
    featured: true,
  },
  {
    name: 'kt-hierarch',
    year: '2024',
    summary:
      'An Angular library for interactive hierarchy views — org charts, reporting lines and category trees, with zoom, pan and full control over node rendering.',
    tech: ['Angular', 'TypeScript', 'npm'],
    href: 'https://www.npmjs.com/package/kt-hierarch',
    hrefLabel: 'npm',
    featured: true,
  },
  {
    name: 'frontend-learning-kit',
    year: '2022',
    summary:
      'A curated guide to front-end tooling and the materials worth actually reading. The most-starred thing I have published.',
    tech: ['Open source', 'Documentation'],
    href: 'https://github.com/mjmaurya/frontend-learning-kit',
    hrefLabel: 'GitHub',
    stars: 25,
  },
  {
    name: 'Portfolio Builder',
    year: '2022',
    summary:
      'Fill in a form, get a deployable resume website — no coding required. Built to get non-developers online in about ten minutes.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/mjmaurya/resume-website-builder',
    hrefLabel: 'GitHub',
    stars: 20,
  },
]

export const stack = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
  { group: 'Front-end', items: ['React', 'Angular', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { group: 'Back-end', items: ['Node.js', 'Express', 'REST APIs', 'FastAPI'] },
  { group: 'Data', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { group: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Git', 'CI/CD'] },
]

export const about = {
  heading: 'Code is a canvas, not just logic.',
  body: [
    'I have spent the last several years shipping web applications end to end — designing the interface, writing the API behind it, and owning the deploy that puts it in front of people. These days I do that as a lead, setting technical direction for a team rather than only for myself.',
    'What I care about is the part most teams skip: the interaction that feels obvious, the query that stays fast at scale, the library extracted so nobody has to solve it twice.',
  ],
  principles: [
    {
      title: 'Interfaces people do not have to think about',
      body: 'Angular and React work I judge by whether the interaction disappears — no hunting, no second-guessing, no manual.',
    },
    {
      title: 'Back-ends that hold up under growth',
      body: 'Node.js and Express services designed for the traffic that arrives later, not just the demo that passes today.',
    },
    {
      title: 'Automation and AI where they earn their place',
      body: 'Modern APIs and AI integrations are worth adding when they remove real work — not because they are on the roadmap.',
    },
    {
      title: 'Ownership from idea to deploy',
      body: 'Brainstorm, build, ship, watch it in production. I would rather hold the whole lifecycle than hand it across a wall.',
    },
  ],
}

export const contact = {
  heading: 'Let us build something.',
  body: 'Always happy to talk engineering leadership, a hard technical problem, or open-source collaboration. The fastest way to reach me is email.',
}

export const socials = [
  { name: 'GitHub', href: 'https://github.com/mjmaurya', handle: 'mjmaurya' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mjmaurya', handle: 'in/mjmaurya' },
  { name: 'X', href: 'https://x.com/manojkushwaha__', handle: '@manojkushwaha__' },
  { name: 'CodeScript', href: 'https://codescript.in', handle: 'codescript.in' },
]

export const nav = [
  { label: 'CodeScript', href: '#codescript' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
]

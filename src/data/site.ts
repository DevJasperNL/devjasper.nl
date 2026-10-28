export const availability = 'January 2027';

// Occurify's GitHub star count, updated by hand.
export const stars = 78;

export const email = 'jasper@devjasper.nl';
export const mailto = `mailto:${email}`;

export const links = {
  linkedIn: 'https://www.linkedin.com/in/jasper-lammers/',
  gitHub: 'https://github.com/DevJasperNL',
};

export const seo = {
  title: 'Jasper Lammers | Freelance Senior .NET Engineer',
  description: `Freelance senior .NET engineer, 15 years in logistics, enterprise identity and video streaming. Legacy to modern, hands-on. Available ${availability}.`,
  ogTitle: 'Jasper Lammers, freelance senior .NET engineer',
  ogDescription: 'Building something new? Stuck with something old? Freelance senior .NET engineer, 15 years in.',
};

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'How I work', href: '/#how-i-work' },
  { label: 'Open source', href: '/#open-source' },
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  greeting: "Hi, I'm Jasper.",
  name: 'Jasper Lammers',
  role: 'Senior .NET engineer',
  headline: ['Building something new?', 'Stuck with something old?'],
  intro:
    'Yes, I can help. Freelance senior .NET engineer, 15 years in. I get up to speed fast, build alongside your team, and make sure the knowledge stays when I go.',
  photoAlt: 'Jasper Lammers, smiling, in a blue blazer',
};

export interface Point {
  title: string;
  body: string;
}

export const services: Point[] = [
  {
    title: 'Legacy to modern',
    body: 'Old .NET (WCF, WebForms) moved to .NET 8, Blazor and Azure, at DAF and New Media Systems.',
  },
  {
    title: 'Identity and integration',
    body: 'One login across many apps: OIDC, SAML, SCIM, Entra ID. Plus the plumbing around it, like payments (Mollie) and email (SendGrid).',
  },
  {
    title: 'Software that moves things',
    body: "Shuttles and lifts at Vanderlande, PTZ cameras and video mixers at NMS. Real-time, hardware nearby, and it has to keep working when the network doesn't.",
  },
];

export type WorkArt = 'stream' | 'identity' | 'warehouse';

export interface WorkItem {
  client: string;
  period: string;
  title: string;
  problem: string;
  did: string;
  result: string;
  art: WorkArt;
}

export const work: WorkItem[] = [
  {
    client: 'New Media Systems',
    period: '2024 to now',
    title: 'A legacy media suite, rebuilt from scratch',
    problem: 'an aging software suite that had to move to the cloud and still work offline.',
    did: 'everything. Architecture, Azure, Blazor, Entra ID login, Mollie payments, SendGrid email, CI/CD. Plus a production tool that steers PTZ cameras, video mixers and streams in real time.',
    result:
      'two products live and in use: the NMS Suite Portal for staff and customers, and AV Director, which keeps working offline.',
    art: 'stream',
  },
  {
    client: 'DAF',
    period: '2022 to 2024',
    title: 'One login, from WebForms to .NET 8',
    problem:
      'DAF moved its portals onto a new identity platform. The apps behind them ran on everything from WebForms 4.8 to .NET 8.',
    did: 'with the team, built integration libraries for each .NET version, connected 6+ tech stacks through OIDC or SAML, and built a SCIM adapter that keeps the new platform and the legacy systems in sync.',
    result: 'old and new apps behind one login.',
    art: 'identity',
  },
  {
    client: 'Vanderlande',
    period: '2015 to 2022',
    title: 'Testing warehouse robots without the robots',
    problem:
      "ADAPTO's shuttles and lifts are run by software, but developers and testers can't each have a warehouse on their desk.",
    did: 'designed and led the ADAPTO Emulation Environment, and coordinated the integration with the shuttle team in Siegen, Germany. Later, tech lead of a team of 6 on STOREPICK (Java, Kafka, Kubernetes).',
    result:
      'developers, testers and integration engineers run the real system software with no physical hardware.',
    art: 'warehouse',
  },
];

export const earlierWork =
  'Earlier: SeaChange International (video on demand), SPS BV (warehouse management), TNO Automotive (PreScan), Memoria Media.';

export interface Quote {
  text: string;
  name: string;
  role: string;
  translated?: boolean;
}

export const quotes: Quote[] = [
  {
    text: "Jasper picks up new technology incredibly fast, whether it's legacy WCF or the latest version of Blazor.",
    name: 'Rob Ramaekers',
    role: 'freelance IT solution architect. Worked together at DAF.',
    translated: true,
  },
  {
    text: 'The innovative solutions he proposed helped make the software more flexible and extensible.',
    name: 'Sachin Shitole',
    role: 'Technology Lead, PACCAR India. Worked together at DAF.',
  },
  {
    text: 'If there are complications he will let you know and come up with multiple possible solutions with both their pros and cons.',
    name: 'Twan Lambriex',
    role: 'Software Engineering Specialist. Worked together at Vanderlande.',
  },
  {
    text: 'He is able to translate complex requirements into clear steps and well organized solutions which are open for change.',
    name: 'Carlus Geboers',
    role: 'my team manager at Vanderlande.',
  },
];

export const linkedInRecommendations = {
  label: 'More recommendations on LinkedIn',
  href: 'https://www.linkedin.com/in/jasper-lammers/details/recommendations/',
};

export const howIWork = {
  points: [
    {
      title: 'I learn your system quickly',
      body: "Warehouse robots, identity, live video: new domain every time. I read the code and ask the awkward questions early, so I'm useful soon.",
    },
    {
      title: 'I leave the knowledge behind',
      body: "Clear docs, careful reviews, and time for the developers who stay. When I leave, you shouldn't notice a gap.",
    },
    {
      title: 'I build what you need',
      body: 'I lay out options with pros and cons and pick the simplest one that holds. Then I help build it.',
    },
  ] as Point[],
  ai: 'I use Claude Code every day to deliver faster, and I can help your team do the same without the hype.',
  personal: [
    { text: 'Off the clock', href: 'https://jasperlammers.com/' },
    { text: ": I've made games since primary school, I go bouldering, " },
    { text: 'I write about philosophy', href: 'https://jasperlammers.com/essays/' },
    { text: ", and if you challenge me to a board game, I won't say no." },
  ] as { text: string; href?: string }[],
};

export interface Project {
  name: string;
  body: string;
  stars?: number;
  links: { label: string; href: string }[];
}

export const openSource = {
  lead: "Don't take my word for it. Read the code.",
  projects: [
    {
      name: 'Occurify',
      stars,
      body: 'A .NET library for scheduling and transforming timelines. 4500+ unit tests.',
      links: [
        { label: 'github.com/Occurify/Occurify', href: 'https://github.com/Occurify/Occurify' },
        { label: 'DEV.to: Fluent Time Modeling for .NET Developers', href: 'https://dev.to/devjaspernl/occurify-fluent-time-modeling-for-net-developers-3e4n' },
      ],
    },
    {
      name: 'CodeCasa',
      body: 'The .NET libraries that run my smart home, built on NetDaemon. I also contribute to NetDaemon itself.',
      links: [
        { label: 'github.com/DevJasperNL/CodeCasa', href: 'https://github.com/DevJasperNL/CodeCasa' },
        { label: 'github.com/DevJasperNL/CodeCasa.Showcase', href: 'https://github.com/DevJasperNL/CodeCasa.Showcase' },
        { label: 'DEV.to: I Retired My Hue Bridge', href: 'https://dev.to/devjaspernl/i-retired-my-hue-bridge-heres-how-i-rebuilt-everything-it-did-and-more-in-c-4178' },
        { label: 'DEV.to: Supercharging Home Assistant Automations', href: 'https://dev.to/devjaspernl/supercharging-home-assistant-automations-initial-states-and-boolean-logic-for-netdaemon-rx-3bd5' },
      ],
    },
  ] as Project[],
  all: { label: 'All on GitHub', href: links.gitHub },
};

const cvSubject = 'CV request: [assignment]';
const cvBody = 'Hi Jasper, could you send me a CV tailored to this assignment? [link or short description]';

export const contact = {
  heading: "New or old, let's talk about it.",
  body: `Tell me about your system and where it hurts. I'm available from ${availability}.`,
  cvPrompt: 'Broker or recruiter?',
  cvLabel: 'Request my CV',
  cvHref: `${mailto}?subject=${encodeURIComponent(cvSubject)}&body=${encodeURIComponent(cvBody)}`,
};

export const footer = {
  name: 'Jasper Lammers',
  privacy: 'No cookies, no trackers.',
  kvk: 'KvK 86591800',
};

export const notFound = {
  title: 'Page not found | Jasper Lammers',
  heading: "This page doesn't exist.",
  body: 'Maybe it moved, maybe it never was. Everything worth seeing is on the home page.',
  button: 'Back to the home page',
};

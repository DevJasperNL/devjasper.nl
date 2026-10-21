export const availability = 'January 2027';

export const email = 'jasper@devjasper.nl';
export const mailto = `mailto:${email}`;

export const hero = {
  greeting: "Hi, I'm Jasper.",
  headline: ['Building something new?', 'Stuck with something old?'],
  intro:
    'Yes, I can help. Senior .NET engineer, freelance, 15 years. I get up to speed fast, build alongside your team, and make sure the knowledge stays when I go.',
  photoAlt: 'Jasper Lammers, smiling, in a blue blazer',
};

export interface Service {
  title: string;
  body: string;
}

export const services: Service[] = [
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

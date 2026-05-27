export const en = {
  lang: 'en' as const,
  dir: 'ltr' as const,

  nav: {
    services: 'Services',
    whyIndia: 'Why India',
    about: 'About',
    careers: 'Careers',
    talkToUs: 'Talk to us',
  },

  hero: {
    eyebrow: 'UPI · Settlement · Multi-Bank',
    h1: ['Payment', 'Infrastructure', 'for'],
    h1Accent: ['Emerging', 'Markets'],
    description: 'We handle UPI processing, settlement, and merchant services so international businesses can enter India and focus on growth — not banking complexity.',
    ctaTelegram: 'Talk to us in Telegram',
    ctaEmail: 'Send email',
    proof: [
      { num: '16B+', label: 'UPI tx/month' },
      { num: '2–4w',  label: 'to go live' },
      { num: '24/7',  label: 'monitoring' },
    ],
    dash: {
      liveLabel: 'Live processing',
      badge: 'UPI Pay-In',
      amountLabel: 'Amount received',
      settled: 'Settled',
      rows: [
        { label: 'Channel',    value: 'UPI → IMPS' },
        { label: 'Settlement', value: 'Same day', green: true },
        { label: 'Failover',   value: 'Multi-bank active' },
      ],
      steps: ['Received', 'Processing', 'Settled'],
    },
    floats: [
      { num: '500M+', label: 'UPI users' },
      { num: '₹ 10T+', label: 'market / year' },
    ],
  },

  services: {
    eyebrow: 'What we offer',
    heading: ['Everything you need to', 'accept payments in India'],
    description: 'From first UPI transaction to ongoing operations — we cover the full stack of payment infrastructure.',
    items: [
      { num: '01', tag: 'Pay-In',      title: 'UPI Pay-In Processing',    desc: 'Accept UPI payments from 500M+ Indian users. Same-day settlement directly to your account — no delays, no surprises.' },
      { num: '02', tag: 'Pay-Out',     title: 'Pay-Out Solutions',          desc: 'Send funds via IMPS, RTGS, and NEFT. Fast, reliable payouts to Indian bank accounts — vendors, partners, employees.' },
      { num: '03', tag: 'Support',     title: '24/7 Account Management',    desc: 'Dedicated account managers and round-the-clock monitoring. Issues resolved before they become your problem.' },
      { num: '04', tag: 'Reliability', title: 'Multi-Bank Infrastructure',  desc: 'Distributed across multiple banking partners with automatic failover. No single point of failure in your payment stack.' },
      { num: '05', tag: 'Analytics',   title: 'Real-Time Reporting',        desc: 'Live transaction dashboards and transparent analytics. Full visibility into every payment, reconciliation-ready exports.' },
      { num: '06', tag: 'Compliance',  title: 'Compliance & Operations',    desc: "We handle local banking compliance, account structures, and regulatory requirements — so you never have to become an expert in Indian banking." },
    ],
  },

  marketStats: {
    eyebrow: 'India in 2026',
    heading: ["The world's fastest-growing", 'digital payments market'],
    description: "India processed more UPI transactions last month than the entire EU processes card transactions in a year. The opportunity is massive. The infrastructure challenge is real. We solve it.",
    quote: 'We handle the complexity.\nYou focus on growth.',
    stats: [
      { value: '16B+',  label: 'UPI transactions per month' },
      { value: '$10T+', label: 'Digital payments market annually' },
      { value: '500M+', label: 'Active UPI users' },
      { value: '20%+',  label: 'CAGR through 2030' },
    ],
  },

  whyIndia: {
    eyebrow: 'Our India base',
    heading: ['Built for', 'India'],
    description: "India's payments market is massive and complex. We built local operations, banking partnerships, and compliance expertise so international businesses don't have to.",
    tagline: 'Payment infrastructure where it matters.',
    reasons: [
      { title: '16B+ UPI transactions monthly', desc: 'The scale is unmatched — and the infrastructure requirements are real.' },
      { title: 'Deep banking partnerships',     desc: 'Relationships across major Indian banks for account setup, settlement, and redundancy.' },
      { title: 'Local compliance expertise',    desc: 'On-the-ground team that handles regulatory requirements, documentation, and ongoing compliance.' },
      { title: 'On-the-ground operations',      desc: 'Dedicated account management and 24/7 monitoring — not a remote support desk.' },
      { title: 'International businesses',      desc: 'Built for companies entering India from Europe and beyond. We speak both languages.' },
    ],
  },

  howItWorks: {
    eyebrow: 'Getting started',
    heading: 'How it works',
    description: 'From first conversation to live payment processing — a straightforward path with our team guiding you at every step.',
    steps: [
      { num: '01', title: 'Discovery call',           desc: 'A short conversation with our team to understand your location, availability, and eligibility for the onboarding process. No experience required.' },
      { num: '02', title: 'Verification & onboarding', desc: 'Our team explains the process, checks the required documents, handles bank account openings and helps you prepare for the next onboarding steps.' },
      { num: '03', title: 'Go-live',             desc: 'Start processing UPI payments in India. Typical time from kickoff to first transaction: 2–4 weeks.' },
      { num: '04', title: 'Ongoing operations',  desc: "24/7 monitoring, dedicated account management, and transparent reporting — we run the infrastructure so you don't have to." },
    ],
  },

  fromGround: {
    eyebrow: 'On the ground',
    heading: ['Building', 'on the', 'ground'],
    subheading: 'Deep in the ecosystem.\nBuilding for the long term.',
    milestones: [
      'Met with local CA firms to set up our India entity.',
      'Visited bank branches to understand account structures and compliance requirements.',
      'Building strong local relationships. Laying the foundation for seamless payments.',
    ],
    insight: "India's banking infrastructure is complex.",
    insightStrong: 'Local expertise makes all the difference.',
    subStats: [
      { label: 'Every bank',     note: 'has its own rules' },
      { label: 'Every process',  note: 'has its quirks' },
      { label: 'Every timeline', note: 'is different' },
    ],
    photoAlt: 'Elephants Partners operations team',
    photoTeam: 'Operations team',
  },

  useCases: {
    eyebrow: 'Who we work with',
    heading: ['Built for international', 'businesses entering', 'India'],
    description: "Whether you process thousands or millions of transactions, the same infrastructure challenge applies: India's payment ecosystem is complex. We solve it.",
    notFound: "Don't see your exact use case?",
    notFoundLink: "Let's talk →",
    cases: [
      {
        label: 'E-commerce', volume: '50K+ tx/month',
        title: 'International online store entering India',
        details: ['Accepts UPI Pay-In from Indian customers', 'Same-day settlement in INR', 'Multi-bank redundancy for zero downtime'],
      },
      {
        label: 'SaaS', volume: '10K+ subscribers',
        title: 'European SaaS with Indian customer base',
        details: ['Subscription billing via UPI AutoPay', 'Automated reconciliation and reporting', 'Compliance-ready account structure'],
      },
      {
        label: 'Digital Services', volume: '500+ payouts/day',
        title: 'Digital platform handling India payouts',
        details: ['Mass Pay-Out via IMPS/NEFT to Indian vendors', 'Real-time transaction status monitoring', '24/7 support for payout issues'],
      },
    ],
  },

  testimonials: {
    eyebrow: 'What partners say',
    heading: ['Trusted by businesses', 'entering India'],
    description: "From SaaS founders to e-commerce operators, our partners share what it's like to work with us on the ground.",
    items: [
      {
        quote: 'Same-day UPI settlement transformed our cash flow. We went from waiting three to five days to having funds in our account the same day — that changed how we operate.',
        name: 'Priya Sharma',
        role: 'Head of Payments',
        company: 'BerlinPay',
        avatar: 'review_1.webp',
      },
      {
        quote: "I've launched fintech products in six countries. India is the hardest. Working with Elephants Partners made it the easiest one yet.",
        name: 'Rajiv Menon',
        role: 'Founder & CEO',
        company: 'OrbitPay',
        avatar: 'review_6.webp',
      },
      {
        quote: "Their compliance team handles everything we don't want to think about. Bank account openings, regulatory paperwork, ongoing reconciliation — it just works in the background.",
        name: 'Anjali Iyer',
        role: 'CFO',
        company: 'NordCommerce',
        avatar: 'review_3.webp',
      },
      {
        quote: 'Their API just works. We integrated UPI Pay-In in two days, including testing. No surprises in production.',
        name: 'Arjun Kapoor',
        role: 'Engineering Lead',
        company: 'StreamlinedSaaS',
        avatar: 'review_7.webp',
      },
      {
        quote: 'We tried two other payment providers before Elephants Partners. The difference was night and day — they actually pick up the phone.',
        name: 'Meera Patel',
        role: 'VP Operations',
        company: 'Latitude44',
        avatar: 'review_4.webp',
      },
      {
        quote: 'We process payouts to 200+ Indian vendors monthly. Elephants Partners handles the entire flow — IMPS, NEFT, reconciliation. We just see the dashboard.',
        name: 'Vikram Reddy',
        role: 'Managing Director',
        company: 'EuroLogistics',
        avatar: 'review_8.webp',
      },
      {
        quote: 'Setting up multi-bank infrastructure in India sounded impossible from our side. They had it running in three weeks.',
        name: 'Lakshmi Krishnan',
        role: 'Head of Compliance',
        company: 'FlexFin',
        avatar: 'review_5.webp',
      },
      {
        quote: 'Real-time transaction monitoring. Transparent fees. Same-day settlement. There is no part of the experience that surprises me anymore — in a good way.',
        name: 'Vivek Bhatt',
        role: 'Head of Product',
        company: 'MeridianFinance',
        avatar: 'review_11.webp',
      },
      {
        quote: 'Their team genuinely cares about our success in India. We get more attention than we got from providers ten times our processing volume.',
        name: 'Divya Nair',
        role: 'Head of Growth',
        company: 'SignalCommerce',
        avatar: 'review_9.webp',
      },
      {
        quote: 'The onboarding was the smoothest I have experienced in fintech. Two weeks from kickoff to live transactions, including bank account setup.',
        name: 'Tara Krishnamurthy',
        role: 'Customer Success Director',
        company: 'BridgePay',
        avatar: 'review_12.webp',
      },
    ],
  },

  cta: {
    eyebrow: 'Ready to start?',
    heading: ['Accept UPI in India.', 'We handle the rest.'],
    description: "Talk to our team about your payment needs. We'll walk you through setup, timelines, and what to expect — no commitment required.",
    btnTelegram: 'Talk to us in Telegram',
    btnEmail: 'partnerships@elephants.partners',
    miniCards: [
      { label: 'Transaction processed', value: '₹ 84,200',     color: 'green' as const },
      { label: 'Settled to account',    value: 'Same day ✓',   color: 'blue' as const },
      { label: 'Failover active',       value: '3 banks online', color: 'orange' as const },
    ],
  },

  footer: {
    tagline: 'Payment Infrastructure\nfor Emerging Markets',
    company: [
      { label: 'About Us',  href: '/about' },
      { label: 'Careers',   href: '/careers' },
      { label: 'Contact',   href: '/contact' },
    ],
    services: [
      { label: 'UPI Pay-In',              href: '/#services' },
      { label: 'Pay-Out Solutions',       href: '/#services' },
      { label: 'Multi-Bank Infrastructure', href: '/#services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    copyrightSuffix: 'Elephants Partners. All rights reserved.',
    headings: { company: 'Company', services: 'Services', contact: 'Get in touch' },
  },

  about: {
    eyebrow: 'About us',
    h1: ['Built by people who\'ve seen', "what doesn't work"],
    intro: "Elephants Partners was founded in 2024 with one goal: make it genuinely easy for international businesses to accept payments in India. Not 'almost easy.' Actually easy.",
    missionH2: 'Our mission',
    mission1: "India's digital payments market processes over 16 billion UPI transactions per month. For international companies, capturing this opportunity requires navigating a complex web of local banks, compliance requirements, and operational nuances.",
    mission2: "We provide the infrastructure layer — so our clients focus on their product, not on becoming experts in Indian banking.",
    teamH2: 'The people behind Elephants Partners',
    teamPlaceholder: 'Team profiles coming soon.',
    teamPlaceholder2: 'In the meantime, reach us at',
    contactH2: 'Get in touch',
    cards: [
      { h3: 'Partnerships', p: 'For integration inquiries, partnership proposals, and commercial discussions.', btnLabel: 'partnerships@elephants.partners', btnHref: 'mailto:partnerships@elephants.partners', btnClass: 'btn--primary' },
      { h3: 'Careers',      p: "We're building a local operations team in India. Interested in joining?",     btnLabel: 'See open roles →',               btnHref: '/careers',                             btnClass: 'btn--outline' },
    ],
    facts: [
      { label: 'Founded',       value: '2024' },
      { label: 'Headquartered', value: 'Europe' },
      { label: 'Operations',    value: 'India' },
      { label: 'Team',          value: '2–10 people' },
    ],
  },

  contact: {
    eyebrow: 'Contact us',
    h1: ['Let\'s talk', 'payment infrastructure'],
    intro: 'Tell us about your business and what you need in India. Our team responds within one business day.',
    directH2: 'Reach us directly',
    faqH2: 'Common questions',
    methods: [
      { h3: 'Telegram (fastest)', p: 'Our team is active on Telegram. Start a conversation and get a response same day.', btnLabel: 'Open Telegram chat', type: 'telegram' as const },
      { h3: 'Partnerships',       p: 'For commercial inquiries and integration discussions.',                             type: 'email' as const },
      { h3: 'Locations',          type: 'location' as const },
    ],
    locations: [
      { label: 'Operations', value: 'India' },
      { label: 'Headquarters', value: 'Europe' },
    ],
    faq: [
      { q: 'How long does setup take?',         a: 'Typically 2–4 weeks from first conversation to processing live transactions, depending on your existing infrastructure and documentation readiness.' },
      { q: 'What businesses do you work with?', a: 'E-commerce, SaaS, digital services, and financial technology providers that need to accept or send payments in India.' },
      { q: 'Do you handle compliance?',         a: 'Yes. Our local operations team handles banking compliance, account setup, and ongoing regulatory requirements on your behalf.' },
      { q: 'What payment methods do you support?', a: 'UPI Pay-In for receiving payments. IMPS, RTGS, and NEFT for Pay-Out distributions.' },
    ],
  },

  careers: {
    eyebrow: 'Careers · India',
    h1: ['We\'re', 'hiring', 'in India'],
    intro: 'Elephants Partners is building a local operations team in India to support our payment infrastructure for international businesses.',
    role: 'Operations Executive',
    dutiesLabel: 'What you\'ll do',
    duties: [
      'Manage relationships with banking partners',
      'Coordinate account openings and daily operations',
      'Monitor transaction flow and ensure smooth processing',
      'Work directly with our European leadership team',
    ],
    requirementsLabel: 'Requirements',
    requirements: ['Based in India', 'Hindi + Marathi', 'Basic English', 'Own transport'],
    benefitsLabel: 'What we offer',
    benefits: [
      { label: 'Competitive salary',    note: '+ performance bonuses' },
      { label: 'Full training',          note: 'No prior fintech experience needed' },
      { label: 'Growth opportunity',     note: 'In a fast-scaling company' },
      { label: 'International team',     note: 'and exposure' },
      { label: 'Dynamic environment',    note: 'and support' },
    ],
    applyNote: 'Interested? DM us or apply via Telegram.',
    applyBtn: 'Apply in Telegram',
    aboutLabel: 'About Elephants Partners',
    aboutText: 'We build payment infrastructure for international businesses entering India. Founded in 2024, headquartered in Europe with local operations in India.',
    sidebarFacts: [
      { label: 'Industry',      value: 'Financial Services / Fintech' },
      { label: 'Company size',  value: '2–10 people' },
      { label: 'Founded',       value: '2024' },
      { label: 'Operations',    value: 'India' },
    ],
    learnMore: 'Learn more about us',
    location: 'India',
  },
};

export type Translations = Omit<typeof en, 'lang' | 'dir'> & { lang: string; dir: string };

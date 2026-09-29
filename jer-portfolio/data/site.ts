/** Update this file before publishing. Never publish fictional achievements as facts. */
export const site = {
  name: 'Jer', monogram: 'J', role: 'Web Developer / Creative Developer',
  email: 'jer.nellmo.las@gmail.com',
  title: 'Jer | Web developer & creative developer',
  description: 'Jer builds considered digital experiences with design sensitivity and engineering rigor.',
  headlineA: 'Making the web', headlineB: 'feel something.',
  introduction: "I'm Jer, a web developer drawn to the intersection of expressive design and meticulous engineering. I build sites that work beautifully, then stay with you.",
  aboutLead: "I care about the little things people notice, and the invisible things they don't.",
  about: [
    'My work lives between design and development: thoughtful interfaces, fast pages, accessible patterns, and interactions that make sense. I like clean architecture as much as a memorable first impression.',
    "I start with the problem, design around the person using it, and build with the next developer in mind. No visual tricks without a reason. No technical shortcuts that become someone else's problem."
  ],
  stats: [{value:'01',label:'Clear purpose'},{value:'02',label:'Solid craft'},{value:'03',label:'Lasting value'}],
  location: 'Independent / available for the right project',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
};
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

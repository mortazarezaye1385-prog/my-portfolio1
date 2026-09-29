import { site } from '@/data/site';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { Stats } from './Stats';
export function About(){return <section id="about" className="section wrap"><SectionHeading index="01 / ABOUT">Good code.<br/>Better feeling.</SectionHeading><div className="about-grid"><Reveal><div className="portrait" role="img" aria-label="Graphic profile placeholder with the letter J; replace with a personal portrait"><span className="portrait-initial">J</span><span className="caption mono">A FACE BEHIND THE INTERFACE / PORTRAIT SLOT</span></div></Reveal><Reveal className="about-copy"><h3>{site.aboutLead}</h3>{site.about.map(paragraph=><p key={paragraph}>{paragraph}</p>)}<Stats/></Reveal></div></section>}

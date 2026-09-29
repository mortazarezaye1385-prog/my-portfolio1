import { experience } from '@/data/experience';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
export function Experience(){return <section id="experience" className="section wrap line"><SectionHeading index="03 / EXPERIENCE">Practice makes<br/>perspective<span className="accent">.</span></SectionHeading>{experience.map(item=><Reveal className="timeline-row" key={item.role}><span className="meta accent">{item.date.toUpperCase()}</span><div><h3>{item.role}</h3>{item.company&&<p className="company">{item.company}</p>}<span className="stack mono">{item.technologies.join(' / ').toUpperCase()}</span></div><p>{item.description}</p></Reveal>)}</section>}

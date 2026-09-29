import { services } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
export function Services(){return <section id="services" className="section wrap line"><SectionHeading index="04 / EXPERTISE">What I bring<br/>to the build<span className="accent">.</span></SectionHeading>{services.map((service,i)=><Reveal className="service-row" key={service.title}><span className="index accent">{String(i+1).padStart(2,'0')}</span><h3>{service.title}</h3><p>{service.description}</p></Reveal>)}</section>}

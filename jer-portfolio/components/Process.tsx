import { processSteps } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
export function Process(){return <section id="process" className="section wrap line"><SectionHeading index="05 / PROCESS">From question<br/>to quality<span className="accent">.</span></SectionHeading>{processSteps.map((step,i)=><Reveal className="process-row" key={step.title}><span className="index accent">{String(i+1).padStart(2,'0')}</span><h3>{step.title}</h3><p>{step.description}</p></Reveal>)}</section>}

import Link from 'next/link';
import type { Project } from '@/data/projects';
import { Reveal } from './Reveal';
import { ProjectVisual } from './ProjectVisual';
export function ProjectCard({project}:{project:Project}){return <Reveal className="project"><Link className="project-image-link" href={`/projects/${project.slug}/`} aria-label={`Read the ${project.title} case study`}><ProjectVisual project={project}/></Link><div className="project-info"><span className="index accent">{project.number} /</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="meta muted tech-line">{project.technologies.join(' / ').toUpperCase()}</div></div><div className="project-meta mono">{project.year} · {project.type.toUpperCase()}<br/><Link className="text-link" href={`/projects/${project.slug}/`}>CASE STUDY <span className="arrow" aria-hidden="true">↗</span></Link></div></div></Reveal>}

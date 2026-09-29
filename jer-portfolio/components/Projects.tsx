import { projects } from '@/data/projects';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
export function Projects(){return <section id="projects" className="section wrap line"><SectionHeading index="02 / PROJECTS">Selected work<span className="accent">.</span></SectionHeading><p className="project-disclaimer muted">Four original concept case studies demonstrate the format. Replace them with verified client work, screenshots, and links before publishing as your professional portfolio.</p><div className="project-list">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section>}

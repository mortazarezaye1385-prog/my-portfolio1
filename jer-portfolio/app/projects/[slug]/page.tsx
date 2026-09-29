import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { basePath, site } from '@/data/site';
import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';
export function generateStaticParams(){return projects.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)return {};
  return {title:project.title,description:project.description,alternates:{canonical:`${basePath}/projects/${slug}/`},openGraph:{title:`${project.title} | ${site.name}`,description:project.description,url:`${basePath}/projects/${slug}/`,images:[{url:`${basePath}/og.png`,width:1200,height:630,alt:`${project.title} case study by ${site.name}`}]},twitter:{card:'summary_large_image',images:[`${basePath}/og.png`]}};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();
  return <main id="main"><ProjectCaseStudy project={project}/></main>;
}

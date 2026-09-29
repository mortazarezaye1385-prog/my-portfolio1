import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site, basePath } from '@/data/site';
export default function sitemap():MetadataRoute.Sitemap { const root=`${site.siteUrl}${basePath}`;return [{url:`${root}/`,changeFrequency:'monthly',priority:1},...projects.map(p=>({url:`${root}/projects/${p.slug}/`,changeFrequency:'yearly' as const,priority:.7}))]; }

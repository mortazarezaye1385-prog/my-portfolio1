import type { MetadataRoute } from 'next';
import { site, basePath } from '@/data/site';
export default function robots():MetadataRoute.Robots {return {rules:{userAgent:'*',allow:'/'},sitemap:`${site.siteUrl}${basePath}/sitemap.xml`};}

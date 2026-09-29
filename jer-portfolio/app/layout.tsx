import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site, basePath } from '@/data/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
const origin = new URL(site.siteUrl);
export const metadata: Metadata = {
  metadataBase: origin, title: { default: site.title, template: `%s | ${site.name}` }, description: site.description,
  alternates: { canonical: `${basePath}/` }, icons: { icon: `${basePath}/favicon.svg` }, openGraph: { title: site.title, description: site.description, url: `${basePath}/`, siteName: site.name, type:'website', locale:'en_US', images: [{ url: `${basePath}/og.png`, width:1200, height:630, alt:'Jer, web developer and creative developer' }] },
  twitter: { card:'summary_large_image', title:site.title, description:site.description, images:[`${basePath}/og.png`] }, robots: { index:true, follow:true }
};
export const viewport: Viewport = { width:'device-width', initialScale:1, themeColor:'#151714' };
export default function RootLayout({children}:{children:React.ReactNode}) {
  const structured = [
    {'@context':'https://schema.org','@type':'Person',name:site.name,jobTitle:'Web Developer',email:`mailto:${site.email}`,url:`${site.siteUrl}${basePath}/`},
    {'@context':'https://schema.org','@type':'WebSite',name:site.title,url:`${site.siteUrl}${basePath}/`,description:site.description}
  ];
  return <html lang="en" suppressHydrationWarning><head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    <script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem('jer-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}`}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,'\\u003c')}}/>
  </head><body><a className="skip" href="#main">Skip to content</a><ScrollProgress/><Navbar/>{children}<Footer/></body></html>;
}

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { site } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';
const navigation=[['Home','/#home'],['About','/#about'],['Projects','/#projects'],['Experience','/#experience'],['Contact','/#contact']] as const;
export function Navbar(){
  const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>30);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
  useEffect(()=>{if(!open)return;const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};document.addEventListener('keydown',onKey);return()=>document.removeEventListener('keydown',onKey)},[open]);
  return <header className={`header ${scrolled?'scrolled':''}`}><Link className="brand" href="/#home" aria-label={`${site.name}, home`} onClick={()=>setOpen(false)}><span className="brand-mark">{site.monogram}</span><small>{site.name.toUpperCase()}<br/>DEV / DESIGN</small></Link>
    <nav id="site-nav" className={`navlinks ${open?'open':''}`} aria-label="Main navigation">{navigation.map(([label,href])=><Link key={label} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
    <div className="navright"><ThemeToggle/><Link className="btn navcta" href="/#contact">LET&apos;S TALK <span className="arrow" aria-hidden="true">↗</span></Link><button type="button" className="iconbtn mobile-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label={open?'Close menu':'Open menu'}>{open?<X size={20}/>:<Menu size={20}/>}</button></div>
  </header>;
}

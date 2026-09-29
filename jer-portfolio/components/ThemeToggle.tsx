'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle(){
  const [theme,setTheme]=useState<'dark'|'light'>('dark');
  useEffect(()=>{setTheme(document.documentElement.dataset.theme==='light'?'light':'dark')},[]);
  function toggle(){const next=theme==='dark'?'light':'dark';setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem('jer-theme',next)}catch{/* Storage may be blocked; theme still changes. */}}
  return <button type="button" className="iconbtn" onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title="Toggle theme">{theme==='dark'?<Sun size={18} aria-hidden="true"/>:<Moon size={18} aria-hidden="true"/>}</button>;
}

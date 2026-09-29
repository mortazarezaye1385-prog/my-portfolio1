import { Reveal } from './Reveal';
export function SectionHeading({index,children}:{index:string;children:React.ReactNode}){return <Reveal className="section-head"><h2>{children}</h2><span className="index">{index}</span></Reveal>}

import { site } from '@/data/site';
export function Stats(){return <div className="stats" aria-label="Working principles">{site.stats.map(({value,label})=><div key={label}><span className="stat-number">{value}</span><span className="stat-label">{label}</span></div>)}</div>}

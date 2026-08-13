import type { Project } from '../types'
import { Architecture } from './Architecture'
import { ArrowUpRight } from './Icons'

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const isPending = project.status !== 'Completed'
  return <article className={`project-card reveal ${large ? 'project-large' : ''}`}>
    <div className="project-topline">
      <span className="project-number">{project.number}</span>
      <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}><i />{project.status}</span>
    </div>
    <div className="project-copy">
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-problem">{project.problem}</p>
      <p className="project-description">{project.description}</p>
    </div>
    {project.image ? <div className="project-image"><img src={project.image} alt={`Preview of ${project.title}`} loading="lazy" /></div> : <Architecture steps={project.architecture} />}
    {project.metrics && <div className="metrics-grid">
      {project.metrics.map(metric => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}
    </div>}
    <div className="project-footer">
      <ul className="tag-list" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">Code <ArrowUpRight /></a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">View dashboard <ArrowUpRight /></a>}
        {isPending && <span className="muted-link">Repository coming soon</span>}
      </div>
    </div>
  </article>
}

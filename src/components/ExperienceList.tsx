import { experiences } from '../data/experience'

export function ExperienceList() {
  return <div className="experience-list">
    {experiences.map((item, index) => <article className={`experience-item reveal ${item.prominent ? 'prominent' : ''}`} key={`${item.company}-${item.role}`}>
      <div className="experience-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="experience-title"><p>{item.company}</p><h3>{item.role}</h3></div>
      <div className="experience-detail"><p>{item.description}</p><ul className="tag-list">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
    </article>)}
  </div>
}

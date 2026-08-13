import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Header } from './components/Header'
import { SectionHeading } from './components/SectionHeading'
import { ProjectCard } from './components/ProjectCard'
import { ExperienceList } from './components/ExperienceList'
import { socials, ArrowDownRight, ArrowUpRight } from './components/Icons'
import { projects } from './data/projects'

const skills = [
  { title: 'Systems & Performance', index: '01', values: ['C', 'C++', 'Linux', 'SPDK', 'NVMe', 'Concurrency', 'Networking'] },
  { title: 'Backend & Infrastructure', index: '02', values: ['Python', 'Go', 'FastAPI', 'REST APIs', 'Docker', 'Kubernetes', 'AWS'] },
  { title: 'Data Engineering', index: '03', values: ['SQL', 'ETL / ELT', 'Data Pipelines', 'PostgreSQL', 'Pandas'] },
  { title: 'AI & Applied ML', index: '04', values: ['RAG', 'LLMs', 'Vector Search', 'scikit-learn'] },
  { title: 'DevOps & Observability', index: '05', values: ['Git', 'Jenkins', 'CI/CD', 'Prometheus', 'Grafana'] },
]

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }), { threshold: .08 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return <>
    <Header />
    <main id="main">
      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div className="hero-primary">
            <p className="hero-name"><span />Aniruddha Sonawane</p>
            <h1>I build systems that <em>move, process,</em> and make sense of data.</h1>
            <p className="hero-summary">Software engineer with experience across distributed systems, backend infrastructure, data engineering, and applied AI.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#projects">View projects <ArrowDownRight /></a>
            </div>
          </div>
          <aside className="hero-aside">
            <figure className="portrait"><img src="/images/aniruddha-portrait.jpg" alt="Aniruddha Sonawane" /></figure>
            <div className="availability"><span />Open to engineering opportunities</div>
            <p className="mono-label">Primary toolkit</p>
            <p className="stack">C++ <i>·</i> Python <i>·</i> Go <i>·</i> SQL <i>·</i> Linux <i>·</i> Cloud</p>
            <div className="hero-socials">
              {socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer"><Icon />{label}<ArrowUpRight /></a>)}
            </div>
          </aside>
        </div>
        <div className="snapshot" aria-label="Professional snapshot">
          <div><strong>3+ years</strong><span>Engineering experience</span></div>
          <div><strong>Systems to data</strong><span>Engineering across the stack</span></div>
          <div><strong>Systems → AI</strong><span>Technical range</span></div>
          <div><strong>UIUC · Veritas</strong><span>Experience across research & industry</span></div>
        </div>
      </section>

      <section className="section about shell" id="about">
        <SectionHeading kicker="01 / About" title="Close to the system. Connected to the bigger picture." />
        <div className="about-content reveal">
          <p>I started close to the systems layer, working with Linux, storage, asynchronous I/O, distributed infrastructure, and performance-sensitive software.</p>
          <p>My work has since expanded into backend services, data engineering, analytics, quality engineering, and applied AI. I enjoy engineering problems where performance, reliability, software, and data intersect.</p>
        </div>
      </section>

      <section className="section experience shell" id="experience">
        <SectionHeading kicker="02 / Experience" title="Engineering across layers." intro="Broad technical work spanning enterprise systems, university research, applied AI, data, and quality." />
        <ExperienceList />
      </section>

      <section className="section projects shell" id="projects">
        <SectionHeading kicker="03 / Selected work" title="Problems worth going deep on." intro="Systems, platform, data, and AI projects—documented with architecture, tradeoffs, and measured results when available." />
        <div className="project-grid">{projects.map((project, i) => <ProjectCard key={project.id} project={project} large={i < 2} />)}</div>
      </section>

      <section className="section skills shell" id="skills">
        <SectionHeading kicker="04 / Capabilities" title="A toolkit organized by what it enables." />
        <div className="skills-grid">{skills.map(group => <article className="skill-group reveal" key={group.title}><span>{group.index}</span><h3>{group.title}</h3><ul>{group.values.map(value => <li key={value}>{value}</li>)}</ul></article>)}</div>
      </section>

      <section className="section education shell" id="education">
        <SectionHeading kicker="05 / Education" title="Foundations in information and computing." />
        <div className="education-grid">
          <article className="education-card reveal"><span className="edu-year">2024 — 2026</span><div><p>University of Illinois Urbana-Champaign</p><h3>Master of Science in Information Management</h3><span>Champaign, Illinois</span></div></article>
          <article className="education-card reveal"><span className="edu-year">2017 — 2021</span><div><p>Vishwakarma Institute of Information Technology</p><h3>Bachelor of Technology in Computer Engineering</h3><span>Pune, India</span></div></article>
        </div>
        <div className="leadership reveal"><span className="mono-label">Earlier leadership</span><p>Chairperson, VIIT ACM Student Chapter <i>·</i> Co-Founder, Machine Learning Forum VIIT <i>·</i> Vice President, IoT Forum VIIT</p></div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="kicker">06 / Contact</p>
          <h2>Let’s build something <em>reliable, useful,</em> and technically interesting.</h2>
          <div className="contact-bottom">
            <div><p>Open to software, systems, infrastructure, data, and applied AI roles.</p><span>Champaign, Illinois, USA</span></div>
            <a className="button button-accent button-large" href="mailto:aniruddha080699@gmail.com">Start a conversation <ArrowRight /></a>
          </div>
          <footer>
            <a className="monogram inverse" href="#top">AS<span>.</span></a>
            <div>{socials.map(({ label, href }) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer">{label}</a>)}</div>
            <p>Designed & built with care · © {new Date().getFullYear()}</p>
          </footer>
        </div>
      </section>
    </main>
  </>
}

export default App

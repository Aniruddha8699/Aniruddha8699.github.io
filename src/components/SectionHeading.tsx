interface Props { kicker: string; title: string; intro?: string }

export function SectionHeading({ kicker, title, intro }: Props) {
  return <header className="section-heading reveal">
    <span className="kicker">{kicker}</span>
    <div><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
  </header>
}

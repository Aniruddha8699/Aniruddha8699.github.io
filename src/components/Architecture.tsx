interface Props { steps: string[]; label?: string }

export function Architecture({ steps, label = 'System flow' }: Props) {
  return <div className="architecture" role="img" aria-label={`${label}: ${steps.join(' to ')}`}>
    <div className="architecture-label"><span className="signal" /> {label}</div>
    <div className="architecture-flow">
      {steps.map((step, index) => <div className="architecture-step" key={step}>
        <span>{step}</span>{index < steps.length - 1 && <i aria-hidden="true">→</i>}
      </div>)}
    </div>
  </div>
}

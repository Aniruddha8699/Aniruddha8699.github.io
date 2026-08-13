export type ProjectStatus = 'Completed' | 'In Progress' | 'Coming Soon'

export interface Project {
  id: string
  number: string
  title: string
  eyebrow: string
  problem: string
  description: string
  status: ProjectStatus
  tags: string[]
  architecture: string[]
  metrics?: { label: string; value: string }[]
  github?: string
  demo?: string
  image?: string
  featured?: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  description: string
  tags: string[]
  prominent?: boolean
}

export type ProjectCategory = 'personal' | 'hackathon' | 'open-source' | 'client'

export type Project = {
  id?: string
  title: string
  description: string
  category: ProjectCategory
  tech: string[]
  github?: string
  demo?: string | null
  image?: string
  date?: string
  role?: string
  award?: string
}

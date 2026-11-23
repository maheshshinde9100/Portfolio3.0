import {
  BadgeCheck,
  BriefcaseBusiness,
  FolderKanban,
  Mail,
  Trophy,
  UserRound,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type SectionId =
  | 'about'
  | 'work'
  | 'experience'
  | 'toolkit'
  | 'achievements'
  | 'certifications'
  | 'contact'

export type SectionMeta = {
  id: SectionId
  label: string
  short: string
  icon: LucideIcon
}

export const sections: SectionMeta[] = [
  { id: 'about', label: 'About', short: 'About', icon: UserRound },
  { id: 'work', label: 'Work', short: 'Work', icon: FolderKanban },
  { id: 'experience', label: 'Experience', short: 'Exp', icon: BriefcaseBusiness },
  { id: 'toolkit', label: 'Toolkit', short: 'Tools', icon: Wrench },
  { id: 'achievements', label: 'Achievements', short: 'Awards', icon: Trophy },
  { id: 'certifications', label: 'Certifications', short: 'Certs', icon: BadgeCheck },
  { id: 'contact', label: 'Contact', short: 'Contact', icon: Mail },
]

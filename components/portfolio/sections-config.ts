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
  icon: LucideIcon
}

export const sections: SectionMeta[] = [
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'work', label: 'Work', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'toolkit', label: 'Toolkit', icon: Wrench },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'certifications', label: 'Certifications', icon: BadgeCheck },
  { id: 'contact', label: 'Contact', icon: Mail },
]

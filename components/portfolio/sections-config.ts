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
  index: string
  icon: LucideIcon
}

export const sections: SectionMeta[] = [
  { id: 'about', label: 'About', index: '01', icon: UserRound },
  { id: 'work', label: 'Work', index: '02', icon: FolderKanban },
  { id: 'experience', label: 'Experience', index: '03', icon: BriefcaseBusiness },
  { id: 'toolkit', label: 'Toolkit', index: '04', icon: Wrench },
  { id: 'achievements', label: 'Achievements', index: '05', icon: Trophy },
  { id: 'certifications', label: 'Certifications', index: '06', icon: BadgeCheck },
  { id: 'contact', label: 'Contact', index: '07', icon: Mail },
]

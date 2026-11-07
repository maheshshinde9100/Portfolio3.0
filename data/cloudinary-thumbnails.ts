import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

/** Raw Cloudinary URLs (dmso2cnst) — optimized at read time. */
const RAW: Record<string, string> = {
  'mentee-connect':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716339/mentee-connect-thumbnail_d6q3nb.png',
  shellreq:
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716318/shellreq-npm-package_okz156.png',
  'shellreq-vscode':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716341/shellreq-api-client-thumbnail_coar8z.png',
  'ms-ui-kit':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716331/ms-ui-kit-thumbnail_cvq9nu.png',
  'safe-pilot':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716339/safepilot-thumbnail_sshaur.png',
  'maitri-connect':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716328/maitri-connect-thumbnail_zo8sfo.png',
  'codecomplexity-ai':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716318/code-complexity-ai-thumbnail_wkldcn.png',
  'smart-waste-bin':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716323/smart-waste-bin-thumbnail_nt5ktq.png',
  'insta-clone':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716323/insta-clone-1-thumbnail_zdy7f8.png',
  'portfolio-v3':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716337/portfolio3.0-thumbnail_zydfoi.png',
  'portfolio-v3-hackathon':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716337/portfolio3.0-thumbnail_zydfoi.png',
  'mentor-app':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716325/student-mentoring-app-thumbnail_spkykm.png',
  tasktracker:
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716323/insta-clone-1-thumbnail_zdy7f8.png',
  'portfolio-v2':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716336/portfolio2.0-thumbnail_ailw1m.png',
  'street-supply':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716327/street-supply-thumbnail_oprgyy.png',
  neonquiz:
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716333/neon-quiz-thumbnail_k3mikh.png',
  'fund-for-bharat':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716328/fundforbharat-thumbnail_qut2l4.png',
  'sanjivani-blood-bank':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716352/sanjivani-blood-bank-thumbnail1_ubctpy.png',
  'hotel-dhanlakshmi':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716344/hotel-dhanlakshmi-thumbnail_ayt7o4.png',
  'learn-with-samarth':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716329/learn-with-samarth-thumbnail_fjv1je.png',
  'smart-energy-portal':
    'https://res.cloudinary.com/dmso2cnst/image/upload/v1779716319/smart-energy-portal-thumbnail_zilytk.png',
}

export function getProjectThumbnail(projectId: string | undefined, fallback?: string): string {
  if (projectId && RAW[projectId]) {
    return optimizeCloudinaryUrl(RAW[projectId])
  }
  return fallback ?? '/placeholder.svg?height=720&width=1280'
}

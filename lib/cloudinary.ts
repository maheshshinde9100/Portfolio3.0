/** Delivery transforms: auto format/quality + max width for project cards. */
export function optimizeCloudinaryUrl(url: string, width = 800): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) {
    return url
  }
  const transforms = `f_auto,q_auto,w_${width},c_limit`
  if (url.includes(`/image/upload/${transforms}/`)) {
    return url
  }
  return url.replace('/image/upload/', `/image/upload/${transforms}/`)
}

export function isCloudinaryUrl(src: string): boolean {
  return src.startsWith('https://res.cloudinary.com/')
}

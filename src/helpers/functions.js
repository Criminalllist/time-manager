import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/helpers/constants'

export function normalizeHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }

  window.location.href = `#${PAGE_TIMELINE}`

  return PAGE_TIMELINE
}

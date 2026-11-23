'use client'

/**
 * "2025-<current year>". Rendered in the browser so the static export stays current
 * without a rebuild every January.
 */
export function CopyrightYears({since}: {since: number}) {
  const now = new Date().getFullYear()
  return <span suppressHydrationWarning>{now > since ? `${since}-${now}` : `${since}`}</span>
}

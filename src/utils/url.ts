/** Prepend Astro's base URL to any absolute path. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash

export function url(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('mailto:')) return path;
  const clean = path.startsWith('/') ? path : '/' + path;
  return BASE + clean;
}

import type { APIRoute } from 'astro';

const SITE = 'https://elephants.partners';

const pages = [
  // English
  { url: '/' },
  { url: '/about/' },
  { url: '/contact/' },
  { url: '/careers/' },
  { url: '/privacy/' },
  { url: '/terms/' },
  // Hindi
  { url: '/hi/' },
  { url: '/hi/about/' },
  { url: '/hi/contact/' },
  { url: '/hi/careers/' },
  { url: '/hi/privacy/' },
  { url: '/hi/terms/' },
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(({ url }) => `  <url>
    <loc>${SITE}${url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${url.startsWith('/hi') ? url.replace(/^\/hi/, '') || '/' : url}"/>
    <xhtml:link rel="alternate" hreflang="hi" href="${SITE}/hi${url.startsWith('/hi') ? url.slice(3) || '' : url === '/' ? '' : url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${url.startsWith('/hi') ? url.replace(/^\/hi/, '') || '/' : url}"/>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

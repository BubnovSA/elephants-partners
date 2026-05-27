import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(45,138,106,0.15)"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#F5F1E8"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="6" height="630" fill="#0F4D3F"/>

  <!-- Dark green bottom strip -->
  <rect x="0" y="510" width="1200" height="120" fill="#0F4D3F"/>

  <!-- Elephant icon area -->
  <circle cx="960" cy="260" r="160" fill="rgba(15,77,63,0.06)"/>

  <!-- Elephant silhouette (simplified) -->
  <g transform="translate(860,140)" opacity="0.18">
    <path d="M40 160C40 160 26 148 26 120C26 92 40 80 54 66C68 52 82 52 96 52C110 52 124 38 138 38C166 38 200 52 200 80C200 94 186 108 186 122L200 160H172L160 136C148 143 136 146 122 146C108 146 96 146 88 160H40Z" fill="#0F4D3F" stroke="none"/>
    <rect x="88" y="160" width="14" height="28" rx="7" fill="#0F4D3F"/>
    <rect x="112" y="160" width="14" height="28" rx="7" fill="#0F4D3F"/>
    <circle cx="188" cy="76" r="10" fill="#0F4D3F"/>
  </g>

  <!-- Network decorative lines -->
  <g opacity="0.2" stroke="#2D8A6A" stroke-width="1.5">
    <line x1="800" y1="80" x2="950" y2="180"/>
    <line x1="1050" y1="100" x2="950" y2="180"/>
    <line x1="900" y1="320" x2="950" y2="180"/>
    <line x1="1100" y1="280" x2="950" y2="180"/>
    <circle cx="800" cy="80" r="5" fill="#2D8A6A" stroke="none"/>
    <circle cx="1050" cy="100" r="5" fill="#2D8A6A" stroke="none"/>
    <circle cx="900" cy="320" r="5" fill="#2D8A6A" stroke="none"/>
    <circle cx="1100" cy="280" r="5" fill="#2D8A6A" stroke="none"/>
    <circle cx="950" cy="180" r="8" fill="#2D8A6A" stroke="none"/>
  </g>

  <!-- Logo icon -->
  <g transform="translate(64, 64)">
    <rect width="52" height="52" rx="10" fill="#0F4D3F"/>
    <path d="M12 38C12 38 9.5 35.5 9.5 31C9.5 26.5 12 24 14.5 21.5C17 19 19.5 19 22 19C24.5 19 27 16.5 29.5 16.5C34 16.5 39.5 19 39.5 24C39.5 26.5 37 29 37 31.5L39.5 38H35L33 34C31 35.5 29 36 26.5 36C24 36 22 36 20.5 38H12Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <line x1="20.5" y1="38" x2="20.5" y2="42" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="26.5" y1="38" x2="26.5" y2="42" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="36" cy="23" r="2" fill="white"/>
  </g>

  <!-- Company name -->
  <text x="132" y="88" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="800" letter-spacing="2" fill="#0F4D3F">ELEPHANTS PARTNERS</text>

  <!-- Green rule -->
  <rect x="64" y="170" width="48" height="4" rx="2" fill="#2D8A6A"/>

  <!-- Main headline -->
  <text x="64" y="250" font-family="system-ui,-apple-system,sans-serif" font-size="64" font-weight="800" letter-spacing="-1" fill="#0D0D0D">Payment Infrastructure</text>
  <text x="64" y="330" font-family="system-ui,-apple-system,sans-serif" font-size="64" font-weight="800" letter-spacing="-1" fill="#0D0D0D">for </text>
  <text x="178" y="330" font-family="system-ui,-apple-system,sans-serif" font-size="64" font-weight="800" letter-spacing="-1" fill="#2D8A6A">Emerging Markets</text>

  <!-- Subtitle -->
  <text x="64" y="400" font-family="system-ui,-apple-system,sans-serif" font-size="26" font-weight="400" fill="#5C5649">UPI Processing  ·  Settlement Solutions  ·  Multi-Bank Infrastructure</text>

  <!-- Bottom strip content -->
  <text x="64" y="565" font-family="system-ui,-apple-system,sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.7)">elephants.partners</text>
  <text x="1136" y="565" font-family="system-ui,-apple-system,sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.5)" text-anchor="end">India Operations</text>
</svg>`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};

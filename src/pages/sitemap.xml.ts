import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  const baseUrl = 'https://gaurav.imapro.in';
  
  // Get all HTML files
  let researchPages: string[] = [];
  try {
    const files = await readdir(join(process.cwd(), 'research'));
    researchPages = files
      .filter(file => file.endsWith('.html') && !file.startsWith('TEMPLATE'))
      .map(file => file.replace('.html', ''));
  } catch (error) {
    console.error('Error reading research:', error);
  }
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/research</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${researchPages.map(slug => `
  <url>
    <loc>${baseUrl}/research/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

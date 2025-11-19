export const prerender = false;

export async function GET({ url }: { url: URL }) {
  const hostname = url.hostname;
  
  // If on .pages.dev domain, block everything
  if (hostname.includes('.pages.dev')) {
    return new Response(
      `# Block all crawlers on .pages.dev domains
User-agent: *
Disallow: /

# No sitemap for preview domains`,
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      }
    );
  }
  
  // If on custom domain (gaurav.imapro.in), allow everything including AI training
  return new Response(
    `User-agent: *
Content-signal: search=yes,ai-input=yes,ai-train=yes
Allow: /

# Sitemap location
Sitemap: https://gaurav.imapro.in/sitemap.xml

# Crawl-delay
Crawl-delay: 1`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
}

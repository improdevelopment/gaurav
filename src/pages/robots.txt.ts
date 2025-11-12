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
  
  // If on custom domain (gaurav.imapro.in), allow everything
  return new Response(
    `# Allow all crawlers on custom domain
User-agent: *
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

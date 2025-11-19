globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const prerender = false;
async function GET({ url }) {
  const hostname = url.hostname;
  if (hostname.includes(".pages.dev")) {
    return new Response(
      `# Block all crawlers on .pages.dev domains
User-agent: *
Disallow: /

# No sitemap for preview domains`,
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  }
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
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

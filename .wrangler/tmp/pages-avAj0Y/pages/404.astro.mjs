globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../chunks/astro/server_BNloJvEb.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_CLEFPnkH.mjs';
/* empty css                                 */
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>404 - Page Not Found | Gaurav Agarwal</title><meta name="robots" content="noindex, nofollow"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-zetdm5md> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-zetdm5md": true })} <main class="error-page" data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="error-content animate-fade-in-up" data-astro-cid-zetdm5md> <div class="error-number" data-astro-cid-zetdm5md>404</div> <h1 class="error-title" data-astro-cid-zetdm5md>Page Not Found</h1> <p class="error-description" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or has been moved.
</p> <div class="error-actions" data-astro-cid-zetdm5md> <a href="/" class="btn btn-primary" data-astro-cid-zetdm5md> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zetdm5md> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-zetdm5md></path> <polyline points="9 22 9 12 15 12 15 22" data-astro-cid-zetdm5md></polyline> </svg>
Go Home
</a> <a href="/research" class="btn btn-secondary" data-astro-cid-zetdm5md> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zetdm5md> <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" data-astro-cid-zetdm5md></path> <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" data-astro-cid-zetdm5md></path> </svg>
Research
</a> </div> <div class="error-links" data-astro-cid-zetdm5md> <a href="/#profile" data-astro-cid-zetdm5md>About</a> <a href="/#distinction" data-astro-cid-zetdm5md>Expertise</a> <a href="/#performance-metrics" data-astro-cid-zetdm5md>Results</a> <a href="/#contact" data-astro-cid-zetdm5md>Contact</a> </div> </div> </div> </main>  </body> </html>`;
}, "E:/Developmet/Projects/gaurav/src/pages/404.astro", void 0);

const $$file = "E:/Developmet/Projects/gaurav/src/pages/404.astro";
const $$url = "/404.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderHead, l as renderComponent, o as renderSlot, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BNloJvEb.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_CLEFPnkH.mjs';
import { $ as $$Footer } from '../chunks/Footer_BufHsD-F.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$HTMLWrapperLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Fonts for site navigation/footer --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> <!-- Site Navigation --> ${renderComponent($$result, "Navigation", $$Navigation, {})} <!-- Isolated HTML Content Container --> <div id="html-wrapper-content"> ${renderSlot($$result, $$slots["default"])} </div> <!-- Site Footer --> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "E:/Developmet/Projects/gaurav/src/layouts/HTMLWrapperLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$TestdomeReport = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HTMLWrapperLayout", $$HTMLWrapperLayout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([`   <script src="https://cdn.tailwindcss.com"><\/script> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"><\/script> <script>
    if (typeof tailwind !== 'undefined') {
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              'serif': ['Playfair Display', 'serif'],
              'sans': ['Inter', 'sans-serif'],
            },
            colors: {
              'primary': '#1e293b',
              'secondary': '#475569',
              'accent': '#3b82f6',
              'success': '#10b981',
              'warning': '#f59e0b',
              'error': '#ef4444',
              'muted': '#64748b'
            }
          }
        }
      }
    }
  <\/script>   `, `<nav class="toc-sidebar"> <div class="mb-8"> <h3 class="font-serif font-bold text-lg text-primary mb-4">Contents</h3> <ul class="space-y-2 text-sm"> <li><a href="#hero" class="toc-link block py-1 text-muted hover:text-accent">Hero & Vision</a></li> <li><a href="#market-snapshot" class="toc-link block py-1 text-muted hover:text-accent">Market Snapshot</a></li> <li><a href="#seo-position" class="toc-link block py-1 text-muted hover:text-accent">SEO & Brand Position</a></li> <li><a href="#perception-gap" class="toc-link block py-1 text-muted hover:text-accent">Perception Gap</a></li> <li><a href="#content-gaps" class="toc-link block py-1 text-muted hover:text-accent">Content & Keyword Gaps</a></li> <li><a href="#persona-insights" class="toc-link block py-1 text-muted hover:text-accent">Persona Insights</a></li> <li><a href="#growth-thesis" class="toc-link block py-1 text-muted hover:text-accent">AI-Driven Growth Thesis</a></li> <li><a href="#execution-plan" class="toc-link block py-1 text-muted hover:text-accent">Execution Plan</a></li> <li><a href="#system-loops" class="toc-link block py-1 text-muted hover:text-accent">System Loops</a></li> <li><a href="#measurement" class="toc-link block py-1 text-muted hover:text-accent">Measurement Framework</a></li> <li><a href="#creative-direction" class="toc-link block py-1 text-muted hover:text-accent">Creative Direction</a></li> <li><a href="#closing-vision" class="toc-link block py-1 text-muted hover:text-accent">Closing Vision</a></li> </ul> </div> </nav> <button id="tocToggle" class="fixed top-24 left-4 z-50 lg:hidden bg-primary text-white p-3 rounded-full shadow-lg"> <i class="fas fa-bars"></i> </button> <main class="main-content"> <!-- PASTE YOUR COMPLETE HTML SECTIONS HERE --> <section id="hero" class="relative min-h-screen"> <div class="absolute inset-0"> <div class="hero-overlay absolute inset-0"></div> </div> <div class="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-16"> <div class="bento-grid grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-screen"> <div class="lg:col-span-2 flex flex-col justify-center"> <div class="space-y-8"> <div class="space-y-4"> <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight italic">
AI-led Skill Assessment
<span class="block text-accent">for Modern Hiring</span> </h1> <p class="text-xl lg:text-2xl text-gray-200 font-light max-w-2xl">
Empowering recruiters to trust skills at scale in a rapidly evolving talent landscape
</p> </div> <div class="flex flex-wrap gap-4 text-sm text-gray-300"> <span class="flex items-center"> <i class="fas fa-chart-line mr-2 text-accent"></i>$6B Market by 2033
</span> <span class="flex items-center"> <i class="fas fa-rocket mr-2 text-accent"></i>15% CAGR Growth
</span> <span class="flex items-center"> <i class="fas fa-brain mr-2 text-accent"></i>AI-Driven Solutions
</span> </div> </div> </div> <div class="space-y-6"> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"> <h3 class="font-serif text-xl font-bold text-white mb-4">Market Opportunity</h3> <div class="space-y-3 text-sm text-gray-200"> <div class="flex justify-between"> <span>Current Market Size</span> <span class="font-bold text-accent">$2.5B</span> </div> <div class="flex justify-between"> <span>Projected 2033</span> <span class="font-bold text-success">$6B</span> </div> <div class="flex justify-between"> <span>Growth Rate</span> <span class="font-bold text-warning">15% CAGR</span> </div> </div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"> <h3 class="font-serif text-xl font-bold text-white mb-4">Strategic Challenge</h3> <p class="text-sm text-gray-200 leading-relaxed">
"Known test, unknown brand" - Closing the perception gap through AI-driven authority building
</p> </div> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"> <h3 class="font-serif text-xl font-bold text-white mb-4">Growth Thesis</h3> <p class="text-sm text-gray-200 leading-relaxed">
Transform perception into authority through strategic content clusters and AI innovation
</p> </div> </div> </div> </div> </section> <!-- Continue pasting your sections here... --> <section id="market-snapshot" style="padding: 5rem 2rem; background: white; text-align: center;"> <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #1e293b;">Continue pasting your HTML sections here...</h2> <p style="color: #64748b;">This wrapper preserves all your styles and scripts</p> </section> </main> <script>
    // Your complete JavaScript
    document.addEventListener('DOMContentLoaded', function() {
      const tocSidebar = document.querySelector('.toc-sidebar');
      const tocToggle = document.getElementById('tocToggle');
      const tocLinks = document.querySelectorAll('.toc-link');

      if (tocToggle) {
        tocToggle.addEventListener('click', function() {
          tocSidebar.classList.toggle('open');
        });
      }

      function handleResize() {
        if (window.innerWidth >= 1025) {
          tocSidebar.classList.remove('open');
        }
      }
      window.addEventListener('resize', handleResize);

      tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            if (window.innerWidth <= 1024) {
              tocSidebar.classList.remove('open');
            }
          }
          tocLinks.forEach(function(l) {
            l.classList.remove('active');
          });
          link.classList.add('active');
        });
      });

      window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 150;
        document.querySelectorAll('section[id]').forEach(function(section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          const id = section.getAttribute('id');
          if (scrollPos >= top && scrollPos <= bottom) {
            tocLinks.forEach(function(link) {
              link.classList.remove('active');
            });
            const activeLink = document.querySelector('.toc-link[href="#' + id + '"]');
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        });
      });
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "E:/Developmet/Projects/gaurav/src/pages/testdome-report.astro", void 0);

const $$file = "E:/Developmet/Projects/gaurav/src/pages/testdome-report.astro";
const $$url = "/testdome-report.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestdomeReport,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

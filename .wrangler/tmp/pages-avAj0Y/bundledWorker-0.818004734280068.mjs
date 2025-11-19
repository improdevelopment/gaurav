var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_CTxwkz_b.mjs";
import { manifest } from "./manifest_tWUjBi3L.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/404.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/privacy-policy.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/research/_slug_.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/research.astro.mjs"), "_page4");
var _page5 = /* @__PURE__ */ __name(() => import("./pages/robots.txt.astro.mjs"), "_page5");
var _page6 = /* @__PURE__ */ __name(() => import("./pages/sitemap.xml.astro.mjs"), "_page6");
var _page7 = /* @__PURE__ */ __name(() => import("./pages/terms-conditions.astro.mjs"), "_page7");
var _page8 = /* @__PURE__ */ __name(() => import("./pages/testdome-report.astro.mjs"), "_page8");
var _page9 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page9");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/@astrojs+cloudflare@12.6.10_astro@5.15.3/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/404.astro", _page1],
  ["src/pages/privacy-policy.astro", _page2],
  ["src/pages/research/[slug].astro", _page3],
  ["src/pages/research/index.astro", _page4],
  ["src/pages/robots.txt.ts", _page5],
  ["src/pages/sitemap.xml.ts", _page6],
  ["src/pages/terms-conditions.astro", _page7],
  ["src/pages/testdome-report.astro", _page8],
  ["src/pages/index.astro", _page9]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => import("./noop-entrypoint.mjs"), "actions"),
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.818004734280068.mjs.map

globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as defineMiddleware, s as sequence } from './chunks/index_G5I78B8n.mjs';
import './chunks/astro-designed-error-pages_W3K8SLxW.mjs';
import './chunks/astro/server_BNloJvEb.mjs';

const onRequest$2 = defineMiddleware(async (context, next) => {
  const hostname = context.url.hostname;
  if (hostname.includes(".pages.dev")) {
    const response = await next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  return next();
});

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };

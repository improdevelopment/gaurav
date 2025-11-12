import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const hostname = context.url.hostname;
  
  // Block all .pages.dev domains from being indexed
  if (hostname.includes('.pages.dev')) {
    const response = await next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }
  
  return next();
});

// Cloudflare supplies CF_PAGES_URL during Pages builds. SITE_URL can override it
// when a custom domain is attached or a local production build is uploaded.
export const siteUrl = (
  process.env.SITE_URL ||
  process.env.CF_PAGES_URL ||
  'https://wanhua-yihua-floor.t16754123.chatgpt.site'
).replace(/\/+$/, '');

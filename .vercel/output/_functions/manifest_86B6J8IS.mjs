import { g as decodeKey } from './chunks/astro/server_DFDvaaKj.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bv1wg0ab.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/","cacheDir":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/node_modules/.astro/","outDir":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/dist/","srcDir":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/src/","publicDir":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/public/","buildClientDir":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/dist/client/","buildServerDir":"file:///D:/Project%20Web%20Cremas%20y%20mil%20hojas/cremas%20y%20mil%20hojas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"pago/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pago","isIndex":false,"type":"page","pattern":"^\\/pago\\/?$","segments":[[{"content":"pago","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pago.astro","pathname":"/pago","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.8_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1._blskgdzdptbct7av2v6336v4jy/node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Project Web Cremas y mil hojas/cremas y mil hojas/src/components/Ocasion.astro",{"propagation":"in-tree","containsHead":false}],["D:/Project Web Cremas y mil hojas/cremas y mil hojas/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/Project Web Cremas y mil hojas/cremas y mil hojas/src/components/Productos.astro",{"propagation":"in-tree","containsHead":false}],["D:/Project Web Cremas y mil hojas/cremas y mil hojas/src/pages/login.astro",{"propagation":"none","containsHead":true}],["D:/Project Web Cremas y mil hojas/cremas y mil hojas/src/pages/pago.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1._blskgdzdptbct7av2v6336v4jy/node_modules/auth-astro/src/api/[...auth]@_@ts":"pages/api/auth/_---auth_.astro.mjs","\u0000@astro-page:src/pages/pago@_@astro":"pages/pago.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.8_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","D:/Project Web Cremas y mil hojas/cremas y mil hojas/node_modules/.pnpm/astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.8_typescript@5.7.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CqO8EZ5q.mjs","D:\\Project Web Cremas y mil hojas\\cremas y mil hojas\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","D:\\Project Web Cremas y mil hojas\\cremas y mil hojas\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CS4vKhmB.mjs","\u0000@astrojs-manifest":"manifest_86B6J8IS.mjs","D:/Project Web Cremas y mil hojas/cremas y mil hojas/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1._blskgdzdptbct7av2v6336v4jy/node_modules/auth-astro/src/components/SignIn.astro?astro&type=script&index=0&lang.ts":"_astro/SignIn.astro_astro_type_script_index_0_lang.C2J352-3.js","D:/Project Web Cremas y mil hojas/cremas y mil hojas/node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1._blskgdzdptbct7av2v6336v4jy/node_modules/auth-astro/src/components/SignOut.astro?astro&type=script&index=0&lang.ts":"_astro/SignOut.astro_astro_type_script_index_0_lang.tf8tH__s.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/banner.CCpZbpdb.png","/_astro/baguette1.CU-4EEa-.png","/_astro/croissant1.QJthmwRJ.png","/_astro/logo_white.BBomvQ7i.svg","/_astro/index.DZqbjwAh.css","/alfajor.png","/baguette1.png","/banner.png","/carrot_cake.png","/croisant.png","/croissant1.png","/croissant2.png","/empanada.png","/favicon.svg","/milhojas.png","/js/cart.js","/js/pago.js","/_astro/client.dFrp1GRx.js","/_astro/SignIn.astro_astro_type_script_index_0_lang.C2J352-3.js","/_astro/SignOut.astro_astro_type_script_index_0_lang.tf8tH__s.js","/login/index.html","/pago/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Uy1pdYsHGopfQZsPDxDJNj5/kGkKB2xin+ZSElFuO2o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

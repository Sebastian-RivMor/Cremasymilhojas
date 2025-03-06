import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cr1tgP2Q.mjs';
import { manifest } from './manifest_o3Jv46oa.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page2 = () => import('./pages/login.astro.mjs');
const _page3 = () => import('./pages/pago.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.4.1_@types+node@22._489a071e44303d60f22deb41c70ff0b6/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/auth-astro@4.2.0_@auth+core_bd98555308db19c5261cbfef7faf312f/node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/login.astro", _page2],
    ["src/pages/pago.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "11ea2b1d-172b-43e5-a8e9-edb477f42c10",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

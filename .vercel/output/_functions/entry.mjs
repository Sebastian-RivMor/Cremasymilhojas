import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DS-NZk0R.mjs';
import { manifest } from './manifest_D-lPRmha.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page2 = () => import('./pages/login.astro.mjs');
const _page3 = () => import('./pages/pago.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.8_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/auth-astro@4.2.0_@auth+core@0.37.4_astro@5.3.0_@types+node@22.13.5_jiti@2.4.2_lightningcss@1._blskgdzdptbct7av2v6336v4jy/node_modules/auth-astro/src/api/[...auth].ts", _page1],
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
    "middlewareSecret": "437855a6-41d9-4580-8f9a-c137259838c8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

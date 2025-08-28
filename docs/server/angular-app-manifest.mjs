
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/fiori/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-JAVL5M3H.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 9240, hash: '1d79c78c6ef14cf11bf0f2b0589a86eb9204ba94ed6c912021af414bb159ad1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7901, hash: '1e570251df6c5eceeb445e0604f4e3dca56ac255d3e24e74b58a80a69fd9940b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFIMHRCX.css': {size: 62321, hash: 'L0OmKYCwDjc', text: () => import('./assets-chunks/styles-ZFIMHRCX_css.mjs').then(m => m.default)}
  },
};

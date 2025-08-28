
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 9234, hash: '1af0efe3df218603eaa47233d523aa1663c99ca7f21408cf94ad5beb6571abf4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7895, hash: '4b5478808f55bf5060c642f796fd1762409ab18e8f201da46c17fd3ac29b185d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFIMHRCX.css': {size: 62321, hash: 'L0OmKYCwDjc', text: () => import('./assets-chunks/styles-ZFIMHRCX_css.mjs').then(m => m.default)}
  },
};

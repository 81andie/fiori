
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
    'index.csr.html': {size: 8998, hash: '32157ce971d30f7fa3cb0390ba8fb917d5b728580a5be6b1aacae93a87e4dc6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7659, hash: '1d3130894324e295381831290b6770acb650705b95b6acfd82b4aab1beae76e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFIMHRCX.css': {size: 62321, hash: 'L0OmKYCwDjc', text: () => import('./assets-chunks/styles-ZFIMHRCX_css.mjs').then(m => m.default)}
  },
};

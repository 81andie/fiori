
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
    'index.csr.html': {size: 8992, hash: 'e03a9fec87f9c3f88b49d5ad7b9a29e4fa8bfa6188677f4fb3a645274a750953', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7653, hash: '67cb650c0309a6fd4f701a363203aafffcdee84516d7169f7a5b2483daca88ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OHVRR34X.css': {size: 62507, hash: 'd1OyDGBdHZs', text: () => import('./assets-chunks/styles-OHVRR34X_css.mjs').then(m => m.default)}
  },
};

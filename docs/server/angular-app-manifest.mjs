
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
    'index.csr.html': {size: 8998, hash: '1eb5b3b3245f1514c660c48a29e0571a57091db8a86d58a2160d6e20a74ad146', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7659, hash: 'd37fa7b805932691965cd7683d75895e9922365f91c226980501c233b533748a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OHVRR34X.css': {size: 62507, hash: 'd1OyDGBdHZs', text: () => import('./assets-chunks/styles-OHVRR34X_css.mjs').then(m => m.default)}
  },
};

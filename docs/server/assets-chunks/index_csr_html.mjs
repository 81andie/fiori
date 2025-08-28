export default `<!doctype html>
<html lang="en" data-beasties-container="">

<head>
  <meta charset="utf-8">
  <title>Fiori Poetic Blog</title>

  <base href="/fiori/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="favicon" href="favicon.ico">
  <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <style>@font-face{font-family:'DM Serif Display';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v16/-nFhOHM81r4j6k0gjAW3mujVU2B2G_VB3vD212k.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'DM Serif Display';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v16/-nFhOHM81r4j6k0gjAW3mujVU2B2G_VB0PD2.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'DM Serif Display';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v16/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'DM Serif Display';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v16/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Josefin Sans';font-style:italic;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinsans/v33/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Josefin Sans';font-style:italic;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinsans/v33/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Josefin Sans';font-style:italic;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinsans/v33/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Josefin Sans';font-style:normal;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinsans/v33/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Josefin Sans';font-style:normal;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinsans/v33/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Josefin Sans';font-style:normal;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinsans/v33/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Josefin Slab';font-style:italic;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinslab/v28/lW-nwjwOK3Ps5GSJlNNkMalnrz6tDs8.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Josefin Slab';font-style:normal;font-weight:100 700;font-display:swap;src:url(https://fonts.gstatic.com/s/josefinslab/v28/lW-5wjwOK3Ps5GSJlNNkMalnqg6v.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Special Elite';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/specialelite/v19/XLYgIZbkc4JPUL5CVArUVL0ntn4OSEFt.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Special Elite';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/specialelite/v19/XLYgIZbkc4JPUL5CVArUVL0ntnAOSA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <script src="https://kit.fontawesome.com/af64402f5c.js" crossorigin="anonymous"></script>
<style>*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}*,:before,:after{box-sizing:border-box}html,body{margin:0;padding:0;scroll-behavior:unset}body{font-family:Special Elite,system-ui}body{top:0!important}</style><link rel="stylesheet" href="styles-OHVRR34X.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-OHVRR34X.css"></noscript></head>

<body ngcm="">

  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
<!--
  <div class="relative z-50">
    <div id="google_translate_element" class="bg-violet-100 bg-opacity-45  m-1 flex float-end fixed"></div>


    <script type="text/javascript">
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          { pageLanguage: 'es', includedLanguages: 'en,fr,de,it,ca,pt,es,zh-CN,ja,ru' },
          'google_translate_element'
        );
      }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
    </script>
  </div>

  -->
  <app-root></app-root>
<link rel="modulepreload" href="chunk-6OK7FI3B.js"><script src="polyfills-B6TNHZQ6.js" type="module"></script><script src="scripts-2TS5KZFG.js" defer=""></script><script src="main-74KS3SQV.js" type="module"></script></body>

</html>
`;
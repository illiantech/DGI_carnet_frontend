if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const d=e=>n(e,s),a={module:{uri:s},exports:c,require:d};i[s]=Promise.all(r.map((e=>a[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BHGx67Hg.js",revision:null},{url:"assets/index-C5HFYbos.css",revision:null},{url:"index.html",revision:"9cf2e5a7ac02765843761949fdcdb634"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"1dda59df438802607c778524d4ad454e"},{url:"favicon-16x16.png",revision:"c8e6e0bda006ca886f448a06c5d79a1a"},{url:"favicon-32x32.png",revision:"75907aea38dea6a1963a7129e5f36abc"},{url:"apple-touch-icon.png",revision:"5e8defa02e03055a16ce22a0cbcef7ce"},{url:"android-chrome-192x192.png",revision:"d21ee20078c21be8035900d90fa449a0"},{url:"android-chrome-512x512.png",revision:"49e51a87e4cd87e4a3321dd1ab4ad344"},{url:"manifest.webmanifest",revision:"1ce9797d3d8b088fd4b555816ceaef0c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

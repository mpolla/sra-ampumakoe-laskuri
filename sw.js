if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const u=e=>i(e,r),o={module:{uri:r},exports:a,require:u};s[r]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(l(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"3c0ce29b3c58b6268644e48c41513e87"},{url:"assets/9mm-fd4274cc.jpg",revision:null},{url:"assets/AboutView-66ba0966.css",revision:null},{url:"assets/AboutView-9ad957c5.js",revision:null},{url:"assets/index-7fd46b25.css",revision:null},{url:"assets/index-8f13836a.js",revision:null},{url:"assets/logo-a78ed934.svg",revision:null},{url:"assets/metsa-013335ea.jpg",revision:null},{url:"assets/pahvitaulu-96be109c.png",revision:null},{url:"assets/pahvitaulu2024-b8318555.png",revision:null},{url:"assets/Saannot-805c7eb7.js",revision:null},{url:"assets/Saannot-aef8a153.css",revision:null},{url:"assets/tausta-7bc6ecb8.jpg",revision:null},{url:"assets/TurvallisuusView-b3ec3afa.css",revision:null},{url:"assets/TurvallisuusView-f353e49a.js",revision:null},{url:"favicon.ico",revision:"b64d3c1b50d98efd3849d1c66ff039c7"},{url:"index.html",revision:"fee03af829620783b8a2d29011e733a4"},{url:"logo.svg",revision:"cb6ad7fc66d0a06dfad0f578d4817add"},{url:"maskable-icon-512x512.png",revision:"ddc82ea8ee9d634d6a40c20dbc794b5c"},{url:"pwa-192x192.png",revision:"d5d5c905607b817ab19bbb9347f37ff6"},{url:"pwa-512x512.png",revision:"4078fbb4e91aa87b8f5ce9191a45809f"},{url:"pwa-64x64.png",revision:"91633c0d435700cf77242e10242c8e85"},{url:"registerSW.js",revision:"e347872934399849387cf1972214a858"},{url:"sra-ampumakoe.pdf",revision:"1fb558918f7ad08a25626cb5fb4d28db"},{url:"pwa-192x192.png",revision:"d5d5c905607b817ab19bbb9347f37ff6"},{url:"pwa-512x512.png",revision:"4078fbb4e91aa87b8f5ce9191a45809f"},{url:"maskable-icon-512x512.png",revision:"ddc82ea8ee9d634d6a40c20dbc794b5c"},{url:"manifest.webmanifest",revision:"363bcff46fe373b84ee46cb2c7d0ab92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,c,r)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return a;case"module":return n;default:return e(i)}})).then(e=>{const i=r(...e);return a.default||(a.default=i),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"1VaVxwvAuTektAFteBUNI"},{url:"/_next/static/1VaVxwvAuTektAFteBUNI/_buildManifest.js",revision:"4d8ace005677c15c790a8fd0ce941593"},{url:"/_next/static/1VaVxwvAuTektAFteBUNI/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/1VaVxwvAuTektAFteBUNI/pages/_app.js",revision:"25e837bd41c16e6cc52cdfd333b69374"},{url:"/_next/static/1VaVxwvAuTektAFteBUNI/pages/_error.js",revision:"4f9294e5d1338e2b12e78fe6564d6ba8"},{url:"/_next/static/1VaVxwvAuTektAFteBUNI/pages/index.js",revision:"e0c9f9e7423c9581cde9eeaf701e3ca9"},{url:"/_next/static/chunks/1bfc9850.ad7a61d74860b3aec22f.js",revision:"cbf392b1a2576078793fd43ed156e8c2"},{url:"/_next/static/chunks/6ee3a84045b64d70ed45c3621968eb65522b390f.3a87f9d2eed8415a7739.js",revision:"81cbc6a10307839a08e4bc7cee313ecf"},{url:"/_next/static/chunks/96bc00e987846a75db0c4d319a75f900da193596.23262af25f42ce36f252.js",revision:"9e6503a592c6c17a042ab872830cc852"},{url:"/_next/static/chunks/bee240a3.943dee36d437fa27e8e5.js",revision:"da4db61075d5316e2c86e2c99c411e39"},{url:"/_next/static/chunks/framework.c8d289f8b96717e32d7a.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/runtime/main-2d72f182b1f56a64c8d6.js",revision:"d5732771756748fdcce778048ec5ec9f"},{url:"/_next/static/runtime/polyfills-f500672a22b5a3a6edae.js",revision:"b90027b8c6dbfffa74ab23adcdfcbebe"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-icon-144x144.png",revision:"07d244b0e154e1de914ee717744d529d"},{url:"/android-icon-192x192.png",revision:"a69041dc5ca7e64e43c84a15a98bc28c"},{url:"/android-icon-36x36.png",revision:"bdf25bfa55df8d7ba5e55bef7e58dcea"},{url:"/android-icon-48x48.png",revision:"146573ebee89ca1bfb1dcdd56638a18d"},{url:"/android-icon-72x72.png",revision:"14594022bb4e4f0d71a88a85a99bfa1b"},{url:"/android-icon-96x96.png",revision:"770d965173ccdd7f49f1a1271908a9f0"},{url:"/apple-icon-114x114.png",revision:"2f60854cf22ef63777a4802743a9e7b9"},{url:"/apple-icon-120x120.png",revision:"6bfbd6ec9a91648d1bcd096036d81a03"},{url:"/apple-icon-144x144.png",revision:"87d0133e1f18010032164beabf7662e2"},{url:"/apple-icon-152x152.png",revision:"791c932686939faefd611f98fda7d385"},{url:"/apple-icon-180x180.png",revision:"7edf7920d50d7032043708b325d172cc"},{url:"/apple-icon-57x57.png",revision:"47f85dab9105618ca5cdfcf943068bd5"},{url:"/apple-icon-60x60.png",revision:"8f8b2b3d2ede174d2cc3854a1fd1201f"},{url:"/apple-icon-72x72.png",revision:"4b6af7caffdd57a40cd9f1b5f046d171"},{url:"/apple-icon-76x76.png",revision:"56319432c68c90ad99a453ab2e67c8bc"},{url:"/apple-icon-precomposed.png",revision:"34539a295541aac25243302edf9a9d2a"},{url:"/apple-icon.png",revision:"3ee824ca3ff337278edd5155ea9923c1"},{url:"/browserconfig.xml",revision:"e0b7bb895ea7194b5afa9ed3b07200f3"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon-96x96.png",revision:"4903eb1430037599667b0bbdf9c74ec5"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/icons/icon-128x128.png",revision:"db7481a04968b3ad4716436d30b3e409"},{url:"/icons/icon-144x144.png",revision:"689a1926530ed6ca26db537029c1dfd7"},{url:"/icons/icon-152x152.png",revision:"98af072da209b3b297308717b06ea86c"},{url:"/icons/icon-192x192.png",revision:"7ab8c82581552c7558c5b009ffcb3cd2"},{url:"/icons/icon-384x384.png",revision:"aae6d1f552c78e06bf42aae2462a98fa"},{url:"/icons/icon-512x512.png",revision:"837ab4469c705c188326cec571ecb227"},{url:"/icons/icon-72x72.png",revision:"cb6e3fb9db7db52f0986da1ff9bab188"},{url:"/icons/icon-96x96.png",revision:"7d8348b60cdd985bd24b48cb56855c1a"},{url:"/img/app-store.png",revision:"2a34f7781a9137592b550cc64de1adc9"},{url:"/img/app-store.webp",revision:"08173a2dff1458a4da82f683475de567"},{url:"/img/apple-tv.png",revision:"442b0f64743ef4fbd4f1450b06c9c48b"},{url:"/img/apple-tv.webp",revision:"9e144fa80a95f0f58cdab3c180aedb06"},{url:"/img/calculator.png",revision:"d0793e3f720f89eb1993d4b79dcb3a7c"},{url:"/img/calculator.webp",revision:"f2753ca0ce08910a38d95efacf8f2254"},{url:"/img/calendar.png",revision:"63736b0c9061e38f8d708da662c22256"},{url:"/img/calendar.webp",revision:"52ed74bd5294406a8576df1079b11aec"},{url:"/img/camera.png",revision:"9c9463e082fc6ff69c92652cb5991621"},{url:"/img/camera.webp",revision:"9137c81d3af6fd45dca550f8a44d47ab"},{url:"/img/clock.png",revision:"fe45236acdf109b71ac1fd9fb19cb967"},{url:"/img/clock.webp",revision:"2df5c8fae4a8937091db598b53ecb9a5"},{url:"/img/facebook.png",revision:"3e57456c59ea7ed48045e55453cd395b"},{url:"/img/facebook.webp",revision:"efecbe5fe844250175770fc1c6cb4942"},{url:"/img/facetime.png",revision:"86908fb2c3bd56c4df4a5b50229f5916"},{url:"/img/facetime.webp",revision:"5aea5adeb00f29a83abce444fd62a668"},{url:"/img/find my iphone,ios,ios 13,ios13,ipad os,ui,iphone os,1575949.png",revision:"611f56d362d7d75034d8894c42730f48"},{url:"/img/find my iphone,ios,ios 13,ios13,ipad os,ui,iphone os,1575949.webp",revision:"67eac62952d162a5c1887b9caf624cca"},{url:"/img/health.png",revision:"7fed7aa7acbf1b5b25fc985eec9d8edb"},{url:"/img/health.webp",revision:"d5c948a0f25d1f4fb10c35e3229dc76c"},{url:"/img/home.png",revision:"011d42fa1e018f5ea64e1651a81f2a8f"},{url:"/img/home.webp",revision:"aec62fb36a879f1792a97f181b26cf0b"},{url:"/img/homescreen.webp",revision:"49c08903033ea41f30d1fff3199c588c"},{url:"/img/ibooks.png",revision:"4bd5242941984837940f52ca8d295592"},{url:"/img/ibooks.webp",revision:"919e2436d4a4f5597a2d4e8aff518084"},{url:"/img/instagram.png",revision:"591c9e005c0c61c4dc7f16a3e703e8ab"},{url:"/img/instagram.webp",revision:"8376d344108ebccab269bd9e9f2c7881"},{url:"/img/itunes.png",revision:"ec10ae3c5103426ab92e6db08e4a0d7d"},{url:"/img/itunes.webp",revision:"5de1af0dfd0810e88a0c68358c604d56"},{url:"/img/linkedin.png",revision:"e4bbfd1f71658e9df5a861daba86c480"},{url:"/img/linkedin.webp",revision:"796d2fb8c4a213694e74f5f74f089bf6"},{url:"/img/mail.png",revision:"ec7717a40e7316aa0c4630fb13342325"},{url:"/img/mail.webp",revision:"a5fc6822454ab12cba6eadca3298af02"},{url:"/img/maps.png",revision:"df577452c7a9526893fa2e825fceb34a"},{url:"/img/maps.webp",revision:"5714ca078c933d1a0e8a18fb5b3565cb"},{url:"/img/messages.png",revision:"30cad49fa43cd51df42f69a07e90baae"},{url:"/img/messages.webp",revision:"93d134adb46a8735bbd473e3ee4ba489"},{url:"/img/messenger.png",revision:"66e1873f42dc53f5241a061850350557"},{url:"/img/messenger.webp",revision:"a8d7b23fb549f991204777090fa88b74"},{url:"/img/news.png",revision:"d06797f457538a9e7d6d9b7291a2d8e5"},{url:"/img/news.webp",revision:"e5d235e5975b64cdb1152f62decdda72"},{url:"/img/notes.png",revision:"8835ed5bbe3227e4c62d18ba648929c4"},{url:"/img/notes.webp",revision:"387d74224fe0366ddf7893137b662b09"},{url:"/img/paypal.png",revision:"c764dd8d877ab78c3d72fbf3b032d58a"},{url:"/img/paypal.webp",revision:"e8e3cb5c45be289f615e894fc5823d9d"},{url:"/img/phone.png",revision:"0285bd368060a5bfe53ca22cdbe65282"},{url:"/img/phone.webp",revision:"0529cc50a754b06674d59d4f933d8959"},{url:"/img/photos.png",revision:"a50cc5ab2861bce9a7da07745aa6d1f1"},{url:"/img/photos.webp",revision:"d729eebdd80b3b04cd82c26958fcd763"},{url:"/img/pinterest.png",revision:"f21518d58cc7c736395b4894ee302862"},{url:"/img/pinterest.webp",revision:"97e32e8b342f83e5d2ae7ac4c07a0a45"},{url:"/img/reddit.png",revision:"ddf3060f7357c8a2a9941ab47e363da8"},{url:"/img/reddit.webp",revision:"445d13db73d7f09f77026693a4f22800"},{url:"/img/reminders.png",revision:"2b3eba8cb067fce12c09d3e0acc254e5"},{url:"/img/reminders.webp",revision:"9c631c81a9fd80a62bdb95afa015d2f0"},{url:"/img/settings.png",revision:"d805b61067d4d52d1b7906ae89e28b9f"},{url:"/img/settings.webp",revision:"f857308b403f370e596b8b47a5e28494"},{url:"/img/skype.png",revision:"c72dec6cb9453c0a7bdb4c382e10fc03"},{url:"/img/skype.webp",revision:"d15047b1ba5ee820b1024a5153e6fd7c"},{url:"/img/slack.png",revision:"d92be9775d0ad63fb2c9486137645692"},{url:"/img/slack.webp",revision:"130da5eb4d3e859e4d75e02c3ccb3df9"},{url:"/img/snapchat.png",revision:"dcf079c288935174b06ede9a27f0f2da"},{url:"/img/snapchat.webp",revision:"6a2eef7b4f6e9d552ebf4594d825aabd"},{url:"/img/spotify.png",revision:"4274e043fc31d01a237294c72e324ff7"},{url:"/img/spotify.webp",revision:"cde1eee8735f4d25a3edbe29c1c0bbbb"},{url:"/img/stocks.png",revision:"f6913536e1c99b62ce0352bae0564bc6"},{url:"/img/stocks.webp",revision:"a37e5c03c7e435b2888701f7f057556d"},{url:"/img/stripe.png",revision:"6fc3590c55546e3d6835c763bd5f662f"},{url:"/img/stripe.webp",revision:"d6c96d06fcb9cd06bbc775b05fc77ef6"},{url:"/img/tumblr.png",revision:"472953f6fce6b47b8fe4bfa7dc4e9bb4"},{url:"/img/tumblr.webp",revision:"81b6c5c4ba5145dcc53792519fd57365"},{url:"/img/tv.png",revision:"22eb62cfe5da2f0a6a5a81a3de874ab4"},{url:"/img/tv.webp",revision:"c8382dda1cc9bceb9960458e3ab5c9b4"},{url:"/img/twitter.png",revision:"4634a48d67ceb3ace5bca9581292cdd4"},{url:"/img/twitter.webp",revision:"66e51fccd84100d096527d12ed9ac538"},{url:"/img/wallet.png",revision:"3da7f6c2feba15de2bf0f6f4afb041b2"},{url:"/img/wallet.webp",revision:"cae31858a9f17c4b662c8a37ed88a770"},{url:"/img/weather.png",revision:"12674ca6e87d1aba426b52e5f8dce2b5"},{url:"/img/weather.webp",revision:"f985339b954bd7bff1fe0ab4edf93084"},{url:"/img/youtube.png",revision:"73b57e53ea73cd871318868889a8ac5d"},{url:"/img/youtube.webp",revision:"7024ff15bfaf95a027b97008c0a2f658"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/ms-icon-144x144.png",revision:"497f7937d961fce92c945c426e5b1b30"},{url:"/ms-icon-150x150.png",revision:"fcc5e1d449de106a7ba0dd67a532526f"},{url:"/ms-icon-310x310.png",revision:"02a82c256fdcf514f69f180c5064e2d5"},{url:"/ms-icon-70x70.png",revision:"09714d62a2274008b638fdf3f996135e"},{url:"/vercel.svg",revision:"0222c3eef0be0734c8cd707b37c55d7e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

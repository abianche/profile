'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "82375364883117c030e58cfdf1c13d44",
"assets/AssetManifest.json": "34975730e35d591d5e8c8279cfe05884",
"assets/assets/google_fonts/NotoSans-Black.ttf": "7344fa7bfdc91692c2005063dfd8d9e5",
"assets/assets/google_fonts/NotoSans-BlackItalic.ttf": "cf36d264a78d3f4a38f18bebfb5038d7",
"assets/assets/google_fonts/NotoSans-Bold.ttf": "b20e2d260790596b6f6624a42b9c7833",
"assets/assets/google_fonts/NotoSans-BoldItalic.ttf": "6a1b004f6b834a3a3099373655ede470",
"assets/assets/google_fonts/NotoSans-ExtraBold.ttf": "378d7e386ebfc63cad4207bc36d9fa70",
"assets/assets/google_fonts/NotoSans-ExtraBoldItalic.ttf": "285f7e7574c615cbaf3df920e29ef73a",
"assets/assets/google_fonts/NotoSans-ExtraLight.ttf": "c6c6709da314a8eb047ac35f78f893d5",
"assets/assets/google_fonts/NotoSans-ExtraLightItalic.ttf": "37ee89e1855203861e90a9ec53485b3a",
"assets/assets/google_fonts/NotoSans-Italic.ttf": "d50ffd77a2f06bfbc2a3920791f514e3",
"assets/assets/google_fonts/NotoSans-Light.ttf": "1632b83b314172172674db7afca635e4",
"assets/assets/google_fonts/NotoSans-LightItalic.ttf": "dedeafd9f7da36c19776d02af364fb75",
"assets/assets/google_fonts/NotoSans-Medium.ttf": "42b6fa652971de0a49b3df511da65245",
"assets/assets/google_fonts/NotoSans-MediumItalic.ttf": "2e4cd15e722fee636b948530e5d34e74",
"assets/assets/google_fonts/NotoSans-Regular.ttf": "2a1861cd1ca7030ae9bb29f3192bb1e3",
"assets/assets/google_fonts/NotoSans-SemiBold.ttf": "4723ed1f1d9485302c3bb3e65e3d7693",
"assets/assets/google_fonts/NotoSans-SemiBoldItalic.ttf": "d53704fe638070e1c9daf54b52d72a14",
"assets/assets/google_fonts/NotoSans-Thin.ttf": "1034494a64fe1fb6ad155b46c994ead3",
"assets/assets/google_fonts/NotoSans-ThinItalic.ttf": "49a44940bfb71660a962bfacc2fda103",
"assets/assets/google_fonts/OFL.txt": "053f21bb22e6d0bee98b6610ec19d521",
"assets/assets/images/profile.png": "54ae4d01aa13096b193b9b6d478d0ff7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "882fc76463ad273108af0b2fa4960534",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "b125eacdcedcaacd76ccead4dd00df57",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "1cdaa070d736855dc605f081de955196",
"icons/Icon-512.png": "d023adad6533557f1c6b409110ab0979",
"icons/Icon-maskable-192.png": "1cdaa070d736855dc605f081de955196",
"icons/Icon-maskable-512.png": "d023adad6533557f1c6b409110ab0979",
"index.html": "e1483f22d26566a565aaf1c3913790fe",
"/": "e1483f22d26566a565aaf1c3913790fe",
"main.dart.js": "482660a59767baa054302bfd8f9e91ab",
"manifest.json": "9cde01ab153e6ae7d861ad4dddf9ee05",
"robots.txt": "664a72a9385dcf8618ac4768e7abb496",
"styles.css": "9d1a38ca4fd53db87b11f2b34c4a0f7c",
"version.json": "ed4196a263a7919322bbf877a1c4ca63"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

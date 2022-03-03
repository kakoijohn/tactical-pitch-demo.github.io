'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5e57d9fd137d496ff4945d6c43e11f97",
"assets/assets/pitch_graphic/pitch_aqua_portrait.svg": "07921b3c3733fff7585430f580741931",
"assets/assets/pitch_graphic/pitch_black_landscape.svg": "21a1e81fe03538f7b401ed46ae7e8b01",
"assets/assets/pitch_graphic/pitch_black_portrait.svg": "86dfb27be2a36d4f5a19d9967b4100d3",
"assets/assets/svg_icons/ui/add_player.svg": "e18994e588bc36a73cb9fd642f6f5b9e",
"assets/assets/svg_icons/ui/add_top_right.svg": "ece2f32c230d41945a353deb9b587d38",
"assets/assets/svg_icons/ui/arrow.svg": "78bc1a396143f441dbe6e967c283cd04",
"assets/assets/svg_icons/ui/ball.svg": "c81e885c881b632211a2f85f18723bb4",
"assets/assets/svg_icons/ui/ball_inner.svg": "a7ad4d216580fcb8e6c4568167f4bb8e",
"assets/assets/svg_icons/ui/cursor.svg": "a0e69886d5eaceb39175c9985dcdb06c",
"assets/assets/svg_icons/ui/dotted_line.svg": "7d80d999e9e44554980d87b043cd5d04",
"assets/assets/svg_icons/ui/edit_player.svg": "7341480b4fe195f3ac9d4aa22b2681f9",
"assets/assets/svg_icons/ui/edit_player_name.svg": "d577cb35da81f34e844256ff75b17cb9",
"assets/assets/svg_icons/ui/edit_player_number.svg": "a5e2f43649792ad1aba8703dee1c081b",
"assets/assets/svg_icons/ui/ellipse.svg": "c6aefb0c5a4ff8689162a1ca370f3403",
"assets/assets/svg_icons/ui/empty.svg": "051c3547917eff6b453c9c9c007736ec",
"assets/assets/svg_icons/ui/eraser.svg": "2f52b80a2828daeb289dabd4f91494e3",
"assets/assets/svg_icons/ui/fullscreen.svg": "792a61fefdab5c948df0de9391b97e3e",
"assets/assets/svg_icons/ui/hand.svg": "e77375a57e033a18647d6bc00b6a1078",
"assets/assets/svg_icons/ui/line.svg": "f0308ab44b2167418de7eba69db0cfb5",
"assets/assets/svg_icons/ui/lock.svg": "925bd942eb6b4374cabe7b842f20b654",
"assets/assets/svg_icons/ui/pencil.svg": "c38a37ae9df116098d844e19f517cc06",
"assets/assets/svg_icons/ui/pitch.svg": "080ef32864017acd39beb2856b4e2e1b",
"assets/assets/svg_icons/ui/player.svg": "5dac630731607de0f51933d76f87ceb8",
"assets/assets/svg_icons/ui/question.svg": "dc2c96add9ff02c1ddccced2037926ac",
"assets/assets/svg_icons/ui/redo.svg": "bcb90d774b88c4109c748b39baca5927",
"assets/assets/svg_icons/ui/restore.svg": "afcd79b37308f932ca7de716da95ff4c",
"assets/assets/svg_icons/ui/settings.svg": "092fd933445b6aec4f393d8bdb862f6d",
"assets/assets/svg_icons/ui/tifo.svg": "35c81ab2419ce199b06448890476ee62",
"assets/assets/svg_icons/ui/trash.svg": "71a67dcf8d1b4aa20485c7cba6c9c636",
"assets/assets/svg_icons/ui/trash_open.svg": "eb4e2cac234d3c0bf330d04d0d9c0f72",
"assets/assets/svg_icons/ui/undo.svg": "cb3355c9261281268ed9bfbf2c812ec8",
"assets/assets/svg_icons/ui/unlock.svg": "ab95fa3be76bef82810305b0b156318f",
"assets/assets/svg_icons/ui/vision.svg": "513b33e51e5c67c3cbbc9059ac11fdaa",
"assets/assets/svg_icons/ui/wallpaper.svg": "b8a55800226fc4dd0d0b87694d4b5b53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f14f23d07bc79bac881236571665ee2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a24c4aa76cc8f17f2e9f56cb3567c2b",
"/": "5a24c4aa76cc8f17f2e9f56cb3567c2b",
"main.dart.js": "7f681070525511b76c53020b0788aac4",
"manifest.json": "55a47df7fcc9953f4a24fe3c3a262b0e",
"version.json": "0d9b5890f4bd075388e40e82ed65fd65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

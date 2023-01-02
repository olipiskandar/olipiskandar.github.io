'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f283aead01458b64d569a41aa951338a",
"index.html": "708dcc53c5fea158bc8bebf6ef3a3d8f",
"/": "708dcc53c5fea158bc8bebf6ef3a3d8f",
"main.dart.js": "e4859d7da034c1d2740af5f684b40a60",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"assets/AssetManifest.json": "155d52557028840f14e8d75b3fa44969",
"assets/NOTICES": "0ae4f0fd9950d3257119391e722c081d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d0ed1dbb86d3dc4a76ffb4661ed5ef79",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/page-1/images/group-1404-sgw.png": "1915606dc345cc2a40cbada9df1a63a8",
"assets/assets/page-1/images/group-1403-Phd.png": "89542e6765471fd1bc55d29af3e46dbd",
"assets/assets/page-1/images/cover-KD5.png": "040f00ce796058c86d0277c0799d8734",
"assets/assets/page-1/images/subtract-Bnj.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/frame-Amy.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/cover-63u.png": "ba7f832bf4ee65c2b6b87f71a425a048",
"assets/assets/page-1/images/onboarding3.png": "a0a63cee37823018dca3cc817bf88d11",
"assets/assets/page-1/images/phoneicon.png": "8dab44e250e9e4e4084a8181f3f3f37f",
"assets/assets/page-1/images/group-1409.png": "1915606dc345cc2a40cbada9df1a63a8",
"assets/assets/page-1/images/ellipse-592-bg-W11.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/subtract-so1.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/rectangle-2721-bg-JWX.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/frame-p6f.png": "800c387e5da39f6413356e2b7548ebf7",
"assets/assets/page-1/images/auto-group-unj5.png": "ac7b8305417ad80fbacace971c7d9408",
"assets/assets/page-1/images/ellipse-587-bg-DY7.png": "5c28c9db397f5f98d8dd1af452d5aba4",
"assets/assets/page-1/images/ellipse-592-3gw.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/frame-Uqh.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/subtract-AFd.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/frame-eXm.png": "1dc14cd8404b3b029010a80d7beda284",
"assets/assets/page-1/images/emailicon-Ag3.png": "4094d6d2cbd9df666d40b08da2d1b3f1",
"assets/assets/page-1/images/frame-TVm.png": "ae0b3a3c91d0b444d90d63ba9b15f760",
"assets/assets/page-1/images/frame-6Xu.png": "89d8b54f0166f88e0edaea55b7d8b3ad",
"assets/assets/page-1/images/cover-17h.png": "35ef5c2dcfb4ba61c76662c1ddec269f",
"assets/assets/page-1/images/ellipse-592-bg-t9H.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/vector-phq.png": "0f1102891142bef8baa299a671033d58",
"assets/assets/page-1/images/vector-WNw.png": "8d4f5232f915633340401adbc1e9be13",
"assets/assets/page-1/images/internet-day-bro-1.png": "ba2e6fbabf380315d33a189a61704ddc",
"assets/assets/page-1/images/frame-CWP.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/dateicon.png": "56ec67dc802f8b4e00250f1564da1080",
"assets/assets/page-1/images/frame-vMq.png": "e2706d369ce916d1a11ca27d5928a62c",
"assets/assets/page-1/images/frame-c8b.png": "e2706d369ce916d1a11ca27d5928a62c",
"assets/assets/page-1/images/rectangle-2734.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/rectangle-2720.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/ellipse-360.png": "a550942b7ad024f6f8d55847dbcab754",
"assets/assets/page-1/images/frame-MR5.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/ellipse-367-bg.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/rectangle-2721-bg-jeK.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/vector-Tym.png": "0f1102891142bef8baa299a671033d58",
"assets/assets/page-1/images/achievement-bro-1.png": "cc45863dfa6798d278799685809235ec",
"assets/assets/page-1/images/vector-mb1.png": "4b052996787abc618f53270549056fd4",
"assets/assets/page-1/images/vector.png": "ce52a88ae59c69054718160bbcd340b6",
"assets/assets/page-1/images/frame-KSb.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/vector-nkj.png": "4b052996787abc618f53270549056fd4",
"assets/assets/page-1/images/rectangle-2721-bg-j2j.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/frame-N5Z.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/cover-pwu.png": "3f41180e30b43bcab7fbfc326cf9e849",
"assets/assets/page-1/images/frame-6dh.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/frame-3Xq.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/cover-Xxw.png": "697e73723c5aad81b4ed0ca6350213ac",
"assets/assets/page-1/images/home.png": "1d2aa67493da68618bd4aeedefc48ef6",
"assets/assets/page-1/images/vector-Wef.png": "8d4f5232f915633340401adbc1e9be13",
"assets/assets/page-1/images/ellipse-592-bg.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/auto-group-9js7.png": "ac7b8305417ad80fbacace971c7d9408",
"assets/assets/page-1/images/cover-gZZ.png": "1d312c653ab96ce3aa394e5e28b81a9d",
"assets/assets/page-1/images/group-1403-U27.png": "1915606dc345cc2a40cbada9df1a63a8",
"assets/assets/page-1/images/frame-aP5.png": "800c387e5da39f6413356e2b7548ebf7",
"assets/assets/page-1/images/vector-JgK.png": "4b052996787abc618f53270549056fd4",
"assets/assets/page-1/images/group-1336.png": "3ec62e68a77f5a9740c8e44f074c0fcd",
"assets/assets/page-1/images/frame-YnP.png": "9dde6fa9afb127b193341e0ddad3d4c9",
"assets/assets/page-1/images/emailicon-d39.png": "4094d6d2cbd9df666d40b08da2d1b3f1",
"assets/assets/page-1/images/cover-rWP.png": "1d5216076aaf02272c1aa93bcbaeafd9",
"assets/assets/page-1/images/auto-group-tgy1.png": "4e1c8e2646113d8e130178bccac29040",
"assets/assets/page-1/images/frame-7vK.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/frame-gPD.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/subtract-vcs.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/cover-5iB.png": "1d5216076aaf02272c1aa93bcbaeafd9",
"assets/assets/page-1/images/passwordicon.png": "3ec62e68a77f5a9740c8e44f074c0fcd",
"assets/assets/page-1/images/auto-group-rn4t.png": "32e244fd27d95c88b2f433e806d83c99",
"assets/assets/page-1/images/ellipse-592-bg-XP9.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/frame-T2b.png": "800c387e5da39f6413356e2b7548ebf7",
"assets/assets/page-1/images/cover-emH.png": "dac15986e06dc9cf1db3649205a2e170",
"assets/assets/page-1/images/rectangle-2721-bg-SsM.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/auto-group-udmd.png": "4e1c8e2646113d8e130178bccac29040",
"assets/assets/page-1/images/usernameicon.png": "169a93f314b8c0a15cc20c31fce1e2f7",
"assets/assets/page-1/images/cover-NJP.png": "3f41180e30b43bcab7fbfc326cf9e849",
"assets/assets/page-1/images/frame-KH5.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/ellipse-587-bg-Ezw.png": "5c28c9db397f5f98d8dd1af452d5aba4",
"assets/assets/page-1/images/rectangle-2721-bg-5QF.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/frame-3N3.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/ellipse-587-bg-vtB.png": "5c28c9db397f5f98d8dd1af452d5aba4",
"assets/assets/page-1/images/rectangle-2721-bg-PC7.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/emailicon-Ndh.png": "4094d6d2cbd9df666d40b08da2d1b3f1",
"assets/assets/page-1/images/ellipse-587-bg-HkF.png": "5c28c9db397f5f98d8dd1af452d5aba4",
"assets/assets/page-1/images/frame-V31.png": "3ded394161b4439fb211fd64e8487e1b",
"assets/assets/page-1/images/subtract-AAX.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/no-connection-bro-1.png": "a744399c1a641b32993837292ae463e1",
"assets/assets/page-1/images/frame-E1q.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/ellipse-592.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/cover-3j1.png": "d56ecbe3130c117766c10372945806fe",
"assets/assets/page-1/images/subtract-pTD.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/rectangle-2721-bg-cTD.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/subtract-MtF.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/frame-9Yw.png": "10fd45abbfd37701887fedb51dbbc834",
"assets/assets/page-1/images/frame-Kfy.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/ellipse-587-bg.png": "5c28c9db397f5f98d8dd1af452d5aba4",
"assets/assets/page-1/images/cover-xCb.png": "bdd7bb3a9c58a7a09ec3f992ff865153",
"assets/assets/page-1/images/frame-8rf.png": "fadb5a7a2942c885094933c26536dfb3",
"assets/assets/page-1/images/frame-Z1d.png": "78c73628e0761e96314fa3b1aee18b13",
"assets/assets/page-1/images/vector-anf.png": "4b052996787abc618f53270549056fd4",
"assets/assets/page-1/images/frame-aSf.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/subtract-EBV.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/cover.png": "b7481304c8514e0e830f3c18be62abd8",
"assets/assets/page-1/images/vector-hRV.png": "86795ecc5348784f9b77ee51fedf11f5",
"assets/assets/page-1/images/cover-ukf.png": "d56ecbe3130c117766c10372945806fe",
"assets/assets/page-1/images/usernameicon-btF.png": "cda7399b5081ebf871b3b1a10cc2e2eb",
"assets/assets/page-1/images/cover-PLF.png": "040f00ce796058c86d0277c0799d8734",
"assets/assets/page-1/images/rectangle-2721-bg.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/vector-704.png": "ed86802bbc1663e5b1fd38ba23e8cacb",
"assets/assets/page-1/images/usernameicon-nmh.png": "cda7399b5081ebf871b3b1a10cc2e2eb",
"assets/assets/page-1/images/cover-NRR.png": "dac15986e06dc9cf1db3649205a2e170",
"assets/assets/page-1/images/frame-7AK.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/frame-SyZ.png": "10fd45abbfd37701887fedb51dbbc834",
"assets/assets/page-1/images/auto-group-sjif.png": "ac7b8305417ad80fbacace971c7d9408",
"assets/assets/page-1/images/cover-sQo.png": "35ef5c2dcfb4ba61c76662c1ddec269f",
"assets/assets/page-1/images/frame-41y.png": "d6fc466fa40ea4f0137e2dfcef3c9514",
"assets/assets/page-1/images/frame.png": "f6264107d23405632460d07d25823096",
"assets/assets/page-1/images/auto-group-exqj.png": "ac7b8305417ad80fbacace971c7d9408",
"assets/assets/page-1/images/group-1403.png": "89542e6765471fd1bc55d29af3e46dbd",
"assets/assets/page-1/images/rectangle-2721-bg-v1H.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/rectangle-2721-bg-MGo.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/vector-WY3.png": "0f1102891142bef8baa299a671033d58",
"assets/assets/page-1/images/cover-WTV.png": "aeaa2e6bdee67c967d37be4dc0b8fcb8",
"assets/assets/page-1/images/cover-RK1.png": "35ef5c2dcfb4ba61c76662c1ddec269f",
"assets/assets/page-1/images/group-1403-TPZ.png": "1915606dc345cc2a40cbada9df1a63a8",
"assets/assets/page-1/images/auto-group-awjh.png": "32e244fd27d95c88b2f433e806d83c99",
"assets/assets/page-1/images/vector-Gi7.png": "0f1102891142bef8baa299a671033d58",
"assets/assets/page-1/images/vector-gd1.png": "0f1102891142bef8baa299a671033d58",
"assets/assets/page-1/images/frame-NEw.png": "6573c2ca006da45b8bcb9670eb3710f0",
"assets/assets/page-1/images/learning-bro-1.png": "b800891e70c262aadad95be61d31727a",
"assets/assets/page-1/images/union.png": "5eeaca34f69a9b9e1c11dfa5609a7075",
"assets/assets/page-1/images/cover-x35.png": "35ef5c2dcfb4ba61c76662c1ddec269f",
"assets/assets/page-1/images/frame-4xj.png": "10fd45abbfd37701887fedb51dbbc834",
"assets/assets/page-1/images/frame-hFy.png": "800c387e5da39f6413356e2b7548ebf7",
"assets/assets/page-1/images/group-1411-kTV.png": "b966e159616f4266d97c96332a3e82dc",
"assets/assets/page-1/images/auto-group-ftyp.png": "32e244fd27d95c88b2f433e806d83c99",
"assets/assets/page-1/images/group-1411.png": "b966e159616f4266d97c96332a3e82dc",
"assets/assets/page-1/images/ellipse-592-bg-RCw.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/frame-PzB.png": "10fd45abbfd37701887fedb51dbbc834",
"assets/assets/page-1/images/rectangle-2735-bg.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/cover-i3m.png": "ba7f832bf4ee65c2b6b87f71a425a048",
"assets/assets/page-1/images/subtract-sYP.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/scheduling.png": "e6f7931debbde5d60c8b09b9717b3fb3",
"assets/assets/page-1/images/emailicon.png": "4094d6d2cbd9df666d40b08da2d1b3f1",
"assets/assets/page-1/images/group-1404.png": "1915606dc345cc2a40cbada9df1a63a8",
"assets/assets/page-1/images/rectangle-2721-bg-CrF.png": "7a8cd95182e5c021cee977d05d8fef07",
"assets/assets/page-1/images/vector-cgj.png": "e7f718e9d0a94f4490dd2ba571b9d145",
"assets/assets/page-1/images/usernameicon-1Hd.png": "cda7399b5081ebf871b3b1a10cc2e2eb",
"assets/assets/page-1/images/auto-group-13fh.png": "4e1c8e2646113d8e130178bccac29040",
"assets/assets/page-1/images/ellipse-593-bg.png": "ff4be8e3d64aefb38946754807a10dbd",
"assets/assets/page-1/images/frame-RYX.png": "003cbfb9444091b4e1c2931b0bed335e",
"assets/assets/page-1/images/auto-group-tpr1.png": "32e244fd27d95c88b2f433e806d83c99",
"assets/assets/page-1/images/cover-NaF.png": "989431ae5502561ee13d45922a94acd6",
"assets/assets/page-1/images/frame-NQb.png": "9b9518231ec83bce46078711a150846c",
"assets/assets/page-1/images/ellipse-587-bg-KeK.png": "5c28c9db397f5f98d8dd1af452d5aba4",
"assets/assets/page-1/images/subtract.png": "d66bf8d60c616bb4baef30390fa05192",
"assets/assets/page-1/images/auto-group-1iz7.png": "4e1c8e2646113d8e130178bccac29040",
"assets/assets/page-1/images/cover-teo.png": "697e73723c5aad81b4ed0ca6350213ac",
"assets/assets/page-1/images/vector-705-stroke.png": "82c257c7afb58d689813b6f2d88c26df",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

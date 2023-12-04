
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.f660767a3fb732086f39.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.baseline.en.6ca5c0f265b2f09e1fa2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.baseline.en.167d9aca6a4c605025a7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.baseline.en.106c254ac950c9ea8f9c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.ceeabb3147aacadbb2bf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.baseline.en.68ceefcc66cfc32ca175.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.baseline.en.204dcfe58d6c5e611a68.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/917.baseline.en.88daeefe46c532f2180e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.baseline.en.2bcddb1bebd8d00bde9a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.baseline.en.d3003cf6eb49b866f8ff.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.baseline.en.7b7630f73c295c6a50a8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a3984c31989d09f92fc0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.baseline.en.5f2080c96ce3453038d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.baseline.en.1d77efbec79bd5b8f249.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0538/9280/8895/files/large-logo_2x_c92211ca-f498-41e3-b5bd-74770633961d_x320.png?v=1625477621"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
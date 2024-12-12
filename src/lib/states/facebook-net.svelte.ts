(function _(a : string, b : number, c : string, d : string[], e : boolean) {
  var f = window.console;
  f &&
    Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 &&
    f.warn("The Facebook JSSDK is more than 7 days old.");
  if (window[c]) return;
  if (!window.JSON) return;
  var g = (window[c] = {
    __buffer: {
      replay: function () {
        var a : any[] = this,
          b = function (d) {
            var b = window[c];
            a.calls[d][0].split(".").forEach(function (a : string) {
              return (b = b[a]);
            });
            b.apply(null, a.calls[d][1]);
          };
        for (var d = 0; d < this.calls.length; d++) b(d);
        this.calls = [];
      },
      calls: [],
      opts: null,
    },
    getUserID: function () {
      return "";
    },
    getAuthResponse: function () {
      return null;
    },
    getAccessToken: function () {
      return null;
    },
    init: function (a) {
      g.__buffer.opts = a;
    },
  });
  for (b = 0; b < d.length; b++) {
    f = d[b];
    if (f in g) continue;
    var h = f.split("."),
      i = h.pop(),
      j = g;
    for (var k = 0; k < h.length; k++) j = j[h[k]] || (j[h[k]] = {});
    j[i] = (function (a) {
      if (a === "init") return;
      return function () {
        g.__buffer.calls.push([a, Array.prototype.slice.call(arguments)]);
      };
    })(f);
  }
  k = document.createElement("script");
  k.src = a;
  k.async = !0;
  e && (k.crossOrigin = "anonymous");
  h = document.getElementsByTagName("script")[0];
  h.parentNode && h.parentNode.insertBefore(k, h);
})(
  "https://connect.facebook.net/en_US/sdk.js?hash=db0d4e2248627c2e130db1aa63f7452b",
  1733986428,
  "FB",
  [
    "AppEvents.EventNames",
    "AppEvents.ParameterNames",
    "AppEvents.activateApp",
    "AppEvents.clearAppVersion",
    "AppEvents.clearUserID",
    "AppEvents.getAppVersion",
    "AppEvents.getUserID",
    "AppEvents.logEvent",
    "AppEvents.logPageView",
    "AppEvents.logPurchase",
    "AppEvents.setAppVersion",
    "AppEvents.setUserID",
    "AppEvents.updateUserProperties",
    "Canvas.Plugin.showPluginElement",
    "Canvas.Plugin.hidePluginElement",
    "Canvas.Prefetcher.addStaticResource",
    "Canvas.Prefetcher.setCollectionMode",
    "Canvas.getPageInfo",
    "Canvas.scrollTo",
    "Canvas.setAutoGrow",
    "Canvas.setDoneLoading",
    "Canvas.setSize",
    "Canvas.setUrlHandler",
    "Canvas.startTimer",
    "Canvas.stopTimer",
    "Event.subscribe",
    "Event.unsubscribe",
    "XFBML.parse",
    "addFriend",
    "api",
    "getAccessToken",
    "getAuthResponse",
    "getLoginStatus",
    "getUserID",
    "init",
    "login",
    "logout",
    "publish",
    "share",
    "ui",
  ],
  true
);

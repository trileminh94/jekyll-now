(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{105:function(e,t,n){},21:function(e,t,n){"use strict";t.a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))}},23:function(e,t,n){"use strict";var a=n(7);n(1),n(105);t.a=function(){return Object(a.jsx)("p",{className:"AppHeader",children:"\u0110ang t\u1ea3i..."})}},32:function(e,t,n){},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(51),o=n(52),r=n(54),c=n(73),i=n(10),s=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e,o){var r;return Object(a.a)(this,n),(r=t.call(this,e)).callback=o,r}return n}(Object(c.a)(Error)),u=function(e){console.error(e),e instanceof s&&e.callback?e.callback():(i.a(e),window.location.href="/error")}},40:function(e,t,n){"use strict";var a=n(45),o=n.n(a),r=n(70),c=n(50),i=n(10),s=n(30),u=n.n(s),d=n(31),O=n.n(d),b=n(46),_=n.n(b),f="NOT_LOGIN",l="/denied",S=["UNAUTHORIZED","NOT_EXIST_USER"];u.a.defaults.headers.common=Object(c.a)(Object(c.a)({},u.a.defaults.headers.common),{},{Pragma:"no-cache"});t.a=function(){return Promise.resolve().then((function(){u.a.interceptors.request.use(function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.a.start(),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return O.a.done(),i.a(e),Promise.reject(e)})),u.a.interceptors.response.use((function(e){return O.a.done(),!_.a.get(e,"config.options.ignoreCommonError")&&_.a.get(e,"data.code")&&(S.includes(e.data.code)&&(window.location.href=l),e.data.code===f&&(window.location.href="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"https://e99b11d04c6844edb72a0e266a6a2ff2@o227814.ingest.sentry.io/5551615"}).AUTH_URL,"/auth/page/login?backUrl=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"https://e99b11d04c6844edb72a0e266a6a2ff2@o227814.ingest.sentry.io/5551615"}).REACT_APP_WEB_URL))),e}),(function(e){return O.a.done(),i.a(e),Promise.reject(e)}))}))}},68:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(1),r=n.n(o),c=n(15),i=n.n(c),s=(n(32),n(75)),u=n(38),d=n(34),O=n(40),b=n(21),_=n(39),f=n(23);s.a({dsn:"https://e99b11d04c6844edb72a0e266a6a2ff2@o227814.ingest.sentry.io/5551615",autoSessionTracking:!0,integrations:[new u.a.BrowserTracing],tracesSampleRate:1}),Promise.resolve().then((function(){i.a.render(Object(a.jsx)(f.a,{}),document.getElementById("root"))})).then((function(){return Object(O.a)()})).then((function(){var e=r.a.lazy((function(){return n.e(4).then(n.bind(null,112))}));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.Suspense,{fallback:Object(a.jsx)(f.a,{}),children:Object(a.jsx)(_.a,{children:Object(a.jsx)(e,{})})})}),document.getElementById("root"))})).catch(d.a),Object(b.a)()},76:function(e,t,n){"use strict";n.r(t);n(32);var a=window.location.hostname,o=window.location.pathname,r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"https://e99b11d04c6844edb72a0e266a6a2ff2@o227814.ingest.sentry.io/5551615"}).REACT_APP_MOBILE;console.log("hostname = ",a,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"https://e99b11d04c6844edb72a0e266a6a2ff2@o227814.ingest.sentry.io/5551615"}).REACT_APP_MOBILE),a.startsWith(r)?n(80):o.startsWith("/blog")?n(86):(o.startsWith("/profile"),n(68))},80:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(1),r=n.n(o),c=n(15),i=n.n(c),s=(n(32),n(21));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)("h1",{children:"Mobile"})}),document.getElementById("root")),Object(s.a)()},86:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(1),r=n.n(o),c=n(15),i=n.n(c),s=(n(32),n(75)),u=n(38),d=n(34),O=n(40),b=n(21),_=n(39),f=n(23);s.a({dsn:"https://e99b11d04c6844edb72a0e266a6a2ff2@o227814.ingest.sentry.io/5551615",autoSessionTracking:!0,integrations:[new u.a.BrowserTracing],tracesSampleRate:1}),Promise.resolve().then((function(){i.a.render(Object(a.jsx)(f.a,{}),document.getElementById("root"))})).then((function(){return Object(O.a)()})).then((function(){var e=r.a.lazy((function(){return n.e(3).then(n.bind(null,111))}));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.Suspense,{fallback:Object(a.jsx)(f.a,{}),children:Object(a.jsx)(_.a,{children:Object(a.jsx)(e,{})})})}),document.getElementById("root"))})).catch(d.a),Object(b.a)()}},[[76,1,2]]]);
//# sourceMappingURL=main.24edaa0b.chunk.js.map
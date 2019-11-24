define("bitbucket/internal/layout/page-scrolling-manager","module exports @atlassian/aui baconjs jquery lodash bitbucket/internal/util/bacon bitbucket/internal/util/events bitbucket/internal/util/function bitbucket/internal/util/region-scroll-forwarder bitbucket/internal/util/scroll".split(" "),function(u,e,B,C,D,E,F,G,H,I,J){function y(c){var b=c.offset().top,f=0;c.prevAll(".aui-message").each(function(c,b){f+=b.offsetHeight});return b-f}function K(){function b(a){var b=null,c=a;h.takeUntil(g).onValue(function(a){c=
a});a=new L.default(p.default.getWindowScrollProperty(),[{id:"pre",groupId:"outside",setScrollTop:function(a){null===b&&(b=e.offset().top);w(null,a);q.$wrapper.css("top",Math.max(0,a-b));q.$wrapper.hasClass("aui-is-docked")&&0!==a||q.reflow()},getHeight:function(){var a=c.offset().top,b=y(v,m);return a-b}},{id:"in",groupId:"inside",setScrollTop:function(a){c.scroll(null,a)},getHeight:function(){return Infinity}}]);x.takeUntil(g).onValue(a,"heightsChanged");return a}var l=(0,c.default)(window),f=document.body,
m=(0,c.default)(f),v=(0,c.default)("#page"),k=v[0],e=(0,c.default)(".aui-sidebar"),q=z.default.sidebar(e),t=f.style.height;m.addClass("scrolling-forwarded");var g=new d.default.Bus,r=new d.default.Bus,n=new d.default.Bus,h=new d.default.Bus,x=h.sampledBy(d.default.mergeAll(h,r,d.default.interval(1E3).takeUntil(g),p.default.getWindowSizeProperty().changes())).filter(function(a){return!!a}).takeUntil(g).map(".offset").map(function(a){var b=y(v);return{top:Math.round(a.top-b)}}).skipDuplicates(function(a,
b){return a.top===b.top}).toProperty(),A=h.sampledBy(d.default.mergeAll(h,r)).filter(function(a){return!!a}).takeUntil(g).map(".scrollSizing").skipDuplicates(function(a,b){return a.height===b.height&&a.clientHeight===b.clientHeight}).toProperty();d.default.combineWith(function(a,b,c){return a.top+Math.max(b.height,b.clientHeight)+(c.height-b.clientHeight)},x,A,p.default.getWindowSizeProperty()).takeUntil(g).onValue(function(a){m.height(a);M.default.trigger("bitbucket.internal.layout.body.resize")});
var w=N.default.fakeScroll(k);p.default.getWindowScrollProperty().takeUntil(g).onValue(function(a){w(a.left,null)});d.default.combineAsArray(n,x.sampledBy(n),A.sampledBy(n)).map(O.default.spread(function(a,b,c){return{scrollTop:null!=a.scrollTop?b.top+Math.max(0,Math.min(a.scrollTop,c.height-c.clientHeight)):null}})).onValue(function(a){null!=a.scrollTop&&l.scrollTop(a.scrollTop)});var u=h.onValue(function(a){g.onValue(b(a),"destroy");u()});return{setTarget:function(a){h.push(a)},scroll:function(a,
b){n.push({scrollTop:b})},refresh:function(){r.push(!0)},destroyables:[],destroy:function(){P.default.invokeMap(this.destroyables,"destroy");this.destroyables=[];m.removeClass("scrolling-forwarded");w(0,0);q.$wrapper.css("top","");f.style.height=t||null;n.end();g.push(!0);g.end();r.end();h.end()}}}Object.defineProperty(e,"__esModule",{value:!0});var z=babelHelpers.interopRequireDefault(B),d=babelHelpers.interopRequireDefault(C),c=babelHelpers.interopRequireDefault(D),P=babelHelpers.interopRequireDefault(E),
p=babelHelpers.interopRequireDefault(F),M=babelHelpers.interopRequireDefault(G),O=babelHelpers.interopRequireDefault(H),L=babelHelpers.interopRequireDefault(I),N=babelHelpers.interopRequireDefault(J),t=(0,c.default)(window),k=!1,l,b;e.default={_requestScrollControl:function(){function d(){t.scrollTop(Math.min(l,e.offset().top-(0,c.default)("#page").offset().top))}var e;if(!k)return c.default.Deferred().reject({reason:"NOT_ACCEPTING"});if(b)return c.default.Deferred().reject({reason:"CONTROL_TAKEN"});
(0,c.default)("#footer").hide();b=K();b.setTarget=function(c){return function(f){var k=c.apply(this,arguments);e=f;var m=!b;null==l||m||(d(),l=null);return k}}(b.setTarget);b.destroy=function(f){return function(){e&&(l=t.scrollTop(),d());(0,c.default)("#footer").show();b=null;return f.apply(this,arguments)}}(b.destroy);return c.default.Deferred().resolve(b)},acceptScrollForwardingRequests:function(){if(k)throw Error("acceptScrollForwardingRequests has already been called. It must be unregistered before it can be called again.");
k=!0;l=null;return function(){b&&(z.default.log("Scroll control is not yet destroyed. Ongoing scroll requests will be ignored."),b.scrollTo=c.default.noop,b.destroy());k=!1}}};u.exports=e["default"]});
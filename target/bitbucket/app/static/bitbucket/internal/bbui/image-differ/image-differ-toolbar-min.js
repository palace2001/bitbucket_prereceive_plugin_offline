define("bitbucket/internal/bbui/image-differ/image-differ-toolbar","module exports jquery lodash ../widget/widget ./image-differ-modes".split(" "),function(p,c,b,q,r,g){Object.defineProperty(c,"__esModule",{value:!0});var l=babelHelpers.interopRequireDefault(b),k=babelHelpers.interopRequireDefault(q);b=babelHelpers.interopRequireDefault(r);var h=babelHelpers.interopRequireDefault(g);g=function(c){function d(c){babelHelpers.classCallCheck(this,d);var e=babelHelpers.possibleConstructorReturn(this,(d.__proto__||
Object.getPrototypeOf(d)).call(this));e._$toolbar=(0,l.default)(c);e._$toggle=e._$toolbar.find(".image-differ-toggle");return e}babelHelpers.inherits(d,c);babelHelpers.createClass(d,[{key:"init",value:function(c){var e=this,d={};k.default.values(h.default).forEach(function(a){var b=k.default.includes(c,a),f=e._$toggle.find(".image-differ-"+a);f.attr("aria-disabled",!b).prop("disabled",!b);b&&(f.attr("data-enabled-title")&&f.attr("data-disabled-title",f.attr("title")),f.attr("data-mode",a),f.attr("title",
f.attr("data-enabled-title")),d[a]=f)});if(k.default.includes(c,h.default.BLEND)){var b=function(){var a=document.createElement("input");a.setAttribute("type","range");return"range"===a.type}(),g=d[h.default.BLEND];g.attr("aria-disabled",!b).prop("disabled",!b);b||g.attr("title",g.attr("data-disabled-title"))}var m=function(a){var b=e._mode;e._mode=a;e.trigger("modeChanged",{newMode:a,oldMode:b})},n=this._$toggle.find(".aui-button");n.on("click",function(a){a.preventDefault();a=(0,l.default)(a.target);
if("true"!==a.attr("aria-disabled")&&"true"!==a.attr("aria-pressed")){var b=a.attr("data-mode");n.attr("aria-pressed","false");a.attr("aria-pressed","true");m(b)}}).tooltip({gravity:"s"});m(h.default.TWO_UP)}},{key:"getMode",value:function(){return this._mode}},{key:"destroy",value:function(){this._$toolbar&&(this._$toolbar.remove(),this._$toolbar=null);this._$toggle=null}}]);return d}(b.default);c.default=g;p.exports=c["default"]});
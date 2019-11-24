define("bitbucket/internal/widget/faux-upload-field/faux-upload-field","module exports jquery lodash bitbucket/internal/util/dom-event bitbucket/internal/util/events bitbucket/internal/util/navigator bitbucket/internal/widget/client-file-handlers/client-file-handler bitbucket/internal/widget/upload-interceptor/upload-interceptor".split(" "),function(h,f,k,l,m,n,p,q,r){function c(b,a){this.init.apply(this,arguments)}Object.defineProperty(f,"__esModule",{value:!0});var d=babelHelpers.interopRequireDefault(k),
g=babelHelpers.interopRequireDefault(l),t=babelHelpers.interopRequireDefault(m),u=babelHelpers.interopRequireDefault(n),e=babelHelpers.interopRequireDefault(q),v=babelHelpers.interopRequireDefault(r);c.prototype.defaults={clientFileHandler:null,accept:null,allowMultiple:!1};c.prototype.init=function(b,a){this.$el=(0,d.default)(b);this._destroyables=[];switch(a.accept){case e.default.typeFilters.audio:a.accept="audio/*";break;case e.default.typeFilters.image:a.accept="image/*";break;case e.default.typeFilters.imageWeb:a.accept=
"image/jpeg, image/gif, image/png";break;case e.default.typeFilters.video:a.accept="video/*"}this.options=d.default.extend({},this.defaults,a);b=g.default.uniqueId("faux-upload-field-");a=(0,d.default)(bitbucket.internal.widget.fauxUploadField.uploadField({id:b,accept:this.options.accept,allowMultiple:this.options.allowMultiple})).insertBefore(this.$el);this.$el.tooltip({gravity:d.default.fn.tipsy.autoNS});this.$el.is("label")?this.$el.attr("for",b):(0,p.isIE)()?(this.$el.hide(),a.show()):this._destroyables.push(u.default.chainWith(this.$el).on("click",
t.default.preventDefault(a.click.bind(a))));this.options.clientFileHandler&&this._destroyables.push(new v.default(a,this.options.clientFileHandler))};c.prototype.destroy=function(){g.default.invokeMap(this._destroyables,"destroy")};f.default=c;h.exports=f["default"]});
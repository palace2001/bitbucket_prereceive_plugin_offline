define("bitbucket/internal/page/maintenance/lock/lock","module exports @atlassian/aui jquery bitbucket/util/navbuilder bitbucket/internal/layout/maintenance/maintenance bitbucket/internal/util/ajax bitbucket/internal/widget/submit-spinner/submit-spinner".split(" "),function(k,a,l,m,n,p,q,r){Object.defineProperty(a,"__esModule",{value:!0});var b=babelHelpers.interopRequireDefault(l),c=babelHelpers.interopRequireDefault(m),d=babelHelpers.interopRequireDefault(n),t=babelHelpers.interopRequireDefault(p),
u=babelHelpers.interopRequireDefault(q),v=babelHelpers.interopRequireDefault(r);a.default={onReady:function(a){var f=b.default.contextPath()+"/mvc/maintenance/lock",g={pollUrl:f,pollTickCallback:function(a,b,e,c){},cancelButtonId:"cancel",redirectUrl:a?d.default.admin().build():d.default.dashboard().build(),canceledHeader:b.default.I18n.getText("bitbucket.web.lock.canceled.title",bitbucket.internal.util.productName()),cancelingDescription:b.default.I18n.getText("bitbucket.web.lock.canceling.description",
bitbucket.internal.util.productName()),hasCancelDialog:!1};(0,c.default)("#cancel").on("click",function(a){var b=(0,c.default)(this),e=b.closest("form").find("input[name\x3dtoken]"),d=e.val(),h=new v.default(b,"after");h.show();u.default.rest({url:f+"?token\x3d"+encodeURIComponent(d),type:"DELETE",statusCode:{409:function(a,b,d,c){e.parent().replaceWith(bitbucket.internal.layout.maintenance.tokenInputField(c));return!1},"*":!1}}).always(function(){h.hide()}).done(function(){window.location=g.redirectUrl});
a.preventDefault()});t.default.init(g)}};k.exports=a["default"]});
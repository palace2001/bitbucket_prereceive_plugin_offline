require("@atlassian/aui jquery lodash bitbucket/util/events bitbucket/util/state bitbucket/internal/feature/file-content/edit/commit-dialog/commit-dialog bitbucket/internal/feature/file-content/edit/toolbar bitbucket/internal/model/page-state bitbucket/internal/model/path bitbucket/internal/model/revision bitbucket/internal/util/analytics bitbucket/internal/util/dom-event bitbucket/internal/util/history bitbucket/internal/util/property bitbucket/internal/util/shortcuts bitbucket/internal/util/text bitbucket/internal/util/warn-before-unload".split(" "),
function(f,d,n,g,v,w,x,h,y,z,l,A,p,B,C,D,E){function q(){var a=p.state(),b=a.untilRevision;r=!a.explicitUntil&&b?b.id:null}function F(){var a=h.getRevisionRef(),b=p.state(),e=b.untilRevision;e=e&&e.id;b=!b.explicitUntil||e===r||e===a.getLatestCommit();return a.isBranch()&&b?{editable:!0}:{editable:!1,reason:f.I18n.getText("bitbucket.web.sourceview.button.edit.uneditable.branch.head")}}function G(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.editable,e=a.reason,d=a.startEditing,
f=a.stopEditing,c=a.hasChanged,g=a.getContent,h=a.changes;t=f;b?(a=F(),a.editable?(m({editable:b,onClick:function(){l.add("sourceEdit.editButton.clicked");k(!0,c);I(function(){return f({discardChanges:!0})});J(g,f);d();n.isFunction(h)&&u(!1)}}),n.isFunction(h)&&h(function(a){return u(a,g())})):m(a)):m({editable:b,reason:e})}function m(a){var b=a.editable,e=a.reason;a=a.onClick;var H=b?f.I18n.getText("bitbucket.web.sourceview.button.edit.editable.tooltip"):f.I18n.getText("bitbucket.web.sourceview.button.edit.uneditable.type"),
c=d(".in-browser-edit-button");c.attr("disabled",!b).attr("aria-disabled",!b).attr("title",e||H);if(a)c.on("click",a);else c.off("click")}function u(a,b){K.done(function(e){var c=b&&b.size>e;e=c?f.I18n.getText("bitbucket.web.sourceview.button.edit.toolbar.commit.too.big.tooltip",D.formatSizeInBytes(e)):a?f.I18n.getText("bitbucket.web.sourceview.button.edit.toolbar.commit.tooltip"):f.I18n.getText("bitbucket.web.sourceview.button.edit.toolbar.commit.unchanged.tooltip");c=a&&!c;d(".edit-commit").attr("disabled",
!c).attr("aria-disabled",!c).attr("title",e)})}function L(a){A.isCtrlish(a)&&83===a.which&&(a.preventDefault(),d(".edit-commit:enabled").click())}function k(a,b){a?(c=c||d.Deferred(),E(c,f.I18n.getText("bitbucket.web.sourceview.button.edit.close.warning"),b)):(c&&c.resolve(),c=null);b=d(".file-blame");a&&!d(".content-view").hasClass("blame-disabled")&&b.click();b.attr("disabled",a).attr("aria-disabled",a);b=d(".in-browser-edit-button");d(document.body).toggleClass("edit-mode",a);a&&b.tipsy("hide");
x.toggleToolbars(a);window.scrollTo(0,null);b.prop("disabled",a);d(document)[a?"on":"off"]("keydown",L)}function J(a,b){d(".edit-commit").click(function(d){d.preventDefault();l.add("sourceEdit.commitDialog.open");w.show(a(),c.resolve).done(function(a){k(!1);b();h.setRevisionRef(h.getRevisionRef().setLatestCommit(a.id));g.trigger("bitbucket.internal.feature.edit.untilRevisionChanged",null,new z(a),new y(v.getFilePath()))})})}function I(a){d(".edit-cancel").click(function(b){b.preventDefault();l.add("sourceEdit.cancelLink.clicked");
a();k(!1)})}d(".in-browser-edit-button").tipsy({live:!0,gravity:"n"});var r=void 0,c=void 0,K=B.getFromProvider("content.upload.max.size");d(document).ready(q);C.bind("sourceViewEdit",function(){requestAnimationFrame(function(){return!document.body.classList.contains("edit-mode")&&d(".in-browser-edit-button").click()})});g.on("bitbucket.internal.feature.repository.revisionReferenceSelector.revisionRefChanged",q);var t=function(a){};g.on("bitbucket.internal.history.popstate",function(){document.body.classList.contains("edit-mode")&&
(k(!1),t({discardChanges:!0}))});g.on("bitbucket.internal.feature.fileContent.requestHandled",function(a){return G((1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).editing)})});
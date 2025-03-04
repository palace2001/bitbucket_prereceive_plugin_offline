define("bitbucket/internal/page/project-list/project-list","exports react react-dom react-redux bitbucket/util/navbuilder bitbucket/internal/bbui/aui-react/avatar bitbucket/internal/enums bitbucket/internal/feature/project/filterable-project-table/action-creators bitbucket/internal/feature/project/filterable-project-table/actions bitbucket/internal/feature/project/filterable-project-table/filterable-project-table bitbucket/internal/util/analytics bitbucket/internal/util/notifications/notifications bitbucket/internal/widget/filterable-entity-table/entity-rest-actor bitbucket/internal/widget/filterable-entity-table/filterable-entity-table bitbucket/internal/widget/filterable-entity-table/store".split(" "),
function(b,k,l,m,n,p,q,r,t,u,v,w,x,y,z){Object.defineProperty(b,"__esModule",{value:!0});b.init=function(c,a){a=a.projectPage;A.default.showFlashes();f(document.querySelector(".aui-page-header-main .create-project-link"));f(document.querySelector(".project-banners .create-project-link"),!0);if(!a||a.size||!a.isLastPage){var d=q.EntityGroups.PROJECTS,e=t.LOAD_PROJECTS,b=(0,B.default)({actors:[(0,x.loadEntitiesRestActor)({loadAction:e,urlBuilder:C})],entityName:d,loadAction:e});d=(0,y.connectEntityTable)(d,
e,D.default);a&&b.dispatch((0,r.populateProjects)(a));E.default.render(g.default.createElement(m.Provider,{store:b},g.default.createElement(d,{bufferPx:document.getElementById("footer").getBoundingClientRect().height,onProjectClick:function(a,b,c){h.default.add("project-list.item.clicked",{"filter.length":b.length,"project.id":a.id,"result.index":c.indexOf(a),"results.size":c.length})}})),c)}};var g=babelHelpers.interopRequireDefault(k),E=babelHelpers.interopRequireDefault(l),F=babelHelpers.interopRequireDefault(n),
D=babelHelpers.interopRequireDefault(u),h=babelHelpers.interopRequireDefault(v),A=babelHelpers.interopRequireDefault(w),B=babelHelpers.interopRequireDefault(z),C=function(){return F.default.rest().projects().withParams({avatarSize:p.AvatarSize.SMALL})},f=function(b,a){return b&&b.addEventListener("click",function(){h.default.add("project-list.create.clicked",{"is.empty.state":!!a})})}});
define("bitbucket/internal/page/global-repository-list/global-repository-list","exports @atlassian/aui react react-dom react-redux bitbucket/util/navbuilder bitbucket/internal/bbui/aui-react/avatar bitbucket/internal/enums bitbucket/internal/feature/repository/filterable-repository-table/action-creators bitbucket/internal/feature/repository/filterable-repository-table/actions bitbucket/internal/feature/repository/filterable-repository-table/filterable-repository-table bitbucket/internal/util/analytics bitbucket/internal/widget/filterable-entity-table/entity-rest-actor bitbucket/internal/widget/filterable-entity-table/filterable-entity-table bitbucket/internal/widget/filterable-entity-table/store".split(" "),
function(a,g,h,k,l,m,n,p,q,r,t,u,v,w,x){Object.defineProperty(a,"__esModule",{value:!0});a.init=function(a,c){c=c.repositoryPage;var b=p.EntityGroups.REPOSITORIES,d=r.LOAD_REPOSITORIES,f=(0,y.default)({actors:[(0,v.loadEntitiesRestActor)({loadAction:d,urlBuilder:z})],entityName:b,loadAction:d});b=(0,w.connectEntityTable)(b,d,A.default);c&&f.dispatch((0,q.populateRepositories)(c));B.default.render(e.default.createElement(l.Provider,{store:f},e.default.createElement(b,{bufferPx:document.getElementById("footer").getBoundingClientRect().height,
emptyState:e.default.createElement("h3",{className:"entity-empty"},g.I18n.getText("bitbucket.web.repository.public.empty.heading")),onRepoClick:function(a,c,b){C.default.add("public-repository-list.item.clicked",{"filter.length":c.length,"project.id":a.project.id,"repository.id":a.id,"result.index":b.indexOf(a),"results.size":b.length})},showProject:!0,showPublic:!1})),a)};var e=babelHelpers.interopRequireDefault(h),B=babelHelpers.interopRequireDefault(k),D=babelHelpers.interopRequireDefault(m),A=
babelHelpers.interopRequireDefault(t),C=babelHelpers.interopRequireDefault(u),y=babelHelpers.interopRequireDefault(x),z=function(){return D.default.rest().allRepos().withParams({avatarSize:n.AvatarSize.SMALL,visibility:"public"})}});
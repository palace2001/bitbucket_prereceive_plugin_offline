define("bitbucket/internal/impl/urls","module exports bitbucket/util/navbuilder bitbucket/internal/bbui/javascript-errors/javascript-errors bitbucket/internal/bbui/urls/urls bitbucket/internal/util/object".split(" "),function(f,d,g,h,k,l){function b(){e.default.call(this)}Object.defineProperty(d,"__esModule",{value:!0});var c=babelHelpers.interopRequireDefault(g),m=babelHelpers.interopRequireDefault(h),e=babelHelpers.interopRequireDefault(k);babelHelpers.interopRequireDefault(l).default.inherits(b,
e.default);b.prototype.avatarUrl=function(a,b){return c.default._avatarUrl(a,b).build()};b.prototype.pullRequest=function(a){return c.default.currentRepo().pullRequest(a).build()};b.prototype.inboxPullRequest=function(a,b,d){return c.default.project(a).repo(b).pullRequest(d).build()};b.prototype.createPullRequest=function(a){return c.default.project(a.project).repo(a).createPullRequest().build()};b.prototype.allPullRequests=function(a,b){return b?c.default.project(a.project).repo(a).allPullRequests().state(b).build():
c.default.project(a.project).repo(a).allPullRequests().build()};b.prototype.help=function(a){switch(a){case "help.mirroring.clone.dialog":return bitbucket_help_url("bitbucket.help.mirroring.clone.dialog");case "help.mirroring.getting.started":return bitbucket_help_url("bitbucket.help.mirroring.getting.started");case "help.mirroring.setup":return bitbucket_help_url("bitbucket.help.mirroring.setup.guide");case "help.pull.request":return bitbucket_help_url("bitbucket.help.pull.request");case "help.search.guide":return bitbucket_help_url("bitbucket.go.search.guide");
case "help.search.troubleshoot":return bitbucket_help_url("bitbucket.go.search.troubleshoot");case "help.search.query":return bitbucket_help_url("bitbucket.go.search.query");default:throw new m.default.NotImplementedError;}};b.prototype.search=function(a){return c.default.search(a).build()};b.prototype.project=function(a){return c.default.project(a).build()};b.prototype.repo=function(a){return c.default.project(a.project).repo(a).build()};b.prototype.user=function(a){return c.default.user(a.slug).build()};
b.prototype.remote=function(a){return c.default.project(a.project.key).repo(a.slug).clone(a.scmId).buildAbsolute()};d.default=new b;f.exports=d["default"]});
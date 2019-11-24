define("bitbucket/internal/feature/dashboard/reducers/paging/repositories",["module","exports","lodash","bitbucket/internal/util/reducers","../../actions"],function(h,d,b,k,f){function g(b,c){return babelHelpers.extends({},b,babelHelpers.defineProperty({},c.meta.repoType,void 0))}Object.defineProperty(d,"__esModule",{value:!0});var a;d.default=(0,k.reduceByType)({},(a={},babelHelpers.defineProperty(a,f.LOAD_REPOSITORIES_SUCCESS,function(a,c){var d=c.meta.repoType,e=void 0;e=c.payload.values.map(function(a){return a.id});
e=(0,b.get)(c,"meta.query")!==(0,b.get)(a,[d,"query"])?e:(0,b.get)(a,[d,"repositories"],[]).concat(e);return babelHelpers.extends({},a,babelHelpers.defineProperty({},d,{query:(0,b.get)(c,"meta.query"),lastPageMeta:(0,b.omit)(c.payload,"values"),repositories:e,loadMoreCallback:(0,b.get)(c,"meta.nextSearch")}))}),babelHelpers.defineProperty(a,f.CLEAR_REPOSITORIES,g),babelHelpers.defineProperty(a,f.LOAD_REPOSITORIES_FAILURE,g),a));h.exports=d["default"]});
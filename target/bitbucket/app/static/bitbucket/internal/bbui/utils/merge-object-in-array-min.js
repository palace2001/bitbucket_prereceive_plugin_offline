define("bitbucket/internal/bbui/utils/merge-object-in-array",["module","exports","lodash"],function(e,b,f){Object.defineProperty(b,"__esModule",{value:!0});b.default=function(c,a,b){a=d.default.findIndex(c,a);return-1===a?c:[].concat(babelHelpers.toConsumableArray(c.slice(0,a)),[d.default.assign({},c[a],b)],babelHelpers.toConsumableArray(c.slice(a+1)))};var d=babelHelpers.interopRequireDefault(f);e.exports=b["default"]});
define("bitbucket/internal/bbui/codeblock/codeblock",["module","exports","classnames","prop-types","react"],function(e,d,a,f,b){function g(a){return c.default.Children.map(a,function(a){return a.type&&"line"===a.type.toLowerCase()&&[a.props.children,"\n"]||a})}Object.defineProperty(d,"__esModule",{value:!0});var h=babelHelpers.interopRequireDefault(a);a=babelHelpers.interopRequireDefault(f);var c=babelHelpers.interopRequireDefault(b);b=function(a){return c.default.createElement("div",{className:(0,
h.default)("code-block",{"instruction-block":a.instructionBlock},a.extraClasses)},c.default.createElement("pre",null,c.default.createElement("code",null,a.code||g(a.children))))};b.propTypes={instructionBlock:a.default.bool,extraClasses:a.default.string,children:a.default.node,code:a.default.string};d.default=b;e.exports=d["default"]});
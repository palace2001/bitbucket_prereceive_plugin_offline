define("bitbucket/internal/widget/time",["module","exports","react","bitbucket/internal/util/time"],function(c,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});var f=babelHelpers.interopRequireDefault(d);a.default=function(b){var a=b.unixTime,c=b.type,d=b.customMapping;b=b.className;return f.default.createElement("time",{dateTime:(0,e.format)(a,"timestamp"),title:(0,e.format)(a,"full"),className:b},(0,e.format)(a,c,d))};c.exports=a["default"]});
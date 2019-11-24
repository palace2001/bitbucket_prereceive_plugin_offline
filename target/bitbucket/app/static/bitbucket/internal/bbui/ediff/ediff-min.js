define("bitbucket/internal/bbui/ediff/ediff",["exports","lodash"],function(n,B){function t(h){var d=[],f;for(r.lastIndex=0;f=r.exec(h);)d.push({start:f.index,value:f[0],end:r.lastIndex});return d}function u(h){var d=h.comparableValue;if("string"!==typeof d){var f=d=h.value;w.lastIndex=0;w.test(f)&&(0===h.start&&(f="\n"+f),(0,B.includes)(f,"\n")&&(d=f.replace(C,"\n")));h.comparableValue=d}return d}function x(h,d,f,b,k){for(var l=f;l<f+b;l++){var c=d.length-1,g=d.length&&d[c],a=h[l];g&&g.end===a.start?
d[c]={start:g.start,end:a.end,type:g.type}:d.push({start:a.start,end:a.end,type:k})}}function y(h,d){var f=[];if(0!==h.length||0!==d.length){a:{var b=h.length;var k=d.length,l=b+k+1,c=1+2*l,g=(c+1)/2,a=[];a.length=c;a[g+1]={i:0,j:-1,prev:null,snake:!0};for(c=0;c<l;c++){for(var q=-c;q<=c;q+=2){var n=g+q,e=n+1,m=n-1;if(q===-c||q!==c&&a[m].i<a[e].i){var p=a[e].i;e=a[e]}else p=a[m].i+1,e=a[m];a[m]=null;m=p-q;for(var r=p,t=m;e&&0!==e.i&&0!==e.j&&!e.snake&&e.prev;)e=e.prev;for(e={i:r,j:t,prev:e};p<b&&m<
k&&u(h[p])===u(d[m]);)p++,m++;p>e.i&&(e={i:p,j:m,prev:e,snake:!0});a[n]=e;if(p>=b&&m>=k){b=a[n];break a}}a[g+c-1]=null}throw Error("could not find a diff path");}b.snake&&(b=b.prev);for(;b&&b.prev&&0<=b.prev.j;){if(b.snake)throw Error("bad diffpath: found snake when looking for diff");a=b.i;g=b.j;b=b.prev;k=b.i;l=b.j;a-=k;g-=l;f.unshift({from:k,fromCount:a,to:l,toCount:g,type:0===a&&z||0===g&&A||v});b.snake&&(b=b.prev)}}b=[];k=[];l=f.length;for(g=0;g<l;g++)a=f[g],c=a.type,c!==v&&c!==A||x(h,b,a.from,
a.fromCount,c),c!==v&&c!==z||x(d,k,a.to,a.toCount,c);return{originalRegions:b,revisedRegions:k}}Object.defineProperty(n,"__esModule",{value:!0});n.tokenizeString=t;n.getTokensComparableValue=u;n.diff=y;var r=/\w+|\s+|./gim,C=/\n[ \u00a0\t\r]+/gm,w=/\s/m,z="add",A="delete",v="change";n.default={tokenizeString:t,getTokensComparableValue:u,diff:y}});
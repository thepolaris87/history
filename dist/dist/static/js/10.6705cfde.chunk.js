(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(t,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return O}));var e=n(73),a=n(7),o=n(5),i=n(159),c=n(516),u=n(514),f=n(520),l=["canvas","callback"];function s(t,r){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=b(t))||r&&t&&"number"===typeof t.length){n&&(t=n);var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function d(t,r,n,e,a,o,i){try{var c=t[o](i),u=c.value}catch(f){return void n(f)}c.done?r(u):Promise.resolve(u).then(e,a)}function m(t){return function(){var r=this,n=arguments;return new Promise((function(e,a){var o=t.apply(r,n);function i(t){d(o,e,a,i,c,"next",t)}function c(t){d(o,e,a,i,c,"throw",t)}i(void 0)}))}}function h(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function v(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){p(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function p(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function y(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(t,r)||b(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,r){if(t){if("string"===typeof t)return x(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,r):void 0}}function x(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function w(t,r){if(null==t)return{};var n,e,a=function(t,r){if(null==t)return{};var n,e,a={},o=Object.keys(t);for(e=0;e<o.length;e++)n=o[e],r.indexOf(n)>=0||(a[n]=t[n]);return a}(t,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function O(t){var r=t.canvas,n=t.callback,d=w(t,l),h=d.background,p=d.itemList,b=d.drawingItemAttrs,x=d.feedback,O=p.common,j=p.itemNums,P=p.items,k=r.g().addClass("background"),A=r.g().addClass("activity"),M=A.g().addClass("items"),S=A.g().addClass("drawing"),I=A.g().addClass("hint"),C=A.g().addClass("feedback"),E=new f.a(r,{timeout:60}),L=[],T=0,B=function(){L=function(){var t=P.reduce((function(t,r){var n;return t[n=r.type]||(t[n]=[]),t[r.type].push(r.imageIndex),t}),{}),r=function(){var t=j?Object.keys(j):["circle","rect","triangle"],r=5,n=0,e=0;return j?Object.entries(j).reduce((function(t,a,o,i){var c=g(a,2),f=c[0],l=c[1];return r=5-n-1*(i.length-(1+o)),e=Object(u.g)(1,r),t[f]="number"===typeof l&&l>=0&&l<=r?l:e,n+=t[f],t}),{}):t.reduce((function(a,o,i){return r=5-n-1*(t.length-(1+i)),e=Object(u.g)(1,r),a[o]=e,n+=e,a}),{})}(),n=0,e=Object.entries(r).reduce((function(r,e){var a=g(e,2),o=a[0],i=a[1];if(!t[o])return r;for(var c=Object(u.p)(t[o]),f=0;f<i;f++)r=[].concat(y(r),[{id:n,type:o,imageIndex:c[f]}]),n++;return r}),[]);return Object(u.p)(e)}();var t=O.gap,r=O.centerOffset,n=void 0===r?{x:0,y:0}:r,a=O.offset,i=void 0===a?{x:0,y:0}:a,c=O.opacity,f=O.scale,l=Object(u.d)({startPoint:{x:400+n.x,y:420+n.y},rows:1,columns:L.length,gap:{x:t,y:0},center:!0});L.forEach((function(t,r,n){var a=t.imageIndex,s=t.id,d=l[r],m=d.x,h=d.y,p=Object(u.g)(-16,16),y=m+i.x+p,g=h+i.y+p,b=a.split("/").pop().split(".")[0];Object(e.d)({canvas:M,x:y,y:g,img:{url:a,scale:f},center:!0}).addClass("item").attr({opacity:c}).data("itemId",s).transform("r ".concat(p));var x=o.a.imageDefs[b].select(".guide"),w="path"===x.type?x.attr("d"):"M".concat(x.attr("points")," Z");n[r]=v(v({},t),{},{path:w,x:y,y:g,r:p})}))};!function(){var t=h.image,r=t.x,n=t.y,a=t.imageIndex,o=t.scale;Object(e.d)({canvas:k,x:r,y:n,img:{url:a,scale:o},center:!0})}(),B(),function t(){var r=S.g().addClass("drawing-item"),o=b.cx,f=b.cy,l=b.offset,d=void 0===l?{x:0,y:0}:l,h=b.opacity,v=b.scale,p=L.splice(Object(u.g)(0,L.length-1),1)[0],y=null,g=null,w=null,j=null;Object(e.d)({canvas:r,x:o+d.x,y:f+d.y,img:{url:p.imageIndex,scale:v},center:!0}),y=r.getBBox(),r.transform("r ".concat(p.r)).attr("opacity",h),function(){var o=S.g().addClass("guide-path"),u=S.g().addClass("drawing-path"),f=p.path,l=p.path,d="".concat(p.r?r.transform().local:"","t ").concat(y.x," ").concat(y.y),h=o.path(l).addClass("fno s01").attr({strokeWidth:10,strokeDasharray:30,strokeDashoffset:0,opacity:.5,transform:d}),v=function(){var t=m(regeneratorRuntime.mark((function t(){var n,e,a,i,f,l,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=(n=y).cx,a=n.cy,i=p.id,f=null,l=s(M.selectAll(".item").items),t.prev=4,l.s();case 6:if((d=l.n()).done){t.next=13;break}if((m=d.value).data("itemId")!==i){t.next=11;break}return f=m,t.abrupt("break",13);case 11:t.next=6;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),l.e(t.t0);case 18:return t.prev=18,l.f(),t.finish(18);case 21:return u.remove(),o.remove(),c.a.fadeIn({element:r,duration:800}),t.next=26,x();case 26:return t.next=28,c.a.moveTo({element:r,dx:p.x-e,dy:p.y-a,r:p.r||"",duration:700});case 28:return t.next=30,c.a.zoom({type:"out",element:r,duration:300,begin:b.scale,end:O.scale,local:r.transform().local});case 30:f.attr({opacity:1}),r.remove(),(L.length?P:k)();case 33:case"end":return t.stop()}}),t,null,[[4,15,18,21]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=m(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.a.zoom({type:"in",element:j,duration:800}),t.next=3,c.a.fadeIn({element:j,duration:1200});case 3:return t.next=5,j.remove();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){T++,t()},k=function(){var t=m(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,c.a.moveTo({element:M,dx:0,dy:-200,duration:500});case 3:return M.selectAll(".item").forEach((function(t,n){r[n]=c.a.shake.bind(null,{element:t,rotate:10,duration:1e3,reverse:n%2})})),t.next=6,Promise.all(r.map((function(t){return t()})));case 6:n();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(g=Object(i.a)({canvas:u,fillPath:f,strokePath:l,strokePathClassName:"fno s02",onComplete:v,strokeWidth:11,oneWay:!0,dragElScale:.15,sensitive:60,endOffset:12}).transform(d)).select("path").attr({clipPath:"none"}),g.select(".cp").pointerdown((function(){var t;null===(t=w)||void 0===t||t.removeHint()})),T||(w=Object(e.c)({canvas:I,type:1,dragTime:3e3,pathStr:a.a.path.map(l,h.matrix.translate(15.04,15.24))}))}(),function(){var t=r.getBBox(),n=t.cx,a=t.cy;j=Object(e.d)({canvas:C,x:n,y:a,img:{url:x.image.url},center:!0}).attr({opacity:0,pointerEvents:"none"})}()}(),E.init()}},514:function(t,r,n){"use strict";n.d(r,"l",(function(){return o})),n.d(r,"c",(function(){return i})),n.d(r,"k",(function(){return c})),n.d(r,"d",(function(){return u})),n.d(r,"e",(function(){return f})),n.d(r,"q",(function(){return l})),n.d(r,"f",(function(){return s})),n.d(r,"g",(function(){return d})),n.d(r,"h",(function(){return m})),n.d(r,"j",(function(){return h})),n.d(r,"i",(function(){return v})),n.d(r,"b",(function(){return p})),n.d(r,"p",(function(){return y})),n.d(r,"n",(function(){return g})),n.d(r,"m",(function(){return b})),n.d(r,"o",(function(){return x})),n.d(r,"a",(function(){return w}));n(7);function e(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return a(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var o=function(t){return t.filter((function(r,n){return t.indexOf(r)===n}))},i=function(t,r){var n=[];return t.forEach((function(t,e){var a=Math.floor(e/r),o=e%r;0===o&&(n[a]=[]),n[a][o]=t})),n},c=function(t){for(var r=[],n=function(n){var e=t.map((function(t){return t[n]}));r.push(e)},e=0;e<t[0].length;e++)n(e);return r},u=function(t){for(var r=t.startPoint,n=void 0===r?{x:0,y:0}:r,e=t.rows,a=t.columns,o=t.gap,i=void 0===o?{x:0,y:0}:o,c=t.reverse,u=void 0!==c&&c,f=t.center,l=void 0===f||f,s=[],d=l?.5*-i.x*(a-1):0,m=l?.5*-i.y*(e-1):0,h=0;h<e;h++)for(var v=0;v<a;v++){var p=h*a+v,y=[n.x+i.x*v+d,n.y+m+(u?-i.y*h:i.y*h)],g=y[0],b=y[1];s[p]={x:g,y:b}}return s},f=function(t){for(var r=t.area,n=t.pointNum,e=t.neighborhood,a=[],o=function(t,r,n){return Math.abs(t.cx-r)<=t.width/2&&Math.abs(t.cy-n)<=t.height/2},i=0,c=0;c<n;c++)for(var u=!0,f=function(){var t=d(r.x+e.width/2,r.x+r.width-e.width/2),n=d(r.y+e.height/2,r.y+r.height-e.height/2),c={x:t-e.width/2,x2:t+e.width/2,cx:t,y:n-e.height/2,y2:n+e.height/2,cy:n,width:e.width,height:e.height};a.some((function(t){return o(n=c,(r=t).x,r.y)||o(n,r.x2,r.y)||o(n,r.x,r.y2)||o(n,r.x2,r.y2)||o(r,n.x,n.y)||o(r,n.x2,n.y)||o(r,n.x,n.y2)||o(r,n.x2,n.y2);var r,n}))||(a.push(c),u=!1),i+=1};u&&i<1e3;)f();return 1e3===i&&console.error("CAN NOT GENERATE!!!"),a},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;return new Promise((function(r){return setTimeout(r,t)}))},s=function(t,r){for(var n=y(t).slice(0,r);n.length<r;)n.push(y(t)[0]);return n},d=function(t,r){return Math.floor(Math.random()*(r-t+1))+t},m=function(t,r,n){var e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=[],i=[];if(e)for(;i.length!==n;){for(var c=0;c<n;c++)a[c]=d(t,r);i=o(a)}else for(var u=0;u<n;u++)a[u]=d(t,r);return a},h=function(t){return t.reduce((function(t,r){return t+r}))},v=function(t,r){var n=e(t,2),a=n[0],o=n[1],i=e(r,2),c=i[0],u=i[1],f=(u-o)/(c-a);return{a:f,b:u-f*c}},p={line:function(t){var r=t.x1,n=void 0===r?0:r,e=t.y1,a=void 0===e?0:e,o=t.x2,i=void 0===o?0:o,c=t.y2;return"M"+[n,a]+" L"+[i,void 0===c?0:c]},rect:function(t){var r=t.x,n=void 0===r?0:r,e=t.y,a=void 0===e?0:e,o=t.width,i=void 0===o?0:o,c=t.height,u=void 0===c?0:c;return"M"+[n,a]+" l"+[0,u]+" l"+[i,0]+" l"+[0,-u]+" l"+[-i,0]},circle:function(t){var r=t.cx,n=void 0===r?0:r,e=t.cy,a=void 0===e?0:e,o=t.r,i=void 0===o?0:o;return"M"+[n+i,a-i]+"m"+[-i,0]+"a"+[i,i,0,1,1,0,2*i]+"a"+[i,i,0,1,1,0,-2*i]},polygon:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var e=Array.isArray(r[0])?r[0]:r;return e.reduce((function(t,r,n){return 0===n?t+(r+","):1===n?t+(r+" "):n%2===0?t+"L"+r+",":t+(r+" ")}),"M")}},y=function(t){for(var r=t.map((function(t){return t})),n=r.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),a=r[n];r[n]=r[e],r[e]=a}return r},g=function(t){for(var r=t.startNum,n=void 0===r?1:r,e=t.endNum,a=[],o=n;o<e+1;o++)a.push(o);return a},b=function(t,r){var n;return t.length===r.length&&(n=0,t.forEach((function(t,e){t===r[e]&&(n+=1)}))),n===t.length},x=function(t){var r=document.createElement("canvas");r.width=800,r.height=800;var n=(new XMLSerializer).serializeToString(t),e=new Blob([n],{type:"image/svg+xml"}),a=new Image,o=URL.createObjectURL(e);a.src=o,a.onload=function(){var t;r.width=a.width,r.height=a.height,null===(t=r.getContext("2d"))||void 0===t||t.drawImage(a,0,0),URL.revokeObjectURL(o);var n=r.toDataURL("image/png").replace("image/png","octet/stream");console.log(n);var e=document.createElement("a");e.href=n,e.download="myPhoto.png",e.click(),URL.revokeObjectURL(n)}},w=function(t,r){var n;switch(r){case"+":n=0,t.forEach((function(t){n+=t}));break;case"-":t.forEach((function(t,r){n=0===r?t:n+t}));break;case"*":n=1,t.forEach((function(t){n*=t}));break;case"/":(n={}).q=Math.floor(t[0]/t[1]),n.r=t[0]%t[1]}return n}},516:function(t,r,n){"use strict";var e=n(7);function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return o(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var i={drawPath:function(t){var r=t.path,n=t.duration,a=r.getTotalLength(),o=r.attr("d");return new Promise((function(t){e.a.animate(0,1,(function(t){var n=e.a.path.getSubpath(o,0,t*a);r.attr({d:n})}),n,void 0,t)}))},moveTo:function(t){var r=t.dx,n=t.dy,a=t.duration,o=t.element,i=t.r,c=void 0===i?"":i;return new Promise((function(t){e.a.animate(0,1,(function(t){o.transform("t ".concat(r*t," ").concat(n*t," ").concat(c&&"r "+c))}),a,void 0,t)}))},onPath:function(t){var r=t.path,n=t.duration,a=void 0===n?3e3:n,o=t.element,i=t.local,c=void 0===i?"":i,u=t.easing,f=e.a.path.getPointAtLength(r,0);return new Promise((function(t){e.a.animate(0,1,(function(t){var n=e.a.path.getPointAtLength(r,t*e.a.path.getTotalLength(r)),a=n.x,i=n.y,u=c+"t"+[a-f.x,i-f.y];o.transform(u)}),a,u,t)}))},blink:function(t){var r=t.interval,n=void 0===r?.5:r,a=t.duration,o=void 0===a?500:a,i=t.element,c=t.opacity,u=void 0===c?1:c;return i.attr({pointerEvents:"none"}),new Promise((function(t){e.a.animate(0,1,(function(t){i.attr({opacity:t})}),o,(function(t){return t<n?(-1/n*t+1)*u:1/(1-n)*(t-n)*u}),t)}))},flip:function(t){var r=t.front,n=t.duration,a=r.getBBox().cx;return new Promise((function(t){e.a.animate(0,1,(function(t){return r.transform(e.a.matrix(1-t,0,0,1,t*a,0))}),n,void 0,t)}))},sliding:function(t){var r=t.element,n=t.dx,a=t.dy,o=t.hiddenTime,i=t.duration,c=r.transform().local;return new Promise((function(t){e.a.animate(0,1,(function(t){var e=t<o?1:-1/(1-o)*t+1/(1-o);r.attr({opacity:e}).transform(c+"t"+[n*t*t,a*t*t])}),i,void 0,(function(){r.remove(),t()}))}))},rolling:function(t){var r=t.element,n=t.directionAngle,o=t.duration,i=t.multiple,c=t.revolutions,u=t.easing,f=void 0===u?window.mina.linear:u,l=t.dxy,s=r.transform().local,d=r.getBBox().w/2,m=n*(Math.PI/180),h=a(l?[l.x/c/i,l.y/c/i]:[d*Math.cos(m)*Math.PI,-d*Math.sin(m)*Math.PI],2),v=h[0],p=h[1],y=Math.cos(m)<0?-1:1,g=1===Math.abs(Math.sin(m))?-Math.sin(m):y;return new Promise((function(t){e.a.animate(0,1,(function(t){var n=s+"t"+[c*v*i*t,c*p*i*t],e="r"+g*t*(360*c),a="s"+(1+(i-1)*t);r.transform(n+e+a)}),o,f,t)}))},shake:function(t){var r=t.duration,n=t.rotate,a=t.element,o=t.reverse,i=void 0===o||o?1:-1,c=a.transform().local;return new Promise((function(t){return e.a.animate(0,1,(function(t){t<.25?t*=4:t=t<.75?-4*t+2:4*t-4,a.transform(c+"r"+i*n*t)}),r,void 0,t)}))},fadeIn:function(t){var r=t.element,n=t.duration,a=t.from,o=void 0===a?0:a,i=t.to,c=void 0===i?1:i;return new Promise((function(t){var a=Number(r.attr("opacity"));e.a.animate(o,c,(function(t){r.attr("opacity",a+(1-a)*t)}),n,null,t)}))},zoom:function(t){var r=t.type,n=t.element,a=t.duration,o=t.begin,i=t.end,c=t.local,u=void 0===c?"":c,f=t.from,l=void 0===f?0:f,s=t.to,d=void 0===s?1:s;return new Promise((function(t){var c=0;!o&&(o="in"===r?0:1),!i&&(i="in"===r?1:0),e.a.animate(l,d,(function(t){c="in"===r?o+(1-o)*t+(i-1):1-t+(o-1)*(1-t)+i*t,n.transform("".concat(u,"s ").concat(c))}),a,null,t)}))}};r.a=i},520:function(t,r,n){"use strict";n.d(r,"a",(function(){return m}));var e=n(73),a=n(7),o=n(514);function i(t){var r=t.g().addClass("dimmer").attr({visibility:"hidden"});return this.show=function(){r.attr("visibility","visible")},this.hide=function(){r.attr("visibility","hidden")},r.rect(0,0,800,500).addClass("f01 sno").attr({opacity:.8}),t.before(r),this}var c=n(523),u=n.n(c);function f(t,r,n,e,a,o,i){try{var c=t[o](i),u=c.value}catch(f){return void n(f)}c.done?r(u):Promise.resolve(u).then(e,a)}function l(t){return function(){var r=this,n=arguments;return new Promise((function(e,a){var o=t.apply(r,n);function i(t){f(o,e,a,i,c,"next",t)}function c(t){f(o,e,a,i,c,"throw",t)}i(void 0)}))}}function s(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function d(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function m(t,r){var n=this,c=function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){d(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}({background:{image:{src:u.a,x:735,y:10,scale:1}},numberAttrs:{fontSize:24,color:"#1C233C",offset:{x:0,y:-3},className:""},progress:{strokeWidth:3,className:"s02",offset:{x:-.5,y:2.5}},timeout:60},r),f=c.background,m=c.numberAttrs,h=c.progress,v=c.timeout,p=c.beforeStopCb,y=c.afterStopCb,g=0,b=null,x=!1,w=null,O=0,j=null,P=function(){var t=n.timerG.getBBox();return new Promise((function(r){a.a.animate(0,1,(function(r){n.timerG.transform("t ".concat((400-t.cx)*r," ").concat((250-t.cy)*r," s ").concat(2*r+1))}),1e3,null,(function(){!function(t){var r=n.timerG.transform().local;a.a.animate(0,100,(function(t){var e=Math.floor(t/10)%2?5:-5;n.timerG.transform("".concat(r," t").concat(e," "))}),600,null,(function(){n.timerG.transform("".concat(r," t0 ")),t()}))}(r)}))}))},k=function(){var t=n.timerG.select(".timer-text").select(".number");b=setInterval((function(){if(g>=v)n.stop();else if(g++,t.attr({text:g}),999!==v){var r=O/v;a.a.animate(0,1,(function(t){w.attr({strokeDashoffset:O-r*(g-1)-r*t})}),1e3,null,null)}}),1e3)};return this.timerG=t.g().addClass("timer"),this.endTime=0,this.destroy=function(){x=!1,clearInterval(b),n.timerG.remove()},this.reset=function(){g=0,n.timerG.select(".number").attr({text:g}),w.attr({strokeDashoffset:O,strokeDasharray:O})},this.pause=function(){x?clearInterval(b):k(),x=!x},this.stop=l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x=!1,clearInterval(b),j.show(),p&&p(),t.next=6,P();case 6:y&&y();case 7:case"end":return t.stop()}}),t)}))),this.start=function(){x=!0,k()},this.init=function(){!function(){var t=n.timerG.g().addClass("timer-background"),r=f.image,c=Object(e.f)({src:u.a,key:"timerBG",type:"svg"}).use().attr({transform:"t ".concat(r.x," ").concat(r.y," s ").concat(r.scale)});t.append(c);var l=t.getBBox(),s=n.timerG.g().addClass("timer-text");s.text(0+m.offset.x,0+m.offset.y,g.toString()).addClass("number ".concat(m.className)).attr({fontSize:m.fontSize,fill:m.color,textAnchor:"middle"});var d=s.getBBox();s.transform("t ".concat(l.cx," ").concat(l.cy+d.h/2));var p=n.timerG.g().addClass("timer-progress"),y=o.b.circle({cx:l.cx+h.offset.x,cy:l.cy+h.offset.y,r:l.w/2-7}),b=h.className,x=h.strokeWidth;O=a.a.path.getTotalLength(y),w=p.path(y).attr({class:"".concat(b," fno"),strokeDashoffset:999!==v?O:0,strokeDasharray:O,strokeWidth:x}),j=new i(n.timerG)}(),n.start()},this}},523:function(t,r){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="56" height="62" viewBox="0 0 56 62"><g id="clock" transform="translate(-720 -26)"><path id="\ud328\uc2a4_4654" data-name="\ud328\uc2a4 4654" d="M45.771,6.891l2.764,2.167a.75.75,0,0,1,.127,1.053l-.76.97a1.184,1.184,0,0,1-.52.379l-.8.3-2.158,2.752a.885.885,0,0,1-1.242.151l-1.568-1.23a.885.885,0,0,1-.151-1.242l2.158-2.752.1-.851a1.174,1.174,0,0,1,.243-.594l.761-.971a.75.75,0,0,1,1.053-.127" transform="translate(720 26)" fill="#f6b90e"></path><path id="\ud328\uc2a4_4655" data-name="\ud328\uc2a4 4655" d="M31.917,0h-8.7a1.4,1.4,0,0,0-1.4,1.4v1.69a1.4,1.4,0,0,0,1.4,1.4h1.723V7.64h5.259V4.484h1.723a1.4,1.4,0,0,0,1.4-1.4V1.4a1.4,1.4,0,0,0-1.4-1.4" transform="translate(720 26)" fill="#f6b90e"></path><path id="\ud328\uc2a4_4656" data-name="\ud328\uc2a4 4656" d="M55.123,33.65A27.55,27.55,0,1,1,27.557,6.085,27.565,27.565,0,0,1,55.123,33.65" transform="translate(720 26)" fill="#22bfbf"></path><path id="\ud328\uc2a4_4658" data-name="\ud328\uc2a4 4658" d="M51.568,33.66A24.111,24.111,0,0,1,19.845,56.521a24.87,24.87,0,0,1-4.89-2.26,24.435,24.435,0,0,1-2.671-1.9,24.092,24.092,0,0,1,15.19-42.8,24.145,24.145,0,0,1,18.7,8.917,22.253,22.253,0,0,1,1.89,2.671A23.935,23.935,0,0,1,51.568,33.66" transform="translate(720 26)" fill="#f1f1f1"></path><path id="\ud328\uc2a4_4659" data-name="\ud328\uc2a4 4659" d="M46.171,18.47,12.284,52.357A24.058,24.058,0,0,1,4.6,41.276L35.09,10.8a23.928,23.928,0,0,1,11.081,7.67" transform="translate(720 26)" fill="#fff"></path><path id="\ud328\uc2a4_4660" data-name="\ud328\uc2a4 4660" d="M50.335,26.031l-30.49,30.49a24.756,24.756,0,0,1-4.89-2.26l33.106-33.12a24.032,24.032,0,0,1,2.274,4.89" transform="translate(720 26)" fill="#fff"></path><path id="\ud328\uc2a4_4661" data-name="\ud328\uc2a4 4661" d="M27.467,58.439A24.786,24.786,0,1,1,52.253,33.654,24.814,24.814,0,0,1,27.467,58.439m0-48.2A23.416,23.416,0,1,0,50.883,33.654,23.443,23.443,0,0,0,27.467,10.237" transform="translate(720 26)" fill="#1a1a1a"></path><path id="\ud328\uc2a4_4663" data-name="\ud328\uc2a4 4663" d="M51.546,33.66A24.111,24.111,0,0,1,19.823,56.521a24.87,24.87,0,0,1-4.89-2.26,24.435,24.435,0,0,1-2.671-1.9,24.092,24.092,0,0,1,15.19-42.8,24.141,24.141,0,0,1,18.7,8.917,22.261,22.261,0,0,1,1.891,2.671A23.935,23.935,0,0,1,51.546,33.66" transform="translate(720 26)" fill="#f4eee4"></path><path id="\ud328\uc2a4_4664" data-name="\ud328\uc2a4 4664" d="M27.445,58.439A24.786,24.786,0,1,1,52.231,33.654,24.814,24.814,0,0,1,27.445,58.439m0-48.2A23.416,23.416,0,1,0,50.861,33.654,23.443,23.443,0,0,0,27.445,10.237" transform="translate(720 26)" fill="#424242"></path><path id="\ud328\uc2a4_4665" data-name="\ud328\uc2a4 4665" d="M46.171,18.47,12.284,52.357A24.058,24.058,0,0,1,4.6,41.276L35.09,10.8a23.928,23.928,0,0,1,11.081,7.67" transform="translate(720 26)" fill="#fff" opacity="0.3"></path><path id="\ud328\uc2a4_4666" data-name="\ud328\uc2a4 4666" d="M50.335,26.031l-30.49,30.49a24.756,24.756,0,0,1-4.89-2.26l33.106-33.12a24.032,24.032,0,0,1,2.274,4.89" transform="translate(720 26)" fill="#fff" opacity="0.3"></path><rect id="\uc0ac\uac01\ud615_1228" data-name="\uc0ac\uac01\ud615 1228" width="45.735" height="45.722" transform="translate(724.6 36.799)" fill="none"></rect><rect id="\uc0ac\uac01\ud615_1241" data-name="\uc0ac\uac01\ud615 1241" width="56" height="62" transform="translate(720 26)" fill="none"></rect></g></svg>'}}]);
//# sourceMappingURL=10.6705cfde.chunk.js.map
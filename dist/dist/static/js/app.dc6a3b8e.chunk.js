(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{476:function(e,t,r){},499:function(e,t,r){var n={"./DM000000":[223,5],"./DM000000.js":[223,5],"./DM000001":[224,2],"./DM000001.js":[224,2],"./DM000002":[226,3],"./DM000002.js":[226,3],"./DM000003":[225,4],"./DM000003.js":[225,4],"./DM000004":[227,1],"./DM000004.js":[227,1],"./DM000005":[228,0],"./DM000005.js":[228,0]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r(a)}))}a.keys=function(){return Object.keys(n)},a.id=499,e.exports=a},500:function(e,t){},501:function(e,t,r){"use strict";r.r(t),r.d(t,"clearMain",(function(){return y}));r(158),r(202),r(476);var n={DM000001:{questionType:"DM000001",background:{image:{x:400,y:250,imageIndex:"testImages/background.svg",scale:1}},shapes:{generate:{shapeNum:2},common:{gap:350,centerOffest:{x:0,y:0},offset:{x:0,y:0},scale:.8,className:{default:"f14",choice:"f06"}},items:[{type:"rect"},{type:"circle"},{type:"triangle"}]},drag:{generate:{dragNum:5},common:{gap:150,centerOffest:{x:0,y:0},offset:{x:0,y:0},scale:.85},items:[{type:"circle",imageIndex:"testImages/circle_bear.svg"},{type:"circle",imageIndex:"testImages/circle_lion.svg"},{type:"circle",imageIndex:"testImages/circle_monkey.svg"},{type:"rect",imageIndex:"testImages/rect_cow.svg"},{type:"rect",imageIndex:"testImages/rect_giraffe.svg"},{type:"rect",imageIndex:"testImages/rect_zebra.svg"},{type:"triangle",imageIndex:"testImages/triangle_deer.svg"},{type:"triangle",imageIndex:"testImages/triangle_fox.svg"},{type:"triangle",imageIndex:"testImages/triangle_mouse.svg"}]}},DM000002:{questionType:"DM000002",position:{center:{cx:400,cy:250},rows:5,columns:5,size:{width:90,height:90}},items:[{type:"circle1",imageIndex:"testImages/circle_bear.svg"},{type:"circle2",imageIndex:"testImages/circle_lion.svg"},{type:"circle3",imageIndex:"testImages/circle_monkey.svg"},{type:"rect1",imageIndex:"testImages/rect_cow.svg"},{type:"rect2",imageIndex:"testImages/rect_giraffe.svg"},{type:"rect3",imageIndex:"testImages/rect_zebra.svg"},{type:"triangle1",imageIndex:"testImages/triangle_deer.svg"},{type:"triangle2",imageIndex:"testImages/triangle_fox.svg"},{type:"triangle3",imageIndex:"testImages/triangle_mouse.svg"}]},DM000003:{questionType:"DM000003",flip:{position:{center:{cx:400,cy:250}}}},DM000004:{questionType:"DM000004",generate:{num:[[[1,99]],[[1,99]]]},calculate:{repeatCount:5,sign:"+",type:"h",handWrite:!1,fontSize:30}},DM000005:{questionType:"DM000005",directive:{text:"\ud070 \uc22b\uc790\ub97c \ub20c\ub7ec\ubd10\uc694!",fontSize:25,ttsOffset:{x:0,y:0},center:{x:400,y:105}},generate:{num:[[[1,9]],[[1,9]]]},background:{dayTime:1e4},choice:{repeatCount:3},fireworks:{num:12}}};function a(e,t,r,n,a,i,c){try{var o=e[i](c),s=o.value}catch(u){return void r(u)}o.done?t(s):Promise.resolve(s).then(n,a)}var i=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[n[t]]);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var c=e.apply(t,r);function o(e){a(c,n,i,o,s,"next",e)}function s(e){a(c,n,i,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),c=r(5),o=r(121),s=r(9);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t,r,n,a,i,c){try{var o=e[i](c),s=o.value}catch(u){return void r(u)}o.done?t(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function c(e){m(i,n,a,c,o,"next",e)}function o(e){m(i,n,a,c,o,"throw",e)}c(void 0)}))}}var l=function(){var e=p(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.meta,n=Object(o.a)(),e.next=4,Promise.all([Object(o.h)(r),Object(c.g)(r)]);case 4:n.remove();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=[],r=0,n=function(){var t=p(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e[r],i(),c.a.modules[n.questionType](g(g({},n),{},{canvas:c.a.SVG,callback:function(){return a()}}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r+=1,y(),e[r]&&n();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){return t=[]};return{run:n,next:a,addUserAction:function(e){"boolean"===typeof e&&(e=Number(e)),t.push(e);var r=t.filter((function(e){return 0===e||1===e})).slice(-3);r.length>=3&&r.every((function(e){return 0===e}))&&c.a.controller.next()},initActions:i,actions:t}},y=function(){for(var e=document.getElementById("main"),t=e.lastChild,r=e.firstChild;t!==c.a.SVG.node;)t.remove(),t=e.lastChild;for(;r!==c.a.SVG.node;)r.remove(),r=e.firstChild;c.a.SVG.clear()};(function(){var e=p(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:return r=e.sent,c.a.SVG=Object(s.a)("#frame2d"),e.next=6,l({meta:r});case 6:c.a.controller=v(r),c.a.controller.run();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()("DM000001")}},[[501,7,8]]]);
//# sourceMappingURL=app.dc6a3b8e.chunk.js.map
(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{20:function(e,n,t){e.exports=t(28)},25:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),i=t.n(o),c=(t(25),t(11)),l=t(12),s=t(19),u=t(16),d=t(1),h=t(2);t(6);function m(){var e=Object(d.a)(["\n    margin: 1rem;\n    cursor: pointer;\n    transform: translateX(-110%);\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    box-shadow: 0 0 3px #ccc;\n    list-style: none;\n    animation: leftIn 0.6s forwards;\n    &:hover {\n        background: #efefef;\n    }\n"]);return m=function(){return e},e}var f=h.a.li(m());function g(e){return r.a.createElement(f,{style:(n=e.id,{animationDelay:"".concat(.1*n,"s")}),onClick:function(){return e.handleClick(e.keyword)}},e.keyword);var n}function v(){var e=Object(d.a)(["\n    max-height: 90vh;\n    max-width: 50rem;\n    margin: 0 auto;\n    border: 1px solid #ccc;\n    border-radius: 1rem;\n    overflow: auto;\n    & h3 {\n        text-align: center;\n    }\n"]);return v=function(){return e},e}function w(){var e=Object(d.a)(["\n    width: 50%;\n    max-height: 90vh;    \n    margin: 1.5rem 0;\n    position: relative;\n    &::before {\n        content: '';\n        position: absolute;\n        top: -2rem;\n        left: calc(50% - 1rem);\n        border: 1rem solid;\n        border-color: transparent  transparent #ccc transparent;\n    }\n    transition: all 0.6s ease;\n    animation: showUp 1s ease;\n"]);return w=function(){return e},e}var p=h.a.div(w()),b=h.a.div(v());function y(e){var n=function(n){e.setSearchVal(n,(function(){e.handleSearch()})),e.setShowKeyword(!1)},t=e.keywordList.map((function(e,t){return r.a.createElement(g,{keyword:e.keyword,id:t,handleClick:n,key:t})}));return r.a.createElement(p,null,r.a.createElement(b,null,r.a.createElement("h3",null," ",e.header," "),t))}var E=function e(n){var t=n.url,a=n.data,r=e.cache||(e.cache=new Map),o=[];for(var i in a)o.push("".concat(i,"=").concat(encodeURIComponent(a[i])));return t+="?"+o.join("&"),r.has(t)?(console.log("cache: "+t),Promise.resolve(r.get(t))):function(e){var n=e.url;return new Promise((function(e,t){var a=new XMLHttpRequest;a.open("GET",n),a.send(null),a.onreadystatechange=function(){4===a.readyState&&(a.status>=200&&a.status<300||304===a.status?e(a.responseText):t(a.status))}}))}({url:t}).then((function(e){return console.log("get and cache: "+t),r.set(t,e),e}))};function x(){var e=Object(d.a)(["\n    width: 12px;\n    height: 12px;\n    border-radius: 100%;\n    border:2px solid;\n    position: absolute;\n    margin:30px auto;\n    right: 1rem;\n    top: -22px;\n    cursor: pointer;\n    &::before {\n        content: '';\n        content: \"\";\n        transform: rotate(45deg);\n        width:8px;\n        height: 2px;\n        position: absolute;\n        top:13px;\n        left:11px;\n        background-color: black;\n    }\n"]);return x=function(){return e},e}function S(){var e=Object(d.a)(["\n    background:#bdc3c7;\n    display: flex;\n    width: 18rem;\n    margin: 1rem auto;\n    position: relative;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    & input {\n        width:12rem;\n        outline: none;\n        border: none;\n        margin-left: 1rem;\n        background:#bdc3c7;\n    }\n    animation: bounceIn 2s ease;\n"]);return S=function(){return e},e}var k=h.a.div(S()),O=h.a.div(x());function j(e){return r.a.createElement(k,null,r.a.createElement("input",{onChange:function(n){e.handleChange(n.target.value)},value:e.searchVal}),r.a.createElement(O,{onClick:e.handleSearch}))}function K(){var e=Object(d.a)(["\n    display: flex;\n    justify-content: space-around;\n    @media (max-width: 600px) {\n        & {\n            display: none;\n        }\n    }\n"]);return K=function(){return e},e}function V(){var e=Object(d.a)(["\n    display: flex;\n    & div {\n        padding: 0.1rem;\n        position: relative;\n        background: #64a9d640;\n        margin:0 1rem;\n    }\n    & div::before {\n        content: '';\n        border: 0.7rem solid;\n        right: -1.4rem;\n        position: absolute;\n        border-color: transparent transparent transparent #64a9d640;\n    }\n"]);return V=function(){return e},e}function C(){var e=Object(d.a)(["\n    margin: 1rem;\n    border-bottom: 1px solid #ccc;\n    padding: 2rem;\n    list-style: none;\n    @media (max-width: 600px) {\n        & {\n            padding: 0;\n        }\n    }\n"]);return C=function(){return e},e}var L=h.a.li(C()),P=h.a.div(V()),M=h.a.div(K());function J(e){return r.a.createElement(L,null,r.a.createElement("h2",null,e.item.title),r.a.createElement(P,null,e.item.tags.map((function(e,n){return r.a.createElement("div",{key:n},e)}))),r.a.createElement("p",null,e.item.description),r.a.createElement(M,null,r.a.createElement("div",null,"\u4f5c\u8005: "+e.item.user_name),r.a.createElement("div",null,"\u8bc4\u8bba\u6570: "+e.item.comments_count),r.a.createElement("div",null,"\u53d1\u8868\u4e8e: "+function(e){var n=Date.now()-new Date(e).getTime();return n<3e5?"\u521a\u521a":n>=3e5&&n<36e5?"".concat(Math.floor(n/6e4),"\u5206\u949f\u524d"):n>=36e5&&n<864e5?"".concat(Math.floor(n/36e5),"\u5c0f\u65f6\u524d"):n>=864e5&&n<2592e6?"".concat(Math.floor(n/864e5),"\u5929\u524d"):function(e){var n=function(e){return e=e<10?"0"+e:e},t=new Date(e);return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())+" "+n(t.getHours())+":"+n(t.getMinutes())+":"+n(t.getSeconds())}(e)}(e.item.create_time)),r.a.createElement("a",{href:e.item.link_url},"\u9605\u8bfb\u539f\u6587")))}var X=t(17),D=t(18);function T(){var e=Object(d.a)(["\n    display: flex;\n    transition: all 0.6s ease-in-out;\n"]);return T=function(){return e},e}function F(){var e=Object(d.a)(["\n    width: 16rem;\n    overflow: hidden;\n    border-radius: 2rem;\n"]);return F=function(){return e},e}function I(){var e=Object(d.a)(["\n    align-self: flex-end;\n    & input {\n        width: 2rem;\n        text-align: center;\n        outline: none;\n        height: 2rem;\n        border: none;\n    }\n"]);return I=function(){return e},e}function N(){var e=Object(d.a)(["\n    flex: 0 0 2rem;\n    height: 2rem;\n    text-align: center;\n    line-height: 2rem;\n    cursor: pointer;\n    border-radius: 50%;\n    color: white;\n    margin-right: 0.5rem;\n"]);return N=function(){return e},e}function R(){var e=Object(d.a)(["\n    margin: 0.5rem auto;\n    display: flex;\n    align-items: center;\n    width: 17rem;\n"]);return R=function(){return e},e}var _=h.a.div(R()),W=h.a.div(N()),A=h.a.div(I()),B=h.a.div(F()),H=h.a.div(T());function U(e){var n=Object(a.useState)(0),t=Object(X.a)(n,2),o=t[0],i=t[1],c=Math.ceil(e.total/10);console.log(c);var l={active:{background:"rgba(0,0,0,0.8)"},normal:{background:"rgba(0,0,0,0.3)"}};Object(a.useEffect)((function(){i(0)}),[c]);var s;return r.a.createElement(a.Fragment,null,r.a.createElement(_,null,r.a.createElement(B,null,r.a.createElement(H,{style:o<3?{transform:"translateX(0)"}:{transform:"translateX(-".concat(2.5*(o-3),"rem)")}},(s=c,Object(D.a)(Array(s).keys())).map((function(n,t){return r.a.createElement(W,{style:o===t?l.active:l.normal,key:t,onClick:function(){e.getPage(t),i(t)}},t+1)})))),r.a.createElement(A,null,r.a.createElement("input",{value:o+1,onChange:function(n){/^\d+$/.test(n.target.value)?n.target.value<1||n.target.value>c||(e.getPage(n.target.value-1),i(n.target.value-1)):i(0)},onFocus:function(e){return e.target.select()}}))),r.a.createElement("div",{style:{textAlign:"center"}},"\u5171",c,"\u9875"))}function $(){var e=Object(d.a)(["\n    list-style: none;\n    max-height: 80vh;\n    max-width: 50rem;\n    margin: 0 auto;\n    overflow: auto;\n    padding: 0;\n"]);return $=function(){return e},e}function q(){var e=Object(d.a)(["\n    width: 50%;\n    max-height: 90vh;\n    overflow: hidden;\n    position: relative;\n"]);return q=function(){return e},e}var G=h.a.div(q()),Y=h.a.ul($());function z(e){return r.a.createElement(G,null,r.a.createElement(Y,null,e.data.map((function(e,n){return r.a.createElement(J,{item:e,key:n})}))),e.data.length?r.a.createElement(U,{getPage:e.getPage,total:e.total}):null)}function Q(){var e=Object(d.a)(["display: flex; width: 200%; transition: all 0.6s ease-in-out;height: 90vh;"]);return Q=function(){return e},e}function Z(){var e=Object(d.a)(["width: 100%; overflow:hidden;"]);return Z=function(){return e},e}var ee="http://localhost:8000",ne={showKeyword:{transform:"translateX(0)"},showResult:{transform:"translateX(-50%)"}},te=h.a.div(Z()),ae=h.a.div(Q()),re=new WebSocket("ws://localhost:3001"),oe=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).setSearchVal=function(e,n){a.setState({searchVal:e},n)},a.setShowKeyword=function(e){a.setState({showKeyword:e})},a.handleChange=function(e){if(a.setState({searchVal:e,showKeyword:!0}),""!==e){console.log("hint: ",e);var n={url:ee+"/sug",data:{keyword:e}};a.debounceSearchKeyword(n)}},a.search=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;E({url:ee+"/study",data:{keyword:e,offset:n}}).then((function(e){e=JSON.parse(e),console.log(e),a.setState({searchVal:"",result:e,showKeyword:!1})})).catch((function(e){console.log(e)}))}},a.handleSearch=function(){console.log("search : ",a.state.searchVal),a.search(a.state.searchVal)(),a.setState({getPage:a.search(a.state.searchVal)})},a.state={keywordList:[],searchVal:"",result:{},showKeyword:!1,getPage:null,hotList:[]},a.debounceSearchKeyword=function(e,n){var t=null;return function(){var a=this,r=[].slice.call(arguments);t&&clearTimeout(t),t=setTimeout((function(){e.apply(a,r)}),1e3*n)}}((function(e){E(e).then((function(n){(n=JSON.parse(n)).data.length>0&&(console.log("send ws"),re.send(JSON.stringify(e.data),(function(e){console.log(e)}))),console.log(n),a.setState({keywordList:n.data})})).catch((function(e){console.log(e)}))}),1),re.onmessage=function(e){console.log("receive: "+e);var n=JSON.parse(e.data);a.setState({hotList:n})},a}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(j,{searchVal:this.state.searchVal,handleChange:this.handleChange,handleSearch:this.handleSearch}),r.a.createElement(te,null,r.a.createElement(ae,{style:this.state.showKeyword?ne.showKeyword:ne.showResult},""===this.state.searchVal?r.a.createElement(y,{header:"\u70ed\u95e8\u641c\u7d22",keywordList:this.state.hotList,show:this.state.showKeyword,setSearchVal:this.setSearchVal,setShowKeyword:this.setShowKeyword,handleSearch:this.handleSearch}):r.a.createElement(y,{header:"\u76f8\u5173\u641c\u7d22",keywordList:this.state.keywordList,show:this.state.showKeyword,setSearchVal:this.setSearchVal,setShowKeyword:this.setShowKeyword,handleSearch:this.handleSearch}),r.a.createElement(z,{data:this.state.result.data||[],getPage:this.state.getPage,total:this.state.result.total||0}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,n,t){}},[[20,1,2]]]);
//# sourceMappingURL=main.1f0faa32.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports={container:"Button_container__1z1ji",content:"Button_content__11j4g",container_success:"Button_container_success__xtO2D",container_disabled:"Button_container_disabled__1cVSS"}},19:function(e,t,n){e.exports={"input-hidden":"ImageLoader_input-hidden__2K6HC",container:"ImageLoader_container__3w8bW","image-container":"ImageLoader_image-container__Zw6ub",image:"ImageLoader_image__gAZs1",label:"ImageLoader_label__34aDX"}},20:function(e,t,n){e.exports={body:"Layout_body__29uWW"}},25:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),i=(n(30),n(1)),l=n(12),s=n(21),m=Object(i.c)({}),d=n(22);function u(e,t){return function(e,t){var n=Object.keys(t).map(function(n){var a=t[n];return!1===a||void 0===a?"":!0===a?"".concat(e,"_").concat(n):"".concat(e,"_").concat(n,"_").concat(a)}).filter(function(e){return e.length});return[e].concat(Object(d.a)(n))}(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).map(function(t){return e[t]}).join(" ")}var g=function(e){return function(t,n){return u(e,t,n)}},_=n(7),h=n.n(_),f=g(h.a),p=function(e){var t=e.title;return c.a.createElement("div",{className:h.a.container},c.a.createElement("div",{className:f("title")},t))},b=n(14),v=n(15),E=n(23),w=n(16),O=n(24),j=n(8),y=n.n(j),k=n(17),C=n(18),N=g(n.n(C).a),L=function(e){var t=e.content,n=e.onClick,a=void 0===n?k.noop:n,o=e.containerClassName,r=void 0===o?"":o,i=e.contentClassName,l=void 0===i?"":i,s=e.disabled,m=e.success;return c.a.createElement("div",{className:"".concat(N("container",{disabled:s,success:m})," ").concat(r),onClick:a},c.a.createElement("div",{className:"".concat(N("content")," ").concat(l)},t))},S=n(19),U=g(n.n(S).a),x=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(c)))).state={image:null,imageUrl:null},n.handleChange=function(e){n.setState({imageUrl:URL.createObjectURL(e.target.files[0]),image:e.target.files[0]})},n.handleUpload=function(){var e=new FormData;e.append("avatar",n.state.image),fetch("/core/process/?param=file",{method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken")},body:e}).then(function(e){return e.text()}).then(function(e){fetch("/core/process/?param=colors",{method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken")},body:JSON.stringify({id:e,colors:[[242,242,242],[102,204,255],[0,102,153],[255,148,77],[255,77,77],[13,13,13]]})})}).catch(function(e){return console.log(e)})},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{type:"file",accept:"image/*",id:"imageLoader",onChange:this.handleChange,className:U("input-hidden")}),c.a.createElement("div",{className:U("container")},c.a.createElement("label",{htmlFor:"imageLoader",className:U("label")},"Choose image"),this.state.image&&c.a.createElement("div",{className:U("image-container")},c.a.createElement("img",{src:this.state.imageUrl,alt:"failed to render image",className:U("image")})),this.state.image&&c.a.createElement(L,{content:"Upload",onClick:this.handleUpload,disabled:!this.state.image,success:!0})))}}]),t}(a.Component),W=n(20),B=g(n.n(W).a),I=function(){return c.a.createElement("div",null,c.a.createElement(p,{title:"Awesome Stencil"}),c.a.createElement("div",{className:B("body")},c.a.createElement(x,null)))},F=Object(i.d)(m,Object(i.a)(l.a)),R=function(){return c.a.createElement(s.a,{store:F},c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports={container:"Header_container__dWu3U",title:"Header_title__3W2Km"}}},[[25,2,1]]]);
//# sourceMappingURL=main.84f22369.chunk.js.map
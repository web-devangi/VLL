"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9661],{89802:function(e,n,t){t.d(n,{q:function(){return f}});var i=t(1413),o=t(29439),r=t(45987),u=t(47313),a=t(74294),l=t(72652),c=t(46417),s=["fetchOptions","refetch","value"],f=function(e){var n=e.fetchOptions,t=e.refetch,f=void 0!==t&&t,d=e.value,v=(0,r.Z)(e,s),m=(0,u.useState)(!1),p=(0,o.Z)(m,2),Z=p[0],h=p[1],g=(0,u.useState)([]),x=(0,o.Z)(g,2),j=x[0],w=x[1];"object"===typeof(null===d||void 0===d?void 0:d.label)&&null!==(null===d||void 0===d?void 0:d.label)&&(d.label=d.label.value);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.Z,(0,i.Z)((0,i.Z)({labelInValue:!0,filterOption:!1,notFoundContent:Z?(0,c.jsx)(l.Z,{size:"small"}):"no results",value:d},v),{},{options:Z?[]:j,onFocus:function(){j.length&&!f||(h(!0),n().then((function(e){w(e),h(!1)})))}}))})}},20776:function(e,n,t){t.d(n,{o:function(){return v}});var i=t(1413),o=t(29439),r=t(45987),u=t(47313),a=t(84762),l=t(72652),c=t(12279),s=t.n(c),f=t(46417),d=["fetchOptions","refetch","debounceTimeout"],v=function(e){var n=e.fetchOptions,t=e.refetch,c=void 0!==t&&t,v=e.debounceTimeout,m=void 0===v?400:v,p=(0,r.Z)(e,d),Z=(0,u.useState)(!1),h=(0,o.Z)(Z,2),g=h[0],x=h[1],j=(0,u.useState)([]),w=(0,o.Z)(j,2),b=w[0],y=w[1],C=(0,u.useMemo)((function(){return s()((function(e){y([]),x(!0),n(e).then((function(e){y(e),x(!1)}))}),m)}),[]);return(0,f.jsx)(a.Z,(0,i.Z)({showSearch:!0,labelInValue:!0,filterTreeNode:function(e,n){return n.label.localeCompare(e)},treeLine:!0,onSearch:function(e){return C(e)},treeData:g?[]:b,treeDefaultExpandAll:!0,onFocus:function(){b.length&&!c||(x(!0),n().then((function(e){y(e),x(!1)})))},notFoundContent:g?(0,f.jsx)(l.Z,{size:"small"}):"no results"},p))}},55940:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),o=t(45987),r=(t(47313),t(59491)),u=t(47515),a=t(23560),l=t(24511),c=t(79492),s=t(46417),f=["size","onClick","type"];function d(e){var n=e.size,t=void 0===n?"":n,d=e.onClick,v=e.type,m=void 0===v?"default":v,p=(0,o.Z)(e,f),Z=(0,l.$)().t,h=(0,c.Z)().isDemo;return(0,s.jsx)(r.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(u.Z,{}),onClick:function(e){h?a.Am.warning(Z("cannot.work.demo")):d(e)},type:m},p))}},73431:function(e,n,t){var i=t(47313),o=t(39180),r=t(2717),u=t(28830),a=t(60535),l=t(46417);n.Z=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.formLang}),r.wU),t=n.languages,c=n.defaultLang;(0,i.useEffect)((function(){a.Z.getAllActive().then((function(n){var t=n.data;e((0,u.dc)(t)),e((0,u.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.ZP.Group,{value:c,onChange:function(n){var t=n.target.value;e((0,u.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,l.jsx)(o.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return v}});var i=t(1413),o=t(29439),r=t(45987),u=t(47313),a=t(12279),l=t.n(a),c=t(74294),s=t(72652),f=t(46417),d=["fetchOptions","debounceTimeout","onClear","refetchOptions"],v=function(e){var n=e.fetchOptions,t=e.debounceTimeout,a=void 0===t?400:t,v=e.onClear,m=e.refetchOptions,p=void 0!==m&&m,Z=(0,r.Z)(e,d),h=(0,u.useState)(!1),g=(0,o.Z)(h,2),x=g[0],j=g[1],w=(0,u.useState)([]),b=(0,o.Z)(w,2),y=b[0],C=b[1],S=(0,u.useMemo)((function(){return l()((function(e){C([]),j(!0),n(e).then((function(e){C(e),j(!1)}))}),a)}),[n,a]);return(0,f.jsx)(c.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:S,onClear:function(){S(""),v&&v()},notFoundContent:x?(0,f.jsx)(s.Z,{size:"small"}):"no results"},Z),{},{options:y,onFocus:function(){y.length&&!p||S("")}}))}},31247:function(e,n,t){var i=t(1413),o=t(93433),r=t(29439),u=t(47313),a=t(72652),l=t(15178),c=t(55291),s=t(82138),f=t(36104),d=t(24511),v=t(46417);n.Z=function(e){var n=e.fileList,t=void 0===n?[]:n,m=e.setFileList,p=e.type,Z=e.id,h=(0,d.$)().t,g=(0,u.useState)(!1),x=(0,r.Z)(g,2),j=x[0],w=x[1],b=j?(0,v.jsx)(a.Z,{}):(0,v.jsx)(s.Z,{}),y=t.find((function(e){return e.id===Z}))||[];return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l.Z,{listType:"picture-card",fileList:(null===y||void 0===y?void 0:y.galleries)||(null===y||void 0===y?void 0:y.images),customRequest:function(e){var n=e.file,i=e.onSuccess;w(!0);var r=new FormData;r.append("image",n),r.append("type",p),f.Z.upload(r).then((function(e){var n=e.data;!function(e,n){if(t.findIndex((function(n){return n.id===e}))>=0){var i=t.map((function(t){return t.id===e?{id:e,images:[].concat((0,o.Z)(t.images),[n])}:t}));m(i)}else m((function(t){return[].concat((0,o.Z)(t),[{id:e,images:[n]}])}))}(Z,function(e){return{uid:e.title,name:e.title,status:"done",url:e.title,created:!0}}(n)),i("ok")})).finally((function(){w(!1)}))},onRemove:function(e){var n=t.map((function(n){if(n.id===Z){var t=n.images.filter((function(n){return n.uid!==e.uid}));return 0===t.length?null:(0,i.Z)((0,i.Z)({},n),{},{images:t})}return n})).filter((function(e){return null!==e}));m(n)},showUploadList:!0,accept:".png,.jpg,.jpeg,.webp",beforeUpload:function(e){return!!(e.size/1024/1024<2)||(c.ZP.error(h("max.2.mb")),!1)},children:b})})}},385:function(e,n,t){var i=t(93433),o=t(1413),r=t(15861),u=t(29439),a=t(87757),l=t.n(a),c=t(47313),s=t(10976),f=t(26824),d=t(68197),v=t(59624),m=t(45705),p=t(15178),Z=t(9274),h=t(59491),g=t(82138),x=t(47515),j=t(5764),w=t(36104),b=t(24511),y=t(46417);n.Z=function(e){var n,t=e.mediaList,a=e.setMediaList,C=e.name,S=void 0===C?"products":C,k=(0,b.$)().t,z=s.Z.useForm(),F=(0,u.Z)(z,1)[0],L=(0,c.useState)(null),O=(0,u.Z)(L,2),N=O[0],T=O[1],M=(0,c.useState)([]),I=(0,u.Z)(M,2),V=I[0],D=I[1],q=(0,c.useState)(!1),P=(0,u.Z)(q,2),A=P[0],E=P[1],R=(0,c.useState)(!1),U=(0,u.Z)(R,2),$=U[0],B=U[1],G=function(){var e=(0,r.Z)(l().mark((function e(n){var t,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.file,i=n.type,t.name?(T("video"===i?(0,y.jsx)("video",{controls:!0,src:t.name,width:450,height:450}):(0,y.jsx)(f.Z,{src:t.name,width:"100%",height:450,alt:"preview-img"})),E(!0)):T(null);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),H=function(e){return{uid:e.title,name:e.title,status:"done",url:e.title,created:!0}};return(0,y.jsxs)(d.Z,{gutter:[24,24],children:[(0,y.jsx)(v.Z,{span:24,children:(0,y.jsx)(m.Z,{className:"align-items-start",children:(0,y.jsx)(p.Z,{customRequest:function(e){var n=e.file,t=e.onSuccess;B(!0);var r=new FormData;r.append("image",n),r.append("type",S),w.Z.upload(r).then((function(e){var n=e.data;a((function(e){return(0,o.Z)((0,o.Z)({},e),{},{images:[].concat((0,i.Z)(e.images),[(0,o.Z)((0,o.Z)({},H(n)),{},{isVideo:!0})])})})),t("ok")}))},accept:"video/*",listType:"text",className:"video-upload",multiple:!1,fileList:[],children:(0,y.jsxs)("div",{className:"media-upload",children:[(0,y.jsx)(g.Z,{})," ",(0,y.jsx)("span",{children:k("upload.video")})]})})})}),(0,y.jsx)(v.Z,{span:24,children:null===t||void 0===t||null===(n=t.previews)||void 0===n?void 0:n.map((function(e,n){var i,o;return(0,y.jsxs)(m.Z,{className:"uploaded-file",wrap:!0,children:[(0,y.jsx)("span",{className:"media-item",onClick:function(){return G({type:"img",file:null===t||void 0===t?void 0:t.previews[n]})},children:null===t||void 0===t||null===(i=t.previews[n])||void 0===i?void 0:i.name}),(0,y.jsx)("span",{className:"media-item",onClick:function(){return G({type:"video",file:null===t||void 0===t?void 0:t.images[n]})},children:null===t||void 0===t||null===(o=t.images[n])||void 0===o?void 0:o.name}),(0,y.jsx)(x.Z,{className:"delete-media-item",onClick:function(){return function(e){var n=t.images.filter((function(n,t){if(t!==e)return n})),i=t.previews.filter((function(n,t){if(t!==e)return n}));a({images:n,previews:i})}(n)}})]})}))}),(0,y.jsx)(Z.Z,{title:"Video Preview",visible:A,onCancel:function(){E(!1)},footer:null,children:N}),(0,y.jsx)(Z.Z,{title:"Preview image",visible:$,footer:null,children:(0,y.jsx)(s.Z,{form:F,onFinish:function(){a((function(e){return(0,o.Z)((0,o.Z)({},e),{},{previews:[].concat((0,i.Z)(e.previews),(0,i.Z)(V))})})),D([]),B(!1)},layout:"vertical",children:(0,y.jsxs)(d.Z,{gutter:[24,24],children:[(0,y.jsx)(v.Z,{span:24,children:(0,y.jsx)(s.Z.Item,{label:k("preview.image"),name:"preview-image",rules:[{required:!(null!==V&&void 0!==V&&V.length),message:k("required")}],children:(0,y.jsx)(j.Z,{type:S,imageList:V,setImageList:D,multiple:!1,text:"upload.image",form:F})})}),(0,y.jsx)(v.Z,{span:24,className:"d-flex justify-content-end",children:(0,y.jsx)(h.Z,{type:"primary",onClick:function(){return F.submit()},children:k("save")})})]})})})]})}},33724:function(e,n){n.Z=function(e){var n=[],t=e.length-1;return function i(o,r){for(var u=0,a=null===(l=e[r])||void 0===l?void 0:l.length;u<a;u++){var l,c=o.slice(0);c.push(e[r][u]),r===t?n.push(c):i(c,r+1)}}([],0),n}},37630:function(e,n,t){function i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,n=[],t=0;t<e;t++){var i=Math.floor(10*Math.random());n.push(i)}return n.join("")}t.d(n,{Z:function(){return i}})},75336:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(93433),o=t(4942);function r(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",r=e.map((function(e){return(0,o.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,i.Z)(r)))}},71136:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(29439),o=t(47313);function r(e,n){var t=(0,o.useState)(e),r=(0,i.Z)(t,2),u=r[0],a=r[1];return(0,o.useEffect)((function(){var t=setTimeout((function(){a(e)}),n);return function(){clearTimeout(t)}}),[e,n]),u}},85104:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),o=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8-53.5 31-71.7 99.4-41 152.9 30.8 53.5 98.9 71.9 152.2 41 42.5-24.6 62.7-73 53.6-118.8l48.7-28.3 140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8 53.3 30.9 121.5 12.6 152.2-41 30.8-53.6 12.6-122-40.7-152.9zm-673 138.4a47.6 47.6 0 01-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0165.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5zM522 463.8zM464 234a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm170 446.2l-122 70.3-122-70.3V539.8l122-70.3 122 70.3v140.4zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5z"}}]},name:"deployment-unit",theme:"outlined"},u=t(17469),a=function(e,n){return o.createElement(u.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:r}))};a.displayName="DeploymentUnitOutlined";var l=o.forwardRef(a)}}]);
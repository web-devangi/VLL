"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[256],{45334:function(e,t,r){r.d(t,{C:function(){return z}});var n=r(87462),a=r(4942),c=r(71002),l=r(29439),o=r(47313),i=r(46123),s=r.n(i),u=r(25172),m=r(16945),f=r(91964),p=r(82324),v=r(99178),d=o.createContext("default"),y=function(e){var t=e.children,r=e.size;return o.createElement(d.Consumer,null,(function(e){return o.createElement(d.Provider,{value:r||e},t)}))},g=d,E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},b=function(e,t){var r,i,d=o.useContext(g),y=o.useState(1),b=(0,l.Z)(y,2),h=b[0],x=b[1],Z=o.useState(!1),O=(0,l.Z)(Z,2),N=O[0],C=O[1],P=o.useState(!0),w=(0,l.Z)(P,2),k=w[0],j=w[1],S=o.useRef(),R=o.useRef(),z=(0,m.sQ)(t,S),_=o.useContext(f.E_).getPrefixCls,T=function(){if(R.current&&S.current){var t=R.current.offsetWidth,r=S.current.offsetWidth;if(0!==t&&0!==r){var n=e.gap,a=void 0===n?4:n;2*a<r&&x(r-2*a<t?(r-2*a)/t:1)}}};o.useEffect((function(){C(!0)}),[]),o.useEffect((function(){j(!0),x(1)}),[e.src]),o.useEffect((function(){T()}),[e.gap]);var A,I=e.prefixCls,B=e.shape,H=e.size,L=e.src,M=e.srcSet,D=e.icon,W=e.className,U=e.alt,F=e.draggable,G=e.children,Q=e.crossOrigin,V=E(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),X="default"===H?d:H,q=Object.keys("object"===(0,c.Z)(X)&&X||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),J=(0,v.Z)(q),K=o.useMemo((function(){if("object"!==(0,c.Z)(X))return{};var e=p.c4.find((function(e){return J[e]})),t=X[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:D?t/2:18}:{}}),[J,X]),Y=_("avatar",I),$=s()((r={},(0,a.Z)(r,"".concat(Y,"-lg"),"large"===X),(0,a.Z)(r,"".concat(Y,"-sm"),"small"===X),r)),ee=o.isValidElement(L),te=s()(Y,$,(i={},(0,a.Z)(i,"".concat(Y,"-").concat(B),!!B),(0,a.Z)(i,"".concat(Y,"-image"),ee||L&&k),(0,a.Z)(i,"".concat(Y,"-icon"),!!D),i),W),re="number"===typeof X?{width:X,height:X,lineHeight:"".concat(X,"px"),fontSize:D?X/2:18}:{};if("string"===typeof L&&k)A=o.createElement("img",{src:L,draggable:F,srcSet:M,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&j(!1)},alt:U,crossOrigin:Q});else if(ee)A=L;else if(D)A=D;else if(N||1!==h){var ne="scale(".concat(h,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},ce="number"===typeof X?{lineHeight:"".concat(X,"px")}:{};A=o.createElement(u.Z,{onResize:T},o.createElement("span",{className:"".concat(Y,"-string"),ref:function(e){R.current=e},style:(0,n.Z)((0,n.Z)({},ce),ae)},G))}else A=o.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:function(e){R.current=e}},G);return delete V.onError,delete V.gap,o.createElement("span",(0,n.Z)({},V,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},re),K),V.style),className:te,ref:z}),A)},h=o.forwardRef(b);h.displayName="Avatar",h.defaultProps={shape:"circle",size:"default"};var x=h,Z=r(14903),O=r(48138),N=r(37388),C=function(e){return e?"function"===typeof e?e():e:null},P=r(53553),w=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},k=o.forwardRef((function(e,t){var r=e.prefixCls,a=e.title,c=e.content,l=w(e,["prefixCls","title","content"]),i=o.useContext(f.E_).getPrefixCls,s=i("popover",r),u=i();return o.createElement(N.Z,(0,n.Z)({},l,{prefixCls:s,ref:t,overlay:function(e){if(a||c)return o.createElement(o.Fragment,null,a&&o.createElement("div",{className:"".concat(e,"-title")},C(a)),o.createElement("div",{className:"".concat(e,"-inner-content")},C(c)))}(s),transitionName:(0,P.mL)(u,"zoom-big",l.transitionName)}))}));k.displayName="Popover",k.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var j=k,S=function(e){var t=o.useContext(f.E_),r=t.getPrefixCls,n=t.direction,c=e.prefixCls,l=e.className,i=void 0===l?"":l,u=e.maxCount,m=e.maxStyle,p=e.size,v=r("avatar-group",c),d=s()(v,(0,a.Z)({},"".concat(v,"-rtl"),"rtl"===n),i),g=e.children,E=e.maxPopoverPlacement,b=void 0===E?"top":E,h=e.maxPopoverTrigger,N=void 0===h?"hover":h,C=(0,Z.Z)(g).map((function(e,t){return(0,O.Tm)(e,{key:"avatar-key-".concat(t)})})),P=C.length;if(u&&u<P){var w=C.slice(0,u),k=C.slice(u,P);return w.push(o.createElement(j,{key:"avatar-popover-key",content:k,trigger:N,placement:b,overlayClassName:"".concat(v,"-popover")},o.createElement(x,{style:m},"+".concat(P-u)))),o.createElement(y,{size:p},o.createElement("div",{className:d,style:e.style},w))}return o.createElement(y,{size:p},o.createElement("div",{className:d,style:e.style},C))},R=x;R.Group=S;var z=R},256:function(e,t,r){r.d(t,{Z:function(){return D}});var n=r(4942),a=r(29439),c=r(47313),l=r(46123),o=r.n(l),i=r(51114),s=r(52917),u=r(1413),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},f=r(17469),p=function(e,t){return c.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:m}))};p.displayName="ArrowRightOutlined";var v=c.forwardRef(p),d=r(25172),y=r(91964),g=r(87462),E=r(93433),b=r(14903),h=r(67440),x=r(37142),Z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},O=function(e){var t,r,n=e.prefixCls,a=e.separator,l=void 0===a?"/":a,o=e.children,i=e.overlay,s=e.dropdownProps,u=Z(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,c.useContext(y.E_).getPrefixCls)("breadcrumb",n);return t="href"in u?c.createElement("a",(0,g.Z)({className:"".concat(m,"-link")},u),o):c.createElement("span",(0,g.Z)({className:"".concat(m,"-link")},u),o),r=t,t=i?c.createElement(x.Z,(0,g.Z)({overlay:i,placement:"bottom"},s),c.createElement("span",{className:"".concat(m,"-overlay-link")},r,c.createElement(h.Z,null))):r,o?c.createElement("li",null,t,l&&c.createElement("span",{className:"".concat(m,"-separator")},l)):null};O.__ANT_BREADCRUMB_ITEM=!0;var N=O,C=function(e){var t=e.children,r=(0,c.useContext(y.E_).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(r,"-separator")},t||"/")};C.__ANT_BREADCRUMB_SEPARATOR=!0;var P=C,w=r(67251),k=r(48138),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function S(e,t,r,n){var a=r.indexOf(e)===r.length-1,l=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(e,t);return a?c.createElement("span",null,l):c.createElement("a",{href:"#/".concat(n.join("/"))},l)}var R=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},z=function(e,t,r){var n=(0,E.Z)(e),a=R(t||"",r);return a&&n.push(a),n},_=function(e){var t,r=e.prefixCls,a=e.separator,l=void 0===a?"/":a,i=e.style,s=e.className,u=e.routes,m=e.children,f=e.itemRender,p=void 0===f?S:f,v=e.params,d=void 0===v?{}:v,E=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),h=c.useContext(y.E_),x=h.getPrefixCls,Z=h.direction,O=x("breadcrumb",r);if(u&&u.length>0){var C=[];t=u.map((function(e){var t,r=R(e.path,d);return r&&C.push(r),e.children&&e.children.length&&(t=c.createElement(w.Z,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:p(e,d,u,z(C,e.path,d))}}))})),c.createElement(N,{overlay:t,separator:l,key:r||e.breadcrumbName},p(e,d,u,C))}))}else m&&(t=(0,b.Z)(m).map((function(e,t){return e?(0,k.Tm)(e,{separator:l,key:t}):e})));var P=o()(O,(0,n.Z)({},"".concat(O,"-rtl"),"rtl"===Z),s);return c.createElement("nav",(0,g.Z)({className:P,style:i},E),c.createElement("ol",null,t))};_.Item=N,_.Separator=P;var T=_,A=r(45334),I=r(45705),B=r(97484),H=r(3267),L=function(e,t,r){return t&&r?c.createElement(H.Z,{componentName:"PageHeader"},(function(n){var a=n.back;return c.createElement("div",{className:"".concat(e,"-back")},c.createElement(B.Z,{onClick:function(e){null===r||void 0===r||r(e)},className:"".concat(e,"-back-button"),"aria-label":a},t))})):null},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?c.createElement(v,null):c.createElement(s.Z,null)},D=function(e){var t=(0,i.Z)(!1),r=(0,a.Z)(t,2),l=r[0],s=r[1],u=function(e){var t=e.width;s(t<768,!0)};return c.createElement(y.C,null,(function(t){var r,a,i=t.getPrefixCls,s=t.pageHeader,m=t.direction,f=e.prefixCls,p=e.style,v=e.footer,y=e.children,g=e.breadcrumb,E=e.breadcrumbRender,b=e.className,h=!0;"ghost"in e?h=e.ghost:s&&"ghost"in s&&(h=s.ghost);var x=i("page-header",f),Z=(null===g||void 0===g?void 0:g.routes)?function(e){return c.createElement(T,e)}(g):null,O=g&&"props"in g,N=null!==(a=null===E||void 0===E?void 0:E(e,Z))&&void 0!==a?a:Z,C=O?g:N,P=o()(x,b,(r={"has-breadcrumb":!!C,"has-footer":!!v},(0,n.Z)(r,"".concat(x,"-ghost"),h),(0,n.Z)(r,"".concat(x,"-rtl"),"rtl"===m),(0,n.Z)(r,"".concat(x,"-compact"),l),r));return c.createElement(d.Z,{onResize:u},c.createElement("div",{className:P,style:p},C,function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=t.title,a=t.avatar,l=t.subTitle,o=t.tags,i=t.extra,s=t.onBack,u="".concat(e,"-heading"),m=n||l||o||i;if(!m)return null;var f=M(t,r),p=L(e,f,s),v=p||a||m;return c.createElement("div",{className:u},v&&c.createElement("div",{className:"".concat(u,"-left")},p,a&&c.createElement(A.C,a),n&&c.createElement("span",{className:"".concat(u,"-title"),title:"string"===typeof n?n:void 0},n),l&&c.createElement("span",{className:"".concat(u,"-sub-title"),title:"string"===typeof l?l:void 0},l),o&&c.createElement("span",{className:"".concat(u,"-tags")},o)),i&&c.createElement("span",{className:"".concat(u,"-extra")},c.createElement(I.Z,null,i)))}(x,e,m),y&&function(e,t){return c.createElement("div",{className:"".concat(e,"-content")},t)}(x,y),function(e,t){return t?c.createElement("div",{className:"".concat(e,"-footer")},t):null}(x,v)))}))}}}]);
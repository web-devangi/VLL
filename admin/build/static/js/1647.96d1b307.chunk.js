"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1647],{27155:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});t(47313);var r=t(77181),u=t(59491),o=t(2717),i=t(24511),a=t(91107),l=t(49959),c=t(66736),f=t(23560),s=t(90954),d=t(95882),p=t(97421),v=t(18333),m=t(46417);function h(){var e=(0,i.$)().t,n=(0,o.I0)(),t=(0,o.v9)((function(e){return e.menu}),o.wU).activeMenu,h=function(e){return{uid:e.name,name:e.name,status:"done",url:e.name,created:!0}};return(0,m.jsxs)(r.Z,{title:e("import"),children:[(0,m.jsxs)("div",{className:"alert",role:"alert",children:[(0,m.jsxs)("div",{className:"alert-header",children:[(0,m.jsx)(l.Z,{className:"alert-icon"}),(0,m.jsx)("p",{children:e("info")})]}),(0,m.jsxs)("ol",{className:"ml-4",children:[(0,m.jsx)("li",{children:e("import.text_1")}),(0,m.jsx)("li",{children:e("import.text_2")}),(0,m.jsx)("li",{children:e("import.text_3")}),(0,m.jsx)("li",{children:e("import.text_4")})]})]}),(0,m.jsx)(u.Z,{type:"primary",className:"mb-4",onClick:function(){var e=p.i_+"import-example/addons.xls";window.location.href=e},children:e("download.csv")}),(0,m.jsxs)(a.Z,{name:"file",multiple:!1,maxCount:1,customRequest:function(r){var u=r.file,o=r.onSuccess,i=new FormData;i.append("file",u),v.Z.import(i).then((function(r){f.Am.success(e("successfully.import")),n((0,s.nc)({activeMenu:t,data:h(u)})),o("ok"),n((0,d.MW)())}))},defaultFileList:null!==t&&void 0!==t&&t.data?[null===t||void 0===t?void 0:t.data]:null,accept:".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",children:[(0,m.jsx)("p",{className:"ant-upload-drag-icon",children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)("p",{className:"ant-upload-text",children:e("upload-drag")}),(0,m.jsx)("p",{className:"ant-upload-hint",children:e("upload-text")})]})]})}},72764:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.tupleNum=n.tuple=void 0;n.tuple=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n};n.tupleNum=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n}},6492:function(e,n,t){var r=t(20862),u=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n||{},r=t.defaultValue,u=t.value,l=t.onChange,c=t.postState,f=(0,a.default)((function(){return void 0!==u?u:void 0!==r?"function"===typeof r?r():r:"function"===typeof e?e():e})),s=(0,o.default)(f,2),d=s[0],p=s[1],v=void 0!==u?u:d;c&&(v=c(v));var m=i.useRef(l);m.current=l;var h=i.useCallback((function(e,n){p(e,n),v!==e&&m.current&&m.current(e,v)}),[v,m]),x=i.useRef(u);return i.useEffect((function(){void 0===u&&u!==x.current&&p(u),x.current=u}),[u]),[v,h]};var o=u(t(63038)),i=r(t(47313)),a=u(t(41993))},41993:function(e,n,t){var r=t(20862),u=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=i.useRef(!1),t=i.useState(e),r=(0,o.default)(t,2),u=r[0],a=r[1];return i.useEffect((function(){return n.current=!1,function(){n.current=!0}}),[]),[u,function(e,t){if(t&&n.current)return;a(e)}]};var o=u(t(63038)),i=r(t(47313))},81170:function(e,n,t){var r=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.composeRef=l,n.fillRef=a,n.supportRef=function(e){var n,t,r=(0,o.isMemo)(e)?e.type.type:e.type;if("function"===typeof r&&!(null===(n=r.prototype)||void 0===n?void 0:n.render))return!1;if("function"===typeof e&&!(null===(t=e.prototype)||void 0===t?void 0:t.render))return!1;return!0},n.useComposeRef=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.default)((function(){return l.apply(void 0,n)}),n,(function(e,n){return e.length===n.length&&e.every((function(e,t){return e===n[t]}))}))};var u=r(t(50008)),o=t(96214),i=r(t(57578));function a(e,n){"function"===typeof e?e(n):"object"===(0,u.default)(e)&&e&&"current"in e&&(e.current=n)}function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.filter((function(e){return e}));return r.length<=1?r[0]:function(e){n.forEach((function(n){a(n,e)}))}}}}]);
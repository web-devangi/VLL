"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1647],{27155:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});n(47313);var r=n(77181),u=n(59491),a=n(2717),o=n(24511),l=n(91107),i=n(49959),c=n(66736),s=n(23560),f=n(90954),d=n(95882),p=n(97421),v=n(18333),m=n(46417);function h(){const{t:e}=(0,o.$)(),t=(0,a.I0)(),{activeMenu:n}=(0,a.v9)((e=>e.menu),a.wU),h=e=>({uid:e.name,name:e.name,status:"done",url:e.name,created:!0});return(0,m.jsxs)(r.Z,{title:e("import"),children:[(0,m.jsxs)("div",{className:"alert",role:"alert",children:[(0,m.jsxs)("div",{className:"alert-header",children:[(0,m.jsx)(i.Z,{className:"alert-icon"}),(0,m.jsx)("p",{children:e("info")})]}),(0,m.jsxs)("ol",{className:"ml-4",children:[(0,m.jsx)("li",{children:e("import.text_1")}),(0,m.jsx)("li",{children:e("import.text_2")}),(0,m.jsx)("li",{children:e("import.text_3")}),(0,m.jsx)("li",{children:e("import.text_4")})]})]}),(0,m.jsx)(u.Z,{type:"primary",className:"mb-4",onClick:()=>{const e=p.i_+"import-example/addons.xls";window.location.href=e},children:e("download.csv")}),(0,m.jsxs)(l.Z,{name:"file",multiple:!1,maxCount:1,customRequest:r=>{let{file:u,onSuccess:a}=r;const o=new FormData;o.append("file",u),v.Z.import(o).then((r=>{s.Am.success(e("successfully.import")),t((0,f.nc)({activeMenu:n,data:h(u)})),a("ok"),t((0,d.MW)())}))},defaultFileList:null!==n&&void 0!==n&&n.data?[null===n||void 0===n?void 0:n.data]:null,accept:".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",children:[(0,m.jsx)("p",{className:"ant-upload-drag-icon",children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)("p",{className:"ant-upload-text",children:e("upload-drag")}),(0,m.jsx)("p",{className:"ant-upload-hint",children:e("upload-text")})]})]})}},72764:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tupleNum=t.tuple=void 0;t.tuple=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t};t.tupleNum=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},6492:(e,t,n)=>{var r=n(20862),u=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t||{},r=n.defaultValue,u=n.value,i=n.onChange,c=n.postState,s=(0,l.default)((function(){return void 0!==u?u:void 0!==r?"function"===typeof r?r():r:"function"===typeof e?e():e})),f=(0,a.default)(s,2),d=f[0],p=f[1],v=void 0!==u?u:d;c&&(v=c(v));var m=o.useRef(i);m.current=i;var h=o.useCallback((function(e,t){p(e,t),v!==e&&m.current&&m.current(e,v)}),[v,m]),x=o.useRef(u);return o.useEffect((function(){void 0===u&&u!==x.current&&p(u),x.current=u}),[u]),[v,h]};var a=u(n(63038)),o=r(n(47313)),l=u(n(41993))},41993:(e,t,n)=>{var r=n(20862),u=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=o.useRef(!1),n=o.useState(e),r=(0,a.default)(n,2),u=r[0],l=r[1];return o.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[u,function(e,n){if(n&&t.current)return;l(e)}]};var a=u(n(63038)),o=r(n(47313))},81170:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.composeRef=i,t.fillRef=l,t.supportRef=function(e){var t,n,r=(0,a.isMemo)(e)?e.type.type:e.type;if("function"===typeof r&&!(null===(t=r.prototype)||void 0===t?void 0:t.render))return!1;if("function"===typeof e&&!(null===(n=e.prototype)||void 0===n?void 0:n.render))return!1;return!0},t.useComposeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){return i.apply(void 0,t)}),t,(function(e,t){return e.length===t.length&&e.every((function(e,n){return e===t[n]}))}))};var u=r(n(50008)),a=n(96214),o=r(n(57578));function l(e,t){"function"===typeof e?e(t):"object"===(0,u.default)(e)&&e&&"current"in e&&(e.current=t)}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter((function(e){return e}));return r.length<=1?r[0]:function(e){t.forEach((function(t){l(t,e)}))}}}}]);
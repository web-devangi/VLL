"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1208],{17598:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var u=n(47313),r=n(77181),o=n(2717),a=n(24511),i=n(91107),l=n(66736),f=n(34344);const c={upload:e=>f.Z.post("dashboard/admin/module/booking/upload",e),update:e=>f.Z.post("dashboard/admin/module/booking/upload",e)};var d=n(90954),p=n(23560),s=n(46417);function v(){const[e,t]=(0,u.useState)(!1),n=(0,o.I0)(),{t:f}=(0,a.$)(),{activeMenu:v}=(0,o.v9)((e=>e.menu),o.wU),m=e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0});return(0,s.jsx)(r.Z,{title:f("bookingUpload"),children:(0,s.jsxs)(i.Z,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{let{file:t,onSuccess:u}=e;const r=new FormData;r.append("file",t),c.upload(r).then((e=>{let{data:t}=e;n((0,d.nc)({activeMenu:v,data:m(t)})),u("ok")}))},defaultFileList:null!==v&&void 0!==v&&v.data?[null===v||void 0===v?void 0:v.data]:null,beforeUpload:e=>{const t="image/png"===e.type,n="image/jpg"===e.type,u="image/jpeg"===e.type;if(t||u||n)return p.Am.error("".concat(e.name," is not valid file")),!1},children:[(0,s.jsx)("p",{className:"ant-upload-drag-icon",children:(0,s.jsx)(l.Z,{})}),(0,s.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,s.jsx)("p",{className:"ant-upload-hint",children:"To update the booking database using this file, you need to click the above button"})]})})}},72764:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tupleNum=t.tuple=void 0;t.tuple=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t};t.tupleNum=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},6492:(e,t,n)=>{var u=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t||{},u=n.defaultValue,r=n.value,l=n.onChange,f=n.postState,c=(0,i.default)((function(){return void 0!==r?r:void 0!==u?"function"===typeof u?u():u:"function"===typeof e?e():e})),d=(0,o.default)(c,2),p=d[0],s=d[1],v=void 0!==r?r:p;f&&(v=f(v));var m=a.useRef(l);m.current=l;var h=a.useCallback((function(e,t){s(e,t),v!==e&&m.current&&m.current(e,v)}),[v,m]),y=a.useRef(r);return a.useEffect((function(){void 0===r&&r!==y.current&&s(r),y.current=r}),[r]),[v,h]};var o=r(n(63038)),a=u(n(47313)),i=r(n(41993))},41993:(e,t,n)=>{var u=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=a.useRef(!1),n=a.useState(e),u=(0,o.default)(n,2),r=u[0],i=u[1];return a.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[r,function(e,n){if(n&&t.current)return;i(e)}]};var o=r(n(63038)),a=u(n(47313))},81170:(e,t,n)=>{var u=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.composeRef=l,t.fillRef=i,t.supportRef=function(e){var t,n,u=(0,o.isMemo)(e)?e.type.type:e.type;if("function"===typeof u&&!(null===(t=u.prototype)||void 0===t?void 0:t.render))return!1;if("function"===typeof e&&!(null===(n=e.prototype)||void 0===n?void 0:n.render))return!1;return!0},t.useComposeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.default)((function(){return l.apply(void 0,t)}),t,(function(e,t){return e.length===t.length&&e.every((function(e,n){return e===t[n]}))}))};var r=u(n(50008)),o=n(96214),a=u(n(57578));function i(e,t){"function"===typeof e?e(t):"object"===(0,r.default)(e)&&e&&"current"in e&&(e.current=t)}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var u=t.filter((function(e){return e}));return u.length<=1?u[0]:function(e){t.forEach((function(t){i(t,e)}))}}}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3196],{53233:(t,e,l)=>{l.d(e,{Z:()=>m});var o=l(47313),n=l(56140),a=l(67251),s=l(45705),i=l(86345),c=l(78267),d=l(37388),r=l(59491),u=l(99587),v=l(24511),h=l(46417);const{Text:p}=n.Z,m=t=>{let{columns:e=[],setColumns:l,style:n,size:m="",iconOnly:x}=t;const{t:k}=(0,v.$)(),[f,g]=(0,o.useState)(!1),Z=(0,h.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.map(((t,o)=>(0,h.jsx)(a.Z.Item,{children:(0,h.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:t.title}),(0,h.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(t){const o=null===e||void 0===e?void 0:e.map((e=>(e.dataIndex===t.dataIndex&&(e.is_show=!(null!==e&&void 0!==e&&e.is_show)),e)));l(o)}(t),disabled:1===o})]})},t+o)))});return(0,h.jsx)(c.Z,{overlay:Z,trigger:["click"],onVisibleChange:t=>{g(t)},visible:f,children:(0,h.jsx)(d.Z,{title:k("change.columns"),children:(0,h.jsx)(r.Z,{style:{...n},size:m,icon:(0,h.jsx)(u.Z,{}),children:x?null:k("Columns")})})})}},83196:(t,e,l)=>{l.r(e),l.d(e,{default:()=>w});var o=l(66204),n=l(68197),a=l(59624),s=l(77181),i=l(45705),c=l(74294),d=l(59491),r=l(78508),u=l(47313),v=l(63243),h=l(2717),p=l(26441),m=l(90954),x=l(53233),k=l(68377),f=l(80314),g=l(24511),Z=l(97890),_=l(46417);const w=()=>{var t;const e=(0,h.I0)(),{t:l}=(0,g.$)(),w=(0,Z.s0)(),{activeMenu:j}=(0,h.v9)((t=>t.menu),h.wU),{loading:y,productList:C}=(0,h.v9)((t=>t.stockReport),h.wU),[z,b]=(0,u.useState)([]),[S,H]=(0,u.useState)(!1),[V,I]=(0,u.useState)((null===j||void 0===j||null===(t=j.data)||void 0===t?void 0:t.value)||null),[M,q]=(0,u.useState)([{title:"Product title",dataIndex:"product_translation_title",key:"product_translation_title",render:(t,o)=>{var n;return(0,_.jsx)("a",{onClick:()=>{return t=o,e((0,m.bL)({url:"report/products",id:"report.products",name:l("report.products")})),void w("/report/products?product_id=".concat(t.id));var t},children:null===o||void 0===o||null===(n=o.translation)||void 0===n?void 0:n.title})},is_show:!0,sorter:(t,e)=>{var l,o;return null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title.localeCompare(null===e||void 0===e||null===(o=e.translation)||void 0===o?void 0:o.title)}},{title:"Status",key:"status",dataIndex:"status",render:(t,e)=>(0,_.jsx)(o.Z,{children:e.status},e.id),is_show:!0},{title:"Stock",key:"stock",dataIndex:"quantity",render:(t,e)=>null===e||void 0===e?void 0:e.stocks_sum_quantity,is_show:!0,sorter:(t,e)=>(null===t||void 0===t?void 0:t.stocks_sum_quantity)-(null===e||void 0===e?void 0:e.stocks_sum_quantity)}]),N={page:j.page,perPage:j.perPage,actual:V},O=t=>{e((0,k.wS)(t))};(0,f.Z)((()=>{O(N)}),[V]),(0,u.useEffect)((()=>{j.refetch&&(O(N),e((0,m.A_)(j)))}),[j.refetch]);const P={selectedRowKeys:z,onChange:t=>b(t)};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(n.Z,{gutter:24,children:(0,_.jsx)(a.Z,{span:24,children:(0,_.jsxs)(s.Z,{title:l("stock"),children:[(0,_.jsxs)(i.Z,{className:"d-flex justify-content-end",children:[(0,_.jsx)(c.Z,{style:{width:"200px"},onChange:t=>I(t),options:[{value:null,label:"All products",key:"all_products"},{value:"in_stock",label:"In stock",key:"in_stock"},{value:"low_stock",label:"Low stock",key:"low_stock"},{value:"out_of_stock",label:"Out of stock",key:"out_of_stock"}],defaultValue:(null===j||void 0===j?void 0:j.data)||null}),(0,_.jsx)(d.Z,{icon:(0,_.jsx)(v.Z,{}),loading:S,onClick:()=>{H(!0),p.Z.getStocks({export:"excel",actual:V}).then((t=>{const e=t.data.link;e&&(window.location.href=e)})).finally((()=>H(!1)))},children:l("download")}),(0,_.jsx)(x.Z,{columns:M,setColumns:q})]}),(0,_.jsx)(r.Z,{scroll:{x:!0},rowSelection:P,columns:null===M||void 0===M?void 0:M.filter((t=>t.is_show)),dataSource:C.data||[],rowKey:t=>t.id,loading:y,pagination:{pageSize:null===C||void 0===C?void 0:C.per_page,page:(null===C||void 0===C?void 0:C.current_page)||1,total:null===C||void 0===C?void 0:C.total,defaultCurrent:1},onChange:t=>{const{pageSize:e,current:l}=t;O({page:l,perPage:e,actual:V})}})]})})})})}},63243:(t,e,l)=>{l.d(e,{Z:()=>c});var o=l(1413),n=l(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"};var s=l(17469),i=function(t,e){return n.createElement(s.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:e,icon:a}))};i.displayName="CloudDownloadOutlined";const c=n.forwardRef(i)},99587:(t,e,l)=>{l.d(e,{Z:()=>c});var o=l(1413),n=l(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var s=l(17469),i=function(t,e){return n.createElement(s.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:e,icon:a}))};i.displayName="TableOutlined";const c=n.forwardRef(i)}}]);
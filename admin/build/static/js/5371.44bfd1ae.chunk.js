"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5371],{55940:(e,t,n)=>{n.d(t,{Z:()=>d});n(47313);var s=n(59491),l=n(47515),c=n(23560),i=n(24511),a=n(79492),o=n(46417);function d(e){let{size:t="",onClick:n,type:d="default",...r}=e;const{t:u}=(0,i.$)(),{isDemo:h}=(0,a.Z)();return(0,o.jsx)(s.Z,{size:t,icon:(0,o.jsx)(l.Z,{}),onClick:e=>{h?c.Am.warning(u("cannot.work.demo")):n(e)},type:d,...r})}},53233:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(47313),l=n(56140),c=n(67251),i=n(45705),a=n(86345),o=n(78267),d=n(37388),r=n(59491),u=n(99587),h=n(24511),v=n(46417);const{Text:m}=l.Z,x=e=>{let{columns:t=[],setColumns:n,style:l,size:x="",iconOnly:Z}=e;const{t:y}=(0,h.$)(),[f,p]=(0,s.useState)(!1),j=(0,v.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(c.Z.Item,{children:(0,v.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(a.Z,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(o.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{p(e)},visible:f,children:(0,v.jsx)(d.Z,{title:y("change.columns"),children:(0,v.jsx)(r.Z,{style:{...l},size:x,icon:(0,v.jsx)(u.Z,{}),children:Z?null:y("Columns")})})})}},5371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var s=n(47313),l=n(45705),c=n(59491),i=n(77181),a=n(78508),o=n(12019),d=n(47515),r=n(55768),u=n(97890),h=n(23560),v=n(74580),m=n(69658),x=n(30554),Z=n(2717),y=n(90954),f=n(14506),p=n(24511),j=n(53233),g=n(55940),w=n(80314),b=n(46417);const k=()=>{const{t:e}=(0,p.$)(),{setIsModalVisible:t}=(0,s.useContext)(v._),[n,k]=(0,s.useState)(null),z=(0,Z.I0)(),C=(0,u.s0)(),[V,H]=(0,s.useState)(null),[_,I]=(0,s.useState)(!1),{activeMenu:S}=(0,Z.v9)((e=>e.menu),Z.wU),{currencies:M,loading:$}=(0,Z.v9)((e=>e.currency),Z.wU),[U,A]=(0,s.useState)([{title:e("title"),dataIndex:"title",key:"title",is_show:!0},{title:e("symbol"),dataIndex:"symbol",key:"symbol",is_show:!0},{title:e("rate"),dataIndex:"rate",key:"rate",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(n,s)=>(0,b.jsxs)(l.Z,{children:[(0,b.jsx)(c.Z,{type:"primary",icon:(0,b.jsx)(o.Z,{}),onClick:()=>(t=>{z((0,y.bL)({url:"currency/".concat(t.id),id:"currency_edit",name:e("edit.currency")})),C("/currency/".concat(t.id))})(s)}),s.default?"":(0,b.jsx)(g.Z,{icon:(0,b.jsx)(d.Z,{}),onClick:()=>{k([s.id]),t(!0),H(!0)}})]})}]);(0,w.Z)((()=>{const e=S.data,t={status:(null===e||void 0===e?void 0:e.role)||"published",perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};z((0,f.U$)(t))}),[S.data]),(0,s.useEffect)((()=>{const e=S.data,t={status:(null===e||void 0===e?void 0:e.role)||"published"};S.refetch&&(z((0,f.U$)(t)),z((0,y.A_)(S)))}),[S.refetch]);const O={selectedRowKeys:n,onChange:e=>{k(e)}};return(0,b.jsxs)(i.Z,{title:e("currencies"),extra:(0,b.jsxs)(l.Z,{children:[(0,b.jsx)(c.Z,{icon:(0,b.jsx)(r.Z,{}),type:"primary",onClick:()=>{z((0,y.bL)({id:"add-currencies",url:"currency/add",name:e("add.currency")})),C("/currency/add")},children:e("add.currency")}),(0,b.jsx)(g.Z,{onClick:()=>{null===n||0===n.length?h.Am.warning(e("select.the.product")):(t(!0),H(!1))},children:e("delete.selected")}),(0,b.jsx)(j.Z,{columns:U,setColumns:A})]}),children:[(0,b.jsx)(a.Z,{scroll:{x:!0},rowSelection:O,columns:null===U||void 0===U?void 0:U.filter((e=>e.is_show)),dataSource:M,rowKey:e=>e.id,loading:$,pagination:!1}),(0,b.jsx)(m.Z,{click:()=>{I(!0);const s={...Object.assign({},...n.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};x.Z.delete(s).then((()=>{h.Am.success(e("successfully.deleted")),t(!1),z((0,f.U$)()),H(null)})).finally((()=>{k(null),I(!1)}))},text:e(V?"delete":"all.delete"),setText:k,loading:_})]})}},55768:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(1413),l=n(47313);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=n(17469),a=function(e,t){return l.createElement(i.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:c}))};a.displayName="PlusCircleOutlined";const o=l.forwardRef(a)},99587:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(1413),l=n(47313);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=n(17469),a=function(e,t){return l.createElement(i.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:c}))};a.displayName="TableOutlined";const o=l.forwardRef(a)}}]);
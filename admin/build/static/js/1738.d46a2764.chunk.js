"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1738],{55940:(e,t,a)=>{a.d(t,{Z:()=>o});a(47313);var n=a(59491),l=a(47515),s=a(23560),i=a(24511),c=a(79492),d=a(46417);function o(e){let{size:t="",onClick:a,type:o="default",...r}=e;const{t:u}=(0,i.$)(),{isDemo:h}=(0,c.Z)();return(0,d.jsx)(n.Z,{size:t,icon:(0,d.jsx)(l.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):a(e)},type:o,...r})}},53233:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(47313),l=a(56140),s=a(67251),i=a(45705),c=a(86345),d=a(78267),o=a(37388),r=a(59491),u=a(99587),h=a(24511),g=a(46417);const{Text:m}=l.Z,v=e=>{let{columns:t=[],setColumns:a,style:l,size:v="",iconOnly:Z}=e;const{t:x}=(0,h.$)(),[f,j]=(0,n.useState)(!1),y=(0,g.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,g.jsx)(s.Z.Item,{children:(0,g.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,g.jsx)(m,{children:e.title}),(0,g.jsx)(c.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,g.jsx)(d.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{j(e)},visible:f,children:(0,g.jsx)(o.Z,{title:x("change.columns"),children:(0,g.jsx)(r.Z,{style:{...l},size:v,icon:(0,g.jsx)(u.Z,{}),children:Z?null:x("Columns")})})})}},81738:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(47313),l=a(97890),s=a(26824),i=a(66204),c=a(45705),d=a(59491),o=a(77181),r=a(78508),u=a(12019),h=a(47515),g=a(55768),m=a(74580),v=a(23560),Z=a(69658),x=a(60535),f=a(2717),j=a(90954),y=a(24511),p=a(45464),w=a(55940),z=a(30557),k=a(53233),C=a(79492),b=a(46417);const V=()=>{var e;const{t:t}=(0,y.$)(),[a,V]=(0,n.useState)(!1),[H,_]=(0,n.useState)(null),[I,S]=(0,n.useState)(""),{setIsModalVisible:L}=(0,n.useContext)(m._),{activeMenu:M}=(0,f.v9)((e=>e.menu),f.wU),A=(0,f.I0)(),N=(0,l.s0)(),{isDemo:O,demoFunc:D}=(0,C.Z)(),{allLanguages:E,loading:R}=(0,f.v9)((e=>e.languages),f.wU),[$,B]=(0,n.useState)([{title:t("title"),dataIndex:"title",key:"title",is_show:!0},{title:t("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,b.jsx)(s.Z,{src:(0,p.Z)(e),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+t.id)},{title:t("status"),dataIndex:"active",key:"active",is_show:!0,render:e=>e?(0,b.jsxs)(i.Z,{color:"cyan",children:[" ",t("active")]}):(0,b.jsx)(i.Z,{color:"yellow",children:t("inactive")})},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,a)=>(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(d.Z,{type:"primary",icon:(0,b.jsx)(u.Z,{}),onClick:()=>(e=>{A((0,j.bL)({url:"language/".concat(e.id),id:"language_edit",name:t("edit.language")})),N("/language/".concat(e.id))})(a)}),1===a.default?"":(0,b.jsx)(w.Z,{icon:(0,b.jsx)(h.Z,{}),onClick:()=>{_([a.id]),S("deleteLang"),L(!0)}})]})}]);(0,n.useEffect)((()=>{M.refetch&&(A((0,z.o)()),A((0,j.A_)(M)))}),[M.refetch]);return(0,b.jsxs)(o.Z,{title:t("languages"),extra:(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(d.Z,{icon:(0,b.jsx)(g.Z,{}),type:"primary",onClick:()=>{A((0,j.bL)({id:"add.language",url:"language/add",name:t("add.language")})),N("/language/add")},children:t("add.language")}),(0,b.jsx)(k.Z,{columns:$,setColumns:B})]}),children:[(0,b.jsx)(r.Z,{scroll:{x:!0},columns:null===$||void 0===$?void 0:$.filter((e=>e.is_show)),dataSource:E,rowKey:e=>e.id,loading:R,pagination:!1,rowSelection:{selectedRowKeys:[null===(e=E.find((e=>e.default)))||void 0===e?void 0:e.id],type:"radio",onChange:e=>{O?D():(L(!0),_(e[0]),S(!0))}}}),(0,b.jsx)(Z.Z,{click:"deleteLang"===I?()=>{V(!0);const e={...Object.assign({},...H.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};x.Z.delete(e).then((()=>{L(!1),v.Am.success(t("successfully.deleted")),A((0,z.o)())})).finally((()=>{_(null),V(!1)}))}:()=>{V(!0),x.Z.setDefault(H).then((()=>{v.Am.success(t("successfully.updated")),L(!1),A((0,z.o)())})).finally((()=>V(!1)))},text:t("deleteLang"!==I?"change.default.language":"delete"),loading:a})]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=a(17469),c=function(e,t){return l.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};c.displayName="PlusCircleOutlined";const d=l.forwardRef(c)},99587:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=a(17469),c=function(e,t){return l.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};c.displayName="TableOutlined";const d=l.forwardRef(c)}}]);
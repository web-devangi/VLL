"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[358],{55940:(e,t,a)=>{a.d(t,{Z:()=>o});a(47313);var n=a(59491),c=a(47515),s=a(23560),l=a(24511),r=a(79492),i=a(46417);function o(e){let{size:t="",onClick:a,type:o="default",...d}=e;const{t:u}=(0,l.$)(),{isDemo:v}=(0,r.Z)();return(0,i.jsx)(n.Z,{size:t,icon:(0,i.jsx)(c.Z,{}),onClick:e=>{v?s.Am.warning(u("cannot.work.demo")):a(e)},type:o,...d})}},53233:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(47313),c=a(56140),s=a(67251),l=a(45705),r=a(86345),i=a(78267),o=a(37388),d=a(59491),u=a(99587),v=a(24511),h=a(46417);const{Text:m}=c.Z,x=e=>{let{columns:t=[],setColumns:a,style:c,size:x="",iconOnly:p}=e;const{t:Z}=(0,v.$)(),[f,g]=(0,n.useState)(!1),j=(0,h.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(s.Z.Item,{children:(0,h.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(r.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(i.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,h.jsx)(o.Z,{title:Z("change.columns"),children:(0,h.jsx)(d.Z,{style:{...c},size:x,icon:(0,h.jsx)(u.Z,{}),children:p?null:Z("Columns")})})})}},51988:(e,t,a)=>{a.d(t,{Z:()=>o});a(47313);var n=a(24511),c=a(66188);const s=a.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",l=a.p+"static/media/noresult.ac4af107751f94856a9c.riv",r=a.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var i=a(46417);const o=function(e){let{id:t="noresult",text:a=""}=e;const{t:o}=(0,n.$)(),d={src:{noproductsfound:s,noresult:l,nosell:r}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,c.useRive)(d);return(0,i.jsxs)("div",{className:"animation-canvas",children:[(0,i.jsx)("div",{style:{width:"100%",height:200},children:(0,i.jsx)(u,{})}),(0,i.jsx)("div",{className:"text",children:o(a)})]})}},41481:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(47313),c=a(66672),s=a(16031),l=a(40765),r=a(46417);function i(e){let{handleChange:t,defaultValue:a,resetSearch:i,...o}=e;const[d,u]=(0,n.useState)(a),v=(0,n.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(a)}),[i]),(0,r.jsx)(c.Z,{value:d,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,r.jsx)(l.Z,{}),...o})}},13945:(e,t,a)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{Z:()=>n})},88486:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(47313),c=a(12019),s=a(66407),l=a(47515),r=a(55768),i=a(45705),o=a(66204),d=a(59491),u=a(77181),v=a(78508),h=a(74580),m=a(97890),x=a(23560),p=a(69658),Z=a(2717),f=a(90954),g=a(57481),j=a(85191),y=a(24511),w=a(55940),C=a(53233),z=a(41481),b=a(80314),k=a(13945),V=a(51988),_=a(46417);const S=["blue","red","gold","volcano","cyan","lime"],H=()=>{var e,t,a;const{t:H}=(0,y.$)(),I=(0,Z.I0)(),M=(0,m.s0)(),{activeMenu:N}=(0,Z.v9)((e=>e.menu),Z.wU);const[A,R]=(0,n.useState)([{title:H("id"),dataIndex:"id",key:"id",is_show:!0},{title:H("name"),dataIndex:"name",key:"name",is_show:!0,render:(e,t)=>{var a;return null===t||void 0===t||null===(a=t.translation)||void 0===a?void 0:a.title}},{title:H("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,_.jsx)(i.Z,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,_.jsx)(o.Z,{className:"text-uppercase",color:[S[t]],children:e})))})}},{title:H("category"),dataIndex:"category ",key:"category",is_show:!0,render:(e,t)=>{var a,n;return null===(a=t.category)||void 0===a||null===(n=a.translation)||void 0===n?void 0:n.title}},{title:H("status"),dataIndex:"active",key:"active",is_show:!0,render:e=>e?(0,_.jsxs)(o.Z,{color:"cyan",children:[" ",H("active")]}):(0,_.jsx)(o.Z,{color:"yellow",children:H("inactive")})},{title:H("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,_.jsxs)(i.Z,{children:[(0,_.jsx)(d.Z,{type:"primary",icon:(0,_.jsx)(c.Z,{}),onClick:()=>function(e){I((0,f.bL)({id:"career_edit",url:"career/".concat(e),name:H("edit.career")})),M("/career/".concat(e))}(t.id)}),(0,_.jsx)(d.Z,{icon:(0,_.jsx)(s.Z,{}),onClick:()=>(e=>{I((0,f.bL)({id:"career-clone",url:"career-clone/".concat(e),name:H("career.clone")})),M("/career-clone/".concat(e))})(t.id)}),(0,_.jsx)(w.Z,{icon:(0,_.jsx)(l.Z,{}),onClick:()=>{T([t.id]),E(!0),K(!0)}})]})}]),{setIsModalVisible:E}=(0,n.useContext)(h._),[O,T]=(0,n.useState)(null),[$,L]=(0,n.useState)(!1),[B,K]=(0,n.useState)(null),{career:P,meta:U,loading:D}=(0,Z.v9)((e=>e.career),Z.wU),F=N.data,W={search:null===F||void 0===F?void 0:F.search,pageSize:U.per_page,page:(null===F||void 0===F?void 0:F.page)||1};(0,n.useEffect)((()=>{N.refetch&&(I((0,j.a)(W)),I((0,f.A_)(N)))}),[N.refetch]),(0,b.Z)((()=>{I((0,j.a)(W))}),[N.data]);const q={selectedRowKeys:O,onChange:e=>{T(e)}};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u.Z,{className:"p-0",children:(0,_.jsxs)(i.Z,{wrap:!0,size:[14,20],children:[(0,_.jsx)(z.Z,{placeholder:H("search"),className:"w-25",handleChange:e=>{(e=>{const t=N.data;I((0,f.nc)({activeMenu:N,data:{...t,...e}}))})({search:e})},defaultValue:null===(e=N.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(t=N.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,_.jsx)(w.Z,{size:"",onClick:()=>{null===O||0===O.length?x.Am.warning(H("select.the.product")):(E(!0),K(!1))},children:H("delete.selected")}),(0,_.jsx)(d.Z,{type:"primary",icon:(0,_.jsx)(r.Z,{}),onClick:()=>{I((0,f.bL)({id:"career_add",url:"career/add",name:H("add.career")})),M("/career/add")},children:H("add.career")}),(0,_.jsx)(C.Z,{columns:A,setColumns:R})]})}),(0,_.jsx)(u.Z,{title:H("career"),children:(0,_.jsx)(v.Z,{locale:{emptyText:(0,_.jsx)(V.Z,{})},scroll:{x:!0},rowSelection:q,columns:null===A||void 0===A?void 0:A.filter((e=>e.is_show)),dataSource:P,pagination:{pageSize:U.per_page,page:(null===F||void 0===F?void 0:F.page)||1,total:U.total,defaultCurrent:null===F||void 0===F?void 0:F.page,current:null===(a=N.data)||void 0===a?void 0:a.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:n,current:c}=e,{field:s,order:l}=a,r=(0,k.Z)(l);I((0,f.nc)({activeMenu:N,data:{...N.data,perPage:n,page:c,column:s,sort:r}}))}})}),(0,_.jsx)(p.Z,{click:()=>{L(!0);const e={...Object.assign({},...O.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};g.Z.delete(e).then((()=>{I((0,j.a)(W)),x.Am.success(H("successfully.deleted"))})).finally((()=>{E(!1),L(!1),K(null),T(null)}))},text:H(B?"delete":"all.delete"),setText:T,loading:$})]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1413),c=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=a(17469),r=function(e,t){return c.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};r.displayName="PlusCircleOutlined";const i=c.forwardRef(r)},99587:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1413),c=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=a(17469),r=function(e,t){return c.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};r.displayName="TableOutlined";const i=c.forwardRef(r)}}]);
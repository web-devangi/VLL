"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7325],{55940:(e,t,l)=>{l.d(t,{Z:()=>c});l(47313);var s=l(59491),n=l(47515),i=l(23560),a=l(24511),d=l(79492),o=l(46417);function c(e){let{size:t="",onClick:l,type:c="default",...r}=e;const{t:u}=(0,a.$)(),{isDemo:h}=(0,d.Z)();return(0,o.jsx)(s.Z,{size:t,icon:(0,o.jsx)(n.Z,{}),onClick:e=>{h?i.Am.warning(u("cannot.work.demo")):l(e)},type:c,...r})}},53233:(e,t,l)=>{l.d(t,{Z:()=>m});var s=l(47313),n=l(56140),i=l(67251),a=l(45705),d=l(86345),o=l(78267),c=l(37388),r=l(59491),u=l(99587),h=l(24511),v=l(46417);const{Text:g}=n.Z,m=e=>{let{columns:t=[],setColumns:l,style:n,size:m="",iconOnly:p}=e;const{t:x}=(0,h.$)(),[Z,b]=(0,s.useState)(!1),f=(0,v.jsx)(i.Z,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(i.Z.Item,{children:(0,v.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(g,{children:e.title}),(0,v.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(o.Z,{overlay:f,trigger:["click"],onVisibleChange:e=>{b(e)},visible:Z,children:(0,v.jsx)(c.Z,{title:x("change.columns"),children:(0,v.jsx)(r.Z,{style:{...n},size:m,icon:(0,v.jsx)(u.Z,{}),children:p?null:x("Columns")})})})}},13945:(e,t,l)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}l.d(t,{Z:()=>s})},37325:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var s=l(47313),n=l(34632),i=l(12019),a=l(66407),d=l(47515),o=l(55768),c=l(26824),r=l(86345),u=l(45705),h=l(37388),v=l(59491),g=l(77181),m=l(78508),p=l(23560),x=l(69658),Z=l(74580),b=l(2717),f=l(97890),j=l(90954),w=l(94843),y=l(80314),k=l(13945),C=l(56078),z=l(24511),_=l(55940),V=l(53233),M=l(97421),H=l(70816),I=l.n(H),S=l(46417);function A(){var e,t,l,H;const{t:A}=(0,z.$)(),Y=(0,b.I0)(),D=(0,f.s0)(),[J,P]=(0,s.useState)([{title:A("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:A("title"),dataIndex:"translation",key:"translation",render:e=>null===e||void 0===e?void 0:e.title,is_show:!0},{title:A("image"),dataIndex:"img",render:(e,t)=>(0,S.jsx)(c.Z,{width:150,height:100,src:M.bV+e,placeholder:!0,className:"rounded",style:{objectFit:"contain"}}),is_show:!0},{title:A("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,t)=>(0,S.jsx)("span",{children:I()(e).format("MMM DD YYYY hh:mm A")})},{title:A("published.at"),dataIndex:"published_at",key:"published_at",is_show:!0,render:e=>(0,S.jsx)("div",{children:e?I()(e).format("MMM DD YYYY"):(0,S.jsx)("span",{children:A("unpublished")})})},{title:A("active"),dataIndex:"active",key:"active",render:(e,t)=>(0,S.jsx)(r.Z,{checked:e,onChange:()=>{E(t.uuid),R(!1),B(!1),N(!0)}}),is_show:!0},{title:A("options"),key:"options",dataIndex:"options",render:(e,t)=>(0,S.jsxs)(u.Z,{children:[(0,S.jsx)(h.Z,{title:A("publish"),children:(0,S.jsx)(v.Z,{disabled:(null===t||void 0===t?void 0:t.published_at)||!t.active,icon:(0,S.jsx)(n.Z,{}),onClick:()=>{E(t.uuid),R(!1),B(!0),N(!0)}})}),(0,S.jsx)(v.Z,{type:"primary",icon:(0,S.jsx)(i.Z,{}),onClick:()=>(e=>{Y((0,j.bL)({url:"blog/".concat(e.uuid),id:"blog_edit",name:A("edit.blog")})),D("/blog/".concat(e.uuid))})(t)}),(0,S.jsx)(v.Z,{icon:(0,S.jsx)(a.Z,{}),onClick:()=>(e=>{Y((0,j.bL)({url:"blog/clone/".concat(e.uuid),id:"blog_clone",name:A("clone.blog")})),D("/blog/clone/".concat(e.uuid))})(t)}),(0,S.jsx)(_.Z,{icon:(0,S.jsx)(d.Z,{}),onClick:()=>{E([t.id]),R(!0),B(!1),N(!0)}})]}),is_show:!0}]),{setIsModalVisible:N}=(0,s.useContext)(Z._),[O,E]=(0,s.useState)(null),[L,R]=(0,s.useState)(!1),[$,B]=(0,s.useState)(!1),[K,T]=(0,s.useState)(!1),[U,F]=(0,s.useState)("published"),{activeMenu:q}=(0,b.v9)((e=>e.menu),b.wU),G=(null===(e=q.data)||void 0===e?void 0:e.role)||U,{blogs:Q,meta:W,loading:X,params:ee}=(0,b.v9)((e=>e.blog),b.wU),te=q.data,le={sort:null===te||void 0===te?void 0:te.sort,column:null===te||void 0===te?void 0:te.column,perPage:null===te||void 0===te?void 0:te.perPage,page:null===te||void 0===te?void 0:te.page,status:G};(0,s.useEffect)((()=>{q.refetch&&(Y((0,w.J)(le)),Y((0,j.A_)(q)))}),[q.refetch]),(0,y.Z)((()=>{Y((0,w.J)(le))}),[q.data]);const se={selectedRowKeys:O,onChange:e=>{E(e)}};return(0,S.jsxs)(g.Z,{title:A("blogs"),extra:(0,S.jsxs)(u.Z,{wrap:!0,children:[(0,S.jsx)(v.Z,{type:"primary",icon:(0,S.jsx)(o.Z,{}),onClick:()=>{Y((0,j.bL)({id:"blogs",url:"blog/add",name:A("add.blog")})),D("/blog/add")},children:A("add.blog")}),(0,S.jsx)(_.Z,{size:"",onClick:()=>{null===O||0===O.length?p.Am.warning(A("select.the.product")):N(!0)},children:A("delete.selected")}),(0,S.jsx)(V.Z,{setColumns:P,columns:J})]}),children:[(0,S.jsx)(m.Z,{scroll:{x:!0},rowSelection:se,columns:J.filter((e=>e.is_show)),dataSource:Q,pagination:{pageSize:ee.perPage,page:(null===(t=q.data)||void 0===t?void 0:t.page)||1,total:W.total,defaultCurrent:null===(l=q.data)||void 0===l?void 0:l.page,current:null===(H=q.data)||void 0===H?void 0:H.page},rowKey:e=>e.id,onChange:function(e,t,l){const{pageSize:s,current:n}=e,{field:i,order:a}=l,d=(0,k.Z)(a);Y((0,j.nc)({activeMenu:q,data:{...q.data,perPage:s,page:n,column:i,sort:d}}))},loading:X}),(0,S.jsx)(x.Z,{click:$?()=>{T(!0),C.Z.publish(O).then((()=>{p.Am.success(A("successfully.updated")),Y((0,w.J)()),N(!1)})).finally((()=>T(!1)))}:L?()=>{T(!0);const e={...Object.assign({},...O.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};C.Z.delete(e).then((()=>{p.Am.success(A("successfully.deleted")),Y((0,w.J)()),N(!1)})).finally((()=>T(!1)))}:()=>{T(!0),C.Z.setActive(O).then((()=>{p.Am.success(A("successfully.updated")),Y((0,w.J)()),N(!1)})).finally((()=>T(!1)))},text:A($?"publish.blog":L?"delete.blog":"set.active.blog"),loading:K})]})}},55768:(e,t,l)=>{l.d(t,{Z:()=>o});var s=l(1413),n=l(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=l(17469),d=function(e,t){return n.createElement(a.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:i}))};d.displayName="PlusCircleOutlined";const o=n.forwardRef(d)},99587:(e,t,l)=>{l.d(t,{Z:()=>o});var s=l(1413),n=l(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=l(17469),d=function(e,t){return n.createElement(a.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:i}))};d.displayName="TableOutlined";const o=n.forwardRef(d)}}]);
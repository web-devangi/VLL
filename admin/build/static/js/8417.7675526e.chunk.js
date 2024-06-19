"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8417],{55940:(e,t,n)=>{n.d(t,{Z:()=>o});n(47313);var i=n(59491),s=n(47515),c=n(23560),l=n(24511),a=n(79492),d=n(46417);function o(e){let{size:t="",onClick:n,type:o="default",...r}=e;const{t:u}=(0,l.$)(),{isDemo:h}=(0,a.Z)();return(0,d.jsx)(i.Z,{size:t,icon:(0,d.jsx)(s.Z,{}),onClick:e=>{h?c.Am.warning(u("cannot.work.demo")):n(e)},type:o,...r})}},53233:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(47313),s=n(56140),c=n(67251),l=n(45705),a=n(86345),d=n(78267),o=n(37388),r=n(59491),u=n(99587),h=n(24511),v=n(46417);const{Text:p}=s.Z,m=e=>{let{columns:t=[],setColumns:n,style:s,size:m="",iconOnly:x}=e;const{t:Z}=(0,h.$)(),[g,f]=(0,i.useState)(!1),j=(0,v.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,v.jsx)(c.Z.Item,{children:(0,v.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(a.Z,{defaultChecked:!0,onClick:()=>function(e){const i=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(i)}(e),disabled:1===i})]})},e+i)))});return(0,v.jsx)(d.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{f(e)},visible:g,children:(0,v.jsx)(o.Z,{title:Z("change.columns"),children:(0,v.jsx)(r.Z,{style:{...s},size:m,icon:(0,v.jsx)(u.Z,{}),children:x?null:Z("Columns")})})})}},13945:(e,t,n)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>i})},84017:(e,t,n)=>{function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===n?"".concat(i," ").concat(t):"".concat(t," ").concat(i)}n.d(t,{Z:()=>i})},28417:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(47313),s=n(12019),c=n(47515),l=n(55768),a=n(45705),d=n(26824),o=n(56140),r=n(59491),u=n(77181),h=n(78508),v=n(23560),p=n(69658),m=n(74580),x=n(2717),Z=n(97890),g=n(90954),f=n(24511),j=n(55940),w=n(53233),y=n(80314),k=n(13945),z=n(84017),C=n(64441),b=n(97421),_=n(12545),V=n(46417);const H=()=>{const{t:e}=(0,f.$)(),t=(0,x.I0)(),n=(0,Z.s0)(),{setIsModalVisible:H}=(0,i.useContext)(m._),[I,S]=(0,i.useState)(null),[N,M]=(0,i.useState)(!1),[T,$]=(0,i.useState)(null),{activeMenu:A}=(0,x.v9)((e=>e.menu),x.wU),O=null===A||void 0===A?void 0:A.data,{defaultCurrency:P}=(0,x.v9)((e=>e.currency),x.wU),E={sort:null===O||void 0===O?void 0:O.sort,column:null===O||void 0===O?void 0:O.column,search:null!==O&&void 0!==O&&O.search?O.search:void 0,perPage:null===O||void 0===O?void 0:O.perPage,page:null===O||void 0===O?void 0:O.page},{recepts:L,meta:R,loading:U}=(0,x.v9)((e=>e.reciept),x.wU),[B,F]=(0,i.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:e("title"),dataIndex:"title",key:"title",render:(e,t)=>{var n;return null===(n=t.translation)||void 0===n?void 0:n.title},is_show:!0},{title:e("shop/restaurant"),dataIndex:"shop",key:"shop",is_show:!0,render:(i,s)=>{var c,l;return(0,V.jsxs)(a.Z,{children:[(0,V.jsx)(d.Z,{width:100,src:b.bV+s.bg_img,alt:null===i||void 0===i||null===(c=i.translation)||void 0===c?void 0:c.title,preview:!0,placeholder:!0,className:"rounded"}),(0,V.jsx)(o.Z.Text,{className:"text-hover",onClick:()=>(i=>{t((0,g.bL)({id:"edit-shop",url:"shop/".concat(i.uuid),name:e("edit.shop")})),n("/shop/".concat(i.uuid))})(i),children:null===i||void 0===i||null===(l=i.translation)||void 0===l?void 0:l.title})]})}},{title:e("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,V.jsx)(d.Z,{width:100,src:b.bV+e,preview:!0,placeholder:!0,className:"rounded"})},{title:e("recipe.category"),dataIndex:"category",key:"category",is_show:!0,render:e=>{var t;return null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title}},{title:e("discount"),dataIndex:"discount",key:"discount",is_show:!0,render:(e,t)=>"fix"===t.discount_type?(0,z.Z)(t.discount_price,P.symbol):"".concat(t.discount_price," %")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(i,l)=>(0,V.jsxs)(a.Z,{children:[(0,V.jsx)(r.Z,{type:"primary",icon:(0,V.jsx)(s.Z,{}),onClick:()=>(i=>{t((0,g.bL)({url:"recept/edit/".concat(i.id),id:"recepe_edit",name:e("edit.recepe")})),n("/recept/edit/".concat(i.id),{state:"edit"})})(l)}),(0,V.jsx)(j.Z,{icon:(0,V.jsx)(c.Z,{}),onClick:()=>{S([l.id]),H(!0),$(!0)}})]})}]);(0,y.Z)((()=>{t((0,C.Tc)(E))}),[A.data]),(0,i.useEffect)((()=>{A.refetch&&(t((0,C.Tc)(E)),t((0,g.A_)(A)))}),[A.refetch]);const K={selectedRowKeys:I,onChange:e=>{S(e)}};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(u.Z,{className:"p-0",children:(0,V.jsxs)(a.Z,{wrap:!0,className:"justify-content-end w-100",children:[(0,V.jsx)(j.Z,{size:"",onClick:()=>{null===I||0===I.length?v.Am.warning(e("select.the.product")):(H(!0),$(!1))},children:e("delete.selected")}),(0,V.jsx)(r.Z,{type:"primary",icon:(0,V.jsx)(l.Z,{}),onClick:()=>{t((0,g.bL)({id:"recepe_add",url:"recept/add",name:e("add.recepe")})),n("/recept/add")},children:e("add.recepe")}),(0,V.jsx)(w.Z,{columns:B,setColumns:F})]})}),(0,V.jsx)(u.Z,{title:e("recepes"),children:(0,V.jsx)(h.Z,{scroll:{x:!0},rowSelection:K,columns:null===B||void 0===B?void 0:B.filter((e=>e.is_show)),dataSource:L,pagination:{pageSize:R.per_page,page:R.current_page,total:R.total},rowKey:e=>e.id,onChange:function(e,n,i){const{pageSize:s,current:c}=e,{field:l,order:a}=i,d=(0,k.Z)(a);t((0,g.nc)({activeMenu:A,data:{...O,perPage:s,page:c,column:l,sort:d}}))},loading:U})}),(0,V.jsx)(p.Z,{click:()=>{M(!0);const n={...Object.assign({},...I.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};_.Z.delete(n).then((()=>{v.Am.success(e("successfully.deleted")),t((0,C.Tc)(E)),H(!1),$(null)})).finally((()=>{S(null),M(!1)}))},text:e(T?"delete":"all.delete"),setText:S,loading:N})]})}},55768:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(1413),s=n(47313);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=n(17469),a=function(e,t){return s.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:c}))};a.displayName="PlusCircleOutlined";const d=s.forwardRef(a)},99587:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(1413),s=n(47313);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=n(17469),a=function(e,t){return s.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:c}))};a.displayName="TableOutlined";const d=s.forwardRef(a)}}]);
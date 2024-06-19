"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7355],{55940:(e,a,t)=>{t.d(a,{Z:()=>d});t(47313);var s=t(59491),n=t(47515),l=t(23560),c=t(24511),i=t(79492),r=t(46417);function d(e){let{size:a="",onClick:t,type:d="default",...o}=e;const{t:u}=(0,c.$)(),{isDemo:h}=(0,i.Z)();return(0,r.jsx)(s.Z,{size:a,icon:(0,r.jsx)(n.Z,{}),onClick:e=>{h?l.Am.warning(u("cannot.work.demo")):t(e)},type:d,...o})}},53233:(e,a,t)=>{t.d(a,{Z:()=>g});var s=t(47313),n=t(56140),l=t(67251),c=t(45705),i=t(86345),r=t(78267),d=t(37388),o=t(59491),u=t(99587),h=t(24511),v=t(46417);const{Text:m}=n.Z,g=e=>{let{columns:a=[],setColumns:t,style:n,size:g="",iconOnly:x}=e;const{t:p}=(0,h.$)(),[Z,j]=(0,s.useState)(!1),f=(0,v.jsx)(l.Z,{children:null===a||void 0===a?void 0:a.map(((e,s)=>(0,v.jsx)(l.Z.Item,{children:(0,v.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const s=null===a||void 0===a?void 0:a.map((a=>(a.dataIndex===e.dataIndex&&(a.is_show=!(null!==a&&void 0!==a&&a.is_show)),a)));t(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(r.Z,{overlay:f,trigger:["click"],onVisibleChange:e=>{j(e)},visible:Z,children:(0,v.jsx)(d.Z,{title:p("change.columns"),children:(0,v.jsx)(o.Z,{style:{...n},size:g,icon:(0,v.jsx)(u.Z,{}),children:x?null:p("Columns")})})})}},41481:(e,a,t)=>{t.d(a,{Z:()=>r});var s=t(47313),n=t(66672),l=t(16031),c=t(40765),i=t(46417);function r(e){let{handleChange:a,defaultValue:t,resetSearch:r,...d}=e;const[o,u]=(0,s.useState)(t),h=(0,s.useMemo)((()=>(0,l.debounce)((e=>{a(e)}),800)),[]);return(0,s.useEffect)((()=>{u(t)}),[r]),(0,i.jsx)(n.Z,{value:o,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,i.jsx)(c.Z,{}),...d})}},13945:(e,a,t)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(a,{Z:()=>s})},7355:(e,a,t)=>{t.r(a),t.d(a,{default:()=>$});var s=t(47313),n=t(12019),l=t(66407),c=t(47515),i=t(55768),r=t(73591),d=t(45705),o=t(66204),u=t(26824),h=t(86345),v=t(59491),m=t(77181),g=t(78508),x=t(74580),p=t(97890),Z=t(23560),j=t(69658),f=t(2717),y=t(90954),C=t(30763),w=t(80349),b=t(24511),k=t(55940),z=t(53233),S=t(41481),V=t(80314),_=t(13945),I=t(10976),H=t(9274),M=t(68197),N=t(59624),A=t(74294),D=t(46417);const O=["published","pending","unpublished"];function X(e){let{categoryDetails:a,handleCancel:t,paramsData:n}=e;const{activeMenu:l}=(0,f.v9)((e=>e.menu),f.wU),[c]=I.Z.useForm(),i=(0,f.I0)(),{t:r}=(0,b.$)(),[d,o]=(0,s.useState)(!1);return(0,D.jsx)(H.Z,{visible:!!a,title:a.title,onCancel:t,footer:[(0,D.jsx)(v.Z,{type:"primary",onClick:()=>c.submit(),loading:d,children:r("save")}),(0,D.jsx)(v.Z,{type:"default",onClick:t,children:r("cancel")})],children:(0,D.jsx)(I.Z,{form:c,layout:"vertical",onFinish:e=>{o(!0);const s={...e};C.Z.statusUpdate(a.uuid,s).then((()=>{t(),i((0,w.X)(n)),i((0,y.A_)(l))})).finally((()=>o(!1)))},initialValues:{status:a.status},children:(0,D.jsx)(M.Z,{gutter:12,children:(0,D.jsx)(N.Z,{span:24,children:(0,D.jsx)(I.Z.Item,{label:r("status"),name:"status",rules:[{required:!0,message:r("required")}],children:(0,D.jsx)(A.Z,{children:O.map(((e,a)=>(0,D.jsx)(A.Z.Option,{value:e,children:r(e)},e+a)))})})})})})})}const E=["blue","red","gold","volcano","cyan","lime"],{TabPane:T}=r.Z,U=["all","pending","published","unpublished"],$=()=>{var e,a,t,I;const{t:H}=(0,b.$)(),M=(0,f.I0)(),N=(0,p.s0)(),{activeMenu:A}=(0,f.v9)((e=>e.menu),f.wU),[O,$]=(0,s.useState)("all"),[F,K]=(0,s.useState)(null),[L,P]=(0,s.useState)(null),R=(null===(e=A.data)||void 0===e?void 0:e.role)||O;const[q,B]=(0,s.useState)([{title:H("id"),dataIndex:"id",key:"id",is_show:!0},{title:H("name"),dataIndex:"name",key:"name",is_show:!0,render:(e,a)=>{var t;return null===(t=a.translation)||void 0===t?void 0:t.title}},{title:H("translations"),dataIndex:"locales",is_show:!0,render:(e,a)=>{var t;return(0,D.jsx)(d.Z,{children:null===(t=a.locales)||void 0===t?void 0:t.map(((e,a)=>(0,D.jsx)(o.Z,{className:"text-uppercase",color:[E[a]],children:e})))})}},{title:H("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,a)=>(0,D.jsx)(u.Z,{src:e||"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+a.id)},{title:H("active"),dataIndex:"active",is_show:!0,render:(e,a)=>(0,D.jsx)(h.Z,{onChange:()=>{W(!0),J(a.uuid),K(!0)},checked:e})},{title:H("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,a)=>(0,D.jsxs)("div",{children:["pending"===e?(0,D.jsx)(o.Z,{color:"blue",children:H(e)}):"unpublished"===e?(0,D.jsx)(o.Z,{color:"error",children:H(e)}):(0,D.jsx)(o.Z,{color:"cyan",children:H(e)}),(0,D.jsx)(n.Z,{onClick:()=>P(a)})]})},{title:H("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,a)=>(0,D.jsxs)(d.Z,{children:[(0,D.jsx)(v.Z,{type:"primary",icon:(0,D.jsx)(n.Z,{}),onClick:()=>{return e=a.uuid,M((0,y.bL)({url:"career-categories/".concat(e),id:"career-categories-edit",name:H("edit.career.categories")})),void N("/career-categories/".concat(e));var e}}),(0,D.jsx)(v.Z,{icon:(0,D.jsx)(l.Z,{}),onClick:()=>{return e=a.uuid,M((0,y.bL)({id:"career-categories-clone",url:"career-categories-clone/".concat(e),name:H("career.categories.clone")})),void N("/career-categories-clone/".concat(e));var e}}),(0,D.jsx)(k.Z,{icon:(0,D.jsx)(c.Z,{}),onClick:()=>{J([a.id]),W(!0),ae(!0)}})]})}]),{setIsModalVisible:W}=(0,s.useContext)(x._),[G,J]=(0,s.useState)(null),[Q,Y]=(0,s.useState)(!1),[ee,ae]=(0,s.useState)(null),{careerCategory:te,meta:se,loading:ne}=(0,f.v9)((e=>e.careerCategory),f.wU),le=A.data,ce={search:null===le||void 0===le?void 0:le.search,pageSize:se.per_page,page:(null===le||void 0===le?void 0:le.page)||1,status:"all"===R?void 0:R};(0,s.useEffect)((()=>{A.refetch&&(M((0,w.X)(ce)),M((0,y.A_)(A)))}),[A.refetch]),(0,V.Z)((()=>{M((0,w.X)(ce))}),[A.data]);const ie={selectedRowKeys:G,onChange:e=>{J(e)}},re=e=>{const a=A.data;M((0,y.nc)({activeMenu:A,data:{...a,...e}}))};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m.Z,{className:"p-0",children:(0,D.jsxs)(d.Z,{wrap:!0,size:[14,20],children:[(0,D.jsx)(S.Z,{placeholder:H("search"),className:"w-25",handleChange:e=>{re({search:e})},defaultValue:null===(a=A.data)||void 0===a?void 0:a.search,resetSearch:!(null!==(t=A.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,D.jsx)(k.Z,{size:"",onClick:()=>{null===G||0===G.length?Z.Am.warning(H("select.the.product")):(W(!0),ae(!1))},children:H("delete.selected")}),(0,D.jsx)(v.Z,{type:"primary",icon:(0,D.jsx)(i.Z,{}),onClick:()=>{M((0,y.bL)({id:"career-categories-add",url:"career-categories/add",name:H("add.career.categories")})),N("/career-categories/add")},children:H("add.career.category")}),(0,D.jsx)(z.Z,{columns:q,setColumns:B})]})}),(0,D.jsxs)(m.Z,{title:H("career.categories"),children:[(0,D.jsx)(r.Z,{className:"mt-3",activeKey:R,onChange:e=>{re({role:e,page:1}),$(e)},type:"card",children:U.map((e=>(0,D.jsx)(T,{tab:H(e)},e)))}),(0,D.jsx)(g.Z,{scroll:{x:!0},rowSelection:ie,columns:null===q||void 0===q?void 0:q.filter((e=>e.is_show)),dataSource:te,pagination:{pageSize:se.per_page,page:(null===le||void 0===le?void 0:le.page)||1,total:se.total,defaultCurrent:null===le||void 0===le?void 0:le.page,current:null===(I=A.data)||void 0===I?void 0:I.page},rowKey:e=>e.id,onChange:function(e,a,t){const{pageSize:s,current:n}=e,{field:l,order:c}=t,i=(0,_.Z)(c);M((0,y.nc)({activeMenu:A,data:{...A.data,perPage:s,page:n,column:l,sort:i}}))},loading:ne})]}),(0,D.jsx)(j.Z,{click:F?()=>{Y(!0),C.Z.setActive(G).then((()=>{W(!1),M((0,w.X)(ce)),Z.Am.success(H("successfully.updated")),K(!1)})).finally((()=>Y(!1)))}:()=>{Y(!0);const e={...Object.assign({},...G.map(((e,a)=>({["ids[".concat(a,"]")]:e}))))};C.Z.delete(e).then((()=>{M((0,w.X)(ce)),Z.Am.success(H("successfully.deleted"))})).finally((()=>{W(!1),Y(!1),ae(null),J(null)}))},text:H(F?"set.active.category":ee?"delete":"all.delete"),setText:J,loading:Q}),L&&(0,D.jsx)(X,{categoryDetails:L,handleCancel:()=>P(null),paramsData:ce})]})}},55768:(e,a,t)=>{t.d(a,{Z:()=>r});var s=t(1413),n=t(47313);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var c=t(17469),i=function(e,a){return n.createElement(c.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:a,icon:l}))};i.displayName="PlusCircleOutlined";const r=n.forwardRef(i)},99587:(e,a,t)=>{t.d(a,{Z:()=>r});var s=t(1413),n=t(47313);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var c=t(17469),i=function(e,a){return n.createElement(c.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:a,icon:l}))};i.displayName="TableOutlined";const r=n.forwardRef(i)}}]);
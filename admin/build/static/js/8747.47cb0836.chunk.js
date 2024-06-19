"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8747],{55940:(e,t,l)=>{l.d(t,{Z:()=>r});l(47313);var a=l(59491),n=l(47515),s=l(23560),i=l(24511),o=l(79492),c=l(46417);function r(e){let{size:t="",onClick:l,type:r="default",...d}=e;const{t:u}=(0,i.$)(),{isDemo:v}=(0,o.Z)();return(0,c.jsx)(a.Z,{size:t,icon:(0,c.jsx)(n.Z,{}),onClick:e=>{v?s.Am.warning(u("cannot.work.demo")):l(e)},type:r,...d})}},53233:(e,t,l)=>{l.d(t,{Z:()=>p});var a=l(47313),n=l(56140),s=l(67251),i=l(45705),o=l(86345),c=l(78267),r=l(37388),d=l(59491),u=l(99587),v=l(24511),h=l(46417);const{Text:x}=n.Z,p=e=>{let{columns:t=[],setColumns:l,style:n,size:p="",iconOnly:m}=e;const{t:g}=(0,v.$)(),[Z,f]=(0,a.useState)(!1),j=(0,h.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(s.Z.Item,{children:(0,h.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(x,{children:e.title}),(0,h.jsx)(o.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(c.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{f(e)},visible:Z,children:(0,h.jsx)(r.Z,{title:g("change.columns"),children:(0,h.jsx)(d.Z,{style:{...n},size:p,icon:(0,h.jsx)(u.Z,{}),children:m?null:g("Columns")})})})}},73431:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(47313),n=l(39180),s=l(2717),i=l(28830),o=l(60535),c=l(46417);const r=()=>{const e=(0,s.I0)(),{languages:t,defaultLang:l}=(0,s.v9)((e=>e.formLang),s.wU);(0,a.useEffect)((()=>{o.Z.getAllActive().then((t=>{let{data:l}=t;e((0,i.dc)(l)),e((0,i.mh)(l.find((e=>1===e.default)).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.ZP.Group,{value:l,onChange:t=>{let{target:{value:l}}=t;e((0,i.mh)(l))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(n.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},41481:(e,t,l)=>{l.d(t,{Z:()=>c});var a=l(47313),n=l(66672),s=l(16031),i=l(40765),o=l(46417);function c(e){let{handleChange:t,defaultValue:l,resetSearch:c,...r}=e;const[d,u]=(0,a.useState)(l),v=(0,a.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(l)}),[c]),(0,o.jsx)(n.Z,{value:d,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,o.jsx)(i.Z,{}),...r})}},75336:(e,t,l)=>{function a(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(l,"[").concat(e.locale,"]")]?void 0:t["".concat(l,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}l.d(t,{Z:()=>a})},16190:(e,t,l)=>{l.d(t,{Z:()=>Z});var a=l(47313),n=l(10976),s=l(9274),i=l(59491),o=l(66672),c=l(74294),r=l(24511),d=l(73431),u=l(2717),v=l(5170),h=l(23560),x=l(97340),p=l(75336),m=l(51282),g=l(46417);function Z(e){let{modal:t,handleCancel:l,onSuccess:Z}=e;const[f]=n.Z.useForm(),{t:j}=(0,r.$)(),y=(0,u.I0)(),[w,C]=(0,a.useState)(!1),[b,k]=(0,a.useState)(!1),{languages:z,defaultLang:S}=(0,u.v9)((e=>e.formLang),u.wU);(0,a.useEffect)((()=>{var e;null!==t&&void 0!==t&&t.id&&(e=t.id,k(!0),v.Z.getGroupById(e).then((e=>{const t=e.data;f.setFieldsValue({...t,...V(t)})})).finally((()=>k(!1))))}),[t]);function V(e){if(!e)return{};const{translations:t}=e,l=z.map((e=>{var l;return{["title[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title}}));return Object.assign({},...l)}return(0,g.jsx)(s.Z,{title:null!==t&&void 0!==t&&t.id?j("edit.extra.group"):j("add.extra.group"),visible:!!t,onCancel:l,footer:[(0,g.jsx)(i.Z,{type:"primary",onClick:()=>f.submit(),loading:w,children:j("save")},"save-button-group"),(0,g.jsx)(i.Z,{type:"default",onClick:l,children:j("cancel")},"cancel-button-group")],children:b?(0,g.jsx)(m.Z,{}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"d-flex justify-content-end",children:(0,g.jsx)(d.Z,{})}),(0,g.jsxs)(n.Z,{layout:"vertical",name:"extra-group",form:f,onFinish:e=>{const a={title:(0,p.Z)(z,e),type:null===e||void 0===e?void 0:e.type};null!==t&&void 0!==t&&t.id?function(e,t){C(!0),v.Z.updateGroup(e,t).then((()=>{h.Am.success(j("successfully.updated")),y((0,x.gw)()),l()})).finally((()=>C(!1)))}(null===t||void 0===t?void 0:t.id,a):function(e){C(!0),v.Z.createGroup(e).then((()=>{h.Am.success(j("successfully.created")),l(),y((0,x.gw)()),Z&&Z()})).finally((()=>C(!1)))}(a)},children:[z.map((e=>(0,g.jsx)(n.Z.Item,{rules:[{required:e.locale===S,message:j("required")}],name:"title[".concat(e.locale,"]"),label:j("title"),hidden:e.locale!==S,children:(0,g.jsx)(o.Z,{placeholder:j("title")})},"title"+e.locale))),(0,g.jsx)(n.Z.Item,{name:"type",label:j("type"),rules:[{required:!0,message:j("required")}],children:(0,g.jsxs)(c.Z,{style:{width:"100%"},placeholder:j("select.extra.type"),children:[(0,g.jsx)(c.Z.Option,{value:"color",children:j("color")}),(0,g.jsx)(c.Z.Option,{value:"text",children:j("text")})]})})]})]})})}},38747:(e,t,l)=>{l.r(t),l.d(t,{default:()=>M});var a=l(47313),n=l(45705),s=l(59491),i=l(77181),o=l(78508),c=l(31741),r=l(12019),d=l(47515),u=l(55768),v=l(23560),h=l(24511),x=l(5170),p=l(2717),m=l(97340),g=l(90954),Z=l(16190),f=l(55940),j=l(9274),y=l(83371),w=l(26824),C=l(51282),b=l(97421),k=l(46417);function z(e){var t;let{open:l,handleClose:s}=e;const{t:i}=(0,h.$)(),[o,c]=(0,a.useState)([]),[r,d]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{d(!0),x.Z.getGroupById(l).then((e=>{c(e.data)})).finally((()=>d(!1)))}),[]),(0,k.jsx)(j.Z,{closable:!1,visible:l,footer:null,centered:!0,onCancel:s,children:r?(0,k.jsx)(C.Z,{}):(0,k.jsx)(y.Z,{title:"".concat(i("extra.group.value")),bordered:!0,children:null===(t=o.extra_values)||void 0===t?void 0:t.map(((e,t)=>(0,k.jsx)(y.Z.Item,{label:o.translation.title,span:3,children:"text"===o.type?e.value:"image"===o.type?(0,k.jsx)(w.Z,{src:b.bV+e.value,alt:"images",width:100,height:80}):(0,k.jsxs)(n.Z,{children:[(0,k.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:e.value}}),e.value]})},t)))})})}var S=l(53233),V=l(69658),I=l(74580),H=l(41481),_=l(80314);function M(){var e,t,l,j,y;const{t:w}=(0,h.$)(),C=(0,p.I0)(),{setIsModalVisible:b}=(0,a.useContext)(I._),{activeMenu:M}=(0,p.v9)((e=>e.menu),p.wU),{extraGroups:A,meta:G,loading:N}=(0,p.v9)((e=>e.extraGroup),p.wU),[O,E]=(0,a.useState)(null),[P,B]=(0,a.useState)(null),[F,$]=(0,a.useState)(null),[q,L]=(0,a.useState)(!1),[U,R]=(0,a.useState)(null),T=M.data,K={search:null===T||void 0===T?void 0:T.search,column:null===T||void 0===T?void 0:T.column,perPage:null===T||void 0===T?void 0:T.perPage,sort:null===T||void 0===T?void 0:T.sort,page:null===T||void 0===T?void 0:T.page},[D,J]=(0,a.useState)([{title:w("id"),dataIndex:"id",key:"id",is_show:!0},{title:w("title"),dataIndex:"translation",key:"translation",is_show:!0,render:e=>null===e||void 0===e?void 0:e.title},{title:w("type"),dataIndex:"type",key:"type",is_show:!0},{title:w("options"),is_show:!0,render:e=>(0,k.jsxs)(n.Z,{children:[(0,k.jsx)(s.Z,{type:"primary",icon:(0,k.jsx)(c.Z,{}),onClick:()=>B(e.id)}),(0,k.jsx)(s.Z,{type:"primary",icon:(0,k.jsx)(r.Z,{}),onClick:()=>$(e)}),(0,k.jsx)(f.Z,{type:"primary",danger:!0,icon:(0,k.jsx)(d.Z,{}),onClick:()=>{b(!0),E([e.id]),R(!0)}})]})}]),Q=()=>{B(null),$(null)};(0,_.Z)((()=>{C((0,m.gw)(K))}),[M.data]),(0,a.useEffect)((()=>{M.refetch&&(C((0,m.gw)(K)),C((0,g.A_)(M)))}),[M.refetch]);const W={selectedRowKeys:O,onChange:e=>{E(e)}};return(0,k.jsxs)(i.Z,{title:w("extra.group"),extra:(0,k.jsxs)(n.Z,{wrap:!0,children:[(0,k.jsx)(s.Z,{type:"primary",icon:(0,k.jsx)(u.Z,{}),onClick:()=>$({}),children:w("add.extra")}),(0,k.jsx)(f.Z,{size:"",onClick:()=>{null===O||0===O.length?v.Am.warning(w("select.the.product")):(b(!0),R(!1))},children:w("delete.selected")}),(0,k.jsx)(S.Z,{columns:D,setColumns:J})]}),children:[(0,k.jsx)("div",{className:"d-flex justify-content-between",children:(0,k.jsx)(H.Z,{placeholder:w("search"),handleChange:e=>{return t=e,l="search",void C((0,g.nc)({activeMenu:M,data:{...M.data,[l]:t}}));var t,l},defaultValue:null===(e=M.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(t=M.data)&&void 0!==t&&t.search),className:"w-25"})}),(0,k.jsx)(o.Z,{scroll:{x:!0},rowSelection:W,loading:N,columns:null===D||void 0===D?void 0:D.filter((e=>e.is_show)),dataSource:A,rowKey:e=>e.id,pagination:{pageSize:K.perPage,page:(null===(l=M.data)||void 0===l?void 0:l.page)||1,total:G.total,defaultCurrent:null===(j=M.data)||void 0===j?void 0:j.page,current:null===(y=M.data)||void 0===y?void 0:y.page},onChange:function(e,t,l){const{pageSize:a,current:n}=e,{field:s}=l;C((0,g.nc)({activeMenu:M,data:{...M.data,perPage:a,page:n,column:s}}))}}),F&&(0,k.jsx)(Z.Z,{modal:F,handleCancel:Q}),(0,k.jsx)(V.Z,{click:()=>{L(!0);const e={...Object.assign({},...O.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};x.Z.deleteGroup(e).then((()=>{b(!1),v.Am.success(w("successfully.deleted")),E(null),C((0,m.gw)())})).finally((()=>L(!1)))},text:w(U?"delete":"all.delete"),loading:q,setText:E}),P&&(0,k.jsx)(z,{open:P,handleClose:Q})]})}},55768:(e,t,l)=>{l.d(t,{Z:()=>c});var a=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=l(17469),o=function(e,t){return n.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};o.displayName="PlusCircleOutlined";const c=n.forwardRef(o)},99587:(e,t,l)=>{l.d(t,{Z:()=>c});var a=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(17469),o=function(e,t){return n.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};o.displayName="TableOutlined";const c=n.forwardRef(o)}}]);
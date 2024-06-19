"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5158],{55940:(e,l,t)=>{t.d(l,{Z:()=>u});t(47313);var n=t(59491),s=t(47515),r=t(23560),a=t(24511),i=t(79492),o=t(46417);function u(e){let{size:l="",onClick:t,type:u="default",...c}=e;const{t:d}=(0,a.$)(),{isDemo:p}=(0,i.Z)();return(0,o.jsx)(n.Z,{size:l,icon:(0,o.jsx)(s.Z,{}),onClick:e=>{p?r.Am.warning(d("cannot.work.demo")):t(e)},type:u,...c})}},53233:(e,l,t)=>{t.d(l,{Z:()=>m});var n=t(47313),s=t(56140),r=t(67251),a=t(45705),i=t(86345),o=t(78267),u=t(37388),c=t(59491),d=t(99587),p=t(24511),v=t(46417);const{Text:h}=s.Z,m=e=>{let{columns:l=[],setColumns:t,style:s,size:m="",iconOnly:x}=e;const{t:f}=(0,p.$)(),[y,g]=(0,n.useState)(!1),Z=(0,v.jsx)(r.Z,{children:null===l||void 0===l?void 0:l.map(((e,n)=>(0,v.jsx)(r.Z.Item,{children:(0,v.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(h,{children:e.title}),(0,v.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===l||void 0===l?void 0:l.map((l=>(l.dataIndex===e.dataIndex&&(l.is_show=!(null!==l&&void 0!==l&&l.is_show)),l)));t(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(o.Z,{overlay:Z,trigger:["click"],onVisibleChange:e=>{g(e)},visible:y,children:(0,v.jsx)(u.Z,{title:f("change.columns"),children:(0,v.jsx)(c.Z,{style:{...s},size:m,icon:(0,v.jsx)(d.Z,{}),children:x?null:f("Columns")})})})}},89281:(e,l,t)=>{t.d(l,{h:()=>u});var n=t(47313),s=t(12279),r=t.n(s),a=t(74294),i=t(72652),o=t(46417);const u=e=>{let{fetchOptions:l,debounceTimeout:t=400,onClear:s,refetchOptions:u=!1,...c}=e;const[d,p]=(0,n.useState)(!1),[v,h]=(0,n.useState)([]),m=(0,n.useMemo)((()=>r()((e=>{h([]),p(!0),l(e).then((e=>{h(e),p(!1)}))}),t)),[l,t]);return(0,o.jsx)(a.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),s&&s()},notFoundContent:d?(0,o.jsx)(i.Z,{size:"small"}):"no results",...c,options:v,onFocus:()=>{v.length&&!u||m("")}})}},25158:(e,l,t)=>{t.r(l),t.d(l,{default:()=>H});var n=t(47313),s=t(45705),r=t(26824),a=t(59491),i=t(77181),o=t(78508),u=t(12019),c=t(47515),d=t(55768),p=t(23560),v=t(24511),h=t(2717),m=t(94311),x=t(30215),f=t(10976),y=t(66672),g=t(9274),Z=t(8922),j=t(20503),C=t(8550),b=t(89281),w=t(46417);function k(e){let{modal:l,handleCancel:t,onSuccess:s,groupId:r}=e;const[i]=f.Z.useForm(),{t:o}=(0,v.$)(),u=(0,h.I0)(),[c,d]=(0,n.useState)(!1),[k,_]=(0,n.useState)("text"),[V,z]=(0,n.useState)(null),[S,I]=(0,n.useState)("");(0,n.useEffect)((()=>{if(null!==l&&void 0!==l&&l.id){var e,t,n;_(l.group.type);const s={...l,property_group_id:{label:null===l||void 0===l||null===(e=l.group)||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===l||void 0===l||null===(n=l.group)||void 0===n?void 0:n.id},value:l.value};switch(l.group.type){case"color":I(l.value);break;case"image":z((0,C.Z)(l.value))}i.setFieldsValue(s)}r&&i.setFieldsValue({property_group_id:{value:r}})}),[l,r]);function H(e,l){switch(e){case"color":return l.hex;case"text":return l;case"image":return l.name;default:return""}}return(0,w.jsx)(g.Z,{title:null!==l&&void 0!==l&&l.id?o("edit.property"):o("add.property"),visible:!!l,onCancel:t,footer:[(0,w.jsx)(a.Z,{type:"primary",onClick:()=>i.submit(),loading:c,children:o("save")}),(0,w.jsx)(a.Z,{type:"default",onClick:t,children:o("cancel")})],children:(0,w.jsxs)(f.Z,{name:"property-form",layout:"vertical",form:i,onFinish:e=>{var n;const r={property_group_id:null===e||void 0===e||null===(n=e.property_group_id)||void 0===n?void 0:n.value,value:H(k,e.value)};null!==l&&void 0!==l&&l.id?((e,l)=>{d(!0),x.Z.updateValue(e,l).then((()=>{p.Am.success(o("successfully.updated")),t(),u((0,m.xf)())})).finally((()=>d(!1)))})(l.id,r):(e=>{d(!0),x.Z.createValue(e).then((()=>{p.Am.success(o("successfully.created")),t(),u((0,m.xf)()),s&&s()})).finally((()=>d(!1)))})(r)},children:[(0,w.jsx)(f.Z.Item,{name:"property_group_id",label:o("property.group"),hidden:!!r,rules:[{required:!0,message:""}],children:(0,w.jsx)(b.h,{fetchOptions:async function(e){const l={perPage:10,active:1,search:e};return x.Z.getAllGroups(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,key:null===e||void 0===e?void 0:e.id}}))}))}})}),(0,w.jsx)(f.Z.Item,{name:"value",label:o("value"),rules:[{required:!0,message:""}],children:(e=>{switch(e){case"color":return(0,w.jsx)(Z.xS,{onChangeComplete:e=>I(e.hex),color:S,disableAlpha:!0});case"text":return(0,w.jsx)(y.Z,{placeholder:o("enter.property.value")});case"image":return(0,w.jsx)(j.Z,{type:"property",image:V,setImage:z,form:i,name:"value"});default:return""}})(k)})]})})}function _(e){let{id:l,loading:t,handleClose:n,text:s,click:r}=e;const{t:i}=(0,v.$)();return(0,w.jsxs)(g.Z,{closable:!1,visible:!!l,footer:null,centered:!0,children:[(0,w.jsx)("p",{children:s}),(0,w.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,w.jsx)(a.Z,{type:"primary",className:"mr-2",onClick:r,loading:t,children:i("yes")}),(0,w.jsx)(a.Z,{onClick:n,children:i("no")})]})]})}var V=t(55940),z=t(97421),S=t(90954),I=t(53233);function H(){const{t:e}=(0,v.$)(),l=(0,h.I0)(),{activeMenu:t}=(0,h.v9)((e=>e.menu),h.wU),{propertyValues:f,loading:y}=(0,h.v9)((e=>e.propertyValue),h.wU),[g,Z]=(0,n.useState)(null),[j,C]=(0,n.useState)(null),[b,H]=(0,n.useState)(!1),[N,O]=(0,n.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("title"),dataIndex:"extra_group_id",key:"extra_group_id",is_show:!0,render:(e,l)=>{var t,n;return null===(t=l.group)||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title}},{title:e("value"),dataIndex:"value",key:"value",is_show:!0,render:(e,l)=>(0,w.jsxs)(s.Z,{className:"extras",children:["color"===l.group.type?(0,w.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:l.value}}):null,"image"===l.group.type?(0,w.jsx)(r.Z,{width:100,src:z.bV+l.value,className:"borderRadius"}):null,"image"===l.group.type?null:(0,w.jsx)("span",{children:l.value})]})},{title:e("options"),is_show:!0,render:e=>{var l,t;return(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(a.Z,{type:"primary",icon:(0,w.jsx)(u.Z,{}),onClick:()=>C(e),disabled:!(null!==e&&void 0!==e&&null!==(l=e.group)&&void 0!==l&&l.shop_id)}),(0,w.jsx)(V.Z,{type:"primary",danger:!0,icon:(0,w.jsx)(c.Z,{}),onClick:()=>Z([e.id]),disabled:!(null!==e&&void 0!==e&&null!==(t=e.group)&&void 0!==t&&t.shop_id)})]})}}]);return(0,n.useEffect)((()=>{t.refetch&&(l((0,m.xf)()),l((0,S.A_)(t)))}),[t.refetch]),(0,w.jsxs)(i.Z,{title:e("property.value"),extra:(0,w.jsxs)(s.Z,{wrap:!0,children:[(0,w.jsx)(a.Z,{type:"primary",icon:(0,w.jsx)(d.Z,{}),onClick:()=>C({}),children:e("add.property")}),(0,w.jsx)(I.Z,{columns:N,setColumns:O})]}),children:[(0,w.jsx)(o.Z,{scroll:{x:!0},loading:y,columns:null===N||void 0===N?void 0:N.filter((e=>e.is_show)),dataSource:f,rowKey:e=>e.id,pagination:!1}),j&&(0,w.jsx)(k,{modal:j,handleCancel:()=>C(null)}),g&&(0,w.jsx)(_,{id:g,click:()=>{H(!0);const t={...Object.assign({},...g.map(((e,l)=>({["ids[".concat(l,"]")]:e}))))};x.Z.deleteValue(t).then((()=>{p.Am.success(e("successfully.deleted")),Z(null),l((0,m.xf)())})).finally((()=>H(!1)))},text:e("delete.property"),loading:b,handleClose:()=>Z(null)})]})}},55768:(e,l,t)=>{t.d(l,{Z:()=>o});var n=t(1413),s=t(47313);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=t(17469),i=function(e,l){return s.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:l,icon:r}))};i.displayName="PlusCircleOutlined";const o=s.forwardRef(i)},99587:(e,l,t)=>{t.d(l,{Z:()=>o});var n=t(1413),s=t(47313);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=t(17469),i=function(e,l){return s.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:l,icon:r}))};i.displayName="TableOutlined";const o=s.forwardRef(i)}}]);
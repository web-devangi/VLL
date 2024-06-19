"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5918],{89802:(e,t,s)=>{s.d(t,{q:()=>u});var a=s(47313),l=s(74294),n=s(72652),i=s(46417);const u=e=>{let{fetchOptions:t,refetch:s=!1,value:u,...d}=e;const[r,o]=(0,a.useState)(!1),[c,m]=(0,a.useState)([]);"object"===typeof(null===u||void 0===u?void 0:u.label)&&null!==(null===u||void 0===u?void 0:u.label)&&(u.label=u.label.value);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{labelInValue:!0,filterOption:!1,notFoundContent:r?(0,i.jsx)(n.Z,{size:"small"}):"no results",value:u,...d,options:r?[]:c,onFocus:()=>{c.length&&!s||(o(!0),t().then((e=>{m(e),o(!1)})))}})})}},95918:(e,t,s)=>{s.r(t),s.d(t,{default:()=>q});var a=s(47313),l=s(97890),n=s(23560),i=s(10976),u=s(77181),d=s(68197),r=s(59624),o=s(16124),c=s(99096),m=s(86345),p=s(59491),x=s(2717),v=s(90954),h=s(18333),b=s(24511),f=s(70816),j=s.n(f),Z=s(13783),_=s(73346),y=s(89802),g=s(51282),k=s(46417);const q=()=>{const{t:e}=(0,b.$)(),{activeMenu:t}=(0,x.v9)((e=>e.menu),x.wU),s=(0,x.I0)(),[f]=i.Z.useForm(),q=(0,l.s0)(),[S,N]=(0,a.useState)(!1),[w,I]=(0,a.useState)(!1),{myShop:Y}=(0,x.v9)((e=>e.myShop),x.wU),{id:F}=(0,l.UO)();(0,a.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);e.expired_at=JSON.stringify(null===e||void 0===e?void 0:e.expired_at),s((0,v.nc)({activeMenu:t,data:e}))}),[]);const M=e=>{I(!0),_.Z.getById(e).then((e=>{!function(e){var t,s,a,l,n;f.setFieldsValue({...e,expired_at:j()(e.expired_at,"YYYY-MM-DD"),bonus_stock_id:{label:(null===e||void 0===e||null===(t=e.bonusStock)||void 0===t||null===(s=t.product)||void 0===s||null===(a=s.translation)||void 0===a?void 0:a.title)+" "+(null===(l=e.bonusStock)||void 0===l?void 0:l.extras.map((e=>e.value)).join(", ")),value:null===e||void 0===e||null===(n=e.bonusStock)||void 0===n?void 0:n.id}}),I(!1)}(e.data)})).finally((()=>s((0,v.A_)(t))))};(0,a.useEffect)((()=>{t.refetch&&M(F)}),[t.refetch]);return(0,k.jsx)(u.Z,{title:e("edit.bonus"),className:"h-100",children:w?(0,k.jsx)(g.Z,{}):(0,k.jsxs)(i.Z,{name:"bonus-add",layout:"vertical",onFinish:a=>{const l={expired_at:j()(a.expired_at).format("YYYY-MM-DD"),status:a.status,type:"sum",value:a.value,bonus_stock_id:a.bonus_stock_id.value,bonus_quantity:a.bonus_quantity,bonusable_id:Y.id};N(!0);const i="seller/bonus/shop";_.Z.update(F,l).then((()=>{n.Am.success(e("successfully.created")),s((0,v.ph)({...t,nextUrl:i})),q("/".concat(i)),s((0,Z.Q)())})).finally((()=>N(!1)))},form:f,initialValues:{status:!0,...t.data,...(()=>{var e,s;if(null===(e=t.data)||void 0===e||!e.expired_at)return{};const a=JSON.parse(null===(s=t.data)||void 0===s?void 0:s.expired_at);return{expired_at:j()(a,"HH:mm:ss")}})()},className:"d-flex flex-column h-100",children:[(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(i.Z.Item,{label:e("order.amount"),name:"value",rules:[{required:!0,message:e("required")},{type:"number",min:1,message:e("min.1")}],children:(0,k.jsx)(o.Z,{className:"w-100"})})}),(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(i.Z.Item,{label:e("bonus.product.stock"),name:"bonus_stock_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(y.q,{fetchOptions:function(){return h.Z.getStock({active:1,status:"published"}).then((e=>e.data.map((e=>({label:e.product.translation.title+"".concat(e.extras.length>0?": ".concat(e.extras.map((e=>e.value)).join(", ")):""),value:e.id})))))},debounceTimeout:200})})}),(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(i.Z.Item,{label:e("bonus.product.quantity"),name:"bonus_quantity",rules:[{required:!0,message:e("required")},{type:"number",min:1,message:e("min.1")}],children:(0,k.jsx)(o.Z,{className:"w-100"})})}),(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(i.Z.Item,{name:"expired_at",label:e("expired.at"),rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.Z,{className:"w-100",placeholder:"",disabledDate:e=>j()().add(-1,"days")>=e})})}),(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(i.Z.Item,{label:e("active"),name:"status",valuePropName:"checked",children:(0,k.jsx)(m.Z,{})})})]}),(0,k.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,k.jsx)("div",{className:"pb-5",children:(0,k.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:S,children:e("submit")})})})]})})}}}]);
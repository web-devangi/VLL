"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7149],{97149:(t,e,i)=>{i.r(e),i.d(e,{default:()=>y});var a=i(47313),n=i(97890),l=i(23560),s=i(83999),c=i(10976),o=i(77181),r=i(72652),d=i(97421),u=i(2717),m=i(90954),v=i(24511),g=i(73431),p=i(65436),h=i(14241),f=i(46417);const{Step:_}=s.Z,y=()=>{var t,e,i;const{t:y}=(0,v.$)(),{activeMenu:j}=(0,u.v9)((t=>t.menu),u.wU),{id:x}=(0,n.UO)(),b=(0,u.I0)(),{defaultLang:k,languages:S}=(0,u.v9)((t=>t.formLang),u.wU),[Z,w]=(0,a.useState)((null===(t=j.data)||void 0===t?void 0:t.step)||0),[N,F]=(0,a.useState)(null!==(e=j.data)&&void 0!==e&&e.image?[null===(i=j.data)||void 0===i?void 0:i.image]:[]),O=()=>{w(Z+1)},U=()=>{w(Z-1)},[V]=c.Z.useForm(),z=(0,n.s0)(),[I,M]=(0,a.useState)(!1),[q,A]=(0,a.useState)(!1);(0,a.useEffect)((()=>()=>{const t=V.getFieldsValue(!0);b((0,m.nc)({activeMenu:j,data:t}))}),[]);return(0,a.useEffect)((()=>{j.refetch&&(t=>{M(!0),h.Z.getById(t).then((t=>{var e;let i=t.data;var a;console.log("recept",i),V.setFieldsValue({...i,active_time:Number(i.active_time),total_time:Number(i.total_time),title:{[k]:i.translation.title},description:{[k]:i.translation.description},instruction:Object.assign({},...i.instructions.map((t=>({[t.locale]:t.title})))),ingredient:Object.assign({},...i.ingredients.map((t=>({[t.locale]:t.title})))),nutrition:null===(e=i.nutritions)||void 0===e?void 0:e.map((t=>({percentage:Number(null===t||void 0===t?void 0:t.percentage),weight:Number(null===t||void 0===t?void 0:t.weight),...Object.assign({},...t.translations.flatMap((t=>({[t.locale]:t.title}))))}))),category_id:{value:i.category.id,label:i.category.translation.title},stocks:i.stocks.map((t=>({stock_id:{value:t.id,label:t.product.translation.title},...t})))}),F([(a=i.img,{name:a,url:d.bV+a})])})).finally((()=>{M(!1),b((0,m.A_)(j))}))})(x)}),[j.refetch]),(0,f.jsx)(o.Z,{title:y("edit.recepe"),extra:(0,f.jsx)(g.Z,{}),children:I?(0,f.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,f.jsx)(r.Z,{size:"large",className:"py-5"})}):(0,f.jsxs)(c.Z,{layout:"vertical",onFinish:t=>{var e;V.validateFields();const i={...t,total_time:t.total_time.toString(),active_time:t.active_time.toString(),category_id:t.category_id.value,images:null===N||void 0===N?void 0:N.map((t=>t.name)),stocks:t.stocks.map((t=>({min_quantity:t.min_quantity,stock_id:t.stock_id.value}))),nutrition:null===(e=t.nutrition)||void 0===e?void 0:e.map((t=>{var e;return{...t,percentage:null===t||void 0===t||null===(e=t.percentage)||void 0===e?void 0:e.toString(),weight:t.weight.toString()}}))};A(!0);const a="seller/recept";h.Z.update(x,i).then((()=>{l.Am.success(y("successfully.updated")),z("/".concat(a)),b((0,m.ph)({...j,nextUrl:a}))})).finally((()=>A(!1)))},form:V,initialValues:{active:!0,...j.data},children:[(0,f.jsx)(s.Z,{current:Z,children:p.S.map((t=>(0,f.jsx)(_,{title:y(t.title)},t.title)))}),p.S.map((t=>{const e=t.content;return(0,f.jsx)("div",{className:"steps-content ".concat(t.step!==Z+1&&"hidden"),children:(0,f.jsx)(e,{next:O,prev:U,loading:q,image:N,setImage:F})},t.title)}))]})})}}}]);
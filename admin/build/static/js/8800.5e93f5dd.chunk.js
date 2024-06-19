"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8800],{13622:(e,l,n)=>{n.d(l,{R:()=>s});var i=n(47313),t=n(12279),a=n.n(t),o=n(74294),d=n(72652),r=n(46417);const s=e=>{let{fetchOptions:l,debounceTimeout:n=400,refetch:t=!1,...s}=e;const[u,c]=(0,i.useState)(!1),[v,h]=(0,i.useState)([]),m=(0,i.useMemo)((()=>a()((e=>{h([]),c(!0),l(e).then((e=>{h(e),c(!1)}))}),n)),[l,n]);return(0,r.jsx)(o.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>m(""),filterOption:!1,onSearch:m,notFoundContent:u?(0,r.jsx)(d.Z,{size:"small"}):"no results",...s,options:v,onFocus:()=>{v.length&&!t||m("")}})}},58800:(e,l,n)=>{n.r(l),n.d(l,{default:()=>h});n(47313);var i=n(97890),t=n(23560),a=n(10976),o=n(2717),d=n(90954),r=n(24511),s=n(13719),u=n(94777),c=n(69766),v=n(46417);const h=()=>{const{t:e}=(0,r.$)(),{id:l}=(0,i.UO)(),{activeMenu:n}=(0,o.v9)((e=>e.menu),o.wU),{myShop:h}=(0,o.v9)((e=>e.myShop),o.wU),m=(0,o.I0)(),[p]=a.Z.useForm(),y=(0,i.s0)();return(0,v.jsx)(c.Z,{form:p,handleSubmit:i=>{const{area:a,city:r,country:c,region:v,price:p,fitting_rooms:f,active:g}=i,x={price:p,fitting_rooms:f,active:Number(g),area_id:null===a||void 0===a?void 0:a.value,city_id:null===r||void 0===r?void 0:r.value,country_id:null===c||void 0===c?void 0:c.value,region_id:null===v||void 0===v?void 0:v.value,shop_id:null===h||void 0===h?void 0:h.id},j="seller/delivery-price";return s.Z.update(l,x).then((()=>{t.Am.success(e("successfully.updated")),(0,o.dC)((()=>{m((0,d.ph)({...n,nextUrl:j})),m((0,u.rf)({}))})),y("/".concat(j))}))}})}},69766:(e,l,n)=>{n.d(l,{Z:()=>Z});var i=n(47313),t=n(2717),a=n(97890),o=n(24511),d=n(10976),r=n(68197),s=n(59624),u=n(77181),c=n(16124),v=n(59491),h=n(13622),m=n(27453),p=n(47139),y=n(79637),f=n(27443),g=n(90954),x=n(13719),j=n(51282),b=n(46417);function Z(e){let{form:l,handleSubmit:n}=e;const{t:Z}=(0,o.$)(),w=(0,t.I0)(),{id:F}=(0,a.UO)(),{activeMenu:_}=(0,t.v9)((e=>e.menu),t.wU),{languages:S,defaultLang:k}=(0,t.v9)((e=>e.formLang),t.wU),{defaultCurrency:q}=(0,t.v9)((e=>e.currency),t.wU),[C,I]=(0,i.useState)(!1),[O,R]=(0,i.useState)(!1),[U,N]=(0,i.useState)({}),{country:z,region:B,city:M}=U;function P(e){if(null===e||void 0===e||!e.translations)return{};const{translations:l}=e,n=S.map((e=>{var n,i;return{["title[".concat(e.locale,"]")]:null===(n=l.find((l=>l.locale===e.locale)))||void 0===n?void 0:n.title,["address[".concat(e.locale,"]")]:null===(i=l.find((l=>l.locale===e.locale)))||void 0===i?void 0:i.address}}));return Object.assign({},...n)}(0,i.useEffect)((()=>()=>{const e=l.getFieldsValue(!0);w((0,g.nc)({activeMenu:_,data:e}))}),[]),(0,i.useEffect)((()=>{_.refetch&&F&&V(F)}),[_.refetch]);const V=()=>{I(!0),x.Z.getById(F).then((e=>{var n,i,t,a,o,d,r,s,u;let{data:c}=e;const{city:v,country:h,region:m,area:p,...y}=c,f="address[".concat(k,"]"),g={area:{label:null===p||void 0===p||null===(n=p.translation)||void 0===n?void 0:n.title,value:null===p||void 0===p?void 0:p.id},city:{label:null===v||void 0===v||null===(i=v.translation)||void 0===i?void 0:i.title,value:null===v||void 0===v?void 0:v.id},country:{label:null===h||void 0===h||null===(t=h.translation)||void 0===t?void 0:t.title,value:null===h||void 0===h?void 0:h.id},region:{label:null===m||void 0===m||null===(a=m.translation)||void 0===a?void 0:a.title,value:null===m||void 0===m?void 0:m.id}},x={...P(c),...g,...y,[f]:null===(o=c.address)||void 0===o?void 0:o[k],shop_id:{label:null===c||void 0===c||null===(d=c.shop)||void 0===d||null===(r=d.translation)||void 0===r?void 0:r.title,value:null===c||void 0===c||null===(s=c.shop)||void 0===s?void 0:s.id,key:null===c||void 0===c||null===(u=c.shop)||void 0===u?void 0:u.id}};l.setFieldsValue(x),N(g)})).catch((e=>{console.error(e)})).finally((()=>{I(!1),w((0,g.A_)(_))}))};return C?(0,b.jsx)(j.Z,{}):(0,b.jsxs)(d.Z,{form:l,name:Z(F?"edit.delivery.price":"add.delivery.price"),layout:"vertical",initialValues:{clickable:!0,..._.data},onFinish:e=>{R(!0),n(e).finally((()=>R(!1)))},children:[(0,b.jsxs)(r.Z,{gutter:[24,24],children:[(0,b.jsx)(s.Z,{span:12,children:(0,b.jsxs)(u.Z,{title:Z("deliveryzone"),className:"h-100",children:[(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("region"),name:"region",rules:[{required:!0,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10};return m.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,onChange:e=>{N((l=>({...l,region:e}))),l.resetFields(["city","area","country"])}})})}),(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("country"),name:"country",rules:[{required:!0,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,region_id:null===B||void 0===B?void 0:B.value};return p.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,onChange:e=>{N((l=>({...l,country:e}))),l.resetFields(["city","area"])},disabled:!Boolean(null===B||void 0===B?void 0:B.value)})})}),(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("city"),name:"city",rules:[{required:!1,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,country_id:null===z||void 0===z?void 0:z.value};return y.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===z||void 0===z?void 0:z.value),onChange:e=>{N((l=>({...l,city:e}))),l.resetFields(["area"])}})})}),(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("area"),name:"area",rules:[{required:!1,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,city_id:null===M||void 0===M?void 0:M.value};return f.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===M||void 0===M?void 0:M.value)})})})]})}),(0,b.jsx)(s.Z,{span:12,children:(0,b.jsx)(u.Z,{title:Z("pricing"),className:"h-100",children:(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:"".concat(Z("price")," (").concat(null===q||void 0===q?void 0:q.symbol,")"),name:"price",rules:[{required:!0,message:Z("required")}],children:(0,b.jsx)(c.Z,{className:"w-100"})})})})})]}),(0,b.jsx)("br",{}),(0,b.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end",children:(0,b.jsx)("div",{className:"pb-5",children:(0,b.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:O,children:Z("submit")})})})]})}}}]);
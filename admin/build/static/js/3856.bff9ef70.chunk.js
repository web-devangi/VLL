(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3856],{33834:(e,t,a)=>{"use strict";a.d(t,{K:()=>o});var i=a(97890),l=a(74776),n=a.n(l);const o=()=>{const e=(0,i.s0)(),t=(0,i.TH)(),a=n().parse(t.search,{ignoreQueryPrefix:!0});return{values:a,set:(t,i)=>e({search:n().stringify({...a,[t]:i})}),reset:t=>{const i={...a};i[t]&&delete i[t],e({search:n().stringify({...i})})},clear:()=>e({search:n().stringify({})}),merge:t=>e({search:n().stringify({...a,...t})})}}},52509:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var i=a(47313),l=a(96077),n=a(83999),o=a(77181),r=a(72652),d=a(35321),s=a(78873),u=a(8597),v=a(47668),c=a(97307),p=a(73431),x=a(97890),g=a(17101),m=a(2717),f=a(90954),h=a(24511),y=a(33834),_=a(34144),j=a(87882),k=a(56326),Z=a(46417);const{Step:w}=n.Z,b=()=>{var e,t,a,b,S;const{t:q}=(0,h.$)(),{uuid:F}=(0,x.UO)(),M=(0,y.K)(),{activeMenu:E}=(0,m.v9)((e=>e.menu),m.wU),{languages:N}=(0,m.v9)((e=>e.formLang),m.wU),O=(0,m.I0)(),z=Number((null===(e=M.values)||void 0===e?void 0:e.step)||0),[C,U]=(0,i.useState)(E.refetch),[A,B]=(0,i.useState)(l.S),{extras:G}=(null===E||void 0===E?void 0:E.data)||{},I=null===E||void 0===E||null===(t=E.data)||void 0===t?void 0:t.digital,K=null===G||void 0===G?void 0:G.some((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)})),P=(0,i.useMemo)((()=>null===G||void 0===G?void 0:G.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[G]);Array.from(new Set(null===P||void 0===P||null===(a=P.values)||void 0===a?void 0:a.map((e=>e.value)))).map((e=>{var t;return null===P||void 0===P||null===(t=P.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type));(0,i.useEffect)((()=>{I?B(l.S.filter((e=>"product.extras"!==e.title))):!1===I&&B(l.S.filter((e=>"product.digital"!==e.title))),B(K?e=>e:e=>e.filter((e=>"Gallery"!==e.title)))}),[K,I]);const T=()=>{const e=z+1;M.set("step",e)},V=()=>{const e=z-1;M.set("step",e)},D=e=>{const t={images:[],previews:[]},a=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.preview,url:e.preview}))),i=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:!0})));return t.previews=a,t.images=i,t},H=e=>e?{label:null!==e&&void 0!==e&&e.translation?e.translation.title:e.title,value:e.id,key:e.id}:null;function L(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=N.map((e=>{var a,i;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(i=t.find((t=>t.locale===e.locale)))||void 0===i?void 0:i.description}}));return Object.assign({},...a)}(0,i.useEffect)((()=>{E.refetch&&function(e){U(!0),g.Z.getById(e).then((e=>{var t,a,i,l,n,o;const r={};e.data.stocks.forEach((e=>{e.extras.forEach((t=>{var a,i,l,n,o;t.extra_group_id in r?null!==(a=r[t.extra_group_id].values)&&void 0!==a&&a.some((e=>{var a;return e.value===(null===(a=t.value)||void 0===a?void 0:a.id)}))||null===(i=r[t.extra_group_id].values)||void 0===i||i.push({value:t.value.id,label:null===(l=t.value)||void 0===l?void 0:l.value,stock_id:e.id}):r[t.extra_group_id]={group:t.group,label:null===(n=t.group.translation)||void 0===n?void 0:n.title,value:t.extra_group_id,id:t.extra_group_id,stock_id:e.id,values:[{value:t.value.id,label:null===(o=t.value)||void 0===o?void 0:o.value,stock_id:e.id}]}}))}));const d={...e.data,...L(e.data),shop:H(e.data.shop),category:H(e.data.category),brand:H(e.data.brand),unit:H(e.data.unit),images:(s=e.data.galleries,s.map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:Boolean(e.preview)})))),initialMediaFile:D(e.data.galleries),extras:Object.values(r),stocks:e.data.stocks.map((e=>({...e,...Object.assign({},...e.extras.map(((e,t)=>({["extras[".concat(t,"]")]:e.id})))),quantity:e.quantity||0,price:e.price||0,extras:void 0}))),stocksData:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.stocks,properties:e.data.properties.map(((e,t)=>({id:t,["key[".concat(e.locale,"]")]:e.key,["value[".concat(e.locale,"]")]:e.value}))),translation:void 0,translations:void 0,min_qty:null===(a=e.data)||void 0===a?void 0:a.min_qty,max_qty:null===(i=e.data)||void 0===i?void 0:i.max_qty,tax:null===(l=e.data)||void 0===l?void 0:l.tax,interval:null===(n=e.data)||void 0===n?void 0:n.interval,age_limit:null===(o=e.data)||void 0===o?void 0:o.age_limit};var s;O((0,f.nc)({activeMenu:E,data:d}))})).finally((()=>{U(!1),O((0,f.A_)(E))}))}(F)}),[E.refetch]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(o.Z,{title:q("edit.product"),extra:(0,Z.jsx)(p.Z,{}),children:(0,Z.jsx)(n.Z,{current:z,onChange:e=>{O((0,f.nc)({activeMenu:E,data:{...E.data,step:e}})),M.set("step",e)},children:A.map((e=>(0,Z.jsx)(w,{title:q(e.title)},e.title)))})}),C?(0,Z.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,Z.jsx)(r.Z,{size:"large",className:"py-5"})}):(0,Z.jsxs)("div",{className:"",children:["First-content"===A[z].content&&(0,Z.jsx)(c.Z,{next:T,action_type:"edit"}),(null===(b=E.data)||void 0===b?void 0:b.digital)&&"Product-digital"===A[z].content&&(0,Z.jsx)(j.Z,{next:T,prev:V}),!(null!==(S=E.data)&&void 0!==S&&S.digital)&&"Second-content"===A[z].content&&(0,Z.jsx)(v.Z,{next:T,prev:V}),"Third-content"===A[z].content&&(0,Z.jsx)(u.Z,{next:T,prev:V}),"wholesale-content"===A[z].content&&(0,Z.jsx)(k.Z,{next:T,prev:V}),K>0&&"Gallery-content"===A[z].content&&(0,Z.jsx)(_.Z,{next:T,prev:V}),"Fourth-content"===A[z].content&&(0,Z.jsx)(d.Z,{next:T,prev:V}),"Finish-content"===A[z].content&&(0,Z.jsx)(s.Z,{prev:V})]})]})}},24654:()=>{}}]);
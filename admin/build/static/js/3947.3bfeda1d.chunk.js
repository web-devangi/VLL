(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3947],{33834:(t,e,a)=>{"use strict";a.d(e,{K:()=>r});var n=a(97890),s=a(74776),i=a.n(s);const r=()=>{const t=(0,n.s0)(),e=(0,n.TH)(),a=i().parse(e.search,{ignoreQueryPrefix:!0});return{values:a,set:(e,n)=>t({search:i().stringify({...a,[e]:n})}),reset:e=>{const n={...a};n[e]&&delete n[e],t({search:i().stringify({...n})})},clear:()=>t({search:i().stringify({})}),merge:e=>t({search:i().stringify({...a,...e})})}}},89355:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>j});var n=a(47313),s=a(82494),i=a(83999),r=a(77181),c=a(72652),l=a(32723),o=a(1939),d=a(33072),u=a(73431),v=a(97890),p=a(18333),f=a(2717),h=a(90954),x=a(24511),g=a(33834),m=a(46417);const{Step:y}=i.Z,j=()=>{var t;const{t:e}=(0,x.$)(),{uuid:a}=(0,v.UO)(),j=(0,g.K)(),{activeMenu:k}=(0,f.v9)((t=>t.menu),f.wU),{languages:Z}=(0,f.v9)((t=>t.formLang),f.wU),b=(0,f.I0)(),S=Number((null===(t=j.values)||void 0===t?void 0:t.step)||0),[w,N]=(0,n.useState)(k.refetch),_=()=>{const t=S+1;j.set("step",t)},z=()=>{const t=S-1;j.set("step",t)},C=t=>t?{label:t.translation?t.translation.title:t.title,value:t.id}:null;function M(t){if(null===t||void 0===t||!t.translations)return{};const{translations:e}=t,a=Z.map((t=>{var a,n;return{["title[".concat(t.locale,"]")]:null===(a=e.find((e=>e.locale===t.locale)))||void 0===a?void 0:a.title,["description[".concat(t.locale,"]")]:null===(n=e.find((e=>e.locale===t.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}(0,n.useEffect)((()=>{k.refetch&&function(t){N(!0),p.Z.getById(t).then((t=>{var e;const a={...t.data,...M(t.data),shop:C(t.data.shop),unit:C(t.data.unit),extras:null===(e=t.data.stocks[0])||void 0===e?void 0:e.extras.map((t=>t.extra_group_id)),stocks:t.data.stocks.map((t=>({...t,...Object.assign({},...t.extras.map(((t,e)=>({["extras[".concat(e,"]")]:t.id})))),quantity:t.quantity||0,extras:void 0}))),properties:t.data.properties.map(((t,e)=>({id:e,["key[".concat(t.locale,"]")]:t.key,["value[".concat(t.locale,"]")]:t.value}))),translation:void 0,translations:void 0};b((0,h.nc)({activeMenu:k,data:a}))})).finally((()=>{N(!1),b((0,h.A_)(k))}))}(a)}),[k.refetch]);return(0,m.jsxs)(r.Z,{title:e("addon.edit"),extra:(0,m.jsx)(u.Z,{}),children:[(0,m.jsx)(i.Z,{current:S,onChange:t=>{b((0,h.nc)({activeMenu:k,data:{...k.data,step:t}})),j.set("step",t)},children:s.S.map((t=>(0,m.jsx)(y,{title:e(t.title)},t.title)))}),w?(0,m.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,m.jsx)(c.Z,{size:"large",className:"py-5"})}):(0,m.jsxs)("div",{className:"steps-content",children:["First-content"===s.S[S].content&&(0,m.jsx)(d.Z,{next:_,action_type:"edit"}),"Third-content"===s.S[S].content&&(0,m.jsx)(o.Z,{next:_,prev:z,current:S}),"Finish-content"===s.S[S].content&&(0,m.jsx)(l.Z,{prev:z})]})]})}},24654:()=>{}}]);
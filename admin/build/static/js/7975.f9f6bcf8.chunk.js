(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7975],{33834:(t,e,a)=>{"use strict";a.d(e,{K:()=>i});var n=a(97890),s=a(74776),r=a.n(s);const i=()=>{const t=(0,n.s0)(),e=(0,n.TH)(),a=r().parse(e.search,{ignoreQueryPrefix:!0});return{values:a,set:(e,n)=>t({search:r().stringify({...a,[e]:n})}),reset:e=>{const n={...a};n[e]&&delete n[e],t({search:r().stringify({...n})})},clear:()=>t({search:r().stringify({})}),merge:e=>t({search:r().stringify({...a,...e})})}}},61492:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>j});var n=a(47313),s=a(43205),r=a(83999),i=a(77181),c=a(72652),l=a(74911),o=a(39088),d=a(18325),u=a(73431),p=a(97890),v=a(17101),h=a(2717),f=a(90954),g=a(24511),m=a(33834),x=a(46417);const{Step:y}=r.Z,j=()=>{var t;const{t:e}=(0,g.$)(),{uuid:a}=(0,p.UO)(),j=(0,m.K)(),{activeMenu:Z}=(0,h.v9)((t=>t.menu),h.wU),{languages:b}=(0,h.v9)((t=>t.formLang),h.wU),k=(0,h.I0)(),S=Number((null===(t=j.values)||void 0===t?void 0:t.step)||0),[w,N]=(0,n.useState)(Z.refetch),z=()=>{const t=S+1;j.set("step",t)},C=()=>{const t=S-1;j.set("step",t)},M=t=>t?{label:t.translation?t.translation.title:t.title,value:t.id}:null;function U(t){if(null===t||void 0===t||!t.translations)return{};const{translations:e}=t,a=b.map((t=>{var a,n;return{["title[".concat(t.locale,"]")]:null===(a=e.find((e=>e.locale===t.locale)))||void 0===a?void 0:a.title,["description[".concat(t.locale,"]")]:null===(n=e.find((e=>e.locale===t.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}(0,n.useEffect)((()=>{Z.refetch&&function(t){N(!0),v.Z.getById(t).then((t=>{const e={...t.data,...U(t.data),shop:M(t.data.shop),category:M(t.data.category),brand:M(t.data.brand),unit:M(t.data.unit),images:(a=t.data.galleries,a.map((t=>({uid:t.id,name:t.path,url:t.path})))),properties:t.data.properties.map(((t,e)=>({id:e,["key[".concat(t.locale,"]")]:t.key,["value[".concat(t.locale,"]")]:t.value}))),translation:void 0,translations:void 0};var a;k((0,f.nc)({activeMenu:Z,data:e}))})).finally((()=>{N(!1),k((0,f.A_)(Z))}))}(a)}),[Z.refetch]);return(0,x.jsxs)(i.Z,{title:e("clone.addon"),extra:(0,x.jsx)(u.Z,{}),children:[(0,x.jsx)(r.Z,{current:S,onChange:t=>{k((0,f.nc)({activeMenu:Z,data:{...Z.data,step:t}})),j.set("step",t)},children:s.S.map((t=>(0,x.jsx)(y,{title:e(t.title)},t.title)))}),w?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(c.Z,{size:"large",className:"py-5"})}):(0,x.jsxs)("div",{className:"steps-content",children:["First-content"===s.S[S].content&&(0,x.jsx)(d.Z,{next:z}),"Third-content"===s.S[S].content&&(0,x.jsx)(l.Z,{next:z,prev:C,current:S}),"Finish-content"===s.S[S].content&&(0,x.jsx)(o.Z,{prev:C})]})]})}},24654:()=>{}}]);
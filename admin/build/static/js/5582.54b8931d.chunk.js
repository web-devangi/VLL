(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5582],{33834:function(t,n,e){"use strict";e.d(n,{K:function(){return s}});var a=e(4942),r=e(1413),i=e(97890),c=e(74776),u=e.n(c),s=function(){var t=(0,i.s0)(),n=(0,i.TH)(),e=u().parse(n.search,{ignoreQueryPrefix:!0});return{values:e,set:function(n,i){return t({search:u().stringify((0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,i)))})},reset:function(n){var a=(0,r.Z)({},e);a[n]&&delete a[n],t({search:u().stringify((0,r.Z)({},a))})},clear:function(){return t({search:u().stringify({})})},merge:function(n){return t({search:u().stringify((0,r.Z)((0,r.Z)({},e),n))})}}}},27718:function(t,n,e){"use strict";e.r(n);var a=e(93433),r=e(4942),i=e(1413),c=e(29439),u=e(47313),s=e(82494),o=e(83999),l=e(77181),f=e(72652),d=e(1939),v=e(32723),p=e(33072),Z=e(73431),h=e(97890),g=e(18333),m=e(2717),x=e(90954),y=e(24511),j=e(33834),b=e(46417),k=o.Z.Step;n.default=function(){var t,n=(0,y.$)().t,e=(0,h.UO)().uuid,S=(0,j.K)(),w=(0,m.v9)((function(t){return t.menu}),m.wU).activeMenu,N=(0,m.v9)((function(t){return t.formLang}),m.wU).languages,z=(0,m.I0)(),C=Number((null===(t=S.values)||void 0===t?void 0:t.step)||0),M=(0,u.useState)(w.refetch),O=(0,c.Z)(M,2),U=O[0],F=O[1],I=function(){var t=C+1;S.set("step",t)},K=function(){var t=C-1;S.set("step",t)},T=function(t){return t?{label:t.translation?t.translation.title:t.title,value:t.id}:null};function A(t){F(!0),g.Z.getById(t).then((function(t){var n,e=(0,i.Z)((0,i.Z)((0,i.Z)({},t.data),function(t){if(null===t||void 0===t||!t.translations)return{};var n=t.translations,e=N.map((function(t){var e,a,i;return i={},(0,r.Z)(i,"title[".concat(t.locale,"]"),null===(e=n.find((function(n){return n.locale===t.locale})))||void 0===e?void 0:e.title),(0,r.Z)(i,"description[".concat(t.locale,"]"),null===(a=n.find((function(n){return n.locale===t.locale})))||void 0===a?void 0:a.description),i}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(e)))}(t.data)),{},{shop:T(t.data.shop),category:T(t.data.category),brand:T(t.data.brand),unit:T(t.data.unit),images:(n=t.data.galleries,n.map((function(t){return{uid:t.id,name:t.path,url:t.path}}))),properties:t.data.properties.map((function(t,n){var e;return e={id:n},(0,r.Z)(e,"key[".concat(t.locale,"]"),t.key),(0,r.Z)(e,"value[".concat(t.locale,"]"),t.value),e})),translation:void 0,translations:void 0});z((0,x.nc)({activeMenu:w,data:e}))})).finally((function(){F(!1),z((0,x.A_)(w))}))}(0,u.useEffect)((function(){w.refetch&&A(e)}),[w.refetch]);return(0,b.jsxs)(l.Z,{title:n("clone.addon"),extra:(0,b.jsx)(Z.Z,{}),children:[(0,b.jsx)(o.Z,{current:C,onChange:function(t){z((0,x.nc)({activeMenu:w,data:(0,i.Z)((0,i.Z)({},w.data),{},{step:t})})),S.set("step",t)},children:s.S.map((function(t){return(0,b.jsx)(k,{title:n(t.title)},t.title)}))}),U?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(f.Z,{size:"large",className:"py-5"})}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===s.S[C].content&&(0,b.jsx)(p.Z,{next:I}),"Third-content"===s.S[C].content&&(0,b.jsx)(d.Z,{next:I,prev:K,current:C}),"Finish-content"===s.S[C].content&&(0,b.jsx)(v.Z,{prev:K})]})]})}},24654:function(){}}]);
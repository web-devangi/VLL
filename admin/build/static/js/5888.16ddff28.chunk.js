"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5888],{13622:function(n,e,t){t.d(e,{R:function(){return f}});var i=t(1413),r=t(29439),o=t(45987),l=t(47313),u=t(12279),a=t.n(u),d=t(74294),c=t(72652),s=t(46417),v=["fetchOptions","debounceTimeout","refetch"],f=function(n){var e=n.fetchOptions,t=n.debounceTimeout,u=void 0===t?400:t,f=n.refetch,h=void 0!==f&&f,p=(0,o.Z)(n,v),Z=(0,l.useState)(!1),m=(0,r.Z)(Z,2),y=m[0],g=m[1],x=(0,l.useState)([]),j=(0,r.Z)(x,2),b=j[0],w=j[1],O=(0,l.useMemo)((function(){return a()((function(n){w([]),g(!0),e(n).then((function(n){w(n),g(!1)}))}),u)}),[e,u]);return(0,s.jsx)(d.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,onClear:function(){return O("")},filterOption:!1,onSearch:O,notFoundContent:y?(0,s.jsx)(c.Z,{size:"small"}):"no results"},p),{},{options:b,onFocus:function(){b.length&&!h||O("")}}))}},89281:function(n,e,t){t.d(e,{h:function(){return f}});var i=t(1413),r=t(29439),o=t(45987),l=t(47313),u=t(12279),a=t.n(u),d=t(74294),c=t(72652),s=t(46417),v=["fetchOptions","debounceTimeout","onClear","refetchOptions"],f=function(n){var e=n.fetchOptions,t=n.debounceTimeout,u=void 0===t?400:t,f=n.onClear,h=n.refetchOptions,p=void 0!==h&&h,Z=(0,o.Z)(n,v),m=(0,l.useState)(!1),y=(0,r.Z)(m,2),g=y[0],x=y[1],j=(0,l.useState)([]),b=(0,r.Z)(j,2),w=b[0],O=b[1],k=(0,l.useMemo)((function(){return a()((function(n){O([]),x(!0),e(n).then((function(n){O(n),x(!1)}))}),u)}),[e,u]);return(0,s.jsx)(d.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),f&&f()},notFoundContent:g?(0,s.jsx)(c.Z,{size:"small"}):"no results"},Z),{},{options:w,onFocus:function(){w.length&&!p||k("")}}))}},75888:function(n,e,t){t.r(e);var i=t(1413),r=t(29439),o=(t(47313),t(97890)),l=t(23560),u=t(10976),a=t(2717),d=t(90954),c=t(24511),s=t(29919),v=t(94777),f=t(4663),h=t(46417);e.default=function(){var n=(0,c.$)().t,e=(0,o.UO)().id,t=(0,a.v9)((function(n){return n.menu}),a.wU).activeMenu,p=(0,a.I0)(),Z=u.Z.useForm(),m=(0,r.Z)(Z,1)[0],y=(0,o.s0)();return(0,h.jsx)(f.Z,{form:m,handleSubmit:function(r){var o=r.area,u=r.city,c=r.country,f=r.region,h=r.price,Z=r.fitting_rooms,m=r.active,g=r.shop_id,x={price:h,fitting_rooms:Z,active:Number(m),area_id:null===o||void 0===o?void 0:o.value,city_id:null===u||void 0===u?void 0:u.value,country_id:null===c||void 0===c?void 0:c.value,region_id:null===f||void 0===f?void 0:f.value,shop_id:null===g||void 0===g?void 0:g.value},j="delivery-price";return s.Z.update(e,x).then((function(){l.Am.success(n("successfully.updated")),(0,a.dC)((function(){p((0,d.ph)((0,i.Z)((0,i.Z)({},t),{},{nextUrl:j}))),p((0,v.nM)({}))})),y("/".concat(j))}))}})}},4663:function(n,e,t){t.d(e,{Z:function(){return N}});var i=t(15861),r=t(1413),o=t(45987),l=t(93433),u=t(4942),a=t(29439),d=t(87757),c=t.n(d),s=t(47313),v=t(2717),f=t(97890),h=t(24511),p=t(10976),Z=t(68197),m=t(59624),y=t(77181),g=t(16124),x=t(59491),j=t(13622),b=t(89281),w=t(27453),O=t(47139),k=t(79637),C=t(27443),F=t(49067),_=t(90954),S=t(29919),I=t(51282),q=t(46417),R=["city","country","region","area"];function N(n){var e=n.form,t=n.handleSubmit,d=(0,h.$)().t,N=(0,v.I0)(),U=(0,f.UO)().id,M=(0,v.v9)((function(n){return n.menu}),v.wU).activeMenu,z=(0,v.v9)((function(n){return n.formLang}),v.wU),P=z.languages,T=z.defaultLang,V=(0,v.v9)((function(n){return n.currency}),v.wU).defaultCurrency,B=(0,s.useState)(!1),A=(0,a.Z)(B,2),E=A[0],L=A[1],$=(0,s.useState)(!1),D=(0,a.Z)($,2),G=D[0],H=D[1],J=(0,s.useState)({}),K=(0,a.Z)(J,2),Q=K[0],W=K[1],X=Q.country,Y=Q.region,nn=Q.city;(0,s.useEffect)((function(){return function(){var n=e.getFieldsValue(!0);N((0,_.nc)({activeMenu:M,data:n}))}}),[]),(0,s.useEffect)((function(){M.refetch&&U&&en(U)}),[M.refetch]);var en=function(){L(!0),S.Z.getById(U).then((function(n){var t,i,a,d,c,s,v,f,h,p,Z=n.data,m=Z.city,y=Z.country,g=Z.region,x=Z.area,j=(0,o.Z)(Z,R),b="address[".concat(T,"]"),w={area:{label:null===x||void 0===x||null===(t=x.translation)||void 0===t?void 0:t.title,value:null===x||void 0===x?void 0:x.id},city:{label:null===m||void 0===m||null===(i=m.translation)||void 0===i?void 0:i.title,value:null===m||void 0===m?void 0:m.id},country:{label:null===y||void 0===y||null===(a=y.translation)||void 0===a?void 0:a.title,value:null===y||void 0===y?void 0:y.id},region:{label:null===g||void 0===g||null===(d=g.translation)||void 0===d?void 0:d.title,value:null===g||void 0===g?void 0:g.id}},O=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},function(n){if(null===n||void 0===n||!n.translations)return{};var e=n.translations,t=P.map((function(n){var t,i,r;return r={},(0,u.Z)(r,"title[".concat(n.locale,"]"),null===(t=e.find((function(e){return e.locale===n.locale})))||void 0===t?void 0:t.title),(0,u.Z)(r,"address[".concat(n.locale,"]"),null===(i=e.find((function(e){return e.locale===n.locale})))||void 0===i?void 0:i.address),r}));return Object.assign.apply(Object,[{}].concat((0,l.Z)(t)))}(Z)),w),j),{},(p={},(0,u.Z)(p,b,null===(c=Z.address)||void 0===c?void 0:c[T]),(0,u.Z)(p,"shop_id",{label:null===Z||void 0===Z||null===(s=Z.shop)||void 0===s||null===(v=s.translation)||void 0===v?void 0:v.title,value:null===Z||void 0===Z||null===(f=Z.shop)||void 0===f?void 0:f.id,key:null===Z||void 0===Z||null===(h=Z.shop)||void 0===h?void 0:h.id}),p));e.setFieldsValue(O),W(w)})).catch((function(n){console.error(n)})).finally((function(){L(!1),N((0,_.A_)(M))}))};function tn(){return(tn=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={search:e,status:1,perPage:10},n.abrupt("return",w.Z.get(t).then((function(n){return n.data.map((function(n){var e;return{label:(null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title)||"no name",value:null===n||void 0===n?void 0:n.id,key:null===n||void 0===n?void 0:n.id}}))})));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function rn(){return(rn=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={search:e,status:1,perPage:10,region_id:null===Y||void 0===Y?void 0:Y.value},n.abrupt("return",O.Z.get(t).then((function(n){return n.data.map((function(n){var e;return{label:(null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title)||"no name",value:null===n||void 0===n?void 0:n.id,key:null===n||void 0===n?void 0:n.id}}))})));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function on(){return(on=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={search:e,status:1,perPage:10,country_id:null===X||void 0===X?void 0:X.value},n.abrupt("return",k.Z.get(t).then((function(n){return n.data.map((function(n){var e;return{label:(null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title)||"no name",value:null===n||void 0===n?void 0:n.id,key:null===n||void 0===n?void 0:n.id}}))})));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function ln(){return(ln=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={search:e,status:1,perPage:10,city_id:null===nn||void 0===nn?void 0:nn.value},n.abrupt("return",C.Z.get(t).then((function(n){return n.data.map((function(n){var e;return{label:(null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title)||"no name",value:null===n||void 0===n?void 0:n.id,key:null===n||void 0===n?void 0:n.id}}))})));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return E?(0,q.jsx)(I.Z,{}):(0,q.jsxs)(p.Z,{form:e,name:d(U?"edit.delivery.price":"add.delivery.price"),layout:"vertical",initialValues:(0,r.Z)({clickable:!0},M.data),onFinish:function(n){H(!0),t(n).finally((function(){return H(!1)}))},children:[(0,q.jsxs)(Z.Z,{gutter:[24,24],children:[(0,q.jsx)(m.Z,{span:12,children:(0,q.jsxs)(y.Z,{title:d("deliveryzone"),className:"h-100",children:[(0,q.jsx)(m.Z,{span:24,children:(0,q.jsx)(p.Z.Item,{label:d("region"),name:"region",rules:[{required:!0,message:d("required")}],children:(0,q.jsx)(j.R,{fetchOptions:function(n){return tn.apply(this,arguments)},dropdownRender:function(n){return(0,q.jsx)(q.Fragment,{children:n})},refetch:!0,onChange:function(n){W((function(e){return(0,r.Z)((0,r.Z)({},e),{},{region:n})})),e.resetFields(["city","area","country"])}})})}),(0,q.jsx)(m.Z,{span:24,children:(0,q.jsx)(p.Z.Item,{label:d("country"),name:"country",rules:[{required:!0,message:d("required")}],children:(0,q.jsx)(j.R,{fetchOptions:function(n){return rn.apply(this,arguments)},dropdownRender:function(n){return(0,q.jsx)(q.Fragment,{children:n})},refetch:!0,onChange:function(n){W((function(e){return(0,r.Z)((0,r.Z)({},e),{},{country:n})})),e.resetFields(["city","area"])},disabled:!Boolean(null===Y||void 0===Y?void 0:Y.value)})})}),(0,q.jsx)(m.Z,{span:24,children:(0,q.jsx)(p.Z.Item,{label:d("city"),name:"city",rules:[{required:!1,message:d("required")}],children:(0,q.jsx)(j.R,{fetchOptions:function(n){return on.apply(this,arguments)},dropdownRender:function(n){return(0,q.jsx)(q.Fragment,{children:n})},refetch:!0,disabled:!Boolean(null===X||void 0===X?void 0:X.value),onChange:function(n){W((function(e){return(0,r.Z)((0,r.Z)({},e),{},{city:n})})),e.resetFields(["area"])}})})}),(0,q.jsx)(m.Z,{span:24,children:(0,q.jsx)(p.Z.Item,{label:d("area"),name:"area",rules:[{required:!1,message:d("required")}],children:(0,q.jsx)(j.R,{fetchOptions:function(n){return ln.apply(this,arguments)},dropdownRender:function(n){return(0,q.jsx)(q.Fragment,{children:n})},refetch:!0,disabled:!Boolean(null===nn||void 0===nn?void 0:nn.value)})})})]})}),(0,q.jsx)(m.Z,{span:12,children:(0,q.jsx)(y.Z,{title:d("pricing"),className:"h-100",children:(0,q.jsx)(m.Z,{span:24,children:(0,q.jsx)(p.Z.Item,{label:"".concat(d("price")," (").concat(null===V||void 0===V?void 0:V.symbol,")"),name:"price",rules:[{required:!0,message:d("required")}],children:(0,q.jsx)(g.Z,{className:"w-100"})})})})}),(0,q.jsx)(m.Z,{span:12,children:(0,q.jsx)(y.Z,{title:d("others"),className:"h-100",children:(0,q.jsx)(m.Z,{span:24,children:(0,q.jsx)(p.Z.Item,{label:d("shop"),name:"shop_id",children:(0,q.jsx)(b.h,{fetchOptions:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e={search:n,perPage:10,page:1};return""===n.trim()&&delete e.search,F.Z.getAll(e).then((function(n){var e;return null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.map((function(n){var e;return{label:null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title,value:null===n||void 0===n?void 0:n.id,key:null===n||void 0===n?void 0:n.id}}))}))}})})})})})]}),(0,q.jsx)("br",{}),(0,q.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end",children:(0,q.jsx)("div",{className:"pb-5",children:(0,q.jsx)(x.Z,{type:"primary",htmlType:"submit",loading:G,children:d("submit")})})})]})}}}]);
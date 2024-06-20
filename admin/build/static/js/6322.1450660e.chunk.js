"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6322],{32380:function(e,n,t){t.d(n,{o:function(){return c}});var i=t(1413),a=t(29439),r=t(45987),l=t(47313),u=t(84762),o=t(72652),s=t(46417),d=["fetchOptions","refetch"],c=function(e){var n=e.fetchOptions,t=e.refetch,c=void 0!==t&&t,v=(0,r.Z)(e,d),m=(0,l.useState)(!1),p=(0,a.Z)(m,2),f=p[0],h=p[1],Z=(0,l.useState)([]),g=(0,a.Z)(Z,2),j=g[0],x=g[1];return(0,s.jsx)(u.Z,(0,i.Z)({treeLine:!0,treeData:f?[]:j,treeDefaultExpandAll:!0,labelInValue:!0,onFocus:function(){j.length&&!c||(h(!0),n().then((function(e){x(e),h(!1)})))},notFoundContent:f?(0,s.jsx)(o.Z,{size:"small"}):"no results"},v))}},73431:function(e,n,t){var i=t(47313),a=t(39180),r=t(2717),l=t(28830),u=t(60535),o=t(46417);n.Z=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.formLang}),r.wU),t=n.languages,s=n.defaultLang;(0,i.useEffect)((function(){u.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.ZP.Group,{value:s,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},26322:function(e,n,t){t.r(n);var i=t(15861),a=t(93433),r=t(4942),l=t(1413),u=t(29439),o=t(87757),s=t.n(o),d=t(47313),c=t(10976),v=t(77181),m=t(68197),p=t(59624),f=t(66672),h=t(74294),Z=t(16124),g=t(86345),j=t(59491),x=t(72652),y=t(23560),b=t(97890),w=t(73431),k=t(52421),I=t(2717),P=t(90954),_=t(30763),E=t(97421),S=t(24511),q=t(5764),F=t(42472),L=t(32380),A=t(46417);n.default=function(){var e,n,t=(0,S.$)().t,o=(0,b.s0)(),O=(0,I.I0)(),U=(0,d.useState)("main"),V=(0,u.Z)(U,2),C=V[0],N=V[1],z=(0,d.useState)(!1),B=(0,u.Z)(z,2),D=B[0],M=B[1],T=(0,I.v9)((function(e){return e.menu}),I.wU),G=T.activeMenu,H=(0,b.TH)().state,$=(0,d.useState)(!1),J=(0,u.Z)($,2),K=J[0],Q=J[1],R=(0,d.useState)(null!==(e=G.data)&&void 0!==e&&e.image?[null===(n=G.data)||void 0===n?void 0:n.image]:[]),W=(0,u.Z)(R,2),X=W[0],Y=W[1],ee=c.Z.useForm(),ne=(0,u.Z)(ee,1)[0],te=(0,d.useState)(!1),ie=(0,u.Z)(te,2),ae=ie[0],re=ie[1],le=(0,d.useState)(null),ue=(0,u.Z)(le,2),oe=ue[0],se=ue[1],de=(0,b.UO)().uuid,ce=(0,I.v9)((function(e){return e.category}),I.wU),ve=ce.params,me=(0,I.v9)((function(e){return e.formLang}),I.wU),pe=me.defaultLang,fe=me.languages;(0,d.useEffect)((function(){return function(){var e=ne.getFieldsValue(!0);O((0,P.nc)({activeMenu:G,data:e})),O((0,F.pE)((0,l.Z)((0,l.Z)({},ve),{},{type:C,parent_id:null===H||void 0===H?void 0:H.parentId})))}}),[]);var he=function(e){return{name:e,url:E.bV+e}};var Ze=function(e){Q(!0),_.Z.getById(e).then((function(e){var n,t,i,u,o=e.data,s=(0,l.Z)((0,l.Z)((0,l.Z)({},o),function(e){if(!e)return{};var n=e.translations,t=fe.map((function(e){var t,i,a;return a={},(0,r.Z)(a,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,r.Z)(a,"description[".concat(e.locale,"]"),null===(i=n.find((function(n){return n.locale===e.locale})))||void 0===i?void 0:i.description),a}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(t)))}(o)),{},{input:(null===o||void 0===o?void 0:o.input)||0,image:[he(o.img)],keywords:null===o||void 0===o||null===(n=o.keywords)||void 0===n?void 0:n.split(","),parent_id:{label:null===(t=o.parent)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title,value:o.parent_id,key:o.parent_id}});N(null===o||void 0===o?void 0:o.type),ne.setFieldsValue(s),Y([he(o.img)]),(null===o||void 0===o||null===(u=o.children)||void 0===u?void 0:u.length)>0&&"main"===(null===o||void 0===o?void 0:o.type)&&M(!0)})).finally((function(){Q(!1),O((0,P.A_)(G))}))};function ge(){return ge=(0,i.Z)(s().mark((function e(){var n,t,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ne.getFieldValue(),t=n.id,i={perPage:100,type:"main"},e.abrupt("return",_.Z.getAll(i).then((function(e){return e.data.filter((function(e){return e.id!==t})).map((function(e){var n,i;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id,type:"main",children:null===(i=e.children)||void 0===i?void 0:i.map((function(e){var n,i;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id,type:"sub_main",disabled:e.id===t,children:null===(i=e.children)||void 0===i?void 0:i.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id,disabled:!0,type:"child"}}))}}))}}))})));case 3:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}(0,d.useEffect)((function(){Ze(de)}),[G.refetch,de,null===H||void 0===H?void 0:H.parentId]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(v.Z,{title:null!==H&&void 0!==H&&H.parentId?t("edit.sub.category"):t("edit.category"),extra:(0,A.jsx)(w.Z,{}),children:K?(0,A.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,A.jsx)(x.Z,{size:"large",className:"mt-5 pt-5"})}):(0,A.jsxs)(c.Z,{name:"basic",layout:"vertical",onFinish:function(e){var n,i,a;re(!0);var r=(0,l.Z)((0,l.Z)({},e),{},{type:null!==(n=e.parent_id)&&void 0!==n&&n.value?C:"main",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null===(i=e.parent_id)||void 0===i?void 0:i.value,"images[0]":null===(a=X[0])||void 0===a?void 0:a.name}),u="catalog/categories";_.Z.update(de,r).then((function(){y.Am.success(t("successfully.updated")),O((0,P.ph)((0,l.Z)((0,l.Z)({},G),{},{nextUrl:u}))),o("/".concat(u))})).catch((function(e){return se(e.response.data.params)})).finally((function(){return re(!1)}))},initialValues:(0,l.Z)({active:!0},G.data),form:ne,children:[(0,A.jsxs)(m.Z,{gutter:12,children:[(0,A.jsx)(p.Z,{span:12,children:fe.map((function(e,n){return(0,A.jsx)(c.Z.Item,{label:t("name"),name:"title[".concat(e.locale,"]"),help:oe&&oe["title.".concat(pe)]?oe["title.".concat(pe)][0]:null,validateStatus:oe?"error":"success",rules:[{validator:function(n,i){return i||(null===e||void 0===e?void 0:e.locale)!==pe?i&&""===(null===i||void 0===i?void 0:i.trim())?Promise.reject(new Error(t("no.empty.space"))):i&&(null===i||void 0===i?void 0:i.trim().length)<2?Promise.reject(new Error(t("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(t("required")))}}],hidden:e.locale!==pe,children:(0,A.jsx)(f.Z,{maxLength:50})},e.title+n)}))}),(0,A.jsx)(p.Z,{span:12,children:fe.map((function(e,n){return(0,A.jsx)(c.Z.Item,{label:t("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:function(n,i){return i||(null===e||void 0===e?void 0:e.locale)!==pe?i&&""===(null===i||void 0===i?void 0:i.trim())?Promise.reject(new Error(t("no.empty.space"))):i&&(null===i||void 0===i?void 0:i.trim().length)<5?Promise.reject(new Error(t("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(t("required")))}}],hidden:e.locale!==pe,children:(0,A.jsx)(k.Z,{rows:4,maxLength:150})},e.locale+n)}))}),(0,A.jsx)(p.Z,{span:12,children:(0,A.jsx)(c.Z.Item,{label:t("keywords"),name:"keywords",rules:[{required:!0,message:t("required")}],children:(0,A.jsx)(h.Z,{mode:"tags",style:{width:"100%"}})})}),(0,A.jsx)(p.Z,{span:12,children:(0,A.jsx)(c.Z.Item,{label:t("parent.category"),name:"parent_id",rules:[{required:!1,message:t("required")}],children:(0,A.jsx)(L.o,{fetchOptions:function(){return ge.apply(this,arguments)},onSelect:function(e,n,t){var i=(n||{}).type;N("main"===i?"sub_main":"sub_main"===i?"child":"main")},allowClear:!0,disabled:D})})}),(0,A.jsx)(p.Z,{span:12,children:(0,A.jsx)(c.Z.Item,{name:"input",label:t("input"),rules:[{required:!0,message:t("required")}],children:(0,A.jsx)(Z.Z,{min:0,parser:function(e){return parseInt(e,10)},max:9999999,className:"w-100"})})}),(0,A.jsx)(p.Z,{span:4,children:(0,A.jsx)(c.Z.Item,{label:t("image"),name:"images",rules:[{required:!(null!==X&&void 0!==X&&X.length),message:t("required")}],children:(0,A.jsx)(q.Z,{type:"categories",imageList:X,setImageList:Y,form:ne,multiple:!1})})}),(0,A.jsx)(p.Z,{span:2,children:(0,A.jsx)(c.Z.Item,{label:t("active"),name:"active",valuePropName:"checked",children:(0,A.jsx)(g.Z,{})})})]}),(0,A.jsx)(j.Z,{type:"primary",htmlType:"submit",loading:ae,children:t("submit")})]})})})}}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7149],{97149:function(t,e,n){n.r(e);var i=n(93433),a=n(4942),c=n(1413),r=n(29439),l=n(47313),u=n(97890),o=n(23560),s=n(83999),d=n(10976),v=n(77181),f=n(72652),m=n(97421),g=n(2717),p=n(90954),Z=n(24511),h=n(73431),y=n(65436),_=n(14241),j=n(46417),b=s.Z.Step;e.default=function(){var t,e,n,x=(0,Z.$)().t,k=(0,g.v9)((function(t){return t.menu}),g.wU).activeMenu,S=(0,u.UO)().id,w=(0,g.I0)(),N=(0,g.v9)((function(t){return t.formLang}),g.wU),O=N.defaultLang,F=(N.languages,(0,l.useState)((null===(t=k.data)||void 0===t?void 0:t.step)||0)),U=(0,r.Z)(F,2),V=U[0],z=U[1],I=(0,l.useState)(null!==(e=k.data)&&void 0!==e&&e.image?[null===(n=k.data)||void 0===n?void 0:n.image]:[]),M=(0,r.Z)(I,2),q=M[0],A=M[1],C=function(){z(V+1)},E=function(){z(V-1)},L=d.Z.useForm(),B=(0,r.Z)(L,1)[0],$=(0,u.s0)(),D=(0,l.useState)(!1),G=(0,r.Z)(D,2),H=G[0],J=G[1],K=(0,l.useState)(!1),P=(0,r.Z)(K,2),Q=P[0],R=P[1];(0,l.useEffect)((function(){return function(){var t=B.getFieldsValue(!0);w((0,p.nc)({activeMenu:k,data:t}))}}),[]);return(0,l.useEffect)((function(){k.refetch&&function(t){J(!0),_.Z.getById(t).then((function(t){var e,n,r=t.data;console.log("recept",r),B.setFieldsValue((0,c.Z)((0,c.Z)({},r),{},{active_time:Number(r.active_time),total_time:Number(r.total_time),title:(0,a.Z)({},O,r.translation.title),description:(0,a.Z)({},O,r.translation.description),instruction:Object.assign.apply(Object,[{}].concat((0,i.Z)(r.instructions.map((function(t){return(0,a.Z)({},t.locale,t.title)}))))),ingredient:Object.assign.apply(Object,[{}].concat((0,i.Z)(r.ingredients.map((function(t){return(0,a.Z)({},t.locale,t.title)}))))),nutrition:null===(e=r.nutritions)||void 0===e?void 0:e.map((function(t){return(0,c.Z)({percentage:Number(null===t||void 0===t?void 0:t.percentage),weight:Number(null===t||void 0===t?void 0:t.weight)},Object.assign.apply(Object,[{}].concat((0,i.Z)(t.translations.flatMap((function(t){return(0,a.Z)({},t.locale,t.title)}))))))})),category_id:{value:r.category.id,label:r.category.translation.title},stocks:r.stocks.map((function(t){return(0,c.Z)({stock_id:{value:t.id,label:t.product.translation.title}},t)}))})),A([(n=r.img,{name:n,url:m.bV+n})])})).finally((function(){J(!1),w((0,p.A_)(k))}))}(S)}),[k.refetch]),(0,j.jsx)(v.Z,{title:x("edit.recepe"),extra:(0,j.jsx)(h.Z,{}),children:H?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,j.jsx)(f.Z,{size:"large",className:"py-5"})}):(0,j.jsxs)(d.Z,{layout:"vertical",onFinish:function(t){var e;B.validateFields();var n=(0,c.Z)((0,c.Z)({},t),{},{total_time:t.total_time.toString(),active_time:t.active_time.toString(),category_id:t.category_id.value,images:null===q||void 0===q?void 0:q.map((function(t){return t.name})),stocks:t.stocks.map((function(t){return{min_quantity:t.min_quantity,stock_id:t.stock_id.value}})),nutrition:null===(e=t.nutrition)||void 0===e?void 0:e.map((function(t){var e;return(0,c.Z)((0,c.Z)({},t),{},{percentage:null===t||void 0===t||null===(e=t.percentage)||void 0===e?void 0:e.toString(),weight:t.weight.toString()})}))});R(!0);var i="seller/recept";_.Z.update(S,n).then((function(){o.Am.success(x("successfully.updated")),$("/".concat(i)),w((0,p.ph)((0,c.Z)((0,c.Z)({},k),{},{nextUrl:i})))})).finally((function(){return R(!1)}))},form:B,initialValues:(0,c.Z)({active:!0},k.data),children:[(0,j.jsx)(s.Z,{current:V,children:y.S.map((function(t){return(0,j.jsx)(b,{title:x(t.title)},t.title)}))}),y.S.map((function(t){var e=t.content;return(0,j.jsx)("div",{className:"steps-content ".concat(t.step!==V+1&&"hidden"),children:(0,j.jsx)(e,{next:C,prev:E,loading:Q,image:q,setImage:A})},t.title)}))]})})}}}]);
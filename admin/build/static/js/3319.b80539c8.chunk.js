"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3319],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),r=t(45987),o=(t(47313),t(59491)),a=t(47515),l=t(23560),d=t(24511),s=t(79492),u=t(46417),c=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,m=void 0===f?"default":f,p=(0,r.Z)(e,c),x=(0,d.$)().t,h=(0,s.Z)().isDemo;return(0,u.jsx)(o.Z,(0,i.Z)({size:t,icon:(0,u.jsx)(a.Z,{}),onClick:function(e){h?l.Am.warning(x("cannot.work.demo")):v(e)},type:m},p))}},73319:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(4942),r=t(93433),o=t(1413),a=t(29439),l=t(47313),d=t(31741),s=t(55613),u=t(45705),c=t(59491),v=t(77181),f=t(78508),m=t(23560),p=t(69658),x=t(74580),h=t(2717),Z=t(90954),g=t(80314),y=t(13945),w=t(24511),j=t(28305),k=t(99361),C=t(70816),_=t.n(C),b=t(97890),S=t(55940),z=t(53233),I=t(20093),M=t(46417);function A(){var e=(0,w.$)().t,n=(0,h.I0)(),t=(0,b.s0)(),C=(0,l.useState)([{title:e("order.id"),dataIndex:"order",key:"order",render:function(i){return(0,M.jsxs)("div",{className:"text-hover",onClick:function(){return function(i){n((0,Z.bL)({id:"order_details",url:"order/details/".concat(i),name:e("order.details")})),t("/order/details/".concat(i))}(null===i||void 0===i?void 0:i.id)},children:["#",null===i||void 0===i?void 0:i.id]})},sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,M.jsxs)("div",{className:"text-hover",children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})}},{title:e("deliveryman"),dataIndex:"deliveryman",key:"deliveryman",is_show:!0,render:function(e){return(0,M.jsxs)("div",{className:"text-hover",children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:function(e){return(0,M.jsx)(s.Z,{allowHalf:!0,disabled:!0,defaultValue:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return _()(e).format("DD.MM.YYYY")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,M.jsx)(u.Z,{children:(0,M.jsx)(c.Z,{type:"primary",icon:(0,M.jsx)(d.Z,{}),onClick:function(){return K(n.id)}})})}}]),A=(0,a.Z)(C,2),P=A[0],Y=A[1],D=(0,l.useContext)(x._).setIsModalVisible,N=(0,l.useState)(null),O=(0,a.Z)(N,2),U=O[0],V=O[1],$=(0,l.useState)(null),E=(0,a.Z)($,2),H=E[0],K=E[1],L=(0,l.useState)(!1),R=(0,a.Z)(L,2),T=R[0],q=R[1],B=(0,l.useState)(null),F=(0,a.Z)(B,2),G=F[0],J=F[1],Q=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu,W=(0,h.v9)((function(e){return e.deliveryboyReview}),h.wU),X=W.reviews,ee=W.meta,ne=W.loading,te=W.params,ie=Q.data,re={sort:null===ie||void 0===ie?void 0:ie.sort,column:null===ie||void 0===ie?void 0:ie.column,perPage:null===ie||void 0===ie?void 0:ie.perPage,page:null===ie||void 0===ie?void 0:ie.page,assign:"deliveryman"};(0,l.useEffect)((function(){Q.refetch&&(n((0,I.C1)(re)),n((0,Z.A_)(Q)))}),[Q.refetch]),(0,g.Z)((function(){n((0,I.C1)(re))}),[Q.data]);var oe={id:U,onChange:function(e){V(e)}};return(0,M.jsxs)(v.Z,{title:e("deliveryboy.reviews"),extra:(0,M.jsxs)(u.Z,{wrap:!0,children:[(0,M.jsx)(S.Z,{size:"",onClick:function(){null===U||0===U.length?m.Am.warning(e("select.the.product")):(D(!0),J(!1))},children:e("delete.selected")}),(0,M.jsx)(z.Z,{columns:P,setColumns:Y})]}),children:[(0,M.jsx)(f.Z,{scroll:{x:!0},rowSelection:oe,columns:null===P||void 0===P?void 0:P.filter((function(e){return e.is_show})),dataSource:X,pagination:{pageSize:te.perPage,page:te.page,total:ee.total,defaultCurrent:te.page},rowKey:function(e){return e.id},onChange:function(e,t,i){var r=e.pageSize,o=e.current,a=i.field,l=i.order,d=(0,y.Z)(l);n((0,Z.nc)({activeMenu:Q,data:{perPage:r,page:o,column:a,sort:d}}))},loading:ne}),(0,M.jsx)(p.Z,{click:function(){q(!0);var t=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,r.Z)(U.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));j.Z.delete(t).then((function(){m.Am.success(e("successfully.deleted")),n((0,I.C1)()),D(!1)})).finally((function(){return q(!1)}))},text:e(G?"delete":"all.delete"),setText:V,loading:T}),H&&(0,M.jsx)(k.Z,{id:H,handleCancel:function(){return K(null)}})]})}}}]);
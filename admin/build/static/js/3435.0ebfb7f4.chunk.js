"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3435],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),c=t(45987),l=(t(47313),t(59491)),o=t(47515),a=t(23560),r=t(24511),u=t(79492),s=t(46417),d=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,p=void 0===f?"default":f,h=(0,c.Z)(e,d),Z=(0,r.$)().t,m=(0,u.Z)().isDemo;return(0,s.jsx)(l.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(o.Z,{}),onClick:function(e){m?a.Am.warning(Z("cannot.work.demo")):v(e)},type:p},h))}},53233:function(e,n,t){var i=t(1413),c=t(29439),l=t(47313),o=t(56140),a=t(67251),r=t(45705),u=t(86345),s=t(78267),d=t(37388),v=t(59491),f=t(99587),p=t(24511),h=t(46417),Z=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,m=e.style,x=e.size,y=void 0===x?"":x,g=e.iconOnly,j=(0,p.$)().t,z=(0,l.useState)(!1),w=(0,c.Z)(z,2),C=w[0],k=w[1],b=(0,h.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)(a.Z.Item,{children:(0,h.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(Z,{children:e.title}),(0,h.jsx)(u.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,h.jsx)(s.Z,{overlay:b,trigger:["click"],onVisibleChange:function(e){k(e)},visible:C,children:(0,h.jsx)(d.Z,{title:j("change.columns"),children:(0,h.jsx)(v.Z,{style:(0,i.Z)({},m),size:y,icon:(0,h.jsx)(f.Z,{}),children:g?null:j("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},63435:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var i=t(4942),c=t(93433),l=t(1413),o=t(29439),a=t(47313),r=t(45705),u=t(59491),s=t(77181),d=t(78508),v=t(2717),f=t(97890),p=t(24511),h=t(90954),Z=t(29186),m=t(55940),x=t(12019),y=t(47515),g=t(55768),j=t(53233),z=t(69658),w=t(80314),C=t(74580),k=t(71927),b=t(23560),V=t(13945),H=t(46417);function S(){var e,n=(0,p.$)().t,t=(0,f.s0)(),S=(0,v.I0)(),_=(0,a.useState)(null),I=(0,o.Z)(_,2),M=I[0],K=I[1],O=(0,a.useState)(null),A=(0,o.Z)(O,2),T=A[0],E=A[1],N=(0,a.useState)(!1),R=(0,o.Z)(N,2),$=R[0],B=R[1],L=(0,a.useContext)(C._).setIsModalVisible,P=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,U=null===P||void 0===P?void 0:P.data,D={sort:null===U||void 0===U?void 0:U.sort,column:null===U||void 0===U?void 0:U.column,pageSize:null===U||void 0===U?void 0:U.per_page,page:(null===U||void 0===U?void 0:U.page)||1},q=(0,v.v9)((function(e){return e.parcelTypes}),v.wU),F=q.data,G=q.loading,J=q.meta,Q=(0,a.useState)([{title:n("id"),dataIndex:"id",key:"id",is_show:!0},{title:n("title"),dataIndex:"type",key:"type",is_show:!0},{title:n("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,H.jsxs)(r.Z,{children:[(0,H.jsx)(u.Z,{type:"primary",icon:(0,H.jsx)(x.Z,{}),onClick:function(){return ee(n)}}),(0,H.jsx)(m.Z,{icon:(0,H.jsx)(y.Z,{}),onClick:function(){K([n.id]),L(!0),E(!0)}})]})}}]),W=(0,o.Z)(Q,2),X=W[0],Y=W[1],ee=function(e){S((0,h.bL)({url:"parcel-types/".concat(e.id),id:"edit-parcel-type",name:n("edit.parcel.type")})),t("/parcel-types/".concat(e.id))};(0,a.useEffect)((function(){null!==P&&void 0!==P&&P.refetch&&(S((0,Z.K)(D)),S((0,h.A_)(P)))}),[null===P||void 0===P?void 0:P.refetch]),(0,w.Z)((function(){S((0,Z.K)(D))}),[P.data]);var ne={selectedRowKeys:M,onChange:function(e){K(e)}};return(0,H.jsxs)(s.Z,{title:n("parcel.types"),extra:(0,H.jsxs)(r.Z,{children:[(0,H.jsx)(m.Z,{size:"",onClick:function(){null===M||0===M.length?b.Am.warning(n("select.the.product")):(L(!0),E(!1))},children:n("delete.selected")}),(0,H.jsx)(u.Z,{type:"primary",icon:(0,H.jsx)(g.Z,{}),onClick:function(){S((0,h.bL)({id:"add-parcel-type",url:"parcel-types/add",name:n("add.parcel.type")})),t("/parcel-types/add")},children:n("add.parcel.type")}),(0,H.jsx)(j.Z,{columns:X,setColumns:Y})]}),children:[(0,H.jsx)(d.Z,{scroll:{x:!0},rowSelection:ne,columns:null===X||void 0===X?void 0:X.filter((function(e){return e.is_show})),dataSource:F,pagination:{pageSize:J.per_page,page:(null===U||void 0===U?void 0:U.page)||1,total:J.total,defaultCurrent:null===U||void 0===U?void 0:U.page,current:null===(e=P.data)||void 0===e?void 0:e.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,c=e.current,o=t.field,a=t.order,r=(0,V.Z)(a);S((0,h.nc)({activeMenu:P,data:(0,l.Z)((0,l.Z)({},U),{},{perPage:i,page:c,column:o,sort:r})}))},loading:G}),(0,H.jsx)(z.Z,{click:function(){B(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(M.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(e).then((function(){b.Am.success(n("successfully.deleted")),S((0,Z.K)(D)),L(!1),E(null)})).finally((function(){return B(!1)}))},text:n(T?"delete":"all.delete"),setText:K,loading:$})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),c=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},o=t(17469),a=function(e,n){return c.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};a.displayName="PlusCircleOutlined";var r=c.forwardRef(a)},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),c=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),a=function(e,n){return c.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};a.displayName="TableOutlined";var r=c.forwardRef(a)}}]);
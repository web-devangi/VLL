"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1431],{55940:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),r=t(45987),l=(t(47313),t(59491)),c=t(47515),a=t(23560),o=t(24511),s=t(79492),d=t(46417),u=["size","onClick","type"];function h(e){var n=e.size,t=void 0===n?"":n,h=e.onClick,f=e.type,v=void 0===f?"default":f,Z=(0,r.Z)(e,u),m=(0,o.$)().t,x=(0,s.Z)().isDemo;return(0,d.jsx)(l.Z,(0,i.Z)({size:t,icon:(0,d.jsx)(c.Z,{}),onClick:function(e){x?a.Am.warning(m("cannot.work.demo")):h(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),r=t(29439),l=t(47313),c=t(56140),a=t(67251),o=t(45705),s=t(86345),d=t(78267),u=t(37388),h=t(59491),f=t(99587),v=t(24511),Z=t(46417),m=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,x=e.style,p=e.size,g=void 0===p?"":p,j=e.iconOnly,b=(0,v.$)().t,y=(0,l.useState)(!1),w=(0,r.Z)(y,2),z=w[0],k=w[1],C=(0,Z.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(a.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:C,trigger:["click"],onVisibleChange:function(e){k(e)},visible:z,children:(0,Z.jsx)(u.Z,{title:b("change.columns"),children:(0,Z.jsx)(h.Z,{style:(0,i.Z)({},x),size:g,icon:(0,Z.jsx)(f.Z,{}),children:j?null:b("Columns")})})})}},31431:function(e,n,t){t.r(n);var i=t(4942),r=t(93433),l=t(1413),c=t(29439),a=t(47313),o=t(45705),s=t(59491),d=t(77181),u=t(78508),h=t(97890),f=t(12019),v=t(47515),Z=t(55768),m=t(69658),x=t(74580),p=t(2717),g=t(90954),j=t(23560),b=t(24511),y=t(16611),w=t(44337),z=t(55940),k=t(53233),C=t(46417);n.default=function(){var e=(0,b.$)().t,n=(0,p.I0)(),t=(0,h.s0)(),_=(0,a.useContext)(x._).setIsModalVisible,V=(0,a.useState)(null),H=(0,c.Z)(V,2),S=H[0],I=H[1],M=(0,a.useState)(null),O=(0,c.Z)(M,2),A=O[0],E=O[1],N=(0,a.useState)(!1),R=(0,c.Z)(N,2),T=R[0],$=R[1],B=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,F=(0,p.v9)((function(e){return e.branch}),p.wU),K=F.branches,L=F.meta,P=F.loading,U=(0,a.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:function(e,n){var t;return(0,C.jsx)(C.Fragment,{children:null===n||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title})}},{title:e("address"),is_show:!0,dataIndex:"address",key:"address",render:function(e,n){var t;return(0,C.jsx)(C.Fragment,{children:null===n||void 0===n||null===(t=n.address)||void 0===t?void 0:t.address})}},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:function(e,n){return(0,C.jsxs)(o.Z,{children:[(0,C.jsx)(s.Z,{type:"primary",icon:(0,C.jsx)(f.Z,{}),onClick:function(){return J(n)}}),(0,C.jsx)(z.Z,{icon:(0,C.jsx)(v.Z,{}),onClick:function(){_(!0),I([n.id]),E(!0)}})]})}}]),D=(0,c.Z)(U,2),q=D[0],G=D[1],J=function(i){n((0,g.bL)({url:"seller/branch/".concat(i.id),id:"branch_edit",name:e("edit.branch")})),t("/seller/branch/".concat(i.id))};(0,a.useEffect)((function(){B.refetch&&(n((0,y._)()),n((0,g.A_)(B)))}),[B.refetch]);var Q={selectedRowKeys:S,onChange:function(e){I(e)}};return(0,C.jsxs)(d.Z,{title:e("branch"),extra:(0,C.jsxs)(o.Z,{wrap:!0,children:[(0,C.jsx)(s.Z,{size:"small",type:"primary",icon:(0,C.jsx)(Z.Z,{}),onClick:function(){n((0,g.bL)({url:"seller/branch/add",id:"add.branch",name:e("add.branch")})),t("/seller/branch/add")},children:e("add.branch")}),(0,C.jsx)(z.Z,{type:"danger",onClick:function(){null===S||0===S.length?j.Am.warning(e("select.the.product")):(_(!0),E(!1))},children:e("delete.all")}),(0,C.jsx)(k.Z,{columns:q,setColumns:G})]}),children:[(0,C.jsx)(u.Z,{scroll:{x:!0},rowSelection:Q,columns:null===q||void 0===q?void 0:q.filter((function(e){return e.is_show})),dataSource:K,pagination:{pageSize:null===L||void 0===L?void 0:L.per_page,page:null===L||void 0===L?void 0:L.current_page,total:null===L||void 0===L?void 0:L.total},rowKey:function(e){return e.id},loading:P,onChange:function(e){var t=e.pageSize,i=e.current;n((0,y._)({perPage:t,page:i}))}}),(0,C.jsx)(m.Z,{click:function(){$(!0);var t=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,r.Z)(S.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));w.Z.delete(t).then((function(){n((0,y._)()),j.Am.success(e("successfully.deleted")),I(null)})).finally((function(){_(!1),$(!1)}))},text:e(A?"delete":"all.delete"),loading:T,setText:I})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),a=function(e,n){return r.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};a.displayName="PlusCircleOutlined";var o=r.forwardRef(a)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),a=function(e,n){return r.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};a.displayName="TableOutlined";var o=r.forwardRef(a)}}]);
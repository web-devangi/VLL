"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6538],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),o=t(45987),c=(t(47313),t(59491)),l=t(47515),a=t(23560),r=t(24511),s=t(79492),d=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,o.Z)(e,u),m=(0,r.$)().t,g=(0,s.Z)().isDemo;return(0,d.jsx)(c.Z,(0,i.Z)({size:t,icon:(0,d.jsx)(l.Z,{}),onClick:function(e){g?a.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),o=t(29439),c=t(47313),l=t(56140),a=t(67251),r=t(45705),s=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,g=e.style,p=e.size,x=void 0===p?"":p,j=e.iconOnly,z=(0,v.$)().t,k=(0,c.useState)(!1),w=(0,o.Z)(k,2),b=w[0],y=w[1],C=(0,Z.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(a.Z.Item,{children:(0,Z.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:C,trigger:["click"],onVisibleChange:function(e){y(e)},visible:b,children:(0,Z.jsx)(u.Z,{title:z("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},g),size:x,icon:(0,Z.jsx)(h.Z,{}),children:j?null:z("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},46538:function(e,n,t){t.r(n);var i=t(4942),o=t(93433),c=t(1413),l=t(29439),a=t(47313),r=t(12019),s=t(47515),d=t(55768),u=t(45705),f=t(26824),h=t(59491),v=t(77181),Z=t(78508),m=t(23560),g=t(69658),p=t(74580),x=t(2717),j=t(97890),z=t(90954),k=t(24511),w=t(55940),b=t(53233),y=t(80314),C=t(13945),V=t(40225),_=t(73459),H=t(46417);n.default=function(){var e=(0,k.$)().t,n=(0,x.I0)(),t=(0,j.s0)(),I=(0,a.useContext)(p._).setIsModalVisible,S=(0,a.useState)(null),M=(0,l.Z)(S,2),N=M[0],O=M[1],A=(0,a.useState)(!1),P=(0,l.Z)(A,2),E=P[0],R=P[1],T=(0,a.useState)(null),W=(0,l.Z)(T,2),$=W[0],B=W[1],K=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,L=null===K||void 0===K?void 0:K.data,U={sort:null===L||void 0===L?void 0:L.sort,column:null===L||void 0===L?void 0:L.column,search:null!==L&&void 0!==L&&L.search?L.search:void 0,perPage:null===L||void 0===L?void 0:L.perPage,page:null===L||void 0===L?void 0:L.page},D=(0,x.v9)((function(e){return e.bookingZone}),x.wU),F=D.zone,q=D.meta,G=D.loading,J=(0,a.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:e("title"),dataIndex:"title",key:"title",render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title},is_show:!0},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:function(e,n){return(0,H.jsx)(u.Z,{children:(0,H.jsx)(f.Z,{src:n.img,alt:"img_gallery",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0},e+n.id)})}},{title:e("area"),dataIndex:"area",key:"area",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(i,o){return(0,H.jsxs)(u.Z,{children:[(0,H.jsx)(h.Z,{type:"primary",icon:(0,H.jsx)(r.Z,{}),onClick:function(){return function(i){n((0,z.bL)({url:"seller/booking/zone/".concat(i.id),id:"box_edit",name:e("edit.box")})),t("/seller/booking/zone/".concat(i.id))}(o)}}),(0,H.jsx)(w.Z,{icon:(0,H.jsx)(s.Z,{}),onClick:function(){O([o.id]),I(!0),B(!0)}})]})}}]),Q=(0,l.Z)(J,2),X=Q[0],Y=Q[1];(0,y.Z)((function(){n((0,V.eW)(U))}),[K.data]),(0,a.useEffect)((function(){K.refetch&&(n((0,V.eW)(U)),n((0,z.A_)(K)))}),[K.refetch]);var ee={selectedRowKeys:N,onChange:function(e){O(e)}};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(v.Z,{className:"p-0",children:(0,H.jsxs)(u.Z,{wrap:!0,className:"justify-content-end w-100",children:[(0,H.jsx)(w.Z,{size:"",onClick:function(){null===N||0===N.length?m.Am.warning(e("select.the.product")):(I(!0),B(!1))},children:e("delete.selected")}),(0,H.jsx)(h.Z,{type:"primary",icon:(0,H.jsx)(d.Z,{}),onClick:function(){n((0,z.bL)({id:"add-booking-zone",url:"seller/booking/zone/add",name:e("add.booking.zone")})),t("/seller/booking/zone/add")},children:e("add.booking.zone")}),(0,H.jsx)(b.Z,{columns:X,setColumns:Y})]})}),(0,H.jsx)(v.Z,{title:e("booking.zone"),children:(0,H.jsx)(Z.Z,{scroll:{x:!0},rowSelection:ee,columns:null===X||void 0===X?void 0:X.filter((function(e){return e.is_show})),dataSource:F,pagination:{pageSize:q.per_page,page:q.current_page,total:q.total},rowKey:function(e){return e.id},onChange:function(e,t,i){var o=e.pageSize,l=e.current,a=i.field,r=i.order,s=(0,C.Z)(r);n((0,z.nc)({activeMenu:K,data:(0,c.Z)((0,c.Z)({},L),{},{perPage:o,page:l,column:a,sort:s})}))},loading:G})}),(0,H.jsx)(g.Z,{click:function(){R(!0);var t=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(N.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));_.Z.delete(t).then((function(){m.Am.success(e("successfully.deleted")),n((0,V.eW)(U)),I(!1),B(null)})).finally((function(){return R(!1)}))},text:e($?"delete":"all.delete"),setText:O,loading:E})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),o=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},l=t(17469),a=function(e,n){return o.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};a.displayName="PlusCircleOutlined";var r=o.forwardRef(a)},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),o=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),a=function(e,n){return o.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};a.displayName="TableOutlined";var r=o.forwardRef(a)}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5946],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),r=t(45987),o=(t(47313),t(59491)),c=t(47515),l=t(23560),a=t(24511),d=t(79492),u=t(46417),s=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,p=(0,r.Z)(e,s),Z=(0,a.$)().t,m=(0,d.Z)().isDemo;return(0,u.jsx)(o.Z,(0,i.Z)({size:t,icon:(0,u.jsx)(c.Z,{}),onClick:function(e){m?l.Am.warning(Z("cannot.work.demo")):v(e)},type:h},p))}},53233:function(e,n,t){var i=t(1413),r=t(29439),o=t(47313),c=t(56140),l=t(67251),a=t(45705),d=t(86345),u=t(78267),s=t(37388),v=t(59491),f=t(99587),h=t(24511),p=t(46417),Z=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,m=e.style,y=e.size,x=void 0===y?"":y,g=e.iconOnly,w=(0,h.$)().t,j=(0,o.useState)(!1),k=(0,r.Z)(j,2),z=k[0],C=k[1],b=(0,p.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(l.Z.Item,{children:(0,p.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,p.jsx)(u.Z,{overlay:b,trigger:["click"],onVisibleChange:function(e){C(e)},visible:z,children:(0,p.jsx)(s.Z,{title:w("change.columns"),children:(0,p.jsx)(v.Z,{style:(0,i.Z)({},m),size:x,icon:(0,p.jsx)(f.Z,{}),children:g?null:w("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},84017:function(e,n,t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?"".concat(i," ").concat(n):"".concat(n," ").concat(i)}t.d(n,{Z:function(){return i}})},25946:function(e,n,t){t.r(n);var i=t(4942),r=t(93433),o=t(1413),c=t(29439),l=t(47313),a=t(45705),d=t(59491),u=t(77181),s=t(78508),v=t(97890),f=t(12019),h=t(47515),p=t(55768),Z=t(69658),m=t(74580),y=t(2717),x=t(90954),g=t(13719),w=t(94777),j=t(23560),k=t(24511),z=t(55940),C=t(53233),b=t(80314),V=t(13945),H=t(84017),I=t(46417);n.default=function(){var e,n,t,_=(0,k.$)().t,S=(0,y.I0)(),M=(0,v.s0)(),P=(0,l.useContext)(m._).setIsModalVisible,O=(0,l.useState)(!1),$=(0,c.Z)(O,2),A=$[0],N=$[1],E=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,R=(0,y.v9)((function(e){return e.deliveryPrice}),y.wU),T=R.deliveryPrice,U=R.meta,B=R.loading,K=R.params,L=(0,y.v9)((function(e){return e.currency}),y.wU).defaultCurrency,D=(0,l.useState)(null),F=(0,c.Z)(D,2),q=F[0],G=F[1],J=E.data,Q={perPage:null===J||void 0===J?void 0:J.perPage,page:null===J||void 0===J?void 0:J.page},W=(0,l.useState)([{title:_("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:_("country"),dataIndex:"country",key:"country",is_show:!0,render:function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)&&void 0!==n?n:"--"}},{title:_("region"),dataIndex:"region",key:"region",is_show:!0,render:function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)&&void 0!==n?n:"--"}},{title:_("city"),dataIndex:"city",key:"city",is_show:!0,render:function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)&&void 0!==n?n:"--"}},{title:_("area"),dataIndex:"area",key:"area",is_show:!0,render:function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)&&void 0!==n?n:"--"}},{title:_("price"),dataIndex:"price",key:"price",is_show:!0,render:function(e){return(0,H.Z)(e,null===L||void 0===L?void 0:L.symbol)}},{title:_("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,I.jsxs)(a.Z,{children:[(0,I.jsx)(d.Z,{type:"primary",icon:(0,I.jsx)(f.Z,{}),onClick:function(){return ne(n)}}),(0,I.jsx)(z.Z,{icon:(0,I.jsx)(h.Z,{}),onClick:function(){P(!0),G([n.id])}})]})}}]),X=(0,c.Z)(W,2),Y=X[0],ee=X[1],ne=function(e){S((0,x.bL)({url:"seller/delivery-price/".concat(e.id),id:"price.edit",name:_("edit.delivery.price")})),M("".concat(e.id))};(0,b.Z)((function(){S((0,w.rf)(Q))}),[E.data]),(0,l.useEffect)((function(){E.refetch&&(S((0,w.rf)(Q)),S((0,x.A_)(E)))}),[E.refetch]);var te={selectedRowKeys:q,onChange:function(e){G(e)}};return(0,I.jsxs)(u.Z,{title:_("delivery.price"),extra:(0,I.jsxs)(a.Z,{wrap:!0,children:[(0,I.jsx)(d.Z,{type:"primary",icon:(0,I.jsx)(p.Z,{}),onClick:function(){S((0,x.bL)({id:"delivery-price/add",url:"seller/delivery-price/add",name:_("add.delivery.price")})),M("add")},children:_("add.delivery.price")}),(0,I.jsx)(z.Z,{size:"",onClick:function(){null===q||0===q.length?j.Am.warning(_("select.the.product")):P(!0)},children:_("delete.selected")}),(0,I.jsx)(C.Z,{setColumns:ee,columns:Y})]}),children:[(0,I.jsx)(s.Z,{scroll:{x:!0},rowSelection:te,columns:null===Y||void 0===Y?void 0:Y.filter((function(e){return e.is_show})),dataSource:T,pagination:{pageSize:K.perPage,page:(null===(e=E.data)||void 0===e?void 0:e.page)||1,total:U.total,defaultCurrent:null===(n=E.data)||void 0===n?void 0:n.page,current:null===(t=E.data)||void 0===t?void 0:t.page},rowKey:function(e){return e.id},loading:B,onChange:function(e,n,t){var i=e.pageSize,r=e.current,c=t.field,l=t.order,a=(0,V.Z)(l);S((0,x.nc)({activeMenu:E,data:(0,o.Z)((0,o.Z)({},E.data),{},{perPage:i,page:r,column:c,sort:a})}))}}),(0,I.jsx)(Z.Z,{click:function(){N(!0);var e=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,r.Z)(q.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));g.Z.delete(e).then((function(){S((0,w.rf)({})),j.Am.success(_("successfully.deleted")),P(!1)})).finally((function(){N(!1)}))},text:_("delete"),loading:A,setText:G})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(1413),r=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),l=function(e,n){return r.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:o}))};l.displayName="PlusCircleOutlined";var a=r.forwardRef(l)},99587:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(1413),r=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),l=function(e,n){return r.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:o}))};l.displayName="TableOutlined";var a=r.forwardRef(l)}}]);
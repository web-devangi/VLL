"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3344],{55940:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),o=t(45987),a=(t(47313),t(59491)),c=t(47515),r=t(23560),l=t(24511),s=t(79492),d=t(46417),u=["size","onClick","type"];function h(e){var n=e.size,t=void 0===n?"":n,h=e.onClick,f=e.type,v=void 0===f?"default":f,p=(0,o.Z)(e,u),Z=(0,l.$)().t,g=(0,s.Z)().isDemo;return(0,d.jsx)(a.Z,(0,i.Z)({size:t,icon:(0,d.jsx)(c.Z,{}),onClick:function(e){g?r.Am.warning(Z("cannot.work.demo")):h(e)},type:v},p))}},53233:function(e,n,t){var i=t(1413),o=t(29439),a=t(47313),c=t(56140),r=t(67251),l=t(45705),s=t(86345),d=t(78267),u=t(37388),h=t(59491),f=t(99587),v=t(24511),p=t(46417),Z=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,g=e.style,m=e.size,x=void 0===m?"":m,j=e.iconOnly,w=(0,v.$)().t,y=(0,a.useState)(!1),z=(0,o.Z)(y,2),k=z[0],C=z[1],b=(0,p.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(r.Z.Item,{children:(0,p.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,p.jsx)(d.Z,{overlay:b,trigger:["click"],onVisibleChange:function(e){C(e)},visible:k,children:(0,p.jsx)(u.Z,{title:w("change.columns"),children:(0,p.jsx)(h.Z,{style:(0,i.Z)({},g),size:x,icon:(0,p.jsx)(f.Z,{}),children:j?null:w("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},13344:function(e,n,t){t.r(n);var i=t(4942),o=t(93433),a=t(1413),c=t(29439),r=t(47313),l=t(45705),s=t(66204),d=t(26824),u=t(59491),h=t(77181),f=t(78508),v=t(97421),p=t(97890),Z=t(12019),g=t(66407),m=t(47515),x=t(55768),j=t(69658),w=t(74580),y=t(2717),z=t(90954),k=t(61197),C=t(60692),b=t(23560),_=t(24511),V=t(55940),S=t(53233),H=t(80314),I=t(70816),M=t.n(I),N=t(13945),O=t(46417),P=["blue","red","gold","volcano","cyan","lime"];n.default=function(){var e,n,t,I=(0,_.$)().t,T=(0,y.I0)(),A=(0,p.s0)(),Y=(0,r.useContext)(w._).setIsModalVisible,D=(0,r.useState)(!1),E=(0,c.Z)(D,2),L=E[0],R=E[1],$=(0,r.useState)("published"),B=(0,c.Z)($,2),K=B[0],U=(B[1],(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu),q=(0,y.v9)((function(e){return e.shopTag}),y.wU),F=q.shopTag,G=q.meta,J=q.loading,Q=q.params,W=(0,r.useState)(null),X=(0,c.Z)(W,2),ee=X[0],ne=X[1],te=U.data,ie=(null===te||void 0===te?void 0:te.role)||K,oe={sort:null===te||void 0===te?void 0:te.sort,column:null===te||void 0===te?void 0:te.column,perPage:null===te||void 0===te?void 0:te.perPage,page:null===te||void 0===te?void 0:te.page,status:ie},ae=(0,r.useState)([{title:I("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:I("title"),dataIndex:"title",key:"title",is_show:!0,render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title}},{title:I("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,O.jsx)(l.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,O.jsx)(s.Z,{color:[P[n]],className:"text-uppercase",children:e})}))})}},{title:I("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,O.jsx)(d.Z,{src:v.bV+e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})}},{title:I("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return M()(e).format("YYYY-MM-DD")}},{title:I("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,O.jsxs)(l.Z,{children:[(0,O.jsx)(u.Z,{type:"primary",icon:(0,O.jsx)(Z.Z,{}),onClick:function(){return se(n)}}),(0,O.jsx)(u.Z,{icon:(0,O.jsx)(g.Z,{}),onClick:function(){return de(n)}}),(0,O.jsx)(V.Z,{icon:(0,O.jsx)(m.Z,{}),onClick:function(){Y(!0),ne([n.id])}})]})}}]),ce=(0,c.Z)(ae,2),re=ce[0],le=ce[1],se=function(e){T((0,z.bL)({url:"shop-tag/".concat(e.id),id:"shop_tag_edit",name:I("edit.shop.tag")})),A("/shop-tag/".concat(e.id))},de=function(e){T((0,z.bL)({url:"shop-tag/clone/".concat(e.id),id:"shop_tag_clone",name:I("clone.shop.tag")})),A("/shop-tag/clone/".concat(e.id))};(0,H.Z)((function(){T((0,C.S)(oe))}),[U.data]),(0,r.useEffect)((function(){U.refetch&&(T((0,C.S)(oe)),T((0,z.A_)(U)))}),[U.refetch]);var ue={selectedRowKeys:ee,onChange:function(e){ne(e)}};return(0,O.jsxs)(h.Z,{title:I("shop.tags"),extra:(0,O.jsxs)(l.Z,{wrap:!0,children:[(0,O.jsx)(u.Z,{type:"primary",icon:(0,O.jsx)(x.Z,{}),onClick:function(){T((0,z.bL)({id:"shop-tag/add",url:"shop-tag/add",name:I("add.shop.tag")})),A("/shop-tag/add")},children:I("add.tag")}),(0,O.jsx)(V.Z,{size:"",onClick:function(){null===ee||0===ee.length?b.Am.warning(I("select.the.product")):Y(!0)},children:I("delete.selected")}),(0,O.jsx)(S.Z,{setColumns:le,columns:re})]}),children:[(0,O.jsx)(f.Z,{scroll:{x:!0},rowSelection:ue,columns:null===re||void 0===re?void 0:re.filter((function(e){return e.is_show})),dataSource:F,pagination:{pageSize:Q.perPage,page:(null===(e=U.data)||void 0===e?void 0:e.page)||1,total:G.total,defaultCurrent:null===(n=U.data)||void 0===n?void 0:n.page,current:null===(t=U.data)||void 0===t?void 0:t.page},rowKey:function(e){return e.id},loading:J,onChange:function(e,n,t){var i=e.pageSize,o=e.current,c=t.field,r=t.order,l=(0,N.Z)(r);T((0,z.nc)({activeMenu:U,data:(0,a.Z)((0,a.Z)({},U.data),{},{perPage:i,page:o,column:c,sort:l})}))}}),(0,O.jsx)(j.Z,{click:function(){R(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(ee.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(e).then((function(){T((0,C.S)()),b.Am.success(I("successfully.deleted")),Y(!1)})).finally((function(){R(!1)}))},text:I("delete"),loading:L,setText:ne})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),o=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),r=function(e,n){return o.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};r.displayName="PlusCircleOutlined";var l=o.forwardRef(r)},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),o=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),r=function(e,n){return o.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};r.displayName="TableOutlined";var l=o.forwardRef(r)}}]);
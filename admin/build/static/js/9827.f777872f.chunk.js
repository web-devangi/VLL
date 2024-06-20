"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9827],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),a=t(45987),l=(t(47313),t(59491)),o=t(47515),r=t(23560),d=t(24511),c=t(79492),s=t(46417),u=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,p=(0,a.Z)(e,u),x=(0,d.$)().t,Z=(0,c.Z)().isDemo;return(0,s.jsx)(l.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(o.Z,{}),onClick:function(e){Z?r.Am.warning(x("cannot.work.demo")):v(e)},type:h},p))}},38628:function(e,n,t){var i=t(77181),a=t(14133),l=(t(47313),t(46417));n.Z=function(e){var n=e.loading;return(0,l.jsx)(i.Z,{className:"order-card",children:(0,l.jsx)(a.Z,{loading:n,avatar:!0,active:!0})})}},41481:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),a=t(29439),l=t(45987),o=t(47313),r=t(66672),d=t(16031),c=t(40765),s=t(46417),u=["handleChange","defaultValue","resetSearch"];function v(e){var n=e.handleChange,t=e.defaultValue,v=e.resetSearch,f=(0,l.Z)(e,u),h=(0,o.useState)(t),p=(0,a.Z)(h,2),x=p[0],Z=p[1],m=(0,o.useMemo)((function(){return(0,d.debounce)((function(e){n(e)}),800)}),[]);return(0,o.useEffect)((function(){Z(t)}),[v]),(0,s.jsx)(r.Z,(0,i.Z)({value:x,onChange:function(e){Z(e.target.value),m(e.target.value)},prefix:(0,s.jsx)(c.Z,{})},f))}},98501:function(e,n,t){t.d(n,{Q:function(){return i}});var i={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]}},17649:function(e,n,t){t.d(n,{Z:function(){return i}});t(97421);function i(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};var n=e.location.split(", ");return{lat:Number(null===n||void 0===n?void 0:n[0]),lng:Number(null===n||void 0===n?void 0:n[1])}}},84017:function(e,n,t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?"".concat(i," ").concat(n):"".concat(n," ").concat(i)}t.d(n,{Z:function(){return i}})},36311:function(e,n,t){var i=t(34344),a={orderExport:function(e,n){return i.Z.get("dashboard/user/export/order/".concat(e,"/pdf"),{params:n,responseType:"blob"})}};n.Z=a},75052:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(1413),a=t(29439),l=t(47313),o=t(10976),r=t(9274),d=t(59491),c=t(68197),s=t(59624),u=t(74294),v=t(2717),f=t(90046),h=t(90954),p=t(24511),x=t(46417);function Z(e){var n,t=e.orderDetails,Z=e.handleCancel,m=(0,p.$)().t,g=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,j=(0,v.v9)((function(e){return e.deliveryman}),v.wU).deliverymans,y=o.Z.useForm(),b=(0,a.Z)(y,1)[0],w=(0,v.I0)(),S=(0,l.useState)(!1),C=(0,a.Z)(S,2),k=C[0],_=C[1];return(0,x.jsx)(r.Z,{visible:!!t,title:t.title,onCancel:Z,footer:[(0,x.jsx)(d.Z,{type:"primary",onClick:function(){return b.submit()},loading:k,children:m("save")}),(0,x.jsx)(d.Z,{type:"default",onClick:Z,children:m("cancel")})],children:(0,x.jsx)(o.Z,{form:b,layout:"vertical",onFinish:function(e){var n=(0,i.Z)({},e);_(!0),f.Z.updateDelivery(t.id,n).then((function(){Z(),w((0,h.xo)(g))})).finally((function(){return _(!1)}))},initialValues:{deliveryman:null===(n=t.deliveryman)||void 0===n?void 0:n.id},children:(0,x.jsx)(c.Z,{gutter:12,children:(0,x.jsx)(s.Z,{span:24,children:(0,x.jsx)(o.Z.Item,{label:m("deliveryman"),name:"deliveryman",rules:[{required:!0,message:m("required")}],children:(0,x.jsx)(u.Z,{children:j.map((function(e,n){return(0,x.jsxs)(u.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)}))})})})})})})}},99827:function(e,n,t){t.r(n),t.d(n,{default:function(){return ve}});t(15861);var i=t(4942),a=t(93433),l=t(1413),o=t(29439),r=(t(87757),t(47313)),d=t(77181),c=t(45705),s=t(59491),u=t(97890),v=t(15386),f=t(2717),h=t(90954),p=t(24511),x=t(80314),Z=t(77242),m=t(41481),g=(t(58328),t(40197)),j=(t(55940),t(74580)),y=t(23560),b=t(90046),w=t(43773),S=t(93709),C=t(66204),k=t(58840),_=t(46417),H=function(e){var n=e.children,t=e.title,i=e.name,a=e.isDropDisabled,l=e.total,o=void 0===l?0:l,r=e.loading,d=void 0!==r&&r,s=e.reloadOrder,u=(0,p.$)().t;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S.Z,{message:(0,_.jsxs)(c.Z,{children:[(0,_.jsx)(w.Z,{size:20,style:{cursor:"pointer"},spin:d,onClick:s}),u(t),(0,_.jsx)(C.Z,{children:d?(0,_.jsx)(w.Z,{spin:!0}):o})]}),className:"mb-4 ".concat(i),style:{textAlign:"center",fontSize:16,textTransform:"capitalize"}}),(0,_.jsx)(k.bK,{droppableId:i,isDropDisabled:a,children:function(e){return(0,_.jsx)("div",{ref:e.innerRef,className:"h-screen",style:{opacity:a?.6:1},children:(0,_.jsxs)(_.Fragment,{children:[n,e.placeholder]})})}})]})},I=t(72652),z=t(7142),N=t(82508),V=t(98501),M=t(38628),D=t(30804),T=t(99587),A=t(45427),O=t(86949),P=t(91805),E=t(31741),F=t(39548),U=t(14133),B=t(45334),L=t(42346),$=t(97421),R=t(84017),Y=t(70816),q=t.n(Y),Q=t(58821),G=d.Z.Meta,K=function(e){var n,t,i,a,l,o,r,s=e.data,u=e.goToShow,v=e.loading,f=(0,p.$)().t,h=[{title:"Number of products",icon:(0,_.jsx)(D.Z,{}),data:null===s||void 0===s?void 0:s.order_details_count},{title:"Delivery type",icon:(0,_.jsx)(Q.qaI,{}),data:null===s||void 0===s?void 0:s.delivery_type},{title:"Table",icon:(0,_.jsx)(T.Z,{}),data:(null===s||void 0===s||null===(n=s.table)||void 0===n?void 0:n.name)||f("unspecified")},{title:"Amount",icon:(0,_.jsx)(A.Z,{}),data:(0,R.Z)(s.total_price,null===(t=s.currency)||void 0===t?void 0:t.symbol)},{title:"Payment type",icon:(0,_.jsx)(O.Z,{}),data:(null===(i=s.transaction)||void 0===i||null===(a=i.payment_system)||void 0===a?void 0:a.tag)||"-"},{title:"Created at",icon:(0,_.jsx)(P.Z,{}),data:q()(null===s||void 0===s?void 0:s.created_at).format("YYYY-MM-DD")||"-"}];return(0,_.jsx)(d.Z,{actions:[(0,_.jsx)(E.Z,{onClick:function(){return u(s)}},"setting")],className:"order-card",children:(0,_.jsxs)(U.Z,{loading:v,avatar:!0,active:!0,children:[(0,_.jsx)(G,{avatar:(0,_.jsx)(B.C,{src:$.bV+(null===(l=s.user)||void 0===l?void 0:l.img),icon:(0,_.jsx)(F.Z,{})}),description:"#".concat(s.id),title:"".concat((null===(o=s.user)||void 0===o?void 0:o.firstname)||"-"," ").concat((null===(r=s.user)||void 0===r?void 0:r.lastname)||"-")}),(0,_.jsx)(L.ZP,{itemLayout:"horizontal",dataSource:h,renderItem:function(e,n){return(0,_.jsx)(L.ZP.Item,{children:(0,_.jsxs)(c.Z,{children:[e.icon,"".concat(e.title,":  ").concat(e.data)]})},n)}})]})})},W=["new","accepted","ready","on_a_way","delivered","canceled"],J=function(e){e.goToEdit;var n=e.goToShow,t=e.fetchOrderAllItem,i=e.fetchOrders,a=(e.setLocationsMap,e.setId,e.setIsModalVisible,e.setText,e.setDowloadModal,e.setType,(0,f.I0)()),d=(0,f.v9)((function(e){return e.waiterOrder}),f.wU).items,c=(0,f.v9)((function(e){return e.waiterOrder}),f.wU),s=(0,r.useState)(""),u=(0,o.Z)(s,2),v=u[0],h=u[1],p=(0,r.useState)({}),x=(0,o.Z)(p,2),m=x[0],g=x[1],j=(0,r.useState)({}),w=(0,o.Z)(j,2),S=w[0],C=w[1],D=function(e){if(e.destination){var n,t;e.destination&&m.source.droppableId!==e.destination.droppableId&&(n=e.draggableId,t={status:e.destination.droppableId},b.Z.updateStatus(n,t).then((function(e){y.Am.success("#".concat(n," order status changed"))})));var i=(0,l.Z)({},d),r=function(e,n){var t=Array.from(e),i=t.splice(n,1);return[(0,o.Z)(i,1)[0],t]}(i[e.source.droppableId],e.source.index),c=(0,o.Z)(r,2),s=c[0],u=c[1];i[e.source.droppableId]=u;var v=i[e.destination.droppableId];i[e.destination.droppableId]=function(e,n,t){var i=Array.from(e);return i.splice(n,0,t),i}(v,e.destination.index,s),a((0,Z.U7)(i)),C(null)}},T=function(e){return(0!==e||S!==W.length-1)&&!!Boolean(S>e)};(0,r.useEffect)((function(){a((0,Z.H5)()),t()}),[]);return(0,_.jsx)(k.Z5,{onDragEnd:D,onDragStart:function(e){var n=W.findIndex((function(n){return n===e.source.droppableId}));g(e),C(n)},children:(0,_.jsx)("div",{className:"order-board",children:null===W||void 0===W?void 0:W.map((function(e,t){var o,r,s,u;return(0,_.jsx)("div",{className:"dnd-column",children:(0,_.jsx)(H,{title:e,onDragEnd:D,name:e,isDropDisabled:T(t),total:null===(o=d[e])||void 0===o?void 0:o.length,loading:c[e].loading,reloadOrder:function(){return function(e){a((0,Z.x9)(e)),i({status:e})}(e)},children:(0,_.jsxs)(z.ZP,{onScroll:function(n){return function(e,n){var t=e.target.lastChild,a=e.target.clientHeight+e.target.scrollTop;t&&a>t.offsetTop+t.clientHeight+19.9&&c[n].meta.last_page>c[n].meta.current_page&&!c[n].loading&&(h(n),i({page:c[n].meta.current_page+1,perPage:5,status:n}))}(n,e)},autoHeight:!0,autoHeightMin:"75vh",autoHeightMax:"75vh",autoHide:!0,id:e,children:[Boolean(c[e].loading&&!(null!==(r=d[e])&&void 0!==r&&r.length))?null===(u=V.Q[e])||void 0===u?void 0:u.map((function(){return(0,_.jsx)(M.Z,{loading:!0})})):null===(s=d[e])||void 0===s?void 0:s.map((function(e,t){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(k._l,{draggableId:e.id.toString(),index:t,children:function(t,i){return(0,_.jsx)("div",(0,l.Z)((0,l.Z)((0,l.Z)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:(0,_.jsx)(K,{data:e,goToShow:n})}))}},e.id)})})),c[e].loading&&e===v&&(0,_.jsx)(I.Z,{indicator:(0,_.jsx)(N.Z,{style:{fontSize:24},spin:!0})})]})})},e)}))})})},X=t(75052),ee=(t(73270),t(36967)),ne=t(36311),te=t(83334),ie=t.n(te),ae=t(51282),le=t(9274),oe=t(68197),re=t(59624),de=t(57864),ce=d.Z.Meta,se=function(e){var n=e.id,t=e.handleCancel,i=(0,r.useState)(null),a=(0,o.Z)(i,2),l=a[0],c=a[1],v=(0,p.$)().t,f=(0,u.s0)();return(0,_.jsx)(_.Fragment,{children:l?(0,_.jsx)(ae.Z,{}):(0,_.jsx)(le.Z,{visible:!!n,title:v("selected.download"),closable:!1,handleCancel:t,footer:[(0,_.jsx)(s.Z,{type:"default",onClick:t,children:v("cancel")},"cancelBtn")],children:(0,_.jsxs)(oe.Z,{children:[(0,_.jsx)(re.Z,{span:12,children:(0,_.jsx)(d.Z,{title:v("download.pdf"),onClick:function(){return function(e){c(!0),ne.Z.orderExport(e).then((function(n){ie()(n,"invoice_".concat(e,".pdf"),"application/pdf"),t()})).finally((function(){return c(!1)}))}(n)},className:"text-center cursor-pointer",children:(0,_.jsx)(ce,{className:"d-flex align-items-center justify-content-center",title:(0,_.jsx)(Q._JY,{size:80})})})}),(0,_.jsx)(re.Z,{span:12,children:(0,_.jsx)(d.Z,{title:v("download.check"),onClick:function(){return function(e){f("/waiter/generate-invoice/".concat(e))}(n)},className:"text-center cursor-pointer",children:(0,_.jsx)(ce,{className:"d-flex align-items-center justify-content-center",title:(0,_.jsx)(de.ih9,{size:85})})})})]})})})},ue=t(69658);function ve(){var e=(0,f.I0)(),n=(0,u.s0)(),t=(0,p.$)().t,w=(0,r.useState)(null),S=(0,o.Z)(w,2),C=S[0],k=S[1],H=(0,r.useContext)(j._).setIsModalVisible,I=(0,r.useState)(null),z=(0,o.Z)(I,2),N=z[0],V=z[1],M=(0,r.useState)(!1),D=(0,o.Z)(M,2),T=D[0],A=D[1],O=(0,r.useState)(null),P=(0,o.Z)(O,2),E=P[0],F=P[1],U=(0,r.useState)(null),B=(0,o.Z)(U,2),L=B[0],$=B[1],R=(0,r.useState)(null),Y=(0,o.Z)(R,2),q=Y[0],Q=Y[1],G=(0,r.useState)(null),K=(0,o.Z)(G,2),W=K[0],ne=K[1],te=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,ie=null===te||void 0===te?void 0:te.data,ae={search:null===ie||void 0===ie?void 0:ie.search,perPage:(null===ie||void 0===ie?void 0:ie.perPage)||5,page:(null===ie||void 0===ie?void 0:ie.page)||1,user_id:null===ie||void 0===ie?void 0:ie.userId,status:null===ie||void 0===ie?void 0:ie.status};(0,x.Z)((function(){e((0,Z.H5)()),oe()}),[ie]),(0,r.useEffect)((function(){null!==te&&void 0!==te&&te.refetch&&(e((0,Z.AU)(ae)),e((0,g.ZL)()),e((0,h.A_)(te)))}),[null===te||void 0===te?void 0:te.refetch]);var le=function(n){var t=(0,l.Z)((0,l.Z)({},ae),n);switch(n.status){case"new":e((0,Z.O7)(t));break;case"accepted":e((0,Z.We)(t));break;case"ready":e((0,Z.wC)(t));break;case"on_a_way":e((0,Z.Ri)(t));break;case"delivered":e((0,Z.Rd)(t));break;case"canceled":e((0,Z.eV)(t));break;default:console.log("Sorry, we are out of")}},oe=function(){le({status:"new"}),le({status:"accepted"}),le({status:"ready"}),le({status:"on_a_way"}),le({status:"delivered"}),le({status:"canceled"})},re=function(){Q(null),F(null),$(null)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.Z,{children:(0,_.jsxs)(c.Z,{wrap:!0,children:[(0,_.jsx)(m.Z,{placeholder:t("search"),resetSearch:!(null!==ie&&void 0!==ie&&ie.search),handleChange:function(n){return t=n,a="search",e((0,Z.H5)()),void e((0,h.nc)({activeMenu:te,data:(0,l.Z)((0,l.Z)({},ie),{},(0,i.Z)({},a,t))}));var t,a},defaultValue:null===ie||void 0===ie?void 0:ie.search}),(0,_.jsx)(s.Z,{icon:(0,_.jsx)(v.Z,{}),onClick:function(){(0,f.dC)((function(){e((0,Z.H5)()),e((0,h.nc)({activeMenu:te,data:null}))})),oe()},children:t("clear")})]})}),(0,_.jsx)(J,{goToShow:function(i){e((0,h.bL)({url:"waiter/order/details/".concat(i.id),id:"order_details",name:t("order.details")})),n("/waiter/order/details/".concat(i.id))},fetchOrderAllItem:oe,fetchOrders:le,setLocationsMap:F,setId:k,setIsModalVisible:H,setText:V,setDowloadModal:$,type:W,setType:ne}),(0,_.jsx)(ue.Z,{click:function(){A(!0);var n=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(C.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));b.Z.delete(n).then((function(){e((0,Z.H5)()),y.Am.success(t("successfully.deleted")),H(!1),oe({status:W}),V(null)})).finally((function(){return A(!1)}))},text:t(N?"delete":"all.delete"),loading:T,setText:k,setActive:k}),q&&(0,_.jsx)(X.Z,{orderDetails:q,handleCancel:re}),E&&(0,_.jsx)(ee.Z,{id:E,handleCancel:re}),L&&(0,_.jsx)(se,{id:L,handleCancel:re})]})}},36967:function(e,n,t){var i=t(29439),a=t(84697),l=t(83999),o=t(9274),r=t(59491),d=t(77181),c=t(68197),s=t(59624),u=t(66204),v=t(47313),f=t(24511),h=t(90046),p=t(51282),x=t(58821),Z=t(2717),m=t(97421),g=t(18478),j=t(84618),y=t(17649),b=t(66461),w=t(22539),S=t(3394),C=t(57864),k=t(46417),_=l.Z.Step,H=function(){return(0,k.jsx)("img",{src:g,width:"50",alt:"Pin"})},I=function(){return(0,k.jsx)("img",{src:j,width:"50",alt:"Pin"})},z=["blue","red","gold","volcano","cyan","lime"];n.Z=function(e){var n,t,g,j,N,V,M=e.id,D=e.handleCancel,T=(0,f.$)().t,A=(0,v.useState)(null),O=(0,i.Z)(A,2),P=O[0],E=O[1],F=(0,v.useState)(null),U=(0,i.Z)(F,2),B=U[0],L=U[1],$=(0,v.useState)(null),R=(0,i.Z)($,2),Y=R[0],q=R[1],Q=(0,Z.v9)((function(e){return e.globalSettings}),Z.wU).settings,G=(0,y.Z)(Q),K=(0,v.useState)(0),W=(0,i.Z)(K,2),J=W[0],X=W[1],ee=(0,v.useState)((0,y.Z)(Q)),ne=(0,i.Z)(ee,2),te=ne[0],ie=ne[1],ae=(0,v.useState)((0,y.Z)(Q)),le=(0,i.Z)(ae,2),oe=le[0],re=le[1],de=(0,v.useState)([{id:0,name:"new",icon:(0,k.jsx)(b.Z,{})},{id:1,name:"accepted",icon:(0,k.jsx)(x.IQF,{})},{id:2,name:"ready",icon:(0,k.jsx)(w.TkG,{})},{id:3,name:"on_a_way",icon:(0,k.jsx)(S.Akc,{})},{id:4,name:"delivered",icon:(0,k.jsx)(S.kme,{})}]),ce=(0,i.Z)(de,2),se=ce[0],ue=ce[1];var ve=(0,Z.v9)((function(e){return e.globalSettings.settings}),Z.wU).google_map_key;(0,v.useEffect)((function(){E(!0),h.Z.getById(M).then((function(e){var n,t=e.data;ue("canceled"===t.status?[{id:1,name:"new",icon:(0,k.jsx)(b.Z,{})},{id:5,name:"canceled",icon:(0,k.jsx)(C.SV5,{})}]:se),X("canceled"===t.status?1:null===(n=se.find((function(e){return e.name===t.status})))||void 0===n?void 0:n.id),q("canceled"===t.status?"error":"success"),L(t),re({lat:t.location.latitude,lng:t.location.longitude}),ie({lat:t.shop.location.latitude,lng:t.shop.location.longitude})})).finally((function(){E(!1)}))}),[]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(o.Z,{visible:!!M,title:T("show.locations"),closable:!0,onCancel:D,style:{minWidth:"80vw"},footer:[(0,k.jsx)(r.Z,{type:"default",onClick:D,children:T("cancel")},"cancelBtn")],children:P?(0,k.jsx)(p.Z,{}):(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(l.Z,{current:J,status:Y,className:"mb-5",children:null===se||void 0===se?void 0:se.map((function(e,n){return(0,k.jsx)(_,{title:T(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+n)}))}),(0,k.jsxs)(c.Z,{gutter:12,children:[(0,k.jsxs)(s.Z,{span:12,children:[(0,k.jsxs)("h3",{children:[T("order.id")," #",null===B||void 0===B?void 0:B.id]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(x.D73,{})," ",null===B||void 0===B?void 0:B.created_at]}),(0,k.jsxs)("p",{children:[T("schedulet.at")," ",null===B||void 0===B?void 0:B.delivery_date]}),(0,k.jsxs)("span",{children:[(0,k.jsx)("strong",{children:null===B||void 0===B||null===(n=B.shop)||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title})," ",null===B||void 0===B||null===(g=B.details)||void 0===g?void 0:g.map((function(e,n){var t;return(0,k.jsx)(u.Z,{className:"mb-2",color:z[n],children:null===e||void 0===e||null===(t=e.stock)||void 0===t?void 0:t.product.translation.title})}))]})]}),(0,k.jsxs)(s.Z,{span:12,children:[(0,k.jsxs)("p",{children:[T("status")," ","new"===(null===B||void 0===B?void 0:B.status)?(0,k.jsx)(u.Z,{color:"blue",children:T(null===B||void 0===B?void 0:B.status)}):"canceled"===(null===B||void 0===B?void 0:B.status)?(0,k.jsx)(u.Z,{color:"error",children:T(null===B||void 0===B?void 0:B.status)}):(0,k.jsx)(u.Z,{color:"cyan",children:T(null===B||void 0===B?void 0:B.status)})]}),(0,k.jsxs)("p",{children:[T("payment.method")," ",(0,k.jsx)("strong",{children:null===B||void 0===B||null===(j=B.transaction)||void 0===j||null===(N=j.payment_system)||void 0===N?void 0:N.tag})]}),(0,k.jsxs)("p",{children:[T("order.type")," ",(0,k.jsx)("strong",{children:null===B||void 0===B?void 0:B.delivery_type})]}),(0,k.jsxs)("p",{children:[T("payment.type")," ",(0,k.jsx)("strong",{children:null===B||void 0===B||null===(V=B.transaction)||void 0===V?void 0:V.status})]})]}),(0,k.jsxs)(s.Z,{span:24,className:"mt-5",children:[(0,k.jsx)("h4",{children:T("map")}),(0,k.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,k.jsxs)(a.ZP,{bootstrapURLKeys:{key:ve||m.kr},defaultZoom:14,center:G,options:{fullscreenControl:!1},onGoogleApiLoaded:function(e){for(var n=e.map,t=e.maps,i=[te,oe].map((function(e){return{lat:Number(e.lat||"0"),lng:Number(e.lng||"0")}})),a=new t.LatLngBounds,l=0;l<i.length;l++)a.extend(i[l]);n.fitBounds(a)},children:[(0,k.jsx)(I,{lat:null===te||void 0===te?void 0:te.lat,lng:null===te||void 0===te?void 0:te.lng}),(0,k.jsx)(H,{lat:null===oe||void 0===oe?void 0:oe.lat,lng:null===oe||void 0===oe?void 0:oe.lng})]})})]})]})]})})})}},30804:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),a=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"},o=t(17469),r=function(e,n){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};r.displayName="ContainerOutlined";var d=a.forwardRef(r)},99587:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),a=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),r=function(e,n){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};r.displayName="TableOutlined";var d=a.forwardRef(r)},84618:function(e,n,t){e.exports=t.p+"static/media/shop.46d7a94ca800c711764a.png"},18478:function(e,n,t){e.exports=t.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);
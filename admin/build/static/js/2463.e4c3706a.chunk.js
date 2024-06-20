"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2463],{89281:function(e,n,t){t.d(n,{h:function(){return f}});var i=t(1413),l=t(29439),a=t(45987),o=t(47313),r=t(12279),s=t.n(r),d=t(74294),c=t(72652),u=t(46417),v=["fetchOptions","debounceTimeout","onClear","refetchOptions"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,r=void 0===t?400:t,f=e.onClear,h=e.refetchOptions,p=void 0!==h&&h,m=(0,a.Z)(e,v),x=(0,o.useState)(!1),Z=(0,l.Z)(x,2),j=Z[0],g=Z[1],y=(0,o.useState)([]),b=(0,l.Z)(y,2),S=b[0],w=b[1],C=(0,o.useMemo)((function(){return s()((function(e){w([]),g(!0),n(e).then((function(e){w(e),g(!1)}))}),r)}),[n,r]);return(0,u.jsx)(d.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:C,onClear:function(){C(""),f&&f()},notFoundContent:j?(0,u.jsx)(c.Z,{size:"small"}):"no results"},m),{},{options:S,onFocus:function(){S.length&&!p||C("")}}))}},17649:function(e,n,t){t.d(n,{Z:function(){return i}});t(97421);function i(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};var n=e.location.split(", ");return{lat:Number(null===n||void 0===n?void 0:n[0]),lng:Number(null===n||void 0===n?void 0:n[1])}}},84017:function(e,n,t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?"".concat(i," ").concat(n):"".concat(n," ").concat(i)}t.d(n,{Z:function(){return i}})},55508:function(e,n,t){var i=t(39180),l=(t(47313),t(58821)),a=t(54972),o=t(97890),r=t(46417),s=[{value:"seller/orders-board",title:"Board",icon:(0,r.jsx)(a.Ez2,{size:20})},{value:"seller/orders",title:"List",icon:(0,r.jsx)(l.Ps6,{size:20})}];n.Z=function(e){var n=e.listType,t=(0,o.UO)().type,l=(0,o.s0)();return(0,r.jsx)(i.ZP.Group,{value:n,onChange:function(e){l("/".concat(e.target.value).concat(t?"/".concat(t):""))},className:"float-right",buttonStyle:"solid",children:null===s||void 0===s?void 0:s.map((function(e){return(0,r.jsx)(i.ZP.Button,{value:e.value,children:(0,r.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"10px"},children:[e.icon,e.title]})},e.value)}))})}},88852:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(29439),l=t(47313),a=t(10976),o=t(9274),r=t(59491),s=t(68197),d=t(59624),c=t(2717),u=t(62412),v=t(90954),f=t(24511),h=t(94291),p=t(89281),m=t(58328),x=t(46417);function Z(e){var n,t=e.orderDetails,Z=e.handleCancel,j=(0,f.$)().t,g=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,y=((0,c.v9)((function(e){return e.deliveryman}),c.wU).deliverymans,a.Z.useForm()),b=(0,i.Z)(y,1)[0],S=(0,c.I0)(),w=(0,l.useState)(!1),C=(0,i.Z)(w,2),_=C[0],D=C[1];(0,l.useEffect)((function(){S((0,h.EH)())}),[]);return(0,x.jsx)(o.Z,{visible:!!t,title:t.title,onCancel:Z,footer:[(0,x.jsx)(r.Z,{type:"primary",onClick:function(){return b.submit()},loading:_,children:j("save")}),(0,x.jsx)(r.Z,{type:"default",onClick:Z,children:j("cancel")})],children:(0,x.jsx)(a.Z,{form:b,layout:"vertical",onFinish:function(e){var n={deliveryman:e.deliveryman.value};D(!0),u.Z.updateDelivery(t.id,n).then((function(){Z(),S((0,v.xo)(g))})).finally((function(){return D(!1)}))},initialValues:{deliveryman:null===(n=t.deliveryman)||void 0===n?void 0:n.id},children:(0,x.jsx)(s.Z,{gutter:12,children:(0,x.jsx)(d.Z,{span:24,children:(0,x.jsx)(a.Z.Item,{label:j("deliveryman"),name:"deliveryman",rules:[{required:!0,message:j("required")}],children:(0,x.jsx)(p.h,{fetchOptions:function(e){var n={perPage:10,page:1,search:e};return m.Z.getDeliverymans(n).then((function(e){return e.data.map((function(e){return{label:e.firstname,value:e.id}}))}))}})})})})})})}},62463:function(e,n,t){t.r(n),t.d(n,{default:function(){return De}});var i=t(15861),l=t(4942),a=t(93433),o=t(1413),r=t(29439),s=t(87757),d=t.n(s),c=t(47313),u=t(99096),v=t(45705),f=t(59491),h=t(77181),p=t(97890),m=t(55768),x=t(15386),Z=t(2717),j=t(90954),g=t(24511),y=t(80314),b=t(41589),S=t(41481),w=t(89281),C=t(58328),_=t(40197),D=t(74580),M=t(23560),k=t(62412),I=t(43773),T=t(93709),O=t(66204),Y=t(58840),H=t(46417),N=function(e){var n=e.children,t=e.title,i=e.name,l=e.isDropDisabled,a=e.total,o=void 0===a?0:a,r=e.loading,s=void 0!==r&&r,d=e.reloadOrder,c=(0,g.$)().t;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(T.Z,{message:(0,H.jsxs)(v.Z,{children:[(0,H.jsx)(I.Z,{size:20,style:{cursor:"pointer"},spin:s,onClick:d}),c(t),(0,H.jsx)(O.Z,{children:s?(0,H.jsx)(I.Z,{spin:!0}):o})]}),className:"mb-4 ".concat(i),style:{textAlign:"center",fontSize:16,textTransform:"capitalize"}}),(0,H.jsx)(Y.bK,{droppableId:i,isDropDisabled:l,children:function(e){return(0,H.jsx)("div",{ref:e.innerRef,className:"h-screen",style:{opacity:l?.6:1},children:(0,H.jsxs)(H.Fragment,{children:[n,e.placeholder]})})}})]})},z=t(72652),P=t(7142),V=t(82508),E=t(98501),F=t(38628),U=t(30804),A=t(60931),L=t(45427),B=t(86949),R=t(35529),$=t(91805),K=t(31741),W=t(47515),q=t(6986),G=t(39548),J=t(14133),Q=t(45334),X=t(42346),ee=t(97421),ne=t(84017),te=t(70816),ie=t.n(te),le=t(5958),ae=t(79492),oe=h.Z.Meta,re=function(e){var n,t,i,l,a,o,r,s,d,c,u=e.data,f=e.goToShow,p=e.loading,m=e.setLocationsMap,x=e.setId,Z=e.setIsModalVisible,j=e.setText,y=e.setDowloadModal,b=e.setType,S=e.orderType,w=(0,ae.Z)(),C=w.isDemo,_=w.demoFunc,D=(0,g.$)().t,M=[{title:"Number of products",icon:(0,H.jsx)(U.Z,{}),data:null===u||void 0===u?void 0:u.order_details_count},{title:S?"Table":"Deliveryman",icon:(0,H.jsx)(A.Z,{}),data:S?"".concat((null===u||void 0===u||null===(n=u.table)||void 0===n?void 0:n.name)||"-"):"".concat((null===(t=u.deliveryman)||void 0===t?void 0:t.firstname)||"-"," ").concat((null===(i=u.deliveryman)||void 0===i?void 0:i.lastname)||"-")},{title:"Amount",icon:(0,H.jsx)(L.Z,{}),data:(0,ne.Z)(u.total_price,null===(l=u.currency)||void 0===l?void 0:l.symbol)},{title:"Payment type",icon:(0,H.jsx)(B.Z,{}),data:(null===(a=u.transaction)||void 0===a||null===(o=a.payment_system)||void 0===o?void 0:o.tag)||"-"},{title:"Payment status",icon:(0,H.jsx)(R.Z,{}),data:(null===(r=u.transaction)||void 0===r?void 0:r.status)||"-"},{title:D("delivery.type"),icon:(0,H.jsx)($.Z,{}),data:(null===u||void 0===u?void 0:u.delivery_type)||"-"},{title:"Delivery date",icon:(0,H.jsx)($.Z,{}),data:ie()(null===u||void 0===u?void 0:u.delivery_date).format("YYYY-MM-DD")||"-"},{title:"Created at",icon:(0,H.jsx)($.Z,{}),data:ie()(null===u||void 0===u?void 0:u.created_at).format("YYYY-MM-DD")||"-"}];return(0,H.jsx)(h.Z,{actions:[(0,H.jsx)(le.Y4r,{size:20,onClick:function(e){e.stopPropagation(),m(u.id)}}),(0,H.jsx)(K.Z,{onClick:function(){return f(u)}},"setting"),(0,H.jsx)(W.Z,{onClick:function(e){C?_():(e.stopPropagation(),x([u.id]),Z(!0),j(!0),b(u.status))}}),(0,H.jsx)(q.Z,{onClick:function(){return y(u.id)}},"ellipsis")],className:"order-card",children:(0,H.jsxs)(J.Z,{loading:p,avatar:!0,active:!0,children:[(0,H.jsx)(oe,{avatar:(0,H.jsx)(Q.C,{src:ee.bV+(null===(s=u.user)||void 0===s?void 0:s.img),icon:(0,H.jsx)(G.Z,{})}),description:"#".concat(u.id),title:null!==u&&void 0!==u&&u.user?"".concat((null===(d=u.user)||void 0===d?void 0:d.firstname)||"-"," ").concat((null===(c=u.user)||void 0===c?void 0:c.lastname)||"-"):D("deleted.user")}),(0,H.jsx)(X.ZP,{itemLayout:"horizontal",dataSource:M,renderItem:function(e,n){return(0,H.jsx)(X.ZP.Item,{children:(0,H.jsxs)(v.Z,{children:[e.icon,"".concat(e.title,":  ").concat(e.data)]})},n)}})]})})},se=t(51282),de=t(59511),ce=function(e){var n=e.goToEdit,t=e.goToShow,i=e.fetchOrderAllItem,l=e.fetchOrders,a=e.setLocationsMap,s=e.setId,d=e.setIsModalVisible,u=e.setText,v=e.setDowloadModal,f=e.setType,h=e.orderType,p=(0,Z.I0)(),m=(0,Z.v9)((function(e){return e.orderStatus}),Z.wU),x=m.statusList,j=m.loading,g=null===x||void 0===x?void 0:x.map((function(e){return null===e||void 0===e?void 0:e.name})),y=(0,Z.v9)((function(e){return e.sellerOrders}),Z.wU).items,S=(0,Z.v9)((function(e){return e.myShop}),Z.wU).isEnabledStatusChange,w=(0,Z.v9)((function(e){return e.sellerOrders}),Z.wU),C=(0,c.useState)(""),_=(0,r.Z)(C,2),D=_[0],I=_[1],T=(0,c.useState)({}),O=(0,r.Z)(T,2),U=O[0],A=O[1],L=(0,c.useState)({}),B=(0,r.Z)(L,2),R=B[0],$=B[1],K=(0,c.useState)(null),W=(0,r.Z)(K,2),q=W[0],G=W[1],J=(0,c.useState)(""),Q=(0,r.Z)(J,2),X=Q[0],ee=Q[1],ne=(0,c.useState)({}),te=(0,r.Z)(ne,2),ie=te[0],le=te[1],ae=function(e){var n=(0,o.Z)({},y),t=function(e,n){var t=Array.from(e),i=t.splice(n,1);return[(0,r.Z)(i,1)[0],t]}(n[e.source.droppableId],e.source.index),i=(0,r.Z)(t,2),l=i[0],a=i[1];n[e.source.droppableId]=a;var s=n[e.destination.droppableId];n[e.destination.droppableId]=function(e,n,t){var i=Array.from(e);return i.splice(n,0,t),i}(s,e.destination.index,l),p((0,b.U7)(n)),$(null)},oe=function(e){var n,t;e.destination&&(le(e),"pause"===e.destination.droppableId?(ee("pause"),G(e.draggableId)):e.destination&&U.source.droppableId!==e.destination.droppableId&&(n=e.draggableId,t={status:e.destination.droppableId},k.Z.updateStatus(n,t).then((function(){M.Am.success("#".concat(n," order status changed"))})),ae(e)))},ce=function(e){return(0!==e||R!==(null===g||void 0===g?void 0:g.length)-1)&&Boolean(R>e)};(0,c.useEffect)((function(){p((0,b.H5)()),i()}),[]);return(0,H.jsxs)(H.Fragment,{children:[j?(0,H.jsx)("div",{children:(0,H.jsx)(se.Z,{})}):(0,H.jsx)(Y.Z5,{onDragEnd:oe,onDragStart:function(e){var n=null===g||void 0===g?void 0:g.findIndex((function(n){var t;return n===(null===e||void 0===e||null===(t=e.source)||void 0===t?void 0:t.droppableId)}));A(e),$(n)},children:(0,H.jsx)("div",{className:"order-board",children:null===g||void 0===g?void 0:g.map((function(e,i){var r,c,m,x,Z,j,g;return(0,H.jsx)("div",{className:"dnd-column",children:(0,H.jsx)(N,{title:e,onDragEnd:oe,name:e,isDropDisabled:ce(i),total:null===(r=y[e])||void 0===r?void 0:r.length,loading:null===(c=w[e])||void 0===c?void 0:c.loading,reloadOrder:function(){return function(e){p((0,b.x9)(e)),l({status:e})}(e)},children:(0,H.jsxs)(P.ZP,{onScroll:function(n){return function(e,n){var t,i=e.target.lastChild,a=e.target.clientHeight+e.target.scrollTop;i&&a>i.offsetTop+i.clientHeight+19.9&&w[n].meta.last_page>w[n].meta.current_page&&(null===(t=w[n])||void 0===t||!t.loading)&&(I(n),l({page:w[n].meta.current_page+1,perPage:5,status:n}))}(n,e)},autoHeight:!0,autoHeightMin:"75vh",autoHeightMax:"75vh",autoHide:!0,id:e,children:[Boolean((null===(m=w[e])||void 0===m?void 0:m.loading)&&!(null!==(x=y[e])&&void 0!==x&&x.length))?null===(j=E.Q[e])||void 0===j?void 0:j.map((function(){return(0,H.jsx)(F.Z,{loading:!0})})):null===(Z=y[e])||void 0===Z?void 0:Z.map((function(e,i){return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(Y._l,{draggableId:e.id.toString(),index:i,isDragDisabled:!S,children:function(i){return(0,H.jsx)("div",(0,o.Z)((0,o.Z)((0,o.Z)({ref:i.innerRef},i.draggableProps),i.dragHandleProps),{},{children:(0,H.jsx)(re,{data:e,goToEdit:n,goToShow:t,setLocationsMap:a,setId:s,setIsModalVisible:d,setText:u,setDowloadModal:v,setType:f,orderType:h})}))}},e.id)})})),(null===(g=w[e])||void 0===g?void 0:g.loading)&&e===D&&(0,H.jsx)(z.Z,{indicator:(0,H.jsx)(V.Z,{style:{fontSize:24},spin:!0})})]})})},e)}))})}),q&&(0,H.jsx)(de.Z,{result:ie,changeColumnData:ae,statusChangedOrder:q,setStatusChangedOrder:G,modalNoteType:X})]})},ue=t(88852),ve=t(55508),fe=t(73270),he=t(72944),pe=t(36311),me=t(83334),xe=t.n(me),Ze=t(9274),je=t(68197),ge=t(59624),ye=t(58821),be=t(57864),Se=h.Z.Meta,we=function(e){var n=e.id,t=e.handleCancel,i=(0,c.useState)(null),l=(0,r.Z)(i,2),a=l[0],o=l[1],s=(0,g.$)().t,d=(0,p.s0)();return(0,H.jsx)(H.Fragment,{children:a?(0,H.jsx)(se.Z,{}):(0,H.jsx)(Ze.Z,{visible:!!n,title:s("selected.download"),closable:!1,handleCancel:t,footer:[(0,H.jsx)(f.Z,{type:"default",onClick:t,children:s("cancel")},"cancelBtn")],children:(0,H.jsxs)(je.Z,{children:[(0,H.jsx)(ge.Z,{span:12,children:(0,H.jsx)(h.Z,{title:s("download.pdf"),onClick:function(){return function(e){o(!0),pe.Z.orderExport(e).then((function(n){xe()(n,"invoice_".concat(e,".pdf"),"application/pdf"),t()})).finally((function(){return o(!1)}))}(n)},className:"text-center cursor-pointer",children:(0,H.jsx)(Se,{className:"d-flex align-items-center justify-content-center",title:(0,H.jsx)(ye._JY,{size:80})})})}),(0,H.jsx)(ge.Z,{span:12,children:(0,H.jsx)(h.Z,{title:s("download.check"),onClick:function(){return function(e){d("/seller/generate-invoice/".concat(e))}(n)},className:"text-center cursor-pointer",children:(0,H.jsx)(Se,{className:"d-flex align-items-center justify-content-center",title:(0,H.jsx)(be.ih9,{size:85})})})})]})})})},Ce=t(69658),_e=u.Z.RangePicker;function De(){var e,n=(0,Z.I0)(),t=(0,p.s0)(),s=(0,g.$)().t,u=(0,c.useState)(null),I=(0,r.Z)(u,2),T=I[0],O=I[1],Y=(0,c.useContext)(D._).setIsModalVisible,N=(0,c.useState)(null),z=(0,r.Z)(N,2),P=z[0],V=z[1],E=(0,c.useState)(!1),F=(0,r.Z)(E,2),U=F[0],A=F[1],L=(0,c.useState)(null),B=(0,r.Z)(L,2),R=B[0],$=B[1],K=(0,c.useState)(null),W=(0,r.Z)(K,2),q=W[0],G=W[1],J=(0,c.useState)(null),Q=(0,r.Z)(J,2),X=Q[0],ee=Q[1],ne=(0,c.useState)(null),te=(0,r.Z)(ne,2),le=te[0],ae=te[1],oe=(0,c.useState)(null),re=(0,r.Z)(oe,2),se=re[0],de=re[1],pe=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,me=(0,p.UO)(),xe=null===me||void 0===me?void 0:me.type,Ze=null===pe||void 0===pe?void 0:pe.data;(0,y.Z)((function(){n((0,b.H5)()),be()}),[Ze]),(0,c.useEffect)((function(){if(null!==pe&&void 0!==pe&&pe.refetch){var e={status:null===Ze||void 0===Ze?void 0:Ze.status,perPage:10,delivery_type:xe};n((0,b.AU)(e)),n((0,_.ZL)({})),n((0,j.A_)(pe))}}),[null===pe||void 0===pe?void 0:pe.refetch]);var je=function(e,t){(0,Z.dC)((function(){n((0,b.H5)()),n((0,j.nc)({activeMenu:pe,data:(0,o.Z)((0,o.Z)({},Ze),{},(0,l.Z)({},t,e))}))}))};function ge(){return ge=(0,i.Z)(d().mark((function e(n){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,perPage:10},e.abrupt("return",C.Z.getAll(t).then((function(e){return e.data.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname||""),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}var ye=function(e){var t,i,l,a,r=(0,o.Z)((0,o.Z)({},e),{},{delivery_type:xe,delivery_date_from:"scheduled"===le?ie()().add(1,"day").format("YYYY-MM-DD"):void 0,search:null!==Ze&&void 0!==Ze&&Ze.search?Ze.search:void 0,user_id:null===Ze||void 0===Ze?void 0:Ze.client_id,status:null===e||void 0===e?void 0:e.status,shop_id:null!==(null===(t=pe.data)||void 0===t?void 0:t.shop_id)?null===(i=pe.data)||void 0===i?void 0:i.shop_id:null,date_from:(null===se||void 0===se||null===(l=se[0])||void 0===l?void 0:l.format("YYYY-MM-DD"))||void 0,date_to:(null===se||void 0===se||null===(a=se[1])||void 0===a?void 0:a.format("YYYY-MM-DD"))||void 0});switch(e.status){case"new":n((0,b.O7)(r));break;case"accepted":n((0,b.We)(r));break;case"ready":n((0,b.wC)(r));break;case"on_a_way":n((0,b.Ri)(r));break;case"delivered":n((0,b.Rd)(r));break;case"canceled":n((0,b.eV)(r));break;case"cooking":n((0,b.XK)(r));break;case"pause":n((0,b.p2)(r));break;default:console.log("Sorry, we are out of")}},be=function(){ye({status:"new"}),ye({status:"accepted"}),ye({status:"ready"}),ye({status:"on_a_way"}),ye({status:"delivered"}),ye({status:"canceled"}),ye({status:"cooking"}),ye({status:"pause"})},Se=function(){ee(null),$(null),G(null)};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(v.Z,{className:"justify-content-end w-100 mb-3",children:[(0,H.jsx)(ve.Z,{listType:"seller/orders-board"}),(0,H.jsx)(f.Z,{type:"primary",icon:(0,H.jsx)(m.Z,{}),onClick:function(){n((0,fe.bn)()),n((0,j.bL)({id:"pos.system",url:"seller/pos-system",name:s("add.order")})),t("/seller/pos-system",{state:{delivery_type:xe}})},style:{width:"100%"},children:s("add.order")})]}),(0,H.jsx)(h.Z,{children:(0,H.jsxs)(v.Z,{wrap:!0,children:[(0,H.jsx)(S.Z,{placeholder:s("search"),handleChange:function(e){return je(e,"search")},defaultValue:null===(e=pe.data)||void 0===e?void 0:e.search,resetSearch:!(null!==Ze&&void 0!==Ze&&Ze.search)}),(0,H.jsx)(w.h,{placeholder:s("select.client"),fetchOptions:function(e){return ge.apply(this,arguments)},onSelect:function(e){return je(e.value,"client_id")},onDeselect:function(){return je(null,"client_id")},style:{minWidth:200},value:null===Ze||void 0===Ze?void 0:Ze.client_id}),"scheduled"!==le&&(0,H.jsx)(_e,{defaultValue:se,onChange:function(e){je(JSON.stringify(e),"data_time"),de(e)},disabledDate:function(e){return e&&e>ie()().endOf("day")},allowClear:!0,style:{width:"100%"},onClear:function(){n((0,b.H5)()),de(null)}}),(0,H.jsx)(f.Z,{icon:(0,H.jsx)(x.Z,{}),onClick:function(){(0,Z.dC)((function(){n((0,b.H5)()),n((0,j.nc)({activeMenu:pe,data:null}))})),be()},children:s("clear")})]})}),(0,H.jsx)(ce,{goToShow:function(e){n((0,j.bL)({url:"seller/order/details/".concat(e.id),id:"order_details",name:s("order.details")})),t("/seller/order/details/".concat(e.id))},fetchOrderAllItem:be,fetchOrders:ye,setLocationsMap:$,setId:O,setIsModalVisible:Y,setText:V,setDowloadModal:G,type:le,setType:ae,orderType:xe}),(0,H.jsx)(Ce.Z,{click:function(){A(!0);var e=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(T.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(e).then((function(){n((0,b.H5)()),M.Am.success(s("successfully.deleted")),Y(!1),be({status:le}),V(null)})).finally((function(){O(null),A(!1)}))},text:s(P?"delete":"all.delete"),loading:U,setText:O,setActive:O}),X&&(0,H.jsx)(ue.Z,{orderDetails:X,handleCancel:Se}),R&&(0,H.jsx)(he.Z,{id:R,handleCancel:Se}),q&&(0,H.jsx)(we,{id:q,handleCancel:Se})]})}},72944:function(e,n,t){var i=t(29439),l=t(84697),a=t(83999),o=t(9274),r=t(59491),s=t(77181),d=t(68197),c=t(59624),u=t(66204),v=t(47313),f=t(24511),h=t(62412),p=t(51282),m=t(58821),x=t(2717),Z=t(97421),j=t(18478),g=t(17649),y=t(66461),b=t(22539),S=t(3394),w=t(57864),C=t(70816),_=t.n(C),D=t(46417),M=a.Z.Step,k=function(){return(0,D.jsx)("div",{style:{position:"absolute",transform:"translate(-50%, -100%)"},children:(0,D.jsx)("img",{src:j,width:"50",alt:"Pin"})})};n.Z=function(e){var n,t,j,C=e.id,I=e.handleCancel,T=(0,f.$)().t,O=(0,v.useState)(null),Y=(0,i.Z)(O,2),H=Y[0],N=Y[1],z=(0,v.useState)(null),P=(0,i.Z)(z,2),V=P[0],E=P[1],F=(0,v.useState)(null),U=(0,i.Z)(F,2),A=U[0],L=U[1],B=(0,x.v9)((function(e){return e.globalSettings}),x.wU).settings,R=(0,g.Z)(B),$=(0,v.useState)(0),K=(0,i.Z)($,2),W=K[0],q=K[1],G=(0,v.useState)({lat:null===R||void 0===R?void 0:R.lat,lng:null===R||void 0===R?void 0:R.lng}),J=(0,i.Z)(G,2),Q=J[0],X=J[1],ee=(0,v.useState)([{id:0,name:"new",icon:(0,D.jsx)(y.Z,{})},{id:1,name:"accepted",icon:(0,D.jsx)(m.IQF,{})},{id:2,name:"ready",icon:(0,D.jsx)(b.TkG,{})},{id:3,name:"on_a_way",icon:(0,D.jsx)(S.Akc,{})},{id:4,name:"delivered",icon:(0,D.jsx)(S.kme,{})}]),ne=(0,i.Z)(ee,2),te=ne[0],ie=ne[1];var le=(0,x.v9)((function(e){return e.globalSettings.settings}),x.wU).google_map_key;return(0,v.useEffect)((function(){N(!0),h.Z.getById(C).then((function(e){var n,t,i,l,a,o,r,s=e.data;ie("canceled"===s.status?[{id:1,name:"new",icon:(0,D.jsx)(y.Z,{})},{id:5,name:"canceled",icon:(0,D.jsx)(w.SV5,{})}]:te),q("canceled"===s.status?1:null===(n=te.find((function(e){return e.name===s.status})))||void 0===n?void 0:n.id);var d=null!==(t=null!==(i=null!==(l=null===s||void 0===s||null===(a=s.address)||void 0===a?void 0:a.location)&&void 0!==l?l:null===s||void 0===s||null===(o=s.my_address)||void 0===o?void 0:o.location)&&void 0!==i?i:null===s||void 0===s||null===(r=s.delivery_point)||void 0===r?void 0:r.location)&&void 0!==t?t:{latitude:null===R||void 0===R?void 0:R.lat,longitude:null===R||void 0===R?void 0:R.lng};X({lat:Number(null===d||void 0===d?void 0:d.latitude),lng:Number(null===d||void 0===d?void 0:d.longitude)}),L("canceled"===s.status?"error":"success"),E(s)})).finally((function(){N(!1)}))}),[]),(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(o.Z,{visible:!!C,title:T("show.locations"),closable:!0,onCancel:I,style:{minWidth:"80vw"},footer:[(0,D.jsx)(r.Z,{type:"default",onClick:I,children:T("cancel")},"cancelBtn")],children:H?(0,D.jsx)(p.Z,{}):(0,D.jsxs)(s.Z,{children:[(0,D.jsx)(a.Z,{current:W,status:A,className:"mb-5",children:null===te||void 0===te?void 0:te.map((function(e,n){return(0,D.jsx)(M,{title:T(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+n)}))}),(0,D.jsxs)(d.Z,{gutter:12,children:[(0,D.jsxs)(c.Z,{span:12,children:[(0,D.jsxs)("h3",{children:[T("order.id")," #",null===V||void 0===V?void 0:V.id]}),(0,D.jsxs)("p",{children:[(0,D.jsx)(m.D73,{})," ",_()(null===V||void 0===V?void 0:V.created_at).format("YYYY-MM-DD HH:mm")]}),(0,D.jsxs)("p",{children:[T("scheduled.at")," ",null===V||void 0===V?void 0:V.delivery_date]})]}),(0,D.jsxs)(c.Z,{span:12,children:[(0,D.jsxs)("p",{children:[T("status")," ","new"===(null===V||void 0===V?void 0:V.status)?(0,D.jsx)(u.Z,{color:"blue",children:T(null===V||void 0===V?void 0:V.status)}):"canceled"===(null===V||void 0===V?void 0:V.status)?(0,D.jsx)(u.Z,{color:"error",children:T(null===V||void 0===V?void 0:V.status)}):(0,D.jsx)(u.Z,{color:"cyan",children:T(null===V||void 0===V?void 0:V.status)})]}),(0,D.jsxs)("p",{children:[T("payment.method")," ",(0,D.jsx)("strong",{children:null===V||void 0===V||null===(n=V.transaction)||void 0===n||null===(t=n.payment_system)||void 0===t?void 0:t.tag})]}),(0,D.jsxs)("p",{children:[T("order.type")," ",(0,D.jsx)("strong",{children:null===V||void 0===V?void 0:V.delivery_type})]}),(0,D.jsxs)("p",{children:[T("payment.type")," ",(0,D.jsx)("strong",{children:null===V||void 0===V||null===(j=V.transaction)||void 0===j?void 0:j.status})]})]}),(0,D.jsxs)(c.Z,{span:24,className:"mt-5",children:[(0,D.jsx)("h4",{children:T("map")}),(0,D.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,D.jsx)(l.ZP,{bootstrapURLKeys:{key:le?Z.kr:le},defaultZoom:10,center:null!==Q&&void 0!==Q?Q:R,options:{fullscreenControl:!1},children:(0,D.jsx)(k,{lat:null===Q||void 0===Q?void 0:Q.lat,lng:null===Q||void 0===Q?void 0:Q.lng})})})]})]})]})})})}},30804:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),l=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"},o=t(17469),r=function(e,n){return l.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};r.displayName="ContainerOutlined";var s=l.forwardRef(r)},55768:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),l=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},o=t(17469),r=function(e,n){return l.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};r.displayName="PlusCircleOutlined";var s=l.forwardRef(r)},18478:function(e,n,t){e.exports=t.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);
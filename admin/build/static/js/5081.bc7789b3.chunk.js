"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5081],{52008:function(e,n,t){t(47313);n.Z=t.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},89281:function(e,n,t){t.d(n,{h:function(){return f}});var i=t(1413),l=t(29439),r=t(45987),o=t(47313),a=t(12279),s=t.n(a),u=t(74294),c=t(72652),d=t(46417),v=["fetchOptions","debounceTimeout","onClear","refetchOptions"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,a=void 0===t?400:t,f=e.onClear,p=e.refetchOptions,h=void 0!==p&&p,x=(0,r.Z)(e,v),m=(0,o.useState)(!1),Z=(0,l.Z)(m,2),y=Z[0],_=Z[1],j=(0,o.useState)([]),g=(0,l.Z)(j,2),b=g[0],w=g[1],k=(0,o.useMemo)((function(){return s()((function(e){w([]),_(!0),n(e).then((function(e){w(e),_(!1)}))}),a)}),[n,a]);return(0,d.jsx)(u.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),f&&f()},notFoundContent:y?(0,d.jsx)(c.Z,{size:"small"}):"no results"},x),{},{options:b,onFocus:function(){b.length&&!h||k("")}}))}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},84017:function(e,n,t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?"".concat(i," ").concat(n):"".concat(n," ").concat(i)}t.d(n,{Z:function(){return i}})},14637:function(e,n,t){t.d(n,{Z:function(){return r}});t(47313);var i=t(77181),l=t(46417);function r(e){var n=e.title,t=void 0===n?"Orders":n,r=e.value,o=void 0===r?0:r,a=e.color,s=void 0===a?"grey":a,u=e.onClick;return(0,l.jsx)(i.Z,{className:"statistics-card",hoverable:!!u,onClick:u,children:(0,l.jsxs)("div",{className:"card-wrapper",children:[(0,l.jsx)("div",{className:"space"}),(0,l.jsx)("div",{className:"content",children:(0,l.jsx)("h1",{className:"number",children:o})}),(0,l.jsx)("span",{className:"highlighter ".concat(s)}),t&&(0,l.jsx)("h4",{className:"title",children:t})]})})}},85081:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var i=t(4942),l=t(15861),r=t(1413),o=t(93433),a=t(29439),s=t(87757),u=t.n(s),c=t(47313),d=t(99096),v=t(77181),f=t(45705),p=t(59491),h=t(68197),x=t(59624),m=t(78508),Z=t(97890),y=t(2717),_=t(90954),j=t(24511),g=t(80314),b=t(13945),w=t(84017),k=t(89281),C=t(49986),Y=t(23560),M=t(70816),N=t.n(M),S=t(53149),D=t(10924),z=t(71122),I=t(9274),O=t(72652),A=t(52008),P=t(26672),E=t(92709),F=t(57864),U=t(20637),$=t(58821),K=t(46417);function T(e){var n=e.open,t=e.onCancel,i=e.onConfirm,r=e.isPaying,o=(0,j.$)().t,s=(0,c.useState)({}),d=(0,a.Z)(s,2),f=d[0],m=d[1],Z=(0,c.useState)(null),y=(0,a.Z)(Z,2),_=y[0],g=y[1],b=(0,c.useState)(!1),w=(0,a.Z)(b,2),k=w[0],C=w[1];function M(){return(M=(0,l.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.abrupt("return",U.Z.getAll().then((function(e){var n=e.data;return g(n.map((function(e){return{label:e.tag||"no name",value:e.id,key:e.id}})))})).finally((function(){C(!1)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,c.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[]);var N=function(e){switch(e){case"wallet":return(0,K.jsx)(F.dk2,{size:80});case"paypal":return(0,K.jsx)(P.kD0,{size:80});case"stripe":return(0,K.jsx)(E.K6C,{size:80});case"razorpay":return(0,K.jsx)(E.r98,{size:80});case"paystack":return(0,K.jsx)("img",{src:A.Z,alt:"img",width:"80",height:"80"});default:return(0,K.jsx)($.HsN,{size:80})}};return(0,K.jsx)(I.Z,{visible:n,title:o("pay.to.partner"),onCancel:t,footer:[(0,K.jsx)(p.Z,{type:"primary",disabled:k||!f.value,loading:r,onClick:function(){f.value?i(f.value):Y.Am.warning(o("please.select.payment.type"))},children:o("confirm")},"save-btn"),(0,K.jsx)(p.Z,{type:"default",onClick:t,children:o("cancel")},"cancel-btn")],children:(0,K.jsx)(O.Z,{spinning:k,children:(0,K.jsx)(h.Z,{gutter:12,children:null===_||void 0===_?void 0:_.map((function(e,n){return"cash"===e.label||"wallet"===e.label?(0,K.jsx)(x.Z,{span:12,children:(0,K.jsxs)(v.Z,{style:{display:"flex",justifyContent:"center"},className:"payment-card ".concat((null===f||void 0===f?void 0:f.label)===e.label?"active":""),onClick:function(){m(e)},children:[(0,K.jsx)("div",{className:"payment-icon",children:N(null===e||void 0===e?void 0:e.label)}),(0,K.jsx)("div",{className:"font-weight-bold mt-2 text-center",children:o(null===e||void 0===e?void 0:e.label)})]})},n):null}))})})})}var R=t(14637),H=d.Z.RangePicker;function L(){var e,n,t,s,d,M,I,O=(0,Z.UO)().type,A=(0,y.I0)(),P=(0,Z.s0)(),E=(0,j.$)().t,F=(0,y.v9)((function(e){return e.currency}),y.wU).defaultCurrency,U=(0,c.useState)(!1),$=(0,a.Z)(U,2),L=$[0],V=$[1],q=[{title:E("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0,render:function(e){return(0,K.jsxs)("span",{className:"text-hover",onClick:function(){return function(e){A((0,_.bL)({url:"order/details/".concat(e),id:"order_details",name:E("order.details")})),P("/order/details/".concat(e))}(e)},children:["#",e]})}},{title:E(O),is_show:!0,dataIndex:"user",key:"user",render:function(e,n){var t,i="seller"===O?null===n||void 0===n||null===(t=n.shop)||void 0===t?void 0:t.seller:n.deliveryman;return(0,K.jsxs)("div",{children:[null===i||void 0===i?void 0:i.firstname," ",(null===i||void 0===i?void 0:i.lastname)||""]})}},{title:E("order.total_price"),is_show:!0,dataIndex:"total_price",key:"total_price",render:function(e,n){var t,i,l=null===(t=n.transaction)||void 0===t?void 0:t.status;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{children:(0,w.Z)(e,F.symbol)}),(0,K.jsx)("br",{}),(0,K.jsx)("span",{className:"progress"===l?"text-primary":"paid"===l?"text-success":"rejected"===l?"text-danger":"text-info",children:null===(i=n.transaction)||void 0===i?void 0:i.status})]})}}].concat((0,o.Z)("seller"===O?[{title:E("coupon.price"),is_show:!0,dataIndex:"coupon_price",key:"coupon_price",render:function(e){return(0,w.Z)(e)}}]:[]),(0,o.Z)("seller"===O?[{title:E("total.cashback"),is_show:!0,dataIndex:"point_histories",key:"point_histories",render:function(e){var n;return(0,w.Z)(null===e||void 0===e||null===(n=e[0])||void 0===n?void 0:n.price)}}]:[]),[{title:E("delivery.fee"),is_show:!0,dataIndex:"delivery_fee",key:"delivery_fee",render:function(e){return(0,w.Z)(e)}}],(0,o.Z)("seller"===O?[{title:E("service.fee"),is_show:!0,dataIndex:"service_fee",key:"service_fee",render:function(e,n){return(0,w.Z)((n.service_fee||0)+(n.commission_fee||0))}}]:[]),(0,o.Z)("seller"===O?[{title:E("seller.fee"),is_show:!0,dataIndex:"seller_fee",key:"seller_fee",render:function(e){return(0,w.Z)(e)}}]:[]),[{title:E("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var n;return E(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}}]),B=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,G=(0,c.useState)(null),J=(0,a.Z)(G,2),Q=J[0],W=J[1],X=(0,c.useState)(!1),ee=(0,a.Z)(X,2),ne=ee[0],te=ee[1],ie=(0,c.useState)(N()().subtract(1,"month"),N()()),le=(0,a.Z)(ie,2),re=le[0],oe=le[1],ae=(0,y.v9)((function(e){return e.paymentToPartners}),y.wU),se=ae.list,ue=ae.loading,ce=ae.params,de=ae.meta,ve=B.data,fe={search:null===ve||void 0===ve?void 0:ve.search,sort:null===ve||void 0===ve?void 0:ve.sort,column:null===ve||void 0===ve?void 0:ve.column,perPage:null===ve||void 0===ve?void 0:ve.perPage,page:null===ve||void 0===ve?void 0:ve.page,user_id:null===ve||void 0===ve?void 0:ve.user_id,shop_id:null!==(null===(e=B.data)||void 0===e?void 0:e.shop_id)?null===(n=B.data)||void 0===n?void 0:n.shop_id:null,date_from:Array.isArray(re)?null===(t=re[0])||void 0===t?void 0:t.format("YYYY-MM-DD"):N()().subtract(1,"month").format("YYYY-MM-DD"),date_to:Array.isArray(re)?null===(s=re[1])||void 0===s?void 0:s.format("YYYY-MM-DD"):N()().format("YYYY-MM-DD"),type:O};function pe(){return pe=(0,l.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,perPage:10,role:O},e.abrupt("return",C.Z.search(t).then((function(e){return e.data.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),pe.apply(this,arguments)}(0,g.Z)((function(){A((0,D.EZ)(fe))}),[ve,re,O]);var he=function(e,n){A((0,_.nc)({activeMenu:B,data:(0,r.Z)((0,r.Z)({},ve),(0,i.Z)({},n,e))}))};function xe(){return xe=(0,l.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,status:"approved"},e.abrupt("return",S.Z.getAll(t).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),xe.apply(this,arguments)}(0,c.useEffect)((function(){null!==B&&void 0!==B&&B.refetch&&(A((0,D.EZ)(fe)),A((0,_.A_)(B)))}),[null===B||void 0===B?void 0:B.refetch]);var me={selectedRowKeys:Q,onChange:function(e){W(e)}};return(0,c.useEffect)((function(){return function(){A((0,_.nc)({activeMenu:B,data:{}}))}}),[]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(v.Z,{children:(0,K.jsxs)("div",{className:"flex justify-content-space-between",children:[(0,K.jsxs)(f.Z,{wrap:!0,className:"order-filter",style:{flex:1,width:"100%"},children:[(0,K.jsx)(k.h,{placeholder:E("select.shop"),fetchOptions:function(e){return xe.apply(this,arguments)},style:{width:"100%"},onSelect:function(e){return he(e.value,"shop_id")},onDeselect:function(){return he(null,"shop_id")},allowClear:!0,value:null===ve||void 0===ve?void 0:ve.shop_id}),(0,K.jsx)(k.h,{placeholder:E("select.user"),fetchOptions:function(e){return pe.apply(this,arguments)},onSelect:function(e){return he(e.value,"user_id")},onDeselect:function(){return he(null,"user_id")},style:{width:"100%"},value:null===ve||void 0===ve?void 0:ve.user_id}),(0,K.jsx)(H,{value:re,onChange:function(e){he((function(n){var t,i;return(0,r.Z)((0,r.Z)({},n),{date_from:null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.format("YYYY-MM-DD")})})),oe(e)},disabledDate:function(e){return e&&e>N()().endOf("day")},style:{width:"100%"}})]}),(0,K.jsx)(p.Z,{type:"primary",disabled:!Q||0===Q.length,onClick:function(){return V(!0)},children:E("pay")})]})}),(0,K.jsx)(v.Z,{children:(0,K.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("commission.fee"),value:(0,w.Z)(null===se||void 0===se?void 0:se.total_commission_fee,null===F||void 0===F?void 0:F.symbol),color:"purple"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("coupon"),value:(0,w.Z)(null===se||void 0===se?void 0:se.total_coupon,null===F||void 0===F?void 0:F.symbol),color:"red"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("delivery.fee"),value:(0,w.Z)(null!==se&&void 0!==se&&se.total_delivery_fee?Math.trunc(null===se||void 0===se?void 0:se.total_delivery_fee):0,null===F||void 0===F?void 0:F.symbol),color:"green"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("point.history"),value:(0,w.Z)(null!==se&&void 0!==se&&se.total_point_history?Math.trunc(null===se||void 0===se?void 0:se.total_point_history):0,null===F||void 0===F?void 0:F.symbol),color:"purple"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("price"),value:(0,w.Z)(null!==se&&void 0!==se&&se.total_price?Math.trunc(null===se||void 0===se?void 0:se.total_price):0,null===F||void 0===F?void 0:F.symbol),color:"red"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("seller.fee"),value:(0,w.Z)(null!==se&&void 0!==se&&se.total_seller_fee?Math.trunc(null===se||void 0===se?void 0:se.total_seller_fee):0,null===F||void 0===F?void 0:F.symbol),color:"purple"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("service.fee"),value:(0,w.Z)(null!==se&&void 0!==se&&se.total_service_fee?Math.trunc(null===se||void 0===se?void 0:se.total_service_fee):0,null===F||void 0===F?void 0:F.symbol),color:"red"})}),(0,K.jsx)(x.Z,{flex:"0 0 25%",children:(0,K.jsx)(R.Z,{title:E("tax"),value:(0,w.Z)(null!==se&&void 0!==se&&se.total_tax?Math.trunc(null===se||void 0===se?void 0:se.total_tax):0,null===F||void 0===F?void 0:F.symbol),color:"green"})})]})}),(0,K.jsx)(v.Z,{children:(0,K.jsx)(m.Z,{scroll:{x:!0},rowSelection:me,columns:null===q||void 0===q?void 0:q.filter((function(e){return e.is_show})),dataSource:null===se||void 0===se?void 0:se.data,loading:ue,pagination:{pageSize:ce.perPage,page:(null===(d=B.data)||void 0===d?void 0:d.page)||1,total:null===de||void 0===de?void 0:de.total,defaultCurrent:null===(M=B.data)||void 0===M?void 0:M.page,current:null===(I=B.data)||void 0===I?void 0:I.page},rowKey:function(e){return null===e||void 0===e?void 0:e.id},onChange:function(e,n,t){var i=e.pageSize,l=e.current,o=t.field,a=t.order,s=(0,b.Z)(a);A((0,_.nc)({activeMenu:B,data:(0,r.Z)((0,r.Z)({},ve),{},{perPage:i,page:l,column:o,sort:s})}))}})}),L&&(0,K.jsx)(T,{open:L,onCancel:function(){V(!1),W(null)},onConfirm:function(e){return function(e){te(!0);var n={data:Q,type:O,payment_id:e};z.Z.pay(n).then((function(){Y.Am.success(E("successfully.payed")),A((0,D.EZ)(fe))})).finally((function(){W(null),te(!1),V(!1)}))}(e)},isPaying:ne})]})}}}]);
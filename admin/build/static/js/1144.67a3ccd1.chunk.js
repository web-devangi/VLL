"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1144],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),l=t(45987),a=(t(47313),t(59491)),r=t(47515),o=t(23560),d=t(24511),c=t(79492),s=t(46417),u=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,x=(0,l.Z)(e,u),Z=(0,d.$)().t,m=(0,c.Z)().isDemo;return(0,s.jsx)(a.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(r.Z,{}),onClick:function(e){m?o.Am.warning(Z("cannot.work.demo")):v(e)},type:h},x))}},50402:function(e,n,t){t(47313);var i=t(68197),l=t(59624),a=t(2717),r=t(24511),o=t(14637),d=t(29242),c=t(46417);n.Z=function(e){var n=e.data,t=(0,r.$)().t,s=(0,a.v9)((function(e){return e.currency}),a.wU).defaultCurrency;return(0,c.jsxs)(i.Z,{gutter:16,className:"mt-3",children:[(0,c.jsx)(l.Z,{flex:"0 0 16.6%",children:(0,c.jsx)(o.Z,{title:t("all.orders"),value:null===n||void 0===n?void 0:n.orders_count})}),(0,c.jsx)(l.Z,{flex:"0 0 16.6%",children:(0,c.jsx)(o.Z,{title:t("ready.orders"),value:null===n||void 0===n?void 0:n.ready_orders_count})}),(0,c.jsx)(l.Z,{flex:"0 0 16.6%",children:(0,c.jsx)(o.Z,{title:t("on.a.way.orders"),value:null===n||void 0===n?void 0:n.on_a_way_orders_count})}),(0,c.jsx)(l.Z,{flex:"0 0 16.6%",children:(0,c.jsx)(o.Z,{title:t("cancelled.orders"),value:null===n||void 0===n?void 0:n.cancel_orders_count})}),(0,c.jsx)(l.Z,{flex:"0 0 16.6%",children:(0,c.jsx)(o.Z,{title:t("delivered.orders"),value:null===n||void 0===n?void 0:n.delivered_orders_count})}),(0,c.jsx)(l.Z,{flex:"0 0 16.6%",children:(0,c.jsx)(o.Z,{title:t("total.price"),value:(0,d.p)(null===n||void 0===n?void 0:n.total_price,null===s||void 0===s?void 0:s.symbol)})})]})}},53233:function(e,n,t){var i=t(1413),l=t(29439),a=t(47313),r=t(56140),o=t(67251),d=t(45705),c=t(86345),s=t(78267),u=t(37388),v=t(59491),f=t(99587),h=t(24511),x=t(46417),Z=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,m=e.style,j=e.size,p=void 0===j?"":j,y=e.iconOnly,g=(0,h.$)().t,_=(0,a.useState)(!1),C=(0,l.Z)(_,2),w=C[0],k=C[1],b=(0,x.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,x.jsx)(o.Z.Item,{children:(0,x.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,x.jsx)(Z,{children:e.title}),(0,x.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,x.jsx)(s.Z,{overlay:b,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,x.jsx)(u.Z,{title:g("change.columns"),children:(0,x.jsx)(v.Z,{style:(0,i.Z)({},m),size:p,icon:(0,x.jsx)(f.Z,{}),children:y?null:g("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),l=t(29439),a=t(45987),r=t(47313),o=t(66672),d=t(16031),c=t(40765),s=t(46417),u=["handleChange","defaultValue","resetSearch"];function v(e){var n=e.handleChange,t=e.defaultValue,v=e.resetSearch,f=(0,a.Z)(e,u),h=(0,r.useState)(t),x=(0,l.Z)(h,2),Z=x[0],m=x[1],j=(0,r.useMemo)((function(){return(0,d.debounce)((function(e){n(e)}),800)}),[]);return(0,r.useEffect)((function(){m(t)}),[v]),(0,s.jsx)(o.Z,(0,i.Z)({value:Z,onChange:function(e){m(e.target.value),j(e.target.value)},prefix:(0,s.jsx)(c.Z,{})},f))}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},29242:function(e,n,t){function i(e,n){var t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(n){return e>=n.value}));return t?"$"+(e/t.value).toFixed(n).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t.symbol:"0"}t.d(n,{p:function(){return i}})},36311:function(e,n,t){var i=t(34344),l={orderExport:function(e,n){return i.Z.get("dashboard/user/export/order/".concat(e,"/pdf"),{params:n,responseType:"blob"})}};n.Z=l},14637:function(e,n,t){t.d(n,{Z:function(){return a}});t(47313);var i=t(77181),l=t(46417);function a(e){var n=e.title,t=void 0===n?"Orders":n,a=e.value,r=void 0===a?0:a,o=e.color,d=void 0===o?"grey":o,c=e.onClick;return(0,l.jsx)(i.Z,{className:"statistics-card",hoverable:!!c,onClick:c,children:(0,l.jsxs)("div",{className:"card-wrapper",children:[(0,l.jsx)("div",{className:"space"}),(0,l.jsx)("div",{className:"content",children:(0,l.jsx)("h1",{className:"number",children:r})}),(0,l.jsx)("span",{className:"highlighter ".concat(d)}),t&&(0,l.jsx)("h4",{className:"title",children:t})]})})}},91144:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var i=t(4942),l=t(93433),a=t(1413),r=t(29439),o=t(47313),d=t(99096),c=t(73591),s=t(66204),u=t(59491),v=t(45705),f=t(77181),h=t(78508),x=t(97890),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},m=t(17469),j=function(e,n){return o.createElement(m.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:Z}))};j.displayName="UploadOutlined";var p=o.forwardRef(j),y=t(12019),g=t(31741),_=t(47515),C=t(6986),w=t(15386),k=t(2717),b=t(90954),S=t(24511),M=t(89281),z=t(80314),N=t(22054),V=t(13945),Y=t(41481),I=t(84017),H=t(7920),D=t(24077),$=t(53233),A=t(5958),P=t(80355),U=t(24391),E=t(23560),O=t(55940),T=t(7370),R=t(74580),B=t(69658),K=t(97421),F=t(51282),L=t(50402),W=t(45321),G=t(70816),J=t.n(G),q=t(46417),Q=d.Z.RangePicker,X=c.Z.TabPane;function ee(){var e,n,t,d,Z=(0,k.I0)(),m=(0,x.s0)(),j=(0,S.$)().t,G=(0,k.v9)((function(e){return e.currency}),k.wU).defaultCurrency,ee=(0,o.useState)(null),ne=(0,r.Z)(ee,2),te=ne[0],ie=ne[1],le=(0,o.useState)(null),ae=(0,r.Z)(le,2),re=ae[0],oe=ae[1],de=(0,o.useState)(null),ce=(0,r.Z)(de,2),se=ce[0],ue=ce[1],ve=(0,o.useState)(null),fe=(0,r.Z)(ve,2),he=fe[0],xe=fe[1],Ze=[{id:7,name:"all"},{id:8,name:"un_assigned_order"},{id:3,name:"ready"},{id:4,name:"on_a_way"},{id:5,name:"delivered"},{id:6,name:"canceled"}],me=(0,o.useState)([{title:j("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:j("client"),is_show:!0,dataIndex:"user",key:"user",render:function(e){return(0,q.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})}},{title:j("number.of.products"),is_show:!0,dataIndex:"order_details_count",key:"order_details_count",render:function(e){return(0,q.jsxs)("div",{className:"text-lowercase",children:[e||0," ",j("products")]})}},{title:j("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,q.jsxs)("div",{children:["new"===e?(0,q.jsx)(s.Z,{color:"blue",children:j(e)}):"canceled"===e?(0,q.jsx)(s.Z,{color:"error",children:j(e)}):(0,q.jsx)(s.Z,{color:"cyan",children:j(e)}),"delivered"!==e&&"canceled"!==e?(0,q.jsx)(y.Z,{onClick:function(){return ie(n)}}):""]})}},{title:j("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:function(e,n){return(0,q.jsx)("div",{children:"ready"===n.status&&"pickup"!==n.delivery_type?(0,q.jsx)(u.Z,{type:"link",onClick:function(){return xe(n)},children:(0,q.jsxs)(v.Z,{children:[e?"".concat(e.firstname," ").concat(e.lastname):j("add.deliveryman"),(0,q.jsx)(y.Z,{})]})}):(0,q.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})})}},{title:j("amount"),is_show:!0,dataIndex:"total_price",key:"total_price",render:function(e){return(0,I.Z)(e,G.symbol)}},{title:j("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var n;return j(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:j("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:j("options"),is_show:!0,key:"options",render:function(e,n){return(0,q.jsxs)(v.Z,{children:[(0,q.jsx)(u.Z,{icon:(0,q.jsx)(A.Y4r,{}),onClick:function(){return oe(n.id)}}),(0,q.jsx)(u.Z,{icon:(0,q.jsx)(g.Z,{}),onClick:function(){return function(e){Z((0,b.bL)({url:"order/details/".concat(e.id),id:"order_details",name:j("order.details")})),m("/order/details/".concat(e.id))}(n)}}),(0,q.jsx)(O.Z,{icon:(0,q.jsx)(_.Z,{}),onClick:function(){De([n.id]),ge(!0),Ue(!0)}}),(0,q.jsx)(u.Z,{icon:(0,q.jsx)(C.Z,{}),onClick:function(){return ue(n.id)}})]})}}]),je=(0,r.Z)(me,2),pe=je[0],ye=je[1],ge=(0,o.useContext)(R._).setIsModalVisible,_e=(0,o.useState)(!1),Ce=(0,r.Z)(_e,2),we=Ce[0],ke=Ce[1],be=(0,k.v9)((function(e){return e.menu}),k.wU).activeMenu,Se=(0,o.useState)("all"),Me=(0,r.Z)(Se,2),ze=Me[0],Ne=Me[1],Ve=(null===(e=be.data)||void 0===e?void 0:e.role)||ze,Ye=(0,o.useState)(null),Ie=(0,r.Z)(Ye,2),He=Ie[0],De=Ie[1],$e=(0,o.useState)(null),Ae=(0,r.Z)($e,2),Pe=Ae[0],Ue=Ae[1],Ee=(0,o.useState)(!1),Oe=(0,r.Z)(Ee,2),Te=Oe[0],Re=Oe[1],Be=(0,k.v9)((function(e){return e.orders}),k.wU),Ke=Be.orders,Fe=Be.meta,Le=Be.loading,We=Be.params,Ge=Be.statistic,Je=null===be||void 0===be?void 0:be.data;(0,z.Z)((function(){var e,n={search:null===Je||void 0===Je?void 0:Je.search,sort:null===Je||void 0===Je?void 0:Je.sort,column:null===Je||void 0===Je?void 0:Je.column,perPage:null===Je||void 0===Je?void 0:Je.perPage,page:null===Je||void 0===Je?void 0:Je.page,deliveryman:null===Je||void 0===Je||null===(e=Je.deliveryman)||void 0===e?void 0:e.value,date_from:null===Je||void 0===Je?void 0:Je.date_from,date_to:null===Je||void 0===Je?void 0:Je.date_to,status:"un_assigned_order"===(null===Je||void 0===Je?void 0:Je.status)||null===Je||void 0===Je?void 0:Je.status,"isset-deliveryman":"un_assigned_order"===(null===Je||void 0===Je?void 0:Je.status)?1:0};Z((0,N.AU)(n))}),[null===be||void 0===be?void 0:be.data]);var qe=function(e){var n=be.data;Z((0,b.nc)({activeMenu:be,data:(0,a.Z)((0,a.Z)({},n),e)}))},Qe=function(){ie(null),xe(null),oe(null),ue(null)};(0,o.useEffect)((function(){if(null!==be&&void 0!==be&&be.refetch){var e={status:null===Je||void 0===Je?void 0:Je.status,page:null===Je||void 0===Je?void 0:Je.page,perPage:10,type:"delivery"};Z((0,N.AU)(e)),Z((0,b.A_)(be))}}),[null===be||void 0===be?void 0:be.refetch]);var Xe={selectedRowKeys:He,onChange:function(e){De(e)}};return(0,q.jsxs)("div",{children:[(0,q.jsx)("div",{children:Le?(0,q.jsx)(F.Z,{}):(0,q.jsx)(L.Z,{data:Ge,orders:Ke})}),(0,q.jsx)(f.Z,{className:"p-0",children:(0,q.jsxs)(v.Z,{wrap:!0,size:[12,20],children:[(0,q.jsx)(Y.Z,{placeholder:j("search"),handleChange:function(e){return qe({search:e})},defaultValue:null===(n=be.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=be.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,q.jsx)(Q,{format:"YYYY-MM-DD",onChange:function(e){return n=e,void Z((0,b.nc)({activeMenu:be,data:(0,a.Z)((0,a.Z)({},Je),{},{date_from:n?J()(null===n||void 0===n?void 0:n[0]).format("YYYY-MM-DD").toString():void 0,date_to:n?J()(null===n||void 0===n?void 0:n[1]).format("YYYY-MM-DD").toString():void 0})}));var n}}),(0,q.jsx)(M.h,{className:"w-100",debounceTimeout:500,placeholder:j("select.deliveryman"),fetchOptions:function(e){var n={search:e};return W.Z.getAll(n).then((function(e){return e.data.map((function(e){return{label:e.firstname+" "+e.lastname,value:e.id}}))}))},allowClear:!0,onChange:function(e){return qe({deliveryman:e})},value:null===(d=be.data)||void 0===d?void 0:d.deliveryman}),(0,q.jsxs)(u.Z,{onClick:function(){ke(!0),T.Z.export().then((function(e){var n=K.S0+e.data.file_name;window.location.href=n})).finally((function(){return ke(!1)}))},loading:we,children:[(0,q.jsx)(p,{}),j("export")]}),(0,q.jsx)(O.Z,{size:"",onClick:function(){null===He||0===He.length?E.Am.warning(j("select.the.product")):(ge(!0),Ue(!1))},children:j("delete.selected")}),(0,q.jsx)(u.Z,{icon:(0,q.jsx)(w.Z,{}),onClick:function(){Z((0,b.nc)({activeMenu:be,data:void 0}))},disabled:!be.data,style:{minWidth:100}}),(0,q.jsx)($.Z,{setColumns:ye,columns:pe})]})}),(0,q.jsxs)(f.Z,{title:j("orders"),children:[(0,q.jsx)(c.Z,{onChange:function(e){qe({role:e,page:1}),Ne(e)},type:"card",activeKey:Ve,children:Ze.map((function(e){return(0,q.jsx)(X,{tab:j(e.name)},e.name)}))}),(0,q.jsx)(h.Z,{scroll:{x:!0},rowSelection:Xe,columns:null===pe||void 0===pe?void 0:pe.filter((function(e){return e.is_show})),dataSource:Ke,loading:Le,pagination:{pageSize:We.perPage,page:We.page,total:Fe.total,defaultCurrent:We.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,l=e.current,r=t.field,o=t.order,d=(0,V.Z)(o);Z((0,b.nc)({activeMenu:be,data:(0,a.Z)((0,a.Z)({},be.data),{},{perPage:i,page:l,column:r,sort:d})}))}})]}),(0,q.jsx)(B.Z,{click:function(){Re(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,l.Z)(He.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));T.Z.delete(e).then((function(){E.Am.success(j("successfully.deleted")),ge(!1),Z((0,N.AU)()),Ue(null)})).finally((function(){return Re(!1)}))},text:j(Pe?"delete":"all.delete"),loading:Te,setText:De}),te&&(0,q.jsx)(H.Z,{orderDetails:te,handleCancel:Qe,status:Ze}),he&&(0,q.jsx)(D.Z,{orderDetails:he,handleCancel:Qe}),re&&(0,q.jsx)(P.Z,{id:re,handleCancel:Qe}),se&&(0,q.jsx)(U.Z,{id:se,handleCancel:Qe})]})}},24391:function(e,n,t){var i=t(29439),l=t(47313),a=t(36311),r=t(83334),o=t.n(r),d=t(51282),c=t(77181),s=t(9274),u=t(59491),v=t(68197),f=t(59624),h=t(24511),x=t(58821),Z=t(57864),m=t(97890),j=t(46417),p=c.Z.Meta;n.Z=function(e){var n=e.id,t=e.handleCancel,r=(0,l.useState)(null),y=(0,i.Z)(r,2),g=y[0],_=y[1],C=(0,h.$)().t,w=(0,m.s0)();return(0,j.jsx)(j.Fragment,{children:g?(0,j.jsx)(d.Z,{}):(0,j.jsx)(s.Z,{visible:!!n,title:C("selected.download"),closable:!1,handleCancel:t,footer:[(0,j.jsx)(u.Z,{type:"default",onClick:t,children:C("cancel")},"cancelBtn")],children:(0,j.jsxs)(v.Z,{children:[(0,j.jsx)(f.Z,{span:12,children:(0,j.jsx)(c.Z,{title:C("download.pdf"),onClick:function(){return function(e){_(!0),a.Z.orderExport(e).then((function(n){o()(n,"invoice_".concat(e,".pdf"),"application/pdf"),t()})).finally((function(){return _(!1)}))}(n)},className:"text-center cursor-pointer",children:(0,j.jsx)(p,{className:"d-flex align-items-center justify-content-center",title:(0,j.jsx)(x._JY,{size:80})})})}),(0,j.jsx)(f.Z,{span:12,children:(0,j.jsx)(c.Z,{title:C("download.check"),onClick:function(){return function(e){w("/orders/generate-invoice/".concat(e))}(n)},className:"text-center cursor-pointer",children:(0,j.jsx)(p,{className:"d-flex align-items-center justify-content-center",title:(0,j.jsx)(Z.ih9,{size:85})})})})]})})})}},15386:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),l=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},r=t(17469),o=function(e,n){return l.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="ClearOutlined";var d=l.forwardRef(o)}}]);
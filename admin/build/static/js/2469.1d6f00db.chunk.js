"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2469],{13944:function(e,t,n){var r=n(1413),s=n(47313),l=n(77181),i=n(58446),o=n(27834),a=n(33533),c=n(46417),d={position:"absolute",zIndex:"1"},u={position:"absolute",zIndex:"1",right:"0",top:"-2px"},h=function(e){var t=e.title,n=e.series,h=e.width,v=e.height,f=e.xAxis,x=e.customOptions,m=e.card,p=e.type,j=e.extra,Z=e.direction,g=e.bodyClass,b=JSON.parse(JSON.stringify(function(e){switch(e){case"line":default:return a.jd;case"bar":return a.B0;case"area":return a.fT;case"pie":return a.LB}}(p))),y=window.innerWidth<768,w=function(){if(k.current){var e,t=k.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(y?0:null===(e=N.current)||void 0===e?void 0:e.offsetWidth,"px"),"rtl"===Z&&(t.style.right="auto",t.style.left="0"),y&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,s.useEffect)((function(){w()}),[]);var N=(0,s.useRef)(null),k=(0,s.useRef)();b.xaxis={categories:f},x&&(b=(0,r.Z)((0,r.Z)({},b),x));var C=function(){return(0,c.jsx)(o.ZP,{onResize:void setTimeout((function(){w()}),600),children:(0,c.jsx)("div",{style:"rtl"===Z?{direction:"ltr"}:{},className:"chartRef",ref:k,children:(0,c.jsx)(i.Z,{options:b,type:p,series:n,width:h,height:v})})})};return(0,c.jsx)(c.Fragment,{children:m?(0,c.jsx)(l.Z,{children:(0,c.jsxs)("div",{className:"position-relative ".concat(g),children:[(0,c.jsx)("div",{style:y?{}:d,children:t})&&(0,c.jsx)("h4",{className:"font-weight-bold",style:y?{}:d,children:t}),j&&(0,c.jsx)("div",{ref:N,style:y?{}:u,children:j}),C()]})}):C()})};h.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"},t.Z=h},51988:function(e,t,n){n.d(t,{Z:function(){return c}});n(47313);var r=n(24511),s=n(66188),l=n.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",i=n.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=n.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",a=n(46417);var c=function(e){var t=e.id,n=void 0===t?"noresult":t,c=e.text,d=void 0===c?"":c,u=(0,r.$)().t,h={src:{noproductsfound:l,noresult:i,nosell:o}[n],artboard:"New Artboard",autoplay:!0},v=(0,s.useRive)(h).RiveComponent;return(0,a.jsxs)("div",{className:"animation-canvas",children:[(0,a.jsx)("div",{style:{width:"100%",height:200},children:(0,a.jsx)(v,{})}),(0,a.jsx)("div",{className:"text",children:u(d)})]})}},33533:function(e,t,n){n.d(t,{B0:function(){return o},DM:function(){return s},LB:function(){return a},fT:function(){return i},jd:function(){return l}});var r=n(1413),s=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(s),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},i=(0,r.Z)({},l),o={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(s),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"".concat(e)}}}},a={colors:[].concat(s),plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce((function(e,t){return e+t}),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},84017:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",r=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===n?"".concat(r," ").concat(t):"".concat(t," ").concat(r)}n.d(t,{Z:function(){return r}})},58051:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var r=n(47313),s=n(2717),l=n(90954),i=n(37312),o=n(94024),a=n(32442),c=n(51282),d=n(12380),u=n(32714),h=n(68197),v=n(59624),f=n(77181),x=n(24511),m=n(97890),p=n(74294),j=n(72652),Z=n(41068),g=n(70816),b=n.n(g),y=n(13944),w=n(33533),N=n(46417);function k(){var e=(0,x.$)().t,t=(0,s.I0)(),n=(0,s.v9)((function(e){return e.orderCounts}),s.wU),l=n.counts,i=n.params,o=n.loading,a=(0,s.v9)((function(e){return e.auth.user}),s.wU).role,c=(0,s.v9)((function(e){return e.theme.theme}),s.wU).direction,u=(0,r.useMemo)((function(){return l.map((function(e){return b()(e.time).format("D MMM")}))}),[l]),h=(0,r.useMemo)((function(){return[{name:e("orders"),data:(null===l||void 0===l?void 0:l.map((function(e){return e.count})))||[]}]}),[l]);return(0,N.jsxs)(f.Z,{className:"h-100",title:e("orders"),extra:(0,N.jsxs)(p.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:function(e){var n={time:e};switch(t((0,d.KJ)(n)),a){case"admin":t((0,d.n8)(n));break;case"seller":t((0,d._I)(n))}},defaultValue:"subMonth",children:[(0,N.jsx)(p.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(p.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(p.Z.Option,{value:"subYear",children:e("this.year")})]}),children:[o&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-5",children:[(0,N.jsx)("h2",{className:"font-weight-bold mb-1",children:null===l||void 0===l?void 0:l.reduce((function(e,t){return e+(null===t||void 0===t?void 0:t.count)}),0)}),(0,N.jsxs)("p",{children:[(0,N.jsx)(Z.Z,{color:w.DM[6]}),e("total.orders.count")]})]})}),(0,N.jsx)("div",{children:(0,N.jsx)(y.Z,{card:!1,series:h,xAxis:u,height:280,customOptions:{colors:[w.DM[6],w.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:c})})]})}var C=n(84017);function O(){var e=(0,x.$)().t,t=(0,s.I0)(),n=(0,s.v9)((function(e){return e.currency}),s.wU).defaultCurrency,l=(0,s.v9)((function(e){return e.orderSales}),s.wU),i=l.sales,o=l.params,a=l.loading,c=(0,s.v9)((function(e){return e.auth.user}),s.wU).role,d=(0,s.v9)((function(e){return e.theme.theme}),s.wU).direction,h=(0,r.useMemo)((function(){return i.map((function(e){return b()(e.time).format("D MMM")}))}),[i]),v=(0,r.useMemo)((function(){return[{name:e("sales"),data:(null===i||void 0===i?void 0:i.map((function(e){return e.total_price.toFixed(2)})))||[]}]}),[i]);return(0,N.jsxs)(f.Z,{className:"h-100",title:e("sales"),extra:(0,N.jsxs)(p.Z,{value:o.time,size:"small",style:{minWidth:110},onSelect:function(e){var n={time:e};switch(t((0,u.wJ)(n)),c){case"admin":t((0,u.yS)(n));break;case"seller":t((0,u.xe)(n))}},defaultValue:"subMonth",children:[(0,N.jsx)(p.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(p.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(p.Z.Option,{value:"subYear",children:e("this.year")})]}),children:[a&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-5",children:[(0,N.jsx)("h2",{className:"font-weight-bold mb-1",children:(0,C.Z)(i.reduce((function(e,t){return e+t.total_price}),0),null===n||void 0===n?void 0:n.symbol,null===n||void 0===n?void 0:n.position)}),(0,N.jsxs)("p",{children:[(0,N.jsx)(Z.Z,{color:w.DM[0]}),e("total.sales.amount")]})]})}),(0,N.jsx)("div",{children:(0,N.jsx)(y.Z,{card:!1,type:"area",series:v,xAxis:h,height:280,customOptions:{colors:w.DM,legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:d})})]})}var M=n(14637);function _(e){var t=e.title,n=void 0===t?"Orders":t,r=e.value,l=void 0===r?0:r,i=e.subtitle,o=(0,s.v9)((function(e){return e.currency}),s.wU).defaultCurrency;return(0,N.jsxs)(f.Z,{children:[n&&(0,N.jsx)("h4",{className:"mb-0",children:n}),(0,N.jsx)("div",{className:"".concat(n?"mt-3":""),children:(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"d-flex align-items-center",children:(0,N.jsx)("h1",{className:"mb-0 font-weight-bold",children:(0,C.Z)(l,null===o||void 0===o?void 0:o.symbol,null===o||void 0===o?void 0:o.position)})}),i&&(0,N.jsx)("div",{className:"text-gray-light mt-1",children:i})]})})]})}function P(){var e=(0,x.$)().t,t=(0,s.v9)((function(e){return e.auth}),s.wU).user;return(0,N.jsx)(f.Z,{children:(0,N.jsx)("div",{className:"d-flex justify-content-between",children:(0,N.jsxs)("div",{children:[(0,N.jsxs)("h2",{children:[e("hello"),", ",t.fullName," \ud83d\udc4b"]}),(0,N.jsx)("p",{children:e("hello.text")})]})})})}var S=n(4942),I=n(1413),E=n(45705),z=n(26824),U=n(85711),F=n(51988);function T(){var e=(0,x.$)().t,t=(0,s.I0)(),n=(0,s.v9)((function(e){return e.topCustomers}),s.wU),r=n.topCustomers,l=n.loading,i=n.params,a=(0,s.v9)((function(e){return e.currency}),s.wU).defaultCurrency,c=(0,s.v9)((function(e){return e.auth.user}),s.wU).role,d=function(e,n){var r=(0,I.Z)((0,I.Z)({},i),{},(0,S.Z)({},e,n));switch(t((0,o.Ww)(r)),c){case"admin":t((0,o.sl)(r));break;case"seller":t((0,o.n)(r))}};return(0,N.jsxs)(f.Z,{title:e("top.customers"),extra:(0,N.jsxs)(E.Z,{children:[(0,N.jsxs)(p.Z,{value:i.perPage,size:"small",style:{minWidth:110},onSelect:function(e){return d("perPage",e)},children:[(0,N.jsx)(p.Z.Option,{value:5,children:"5 / ".concat(e("page"))}),(0,N.jsx)(p.Z.Option,{value:10,children:"10 / ".concat(e("page"))}),(0,N.jsx)(p.Z.Option,{value:50,children:"50 / ".concat(e("page"))}),(0,N.jsx)(p.Z.Option,{value:100,children:"100 / ".concat(e("page"))})]}),(0,N.jsxs)(p.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:function(e){return d("time",e)},defaultValue:"subMonth",children:[(0,N.jsx)(p.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(p.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(p.Z.Option,{value:"subYear",children:e("this.year")})]})]}),className:"h-100",children:[l&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:r.length?r.map((function(t,n){return(0,N.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,N.jsxs)("div",{className:"d-flex avatar",children:[(0,N.jsx)(z.Z,{src:(0,U.Z)(t.img),width:40,height:40,preview:!1,className:"rounded"}),(0,N.jsxs)("div",{className:"ml-2 avatar-text",children:[(0,N.jsx)("h5",{className:"title",children:t.firstname+" "+t.lastname}),(0,N.jsx)("div",{className:"text-muted",children:t.phone})]})]}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-3 text-right",children:[(0,N.jsxs)("span",{className:"text-muted",children:[t.count," ",e("orders")]}),(0,N.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:(0,C.Z)(t.total_price,null===a||void 0===a?void 0:a.symbol,null===a||void 0===a?void 0:a.position)})]})})]},n)})):(0,N.jsx)(h.Z,{children:(0,N.jsx)(v.Z,{span:24,children:(0,N.jsx)(F.Z,{id:"nosell"})})})})]})}var D=n(45464);function $(){var e=(0,x.$)().t,t=(0,s.I0)(),n=(0,s.v9)((function(e){return e.topProducts}),s.wU),r=n.topProducts,l=n.loading,i=n.params,o=(0,s.v9)((function(e){return e.auth.user}),s.wU).role,c=function(e,n){var r=(0,I.Z)((0,I.Z)({},i),{},(0,S.Z)({},e,n));switch(t((0,a.ut)(r)),o){case"admin":t((0,a.hT)(r));break;case"seller":t((0,a.t3)(r))}};return(0,N.jsxs)(f.Z,{title:e("top.selled.products"),extra:(0,N.jsxs)(E.Z,{children:[(0,N.jsxs)(p.Z,{value:i.perPage,size:"small",style:{minWidth:110},onSelect:function(e){return c("perPage",e)},children:[(0,N.jsx)(p.Z.Option,{value:5,children:"5 / ".concat(e("page"))}),(0,N.jsx)(p.Z.Option,{value:10,children:"10 / ".concat(e("page"))}),(0,N.jsx)(p.Z.Option,{value:50,children:"50 / ".concat(e("page"))}),(0,N.jsx)(p.Z.Option,{value:100,children:"100 / ".concat(e("page"))})]}),(0,N.jsxs)(p.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:function(e){return c("time",e)},defaultValue:"subMonth",children:[(0,N.jsx)(p.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(p.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(p.Z.Option,{value:"subYear",children:e("this.year")})]})]}),className:"h-100",children:[l&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:null!==r&&void 0!==r&&r.length?r.map((function(t,n){var r,s,l,i;return(0,N.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,N.jsxs)("div",{className:"d-flex avatar",children:[(0,N.jsx)(z.Z,{src:(0,D.Z)(null===t||void 0===t||null===(r=t.product)||void 0===r?void 0:r.img),width:40,height:40,preview:!1,style:{borderRadius:10}}),(0,N.jsx)("div",{className:"ml-2 avatar-text",children:(0,N.jsx)("h5",{className:"title",children:null===t||void 0===t||null===(s=t.product)||void 0===s||null===(l=s.translation)||void 0===l?void 0:l.title})})]}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-3 text-right",children:[(0,N.jsx)("span",{className:"text-muted",children:e("sales")}),(0,N.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:null!==(i=null===t||void 0===t?void 0:t.count)&&void 0!==i?i:0})]})})]},n)})):(0,N.jsx)(h.Z,{children:(0,N.jsx)(v.Z,{span:24,children:(0,N.jsx)(F.Z,{id:"nosell"})})})})]})}var A=n(59491),K=n(29439),R=n(10976),W=n(66672),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},Y=n(17469),L=function(e,t){return r.createElement(Y.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:V}))};L.displayName="PlusCircleFilled";var B=r.forwardRef(L),H=function(e){var t=e.onFormSubmit,n=R.Z.useForm(),r=(0,K.Z)(n,1)[0],s=(0,x.$)().t;return(0,N.jsx)(R.Z,{form:r,onFinish:function(e){t(e),r.resetFields()},layout:"horizontal",className:"todo-form",children:(0,N.jsxs)(h.Z,{gutter:20,children:[(0,N.jsx)(v.Z,{xs:24,sm:24,md:12,lg:14,xl:18,children:(0,N.jsx)(R.Z.Item,{name:"name",rules:[{validator:function(e,t){return t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(s("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(s("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(s("required")))}}],children:(0,N.jsx)(W.Z,{placeholder:s("todo.placeholder")})})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:12,lg:10,xl:6,children:(0,N.jsxs)(A.Z,{type:"primary",htmlType:"submit",block:!0,children:[(0,N.jsx)(B,{}),s("todo.add")]})})]})})},q=n(56140),J=n(42346),G=n(32697),X=function(e){var t=e.todos,n=e.onTodoToggle,r=(0,x.$)().t;return(0,N.jsxs)(N.Fragment,{children:[0===t.length||(0,N.jsxs)(q.Z.Text,{children:[t.filter((function(e){return e.isComplete})).length," of ",t.length," ",r("remaining")]}),(0,N.jsx)("div",{style:{maxHeight:"280px",overflowY:"auto"},children:(0,N.jsx)(J.ZP,{locale:{emptyText:r("todo.empty")},dataSource:t,renderItem:function(e){return(0,N.jsx)(J.ZP.Item,{style:{paddingRight:0,paddingLeft:0},onClick:function(){return n(e.id)},children:(0,N.jsxs)(E.Z,{className:"w-100 justify-content-between",children:[(0,N.jsxs)(E.Z,{className:"align-items-end",children:[(0,N.jsx)(G.Z,{checked:e.isComplete}),(0,N.jsx)(q.Z.Text,{delete:e.isComplete,children:e.name})]}),(0,N.jsx)(q.Z.Text,{children:b()(e.date).format("MMM DD YYYY hh:mm a")})]})},e.id)}})})]})},Q=n(17777),ee=function(){var e=(0,s.v9)((function(e){return e.todo.todos})),t=(0,x.$)().t,n=(0,s.I0)();return(0,N.jsxs)(f.Z,{className:"h-100",title:t("todo.list"),extra:(0,N.jsx)(A.Z,{danger:!0,type:"primary",disabled:0===e.filter((function(e){return e.isComplete})).length,onClick:function(){n((0,Q.Xd)(e.filter((function(e){return e.isComplete})).map((function(e){return e.id}))))},children:t("archive")}),children:[(0,N.jsx)(H,{onFormSubmit:function(e){return n((0,Q.rk)(e))}}),(0,N.jsx)(X,{todos:e,onTodoToggle:function(e){return n((0,Q.wv)(e))}})]})},te=function(e){var t=e.counts,n=(0,x.$)().t;return(0,N.jsx)(f.Z,{title:n("orders"),className:"h-100",children:(0,N.jsx)(y.Z,{type:"pie",series:[(null===t||void 0===t?void 0:t.progress_orders_count)||{data:[]},(null===t||void 0===t?void 0:t.delivered_orders_count)||{data:[]},(null===t||void 0===t?void 0:t.cancel_orders_count)||{data:[]}],xAxis:[n("in.progress.orders"),n("delivered.orders"),n("canceled.orders")],customOptions:{labels:[n("in.progress.orders"),n("delivered.orders"),n("canceled.orders")]}})})};function ne(e){var t=e.isSeller,n=(0,x.$)().t,i=(0,m.s0)(),o=(0,s.I0)(),a=(0,s.v9)((function(e){return e.auth}),s.wU).user,c=(0,s.v9)((function(e){return e.statisticsCount}),s.wU).counts,d=(0,s.v9)((function(e){return e.theme}),s.wU).theme,u=(0,r.useMemo)((function(){return!!d.parcelMode&&"admin"===(null===a||void 0===a?void 0:a.role)}),[d,a]),p=function(e,t){var n="report/stock"===e?{id:e,url:e,name:t,refetch:!0,data:{value:"out_of_stock",label:"Out of stock"}}:{id:e,url:e,name:t,refetch:!0};o((0,l.K0)(n)),i("/".concat(e))};return(0,N.jsxs)("div",{children:[(0,N.jsx)(P,{}),u?(0,N.jsx)("div",{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,N.jsx)(v.Z,{span:24,children:(0,N.jsx)(f.Z,{children:(0,N.jsx)("span",{style:{fontSize:"1rem"},children:n("last.30.days.statistics")})})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:n("in.progress.orders"),value:null===c||void 0===c?void 0:c.progress_orders_count,color:"purple",onClick:function(){return p("seller"===(null===a||void 0===a?void 0:a.role)?"seller/orders?status=new":"orders?status=new",n("in.progress.orders"))}})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:n("cancelled.orders"),value:null===c||void 0===c?void 0:c.cancel_orders_count,color:"red",onClick:function(){return p("seller"===(null===a||void 0===a?void 0:a.role)?"seller/orders?status=canceled":"orders?status=canceled",n("cancelled.orders"))}})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:n("delivered.orders"),value:null===c||void 0===c?void 0:c.delivered_orders_count,color:"green",onClick:function(){return p("seller"===(null===a||void 0===a?void 0:a.role)?"seller/orders?status=delivered":"orders?status=delivered",n("delivered.orders"))}})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:n("out.of.stock.products"),value:null===c||void 0===c?void 0:c.products_out_of_count,color:"red",onClick:function(){"admin"===(null===a||void 0===a?void 0:a.role)&&p("report/stock",n("stock"))}})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:n("total.products"),value:null===c||void 0===c?void 0:c.products_count,color:"grey",onClick:function(){return p("seller"===(null===a||void 0===a?void 0:a.role)?"seller/products":"catalog/products",n("products"))}})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:n("shop.reviews"),value:null===c||void 0===c?void 0:c.reviews_count,color:"purple"})})]}),(0,N.jsxs)(h.Z,{gutter:16,children:[(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:n("total.earned"),value:null===c||void 0===c?void 0:c.total_earned,subtitle:n("last.30.days")})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:n("delivery.earning"),value:null===c||void 0===c?void 0:c.delivery_earned,subtitle:n("last.30.days")})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:n("total.order.tax"),value:null===c||void 0===c?void 0:c.tax_earned,subtitle:n("last.30.days")})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:n("total.comission"),value:null===c||void 0===c?void 0:c.commission_earned,subtitle:n("last.30.days")})})]}),(0,N.jsxs)(h.Z,{gutter:[24,24],children:[(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(k,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(ee,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)($,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(O,{})}),!t&&(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(T,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(te,{counts:c})})]})]})]})}var re=n(49986);function se(){var e,t=(0,x.$)().t,n=(0,r.useState)(null),l=(0,K.Z)(n,2),i=l[0],o=l[1],a=(0,s.v9)((function(e){return e.statisticsCount}),s.wU).counts;return(0,r.useEffect)((function(){re.Z.profileShow().then((function(e){var t=e.data;return o(t)}))}),[]),(0,N.jsxs)("div",{children:[(0,N.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("total.orders"),value:a.orders_count})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("in.progress.orders"),value:a.progress_orders_count})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("cancelled.orders"),value:a.cancel_orders_count})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("delivered.orders"),value:a.delivered_orders_count})})]}),(0,N.jsx)(h.Z,{gutter:16,children:(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:t("balance"),value:null===i||void 0===i||null===(e=i.wallet)||void 0===e?void 0:e.price})})})]})}var le=n(87569),ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},oe=function(e,t){return r.createElement(Y.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:ie}))};oe.displayName="SmileOutlined";var ae=r.forwardRef(oe);function ce(){var e=(0,x.$)().t,t=(0,s.I0)(),n=(0,m.s0)(),r=(0,s.v9)((function(e){return e.auth}),s.wU).user;return(0,N.jsx)(f.Z,{children:(0,N.jsx)(le.ZP,{icon:(0,N.jsx)(ae,{}),title:"".concat(e("welcome"),", ").concat(null===r||void 0===r?void 0:r.fullName),subTitle:e("welcome.manager"),extra:(0,N.jsx)(A.Z,{type:"primary",onClick:function(){t((0,l.bL)({id:"orders",url:"orders",name:e("orders")})),n("/orders")},children:e("get.started")})})})}function de(){var e=(0,x.$)().t,t=(0,s.I0)(),n=(0,m.s0)(),r=(0,s.v9)((function(e){return e.auth}),s.wU).user;return(0,N.jsx)(f.Z,{children:(0,N.jsx)(le.ZP,{icon:(0,N.jsx)(ae,{}),title:"".concat(e("welcome"),", ").concat(null===r||void 0===r?void 0:r.fullName),subTitle:e("welcome.manager"),extra:(0,N.jsx)(A.Z,{type:"primary",onClick:function(){t((0,l.bL)({id:"orders",url:"seller/orders",name:e("orders")})),n("/seller/orders")},children:e("get.started")})})})}function ue(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.menu}),s.wU).activeMenu,n=(0,s.v9)((function(e){return e.auth}),s.wU).user,h=(0,s.v9)((function(e){return e.statisticsCount}),s.wU).loading;(0,r.useEffect)((function(){t.refetch&&(!function(){var t={time:"subMonth"};switch(null===n||void 0===n?void 0:n.role){case"admin":e((0,i.dL)(t)),e((0,o.sl)(t)),e((0,a.hT)(t)),e((0,d.n8)(t)),e((0,u.yS)(t));break;case"manager":e((0,o.sl)(t)),e((0,a.hT)(t));break;case"seller":e((0,i.gm)(t)),e((0,a.t3)(t)),e((0,d._I)(t)),e((0,u.xe)(t));break;case"moderator":default:break;case"deliveryman":e((0,i.Hq)())}}(),e((0,l.A_)(t)))}),[t.refetch]);return(0,N.jsx)("div",{className:"h-100",children:h?(0,N.jsx)(c.Z,{size:"large"}):function(){switch(n.role){case"admin":return(0,N.jsx)(ne,{});case"manager":return(0,N.jsx)(ce,{});case"seller":return(0,N.jsx)(ne,{isSeller:!0});case"moderator":return(0,N.jsx)(de,{});case"deliveryman":return(0,N.jsx)(se,{});case"waiter":return(0,N.jsx)(m.Fg,{to:"/waiter/orders-board",replace:!0});default:return null}}()})}},14637:function(e,t,n){n.d(t,{Z:function(){return l}});n(47313);var r=n(77181),s=n(46417);function l(e){var t=e.title,n=void 0===t?"Orders":t,l=e.value,i=void 0===l?0:l,o=e.color,a=void 0===o?"grey":o,c=e.onClick;return(0,s.jsx)(r.Z,{className:"statistics-card",hoverable:!!c,onClick:c,children:(0,s.jsxs)("div",{className:"card-wrapper",children:[(0,s.jsx)("div",{className:"space"}),(0,s.jsx)("div",{className:"content",children:(0,s.jsx)("h1",{className:"number",children:i})}),(0,s.jsx)("span",{className:"highlighter ".concat(a)}),n&&(0,s.jsx)("h4",{className:"title",children:n})]})})}},32697:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(4942),s=n(87462),l=n(47313),i=n(46123),o=n.n(i),a=n(56482),c=n(4431),d=n(93433),u=n(29439),h=n(205),v=n(91964),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n},x=l.createContext(null),m=function(e,t){var n=e.defaultValue,i=e.children,a=e.options,c=void 0===a?[]:a,m=e.prefixCls,p=e.className,j=e.style,Z=e.onChange,g=f(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),b=l.useContext(v.E_),w=b.getPrefixCls,N=b.direction,k=l.useState(g.value||n||[]),C=(0,u.Z)(k,2),O=C[0],M=C[1],_=l.useState([]),P=(0,u.Z)(_,2),S=P[0],I=P[1];l.useEffect((function(){"value"in g&&M(g.value||[])}),[g.value]);var E=function(){return c.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},z=w("checkbox",m),U="".concat(z,"-group"),F=(0,h.Z)(g,["value","disabled"]);c&&c.length>0&&(i=E().map((function(e){return l.createElement(y,{prefixCls:z,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:-1!==O.indexOf(e.value),onChange:e.onChange,className:"".concat(U,"-item"),style:e.style},e.label)})));var T={toggleOption:function(e){var t=O.indexOf(e.value),n=(0,d.Z)(O);-1===t?n.push(e.value):n.splice(t,1),"value"in g||M(n);var r=E();null===Z||void 0===Z||Z(n.filter((function(e){return-1!==S.indexOf(e)})).sort((function(e,t){return r.findIndex((function(t){return t.value===e}))-r.findIndex((function(e){return e.value===t}))})))},value:O,disabled:g.disabled,name:g.name,registerValue:function(e){I((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){I((function(t){return t.filter((function(t){return t!==e}))}))}},D=o()(U,(0,r.Z)({},"".concat(U,"-rtl"),"rtl"===N),p);return l.createElement("div",(0,s.Z)({className:D,style:j},F,{ref:t}),l.createElement(x.Provider,{value:T},i))},p=l.forwardRef(m),j=l.memo(p),Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n},g=function(e,t){var n,i=e.prefixCls,d=e.className,u=e.children,h=e.indeterminate,f=void 0!==h&&h,m=e.style,p=e.onMouseEnter,j=e.onMouseLeave,g=e.skipGroup,b=void 0!==g&&g,y=Z(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),w=l.useContext(v.E_),N=w.getPrefixCls,k=w.direction,C=l.useContext(x),O=(0,l.useContext)(c.aM).isFormItemInput,M=l.useRef(y.value);l.useEffect((function(){null===C||void 0===C||C.registerValue(y.value)}),[]),l.useEffect((function(){if(!b)return y.value!==M.current&&(null===C||void 0===C||C.cancelValue(M.current),null===C||void 0===C||C.registerValue(y.value),M.current=y.value),function(){return null===C||void 0===C?void 0:C.cancelValue(y.value)}}),[y.value]);var _=N("checkbox",i),P=(0,s.Z)({},y);C&&!b&&(P.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),C.toggleOption&&C.toggleOption({label:u,value:y.value})},P.name=C.name,P.checked=-1!==C.value.indexOf(y.value),P.disabled=y.disabled||C.disabled);var S=o()((n={},(0,r.Z)(n,"".concat(_,"-wrapper"),!0),(0,r.Z)(n,"".concat(_,"-rtl"),"rtl"===k),(0,r.Z)(n,"".concat(_,"-wrapper-checked"),P.checked),(0,r.Z)(n,"".concat(_,"-wrapper-disabled"),P.disabled),(0,r.Z)(n,"".concat(_,"-wrapper-in-form-item"),O),n),d),I=o()((0,r.Z)({},"".concat(_,"-indeterminate"),f)),E=f?"mixed":void 0;return l.createElement("label",{className:S,style:m,onMouseEnter:p,onMouseLeave:j},l.createElement(a.Z,(0,s.Z)({"aria-checked":E},P,{prefixCls:_,className:I,ref:t})),void 0!==u&&l.createElement("span",null,u))},b=l.forwardRef(g);b.displayName="Checkbox";var y=b,w=y;w.Group=j,w.__ANT_CHECKBOX=!0;var N=w},56482:function(e,t,n){var r=n(87462),s=n(4942),l=n(45987),i=n(1413),o=n(15671),a=n(43144),c=n(60136),d=n(29388),u=n(47313),h=n(46123),v=n.n(h),f=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){var r;(0,o.Z)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,s=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),s&&s({target:(0,i.Z)((0,i.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var s="checked"in e?e.checked:e.defaultChecked;return r.state={checked:s},r}return(0,a.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,i=t.className,o=t.style,a=t.name,c=t.id,d=t.type,h=t.disabled,f=t.readOnly,x=t.tabIndex,m=t.onClick,p=t.onFocus,j=t.onBlur,Z=t.onKeyDown,g=t.onKeyPress,b=t.onKeyUp,y=t.autoFocus,w=t.value,N=t.required,k=(0,l.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),C=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),O=this.state.checked,M=v()(n,i,(e={},(0,s.Z)(e,"".concat(n,"-checked"),O),(0,s.Z)(e,"".concat(n,"-disabled"),h),e));return u.createElement("span",{className:M,style:o},u.createElement("input",(0,r.Z)({name:a,id:c,type:d,required:N,readOnly:f,disabled:h,tabIndex:x,className:"".concat(n,"-input"),checked:!!O,onClick:m,onFocus:p,onBlur:j,onKeyUp:b,onKeyDown:Z,onKeyPress:g,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:w},C)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,i.Z)((0,i.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.Z=f}}]);
(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5368],{13944:function(e,t,n){"use strict";var r=n(1413),i=n(47313),o=n(77181),l=n(58446),a=n(27834),s=n(33533),c=n(46417),d={position:"absolute",zIndex:"1"},u={position:"absolute",zIndex:"1",right:"0",top:"-2px"},p=function(e){var t=e.title,n=e.series,p=e.width,h=e.height,f=e.xAxis,v=e.customOptions,x=e.card,g=e.type,m=e.extra,y=e.direction,Z=e.bodyClass,j=JSON.parse(JSON.stringify(function(e){switch(e){case"line":default:return s.jd;case"bar":return s.B0;case"area":return s.fT;case"pie":return s.LB}}(g))),b=window.innerWidth<768,w=function(){if(z.current){var e,t=z.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(b?0:null===(e=_.current)||void 0===e?void 0:e.offsetWidth,"px"),"rtl"===y&&(t.style.right="auto",t.style.left="0"),b&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,i.useEffect)((function(){w()}),[]);var _=(0,i.useRef)(null),z=(0,i.useRef)();j.xaxis={categories:f},v&&(j=(0,r.Z)((0,r.Z)({},j),v));var C=function(){return(0,c.jsx)(a.ZP,{onResize:void setTimeout((function(){w()}),600),children:(0,c.jsx)("div",{style:"rtl"===y?{direction:"ltr"}:{},className:"chartRef",ref:z,children:(0,c.jsx)(l.Z,{options:j,type:g,series:n,width:p,height:h})})})};return(0,c.jsx)(c.Fragment,{children:x?(0,c.jsx)(o.Z,{children:(0,c.jsxs)("div",{className:"position-relative ".concat(Z),children:[(0,c.jsx)("div",{style:b?{}:d,children:t})&&(0,c.jsx)("h4",{className:"font-weight-bold",style:b?{}:d,children:t}),m&&(0,c.jsx)("div",{ref:_,style:b?{}:u,children:m}),C()]})}):C()})};p.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"},t.Z=p},33533:function(e,t,n){"use strict";n.d(t,{B0:function(){return a},DM:function(){return i},LB:function(){return s},fT:function(){return l},jd:function(){return o}});var r=n(1413),i=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],o={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(i),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},l=(0,r.Z)({},o),a={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(i),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"".concat(e)}}}},s={colors:[].concat(i),plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce((function(e,t){return e+t}),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},84017:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",r=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===n?"".concat(r," ").concat(t):"".concat(t," ").concat(r)}n.d(t,{Z:function(){return r}})},57878:function(e,t,n){"use strict";n.r(t);var r=n(56140),i=n(99096),o=n(72652),l=n(68197),a=n(59624),s=n(45705),c=n(46155),d=n(77181),u=n(74294),p=n(78508),h=n(47313),f=n(13944),v=n(16034),x=n(88038),g=n(2717),m=n(97890),y=n(29466),Z=n(74776),j=n.n(Z),b=n(93131),w=n(41591),_=n(90954),z=n(80314),C=n(70816),k=n.n(C),S=n(84017),T=n(24511),N=n(46417),O=r.Z.Text,q=r.Z.Title,I=i.Z.RangePicker;t.default=function(){var e,t,n,r,i,Z,C,R,L,P,A=(0,T.$)().t,B=(0,m.TH)(),M=j().parse(B.search,[])["?category_id"],D=j().parse(B.search,[])["?product_id"],F=(0,h.useContext)(b.G),E=F.date_from,H=F.date_to,U=F.by_time,W=F.chart,V=F.handleDateRange,Y=F.options,$=F.handleByTime,G=F.chart_type,J=F.setChartType,K=(0,g.v9)((function(e){return e.overviewReport}),g.wU),Q=K.loading,X=K.carts,ee=K.products,te=K.categories,ne=(0,g.v9)((function(e){return e.currency}),g.wU).defaultCurrency,re=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,ie=(0,g.I0)(),oe=[{title:A("title"),dataIndex:"title",key:"title",render:function(e){return function(e){var t=null===e||void 0===e?void 0:e.split(", ");return(0,N.jsx)("div",{style:{display:"flex",rowGap:"10px",flexDirection:"column"},children:null===t||void 0===t?void 0:t.map((function(e,t){return"#"===(null===e||void 0===e?void 0:e[0])?(0,N.jsx)("span",{style:{display:"block",width:"15px",height:"15px",borderRadius:"50%",backgroundColor:null===e||void 0===e?void 0:e.trim()}}):e}))})}(e)}},{title:A("item.sold"),dataIndex:"quantity",key:"quantity"},{title:A("net.sales"),dataIndex:"total_price",key:"total_price",render:function(e){return(0,S.Z)(e,null===ne||void 0===ne?void 0:ne.symbol)}},{title:A("orders"),dataIndex:"count",key:"count"}],le=[{title:"Total sales",qty:"delivered_sum",percent:"5",price:!0},{title:"Orders",qty:"count",percent:"5",price:!1},{title:"Canceled orders price",qty:"canceled_sum",percent:"5",price:!0},{title:"Total tax",qty:"tax",percent:"5",price:!0},{title:"Delivered avg",qty:"delivered_avg",percent:"5",price:!0},{title:"Delivery fee",qty:"delivery_fee",percent:"5",price:!0}],ae=function(e,t){var n={date_from:E,date_to:H,type:U,page:e,perPage:t};ie((0,w.kk)(n))},se=function(e,t){var n={date_from:E,date_to:H,type:U,page:e,perPage:t};ie((0,w.E7)(n))},ce=function(e,t){var n={date_from:E,date_to:H,type:U,page:e,perPage:t};M&&(n.categories=[M]),D&&(n.products=[D]),ie((0,w.Y7)(n))};return(0,h.useEffect)((function(){re.refetch&&(ce(),ae(),se(),ie((0,_.A_)(re)))}),[re.refetch]),(0,z.Z)((function(){ce()}),[H,U,W,M,D,E]),(0,z.Z)((function(){ae()}),[H,U,E]),(0,z.Z)((function(){se()}),[H,U,E]),(0,N.jsxs)(o.Z,{size:"large",spinning:Q,children:[(0,N.jsx)(l.Z,{gutter:24,className:"mb-4",children:(0,N.jsx)(a.Z,{span:12,children:(0,N.jsx)(s.Z,{size:"large",children:(0,N.jsx)(I,{defaultValue:[k()(E),k()(H)],onChange:V})})})}),(0,N.jsx)(c.Z,{orientation:"left",children:"Performance"}),(0,N.jsx)(l.Z,{gutter:24,children:null===le||void 0===le?void 0:le.map((function(e,t){return(0,N.jsx)(a.Z,{span:6,children:(0,N.jsx)(y.rU,{to:"/report/revenue",children:(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(l.Z,{className:"mb-5",children:(0,N.jsx)(a.Z,{children:(0,N.jsx)(O,{children:e.title})})}),(0,N.jsx)(l.Z,{gutter:24,children:(0,N.jsx)(a.Z,{span:12,children:(0,N.jsx)(q,{level:2,children:e.price?(0,S.Z)(X[e.qty],null===ne||void 0===ne?void 0:ne.symbol):X[e.qty]})})})]})},e.title)})}))}),(0,N.jsxs)(l.Z,{gutter:24,className:"mb-2",children:[(0,N.jsx)(a.Z,{span:20,children:(0,N.jsx)(c.Z,{orientation:"left",children:"Charts"})}),(0,N.jsx)(a.Z,{span:4,children:(0,N.jsxs)("div",{className:"d-flex",children:[(0,N.jsx)(u.Z,{style:{width:100},onChange:$,options:Y,defaultValue:U}),(0,N.jsx)(c.Z,{type:"vertical",style:{height:"100%"}}),(0,N.jsxs)(s.Z,{children:[(0,N.jsx)(v.Z,{style:{fontSize:"22px",cursor:"pointer",color:"line"===G?"green":""},onClick:function(){return J("line")}}),(0,N.jsx)(x.Z,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===G?"green":""},onClick:function(){return J("bar")}})]})]})})]}),(0,N.jsxs)(l.Z,{gutter:24,children:[(0,N.jsx)(a.Z,{span:12,children:(0,N.jsx)(d.Z,{title:"Net Sales",children:(0,N.jsx)(f.Z,{type:G,series:[{name:"Orders",data:null===X||void 0===X||null===(e=X.chart_price)||void 0===e?void 0:e.map((function(e){return e.delivered_sum}))}],xAxis:null===X||void 0===X||null===(t=X.chart_price)||void 0===t?void 0:t.map((function(e){return e.time}))})})}),(0,N.jsx)(a.Z,{span:12,children:(0,N.jsx)(d.Z,{title:"Orders",children:(0,N.jsx)(f.Z,{type:G,series:[{name:"Orders",data:null===X||void 0===X||null===(n=X.chart_count)||void 0===n?void 0:n.map((function(e){return e.count}))}],xAxis:null===X||void 0===X||null===(r=X.chart_price)||void 0===r?void 0:r.map((function(e){return e.time}))})})})]}),(0,N.jsx)(c.Z,{orientation:"left",children:"Leaderboards"}),(0,N.jsxs)(l.Z,{gutter:24,children:[(0,N.jsx)(a.Z,{span:12,children:(0,N.jsx)(d.Z,{title:"Top categories",children:(0,N.jsx)(p.Z,{scroll:{x:!0},onChange:function(e){var t=e.pageSize,n=e.current;ae(n,t)},pagination:{pageSize:null===te||void 0===te||null===(i=te.meta)||void 0===i?void 0:i.per_page,page:(null===te||void 0===te||null===(Z=te.meta)||void 0===Z?void 0:Z.current_page)||1,total:null===te||void 0===te||null===(C=te.meta)||void 0===C?void 0:C.total,defaultCurrent:1},columns:oe,dataSource:null===te||void 0===te?void 0:te.data})})}),(0,N.jsx)(a.Z,{span:12,children:(0,N.jsx)(d.Z,{title:"Top products",children:(0,N.jsx)(p.Z,{scroll:{x:!0},onChange:function(e){var t=e.pageSize,n=e.current;ae(n,t)},pagination:{pageSize:null===ee||void 0===ee||null===(R=ee.meta)||void 0===R?void 0:R.per_page,page:(null===ee||void 0===ee||null===(L=ee.meta)||void 0===L?void 0:L.current_page)||1,total:null===ee||void 0===ee||null===(P=ee.meta)||void 0===P?void 0:P.total,defaultCurrent:1},columns:oe,dataSource:null===ee||void 0===ee?void 0:ee.data})})})]})]})}},16034:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1413),i=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"},l=n(17469),a=function(e,t){return i.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};a.displayName="LineChartOutlined";var s=i.forwardRef(a)},24654:function(){}}]);
(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2545],{13944:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(47313),r=s(77181),i=s(58446),l=s(27834),n=s(33533),o=s(46417);const c={position:"absolute",zIndex:"1"},d={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:s,width:u,height:h,xAxis:v,customOptions:x,card:m,type:p,extra:f,direction:g,bodyClass:y}=e,Z=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return n.jd;case"bar":return n.B0;case"area":return n.fT;case"pie":return n.LB}})(p)));const _=window.innerWidth<768,j=()=>{if(w.current){var e;const t=w.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(_?0:null===(e=b.current)||void 0===e?void 0:e.offsetWidth,"px"),"rtl"===g&&(t.style.right="auto",t.style.left="0"),_&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,a.useEffect)((()=>{j()}),[]);const b=(0,a.useRef)(null),w=(0,a.useRef)();Z.xaxis={categories:v},x&&(Z={...Z,...x});const z=()=>(0,o.jsx)(l.ZP,{onResize:void setTimeout((()=>{j()}),600),children:(0,o.jsx)("div",{style:"rtl"===g?{direction:"ltr"}:{},className:"chartRef",ref:w,children:(0,o.jsx)(i.Z,{options:Z,type:p,series:s,width:u,height:h})})});return(0,o.jsx)(o.Fragment,{children:m?(0,o.jsx)(r.Z,{children:(0,o.jsxs)("div",{className:"position-relative ".concat(y),children:[(0,o.jsx)("div",{style:_?{}:c,children:t})&&(0,o.jsx)("h4",{className:"font-weight-bold",style:_?{}:c,children:t}),f&&(0,o.jsx)("div",{ref:b,style:_?{}:d,children:f}),z()]})}):z()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},53233:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var a=s(47313),r=s(56140),i=s(67251),l=s(45705),n=s(86345),o=s(78267),c=s(37388),d=s(59491),u=s(99587),h=s(24511),v=s(46417);const{Text:x}=r.Z,m=e=>{let{columns:t=[],setColumns:s,style:r,size:m="",iconOnly:p}=e;const{t:f}=(0,h.$)(),[g,y]=(0,a.useState)(!1),Z=(0,v.jsx)(i.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,v.jsx)(i.Z.Item,{children:(0,v.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(x,{children:e.title}),(0,v.jsx)(n.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(a)}(e),disabled:1===a})]})},e+a)))});return(0,v.jsx)(o.Z,{overlay:Z,trigger:["click"],onVisibleChange:e=>{y(e)},visible:g,children:(0,v.jsx)(c.Z,{title:f("change.columns"),children:(0,v.jsx)(d.Z,{style:{...r},size:m,icon:(0,v.jsx)(u.Z,{}),children:p?null:f("Columns")})})})}},22133:(e,t,s)=>{"use strict";s.d(t,{Z:()=>y});var a=s(56140),r=s(68197),i=s(59624),l=s(77181),n=s(45705),o=s(74294),c=s(46155),d=s(47313),u=s(16034),h=s(88038),v=s(13944),x=s(33533),m=s(24511),p=s(93131),f=s(46417);const{Title:g}=a.Z,y=e=>{let{reportData:t={}}=e;const{by_time:s,options:a,handleByTime:y,chart_type:Z,setChartType:_}=(0,d.useContext)(p.G),{t:j}=(0,m.$)(),b=(0,d.useMemo)((()=>{var e;return null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>e.time))}),[null===t||void 0===t?void 0:t.chart]),w=(0,d.useMemo)((()=>{var e;return Boolean(t.charts)?t.charts.map((e=>{var t;return{name:e.translation.title,data:(null===(t=e.stocks)||void 0===t?void 0:t.map((e=>e.total_order_quantity||e.avg_quantity||e.quantity||e.count||e.price||e.order_details_sum_quantity||0)))||[]}})):[{name:j("orders"),data:(null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>parseInt(e.count||e.total_price||e.quantity||e.price||e.products_count||e.order_details_avg_quantity||e.order_details_avg_total_price||e.order_details_sum_quantity||e.avg_price||e.avg_quantity||0,10))))||[]}]}),[null===t||void 0===t?void 0:t.chart]);return(0,f.jsx)(r.Z,{gutter:24,children:(0,f.jsx)(i.Z,{span:24,children:(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(r.Z,{gutter:24,className:"w-100",children:(0,f.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[(0,f.jsx)(n.Z,{size:"large",className:"d-flex",children:(0,f.jsx)(g,{level:3,className:"mb-0",children:j("item.sold")})}),(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)(o.Z,{style:{width:100},onChange:y,options:a,defaultValue:s}),(0,f.jsx)(c.Z,{type:"vertical",style:{height:"100%"}}),(0,f.jsxs)(n.Z,{children:[(0,f.jsx)(u.Z,{style:{fontSize:"22px",cursor:"pointer",color:"area"===Z?"green":""},onClick:()=>_("area")}),(0,f.jsx)(h.Z,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===Z?"green":""},onClick:()=>_("bar")})]})]})]})}),(0,f.jsx)(c.Z,{}),(0,f.jsx)(v.Z,{type:Z||"area",card:!1,series:w,xAxis:b,height:280,customOptions:{colors:[x.DM[1],x.DM[2],x.DM[3],x.DM[4],x.DM[5],x.DM[6],x.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}}})]})})})}},33533:(e,t,s)=>{"use strict";s.d(t,{B0:()=>l,DM:()=>a,LB:()=>n,fT:()=>i,jd:()=>r});const a=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],r={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...a],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},i={...r},l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...a],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>"".concat(e)}}},n={colors:[...a],plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},84017:(e,t,s)=>{"use strict";function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const a=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===s?"".concat(a," ").concat(t):"".concat(t," ").concat(a)}s.d(t,{Z:()=>a})},73585:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>H});var a=s(56140),r=s(99096),i=s(72652),l=s(68197),n=s(59624),o=s(45705),c=s(77181),d=s(59491),u=s(78508),h=s(47313),v=s(63243),x=s(93131),m=s(2717),p=s(2388),f=s(80314),g=s(74776),y=s.n(g),Z=s(97890),_=s(90954),j=s(70816),b=s.n(j),w=s(26441),z=s(53233),C=s(84017),k=s(22133),N=s(46417);const{Title:q,Text:M}=a.Z,{RangePicker:I}=r.Z,H=()=>{const e=(0,Z.TH)(),t=y().parse(e.search,[])["?category_id"],s=y().parse(e.search,[])["?product_id"],{date_from:a,date_to:r,by_time:g,chart:j,handleDateRange:H,handleChart:R}=(0,h.useContext)(x.G),D=(0,m.I0)(),[V,O]=(0,h.useState)(!1),{activeMenu:S}=(0,m.v9)((e=>e.menu),m.wU),{defaultCurrency:T}=(0,m.v9)((e=>e.currency),m.wU),{loading:L,revenueList:B,chartData:A}=(0,m.v9)((e=>e.revenueReport),m.wU),[E,F]=(0,h.useState)([{title:"Date",dataIndex:"time",key:"time",is_show:!0,sorter:(e,t)=>b()(e.time).unix()-b()(t.time).unix()},{title:"Item sold",dataIndex:"count",key:"count",is_show:!0,sorter:(e,t)=>e.count-t.count},{title:"Orders",dataIndex:"total_quantity",key:"total_quantity",is_show:!0,sorter:(e,t)=>e.total_quantity-t.total_quantity},{title:"Shipping",key:"delivery_fee",dataIndex:"delivery_fee",render:(e,t)=>(0,C.Z)(t.delivery_fee,null===T||void 0===T?void 0:T.symbol),is_show:!0,sorter:(e,t)=>e.delivery_fee-t.delivery_fee},{title:"Returns",key:"canceled_sum",dataIndex:"canceled_sum",render:(e,t)=>(0,C.Z)(t.canceled_sum,null===T||void 0===T?void 0:T.symbol),is_show:!0,sorter:(e,t)=>e.canceled_sum-t.canceled_sum},{title:"Net sales",key:"total_price",dataIndex:"total_price",render:(e,t)=>(0,C.Z)(t.total_price,null===T||void 0===T?void 0:T.symbol),is_show:!0,sorter:(e,t)=>e.total_price-t.total_price},{title:"Tax",key:"tax",dataIndex:"tax",render:(e,t)=>(0,C.Z)(t.tax,null===T||void 0===T?void 0:T.symbol),is_show:!0,sorter:(e,t)=>e.tax-t.tax}]),P=()=>{const e={date_from:a,date_to:r,type:g,chart:j};t&&(e.categories=[t]),s&&(e.products=[s]),$.find((e=>e.value===j))&&D((0,p.eM)(e))},W=()=>{const e={date_from:a,date_to:r,type:g};t&&(e.categories=[t]),s&&(e.products=[s]),D((0,p.Wc)(e))},$=(0,h.useMemo)((()=>[{label:"Total sales",value:"avg_quantity",qty:"quantity",price:!1},{label:"Net sales",value:"price",qty:"price",price:!0},{label:"Average order price",value:"avg_price",qty:"avg_price",price:!0},{label:"Orders",value:"count",qty:"count",price:!1}]),[]);return(0,h.useEffect)((()=>{$.every((e=>e.value!==j))&&R($[0].value)}),[]),(0,h.useEffect)((()=>{S.refetch&&(W(),P(),D((0,_.A_)(S)))}),[S.refetch]),(0,f.Z)((()=>{W()}),[r,g,j,t,s,a]),(0,f.Z)((()=>{P()}),[r,g,j,a]),(0,N.jsxs)(i.Z,{size:"large",spinning:L,children:[(0,N.jsx)(l.Z,{gutter:24,className:"mb-4",children:(0,N.jsx)(n.Z,{span:12,children:(0,N.jsx)(o.Z,{size:"large",children:(0,N.jsx)(I,{defaultValue:[b()(a),b()(r)],onChange:H})})})}),(0,N.jsx)(l.Z,{gutter:24,className:"report-products",children:null===$||void 0===$?void 0:$.map(((e,t)=>(0,N.jsx)(n.Z,{span:6,onClick:()=>R(e.value),children:(0,N.jsxs)(c.Z,{className:j===e.value&&"active",children:[(0,N.jsx)(l.Z,{className:"mb-5",children:(0,N.jsx)(n.Z,{children:(0,N.jsx)(M,{children:e.label})})}),(0,N.jsx)(l.Z,{gutter:24,children:(0,N.jsx)(n.Z,{span:18,children:(0,N.jsx)(q,{level:2,children:e.price?(0,C.Z)(A[e.qty],null===T||void 0===T?void 0:T.symbol):A[e.qty]})})})]})},e.label)))}),(0,N.jsx)(k.Z,{reportData:A,chart_data:"quantities_sum"}),(0,N.jsx)(l.Z,{gutter:24,children:(0,N.jsx)(n.Z,{span:24,children:(0,N.jsxs)(c.Z,{children:[(0,N.jsx)(l.Z,{gutter:24,className:"align-items-center mb-2",children:(0,N.jsxs)(o.Z,{className:"w-100 mr-16 ml-16 justify-content-between",children:[(0,N.jsx)(q,{level:2,className:"mb-0",children:"Revenue"}),(0,N.jsxs)(o.Z,{align:"end",children:[(0,N.jsx)(d.Z,{onClick:()=>{O(!0),w.Z.getRevenueReport({date_from:a,date_to:r,type:g,export:"excel"}).then((e=>{const t=e.data.link;t&&(window.location.href=t)})).finally((()=>O(!1)))},loading:V,icon:(0,N.jsx)(v.Z,{}),children:"Download"}),(0,N.jsx)(z.Z,{columns:E,setColumns:F})]})]})}),(0,N.jsx)(u.Z,{columns:null===E||void 0===E?void 0:E.filter((e=>e.is_show)),loading:L,dataSource:null===B||void 0===B?void 0:B.paginate,pagination:!1})]})})})]})}},63243:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(1413),r=s(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"};var l=s(17469),n=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};n.displayName="CloudDownloadOutlined";const o=r.forwardRef(n)},16034:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(1413),r=s(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};var l=s(17469),n=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};n.displayName="LineChartOutlined";const o=r.forwardRef(n)},99587:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(1413),r=s(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=s(17469),n=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};n.displayName="TableOutlined";const o=r.forwardRef(n)},24654:()=>{}}]);
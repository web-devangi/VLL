"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[726],{13944:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(47313),a=r(77181),n=r(58446),i=r(27834),l=r(33533),o=r(46417);const d={position:"absolute",zIndex:"1"},c={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:r,width:u,height:h,xAxis:v,customOptions:p,card:x,type:m,extra:g,direction:f,bodyClass:y}=e,j=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return l.jd;case"bar":return l.B0;case"area":return l.fT;case"pie":return l.LB}})(m)));const Z=window.innerWidth<768,b=()=>{if(w.current){var e;const t=w.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(Z?0:null===(e=_.current)||void 0===e?void 0:e.offsetWidth,"px"),"rtl"===f&&(t.style.right="auto",t.style.left="0"),Z&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,s.useEffect)((()=>{b()}),[]);const _=(0,s.useRef)(null),w=(0,s.useRef)();j.xaxis={categories:v},p&&(j={...j,...p});const z=()=>(0,o.jsx)(i.ZP,{onResize:void setTimeout((()=>{b()}),600),children:(0,o.jsx)("div",{style:"rtl"===f?{direction:"ltr"}:{},className:"chartRef",ref:w,children:(0,o.jsx)(n.Z,{options:j,type:m,series:r,width:u,height:h})})});return(0,o.jsx)(o.Fragment,{children:x?(0,o.jsx)(a.Z,{children:(0,o.jsxs)("div",{className:"position-relative ".concat(y),children:[(0,o.jsx)("div",{style:Z?{}:d,children:t})&&(0,o.jsx)("h4",{className:"font-weight-bold",style:Z?{}:d,children:t}),g&&(0,o.jsx)("div",{ref:_,style:Z?{}:c,children:g}),z()]})}):z()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},53233:(e,t,r)=>{r.d(t,{Z:()=>x});var s=r(47313),a=r(56140),n=r(67251),i=r(45705),l=r(86345),o=r(78267),d=r(37388),c=r(59491),u=r(99587),h=r(24511),v=r(46417);const{Text:p}=a.Z,x=e=>{let{columns:t=[],setColumns:r,style:a,size:x="",iconOnly:m}=e;const{t:g}=(0,h.$)(),[f,y]=(0,s.useState)(!1),j=(0,v.jsx)(n.Z,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(n.Z.Item,{children:(0,v.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(l.Z,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));r(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(o.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{y(e)},visible:f,children:(0,v.jsx)(d.Z,{title:g("change.columns"),children:(0,v.jsx)(c.Z,{style:{...a},size:x,icon:(0,v.jsx)(u.Z,{}),children:m?null:g("Columns")})})})}},22133:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(56140),a=r(68197),n=r(59624),i=r(77181),l=r(45705),o=r(74294),d=r(46155),c=r(47313),u=r(16034),h=r(88038),v=r(13944),p=r(33533),x=r(24511),m=r(93131),g=r(46417);const{Title:f}=s.Z,y=e=>{let{reportData:t={}}=e;const{by_time:r,options:s,handleByTime:y,chart_type:j,setChartType:Z}=(0,c.useContext)(m.G),{t:b}=(0,x.$)(),_=(0,c.useMemo)((()=>{var e;return null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>e.time))}),[null===t||void 0===t?void 0:t.chart]),w=(0,c.useMemo)((()=>{var e;return Boolean(t.charts)?t.charts.map((e=>{var t;return{name:e.translation.title,data:(null===(t=e.stocks)||void 0===t?void 0:t.map((e=>e.total_order_quantity||e.avg_quantity||e.quantity||e.count||e.price||e.order_details_sum_quantity||0)))||[]}})):[{name:b("orders"),data:(null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>parseInt(e.count||e.total_price||e.quantity||e.price||e.products_count||e.order_details_avg_quantity||e.order_details_avg_total_price||e.order_details_sum_quantity||e.avg_price||e.avg_quantity||0,10))))||[]}]}),[null===t||void 0===t?void 0:t.chart]);return(0,g.jsx)(a.Z,{gutter:24,children:(0,g.jsx)(n.Z,{span:24,children:(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(a.Z,{gutter:24,className:"w-100",children:(0,g.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[(0,g.jsx)(l.Z,{size:"large",className:"d-flex",children:(0,g.jsx)(f,{level:3,className:"mb-0",children:b("item.sold")})}),(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)(o.Z,{style:{width:100},onChange:y,options:s,defaultValue:r}),(0,g.jsx)(d.Z,{type:"vertical",style:{height:"100%"}}),(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(u.Z,{style:{fontSize:"22px",cursor:"pointer",color:"area"===j?"green":""},onClick:()=>Z("area")}),(0,g.jsx)(h.Z,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===j?"green":""},onClick:()=>Z("bar")})]})]})]})}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(v.Z,{type:j||"area",card:!1,series:w,xAxis:_,height:280,customOptions:{colors:[p.DM[1],p.DM[2],p.DM[3],p.DM[4],p.DM[5],p.DM[6],p.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}}})]})})})}},89281:(e,t,r)=>{r.d(t,{h:()=>d});var s=r(47313),a=r(12279),n=r.n(a),i=r(74294),l=r(72652),o=r(46417);const d=e=>{let{fetchOptions:t,debounceTimeout:r=400,onClear:a,refetchOptions:d=!1,...c}=e;const[u,h]=(0,s.useState)(!1),[v,p]=(0,s.useState)([]),x=(0,s.useMemo)((()=>n()((e=>{p([]),h(!0),t(e).then((e=>{p(e),h(!1)}))}),r)),[t,r]);return(0,o.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),a&&a()},notFoundContent:u?(0,o.jsx)(l.Z,{size:"small"}):"no results",...c,options:v,onFocus:()=>{v.length&&!d||x("")}})}},33533:(e,t,r)=>{r.d(t,{B0:()=>i,DM:()=>s,LB:()=>l,fT:()=>n,jd:()=>a});const s=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],a={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...s],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},n={...a},i={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...s],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>"".concat(e)}}},l={colors:[...s],plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},84017:(e,t,r)=>{function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const s=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===r?"".concat(s," ").concat(t):"".concat(t," ").concat(s)}r.d(t,{Z:()=>s})},80726:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var s=r(56140),a=r(99096),n=r(66204),i=r(78267),l=r(67251),o=r(72652),d=r(68197),c=r(59624),u=r(45705),h=r(77181),v=r(78508),p=r(47313),x=r(90954),m=r(2717),g=r(22133),f=r(70816),y=r.n(f),j=r(93131),Z=r(53233),b=r(97890),_=r(24511),w=r(97806),z=r(80314),C=r(84017),N=r(89281),k=r(53149),I=r(46417);const{Text:q,Title:S}=s.Z,{RangePicker:O}=a.Z,M=()=>{const e=(0,m.I0)(),t=(0,b.s0)(),{t:r}=(0,_.$)(),{date_from:s,date_to:a,by_time:f,chart:M,handleChart:V,handleDateRange:H}=(0,p.useContext)(j.G),{activeMenu:D}=(0,m.v9)((e=>e.menu),m.wU),{loading:L,chartData:T,productList:F}=(0,m.v9)((e=>e.orderReport),m.wU),{defaultCurrency:R}=(0,m.v9)((e=>e.currency),m.wU),[A,B]=(0,p.useState)(),[P,E]=(0,p.useState)([{title:"Order #",dataIndex:"id",key:"id",is_show:!0,render:(e,t)=>(0,I.jsxs)("a",{onClick:()=>W(t),children:["#",t.id]})},{title:"Status",dataIndex:"items_sold",key:"items_sold",is_show:!0,render:(e,t)=>(0,I.jsx)(n.Z,{children:t.status})},{title:"Customer",dataIndex:"user_firstname",key:"user_firstname",is_show:!0,render:(e,t)=>(0,I.jsx)(I.Fragment,{children:"".concat(t.firstname," ").concat(t.lastname)})},{title:"Customer type",key:"user_active",dataIndex:"user_active",is_show:!0,render:(e,t)=>{const r=Boolean(t.active);return(0,I.jsx)(n.Z,{color:r?"green":"red",children:r?"Active":"Inactive"},t.id)}},{title:"Product(s)",key:"category",dataIndex:"category",is_show:!0,render:(e,t)=>{var r,s,a;return(null===(r=t.products)||void 0===r?void 0:r.length)>1?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("p",{children:t.products[0]}),(0,I.jsx)(i.Z,{overlay:(0,I.jsx)(l.Z,{children:null===(s=t.products)||void 0===s?void 0:s.slice(1,t.products.length).map(((e,t)=>(0,I.jsx)(l.Z.Item,{children:e},t)))}),children:(0,I.jsx)(n.Z,{style:{cursor:"pointer"},children:"+ ".concat((null===(a=t.products)||void 0===a?void 0:a.length)-1," more")})})]}):(0,I.jsx)(I.Fragment,{children:t.products[0]})}},{title:"Item sold",key:"item_sold",dataIndex:"item_sold",sorter:(e,t)=>Number(e.quantity)-Number(t.quantity),is_show:!0,render:(e,t)=>Number(t.quantity)},{title:"Net sales",key:"price",dataIndex:"price",is_show:!0,sorter:(e,t)=>e.price-t.price,render:(e,t)=>(0,I.jsx)(I.Fragment,{children:(0,C.Z)(t.price,null===R||void 0===R?void 0:R.symbol)})}]),$=[{label:"Item sold",value:"quantity",price:!1,qty:"quantity"},{label:"Net sales",value:"price",price:!0,qty:"price"},{label:"Avg Order price",value:"avg_price",price:!0,qty:"avg_price"},{label:"Orders",value:"count",price:!1,qty:"count"}],W=s=>{e((0,x.bL)({url:"order/details/".concat(s.id),id:"order_details",name:r("order.details")})),t("/order/details/".concat(s.id))},U=()=>{if($.find((e=>e.value===M))){const t={date_from:s,date_to:a,type:f,chart:M,shop_id:null===A||void 0===A?void 0:A.value};e((0,w.zL)(t))}},G=(t,r)=>{e((0,w.Pf)({date_from:s,date_to:a,by_time:f,chart:M,page:t,perPage:r,shop_id:null===A||void 0===A?void 0:A.value}))};(0,p.useEffect)((()=>{V($[0].value)}),[]),(0,p.useEffect)((()=>{D.refetch&&(G(),U(),e((0,x.A_)(D)))}),[D.refetch]),(0,z.Z)((()=>{G()}),[a,f,M,s,null===A||void 0===A?void 0:A.value]),(0,z.Z)((()=>{U()}),[a,f,M,s,null===A||void 0===A?void 0:A.value]);return(0,I.jsxs)(o.Z,{size:"large",spinning:L,children:[(0,I.jsx)(d.Z,{gutter:24,className:"mb-3",children:(0,I.jsx)(c.Z,{span:12,children:(0,I.jsxs)(u.Z,{size:"large",children:[(0,I.jsx)(O,{defaultValue:[y()(s),y()(a)],onChange:H}),(0,I.jsx)(N.h,{style:{width:"200px"},value:A,onClear:()=>B(void 0),onSelect:e=>B(e),fetchOptions:async function(e){const t={search:e,active:1};return k.Z.get(t).then((e=>e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id})))))},placeholder:r("select.shop")})]})})}),(0,I.jsx)(d.Z,{gutter:24,className:"report-products",children:null===$||void 0===$?void 0:$.map(((e,t)=>(0,I.jsx)(c.Z,{span:6,onClick:()=>V(e.value),children:(0,I.jsxs)(h.Z,{className:M===e.value&&"active",children:[(0,I.jsx)(d.Z,{className:"mb-5",children:(0,I.jsx)(c.Z,{children:(0,I.jsx)(q,{children:e.label})})}),(0,I.jsx)(d.Z,{gutter:24,children:(0,I.jsx)(c.Z,{span:18,children:(0,I.jsx)(S,{level:2,children:e.price?(0,C.Z)(T[e.qty],null===R||void 0===R?void 0:R.symbol):T[e.qty]})})})]})},e.label)))}),(0,I.jsx)(g.Z,{reportData:T,chart_data:"price_avg"}),(0,I.jsx)(d.Z,{gutter:24,children:(0,I.jsx)(c.Z,{span:24,children:(0,I.jsxs)(h.Z,{children:[(0,I.jsxs)(u.Z,{className:"d-flex justify-content-between",children:[(0,I.jsx)(q,{level:3,children:"Orders"}),(0,I.jsxs)(u.Z,{className:"d-flex justify-content-end",children:[(0,I.jsx)(n.Z,{color:"geekblue",children:r("compare")}),(0,I.jsx)(Z.Z,{columns:P,setColumns:E})]})]}),(0,I.jsx)(v.Z,{columns:null===P||void 0===P?void 0:P.filter((e=>e.is_show)),dataSource:null===F||void 0===F?void 0:F.data,rowKey:e=>e.id,loading:L,pagination:{pageSize:null===F||void 0===F?void 0:F.per_page,page:(null===F||void 0===F?void 0:F.current_page)||1,total:null===F||void 0===F?void 0:F.total,defaultCurrent:1},onChange:e=>{const{pageSize:t,current:r}=e;G(r,t)},scroll:{x:1200}})]})})})]})}},16034:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(1413),a=r(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};var i=r(17469),l=function(e,t){return a.createElement(i.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:n}))};l.displayName="LineChartOutlined";const o=a.forwardRef(l)},99587:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(1413),a=r(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=r(17469),l=function(e,t){return a.createElement(i.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:n}))};l.displayName="TableOutlined";const o=a.forwardRef(l)}}]);
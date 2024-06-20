"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1668],{13944:function(e,n,s){var t=s(1413),r=s(47313),a=s(77181),i=s(58446),l=s(27834),c=s(33533),o=s(46417),d={position:"absolute",zIndex:"1"},h={position:"absolute",zIndex:"1",right:"0",top:"-2px"},x=function(e){var n=e.title,s=e.series,x=e.width,u=e.height,f=e.xAxis,j=e.customOptions,m=e.card,Z=e.type,g=e.extra,p=e.direction,v=e.bodyClass,y=JSON.parse(JSON.stringify(function(e){switch(e){case"line":default:return c.jd;case"bar":return c.B0;case"area":return c.fT;case"pie":return c.LB}}(Z))),b=window.innerWidth<768,w=function(){if(k.current){var e,n=k.current.querySelectorAll("div.apexcharts-legend")[0];n.style.marginRight="".concat(b?0:null===(e=N.current)||void 0===e?void 0:e.offsetWidth,"px"),"rtl"===p&&(n.style.right="auto",n.style.left="0"),b&&(n.style.position="relative",n.style.top=0,n.style.justifyContent="start",n.style.padding=0)}};(0,r.useEffect)((function(){w()}),[]);var N=(0,r.useRef)(null),k=(0,r.useRef)();y.xaxis={categories:f},j&&(y=(0,t.Z)((0,t.Z)({},y),j));var z=function(){return(0,o.jsx)(l.ZP,{onResize:void setTimeout((function(){w()}),600),children:(0,o.jsx)("div",{style:"rtl"===p?{direction:"ltr"}:{},className:"chartRef",ref:k,children:(0,o.jsx)(i.Z,{options:y,type:Z,series:s,width:x,height:u})})})};return(0,o.jsx)(o.Fragment,{children:m?(0,o.jsx)(a.Z,{children:(0,o.jsxs)("div",{className:"position-relative ".concat(v),children:[(0,o.jsx)("div",{style:b?{}:d,children:n})&&(0,o.jsx)("h4",{className:"font-weight-bold",style:b?{}:d,children:n}),g&&(0,o.jsx)("div",{ref:N,style:b?{}:h,children:g}),z()]})}):z()})};x.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"},n.Z=x},33533:function(e,n,s){s.d(n,{B0:function(){return l},DM:function(){return r},LB:function(){return c},fT:function(){return i},jd:function(){return a}});var t=s(1413),r=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],a={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(r),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,n){return e+" - "+n.w.globals.series[n.seriesIndex][n.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},i=(0,t.Z)({},a),l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(r),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,n){return e+" - "+n.w.globals.series[n.seriesIndex][n.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"".concat(e)}}}},c={colors:[].concat(r),plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce((function(e,n){return e+n}),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},21668:function(e,n,s){s.r(n),s.d(n,{default:function(){return M}});var t=s(56140),r=s(99096),a=s(66204),i=s(45705),l=s(67251),c=s(68197),o=s(59624),d=s(78267),h=s(59491),x=s(77181),u=s(32697),f=s(46155),j=s(78508),m=s(47313),Z=s(1413),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"},p=s(17469),v=function(e,n){return m.createElement(p.Z,(0,Z.Z)((0,Z.Z)({},e),{},{ref:n,icon:g}))};v.displayName="FilterOutlined";var y=m.forwardRef(v),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},w=function(e,n){return m.createElement(p.Z,(0,Z.Z)((0,Z.Z)({},e),{},{ref:n,icon:b}))};w.displayName="MoreOutlined";var N=m.forwardRef(w),k=s(67440),z=s(16034),L=s(88038),S=s(13944),I=s(46417),O=t.Z.Text,R=t.Z.Title,B=r.Z.RangePicker,M=function(){var e=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return(0,I.jsx)("a",{children:e})}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e,n){var s=n.tags;return(0,I.jsx)(I.Fragment,{children:s.map((function(e){var n=e.length>5?"geekblue":"green";return"loser"===e&&(n="volcano"),(0,I.jsx)(a.Z,{color:n,children:e.toUpperCase()},e)}))})}},{title:"Action",key:"action",render:function(e,n){return(0,I.jsxs)(i.Z,{size:"middle",children:[(0,I.jsxs)("a",{children:["Invite ",n.name]}),(0,I.jsx)("a",{children:"Delete"})]})}}],n=(0,I.jsx)(l.Z,{children:(0,I.jsx)(l.Z.Item,{children:(0,I.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/",children:"1st menu item"})})});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c.Z,{gutter:24,className:"mb-4",children:(0,I.jsx)(o.Z,{span:12,children:(0,I.jsxs)(i.Z,{size:"large",children:[(0,I.jsx)(d.Z,{overlay:n,children:(0,I.jsx)(h.Z,{icon:(0,I.jsx)(y,{}),children:"Filter by date range"})}),(0,I.jsx)(B,{})]})})}),(0,I.jsxs)(c.Z,{gutter:24,className:"report-products",children:[(0,I.jsx)(o.Z,{span:8,children:(0,I.jsxs)(x.Z,{children:[(0,I.jsx)(c.Z,{className:"mb-5",children:(0,I.jsx)(o.Z,{children:(0,I.jsx)(O,{children:"Item Sold"})})}),(0,I.jsxs)(c.Z,{gutter:24,children:[(0,I.jsx)(o.Z,{span:12,children:(0,I.jsx)(R,{level:2,children:"50"})}),(0,I.jsx)(o.Z,{span:12,className:"d-flex justify-content-end",children:(0,I.jsx)(a.Z,{color:"geekblue",className:"d-flex align-items-center",children:"5%"})})]})]})}),(0,I.jsx)(o.Z,{span:8,children:(0,I.jsxs)(x.Z,{children:[(0,I.jsx)(c.Z,{className:"mb-5",children:(0,I.jsx)(o.Z,{children:(0,I.jsx)(O,{children:"Not Sales"})})}),(0,I.jsxs)(c.Z,{gutter:24,children:[(0,I.jsx)(o.Z,{span:12,children:(0,I.jsx)(R,{level:2,children:"1950 UZS"})}),(0,I.jsx)(o.Z,{span:12,className:"d-flex justify-content-end",children:(0,I.jsx)(a.Z,{color:"gold",className:"d-flex align-items-center",children:"2%"})})]})]})}),(0,I.jsx)(o.Z,{span:8,children:(0,I.jsxs)(x.Z,{className:"active",children:[(0,I.jsx)(c.Z,{className:"mb-5",children:(0,I.jsx)(o.Z,{children:(0,I.jsx)(O,{children:"Orders"})})}),(0,I.jsx)(c.Z,{gutter:24,children:(0,I.jsx)(o.Z,{span:12,children:(0,I.jsx)(R,{level:2,children:"10"})})})]})})]}),(0,I.jsx)(c.Z,{gutter:24,children:(0,I.jsx)(o.Z,{span:24,children:(0,I.jsxs)(x.Z,{children:[(0,I.jsxs)(c.Z,{gutter:24,children:[(0,I.jsx)(o.Z,{span:22,children:(0,I.jsxs)(c.Z,{gutter:24,children:[(0,I.jsx)(o.Z,{span:9,children:(0,I.jsxs)(i.Z,{size:"large",className:"d-flex",children:[(0,I.jsx)(R,{level:3,className:"mb-0",children:"Items Sold"}),(0,I.jsx)(u.Z,{className:"d-flex",children:"Last month (Nov 1-30, 2022)"}),(0,I.jsx)(O,{children:"39"})]})}),(0,I.jsxs)(o.Z,{span:8,className:"d-flex justify-content-between",children:[(0,I.jsx)(u.Z,{children:"Previous period (Nov 1-30, 2022)"}),(0,I.jsx)(O,{className:"flex-grow-0",children:"39"})]}),(0,I.jsx)(o.Z,{span:7,className:"d-flex justify-content-end",children:(0,I.jsx)(d.Z,{overlay:n,children:(0,I.jsxs)(i.Z,{children:["Hover me ",(0,I.jsx)(k.Z,{})]})})})]})}),(0,I.jsxs)(o.Z,{span:2,children:[(0,I.jsx)(f.Z,{type:"vertical",style:{height:"100%"}}),(0,I.jsxs)(i.Z,{children:[(0,I.jsx)(z.Z,{style:{fontSize:"22px"}}),(0,I.jsx)(L.Z,{style:{fontSize:"22px"}})]})]})]}),(0,I.jsx)(f.Z,{}),(0,I.jsx)(S.Z,{})]})})}),(0,I.jsx)(c.Z,{gutter:24,children:(0,I.jsx)(o.Z,{span:24,children:(0,I.jsxs)(x.Z,{children:[(0,I.jsxs)(c.Z,{gutter:24,className:"align-items-center mb-2",children:[(0,I.jsx)(o.Z,{span:22,children:(0,I.jsx)(i.Z,{children:(0,I.jsx)(R,{level:2,className:"mb-0",children:"Variations"})})}),(0,I.jsx)(o.Z,{span:2,children:(0,I.jsxs)(i.Z,{children:[(0,I.jsx)(a.Z,{color:"geekblue",children:"Compare"}),(0,I.jsx)(N,{style:{fontSize:"26px"}})]})})]}),(0,I.jsx)(j.Z,{scroll:{x:!0},columns:e,dataSource:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]})]})})})]})}},16034:function(e,n,s){s.d(n,{Z:function(){return c}});var t=s(1413),r=s(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"},i=s(17469),l=function(e,n){return r.createElement(i.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:a}))};l.displayName="LineChartOutlined";var c=r.forwardRef(l)}}]);
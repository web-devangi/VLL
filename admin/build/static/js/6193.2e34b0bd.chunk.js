(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6193],{89802:(e,o,l)=>{"use strict";l.d(o,{q:()=>s});var i=l(47313),t=l(74294),n=l(72652),d=l(46417);const s=e=>{let{fetchOptions:o,refetch:l=!1,value:s,...r}=e;const[a,c]=(0,i.useState)(!1),[u,v]=(0,i.useState)([]);"object"===typeof(null===s||void 0===s?void 0:s.label)&&null!==(null===s||void 0===s?void 0:s.label)&&(s.label=s.label.value);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.Z,{labelInValue:!0,filterOption:!1,notFoundContent:a?(0,d.jsx)(n.Z,{size:"small"}):"no results",value:s,...r,options:a?[]:u,onFocus:()=>{u.length&&!l||(c(!0),o().then((e=>{v(e),c(!1)})))}})})}},56814:(e,o,l)=>{"use strict";l.d(o,{Z:()=>u});l(47313);var i=l(52838),t=l(19107),n=l(97421),d=l(2717),s=l(10976),r=l(74294),a=l(23885),c=l(46417);const u=e=>{let{value:o,setValue:l,setLocation:u}=e;const{placePredictions:v,getPlacePredictions:p,isPlacePredictionsLoading:h}=(0,i.Z)({apiKey:n.kr,libraries:["places","geocode"]}),{defaultLang:m,languages:g}=(0,d.v9)((e=>e.formLang),d.wU);return(0,c.jsx)("div",{children:g.map(((e,i)=>(0,c.jsx)(s.Z.Item,{label:(0,a.t)("address"),name:"address[".concat(e.locale,"]"),rules:[{required:e.locale===m,message:(0,a.t)("required")}],hidden:e.locale!==m,children:(0,c.jsx)(r.Z,{allowClear:!0,searchValue:o,showSearch:!0,autoClearSearchValue:!0,loading:h,options:null===v||void 0===v?void 0:v.map((e=>({label:e.description,value:e.description}))),onSearch:e=>{l(e),e.length>0&&p({input:e})},onSelect:async e=>{const o=await(0,t.Z)(e);u({lat:null===o||void 0===o?void 0:o.geometry.location.lat,lng:null===o||void 0===o?void 0:o.geometry.location.lng})}})},"address"+i)))})}},4014:(e,o,l)=>{"use strict";function i(e){var o,l;let i=null===e||void 0===e?void 0:e.slice(0,1),t=null===e||void 0===e?void 0:e.lastIndexOf("@"),n=null===e||void 0===e?void 0:e.slice(1,t-1);n=null===(o=n)||void 0===o?void 0:o.replace(/./g,"*");let d=null===e||void 0===e?void 0:e.slice(t-1,e.length);return null===i||void 0===i||null===(l=i.concat(n))||void 0===l?void 0:l.concat(d)}l.d(o,{Z:()=>i})},84261:(e,o,l)=>{"use strict";function i(e){const o="".concat(e),l="*".repeat(o.length-2);return(null===o||void 0===o?void 0:o[0])+l+(null===o||void 0===o?void 0:o[(null===o||void 0===o?void 0:o.length)-1])}l.d(o,{Z:()=>i})},97388:(e,o,l)=>{"use strict";l.d(o,{Z:()=>h});var i=l(47313),t=l(16609),n=l(97421);const d=l.p+"static/media/pin.0e41858db80c699cd8a2.png";var s=l(31881),r=l.n(s);async function a(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.kr,l={latlng:"".concat(null===e||void 0===e?void 0:e.lat,",").concat(null===e||void 0===e?void 0:e.lng),key:o};return r().get("https://maps.googleapis.com/maps/api/geocode/json",{params:l}).then((e=>{var o;let{data:l}=e;return null===(o=l.results[0])||void 0===o?void 0:o.formatted_address})).catch((e=>"not found"))}var c=l(5958),u=l(23560),v=l(24511),p=l(46417);const h=(0,t.GoogleApiWrapper)({apiKey:n.kr})((function(e){const[o,l]=(0,i.useState)(),{t:s}=(0,v.$)(),r=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const o={lat:e.coords.latitude,lng:e.coords.longitude};l(o)}),(function(e){u.Am.warning(s("turn.on.gps"))}))};(0,i.useEffect)((()=>{r()}),[]);const h=[{lat:Number(e.location.lat)||0,lng:Number(e.location.lng)||0}];for(var m=new e.google.maps.LatLngBounds,g=0;g<h.length;g++)m.extend(h[g]);return(0,p.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,p.jsx)("button",{className:"map-button",type:"button",onClick:()=>{r(),o&&(async o=>{const l={lat:null===o||void 0===o?void 0:o.lat,lng:null===o||void 0===o?void 0:o.lng};e.setLocation(l);const i=await a(l,n.kr);e.setAddress(i)})(o)},children:(0,p.jsx)(c.nDs,{})}),(0,p.jsx)(t.Map,{cursor:"pointer",onClick:async(o,l,i)=>{const{latLng:t}=i,d={lat:t.lat(),lng:t.lng()};e.setLocation(d);const s=await a(d,n.kr);e.setAddress(s)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,p.jsx)(t.Marker,{position:e.location,icon:{url:d,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},51988:(e,o,l)=>{"use strict";l.d(o,{Z:()=>a});l(47313);var i=l(24511),t=l(66188);const n=l.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",d=l.p+"static/media/noresult.ac4af107751f94856a9c.riv",s=l.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var r=l(46417);const a=function(e){let{id:o="noresult",text:l=""}=e;const{t:a}=(0,i.$)(),c={src:{noproductsfound:n,noresult:d,nosell:s}[o],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,t.useRive)(c);return(0,r.jsxs)("div",{className:"animation-canvas",children:[(0,r.jsx)("div",{style:{width:"100%",height:200},children:(0,r.jsx)(u,{})}),(0,r.jsx)("div",{className:"text",children:a(l)})]})}},41481:(e,o,l)=>{"use strict";l.d(o,{Z:()=>r});var i=l(47313),t=l(66672),n=l(16031),d=l(40765),s=l(46417);function r(e){let{handleChange:o,defaultValue:l,resetSearch:r,...a}=e;const[c,u]=(0,i.useState)(l),v=(0,i.useMemo)((()=>(0,n.debounce)((e=>{o(e)}),800)),[]);return(0,i.useEffect)((()=>{u(l)}),[r]),(0,s.jsx)(t.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,s.jsx)(d.Z,{}),...a})}},89281:(e,o,l)=>{"use strict";l.d(o,{h:()=>a});var i=l(47313),t=l(12279),n=l.n(t),d=l(74294),s=l(72652),r=l(46417);const a=e=>{let{fetchOptions:o,debounceTimeout:l=400,onClear:t,refetchOptions:a=!1,...c}=e;const[u,v]=(0,i.useState)(!1),[p,h]=(0,i.useState)([]),m=(0,i.useMemo)((()=>n()((e=>{h([]),v(!0),o(e).then((e=>{h(e),v(!1)}))}),l)),[o,l]);return(0,r.jsx)(d.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),t&&t()},notFoundContent:u?(0,r.jsx)(s.Z,{size:"small"}):"no results",...c,options:p,onFocus:()=>{p.length&&!a||m("")}})}},19107:(e,o,l)=>{"use strict";l.d(o,{Z:()=>d});var i=l(31881),t=l.n(i),n=l(97421);async function d(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.kr,l={address:e,key:o};return t().get("https://maps.googleapis.com/maps/api/geocode/json",{params:l}).then((e=>{let{data:o}=e;return o.results[0]})).catch((e=>"not found"))}},17649:(e,o,l)=>{"use strict";l.d(o,{Z:()=>i});l(97421);function i(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const o=e.location.split(", ");return{lat:Number(null===o||void 0===o?void 0:o[0]),lng:Number(null===o||void 0===o?void 0:o[1])}}},77370:(e,o,l)=>{"use strict";function i(e,o){for(var l=[],i=[],t="",n=0;n<(null===(d=e.stocks)||void 0===d?void 0:d.length);n++){var d;t="",e.stocks[n].extras.sort(((e,o)=>e.extra_group_id-o.extra_group_id));for(var s=0;s<(null===(r=e.stocks[n].extras)||void 0===r?void 0:r.length);s++){var r,a=Object.assign({},e.stocks[n].extras[s]),c=l.findIndex((e=>e.extra_value_id==a.extra_value_id));-1==c?(a.level=s,a.up=[t],l.push(a),t+=a.extra_value_id.toString()):(l[c].up.push(t),t+=a.extra_value_id.toString())}var u={id:e.stocks[n].id,extras:t,price:e.stocks[n].price,quantity:e.stocks[n].quantity,countable_id:e.stocks[n].countable_id,discount:e.stocks[n].discount,tax:e.stocks[n].tax,total_price:e.stocks[n].total_price,bonus:e.stocks[n].bonus};i.push(u)}return{stock:i,extras:l}}function t(e,o,l){for(var i=""==e?[]:e.split(","),t=[],n=[],d=0;d<=i.length;d++){d-1>=0&&(n[n.length]=i[d-1].toString());var s=o.filter((e=>{if(new Set(e.up).has(n.join("")))return e}));s.length>0&&t.push(s)}d=0;if(n.length<t.length)for(;d<o.length;){n[n.length]=t[t.length-1][0].extra_value_id.toString();let e=o.filter((e=>!!new Set(e.up).has(n.join(""))));if(0==e.length)break;t.push(e),d++}var r=l.findIndex((e=>e.extras==n.join("")));return{stock:l[r],extras:t}}l.d(o,{o:()=>i,y:()=>t})},28939:(e,o,l)=>{"use strict";function i(e){var o;const l=null===e||void 0===e||null===(o=e.extras)||void 0===o?void 0:o.find((e=>"image"===e.group.type));return l?l.value:""}l.d(o,{Z:()=>i})},84017:(e,o,l)=>{"use strict";function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?"".concat(i," ").concat(o):"".concat(o," ").concat(i)}l.d(o,{Z:()=>i})},91220:(e,o,l)=>{"use strict";function i(e,o){var l;const i=(null===o||void 0===o||null===(l=o.translation)||void 0===l?void 0:l.title)||"pcs";if(!e)return 0;switch(null===o||void 0===o?void 0:o.position){case"after":return e+" "+i;case"before":return i+" "+e}}l.d(o,{Z:()=>i})},21448:(e,o,l)=>{"use strict";l.d(o,{Z:()=>t});var i=l(34344);const t={checkCoupon:e=>i.Z.post("rest/coupons/check",e),checkCashback:e=>i.Z.post("rest/cashback/check",e)}},16233:(e,o,l)=>{"use strict";l.d(o,{Z:()=>Z});var i=l(47313),t=l(45705),n=l(66204),d=l(26824),s=l(9274),r=l(59491),a=l(77181),c=l(78508),u=l(31774),v=l(70816),p=l.n(v),h=l(84017),m=l(24511),g=l(45464),x=l(2717),f=l(34273),j=l(84261),y=l(4014),b=l(46417);const Z=e=>{var o,l,v,Z,k,w,_,N,S,C,z,V,I;let{handleClose:H}=e;const{t:F}=(0,m.$)(),{cartOrder:M}=(0,x.v9)((e=>e.cart),x.wU),{defaultCurrency:O}=(0,x.v9)((e=>e.currency),x.wU),{defaultLang:P}=(0,x.v9)((e=>e.formLang),x.wU),[L,q]=(0,i.useState)(),[E,A]=(0,i.useState)(),[B,R]=(0,i.useState)();(0,i.useEffect)((()=>{if(M){var e;const o=null===M||void 0===M||null===(e=M.filter((e=>!(null!==e&&void 0!==e&&e.parent_id))))||void 0===e?void 0:e[0];q(o),R(null===M||void 0===M?void 0:M.map((e=>null===e||void 0===e?void 0:e.details)).flat()),A(o)}}),[M]);const $=[{title:F("id"),dataIndex:"id",key:"id",render:(e,o)=>{var l;return null===(l=o.stock)||void 0===l?void 0:l.id}},{title:F("product.name"),dataIndex:"product",key:"product",render:(e,o)=>{var l,i,d,s,r;return(0,b.jsxs)(t.Z,{direction:"vertical",className:"relative",children:[null===(l=o.stock)||void 0===l||null===(i=l.product)||void 0===i||null===(d=i.translation)||void 0===d?void 0:d.title,null===(s=o.stock)||void 0===s||null===(r=s.extras)||void 0===r?void 0:r.map((e=>{var o,l,i,t,d,s,r;return"color"===(null===(o=e.group)||void 0===o?void 0:o.type)?(0,b.jsxs)(n.Z,{children:[null===(l=e.group)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title,":"," ",(0,f.B)(null===(t=e.value)||void 0===t?void 0:t.value)]},null===e||void 0===e?void 0:e.id):(0,b.jsxs)(n.Z,{children:[null===(d=e.group)||void 0===d||null===(s=d.translation)||void 0===s?void 0:s.title,": ",null===(r=e.value)||void 0===r?void 0:r.value]},null===e||void 0===e?void 0:e.id)}))]})}},{title:F("image"),dataIndex:"img",key:"img",render:(e,o)=>{var l,i;return(0,b.jsx)(d.Z,{src:(0,g.Z)(null===(l=o.stock)||void 0===l||null===(i=l.product)||void 0===i?void 0:i.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:F("price"),dataIndex:"origin_price",key:"origin_price",render:(e,o)=>{var l,i,t;return(0,h.Z)((null===o||void 0===o||null===(l=o.stock)||void 0===l?void 0:l.price)-(null!==(i=null===o||void 0===o||null===(t=o.stock)||void 0===t?void 0:t.tax)&&void 0!==i?i:0),null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)}},{title:F("quantity"),dataIndex:"quantity",key:"quantity",render:(e,o)=>{var l,i;return console.log("row",o),(0,b.jsx)("span",{children:e*(null===o||void 0===o||null===(l=o.stock)||void 0===l||null===(i=l.product)||void 0===i?void 0:i.interval)})}},{title:F("discount"),dataIndex:"rate_discount",key:"rate_discount",render:(e,o)=>{var l;return(0,h.Z)(null===o||void 0===o||null===(l=o.stock)||void 0===l?void 0:l.discount,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)}},{title:F("tax"),dataIndex:"tax",key:"tax",render:e=>(0,h.Z)(e,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)},{title:F("total.price"),dataIndex:"total_price",key:"total_price",render:(e,o)=>(0,h.Z)(null===o||void 0===o?void 0:o.total_price,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)}],U={products:null!==(o=null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l;return e+(null!==(l=null===o||void 0===o?void 0:o.origin_price)&&void 0!==l?l:0)}),0))&&void 0!==o?o:0,deliveryFee:null!==(l=null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l;return e+(null!==(l=null===o||void 0===o?void 0:o.delivery_fee)&&void 0!==l?l:0)}),0))&&void 0!==l?l:0,serviceFee:null!==(v=null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l;return e+(null!==(l=null===o||void 0===o?void 0:o.service_fee)&&void 0!==l?l:0)}),0))&&void 0!==v?v:0,tax:null!==(Z=null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l;return e+(null!==(l=null===o||void 0===o?void 0:o.tax)&&void 0!==l?l:0)}),0))&&void 0!==Z?Z:0,discount:null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l;return e+(null!==(l=null===o||void 0===o?void 0:o.total_discount)&&void 0!==l?l:0)}),0),couponPrice:null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l,i;return e+(null!==(l=null===o||void 0===o||null===(i=o.coupon)||void 0===i?void 0:i.price)&&void 0!==l?l:0)}),0),totalPrice:null===M||void 0===M?void 0:M.reduce(((e,o)=>{var l;return e+(null!==(l=null===o||void 0===o?void 0:o.total_price)&&void 0!==l?l:0)}),0)};return(0,b.jsx)(s.Z,{visible:!!M,title:F("order.created.successfully"),onOk:H,onCancel:H,footer:[(0,b.jsx)(r.Z,{onClick:H,className:"buttons",children:F("back")}),(0,b.jsxs)(r.Z,{type:"primary",onClick:()=>window.print(),className:"buttons",children:[(0,b.jsx)(u.Z,{type:"printer"}),(0,b.jsx)("span",{className:"ml-1",children:F("print")})]})],width:1e3,children:(0,b.jsx)("div",{className:"py-4 order-preview",children:(0,b.jsxs)(a.Z,{children:[(0,b.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{className:"mb-1 font-weight-semibold",children:[F("invoice")," #",null===L||void 0===L?void 0:L.id]}),(0,b.jsx)("p",{children:p()(null===E||void 0===E?void 0:E.created_at).format("YYYY-MM-DD HH:mm")}),(0,b.jsx)("address",{children:(0,b.jsxs)("p",{children:[(0,b.jsxs)("span",{children:[F("delivery.type"),": ",null===E||void 0===E?void 0:E.delivery_type]}),(0,b.jsx)("br",{}),"point"===(null===E||void 0===E?void 0:E.delivery_type)&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("span",{children:[F("point"),":"," ",null===E||void 0===E||null===(k=E.delivery_point)||void 0===k||null===(w=k.address)||void 0===w?void 0:w[P]]}),(0,b.jsx)("br",{})]})," ","delivery"===(null===E||void 0===E?void 0:E.delivery_type)&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("span",{children:[F("delivery.address"),": ",null===E||void 0===E||null===(_=E.address)||void 0===_?void 0:_.address]}),(0,b.jsx)("br",{})]}),(0,b.jsxs)("span",{children:[F("delivery.date"),": ",null===E||void 0===E?void 0:E.delivery_date," ",null===E||void 0===E?void 0:E.delivery_time]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[F("note"),": ",null!==(N=null===E||void 0===E?void 0:E.note)&&void 0!==N?N:"--"]})]})})]}),(0,b.jsxs)("address",{children:[(0,b.jsxs)("h2",{className:"mb-1 font-weight-semibold",children:[F("user")," #",null===E||void 0===E||null===(S=E.user)||void 0===S?void 0:S.id]}),(0,b.jsxs)("p",{children:[(0,b.jsxs)("span",{className:"font-weight-semibold text-dark font-size-md",children:[null===E||void 0===E||null===(C=E.user)||void 0===C?void 0:C.firstname," ",null===E||void 0===E||null===(z=E.user)||void 0===z?void 0:z.lastname]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[F("phone"),":"," ",null!==E&&void 0!==E&&E.phone?(0,j.Z)(null===E||void 0===E?void 0:E.phone):F("no.phone")]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[F("email"),":"," ",null!==E&&void 0!==E&&null!==(V=E.user)&&void 0!==V&&V.email?(0,y.Z)(null===E||void 0===E||null===(I=E.user)||void 0===I?void 0:I.email):F("no.email")]})]})]})]}),(0,b.jsxs)("div",{className:"mt-4",children:[(0,b.jsx)(c.Z,{scroll:{x:!0},columns:$,dataSource:B||[],rowKey:e=>e.id,pagination:!1}),(0,b.jsx)("br",{}),(0,b.jsx)("div",{className:"d-flex justify-content-end",children:(0,b.jsxs)("div",{className:"text-right ",children:[(0,b.jsxs)("div",{className:"border-bottom",children:[(0,b.jsxs)("p",{className:"mb-2",children:[(0,b.jsxs)("span",{children:[F("products"),": "]}),(0,h.Z)(null===U||void 0===U?void 0:U.products,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)]}),(0,b.jsxs)("p",{children:[F("delivery.fee")," :"," ",(0,h.Z)(null===U||void 0===U?void 0:U.deliveryFee,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)]}),(0,b.jsxs)("p",{children:[F("service.fee")," :"," ",(0,h.Z)(null===U||void 0===U?void 0:U.serviceFee,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)]}),(0,b.jsxs)("p",{children:[F("tax")," :"," ",(0,h.Z)(null===U||void 0===U?void 0:U.tax,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)]}),(0,b.jsxs)("p",{children:[F("discount")," : -",(0,h.Z)(null===U||void 0===U?void 0:U.discount,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)]}),(0,b.jsxs)("p",{children:[F("coupon")," : -",(0,h.Z)(null===U||void 0===U?void 0:U.couponPrice,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)]})]}),(0,b.jsx)("h2",{className:"font-weight-semibold mt-3",children:(0,b.jsxs)("span",{className:"mr-1",children:[F("grand.total"),":"," ",(0,b.jsx)("div",{className:"ml-2 font-weight-bold",children:(0,h.Z)(null===U||void 0===U?void 0:U.totalPrice,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)})]})})]})})]})]})})})}},8846:(e,o,l)=>{"use strict";l.d(o,{Z:()=>r});var i=l(1413),t=l(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};var d=l(17469),s=function(e,o){return t.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:o,icon:n}))};s.displayName="MinusOutlined";const r=t.forwardRef(s)},55768:(e,o,l)=>{"use strict";l.d(o,{Z:()=>r});var i=l(1413),t=l(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=l(17469),s=function(e,o){return t.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:o,icon:n}))};s.displayName="PlusCircleOutlined";const r=t.forwardRef(s)},31774:(e,o,l)=>{"use strict";l.d(o,{Z:()=>r});var i=l(1413),t=l(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"}}]},name:"printer",theme:"outlined"};var d=l(17469),s=function(e,o){return t.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:o,icon:n}))};s.displayName="PrinterOutlined";const r=t.forwardRef(s)},24654:()=>{}}]);
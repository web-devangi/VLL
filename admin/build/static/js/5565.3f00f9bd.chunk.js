(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5565],{49655:(e,t,l)=>{"use strict";l.d(t,{_:()=>d});var a=l(47313),s=l(12279),n=l.n(s),i=l(74294),o=l(72652),r=l(46417);const d=e=>{let{fetchOptions:t,debounceTimeout:l=400,hasMore:s,...d}=e;const[c,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)([]),[p,v]=(0,a.useState)(!1),[g,x]=(0,a.useState)(null),[y,j]=(0,a.useState)(1),Z=(0,a.useMemo)((()=>n()((e=>{h([]),x(e),u(!0),t({search:e}).then((e=>{h(e),j(2),u(!1)})).finally((()=>v(!1)))}),l)),[t,l,y]);return(0,r.jsxs)(i.Z,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const l=e.target;p||l.scrollTop+l.offsetHeight!==l.scrollHeight||s&&(v(!0),l.scrollTo(0,l.scrollHeight),t({search:g,page:y}).then((e=>{j((e=>e+1)),h([...m,...e])})).finally((()=>v(!1))))},labelInValue:!0,filterOption:!1,onSearch:Z,notFoundContent:c?(0,r.jsx)(o.Z,{size:"small"}):"no results",onFocus:()=>{m.length||Z("")},...d,children:[m.map(((e,t)=>(0,r.jsx)(i.Z.Option,{value:e.value,children:e.label},t))),p&&(0,r.jsx)(i.Z.Option,{children:(0,r.jsx)(o.Z,{size:"small"})})]})}},73431:(e,t,l)=>{"use strict";l.d(t,{Z:()=>d});var a=l(47313),s=l(39180),n=l(2717),i=l(28830),o=l(60535),r=l(46417);const d=()=>{const e=(0,n.I0)(),{languages:t,defaultLang:l}=(0,n.v9)((e=>e.formLang),n.wU);(0,a.useEffect)((()=>{o.Z.getAllActive().then((t=>{let{data:l}=t;e((0,i.dc)(l)),e((0,i.mh)(l.find((e=>1===e.default)).locale))}))}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.ZP.Group,{value:l,onChange:t=>{let{target:{value:l}}=t;e((0,i.mh)(l))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,r.jsx)(s.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},97388:(e,t,l)=>{"use strict";l.d(t,{Z:()=>p});var a=l(47313),s=l(16609),n=l(97421);const i=l.p+"static/media/pin.0e41858db80c699cd8a2.png";var o=l(31881),r=l.n(o);async function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.kr,l={latlng:"".concat(null===e||void 0===e?void 0:e.lat,",").concat(null===e||void 0===e?void 0:e.lng),key:t};return r().get("https://maps.googleapis.com/maps/api/geocode/json",{params:l}).then((e=>{var t;let{data:l}=e;return null===(t=l.results[0])||void 0===t?void 0:t.formatted_address})).catch((e=>"not found"))}var c=l(5958),u=l(23560),m=l(24511),h=l(46417);const p=(0,s.GoogleApiWrapper)({apiKey:n.kr})((function(e){const[t,l]=(0,a.useState)(),{t:o}=(0,m.$)(),r=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const t={lat:e.coords.latitude,lng:e.coords.longitude};l(t)}),(function(e){u.Am.warning(o("turn.on.gps"))}))};(0,a.useEffect)((()=>{r()}),[]);const p=[{lat:Number(e.location.lat)||0,lng:Number(e.location.lng)||0}];for(var v=new e.google.maps.LatLngBounds,g=0;g<p.length;g++)v.extend(p[g]);return(0,h.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,h.jsx)("button",{className:"map-button",type:"button",onClick:()=>{r(),t&&(async t=>{const l={lat:null===t||void 0===t?void 0:t.lat,lng:null===t||void 0===t?void 0:t.lng};e.setLocation(l);const a=await d(l,n.kr);e.setAddress(a)})(t)},children:(0,h.jsx)(c.nDs,{})}),(0,h.jsx)(s.Map,{cursor:"pointer",onClick:async(t,l,a)=>{const{latLng:s}=a,i={lat:s.lat(),lng:s.lng()};e.setLocation(i);const o=await d(i,n.kr);e.setAddress(o)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,h.jsx)(s.Marker,{position:e.location,icon:{url:i,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},89281:(e,t,l)=>{"use strict";l.d(t,{h:()=>d});var a=l(47313),s=l(12279),n=l.n(s),i=l(74294),o=l(72652),r=l(46417);const d=e=>{let{fetchOptions:t,debounceTimeout:l=400,onClear:s,refetchOptions:d=!1,...c}=e;const[u,m]=(0,a.useState)(!1),[h,p]=(0,a.useState)([]),v=(0,a.useMemo)((()=>n()((e=>{p([]),m(!0),t(e).then((e=>{p(e),m(!1)}))}),l)),[t,l]);return(0,r.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:v,onClear:()=>{v(""),s&&s()},notFoundContent:u?(0,r.jsx)(o.Z,{size:"small"}):"no results",...c,options:h,onFocus:()=>{h.length&&!d||v("")}})}},79261:(e,t,l)=>{"use strict";l.d(t,{Z:()=>m});var a=l(10976),s=l(45705),n=l(59491),i=l(49655),o=l(47313),r=l(24511),d=l(34344);const c={getCountries:e=>d.Z.get("rest/countries",{params:e}),getCities:e=>d.Z.get("rest/cities",{params:e})};var u=l(46417);const m=e=>{let{onClose:t,onSubmit:l,isButtonLoading:d}=e;const{t:m}=(0,r.$)(),[h,p]=(0,o.useState)(null),[v,g]=(0,o.useState)(null);return(0,u.jsxs)(a.Z,{layout:"vertical",onFinish:l,children:[(0,u.jsx)(a.Z.Item,{name:"country",label:m("country"),rules:[{required:!0,message:m("required")}],children:(0,u.jsx)(i._,{hasMore:null===h||void 0===h?void 0:h.next,fetchOptions:e=>{let{search:t,page:l}=e;return c.getCountries({search:t,page:l,has_price:!0}).then((e=>(p(e.links),e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:"".concat(e.id,",").concat(e.region_id)}})))))},onChange:e=>g(e)})}),v&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.Z.Item,{rules:[{required:!0,message:m("required")}],name:"city",label:m("city"),children:(0,u.jsx)(i._,{hasMore:null===h||void 0===h?void 0:h.next,fetchOptions:e=>{let{search:t,page:l}=e;return c.getCities({search:t,page:l,country_id:v.value,has_price:!0}).then((e=>{p(e.links);const t=[];return 1===e.meta.current_page&&t.push({label:m("whole.country"),value:"all"}),e.data.forEach((e=>{var l;t.push({label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:e.id})})),t}))}})})}),(0,u.jsxs)(s.Z,{className:"justify-content-end w-100",children:[(0,u.jsx)(n.Z,{onClick:t,htmlType:"button",children:m("cancel")}),(0,u.jsx)(n.Z,{loading:d,htmlType:"submit",type:"primary",children:m("add")})]})]})}},21429:(e,t,l)=>{"use strict";l.d(t,{P:()=>n});var a=l(70816),s=l.n(a);const n=[{title:"monday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")},{title:"tuesday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")},{title:"wednesday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")},{title:"thursday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")},{title:"friday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")},{title:"saturday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")},{title:"sunday",disabled:!1,from:s()("01:00:00","HH:mm:ss"),to:s()("23:00:00","HH:mm:ss")}]},2772:(e,t,l)=>{"use strict";l.d(t,{I:()=>a});const a=[{label:"IN_HOUSE",value:1,key:1},{label:"SELLER",value:2,key:2}]},19107:(e,t,l)=>{"use strict";l.d(t,{Z:()=>i});var a=l(31881),s=l.n(a),n=l(97421);async function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.kr,l={address:e,key:t};return s().get("https://maps.googleapis.com/maps/api/geocode/json",{params:l}).then((e=>{let{data:t}=e;return t.results[0]})).catch((e=>"not found"))}},17649:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});l(97421);function a(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const t=e.location.split(", ");return{lat:Number(null===t||void 0===t?void 0:t[0]),lng:Number(null===t||void 0===t?void 0:t[1])}}},33834:(e,t,l)=>{"use strict";l.d(t,{K:()=>i});var a=l(97890),s=l(74776),n=l.n(s);const i=()=>{const e=(0,a.s0)(),t=(0,a.TH)(),l=n().parse(t.search,{ignoreQueryPrefix:!0});return{values:l,set:(t,a)=>e({search:n().stringify({...l,[t]:a})}),reset:t=>{const a={...l};a[t]&&delete a[t],e({search:n().stringify({...a})})},clear:()=>e({search:n().stringify({})}),merge:t=>e({search:n().stringify({...l,...t})})}}},18827:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>pe,steps:()=>he});var a=l(47313),s=l(83999),n=l(77181),i=l(2717),o=l(90954),r=l(73431),d=l(92102),c=l(24511),u=l(33834),m=l(10976),h=l(45705),p=l(59491),v=l(68197),g=l(59624),x=l(66672),y=l(16124),j=l(74294),Z=l(89281),b=l(52421),f=l(97388),_=l(5764),k=l(61197),w=l(97421),S=l(52838),I=l(19107),C=l(2772);const H=[{label:"minutes",value:"minute",key:"minute"},{label:"hours",value:"hour",key:"hour"},{label:"days",value:"day",key:"day"}];var q=l(46417);const N=e=>{let{logoImage:t,setLogoImage:l,backImage:s,setBackImage:o,form:r,location:d,setLocation:u}=e;const{t:h}=(0,c.$)(),{defaultLang:p,languages:N}=(0,i.v9)((e=>e.formLang),i.wU),[M,F]=(0,a.useState)(""),{placePredictions:L,getPlacePredictions:T,isPlacePredictionsLoading:O}=(0,S.Z)({apiKey:w.kr,libraries:["places","geocode"]});return(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(n.Z,{children:(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:4,children:(0,q.jsx)(m.Z.Item,{label:h("logo.image"),children:(0,q.jsx)(_.Z,{type:"shops/logo",imageList:t,setImageList:l,form:r,multiple:!1,name:"logo_img"})})}),(0,q.jsx)(g.Z,{span:4,children:(0,q.jsx)(m.Z.Item,{label:h("background.image"),children:(0,q.jsx)(_.Z,{type:"shops/background",imageList:s,setImageList:o,form:r,multiple:!1,name:"background_img"})})}),(0,q.jsx)(g.Z,{span:10,children:(0,q.jsx)(m.Z.Item,{label:h("status.note"),name:"status_note",children:(0,q.jsx)(b.Z,{rows:4})})}),(0,q.jsx)(g.Z,{span:4,children:(0,q.jsx)(m.Z.Item,{name:"status",label:h("status"),children:(0,q.jsx)(x.Z,{disabled:!0})})})]})})}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(n.Z,{title:h("general"),children:(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:12,children:(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:24,children:N.map(((e,t)=>(0,q.jsx)(m.Z.Item,{label:h("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===p,message:h("required")},{min:2,message:h("title.required")}],hidden:e.locale!==p,children:(0,q.jsx)(x.Z,{})},"title"+t)))}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(m.Z.Item,{label:h("phone"),name:"phone",rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(y.Z,{min:0,className:"w-100"})})})]})}),(0,q.jsx)(g.Z,{span:12,children:N.map(((e,t)=>(0,q.jsx)(m.Z.Item,{label:h("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===p,message:h("required")},{min:3,message:h("required")}],hidden:e.locale!==p,children:(0,q.jsx)(b.Z,{rows:4})},"desc"+t)))}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{label:h("shop.tags"),name:"tags",rules:[{required:!1,message:h("required")}],children:(0,q.jsx)(Z.h,{mode:"multiple",fetchOptions:async function(e){const t={search:e};return k.Z.getAllSeller(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:(null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},style:{minWidth:150}})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{label:h("shop.type"),name:"delivery_type",rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(j.Z,{options:C.I})})}),(0,q.jsx)(g.Z,{span:12,hidden:!0,children:(0,q.jsx)(m.Z.Item,{label:h("seller"),name:"user",rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(x.Z,{})})})]})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(n.Z,{title:h("delivery.time"),children:(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{name:"delivery_time_type",label:h("delivery_time_type"),rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(j.Z,{className:"w-100",children:H.map((e=>(0,q.jsx)(j.Z.Option,{value:e.value,label:h(e.label)},e.value)))})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{name:"delivery_time_from",label:h("delivery_time_from"),rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(y.Z,{className:"w-100"})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{name:"delivery_time_to",label:h("delivery_time_to"),rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(y.Z,{className:"w-100"})})})]})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(n.Z,{title:h("order.info"),children:(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{label:h("tax"),name:"tax",rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(y.Z,{min:0,addonAfter:"%",className:"w-100"})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{label:h("admin.comission"),name:"percentage",rules:[{required:!0,message:h("required")}],children:(0,q.jsx)(y.Z,{min:0,className:"w-100",addonAfter:"%"})})})]})})}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(n.Z,{title:h("address"),children:(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:12,children:N.map(((e,t)=>(0,q.jsx)(m.Z.Item,{label:h("address"),name:"address[".concat(e.locale,"]"),rules:[{required:e.locale===p,message:h("required")}],hidden:e.locale!==p,children:(0,q.jsx)(j.Z,{allowClear:!0,searchValue:M,showSearch:!0,autoClearSearchValue:!0,loading:O,options:null===L||void 0===L?void 0:L.map((e=>({label:e.description,value:e.description}))),onSearch:e=>{F(e),e.length>0&&T({input:e})},onSelect:async e=>{const t=await(0,I.Z)(e);u({lat:null===t||void 0===t?void 0:t.geometry.location.lat,lng:null===t||void 0===t?void 0:t.geometry.location.lng})}})},"address"+t)))}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(f.Z,{location:d,setLocation:u,setAddress:e=>r.setFieldsValue({["address[".concat(p,"]")]:e})})})]})})})]})};var M=l(17649),F=l(73339);const L=e=>{var t,l,s,n,r,u,v,g,x,y,j;let{next:Z}=e;const{t:b}=(0,c.$)(),[f]=m.Z.useForm(),_=(0,i.I0)(),{activeMenu:k}=(0,i.v9)((e=>e.menu),i.wU),{settings:w}=(0,i.v9)((e=>e.globalSettings),i.wU),[S,I]=(0,a.useState)(null!==k&&void 0!==k&&null!==(t=k.data)&&void 0!==t&&t.location?{lat:parseFloat(null===k||void 0===k||null===(l=k.data)||void 0===l||null===(s=l.location)||void 0===s?void 0:s.latitude),lng:parseFloat(null===k||void 0===k||null===(n=k.data)||void 0===n||null===(r=n.location)||void 0===r?void 0:r.longitude)}:(0,M.Z)(w)),[H,L]=(0,a.useState)(!1),{myShop:T}=(0,i.v9)((e=>e.myShop),i.wU),[O,A]=(0,a.useState)(null!==(u=k.data)&&void 0!==u&&u.logo_img?[null===(v=k.data)||void 0===v?void 0:v.logo_img]:[]),[Y,P]=(0,a.useState)(null!==(g=k.data)&&void 0!==g&&g.background_img?[null===(x=k.data)||void 0===x?void 0:x.background_img]:[]);(0,a.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);e.open_time=JSON.stringify(null===e||void 0===e?void 0:e.open_time),e.close_time=JSON.stringify(null===e||void 0===e?void 0:e.close_time),_((0,o.nc)({activeMenu:k,data:{...k.data,...e}}))}),[]);return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(m.Z,{form:f,name:"basic",layout:"vertical",onFinish:e=>{var t,l,a;L(!0);const s={...e,delivery_type:(null===e||void 0===e||null===(t=e.delivery_type)||void 0===t?void 0:t.value)||(null===e||void 0===e?void 0:e.delivery_type),"images[0]":null===(l=O[0])||void 0===l?void 0:l.name,"images[1]":null===(a=Y[0])||void 0===a?void 0:a.name,delivery_time_type:e.delivery_time_type,delivery_time_to:e.delivery_time_to||0,delivery_time_from:e.delivery_time_from||0,user_id:e.user.value,visibility:Number(e.visibility),"location[latitude]":S.lat,"location[longitude]":S.lng,user:void 0,delivery_time:0,type:"shop"===T.type?"shop":"restaurant",tags:e.tags.map((e=>e.value))};null===s||void 0===s||delete s.background_img,null===s||void 0===s||delete s.logo_img,function(e,t){d.Z.update(t).then((()=>{(0,i.dC)((()=>{_((0,o.nc)({activeMenu:k,data:e})),_((0,F.S)({}))})),Z()})).finally((()=>L(!1)))}(e,s)},initialValues:{visibility:!0,status:"new",...k.data,delivery_type:null!==(y=null===(j=k.data)||void 0===j?void 0:j.delivery_type)&&void 0!==y?y:C.I[0]},children:[(0,q.jsx)(N,{logoImage:O,setLogoImage:A,backImage:Y,setBackImage:P,form:f,location:S,setLocation:I}),(0,q.jsx)(h.Z,{children:(0,q.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:H,children:b("next")})})]})})};var T=l(66204),O=l(99096),A=l(86345),Y=l(51282),P=l(70816),D=l.n(P),U=l(34344);const B={getById:e=>U.Z.get("dashboard/seller/shop-working-days/".concat(e)),create:e=>U.Z.post("dashboard/seller/shop-working-day",e,{}),update:(e,t)=>U.Z.put("dashboard/seller/shop-working-days/".concat(e),t,{}),delete:e=>U.Z.delete("dashboard/seller/shop-working-days",{params:e})},z={getById:e=>U.Z.get("dashboard/seller/shop-closed-dates/".concat(e)),create:e=>U.Z.post("dashboard/seller/shop-closed-dates",e,{}),update:(e,t)=>U.Z.put("dashboard/seller/shop-closed-dates/".concat(e),t,{}),delete:e=>U.Z.delete("dashboard/seller/shop-closed-dates",{params:e})};var E=l(97890),V=l(21429),$=l(65919),W=l(43681),K=l(11829),G=l(58821);const J=e=>{let{next:t,prev:l}=e;const[s]=m.Z.useForm(),{t:r}=(0,c.$)(),[d,u]=(0,a.useState)([]),[x,y]=(0,a.useState)(new Array(7).fill(!1)),[j,Z]=(0,a.useState)(!1),[b,f]=(0,a.useState)(!1),{myShop:_}=(0,i.v9)((e=>e.myShop),i.wU),k=(0,E.s0)(),w=(0,i.I0)(),S=[{from:new Date(1900,4,18),to:new Date(D()().subtract(1,"days"))}],{activeMenu:I}=(0,i.v9)((e=>e.menu),i.wU),[C,H]=(0,a.useState)(!0);(0,a.useEffect)((()=>{s.setFieldsValue({working_days:V.P}),_.uuid&&(f(!0),z.getById(_.uuid).then((e=>{u(e.data.closed_dates.filter((e=>e.day>D()(new Date).format("YYYY-MM-DD"))).map((e=>new Date(e.day))))})),B.getById(_.uuid).then((e=>{y(0!==e.data.dates.length?e.data.dates.map((e=>e.disabled)):[]),0!==e.data.dates.length&&s.setFieldsValue({working_days:e.data.dates.map((e=>({title:e.day,from:D()(e.from,"HH:mm:ss"),to:D()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)})))})})).finally((()=>f(!1))))}),[]);const N=d&&d.length>0?(0,q.jsxs)(v.Z,{children:[(0,q.jsx)(T.Z,{style:{fontSize:14,padding:"4px 10px",width:"100%",marginTop:"10px"},children:r("Your.existing.vacations")}),(0,q.jsxs)(g.Z,{span:24,className:"mt-2",children:[d.slice(0,C?1:d.length).map(((e,t)=>(0,q.jsxs)(h.Z,{className:"d-flex justify-content-between",style:{borderBottom:"1px solid #4D5B75"},children:[(0,q.jsx)(g.Z,{span:24,style:{fontSize:14,marginTop:"8px"},children:D()(e).format("YYYY-MM-DD")}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(T.Z,{color:"red",className:"cursor-pointer mt-3 mb-2",style:{fontSize:14},onClick:()=>{return t=e,u(d.filter((e=>e!==t)));var t},children:r("remove")})})]},t))),(0,q.jsx)(p.Z,{className:"mt-3 w-100",onClick:()=>{H(!C)},children:C?(0,q.jsx)(G.ahe,{}):(0,q.jsx)(G.dMq,{})})]})]}):(0,q.jsx)(T.Z,{style:{fontSize:14,padding:"4px 10px",width:"100%"},children:"Please pick one or more days."}),M=(e,t)=>{const l=[];for(let a=e;a<t;a++)l.push(a);return l},L=()=>({disabledHours:()=>M(0,1),disabledMinutes:()=>M(0,0),disabledSeconds:()=>M(0,60)});return(0,q.jsx)(q.Fragment,{children:b?(0,q.jsx)(Y.Z,{}):(0,q.jsx)(m.Z,{form:s,layout:"vertical",onFinish:e=>{Z(!0);const t={dates:d?d.map((e=>D()(e).format("YYYY-MM-DD"))):void 0},l={dates:e.working_days.map((e=>({day:e.title,from:D()(e.from?e.from:"00").format("HH:mm"),to:D()(e.to?e.to:"00").format("HH:mm"),disabled:e.disabled})))},a="my-shop";z.update(_.uuid,t).then((()=>{w((0,o.ph)({...I,nextUrl:a})),k("/".concat(a)),w((0,F.S)())})).finally((()=>Z(!1))),0!==e.working_days.length&&B.update(_.uuid,l).then((()=>{w((0,o.ph)({...I,nextUrl:a})),k("/".concat(a)),w((0,F.S)())})).finally((()=>Z(!1)))},children:(0,q.jsxs)(v.Z,{children:[(0,q.jsx)(g.Z,{span:13,children:(0,q.jsx)(n.Z,{title:r("restaurant.working.days"),children:(0,q.jsx)(v.Z,{gutter:8,children:(0,q.jsx)(g.Z,{span:24,children:(0,q.jsx)(m.Z.List,{name:"working_days",children:e=>(0,q.jsx)("div",{children:e.map(((e,t)=>(0,q.jsxs)(v.Z,{gutter:12,align:"center",children:[(0,q.jsx)(g.Z,{span:7,children:(0,q.jsx)(m.Z.Item,{name:[t,"day"],children:(0,q.jsx)("span",{children:r(V.P[t].title)})})}),x[e.key]?(0,q.jsx)(g.Z,{span:13,className:"mt-2",children:(0,q.jsx)("span",{children:r("shop.closed")})}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(g.Z,{span:7,children:(0,q.jsx)(m.Z.Item,{rules:[{required:!1===x[e.key]}],name:[t,"from"],children:(0,q.jsx)(O.Z,{disabledTime:L,picker:"time",placeholder:r("start.time")})})}),(0,q.jsx)(g.Z,{span:6,children:(0,q.jsx)(m.Z.Item,{rules:[{required:!1===x[e.key]}],name:[t,"to"],children:(0,q.jsx)(O.Z,{disabledTime:L,picker:"time",placeholder:r("end.time")})})})]}),(0,q.jsx)(g.Z,{span:4,children:(0,q.jsx)(m.Z.Item,{name:[t,"disabled"],valuePropName:"checked",children:(0,q.jsx)(A.Z,{checkedChildren:(0,q.jsx)(W.Z,{}),unCheckedChildren:(0,q.jsx)(K.Z,{}),checked:x[e.key],onChange:()=>(e=>{const t=[...x];t[e]=!x[e],y(t)})(e.key)})})})]},e.key)))})})})})})}),(0,q.jsx)(g.Z,{span:11,children:(0,q.jsxs)(n.Z,{title:r("restaurant.closed.days"),children:[(0,q.jsx)("p",{children:"If you can't answer the buyer's questions in time and want to share this information with your buyers, you can add the dates here."}),(0,q.jsx)(m.Z.Item,{rules:[{required:!1,message:r("required")}],children:(0,q.jsx)($._W,{className:"datepicker",mode:"multiple",disabled:S,min:1,selected:d,onSelect:u,footer:N,showOutsideDays:!0})})]})}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsxs)(h.Z,{children:[(0,q.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:j,children:r("submit")}),(0,q.jsx)(p.Z,{htmlType:"submit",onClick:()=>l(),children:r("prev")})]})})]})})})};var R=l(26824),Q=l(78508),X=l(9274),ee=l(28867),te=l(47515),le=l(79261),ae=l(88172),se=l(23560),ne=l(69658),ie=l(74580);const oe=e=>{var t,l;let{next:s,prev:n}=e;const{t:o}=(0,c.$)(),{activeMenu:r}=(0,i.v9)((e=>e.menu),i.wU),d=(0,i.I0)(),{locations:u,loading:m}=(0,i.v9)((e=>e.shopLocations)),[v,x]=(0,a.useState)(null),[y,j]=(0,a.useState)(!1),[Z,b]=(0,a.useState)(!1),{setIsModalVisible:f}=(0,a.useContext)(ie._),_=[{title:o("location"),dataIndex:"location",key:"location",render:(e,t)=>{var l,a,s,n;return(0,q.jsxs)("span",{children:[null===(l=t.country)||void 0===l||null===(a=l.translation)||void 0===a?void 0:a.title,t.city?",":""," ",null===(s=t.city)||void 0===s||null===(n=s.translation)||void 0===n?void 0:n.title]})}},{title:o("image"),dataIndex:"country",key:"image",render:e=>{var t;return(0,q.jsx)(R.Z,{src:e.img,alt:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,width:60,height:40})}},{title:o("options"),dataIndex:"options",key:"options",render:(e,t)=>(0,q.jsx)(h.Z,{children:(0,q.jsx)(p.Z,{onClick:()=>{x([t.id]),f(!0)},type:"primary",danger:!0,icon:(0,q.jsx)(te.Z,{})})})}],k={shop_id:null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.id};return(0,a.useEffect)((()=>{var e;null!==r&&void 0!==r&&null!==(e=r.data)&&void 0!==e&&e.id&&d((0,ee.MY)(k))}),[null===r||void 0===r||null===(l=r.data)||void 0===l?void 0:l.id]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(h.Z,{className:"justify-content-end w-100",children:(0,q.jsx)(p.Z,{onClick:()=>b(!0),type:"primary",children:o("add")})}),(0,q.jsx)(Q.Z,{loading:m,dataSource:u,columns:_}),(0,q.jsx)(X.Z,{footer:null,visible:Z,destroyOnClose:!0,onCancel:()=>b(!1),children:(0,q.jsx)(le.Z,{onClose:()=>b(!1),onSubmit:e=>{var t;const l={country_id:e.country.value.split(",")[0],region_id:e.country.value.split(",")[1],shop_id:null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.id};var a;"all"!==e.city.value&&(l.city_id=null===(a=e.city)||void 0===a?void 0:a.value);j(!0),ae.Z.create(l).then((()=>{se.Am.success(o("successfully.added")),d((0,ee.MY)(k)),b(!1)})).finally((()=>{j(!1)}))},isButtonLoading:y})}),(0,q.jsx)(ne.Z,{click:()=>{j(!0);const e={...Object.assign({},...v.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};ae.Z.delete(e).then((()=>{d((0,ee.MY)(e)),se.Am.success(o("successfully.deleted"))})).finally((()=>{j(!1),x(null),f(!1)}))},text:o("delete.location"),setText:x,loading:y}),(0,q.jsx)(g.Z,{span:24,children:(0,q.jsxs)(h.Z,{children:[(0,q.jsx)(p.Z,{type:"primary",htmlType:"button",onClick:()=>s(),children:o("next")}),(0,q.jsx)(p.Z,{htmlType:"button",onClick:()=>n(),children:o("prev")})]})})]})},re={getAll:e=>U.Z.get("dashboard/seller/shop-socials",{params:e}),create:e=>U.Z.post("dashboard/seller/shop-socials",e),update:e=>U.Z.put("dashboard/seller/shop-socials",{},{params:e})};var de=l(80314);const ce=[{label:"Facebook",value:"facebook"},{label:"Instagram",value:"instagram"},{label:"Telegram",value:"telegram"},{label:"Youtube",value:"youtube"},{label:"LinkedIn",value:"linkedin"},{label:"Snapchat",value:"snapchat"},{label:"WeChat",value:"wechat"},{label:"WhatsApp",value:"whatsapp"},{label:"Twitch",value:"twitch"},{label:"Discord",value:"discord"},{label:"Pinterest",value:"pinterest"},{label:"Steam",value:"steam"},{label:"Spotify",value:"spotify"},{label:"Reddit",value:"reddit"},{label:"Skype",value:"skype"},{label:"Twitter",value:"twitter"}];function ue(e){let{prev:t,next:l}=e;const{t:s}=(0,c.$)(),{myShop:o}=(0,i.v9)((e=>e.myShop),i.wU),[r,d]=(0,a.useState)(ce),[u,y]=(0,a.useState)([{type:"",content:"",id:k()}]),[Z,b]=(0,a.useState)(!1),[f,_]=(0,a.useState)(!1);function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let l="";for(let a=0;a<e;a++){l+=t[Math.floor(Math.random()*t.length)]}return l}const w=(e,t,l)=>{y(u.flatMap((a=>a.id===t?{...a,[e]:l}:a)))};(0,a.useEffect)((()=>{b(!0);const e={shop_id:o.id};re.getAll(e).then((e=>{var t;null!==(t=e.data)&&void 0!==t&&t.length&&y(e.data.map((e=>({type:e.type,content:e.content,id:k()}))))})).finally((()=>b(!1)))}),[o.id]),(0,de.Z)((()=>{}));return(0,q.jsx)(a.Fragment,{children:Z?(0,q.jsx)(Y.Z,{}):(0,q.jsxs)(m.Z,{onFinish:()=>{_(!0);const e={data:u.map((e=>e.type&&e.content?{type:e.type,content:e.content}:null)).filter((e=>!!e))};return re.create(e).then((()=>l())).finally((()=>_(!1)))},layout:"vertical",children:[(0,q.jsxs)(n.Z,{children:[u.map(((e,t)=>(0,q.jsxs)(v.Z,{gutter:12,children:[(0,q.jsx)(g.Z,{span:9,children:(0,q.jsx)(m.Z.Item,{label:s("type"),children:(0,q.jsx)(j.Z,{showSearch:!0,options:r,value:e.type,onChange:t=>w("type",e.id,t)})})}),(0,q.jsx)(g.Z,{span:12,children:(0,q.jsx)(m.Z.Item,{label:s("url"),children:(0,q.jsx)(x.Z,{value:e.content,onChange:t=>w("content",e.id,t.target.value)})})}),u.length>1&&(0,q.jsx)(g.Z,{span:3,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,q.jsx)(p.Z,{type:"primary",danger:!0,icon:(0,q.jsx)(te.Z,{}),onClick:()=>{return t=e,void y(u.filter((e=>e.id!==t.id)));var t}})})]},t))),(0,q.jsx)(p.Z,{className:"w-100 my-3",type:"dashed",onClick:()=>{y([...u,{type:"",content:"",id:k()}])},children:s("add.social")})]}),(0,q.jsxs)(h.Z,{className:"mt-4",children:[(0,q.jsx)(p.Z,{onClick:t,children:s("prev")}),(0,q.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:!!f,children:s("next")})]})]})})}const{Step:me}=s.Z,he=[{title:"shop",content:"First-content"},{title:"shop.locations",content:"Second-content"},{title:"social",content:"Third-content"},{title:"delivery",content:"Fourth-content"}];function pe(){var e,t;const{t:l}=(0,c.$)(),m=(0,i.I0)(),h=(0,u.K)(),p=Number((null===(e=h.values)||void 0===e?void 0:e.step)||0),{activeMenu:v}=(0,i.v9)((e=>e.menu),i.wU),{languages:g}=(0,i.v9)((e=>e.formLang),i.wU),[x,y]=(0,a.useState)(!1),j=e=>({items:e,uid:e,url:e,name:e});function Z(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,l=g.map((e=>{var l,a,s;return{["title[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,["address[".concat(e.locale,"]")]:null===(s=t.find((t=>t.locale===e.locale)))||void 0===s?void 0:s.address}}));return Object.assign({},...l)}(0,a.useEffect)((()=>{var e;(v.refetch||null!==(e=h.values)&&void 0!==e&&e.step)&&(y(!0),d.Z.get().then((e=>{var t,l,a,s,n,i,r,d,c,u,h,p,g,x,y,b,f,_;const k={...e.data,...Z(e.data),logo_img:j(null===(t=e.data)||void 0===t?void 0:t.logo_img),background_img:j(null===(l=e.data)||void 0===l?void 0:l.background_img),user:{label:"".concat(e.data.seller.firstname||""," ").concat((null===(a=e.data)||void 0===a||null===(s=a.seller)||void 0===s?void 0:s.lastname)||""),value:null===(n=e.data)||void 0===n||null===(i=n.seller)||void 0===i?void 0:i.id},delivery_time_from:(null===(r=e.data)||void 0===r?void 0:r.delivery_time.from)||0,delivery_time_to:(null===(d=e.data)||void 0===d?void 0:d.delivery_time.to)||0,delivery_time_type:null===(c=e.data)||void 0===c?void 0:c.delivery_time.type,categories:null===(u=e.data)||void 0===u||null===(h=u.categories)||void 0===h?void 0:h.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),tags:null===(p=e.data)||void 0===p||null===(g=p.tags)||void 0===g?void 0:g.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),price:(null===(x=e.data)||void 0===x?void 0:x.price)||0,price_per_km:(null===(y=e.data)||void 0===y?void 0:y.price_per_km)||0,min_amount:(null===(b=e.data)||void 0===b?void 0:b.min_amount)||0,tax:(null===(f=e.data)||void 0===f?void 0:f.tax)||0,percentage:(null===(_=e.data)||void 0===_?void 0:_.percentage)||0};m((0,o.nc)({activeMenu:v,data:k}))})).finally((()=>{y(!1),m((0,o.A_)(v))})))}),[v.refetch,null===(t=h.values)||void 0===t?void 0:t.step]);const b=()=>{const e=p+1;h.set("step",e)},f=()=>{const e=p-1;h.set("step",e)};return(0,q.jsxs)(n.Z,{title:l("shop.edit"),extra:(0,q.jsx)(r.Z,{}),children:[(0,q.jsx)(s.Z,{current:p,onChange:e=>{m((0,o.nc)({activeMenu:v,data:{...v.data,step:e}})),h.set("step",e)},children:he.map((e=>(0,q.jsx)(me,{title:l(e.title)},e.title)))}),x?(0,q.jsx)(Y.Z,{}):(0,q.jsxs)("div",{className:"steps-content",children:["First-content"===he[p].content&&(0,q.jsx)(L,{next:b,loading:x}),"Second-content"===he[p].content&&(0,q.jsx)(oe,{prev:f,next:b}),"Third-content"===he[p].content&&(0,q.jsx)(ue,{prev:f,next:b}),"Fourth-content"===he[p].content&&(0,q.jsx)(J,{prev:f})]})]})}},24654:()=>{}}]);
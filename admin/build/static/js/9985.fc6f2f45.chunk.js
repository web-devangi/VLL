(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9985],{89802:(e,t,l)=>{"use strict";l.d(t,{q:()=>o});var i=l(47313),n=l(74294),s=l(72652),d=l(46417);const o=e=>{let{fetchOptions:t,refetch:l=!1,value:o,...r}=e;const[a,c]=(0,i.useState)(!1),[u,v]=(0,i.useState)([]);"object"===typeof(null===o||void 0===o?void 0:o.label)&&null!==(null===o||void 0===o?void 0:o.label)&&(o.label=o.label.value);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.Z,{labelInValue:!0,filterOption:!1,notFoundContent:a?(0,d.jsx)(s.Z,{size:"small"}):"no results",value:o,...r,options:a?[]:u,onFocus:()=>{u.length&&!l||(c(!0),t().then((e=>{v(e),c(!1)})))}})})}},4014:(e,t,l)=>{"use strict";function i(e){var t,l;let i=null===e||void 0===e?void 0:e.slice(0,1),n=null===e||void 0===e?void 0:e.lastIndexOf("@"),s=null===e||void 0===e?void 0:e.slice(1,n-1);s=null===(t=s)||void 0===t?void 0:t.replace(/./g,"*");let d=null===e||void 0===e?void 0:e.slice(n-1,e.length);return null===i||void 0===i||null===(l=i.concat(s))||void 0===l?void 0:l.concat(d)}l.d(t,{Z:()=>i})},84261:(e,t,l)=>{"use strict";function i(e){const t="".concat(e),l="*".repeat(t.length-2);return(null===t||void 0===t?void 0:t[0])+l+(null===t||void 0===t?void 0:t[(null===t||void 0===t?void 0:t.length)-1])}l.d(t,{Z:()=>i})},51988:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});l(47313);var i=l(24511),n=l(66188);const s=l.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",d=l.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=l.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var r=l(46417);const a=function(e){let{id:t="noresult",text:l=""}=e;const{t:a}=(0,i.$)(),c={src:{noproductsfound:s,noresult:d,nosell:o}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,n.useRive)(c);return(0,r.jsxs)("div",{className:"animation-canvas",children:[(0,r.jsx)("div",{style:{width:"100%",height:200},children:(0,r.jsx)(u,{})}),(0,r.jsx)("div",{className:"text",children:a(l)})]})}},41481:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var i=l(47313),n=l(66672),s=l(16031),d=l(40765),o=l(46417);function r(e){let{handleChange:t,defaultValue:l,resetSearch:r,...a}=e;const[c,u]=(0,i.useState)(l),v=(0,i.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,i.useEffect)((()=>{u(l)}),[r]),(0,o.jsx)(n.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,o.jsx)(d.Z,{}),...a})}},89281:(e,t,l)=>{"use strict";l.d(t,{h:()=>a});var i=l(47313),n=l(12279),s=l.n(n),d=l(74294),o=l(72652),r=l(46417);const a=e=>{let{fetchOptions:t,debounceTimeout:l=400,onClear:n,refetchOptions:a=!1,...c}=e;const[u,v]=(0,i.useState)(!1),[h,p]=(0,i.useState)([]),x=(0,i.useMemo)((()=>s()((e=>{p([]),v(!0),t(e).then((e=>{p(e),v(!1)}))}),l)),[t,l]);return(0,r.jsx)(d.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),n&&n()},notFoundContent:u?(0,r.jsx)(o.Z,{size:"small"}):"no results",...c,options:h,onFocus:()=>{h.length&&!a||x("")}})}},77370:(e,t,l)=>{"use strict";function i(e,t){for(var l=[],i=[],n="",s=0;s<(null===(d=e.stocks)||void 0===d?void 0:d.length);s++){var d;n="",e.stocks[s].extras.sort(((e,t)=>e.extra_group_id-t.extra_group_id));for(var o=0;o<(null===(r=e.stocks[s].extras)||void 0===r?void 0:r.length);o++){var r,a=Object.assign({},e.stocks[s].extras[o]),c=l.findIndex((e=>e.extra_value_id==a.extra_value_id));-1==c?(a.level=o,a.up=[n],l.push(a),n+=a.extra_value_id.toString()):(l[c].up.push(n),n+=a.extra_value_id.toString())}var u={id:e.stocks[s].id,extras:n,price:e.stocks[s].price,quantity:e.stocks[s].quantity,countable_id:e.stocks[s].countable_id,discount:e.stocks[s].discount,tax:e.stocks[s].tax,total_price:e.stocks[s].total_price,bonus:e.stocks[s].bonus};i.push(u)}return{stock:i,extras:l}}function n(e,t,l){for(var i=""==e?[]:e.split(","),n=[],s=[],d=0;d<=i.length;d++){d-1>=0&&(s[s.length]=i[d-1].toString());var o=t.filter((e=>{if(new Set(e.up).has(s.join("")))return e}));o.length>0&&n.push(o)}d=0;if(s.length<n.length)for(;d<t.length;){s[s.length]=n[n.length-1][0].extra_value_id.toString();let e=t.filter((e=>!!new Set(e.up).has(s.join(""))));if(0==e.length)break;n.push(e),d++}var r=l.findIndex((e=>e.extras==s.join("")));return{stock:l[r],extras:n}}l.d(t,{o:()=>i,y:()=>n})},28939:(e,t,l)=>{"use strict";function i(e){var t;const l=null===e||void 0===e||null===(t=e.extras)||void 0===t?void 0:t.find((e=>"image"===e.group.type));return l?l.value:""}l.d(t,{Z:()=>i})},84017:(e,t,l)=>{"use strict";function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?"".concat(i," ").concat(t):"".concat(t," ").concat(i)}l.d(t,{Z:()=>i})},91220:(e,t,l)=>{"use strict";function i(e,t){var l;const i=(null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title)||"pcs";if(!e)return 0;switch(null===t||void 0===t?void 0:t.position){case"after":return e+" "+i;case"before":return i+" "+e}}l.d(t,{Z:()=>i})},11101:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});var i=l(34344);const n={getAll:e=>i.Z.get("rest/brands/paginate",{params:e}),getById:(e,t)=>i.Z.get("rest/brands/".concat(e),{params:t})}},29955:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});var i=l(34344);const n={getAll:e=>i.Z.get("dashboard/seller/categories/paginate",{params:e}),getById:(e,t)=>i.Z.get("dashboard/seller/categories/".concat(e),{params:t}),search:e=>i.Z.get("dashboard/seller/categories/search",{params:e}),paginateSelect:e=>i.Z.get("dashboard/seller/categories/select-paginate",{params:e})}},21448:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});var i=l(34344);const n={checkCoupon:e=>i.Z.post("rest/coupons/check",e),checkCashback:e=>i.Z.post("rest/cashback/check",e)}},84983:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>he});var i=l(47313),n=l(10976),s=l(256),d=l(59491),o=l(68197),r=l(59624),a=l(72652),c=l(77181),u=l(74294),v=l(66672),h=l(16031),p=l(49986),x=l(89281),m=l(2717),j=l(73270),y=l(24511),Z=l(55768),f=l(90954),g=l(97890),b=l(89802),_=l(26457),k=l(46417);const N=e=>{let{form:t}=e;const{t:l}=(0,y.$)(),s=(0,m.I0)(),a=(0,g.s0)(),{currencies:N}=(0,m.v9)((e=>e.currency),m.wU),[w,S]=(0,i.useState)([]);return(0,k.jsx)(c.Z,{title:l("customer.details"),children:(0,k.jsxs)(o.Z,{gutter:12,children:[(0,k.jsx)(r.Z,{span:16,children:(0,k.jsx)(n.Z.Item,{label:l("client"),name:"user",rules:[{required:!0,message:""}],children:(0,k.jsx)(x.h,{placeholder:l("select.client"),fetchOptions:async function(e){const t={search:e,perPage:10};return p.Z.search(t).then((e=>{let{data:t}=e;return S(t),function(e){if(!e)return;return(0,h.isArray)(e)?e.map((e=>({label:"".concat(e.firstname," ").concat(e.lastname||""),value:e.id}))):{label:"".concat(e.firstname," ").concat(e.lastname||""),value:e.id}}(t)}))},onSelect:function(e){const l=w.find((t=>t.id===e.value));s((0,j.oM)({user:e,userUuid:l.uuid})),t.setFieldsValue({address:null})}})})}),(0,k.jsx)(r.Z,{span:8,children:(0,k.jsx)(n.Z.Item,{label:"add",className:"label-hidden",children:(0,k.jsx)(d.Z,{icon:(0,k.jsx)(Z.Z,{}),onClick:()=>{s((0,f.bL)({url:"user/add",id:"user_add",name:"User add"})),a("/user/add")},children:l("add")})})}),(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{label:l("currency"),name:"currency_id",rules:[{required:!0,message:"missing_currency"}],children:(0,k.jsx)(u.Z,{placeholder:l("select.currency"),onSelect:function(e){const t=N.find((t=>t.id===e));s((0,j.dY)(t))},children:N.map(((e,t)=>(0,k.jsxs)(u.Z.Option,{value:e.id,children:[e.title," (",null===e||void 0===e?void 0:e.symbol,")"]},t)))})})}),(0,k.jsx)(r.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{label:l("payment.type"),name:"payment_type",rules:[{required:!0,message:l("missing.payment.type")}],children:(0,k.jsx)(b.q,{fetchOptions:async function(){return _.Z.getAll({perPage:100}).then((e=>{let{data:t}=e;return t.filter((e=>"cash"===e.tag||"wallet"===e.tag)).map((e=>({label:e.tag||"no name",value:e.id})))}))},className:"w-100",placeholder:l("select.payment.type"),disabled:!0})})}),(0,k.jsx)(r.Z,{span:24,children:(0,k.jsx)(n.Z.Item,{label:l("note"),name:"note",children:(0,k.jsx)(v.Z,{})})})]})})};var w=l(45705),S=l(11101),C=l(29955),q=l(11875),I=l(45464),M=l(82138),O=l(11829),V=l(12019),F=l(8846),z=l(43681),U=l(62412),Y=l(9274),E=l(26824),H=l(83371),A=l(84017),P=l(23560),B=l(28939),D=l(77370),$=l(91220);function R(e){var t,l,s,a,c;let{extrasModal:u,setExtrasModal:v}=e;const[h,p]=(0,i.useState)(u.stock),[x,y]=(0,i.useState)(u.quantity||u.min_qty),[Z,f]=(0,i.useState)([]),[g,b]=(0,i.useState)([]),[_,N]=(0,i.useState)(null),[S,C]=(0,i.useState)([]),{currency:q}=(0,m.v9)((e=>e.order.data),m.wU),[O]=n.Z.useForm(),V=(0,m.I0)();(0,i.useEffect)((()=>{null!==_&&void 0!==_&&_.stock&&p({..._.stock,extras:S})}),[_]),(0,i.useEffect)((()=>{var e;const t=(0,D.o)(u);f(t.extras),b(t.stock),N((0,D.y)("",t.extras,t.stock)),null===(e=(0,D.y)("",t.extras,t.stock).extras)||void 0===e||e.forEach((e=>{C((t=>[...t,e[0]]))}))}),[u]);const z=e=>{var t;const l=S.findIndex((t=>t.extra_group_id===e.extra_group_id));let i=S;l>-1&&(i=i.slice(0,l)),i.push(e);const n=i.map((e=>e.id)).join(",");var s=(0,D.y)(n,Z,g);N(s),null===(t=s.extras)||void 0===t||t.forEach((t=>{const l=S.findIndex((l=>t[0].extra_group_id!=e.extra_group_id?l.extra_group_id===t[0].extra_group_id:l.extra_group_id===e.extra_group_id));if(t[0].level>=e.level){var n=t[0].extra_group_id!=e.extra_group_id?t[0]:e;-1==l?i.push(n):i[l]=n}})),C(i)},U=()=>{v(!1)};return(0,k.jsx)(Y.Z,{visible:!!u,title:null===(t=u.translation)||void 0===t?void 0:t.title,onCancel:U,footer:[(0,k.jsx)(d.Z,{type:"primary",onClick:()=>O.submit(),children:"Add"}),(0,k.jsx)(d.Z,{type:"default",onClick:U,children:"Cancel"})],children:(0,k.jsxs)(n.Z,{form:O,layout:"vertical",onFinish:e=>{const t={...u,stock:h,quantity:x,id:h.id,img:(0,B.Z)(h)||u.img};t.quantity>h.quantity?P.Am.warning("You cannot order more than ".concat(h.quantity)):(V((0,j.x$)(t)),v(null))},initialValues:{stock:null===(l=u.stock)||void 0===l?void 0:l.id},children:[(0,k.jsxs)(o.Z,{gutter:24,children:[(0,k.jsx)(r.Z,{span:8,children:(0,k.jsx)(E.Z,{src:(0,I.Z)((0,B.Z)(h)||u.img),alt:null===(s=u.translation)||void 0===s?void 0:s.title,height:200,style:{objectFit:"contain"}})}),(0,k.jsx)(r.Z,{span:16,children:(0,k.jsxs)(H.Z,{title:null===(a=u.translation)||void 0===a?void 0:a.title,children:[(0,k.jsxs)(H.Z.Item,{label:"Price",span:3,children:[(0,k.jsx)("div",{className:null!==h&&void 0!==h&&h.discount?"strike":"",children:(0,A.Z)(null===h||void 0===h?void 0:h.price,q.symbol)}),null!==h&&void 0!==h&&h.discount?(0,k.jsx)("div",{className:"ml-2 font-weight-bold",children:(0,A.Z)(null===h||void 0===h?void 0:h.total_price,q.symbol)}):""]}),(0,k.jsx)(H.Z.Item,{label:"In stock",span:3,children:(0,$.Z)(null===h||void 0===h?void 0:h.quantity,u.unit)}),(0,k.jsx)(H.Z.Item,{label:"Tax",span:3,children:(0,A.Z)(null===h||void 0===h?void 0:h.tax,q.symbol)})]})})]}),null===_||void 0===_||null===(c=_.extras)||void 0===c?void 0:c.map(((e,t)=>(0,k.jsx)("div",{className:"extra-group",children:(0,k.jsx)(w.Z,{className:"extras-select",children:e.map((e=>"color"===e.group.type?(0,k.jsx)("span",{className:"extras-color-wrapper ".concat(S.find((t=>t.id===e.id))?"selected":""),onClick:()=>z(e),children:(0,k.jsx)("i",{className:"extras-color",style:{backgroundColor:e.value}})}):"text"===e.group.type?(0,k.jsx)("span",{className:"extras-text rounded ".concat(S.find((t=>t.id===e.id))?"selected":""),onClick:()=>z(e),children:e.value}):(0,k.jsx)("span",{className:"extras-image rounded ".concat(S.find((t=>t.id===e.id))?"selected":""),onClick:()=>z(e),children:(0,k.jsx)("img",{src:(0,I.Z)(e.value),alt:"extra"})})))},"extra-group"+t)}))),(0,k.jsx)(o.Z,{gutter:12,className:"mt-3",children:(0,k.jsx)(r.Z,{span:24,children:(0,k.jsxs)(w.Z,{children:[(0,k.jsx)(d.Z,{type:"primary",icon:(0,k.jsx)(F.Z,{}),onClick:function(){1!==x&&(x<=u.min_qty||y((e=>e-1)))}}),x,(0,k.jsx)(d.Z,{type:"primary",icon:(0,k.jsx)(M.Z,{}),onClick:function(){x!==(null===h||void 0===h?void 0:h.quantity)&&x!==u.max_qty&&y((e=>e+1))}})]})})})]})})}var W=l(80314),L=l(95882),Q=l(21448),T=l(58821),X=l(74776),G=l.n(X);function J(){var e,t,l,n,s,u,h,p,x,Z,b,_,N,S;const{t:C}=(0,y.$)(),Y=(0,m.I0)(),E=(0,g.s0)(),{orderItems:H,data:P,total:B,coupon:D}=(0,m.v9)((e=>e.order),m.wU),[$,X]=(0,i.useState)(!1),[J,K]=(0,i.useState)(null),[ee,te]=(0,i.useState)(!1),[le,ie]=(0,i.useState)(""),{activeMenu:ne}=(0,m.v9)((e=>e.menu),m.wU);(0,W.Z)((()=>{Y((0,L.MW)({perPage:12,currency_id:P.currency.id}))}),[P.currency]),(0,W.Z)((()=>{H.length?function(){var e;const t=function(e){const t=e.map(((e,t)=>{var l;return{["products[".concat(t,"][stock_id]")]:(null===e||void 0===e||null===(l=e.stock)||void 0===l?void 0:l.id)||e.id,["products[".concat(t,"][quantity]")]:e.quantity}}));return Object.assign({},...t)}(H),l=G().stringify({currency_id:null===P||void 0===P||null===(e=P.currency)||void 0===e?void 0:e.id,...t},{addQueryPrefix:!0});X(!0),U.Z.calculate(l).then((e=>{let{data:t}=e;const l={product_total:null===t||void 0===t?void 0:t.price,order_tax:null===t||void 0===t?void 0:t.total_tax,order_total:null===t||void 0===t?void 0:t.total_price,service_fee:null===t||void 0===t?void 0:t.service_fee,coupon_price:null===t||void 0===t?void 0:t.coupon_price,total_discount:null===t||void 0===t?void 0:t.total_discount};Y((0,j.rU)(l))})).finally((()=>X(!1)))}():Y((0,j.pX)())}),[H,P.currency]);const se=e=>{Y((0,f.bL)({id:"product-".concat(e.uuid),url:"seller/product/".concat(e.uuid),name:"Product edit"})),E("/seller/product/".concat(e.uuid))};const de=(e,t)=>{Y((0,j.OQ)({quantity:e,id:t}))};return(0,k.jsxs)("div",{className:"order-items",children:[$&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(a.Z,{})}),(0,k.jsx)(o.Z,{gutter:24,className:"mt-4",children:(0,k.jsx)(r.Z,{span:24,children:(0,k.jsxs)(c.Z,{className:"shop-card",children:[null===H||void 0===H?void 0:H.map(((e,t)=>{var l,i,n,s,o,r,a,u,v,h,p,x,m,y,Z,f,g,b;return void 0===(null===e||void 0===e?void 0:e.bonus)||!1===(null===e||void 0===e?void 0:e.bonus)?(0,k.jsx)("div",{children:(0,k.jsxs)(c.Z,{className:"position-relative",children:[(0,k.jsx)(O.Z,{className:"close-order",onClick:()=>Y((0,j.Sg)(e))}),(0,k.jsxs)(w.Z,{className:"mr-3",children:[(0,k.jsx)("div",{className:"order-item-img",style:{marginRight:"20px"},children:(0,k.jsx)("img",{src:(0,I.Z)((null===e||void 0===e||null===(l=e.stock)||void 0===l||null===(i=l.product)||void 0===i?void 0:i.img)||(null===e||void 0===e?void 0:e.img)),alt:null===e||void 0===e||null===(n=e.stock)||void 0===n||null===(s=n.product)||void 0===s||null===(o=s.translation)||void 0===o?void 0:o.title})}),(0,k.jsx)(q.Z,{title:(0,k.jsxs)("div",{children:[(0,k.jsxs)(w.Z,{children:[(0,k.jsx)("div",{className:"cursor-pointer white-space-wrap",onClick:()=>se(e),children:(null===e||void 0===e||null===(r=e.stock)||void 0===r||null===(a=r.product)||void 0===a||null===(u=a.translation)||void 0===u?void 0:u.title)||(null===e||void 0===e||null===(v=e.translation)||void 0===v?void 0:v.title)}),(0,k.jsx)(d.Z,{icon:(0,k.jsx)(V.Z,{}),type:"text",size:"small",onClick:()=>K(e)})]}),(0,k.jsx)("div",{className:"product-price",children:(0,A.Z)((null===e||void 0===e?void 0:e.price)*(null===e||void 0===e?void 0:e.quantity),null===P||void 0===P||null===(h=P.currency)||void 0===h?void 0:h.symbol)})]}),description:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(w.Z,{children:[(0,k.jsx)(d.Z,{disabled:(null===e||void 0===e?void 0:e.quantity)<(null===e||void 0===e||null===(p=e.stock)||void 0===p||null===(x=p.product)||void 0===x?void 0:x.min_qty)+1||1===(null===e||void 0===e?void 0:e.quantity),onClick:()=>de(e.quantity-1,e.id),type:"primary",icon:(0,k.jsx)(F.Z,{})})," ",(0,k.jsxs)("span",{children:[(null===e||void 0===e?void 0:e.quantity)*((null===e||void 0===e?void 0:e.interval)||1),null===e||void 0===e||null===(m=e.unit)||void 0===m||null===(y=m.translation)||void 0===y?void 0:y.title]}),(0,k.jsx)(d.Z,{onClick:()=>de(e.quantity+1,e.id),type:"primary",disabled:(null===e||void 0===e?void 0:e.quantity)===(null===e||void 0===e?void 0:e.max_qty),icon:(0,k.jsx)(M.Z,{})})]}),(0,k.jsx)("div",{className:"mt-2",children:(0,k.jsx)(w.Z,{wrap:!0,children:null===e||void 0===e||null===(Z=e.addons)||void 0===Z?void 0:Z.map((e=>{var t,l,i,n;return(0,k.jsxs)("span",{className:"extras-text rounded",children:[(null===e||void 0===e||null===(t=e.stock)||void 0===t||null===(l=t.product)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title)||(null===e||void 0===e||null===(n=e.product.translation)||void 0===n?void 0:n.title)," ","x ",null===e||void 0===e?void 0:e.quantity]},e.id)}))})})]})})]})]})}):(0,k.jsx)("div",{children:(0,k.jsx)("div",{children:(0,k.jsx)(c.Z,{className:"position-relative",children:(0,k.jsxs)(w.Z,{className:"mr-3 w-100 justify-content-between align-items-start",children:[(0,k.jsxs)(w.Z,{children:[(0,k.jsx)("div",{className:"order-item-img",children:(0,k.jsx)("img",{src:(0,I.Z)(null===e||void 0===e?void 0:e.img),alt:null===(f=e.translation)||void 0===f?void 0:f.title})}),(0,k.jsx)(q.Z,{title:(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"cursor-pointer white-space-wrap",onClick:()=>se(e),children:null===(g=e.translation)||void 0===g?void 0:g.title}),(0,k.jsx)("div",{className:"product-price",children:(0,A.Z)(e.price,null===(b=P.currency)||void 0===b?void 0:b.symbol)})]})})]}),(0,k.jsxs)("div",{className:"bonus",children:[(0,k.jsx)(T.ojn,{})," Bonus"]})]})})})},t)})),(0,k.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,k.jsxs)(w.Z,{children:[(0,k.jsx)("img",{src:(0,I.Z)(null===(e=ne.data)||void 0===e||null===(t=e.shop)||void 0===t?void 0:t.logo_img),alt:"logo",width:40,height:40,className:"rounded-circle"}),(0,k.jsx)("div",{children:null===(l=ne.data)||void 0===l||null===(n=l.shop)||void 0===n||null===(s=n.translation)||void 0===s?void 0:s.title})]}),(0,k.jsxs)(w.Z,{children:[(0,k.jsx)(v.Z,{placeholder:C("coupon"),addonAfter:D.verified?(0,k.jsx)(z.Z,{style:{color:"#18a695"}}):null,defaultValue:D.coupon,onBlur:e=>{var t,l;return Y((0,j.cp)({coupon:e.target.value,user_id:null===(t=P.user)||void 0===t?void 0:t.value,shop_id:null===(l=P.shop)||void 0===l?void 0:l.value,verified:!1}))},onChange:e=>ie(e.target.value)}),(0,k.jsx)(d.Z,{onClick:()=>{le&&(te(!0),Q.Z.checkCoupon({coupon:le}).then((e=>{const t=e.data;(0,m.dC)((()=>{Y((0,j.oM)({coupon:t})),Y((0,j.NS)({price:e.data.price,verified:!0}))}))})).catch((()=>Y((0,j.NS)({price:0,verified:!1})))).finally((()=>te(!1))))},loading:ee,disabled:!le.length,children:C("check.coupon")})]}),(0,k.jsxs)("div",{className:"mt-2 text-right shop-total",children:[(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("products"),":"]}),(0,k.jsx)("p",{children:(0,A.Z)(B.product_total,null===(u=P.currency)||void 0===u?void 0:u.symbol)})]}),(0,k.jsx)("div",{}),(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("shop.tax"),":"]}),(0,k.jsx)("p",{children:(0,A.Z)(B.shop_tax,null===(h=P.currency)||void 0===h?void 0:h.symbol)})]}),(0,k.jsx)("div",{}),(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("delivery.fee"),":"]}),(0,k.jsx)("p",{children:(0,A.Z)(null===(p=B.delivery_fee)||void 0===p?void 0:p.reduce(((e,t)=>e+t),0),null===(x=P.currency)||void 0===x?void 0:x.symbol)})]}),(0,k.jsx)("div",{}),(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("discount"),":"]}),(0,k.jsxs)("p",{children:["-",(0,A.Z)(B.discount,null===(Z=P.currency)||void 0===Z?void 0:Z.symbol)]})]}),(0,k.jsx)("div",{}),(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("coupon"),":"]}),(0,k.jsxs)("p",{children:["-",(0,A.Z)(null===(b=B.coupon)||void 0===b?void 0:b.reduce(((e,t)=>e+t),0),null===(_=P.currency)||void 0===_?void 0:_.symbol)]})]}),(0,k.jsx)("div",{}),(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("service.fee"),":"]}),(0,k.jsx)("p",{children:(0,A.Z)(null===B||void 0===B?void 0:B.service_fee,null===(N=P.currency)||void 0===N?void 0:N.symbol)})]}),(0,k.jsx)("div",{}),(0,k.jsxs)(w.Z,{children:[(0,k.jsxs)("p",{className:"font-weight-bold",children:[C("total"),":"]}),(0,k.jsx)("p",{children:(0,A.Z)(B.order_total,null===(S=P.currency)||void 0===S?void 0:S.symbol)})]})]})]})]})})}),J&&(0,k.jsx)(R,{extrasModal:J,setExtrasModal:K})]})}var K=l(41481),ee=l(51988);const te=e=>{let{form:t}=e;const[l,n]=(0,i.useState)(null),[s,d]=(0,i.useState)(null),[u,v]=(0,i.useState)(null),[h,p]=(0,i.useState)(null),j=(0,m.I0)(),{data:y}=(0,m.v9)((e=>e.order),m.wU),{products:Z,loading:f}=(0,m.v9)((e=>e.product),m.wU);(0,W.Z)((()=>{const e={perPage:10,page:1,brand_id:null===l||void 0===l?void 0:l.value,category_id:null===s||void 0===s?void 0:s.value,search:u};j((0,L.MW)(e))}),[l,s,u]);return(0,k.jsxs)(c.Z,{title:"Order details",extra:(0,k.jsxs)(w.Z,{children:[(0,k.jsx)(x.h,{placeholder:"Select category",fetchOptions:async function(e){const t={search:e};return C.Z.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{minWidth:150},onChange:e=>d(e),value:s}),(0,k.jsx)(x.h,{placeholder:"Select brand",fetchOptions:async function(e){return S.Z.search(e).then((e=>{let{data:t}=e;return t.map((e=>({label:e.title,value:e.id})))}))},style:{minWidth:150},onChange:e=>n(e),value:l})]}),children:[(0,k.jsx)("div",{className:"d-flex justify-content-end mb-4",children:(0,k.jsx)(K.Z,{placeholder:"Search...",handleChange:v})}),(0,k.jsxs)("div",{className:"products-row order-items",children:[Z.length?Z.map((e=>{var t,l,i;return(0,k.jsxs)(c.Z,{className:"products-col",cover:(0,k.jsx)("img",{alt:null===(t=e.translation)||void 0===t?void 0:t.title,src:(0,I.Z)(e.img)}),onClick:()=>(e=>{y.currency?p(e):P.Am.warning("Please, select currency")})(e),children:[(0,k.jsx)(q.Z,{title:null===(l=e.translation)||void 0===l?void 0:l.title,description:null===(i=e.stock)||void 0===i?void 0:i.price}),(0,k.jsx)("div",{className:"preview",children:(0,k.jsx)(M.Z,{})})]},e.id)})):(0,k.jsx)(o.Z,{children:(0,k.jsx)(r.Z,{span:24,children:(0,k.jsx)(ee.Z,{id:"nosell"})})}),f&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(a.Z,{})})]}),h&&(0,k.jsx)(R,{extrasModal:h,setExtrasModal:p}),(0,k.jsx)(J,{form:t})]})};var le=l(78508),ie=l(2337),ne=l(31774),se=l(70816),de=l.n(se),oe=l(4014),re=l(84261);const ae=e=>{var t,l,n,s,o,r,u,v,h,p,x,m,j,Z,f,g,b,_;let{orderId:N,handleClose:w}=e;const{t:S}=(0,y.$)(),[C,q]=(0,i.useState)(!1),[I,M]=(0,i.useState)(null),[O,V]=(0,i.useState)([]);return(0,i.useEffect)((()=>{N&&(q(!0),U.Z.getById(N).then((e=>{M(e.data),console.log("res.data",e);const t=e.data.details;V(t)})).finally((()=>q(!1))))}),[N]),(0,k.jsx)(Y.Z,{visible:!!N,title:"Order created successfully",onOk:w,onCancel:w,footer:[(0,k.jsx)(d.Z,{onClick:w,children:S("back")}),(0,k.jsxs)(d.Z,{type:"primary",onClick:()=>window.print(),children:[(0,k.jsx)(ne.Z,{type:"printer"}),(0,k.jsx)("span",{className:"ml-1",children:S("print")})]})],style:{minWidth:"80vw"},children:(0,k.jsx)("div",{className:"py-4",children:C?(0,k.jsx)("div",{className:"w-100 text-center",children:(0,k.jsx)(a.Z,{})}):(0,k.jsxs)(c.Z,{children:[(0,k.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[(0,k.jsxs)("div",{children:[(0,k.jsxs)("h2",{className:"mb-1 font-weight-semibold",children:[S("invoice")," #",null===I||void 0===I?void 0:I.id]}),(0,k.jsx)("p",{children:de()(null===I||void 0===I?void 0:I.created_at).format("DD/M/YYYY")}),(0,k.jsx)("address",{children:(0,k.jsxs)("p",{children:[(0,k.jsxs)("span",{children:[S("delivery.type"),":"," ",null===I||void 0===I||null===(t=I.details[0])||void 0===t||null===(l=t.delivery_type)||void 0===l||null===(n=l.translation)||void 0===n?void 0:n.title]}),(0,k.jsx)("br",{}),(0,k.jsxs)("span",{children:[S("delivery.address"),":"," ",null===I||void 0===I||null===(s=I.details[0])||void 0===s||null===(o=s.delivery_address)||void 0===o?void 0:o.address]}),(0,k.jsx)("br",{}),(0,k.jsxs)("span",{children:[S("delivery.date"),": ",null===I||void 0===I||null===(r=I.details[0])||void 0===r?void 0:r.delivery_date," ",null===I||void 0===I||null===(u=I.details[0])||void 0===u?void 0:u.delivery_time]}),(0,k.jsx)("br",{}),(0,k.jsxs)("span",{children:[S("note"),": ",null===I||void 0===I?void 0:I.note]})]})})]}),(0,k.jsx)("address",{children:(0,k.jsxs)("p",{children:[(0,k.jsxs)("span",{className:"font-weight-semibold text-dark font-size-md",children:[null===I||void 0===I||null===(v=I.user)||void 0===v?void 0:v.firstname," ",null===I||void 0===I||null===(h=I.user)||void 0===h?void 0:h.lastname]}),(0,k.jsx)("br",{}),(0,k.jsxs)("span",{children:[S("phone"),":"," ",null!==I&&void 0!==I&&null!==(p=I.user)&&void 0!==p&&p.phone?(0,re.Z)(null===I||void 0===I||null===(x=I.user)||void 0===x?void 0:x.phone):S("no.phone")]}),(0,k.jsx)("br",{}),(0,k.jsxs)("span",{children:[S("email"),":"," ",null!==I&&void 0!==I&&null!==(m=I.user)&&void 0!==m&&m.email?(0,oe.Z)(null===I||void 0===I||null===(j=I.user)||void 0===j?void 0:j.email):S("no.email")]})]})})]}),(0,k.jsxs)("div",{className:"mt-4",children:[(0,k.jsxs)(le.Z,{scroll:{x:!0},dataSource:O,pagination:!1,className:"mb-5",children:[(0,k.jsx)(ie.Z,{title:"No.",dataIndex:"id"},"id"),(0,k.jsx)(ie.Z,{title:"Product",dataIndex:"product",render:(e,t)=>{var l,i,n;return null===t||void 0===t||null===(l=t.stock)||void 0===l||null===(i=l.product)||void 0===i||null===(n=i.translation)||void 0===n?void 0:n.title}},"product"),(0,k.jsx)(ie.Z,{title:S("quantity"),dataIndex:"quantity",render:(e,t)=>{var l,i,n,s,d,o;return(0,k.jsxs)("span",{children:[t.quantity*((null===t||void 0===t||null===(l=t.stock)||void 0===l||null===(i=l.product)||void 0===i?void 0:i.interval)||1),null===t||void 0===t||null===(n=t.stock)||void 0===n||null===(s=n.product)||void 0===s||null===(d=s.unit)||void 0===d||null===(o=d.translation)||void 0===o?void 0:o.title]})}},"quantity"),(0,k.jsx)(ie.Z,{title:S("discount"),dataIndex:"discount",render:e=>{var t;return(0,A.Z)(e,null===I||void 0===I||null===(t=I.currency)||void 0===t?void 0:t.symbol)}},"discount"),(0,k.jsx)(ie.Z,{title:S("price"),dataIndex:"total_price",render:e=>{var t;return(0,A.Z)(e,null===I||void 0===I||null===(t=I.currency)||void 0===t?void 0:t.symbol)}},"total_price")]}),(0,k.jsx)("div",{className:"d-flex justify-content-end",children:(0,k.jsxs)("div",{className:"text-right ",children:[(0,k.jsxs)("div",{className:"border-bottom",children:[(0,k.jsxs)("p",{className:"mb-2",children:[(0,k.jsxs)("span",{children:[S("sub-total.amount"),": "]}),(0,A.Z)(null===I||void 0===I?void 0:I.details.reduce(((e,t)=>e+t.total_price),0),null===I||void 0===I||null===(Z=I.currency)||void 0===Z?void 0:Z.symbol)]}),(0,k.jsxs)("p",{children:[S("delivery.price"),":"," ",(0,A.Z)(null===I||void 0===I?void 0:I.details.reduce(((e,t)=>e+t.delivery_fee),0),null===I||void 0===I||null===(f=I.currency)||void 0===f?void 0:f.symbol)]}),(0,k.jsxs)("p",{children:[S("tax"),":"," ",(0,A.Z)(null===I||void 0===I?void 0:I.details.reduce(((e,t)=>e+t.tax),0),null===I||void 0===I||null===(g=I.currency)||void 0===g?void 0:g.symbol)]}),(0,k.jsxs)("p",{children:[S("coupon"),":"," ",(0,A.Z)(null===I||void 0===I?void 0:I.details.reduce(((e,t)=>{var l;return e+(null===(l=t.coupon)||void 0===l?void 0:l.price)}),0),null===I||void 0===I||null===(b=I.currency)||void 0===b?void 0:b.symbol)]})]}),(0,k.jsxs)("h2",{className:"font-weight-semibold mt-3",children:[(0,k.jsxs)("span",{className:"mr-1",children:[S("grand.total"),": "]}),(0,A.Z)(null===I||void 0===I?void 0:I.total_price,null===I||void 0===I||null===(_=I.currency)||void 0===_?void 0:_.symbol)]})]})})]})]})})})};var ce=l(7370),ue=l(22054),ve=l(1003);function he(){const{t:e}=(0,y.$)(),[t]=n.Z.useForm(),l=(0,m.I0)(),{id:c}=(0,g.UO)(),u=(0,g.s0)(),[v,h]=(0,i.useState)(!1),[p,x]=(0,i.useState)(null),[Z,b]=(0,i.useState)(!1),{orderItems:_,data:w,total:S,coupon:C}=(0,m.v9)((e=>e.order),m.wU),{currencies:q}=(0,m.v9)((e=>e.currency),m.wU),{activeMenu:I}=(0,m.v9)((e=>e.menu),m.wU);function M(e){return{label:e.firstname+" "+(e.lastname||""),value:e.id}}function O(e){return e?{label:null===e||void 0===e?void 0:e.tag,value:e.id}:null}(0,i.useEffect)((()=>()=>{const e=t.getFieldsValue(!0),i={...e,deliveries:e.deliveries.map((e=>({...e,delivery_date:e.delivery_date?de()(e.delivery_date).format("YYYY-MM-DD"):void 0})))};l((0,j.oM)(i))}),[]),(0,i.useEffect)((()=>{I.refetch&&(b(!0),ce.Z.getById(c).then((e=>{var i,n;const s=e.data;l((0,j.dY)(s.currency));const d=null===(i=s.details)||void 0===i?void 0:i.map((e=>({...e.stock.product,...e.stock,quantity:e.quantity,stock:e.stock,img:(0,B.Z)(e.stock)||e.stock.product.img,product:void 0})));var o;l((0,j.B4)(d)),t.setFieldsValue({user:M(s.user),currency_id:s.currency.id,address:(o=s.details[0].delivery_address,o?{label:o.address,value:o.id}:null),payment_type:O(null===s||void 0===s||null===(n=s.transaction)||void 0===n?void 0:n.payment_system),note:s.note})})).finally((()=>{b(!1),l((0,f.A_)(I))})))}),[I.refetch]);const V=(e,t)=>{const i={payment_sys_id:t};h(!0),ce.Z.update(c,e).then((e=>function(e,t){ve.Z.create(e,t).then((e=>{x(e.data.id),l((0,j.bn)())})).finally((()=>h(!1)))}(e.data.id,i))).catch((()=>h(!1)))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{title:e("edit.order"),extra:(0,k.jsx)(d.Z,{type:"primary",loading:v,onClick:()=>t.submit(),children:e("save")})}),(0,k.jsxs)(n.Z,{name:"order-form",form:t,layout:"vertical",onFinish:e=>{var t,l,i;const n=function(e){const t=null===e||void 0===e?void 0:e.map((e=>{var t,l;return{quantity:e.quantity,stock_id:e.stockID?null===(t=e.stockID)||void 0===t?void 0:t.id:null===(l=e.stock)||void 0===l?void 0:l.id}})),l=null===e||void 0===e?void 0:e.flatMap((e=>{var t;return null===(t=e.addons)||void 0===t?void 0:t.map((t=>{var l,i;return{quantity:t.quantity,stock_id:t.stock_id,parent_id:e.stockID?null===(l=e.stockID)||void 0===l?void 0:l.id:null===(i=e.stock)||void 0===i?void 0:i.id}}))}));return t.concat(l)}(_),s={currency_id:e.currency_id,rate:null===(t=q.find((t=>t.id===e.currency_id)))||void 0===t?void 0:t.rate,delivery_fee:w.delivery_fee,coupon:C.coupon,tax:S.order_tax,payment_type:null===(l=e.payment_type)||void 0===l?void 0:l.label,note:e.note,delivery_date:de()(e.delivery_date).format("YYYY-MM-DD")+" "+de()(e.delivery_time).format("HH:mm"),user_id:e.user.value,products:null===n||void 0===n?void 0:n.filter((e=>!!e)),status:null===w||void 0===w?void 0:w.status};V(s,null===e||void 0===e||null===(i=e.payment_type)||void 0===i?void 0:i.value)},className:"order-add",initialValues:{user:w.user||null,address:w.address||null,currency_id:w.currency.id,payment_type:w.payment_type||null,note:w.note},children:[(0,k.jsxs)(o.Z,{gutter:24,hidden:Z,children:[(0,k.jsx)(r.Z,{span:16,children:(0,k.jsx)(te,{form:t})}),(0,k.jsx)(r.Z,{span:8,children:(0,k.jsx)(N,{form:t})})]}),Z&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(a.Z,{})})]}),p?(0,k.jsx)(ae,{orderId:p,handleClose:()=>{x(null);const e="orders";l((0,f.ph)({...I,nextUrl:e})),u("/".concat(e)),l((0,ue.AU)())}}):""]})}},8846:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var i=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};var d=l(17469),o=function(e,t){return n.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};o.displayName="MinusOutlined";const r=n.forwardRef(o)},55768:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var i=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=l(17469),o=function(e,t){return n.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};o.displayName="PlusCircleOutlined";const r=n.forwardRef(o)},31774:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var i=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"}}]},name:"printer",theme:"outlined"};var d=l(17469),o=function(e,t){return n.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};o.displayName="PrinterOutlined";const r=n.forwardRef(o)},2337:(e,t)=>{"use strict";t.Z=void 0;var l=function(e){return null};t.Z=l},24654:()=>{}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3075],{51988:function(n,e,t){t.d(e,{Z:function(){return a}});t(47313);var i=t(24511),o=t(66188),r=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",l=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",u=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",d=t(46417);var a=function(n){var e=n.id,t=void 0===e?"noresult":e,a=n.text,s=void 0===a?"":a,c=(0,i.$)().t,v={src:{noproductsfound:r,noresult:l,nosell:u}[t],artboard:"New Artboard",autoplay:!0},h=(0,o.useRive)(v).RiveComponent;return(0,d.jsxs)("div",{className:"animation-canvas",children:[(0,d.jsx)("div",{style:{width:"100%",height:200},children:(0,d.jsx)(h,{})}),(0,d.jsx)("div",{className:"text",children:c(s)})]})}},41481:function(n,e,t){t.d(e,{Z:function(){return v}});var i=t(1413),o=t(29439),r=t(45987),l=t(47313),u=t(66672),d=t(16031),a=t(40765),s=t(46417),c=["handleChange","defaultValue","resetSearch"];function v(n){var e=n.handleChange,t=n.defaultValue,v=n.resetSearch,h=(0,r.Z)(n,c),p=(0,l.useState)(t),f=(0,o.Z)(p,2),x=f[0],Z=f[1],j=(0,l.useMemo)((function(){return(0,d.debounce)((function(n){e(n)}),800)}),[]);return(0,l.useEffect)((function(){Z(t)}),[v]),(0,s.jsx)(u.Z,(0,i.Z)({value:x,onChange:function(n){Z(n.target.value),j(n.target.value)},prefix:(0,s.jsx)(a.Z,{})},h))}},89281:function(n,e,t){t.d(e,{h:function(){return h}});var i=t(1413),o=t(29439),r=t(45987),l=t(47313),u=t(12279),d=t.n(u),a=t(74294),s=t(72652),c=t(46417),v=["fetchOptions","debounceTimeout","onClear","refetchOptions"],h=function(n){var e=n.fetchOptions,t=n.debounceTimeout,u=void 0===t?400:t,h=n.onClear,p=n.refetchOptions,f=void 0!==p&&p,x=(0,r.Z)(n,v),Z=(0,l.useState)(!1),j=(0,o.Z)(Z,2),m=j[0],g=j[1],y=(0,l.useState)([]),b=(0,o.Z)(y,2),_=b[0],w=b[1],k=(0,l.useMemo)((function(){return d()((function(n){w([]),g(!0),e(n).then((function(n){w(n),g(!1)}))}),u)}),[e,u]);return(0,c.jsx)(a.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),h&&h()},notFoundContent:m?(0,c.jsx)(s.Z,{size:"small"}):"no results"},x),{},{options:_,onFocus:function(){_.length&&!f||k("")}}))}},77370:function(n,e,t){function i(n,e){for(var t=[],i=[],o="",r=0;r<(null===(l=n.stocks)||void 0===l?void 0:l.length);r++){var l;o="",n.stocks[r].extras.sort((function(n,e){return n.extra_group_id-e.extra_group_id}));for(var u=0;u<(null===(d=n.stocks[r].extras)||void 0===d?void 0:d.length);u++){var d,a=Object.assign({},n.stocks[r].extras[u]),s=t.findIndex((function(n){return n.extra_value_id==a.extra_value_id}));-1==s?(a.level=u,a.up=[o],t.push(a),o+=a.extra_value_id.toString()):(t[s].up.push(o),o+=a.extra_value_id.toString())}var c={id:n.stocks[r].id,extras:o,price:n.stocks[r].price,quantity:n.stocks[r].quantity,countable_id:n.stocks[r].countable_id,discount:n.stocks[r].discount,tax:n.stocks[r].tax,total_price:n.stocks[r].total_price,bonus:n.stocks[r].bonus};i.push(c)}return{stock:i,extras:t}}function o(n,e,t){for(var i=""==n?[]:n.split(","),o=[],r=[],l=0;l<=i.length;l++){l-1>=0&&(r[r.length]=i[l-1].toString());var u=e.filter((function(n){if(new Set(n.up).has(r.join("")))return n}));u.length>0&&o.push(u)}l=0;if(r.length<o.length)for(;l<e.length;){r[r.length]=o[o.length-1][0].extra_value_id.toString();var d=e.filter((function(n){return!!new Set(n.up).has(r.join(""))}));if(0==d.length)break;o.push(d),l++}var a=t.findIndex((function(n){return n.extras==r.join("")}));return{stock:t[a],extras:o}}t.d(e,{o:function(){return i},y:function(){return o}})},28939:function(n,e,t){function i(n){var e,t=null===n||void 0===n||null===(e=n.extras)||void 0===e?void 0:e.find((function(n){return"image"===n.group.type}));return t?t.value:""}t.d(e,{Z:function(){return i}})},84017:function(n,e,t){function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",i=Number(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?"".concat(i," ").concat(e):"".concat(e," ").concat(i)}t.d(e,{Z:function(){return i}})},91220:function(n,e,t){function i(n,e){var t,i=(null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)||"pcs";if(!n)return 0;switch(null===e||void 0===e?void 0:e.position){case"after":return n+" "+i;case"before":return i+" "+n}}t.d(e,{Z:function(){return i}})},85445:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var i=t(1413),o=t(29439),r=t(47313),l=t(97890),u=t(77181),d=t(46155),a=t(68197),s=t(59624),c=t(45705),v=t(66204),h=t(59491),p=t(24511),f=t(62412),x=t(90954),Z=t(2717),j=t(51282),m=t(80314),g=t(84017),y=t(15861),b=t(87757),_=t.n(b),w=t(72652),k=t(51988),S=t(45464),C=t(66909),q=t(82138),N=t(95882),P=t(89281),I=t(30763),F=t(41481),M=t(93433),E=t(9274),U=t(26824),O=t(83371),$=t(28939),R=t(91220),D=t(8846),z=t(77370),V=t(17101),A=t(46417);function B(n){var e,t,l,u,d=n.productData,v=n.setProductData,f=(0,p.$)().t,j=(0,Z.I0)(),m=(0,Z.v9)((function(n){return n.order.data}),Z.wU).currency,y=(0,Z.v9)((function(n){return n.menu}),Z.wU).activeMenu,b=(0,r.useState)({}),_=(0,o.Z)(b,2),k=_[0],C=_[1],N=(0,r.useState)(!1),P=(0,o.Z)(N,2),I=P[0],F=P[1],B=(0,r.useState)({}),T=(0,o.Z)(B,2),H=T[0],W=T[1],G=(0,r.useState)([]),J=(0,o.Z)(G,2),K=J[0],L=J[1],Q=(0,r.useState)([]),X=(0,o.Z)(Q,2),Y=X[0],nn=X[1],en=(0,r.useState)([]),tn=(0,o.Z)(en,2),on=tn[0],rn=tn[1],ln=(0,r.useState)((null===k||void 0===k?void 0:k.quantity)||d.quantity||d.min_qty),un=(0,o.Z)(ln,2),dn=un[0],an=un[1],sn=(0,r.useState)({extras:[],stock:{id:0,quantity:1,price:0}}),cn=(0,o.Z)(sn,2),vn=cn[0],hn=cn[1],pn=function(){v(null)},fn=function(n){var e;return(null===vn||void 0===vn||null===(e=vn.stock)||void 0===e?void 0:e[n||"price"])*dn},xn=function(n){var e,t=K.findIndex((function(e){return e.extra_group_id===n.extra_group_id})),i=K;t>-1&&(i=i.slice(0,t)),i.push(n);var o=i.map((function(n){return n.extra_value_id})).join(","),r=(0,z.y)(o,Y,on);hn(r),null===(e=r.extras)||void 0===e||e.forEach((function(e){var t=K.findIndex((function(t){return e[0].extra_group_id!==n.extra_group_id?t.extra_group_id===e[0].extra_group_id:t.extra_group_id===n.extra_group_id}));if(e[0].level>=n.level){var o=e[0].extra_group_id!==n.extra_group_id?e[0]:n;-1===t?i.push(o):i[t]=o}})),L(i)};return(0,r.useEffect)((function(){F(!0),V.Z.getById(d.uuid).then((function(n){var e,t=n.data;C(t);var i=(0,z.o)(t,{});nn(i.extras),an(t.quantity||t.min_qty),rn(i.stock),hn((0,z.y)(K,i.extras,i.stock)),null===(e=(0,z.y)("",i.extras,i.stock).extras)||void 0===e||e.forEach((function(n){L((function(e){return[].concat((0,M.Z)(e),[n[0]])}))}))})).finally((function(){return F(!1)}))}),[d.uuid]),(0,r.useEffect)((function(){null!==vn&&void 0!==vn&&vn.stock&&W((0,i.Z)((0,i.Z)({},vn.stock),{},{extras:K}))}),[vn]),(0,A.jsx)(E.Z,{visible:!!d,onCancel:pn,footer:[I?"":(0,A.jsx)(h.Z,{type:"primary",onClick:function(){var n={stock:(0,i.Z)((0,i.Z)({},H),{},{extras:K}),quantity:dn,id:H.id,img:(0,$.Z)(H)||(null===k||void 0===k?void 0:k.img),price:H.price,translation:null===k||void 0===k?void 0:k.translation};j((0,x.nc)({activeMenu:y,data:{newProduct:(0,i.Z)({},n)}})),v(null)},children:f("add")},"add-product"),(0,A.jsx)(h.Z,{type:"default",onClick:pn,children:f("cancel")},"cancel-modal")],children:(0,A.jsxs)(w.Z,{spinning:I,children:[(0,A.jsxs)(a.Z,{gutter:24,children:[(0,A.jsx)(s.Z,{span:8,children:(0,A.jsx)(U.Z,{src:(0,S.Z)((0,$.Z)(H)||(null===d||void 0===d?void 0:d.img)),alt:d.name,height:200,style:{objectFit:"contain"}})}),(0,A.jsx)(s.Z,{span:16,children:(0,A.jsxs)(O.Z,{title:null===(e=d.translation)||void 0===e?void 0:e.title,children:[(0,A.jsxs)(O.Z.Item,{label:f("price"),span:3,children:[(0,A.jsx)("div",{className:null!==H&&void 0!==H&&H.discount?"strike":"",children:(0,g.Z)(fn(),m.symbol)}),null!==H&&void 0!==H&&H.discount?(0,A.jsx)("div",{className:"ml-2 font-weight-bold",children:(0,g.Z)(fn("total_price"),m.symbol)}):""]}),(0,A.jsx)(O.Z.Item,{label:f("in.stock"),span:3,children:(0,R.Z)(null===H||void 0===H?void 0:H.quantity,null===k||void 0===k?void 0:k.unit)}),(0,A.jsx)(O.Z.Item,{label:f("tax"),span:3,children:(0,g.Z)(null===H||void 0===H?void 0:H.tax,m.symbol)})]})})]}),null!==vn&&void 0!==vn&&vn.extras?null===vn||void 0===vn||null===(t=vn.extras)||void 0===t?void 0:t.map((function(n,e){return(0,A.jsx)("div",{className:"extra-group",children:(0,A.jsx)(c.Z,{className:"extras-select",wrap:!0,children:null===n||void 0===n?void 0:n.map((function(n,e){var t,i,o,r;return"color"===(null===n||void 0===n||null===(t=n.group)||void 0===t?void 0:t.type)?(0,A.jsx)("span",{className:"extras-color-wrapper ".concat(K.find((function(e){return e.id===n.id}))?"selected":""),onClick:function(){return xn(n)},children:(0,A.jsx)("i",{className:"extras-color",style:{backgroundColor:null===n||void 0===n||null===(o=n.value)||void 0===o?void 0:o.value}})},"color"+e):"text"===(null===n||void 0===n||null===(i=n.group)||void 0===i?void 0:i.type)?(0,A.jsx)("span",{className:"extras-text rounded ".concat(K.find((function(e){return e.id===n.id}))?"selected":""),onClick:function(){return xn(n)},children:null===n||void 0===n||null===(r=n.value)||void 0===r?void 0:r.value},"text"+e):null}))})},"extra-group"+e)})):null,(0,A.jsx)(c.Z,{direction:"vertical",size:"middle"}),(0,A.jsx)(a.Z,{gutter:12,className:"mt-3",children:(0,A.jsx)(s.Z,{span:24,children:(0,A.jsxs)(c.Z,{children:[(0,A.jsx)(h.Z,{type:"primary",icon:(0,A.jsx)(D.Z,{}),onClick:function(){1!==dn&&(dn<=(null===k||void 0===k?void 0:k.min_qty)||an((function(n){return n-1})))}},"plus"),(dn||1)*((null===d||void 0===d?void 0:d.interval)||1),null===d||void 0===d||null===(l=d.unit)||void 0===l||null===(u=l.translation)||void 0===u?void 0:u.title,(0,A.jsx)(h.Z,{type:"primary",icon:(0,A.jsx)(q.Z,{}),onClick:function(){dn!==k.max_qty&&an((function(n){return n+1}))}},"minus")]})})})]})})}function T(){var n=(0,p.$)().t,e=(0,Z.I0)(),t=(0,Z.v9)((function(n){return n.product}),Z.wU),i=t.products,l=t.loading,d=(0,Z.v9)((function(n){return n.myShop}),Z.wU).myShop,v=(0,r.useState)(null),h=(0,o.Z)(v,2),f=h[0],x=h[1],j=(0,r.useState)(null),m=(0,o.Z)(j,2),g=m[0],b=(m[1],(0,r.useState)(null)),M=(0,o.Z)(b,2),E=M[0],U=M[1],O=(0,r.useState)(null),$=(0,o.Z)(O,2),R=$[0],D=$[1];function z(){return z=(0,y.Z)(_().mark((function n(e){var t;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={search:e,type:"main",shop_id:null===d||void 0===d?void 0:d.id},n.abrupt("return",I.Z.search(t).then((function(n){return n.data.map((function(n){var e;return{label:null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title,value:null===n||void 0===n?void 0:n.id,key:null===n||void 0===n?void 0:n.id}}))})));case 2:case"end":return n.stop()}}),n)}))),z.apply(this,arguments)}return(0,r.useEffect)((function(){var n={perPage:10,page:1,brand_id:null===g||void 0===g?void 0:g.value,category_id:null===E||void 0===E?void 0:E.value,search:f,shop_id:null===d||void 0===d?void 0:d.id,active:1};e((0,N.q1)(n))}),[g,E,f]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(u.Z,{title:n("products"),className:"order-add",children:[(0,A.jsxs)(c.Z,{wrap:!0,className:"mb-4",children:[(0,A.jsx)(F.Z,{placeholder:n("search"),handleChange:function(n){return x(n)},defaultValue:f}),(0,A.jsx)(P.h,{placeholder:n("select.category"),fetchOptions:function(n){return z.apply(this,arguments)},style:{minWidth:150},onChange:function(n){return U(n)},value:E})]}),0===i.length?(0,A.jsx)(s.Z,{span:24,children:(0,A.jsx)(k.Z,{id:"nosell"})}):(0,A.jsxs)("div",{className:"products-row order-items",children:[i.length?i.map((function(n){var e,t;return(0,A.jsxs)(u.Z,{className:"products-col",cover:(0,A.jsx)("img",{alt:null===n||void 0===n||null===(e=n.translation)||void 0===e?void 0:e.title,src:(0,S.Z)(null===n||void 0===n?void 0:n.img)}),onClick:function(){return D(n)},children:[(0,A.jsx)(C.Z,{title:null===n||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title}),(0,A.jsx)("div",{className:"preview",children:(0,A.jsx)(q.Z,{})})]},n.id)})):(0,A.jsx)(a.Z,{children:(0,A.jsx)(s.Z,{span:24,children:(0,A.jsx)(k.Z,{id:"nosell"})})}),l&&(0,A.jsx)("div",{className:"loader",children:(0,A.jsx)(w.Z,{})})]})]}),R&&(0,A.jsx)(B,{productData:R,setProductData:D})]})}function H(){var n,e,t,i,o,r,l,d,h,f,x,j,m,y=(0,p.$)().t,b=(0,Z.v9)((function(n){return n.menu}),Z.wU).activeMenu,_=(0,Z.v9)((function(n){return n.currency}),Z.wU).defaultCurrency;return(0,A.jsx)(u.Z,{title:y("new.product"),children:(0,A.jsxs)(a.Z,{gutter:12,children:[(0,A.jsx)(s.Z,{span:4,style:{width:"100px",height:"250px"},children:(0,A.jsx)("div",{style:{display:"flex",width:"100%",height:"100%",objectFit:"contain",overflow:"hidden",borderRadius:"15px"},children:(0,A.jsx)("img",{src:null===(n=b.data)||void 0===n||null===(e=n.newProduct)||void 0===e?void 0:e.img,placeholder:!0,style:{width:"100%",height:"100%",objectFit:"contain"}})})}),(0,A.jsxs)(s.Z,{span:20,children:[(0,A.jsx)("h4",{children:null===(t=b.data)||void 0===t||null===(i=t.newProduct)||void 0===i||null===(o=i.translation)||void 0===o?void 0:o.title}),(0,A.jsxs)(c.Z,{children:[(0,A.jsxs)("p",{children:[y("quantity"),": "]}),(0,A.jsx)("p",{children:null===(r=b.data)||void 0===r||null===(l=r.newProduct)||void 0===l?void 0:l.quantity})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(c.Z,{children:[(0,A.jsxs)("p",{children:[y("price"),": "]}),(0,A.jsx)("p",{children:(0,g.Z)(null===(d=b.data)||void 0===d||null===(h=d.newProduct)||void 0===h?void 0:h.price,null===_||void 0===_?void 0:_.symbol)})]}),(0,A.jsx)("br",{}),(0,A.jsx)(c.Z,{wrap:!0,children:null===(f=b.data)||void 0===f||null===(x=f.newProduct)||void 0===x||null===(j=x.stock)||void 0===j||null===(m=j.extras)||void 0===m?void 0:m.map((function(n){var e,t,i;return"color"===(null===n||void 0===n||null===(e=n.group)||void 0===e?void 0:e.type)?(0,A.jsx)("span",{style:{display:"block",width:"30px",height:"30px",backgroundColor:null===n||void 0===n||null===(t=n.value)||void 0===t?void 0:t.value,border:"2px solid #909091",borderRadius:"50%"}},null===n||void 0===n?void 0:n.id):(0,A.jsx)(v.Z,{children:null===n||void 0===n||null===(i=n.value)||void 0===i?void 0:i.value},null===n||void 0===n?void 0:n.id)}))})]})]})})}var W=t(66672),G=t(10976),J=t(16124),K=W.Z.TextArea;function L(n){var e=n.showModal,t=n.setShowModal,i=n.handleSubmit,l=n.userData,u=(0,p.$)().t,d=G.Z.useForm(),c=(0,o.Z)(d,1)[0],v=(0,Z.v9)((function(n){return n.globalSettings.settings}),Z.wU).before_order_phone_required;console.log("before_order_phone_required",v);var f=(0,r.useState)(!1),x=(0,o.Z)(f,2),j=x[0],m=x[1];return(0,A.jsx)(E.Z,{visible:e,title:u("note"),onCancel:function(){return t(!1)},footer:[(0,A.jsx)(h.Z,{type:"primary",onClick:function(){return c.submit()},loading:j,children:u("submit")},"submit-modal"),(0,A.jsx)(h.Z,{type:"default",onClick:function(){return t(null)},children:u("cancel")},"cancel-modal")],children:(0,A.jsx)(G.Z,{form:c,layout:"vertical",onFinish:function(n){m(!0),i(n).finally((function(){return m(!1)}))},initialValues:{phone:null===l||void 0===l?void 0:l.phone},children:(0,A.jsxs)(a.Z,{children:[(0,A.jsx)(s.Z,{span:24,children:(0,A.jsx)(G.Z.Item,{label:u("note"),name:"note",rules:[{required:!0,message:u("required")},{validator:function(n,e){return e&&""===(null===e||void 0===e?void 0:e.trim())?Promise.reject(new Error(u("no.empty.space"))):e&&(null===e||void 0===e?void 0:e.trim().length)<3?Promise.reject(new Error(u("must.be.at.least.3"))):Promise.resolve()}}],children:(0,A.jsx)(K,{rows:4,className:"w-100"})})}),"1"===v&&(0,A.jsx)(s.Z,{span:24,children:(0,A.jsx)(G.Z.Item,{label:u("phone.number"),name:"phone",rules:[{required:!0,message:u("required")},{validator:function(n,e){return e<0?Promise.reject(new Error(u("must.be.positive"))):Promise.resolve()}}],children:(0,A.jsx)(J.Z,{className:"w-100",addonBefore:"+",parser:function(n){return parseInt(n,10)},disabled:!(null===l||void 0===l||!l.phone)})})})]})})})}var Q=t(23560);function X(){var n,e,t,y,b,_,w,k,S,C,q=(0,p.$)().t,N=(0,Z.I0)(),P=(0,l.s0)(),I=(0,l.UO)(),F=I.order_id,M=I.stock_id,E=(0,Z.v9)((function(n){return n.menu}),Z.wU).activeMenu,U=(0,Z.v9)((function(n){return n.currency}),Z.wU).defaultCurrency,O=(0,r.useState)(!1),$=(0,o.Z)(O,2),R=$[0],D=$[1],z=(0,r.useState)({}),V=(0,o.Z)(z,2),B=V[0],W=V[1],G=(0,r.useState)(!1),J=(0,o.Z)(G,2),K=J[0],X=J[1],Y=function(){D(!0),f.Z.getById(F).then((function(n){var e,t=n.data,o=null===t||void 0===t||null===(e=t.details)||void 0===e?void 0:e.filter((function(n){return(null===n||void 0===n?void 0:n.stock_id)===Number(M)}));W((0,i.Z)((0,i.Z)({},o[0]),{},{user:null===t||void 0===t?void 0:t.user}))})).finally((function(){D(!1),N((0,x.A_)(E))}))};(0,r.useEffect)((function(){Y()}),[F]),(0,m.Z)((function(){E.refetch&&Y()}),[E.refetch]);return(0,A.jsxs)(A.Fragment,{children:[R?(0,A.jsx)(j.Z,{}):(0,A.jsxs)(u.Z,{children:[(0,A.jsx)(T,{}),(0,A.jsx)(d.Z,{}),(0,A.jsx)(u.Z,{title:q("old.product"),bordered:!0,children:(0,A.jsxs)(a.Z,{gutter:12,children:[(0,A.jsx)(s.Z,{span:4,style:{width:"100px",height:"250px"},children:(0,A.jsx)("div",{style:{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden",borderRadius:"15px"},children:(0,A.jsx)("img",{src:null===B||void 0===B||null===(n=B.stock)||void 0===n||null===(e=n.product)||void 0===e?void 0:e.img,placeholder:!0,style:{width:"100%",height:"100%",objectFit:"contain"}})})}),(0,A.jsxs)(s.Z,{span:20,children:[(0,A.jsx)("h4",{children:null===B||void 0===B||null===(t=B.stock)||void 0===t||null===(y=t.product)||void 0===y||null===(b=y.translation)||void 0===b?void 0:b.title}),(0,A.jsxs)(c.Z,{children:[(0,A.jsxs)("p",{children:[q("quantity"),": "]}),(0,A.jsx)("p",{children:null===B||void 0===B?void 0:B.quantity})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(c.Z,{children:[(0,A.jsxs)("p",{children:[q("price"),": "]}),(0,A.jsx)("p",{children:(0,g.Z)(null===B||void 0===B||null===(_=B.stock)||void 0===_?void 0:_.price,null===U||void 0===U?void 0:U.symbol)})]}),(0,A.jsx)("br",{}),(0,A.jsx)(c.Z,{wrap:!0,children:null===B||void 0===B||null===(w=B.stock)||void 0===w||null===(k=w.extras)||void 0===k?void 0:k.map((function(n){var e,t,i;return"color"===(null===n||void 0===n||null===(e=n.group)||void 0===e?void 0:e.type)?(0,A.jsx)("span",{style:{display:"block",width:"30px",height:"30px",backgroundColor:null===n||void 0===n||null===(t=n.value)||void 0===t?void 0:t.value,border:"2px solid #909091",borderRadius:"50%"}},null===n||void 0===n?void 0:n.id):(0,A.jsx)(v.Z,{children:null===n||void 0===n||null===(i=n.value)||void 0===i?void 0:i.value},null===n||void 0===n?void 0:n.id)}))})]})]})}),(0,A.jsx)(d.Z,{}),(null===(S=E.data)||void 0===S?void 0:S.newProduct)&&(0,A.jsx)(H,{}),(0,A.jsx)(c.Z,{wrap:!0,children:(0,A.jsx)(h.Z,{type:"primary",disabled:!(null!==(C=E.data)&&void 0!==C&&C.newProduct),onClick:function(){return X(!0)},children:q("next")})})]},"".concat(F," ").concat(M)),K&&(0,A.jsx)(L,{showModal:K,setShowModal:X,handleSubmit:function(n){var e,t,o,r,l,u,d="seller/order/details/".concat(F),a={products:[{replace_note:null===n||void 0===n?void 0:n.note,replace_stock_id:null===B||void 0===B||null===(e=B.stock)||void 0===e?void 0:e.id,replace_quantity:null===B||void 0===B?void 0:B.quantity,stock_id:null===(t=E.data)||void 0===t||null===(o=t.newProduct)||void 0===o||null===(r=o.stock)||void 0===r?void 0:r.id,quantity:null===(l=E.data)||void 0===l||null===(u=l.newProduct)||void 0===u?void 0:u.quantity}],currency_id:null===U||void 0===U?void 0:U.id,phone:"".concat(null===n||void 0===n?void 0:n.phone)};return null!==n&&void 0!==n&&n.phone||delete a.phone,f.Z.replaceProduct(F,a).then((function(){X(!1),Q.Am.success(q("successfully.replaced")),(0,Z.dC)((function(){N((0,x.ph)((0,i.Z)((0,i.Z)({},E),{},{nextUrl:d}))),N((0,x.xo)(E))})),P("/".concat(d))}))},userData:null===B||void 0===B?void 0:B.user})]})}},8846:function(n,e,t){t.d(e,{Z:function(){return d}});var i=t(1413),o=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},l=t(17469),u=function(n,e){return o.createElement(l.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:r}))};u.displayName="MinusOutlined";var d=o.forwardRef(u)}}]);
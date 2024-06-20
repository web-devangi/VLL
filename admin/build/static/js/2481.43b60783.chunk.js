"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2481],{73431:function(n,l,e){var i=e(47313),t=e(39180),o=e(2717),d=e(28830),u=e(60535),a=e(46417);l.Z=function(){var n=(0,o.I0)(),l=(0,o.v9)((function(n){return n.formLang}),o.wU),e=l.languages,r=l.defaultLang;(0,i.useEffect)((function(){u.Z.getAllActive().then((function(l){var e=l.data;n((0,d.dc)(e)),n((0,d.mh)(e.find((function(n){return 1===n.default})).locale))}))}),[]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.ZP.Group,{value:r,onChange:function(l){var e=l.target.value;n((0,d.mh)(e))},className:"float-right",buttonStyle:"solid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,a.jsx)(t.ZP.Button,{value:n.locale,children:n.title},n.id)}))})})}},89281:function(n,l,e){e.d(l,{h:function(){return f}});var i=e(1413),t=e(29439),o=e(45987),d=e(47313),u=e(12279),a=e.n(u),r=e(74294),s=e(72652),v=e(46417),c=["fetchOptions","debounceTimeout","onClear","refetchOptions"],f=function(n){var l=n.fetchOptions,e=n.debounceTimeout,u=void 0===e?400:e,f=n.onClear,m=n.refetchOptions,h=void 0!==m&&m,p=(0,o.Z)(n,c),x=(0,d.useState)(!1),Z=(0,t.Z)(x,2),j=Z[0],g=Z[1],y=(0,d.useState)([]),b=(0,t.Z)(y,2),w=b[0],S=b[1],k=(0,d.useMemo)((function(){return a()((function(n){S([]),g(!0),l(n).then((function(n){S(n),g(!1)}))}),u)}),[l,u]);return(0,v.jsx)(r.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),f&&f()},notFoundContent:j?(0,v.jsx)(s.Z,{size:"small"}):"no results"},p),{},{options:w,onFocus:function(){w.length&&!h||k("")}}))}},17649:function(n,l,e){e.d(l,{Z:function(){return i}});e(97421);function i(n){if(null===n||void 0===n||!n.location)return{lat:47.4143302506288,lng:8.532059477976883};var l=n.location.split(", ");return{lat:Number(null===l||void 0===l?void 0:l[0]),lng:Number(null===l||void 0===l?void 0:l[1])}}},84017:function(n,l,e){function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",i=Number(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===e?"".concat(i," ").concat(l):"".concat(l," ").concat(i)}e.d(l,{Z:function(){return i}})},24077:function(n,l,e){e.d(l,{Z:function(){return g}});var i=e(15861),t=e(29439),o=e(87757),d=e.n(o),u=e(47313),a=e(10976),r=e(9274),s=e(59491),v=e(68197),c=e(59624),f=e(2717),m=e(7370),h=e(90954),p=e(24511),x=e(49986),Z=e(89281),j=e(46417);function g(n){var l,e,o,g=n.orderDetails,y=n.handleCancel,b=(0,p.$)().t,w=(0,f.v9)((function(n){return n.menu}),f.wU).activeMenu,S=a.Z.useForm(),k=(0,t.Z)(S,1)[0],C=(0,f.I0)(),I=(0,u.useState)(!1),_=(0,t.Z)(I,2),F=_[0],B=_[1];function O(){return(O=(0,i.Z)(d().mark((function n(l){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={search:l.length?l:void 0,page:1,perPage:10,role:"deliveryman",exist_token:1},n.abrupt("return",x.Z.getAll(e).then((function(n){return n.data.map((function(n){return{label:n.firstname+" "+n.lastname||"no name",value:n.id}}))})));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,j.jsx)(r.Z,{visible:!!g,onCancel:y,footer:[(0,j.jsx)(s.Z,{type:"primary",onClick:function(){return k.submit()},loading:F,children:b("save")},"saveBtn"),(0,j.jsx)(s.Z,{type:"default",onClick:y,children:b("cancel")},"cancelBtn")],children:(0,j.jsx)(a.Z,{form:k,layout:"vertical",onFinish:function(n){var l={deliveryman_id:n.deliveryman.value};B(!0),m.Z.updateDelivery(g.id,l).then((function(){y(),C((0,h.xo)(w))})).finally((function(){return B(!1)}))},initialValues:{deliveryman:{label:g.deliveryman?(null===g||void 0===g||null===(l=g.deliveryman)||void 0===l?void 0:l.firstname)+" "+(null===g||void 0===g||null===(e=g.deliveryman)||void 0===e?void 0:e.lastname):null,value:g.deliveryman?null===g||void 0===g||null===(o=g.deliveryman)||void 0===o?void 0:o.id:null}},children:(0,j.jsx)(v.Z,{gutter:12,children:(0,j.jsx)(c.Z,{span:24,children:(0,j.jsx)(a.Z.Item,{label:b("deliveryman"),name:"deliveryman",rules:[{required:!0,message:b("required")}],children:(0,j.jsx)(Z.h,{className:"w-100",debounceTimeout:500,placeholder:b("select.shop"),fetchOptions:function(n){return O.apply(this,arguments)},allowClear:!0})})})})})})}},7920:function(n,l,e){e.d(l,{Z:function(){return _}});var i=e(4942),t=e(93433),o=e(1413),d=e(29439),u=e(47313),a=e(35432),r=e(10976),s=e(9274),v=e(59491),c=e(68197),f=e(59624),m=e(66672),h=e(46155),p=e(74294),x=e(2717),Z=e(24511),j=e(7370),g=e(51282),y=e(73431),b=e(70816),w=e.n(b),S=e(20052),k=e(12019),C=e(46417),I=a.Z.Panel;function _(n){var l,e=n.orderId,b=n.handleCancel,_=n.refetchPage,F=(0,x.v9)((function(n){return n.orderStatus}),x.wU).statusList,B=(0,x.v9)((function(n){return n.formLang}),x.wU),O=B.defaultLang,N=B.languages,L=r.Z.useForm(),M=(0,d.Z)(L,1)[0],Y=(0,Z.$)().t,z=(0,u.useRef)(null),D=(0,u.useState)(!1),P=(0,d.Z)(D,2),T=P[0],U=P[1],A=(0,u.useState)(!1),E=(0,d.Z)(A,2),V=E[0],$=E[1],q=(0,u.useState)(null!==F&&void 0!==F&&F.length?null===F||void 0===F?void 0:F.map((function(n){return{value:null===n||void 0===n?void 0:n.name,label:Y(null===n||void 0===n?void 0:n.name),key:null===n||void 0===n?void 0:n.id}})):[]),H=(0,d.Z)(q,2),G=H[0],R=H[1],K=(0,u.useState)(null),Q=(0,d.Z)(K,2),W=Q[0],J=Q[1],X=(0,u.useState)(null),nn=(0,d.Z)(X,2),ln=nn[0],en=nn[1],tn=(0,u.useState)(null),on=(0,d.Z)(tn,2),dn=on[0],un=on[1],an=(0,u.useState)(null),rn=(0,d.Z)(an,2),sn=rn[0],vn=rn[1];(0,u.useEffect)((function(){U(!0),j.Z.getById(e).then((function(n){var l,e,i,t;J(n.data),en(null===(l=n.data)||void 0===l||null===(e=l.notes)||void 0===e?void 0:e.filter((function(n){var l;return!(null===n||void 0===n||null===(l=n.notes)||void 0===l||!l.length)}))),vn(null===(i=n.data)||void 0===i?void 0:i.status),M.setFieldsValue({status:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.status})})).finally((function(){return U(!1)}))}),[e]),(0,u.useEffect)((function(){var n,l;if("pause"!==(null===W||void 0===W?void 0:W.status)){var e,i=F.findIndex((function(n){return n.name===(null===W||void 0===W?void 0:W.status)})),t=i>=0?[F[i],i<F.length-1?"pause"===(null===(n=F[i+1])||void 0===n?void 0:n.name)?F[i+2]:F[i+1]:null]:[i<F.length-1?F[i+1]:null];if("on_a_way"===(null===(l=F[i])||void 0===l?void 0:l.name)&&t.push(F[i+3]),null!==F&&void 0!==F&&F.filter((function(n){return"pause"===(null===n||void 0===n?void 0:n.name)&&(null===n||void 0===n?void 0:n.active)})))null===t||void 0===t||t.push(null===F||void 0===F||null===(e=F.filter((function(n){return"pause"===(null===n||void 0===n?void 0:n.name)&&(null===n||void 0===n?void 0:n.active)})))||void 0===e?void 0:e[0]);t.push({name:"canceled",id:8,active:!0,sort:(null===F||void 0===F?void 0:F.length)+1}),R(t.filter(Boolean).map((function(n){return{value:null===n||void 0===n?void 0:n.name,label:Y(null===n||void 0===n?void 0:n.name),key:null===n||void 0===n?void 0:n.id}})))}else R(null===F||void 0===F?void 0:F.map((function(n){return{value:null===n||void 0===n?void 0:n.name,label:Y(null===n||void 0===n?void 0:n.name),key:null===n||void 0===n?void 0:n.id}})))}),[W]);var cn=function(n){var l=Object.entries(n).filter((function(n){var l=(0,d.Z)(n,2);l[0];return!!l[1]}));if(0!==(null===l||void 0===l?void 0:l.length))return Object.fromEntries(l)};return(0,u.useEffect)((function(){var n;M.setFieldsValue((0,i.Z)({},"title[".concat(O||"en","]"),null===dn||void 0===dn||null===(n=dn.title)||void 0===n?void 0:n[O||"en"]))}),[O]),(0,C.jsx)(s.Z,{visible:!!e,title:[Y("order.status")],onCancel:b,footer:[(0,C.jsx)(v.Z,{type:"primary",onClick:function(){return M.submit()},loading:V,children:Y("save")},"save-form"),(0,C.jsx)(v.Z,{type:"default",onClick:b,children:Y("cancel")},"cansel-modal")],children:T?(0,C.jsx)(g.Z,{}):(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(r.Z,{form:M,layout:"vertical",onFinish:function(n){var l,e=null;$(!0),dn&&(null===n||void 0===n?void 0:n.status)===(null===W||void 0===W?void 0:W.status)&&(e=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,t.Z)(N.map((function(l){return(0,i.Z)({},l.locale,n["title[".concat(l.locale,"]")])})))))),e=cn(e));var d=cn((0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,t.Z)(N.map((function(l){return(0,i.Z)({},l.locale,n["note[".concat(l.locale,"]")])}))))))),u=d?{title:d}:null,a=(null===W||void 0===W?void 0:W.status)===(null===n||void 0===n?void 0:n.status)?null===W||void 0===W||null===(l=W.notes)||void 0===l?void 0:l.filter((function(l){return(null===l||void 0===l?void 0:l.status)===(null===n||void 0===n?void 0:n.status)})).flatMap((function(n){var l;return null===n||void 0===n||null===(l=n.notes)||void 0===l?void 0:l.map((function(n,l){return l===(null===dn||void 0===dn?void 0:dn.index)?(0,o.Z)((0,o.Z)({},n),{},{title:(0,o.Z)((0,o.Z)({},null===n||void 0===n?void 0:n.title),e)}):n}))})).filter(Boolean):[],r={status:null===n||void 0===n?void 0:n.status,notes:[].concat((0,t.Z)(a),[u]).filter(Boolean)};j.Z.updateStatus(W.id,r).then((function(){b(),_()})).finally((function(){return $(!1)}))},name:"order-status-change-form",children:[(0,C.jsx)(c.Z,{gutter:12,style:{marginBottom:"20px"},children:(0,C.jsx)(f.Z,{span:24,children:(0,C.jsx)(y.Z,{})})}),!(null===W||void 0===W||null===(l=W.notes)||void 0===l||!l.some((function(n){var l;return!(null===n||void 0===n||null===(l=n.notes)||void 0===l||!l.length)})))&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a.Z,{children:null===ln||void 0===ln?void 0:ln.map((function(n){var l;return(0,C.jsx)(I,{header:Y(null===n||void 0===n?void 0:n.status),children:(null===n||void 0===n||null===(l=n.notes)||void 0===l?void 0:l.map((function(l,e){var t,o,d;return(0,C.jsxs)(c.Z,{style:{marginBottom:"15px",display:"flex",justifyContent:"space-between"},gutter:12,children:[(0,C.jsxs)(f.Z,{span:(null===n||void 0===n?void 0:n.status)===(null===W||void 0===W?void 0:W.status)&&sn===(null===W||void 0===W?void 0:W.status)?22:24,children:[(0,C.jsxs)("div",{style:{display:"flex",columnGap:"10px"},children:[(0,C.jsxs)("span",{style:{marginTop:"3px"},children:[e+1,"."," "]}),(0,C.jsxs)("div",{style:{width:"100%"},children:[(0,C.jsx)("p",{style:{margin:0,fontSize:"15px",wordBreak:"break-all"},hidden:(null===dn||void 0===dn?void 0:dn.orderId)===(null===n||void 0===n?void 0:n.id)&&(null===dn||void 0===dn?void 0:dn.index)===e&&(null===W||void 0===W?void 0:W.status)===sn,children:(null===l||void 0===l||null===(t=l.title)||void 0===t?void 0:t[O||"en"])||"--"}),(0,C.jsx)(r.Z.Item,{name:"title[".concat(O||"en","]"),hidden:(null===dn||void 0===dn?void 0:dn.orderId)!==(null===n||void 0===n?void 0:n.id)||(null===dn||void 0===dn?void 0:dn.index)!==e||(null===W||void 0===W?void 0:W.status)!==sn,children:(0,C.jsx)(m.Z.TextArea,{maxLength:200,style:{width:"100%"},rows:Math.floor((null===l||void 0===l||null===(o=l.title)||void 0===o||null===(d=o[O||"en"])||void 0===d?void 0:d.length)/41||0)+1,ref:z},e)})]})]}),(0,C.jsx)("p",{style:{fontSize:"12px",margin:0,float:"right"},children:w()(null===l||void 0===l?void 0:l.created_at).format("DD-MM-YYYY HH:mm")})]}),(null===n||void 0===n?void 0:n.status)===(null===W||void 0===W?void 0:W.status)&&(null===W||void 0===W?void 0:W.status)===sn&&(0,C.jsx)(f.Z,{span:2,children:(null===dn||void 0===dn?void 0:dn.orderId)===(null===n||void 0===n?void 0:n.id)&&e===(null===dn||void 0===dn?void 0:dn.index)?(0,C.jsx)(v.Z,{type:"primary",icon:(0,C.jsx)(S.Z,{}),size:"small",onClick:function(){return M.submit()},loading:V}):(null===n||void 0===n?void 0:n.status)===(null===W||void 0===W?void 0:W.status)&&(0,C.jsx)(v.Z,{icon:(0,C.jsx)(k.Z,{}),size:"small",onClick:function(){var t;z.current.focus(),un({orderId:null===n||void 0===n?void 0:n.id,index:e,title:null===l||void 0===l?void 0:l.title}),M.setFieldsValue((0,i.Z)({},"title[".concat(O||"en","]"),null===l||void 0===l||null===(t=l.title)||void 0===t?void 0:t[O||"en"]))}})})]},e)})))||"--"},null===n||void 0===n?void 0:n.id)}))}),(0,C.jsx)(h.Z,{})]}),(0,C.jsxs)(c.Z,{gutter:12,children:[(0,C.jsx)(f.Z,{span:24,children:(0,C.jsx)(r.Z.Item,{label:Y("status"),name:"status",rules:[{required:!0,message:Y("required")}],children:(0,C.jsx)(p.Z,{options:G,onSelect:function(n){return vn(n)}})})}),(0,C.jsx)(f.Z,{span:24,children:N.map((function(n){return(0,C.jsx)(r.Z.Item,{name:"note[".concat(null===n||void 0===n?void 0:n.locale,"]"),label:Y("note"),hidden:(null===n||void 0===n?void 0:n.locale)!==O,children:(0,C.jsx)(m.Z.TextArea,{maxLength:200})},"note_".concat(null===n||void 0===n?void 0:n.id))}))})]})]})})})}},80355:function(n,l,e){var i=e(29439),t=e(84697),o=e(83999),d=e(9274),u=e(59491),a=e(77181),r=e(68197),s=e(59624),v=e(66204),c=e(47313),f=e(24511),m=e(7370),h=e(51282),p=e(58821),x=e(2717),Z=e(97421),j=e(18478),g=e(17649),y=e(66461),b=e(22539),w=e(3394),S=e(57864),k=e(70816),C=e.n(k),I=e(46417),_=o.Z.Step,F=function(){return(0,I.jsx)("div",{style:{position:"absolute",transform:"translate(-50%, -100%)"},children:(0,I.jsx)("img",{src:j,width:"50",alt:"Pin"})})};l.Z=function(n){var l,e,j,k=n.id,B=n.handleCancel,O=(0,f.$)().t,N=(0,c.useState)(null),L=(0,i.Z)(N,2),M=L[0],Y=L[1],z=(0,c.useState)(null),D=(0,i.Z)(z,2),P=D[0],T=D[1],U=(0,c.useState)(null),A=(0,i.Z)(U,2),E=A[0],V=A[1],$=(0,x.v9)((function(n){return n.globalSettings}),x.wU).settings,q=(0,g.Z)($),H=(0,c.useState)(0),G=(0,i.Z)(H,2),R=G[0],K=G[1],Q=(0,c.useState)({lat:null===q||void 0===q?void 0:q.lat,lng:null===q||void 0===q?void 0:q.lng}),W=(0,i.Z)(Q,2),J=W[0],X=W[1],nn=(0,c.useState)([{id:0,name:"new",icon:(0,I.jsx)(y.Z,{})},{id:1,name:"accepted",icon:(0,I.jsx)(p.IQF,{})},{id:2,name:"ready",icon:(0,I.jsx)(b.TkG,{})},{id:3,name:"on_a_way",icon:(0,I.jsx)(w.Akc,{})},{id:4,name:"delivered",icon:(0,I.jsx)(w.kme,{})}]),ln=(0,i.Z)(nn,2),en=ln[0],tn=ln[1];var on=(0,x.v9)((function(n){return n.globalSettings.settings}),x.wU).google_map_key;return(0,c.useEffect)((function(){Y(!0),m.Z.getById(k).then((function(n){var l,e,i,t,o,d,u,a=n.data;tn("canceled"===a.status?[{id:1,name:"new",icon:(0,I.jsx)(y.Z,{})},{id:5,name:"canceled",icon:(0,I.jsx)(S.SV5,{})}]:en),K("canceled"===a.status?1:null===(l=en.find((function(n){return n.name===a.status})))||void 0===l?void 0:l.id);var r=null!==(e=null!==(i=null!==(t=null===a||void 0===a||null===(o=a.address)||void 0===o?void 0:o.location)&&void 0!==t?t:null===a||void 0===a||null===(d=a.my_address)||void 0===d?void 0:d.location)&&void 0!==i?i:null===a||void 0===a||null===(u=a.delivery_point)||void 0===u?void 0:u.location)&&void 0!==e?e:{latitude:null===q||void 0===q?void 0:q.lat,longitude:null===q||void 0===q?void 0:q.lng};X({lat:Number(null===r||void 0===r?void 0:r.latitude),lng:Number(null===r||void 0===r?void 0:r.longitude)}),V("canceled"===a.status?"error":"success"),T(a)})).finally((function(){Y(!1)}))}),[]),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(d.Z,{visible:!!k,title:O("show.locations"),onCancel:function(){return B()},style:{minWidth:"80vw"},footer:[(0,I.jsx)(u.Z,{type:"default",onClick:B,children:O("cancel")},"cancelBtn")],children:M?(0,I.jsx)(h.Z,{}):(0,I.jsxs)(a.Z,{children:[(0,I.jsx)(o.Z,{current:R,status:E,className:"mb-5",children:null===en||void 0===en?void 0:en.map((function(n,l){return(0,I.jsx)(_,{title:O(n.name),icon:null===n||void 0===n?void 0:n.icon},n.id+l)}))}),(0,I.jsxs)(r.Z,{gutter:12,children:[(0,I.jsxs)(s.Z,{span:12,children:[(0,I.jsxs)("h3",{children:[O("order.id")," #",null===P||void 0===P?void 0:P.id]}),(0,I.jsxs)("p",{children:[(0,I.jsx)(p.D73,{})," ",C()(null===P||void 0===P?void 0:P.created_at).format("YYYY-MM-DD HH:mm")]}),(0,I.jsxs)("p",{children:[O("scheduled.at")," ",null===P||void 0===P?void 0:P.delivery_date]})]}),(0,I.jsxs)(s.Z,{span:12,children:[(0,I.jsxs)("p",{children:[O("status")," ","new"===(null===P||void 0===P?void 0:P.status)?(0,I.jsx)(v.Z,{color:"blue",children:O(null===P||void 0===P?void 0:P.status)}):"canceled"===(null===P||void 0===P?void 0:P.status)?(0,I.jsx)(v.Z,{color:"error",children:O(null===P||void 0===P?void 0:P.status)}):(0,I.jsx)(v.Z,{color:"cyan",children:O(null===P||void 0===P?void 0:P.status)})]}),(0,I.jsxs)("p",{children:[O("payment.method")," ",(0,I.jsx)("strong",{children:null===P||void 0===P||null===(l=P.transaction)||void 0===l||null===(e=l.payment_system)||void 0===e?void 0:e.tag})]}),(0,I.jsxs)("p",{children:[O("order.type")," ",(0,I.jsx)("strong",{children:null===P||void 0===P?void 0:P.delivery_type})]}),(0,I.jsxs)("p",{children:[O("payment.type")," ",(0,I.jsx)("strong",{children:null===P||void 0===P||null===(j=P.transaction)||void 0===j?void 0:j.status})]})]}),(0,I.jsxs)(s.Z,{span:24,className:"mt-5",children:[(0,I.jsx)("h4",{children:O("map")}),(0,I.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,I.jsx)(t.ZP,{bootstrapURLKeys:{key:on?Z.kr:on},defaultZoom:10,center:null!==J&&void 0!==J?J:q,options:{fullscreenControl:!1},children:(0,I.jsx)(F,{lat:null===J||void 0===J?void 0:J.lat,lng:null===J||void 0===J?void 0:J.lng})})})]})]})]})})})}},18478:function(n,l,e){n.exports=e.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);
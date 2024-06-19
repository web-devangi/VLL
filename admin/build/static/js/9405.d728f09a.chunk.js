"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9405],{84017:(e,l,i)=>{function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const s=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===i?"".concat(s," ").concat(l):"".concat(l," ").concat(s)}i.d(l,{Z:()=>s})},89405:(e,l,i)=>{i.r(l),i.d(l,{default:()=>I});var s=i(47313),n=i(77181),t=i(59491),a=i(68197),d=i(59624),o=i(83371),r=i(26824),c=i(86345),p=i(72652),h=i(92102),u=i(45464),m=i(12019),x=i(2717),v=i(97890),Z=i(90954),b=i(24511),j=i(73339),g=i(84017),f=i(79492),y=i(46417);function I(){var e,l,i,I,k,w,C;const{t:N}=(0,b.$)(),[S,_]=(0,s.useState)(!1),U=(0,x.I0)(),z=(0,v.s0)(),{activeMenu:$}=(0,x.v9)((e=>e.menu),x.wU),{myShop:A,loading:D}=(0,x.v9)((e=>e.myShop),x.wU),{defaultCurrency:E}=(0,x.v9)((e=>e.currency),x.wU),{user:F}=(0,x.v9)((e=>e.auth),x.wU),{isDemo:L,demoShop:M}=(0,f.Z)();return(0,s.useEffect)((()=>{$.refetch&&(U((0,j.S)()),U((0,Z.A_)($)))}),[$.refetch]),(0,y.jsx)(n.Z,{title:N("my.shop"),extra:"seller"!==(null===F||void 0===F?void 0:F.role)?null:(0,y.jsx)(t.Z,{type:"primary",icon:(0,y.jsx)(m.Z,{}),onClick:()=>{U((0,Z.bL)({data:A.uuid,id:"edit-shop",url:"my-shop/edit",name:N("edit.shop")})),z("/my-shop/edit")},children:N("shop.edit")}),children:D?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,y.jsx)(p.Z,{size:"large",className:"py-5"})}):(0,y.jsx)(a.Z,{gutter:12,children:(0,y.jsx)(d.Z,{span:20,children:(0,y.jsxs)("div",{className:"position-relative",children:[(0,y.jsxs)(o.Z,{bordered:!0,children:[(0,y.jsx)(o.Z.Item,{label:N("shop.name"),span:2,children:null===(e=A.translation)||void 0===e?void 0:e.title}),(0,y.jsx)(o.Z.Item,{label:N("shop.address"),span:2,children:null===(l=A.translation)||void 0===l?void 0:l.address}),(0,y.jsx)(o.Z.Item,{label:N("phone"),span:2,children:A.phone}),(0,y.jsx)(o.Z.Item,{label:N("tax"),span:2,children:A.tax}),(0,y.jsx)(o.Z.Item,{label:N("background.image"),span:2,children:A.background_img?(0,y.jsx)(r.Z,{width:200,src:(0,u.Z)(A.background_img),alt:"shop"}):""}),(0,y.jsx)(o.Z.Item,{label:N("logo.image"),span:2,children:A.logo_img?(0,y.jsx)(r.Z,{width:200,src:(0,u.Z)(A.logo_img),alt:"shop"}):""}),(0,y.jsx)(o.Z.Item,{label:N("open"),span:2,children:(0,y.jsx)(c.Z,{name:"open",defaultChecked:A.open,onChange:function(){_(!0),h.Z.setWorkingStatus().then((()=>U((0,Z.xo)($)))).finally((()=>_(!1)))},disabled:L&&A.id==M})}),(0,y.jsx)(o.Z.Item,{label:N("wallet"),span:2,children:(0,g.Z)(null===(i=A.seller)||void 0===i||null===(I=i.wallet)||void 0===I?void 0:I.price,null===E||void 0===E?void 0:E.symbol)})]}),A.subscription?(0,y.jsxs)(o.Z,{title:N("subscription"),bordered:!0,className:"mt-5",children:[(0,y.jsx)(o.Z.Item,{label:N("type"),span:3,children:null===(k=A.subscription)||void 0===k?void 0:k.type}),(0,y.jsx)(o.Z.Item,{label:N("price"),span:3,children:(0,g.Z)(null===(w=A.subscription)||void 0===w?void 0:w.price,null===E||void 0===E?void 0:E.symbol)}),(0,y.jsx)(o.Z.Item,{label:N("expired.at"),span:3,children:null===(C=A.subscription)||void 0===C?void 0:C.expired_at})]}):"",S&&(0,y.jsx)("div",{className:"loader",children:(0,y.jsx)(p.Z,{})})]})})})})}}}]);
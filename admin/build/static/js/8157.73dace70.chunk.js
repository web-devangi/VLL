"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8157],{88157:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var l=o(47313),n=o(83999),a=o(10976),i=o(77181),d=o(97890),s=o(2717),r=o(24511),u=o(29395),c=o(53456),v=o(35233),m=o(69096),_=o(33834),f=o(90954),p=o(17649),g=o(70816),h=o.n(g),y=o(90486),S=o(70250),x=o(23560),F=o(46417);const{Step:j}=n.Z;function Z(){var e,t,o,g,Z,N,w,C,b,k,M,U;const{t:Y}=(0,r.$)(),[E]=a.Z.useForm(),L=(0,_.K)(),z=(0,s.I0)(),A=(0,d.s0)(),{activeMenu:D}=(0,s.v9)((e=>e.menu),s.wU),{settings:H}=(0,s.v9)((e=>e.globalSettings),s.wU),{defaultCurrency:I}=(0,s.v9)((e=>e.currency),s.wU),J=Number((null===(e=L.values)||void 0===e?void 0:e.step)||0),[O,T]=(0,l.useState)(!1),[V,K]=(0,l.useState)((null===D||void 0===D||null===(t=D.data)||void 0===t?void 0:t.images)||[]),[$,q]=(0,l.useState)(null!==D&&void 0!==D&&null!==(o=D.data)&&void 0!==o&&o.location_from?{lat:parseFloat(null===D||void 0===D||null===(g=D.data)||void 0===g||null===(Z=g.location_from)||void 0===Z?void 0:Z.latitude),lng:parseFloat(null===D||void 0===D||null===(N=D.data)||void 0===N||null===(w=N.location_from)||void 0===w?void 0:w.longitude)}:(0,p.Z)(H)),[B,G]=(0,l.useState)(null!==D&&void 0!==D&&null!==(C=D.data)&&void 0!==C&&C.location_to?{lat:parseFloat(null===D||void 0===D||null===(b=D.data)||void 0===b||null===(k=b.location_to)||void 0===k?void 0:k.latitude),lng:parseFloat(null===D||void 0===D||null===(M=D.data)||void 0===M||null===(U=M.location_to)||void 0===U?void 0:U.longitude)}:(0,p.Z)(H));(0,l.useEffect)((()=>()=>{const e=E.getFieldsValue(!0),t=JSON.stringify(e.delivery_date),o=JSON.stringify(e.delivery_time),l={...e,date:t,time:o};z((0,f.nc)({activeMenu:D,data:l}))}),[]);const P=()=>{const e=J+1;L.set("step",e)},Q=()=>{const e=J-1;L.set("step",e)};return(0,F.jsxs)(i.Z,{title:Y("add.parcel.order"),children:[(0,F.jsx)(n.Z,{current:J,onChange:e=>{L.set("step",e)},children:u.S.map((e=>(0,F.jsx)(j,{title:Y(e.title)},e.title)))}),(0,F.jsx)("div",{className:"steps-content",children:(0,F.jsxs)(a.Z,{form:E,name:"parcel-create",layout:"vertical",onFinish:e=>{var t,o;T(!0);const l={user_id:null===(t=e.user_from)||void 0===t?void 0:t.value,currency_id:null===I||void 0===I?void 0:I.id,type_id:null===(o=e.type)||void 0===o?void 0:o.value,rate:null===I||void 0===I?void 0:I.rate,phone_from:e.phone_from.toString(),username_from:e.username_from,address_from:{longitude:null===$||void 0===$?void 0:$.lng,latitude:null===$||void 0===$?void 0:$.lat,address:e.address_from,house:e.house_from,stage:e.stage_from,room:e.room_from},phone_to:e.phone_to.toString(),username_to:e.username_to,address_to:{longitude:null===B||void 0===B?void 0:B.lng,latitude:null===B||void 0===B?void 0:B.lat,address:e.address_to,house:e.house_to,stage:e.stage_to,room:e.room_to},delivery_date:h()(e.delivery_date).format("YYYY-MM-DD HH:mm"),note:e.note,images:V.map((e=>e.name)),payment_id:e.payment_type.value},n="parcel-orders";y.Z.create(l).then((e=>{(0,s.dC)((()=>{z((0,S.LF)({})),z((0,f.ph)({...D,nextUrl:n}))})),x.Am.success(Y("successfully.created")),A("/".concat(n))})).finally((()=>T(!1)))},initialValues:{...D.data},onFinishFailed:e=>{const t=["","",""];e.errorFields.map((e=>e.name[0])).forEach((e=>{e.includes("_from")?t[0]="sender.details.invalid":e.includes("_to")?t[1]="receiver.details.invalid":t[2]="parcel.details.invalid"})),t.forEach((e=>{e&&x.Am.error(Y(e))}))},children:[(0,F.jsx)("div",{className:"First-content"===u.S[J].content?"":"d-none",children:(0,F.jsx)(c.Z,{form:E,next:P,location:$,setLocation:q})}),(0,F.jsx)("div",{className:"Second-content"===u.S[J].content?"":"d-none",children:(0,F.jsx)(v.Z,{form:E,next:P,prev:Q,location:B,setLocation:G})}),(0,F.jsx)("div",{className:"Third-content"===u.S[J].content?"":"d-none",children:(0,F.jsx)(m.Z,{form:E,loading:O,prev:Q,locationFrom:$,locationTo:B,image:V,setImage:K})})]})})]})}}}]);
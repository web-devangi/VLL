"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7398],{4014:(e,t,i)=>{function a(e){var t,i;let a=null===e||void 0===e?void 0:e.slice(0,1),d=null===e||void 0===e?void 0:e.lastIndexOf("@"),r=null===e||void 0===e?void 0:e.slice(1,d-1);r=null===(t=r)||void 0===t?void 0:t.replace(/./g,"*");let s=null===e||void 0===e?void 0:e.slice(d-1,e.length);return null===a||void 0===a||null===(i=a.concat(r))||void 0===i?void 0:i.concat(s)}i.d(t,{Z:()=>a})},27398:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var a=i(47313),d=i(86345),r=i(45705),s=i(59491),l=i(77181),n=i(78508),o=i(24511),c=i(2717),v=i(69658),u=i(84926),m=i(38758),f=i(23560),p=i(74580),h=i(90954),x=i(70816),Z=i.n(x),_=i(12019),g=i(55768),k=i(97890),y=i(4014),j=i(79492),w=i(46417);function C(){const{t:e}=(0,o.$)(),[t,i]=(0,a.useState)(!1),{activeMenu:x}=(0,c.v9)((e=>e.menu),c.wU),C=(0,c.I0)(),I=(0,k.s0)(),[z,P]=(0,a.useState)(null),{setIsModalVisible:b}=(0,a.useContext)(p._),{isDemo:M}=(0,j.Z)(),{emailProvider:S,loading:Y}=(0,c.v9)((e=>e.emailProvider),c.wU);const A=[{title:e("from_site"),dataIndex:"from_site",key:"from_site"},{title:e("from.to"),dataIndex:"from_to",key:"from_to",render:e=>M?(0,y.Z)(e):e},{title:e("active"),dataIndex:"active",render:(e,t)=>(0,w.jsx)(d.Z,{onChange:()=>{b(!0),P(t.id)},checked:e})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",render:e=>Z()(e).format("YYYY-MM-DD")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(t,i)=>(0,w.jsx)(r.Z,{children:(0,w.jsx)(s.Z,{type:"primary",icon:(0,w.jsx)(_.Z,{}),onClick:()=>function(t){C((0,h.bL)({url:"settings/emailProviders/".concat(t.id),id:"edit_email_providers",name:e("edit.email.providers")})),I("/settings/emailProviders/".concat(t.id),{state:"edit"})}(i)})})}];return(0,a.useEffect)((()=>{x.refetch&&(C((0,u.z)()),C((0,h.A_)(x)))}),[x.refetch]),(0,w.jsxs)(l.Z,{title:e("email.provider"),extra:(0,w.jsx)(r.Z,{children:(0,w.jsx)(s.Z,{icon:(0,w.jsx)(g.Z,{}),type:"primary",onClick:()=>{C((0,h.bL)({id:"add_email_providers",url:"settings/emailProviders/add",name:e("add_email_providers")})),I("/settings/emailProviders/add")},children:e("add.email.provider")})}),children:[(0,w.jsx)(n.Z,{scroll:{x:!0},columns:A,dataSource:S,rowKey:e=>e.id,loading:Y,pagination:!1}),(0,w.jsx)(v.Z,{click:()=>{i(!0),m.Z.setActive(z).then((()=>{f.Am.success(e("successfully.updated")),b(!1),C((0,u.z)())})).finally((()=>i(!1)))},text:e("set.active.email.provider"),loading:t})]})}},55768:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(1413),d=i(47313);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var s=i(17469),l=function(e,t){return d.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:r}))};l.displayName="PlusCircleOutlined";const n=d.forwardRef(l)}}]);
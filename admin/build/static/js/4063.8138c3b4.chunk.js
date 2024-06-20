"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4063],{84063:function(e,s,r){r.r(s);var t=r(1413),a=r(29439),i=r(47313),n=r(97890),l=r(23560),m=r(10976),u=r(77181),c=r(68197),d=r(59624),o=r(66672),h=r(16124),p=r(86345),f=r(59491),Z=r(2717),x=r(90954),v=r(24511),j=r(38758),b=r(51282),g=r(84926),_=r(46417);s.default=function(){var e=(0,v.$)().t,s=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,r=(0,Z.I0)(),w=m.Z.useForm(),y=(0,a.Z)(w,1)[0],I=(0,n.s0)(),q=(0,n.UO)().id,P=(0,i.useState)(!1),N=(0,a.Z)(P,2),k=N[0],E=N[1],z=(0,i.useState)(!1),F=(0,a.Z)(z,2),M=F[0],U=F[1];(0,i.useEffect)((function(){return function(){var e=y.getFieldsValue(!0);r((0,x.nc)({activeMenu:s,data:e}))}}),[]);return(0,i.useEffect)((function(){var e;s.refetch&&(e=q,U(!0),j.Z.getById(e).then((function(e){var a=e.data,i=(0,t.Z)({},a);y.setFieldsValue(i),r((0,x.nc)({activeMenu:s,data:i}))})).finally((function(){r((0,x.A_)(s)),U(!1)})))}),[s.refetch]),(0,_.jsx)(u.Z,{title:e("edit.email.provider"),className:"h-100",children:M?(0,_.jsx)(b.Z,{}):(0,_.jsxs)(m.Z,{name:"email-provider-add",layout:"vertical",onFinish:function(a){var i={smtp_auth:a.smtp_auth,smtp_debug:a.smtp_debug,port:a.port,password:a.password,from_to:a.from_to,host:a.host,active:a.active,from_site:a.from_site};E(!0);var n="settings/emailProviders";j.Z.update(q,i).then((function(){l.Am.success(e("successfully.created")),r((0,x.ph)((0,t.Z)((0,t.Z)({},s),{},{nextUrl:n}))),I("/".concat(n)),r((0,g.z)())})).finally((function(){return E(!1)}))},form:y,initialValues:(0,t.Z)({smtp_debug:!0,smtp_auth:!0,active:!0},s.data),className:"d-flex flex-column h-100",children:[(0,_.jsxs)(c.Z,{gutter:12,children:[(0,_.jsx)(d.Z,{span:12,children:(0,_.jsx)(m.Z.Item,{rules:[{required:!0,message:e("required")},{type:"email",message:e("invalid.email")}],label:e("email"),name:"from_to",children:(0,_.jsx)(o.Z,{placeholder:"Email"})})}),(0,_.jsx)(d.Z,{span:12,children:(0,_.jsx)(m.Z.Item,{rules:[{required:!0,message:e("required")},{type:"string",min:6,message:e("min.6.letters")}],label:e("password"),name:"password",normalize:function(e){return""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e},children:(0,_.jsx)(o.Z.Password,{})})}),(0,_.jsx)(d.Z,{span:12,children:(0,_.jsx)(m.Z.Item,{rules:[{validator:function(s,r){return r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(e("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}}],label:e("host"),name:"host",children:(0,_.jsx)(o.Z,{})})}),(0,_.jsx)(d.Z,{span:12,children:(0,_.jsx)(m.Z.Item,{rules:[{required:!0,message:e("required")}],label:e("port"),name:"port",children:(0,_.jsx)(h.Z,{min:0,className:"w-100"})})}),(0,_.jsx)(d.Z,{span:12,children:(0,_.jsx)(m.Z.Item,{rules:[{required:!0,message:e("required")}],label:e("from.site"),name:"from_site",children:(0,_.jsx)(o.Z,{})})}),(0,_.jsx)(d.Z,{span:8,children:(0,_.jsx)(m.Z.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,_.jsx)(p.Z,{})})}),(0,_.jsx)(d.Z,{span:8,children:(0,_.jsx)(m.Z.Item,{valuePropName:"checked",label:e("smtp_debug"),name:"smtp_debug",children:(0,_.jsx)(p.Z,{})})}),(0,_.jsx)(d.Z,{span:8,children:(0,_.jsx)(m.Z.Item,{valuePropName:"checked",label:e("smtp_auth"),name:"smtp_auth",children:(0,_.jsx)(p.Z,{})})})]}),(0,_.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,_.jsx)("div",{className:"pb-5",children:(0,_.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:k,children:e("submit")})})})]})})}}}]);
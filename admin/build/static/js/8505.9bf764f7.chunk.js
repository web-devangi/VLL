"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8505],{48505:function(e,t,n){n.r(t);var i=n(1413),a=n(29439),r=n(47313),s=n(97890),l=n(23560),c=n(10976),u=n(77181),d=n(68197),m=n(59624),o=n(66672),f=n(86345),v=n(59491),Z=n(72652),h=n(97421),g=n(2717),j=n(90954),x=n(11216),p=n(73253),b=n(24511),y=n(5764),I=n(46417);t.default=function(){var e,t,n=(0,b.$)().t,k=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,w=(0,s.UO)().id,q=(0,g.I0)(),E=(0,r.useState)(null!==(e=k.data)&&void 0!==e&&e.image?[null===(t=k.data)||void 0===t?void 0:t.image]:[]),F=(0,a.Z)(E,2),N=F[0],P=F[1],S=c.Z.useForm(),V=(0,a.Z)(S,1)[0],z=(0,s.s0)(),L=((0,s.TH)(),(0,r.useState)(!1)),U=(0,a.Z)(L,2),A=U[0],C=U[1],M=(0,r.useState)(!1),T=(0,a.Z)(M,2),B=T[0],H=T[1];(0,r.useEffect)((function(){return function(){var e=V.getFieldsValue(!0);q((0,j.nc)({activeMenu:k,data:e}))}}),[]);var O=function(e){return{name:e,url:h.bV+e}};return(0,r.useEffect)((function(){k.refetch&&function(e){C(!0),x.Z.getById(e).then((function(e){var t=e.data;V.setFieldsValue((0,i.Z)((0,i.Z)({},t),{},{image:[O(t.img)]})),P([O(t.img)])})).finally((function(){C(!1),q((0,j.A_)(k))}))}(w)}),[k.refetch]),(0,I.jsx)(u.Z,{title:n("clone.brand"),children:A?(0,I.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,I.jsx)(Z.Z,{size:"large",className:"py-5"})}):(0,I.jsxs)(c.Z,{name:"basic",layout:"vertical",onFinish:function(e){var t,a=(0,i.Z)((0,i.Z)({},e),{},{active:e.active?1:0,"images[0]":null===(t=N[0])||void 0===t?void 0:t.name});H(!0);var r="catalog/brands";x.Z.create(a).then((function(){l.Am.success(n("successfully.updated")),q((0,j.ph)((0,i.Z)((0,i.Z)({},k),{},{nextUrl:r}))),z("/".concat(r)),q((0,p.S0)({}))})).finally((function(){return H(!1)}))},form:V,initialValues:(0,i.Z)({},k.data),children:[(0,I.jsxs)(d.Z,{gutter:12,children:[(0,I.jsx)(m.Z,{span:12,children:(0,I.jsx)(c.Z.Item,{label:n("title"),name:"title",rules:[{required:!0,message:n("required")},{validator:function(e,t){return t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(n("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(n("must.be.at.least.2"))):Promise.resolve()}}],children:(0,I.jsx)(o.Z,{maxLength:50})})}),(0,I.jsx)(m.Z,{span:6,children:(0,I.jsx)(c.Z.Item,{label:n("image"),name:"images",rules:[{required:!(null!==N&&void 0!==N&&N.length),message:n("required")}],children:(0,I.jsx)(y.Z,{type:"brands",imageList:N,setImageList:P,form:V,multiple:!1})})}),(0,I.jsx)(m.Z,{span:6,children:(0,I.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,I.jsx)(c.Z.Item,{label:n("active"),name:"active",valuePropName:"checked",children:(0,I.jsx)(f.Z,{})})})})]}),(0,I.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:B,children:n("submit")})]})})}}}]);
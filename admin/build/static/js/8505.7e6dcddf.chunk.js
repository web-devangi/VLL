"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8505],{48505:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(47313),i=a(97890),l=a(23560),n=a(10976),r=a(77181),c=a(68197),d=a(59624),m=a(66672),u=a(86345),o=a(59491),h=a(72652),v=a(97421),g=a(2717),j=a(90954),x=a(11216),p=a(73253),Z=a(24511),f=a(5764),b=a(46417);const y=()=>{var e,t;const{t:a}=(0,Z.$)(),{activeMenu:y}=(0,g.v9)((e=>e.menu),g.wU),{id:I}=(0,i.UO)(),k=(0,g.I0)(),[w,q]=(0,s.useState)(null!==(e=y.data)&&void 0!==e&&e.image?[null===(t=y.data)||void 0===t?void 0:t.image]:[]),[E]=n.Z.useForm(),F=(0,i.s0)(),[N,P]=((0,i.TH)(),(0,s.useState)(!1)),[S,V]=(0,s.useState)(!1);(0,s.useEffect)((()=>()=>{const e=E.getFieldsValue(!0);k((0,j.nc)({activeMenu:y,data:e}))}),[]);const z=e=>({name:e,url:v.bV+e});return(0,s.useEffect)((()=>{y.refetch&&(e=>{P(!0),x.Z.getById(e).then((e=>{let t=e.data;E.setFieldsValue({...t,image:[z(t.img)]}),q([z(t.img)])})).finally((()=>{P(!1),k((0,j.A_)(y))}))})(I)}),[y.refetch]),(0,b.jsx)(r.Z,{title:a("clone.brand"),children:N?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(h.Z,{size:"large",className:"py-5"})}):(0,b.jsxs)(n.Z,{name:"basic",layout:"vertical",onFinish:e=>{var t;const s={...e,active:e.active?1:0,"images[0]":null===(t=w[0])||void 0===t?void 0:t.name};V(!0);const i="catalog/brands";x.Z.create(s).then((()=>{l.Am.success(a("successfully.updated")),k((0,j.ph)({...y,nextUrl:i})),F("/".concat(i)),k((0,p.S0)({}))})).finally((()=>V(!1)))},form:E,initialValues:{...y.data},children:[(0,b.jsxs)(c.Z,{gutter:12,children:[(0,b.jsx)(d.Z,{span:12,children:(0,b.jsx)(n.Z.Item,{label:a("title"),name:"title",rules:[{required:!0,message:a("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(a("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(a("must.be.at.least.2"))):Promise.resolve()}],children:(0,b.jsx)(m.Z,{maxLength:50})})}),(0,b.jsx)(d.Z,{span:6,children:(0,b.jsx)(n.Z.Item,{label:a("image"),name:"images",rules:[{required:!(null!==w&&void 0!==w&&w.length),message:a("required")}],children:(0,b.jsx)(f.Z,{type:"brands",imageList:w,setImageList:q,form:E,multiple:!1})})}),(0,b.jsx)(d.Z,{span:6,children:(0,b.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,b.jsx)(n.Z.Item,{label:a("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(u.Z,{})})})})]}),(0,b.jsx)(o.Z,{type:"primary",htmlType:"submit",loading:S,children:a("submit")})]})})}}}]);
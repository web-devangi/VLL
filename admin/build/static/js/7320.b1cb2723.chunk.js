"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7320],{57320:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(47313),i=s(10976),l=s(77181),r=s(68197),n=s(59624),c=s(66672),d=s(86345),m=s(59491),u=s(23560),o=s(97890),v=s(2717),h=s(90954),j=s(24511),x=s(48697),Z=s(73253),p=s(5764),g=s(46417);const b=()=>{var e,a;const{t:s}=(0,j.$)(),{activeMenu:b}=(0,v.v9)((e=>e.menu),v.wU),f=(0,v.I0)(),[y]=i.Z.useForm(),k=(0,o.s0)(),[I,w]=(0,t.useState)(null!==(e=b.data)&&void 0!==e&&e.image?[null===(a=b.data)||void 0===a?void 0:a.image]:[]),[q,F]=(0,t.useState)(!1);(0,t.useEffect)((()=>()=>{const e=y.getFieldsValue(!0);f((0,h.nc)({activeMenu:b,data:e}))}),[]);return(0,g.jsx)(l.Z,{title:s("add.brand"),children:(0,g.jsxs)(i.Z,{name:"basic",layout:"vertical",onFinish:e=>{var a;const t={...e,active:e.active?1:0,"images[0]":null===(a=I[0])||void 0===a?void 0:a.name};F(!0);const i="seller/brands";x.Z.create(t).then((()=>{u.Am.success(s("successfully.created")),f((0,h.ph)({...b,nextUrl:i})),k("/".concat(i)),f((0,Z.RJ)())})).finally((()=>F(!1)))},form:y,initialValues:{active:!0,...b.data},children:[(0,g.jsxs)(r.Z,{gutter:12,children:[(0,g.jsx)(n.Z,{span:12,children:(0,g.jsx)(i.Z.Item,{label:s("title"),name:"title",rules:[{required:!0,message:s("required")}],children:(0,g.jsx)(c.Z,{})})}),(0,g.jsx)(n.Z,{span:6,children:(0,g.jsx)(i.Z.Item,{label:s("image"),name:"images",rules:[{validator:(e,a)=>0===I.length?Promise.reject(new Error(s("required"))):Promise.resolve()}],children:(0,g.jsx)(p.Z,{type:"brands",imageList:I,setImageList:w,form:y,multiple:!1})})}),(0,g.jsx)(n.Z,{span:6,children:(0,g.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,g.jsx)(i.Z.Item,{label:s("active"),name:"active",valuePropName:"checked",children:(0,g.jsx)(d.Z,{})})})})]}),(0,g.jsx)(m.Z,{type:"primary",htmlType:"submit",loading:q,children:s("submit")})]})})}}}]);
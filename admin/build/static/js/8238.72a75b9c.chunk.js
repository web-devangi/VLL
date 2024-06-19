"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8238],{18238:(e,r,s)=>{s.r(r),s.d(r,{default:()=>P});var a=s(47313),l=s(10976),i=s(77181),n=s(68197),t=s(59624),d=s(66672),o=s(16124),m=s(99096),u=s(74294),c=s(59491),v=s(97890),p=s(23560),h=s(2717),j=s(90954),w=s(49986),Z=s(85746),x=s(24511),f=s(70816),g=s.n(f),y=s(5764),b=s(46417);function P(){var e,r;const{t:s}=(0,x.$)(),[f]=l.Z.useForm(),[P,q]=(0,a.useState)(null),[S,I]=(0,a.useState)(!1),E=(0,v.s0)(),_=(0,h.v9)((e=>e.menu.activeMenu)),k=(0,h.I0)(),[N,F]=(0,a.useState)(null!==_&&void 0!==_&&null!==(e=_.data)&&void 0!==e&&e.image?[null===_||void 0===_||null===(r=_.data)||void 0===r?void 0:r.image]:[]);(0,a.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);e.birthday=JSON.stringify(null===e||void 0===e?void 0:e.birthday),k((0,j.nc)({activeMenu:_,data:{..._.data,...e}}))}),[]);return(0,b.jsx)(i.Z,{title:s("add.user"),children:(0,b.jsx)(l.Z,{form:f,layout:"vertical",initialValues:{gender:"male",..._.data,...(()=>{var e,r;if(null===(e=_.data)||void 0===e||!e.birthday)return{};const s=JSON.parse(null===(r=_.data)||void 0===r?void 0:r.birthday);return{birthday:g()(s)}})()},onFinish:e=>{var r;I(!0);const a={firstname:e.firstname,lastname:e.lastname,email:e.user_email,phone:e.phone,birthday:g()(e.birthday).format("YYYY-MM-DD"),gender:e.gender,password_confirmation:e.password_confirmation,password:e.password,images:N[0]?[null===(r=N[0])||void 0===r?void 0:r.name]:void 0},l="users/user";w.Z.create(a).then((()=>{p.Am.success(s("successfully.created")),(0,h.dC)((()=>{k((0,j.ph)({..._,nextUrl:l})),k((0,Z.Tu)({}))})),E("/".concat(l))})).catch((e=>q(e.response.data.params))).finally((()=>I(!1)))},children:(0,b.jsxs)(n.Z,{gutter:12,children:[(0,b.jsx)(t.Z,{span:24,children:(0,b.jsx)(l.Z.Item,{rules:[{validator:()=>0===(null===N||void 0===N?void 0:N.length)?Promise.reject(new Error(s("required"))):Promise.resolve()}],label:s("avatar"),name:"images",children:(0,b.jsx)(y.Z,{type:"users",imageList:N,setImageList:F,form:f,multiple:!1})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("firstname"),name:"firstname",help:null!==P&&void 0!==P&&P.firstname?P.firstname[0]:null,validateStatus:null!==P&&void 0!==P&&P.firstname?"error":"success",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(s("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(s("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(s("required")))}],children:(0,b.jsx)(d.Z,{})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:"lastname",name:"lastname",help:null!==P&&void 0!==P&&P.lastname?P.lastname[0]:null,validateStatus:null!==P&&void 0!==P&&P.lastname?"error":"success",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(s("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(s("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(s("required")))}],children:(0,b.jsx)(d.Z,{})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("phone"),name:"phone",help:null!==P&&void 0!==P&&P.phone?P.phone[0]:null,validateStatus:null!==P&&void 0!==P&&P.phone?"error":"success",rules:[{required:!0,message:s("required")}],children:(0,b.jsx)(o.Z,{min:0,className:"w-100"})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("birthday"),name:"birthday",rules:[{required:!0,message:s("required")}],children:(0,b.jsx)(m.Z,{className:"w-100",disabledDate:e=>g()().add(-18,"years")<=e,defaultPickerValue:g()().add(-18,"years")})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("gender"),name:"gender",rules:[{required:!0,message:s("required")}],children:(0,b.jsxs)(u.Z,{picker:"dayTime",className:"w-100",children:[(0,b.jsx)(u.Z.Option,{value:"male",children:s("male")}),(0,b.jsx)(u.Z.Option,{value:"female",children:s("female")})]})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("email"),name:"user_email",help:null!==P&&void 0!==P&&P.email?P.email[0]:null,validateStatus:null!==P&&void 0!==P&&P.email?"error":"success",rules:[{required:!0,message:s("required")},{type:"email",message:s("invalid.email")}],children:(0,b.jsx)(d.Z,{type:"email"})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("password"),name:"password",help:null!==P&&void 0!==P&&P.password?P.password[0]:null,validateStatus:null!==P&&void 0!==P&&P.password?"error":"success",rules:[{required:!0,message:s("required")},{validator:(e,r)=>r&&(null===r||void 0===r?void 0:r.toString().length)<6?Promise.reject(new Error(s("min.6.letters"))):Promise.resolve()}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,b.jsx)(d.Z.Password,{type:"password",className:"w-100"})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:s("password.confirmation"),help:null!==P&&void 0!==P&&P.password_confirmation?P.password_confirmation[0]:null,validateStatus:null!==P&&void 0!==P&&P.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:s("required")},e=>{let{getFieldValue:r}=e;return{validator:(e,a)=>a&&r("password")!==a?Promise.reject(s("two.passwords.dont.match")):Promise.resolve()}}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,b.jsx)(d.Z.Password,{type:"password"})})}),(0,b.jsx)(c.Z,{type:"primary",htmlType:"submit",loading:S,children:s("save")})]})})})}}}]);
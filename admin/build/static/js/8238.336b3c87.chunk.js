"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8238],{18238:function(e,r,a){a.r(r),a.d(r,{default:function(){return S}});var s=a(1413),n=a(29439),i=a(47313),l=a(10976),t=a(77181),o=a(68197),d=a(59624),u=a(66672),m=a(16124),c=a(99096),v=a(74294),p=a(59491),h=a(97890),f=a(23560),Z=a(2717),j=a(90954),w=a(49986),x=a(85746),g=a(24511),y=a(70816),b=a.n(y),P=a(5764),q=a(46417);function S(){var e,r,a=(0,g.$)().t,y=l.Z.useForm(),S=(0,n.Z)(y,1)[0],I=(0,i.useState)(null),E=(0,n.Z)(I,2),_=E[0],k=E[1],N=(0,i.useState)(!1),F=(0,n.Z)(N,2),z=F[0],M=F[1],O=(0,h.s0)(),V=(0,Z.v9)((function(e){return e.menu.activeMenu})),Y=(0,Z.I0)(),C=(0,i.useState)(null!==V&&void 0!==V&&null!==(e=V.data)&&void 0!==e&&e.image?[null===V||void 0===V||null===(r=V.data)||void 0===r?void 0:r.image]:[]),D=(0,n.Z)(C,2),T=D[0],J=D[1];(0,i.useEffect)((function(){return function(){var e=S.getFieldsValue(!0);e.birthday=JSON.stringify(null===e||void 0===e?void 0:e.birthday),Y((0,j.nc)({activeMenu:V,data:(0,s.Z)((0,s.Z)({},V.data),e)}))}}),[]);return(0,q.jsx)(t.Z,{title:a("add.user"),children:(0,q.jsx)(l.Z,{form:S,layout:"vertical",initialValues:(0,s.Z)((0,s.Z)({gender:"male"},V.data),function(){var e,r;if(null===(e=V.data)||void 0===e||!e.birthday)return{};var a=JSON.parse(null===(r=V.data)||void 0===r?void 0:r.birthday);return{birthday:b()(a)}}()),onFinish:function(e){var r;M(!0);var n={firstname:e.firstname,lastname:e.lastname,email:e.user_email,phone:e.phone,birthday:b()(e.birthday).format("YYYY-MM-DD"),gender:e.gender,password_confirmation:e.password_confirmation,password:e.password,images:T[0]?[null===(r=T[0])||void 0===r?void 0:r.name]:void 0},i="users/user";w.Z.create(n).then((function(){f.Am.success(a("successfully.created")),(0,Z.dC)((function(){Y((0,j.ph)((0,s.Z)((0,s.Z)({},V),{},{nextUrl:i}))),Y((0,x.Tu)({}))})),O("/".concat(i))})).catch((function(e){return k(e.response.data.params)})).finally((function(){return M(!1)}))},children:(0,q.jsxs)(o.Z,{gutter:12,children:[(0,q.jsx)(d.Z,{span:24,children:(0,q.jsx)(l.Z.Item,{rules:[{validator:function(){return 0===(null===T||void 0===T?void 0:T.length)?Promise.reject(new Error(a("required"))):Promise.resolve()}}],label:a("avatar"),name:"images",children:(0,q.jsx)(P.Z,{type:"users",imageList:T,setImageList:J,form:S,multiple:!1})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("firstname"),name:"firstname",help:null!==_&&void 0!==_&&_.firstname?_.firstname[0]:null,validateStatus:null!==_&&void 0!==_&&_.firstname?"error":"success",rules:[{validator:function(e,r){return r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(a("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(a("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(a("required")))}}],children:(0,q.jsx)(u.Z,{})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:"lastname",name:"lastname",help:null!==_&&void 0!==_&&_.lastname?_.lastname[0]:null,validateStatus:null!==_&&void 0!==_&&_.lastname?"error":"success",rules:[{validator:function(e,r){return r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(a("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(a("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(a("required")))}}],children:(0,q.jsx)(u.Z,{})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("phone"),name:"phone",help:null!==_&&void 0!==_&&_.phone?_.phone[0]:null,validateStatus:null!==_&&void 0!==_&&_.phone?"error":"success",rules:[{required:!0,message:a("required")}],children:(0,q.jsx)(m.Z,{min:0,className:"w-100"})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("birthday"),name:"birthday",rules:[{required:!0,message:a("required")}],children:(0,q.jsx)(c.Z,{className:"w-100",disabledDate:function(e){return b()().add(-18,"years")<=e},defaultPickerValue:b()().add(-18,"years")})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("gender"),name:"gender",rules:[{required:!0,message:a("required")}],children:(0,q.jsxs)(v.Z,{picker:"dayTime",className:"w-100",children:[(0,q.jsx)(v.Z.Option,{value:"male",children:a("male")}),(0,q.jsx)(v.Z.Option,{value:"female",children:a("female")})]})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("email"),name:"user_email",help:null!==_&&void 0!==_&&_.email?_.email[0]:null,validateStatus:null!==_&&void 0!==_&&_.email?"error":"success",rules:[{required:!0,message:a("required")},{type:"email",message:a("invalid.email")}],children:(0,q.jsx)(u.Z,{type:"email"})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("password"),name:"password",help:null!==_&&void 0!==_&&_.password?_.password[0]:null,validateStatus:null!==_&&void 0!==_&&_.password?"error":"success",rules:[{required:!0,message:a("required")},{validator:function(e,r){return r&&(null===r||void 0===r?void 0:r.toString().length)<6?Promise.reject(new Error(a("min.6.letters"))):Promise.resolve()}}],normalize:function(e){return""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e},children:(0,q.jsx)(u.Z.Password,{type:"password",className:"w-100"})})}),(0,q.jsx)(d.Z,{span:12,children:(0,q.jsx)(l.Z.Item,{label:a("password.confirmation"),help:null!==_&&void 0!==_&&_.password_confirmation?_.password_confirmation[0]:null,validateStatus:null!==_&&void 0!==_&&_.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:a("required")},function(e){var r=e.getFieldValue;return{validator:function(e,s){return s&&r("password")!==s?Promise.reject(a("two.passwords.dont.match")):Promise.resolve()}}}],normalize:function(e){return""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e},children:(0,q.jsx)(u.Z.Password,{type:"password"})})}),(0,q.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:z,children:a("save")})]})})})}}}]);
(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7401],{31247:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(47313),l=a(72652),i=a(15178),s=a(55291),r=a(82138),o=a(36104),d=a(24511),c=a(46417);const u=e=>{let{fileList:t=[],setFileList:a,type:u,id:p}=e;const{t:v}=(0,d.$)(),[m,x]=(0,n.useState)(!1),f=m?(0,c.jsx)(l.Z,{}):(0,c.jsx)(r.Z,{}),h=t.find((e=>e.id===p))||[];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{listType:"picture-card",fileList:(null===h||void 0===h?void 0:h.galleries)||(null===h||void 0===h?void 0:h.images),customRequest:e=>{let{file:n,onSuccess:l}=e;x(!0);const i=new FormData;i.append("image",n),i.append("type",u),o.Z.upload(i).then((e=>{let{data:n}=e;((e,n)=>{if(t.findIndex((t=>t.id===e))>=0){const l=t.map((t=>t.id===e?{id:e,images:[...t.images,n]}:t));a(l)}else a((t=>[...t,{id:e,images:[n]}]))})(p,(e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0}))(n)),l("ok")})).finally((()=>{x(!1)}))},onRemove:e=>{const n=t.map((t=>{if(t.id===p){const a=t.images.filter((t=>t.uid!==e.uid));return 0===a.length?null:{...t,images:a}}return t})).filter((e=>null!==e));a(n)},showUploadList:!0,accept:".png,.jpg,.jpeg,.webp",beforeUpload:e=>!!(e.size/1024/1024<2)||(s.ZP.error(v("max.2.mb")),!1),children:f})})}},33834:(e,t,a)=>{"use strict";a.d(t,{K:()=>s});var n=a(97890),l=a(74776),i=a.n(l);const s=()=>{const e=(0,n.s0)(),t=(0,n.TH)(),a=i().parse(t.search,{ignoreQueryPrefix:!0});return{values:a,set:(t,n)=>e({search:i().stringify({...a,[t]:n})}),reset:t=>{const n={...a};n[t]&&delete n[t],e({search:i().stringify({...n})})},clear:()=>e({search:i().stringify({})}),merge:t=>e({search:i().stringify({...a,...t})})}}},17899:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(34344);const l={create:e=>n.Z.post("dashboard/admin/digital-files",e,{})}},86140:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var n=a(47313),l=a(96077),i=a(83999),s=a(77181),r=a(72652),o=a(35321),d=a(78873),c=a(8597),u=a(47668),p=a(97307),v=a(73431),m=a(97890),x=a(17101),f=a(2717),h=a(90954),g=a(24511),j=a(33834),Z=a(87882),y=a(34144),S=a(46417);const{Step:b}=i.Z,k=()=>{var e,t,a,k,w;const{t:N}=(0,g.$)(),{uuid:F}=(0,m.UO)(),C=(0,j.K)(),{activeMenu:L}=(0,f.v9)((e=>e.menu),f.wU),{languages:M}=(0,f.v9)((e=>e.formLang),f.wU),U=(0,f.I0)(),z=Number((null===(e=C.values)||void 0===e?void 0:e.step)||0),[A,E]=(0,n.useState)(L.refetch),[_,I]=(0,n.useState)(l.S),{extras:T}=(null===L||void 0===L?void 0:L.data)||{},P=null===L||void 0===L||null===(t=L.data)||void 0===t?void 0:t.digital,R=null===T||void 0===T?void 0:T.some((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)})),$=(0,n.useMemo)((()=>null===T||void 0===T?void 0:T.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[T]),q=Array.from(new Set(null===$||void 0===$||null===(a=$.values)||void 0===a?void 0:a.map((e=>e.value)))).map((e=>{var t;return null===$||void 0===$||null===(t=$.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),B=()=>{const e=z+1;C.set("step",e)},D=()=>{const e=z-1;C.set("step",e)},G=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id}:null;function K(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=M.map((e=>{var a,n;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}(0,n.useEffect)((()=>{L.refetch&&function(e){E(!0),x.Z.getById(e).then((e=>{const t={...e.data,...K(e.data),shop:G(e.data.shop),category:G(e.data.category),brand:G(e.data.brand),unit:G(e.data.unit),images:(a=e.data.galleries,a.map((e=>({uid:e.id,name:e.path,url:e.path})))),properties:e.data.properties.map(((e,t)=>({id:t,["key[".concat(e.locale,"]")]:e.key,["value[".concat(e.locale,"]")]:e.value}))),translation:void 0,translations:void 0};var a;U((0,h.nc)({activeMenu:L,data:t}))})).finally((()=>{E(!1),U((0,h.A_)(L))}))}(F)}),[L.refetch]);return(0,n.useEffect)((()=>{P?I(l.S.filter((e=>"product.extras"!==e.title))):!1===P&&I(l.S.filter((e=>"product.digital"!==e.title))),I(R?e=>e:e=>e.filter((e=>"Gallery"!==e.title)))}),[R,P]),(0,S.jsxs)(s.Z,{title:N("clone.product"),extra:(0,S.jsx)(v.Z,{}),children:[(0,S.jsx)(i.Z,{current:z,onChange:e=>{U((0,h.nc)({activeMenu:L,data:{...L.data,step:e}})),C.set("step",e)},children:l.S.map((e=>(0,S.jsx)(b,{title:N(e.title)},e.title)))}),A?(0,S.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,S.jsx)(r.Z,{size:"large",className:"py-5"})}):(0,S.jsxs)("div",{className:"steps-content",children:["First-content"===l.S[z].content&&(0,S.jsx)(p.Z,{next:B}),(null===(k=L.data)||void 0===k?void 0:k.digital)&&"Product-digital"===_[z].content&&(0,S.jsx)(Z.Z,{next:B,prev:D}),!(null!==(w=L.data)&&void 0!==w&&w.digital)&&"Second-content"===_[z].content&&(0,S.jsx)(u.Z,{next:B,prev:D}),"Third-content"===l.S[z].content&&(0,S.jsx)(c.Z,{next:B,prev:D}),(null===q||void 0===q?void 0:q.length)>0&&"Gallery-content"===l.S[z].content&&(0,S.jsx)(y.Z,{next:B,prev:D}),"Fourth-content"===l.S[z].content&&(0,S.jsx)(o.Z,{next:B,prev:D}),"Finish-content"===l.S[z].content&&(0,S.jsx)(d.Z,{prev:D})]})]})}},87882:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});a(47313);var n=a(77181),l=a(45705),i=a(59491),s=a(24511),r=a(91107),o=a(66736),d=a(23560),c=a(17899),u=a(2717),p=a(46417);function v(e){let{prev:t,next:a}=e;const{t:v}=(0,s.$)(),{activeMenu:m}=(0,u.v9)((e=>e.menu),u.wU);return(0,p.jsxs)(n.Z,{bordered:!1,className:"mb-0",children:[(0,p.jsxs)(r.Z,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{var t;let{file:a,onSuccess:n,onError:l}=e;const i=new FormData;i.append("file",a),i.append("active",1),i.append("product_id",null===(t=m.data)||void 0===t?void 0:t.id),c.Z.create(i).then((()=>{d.Am.success(v("successfully.import")),n("ok")})).catch((e=>{console.log("upload error",e),l("error"),d.Am.error(v("file.upload.error"))}))},accept:".zip",children:[(0,p.jsx)("p",{className:"ant-upload-drag-icon",children:(0,p.jsx)(o.Z,{})}),(0,p.jsx)("p",{className:"ant-upload-text",children:v("upload-drag")}),(0,p.jsx)("p",{className:"ant-upload-hint",children:v("upload-text")})]}),(0,p.jsxs)(l.Z,{className:"mt-3",children:[(0,p.jsx)(i.Z,{onClick:t,children:v("prev")}),(0,p.jsx)(i.Z,{type:"primary",onClick:a,children:v("next")})]})]})}},34144:(e,t,a)=>{"use strict";a.d(t,{Z:()=>j});var n=a(47313),l=a(69888),i=a(23885),s=a(77181),r=a(37388),o=a(45705),d=a(68197),c=a(59624),u=a(41068),p=a(46155),v=a(59491),m=a(34273),x=a(2717),f=a(31247),h=a(17101),g=a(46417);const j=e=>{var t;let{prev:a,next:j}=e;const[Z,y]=(0,n.useState)([]),{activeMenu:S}=(0,x.v9)((e=>e.menu),x.wU),{newExtras:b}=(null===S||void 0===S?void 0:S.data)||{},k=(0,n.useMemo)((()=>null===b||void 0===b?void 0:b.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[b]),w=Array.from(new Set(null===k||void 0===k||null===(t=k.values)||void 0===t?void 0:t.map((e=>e.value)))).map((e=>{var t;return null===k||void 0===k||null===(t=k.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),N=e=>({uid:e.path,name:e.path,status:"done",url:e.path,created:!0});return(0,n.useEffect)((()=>{(()=>{const e=S.data.stocks.map((e=>{let{id:t,galleries:a}=e;return{id:t,images:(null===a||void 0===a?void 0:a.map(N))||[]}}));y(e)})()}),[S.data]),(0,g.jsxs)(s.Z,{title:(0,g.jsx)(r.Z,{placement:"topLeft",title:"In the process of internal desktop applications development",children:(0,g.jsxs)(o.Z,{children:[(0,i.t)("add.media.file"),(0,g.jsx)(l.Z,{style:{fontSize:16,cursor:"pointer"}})]})}),children:[(0,g.jsx)(d.Z,{gutter:[24,24],children:null===w||void 0===w?void 0:w.map((e=>{let{label:t,stock_id:a,value:n}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.Z,{span:24,children:[(0,g.jsx)(o.Z,{className:"mb-4",children:(0,g.jsx)(u.Z,{color:t||n,className:"extras-color-badge",text:"".concat(t||n," - ").concat((0,m.B)(t||n))})}),(0,g.jsx)(f.Z,{id:a,fileList:Z,setFileList:y,type:"stocks"})]}),(0,g.jsx)(p.Z,{})]})}))}),(0,g.jsxs)(o.Z,{className:"mt-4",children:[(0,g.jsx)(v.Z,{onClick:a,children:(0,i.t)("prev")}),(0,g.jsx)(v.Z,{type:"primary",htmlType:"submit",onClick:()=>{if(!Z.length)return void j();const e=Z.map((e=>({...e,images:e.images.map((e=>e.name))})));h.Z.updateStocks({data:e}).then((()=>{j()})).catch((e=>{console.log(e)}))},children:(0,i.t)("next")})]})]})}},24654:()=>{}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1519],{55940:(e,t,a)=>{a.d(t,{Z:()=>d});a(47313);var n=a(59491),l=a(47515),s=a(23560),o=a(24511),i=a(79492),r=a(46417);function d(e){let{size:t="",onClick:a,type:d="default",...c}=e;const{t:u}=(0,o.$)(),{isDemo:v}=(0,i.Z)();return(0,r.jsx)(n.Z,{size:t,icon:(0,r.jsx)(l.Z,{}),onClick:e=>{v?s.Am.warning(u("cannot.work.demo")):a(e)},type:d,...c})}},53233:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(47313),l=a(56140),s=a(67251),o=a(45705),i=a(86345),r=a(78267),d=a(37388),c=a(59491),u=a(99587),v=a(24511),h=a(46417);const{Text:p}=l.Z,m=e=>{let{columns:t=[],setColumns:a,style:l,size:m="",iconOnly:f}=e;const{t:x}=(0,v.$)(),[g,j]=(0,n.useState)(!1),Z=(0,h.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(s.Z.Item,{children:(0,h.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(r.Z,{overlay:Z,trigger:["click"],onVisibleChange:e=>{j(e)},visible:g,children:(0,h.jsx)(d.Z,{title:x("change.columns"),children:(0,h.jsx)(c.Z,{style:{...l},size:m,icon:(0,h.jsx)(u.Z,{}),children:f?null:x("Columns")})})})}},49655:(e,t,a)=>{a.d(t,{_:()=>d});var n=a(47313),l=a(12279),s=a.n(l),o=a(74294),i=a(72652),r=a(46417);const d=e=>{let{fetchOptions:t,debounceTimeout:a=400,hasMore:l,...d}=e;const[c,u]=(0,n.useState)(!1),[v,h]=(0,n.useState)([]),[p,m]=(0,n.useState)(!1),[f,x]=(0,n.useState)(null),[g,j]=(0,n.useState)(1),Z=(0,n.useMemo)((()=>s()((e=>{h([]),x(e),u(!0),t({search:e}).then((e=>{h(e),j(2),u(!1)})).finally((()=>m(!1)))}),a)),[t,a,g]);return(0,r.jsxs)(o.Z,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const a=e.target;p||a.scrollTop+a.offsetHeight!==a.scrollHeight||l&&(m(!0),a.scrollTo(0,a.scrollHeight),t({search:f,page:g}).then((e=>{j((e=>e+1)),h([...v,...e])})).finally((()=>m(!1))))},labelInValue:!0,filterOption:!1,onSearch:Z,notFoundContent:c?(0,r.jsx)(i.Z,{size:"small"}):"no results",onFocus:()=>{v.length||Z("")},...d,children:[v.map(((e,t)=>(0,r.jsx)(o.Z.Option,{value:e.value,children:e.label},t))),p&&(0,r.jsx)(o.Z.Option,{children:(0,r.jsx)(i.Z,{size:"small"})})]})}},51988:(e,t,a)=>{a.d(t,{Z:()=>d});a(47313);var n=a(24511),l=a(66188);const s=a.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",o=a.p+"static/media/noresult.ac4af107751f94856a9c.riv",i=a.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var r=a(46417);const d=function(e){let{id:t="noresult",text:a=""}=e;const{t:d}=(0,n.$)(),c={src:{noproductsfound:s,noresult:o,nosell:i}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,l.useRive)(c);return(0,r.jsxs)("div",{className:"animation-canvas",children:[(0,r.jsx)("div",{style:{width:"100%",height:200},children:(0,r.jsx)(u,{})}),(0,r.jsx)("div",{className:"text",children:d(a)})]})}},41481:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(47313),l=a(66672),s=a(16031),o=a(40765),i=a(46417);function r(e){let{handleChange:t,defaultValue:a,resetSearch:r,...d}=e;const[c,u]=(0,n.useState)(a),v=(0,n.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(a)}),[r]),(0,i.jsx)(l.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,i.jsx)(o.Z,{}),...d})}},13945:(e,t,a)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{Z:()=>n})},17899:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(34344);const l={create:e=>n.Z.post("dashboard/admin/digital-files",e,{})}},42566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var n=a(73591),l=a(24511),s=a(97890),o=a(47313),i=a(12019),r=a(1413);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]},name:"file-add",theme:"outlined"};var c=a(17469),u=function(e,t){return o.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:d}))};u.displayName="FileAddOutlined";const v=o.forwardRef(u);var h=a(54757),p=a(66407),m=a(47515),f=a(55768),x=a(15386),g=a(26824),j=a(45705),Z=a(66204),y=a(86345),b=a(59491),w=a(77181),C=a(78508),_=a(9274),S=a(23560),k=a(97421),z=a(74580),M=a(69658),H=a(2717),V=a(90954),I=a(17101),N=a(95882),A=a(80314),P=a(11216),R=a(30763),q=a(53149),O=a(41481),T=a(13945),E=a(55940),D=a(10976),F=a(68197),B=a(59624),L=a(74294),$=a(66672),W=a(14349),K=a(71810),U=a(46417);const Y=["published","pending","unpublished"],Q=["accept","decline"],G={type:"product"};function J(e){let{orderDetails:t,handleCancel:a,paramsData:n,listType:s="product"}=e;const{activeMenu:i}=(0,H.v9)((e=>e.menu),H.wU),[r]=D.Z.useForm(),d=(0,H.I0)(),{t:c}=(0,l.$)(),[u,v]=(0,o.useState)(!1),[h,p]=(0,o.useState)(null===t||void 0===t?void 0:t.status),m="request"===s?Q:Y;return(0,U.jsx)(_.Z,{visible:!!t,title:t.title,onCancel:a,footer:[(0,U.jsx)(b.Z,{type:"primary",onClick:()=>r.submit(),loading:u,children:c("save")}),(0,U.jsx)(b.Z,{type:"default",onClick:a,children:c("cancel")})],children:(0,U.jsx)(D.Z,{form:r,layout:"vertical",onFinish:e=>{v(!0);const l={...e};"product"===s?((e,t)=>{I.Z.updateStatus(e,t).then((()=>{a(),S.Am.success(c("successfully.updated")),d((0,N.t2)(n)),d((0,V.A_)(i))})).finally((()=>v(!1)))})(t.uuid,l):s&&((e,t)=>{const n={status_note:t.status_note,status:"accept"===t.status?"approved":"canceled"};W.Z.changeStatus(e,n).then((()=>{a(),S.Am.success(c("successfully.updated")),d((0,K.aw)(G)),d((0,V.A_)(i))})).finally((()=>v(!1)))})(t.id,l)},initialValues:"product"===s?{status:t.status,status_note:t.status_note}:{status:"accept",status_note:t.status_note},children:(0,U.jsx)(F.Z,{gutter:12,children:(0,U.jsxs)(B.Z,{span:24,children:[(0,U.jsx)(D.Z.Item,{label:c("status"),name:"status",rules:[{required:!0,message:c("required")}],children:(0,U.jsx)(L.Z,{onChange:e=>p(e),children:m.map(((e,t)=>(0,U.jsx)(L.Z.Option,{value:e,children:c(e)},e+t)))})}),("unpublished"===h||"decline"===h)&&(0,U.jsx)(D.Z.Item,{name:"status_note",label:c("note"),rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(c("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(c("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(c("required")))}],children:(0,U.jsx)($.Z.TextArea,{maxLength:250,showCount:!0})})]})})})})}var X=a(53233),ee=a(51988),te=a(3925),ae=a(49655),ne=a(91107),le=a(66736),se=a(17899);function oe(e){let{product_id:t,handleCancel:a,handleRefetch:n}=e;const{t:s}=(0,l.$)();return(0,U.jsx)(_.Z,{visible:t,footer:!1,onCancel:a,children:(0,U.jsx)(w.Z,{bordered:!1,className:"mb-0",children:(0,U.jsxs)(ne.Z,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{let{file:l,onSuccess:o}=e;const i=new FormData;i.append("file",l),i.append("active",1),i.append("product_id",t),se.Z.create(i).then((()=>{S.Am.success(s("successfully.import")),o("ok"),a(),n()})).catch((e=>{o("error")}))},accept:".zip",children:[(0,U.jsx)("p",{className:"ant-upload-drag-icon",children:(0,U.jsx)(le.Z,{})}),(0,U.jsx)("p",{className:"ant-upload-text",children:s("upload-drag")}),(0,U.jsx)("p",{className:"ant-upload-hint",children:s("upload-text")})]})})})}const ie=["blue","red","gold","volcano","cyan","lime"],re=["all","pending","published","unpublished"],{TabPane:de}=n.Z,ce=()=>{var e,t,a,r,d,c,u,D,F,B,L,$;const{t:W}=(0,l.$)(),K=(0,H.I0)(),Y=(0,s.s0)(),[Q,G]=(0,o.useState)(null),[ne,le]=(0,o.useState)(null),[se,ce]=(0,o.useState)(null),[ue,ve]=(0,o.useState)("all"),[he,pe]=(0,o.useState)(null),[me,fe]=(0,o.useState)(null),[xe,ge]=(0,o.useState)(!1),[je,Ze]=(0,o.useState)(""),ye=()=>{K((0,V.nc)({activeMenu:Ve,data:null}))},[be,we]=(0,o.useState)([{title:W("id"),dataIndex:"id",is_show:!0,sorter:(e,t)=>e.id-t.id},{title:W("image"),dataIndex:"img",is_show:!0,render:(e,t)=>(0,U.jsx)(g.Z,{width:100,height:100,src:k.bV+e,placeholder:!0,style:{borderRadius:4,objectFit:"cover"}})},{title:W("name"),dataIndex:"name",is_show:!0},{title:W("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,U.jsx)(j.Z,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,U.jsx)(Z.Z,{className:"text-uppercase",color:[ie[t]],children:e})))})}},{title:W("shop"),dataIndex:"shop_id",is_show:!0,render:(e,t)=>{var a,n;return null===(a=t.shop)||void 0===a||null===(n=a.translation)||void 0===n?void 0:n.title}},{title:W("category"),dataIndex:"category_name",is_show:!0},{title:W("active"),dataIndex:"active",is_show:!0,render:(e,t)=>(0,U.jsx)(y.Z,{onChange:()=>{Se(!0),_e(t.uuid),le(!0)},checked:e})},{title:W("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,U.jsxs)("div",{children:["pending"===e?(0,U.jsx)(Z.Z,{color:"blue",children:W(e)}):"unpublished"===e?(0,U.jsx)(Z.Z,{color:"error",children:W(e)}):(0,U.jsx)(Z.Z,{color:"cyan",children:W(e)}),(0,U.jsx)(i.Z,{onClick:()=>G(t)})]})},{title:W("digital.file"),is_show:!0,dataIndex:"digital_file",key:"digital.file",render:(e,t)=>null!==t&&void 0!==t&&t.digital?(0,U.jsx)("div",{children:e?(0,U.jsx)(j.Z,{children:(0,U.jsx)(b.Z,{icon:(0,U.jsx)(i.Z,{}),onClick:()=>fe(t.id)})}):(0,U.jsx)(b.Z,{icon:(0,U.jsx)(v,{onClick:()=>fe(t.id)})})}):(0,U.jsx)(Z.Z,{color:"blue",children:W("no.digital")})},{title:W("options"),dataIndex:"options",is_show:!0,render:(e,t)=>(0,U.jsxs)(j.Z,{children:[(0,U.jsx)(b.Z,{type:"primary",icon:(0,U.jsx)(i.Z,{}),onClick:()=>{return e=t.uuid,K((0,V.bL)({id:"product-edit",url:"product/".concat(e),name:W("edit.product")})),ye(),void Y("/product/".concat(e));var e}}),"unpublished"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,U.jsx)(b.Z,{onClick:()=>{ge(!0),Ze(t.status_note)},icon:(0,U.jsx)(h.Z,{})}),(0,U.jsx)(b.Z,{icon:(0,U.jsx)(p.Z,{}),onClick:()=>{return e=t.uuid,K((0,V.bL)({id:"product-clone",url:"product-clone/".concat(e),name:W("clone.product")})),ye(),void Y("/product-clone/".concat(e));var e}}),(0,U.jsx)(E.Z,{icon:(0,U.jsx)(m.Z,{}),onClick:()=>{Se(!0),_e([t.id]),ce(!0),le(!1)}})]})}]),[Ce,_e]=(0,o.useState)(null),{setIsModalVisible:Se}=(0,o.useContext)(z._),[ke,ze]=(0,o.useState)(!1),[Me,He]=(0,o.useState)(!1),{activeMenu:Ve}=(0,H.v9)((e=>e.menu),H.wU),{products:Ie,meta:Ne,loading:Ae,params:Pe}=(0,H.v9)((e=>e.product),H.wU),Re=(null===(e=Ve.data)||void 0===e?void 0:e.role)||ue,qe=Ve.data,Oe={search:null===qe||void 0===qe?void 0:qe.search,brand_id:null===qe||void 0===qe||null===(t=qe.selectedBrand)||void 0===t?void 0:t.value,category_id:null===qe||void 0===qe||null===(a=qe.selectedCategory)||void 0===a?void 0:a.value,shop_id:null===qe||void 0===qe||null===(r=qe.selectedShop)||void 0===r?void 0:r.value,sort:null===qe||void 0===qe?void 0:qe.sort,status:"all"===Re?void 0:Re,column:null===qe||void 0===qe?void 0:qe.column,perPage:null===qe||void 0===qe?void 0:qe.perPage,page:null===qe||void 0===qe?void 0:qe.page};(0,A.Z)((()=>{K((0,N.t2)(Oe))}),[Ve.data]),(0,o.useEffect)((()=>{Ve.refetch&&(K((0,N.t2)(Oe)),K((0,V.A_)(Ve)))}),[Ve.refetch]);const Te=e=>{const t=Ve.data;K((0,V.nc)({activeMenu:Ve,data:{...t,...e}}))},Ee={selectedRowKeys:Ce,onChange:e=>{_e(e)}};return(0,U.jsxs)(o.Fragment,{children:[(0,U.jsx)(w.Z,{className:"p-0",children:(0,U.jsxs)(j.Z,{wrap:!0,size:[14,20],children:[(0,U.jsx)(O.Z,{placeholder:W("search"),handleChange:e=>Te({search:e}),defaultValue:null===(d=Ve.data)||void 0===d?void 0:d.search,resetSearch:!(null!==(c=Ve.data)&&void 0!==c&&c.search),style:{minWidth:300}}),(0,U.jsx)(ae._,{placeholder:W("select.shop"),hasMore:null===he||void 0===he?void 0:he.next,loading:Ae,fetchOptions:async function(e){let{search:t,page:a}=e;const n={search:0===(null===t||void 0===t?void 0:t.length)?void 0:t,status:"approved",page:a};return q.Z.search(n).then((e=>(pe(e.links),e.data.map((e=>({label:null!==e.translation?e.translation.title:"no name",value:e.id}))))))},style:{minWidth:180},onChange:e=>Te({selectedShop:e}),value:null===(u=Ve.data)||void 0===u?void 0:u.selectedShop}),(0,U.jsx)(ae._,{placeholder:W("select.category"),fetchOptions:async function(e){let{search:t,page:a}=e;const n={search:0===(null===t||void 0===t?void 0:t.length)?void 0:t,type:"main",page:a};return R.Z.search(n).then((e=>(pe(e.links),e.data.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}})))))},hasMore:null===he||void 0===he?void 0:he.next,loading:Ae,style:{minWidth:180},onChange:e=>Te({selectedCategory:e}),value:null===(D=Ve.data)||void 0===D?void 0:D.selectedCategory}),(0,U.jsx)(ae._,{placeholder:W("select.brand"),fetchOptions:async function(e){let{search:t,page:a}=e;const n={search:0===(null===t||void 0===t?void 0:t.length)?void 0:t,page:a};return P.Z.search(n).then((e=>(pe(e.links),e.data.map((e=>({label:e.title,value:e.id}))))))},hasMore:null===he||void 0===he?void 0:he.next,loading:Ae,style:{minWidth:180},onChange:e=>Te({selectedBrand:e}),value:null===(F=Ve.data)||void 0===F?void 0:F.selectedBrand}),(0,U.jsxs)(b.Z,{onClick:()=>{K((0,V.bL)({id:"product-import",url:"catalog/product/import",name:W("product.import")})),Y("/catalog/product/import")},children:[(0,U.jsx)(te.o5r,{className:"mr-2"}),W("import")]}),(0,U.jsxs)(b.Z,{loading:Me,onClick:()=>{He(!0),I.Z.export(Oe).then((e=>{const t=k.S0+e.data.file_name;window.location.href=t})).finally((()=>He(!1)))},children:[(0,U.jsx)(te.bwQ,{className:"mr-2"}),W("export")]}),(0,U.jsx)(X.Z,{columns:be,setColumns:we}),(0,U.jsx)(b.Z,{icon:(0,U.jsx)(f.Z,{}),type:"primary",onClick:()=>{K((0,V.bL)({id:"product-add",url:"product/add",name:W("add.product")})),ye(),Y("/product/add")},children:W("add.product")}),(0,U.jsx)(E.Z,{size:"",onClick:()=>{null===Ce||0===Ce.length?S.Am.warning(W("select.the.product")):(Se(!0),ce(!1))},children:W("delete.selected")}),(0,U.jsx)(b.Z,{icon:(0,U.jsx)(x.Z,{}),onClick:()=>{K((0,V.nc)({activeMenu:Ve,data:void 0}))},disabled:!Ve.data,style:{minWidth:150}})]})}),(0,U.jsxs)(w.Z,{title:W("product"),children:[(0,U.jsx)(n.Z,{className:"mt-3",activeKey:Re,onChange:e=>{Te({role:e,page:1}),ve(e)},type:"card",children:re.map((e=>(0,U.jsx)(de,{tab:W(e)},e)))}),(0,U.jsx)(C.Z,{locale:{emptyText:(0,U.jsx)(ee.Z,{})},scroll:{x:!0},rowSelection:Ee,loading:Ae,columns:null===be||void 0===be?void 0:be.filter((e=>e.is_show)),dataSource:Ie,pagination:{pageSize:Pe.perPage,page:(null===(B=Ve.data)||void 0===B?void 0:B.page)||1,total:Ne.total,defaultCurrent:null===(L=Ve.data)||void 0===L?void 0:L.page,current:null===($=Ve.data)||void 0===$?void 0:$.page},onChange:function(e,t,a){const{pageSize:n,current:l}=e,{field:s,order:o}=a,i=(0,T.Z)(o);K((0,V.nc)({activeMenu:Ve,data:{...Ve.data,perPage:n,page:l,column:s,sort:i}}))},rowKey:e=>e.id})]}),Q&&(0,U.jsx)(J,{orderDetails:Q,handleCancel:()=>G(null),paramsData:Oe}),(0,U.jsx)(oe,{product_id:me,handleCancel:()=>fe(null),handleRefetch:()=>{(0,H.dC)((()=>{K((0,N.t2)(Oe)),K((0,V.A_)(Ve))}))}}),(0,U.jsx)(M.Z,{click:ne?()=>{ze(!0),I.Z.setActive(Ce).then((()=>{Se(!1),K((0,N.t2)(Oe)),S.Am.success(W("successfully.updated")),le(!1)})).finally((()=>ze(!1)))}:()=>{ze(!0);const e={...Object.assign({},...Ce.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};I.Z.delete(e).then((()=>{Se(!1),S.Am.success(W("successfully.deleted")),K((0,N.t2)(Oe)),ce(null),le(!1)})).finally((()=>ze(!1)))},text:W(ne?"set.active.product":se?"delete":"all.delete"),loading:ke,setText:_e,setActive:le}),(0,U.jsxs)(_.Z,{title:"Reject message",closable:!1,visible:xe,footer:null,centered:!0,children:[(0,U.jsx)("p",{children:je}),(0,U.jsx)("div",{className:"d-flex justify-content-end",children:(0,U.jsx)(b.Z,{type:"primary",className:"mr-2",onClick:()=>ge(!1),children:W("close")})})]})]})};var ue=a(45464),ve=a(31741),he=a(4901),pe=a(70816),me=a.n(pe);const fe={type:"product"};function xe(e){var t,a,n;let{parentId:r,type:d="main"}=e;const{t:c}=(0,l.$)(),{setIsModalVisible:u}=(0,o.useContext)(z._),[v,p]=(0,o.useState)(!1),[m,f]=(0,o.useState)(!1),[x,y]=(0,o.useState)(""),[k,I]=(0,o.useState)(null),[N,P]=(0,o.useState)(null),R=(0,H.I0)(),q=(0,s.s0)(),{activeMenu:O}=(0,H.v9)((e=>e.menu),H.wU),{data:E,meta:D,loading:F,params:B}=(0,H.v9)((e=>e.requestModels),H.wU),L=O.data,$={search:null===L||void 0===L?void 0:L.search,sort:null===L||void 0===L?void 0:L.sort,column:null===L||void 0===L?void 0:L.column,perPage:null===L||void 0===L?void 0:L.perPage,page:null===L||void 0===L?void 0:L.page,parent_id:r,type:"product"},[Y,Q]=(0,o.useState)([{title:c("created.by"),dataIndex:"createdBy",key:"createdBy",is_show:!0,render:e=>(0,U.jsxs)("span",{children:[e.firstname," ",null===e||void 0===e?void 0:e.lastname," ",(0,U.jsx)("a",{href:"tel:".concat(null===e||void 0===e?void 0:e.phone),children:null===e||void 0===e?void 0:e.phone})]})},{title:c("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>me()(e).format("YYYY-MM-DD HH:mm")},{title:c("name"),dataIndex:"name",key:"name",is_show:!0,render:(e,t)=>{var a;return(0,U.jsxs)(j.Z,{children:[null===(a=t.model.translation)||void 0===a?void 0:a.title," ",(0,U.jsx)(he.WFu,{})," ",t.data["title[".concat(t.model.translation.locale,"]")]]})}},{title:c("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>{var a,n;return(0,U.jsxs)(j.Z,{children:[(0,U.jsx)(g.Z,{src:(0,ue.Z)(t.model.img),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0}),(0,U.jsx)(he.WFu,{}),(0,U.jsx)(g.Z,{src:(0,ue.Z)((null===(a=t.data.images)||void 0===a?void 0:a.at(0).url)||(null===(n=t.data.images)||void 0===n?void 0:n.at(0))),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})]})}},{title:c("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,U.jsx)("div",{children:"pending"===e?(0,U.jsx)(Z.Z,{color:"blue",children:c(e)}):"canceled"===e?(0,U.jsx)(Z.Z,{color:"error",children:c(e)}):(0,U.jsx)(Z.Z,{color:"cyan",children:c(e)})})},{title:c("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,U.jsxs)(j.Z,{children:[(0,U.jsx)(b.Z,{icon:(0,U.jsx)(i.Z,{}),onClick:()=>(e=>{R((0,V.bL)({url:"product-request/".concat(e.id),id:"product_request_edit",name:c("product.request.edit")})),q("/product-request/".concat(e.id))})(t)}),"cancelled"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,U.jsx)(b.Z,{icon:(0,U.jsx)(h.Z,{}),onClick:()=>{f(!0),y(t.status_note)}}),(0,U.jsx)(b.Z,{icon:(0,U.jsx)(ve.Z,{}),onClick:e=>{e.stopPropagation(),(e=>{R((0,V.bL)({url:"product-request-details/".concat(e.id),id:"product_request_details",name:c("product.request.details")})),q("/product-request-details/".concat(e.id))})(t)}}),(0,U.jsx)(b.Z,{onClick:()=>P(t),children:c("change.status")})]})}]);(0,o.useEffect)((()=>{R((0,K.aw)($)),R((0,V.A_)(O))}),[O.refetch]),(0,A.Z)((()=>{R((0,K.aw)($))}),[O.data]);const G={selectedRowKeys:k,onChange:e=>{I(e)}};return(0,U.jsxs)(w.Z,{title:c("requests"),extra:(0,U.jsx)(j.Z,{wrap:!0,children:(0,U.jsx)(X.Z,{columns:Y,setColumns:Q})}),children:[(0,U.jsx)(C.Z,{scroll:{x:!0},rowSelection:G,columns:null===Y||void 0===Y?void 0:Y.filter((e=>e.is_show)),dataSource:E,pagination:{pageSize:B.perPage,page:(null===(t=O.data)||void 0===t?void 0:t.page)||1,total:D.total,defaultCurrent:null===(a=O.data)||void 0===a?void 0:a.page,current:null===(n=O.data)||void 0===n?void 0:n.page},rowKey:e=>e.key,onChange:function(e,t,a){const{pageSize:n,current:l}=e,{field:s,order:o}=a,i=(0,T.Z)(o);R((0,V.nc)({activeMenu:O,data:{...O.data,perPage:n,page:l,column:s,sort:i}}))},loading:F}),N&&(0,U.jsx)(J,{orderDetails:N,handleCancel:()=>P(null),paramsData:$,listType:"request"}),(0,U.jsx)(M.Z,{click:()=>{p(!0);const e={status:null===k||void 0===k?void 0:k.at(0).status};W.Z.changeStatus(null===k||void 0===k?void 0:k.at(0).id,e).then((()=>{S.Am.success(c("successfully.changed")),R((0,K.aw)(fe)),u(!1),I(null)})).finally((()=>p(!1)))},text:c("change.status"),setText:I,loading:v}),(0,U.jsxs)(_.Z,{title:"Reject message",closable:!1,visible:m,footer:null,centered:!0,children:[(0,U.jsx)("p",{children:x}),(0,U.jsx)("div",{className:"d-flex justify-content-end",children:(0,U.jsx)(b.Z,{type:"primary",className:"mr-2",onClick:()=>f(!1),children:c("close")})})]})]})}function ge(){var e;const{t:t}=(0,l.$)(),a=(0,s.TH)();return(0,U.jsxs)(n.Z,{defaultActiveKey:(null===(e=a.state)||void 0===e?void 0:e.tab)||"list",destroyInactiveTabPane:!0,children:[(0,U.jsx)(n.Z.TabPane,{tab:t("product.list"),children:(0,U.jsx)(ce,{})},"list"),(0,U.jsx)(n.Z.TabPane,{tab:t("requests"),children:(0,U.jsx)(xe,{})},"request")]})}},15386:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var o=a(17469),i=function(e,t){return l.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};i.displayName="ClearOutlined";const r=l.forwardRef(i)},55768:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var o=a(17469),i=function(e,t){return l.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};i.displayName="PlusCircleOutlined";const r=l.forwardRef(i)},99587:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var o=a(17469),i=function(e,t){return l.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};i.displayName="TableOutlined";const r=l.forwardRef(i)},72764:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tupleNum=t.tuple=void 0;t.tuple=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t};t.tupleNum=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t}},6492:(e,t,a)=>{var n=a(20862),l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t||{},n=a.defaultValue,l=a.value,r=a.onChange,d=a.postState,c=(0,i.default)((function(){return void 0!==l?l:void 0!==n?"function"===typeof n?n():n:"function"===typeof e?e():e})),u=(0,s.default)(c,2),v=u[0],h=u[1],p=void 0!==l?l:v;d&&(p=d(p));var m=o.useRef(r);m.current=r;var f=o.useCallback((function(e,t){h(e,t),p!==e&&m.current&&m.current(e,p)}),[p,m]),x=o.useRef(l);return o.useEffect((function(){void 0===l&&l!==x.current&&h(l),x.current=l}),[l]),[p,f]};var s=l(a(63038)),o=n(a(47313)),i=l(a(41993))},41993:(e,t,a)=>{var n=a(20862),l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=o.useRef(!1),a=o.useState(e),n=(0,s.default)(a,2),l=n[0],i=n[1];return o.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[l,function(e,a){if(a&&t.current)return;i(e)}]};var s=l(a(63038)),o=n(a(47313))},81170:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.composeRef=r,t.fillRef=i,t.supportRef=function(e){var t,a,n=(0,s.isMemo)(e)?e.type.type:e.type;if("function"===typeof n&&!(null===(t=n.prototype)||void 0===t?void 0:t.render))return!1;if("function"===typeof e&&!(null===(a=e.prototype)||void 0===a?void 0:a.render))return!1;return!0},t.useComposeRef=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,o.default)((function(){return r.apply(void 0,t)}),t,(function(e,t){return e.length===t.length&&e.every((function(e,a){return e===t[a]}))}))};var l=n(a(50008)),s=a(96214),o=n(a(57578));function i(e,t){"function"===typeof e?e(t):"object"===(0,l.default)(e)&&e&&"current"in e&&(e.current=t)}function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.filter((function(e){return e}));return n.length<=1?n[0]:function(e){t.forEach((function(t){i(t,e)}))}}}}]);
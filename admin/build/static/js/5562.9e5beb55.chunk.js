"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5562],{41481:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(47313),r=a(66672),n=a(16031),s=a(40765),i=a(46417);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...c}=e;const[d,u]=(0,l.useState)(a),m=(0,l.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[]);return(0,l.useEffect)((()=>{u(a)}),[o]),(0,i.jsx)(r.Z,{value:d,onChange:e=>{u(e.target.value),m(e.target.value)},prefix:(0,i.jsx)(s.Z,{}),...c})}},38702:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(34344),r=a(81333);const n={getAll:e=>l.Z.get("dashboard/admin/translations/paginate",{params:e}),delete:e=>l.Z.delete("https://api.uzmart.org/api/v1/dashboard/admin/translations/delete",{params:e}),getById:(e,t)=>l.Z.get("dashboard/admin/translations/".concat(e),{params:t}),create:e=>l.Z.post("dashboard/admin/translations",{},{params:e}),update:(e,t)=>l.Z.put("dashboard/admin/translations/".concat(e),{},{params:t}),export:e=>l.Z.get("dashboard/admin/translations/export",{params:e}),import:e=>r.Z.post("dashboard/admin/translations/import",e)}},55562:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var l=a(47313),r=a(10976),n=a(66672),s=a(59491),i=a(77181),o=a(45705),c=a(74294),d=a(78508),u=a(38702),m=a(23560),h=a(12019),p=a(47515),x=a(55768),v=a(9274),j=a(68197),g=a(59624),Z=a(24511),f=a(46417);function b(e){let{visible:t,setVisible:a,languages:i,refetch:o}=e;const{t:d}=(0,Z.$)(),[h,p]=(0,l.useState)(!1),[x]=r.Z.useForm(),b=()=>{a(!1)};return(0,f.jsx)(v.Z,{visible:t,title:d("add.translation"),onCancel:b,footer:[(0,f.jsx)(s.Z,{type:"primary",form:"translation-form",htmlType:"submit",loading:h,children:d("create")},"create-translation"),(0,f.jsx)(s.Z,{type:"default",onClick:b,children:d("cancel")},"create-translation-cancel")],children:(0,f.jsx)(r.Z,{id:"translation-form",name:"translation",layout:"vertical",onFinish:e=>{p(!0),u.Z.create(e).then((()=>{m.Am.success(d("successfully.created")),a(!1),o()})).finally((()=>p(!1)))},form:x,initialValues:{group:"web"},children:(0,f.jsxs)(j.Z,{gutter:12,children:[(0,f.jsx)(g.Z,{span:24,children:(0,f.jsx)(r.Z.Item,{label:d("name"),name:"key",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(d("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(d("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(d("required")))}],children:(0,f.jsx)(n.Z,{})})}),(0,f.jsx)(g.Z,{span:24,children:(0,f.jsx)(r.Z.Item,{label:d("group"),name:"group",rules:[{required:!0,message:""}],children:(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(c.Z.Option,{value:"web",children:d("web")}),(0,f.jsx)(c.Z.Option,{value:"mobile",children:d("mobile")}),(0,f.jsx)(c.Z.Option,{value:"errors",children:d("errors")})]})})}),i.map(((e,t)=>(0,f.jsx)(g.Z,{span:24,children:(0,f.jsx)(r.Z.Item,{label:"".concat(d("translation")," (").concat(e.locale,")"),name:"value[".concat(e.locale,"]"),rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(d("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(d("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(d("required")))}],children:(0,f.jsx)(n.Z,{})})},t)))]})})})}var y=a(2717),w=a(41481),S=a(3925),k=a(90954),C=a(97890),I=a(97421),P=a(69658),E=a(74580);const O=l.createContext(null),z=e=>{let{index:t,...a}=e;const[l]=r.Z.useForm();return(0,f.jsx)(r.Z,{form:l,component:!1,children:(0,f.jsx)(O.Provider,{value:l,children:(0,f.jsx)("tr",{...a})})})},V=e=>{let{title:t,editable:a,children:s,dataIndex:i,record:o,handleSave:c,...d}=e;const{t:u}=(0,Z.$)(),[m,p]=(0,l.useState)(!1),x=(0,l.useRef)(null),v=(0,l.useContext)(O);(0,l.useEffect)((()=>{m&&x.current.focus()}),[m]);const j=()=>{p(!m),v.setFieldsValue({[i]:o[i]})},g=async()=>{try{const e=await v.validateFields();j(),c({...o,...e,dataIndex:i})}catch(e){console.log("Save failed:",e)}};let b=s;return a&&(b=m?(0,f.jsx)(r.Z.Item,{style:{margin:0},name:i,rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(u("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(u("required")))}],children:(0,f.jsx)(n.Z,{ref:x,onPressEnter:g,onBlur:g})}):(0,f.jsxs)("div",{className:"editable-cell-value-wrap cursor-pointer d-flex justify-content-between align-items-center",style:{paddingRight:24},onClick:j,children:[(0,f.jsx)("div",{className:"w-100",children:s}),(0,f.jsx)(h.Z,{})]})),(0,f.jsx)("td",{...d,children:b})};function A(){const{t:e}=(0,Z.$)(),t=(0,y.I0)(),a=(0,C.s0)(),{setIsModalVisible:r}=(0,l.useContext)(E._),[n,h]=(0,l.useState)([]),[v,j]=(0,l.useState)(10),[g,O]=(0,l.useState)(1),[A,F]=(0,l.useState)(0),[M,N]=(0,l.useState)(!1),[q,B]=(0,l.useState)(null),[R,$]=(0,l.useState)(null),[H,L]=(0,l.useState)(null),[W,_]=(0,l.useState)(!1),[K,T]=(0,l.useState)(0),{languages:U}=(0,y.v9)((e=>e.formLang),y.wU),[D,G]=(0,l.useState)(""),[J,Q]=(0,l.useState)(""),[X,Y]=(0,l.useState)(!1),[ee,te]=(0,l.useState)(null),[ae,le]=(0,l.useState)(!1),re=(0,l.useMemo)((()=>[{title:e("name"),dataIndex:"key",sorter:(e,t,a)=>ne(a,"key"),width:250,fixed:"left"},{title:e("group"),dataIndex:"group",sorter:(e,t,a)=>ne(a,"group"),width:150,fixed:"left"},{title:e("options"),dataIndex:"key",width:100,fixed:"center",render:e=>(0,f.jsx)(s.Z,{icon:(0,f.jsx)(p.Z,{}),onClick:()=>{te([e]),r(!0)}})},...U.filter((e=>!D||e.locale===D)).map((e=>({title:e.title,dataIndex:"value[".concat(e.locale,"]"),editable:!0,width:300})))]),[U,D]);function ne(e,t){let a;switch(e){case"ascend":a="asc";break;case"descend":a="desc"}$(a),L(t)}function se(){N(!0);const e={perPage:v,skip:K,group:q,sort:R,column:H,search:J};u.Z.getAll(e).then((e=>{let{data:t}=e;const a=Object.entries(t.translations).map((e=>({key:e[0],group:e[1][0].group,...Object.assign({},...U.map((t=>{var a;return{["value[".concat(t.locale,"]")]:null===(a=e[1].find((e=>e.locale===t.locale)))||void 0===a?void 0:a.value}})))})));h(a),F(t.total)})).finally((()=>N(!1)))}(0,l.useEffect)((()=>{se()}),[v,q,R,H,K,J]);const ie=e=>{const{dataIndex:t,key:a}=e,l=[...n],r=l.findIndex((t=>e.key===t.key)),s=l[r];if(s[t]===e[t])return;l.splice(r,1,{...s,...e}),h(l);!function(e,t){u.Z.update(e,t).then((e=>m.Am.success(e.message)))}(a,{...e,value:void 0,dataIndex:void 0,key:void 0})};const oe={body:{row:z,cell:V}},ce=re.map((e=>e.editable?{...e,onCell:t=>({record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,fixed:e.fixed,handleSave:ie})}:e));return(0,f.jsxs)(i.Z,{extra:(0,f.jsxs)(o.Z,{wrap:!0,children:[(0,f.jsx)(w.Z,{placeholder:e("search"),handleChange:e=>Q(e)}),(0,f.jsxs)(c.Z,{style:{minWidth:150},value:D,onChange:e=>G(e),placeholder:e("select.language"),children:[(0,f.jsx)(c.Z.Option,{value:"",children:e("all")}),U.map((e=>(0,f.jsx)(c.Z.Option,{value:e.locale,children:e.title},e.locale)))]}),(0,f.jsxs)(c.Z,{style:{minWidth:150},value:q,onChange:e=>B(e),placeholder:e("select.group"),children:[(0,f.jsx)(c.Z.Option,{value:"",children:e("all")}),(0,f.jsx)(c.Z.Option,{value:"web",children:e("web")}),(0,f.jsx)(c.Z.Option,{value:"mobile",children:e("mobile")}),(0,f.jsx)(c.Z.Option,{value:"errors",children:e("errors")})]}),(0,f.jsxs)(s.Z,{onClick:()=>{Y(!0),u.Z.export().then((e=>{window.location.href=I.S0+e.data.file_name})).finally((()=>Y(!1)))},loading:X,children:[(0,f.jsx)(S.o5r,{className:"mr-2"}),e("export")]}),(0,f.jsxs)(s.Z,{onClick:()=>{t((0,k.bL)({id:"translation-import",url:"settings/translations/import",name:e("translation.import")})),a("import")},children:[(0,f.jsx)(S.o5r,{className:"mr-2"}),e("import")]}),(0,f.jsx)(s.Z,{icon:(0,f.jsx)(x.Z,{}),type:"primary",onClick:()=>_(!0),children:e("add.translation")})]}),children:[(0,f.jsx)(d.Z,{components:oe,columns:ce,dataSource:n,pagination:{pageSize:v,page:g,total:A},rowKey:e=>e.id,onChange:e=>{const{pageSize:t,current:a}=e,l=(a-1)*t;j(t),O(a),T(l)},loading:M,scroll:{x:1500}}),W&&(0,f.jsx)(b,{visible:W,setVisible:_,languages:U,refetch:se}),(0,f.jsx)(P.Z,{click:()=>{le(!0);const t={...Object.assign({},...ee.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};u.Z.delete(t).then((()=>{se(),m.Am.success(e("successfully.deleted")),r(!1),te(null)})).finally((()=>le(!1)))},text:e("are.you.sure.you.want.to.delete.the.selected.translation"),loading:ae})]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),r=a(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var s=a(17469),i=function(e,t){return r.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};i.displayName="PlusCircleOutlined";const o=r.forwardRef(i)}}]);
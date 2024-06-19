"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4365],{55940:(e,t,a)=>{a.d(t,{Z:()=>c});a(47313);var l=a(59491),i=a(47515),n=a(23560),s=a(24511),o=a(79492),d=a(46417);function c(e){let{size:t="",onClick:a,type:c="default",...r}=e;const{t:u}=(0,s.$)(),{isDemo:h}=(0,o.Z)();return(0,d.jsx)(l.Z,{size:t,icon:(0,d.jsx)(i.Z,{}),onClick:e=>{h?n.Am.warning(u("cannot.work.demo")):a(e)},type:c,...r})}},41481:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(47313),i=a(66672),n=a(16031),s=a(40765),o=a(46417);function d(e){let{handleChange:t,defaultValue:a,resetSearch:d,...c}=e;const[r,u]=(0,l.useState)(a),h=(0,l.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[]);return(0,l.useEffect)((()=>{u(a)}),[d]),(0,o.jsx)(i.Z,{value:r,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,o.jsx)(s.Z,{}),...c})}},44365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var l=a(47313),i=a(26824),n=a(86345),s=a(45705),o=a(59491),d=a(77181),c=a(78508),r=a(24511),u=a(70816),h=a.n(u),v=a(97421),p=a(12019),m=a(47515),g=a(55768),x=a(55940),Z=a(41481),f=a(74580),k=a(23560),j=a(69658),w=a(2717),y=a(80314),C=a(51597),_=a(90954),b=a(50447),z=a(97890),S=a(46417);function M(){var e,t;const{t:a}=(0,r.$)(),u=(0,w.I0)(),M=(0,z.s0)(),{setIsModalVisible:I}=(0,l.useContext)(f._),{activeMenu:A}=(0,w.v9)((e=>e.menu),w.wU),{looks:D,loading:V,params:H,meta:Y}=(0,w.v9)((e=>e.looks),w.wU),[E,R]=(0,l.useState)(null),[F,K]=(0,l.useState)(!1),[L,N]=(0,l.useState)(!1),O={search:null!==(e=null===A||void 0===A||null===(t=A.data)||void 0===t?void 0:t.search)&&void 0!==e?e:null,...H},P=[{title:a("id"),dataIndex:"id",key:"id",is_show:!0},{title:a("title"),dataIndex:"title",key:"title",is_show:!0,render:(e,t)=>{var a;return null===t||void 0===t||null===(a=t.translation)||void 0===a?void 0:a.title}},{title:a("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,S.jsx)(i.Z,{width:100,height:100,src:null!==t&&void 0!==t&&t.img?v.bV+(null===t||void 0===t?void 0:t.img):"https://via.placeholder.com/150",preview:!(null===t||void 0===t||!t.img),placeholder:!0,style:{borderRadius:4,objectFit:"cover"}})},{title:a("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,t)=>h()(null===t||void 0===t?void 0:t.created_at).format("DD-MM-YYYY HH:mm")},{title:a("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,t)=>(0,S.jsx)(n.Z,{onChange:()=>{R([null===t||void 0===t?void 0:t.id]),N(!0),I(!0)},checked:null===t||void 0===t?void 0:t.active})},{title:a("options"),dataIndex:"options",is_show:!0,render:(e,t)=>(0,S.jsxs)(s.Z,{children:[(0,S.jsx)(o.Z,{type:"primary",icon:(0,S.jsx)(p.Z,{}),onClick:()=>B(null===t||void 0===t?void 0:t.id)}),(0,S.jsx)(x.Z,{icon:(0,S.jsx)(m.Z,{}),onClick:()=>{I(!0),R([t.id]),N(!1)}})]})}],U={selectedRowKeys:E,onChange:e=>{R(e)}},$=()=>{u((0,_.nc)({activeMenu:A,data:null}))},B=e=>{u((0,_.bL)({id:"look_edit",url:"seller/looks/".concat(e),name:"edit.look"})),$(),M("".concat(e))};return(0,y.Z)((()=>{u((0,C.u0)(O))}),[A.data]),(0,l.useEffect)((()=>{A.refetch&&(0,w.dC)((()=>{u((0,C.u0)(O)),u((0,_.A_)(A))}))}),[A.refetch]),(0,S.jsxs)(l.Fragment,{children:[(0,S.jsx)(d.Z,{className:"p-0",children:(0,S.jsxs)(s.Z,{wrap:!0,size:[14,20],children:[(0,S.jsx)(Z.Z,{placeholder:a("search"),style:{minWidth:300},handleChange:e=>(e=>{const t=A.data;u((0,_.nc)({activeMenu:A,data:{...t,...e}}))})({search:e})}),(0,S.jsx)(o.Z,{icon:(0,S.jsx)(g.Z,{}),type:"primary",onClick:()=>{u((0,_.bL)({id:"look_add",url:"seller/looks/add",name:"add.look"})),$(),M("add")},children:a("add.looks")}),(0,S.jsx)(x.Z,{icon:(0,S.jsx)(m.Z,{}),onClick:()=>{null===E||0===E.length?k.Am.warning(a("select.the.product")):I(!0)},children:a("delete.selected")})]})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(c.Z,{scroll:{x:!0},rowKey:e=>e.id,rowSelection:U,columns:null===P||void 0===P?void 0:P.filter((e=>e.is_show)),dataSource:D,loading:V,pagination:{pageSize:Y.per_page,page:Y.current_page,total:Y.total},onChange:e=>{const{pageSize:t,current:a}=e,l={...O,perPage:t,page:a};u((0,C.u0)(l))}})}),(0,S.jsx)(j.Z,{click:L?()=>{K(!0),b.Z.setActive(E).then((()=>{u((0,C.u0)({paramsData:O})),k.Am.success(a("successfully.updated")),I(!1),N(!1),R(null)})).finally((()=>K(!1)))}:()=>{K(!0);const e={...Object.assign({},...E.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};b.Z.delete(e).then((()=>{u((0,C.u0)({paramsData:O})),k.Am.success(a("successfully.deleted")),I(!1),N(!1),R(null)})).finally((()=>K(!1)))},text:a(L?"set.active":"are.you.sure.you.want.to.delete.the.selected.products"),loading:F,setActive:N})]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(1413),i=a(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var s=a(17469),o=function(e,t){return i.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};o.displayName="PlusCircleOutlined";const d=i.forwardRef(o)}}]);
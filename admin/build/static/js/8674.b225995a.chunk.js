"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8674],{48567:(e,a,t)=>{t.d(a,{Z:()=>h});var l=t(10976),n=t(75649),s=t(68197),i=t(59624),r=t(59491),o=t(74294),d=(t(47313),t(24511)),c=t(2717),u=t(46417);const h=e=>{var a;let{handleClose:t,openDrower:h,setMenuData:v}=e;const{t:m}=(0,d.$)(),{direction:x}=(0,c.v9)((e=>e.theme.theme),c.wU),{languages:Z}=(0,c.v9)((e=>e.formLang),c.wU),[p]=l.Z.useForm(),j=(0,c.I0)(),{activeMenu:g}=(0,c.v9)((e=>e.menu),c.wU);return(0,u.jsx)(n.Z,{title:m("filter"),placement:"rtl"===x?"left":"right",closable:!0,onClose:t,visible:h,footer:(0,u.jsxs)(s.Z,{gutter:12,children:[(0,u.jsx)(i.Z,{span:12,children:(0,u.jsx)(r.Z,{className:"w-100",type:"primary",onClick:()=>p.submit(),children:m("result")})}),(0,u.jsx)(i.Z,{span:12,children:(0,u.jsx)(r.Z,{className:"w-100",onClick:()=>(()=>{const e=g.data;j(v({activeMenu:g,data:{...e,filter:void 0}})),t()})(),children:m("clear")})})]}),children:(0,u.jsxs)(l.Z,{form:p,name:"basic",layout:"vertical",onFinish:e=>{const a=g.data;j(v({activeMenu:g,data:{...a,filter:e}})),t()},initialValues:{...null===(a=g.data)||void 0===a?void 0:a.filter},children:[(0,u.jsx)(l.Z.Item,{label:m("language"),rules:[{required:!0,message:m("required")}],name:"equal",children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(o.Z.Option,{value:"equal",children:m("equal")}),(0,u.jsx)(o.Z.Option,{value:"not_equal",children:m("not.equal")})]})}),(0,u.jsx)(l.Z.Item,{label:m("locale"),rules:[{required:!0,message:m("required")}],name:"lang",children:(0,u.jsx)(o.Z,{children:Z.map(((e,a)=>(0,u.jsx)(o.Z.Option,{value:e.locale,children:e.title},e.locale+a)))})})]})},"left")}},55940:(e,a,t)=>{t.d(a,{Z:()=>d});t(47313);var l=t(59491),n=t(47515),s=t(23560),i=t(24511),r=t(79492),o=t(46417);function d(e){let{size:a="",onClick:t,type:d="default",...c}=e;const{t:u}=(0,i.$)(),{isDemo:h}=(0,r.Z)();return(0,o.jsx)(l.Z,{size:a,icon:(0,o.jsx)(n.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):t(e)},type:d,...c})}},53233:(e,a,t)=>{t.d(a,{Z:()=>x});var l=t(47313),n=t(56140),s=t(67251),i=t(45705),r=t(86345),o=t(78267),d=t(37388),c=t(59491),u=t(99587),h=t(24511),v=t(46417);const{Text:m}=n.Z,x=e=>{let{columns:a=[],setColumns:t,style:n,size:x="",iconOnly:Z}=e;const{t:p}=(0,h.$)(),[j,g]=(0,l.useState)(!1),f=(0,v.jsx)(s.Z,{children:null===a||void 0===a?void 0:a.map(((e,l)=>(0,v.jsx)(s.Z.Item,{children:(0,v.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(r.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===a||void 0===a?void 0:a.map((a=>(a.dataIndex===e.dataIndex&&(a.is_show=!(null!==a&&void 0!==a&&a.is_show)),a)));t(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(o.Z,{overlay:f,trigger:["click"],onVisibleChange:e=>{g(e)},visible:j,children:(0,v.jsx)(d.Z,{title:p("change.columns"),children:(0,v.jsx)(c.Z,{style:{...n},size:x,icon:(0,v.jsx)(u.Z,{}),children:Z?null:p("Columns")})})})}},41481:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(47313),n=t(66672),s=t(16031),i=t(40765),r=t(46417);function o(e){let{handleChange:a,defaultValue:t,resetSearch:o,...d}=e;const[c,u]=(0,l.useState)(t),h=(0,l.useMemo)((()=>(0,s.debounce)((e=>{a(e)}),800)),[]);return(0,l.useEffect)((()=>{u(t)}),[o]),(0,r.jsx)(n.Z,{value:c,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,r.jsx)(i.Z,{}),...d})}},13945:(e,a,t)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(a,{Z:()=>l})},18674:(e,a,t)=>{t.r(a),t.d(a,{default:()=>K});var l=t(47313),n=t(12019),s=t(66407),i=t(47515),r=t(55768),o=t(73591),d=t(45705),c=t(66204),u=t(26824),h=t(59491),v=t(77181),m=t(78508),x=t(97890),Z=t(23560),p=t(97421),j=t(74580),g=t(69658),f=t(2717),w=t(90954),b=t(53149),C=t(80636),y=t(24511),k=t(10976),z=t(9274),I=t(68197),V=t(59624),_=t(74294),S=t(79492),q=t(46417);const M=["new","approved","rejected"];function N(e){let{data:a,handleCancel:t,paramsData:n}=e;const{t:s}=(0,y.$)(),{activeMenu:i}=(0,f.v9)((e=>e.menu),f.wU),[r]=k.Z.useForm(),o=(0,f.I0)(),[d,c]=(0,l.useState)(!1),{isDemo:u,demoShop:v}=(0,S.Z)();return(0,q.jsx)(z.Z,{visible:!!a,title:s(a.name),onCancel:t,footer:[(0,q.jsx)(h.Z,{type:"primary",onClick:()=>r.submit(),loading:d,disabled:u&&a.id==v,children:s("save")}),(0,q.jsx)(h.Z,{type:"default",onClick:t,children:s("cancel")})],children:(0,q.jsx)(k.Z,{form:r,layout:"vertical",onFinish:e=>{c(!0);const l={...e};b.Z.statusChange(a.uuid,l).then((()=>{t(),o((0,C.L)(n)),o((0,w.xo)(i))})).finally((()=>c(!1)))},initialValues:{status:a.status},children:(0,q.jsx)(I.Z,{gutter:12,children:(0,q.jsx)(V.Z,{span:24,children:(0,q.jsx)(k.Z.Item,{label:s("status"),name:"status",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(_.Z,{children:M.map(((e,a)=>(0,q.jsx)(_.Z.Option,{value:e,children:s(e)},e+a)))})})})})})})}var H=t(55940),O=t(48567),D=t(41481),L=t(80314),U=t(6957),P=t(5958),$=t(53233),A=t(13945);const{TabPane:E}=o.Z,F=["blue","red","gold","volcano","cyan","lime"],T=["all","new","approved","rejected"],K=()=>{var e,a,t,k,z,I,V,_,S,M;const{t:K}=(0,y.$)(),R=(0,f.I0)(),B=(0,x.s0)(),[G,J]=(0,l.useState)(null),{user:Q}=(0,f.v9)((e=>e.auth),f.wU),[W,X]=(0,l.useState)(!1),[Y,ee]=(0,l.useState)(null),[ae,te]=(0,l.useState)([{title:K("id"),dataIndex:"id",is_show:!0,sorter:!0},{title:K("title"),dataIndex:"name",is_show:!0},{title:K("translations"),dataIndex:"locales",is_show:!0,render:(e,a)=>{var t;return(0,q.jsx)(d.Z,{children:null===(t=a.locales)||void 0===t?void 0:t.map(((e,a)=>(0,q.jsx)(c.Z,{className:"text-uppercase",color:[F[a]],children:e})))})}},{title:K("logo"),dataIndex:"logo_img",is_show:!0,render:(e,a)=>(0,q.jsx)(u.Z,{alt:"images",className:"img rounded",src:e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})},{title:K("background"),dataIndex:"back",is_show:!0,render:e=>(0,q.jsx)(u.Z,{alt:"images background",className:"img rounded",src:e?p.bV+e:"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})},{title:K("seller"),dataIndex:"seller",is_show:!0},{title:K("open.time"),dataIndex:"open",is_show:!0,render:(e,a)=>a.open?(0,q.jsxs)(c.Z,{color:"blue",children:[" ",K("open")," "]}):(0,q.jsxs)(c.Z,{color:"red",children:[" ",K("closed")," "]})},{title:K("tax"),is_show:!0,dataIndex:"tax",render:e=>"".concat(e," %")},{title:K("status"),dataIndex:"status",is_show:!0,render:(e,a)=>(0,q.jsxs)("div",{children:["new"===e?(0,q.jsx)(c.Z,{color:"blue",children:K(e)}):"rejected"===e?(0,q.jsx)(c.Z,{color:"error",children:K(e)}):(0,q.jsx)(c.Z,{color:"cyan",children:K(e)}),(0,q.jsx)(n.Z,{onClick:()=>J(a)})]})},{title:K("options"),dataIndex:"options",is_show:!0,render:(e,a)=>(0,q.jsxs)(d.Z,{children:[(0,q.jsx)(h.Z,{type:"primary",icon:(0,q.jsx)(n.Z,{}),onClick:()=>(e=>{R((0,w.bL)({id:"edit-restaurant",url:"restaurant/".concat(e.uuid),name:K("edit.restaurant")})),B("/restaurant/".concat(e.uuid))})(a)}),(0,q.jsx)(h.Z,{icon:(0,q.jsx)(s.Z,{}),onClick:()=>(e=>{R((0,w.bL)({id:"restaurant-clone",url:"restaurant-clone/".concat(e.uuid),name:K("restaurant.clone")})),B("/restaurant-clone/".concat(e.uuid))})(a)}),"manager"!==(null===Q||void 0===Q?void 0:Q.role)?(0,q.jsx)(H.Z,{icon:(0,q.jsx)(i.Z,{}),onClick:()=>{se([a.id]),le(!0),ee(!0)}}):""]})}]),{setIsModalVisible:le}=(0,l.useContext)(j._),[ne,se]=(0,l.useState)(null),[ie,re]=(0,l.useState)("all"),[oe,de]=(0,l.useState)(!1),{activeMenu:ce}=(0,f.v9)((e=>e.menu),f.wU),{restourants:ue,meta:he,loading:ve,params:me}=(0,f.v9)((e=>e.restourant),f.wU),xe=(null===(e=ce.data)||void 0===e?void 0:e.role)||ie,Ze=null===ce||void 0===ce?void 0:ce.data,pe={search:null===Ze||void 0===Ze?void 0:Ze.search,lang:"equal"===(null===Ze||void 0===Ze||null===(a=Ze.filter)||void 0===a?void 0:a.equal)?null===Ze||void 0===Ze||null===(t=Ze.filter)||void 0===t?void 0:t.lang:U.Z.language,not_lang:"not_equal"===(null===Ze||void 0===Ze||null===(k=Ze.filter)||void 0===k?void 0:k.equal)?null===Ze||void 0===Ze||null===(z=Ze.filter)||void 0===z?void 0:z.lang:null,status:"all"===xe?void 0:xe||void 0,page:null===Ze||void 0===Ze?void 0:Ze.page,perPage:null===Ze||void 0===Ze?void 0:Ze.perPage,sort:null===Ze||void 0===Ze?void 0:Ze.sort,column:null===Ze||void 0===Ze?void 0:Ze.column};(0,l.useEffect)((()=>{ce.refetch&&(R((0,C.L)(pe)),R((0,w.A_)(ce)),re("all"))}),[ce.refetch]);const je=e=>{const a=ce.data;R((0,w.nc)({activeMenu:ce,data:{...a,...e}}))};(0,L.Z)((()=>{R((0,C.L)(pe))}),[ce.data]);const ge={selectedRowKeys:ne,onChange:e=>{se(e)}};return(0,q.jsxs)(v.Z,{title:K("restaurants"),extra:(0,q.jsxs)(d.Z,{wrap:!0,children:[(0,q.jsx)(h.Z,{icon:(0,q.jsx)(r.Z,{}),type:"primary",onClick:()=>{R((0,w.bL)({id:"add-restaurant",url:"restaurant/add",name:K("add.restaurant")})),B("/restaurant/add")},children:K("add.restaurant")}),(0,q.jsx)(H.Z,{size:"",onClick:()=>{null===ne||0===ne.length?Z.Am.warning(K("select.the.product")):(le(!0),ee(!1))},children:K("delete.selected")}),(0,q.jsx)(h.Z,{className:"settings-button",onClick:()=>X(!0),children:(0,q.jsx)(P.Ol$,{className:"icon"})}),(0,q.jsx)($.Z,{columns:ae,setColumns:te})]}),children:[(0,q.jsx)("div",{className:"d-flex justify-content-between",children:(0,q.jsx)(D.Z,{placeholder:K("search"),handleChange:e=>je({search:e}),defaultValue:null===(I=ce.data)||void 0===I?void 0:I.search,resetSearch:!(null!==(V=ce.data)&&void 0!==V&&V.search),className:"w-25"})}),(0,q.jsx)(o.Z,{className:"mt-3",activeKey:xe,onChange:e=>{je({role:e,page:1}),re(e)},type:"card",children:T.map((e=>(0,q.jsx)(E,{tab:K(e)},e)))}),(0,q.jsx)(m.Z,{scroll:{x:!0},rowSelection:ge,columns:null===ae||void 0===ae?void 0:ae.filter((e=>e.is_show)),dataSource:ue,loading:ve,pagination:{pageSize:me.perPage,page:(null===(_=ce.data)||void 0===_?void 0:_.page)||1,total:he.total,defaultCurrent:null===(S=ce.data)||void 0===S?void 0:S.page,current:null===(M=ce.data)||void 0===M?void 0:M.page},rowKey:e=>e.id,onChange:function(e,a,t){const{pageSize:l,current:n}=e,{field:s,order:i}=t,r=(0,A.Z)(i);R((0,w.nc)({activeMenu:ce,data:{...ce.data,perPage:l,page:n,column:s,sort:r}}))}}),G&&(0,q.jsx)(N,{data:G,handleCancel:()=>J(null),paramsData:pe}),(0,q.jsx)(g.Z,{click:()=>{de(!0);const e={...Object.assign({},...ne.map(((e,a)=>({["ids[".concat(a,"]")]:e}))))};b.Z.delete(e).then((()=>{Z.Am.success(K("successfully.deleted")),le(!1),R((0,C.L)(pe)),ee(null)})).finally((()=>de(!1)))},text:K(Y?"delete":"all.delete"),setText:se,loading:oe}),W&&(0,q.jsx)(O.Z,{handleClose:()=>X(!1),openDrower:W,setMenuData:w.nc})]})}},55768:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(1413),n=t(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=t(17469),r=function(e,a){return n.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:a,icon:s}))};r.displayName="PlusCircleOutlined";const o=n.forwardRef(r)},99587:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(1413),n=t(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=t(17469),r=function(e,a){return n.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:a,icon:s}))};r.displayName="TableOutlined";const o=n.forwardRef(r)}}]);
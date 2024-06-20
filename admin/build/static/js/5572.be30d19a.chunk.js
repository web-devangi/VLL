"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5572],{55940:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(1413),i=t(45987),c=(t(47313),t(59491)),r=t(47515),l=t(23560),o=t(24511),s=t(79492),u=t(46417),d=["size","onClick","type"];function h(e){var n=e.size,t=void 0===n?"":n,h=e.onClick,f=e.type,v=void 0===f?"default":f,Z=(0,i.Z)(e,d),m=(0,o.$)().t,p=(0,s.Z)().isDemo;return(0,u.jsx)(c.Z,(0,a.Z)({size:t,icon:(0,u.jsx)(r.Z,{}),onClick:function(e){p?l.Am.warning(m("cannot.work.demo")):h(e)},type:v},Z))}},53233:function(e,n,t){var a=t(1413),i=t(29439),c=t(47313),r=t(56140),l=t(67251),o=t(45705),s=t(86345),u=t(78267),d=t(37388),h=t(59491),f=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,p=e.style,g=e.size,x=void 0===g?"":g,j=e.iconOnly,y=(0,v.$)().t,C=(0,c.useState)(!1),w=(0,i.Z)(C,2),b=w[0],k=w[1],z=(0,Z.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){k(e)},visible:b,children:(0,Z.jsx)(d.Z,{title:y("change.columns"),children:(0,Z.jsx)(h.Z,{style:(0,a.Z)({},p),size:x,icon:(0,Z.jsx)(f.Z,{}),children:j?null:y("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(1413),i=t(29439),c=t(45987),r=t(47313),l=t(66672),o=t(16031),s=t(40765),u=t(46417),d=["handleChange","defaultValue","resetSearch"];function h(e){var n=e.handleChange,t=e.defaultValue,h=e.resetSearch,f=(0,c.Z)(e,d),v=(0,r.useState)(t),Z=(0,i.Z)(v,2),m=Z[0],p=Z[1],g=(0,r.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,r.useEffect)((function(){p(t)}),[h]),(0,u.jsx)(l.Z,(0,a.Z)({value:m,onChange:function(e){p(e.target.value),g(e.target.value)},prefix:(0,u.jsx)(s.Z,{})},f))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},85572:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a=t(4942),i=t(93433),c=t(1413),r=t(29439),l=t(47313),o=t(12019),s=t(66407),u=t(47515),d=t(55768),h=t(15386),f=t(73591),v=t(45705),Z=t(66204),m=t(26824),p=t(86345),g=t(59491),x=t(77181),j=t(78508),y=t(97421),C=t(74580),w=t(97890),b=t(23560),k=t(69658),z=t(2717),V=t(90954),H=t(30763),S=t(24511),_=t(55940),I=t(53233),M=t(41481),N=t(80314),A=t(3925),P=t(13945),O=t(74380),E=t(10976),L=t(9274),R=t(68197),T=t(59624),U=t(74294),W=t(46417),$=["pending","published","unpublished"];function B(e){var n=e.data,t=e.handleCancel,a=e.paramsData,i=(0,z.I0)(),o=(0,S.$)().t,s=(0,z.v9)((function(e){return e.menu}),z.wU).activeMenu,u=E.Z.useForm(),d=(0,r.Z)(u,1)[0],h=(0,l.useState)(!1),f=(0,r.Z)(h,2),v=f[0],Z=f[1];return(0,W.jsx)(L.Z,{visible:!!n,title:null===n||void 0===n?void 0:n.title,onCancel:t,footer:[(0,W.jsx)(g.Z,{type:"primary",onClick:function(){return d.submit()},loading:v,children:o("save")}),(0,W.jsx)(g.Z,{type:"default",onClick:t,children:o("cancel")})],children:(0,W.jsx)(E.Z,{form:d,layout:"vertical",onFinish:function(e){Z(!0);var r=(0,c.Z)({},e);H.Z.statusUpdate(n.uuid,r).then((function(){t(),i((0,O.P2)(a)),i((0,V.A_)(s))})).finally((function(){return Z(!1)}))},initialValues:{status:n.status},children:(0,W.jsx)(R.Z,{gutter:12,children:(0,W.jsx)(T.Z,{span:24,children:(0,W.jsx)(E.Z.Item,{label:o("status"),name:"status",rules:[{required:!0,message:o("required")}],children:(0,W.jsx)(U.Z,{children:$.map((function(e,n){return(0,W.jsx)(U.Z.Option,{value:e,children:o(e)},e+n)}))})})})})})})}var D=["blue","red","gold","volcano","cyan","lime"],F=f.Z.TabPane,K=["all","pending","published","unpublished"],q=function(){var e,n,t,E,L=(0,S.$)().t,R=(0,z.I0)(),T=(0,w.s0)(),U=(0,z.v9)((function(e){return e.menu}),z.wU).activeMenu,$=(0,l.useState)("all"),q=(0,r.Z)($,2),Q=q[0],G=q[1],J=(0,l.useState)(null),X=(0,r.Z)(J,2),Y=X[0],ee=X[1],ne=(0,l.useState)(null),te=(0,r.Z)(ne,2),ae=te[0],ie=te[1],ce=(null===(e=U.data)||void 0===e?void 0:e.role)||Q;var re=(0,l.useState)([{title:L("id"),dataIndex:"id",key:"id",is_show:!0},{title:L("name"),dataIndex:"name",key:"name",is_show:!0},{title:L("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,W.jsx)(v.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,W.jsx)(Z.Z,{className:"text-uppercase",color:[D[n]],children:e})}))})}},{title:L("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,W.jsx)(m.Z,{src:e||"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+n.id)}},{title:L("active"),dataIndex:"active",key:"active",is_show:!0,render:function(e,n){return(0,W.jsx)(p.Z,{onChange:function(){ue(!0),ve(n.uuid),ee(!0)},checked:e})}},{title:L("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,W.jsxs)("div",{children:["pending"===e?(0,W.jsx)(Z.Z,{color:"blue",children:L(e)}):"unpublished"===e?(0,W.jsx)(Z.Z,{color:"error",children:L(e)}):(0,W.jsx)(Z.Z,{color:"cyan",children:L(e)}),(0,W.jsx)(o.Z,{onClick:function(){return ie(n)}})]})}},{title:L("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,W.jsxs)(v.Z,{children:[(0,W.jsx)(g.Z,{type:"primary",icon:(0,W.jsx)(o.Z,{}),onClick:function(){return function(e){R((0,V.bL)({url:"recipe-category/edit/".concat(e.uuid),id:"category_edit",name:L("edit.category")})),T("/recipe-category/edit/".concat(e.uuid),{state:"edit"})}(n)}}),(0,W.jsx)(g.Z,{icon:(0,W.jsx)(s.Z,{}),onClick:function(){return e=n.uuid,R((0,V.bL)({id:"category-clone",url:"recipe-category-clone/".concat(e),name:L("category.clone")})),void T("/recipe-category-clone/".concat(e),{state:"clone"});var e}}),(0,W.jsx)(_.Z,{icon:(0,W.jsx)(u.Z,{}),onClick:function(){ve([n.id]),ue(!0),ze(!0)}})]})}}]),le=(0,r.Z)(re,2),oe=le[0],se=le[1],ue=(0,l.useContext)(C._).setIsModalVisible,de=(0,l.useState)(null),he=(0,r.Z)(de,2),fe=he[0],ve=he[1],Ze=(0,l.useState)(!1),me=(0,r.Z)(Ze,2),pe=me[0],ge=me[1],xe=(0,l.useState)(!1),je=(0,r.Z)(xe,2),ye=je[0],Ce=je[1],we=(0,l.useState)(null),be=(0,r.Z)(we,2),ke=be[0],ze=be[1],Ve=(0,z.v9)((function(e){return e.recipeCategory}),z.wU),He=Ve.categories,Se=Ve.meta,_e=Ve.loading,Ie=U.data,Me={search:null===Ie||void 0===Ie?void 0:Ie.search,pageSize:Se.per_page,page:(null===Ie||void 0===Ie?void 0:Ie.page)||1,status:"all"===ce?void 0:ce};(0,l.useEffect)((function(){U.refetch&&(R((0,O.P2)(Me)),R((0,V.A_)(U)))}),[U.refetch]),(0,N.Z)((function(){R((0,O.P2)(Me))}),[U.data]);var Ne={selectedRowKeys:fe,onChange:function(e){ve(e)}},Ae=function(e){var n=U.data;R((0,V.nc)({activeMenu:U,data:(0,c.Z)((0,c.Z)({},n),e)}))};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(x.Z,{className:"p-0",children:(0,W.jsxs)(v.Z,{wrap:!0,size:[14,20],children:[(0,W.jsx)(M.Z,{placeholder:L("search"),className:"w-25",handleChange:function(e){Ae({search:e})},defaultValue:null===(n=U.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=U.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,W.jsx)(_.Z,{size:"",onClick:function(){null===fe||0===fe.length?b.Am.warning(L("select.the.product")):(ue(!0),ze(!1))},children:L("delete.selected")}),(0,W.jsxs)(g.Z,{style:{minWidth:150},onClick:function(){R((0,V.bL)({url:"recipe-categories/import",id:"category_import",name:L("import.category")})),T("/recipe-categories/import")},children:[(0,W.jsx)(A.o5r,{className:"mr-2"}),L("import")]}),(0,W.jsxs)(g.Z,{style:{minWidth:150},loading:ye,onClick:function(){Ce(!0);var e={type:"receipt",status:"all"===Q?void 0:Q};H.Z.export(e).then((function(e){var n=y.S0+e.data.file_name;window.location.href=n})).finally((function(){return Ce(!1)}))},children:[(0,W.jsx)(A.bwQ,{className:"mr-2"}),L("export")]}),(0,W.jsx)(g.Z,{type:"primary",icon:(0,W.jsx)(d.Z,{}),onClick:function(){R((0,V.bL)({id:"category-add",url:"recipe-category/add",name:L("add.category")})),T("/recipe-category/add")},children:L("add.category")}),(0,W.jsx)(g.Z,{icon:(0,W.jsx)(h.Z,{}),onClick:function(){R((0,V.nc)({activeMenu:U,data:void 0}))},disabled:!U.data,style:{minWidth:100}}),(0,W.jsx)(I.Z,{columns:oe,setColumns:se})]})}),(0,W.jsxs)(x.Z,{title:L("categories"),children:[(0,W.jsx)(f.Z,{className:"mt-3",activeKey:ce,onChange:function(e){Ae({role:e,page:1}),G(e)},type:"card",children:K.map((function(e){return(0,W.jsx)(F,{tab:L(e)},e)}))}),(0,W.jsx)(j.Z,{scroll:{x:!0},rowSelection:Ne,columns:null===oe||void 0===oe?void 0:oe.filter((function(e){return e.is_show})),dataSource:He,pagination:{pageSize:Se.per_page,page:(null===Ie||void 0===Ie?void 0:Ie.page)||1,total:Se.total,defaultCurrent:null===Ie||void 0===Ie?void 0:Ie.page,current:null===(E=U.data)||void 0===E?void 0:E.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,i=e.current,r=t.field,l=t.order,o=(0,P.Z)(l);R((0,V.nc)({activeMenu:U,data:(0,c.Z)((0,c.Z)({},U.data),{},{perPage:a,page:i,column:r,sort:o})}))},loading:_e})]}),(0,W.jsx)(k.Z,{click:Y?function(){ge(!0),H.Z.setActive(fe).then((function(){ue(!1),R((0,O.P2)(Me)),b.Am.success(L("successfully.updated")),ee(!1)})).finally((function(){return ge(!1)}))}:function(){ge(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(fe.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));H.Z.delete(e).then((function(){R((0,O.P2)(Me)),b.Am.success(L("successfully.deleted"))})).finally((function(){ue(!1),ge(!1),ze(null),ve(null)}))},text:L(Y?"set.active.product":ke?"delete":"all.delete"),setText:ve,setActive:ee,loading:pe}),ae&&(0,W.jsx)(B,{data:ae,handleCancel:function(){return ie(null)},paramsData:Me})]})}},15386:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},r=t(17469),l=function(e,n){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:c}))};l.displayName="ClearOutlined";var o=i.forwardRef(l)},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),l=function(e,n){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:c}))};l.displayName="PlusCircleOutlined";var o=i.forwardRef(l)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),l=function(e,n){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:c}))};l.displayName="TableOutlined";var o=i.forwardRef(l)}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8643],{55940:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(1413),i=n(45987),c=(n(47313),n(59491)),r=n(47515),l=n(23560),o=n(24511),s=n(79492),u=n(46417),d=["size","onClick","type"];function f(e){var t=e.size,n=void 0===t?"":t,f=e.onClick,h=e.type,v=void 0===h?"default":h,m=(0,i.Z)(e,d),Z=(0,o.$)().t,g=(0,s.Z)().isDemo;return(0,u.jsx)(c.Z,(0,a.Z)({size:n,icon:(0,u.jsx)(r.Z,{}),onClick:function(e){g?l.Am.warning(Z("cannot.work.demo")):f(e)},type:v},m))}},53233:function(e,t,n){var a=n(1413),i=n(29439),c=n(47313),r=n(56140),l=n(67251),o=n(45705),s=n(86345),u=n(78267),d=n(37388),f=n(59491),h=n(99587),v=n(24511),m=n(46417),Z=r.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,r=e.setColumns,g=e.style,p=e.size,x=void 0===p?"":p,y=e.iconOnly,j=(0,v.$)().t,w=(0,c.useState)(!1),C=(0,i.Z)(w,2),z=C[0],b=C[1],k=(0,m.jsx)(l.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,m.jsx)(l.Z.Item,{children:(0,m.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));r(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,m.jsx)(u.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){b(e)},visible:z,children:(0,m.jsx)(d.Z,{title:j("change.columns"),children:(0,m.jsx)(f.Z,{style:(0,a.Z)({},g),size:x,icon:(0,m.jsx)(h.Z,{}),children:y?null:j("Columns")})})})}},41481:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(1413),i=n(29439),c=n(45987),r=n(47313),l=n(66672),o=n(16031),s=n(40765),u=n(46417),d=["handleChange","defaultValue","resetSearch"];function f(e){var t=e.handleChange,n=e.defaultValue,f=e.resetSearch,h=(0,c.Z)(e,d),v=(0,r.useState)(n),m=(0,i.Z)(v,2),Z=m[0],g=m[1],p=(0,r.useMemo)((function(){return(0,o.debounce)((function(e){t(e)}),800)}),[]);return(0,r.useEffect)((function(){g(n)}),[f]),(0,u.jsx)(l.Z,(0,a.Z)({value:Z,onChange:function(e){g(e.target.value),p(e.target.value)},prefix:(0,u.jsx)(s.Z,{})},h))}},13945:function(e,t,n){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return a}})},8643:function(e,t,n){n.r(t);var a=n(4942),i=n(93433),c=n(1413),r=n(29439),l=n(47313),o=n(12019),s=n(66407),u=n(47515),d=n(15386),f=n(55768),h=n(73591),v=n(45705),m=n(66204),Z=n(26824),g=n(86345),p=n(59491),x=n(77181),y=n(78508),j=n(97421),w=n(74580),C=n(97890),z=n(23560),b=n(69658),k=n(2717),V=n(90954),H=n(47647),S=n(24511),_=n(55940),M=n(53233),I=n(41481),N=n(80314),A=n(3925),O=n(13945),E=n(74380),L=n(46417),R=["blue","red","gold","volcano","cyan","lime"],T=h.Z.TabPane,W=["all","pending","published","unpublished"];t.default=function(){var e,t,n,B,K=(0,S.$)().t,P=(0,k.I0)(),$=(0,C.s0)(),U=(0,k.v9)((function(e){return e.menu}),k.wU).activeMenu,D=(0,l.useState)("all"),F=(0,r.Z)(D,2),Q=F[0],q=F[1],G=(0,l.useState)(null),J=(0,r.Z)(G,2),X=J[0],Y=J[1],ee=(null===(e=U.data)||void 0===e?void 0:e.role)||Q;var te=(0,l.useState)([{title:K("id"),dataIndex:"id",key:"id",is_show:!0},{title:K("name"),dataIndex:"name",key:"name",is_show:!0},{title:K("translations"),dataIndex:"locales",is_show:!0,render:function(e,t){var n;return(0,L.jsx)(v.Z,{children:null===(n=t.locales)||void 0===n?void 0:n.map((function(e,t){return(0,L.jsx)(m.Z,{className:"text-uppercase",color:[R[t]],children:e})}))})}},{title:K("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,t){return(0,L.jsx)(Z.Z,{src:e||"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+t.id)}},{title:K("active"),dataIndex:"active",key:"active",is_show:!0,render:function(e,t){return(0,L.jsx)(g.Z,{onChange:function(){ce(!0),se(t.uuid),Y(!0)},checked:e})}},{title:K("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,t){return(0,L.jsxs)(v.Z,{children:[(0,L.jsx)(p.Z,{type:"primary",icon:(0,L.jsx)(o.Z,{}),onClick:function(){return function(e){P((0,V.bL)({url:"seller/recipe-category/edit/".concat(e.uuid),id:"category_edit",name:K("edit.category")})),$("/seller/recipe-category/edit/".concat(e.uuid),{state:"edit"})}(t)}}),(0,L.jsx)(p.Z,{icon:(0,L.jsx)(s.Z,{}),onClick:function(){return e=t.uuid,P((0,V.bL)({id:"category-clone",url:"seller/recipe-category-clone/".concat(e),name:K("category.clone")})),void $("/seller/recipe-category-clone/".concat(e),{state:"clone"});var e}}),(0,L.jsx)(_.Z,{icon:(0,L.jsx)(u.Z,{}),onClick:function(){se([t.id]),ce(!0),je(!0)}})]})}}]),ne=(0,r.Z)(te,2),ae=ne[0],ie=ne[1],ce=(0,l.useContext)(w._).setIsModalVisible,re=(0,l.useState)(null),le=(0,r.Z)(re,2),oe=le[0],se=le[1],ue=(0,l.useState)(!1),de=(0,r.Z)(ue,2),fe=de[0],he=de[1],ve=(0,l.useState)(!1),me=(0,r.Z)(ve,2),Ze=me[0],ge=me[1],pe=(0,l.useState)(null),xe=(0,r.Z)(pe,2),ye=xe[0],je=xe[1],we=(0,k.v9)((function(e){return e.recipeCategory}),k.wU),Ce=we.categories,ze=we.meta,be=we.loading,ke=U.data,Ve={search:null===ke||void 0===ke?void 0:ke.search,pageSize:ze.per_page,page:(null===ke||void 0===ke?void 0:ke.page)||1,status:"all"===ee?void 0:ee};(0,l.useEffect)((function(){U.refetch&&(P((0,E.wr)(Ve)),P((0,V.A_)(U)))}),[U.refetch]),(0,N.Z)((function(){P((0,E.wr)(Ve))}),[U.data]);var He={selectedRowKeys:oe,onChange:function(e){se(e)}},Se=function(e){var t=U.data;P((0,V.nc)({activeMenu:U,data:(0,c.Z)((0,c.Z)({},t),e)}))};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x.Z,{className:"p-0",children:(0,L.jsxs)(v.Z,{wrap:!0,size:[14,20],children:[(0,L.jsx)(I.Z,{placeholder:K("search"),className:"w-25",handleChange:function(e){Se({search:e})},defaultValue:null===(t=U.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(n=U.data)&&void 0!==n&&n.search),style:{minWidth:300}}),(0,L.jsx)(_.Z,{size:"",onClick:function(){null===oe||0===oe.length?z.Am.warning(K("select.the.product")):(ce(!0),je(!1))},children:K("delete.selected")}),(0,L.jsxs)(p.Z,{style:{minWidth:150},onClick:function(){P((0,V.bL)({url:"seller/recipe-categories/import",id:"category_import",name:K("import.category")})),$("/seller/recipe-categories/import")},children:[(0,L.jsx)(A.o5r,{className:"mr-2"}),K("import")]}),(0,L.jsxs)(p.Z,{style:{minWidth:150},loading:Ze,onClick:function(){ge(!0),H.Z.export().then((function(e){var t=j.S0+e.data.file_name;window.location.href=t})).finally((function(){return ge(!1)}))},children:[(0,L.jsx)(A.bwQ,{className:"mr-2"}),K("export")]}),(0,L.jsx)(p.Z,{icon:(0,L.jsx)(d.Z,{}),onClick:function(){P((0,V.nc)({activeMenu:U,data:void 0}))},disabled:!U.data,style:{minWidth:100}}),(0,L.jsx)(p.Z,{type:"primary",icon:(0,L.jsx)(f.Z,{}),onClick:function(){P((0,V.bL)({id:"category-add",url:"seller/recipe-category/add",name:K("add.category")})),$("/seller/recipe-category/add")},children:K("add.category")}),(0,L.jsx)(M.Z,{columns:ae,setColumns:ie})]})}),(0,L.jsxs)(x.Z,{title:K("categories"),children:[(0,L.jsx)(h.Z,{className:"mt-3",activeKey:ee,onChange:function(e){Se({role:e,page:1}),q(e)},type:"card",children:W.map((function(e){return(0,L.jsx)(T,{tab:K(e)},e)}))}),(0,L.jsx)(y.Z,{scroll:{x:!0},rowSelection:He,columns:null===ae||void 0===ae?void 0:ae.filter((function(e){return e.is_show})),dataSource:Ce,pagination:{pageSize:ze.per_page,page:(null===ke||void 0===ke?void 0:ke.page)||1,total:ze.total,defaultCurrent:null===ke||void 0===ke?void 0:ke.page,current:null===(B=U.data)||void 0===B?void 0:B.page},rowKey:function(e){return e.id},onChange:function(e,t,n){var a=e.pageSize,i=e.current,r=n.field,l=n.order,o=(0,O.Z)(l);P((0,V.nc)({activeMenu:U,data:(0,c.Z)((0,c.Z)({},U.data),{},{perPage:a,page:i,column:r,sort:o})}))},loading:be})]}),(0,L.jsx)(b.Z,{click:X?function(){he(!0),H.Z.setActive(oe).then((function(){he(!1),P((0,E.wr)(Ve)),ce(!1)}))}:function(){he(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(oe.map((function(e,t){return(0,a.Z)({},"ids[".concat(t,"]"),e)}))))));H.Z.delete(e).then((function(){P((0,E.wr)(Ve)),z.Am.success(K("successfully.deleted"))})).finally((function(){ce(!1),he(!1),je(null),se(null)}))},text:K(X?"set.active.product":ye?"delete":"all.delete"),setText:se,setActive:Y,loading:fe})]})}},15386:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1413),i=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},r=n(17469),l=function(e,t){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:c}))};l.displayName="ClearOutlined";var o=i.forwardRef(l)},55768:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1413),i=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=n(17469),l=function(e,t){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:c}))};l.displayName="PlusCircleOutlined";var o=i.forwardRef(l)},99587:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1413),i=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=n(17469),l=function(e,t){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:c}))};l.displayName="TableOutlined";var o=i.forwardRef(l)}}]);
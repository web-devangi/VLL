"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3541],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(45987),c=(t(47313),t(59491)),u=t(47515),r=t(23560),s=t(24511),o=t(79492),l=t(46417),d=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,a.Z)(e,d),m=(0,s.$)().t,x=(0,o.Z)().isDemo;return(0,l.jsx)(c.Z,(0,i.Z)({size:t,icon:(0,l.jsx)(u.Z,{}),onClick:function(e){x?r.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),a=t(29439),c=t(47313),u=t(56140),r=t(67251),s=t(45705),o=t(86345),l=t(78267),d=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=u.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,u=e.setColumns,x=e.style,p=e.size,g=void 0===p?"":p,j=e.iconOnly,w=(0,v.$)().t,C=(0,c.useState)(!1),y=(0,a.Z)(C,2),z=y[0],S=y[1],k=(0,Z.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(r.Z.Item,{children:(0,Z.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(o.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));u(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(l.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){S(e)},visible:z,children:(0,Z.jsx)(d.Z,{title:w("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},x),size:g,icon:(0,Z.jsx)(h.Z,{}),children:j?null:w("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(29439),c=t(45987),u=t(47313),r=t(66672),s=t(16031),o=t(40765),l=t(46417),d=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,c.Z)(e,d),v=(0,u.useState)(t),Z=(0,a.Z)(v,2),m=Z[0],x=Z[1],p=(0,u.useMemo)((function(){return(0,s.debounce)((function(e){n(e)}),800)}),[]);return(0,u.useEffect)((function(){x(t)}),[f]),(0,l.jsx)(r.Z,(0,i.Z)({value:m,onChange:function(e){x(e.target.value),p(e.target.value)},prefix:(0,l.jsx)(o.Z,{})},h))}},53541:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var i=t(4942),a=t(93433),c=t(1413),u=t(29439),r=t(47313),s=t(12019),o=t(55768),l=t(86345),d=t(45705),f=t(59491),h=t(77181),v=t(78508),Z=t(97890),m=t(23560),x=t(74580),p=t(69658),g=t(2717),j=t(90954),w=t(31055),C=t(40901),y=t(24511),z=t(53233),S=t(55940),k=t(41481),b=t(80314),V=t(46417);function H(){var e,n,t=(0,y.$)().t,H=(0,g.I0)(),I=(0,Z.s0)(),_=(0,r.useState)(null),M=(0,u.Z)(_,2),A=M[0],N=M[1],O=(0,r.useState)(!1),E=(0,u.Z)(O,2),P=E[0],R=E[1],T=(0,r.useContext)(x._).setIsModalVisible,$=(0,r.useState)(null),B=(0,u.Z)($,2),K=B[0],L=B[1],U=(0,r.useState)(null),D=(0,u.Z)(U,2),q=D[0],F=D[1],G=(0,r.useState)([{title:t("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:t("name"),dataIndex:"translation",is_show:!0,render:function(e){return null===e||void 0===e?void 0:e.title}},{title:t("position"),dataIndex:"position",is_show:!0},{title:t("active"),dataIndex:"active",is_show:!0,render:function(e,n){return(0,V.jsx)(l.Z,{onChange:function(){T(!0),N([n.id]),F(!0)},checked:e})}},{title:t("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,V.jsxs)(d.Z,{children:[(0,V.jsx)(f.Z,{type:"primary",icon:(0,V.jsx)(s.Z,{}),onClick:function(){return function(e){H((0,j.bL)({id:"unit-edit",url:"unit/".concat(e.id),name:t("edit.unit")})),I("/unit/".concat(e.id))}(n)}}),(0,V.jsx)(S.Z,{onClick:function(){N([n.id]),T(!0),L(!0),F(!1)}})]})}}]),J=(0,u.Z)(G,2),Q=J[0],W=J[1],X=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,Y=(0,g.v9)((function(e){return e.unit}),g.wU),ee=Y.units,ne=Y.meta,te=Y.loading,ie=Y.params;(0,r.useEffect)((function(){X.refetch&&(H((0,C.S)()),H((0,j.A_)(X)))}),[X.refetch]);var ae={selectedRowKeys:A,onChange:function(e){N(e)}};return(0,b.Z)((function(){var e=X.data,n={search:null===e||void 0===e?void 0:e.search};H((0,C.S)(n))}),[X.data]),(0,V.jsxs)(h.Z,{title:t("units"),extra:(0,V.jsxs)(d.Z,{wrap:!0,children:[(0,V.jsx)(f.Z,{type:"primary",onClick:function(){H((0,j.bL)({id:"unit-add",url:"unit/add",name:t("add.unit")})),I("/unit/add")},icon:(0,V.jsx)(o.Z,{}),children:t("add.unit")}),(0,V.jsx)(S.Z,{size:"",onClick:function(){null===A||0===A.length?m.Am.warning(t("select.the.product")):(T(!0),L(!1))},children:t("delete.selected")}),(0,V.jsx)(z.Z,{columns:Q,setColumns:W})]}),children:[(0,V.jsx)("div",{className:"d-flex justify-content-between",children:(0,V.jsx)(k.Z,{placeholder:t("search"),className:"w-25",handleChange:function(e){return n=e,t="search",void H((0,j.nc)({activeMenu:X,data:(0,c.Z)((0,c.Z)({},X.data),{},(0,i.Z)({},t,n))}));var n,t},defaultValue:null===(e=X.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(n=X.data)&&void 0!==n&&n.search)})}),(0,V.jsx)(v.Z,{scroll:{x:!0},rowSelection:ae,loading:te,columns:null===Q||void 0===Q?void 0:Q.filter((function(e){return e.is_show})),dataSource:ee,pagination:{pageSize:ie.perPage,page:ie.page,total:ne.total,defaultCurrent:ie.page},onChange:function(e,n){var t=e.pageSize,i=e.current,a=n.field,u=function(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}(n.order);H((0,C.S)((0,c.Z)((0,c.Z)({},ie),{},{perPage:t,page:i,column:a,sort:u})))},rowKey:function(e){return e.id}}),(0,V.jsx)(p.Z,{click:q?function(){R(!0);var e=A.find((function(e){return e}));w.Z.setActive(e).then((function(){T(!1),H((0,C.S)()),N([]),F(!1),m.Am.success(t("successfully.updated"))})).finally((function(){return R(!1)}))}:function(){R(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(A.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));w.Z.delete(e).then((function(){m.Am.success(t("successfully.deleted")),T(!1),L(null),F(!1),H((0,C.S)())})).finally((function(){return R(!1)}))},text:t(q?"set.active.food":K?"delete":"all.delete"),loading:P,setText:N,setActive:F})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},u=t(17469),r=function(e,n){return a.createElement(u.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};r.displayName="PlusCircleOutlined";var s=a.forwardRef(r)},99587:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},u=t(17469),r=function(e,n){return a.createElement(u.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};r.displayName="TableOutlined";var s=a.forwardRef(r)}}]);
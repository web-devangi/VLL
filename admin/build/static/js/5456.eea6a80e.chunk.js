"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5456],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),l=t(45987),o=(t(47313),t(59491)),u=t(47515),a=t(23560),r=t(24511),c=t(79492),s=t(46417),d=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,p=void 0===f?"default":f,h=(0,l.Z)(e,d),Z=(0,r.$)().t,x=(0,c.Z)().isDemo;return(0,s.jsx)(o.Z,(0,i.Z)({size:t,icon:(0,s.jsx)(u.Z,{}),onClick:function(e){x?a.Am.warning(Z("cannot.work.demo")):v(e)},type:p},h))}},53233:function(e,n,t){var i=t(1413),l=t(29439),o=t(47313),u=t(56140),a=t(67251),r=t(45705),c=t(86345),s=t(78267),d=t(37388),v=t(59491),f=t(99587),p=t(24511),h=t(46417),Z=u.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,u=e.setColumns,x=e.style,m=e.size,g=void 0===m?"":m,j=e.iconOnly,y=(0,p.$)().t,C=(0,o.useState)(!1),w=(0,l.Z)(C,2),b=w[0],k=w[1],_=(0,h.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)(a.Z.Item,{children:(0,h.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(Z,{children:e.title}),(0,h.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));u(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,h.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:b,children:(0,h.jsx)(d.Z,{title:y("change.columns"),children:(0,h.jsx)(v.Z,{style:(0,i.Z)({},x),size:g,icon:(0,h.jsx)(f.Z,{}),children:j?null:y("Columns")})})})}},49655:function(e,n,t){t.d(n,{_:function(){return x}});var i=t(1413),l=t(93433),o=t(15861),u=t(29439),a=t(45987),r=t(87757),c=t.n(r),s=t(47313),d=t(12279),v=t.n(d),f=t(74294),p=t(72652),h=t(46417),Z=["fetchOptions","debounceTimeout","hasMore"],x=function(e){var n=e.fetchOptions,t=e.debounceTimeout,r=void 0===t?400:t,d=e.hasMore,x=(0,a.Z)(e,Z),m=(0,s.useState)(!1),g=(0,u.Z)(m,2),j=g[0],y=g[1],C=(0,s.useState)([]),w=(0,u.Z)(C,2),b=w[0],k=w[1],_=(0,s.useState)(!1),S=(0,u.Z)(_,2),V=S[0],z=S[1],O=(0,s.useState)(null),H=(0,u.Z)(O,2),I=H[0],M=H[1],F=(0,s.useState)(1),A=(0,u.Z)(F,2),T=A[0],N=A[1],P=(0,s.useMemo)((function(){return v()((function(e){k([]),M(e),y(!0),n({search:e}).then((function(e){k(e),N(2),y(!1)})).finally((function(){return z(!1)}))}),r)}),[n,r,T]),q=function(){var e=(0,o.Z)(c().mark((function e(t){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.target,V||i.scrollTop+i.offsetHeight!==i.scrollHeight||d&&(z(!0),i.scrollTo(0,i.scrollHeight),n({search:I,page:T}).then((function(e){N((function(e){return e+1})),k([].concat((0,l.Z)(b),(0,l.Z)(e)))})).finally((function(){return z(!1)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)(f.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,onPopupScroll:q,labelInValue:!0,filterOption:!1,onSearch:P,notFoundContent:j?(0,h.jsx)(p.Z,{size:"small"}):"no results",onFocus:function(){b.length||P("")}},x),{},{children:[b.map((function(e,n){return(0,h.jsx)(f.Z.Option,{value:e.value,children:e.label},n)})),V&&(0,h.jsx)(f.Z.Option,{children:(0,h.jsx)(p.Z,{size:"small"})})]}))}},89281:function(e,n,t){t.d(n,{h:function(){return f}});var i=t(1413),l=t(29439),o=t(45987),u=t(47313),a=t(12279),r=t.n(a),c=t(74294),s=t(72652),d=t(46417),v=["fetchOptions","debounceTimeout","onClear","refetchOptions"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,a=void 0===t?400:t,f=e.onClear,p=e.refetchOptions,h=void 0!==p&&p,Z=(0,o.Z)(e,v),x=(0,u.useState)(!1),m=(0,l.Z)(x,2),g=m[0],j=m[1],y=(0,u.useState)([]),C=(0,l.Z)(y,2),w=C[0],b=C[1],k=(0,u.useMemo)((function(){return r()((function(e){b([]),j(!0),n(e).then((function(e){b(e),j(!1)}))}),a)}),[n,a]);return(0,d.jsx)(c.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),f&&f()},notFoundContent:g?(0,d.jsx)(s.Z,{size:"small"}):"no results"},Z),{},{options:w,onFocus:function(){w.length&&!h||k("")}}))}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},21726:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(29439),l=t(10976),o=t(66672),u=t(9274),a=t(59491),r=t(47313),c=t(8922),s=t(24511),d=t(2717),v=t(23560),f=t(20503),p=t(8550),h=t(34319),Z=t(5170),x=t(89281),m=t(46417);function g(e){var n,t,g,j,y=e.modal,C=e.handleCancel,w=e.isVisible,b=e.paramsData,k=l.Z.useForm(),_=(0,i.Z)(k,1)[0],S=(0,s.$)().t,V=(0,d.I0)(),z=(0,r.useState)(!1),O=(0,i.Z)(z,2),H=O[0],I=O[1],M=(0,r.useState)("text"),F=(0,i.Z)(M,2),A=F[0],T=F[1],N=(0,r.useState)(null),P=(0,i.Z)(N,2),q=P[0],E=P[1],R=(0,r.useState)(""),$=(0,i.Z)(R,2),D=$[0],B=$[1];(0,r.useEffect)((function(){if(null!==y&&void 0!==y&&y.id){switch(T(y.group.type),y.group.type){case"color":B(y.value);break;case"image":E((0,p.Z)(y.value))}_.setFieldsValue(y)}}),[y]);function G(e,n){switch(e){case"color":return n.hex;case"text":return n;case"image":return n.name;default:return""}}return(0,m.jsx)(u.Z,{title:null!==y&&void 0!==y&&y.id?S("edit.extra"):S("add.extra"),visible:w,onCancel:C,footer:[(0,m.jsx)(a.Z,{type:"primary",onClick:function(){return _.submit()},loading:H,children:S("save")}),(0,m.jsx)(a.Z,{type:"default",onClick:C,children:S("cancel")})],children:(0,m.jsxs)(l.Z,{name:"extra-form",layout:"vertical",form:_,onFinish:function(e){var n,t,i={extra_group_id:null!==(n=e.extra_group_id.value)&&void 0!==n?n:e.extra_group_id,value:null!==(t=G(A,e.value))&&void 0!==t?t:e.value};null!==y&&void 0!==y&&y.id?function(e,n){I(!0),Z.Z.updateValue(e,n).then((function(){v.Am.success(S("successfully.updated")),C(),V((0,h.pZ)(b))})).finally((function(){I(!1),_.resetFields()}))}(null===y||void 0===y?void 0:y.id,i):function(e){I(!0),Z.Z.createValue(e).then((function(){v.Am.success(S("successfully.created")),C(),V((0,h.pZ)(b))})).finally((function(){I(!1),_.resetFields()}))}(i)},initialValues:{extra_group_id:null!==y&&void 0!==y&&y.group?{label:null===y||void 0===y||null===(n=y.group)||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title,value:null===y||void 0===y||null===(g=y.group)||void 0===g?void 0:g.id,key:null===y||void 0===y||null===(j=y.group)||void 0===j?void 0:j.id}:[]},children:[(0,m.jsx)(l.Z.Item,{name:"extra_group_id",label:S("extra.group"),rules:[{required:!0,message:"required"}],children:(0,m.jsx)(x.h,{fetchOptions:function(e){var n={perPage:10,page:1,search:e};return Z.Z.getAllGroups(n).then((function(e){return e.data.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:null===e||void 0===e?void 0:e.id,key:"".concat(null===e||void 0===e?void 0:e.type,",").concat(null===e||void 0===e?void 0:e.id)}}))}))},placeholder:S("select.extra.group"),allowClear:!0,onChange:function(e){var n;T(null===e||void 0===e||null===(n=e.key)||void 0===n?void 0:n.split(",")[0]),_.setFieldsValue({value:""})}})}),(0,m.jsx)(l.Z.Item,{name:"value",label:S("value"),rules:[{required:!0,message:"required"}],children:function(e){switch(e){case"color":return(0,m.jsx)(c.xS,{onChangeComplete:function(e){return B(e.hex)},color:D,disableAlpha:!0});case"text":return(0,m.jsx)(o.Z,{placeholder:S("enter.extra.value")});case"image":return(0,m.jsx)(f.Z,{type:"extras",image:q,setImage:E,form:_,name:"value"});default:return""}}(A)})]})})}},65456:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(15861),l=t(4942),o=t(93433),u=t(1413),a=t(29439),r=t(87757),c=t.n(r),s=t(47313),d=t(45705),v=t(26824),f=t(59491),p=t(77181),h=t(78508),Z=t(12019),x=t(47515),m=t(55768),g=t(23560),j=t(24511),y=t(2717),C=t(34319),w=t(5170),b=t(21726),k=t(55940),_=t(97421),S=t(90954),V=t(53233),z=t(13945),O=t(80314),H=t(49655),I=t(74580),M=t(69658),F=t(46417);function A(){var e,n,t,r,A,T,N,P=(0,j.$)().t,q=(0,y.I0)(),E=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,R=(0,y.v9)((function(e){return e.extraValue}),y.wU),$=R.extraValues,D=R.loading,B=R.meta,G=(0,s.useContext)(I._).setIsModalVisible,K={perPage:(null===E||void 0===E||null===(e=E.data)||void 0===e?void 0:e.perPage)||10,page:(null===E||void 0===E||null===(n=E.data)||void 0===n?void 0:n.page)||1,group_id:(null===E||void 0===E||null===(t=E.data)||void 0===t?void 0:t.group_id)||null},U=(0,s.useState)(null),W=(0,a.Z)(U,2),J=W[0],L=W[1],Q=(0,s.useState)(null),X=(0,a.Z)(Q,2),Y=X[0],ee=X[1],ne=(0,s.useState)(!1),te=(0,a.Z)(ne,2),ie=te[0],le=te[1],oe=(0,s.useState)(null),ue=(0,a.Z)(oe,2),ae=ue[0],re=ue[1],ce=(0,s.useState)([{title:P("id"),dataIndex:"id",key:"id",is_show:!0},{title:P("title"),dataIndex:"extra_group_id",key:"extra_group_id",is_show:!0,render:function(e,n){var t,i;return null===n||void 0===n||null===(t=n.group)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title}},{title:P("value"),dataIndex:"value",key:"value",is_show:!0,render:function(e,n){var t,i,l;return(0,F.jsxs)(d.Z,{className:"extras",children:["color"===(null===n||void 0===n||null===(t=n.group)||void 0===t?void 0:t.type)?(0,F.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:null===n||void 0===n?void 0:n.value}}):null,"image"===(null===n||void 0===n||null===(i=n.group)||void 0===i?void 0:i.type)?(0,F.jsx)(v.Z,{width:100,src:_.bV+(null===n||void 0===n?void 0:n.value),className:"borderRadius"}):null,"image"===(null===n||void 0===n||null===(l=n.group)||void 0===l?void 0:l.type)?null:(0,F.jsx)("span",{children:null===n||void 0===n?void 0:n.value})]})}},{title:P("options"),is_show:!0,render:function(e){return(0,F.jsxs)(d.Z,{children:[(0,F.jsx)(f.Z,{type:"primary",icon:(0,F.jsx)(Z.Z,{}),onClick:function(){return ee(e)}}),(0,F.jsx)(k.Z,{type:"primary",danger:!0,icon:(0,F.jsx)(x.Z,{}),onClick:function(){L([e.id]),G(!0),re(!0)}})]})}}]),se=(0,a.Z)(ce,2),de=se[0],ve=se[1];function fe(){return(fe=(0,i.Z)(c().mark((function e(n){var t,i,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.search,i=n.page,l={search:0===(null===t||void 0===t?void 0:t.length)?void 0:t,page:i},e.abrupt("return",w.Z.getAllGroups(l).then((function(e){return e.data.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,O.Z)((function(){q((0,C.pZ)(K))}),[E.data]),(0,s.useEffect)((function(){E.refetch&&(q((0,C.pZ)(K)),q((0,S.A_)(E)))}),[E.refetch]);var pe={selectedRowKeys:J,onChange:function(e){L(e)}};return(0,F.jsxs)(p.Z,{title:P("extra.value"),extra:(0,F.jsxs)(d.Z,{wrap:!0,children:[(0,F.jsx)(H._,{placeholder:P("select.group"),fetchOptions:function(e){return fe.apply(this,arguments)},loading:D,style:{minWidth:180},onChange:function(e){return function(e){var n=E.data;q((0,S.nc)({activeMenu:E,data:(0,u.Z)((0,u.Z)({},n),e)}))}({group_id:null===e||void 0===e?void 0:e.value})},value:null===(r=E.data)||void 0===r?void 0:r.group_id}),(0,F.jsx)(k.Z,{icon:(0,F.jsx)(x.Z,{}),onClick:function(){null===J||0===J.length?g.Am.warning(P("select.the.product")):(G(!0),re(!1))},children:P("delete.selected")}),(0,F.jsx)(f.Z,{type:"primary",icon:(0,F.jsx)(m.Z,{}),onClick:function(){return ee({})},children:P("add.extra")}),(0,F.jsx)(V.Z,{columns:de,setColumns:ve})]}),children:[(0,F.jsx)(h.Z,{scroll:{x:!0},loading:D,columns:null===de||void 0===de?void 0:de.filter((function(e){return e.is_show})),rowSelection:pe,dataSource:$,rowKey:function(e){return e.id},pagination:{pageSize:10,page:(null===(A=E.data)||void 0===A?void 0:A.page)||1,total:B.total,defaultCurrent:null===(T=E.data)||void 0===T?void 0:T.page,current:null===(N=E.data)||void 0===N?void 0:N.page},onChange:function(e,n,t){var i=e.pageSize,l=e.current,o=t.field,a=t.order,r=(0,z.Z)(a);q((0,S.nc)({activeMenu:E,data:(0,u.Z)((0,u.Z)({},E.data),{},{perPage:i,page:l,column:o,sort:r})}))}}),Y&&(0,F.jsx)(b.Z,{isVisible:Y,modal:Y,handleCancel:function(){return ee(null)},paramsData:K}),(0,F.jsx)(M.Z,{click:function(){le(!0);var e=(0,u.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(J.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));w.Z.deleteValue(e).then((function(){g.Am.success(P("successfully.deleted")),L(null),q((0,C.pZ)(K))})).finally((function(){G(!1),le(!1),L(null)}))},text:P(ae?"delete":"all.delete"),loading:ie,setText:L})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),l=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},u=t(17469),a=function(e,n){return l.createElement(u.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:o}))};a.displayName="PlusCircleOutlined";var r=l.forwardRef(a)},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),l=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},u=t(17469),a=function(e,n){return l.createElement(u.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:o}))};a.displayName="TableOutlined";var r=l.forwardRef(a)}}]);
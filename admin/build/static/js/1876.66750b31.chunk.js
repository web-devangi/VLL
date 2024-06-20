"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1876],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var l=t(1413),i=t(45987),o=(t(47313),t(59491)),u=t(47515),a=t(23560),r=t(24511),c=t(79492),s=t(46417),d=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,p=void 0===f?"default":f,h=(0,i.Z)(e,d),x=(0,r.$)().t,Z=(0,c.Z)().isDemo;return(0,s.jsx)(o.Z,(0,l.Z)({size:t,icon:(0,s.jsx)(u.Z,{}),onClick:function(e){Z?a.Am.warning(x("cannot.work.demo")):v(e)},type:p},h))}},53233:function(e,n,t){var l=t(1413),i=t(29439),o=t(47313),u=t(56140),a=t(67251),r=t(45705),c=t(86345),s=t(78267),d=t(37388),v=t(59491),f=t(99587),p=t(24511),h=t(46417),x=u.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,u=e.setColumns,Z=e.style,m=e.size,g=void 0===m?"":m,j=e.iconOnly,y=(0,p.$)().t,C=(0,o.useState)(!1),w=(0,i.Z)(C,2),b=w[0],k=w[1],V=(0,h.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)(a.Z.Item,{children:(0,h.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(x,{children:e.title}),(0,h.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));u(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,h.jsx)(s.Z,{overlay:V,trigger:["click"],onVisibleChange:function(e){k(e)},visible:b,children:(0,h.jsx)(d.Z,{title:y("change.columns"),children:(0,h.jsx)(v.Z,{style:(0,l.Z)({},Z),size:g,icon:(0,h.jsx)(f.Z,{}),children:j?null:y("Columns")})})})}},89281:function(e,n,t){t.d(n,{h:function(){return f}});var l=t(1413),i=t(29439),o=t(45987),u=t(47313),a=t(12279),r=t.n(a),c=t(74294),s=t(72652),d=t(46417),v=["fetchOptions","debounceTimeout","onClear","refetchOptions"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,a=void 0===t?400:t,f=e.onClear,p=e.refetchOptions,h=void 0!==p&&p,x=(0,o.Z)(e,v),Z=(0,u.useState)(!1),m=(0,i.Z)(Z,2),g=m[0],j=m[1],y=(0,u.useState)([]),C=(0,i.Z)(y,2),w=C[0],b=C[1],k=(0,u.useMemo)((function(){return r()((function(e){b([]),j(!0),n(e).then((function(e){b(e),j(!1)}))}),a)}),[n,a]);return(0,d.jsx)(c.Z,(0,l.Z)((0,l.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),f&&f()},notFoundContent:g?(0,d.jsx)(s.Z,{size:"small"}):"no results"},x),{},{options:w,onFocus:function(){w.length&&!h||k("")}}))}},84963:function(e,n,t){t.d(n,{Z:function(){return g}});var l=t(29439),i=t(10976),o=t(66672),u=t(9274),a=t(59491),r=t(47313),c=t(8922),s=t(24511),d=t(2717),v=t(23560),f=t(20503),p=t(8550),h=t(34319),x=t(22307),Z=t(89281),m=t(46417);function g(e){var n,t,g,j,y=e.modal,C=e.handleCancel,w=e.isVisible,b=e.paramsData,k=i.Z.useForm(),V=(0,l.Z)(k,1)[0],_=(0,s.$)().t,z=(0,d.I0)(),S=(0,r.useState)(!1),H=(0,l.Z)(S,2),I=H[0],M=H[1],O=(0,r.useState)("text"),A=(0,l.Z)(O,2),F=A[0],N=A[1],P=(0,r.useState)(null),T=(0,l.Z)(P,2),q=T[0],E=T[1],R=(0,r.useState)(""),$=(0,l.Z)(R,2),D=$[0],B=$[1];(0,r.useEffect)((function(){if(null!==y&&void 0!==y&&y.id){switch(N(y.group.type),y.group.type){case"color":B(y.value);break;case"image":E((0,p.Z)(y.value))}V.setFieldsValue(y)}}),[y]);function K(e,n){switch(e){case"color":return n.hex;case"text":return n;case"image":return n.name;default:return""}}return(0,m.jsx)(u.Z,{title:null!==y&&void 0!==y&&y.id?_("edit.extra"):_("add.extra"),visible:w,onCancel:C,footer:[(0,m.jsx)(a.Z,{type:"primary",onClick:function(){return V.submit()},loading:I,children:_("save")}),(0,m.jsx)(a.Z,{type:"default",onClick:C,children:_("cancel")})],children:(0,m.jsxs)(i.Z,{name:"extra-form",layout:"vertical",form:V,onFinish:function(e){var n,t,l={extra_group_id:null!==(n=e.extra_group_id.value)&&void 0!==n?n:e.extra_group_id,value:null!==(t=K(F,e.value))&&void 0!==t?t:e.value};null!==y&&void 0!==y&&y.id?function(e,n){M(!0),x.Z.updateValue(e,n).then((function(){v.Am.success(_("successfully.updated")),C(),z((0,h.MH)(b))})).finally((function(){M(!1),V.resetFields()}))}(y.id,l):function(e){M(!0),x.Z.createValue(e).then((function(){v.Am.success(_("successfully.created")),C(),z((0,h.MH)(b))})).finally((function(){M(!1),V.resetFields()}))}(l)},initialValues:{extra_group_id:null!==y&&void 0!==y&&y.group?{label:null===y||void 0===y||null===(n=y.group)||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title,value:null===y||void 0===y||null===(g=y.group)||void 0===g?void 0:g.id,key:null===y||void 0===y||null===(j=y.group)||void 0===j?void 0:j.id}:[]},children:[(0,m.jsx)(i.Z.Item,{name:"extra_group_id",label:_("extra.group"),rules:[{required:!0,message:"required"}],children:(0,m.jsx)(Z.h,{fetchOptions:function(e){var n={perPage:10,page:1,search:e};return x.Z.getAllGroups(n).then((function(e){return e.data.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:null===e||void 0===e?void 0:e.id,key:"".concat(null===e||void 0===e?void 0:e.type,",").concat(null===e||void 0===e?void 0:e.id)}}))}))},placeholder:_("select.extra.group"),allowClear:!0,onChange:function(e){var n;N(null===e||void 0===e||null===(n=e.key)||void 0===n?void 0:n.split(",")[0]),V.setFieldsValue({value:""})}})}),(0,m.jsx)(i.Z.Item,{name:"value",label:_("value"),rules:[{required:!0,message:"required"}],children:function(e){switch(e){case"color":return(0,m.jsx)(c.xS,{onChangeComplete:function(e){return B(e.hex)},color:D,disableAlpha:!0});case"text":return(0,m.jsx)(o.Z,{placeholder:_("enter.extra.value")});case"image":return(0,m.jsx)(f.Z,{type:"extras",image:q,setImage:E,form:V,name:"value"});default:return""}}(F)})]})})}},81876:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var l=t(4942),i=t(93433),o=t(1413),u=t(29439),a=t(47313),r=t(45705),c=t(26824),s=t(59491),d=t(77181),v=t(78508),f=t(12019),p=t(47515),h=t(55768),x=t(23560),Z=t(24511),m=t(2717),g=t(34319),j=t(22307),y=t(84963),C=t(55940),w=t(97421),b=t(90954),k=t(53233),V=t(80314),_=t(74580),z=t(69658),S=t(46417);function H(){var e,n,t,H=(0,Z.$)().t,I=(0,m.I0)(),M=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,O=(0,m.v9)((function(e){return e.extraValue}),m.wU),A=O.extraValues,F=O.loading,N=O.meta,P=(0,a.useContext)(_._).setIsModalVisible,T=null===M||void 0===M?void 0:M.data,q={perPage:(null===T||void 0===T?void 0:T.perPage)||10,page:(null===T||void 0===T?void 0:T.page)||1,group_id:(null===T||void 0===T?void 0:T.group_id)||null},E=(0,a.useState)(null),R=(0,u.Z)(E,2),$=R[0],D=R[1],B=(0,a.useState)(null),K=(0,u.Z)(B,2),U=K[0],G=K[1],J=(0,a.useState)(!1),L=(0,u.Z)(J,2),Q=L[0],W=L[1],X=(0,a.useState)(null),Y=(0,u.Z)(X,2),ee=Y[0],ne=Y[1],te=(0,a.useState)([{title:H("id"),dataIndex:"id",key:"id",is_show:!0},{title:H("title"),dataIndex:"extra_group_id",key:"extra_group_id",is_show:!0,render:function(e,n){var t,l;return null===n||void 0===n||null===(t=n.group)||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title}},{title:H("value"),dataIndex:"value",key:"value",is_show:!0,render:function(e,n){var t,l,i;return(0,S.jsxs)(r.Z,{className:"extras",children:["color"===(null===n||void 0===n||null===(t=n.group)||void 0===t?void 0:t.type)?(0,S.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:null===n||void 0===n?void 0:n.value}}):null,"image"===(null===n||void 0===n||null===(l=n.group)||void 0===l?void 0:l.type)?(0,S.jsx)(c.Z,{width:100,src:w.bV+(null===n||void 0===n?void 0:n.value),className:"borderRadius"}):null,"image"===(null===n||void 0===n||null===(i=n.group)||void 0===i?void 0:i.type)?null:(0,S.jsx)("span",{children:null===n||void 0===n?void 0:n.value})]})}},{title:H("options"),is_show:!0,render:function(e){return(0,S.jsxs)(r.Z,{children:[(0,S.jsx)(s.Z,{type:"primary",icon:(0,S.jsx)(f.Z,{}),onClick:function(){return G(e)}}),(0,S.jsx)(C.Z,{type:"primary",danger:!0,icon:(0,S.jsx)(p.Z,{}),onClick:function(){D([e.id]),P(!0),ne(!0)}})]})}}]),le=(0,u.Z)(te,2),ie=le[0],oe=le[1];(0,a.useEffect)((function(){M.refetch&&(0,m.dC)((function(){I((0,g.MH)(q)),I((0,b.A_)(M))}))}),[M.refetch]),(0,V.Z)((function(){I((0,g.MH)(q))}),[null===M||void 0===M?void 0:M.data]);var ue={selectedRowKeys:$,onChange:function(e){D(e)}};return(0,S.jsxs)(d.Z,{title:H("extra.value"),extra:(0,S.jsxs)(r.Z,{wrap:!0,children:[(0,S.jsx)(C.Z,{icon:(0,S.jsx)(p.Z,{}),onClick:function(){null===$||0===$.length?x.Am.warning(H("select.the.product")):(P(!0),ne(!1))},children:H("delete.selected")}),(0,S.jsx)(s.Z,{type:"primary",icon:(0,S.jsx)(h.Z,{}),onClick:function(){return G({})},children:H("add.extra")}),(0,S.jsx)(k.Z,{columns:ie,setColumns:oe})]}),children:[(0,S.jsx)(v.Z,{scroll:{x:!0},loading:F,columns:null===ie||void 0===ie?void 0:ie.filter((function(e){return e.is_show})),rowSelection:ue,dataSource:A,rowKey:function(e){return e.id},pagination:{pageSize:10,page:(null===(e=M.data)||void 0===e?void 0:e.page)||1,total:N.total,defaultCurrent:null===(n=M.data)||void 0===n?void 0:n.page,current:null===(t=M.data)||void 0===t?void 0:t.page},onChange:function(e,n,t){var l=e.pageSize,i=e.current,u=t.field;I((0,b.nc)({activeMenu:M,data:(0,o.Z)((0,o.Z)({},M.data),{},{perPage:l,page:i,column:u})}))}}),U&&(0,S.jsx)(y.Z,{isVisible:U,modal:U,handleCancel:function(){return G(null)},paramsData:q}),(0,S.jsx)(z.Z,{click:function(){W(!0);var e=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)($.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));j.Z.deleteValue(e).then((function(){x.Am.success(H("successfully.deleted")),D(null),I((0,g.MH)(q))})).finally((function(){P(!1),W(!1),D(null)}))},text:H(ee?"delete":"all.delete"),loading:Q,setText:D})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return r}});var l=t(1413),i=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},u=t(17469),a=function(e,n){return i.createElement(u.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:o}))};a.displayName="PlusCircleOutlined";var r=i.forwardRef(a)},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var l=t(1413),i=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},u=t(17469),a=function(e,n){return i.createElement(u.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:o}))};a.displayName="TableOutlined";var r=i.forwardRef(a)}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2267],{12267:function(e,n,t){t.r(n);var i=t(4942),a=t(93433),u=t(1413),s=t(29439),l=t(47313),r=t(31741),o=t(47548),c=t(12019),d=t(47515),f=t(55768),h=t(45705),Z=t(59491),x=t(37388),v=t(77181),p=t(78508),m=t(97890),j=t(26672),g=t(2717),k=t(90954),w=t(24511),C=t(13945),y=t(80314),_=t(91405),b=t(10310),S=t(85746),I=t(41481),z=t(53233),M=t(55940),P=t(23560),T=t(74580),A=t(69658),L=t(45321),U=t(79492),V=t(4014),K=t(46417);n.default=function(){var e,n,t,N,O,R=(0,w.$)().t,D=(0,g.I0)(),E=(0,m.s0)(),Y=(0,l.useState)(null),$=(0,s.Z)(Y,2),q=$[0],B=$[1],F=(0,l.useContext)(T._).setIsModalVisible,G=(0,l.useState)(!1),H=(0,s.Z)(G,2),J=H[0],Q=H[1],W=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,X=(0,g.v9)((function(e){return e.client}),g.wU),ee=X.clients,ne=X.loading,te=X.meta,ie=X.params,ae=((0,U.Z)().isDemo,(0,l.useState)(null)),ue=(0,s.Z)(ae,2),se=ue[0],le=ue[1],re=(0,l.useState)(null),oe=(0,s.Z)(re,2),ce=oe[0],de=oe[1],fe=W.data,he={sort:null===fe||void 0===fe?void 0:fe.sort,column:null===fe||void 0===fe?void 0:fe.column,perPage:null===fe||void 0===fe?void 0:fe.perPage,page:null===fe||void 0===fe?void 0:fe.page,search:null===fe||void 0===fe?void 0:fe.search,status:"published"},Ze=(0,l.useState)([{title:R("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:R("firstname"),dataIndex:"firstname",key:"firstname",is_show:!0},{title:R("lastname"),dataIndex:"lastname",key:"lastname",is_show:!0},{title:R("email"),dataIndex:"email",key:"email",is_show:!0,render:function(e){return(0,K.jsx)("div",{children:(0,V.Z)(e)})}},{title:R("role"),dataIndex:"role",key:"role",is_show:!0},{title:R("options"),dataIndex:"options",key:"options",is_show:!0,render:function(e,n){return(0,K.jsxs)(h.Z,{children:[(0,K.jsx)(Z.Z,{icon:(0,K.jsx)(r.Z,{}),onClick:function(){return function(e){D((0,k.bL)({url:"users/user/".concat(e.uuid),id:"user_info",name:R("user.info")})),E("/users/user/".concat(e.uuid),{state:{user_id:e.id}})}(n)}}),(0,K.jsx)(Z.Z,{icon:(0,K.jsx)(o.Z,{}),onClick:function(){return le(n.uuid)}}),(0,K.jsx)(Z.Z,{type:"primary",icon:(0,K.jsx)(c.Z,{}),onClick:function(){return function(e){D((0,k.bL)({url:"user/".concat(e.uuid),id:"user_edit",name:"User edit"})),E("/user/".concat(e.uuid),{state:"user"})}(n)}}),(0,K.jsx)(x.Z,{title:R("change.user.role"),children:(0,K.jsx)(Z.Z,{onClick:function(){return de(n)},icon:(0,K.jsx)(j.VRY,{})})}),(0,K.jsx)(M.Z,{icon:(0,K.jsx)(d.Z,{}),onClick:function(){B([n.id]),F(!0)}})]})}}]),xe=(0,s.Z)(Ze,2),ve=xe[0],pe=xe[1];(0,l.useEffect)((function(){W.refetch&&(D((0,S.Tu)(he)),D((0,k.A_)(W)))}),[W.refetch]),(0,y.Z)((function(){D((0,S.Tu)(he))}),[W.data]);var me={selectedRowKeys:q,onChange:function(e){B(e)}};return(0,K.jsxs)(v.Z,{title:R("clients"),extra:(0,K.jsxs)(h.Z,{wrap:!0,children:[(0,K.jsxs)(h.Z,{children:[(0,K.jsx)(Z.Z,{type:"primary",icon:(0,K.jsx)(f.Z,{}),onClick:function(){D((0,k.bL)({id:"user-add",url:"user/add",name:R("add.client")})),E("/user/add")},children:R("add.client")}),(0,K.jsx)(M.Z,{size:"",onClick:function(){null===q||0===q.length?P.Am.warning(R("select.the.product")):F(!0)},children:R("delete.selected")})]}),(0,K.jsx)(z.Z,{columns:ve,setColumns:pe})]}),children:[(0,K.jsx)("div",{className:"d-flex justify-content-between",children:(0,K.jsx)(I.Z,{placeholder:R("search"),className:"w-25",handleChange:function(e){return function(e){var n=W.data;D((0,k.nc)({activeMenu:W,data:(0,u.Z)((0,u.Z)({},n),e)}))}({search:e})},defaultValue:null===(e=W.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(n=W.data)&&void 0!==n&&n.search)})}),(0,K.jsx)(p.Z,{scroll:{x:!0},rowSelection:me,columns:null===ve||void 0===ve?void 0:ve.filter((function(e){return e.is_show})),dataSource:ee,loading:ne,pagination:{pageSize:ie.perPage,page:(null===(t=W.data)||void 0===t?void 0:t.page)||1,total:te.total,defaultCurrent:null===(N=W.data)||void 0===N?void 0:N.page,current:null===(O=W.data)||void 0===O?void 0:O.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,a=e.current,s=t.field,l=t.order,r=(0,C.Z)(l);D((0,k.nc)({activeMenu:W,data:(0,u.Z)((0,u.Z)({},W.data),{},{perPage:i,page:a,column:s,sort:r})}))}}),(0,K.jsx)(A.Z,{click:function(){Q(!0);var e=(0,u.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(q.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));L.Z.delete(e).then((function(){P.Am.success(R("successfully.deleted")),D((0,S.Tu)(he)),F(!1)})).finally((function(){B(null),Q(!1)}))},text:R("delete"),loading:J,setText:B}),se&&(0,K.jsx)(_.Z,{uuid:se,handleCancel:function(){return le(null)}}),ce&&(0,K.jsx)(b.Z,{data:ce,handleCancel:function(){return de(null)}})]})}}}]);
"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5822],{90354:function(e,t,n){n(47313);var a=n(97890),i=n(77181),c=n(59491),r=n(2717),u=n(90954),s=n(55768),l=n(46417);t.Z=function(e){var t=e.children,n=e.containerName,d=e.headerTitle,o=(e.subtitle,e.navLInkTo),f=e.buttonTitle,h=(e.state,(0,r.I0)()),v=(0,a.s0)();return(0,l.jsx)("div",{className:n,children:(0,l.jsx)(i.Z,{title:d,extra:f?(0,l.jsx)(c.Z,{type:"primary",icon:(0,l.jsx)(s.Z,{}),onClick:function(){var e,t=o.split("");"/"===t[0]&&t.shift();var n={id:e=t.join(""),url:e,name:f};h((0,u.bL)(n)),v(o)},children:f}):null,children:t})})}},45822:function(e,t,n){n.r(t);var a=n(29439),i=n(47313),c=n(86345),r=n(78508),u=n(90354),s=n(69658),l=n(74580),d=n(2717),o=n(90954),f=n(33033),h=n(40197),v=n(23560),m=n(24511),x=n(46417);t.default=function(){var e=(0,m.$)().t,t=(0,d.I0)(),n=[{title:e("id"),dataIndex:"id",key:"id"},{title:e("name"),dataIndex:"name",key:"name"},{title:e("active"),dataIndex:"active",key:"active",render:function(e,t){return(0,x.jsx)(c.Z,{onChange:function(){Z(!0),y(t.id)},checked:e,disabled:"canceled"===t.name||"delivered"===t.name||"accepted"===t.name},t.id+e)}}],Z=(0,i.useContext)(l._).setIsModalVisible,p=(0,i.useState)(null),k=(0,a.Z)(p,2),j=k[0],y=k[1],b=(0,i.useState)(!1),g=(0,a.Z)(b,2),w=g[0],C=g[1],I=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,z=(0,d.v9)((function(e){return e.orderStatus}),d.wU),S=z.statusList,M=z.loading;return(0,i.useEffect)((function(){I.refetch&&(t((0,h.dX)()),t((0,o.A_)(I)))}),[I.refetch]),(0,x.jsxs)(u.Z,{headerTitle:e("order.status"),children:[(0,x.jsx)(r.Z,{scroll:{x:!0},columns:n,dataSource:S,rowKey:function(e){return e.id},loading:M}),(0,x.jsx)(s.Z,{click:function(){C(!0),f.Z.status(j).then((function(){Z(!1),t((0,h.dX)()),v.Am.success(e("successfully.updated"))})).finally((function(){return C(!1)}))},text:e("set.active.order.status"),loading:w})]})}},55768:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),i=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=n(17469),u=function(e,t){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:c}))};u.displayName="PlusCircleOutlined";var s=i.forwardRef(u)}}]);
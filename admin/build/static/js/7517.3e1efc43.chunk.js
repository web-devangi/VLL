"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7517],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(1413),r=t(45987),a=(t(47313),t(59491)),i=t(47515),l=t(23560),u=t(24511),c=t(79492),s=t(46417),d=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,p=void 0===f?"default":f,h=(0,r.Z)(e,d),m=(0,u.$)().t,Z=(0,c.Z)().isDemo;return(0,s.jsx)(a.Z,(0,o.Z)({size:t,icon:(0,s.jsx)(i.Z,{}),onClick:function(e){Z?l.Am.warning(m("cannot.work.demo")):v(e)},type:p},h))}},53233:function(e,n,t){var o=t(1413),r=t(29439),a=t(47313),i=t(56140),l=t(67251),u=t(45705),c=t(86345),s=t(78267),d=t(37388),v=t(59491),f=t(99587),p=t(24511),h=t(46417),m=i.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,i=e.setColumns,Z=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,C=(0,p.$)().t,w=(0,a.useState)(!1),b=(0,r.Z)(w,2),j=b[0],k=b[1],V=(0,h.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)(l.Z.Item,{children:(0,h.jsxs)(u.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));i(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,h.jsx)(s.Z,{overlay:V,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,h.jsx)(d.Z,{title:C("change.columns"),children:(0,h.jsx)(v.Z,{style:(0,o.Z)({},Z),size:g,icon:(0,h.jsx)(f.Z,{}),children:y?null:C("Columns")})})})}},13945:function(e,n,t){function o(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return o}})},37517:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var o=t(4942),r=t(93433),a=t(1413),i=t(29439),l=t(47313),u=t(31741),c=t(47515),s=t(55613),d=t(45705),v=t(59491),f=t(77181),p=t(78508),h=t(23560),m=t(69658),Z=t(74580),x=t(2717),g=t(90954),y=t(80314),C=t(13945),w=t(24511),b=t(94765),j=t(36689),k=t(9274),V=t(83371),H=t(68197),I=t(59624),S=t(26824),z=t(51282),D=t(45464),E=t(70816),M=t.n(E),O=t(46417);function _(e){var n,t,o,r,a=e.id,u=e.handleCancel,c=(0,l.useState)({}),s=(0,i.Z)(c,2),d=s[0],f=s[1],p=(0,l.useState)(!1),h=(0,i.Z)(p,2),m=h[0],Z=h[1],x=(0,w.$)().t;return(0,l.useEffect)((function(){!function(e){Z(!0),b.Z.getById(e).then((function(e){return f(e.data)})).finally((function(){return Z(!1)}))}(a)}),[a]),(0,O.jsx)(k.Z,{visible:!!a,title:x("product.review"),onCancel:u,footer:(0,O.jsx)(v.Z,{type:"default",onClick:u,children:x("cancel")}),children:m?(0,O.jsx)(z.Z,{}):(0,O.jsxs)(V.Z,{bordered:!0,children:[(0,O.jsx)(V.Z.Item,{span:3,label:x("id"),children:null===d||void 0===d?void 0:d.id}),(0,O.jsxs)(V.Z.Item,{span:3,label:x("user"),children:[(null===d||void 0===d||null===(n=d.user)||void 0===n?void 0:n.firstname)||""," ",(null===d||void 0===d||null===(t=d.user)||void 0===t?void 0:t.lastname)||""]}),(0,O.jsx)(V.Z.Item,{span:3,label:x("rating"),children:null===d||void 0===d?void 0:d.rating}),(0,O.jsx)(V.Z.Item,{span:3,label:x("image"),children:(0,O.jsx)(H.Z,{gutter:12,children:null===(o=d.galleries)||void 0===o?void 0:o.map((function(e){return(0,O.jsx)(I.Z,{children:(0,O.jsx)(S.Z,{width:145,height:100,src:(0,D.Z)(null===e||void 0===e?void 0:e.path),placeholder:!0,className:"rounded",style:{objectFit:"contain"},preview:!1})})}))})}),(0,O.jsx)(V.Z.Item,{span:3,label:x("product.id"),children:null===d||void 0===d||null===(r=d.product)||void 0===r?void 0:r.id}),(0,O.jsx)(V.Z.Item,{span:3,label:x("comment"),children:null===d||void 0===d?void 0:d.comment}),(0,O.jsx)(V.Z.Item,{span:3,label:x("created.at"),children:M()(null===d||void 0===d?void 0:d.created_at).format("DD.MM.YYYY HH:mm")})]})})}var R=t(97890),L=t(55940),N=t(53233);function P(){var e=(0,w.$)().t,n=(0,x.I0)(),t=(0,R.s0)(),k=(0,l.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:function(o){return(0,O.jsxs)("div",{className:"text-hover",onClick:function(){return function(o){n((0,g.bL)({url:"/users/user/".concat(o.uuid),id:"user_info",name:e("user.info")})),t("/users/user/".concat(o.uuid),{state:{user_id:o.id}})}(o)},children:[(null===o||void 0===o?void 0:o.firstname)||""," ",(null===o||void 0===o?void 0:o.lastname)||""]})}},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:function(o){var r;return(0,O.jsx)("div",{className:"text-hover",onClick:function(){return function(o){n((0,g.bL)({id:"edit-shop",url:"shop/".concat(o.uuid),name:e("edit.shop")})),t("/shop/".concat(o.uuid))}(o)},children:null===o||void 0===o||null===(r=o.translation)||void 0===r?void 0:r.title})}},{title:e("product"),dataIndex:"product",key:"product",is_show:!0,render:function(o){var r;return(0,O.jsx)("div",{className:"text-hover",onClick:function(){return function(o){n((0,g.bL)({id:"product-edit",url:"product/".concat(o.uuid),name:e("edit.product")})),t("/product/".concat(o.uuid))}(o)},children:null===o||void 0===o||null===(r=o.translation)||void 0===r?void 0:r.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:function(e){return(0,O.jsx)(s.Z,{disabled:!0,defaultValue:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return M()(e).format("DD.MM.YYYY HH:mm")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,O.jsxs)(d.Z,{children:[(0,O.jsx)(v.Z,{type:"primary",icon:(0,O.jsx)(u.Z,{}),onClick:function(){return K(n.id)}}),(0,O.jsx)(L.Z,{icon:(0,O.jsx)(c.Z,{}),onClick:function(){P([n.id]),S(!0),q(!0)}})]})}}]),V=(0,i.Z)(k,2),H=V[0],I=V[1],S=(0,l.useContext)(Z._).setIsModalVisible,z=(0,l.useState)(null),D=(0,i.Z)(z,2),E=D[0],P=D[1],F=(0,l.useState)(null),T=(0,i.Z)(F,2),B=T[0],K=T[1],Y=(0,l.useState)(!1),A=(0,i.Z)(Y,2),$=A[0],X=A[1],G=(0,l.useState)(null),U=(0,i.Z)(G,2),W=U[0],q=U[1],J=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,Q=(0,x.v9)((function(e){return e.productReview}),x.wU),ee=Q.reviews,ne=Q.meta,te=Q.loading,oe=Q.params;(0,l.useEffect)((function(){J.refetch&&(n((0,j.O)()),n((0,g.A_)(J)))}),[J.refetch]),(0,y.Z)((function(){var e=J.data,t={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};n((0,j.O)(t))}),[J.data]);var re={id:E,onChange:function(e){P(e)}};return(0,O.jsxs)(f.Z,{title:e("product.reviews"),extra:(0,O.jsxs)(d.Z,{wrap:!0,children:[(0,O.jsx)(L.Z,{size:"",onClick:function(){null===E||0===E.length?h.Am.warning(e("select.the.product")):(S(!0),q(!1))},children:e("delete.selected")}),(0,O.jsx)(N.Z,{columns:H,setColumns:I})]}),children:[(0,O.jsx)(p.Z,{scroll:{x:!0},rowSelection:re,columns:null===H||void 0===H?void 0:H.filter((function(e){return e.is_show})),dataSource:ee,pagination:{pageSize:null===oe||void 0===oe?void 0:oe.perPage,page:null===oe||void 0===oe?void 0:oe.page,total:null===ne||void 0===ne?void 0:ne.total,defaultCurrent:null===oe||void 0===oe?void 0:oe.page},rowKey:function(e){return e.id},onChange:function(e,t,o){var r=e.pageSize,a=e.current,i=o.field,l=o.order,u=(0,C.Z)(l);n((0,g.nc)({activeMenu:J,data:{perPage:r,page:a,column:i,sort:u}}))},loading:te}),(0,O.jsx)(m.Z,{click:function(){X(!0);var t=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,r.Z)(E.map((function(e,n){return(0,o.Z)({},"ids[".concat(n,"]"),e)}))))));b.Z.delete(t).then((function(){h.Am.success(e("successfully.deleted")),n((0,j.O)()),S(!1),q(null)})).finally((function(){P(null),X(!1)}))},text:e(W?"delete":"all.delete"),setText:P,loading:$}),B&&(0,O.jsx)(_,{id:B,handleCancel:function(){return K(null)}})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},i=t(17469),l=function(e,n){return r.createElement(i.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:a}))};l.displayName="TableOutlined";var u=r.forwardRef(l)},55613:function(e,n,t){t.d(n,{Z:function(){return H}});var o=t(87462),r=t(47313),a=t(1413),i=t(4942),l=t(15671),u=t(43144),c=t(60136),s=t(29388),d=t(53879),v=t(46123),f=t.n(v),p=t(49242);var h=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(){var e;(0,l.Z)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).onHover=function(n){var t=e.props;(0,t.onHover)(n,t.index)},e.onClick=function(n){var t=e.props;(0,t.onClick)(n,t.index)},e.onKeyDown=function(n){var t=e.props,o=t.onClick,r=t.index;13===n.keyCode&&o(n,r)},e}return(0,u.Z)(t,[{key:"getClassName",value:function(){var e=this.props,n=e.prefixCls,t=e.index,o=e.value,r=e.allowHalf,a=e.focused,i=t+1,l=n;return 0===o&&0===t&&a?l+=" ".concat(n,"-focused"):r&&o+.5>=i&&o<i?(l+=" ".concat(n,"-half ").concat(n,"-active"),a&&(l+=" ".concat(n,"-focused"))):(l+=" ".concat(n,i<=o?"-full":"-zero"),i===o&&a&&(l+=" ".concat(n,"-focused"))),l}},{key:"render",value:function(){var e=this.onHover,n=this.onClick,t=this.onKeyDown,o=this.props,a=o.disabled,i=o.prefixCls,l=o.character,u=o.characterRender,c=o.index,s=o.count,d=o.value,v="function"===typeof l?l(this.props):l,f=r.createElement("li",{className:this.getClassName()},r.createElement("div",{onClick:a?null:n,onKeyDown:a?null:t,onMouseMove:a?null:e,role:"radio","aria-checked":d>c?"true":"false","aria-posinset":c+1,"aria-setsize":s,tabIndex:a?-1:0},r.createElement("div",{className:"".concat(i,"-first")},v),r.createElement("div",{className:"".concat(i,"-second")},v)));return u&&(f=u(f,this.props)),f}}]),t}(r.Component);function m(){}var Z=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(e){var o;(0,l.Z)(this,t),(o=n.call(this,e)).stars=void 0,o.rate=void 0,o.onHover=function(e,n){var t=o.props.onHoverChange,r=o.getStarValue(n,e.pageX);r!==o.state.cleanedValue&&o.setState({hoverValue:r,cleanedValue:null}),t(r)},o.onMouseLeave=function(){var e=o.props.onHoverChange;o.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},o.onClick=function(e,n){var t=o.props.allowClear,r=o.state.value,a=o.getStarValue(n,e.pageX),i=!1;t&&(i=a===r),o.onMouseLeave(),o.changeValue(i?0:a),o.setState({cleanedValue:i?a:null})},o.onFocus=function(){var e=o.props.onFocus;o.setState({focused:!0}),e&&e()},o.onBlur=function(){var e=o.props.onBlur;o.setState({focused:!1}),e&&e()},o.onKeyDown=function(e){var n=e.keyCode,t=o.props,r=t.count,a=t.allowHalf,i=t.onKeyDown,l="rtl"===t.direction,u=o.state.value;n===p.Z.RIGHT&&u<r&&!l?(u+=a?.5:1,o.changeValue(u),e.preventDefault()):n===p.Z.LEFT&&u>0&&!l||n===p.Z.RIGHT&&u>0&&l?(u-=a?.5:1,o.changeValue(u),e.preventDefault()):n===p.Z.LEFT&&u<r&&l&&(u+=a?.5:1,o.changeValue(u),e.preventDefault()),i&&i(e)},o.saveRef=function(e){return function(n){o.stars[e]=n}},o.saveRate=function(e){o.rate=e};var r=e.value;return void 0===r&&(r=e.defaultValue),o.stars={},o.state={value:r,focused:!1,cleanedValue:null},o}return(0,u.Z)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.autoFocus,t=e.disabled;n&&!t&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,n){var t=this.props,o=t.allowHalf,r="rtl"===t.direction,a=e+1;if(o){var i=this.getStarDOM(e),l=function(e){var n=function(e){var n,t,o=e.ownerDocument,r=o.body,a=o&&o.documentElement,i=e.getBoundingClientRect();return n=i.left,t=i.top,{left:n-=a.clientLeft||r.clientLeft||0,top:t-=a.clientTop||r.clientTop||0}}(e),t=e.ownerDocument,o=t.defaultView||t.parentWindow;return n.left+=function(e){var n=e.pageXOffset,t="scrollLeft";if("number"!==typeof n){var o=e.document;"number"!==typeof(n=o.documentElement[t])&&(n=o.body[t])}return n}(o),n.left}(i),u=i.clientWidth;(r&&n-l>u/2||!r&&n-l<u/2)&&(a-=.5)}return a}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var n=this.props.onChange;"value"in this.props||this.setState({value:e}),n(e)}},{key:"render",value:function(){for(var e=this.props,n=e.count,t=e.allowHalf,o=e.style,a=e.prefixCls,l=e.disabled,u=e.className,c=e.character,s=e.characterRender,d=e.tabIndex,v=e.direction,p=this.state,m=p.value,Z=p.hoverValue,x=p.focused,g=[],y=l?"".concat(a,"-disabled"):"",C=0;C<n;C+=1)g.push(r.createElement(h,{ref:this.saveRef(C),index:C,count:n,disabled:l,prefixCls:"".concat(a,"-star"),allowHalf:t,value:void 0===Z?m:Z,onClick:this.onClick,onHover:this.onHover,key:C,character:c,characterRender:s,focused:x}));var w=f()(a,y,u,(0,i.Z)({},"".concat(a,"-rtl"),"rtl"===v));return r.createElement("ul",{className:w,style:o,onMouseLeave:l?null:this.onMouseLeave,tabIndex:l?-1:d,onFocus:l?null:this.onFocus,onBlur:l?null:this.onBlur,onKeyDown:l?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},g)}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"value"in e&&void 0!==e.value?(0,a.Z)((0,a.Z)({},n),{},{value:e.value}):n}}]),t}(r.Component);Z.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};var x=Z,g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},y=t(17469),C=function(e,n){return r.createElement(y.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:g}))};C.displayName="StarFilled";var w=r.forwardRef(C),b=t(37388),j=t(91964),k=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},V=r.forwardRef((function(e,n){var t=e.prefixCls,a=e.tooltips,i=k(e,["prefixCls","tooltips"]),l=r.useContext(j.E_),u=l.getPrefixCls,c=l.direction,s=u("rate",t);return r.createElement(x,(0,o.Z)({ref:n,characterRender:function(e,n){var t=n.index;return a?r.createElement(b.Z,{title:a[t]},e):e}},i,{prefixCls:s,direction:c}))}));V.displayName="Rate",V.defaultProps={character:r.createElement(w,null)};var H=V}}]);
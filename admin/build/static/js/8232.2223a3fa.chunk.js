"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8232],{51988:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var i=t(24511),a=t(66188),r=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",l=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",c=t(46417);var s=function(e){var n=e.id,t=void 0===n?"noresult":n,s=e.text,d=void 0===s?"":s,u=(0,i.$)().t,v={src:{noproductsfound:r,noresult:l,nosell:o}[t],artboard:"New Artboard",autoplay:!0},p=(0,a.useRive)(v).RiveComponent;return(0,c.jsxs)("div",{className:"animation-canvas",children:[(0,c.jsx)("div",{style:{width:"100%",height:200},children:(0,c.jsx)(p,{})}),(0,c.jsx)("div",{className:"text",children:u(d)})]})}},17899:function(e,n,t){var i=t(34344),a={create:function(e){return i.Z.post("dashboard/admin/digital-files",e,{})}};n.Z=a},87882:function(e,n,t){t.d(n,{Z:function(){return p}});t(47313);var i=t(77181),a=t(45705),r=t(59491),l=t(24511),o=t(91107),c=t(66736),s=t(23560),d=t(17899),u=t(2717),v=t(46417);function p(e){var n=e.prev,t=e.next,p=(0,l.$)().t,m=(0,u.v9)((function(e){return e.menu}),u.wU).activeMenu;return(0,v.jsxs)(i.Z,{bordered:!1,className:"mb-0",children:[(0,v.jsxs)(o.Z,{name:"file",multiple:!1,maxCount:1,customRequest:function(e){var n,t=e.file,i=e.onSuccess,a=e.onError,r=new FormData;r.append("file",t),r.append("active",1),r.append("product_id",null===(n=m.data)||void 0===n?void 0:n.id),d.Z.create(r).then((function(){s.Am.success(p("successfully.import")),i("ok")})).catch((function(e){console.log("upload error",e),a("error"),s.Am.error(p("file.upload.error"))}))},accept:".zip",children:[(0,v.jsx)("p",{className:"ant-upload-drag-icon",children:(0,v.jsx)(c.Z,{})}),(0,v.jsx)("p",{className:"ant-upload-text",children:p("upload-drag")}),(0,v.jsx)("p",{className:"ant-upload-hint",children:p("upload-text")})]}),(0,v.jsxs)(a.Z,{className:"mt-3",children:[(0,v.jsx)(r.Z,{onClick:n,children:p("prev")}),(0,v.jsx)(r.Z,{type:"primary",onClick:t,children:p("next")})]})]})}},34144:function(e,n,t){var i=t(1413),a=t(29439),r=t(47313),l=t(69888),o=t(23885),c=t(77181),s=t(37388),d=t(45705),u=t(68197),v=t(59624),p=t(41068),m=t(46155),f=t(59491),h=t(34273),x=t(2717),Z=t(31247),y=t(17101),j=t(46417);n.Z=function(e){var n,t=e.prev,g=e.next,b=(0,r.useState)([]),C=(0,a.Z)(b,2),k=C[0],N=C[1],w=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,I=((null===w||void 0===w?void 0:w.data)||{}).newExtras,E=(0,r.useMemo)((function(){return null===I||void 0===I?void 0:I.find((function(e){var n;return"color"===(null===e||void 0===e||null===(n=e.group)||void 0===n?void 0:n.type)}))}),[I]),P=Array.from(new Set(null===E||void 0===E||null===(n=E.values)||void 0===n?void 0:n.map((function(e){return e.value})))).map((function(e){var n;return null===E||void 0===E||null===(n=E.values)||void 0===n?void 0:n.find((function(n){return n.value===e}))})).filter((function(e){return"color"===e.group_type})),A=function(e){return{uid:e.path,name:e.path,status:"done",url:e.path,created:!0}};return(0,r.useEffect)((function(){!function(){var e=w.data.stocks.map((function(e){var n=e.id,t=e.galleries;return{id:n,images:(null===t||void 0===t?void 0:t.map(A))||[]}}));N(e)}()}),[w.data]),(0,j.jsxs)(c.Z,{title:(0,j.jsx)(s.Z,{placement:"topLeft",title:"In the process of internal desktop applications development",children:(0,j.jsxs)(d.Z,{children:[(0,o.t)("add.media.file"),(0,j.jsx)(l.Z,{style:{fontSize:16,cursor:"pointer"}})]})}),children:[(0,j.jsx)(u.Z,{gutter:[24,24],children:null===P||void 0===P?void 0:P.map((function(e){var n=e.label,t=e.stock_id,i=e.value;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(v.Z,{span:24,children:[(0,j.jsx)(d.Z,{className:"mb-4",children:(0,j.jsx)(p.Z,{color:n||i,className:"extras-color-badge",text:"".concat(n||i," - ").concat((0,h.B)(n||i))})}),(0,j.jsx)(Z.Z,{id:t,fileList:k,setFileList:N,type:"stocks"})]}),(0,j.jsx)(m.Z,{})]})}))}),(0,j.jsxs)(d.Z,{className:"mt-4",children:[(0,j.jsx)(f.Z,{onClick:t,children:(0,o.t)("prev")}),(0,j.jsx)(f.Z,{type:"primary",htmlType:"submit",onClick:function(){if(k.length){var e=k.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{images:e.images.map((function(e){return e.name}))})}));y.Z.updateStocks({data:e}).then((function(){g()})).catch((function(e){console.log(e)}))}else g()},children:(0,o.t)("next")})]})]})}},56326:function(e,n,t){var i=t(1413),a=t(45987),r=t(93433),l=t(4942),o=t(29439),c=t(47313),s=t(35432),d=t(10976),u=t(77181),v=t(68197),p=t(59624),m=t(16124),f=t(59491),h=t(45705),x=t(24511),Z=t(2717),y=t(47515),j=t(82138),g=t(34273),b=t(17101),C=t(97890),k=t(51988),N=t(46417),w=["key","name"],I=s.Z.Panel,E=function(e){var n,t;return(0,N.jsx)("div",{children:(0,N.jsx)("p",{hidden:!(null!==e&&void 0!==e&&null!==(n=e.extras)&&void 0!==n&&n.length),children:null===e||void 0===e||null===(t=e.extras)||void 0===t?void 0:t.map((function(e){var n,t,i,a,r,l,o,c;return"color"===(null===e||void 0===e||null===(n=e.group)||void 0===n?void 0:n.type)?(0,N.jsxs)("div",{style:{display:"flex",alignItems:"center",columnGap:"5px"},children:[null===(t=e.group)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title,":"," ",(0,g.B)(null===e||void 0===e||null===(a=e.value)||void 0===a?void 0:a.value)," (",(0,N.jsx)("span",{style:{display:"block",width:"15px",height:"15px",backgroundColor:"".concat(null===e||void 0===e||null===(r=e.value)||void 0===r?void 0:r.value),borderRadius:"50%",border:"1px solid #ccc"}}),")"]},null===e||void 0===e?void 0:e.id):(0,N.jsxs)("div",{children:[null===(l=e.group)||void 0===l||null===(o=l.translation)||void 0===o?void 0:o.title,": ",null===(c=e.value)||void 0===c?void 0:c.value]},null===e||void 0===e?void 0:e.id)}))})})};n.Z=function(e){var n,t,g,P,A,q,_,K=e.prev,S=e.next,F=(0,x.$)().t,R=d.Z.useForm(),M=(0,o.Z)(R,1)[0],O=(0,C.UO)().uuid,U=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,L=null===U||void 0===U||null===(n=U.data)||void 0===n||null===(t=n.stocksData)||void 0===t?void 0:t.some((function(e){var n;return!(null===e||void 0===e||null===(n=e.extras)||void 0===n||!n.length)})),z=(null===(g=U.data)||void 0===g?void 0:g.stocksData)||[],D=null!==(P=U.data)&&void 0!==P&&P.min_qty?null===(A=U.data)||void 0===A?void 0:A.min_qty:1,T=null!==(q=U.data)&&void 0!==q&&q.max_qty?null===(_=U.data)||void 0===_?void 0:_.max_qty:1,B=(0,c.useState)(!1),V=(0,o.Z)(B,2),$=V[0],G=V[1],H=(0,c.useState)(!1),J=(0,o.Z)(H,2),Q=J[0],W=J[1];return(0,c.useEffect)((function(){G(!0),b.Z.getById(O).then((function(e){var n,t,i=null===e||void 0===e||null===(n=e.data)||void 0===n||null===(t=n.stocks)||void 0===t?void 0:t.map((function(e){return(0,l.Z)({},null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.whole_sale_prices)}));M.setFieldsValue(Object.assign.apply(Object,[{}].concat((0,r.Z)(i))))})).finally((function(){return G(!1)}))}),[]),(0,N.jsx)(u.Z,{loading:$,children:(0,N.jsxs)(d.Z,{form:M,layout:"vertical",onFinish:function(e){if(!L)return S();W(!0);var n=null===z||void 0===z?void 0:z.map((function(n){var t,i=(null===e||void 0===e?void 0:e[null===n||void 0===n?void 0:n.id])||[];return{ids:null===n||void 0===n||null===(t=n.extras)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.extra_value_id})),galleries:null===n||void 0===n?void 0:n.galleries,price:null===n||void 0===n?void 0:n.price,quantity:null===n||void 0===n?void 0:n.quantity,stock_id:null===n||void 0===n?void 0:n.id,whole_sales:i}}));b.Z.stocks(O,{extras:n}).then((function(){return S()})).finally((function(){return W(!1)}))},children:[L?(0,N.jsx)(s.Z,{children:z.map((function(e){var n=null===e||void 0===e?void 0:e.id;return(0,N.jsx)(I,{header:E(e),children:(0,N.jsx)(d.Z.List,{name:n,children:function(e,t){var r=t.add,l=t.remove;return(0,N.jsxs)(N.Fragment,{children:[e.map((function(t,r){t.key;var o,c,s,u=t.name,h=(0,a.Z)(t,w),x=M.getFieldValue([n,null===(o=e[r-1])||void 0===o?void 0:o.name,"max_quantity"]);return(0,N.jsxs)(v.Z,{gutter:12,children:[(0,N.jsx)(p.Z,{span:7,children:(0,N.jsx)(d.Z.Item,(0,i.Z)((0,i.Z)({},h),{},{label:F("min.quantity"),name:[u,"min_quantity"],rules:[{required:!0,message:F("required")},{validator:function(e,n){return n&&(n<=x||n>T||n<=0)?Promise.reject(new Error("".concat(F("must.be.between")," ").concat(x||D," ").concat(F("and")," ").concat(T))):Promise.resolve()}}],children:(0,N.jsx)(m.Z,{className:"w-100",step:(null===(c=U.data)||void 0===c?void 0:c.interval)||1})}))}),(0,N.jsx)(p.Z,{span:7,children:(0,N.jsx)(d.Z.Item,(0,i.Z)((0,i.Z)({},h),{},{label:F("max.quantity"),name:[u,"max_quantity"],rules:[{required:!0,message:F("required")},{validator:function(e,t){var i=M.getFieldValue([n,u,"min_quantity"]);return t&&(t<=i||t>T||t<=0)?Promise.reject(new Error("".concat(F("must.be.between")," ").concat(i||D," ").concat(F("and")," ").concat(T))):Promise.resolve()}}],children:(0,N.jsx)(m.Z,{className:"w-100",step:(null===(s=U.data)||void 0===s?void 0:s.interval)||1})}))}),(0,N.jsx)(p.Z,{span:8,children:(0,N.jsx)(d.Z.Item,(0,i.Z)((0,i.Z)({},h),{},{label:F("price"),name:[u,"price"],rules:[{required:!0,message:F("required")},{type:"number",min:0,message:F("must.be.positive.number")},{type:"number",max:999999999999999,message:F("max.15.digits")}],children:(0,N.jsx)(m.Z,{className:"w-100",parser:function(e){return parseInt(e,10)}})}))}),(0,N.jsx)(p.Z,{span:2,style:{display:"flex",alignItems:"center",justifyContent:"end"},children:(0,N.jsx)(f.Z,{onClick:function(){l(u)},danger:!0,type:"primary",icon:(0,N.jsx)(y.Z,{}),disabled:(null===e||void 0===e?void 0:e.length)!==r+1})})]},r)})),(0,N.jsx)(d.Z.Item,{children:(0,N.jsx)(f.Z,{onClick:function(){r()},type:"dashed",icon:(0,N.jsx)(j.Z,{}),block:!0,children:F("add")})})]})}},null===e||void 0===e?void 0:e.id)},null===e||void 0===e?void 0:e.id)}))}):(0,N.jsx)(k.Z,{}),(0,N.jsxs)(h.Z,{className:"mt-4",children:[(0,N.jsx)(f.Z,{onClick:K,children:F("prev")}),(0,N.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:Q,children:F("next")})]})]})})}},35432:function(e,n,t){t.d(n,{Z:function(){return K}});var i=t(87462),a=t(4942),r=t(47313),l=t(93433),o=t(15671),c=t(43144),s=t(60136),d=t(29388),u=t(71002),v=t(46123),p=t.n(v),m=t(59767),f=t.n(m),h=t(14903),x=t(1293),Z=t(29439),y=r.forwardRef((function(e,n){var t,i=e.prefixCls,l=e.forceRender,o=e.className,c=e.style,s=e.children,d=e.isActive,u=e.role,v=r.useState(d||l),m=(0,Z.Z)(v,2),f=m[0],h=m[1];return r.useEffect((function(){(l||d)&&h(!0)}),[l,d]),f?r.createElement("div",{ref:n,className:p()("".concat(i,"-content"),(t={},(0,a.Z)(t,"".concat(i,"-content-active"),d),(0,a.Z)(t,"".concat(i,"-content-inactive"),!d),t),o),style:c,role:u},r.createElement("div",{className:"".concat(i,"-content-box")},s)):null}));y.displayName="PanelContent";var j=y,g=function(e){(0,s.Z)(t,e);var n=(0,d.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).handleItemClick=function(){var n=e.props,t=n.onItemClick,i=n.panelKey;"function"===typeof t&&t(i)},e.handleKeyPress=function(n){"Enter"!==n.key&&13!==n.keyCode&&13!==n.which||e.handleItemClick()},e}return(0,c.Z)(t,[{key:"shouldComponentUpdate",value:function(e){return!f()(this.props,e)}},{key:"render",value:function(){var e,n,t=this,l=this.props,o=l.className,c=l.id,s=l.style,d=l.prefixCls,u=l.header,v=l.headerClass,m=l.children,f=l.isActive,h=l.showArrow,Z=l.destroyInactivePanel,y=l.accordion,g=l.forceRender,b=l.openMotion,C=l.expandIcon,k=l.extra,N=l.collapsible,w="disabled"===N,I=p()("".concat(d,"-header"),(e={},(0,a.Z)(e,v,v),(0,a.Z)(e,"".concat(d,"-header-collapsible-only"),"header"===N),e)),E=p()((n={},(0,a.Z)(n,"".concat(d,"-item"),!0),(0,a.Z)(n,"".concat(d,"-item-active"),f),(0,a.Z)(n,"".concat(d,"-item-disabled"),w),n),o),P=r.createElement("i",{className:"arrow"});h&&"function"===typeof C&&(P=C(this.props));var A=null!==k&&void 0!==k&&"boolean"!==typeof k;return r.createElement("div",{className:E,style:s,id:c},r.createElement("div",{className:I,onClick:function(){return"header"!==N&&t.handleItemClick()},role:y?"tab":"button",tabIndex:w?-1:0,"aria-expanded":f,onKeyPress:this.handleKeyPress},h&&P,"header"===N?r.createElement("span",{onClick:this.handleItemClick,className:"".concat(d,"-header-text")},u):u,A&&r.createElement("div",{className:"".concat(d,"-extra")},k)),r.createElement(x.default,(0,i.Z)({visible:f,leavedClassName:"".concat(d,"-content-hidden")},b,{forceRender:g,removeOnLeave:Z}),(function(e,n){var t=e.className,i=e.style;return r.createElement(j,{ref:n,prefixCls:d,className:t,style:i,isActive:f,forceRender:g,role:y?"tabpanel":null},m)})))}}]),t}(r.Component);g.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var b=g;function C(e){var n=e;if(!Array.isArray(n)){var t=(0,u.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map((function(e){return String(e)}))}var k=function(e){(0,s.Z)(t,e);var n=(0,d.Z)(t);function t(e){var i;(0,o.Z)(this,t),(i=n.call(this,e)).onClickItem=function(e){var n=i.state.activeKey;if(i.props.accordion)n=n[0]===e?[]:[e];else{var t=(n=(0,l.Z)(n)).indexOf(e);t>-1?n.splice(t,1):n.push(e)}i.setActiveKey(n)},i.getNewChild=function(e,n){if(!e)return null;var t=i.state.activeKey,a=i.props,l=a.prefixCls,o=a.openMotion,c=a.accordion,s=a.destroyInactivePanel,d=a.expandIcon,u=a.collapsible,v=e.key||String(n),p=e.props,m=p.header,f=p.headerClass,h=p.destroyInactivePanel,x=p.collapsible,Z=null!==x&&void 0!==x?x:u,y={key:v,panelKey:v,header:m,headerClass:f,isActive:c?t[0]===v:t.indexOf(v)>-1,prefixCls:l,destroyInactivePanel:null!==h&&void 0!==h?h:s,openMotion:o,accordion:c,children:e.props.children,onItemClick:"disabled"===Z?null:i.onClickItem,expandIcon:d,collapsible:Z};return"string"===typeof e.type?e:r.cloneElement(e,y)},i.getItems=function(){var e=i.props.children;return(0,h.Z)(e).map(i.getNewChild)},i.setActiveKey=function(e){"activeKey"in i.props||i.setState({activeKey:e}),i.props.onChange(i.props.accordion?e[0]:e)};var a=e.activeKey,c=e.defaultActiveKey;return"activeKey"in e&&(c=a),i.state={activeKey:C(c)},i}return(0,c.Z)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!f()(this.props,e)||!f()(this.state,n)}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,i=n.className,l=n.style,o=n.accordion,c=p()((e={},(0,a.Z)(e,t,!0),(0,a.Z)(e,i,!!i),e));return r.createElement("div",{className:c,style:l,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var n={};return"activeKey"in e&&(n.activeKey=C(e.activeKey)),n}}]),t}(r.Component);k.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},k.Panel=b;var N=k,w=(k.Panel,t(5186)),I=t(205),E=t(91964),P=function(e){var n=r.useContext(E.E_).getPrefixCls,t=e.prefixCls,l=e.className,o=void 0===l?"":l,c=e.showArrow,s=void 0===c||c,d=n("collapse",t),u=p()((0,a.Z)({},"".concat(d,"-no-arrow"),!s),o);return r.createElement(N.Panel,(0,i.Z)({},e,{prefixCls:d,className:u}))},A=t(53553),q=t(48138),_=function(e){var n,t=r.useContext(E.E_),l=t.getPrefixCls,o=t.direction,c=e.prefixCls,s=e.className,d=void 0===s?"":s,u=e.bordered,v=void 0===u||u,m=e.ghost,f=l("collapse",c),x=function(){var n=e.expandIconPosition;return void 0!==n?n:"rtl"===o?"right":"left"}(),Z=p()((n={},(0,a.Z)(n,"".concat(f,"-borderless"),!v),(0,a.Z)(n,"".concat(f,"-icon-position-").concat(x),!0),(0,a.Z)(n,"".concat(f,"-rtl"),"rtl"===o),(0,a.Z)(n,"".concat(f,"-ghost"),!!m),n),d),y=(0,i.Z)((0,i.Z)({},A.ZP),{motionAppear:!1,leavedClassName:"".concat(f,"-content-hidden")});return r.createElement(N,(0,i.Z)({openMotion:y},e,{expandIcon:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expandIcon,i=t?t(n):r.createElement(w.Z,{rotate:n.isActive?90:void 0});return r.createElement("div",null,(0,q.Tm)(i,(function(){return{className:p()(i.props.className,"".concat(f,"-arrow"))}})))},prefixCls:f,className:Z}),function(){var n=e.children;return(0,h.Z)(n).map((function(e,n){var t;if(null===(t=e.props)||void 0===t?void 0:t.disabled){var a=e.key||String(n),r=e.props,l=r.disabled,o=r.collapsible,c=(0,i.Z)((0,i.Z)({},(0,I.Z)(e.props,["disabled"])),{key:a,collapsible:null!==o&&void 0!==o?o:l?"disabled":void 0});return(0,q.Tm)(e,c)}return e}))}())};_.Panel=P;var K=_}}]);
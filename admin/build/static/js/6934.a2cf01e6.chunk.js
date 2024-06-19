"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6934],{55768:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1413),r=n(47313);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var o=n(17469),l=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:c}))};l.displayName="PlusCircleOutlined";const i=r.forwardRef(l)},20052:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1413),r=n(47313);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"};var o=n(17469),l=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:c}))};l.displayName="SendOutlined";const i=r.forwardRef(l)},35432:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(4942),c=n(47313),o=n(93433),l=n(15671),i=n(43144),s=n(60136),d=n(54062),p=n(71002),u=n(46123),v=n.n(u),f=n(59767),m=n.n(f),h=n(14903),y=n(1293),C=n(29439),Z=c.forwardRef((function(e,t){var n,a=e.prefixCls,o=e.forceRender,l=e.className,i=e.style,s=e.children,d=e.isActive,p=e.role,u=c.useState(d||o),f=(0,C.Z)(u,2),m=f[0],h=f[1];return c.useEffect((function(){(o||d)&&h(!0)}),[o,d]),m?c.createElement("div",{ref:t,className:v()("".concat(a,"-content"),(n={},(0,r.Z)(n,"".concat(a,"-content-active"),d),(0,r.Z)(n,"".concat(a,"-content-inactive"),!d),n),l),style:i,role:p},c.createElement("div",{className:"".concat(a,"-content-box")},s)):null}));Z.displayName="PanelContent";const x=Z;var b=function(e){(0,s.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"===typeof n&&n(a)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,i.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!m()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,o=this.props,l=o.className,i=o.id,s=o.style,d=o.prefixCls,p=o.header,u=o.headerClass,f=o.children,m=o.isActive,h=o.showArrow,C=o.destroyInactivePanel,Z=o.accordion,b=o.forceRender,g=o.openMotion,k=o.expandIcon,N=o.extra,I=o.collapsible,E="disabled"===I,P=v()("".concat(d,"-header"),(e={},(0,r.Z)(e,u,u),(0,r.Z)(e,"".concat(d,"-header-collapsible-only"),"header"===I),e)),w=v()((t={},(0,r.Z)(t,"".concat(d,"-item"),!0),(0,r.Z)(t,"".concat(d,"-item-active"),m),(0,r.Z)(t,"".concat(d,"-item-disabled"),E),t),l),K=c.createElement("i",{className:"arrow"});h&&"function"===typeof k&&(K=k(this.props));var A=null!==N&&void 0!==N&&"boolean"!==typeof N;return c.createElement("div",{className:w,style:s,id:i},c.createElement("div",{className:P,onClick:function(){return"header"!==I&&n.handleItemClick()},role:Z?"tab":"button",tabIndex:E?-1:0,"aria-expanded":m,onKeyPress:this.handleKeyPress},h&&K,"header"===I?c.createElement("span",{onClick:this.handleItemClick,className:"".concat(d,"-header-text")},p):p,A&&c.createElement("div",{className:"".concat(d,"-extra")},N)),c.createElement(y.default,(0,a.Z)({visible:m,leavedClassName:"".concat(d,"-content-hidden")},g,{forceRender:b,removeOnLeave:C}),(function(e,t){var n=e.className,a=e.style;return c.createElement(x,{ref:t,prefixCls:d,className:n,style:a,isActive:m,forceRender:b,role:Z?"tabpanel":null},f)})))}}]),n}(c.Component);b.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};const g=b;function k(e){var t=e;if(!Array.isArray(t)){var n=(0,p.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map((function(e){return String(e)}))}var N=function(e){(0,s.Z)(n,e);var t=(0,d.Z)(n);function n(e){var a;(0,l.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,o.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,r=a.props,o=r.prefixCls,l=r.openMotion,i=r.accordion,s=r.destroyInactivePanel,d=r.expandIcon,p=r.collapsible,u=e.key||String(t),v=e.props,f=v.header,m=v.headerClass,h=v.destroyInactivePanel,y=v.collapsible,C=null!==y&&void 0!==y?y:p,Z={key:u,panelKey:u,header:f,headerClass:m,isActive:i?n[0]===u:n.indexOf(u)>-1,prefixCls:o,destroyInactivePanel:null!==h&&void 0!==h?h:s,openMotion:l,accordion:i,children:e.props.children,onItemClick:"disabled"===C?null:a.onClickItem,expandIcon:d,collapsible:C};return"string"===typeof e.type?e:c.cloneElement(e,Z)},a.getItems=function(){var e=a.props.children;return(0,h.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var r=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=r),a.state={activeKey:k(i)},a}return(0,i.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!m()(this.props,e)||!m()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,o=t.style,l=t.accordion,i=v()((e={},(0,r.Z)(e,n,!0),(0,r.Z)(e,a,!!a),e));return c.createElement("div",{className:i,style:o,role:l?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=k(e.activeKey)),t}}]),n}(c.Component);N.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},N.Panel=g;const I=N;N.Panel;var E=n(5186),P=n(205),w=n(91964);const K=function(e){var t=c.useContext(w.E_).getPrefixCls,n=e.prefixCls,o=e.className,l=void 0===o?"":o,i=e.showArrow,s=void 0===i||i,d=t("collapse",n),p=v()((0,r.Z)({},"".concat(d,"-no-arrow"),!s),l);return c.createElement(I.Panel,(0,a.Z)({},e,{prefixCls:d,className:p}))};var A=n(53553),M=n(48138),R=function(e){var t,n=c.useContext(w.E_),o=n.getPrefixCls,l=n.direction,i=e.prefixCls,s=e.className,d=void 0===s?"":s,p=e.bordered,u=void 0===p||p,f=e.ghost,m=o("collapse",i),y=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===l?"right":"left"}(),C=v()((t={},(0,r.Z)(t,"".concat(m,"-borderless"),!u),(0,r.Z)(t,"".concat(m,"-icon-position-").concat(y),!0),(0,r.Z)(t,"".concat(m,"-rtl"),"rtl"===l),(0,r.Z)(t,"".concat(m,"-ghost"),!!f),t),d),Z=(0,a.Z)((0,a.Z)({},A.ZP),{motionAppear:!1,leavedClassName:"".concat(m,"-content-hidden")});return c.createElement(I,(0,a.Z)({openMotion:Z},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):c.createElement(E.Z,{rotate:t.isActive?90:void 0});return c.createElement("div",null,(0,M.Tm)(a,(function(){return{className:v()(a.props.className,"".concat(m,"-arrow"))}})))},prefixCls:m,className:C}),function(){var t=e.children;return(0,h.Z)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),c=e.props,o=c.disabled,l=c.collapsible,i=(0,a.Z)((0,a.Z)({},(0,P.Z)(e.props,["disabled"])),{key:r,collapsible:null!==l&&void 0!==l?l:o?"disabled":void 0});return(0,M.Tm)(e,i)}return e}))}())};R.Panel=K;const S=R}}]);
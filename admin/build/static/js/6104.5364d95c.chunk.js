"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6104],{55940:(e,n,t)=>{t.d(n,{Z:()=>i});t(47313);var a=t(59491),l=t(47515),c=t(23560),s=t(24511),r=t(79492),o=t(46417);function i(e){let{size:n="",onClick:t,type:i="default",...u}=e;const{t:d}=(0,s.$)(),{isDemo:f}=(0,r.Z)();return(0,o.jsx)(a.Z,{size:n,icon:(0,o.jsx)(l.Z,{}),onClick:e=>{f?c.Am.warning(d("cannot.work.demo")):t(e)},type:i,...u})}},51988:(e,n,t)=>{t.d(n,{Z:()=>i});t(47313);var a=t(24511),l=t(66188);const c=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",s=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",r=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var o=t(46417);const i=function(e){let{id:n="noresult",text:t=""}=e;const{t:i}=(0,a.$)(),u={src:{noproductsfound:c,noresult:s,nosell:r}[n],artboard:"New Artboard",autoplay:!0},{RiveComponent:d}=(0,l.useRive)(u);return(0,o.jsxs)("div",{className:"animation-canvas",children:[(0,o.jsx)("div",{style:{width:"100%",height:200},children:(0,o.jsx)(d,{})}),(0,o.jsx)("div",{className:"text",children:i(t)})]})}},64524:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var a=t(47313),l=t(77181),c=t(45705),s=t(59491),r=t(68197),o=t(59624),i=t(26824),u=t(32697),d=t(18074),f=t(52917),p=t(23560),v=t(58821),h=t(74580),m=t(69658),x=t(36104),y=t(24511),g=t(97890),b=t(45464),Z=t(51282),k=t(55940),C=t(51988),j=t(46417);const O=()=>{const{t:e}=(0,y.$)(),n=(0,g.s0)(),{type:t}=(0,g.UO)(),[O,N]=(0,a.useState)([]),[w,E]=(0,a.useState)(!1),[P,S]=(0,a.useState)(!1),{setIsModalVisible:I}=(0,a.useContext)(h._),[K,F]=(0,a.useState)([]),[V,D]=(0,a.useState)(15),[M,A]=(0,a.useState)(1),[z,_]=(0,a.useState)({}),B=()=>{const e={type:t,perPage:V,page:M};E(!0),x.Z.getAll(e).then((e=>{N(e.data.data),_(e.data)})).finally((()=>E(!1)))};(0,a.useEffect)((()=>{B()}),[M,V]);return(0,j.jsx)("div",{className:"gallery-item",children:(0,j.jsxs)(l.Z,{title:(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,j.jsxs)("span",{className:"d-flex align-items-center",children:[(0,j.jsx)("span",{className:"mr-3",onClick:()=>n(-1),children:(0,j.jsx)(f.Z,{})}),(0,j.jsx)(v.Icw,{style:{fontSize:"25px"}}),(0,j.jsx)("span",{className:"ml-2",children:e(t)})]}),(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(k.Z,{onClick:()=>{null===K||0===K.length?p.Am.warning(e("select.the.product")):I(!0)},type:"danger",children:e("delete.all")}),(0,j.jsx)(s.Z,{onClick:()=>K.length===O.length?F([]):F(O.map((e=>e.id))),children:K.length===O.length?e("clear.all"):e("select.all")})]})]}),children:[w?(0,j.jsx)(Z.Z,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{gutter:[24,24],className:"mt-2",children:0===O.length?(0,j.jsx)(o.Z,{span:24,children:(0,j.jsx)(C.Z,{id:"nosell"})}):null===O||void 0===O?void 0:O.map(((e,n)=>(0,j.jsx)(o.Z,{children:(0,j.jsxs)(l.Z,{className:"mb-0 ".concat(e.isset?"card-noActive":"card-active"," card-image"),children:[(0,j.jsx)(i.Z,{src:(0,b.Z)(e.path),className:"images",alt:"images"}),!e.isset&&(0,j.jsx)(u.Z,{checked:null===K||void 0===K?void 0:K.includes(e.id),className:"icon-center-delete",onChange:n=>((e,n)=>{e.target.checked?F([...K,parseInt(n)]):F(K.filter((e=>e!==n)))})(n,e.id)})]})},n)))}),(0,j.jsx)("div",{className:"d-flex justify-content-end mt-5",children:(0,j.jsx)(d.Z,{total:z.total,pageSize:V,current:M,onChange:(e,n)=>{A(e),D(n)}})})]}),(0,j.jsx)(m.Z,{click:()=>{S(!0);const n={...Object.assign({},...K.map(((e,n)=>({["ids[".concat(n,"]")]:e}))))};x.Z.delete(n).then((()=>{p.Am.success(e("successfully.deleted")),B(),I(!1),F([])})).finally((()=>S(!1)))},text:e("all.delete"),loading:P,setText:F})]})})}},32697:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(4942),l=t(87462),c=t(47313),s=t(46123),r=t.n(s),o=t(56482),i=t(4431),u=t(93433),d=t(29439),f=t(205),p=t(91964),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},h=c.createContext(null),m=function(e,n){var t=e.defaultValue,s=e.children,o=e.options,i=void 0===o?[]:o,m=e.prefixCls,x=e.className,y=e.style,g=e.onChange,b=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),Z=c.useContext(p.E_),C=Z.getPrefixCls,j=Z.direction,O=c.useState(b.value||t||[]),N=(0,d.Z)(O,2),w=N[0],E=N[1],P=c.useState([]),S=(0,d.Z)(P,2),I=S[0],K=S[1];c.useEffect((function(){"value"in b&&E(b.value||[])}),[b.value]);var F=function(){return i.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},V=C("checkbox",m),D="".concat(V,"-group"),M=(0,f.Z)(b,["value","disabled"]);i&&i.length>0&&(s=F().map((function(e){return c.createElement(k,{prefixCls:V,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:-1!==w.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var A={toggleOption:function(e){var n=w.indexOf(e.value),t=(0,u.Z)(w);-1===n?t.push(e.value):t.splice(n,1),"value"in b||E(t);var a=F();null===g||void 0===g||g(t.filter((function(e){return-1!==I.indexOf(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))},value:w,disabled:b.disabled,name:b.name,registerValue:function(e){K((function(n){return[].concat((0,u.Z)(n),[e])}))},cancelValue:function(e){K((function(n){return n.filter((function(n){return n!==e}))}))}},z=r()(D,(0,a.Z)({},"".concat(D,"-rtl"),"rtl"===j),x);return c.createElement("div",(0,l.Z)({className:z,style:y},M,{ref:n}),c.createElement(h.Provider,{value:A},s))},x=c.forwardRef(m);const y=c.memo(x);var g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},b=function(e,n){var t,s=e.prefixCls,u=e.className,d=e.children,f=e.indeterminate,v=void 0!==f&&f,m=e.style,x=e.onMouseEnter,y=e.onMouseLeave,b=e.skipGroup,Z=void 0!==b&&b,k=g(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),C=c.useContext(p.E_),j=C.getPrefixCls,O=C.direction,N=c.useContext(h),w=(0,c.useContext)(i.aM).isFormItemInput,E=c.useRef(k.value);c.useEffect((function(){null===N||void 0===N||N.registerValue(k.value)}),[]),c.useEffect((function(){if(!Z)return k.value!==E.current&&(null===N||void 0===N||N.cancelValue(E.current),null===N||void 0===N||N.registerValue(k.value),E.current=k.value),function(){return null===N||void 0===N?void 0:N.cancelValue(k.value)}}),[k.value]);var P=j("checkbox",s),S=(0,l.Z)({},k);N&&!Z&&(S.onChange=function(){k.onChange&&k.onChange.apply(k,arguments),N.toggleOption&&N.toggleOption({label:d,value:k.value})},S.name=N.name,S.checked=-1!==N.value.indexOf(k.value),S.disabled=k.disabled||N.disabled);var I=r()((t={},(0,a.Z)(t,"".concat(P,"-wrapper"),!0),(0,a.Z)(t,"".concat(P,"-rtl"),"rtl"===O),(0,a.Z)(t,"".concat(P,"-wrapper-checked"),S.checked),(0,a.Z)(t,"".concat(P,"-wrapper-disabled"),S.disabled),(0,a.Z)(t,"".concat(P,"-wrapper-in-form-item"),w),t),u),K=r()((0,a.Z)({},"".concat(P,"-indeterminate"),v)),F=v?"mixed":void 0;return c.createElement("label",{className:I,style:m,onMouseEnter:x,onMouseLeave:y},c.createElement(o.Z,(0,l.Z)({"aria-checked":F},S,{prefixCls:P,className:K,ref:n})),void 0!==d&&c.createElement("span",null,d))},Z=c.forwardRef(b);Z.displayName="Checkbox";const k=Z;var C=k;C.Group=y,C.__ANT_CHECKBOX=!0;const j=C},56482:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),l=t(4942),c=t(45987),s=t(1413),r=t(15671),o=t(43144),i=t(60136),u=t(54062),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,i.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,r.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,l=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,s.Z)((0,s.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,o.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,s=n.className,r=n.style,o=n.name,i=n.id,u=n.type,f=n.disabled,v=n.readOnly,h=n.tabIndex,m=n.onClick,x=n.onFocus,y=n.onBlur,g=n.onKeyDown,b=n.onKeyPress,Z=n.onKeyUp,k=n.autoFocus,C=n.value,j=n.required,O=(0,c.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(O).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=O[n]),e}),{}),w=this.state.checked,E=p()(t,s,(e={},(0,l.Z)(e,"".concat(t,"-checked"),w),(0,l.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:E,style:r},d.createElement("input",(0,a.Z)({name:o,id:i,type:u,required:j,readOnly:v,disabled:f,tabIndex:h,className:"".concat(t,"-input"),checked:!!w,onClick:m,onFocus:x,onBlur:y,onKeyUp:Z,onKeyDown:g,onKeyPress:b,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:C},N)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,s.Z)((0,s.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);
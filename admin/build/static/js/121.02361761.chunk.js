"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[121],{73431:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(47313),o=n(39180),l=n(2717),r=n(28830),c=n(60535),i=n(46417);const s=()=>{const e=(0,l.I0)(),{languages:t,defaultLang:n}=(0,l.v9)((e=>e.formLang),l.wU);(0,a.useEffect)((()=>{c.Z.getAllActive().then((t=>{let{data:n}=t;e((0,r.dc)(n)),e((0,r.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(o.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},75336:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(n,"[").concat(e.locale,"]")]?void 0:t["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},59337:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(34344);const o={getPolicy:()=>a.Z.get("dashboard/admin/policy"),getTerms:()=>a.Z.get("dashboard/admin/term"),createPolicy:e=>a.Z.post("dashboard/admin/policy",e),createTerms:e=>a.Z.post("dashboard/admin/term",e)}},10121:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(47313),o=n(23560),l=n(10976),r=n(77181),c=n(68197),i=n(59624),s=n(66672),u=n(45705),d=n(59491),p=n(2717),f=n(68144),v=n(76733),m=n.n(v),h=n(90954),y=n(59337),b=n(24511),g=n(51282),Z=n(73431),x=n(75336),C=n(46417);function k(){const{t:e}=(0,b.$)(),{activeMenu:t}=(0,p.v9)((e=>e.menu),p.wU),n=(0,p.I0)(),[v]=l.Z.useForm(),[k,E]=(0,a.useState)(!1),[j,P]=(0,a.useState)(!1),{languages:O,defaultLang:w}=(0,p.v9)((e=>e.formLang),p.wU);function F(e){if(!e)return{};const{translations:t}=e,n=O.map((e=>{var n,a;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}(0,a.useEffect)((()=>()=>{const e=v.getFieldsValue(!0);n((0,h.nc)({activeMenu:t,data:e}))}),[]),(0,a.useEffect)((()=>{t.refetch&&(P(!0),y.Z.getPolicy().then((e=>{let{data:t}=e;return v.setFieldsValue({...F(t)})})).finally((()=>{P(!1),n((0,h.A_)(t))})))}),[t.refetch]);return(0,C.jsx)(r.Z,{title:e("policy"),extra:(0,C.jsx)(Z.Z,{}),children:j?(0,C.jsx)(g.Z,{}):(0,C.jsxs)(l.Z,{name:"policy-form",layout:"vertical",onFinish:t=>{const n={title:(0,x.Z)(O,t),description:(0,x.Z)(O,t,"description")};E(!0),y.Z.createPolicy(n).then((()=>{o.Am.success(e("successfully.saved"))})).finally((()=>E(!1)))},form:v,initialValues:t.data,children:[(0,C.jsxs)(c.Z,{gutter:12,children:[(0,C.jsx)(i.Z,{span:12,children:O.map((t=>(0,C.jsx)(l.Z.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===w,message:e("required")}],hidden:t.locale!==w,children:(0,C.jsx)(s.Z,{})},"title"+t.locale)))}),(0,C.jsx)(i.Z,{span:24,children:O.map((t=>(0,C.jsx)(l.Z.Item,{label:e("description"),name:"description[".concat(t.locale,"]"),valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:t.locale===w,message:e("required")}],hidden:t.locale!==w,children:(0,C.jsx)(f.CKEditor,{editor:m()})})))})]}),(0,C.jsx)(u.Z,{children:(0,C.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:k,children:e("save")})})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>I});var a=n(4942),o=n(87462),l=n(47313),r=n(56482),c=n(46123),i=n.n(c),s=n(16945),u=n(4431),d=n(91964),p=l.createContext(null),f=p.Provider;const v=p;var m=l.createContext(null),h=m.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},b=function(e,t){var n,c=l.useContext(v),p=l.useContext(m),f=l.useContext(d.E_),h=f.getPrefixCls,b=f.direction,g=l.useRef(),Z=(0,s.sQ)(t,g),x=(0,l.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,E=e.children,j=e.style,P=y(e,["prefixCls","className","children","style"]),O=h("radio",C),w="button"===((null===c||void 0===c?void 0:c.optionType)||p)?"".concat(O,"-button"):O,F=(0,o.Z)({},P);c&&(F.name=c.name,F.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,t)},F.checked=e.value===c.value,F.disabled=e.disabled||c.disabled);var N=i()("".concat(w,"-wrapper"),(n={},(0,a.Z)(n,"".concat(w,"-wrapper-checked"),F.checked),(0,a.Z)(n,"".concat(w,"-wrapper-disabled"),F.disabled),(0,a.Z)(n,"".concat(w,"-wrapper-rtl"),"rtl"===b),(0,a.Z)(n,"".concat(w,"-wrapper-in-form-item"),x),n),k);return l.createElement("label",{className:N,style:j,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(r.Z,(0,o.Z)({},F,{type:"radio",prefixCls:w,ref:Z})),void 0!==E?l.createElement("span",null,E):null)},g=l.forwardRef(b);g.displayName="Radio";const Z=g;var x=n(29439),C=n(10288),k=n(21631),E=n(81176),j=l.forwardRef((function(e,t){var n=l.useContext(d.E_),r=n.getPrefixCls,c=n.direction,s=l.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,x.Z)(u,2),v=p[0],m=p[1];return l.createElement(f,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||m(a);var o=e.onChange;o&&a!==n&&o(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,b=e.children,g=e.size,x=e.style,C=e.id,k=e.onMouseEnter,j=e.onMouseLeave,P=r("radio",u),O="".concat(P,"-group"),w=b;f&&f.length>0&&(w=f.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(Z,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:v===e},e):l.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var F=g||s,N=i()(O,"".concat(O,"-").concat(h),(n={},(0,a.Z)(n,"".concat(O,"-").concat(F),F),(0,a.Z)(n,"".concat(O,"-rtl"),"rtl"===c),n),p);return l.createElement("div",(0,o.Z)({},(0,E.Z)(e),{className:N,style:x,onMouseEnter:k,onMouseLeave:j,id:C,ref:t}),w)}())}));const P=l.memo(j);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},w=function(e,t){var n=l.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=O(e,["prefixCls"]),c=n("radio",a);return l.createElement(h,{value:"button"},l.createElement(Z,(0,o.Z)({prefixCls:c},r,{type:"radio",ref:t})))};const F=l.forwardRef(w);var N=Z;N.Button=F,N.Group=P;const I=N},56482:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(4942),l=n(45987),r=n(1413),c=n(15671),i=n(43144),s=n(60136),u=n(54062),d=n(47313),p=n(46123),f=n.n(p),v=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,c.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,i.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,c=t.style,i=t.name,s=t.id,u=t.type,p=t.disabled,v=t.readOnly,m=t.tabIndex,h=t.onClick,y=t.onFocus,b=t.onBlur,g=t.onKeyDown,Z=t.onKeyPress,x=t.onKeyUp,C=t.autoFocus,k=t.value,E=t.required,j=(0,l.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(j).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=j[t]),e}),{}),O=this.state.checked,w=f()(n,r,(e={},(0,o.Z)(e,"".concat(n,"-checked"),O),(0,o.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:w,style:c},d.createElement("input",(0,a.Z)({name:i,id:s,type:u,required:E,readOnly:v,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!O,onClick:h,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},P)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=v}}]);
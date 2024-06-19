"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7097],{73431:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(47313),l=n(39180),r=n(2717),o=n(28830),s=n(60535),c=n(46417);const i=()=>{const e=(0,r.I0)(),{languages:t,defaultLang:n}=(0,r.v9)((e=>e.formLang),r.wU);(0,a.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:n}=t;e((0,o.dc)(n)),e((0,o.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,o.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},97097:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(47313),l=n(10976),r=n(77181),o=n(68197),s=n(59624),c=n(66672),i=n(74294),u=n(86345),d=n(59491),p=n(72652),v=n(23560),f=n(97890),m=n(73431),h=n(52421),y=n(2717),g=n(90954),x=n(97421),b=n(24511),Z=n(5764),k=n(74380),C=n(47647),j=n(46417);const w=()=>{var e,t;const{t:n}=(0,b.$)(),w=(0,f.s0)(),E=(0,y.I0)(),{activeMenu:O}=(0,y.v9)((e=>e.menu),y.wU),[P,I]=(0,a.useState)(!1),[N,S]=(0,a.useState)(null!==(e=O.data)&&void 0!==e&&e.image?[null===(t=O.data)||void 0===t?void 0:t.image]:[]),[F]=l.Z.useForm(),[K,_]=(0,a.useState)(!1),[q,M]=(0,a.useState)(null),U=(0,f.TH)(),{uuid:L}=(0,f.UO)(),{params:B}=(0,y.v9)((e=>e.category),y.wU),{defaultLang:D,languages:A}=(0,y.v9)((e=>e.formLang),y.wU);(0,a.useEffect)((()=>()=>{const e=F.getFieldsValue(!0);E((0,g.nc)({activeMenu:O,data:e}))}),[]);const R=e=>({name:e,url:x.bV+e});function T(e){if(!e)return{};const{translations:t}=e,n=A.map((e=>{var n,a;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{var e;O.refetch&&(e=L,I(!0),C.Z.getById(e).then((e=>{var t;let n=e.data;const a={...n,...T(n),image:[R(n.img)],keywords:n.keywords.split(","),parent_id:{label:n.parent?null===n||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title:"---",value:n.parent?null===n||void 0===n?void 0:n.id:0,key:n.parent?null===n||void 0===n?void 0:n.id:0}};F.setFieldsValue(a),S([R(n.img)])})).finally((()=>{I(!1),E((0,g.A_)(O))})))}),[O.refetch]),(0,j.jsx)(r.Z,{title:n("edit.category"),extra:(0,j.jsx)(m.Z,{}),children:P?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,j.jsx)(p.Z,{size:"large",className:"mt-5 pt-5"})}):(0,j.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:e=>{var t,a,l;_(!0);const r={...e,type:"receipt",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:0===(null===(t=e.parent_id)||void 0===t?void 0:t.value)?null:null===(a=e.parent_id)||void 0===a?void 0:a.value,"images[0]":null===(l=N[0])||void 0===l?void 0:l.name},o="seller/recipe-categories";"edit"===U.state?C.Z.update(L,r).then((()=>{v.Am.success(n("successfully.updated")),E((0,g.ph)({...O,nextUrl:o})),E((0,k.wr)()),w("/".concat(o))})).catch((e=>M(e.response.data.params))).finally((()=>_(!1))):C.Z.create(r).then((()=>{v.Am.success(n("successfully.updated")),E((0,g.ph)({...O,nextUrl:o})),E((0,k.wr)()),w("/".concat(o))})).catch((e=>M(e.response.data.params))).finally((()=>_(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...O.data},form:F,children:[(0,j.jsxs)(o.Z,{gutter:12,children:[(0,j.jsx)(s.Z,{span:12,children:A.map(((e,t)=>(0,j.jsx)(l.Z.Item,{label:n("name"),name:"title[".concat(e.locale,"]"),help:q&&q["title.".concat(D)]?q["title.".concat(D)][0]:null,validateStatus:q?"error":"success",rules:[{required:e.locale===D,message:n("required")}],hidden:e.locale!==D,children:(0,j.jsx)(c.Z,{})},e.title+t)))}),(0,j.jsx)(s.Z,{span:12,children:A.map(((e,t)=>(0,j.jsx)(l.Z.Item,{label:n("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===D,message:n("required")}],hidden:e.locale!==D,children:(0,j.jsx)(h.Z,{rows:4})},e.locale+t)))}),(0,j.jsx)(s.Z,{span:12,children:(0,j.jsx)(l.Z.Item,{label:n("keywords"),name:"keywords",rules:[{required:!0,message:n("required")}],children:(0,j.jsx)(i.Z,{mode:"tags",style:{width:"100%"}})})}),(0,j.jsx)(s.Z,{span:12,children:(0,j.jsx)(l.Z.Item,{label:n("parent.category"),name:"parent_id",rules:[{required:!0,message:n("required")}],help:q&&q.parent_id?q.parent_id[0]:null,validateStatus:q?"error":"success",children:(0,j.jsx)(i.Z,{children:(0,j.jsx)(i.Z.Option,{value:0,children:"---"})})})}),(0,j.jsx)(s.Z,{span:4,children:(0,j.jsx)(l.Z.Item,{label:n("image"),children:(0,j.jsx)(Z.Z,{type:"categories",imageList:N,setImageList:S,form:F,multiple:!1})})}),(0,j.jsx)(s.Z,{span:2,children:(0,j.jsx)(l.Z.Item,{label:n("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(u.Z,{})})})]}),(0,j.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:K,children:n("submit")})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>S});var a=n(4942),l=n(87462),r=n(47313),o=n(56482),s=n(46123),c=n.n(s),i=n(16945),u=n(4431),d=n(91964),p=r.createContext(null),v=p.Provider;const f=p;var m=r.createContext(null),h=m.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},g=function(e,t){var n,s=r.useContext(f),p=r.useContext(m),v=r.useContext(d.E_),h=v.getPrefixCls,g=v.direction,x=r.useRef(),b=(0,i.sQ)(t,x),Z=(0,r.useContext)(u.aM).isFormItemInput,k=e.prefixCls,C=e.className,j=e.children,w=e.style,E=y(e,["prefixCls","className","children","style"]),O=h("radio",k),P="button"===((null===s||void 0===s?void 0:s.optionType)||p)?"".concat(O,"-button"):O,I=(0,l.Z)({},E);s&&(I.name=s.name,I.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},I.checked=e.value===s.value,I.disabled=e.disabled||s.disabled);var N=c()("".concat(P,"-wrapper"),(n={},(0,a.Z)(n,"".concat(P,"-wrapper-checked"),I.checked),(0,a.Z)(n,"".concat(P,"-wrapper-disabled"),I.disabled),(0,a.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(P,"-wrapper-in-form-item"),Z),n),C);return r.createElement("label",{className:N,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(o.Z,(0,l.Z)({},I,{type:"radio",prefixCls:P,ref:b})),void 0!==j?r.createElement("span",null,j):null)},x=r.forwardRef(g);x.displayName="Radio";const b=x;var Z=n(29439),k=n(10288),C=n(21631),j=n(81176),w=r.forwardRef((function(e,t){var n=r.useContext(d.E_),o=n.getPrefixCls,s=n.direction,i=r.useContext(C.Z),u=(0,k.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),f=p[0],m=p[1];return r.createElement(v,{value:{onChange:function(t){var n=f,a=t.target.value;"value"in e||m(a);var l=e.onChange;l&&a!==n&&l(t)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,g=e.children,x=e.size,Z=e.style,k=e.id,C=e.onMouseEnter,w=e.onMouseLeave,E=o("radio",u),O="".concat(E,"-group"),P=g;v&&v.length>0&&(P=v.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(b,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:f===e},e):r.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:f===e.value,style:e.style},e.label)})));var I=x||i,N=c()(O,"".concat(O,"-").concat(h),(n={},(0,a.Z)(n,"".concat(O,"-").concat(I),I),(0,a.Z)(n,"".concat(O,"-rtl"),"rtl"===s),n),p);return r.createElement("div",(0,l.Z)({},(0,j.Z)(e),{className:N,style:Z,onMouseEnter:C,onMouseLeave:w,id:k,ref:t}),P)}())}));const E=r.memo(w);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},P=function(e,t){var n=r.useContext(d.E_).getPrefixCls,a=e.prefixCls,o=O(e,["prefixCls"]),s=n("radio",a);return r.createElement(h,{value:"button"},r.createElement(b,(0,l.Z)({prefixCls:s},o,{type:"radio",ref:t})))};const I=r.forwardRef(P);var N=b;N.Button=I,N.Group=E;const S=N},56482:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(4942),r=n(45987),o=n(1413),s=n(15671),c=n(43144),i=n(60136),u=n(54062),d=n(47313),p=n(46123),v=n.n(p),f=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,s=t.style,c=t.name,i=t.id,u=t.type,p=t.disabled,f=t.readOnly,m=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,x=t.onKeyDown,b=t.onKeyPress,Z=t.onKeyUp,k=t.autoFocus,C=t.value,j=t.required,w=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),O=this.state.checked,P=v()(n,o,(e={},(0,l.Z)(e,"".concat(n,"-checked"),O),(0,l.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:P,style:s},d.createElement("input",(0,a.Z)({name:c,id:i,type:u,required:j,readOnly:f,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!O,onClick:h,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:x,onKeyPress:b,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:C},E)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,o.Z)((0,o.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=f}}]);
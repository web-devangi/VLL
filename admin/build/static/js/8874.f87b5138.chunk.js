"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8874],{30153:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(47313),l=n(10976),o=n(24511),r=n(68144),c=n(76733),s=n.n(c),i=n(97421),d=n(36104),u=n(23560),p=n(46417);function v(e){let{form:t,lang:n,languages:c}=e;const{t:v}=(0,o.$)();function m(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,n)=>{const a=new FormData;e.file.then((e=>{e.size/1024/1024<2||(u.Am.error(v("min.2.mb")),n()),a.append("image",e),a.append("type","blogs"),d.Z.upload(a).then((e=>{let{data:n}=e;t({default:"".concat(i.bV+n.title)})})).catch((e=>{n(e)}))}))}))}}(e)}return(0,p.jsx)(a.Fragment,{children:c.map((e=>(0,p.jsx)(l.Z.Item,{label:v("description"),name:"description[".concat(e.locale,"]"),valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===n,message:v("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(v("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(v("must.be.at.least.5"))):t&&(null===t||void 0===t?void 0:t.trim().length)>200?Promise.reject(new Error(v("must.be.less.200"))):Promise.resolve()}],hidden:e.locale!==n,children:(0,p.jsx)(r.CKEditor,{editor:s(),config:{extraPlugins:[m]},onBlur:(n,a)=>{const l=a.getData();t.setFieldsValue({["description[".concat(e.value,"]")]:l})}})},"desc"+e.locale)))})}},73431:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(47313),l=n(39180),o=n(2717),r=n(28830),c=n(60535),s=n(46417);const i=()=>{const e=(0,o.I0)(),{languages:t,defaultLang:n}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{c.Z.getAllActive().then((t=>{let{data:n}=t;e((0,r.dc)(n)),e((0,r.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,s.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},89281:(e,t,n)=>{n.d(t,{h:()=>i});var a=n(47313),l=n(12279),o=n.n(l),r=n(74294),c=n(72652),s=n(46417);const i=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:l,refetchOptions:i=!1,...d}=e;const[u,p]=(0,a.useState)(!1),[v,m]=(0,a.useState)([]),f=(0,a.useMemo)((()=>o()((e=>{m([]),p(!0),t(e).then((e=>{m(e),p(!1)}))}),n)),[t,n]);return(0,s.jsx)(r.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:f,onClear:()=>{f(""),l&&l()},notFoundContent:u?(0,s.jsx)(c.Z,{size:"small"}):"no results",...d,options:v,onFocus:()=>{v.length&&!i||f("")}})}},75336:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(n,"[").concat(e.locale,"]")]?void 0:t["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},38874:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(47313),l=n(10976),o=n(77181),r=n(68197),c=n(59624),s=n(66672),i=n(86345),d=n(59491),u=n(72652),p=n(23560),v=n(97890),m=n(73431),f=n(2717),h=n(90954),y=n(57481),g=n(24511),b=n(85191),x=n(89281),Z=n(30763),j=n(30153),C=n(75336),k=n(46417);const P=()=>{const{t:e}=(0,g.$)(),t=(0,v.s0)(),n=(0,f.I0)(),{activeMenu:P}=(0,f.v9)((e=>e.menu),f.wU),[w,E]=(0,a.useState)(!1),[O]=l.Z.useForm(),[F,N]=(0,a.useState)(!1),{id:I}=(0,v.UO)(),{params:S}=(0,f.v9)((e=>e.career),f.wU),{defaultLang:K,languages:M}=(0,f.v9)((e=>e.formLang),f.wU);function q(e){if(!e)return{};const{translations:t}=e,n=M.map((e=>{var n,a,l;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,["address[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.address}}));return Object.assign({},...n)}(0,a.useEffect)((()=>()=>{const e=O.getFieldsValue(!0);n((0,h.nc)({activeMenu:P,data:e}))}),[]);return(0,a.useEffect)((()=>{var e;P.refetch&&(e=I,E(!0),y.Z.getById(e).then((e=>{var t,n;let a=e.data;const l={...a,...q(a),category_id:{label:a.category.translation.title,value:a.category.id},active:!(null===e||void 0===e||null===(t=e.data)||void 0===t||!t.active)&&(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.active)};O.setFieldsValue(l)})).finally((()=>{E(!1),n((0,h.A_)(P))})))}),[P.refetch]),(0,k.jsx)(o.Z,{title:e("edit.career"),extra:(0,k.jsx)(m.Z,{}),children:w?(0,k.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,k.jsx)(u.Z,{size:"large",className:"mt-5 pt-5"})}):(0,k.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:a=>{N(!0);const l={...a,active:Number(a.active),category_id:a.category_id.value,type:a.type,title:(0,C.Z)(M,a,"title"),description:(0,C.Z)(M,a,"description"),address:(0,C.Z)(M,a,"address")},o="catalog/career";y.Z.update(I,l).then((()=>{p.Am.success(e("successfully.updated")),n((0,h.ph)({...P,nextUrl:o})),n((0,b.a)(S)),t("/".concat(o))})).catch((e=>console.error(e.response.data.params))).finally((()=>N(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...P.data},form:O,children:[(0,k.jsxs)(r.Z,{gutter:12,children:[(0,k.jsx)(c.Z,{span:12,children:M.map(((t,n)=>(0,k.jsx)(l.Z.Item,{label:e("name"),name:"title[".concat(t.locale,"]"),rules:[{required:(null===t||void 0===t?void 0:t.locale)===K,message:e("required")},{validator:(t,n)=>n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(e("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve()}],hidden:t.locale!==K,children:(0,k.jsx)(s.Z,{placeholder:e("name"),maxLength:50})},t.title+n)))}),(0,k.jsx)(c.Z,{span:12}),(0,k.jsx)(c.Z,{span:24,children:(0,k.jsx)(j.Z,{form:O,lang:K,languages:M})}),(0,k.jsx)(c.Z,{span:12,children:(0,k.jsx)(l.Z.Item,{label:e("category"),name:"category_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(x.h,{fetchOptions:async function(e){const t={search:e.lenght>0?e:void 0,type:"career",active:1};return Z.Z.getAll(t).then((e=>e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id})))))}})})}),(0,k.jsx)(c.Z,{span:12,children:M.map(((t,n)=>(0,k.jsx)(l.Z.Item,{label:e("location"),name:"address[".concat(t.locale,"]"),rules:[{required:(null===t||void 0===t?void 0:t.locale)===K,message:e("required")},{validator:(t,n)=>n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(e("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve()}],hidden:t.locale!==K,children:(0,k.jsx)(s.Z,{maxLength:100})},t.locale+n)))}),(0,k.jsx)(c.Z,{span:12,children:(0,k.jsx)(l.Z.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,k.jsx)(i.Z,{})})}),(0,k.jsx)(c.Z,{span:12}),(0,k.jsx)(c.Z,{span:24,className:"mb-5"})]}),(0,k.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:F,children:e("submit")})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>I});var a=n(4942),l=n(87462),o=n(47313),r=n(56482),c=n(46123),s=n.n(c),i=n(16945),d=n(4431),u=n(91964),p=o.createContext(null),v=p.Provider;const m=p;var f=o.createContext(null),h=f.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},g=function(e,t){var n,c=o.useContext(m),p=o.useContext(f),v=o.useContext(u.E_),h=v.getPrefixCls,g=v.direction,b=o.useRef(),x=(0,i.sQ)(t,b),Z=(0,o.useContext)(d.aM).isFormItemInput,j=e.prefixCls,C=e.className,k=e.children,P=e.style,w=y(e,["prefixCls","className","children","style"]),E=h("radio",j),O="button"===((null===c||void 0===c?void 0:c.optionType)||p)?"".concat(E,"-button"):E,F=(0,l.Z)({},w);c&&(F.name=c.name,F.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,t)},F.checked=e.value===c.value,F.disabled=e.disabled||c.disabled);var N=s()("".concat(O,"-wrapper"),(n={},(0,a.Z)(n,"".concat(O,"-wrapper-checked"),F.checked),(0,a.Z)(n,"".concat(O,"-wrapper-disabled"),F.disabled),(0,a.Z)(n,"".concat(O,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(O,"-wrapper-in-form-item"),Z),n),C);return o.createElement("label",{className:N,style:P,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.Z,(0,l.Z)({},F,{type:"radio",prefixCls:O,ref:x})),void 0!==k?o.createElement("span",null,k):null)},b=o.forwardRef(g);b.displayName="Radio";const x=b;var Z=n(29439),j=n(10288),C=n(21631),k=n(81176),P=o.forwardRef((function(e,t){var n=o.useContext(u.E_),r=n.getPrefixCls,c=n.direction,i=o.useContext(C.Z),d=(0,j.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(d,2),m=p[0],f=p[1];return o.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var l=e.onChange;l&&a!==n&&l(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,d=e.prefixCls,u=e.className,p=void 0===u?"":u,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,y=e.disabled,g=e.children,b=e.size,Z=e.style,j=e.id,C=e.onMouseEnter,P=e.onMouseLeave,w=r("radio",d),E="".concat(w,"-group"),O=g;v&&v.length>0&&(O=v.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:w,disabled:y,value:e,checked:m===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var F=b||i,N=s()(E,"".concat(E,"-").concat(h),(n={},(0,a.Z)(n,"".concat(E,"-").concat(F),F),(0,a.Z)(n,"".concat(E,"-rtl"),"rtl"===c),n),p);return o.createElement("div",(0,l.Z)({},(0,k.Z)(e),{className:N,style:Z,onMouseEnter:C,onMouseLeave:P,id:j,ref:t}),O)}())}));const w=o.memo(P);var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},O=function(e,t){var n=o.useContext(u.E_).getPrefixCls,a=e.prefixCls,r=E(e,["prefixCls"]),c=n("radio",a);return o.createElement(h,{value:"button"},o.createElement(x,(0,l.Z)({prefixCls:c},r,{type:"radio",ref:t})))};const F=o.forwardRef(O);var N=x;N.Button=F,N.Group=w;const I=N},56482:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),l=n(4942),o=n(45987),r=n(1413),c=n(15671),s=n(43144),i=n(60136),d=n(54062),u=n(47313),p=n(46123),v=n.n(p),m=function(e){(0,i.Z)(n,e);var t=(0,d.Z)(n);function n(e){var a;(0,c.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,c=t.style,s=t.name,i=t.id,d=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,Z=t.onKeyUp,j=t.autoFocus,C=t.value,k=t.required,P=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(P).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=P[t]),e}),{}),E=this.state.checked,O=v()(n,r,(e={},(0,l.Z)(e,"".concat(n,"-checked"),E),(0,l.Z)(e,"".concat(n,"-disabled"),p),e));return u.createElement("span",{className:O,style:c},u.createElement("input",(0,a.Z)({name:s,id:i,type:d,required:k,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!E,onClick:h,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:C},w)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m}}]);
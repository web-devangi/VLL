"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8628],{73431:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(47313),l=n(39180),i=n(2717),r=n(28830),s=n(60535),o=n(46417);const c=()=>{const e=(0,i.I0)(),{languages:t,defaultLang:n}=(0,i.v9)((e=>e.formLang),i.wU);(0,a.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:n}=t;e((0,r.dc)(n)),e((0,r.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,o.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},89281:(e,t,n)=>{n.d(t,{h:()=>c});var a=n(47313),l=n(12279),i=n.n(l),r=n(74294),s=n(72652),o=n(46417);const c=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:l,refetchOptions:c=!1,...d}=e;const[u,m]=(0,a.useState)(!1),[p,v]=(0,a.useState)([]),h=(0,a.useMemo)((()=>i()((e=>{v([]),m(!0),t(e).then((e=>{v(e),m(!1)}))}),n)),[t,n]);return(0,o.jsx)(r.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,onClear:()=>{h(""),l&&l()},notFoundContent:u?(0,o.jsx)(s.Z,{size:"small"}):"no results",...d,options:p,onFocus:()=>{p.length&&!c||h("")}})}},385:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(47313),l=n(10976),i=n(26824),r=n(68197),s=n(59624),o=n(45705),c=n(15178),d=n(9274),u=n(59491),m=n(82138),p=n(47515),v=n(5764),h=n(36104),f=n(24511),x=n(46417);const g=e=>{var t;let{mediaList:n,setMediaList:g,name:y="products"}=e;const{t:Z}=(0,f.$)(),[b]=l.Z.useForm(),[j,C]=(0,a.useState)(null),[w,k]=(0,a.useState)([]),[P,E]=(0,a.useState)(!1),[N,O]=(0,a.useState)(!1),S=async e=>{let{file:t,type:n}=e;t.name?(C("video"===n?(0,x.jsx)("video",{controls:!0,src:t.name,width:450,height:450}):(0,x.jsx)(i.Z,{src:t.name,width:"100%",height:450,alt:"preview-img"})),E(!0)):C(null)},F=e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0});return(0,x.jsxs)(r.Z,{gutter:[24,24],children:[(0,x.jsx)(s.Z,{span:24,children:(0,x.jsx)(o.Z,{className:"align-items-start",children:(0,x.jsx)(c.Z,{customRequest:e=>{let{file:t,onSuccess:n}=e;O(!0);const a=new FormData;a.append("image",t),a.append("type",y),h.Z.upload(a).then((e=>{let{data:t}=e;g((e=>({...e,images:[...e.images,{...F(t),isVideo:!0}]}))),n("ok")}))},accept:"video/*",listType:"text",className:"video-upload",multiple:!1,fileList:[],children:(0,x.jsxs)("div",{className:"media-upload",children:[(0,x.jsx)(m.Z,{})," ",(0,x.jsx)("span",{children:Z("upload.video")})]})})})}),(0,x.jsx)(s.Z,{span:24,children:null===n||void 0===n||null===(t=n.previews)||void 0===t?void 0:t.map(((e,t)=>{var a,l;return(0,x.jsxs)(o.Z,{className:"uploaded-file",wrap:!0,children:[(0,x.jsx)("span",{className:"media-item",onClick:()=>S({type:"img",file:null===n||void 0===n?void 0:n.previews[t]}),children:null===n||void 0===n||null===(a=n.previews[t])||void 0===a?void 0:a.name}),(0,x.jsx)("span",{className:"media-item",onClick:()=>S({type:"video",file:null===n||void 0===n?void 0:n.images[t]}),children:null===n||void 0===n||null===(l=n.images[t])||void 0===l?void 0:l.name}),(0,x.jsx)(p.Z,{className:"delete-media-item",onClick:()=>(e=>{const t=n.images.filter(((t,n)=>{if(n!==e)return t})),a=n.previews.filter(((t,n)=>{if(n!==e)return t}));g({images:t,previews:a})})(t)})]})}))}),(0,x.jsx)(d.Z,{title:"Video Preview",visible:P,onCancel:()=>{E(!1)},footer:null,children:j}),(0,x.jsx)(d.Z,{title:"Preview image",visible:N,footer:null,children:(0,x.jsx)(l.Z,{form:b,onFinish:()=>{g((e=>({...e,previews:[...e.previews,...w]}))),k([]),O(!1)},layout:"vertical",children:(0,x.jsxs)(r.Z,{gutter:[24,24],children:[(0,x.jsx)(s.Z,{span:24,children:(0,x.jsx)(l.Z.Item,{label:Z("preview.image"),name:"preview-image",rules:[{required:!(null!==w&&void 0!==w&&w.length),message:Z("required")}],children:(0,x.jsx)(v.Z,{type:y,imageList:w,setImageList:k,multiple:!1,text:"upload.image",form:b})})}),(0,x.jsx)(s.Z,{span:24,className:"d-flex justify-content-end",children:(0,x.jsx)(u.Z,{type:"primary",onClick:()=>b.submit(),children:Z("save")})})]})})})]})}},75336:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(n,"[").concat(e.locale,"]")]?void 0:t["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},68628:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(47313),l=n(97890),i=n(23560),r=n(10976),s=n(77181),o=n(2717),c=n(90954),d=n(32447),u=n(54872),m=n(24511),p=n(75336),v=n(73431),h=n(20364),f=n(46417);const x=()=>{const{t:e}=(0,m.$)(),{activeMenu:t}=(0,o.v9)((e=>e.menu),o.wU),n=(0,o.I0)(),[x]=r.Z.useForm(),g=(0,l.s0)(),{languages:y}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>()=>{const e=x.getFieldsValue(!0);n((0,c.nc)({activeMenu:t,data:e}))}),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:e("add.banner"),extra:(0,f.jsx)(v.Z,{})}),(0,f.jsx)(h.Z,{form:x,handleSubmit:(a,l,r)=>{var s;const m=r.images.map((e=>e.name)),v=r.previews.map((e=>e.name)),h={products:null===(s=a.products)||void 0===s?void 0:s.map((e=>e.value)),images:[...m,...l.map((e=>e.name))],previews:v,clickable:!0,title:(0,p.Z)(y,a,"title"),description:(0,p.Z)(y,a,"description")},f="banners";return u.Z.create(h).then((()=>{i.Am.success(e("successfully.created")),(0,o.dC)((()=>{n((0,c.ph)({...t,nextUrl:f})),n((0,d.f)({}))})),g("/".concat(f))}))}})]})}},20364:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(47313),l=n(10976),i=n(68197),r=n(59624),s=n(77181),o=n(66672),c=n(59491),d=n(89281),u=n(5764),m=n(24511),p=n(2717),v=n(17101),h=n(385),f=n(46417);function x(e){var t,n;let{form:x,handleSubmit:g}=e;const{t:y}=(0,m.$)(),{activeMenu:Z}=(0,p.v9)((e=>e.menu),p.wU),{languages:b,defaultLang:j}=(0,p.v9)((e=>e.formLang),p.wU),[C,w]=(0,a.useState)((null===(t=Z.data)||void 0===t?void 0:t.img.filter((e=>!e.isVideo)))||[]),[k,P]=(0,a.useState)(!1),[E,N]=(0,a.useState)((null===Z||void 0===Z||null===(n=Z.data)||void 0===n?void 0:n.initialMediaFile)||{images:[],previews:[]});return(0,f.jsx)(l.Z,{name:"banner-form",layout:"vertical",onFinish:e=>{P(!0),g(e,C,E).finally((()=>P(!1)))},form:x,initialValues:{clickable:!0,...Z.data},className:"d-flex flex-column h-100",children:(0,f.jsxs)(i.Z,{gutter:[24,24],children:[(0,f.jsx)(r.Z,{span:16,children:(0,f.jsxs)(i.Z,{gutter:[24,24],children:[(0,f.jsx)(r.Z,{span:24,children:(0,f.jsx)(s.Z,{title:y("images"),className:"h-100",children:(0,f.jsx)(l.Z.Item,{rules:[{required:!C.length,message:y("required")}],label:y("image"),name:"images",children:(0,f.jsx)(u.Z,{type:"banners",imageList:C,setImageList:w,form:x,length:"1",multiple:!1})})})}),(0,f.jsx)(r.Z,{span:24,children:(0,f.jsx)(s.Z,{title:y("video"),className:"h-100",children:(0,f.jsx)(h.Z,{name:"banners",form:x,mediaList:E,setMediaList:N})})})]})}),(0,f.jsx)(r.Z,{span:8,children:(0,f.jsxs)(s.Z,{title:y("basic.info"),className:"h-100",children:[b.map((e=>(0,f.jsx)(l.Z.Item,{label:y("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===j,message:y("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(y("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(y("must.be.at.least.2"))):Promise.resolve()}],hidden:e.locale!==j,children:(0,f.jsx)(o.Z,{maxLength:50})},"title"+e.locale))),b.map((e=>(0,f.jsx)(l.Z.Item,{label:y("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===j,message:y("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(y("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(y("must.be.at.least.5"))):Promise.resolve()}],hidden:e.locale!==j,children:(0,f.jsx)(o.Z.TextArea,{maxLength:150})},"description"+e.locale))),(0,f.jsx)(l.Z.Item,{label:y("products"),name:"products",rules:[{required:!0,message:y("required")}],children:(0,f.jsx)(d.h,{mode:"multiple",fetchOptions:function(e){const t={search:e,perPage:10,status:"published"};return v.Z.getAll(t).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))))},debounceTimeout:200})})]})}),(0,f.jsx)(r.Z,{span:24,children:(0,f.jsx)("div",{className:"d-flex justify-content-end",children:(0,f.jsx)("div",{className:"pb-5",children:(0,f.jsx)(c.Z,{type:"primary",htmlType:"submit",loading:k,children:y("submit")})})})})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>F});var a=n(4942),l=n(87462),i=n(47313),r=n(56482),s=n(46123),o=n.n(s),c=n(16945),d=n(4431),u=n(91964),m=i.createContext(null),p=m.Provider;const v=m;var h=i.createContext(null),f=h.Provider,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},g=function(e,t){var n,s=i.useContext(v),m=i.useContext(h),p=i.useContext(u.E_),f=p.getPrefixCls,g=p.direction,y=i.useRef(),Z=(0,c.sQ)(t,y),b=(0,i.useContext)(d.aM).isFormItemInput,j=e.prefixCls,C=e.className,w=e.children,k=e.style,P=x(e,["prefixCls","className","children","style"]),E=f("radio",j),N="button"===((null===s||void 0===s?void 0:s.optionType)||m)?"".concat(E,"-button"):E,O=(0,l.Z)({},P);s&&(O.name=s.name,O.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},O.checked=e.value===s.value,O.disabled=e.disabled||s.disabled);var S=o()("".concat(N,"-wrapper"),(n={},(0,a.Z)(n,"".concat(N,"-wrapper-checked"),O.checked),(0,a.Z)(n,"".concat(N,"-wrapper-disabled"),O.disabled),(0,a.Z)(n,"".concat(N,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(N,"-wrapper-in-form-item"),b),n),C);return i.createElement("label",{className:S,style:k,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(r.Z,(0,l.Z)({},O,{type:"radio",prefixCls:N,ref:Z})),void 0!==w?i.createElement("span",null,w):null)},y=i.forwardRef(g);y.displayName="Radio";const Z=y;var b=n(29439),j=n(10288),C=n(21631),w=n(81176),k=i.forwardRef((function(e,t){var n=i.useContext(u.E_),r=n.getPrefixCls,s=n.direction,c=i.useContext(C.Z),d=(0,j.Z)(e.defaultValue,{value:e.value}),m=(0,b.Z)(d,2),v=m[0],h=m[1];return i.createElement(p,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==n&&l(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,d=e.prefixCls,u=e.className,m=void 0===u?"":u,p=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,x=e.disabled,g=e.children,y=e.size,b=e.style,j=e.id,C=e.onMouseEnter,k=e.onMouseLeave,P=r("radio",d),E="".concat(P,"-group"),N=g;p&&p.length>0&&(N=p.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(Z,{key:e.toString(),prefixCls:P,disabled:x,value:e,checked:v===e},e):i.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||x,value:e.value,checked:v===e.value,style:e.style},e.label)})));var O=y||c,S=o()(E,"".concat(E,"-").concat(f),(n={},(0,a.Z)(n,"".concat(E,"-").concat(O),O),(0,a.Z)(n,"".concat(E,"-rtl"),"rtl"===s),n),m);return i.createElement("div",(0,l.Z)({},(0,w.Z)(e),{className:S,style:b,onMouseEnter:C,onMouseLeave:k,id:j,ref:t}),N)}())}));const P=i.memo(k);var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},N=function(e,t){var n=i.useContext(u.E_).getPrefixCls,a=e.prefixCls,r=E(e,["prefixCls"]),s=n("radio",a);return i.createElement(f,{value:"button"},i.createElement(Z,(0,l.Z)({prefixCls:s},r,{type:"radio",ref:t})))};const O=i.forwardRef(N);var S=Z;S.Button=O,S.Group=P;const F=S},56482:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(4942),i=n(45987),r=n(1413),s=n(15671),o=n(43144),c=n(60136),d=n(54062),u=n(47313),m=n(46123),p=n.n(m),v=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,o.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,s=t.style,o=t.name,c=t.id,d=t.type,m=t.disabled,v=t.readOnly,h=t.tabIndex,f=t.onClick,x=t.onFocus,g=t.onBlur,y=t.onKeyDown,Z=t.onKeyPress,b=t.onKeyUp,j=t.autoFocus,C=t.value,w=t.required,k=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),E=this.state.checked,N=p()(n,r,(e={},(0,l.Z)(e,"".concat(n,"-checked"),E),(0,l.Z)(e,"".concat(n,"-disabled"),m),e));return u.createElement("span",{className:N,style:s},u.createElement("input",(0,a.Z)({name:o,id:c,type:d,required:w,readOnly:v,disabled:m,tabIndex:h,className:"".concat(n,"-input"),checked:!!E,onClick:f,onFocus:x,onBlur:g,onKeyUp:b,onKeyDown:y,onKeyPress:Z,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:C},P)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);
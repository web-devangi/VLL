(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9399],{33834:(e,t,n)=>{"use strict";n.d(t,{K:()=>o});var a=n(97890),r=n(74776),s=n.n(r);const o=()=>{const e=(0,a.s0)(),t=(0,a.TH)(),n=s().parse(t.search,{ignoreQueryPrefix:!0});return{values:n,set:(t,a)=>e({search:s().stringify({...n,[t]:a})}),reset:t=>{const a={...n};a[t]&&delete a[t],e({search:s().stringify({...a})})},clear:()=>e({search:s().stringify({})}),merge:t=>e({search:s().stringify({...n,...t})})}}},70097:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(47313),r=n(2717),s=n(73431),o=n(24511),l=n(68668),i=n(83999),c=n(77181),d=n(40622),u=n(84427),p=n(33834),v=n(90954),m=n(49067),f=n(97890),h=n(20131),y=n(51282),x=n(47918),g=n(46417);const{Step:Z}=i.Z,b=()=>{var e;const{t:t}=(0,o.$)(),{activeMenu:n}=(0,r.v9)((e=>e.menu),r.wU),b=(0,p.K)(),w=Number((null===(e=b.values)||void 0===e?void 0:e.step)||0),[j,C]=(0,a.useState)(n.refetch),k=(0,r.I0)(),{uuid:S}=(0,f.UO)(),{languages:P}=(0,r.v9)((e=>e.formLang),r.wU),E=()=>{const e=w+1;b.set("step",e)},_=()=>{const e=w-1;b.set("step",e)},O=e=>({items:e,uid:e,url:e,name:e});function N(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=P.map((e=>{var n,a,r;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,["address[".concat(e.locale,"]")]:null===(r=t.find((t=>t.locale===e.locale)))||void 0===r?void 0:r.address}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{n.refetch&&S&&(e=>{C(!0),m.Z.getById(e).then((e=>{var t,a,r,s,o;const l={...e.data,...N(e.data),logo_img:O(e.data.logo_img),background_img:O(e.data.background_img),user:"",delivery_time_from:null===(t=e.data)||void 0===t?void 0:t.delivery_time.from,delivery_time_to:null===(a=e.data)||void 0===a?void 0:a.delivery_time.to,delivery_time_type:null===(r=e.data)||void 0===r?void 0:r.delivery_time.type,recommended:"recommended"===e.data.mark,categories:null===(s=e.data)||void 0===s?void 0:s.categories.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),tags:null===(o=e.data)||void 0===o?void 0:o.tags.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))};k((0,v.nc)({activeMenu:n,data:l}))})).finally((()=>{C(!1),k((0,v.A_)(n))}))})(S)}),[n.refetch,w]),(0,g.jsxs)(c.Z,{title:t("shop.clone"),extra:(0,g.jsx)(s.Z,{}),children:[(0,g.jsx)(i.Z,{current:w,onChange:e=>{k((0,v.nc)({activeMenu:n,data:{...n.data,step:e}})),b.set("step",e)},children:l.S.map((e=>(0,g.jsx)(Z,{title:t(e.title)},e.title)))}),j?(0,g.jsx)(y.Z,{}):(0,g.jsxs)("div",{className:"steps-content",children:["First-content"===l.S[w].content&&(0,g.jsx)(d.Z,{next:E,loading:j,user:!0}),"Second-content"===l.S[w].content&&(0,g.jsx)(x.Z,{next:E,prev:_}),"Third-content"===l.S[w].content&&(0,g.jsx)(h.Z,{next:E,prev:_}),"Four-content"===l.S[w].content&&(0,g.jsx)(u.Z,{next:E,prev:_})]})]})}},68668:(e,t,n)=>{"use strict";n.d(t,{S:()=>a});const a=[{title:"shop",content:"First-content"},{title:"shop.locations",content:"Second-content"},{title:"shop.social",content:"Third-content"},{title:"delivery",content:"Fourth-content"},{title:"user",content:"Fifth-content"}]},84427:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(47313),r=n(10976),s=n(97890),o=n(2717),l=n(49986),i=n(23560),c=n(90954),d=n(24511),u=n(51282),p=n(68197),v=n(59624),m=n(66672),f=n(16124),h=n(45705),y=n(59491),x=n(46417);const g=e=>{let{prev:t,loadingBtn:n,error:a}=e;const{t:s}=(0,d.$)();return(0,x.jsxs)(p.Z,{gutter:12,children:[(0,x.jsx)(v.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:s("firstname"),name:"firstname",help:null!==a&&void 0!==a&&a.firstname?a.firstname[0]:null,validateStatus:null!==a&&void 0!==a&&a.firstname?"error":"success",rules:[{required:!0,message:s("required")}],children:(0,x.jsx)(m.Z,{className:"w-100"})})}),(0,x.jsx)(v.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:s("lastname"),name:"lastname",help:null!==a&&void 0!==a&&a.lastname?a.lastname[0]:null,validateStatus:null!==a&&void 0!==a&&a.lastname?"error":"success",rules:[{required:!0,message:s("required")}],children:(0,x.jsx)(m.Z,{className:"w-100"})})}),(0,x.jsx)(v.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:s("phone"),name:"phone",help:null!==a&&void 0!==a&&a.phone?a.phone[0]:null,validateStatus:null!==a&&void 0!==a&&a.phone?"error":"success",rules:[{required:!0,message:s("required")}],children:(0,x.jsx)(f.Z,{min:0,className:"w-100"})})}),(0,x.jsx)(v.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:s("email"),name:"email",help:null!==a&&void 0!==a&&a.email?a.email[0]:null,validateStatus:null!==a&&void 0!==a&&a.email?"error":"success",rules:[{required:!0,message:s("required")}],children:(0,x.jsx)(m.Z,{type:"email",className:"w-100"})})}),(0,x.jsx)(v.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:s("password"),name:"password",help:null!==a&&void 0!==a&&a.password?a.password[0]:null,validateStatus:null!==a&&void 0!==a&&a.password?"error":"success",rules:[{required:!1,message:s("required")},{type:"string",min:6,message:s("min.6.letters")}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,x.jsx)(m.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})}),(0,x.jsx)(v.Z,{span:12,children:(0,x.jsx)(r.Z.Item,{label:s("password.confirmation"),help:null!==a&&void 0!==a&&a.password_confirmation?a.password_confirmation[0]:null,validateStatus:null!==a&&void 0!==a&&a.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!1,message:s("required")},e=>{let{getFieldValue:t}=e;return{validator:(e,n)=>n&&t("password")!==n?Promise.reject(s("passwords.do.not.match")):Promise.resolve()}}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,x.jsx)(m.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})}),(0,x.jsx)(v.Z,{span:24,children:(0,x.jsxs)(h.Z,{children:[(0,x.jsx)(y.Z,{type:"primary",htmlType:"submit",loading:n,children:s("save")}),(0,x.jsx)(y.Z,{htmlType:"submit",onClick:()=>t(),children:s("prev")})]})})]})};var Z=n(44528);function b(e){let{prev:t}=e;const{t:n}=(0,d.$)(),{activeMenu:p}=(0,o.v9)((e=>e.menu),o.wU),v=(0,o.I0)(),m=(0,s.s0)(),[f,h]=(0,a.useState)(null),[y,b]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),[C]=r.Z.useForm();return(0,a.useEffect)((()=>{var e,t,n;null!==p&&void 0!==p&&p.data.seller&&(n=null===p||void 0===p||null===(e=p.data)||void 0===e||null===(t=e.seller)||void 0===t?void 0:t.uuid,j(!0),l.Z.getById(n).then((e=>{const t=e.data;C.setFieldsValue({firstname:t.firstname,lastname:t.lastname,email:t.email,phone:t.phone,password_confirmation:t.password_confirmation,password:t.password})})).finally((()=>j(!1))))}),[]),(0,x.jsx)(x.Fragment,{children:w?(0,x.jsx)(u.Z,{}):(0,x.jsx)(r.Z,{form:C,layout:"vertical",initialValues:{...p.data},onFinish:e=>{var t,a;b(!0);const r={firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,password_confirmation:e.password_confirmation,password:e.password},s="shops";l.Z.update(null===p||void 0===p||null===(t=p.data)||void 0===t||null===(a=t.seller)||void 0===a?void 0:a.uuid,r).then((()=>{i.Am.success(n("successfully.updated")),m("/".concat(s)),v((0,Z.N)({perPage:10,page:1})),v((0,c.ph)({...p,nextUrl:s}))})).catch((e=>h(e.response.data.params))).finally((()=>b(!1)))},className:"py-4",children:(0,x.jsx)(g,{error:f,loadingBtn:y})})})}},39180:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>N});var a=n(4942),r=n(87462),s=n(47313),o=n(56482),l=n(46123),i=n.n(l),c=n(16945),d=n(4431),u=n(91964),p=s.createContext(null),v=p.Provider;const m=p;var f=s.createContext(null),h=f.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=function(e,t){var n,l=s.useContext(m),p=s.useContext(f),v=s.useContext(u.E_),h=v.getPrefixCls,x=v.direction,g=s.useRef(),Z=(0,c.sQ)(t,g),b=(0,s.useContext)(d.aM).isFormItemInput,w=e.prefixCls,j=e.className,C=e.children,k=e.style,S=y(e,["prefixCls","className","children","style"]),P=h("radio",w),E="button"===((null===l||void 0===l?void 0:l.optionType)||p)?"".concat(P,"-button"):P,_=(0,r.Z)({},S);l&&(_.name=l.name,_.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===l||void 0===l?void 0:l.onChange)||void 0===a||a.call(l,t)},_.checked=e.value===l.value,_.disabled=e.disabled||l.disabled);var O=i()("".concat(E,"-wrapper"),(n={},(0,a.Z)(n,"".concat(E,"-wrapper-checked"),_.checked),(0,a.Z)(n,"".concat(E,"-wrapper-disabled"),_.disabled),(0,a.Z)(n,"".concat(E,"-wrapper-rtl"),"rtl"===x),(0,a.Z)(n,"".concat(E,"-wrapper-in-form-item"),b),n),j);return s.createElement("label",{className:O,style:k,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},s.createElement(o.Z,(0,r.Z)({},_,{type:"radio",prefixCls:E,ref:Z})),void 0!==C?s.createElement("span",null,C):null)},g=s.forwardRef(x);g.displayName="Radio";const Z=g;var b=n(29439),w=n(10288),j=n(21631),C=n(81176),k=s.forwardRef((function(e,t){var n=s.useContext(u.E_),o=n.getPrefixCls,l=n.direction,c=s.useContext(j.Z),d=(0,w.Z)(e.defaultValue,{value:e.value}),p=(0,b.Z)(d,2),m=p[0],f=p[1];return s.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var r=e.onChange;r&&a!==n&&r(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,d=e.prefixCls,u=e.className,p=void 0===u?"":u,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,y=e.disabled,x=e.children,g=e.size,b=e.style,w=e.id,j=e.onMouseEnter,k=e.onMouseLeave,S=o("radio",d),P="".concat(S,"-group"),E=x;v&&v.length>0&&(E=v.map((function(e){return"string"===typeof e||"number"===typeof e?s.createElement(Z,{key:e.toString(),prefixCls:S,disabled:y,value:e,checked:m===e},e):s.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:S,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var _=g||c,O=i()(P,"".concat(P,"-").concat(h),(n={},(0,a.Z)(n,"".concat(P,"-").concat(_),_),(0,a.Z)(n,"".concat(P,"-rtl"),"rtl"===l),n),p);return s.createElement("div",(0,r.Z)({},(0,C.Z)(e),{className:O,style:b,onMouseEnter:j,onMouseLeave:k,id:w,ref:t}),E)}())}));const S=s.memo(k);var P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=function(e,t){var n=s.useContext(u.E_).getPrefixCls,a=e.prefixCls,o=P(e,["prefixCls"]),l=n("radio",a);return s.createElement(h,{value:"button"},s.createElement(Z,(0,r.Z)({prefixCls:l},o,{type:"radio",ref:t})))};const _=s.forwardRef(E);var O=Z;O.Button=_,O.Group=S;const N=O},56482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(87462),r=n(4942),s=n(45987),o=n(1413),l=n(15671),i=n(43144),c=n(60136),d=n(54062),u=n(47313),p=n(46123),v=n.n(p),m=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){var a;(0,l.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,i.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,l=t.style,i=t.name,c=t.id,d=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,y=t.onFocus,x=t.onBlur,g=t.onKeyDown,Z=t.onKeyPress,b=t.onKeyUp,w=t.autoFocus,j=t.value,C=t.required,k=(0,s.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),S=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),P=this.state.checked,E=v()(n,o,(e={},(0,r.Z)(e,"".concat(n,"-checked"),P),(0,r.Z)(e,"".concat(n,"-disabled"),p),e));return u.createElement("span",{className:E,style:l},u.createElement("input",(0,a.Z)({name:i,id:c,type:d,required:C,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!P,onClick:h,onFocus:y,onBlur:x,onKeyUp:b,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:w,ref:this.saveInput,value:j},S)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,o.Z)((0,o.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m},24654:()=>{}}]);
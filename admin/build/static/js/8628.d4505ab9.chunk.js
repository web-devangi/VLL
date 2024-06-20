"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8628],{73431:function(e,n,t){var r=t(47313),a=t(39180),i=t(2717),o=t(28830),l=t(60535),s=t(46417);n.Z=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.formLang}),i.wU),t=n.languages,c=n.defaultLang;(0,r.useEffect)((function(){l.Z.getAllActive().then((function(n){var t=n.data;e((0,o.dc)(t)),e((0,o.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.ZP.Group,{value:c,onChange:function(n){var t=n.target.value;e((0,o.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return p}});var r=t(1413),a=t(29439),i=t(45987),o=t(47313),l=t(12279),s=t.n(l),c=t(74294),u=t(72652),d=t(46417),f=["fetchOptions","debounceTimeout","onClear","refetchOptions"],p=function(e){var n=e.fetchOptions,t=e.debounceTimeout,l=void 0===t?400:t,p=e.onClear,m=e.refetchOptions,v=void 0!==m&&m,h=(0,i.Z)(e,f),Z=(0,o.useState)(!1),x=(0,a.Z)(Z,2),g=x[0],y=x[1],b=(0,o.useState)([]),j=(0,a.Z)(b,2),C=j[0],w=j[1],k=(0,o.useMemo)((function(){return s()((function(e){w([]),y(!0),n(e).then((function(e){w(e),y(!1)}))}),l)}),[n,l]);return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),p&&p()},notFoundContent:g?(0,d.jsx)(u.Z,{size:"small"}):"no results"},h),{},{options:C,onFocus:function(){C.length&&!v||k("")}}))}},385:function(e,n,t){var r=t(93433),a=t(1413),i=t(15861),o=t(29439),l=t(87757),s=t.n(l),c=t(47313),u=t(10976),d=t(26824),f=t(68197),p=t(59624),m=t(45705),v=t(15178),h=t(9274),Z=t(59491),x=t(82138),g=t(47515),y=t(5764),b=t(36104),j=t(24511),C=t(46417);n.Z=function(e){var n,t=e.mediaList,l=e.setMediaList,w=e.name,k=void 0===w?"products":w,P=(0,j.$)().t,O=u.Z.useForm(),E=(0,o.Z)(O,1)[0],N=(0,c.useState)(null),S=(0,o.Z)(N,2),F=S[0],L=S[1],I=(0,c.useState)([]),M=(0,o.Z)(I,2),q=M[0],K=M[1],U=(0,c.useState)(!1),T=(0,o.Z)(U,2),D=T[0],V=T[1],B=(0,c.useState)(!1),R=(0,o.Z)(B,2),A=R[0],z=R[1],$=function(){var e=(0,i.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.file,r=n.type,t.name?(L("video"===r?(0,C.jsx)("video",{controls:!0,src:t.name,width:450,height:450}):(0,C.jsx)(d.Z,{src:t.name,width:"100%",height:450,alt:"preview-img"})),V(!0)):L(null);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(e){return{uid:e.title,name:e.title,status:"done",url:e.title,created:!0}};return(0,C.jsxs)(f.Z,{gutter:[24,24],children:[(0,C.jsx)(p.Z,{span:24,children:(0,C.jsx)(m.Z,{className:"align-items-start",children:(0,C.jsx)(v.Z,{customRequest:function(e){var n=e.file,t=e.onSuccess;z(!0);var i=new FormData;i.append("image",n),i.append("type",k),b.Z.upload(i).then((function(e){var n=e.data;l((function(e){return(0,a.Z)((0,a.Z)({},e),{},{images:[].concat((0,r.Z)(e.images),[(0,a.Z)((0,a.Z)({},_(n)),{},{isVideo:!0})])})})),t("ok")}))},accept:"video/*",listType:"text",className:"video-upload",multiple:!1,fileList:[],children:(0,C.jsxs)("div",{className:"media-upload",children:[(0,C.jsx)(x.Z,{})," ",(0,C.jsx)("span",{children:P("upload.video")})]})})})}),(0,C.jsx)(p.Z,{span:24,children:null===t||void 0===t||null===(n=t.previews)||void 0===n?void 0:n.map((function(e,n){var r,a;return(0,C.jsxs)(m.Z,{className:"uploaded-file",wrap:!0,children:[(0,C.jsx)("span",{className:"media-item",onClick:function(){return $({type:"img",file:null===t||void 0===t?void 0:t.previews[n]})},children:null===t||void 0===t||null===(r=t.previews[n])||void 0===r?void 0:r.name}),(0,C.jsx)("span",{className:"media-item",onClick:function(){return $({type:"video",file:null===t||void 0===t?void 0:t.images[n]})},children:null===t||void 0===t||null===(a=t.images[n])||void 0===a?void 0:a.name}),(0,C.jsx)(g.Z,{className:"delete-media-item",onClick:function(){return function(e){var n=t.images.filter((function(n,t){if(t!==e)return n})),r=t.previews.filter((function(n,t){if(t!==e)return n}));l({images:n,previews:r})}(n)}})]})}))}),(0,C.jsx)(h.Z,{title:"Video Preview",visible:D,onCancel:function(){V(!1)},footer:null,children:F}),(0,C.jsx)(h.Z,{title:"Preview image",visible:A,footer:null,children:(0,C.jsx)(u.Z,{form:E,onFinish:function(){l((function(e){return(0,a.Z)((0,a.Z)({},e),{},{previews:[].concat((0,r.Z)(e.previews),(0,r.Z)(q))})})),K([]),z(!1)},layout:"vertical",children:(0,C.jsxs)(f.Z,{gutter:[24,24],children:[(0,C.jsx)(p.Z,{span:24,children:(0,C.jsx)(u.Z.Item,{label:P("preview.image"),name:"preview-image",rules:[{required:!(null!==q&&void 0!==q&&q.length),message:P("required")}],children:(0,C.jsx)(y.Z,{type:k,imageList:q,setImageList:K,multiple:!1,text:"upload.image",form:E})})}),(0,C.jsx)(p.Z,{span:24,className:"d-flex justify-content-end",children:(0,C.jsx)(Z.Z,{type:"primary",onClick:function(){return E.submit()},children:P("save")})})]})})})]})}},75336:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(93433),a=t(4942);function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",i=e.map((function(e){return(0,a.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(i)))}},68628:function(e,n,t){t.r(n);var r=t(1413),a=t(93433),i=t(29439),o=t(47313),l=t(97890),s=t(23560),c=t(10976),u=t(77181),d=t(2717),f=t(90954),p=t(32447),m=t(54872),v=t(24511),h=t(75336),Z=t(73431),x=t(20364),g=t(46417);n.default=function(){var e=(0,v.$)().t,n=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,t=(0,d.I0)(),y=c.Z.useForm(),b=(0,i.Z)(y,1)[0],j=(0,l.s0)(),C=(0,d.v9)((function(e){return e.formLang}),d.wU).languages;(0,o.useEffect)((function(){return function(){var e=b.getFieldsValue(!0);t((0,f.nc)({activeMenu:n,data:e}))}}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Z,{title:e("add.banner"),extra:(0,g.jsx)(Z.Z,{})}),(0,g.jsx)(x.Z,{form:b,handleSubmit:function(i,o,l){var c,u=l.images.map((function(e){return e.name})),v=l.previews.map((function(e){return e.name})),Z={products:null===(c=i.products)||void 0===c?void 0:c.map((function(e){return e.value})),images:[].concat((0,a.Z)(u),(0,a.Z)(o.map((function(e){return e.name})))),previews:v,clickable:!0,title:(0,h.Z)(C,i,"title"),description:(0,h.Z)(C,i,"description")},x="banners";return m.Z.create(Z).then((function(){s.Am.success(e("successfully.created")),(0,d.dC)((function(){t((0,f.ph)((0,r.Z)((0,r.Z)({},n),{},{nextUrl:x}))),t((0,p.f)({}))})),j("/".concat(x))}))}})]})}},20364:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(1413),a=t(29439),i=t(47313),o=t(10976),l=t(68197),s=t(59624),c=t(77181),u=t(66672),d=t(59491),f=t(89281),p=t(5764),m=t(24511),v=t(2717),h=t(17101),Z=t(385),x=t(46417);function g(e){var n,t,g=e.form,y=e.handleSubmit,b=(0,m.$)().t,j=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,C=(0,v.v9)((function(e){return e.formLang}),v.wU),w=C.languages,k=C.defaultLang,P=(0,i.useState)((null===(n=j.data)||void 0===n?void 0:n.img.filter((function(e){return!e.isVideo})))||[]),O=(0,a.Z)(P,2),E=O[0],N=O[1],S=(0,i.useState)(!1),F=(0,a.Z)(S,2),L=F[0],I=F[1],M=(0,i.useState)((null===j||void 0===j||null===(t=j.data)||void 0===t?void 0:t.initialMediaFile)||{images:[],previews:[]}),q=(0,a.Z)(M,2),K=q[0],U=q[1];return(0,x.jsx)(o.Z,{name:"banner-form",layout:"vertical",onFinish:function(e){I(!0),y(e,E,K).finally((function(){return I(!1)}))},form:g,initialValues:(0,r.Z)({clickable:!0},j.data),className:"d-flex flex-column h-100",children:(0,x.jsxs)(l.Z,{gutter:[24,24],children:[(0,x.jsx)(s.Z,{span:16,children:(0,x.jsxs)(l.Z,{gutter:[24,24],children:[(0,x.jsx)(s.Z,{span:24,children:(0,x.jsx)(c.Z,{title:b("images"),className:"h-100",children:(0,x.jsx)(o.Z.Item,{rules:[{required:!E.length,message:b("required")}],label:b("image"),name:"images",children:(0,x.jsx)(p.Z,{type:"banners",imageList:E,setImageList:N,form:g,length:"1",multiple:!1})})})}),(0,x.jsx)(s.Z,{span:24,children:(0,x.jsx)(c.Z,{title:b("video"),className:"h-100",children:(0,x.jsx)(Z.Z,{name:"banners",form:g,mediaList:K,setMediaList:U})})})]})}),(0,x.jsx)(s.Z,{span:8,children:(0,x.jsxs)(c.Z,{title:b("basic.info"),className:"h-100",children:[w.map((function(e){return(0,x.jsx)(o.Z.Item,{label:b("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===k,message:b("required")},{validator:function(e,n){return n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(b("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(b("must.be.at.least.2"))):Promise.resolve()}}],hidden:e.locale!==k,children:(0,x.jsx)(u.Z,{maxLength:50})},"title"+e.locale)})),w.map((function(e){return(0,x.jsx)(o.Z.Item,{label:b("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===k,message:b("required")},{validator:function(e,n){return n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(b("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(b("must.be.at.least.5"))):Promise.resolve()}}],hidden:e.locale!==k,children:(0,x.jsx)(u.Z.TextArea,{maxLength:150})},"description"+e.locale)})),(0,x.jsx)(o.Z.Item,{label:b("products"),name:"products",rules:[{required:!0,message:b("required")}],children:(0,x.jsx)(f.h,{mode:"multiple",fetchOptions:function(e){var n={search:e,perPage:10,status:"published"};return h.Z.getAll(n).then((function(e){return e.data.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}}))}))},debounceTimeout:200})})]})}),(0,x.jsx)(s.Z,{span:24,children:(0,x.jsx)("div",{className:"d-flex justify-content-end",children:(0,x.jsx)("div",{className:"pb-5",children:(0,x.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:L,children:b("submit")})})})})]})})}},39180:function(e,n,t){t.d(n,{ZP:function(){return F}});var r=t(4942),a=t(87462),i=t(47313),o=t(56482),l=t(46123),s=t.n(l),c=t(16945),u=t(4431),d=t(91964),f=i.createContext(null),p=f.Provider,m=f,v=i.createContext(null),h=v.Provider,Z=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},x=function(e,n){var t,l=i.useContext(m),f=i.useContext(v),p=i.useContext(d.E_),h=p.getPrefixCls,x=p.direction,g=i.useRef(),y=(0,c.sQ)(n,g),b=(0,i.useContext)(u.aM).isFormItemInput,j=e.prefixCls,C=e.className,w=e.children,k=e.style,P=Z(e,["prefixCls","className","children","style"]),O=h("radio",j),E="button"===((null===l||void 0===l?void 0:l.optionType)||f)?"".concat(O,"-button"):O,N=(0,a.Z)({},P);l&&(N.name=l.name,N.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===l||void 0===l?void 0:l.onChange)||void 0===r||r.call(l,n)},N.checked=e.value===l.value,N.disabled=e.disabled||l.disabled);var S=s()("".concat(E,"-wrapper"),(t={},(0,r.Z)(t,"".concat(E,"-wrapper-checked"),N.checked),(0,r.Z)(t,"".concat(E,"-wrapper-disabled"),N.disabled),(0,r.Z)(t,"".concat(E,"-wrapper-rtl"),"rtl"===x),(0,r.Z)(t,"".concat(E,"-wrapper-in-form-item"),b),t),C);return i.createElement("label",{className:S,style:k,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(o.Z,(0,a.Z)({},N,{type:"radio",prefixCls:E,ref:y})),void 0!==w?i.createElement("span",null,w):null)},g=i.forwardRef(x);g.displayName="Radio";var y=g,b=t(29439),j=t(10288),C=t(21631),w=t(81176),k=i.forwardRef((function(e,n){var t=i.useContext(d.E_),o=t.getPrefixCls,l=t.direction,c=i.useContext(C.Z),u=(0,j.Z)(e.defaultValue,{value:e.value}),f=(0,b.Z)(u,2),m=f[0],v=f[1];return i.createElement(p,{value:{onChange:function(n){var t=m,r=n.target.value;"value"in e||v(r);var a=e.onChange;a&&r!==t&&a(n)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,v=e.buttonStyle,h=void 0===v?"outline":v,Z=e.disabled,x=e.children,g=e.size,b=e.style,j=e.id,C=e.onMouseEnter,k=e.onMouseLeave,P=o("radio",u),O="".concat(P,"-group"),E=x;p&&p.length>0&&(E=p.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(y,{key:e.toString(),prefixCls:P,disabled:Z,value:e,checked:m===e},e):i.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||Z,value:e.value,checked:m===e.value,style:e.style},e.label)})));var N=g||c,S=s()(O,"".concat(O,"-").concat(h),(t={},(0,r.Z)(t,"".concat(O,"-").concat(N),N),(0,r.Z)(t,"".concat(O,"-rtl"),"rtl"===l),t),f);return i.createElement("div",(0,a.Z)({},(0,w.Z)(e),{className:S,style:b,onMouseEnter:C,onMouseLeave:k,id:j,ref:n}),E)}())})),P=i.memo(k),O=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},E=function(e,n){var t=i.useContext(d.E_).getPrefixCls,r=e.prefixCls,o=O(e,["prefixCls"]),l=t("radio",r);return i.createElement(h,{value:"button"},i.createElement(y,(0,a.Z)({prefixCls:l},o,{type:"radio",ref:n})))},N=i.forwardRef(E),S=y;S.Button=N,S.Group=P;var F=S},56482:function(e,n,t){var r=t(87462),a=t(4942),i=t(45987),o=t(1413),l=t(15671),s=t(43144),c=t(60136),u=t(29388),d=t(47313),f=t(46123),p=t.n(f),m=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;(0,l.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,o.Z)((0,o.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,s.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,o=n.className,l=n.style,s=n.name,c=n.id,u=n.type,f=n.disabled,m=n.readOnly,v=n.tabIndex,h=n.onClick,Z=n.onFocus,x=n.onBlur,g=n.onKeyDown,y=n.onKeyPress,b=n.onKeyUp,j=n.autoFocus,C=n.value,w=n.required,k=(0,i.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(k).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=k[n]),e}),{}),O=this.state.checked,E=p()(t,o,(e={},(0,a.Z)(e,"".concat(t,"-checked"),O),(0,a.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:E,style:l},d.createElement("input",(0,r.Z)({name:s,id:c,type:u,required:w,readOnly:m,disabled:f,tabIndex:v,className:"".concat(t,"-input"),checked:!!O,onClick:h,onFocus:Z,onBlur:x,onKeyUp:b,onKeyDown:g,onKeyPress:y,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:C},P)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,o.Z)((0,o.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=m}}]);
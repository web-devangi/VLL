"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[293],{89802:function(e,n,t){t.d(n,{q:function(){return d}});var a=t(1413),r=t(29439),i=t(45987),l=t(47313),o=t(74294),s=t(72652),c=t(46417),u=["fetchOptions","refetch","value"],d=function(e){var n=e.fetchOptions,t=e.refetch,d=void 0!==t&&t,m=e.value,v=(0,i.Z)(e,u),f=(0,l.useState)(!1),p=(0,r.Z)(f,2),h=p[0],Z=p[1],x=(0,l.useState)([]),y=(0,r.Z)(x,2),b=y[0],j=y[1];"object"===typeof(null===m||void 0===m?void 0:m.label)&&null!==(null===m||void 0===m?void 0:m.label)&&(m.label=m.label.value);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.Z,(0,a.Z)((0,a.Z)({labelInValue:!0,filterOption:!1,notFoundContent:h?(0,c.jsx)(s.Z,{size:"small"}):"no results",value:m},v),{},{options:h?[]:b,onFocus:function(){b.length&&!d||(Z(!0),n().then((function(e){j(e),Z(!1)})))}}))})}},73431:function(e,n,t){var a=t(47313),r=t(39180),i=t(2717),l=t(28830),o=t(60535),s=t(46417);n.Z=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.formLang}),i.wU),t=n.languages,c=n.defaultLang;(0,a.useEffect)((function(){o.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.ZP.Group,{value:c,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},33403:function(e,n,t){var a=t(34344),r={getAll:function(e){return a.Z.get("dashboard/seller/units/paginate",{params:e})},getById:function(e,n){return a.Z.get("dashboard/seller/units/".concat(e),{params:n})}};n.Z=r},32723:function(e,n,t){var a=t(1413),r=t(93433),i=t(4942),l=t(29439),o=t(47313),s=t(83371),c=t(45705),u=t(59491),d=t(72652),m=t(2717),v=t(97890),f=t(90954),p=t(24511),h=t(18333),Z=t(81890),x=t(46417);n.Z=function(e){var n,t,y,b=e.prev,j=(0,p.$)().t,g=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,k=(0,m.v9)((function(e){return e.formLang}),m.wU),C=k.defaultLang,w=k.languages,I=(0,v.s0)(),q=(0,m.I0)(),E=(0,o.useState)({}),O=(0,l.Z)(E,2),P=O[0],N=O[1],F=(0,o.useState)(null),S=(0,l.Z)(F,2),U=S[0],M=S[1],K=(0,v.UO)().uuid,_=(0,m.v9)((function(e){return e.addons}),m.wU).params;function L(e){M(!0),h.Z.getById(e).then((function(e){var n=(0,a.Z)((0,a.Z)((0,a.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var n=e.translations,t=w.map((function(e){var t,a,r;return r={},(0,i.Z)(r,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,i.Z)(r,"description[".concat(e.locale,"]"),null===(a=n.find((function(n){return n.locale===e.locale})))||void 0===a?void 0:a.description),r}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(t)))}(e.data)),{},{properties:e.data.properties.map((function(e,n){var t;return t={id:n},(0,i.Z)(t,"key[".concat(e.locale,"]"),e.key),(0,i.Z)(t,"value[".concat(e.locale,"]"),e.value),t})),translation:void 0,translations:void 0});N(n)})).finally((function(){return M(!1)}))}return(0,o.useEffect)((function(){L(K)}),[]),U?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(s.Z,{title:j("product.info"),bordered:!0,children:[(0,x.jsx)(s.Z.Item,{label:"".concat(j("title")," (").concat(C,")"),span:3,children:P["title[".concat(C,"]")]}),(0,x.jsx)(s.Z.Item,{label:"".concat(j("description")," (").concat(C,")"),span:3,children:P["description[".concat(C,"]")]}),(0,x.jsx)(s.Z.Item,{label:j("shop"),span:1.5,children:null===(n=P.shop)||void 0===n?void 0:n.translation.title}),(0,x.jsx)(s.Z.Item,{label:j("unit"),span:1.5,children:null===(t=P.unit)||void 0===t?void 0:t.translation.title}),(0,x.jsx)(s.Z.Item,{label:j("tax"),children:P.tax}),(0,x.jsx)(s.Z.Item,{label:j("min.quantity"),children:P.min_qty}),(0,x.jsx)(s.Z.Item,{label:j("max.quantity"),children:P.max_qty})]}),null===(y=P.stocks)||void 0===y?void 0:y.map((function(e,n){return e?(0,x.jsxs)(s.Z,{bordered:!0,className:"mt-4",children:[(0,x.jsx)(s.Z.Item,{label:j("price"),span:2,children:e.price}),(0,x.jsx)(s.Z.Item,{label:j("quantity"),span:2,children:e.quantity}),e.extras.map((function(e,n){var t,a;return(0,x.jsx)(s.Z.Item,{label:null===e||void 0===e||null===(t=e.group)||void 0===t||null===(a=t.translation)||void 0===a?void 0:a.title,children:null===e||void 0===e?void 0:e.value},"extra"+n)}))]},"desc"+n):""})),(0,x.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(u.Z,{onClick:b,children:j("prev")}),(0,x.jsx)(u.Z,{type:"primary",onClick:function(){var e=(0,a.Z)({},_),n="seller/addons";I("/".concat(n)),q((0,f.ph)((0,a.Z)((0,a.Z)({},g),{},{nextUrl:n}))),q((0,Z.I4)(e)),q((0,f.A_)(g))},children:j("finish")})]})})]})}},33072:function(e,n,t){var a=t(1413),r=t(29439),i=t(47313),l=t(10976),o=t(68197),s=t(59624),c=t(77181),u=t(66672),d=t(16124),m=t(86345),v=t(59491),f=t(2717),p=t(18333),h=t(90954),Z=t(97890),x=t(24511),y=t(33403),b=t(49080),j=t(89802),g=t(46417);n.Z=function(e){var n=e.next,t=e.action_type,k=void 0===t?"":t,C=(0,x.$)().t,w=l.Z.useForm(),I=(0,r.Z)(w,1)[0],q=(0,f.I0)(),E=(0,Z.UO)().uuid,O=(0,Z.s0)(),P=(0,i.useState)(null),N=(0,r.Z)(P,2),F=(N[0],N[1]),S=(0,f.v9)((function(e){return e.myShop}),f.wU).myShop,U=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,M=(0,f.v9)((function(e){return e.formLang}),f.wU),K=M.defaultLang,_=M.languages,L=(0,i.useState)(!1),B=(0,r.Z)(L,2),D=B[0],A=B[1];(0,i.useEffect)((function(){return function(){var e=I.getFieldsValue(!0);q((0,h.nc)({activeMenu:U,data:(0,a.Z)((0,a.Z)({},U.data),e)}))}}),[]);return(0,g.jsxs)(l.Z,{layout:"vertical",form:I,initialValues:(0,a.Z)({active:!0},U.data),onFinish:function(e){var t;A(!0);var r=(0,a.Z)((0,a.Z)({},e),{},{active:Number(e.active),shop_id:S.id,unit_id:null===(t=e.unit)||void 0===t?void 0:t.value,shop:void 0,addon:Number(1)});"edit"===k?function(e,t){p.Z.update(E,t).then((function(){q((0,h.nc)({activeMenu:U,data:e})),n()})).catch((function(e){return F(e.response.data.params)})).finally((function(){return A(!1)}))}(e,r):function(e,n){p.Z.create(n).then((function(n){var t=n.data;q((0,h.SS)({id:"addons-".concat(t.uuid),url:"seller/addon/".concat(t.uuid),name:C("add.addons"),data:e,refetch:!1})),O("/seller/addon/".concat(t.uuid,"?step=1"))})).catch((function(e){return F(e.response.data.params)})).finally((function(){return A(!1)}))}(e,r)},className:"addon-menu",children:[(0,g.jsxs)(o.Z,{gutter:12,children:[(0,g.jsxs)(s.Z,{xs:24,sm:24,md:16,children:[(0,g.jsxs)(c.Z,{title:C("basic.info"),children:[_.map((function(e){return(0,g.jsx)(l.Z.Item,{label:C("name"),name:"title[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==K?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(C("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(C("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(C("required")))}}],hidden:e.locale!==K,children:(0,g.jsx)(u.Z,{})},"name"+e.id)})),_.map((function(e){return(0,g.jsx)(l.Z.Item,{label:C("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==K?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(C("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(C("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(C("required")))}}],hidden:e.locale!==K,children:(0,g.jsx)(b.Z,{rows:4,span:4})},"description"+e.id)}))]}),(0,g.jsx)(c.Z,{title:C("price"),children:(0,g.jsxs)(o.Z,{gutter:12,children:[(0,g.jsx)(s.Z,{span:12,children:(0,g.jsx)(l.Z.Item,{label:C("min.qty"),name:"min_qty",rules:[{required:!0,message:C("required")},{type:"number",min:0,message:C("must.be.positive")}],children:(0,g.jsx)(d.Z,{className:"w-100"})})}),(0,g.jsx)(s.Z,{span:12,children:(0,g.jsx)(l.Z.Item,{label:C("max.qty"),name:"max_qty",rules:[{required:!0,message:C("required")},{type:"number",min:0,message:C("must.be.positive")}],children:(0,g.jsx)(d.Z,{className:"w-100"})})}),(0,g.jsx)(s.Z,{span:12,children:(0,g.jsx)(l.Z.Item,{label:C("tax"),name:"tax",rules:[{required:!0,message:C("required")},{type:"number",min:0,max:100,message:C("must.be.between.0.and.100")}],children:(0,g.jsx)(d.Z,{className:"w-100",addonAfter:"%"})})}),(0,g.jsx)(s.Z,{span:12,children:(0,g.jsx)(l.Z.Item,{label:C("active"),name:"active",valuePropName:"checked",children:(0,g.jsx)(m.Z,{})})})]})})]}),(0,g.jsx)(s.Z,{xs:24,sm:24,md:8,children:(0,g.jsx)(c.Z,{title:C("addition"),children:(0,g.jsx)(l.Z.Item,{label:C("unit"),name:"unit",rules:[{required:!0,message:C("required")}],children:(0,g.jsx)(j.q,{style:{width:"100%"},fetchOptions:function(e){var n={search:e,active:1};return y.Z.getAll(n).then((function(e){return function(e){return e.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))}(e.data)}))}})})})})]}),(0,g.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:D,children:C("next")})]})}},1939:function(e,n,t){var a=t(29439),r=t(47313),i=t(10976),l=t(68197),o=t(59624),s=t(16124),c=t(66672),u=t(45705),d=t(59491),m=t(2717),v=t(18333),f=t(24511),p=t(97890),h=t(90954),Z=t(46417);n.Z=function(e){var n=e.prev,t=e.next,x=(e.current,(0,f.$)().t),y=i.Z.useForm(),b=(0,a.Z)(y,1)[0],j=(0,p.UO)().uuid,g=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,k=(0,r.useState)(null),C=(0,a.Z)(k,2),w=C[0],I=C[1],q=(0,m.I0)();return(0,r.useEffect)((function(){var e,n,t,a,r,i;q((0,h.xo)(g)),b.setFieldsValue({price:null!==(e=g.data)&&void 0!==e&&null!==(n=e.stocks)&&void 0!==n&&n.length?g.data.stocks[0].price:null,quantity:null!==(t=g.data)&&void 0!==t&&null!==(a=t.stocks)&&void 0!==a&&a.length?g.data.stocks[0].quantity:null,sku:null!==(r=g.data)&&void 0!==r&&null!==(i=r.stocks)&&void 0!==i&&i.length?g.data.stocks[0].sku:null})}),[]),(0,Z.jsxs)(i.Z,{layout:"vertical",form:b,onFinish:function(e){var n;I(!0),n=[{price:e.price,quantity:e.quantity,sku:e.sku}],v.Z.stocks(j,{extras:n}).then((function(){return t()})).finally((function(){return I(!1)}))},children:[(0,Z.jsxs)(l.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(i.Z.Item,{label:x("price"),name:"price",rules:[{required:!0,message:x("required")},{type:"number",min:1,message:x("must.be.at.least.1")}],children:(0,Z.jsx)(s.Z,{className:"w-100",style:{minWidth:200}})})}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(i.Z.Item,{label:x("quantity"),name:"quantity",rules:[{required:!0,message:x("required")},{type:"number",min:1,message:x("must.be.at.least.1")}],children:(0,Z.jsx)(s.Z,{className:"w-100",style:{minWidth:200}})})}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(i.Z.Item,{label:x("sku"),name:"sku",children:(0,Z.jsx)(c.Z,{style:{minWidth:200}})})})]}),(0,Z.jsxs)(u.Z,{className:"mt-4",children:[(0,Z.jsx)(d.Z,{onClick:n,children:x("prev")}),(0,Z.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:!!w,children:x("next")})]})]})}},82494:function(e,n,t){t.d(n,{S:function(){return a}});var a=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]},39180:function(e,n,t){t.d(n,{ZP:function(){return N}});var a=t(4942),r=t(87462),i=t(47313),l=t(56482),o=t(46123),s=t.n(o),c=t(16945),u=t(4431),d=t(91964),m=i.createContext(null),v=m.Provider,f=m,p=i.createContext(null),h=p.Provider,Z=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},x=function(e,n){var t,o=i.useContext(f),m=i.useContext(p),v=i.useContext(d.E_),h=v.getPrefixCls,x=v.direction,y=i.useRef(),b=(0,c.sQ)(n,y),j=(0,i.useContext)(u.aM).isFormItemInput,g=e.prefixCls,k=e.className,C=e.children,w=e.style,I=Z(e,["prefixCls","className","children","style"]),q=h("radio",g),E="button"===((null===o||void 0===o?void 0:o.optionType)||m)?"".concat(q,"-button"):q,O=(0,r.Z)({},I);o&&(O.name=o.name,O.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===o||void 0===o?void 0:o.onChange)||void 0===a||a.call(o,n)},O.checked=e.value===o.value,O.disabled=e.disabled||o.disabled);var P=s()("".concat(E,"-wrapper"),(t={},(0,a.Z)(t,"".concat(E,"-wrapper-checked"),O.checked),(0,a.Z)(t,"".concat(E,"-wrapper-disabled"),O.disabled),(0,a.Z)(t,"".concat(E,"-wrapper-rtl"),"rtl"===x),(0,a.Z)(t,"".concat(E,"-wrapper-in-form-item"),j),t),k);return i.createElement("label",{className:P,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(l.Z,(0,r.Z)({},O,{type:"radio",prefixCls:E,ref:b})),void 0!==C?i.createElement("span",null,C):null)},y=i.forwardRef(x);y.displayName="Radio";var b=y,j=t(29439),g=t(10288),k=t(21631),C=t(81176),w=i.forwardRef((function(e,n){var t=i.useContext(d.E_),l=t.getPrefixCls,o=t.direction,c=i.useContext(k.Z),u=(0,g.Z)(e.defaultValue,{value:e.value}),m=(0,j.Z)(u,2),f=m[0],p=m[1];return i.createElement(v,{value:{onChange:function(n){var t=f,a=n.target.value;"value"in e||p(a);var r=e.onChange;r&&a!==t&&r(n)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,m=void 0===d?"":d,v=e.options,p=e.buttonStyle,h=void 0===p?"outline":p,Z=e.disabled,x=e.children,y=e.size,j=e.style,g=e.id,k=e.onMouseEnter,w=e.onMouseLeave,I=l("radio",u),q="".concat(I,"-group"),E=x;v&&v.length>0&&(E=v.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(b,{key:e.toString(),prefixCls:I,disabled:Z,value:e,checked:f===e},e):i.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:I,disabled:e.disabled||Z,value:e.value,checked:f===e.value,style:e.style},e.label)})));var O=y||c,P=s()(q,"".concat(q,"-").concat(h),(t={},(0,a.Z)(t,"".concat(q,"-").concat(O),O),(0,a.Z)(t,"".concat(q,"-rtl"),"rtl"===o),t),m);return i.createElement("div",(0,r.Z)({},(0,C.Z)(e),{className:P,style:j,onMouseEnter:k,onMouseLeave:w,id:g,ref:n}),E)}())})),I=i.memo(w),q=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},E=function(e,n){var t=i.useContext(d.E_).getPrefixCls,a=e.prefixCls,l=q(e,["prefixCls"]),o=t("radio",a);return i.createElement(h,{value:"button"},i.createElement(b,(0,r.Z)({prefixCls:o},l,{type:"radio",ref:n})))},O=i.forwardRef(E),P=b;P.Button=O,P.Group=I;var N=P},56482:function(e,n,t){var a=t(87462),r=t(4942),i=t(45987),l=t(1413),o=t(15671),s=t(43144),c=t(60136),u=t(29388),d=t(47313),m=t(46123),v=t.n(m),f=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,o.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,s.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,o=n.style,s=n.name,c=n.id,u=n.type,m=n.disabled,f=n.readOnly,p=n.tabIndex,h=n.onClick,Z=n.onFocus,x=n.onBlur,y=n.onKeyDown,b=n.onKeyPress,j=n.onKeyUp,g=n.autoFocus,k=n.value,C=n.required,w=(0,i.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),I=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),q=this.state.checked,E=v()(t,l,(e={},(0,r.Z)(e,"".concat(t,"-checked"),q),(0,r.Z)(e,"".concat(t,"-disabled"),m),e));return d.createElement("span",{className:E,style:o},d.createElement("input",(0,a.Z)({name:s,id:c,type:u,required:C,readOnly:f,disabled:m,tabIndex:p,className:"".concat(t,"-input"),checked:!!q,onClick:h,onFocus:Z,onBlur:x,onKeyUp:j,onKeyDown:y,onKeyPress:b,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:k},I)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=f}}]);
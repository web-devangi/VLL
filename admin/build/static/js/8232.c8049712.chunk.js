"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8232],{51988:(e,t,n)=>{n.d(t,{Z:()=>d});n(47313);var a=n(24511),i=n(66188);const l=n.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",r=n.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=n.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var s=n(46417);const d=function(e){let{id:t="noresult",text:n=""}=e;const{t:d}=(0,a.$)(),c={src:{noproductsfound:l,noresult:r,nosell:o}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,i.useRive)(c);return(0,s.jsxs)("div",{className:"animation-canvas",children:[(0,s.jsx)("div",{style:{width:"100%",height:200},children:(0,s.jsx)(u,{})}),(0,s.jsx)("div",{className:"text",children:d(n)})]})}},31247:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(47313),i=n(72652),l=n(15178),r=n(55291),o=n(82138),s=n(36104),d=n(24511),c=n(46417);const u=e=>{let{fileList:t=[],setFileList:n,type:u,id:v}=e;const{t:p}=(0,d.$)(),[m,h]=(0,a.useState)(!1),x=m?(0,c.jsx)(i.Z,{}):(0,c.jsx)(o.Z,{}),f=t.find((e=>e.id===v))||[];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.Z,{listType:"picture-card",fileList:(null===f||void 0===f?void 0:f.galleries)||(null===f||void 0===f?void 0:f.images),customRequest:e=>{let{file:a,onSuccess:i}=e;h(!0);const l=new FormData;l.append("image",a),l.append("type",u),s.Z.upload(l).then((e=>{let{data:a}=e;((e,a)=>{if(t.findIndex((t=>t.id===e))>=0){const i=t.map((t=>t.id===e?{id:e,images:[...t.images,a]}:t));n(i)}else n((t=>[...t,{id:e,images:[a]}]))})(v,(e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0}))(a)),i("ok")})).finally((()=>{h(!1)}))},onRemove:e=>{const a=t.map((t=>{if(t.id===v){const n=t.images.filter((t=>t.uid!==e.uid));return 0===n.length?null:{...t,images:n}}return t})).filter((e=>null!==e));n(a)},showUploadList:!0,accept:".png,.jpg,.jpeg,.webp",beforeUpload:e=>!!(e.size/1024/1024<2)||(r.ZP.error(p("max.2.mb")),!1),children:x})})}},17899:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(34344);const i={create:e=>a.Z.post("dashboard/admin/digital-files",e,{})}},87882:(e,t,n)=>{n.d(t,{Z:()=>p});n(47313);var a=n(77181),i=n(45705),l=n(59491),r=n(24511),o=n(91107),s=n(66736),d=n(23560),c=n(17899),u=n(2717),v=n(46417);function p(e){let{prev:t,next:n}=e;const{t:p}=(0,r.$)(),{activeMenu:m}=(0,u.v9)((e=>e.menu),u.wU);return(0,v.jsxs)(a.Z,{bordered:!1,className:"mb-0",children:[(0,v.jsxs)(o.Z,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{var t;let{file:n,onSuccess:a,onError:i}=e;const l=new FormData;l.append("file",n),l.append("active",1),l.append("product_id",null===(t=m.data)||void 0===t?void 0:t.id),c.Z.create(l).then((()=>{d.Am.success(p("successfully.import")),a("ok")})).catch((e=>{console.log("upload error",e),i("error"),d.Am.error(p("file.upload.error"))}))},accept:".zip",children:[(0,v.jsx)("p",{className:"ant-upload-drag-icon",children:(0,v.jsx)(s.Z,{})}),(0,v.jsx)("p",{className:"ant-upload-text",children:p("upload-drag")}),(0,v.jsx)("p",{className:"ant-upload-hint",children:p("upload-text")})]}),(0,v.jsxs)(i.Z,{className:"mt-3",children:[(0,v.jsx)(l.Z,{onClick:t,children:p("prev")}),(0,v.jsx)(l.Z,{type:"primary",onClick:n,children:p("next")})]})]})}},34144:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(47313),i=n(69888),l=n(23885),r=n(77181),o=n(37388),s=n(45705),d=n(68197),c=n(59624),u=n(41068),v=n(46155),p=n(59491),m=n(34273),h=n(2717),x=n(31247),f=n(17101),y=n(46417);const Z=e=>{var t;let{prev:n,next:Z}=e;const[g,j]=(0,a.useState)([]),{activeMenu:b}=(0,h.v9)((e=>e.menu),h.wU),{newExtras:C}=(null===b||void 0===b?void 0:b.data)||{},k=(0,a.useMemo)((()=>null===C||void 0===C?void 0:C.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[C]),N=Array.from(new Set(null===k||void 0===k||null===(t=k.values)||void 0===t?void 0:t.map((e=>e.value)))).map((e=>{var t;return null===k||void 0===k||null===(t=k.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),w=e=>({uid:e.path,name:e.path,status:"done",url:e.path,created:!0});return(0,a.useEffect)((()=>{(()=>{const e=b.data.stocks.map((e=>{let{id:t,galleries:n}=e;return{id:t,images:(null===n||void 0===n?void 0:n.map(w))||[]}}));j(e)})()}),[b.data]),(0,y.jsxs)(r.Z,{title:(0,y.jsx)(o.Z,{placement:"topLeft",title:"In the process of internal desktop applications development",children:(0,y.jsxs)(s.Z,{children:[(0,l.t)("add.media.file"),(0,y.jsx)(i.Z,{style:{fontSize:16,cursor:"pointer"}})]})}),children:[(0,y.jsx)(d.Z,{gutter:[24,24],children:null===N||void 0===N?void 0:N.map((e=>{let{label:t,stock_id:n,value:a}=e;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(c.Z,{span:24,children:[(0,y.jsx)(s.Z,{className:"mb-4",children:(0,y.jsx)(u.Z,{color:t||a,className:"extras-color-badge",text:"".concat(t||a," - ").concat((0,m.B)(t||a))})}),(0,y.jsx)(x.Z,{id:n,fileList:g,setFileList:j,type:"stocks"})]}),(0,y.jsx)(v.Z,{})]})}))}),(0,y.jsxs)(s.Z,{className:"mt-4",children:[(0,y.jsx)(p.Z,{onClick:n,children:(0,l.t)("prev")}),(0,y.jsx)(p.Z,{type:"primary",htmlType:"submit",onClick:()=>{if(!g.length)return void Z();const e=g.map((e=>({...e,images:e.images.map((e=>e.name))})));f.Z.updateStocks({data:e}).then((()=>{Z()})).catch((e=>{console.log(e)}))},children:(0,l.t)("next")})]})]})}},56326:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(47313),i=n(35432),l=n(10976),r=n(77181),o=n(68197),s=n(59624),d=n(16124),c=n(59491),u=n(45705),v=n(24511),p=n(2717),m=n(47515),h=n(82138),x=n(34273),f=n(17101),y=n(97890),Z=n(51988),g=n(46417);const{Panel:j}=i.Z,b=e=>{var t,n;return(0,g.jsx)("div",{children:(0,g.jsx)("p",{hidden:!(null!==e&&void 0!==e&&null!==(t=e.extras)&&void 0!==t&&t.length),children:null===e||void 0===e||null===(n=e.extras)||void 0===n?void 0:n.map((e=>{var t,n,a,i,l,r,o,s;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)?(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",columnGap:"5px"},children:[null===(n=e.group)||void 0===n||null===(a=n.translation)||void 0===a?void 0:a.title,":"," ",(0,x.B)(null===e||void 0===e||null===(i=e.value)||void 0===i?void 0:i.value)," (",(0,g.jsx)("span",{style:{display:"block",width:"15px",height:"15px",backgroundColor:"".concat(null===e||void 0===e||null===(l=e.value)||void 0===l?void 0:l.value),borderRadius:"50%",border:"1px solid #ccc"}}),")"]},null===e||void 0===e?void 0:e.id):(0,g.jsxs)("div",{children:[null===(r=e.group)||void 0===r||null===(o=r.translation)||void 0===o?void 0:o.title,": ",null===(s=e.value)||void 0===s?void 0:s.value]},null===e||void 0===e?void 0:e.id)}))})})};const C=function(e){var t,n,x,C,k,N,w;let{prev:I,next:P}=e;const{t:E}=(0,v.$)(),[q]=l.Z.useForm(),{uuid:A}=(0,y.UO)(),{activeMenu:_}=(0,p.v9)((e=>e.menu),p.wU),K=null===_||void 0===_||null===(t=_.data)||void 0===t||null===(n=t.stocksData)||void 0===n?void 0:n.some((e=>{var t;return!(null===e||void 0===e||null===(t=e.extras)||void 0===t||!t.length)})),S=(null===(x=_.data)||void 0===x?void 0:x.stocksData)||[],F=null!==(C=_.data)&&void 0!==C&&C.min_qty?null===(k=_.data)||void 0===k?void 0:k.min_qty:1,R=null!==(N=_.data)&&void 0!==N&&N.max_qty?null===(w=_.data)||void 0===w?void 0:w.max_qty:1,[L,M]=(0,a.useState)(!1),[U,z]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{M(!0),f.Z.getById(A).then((e=>{var t,n;const a=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.stocks)||void 0===n?void 0:n.map((e=>({[null===e||void 0===e?void 0:e.id]:null===e||void 0===e?void 0:e.whole_sale_prices})));q.setFieldsValue(Object.assign({},...a))})).finally((()=>M(!1)))}),[]),(0,g.jsx)(r.Z,{loading:L,children:(0,g.jsxs)(l.Z,{form:q,layout:"vertical",onFinish:e=>{if(!K)return P();z(!0);const t=null===S||void 0===S?void 0:S.map((t=>{var n;const a=(null===e||void 0===e?void 0:e[null===t||void 0===t?void 0:t.id])||[];return{ids:null===t||void 0===t||null===(n=t.extras)||void 0===n?void 0:n.map((e=>null===e||void 0===e?void 0:e.extra_value_id)),galleries:null===t||void 0===t?void 0:t.galleries,price:null===t||void 0===t?void 0:t.price,quantity:null===t||void 0===t?void 0:t.quantity,stock_id:null===t||void 0===t?void 0:t.id,whole_sales:a}}));f.Z.stocks(A,{extras:t}).then((()=>P())).finally((()=>z(!1)))},children:[K?(0,g.jsx)(i.Z,{children:S.map((e=>{const t=null===e||void 0===e?void 0:e.id;return(0,g.jsx)(j,{header:b(e),children:(0,g.jsx)(l.Z.List,{name:t,children:(e,n)=>{let{add:a,remove:i}=n;return(0,g.jsxs)(g.Fragment,{children:[e.map(((n,a)=>{var r,u,v;let{key:p,name:h,...x}=n;const f=q.getFieldValue([t,null===(r=e[a-1])||void 0===r?void 0:r.name,"max_quantity"]);return(0,g.jsxs)(o.Z,{gutter:12,children:[(0,g.jsx)(s.Z,{span:7,children:(0,g.jsx)(l.Z.Item,{...x,label:E("min.quantity"),name:[h,"min_quantity"],rules:[{required:!0,message:E("required")},{validator:(e,t)=>t&&(t<=f||t>R||t<=0)?Promise.reject(new Error("".concat(E("must.be.between")," ").concat(f||F," ").concat(E("and")," ").concat(R))):Promise.resolve()}],children:(0,g.jsx)(d.Z,{className:"w-100",step:(null===(u=_.data)||void 0===u?void 0:u.interval)||1})})}),(0,g.jsx)(s.Z,{span:7,children:(0,g.jsx)(l.Z.Item,{...x,label:E("max.quantity"),name:[h,"max_quantity"],rules:[{required:!0,message:E("required")},{validator(e,n){const a=q.getFieldValue([t,h,"min_quantity"]);return n&&(n<=a||n>R||n<=0)?Promise.reject(new Error("".concat(E("must.be.between")," ").concat(a||F," ").concat(E("and")," ").concat(R))):Promise.resolve()}}],children:(0,g.jsx)(d.Z,{className:"w-100",step:(null===(v=_.data)||void 0===v?void 0:v.interval)||1})})}),(0,g.jsx)(s.Z,{span:8,children:(0,g.jsx)(l.Z.Item,{...x,label:E("price"),name:[h,"price"],rules:[{required:!0,message:E("required")},{type:"number",min:0,message:E("must.be.positive.number")},{type:"number",max:999999999999999,message:E("max.15.digits")}],children:(0,g.jsx)(d.Z,{className:"w-100",parser:e=>parseInt(e,10)})})}),(0,g.jsx)(s.Z,{span:2,style:{display:"flex",alignItems:"center",justifyContent:"end"},children:(0,g.jsx)(c.Z,{onClick:()=>{i(h)},danger:!0,type:"primary",icon:(0,g.jsx)(m.Z,{}),disabled:(null===e||void 0===e?void 0:e.length)!==a+1})})]},a)})),(0,g.jsx)(l.Z.Item,{children:(0,g.jsx)(c.Z,{onClick:()=>{a()},type:"dashed",icon:(0,g.jsx)(h.Z,{}),block:!0,children:E("add")})})]})}},null===e||void 0===e?void 0:e.id)},null===e||void 0===e?void 0:e.id)}))}):(0,g.jsx)(Z.Z,{}),(0,g.jsxs)(u.Z,{className:"mt-4",children:[(0,g.jsx)(c.Z,{onClick:I,children:E("prev")}),(0,g.jsx)(c.Z,{type:"primary",htmlType:"submit",loading:U,children:E("next")})]})]})})}},35432:(e,t,n)=>{n.d(t,{Z:()=>K});var a=n(87462),i=n(4942),l=n(47313),r=n(93433),o=n(15671),s=n(43144),d=n(60136),c=n(54062),u=n(71002),v=n(46123),p=n.n(v),m=n(59767),h=n.n(m),x=n(14903),f=n(1293),y=n(29439),Z=l.forwardRef((function(e,t){var n,a=e.prefixCls,r=e.forceRender,o=e.className,s=e.style,d=e.children,c=e.isActive,u=e.role,v=l.useState(c||r),m=(0,y.Z)(v,2),h=m[0],x=m[1];return l.useEffect((function(){(r||c)&&x(!0)}),[r,c]),h?l.createElement("div",{ref:t,className:p()("".concat(a,"-content"),(n={},(0,i.Z)(n,"".concat(a,"-content-active"),c),(0,i.Z)(n,"".concat(a,"-content-inactive"),!c),n),o),style:s,role:u},l.createElement("div",{className:"".concat(a,"-content-box")},d)):null}));Z.displayName="PanelContent";const g=Z;var j=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).handleItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"===typeof n&&n(a)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,s.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!h()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,r=this.props,o=r.className,s=r.id,d=r.style,c=r.prefixCls,u=r.header,v=r.headerClass,m=r.children,h=r.isActive,x=r.showArrow,y=r.destroyInactivePanel,Z=r.accordion,j=r.forceRender,b=r.openMotion,C=r.expandIcon,k=r.extra,N=r.collapsible,w="disabled"===N,I=p()("".concat(c,"-header"),(e={},(0,i.Z)(e,v,v),(0,i.Z)(e,"".concat(c,"-header-collapsible-only"),"header"===N),e)),P=p()((t={},(0,i.Z)(t,"".concat(c,"-item"),!0),(0,i.Z)(t,"".concat(c,"-item-active"),h),(0,i.Z)(t,"".concat(c,"-item-disabled"),w),t),o),E=l.createElement("i",{className:"arrow"});x&&"function"===typeof C&&(E=C(this.props));var q=null!==k&&void 0!==k&&"boolean"!==typeof k;return l.createElement("div",{className:P,style:d,id:s},l.createElement("div",{className:I,onClick:function(){return"header"!==N&&n.handleItemClick()},role:Z?"tab":"button",tabIndex:w?-1:0,"aria-expanded":h,onKeyPress:this.handleKeyPress},x&&E,"header"===N?l.createElement("span",{onClick:this.handleItemClick,className:"".concat(c,"-header-text")},u):u,q&&l.createElement("div",{className:"".concat(c,"-extra")},k)),l.createElement(f.default,(0,a.Z)({visible:h,leavedClassName:"".concat(c,"-content-hidden")},b,{forceRender:j,removeOnLeave:y}),(function(e,t){var n=e.className,a=e.style;return l.createElement(g,{ref:t,prefixCls:c,className:n,style:a,isActive:h,forceRender:j,role:Z?"tabpanel":null},m)})))}}]),n}(l.Component);j.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};const b=j;function C(e){var t=e;if(!Array.isArray(t)){var n=(0,u.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map((function(e){return String(e)}))}var k=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(e){var a;(0,o.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,r.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,i=a.props,r=i.prefixCls,o=i.openMotion,s=i.accordion,d=i.destroyInactivePanel,c=i.expandIcon,u=i.collapsible,v=e.key||String(t),p=e.props,m=p.header,h=p.headerClass,x=p.destroyInactivePanel,f=p.collapsible,y=null!==f&&void 0!==f?f:u,Z={key:v,panelKey:v,header:m,headerClass:h,isActive:s?n[0]===v:n.indexOf(v)>-1,prefixCls:r,destroyInactivePanel:null!==x&&void 0!==x?x:d,openMotion:o,accordion:s,children:e.props.children,onItemClick:"disabled"===y?null:a.onClickItem,expandIcon:c,collapsible:y};return"string"===typeof e.type?e:l.cloneElement(e,Z)},a.getItems=function(){var e=a.props.children;return(0,x.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var i=e.activeKey,s=e.defaultActiveKey;return"activeKey"in e&&(s=i),a.state={activeKey:C(s)},a}return(0,s.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!h()(this.props,e)||!h()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,r=t.style,o=t.accordion,s=p()((e={},(0,i.Z)(e,n,!0),(0,i.Z)(e,a,!!a),e));return l.createElement("div",{className:s,style:r,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=C(e.activeKey)),t}}]),n}(l.Component);k.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},k.Panel=b;const N=k;k.Panel;var w=n(5186),I=n(205),P=n(91964);const E=function(e){var t=l.useContext(P.E_).getPrefixCls,n=e.prefixCls,r=e.className,o=void 0===r?"":r,s=e.showArrow,d=void 0===s||s,c=t("collapse",n),u=p()((0,i.Z)({},"".concat(c,"-no-arrow"),!d),o);return l.createElement(N.Panel,(0,a.Z)({},e,{prefixCls:c,className:u}))};var q=n(53553),A=n(48138),_=function(e){var t,n=l.useContext(P.E_),r=n.getPrefixCls,o=n.direction,s=e.prefixCls,d=e.className,c=void 0===d?"":d,u=e.bordered,v=void 0===u||u,m=e.ghost,h=r("collapse",s),f=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===o?"right":"left"}(),y=p()((t={},(0,i.Z)(t,"".concat(h,"-borderless"),!v),(0,i.Z)(t,"".concat(h,"-icon-position-").concat(f),!0),(0,i.Z)(t,"".concat(h,"-rtl"),"rtl"===o),(0,i.Z)(t,"".concat(h,"-ghost"),!!m),t),c),Z=(0,a.Z)((0,a.Z)({},q.ZP),{motionAppear:!1,leavedClassName:"".concat(h,"-content-hidden")});return l.createElement(N,(0,a.Z)({openMotion:Z},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):l.createElement(w.Z,{rotate:t.isActive?90:void 0});return l.createElement("div",null,(0,A.Tm)(a,(function(){return{className:p()(a.props.className,"".concat(h,"-arrow"))}})))},prefixCls:h,className:y}),function(){var t=e.children;return(0,x.Z)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var i=e.key||String(t),l=e.props,r=l.disabled,o=l.collapsible,s=(0,a.Z)((0,a.Z)({},(0,I.Z)(e.props,["disabled"])),{key:i,collapsible:null!==o&&void 0!==o?o:r?"disabled":void 0});return(0,A.Tm)(e,s)}return e}))}())};_.Panel=E;const K=_}}]);
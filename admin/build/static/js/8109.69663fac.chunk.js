"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8109],{98109:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var a=n(29439),r=n(47313),c=n(77181),s=n(87569),u=n(59491),o=n(24511),l=n(31881),i=n.n(l),d=n(23560),h=n(97421),f=n(46417);function m(){var t=(0,r.useState)(!1),e=(0,a.Z)(t,2),n=e[0],l=e[1],m=(0,o.$)().t,y=localStorage.getItem("token");return(0,f.jsx)(c.Z,{title:m("clear.cash"),children:(0,f.jsx)(s.ZP,{status:"warning",title:m("do.you.really.want.to.clear.the.cash?"),extra:(0,f.jsx)(u.Z,{type:"primary",loading:n,onClick:function(){l(!0),i().get("".concat(h.YZ,"dashboard/admin/settings/system/cache/clear"),{headers:{Authorization:"Bearer ".concat(y),"content-type":"text/json"}}).then((function(){return d.Am.success("successfully.cleared")})).catch((function(t){var e,n;return d.Am.error(null===(e=t.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)})).finally((function(){return l(!1)}))},children:m("clear.cash")})})})}}}]);
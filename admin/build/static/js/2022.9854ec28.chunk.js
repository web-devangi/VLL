"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2022],{12022:function(a,n,i){i.r(n),i.d(n,{default:function(){return M}});var e=i(1413),l=i(29439),o=i(47313),m=i(10976),s=i(77181),d=i(68197),r=i(59624),t=i(74294),u=i(66672),c=i(16124),_=i(86345),b=i(59491),g=i(97890),y=i(23560),p=i(30554),v=i(2717),h=i(90954),D=i(14506),R=i(24511),S=i(35305),C=i(51282),B=i(46417);function M(){var a=(0,R.$)().t,n=(0,o.useState)(!1),i=(0,l.Z)(n,2),M=i[0],A=i[1],N=(0,o.useState)(!1),f=(0,l.Z)(N,2),L=f[0],Z=f[1],F=m.Z.useForm(),K=(0,l.Z)(F,1)[0],P=(0,g.s0)(),k=(0,g.UO)().id,T=(0,v.I0)(),$=(0,v.v9)((function(a){return a.menu})).activeMenu;(0,o.useEffect)((function(){return function(){var a=K.getFieldsValue(!0);T((0,h.nc)({activeMenu:$,data:a}))}}),[]);(0,o.useEffect)((function(){$.refetch&&function(a){A(!0),p.Z.getById(a).then((function(a){var n=a.data;return K.setFieldsValue(n)})).finally((function(){A(!1),T((0,h.A_)($))}))}(k)}),[$.refetch]);var U=S.map((function(a){return{label:(null===a||void 0===a?void 0:a.name.toUpperCase())+" "+"( ".concat(a.symbol_native," )"),value:a.code,symbol:a.symbol_native}}));return(0,B.jsx)(s.Z,{title:a("edit.currency"),children:M?(0,B.jsx)(C.Z,{}):(0,B.jsxs)(m.Z,{name:"currency-add",onFinish:function(n){Z(!0);var i={title:n.title,symbol:n.symbol,rate:n.rate,active:Number(n.active),position:n.position},l="currencies";p.Z.update(k,i).then((function(){y.Am.success(a("successfully.updated")),T((0,h.ph)((0,e.Z)((0,e.Z)({},$),{},{nextUrl:l}))),P("/".concat(l)),T((0,D.U$)({}))})).finally((function(){return Z(!1)}))},form:K,layout:"vertical",initialValues:(0,e.Z)((0,e.Z)({},$.data),{},{active:!0,position:"before"}),children:[(0,B.jsxs)(d.Z,{gutter:12,children:[(0,B.jsx)(r.Z,{span:12,children:(0,B.jsx)(m.Z.Item,{label:a("title"),name:"title",rules:[{required:!0,message:a("required")}],children:(0,B.jsx)(t.Z,{onChange:function(a,n){return K.setFieldsValue({symbol:n.symbol})},filterOption:function(a,n){var i;return(null!==(i=null===n||void 0===n?void 0:n.label)&&void 0!==i?i:"").includes(a)},filterSort:function(a,n){var i,e;return(null!==(i=null===a||void 0===a?void 0:a.label)&&void 0!==i?i:"").toUpperCase().localeCompare((null!==(e=null===n||void 0===n?void 0:n.label)&&void 0!==e?e:"").toUpperCase())},showSearch:!0,allowClear:!0,options:U})})}),(0,B.jsx)(r.Z,{span:12,children:(0,B.jsx)(m.Z.Item,{label:a("symbol"),name:"symbol",rules:[{required:!0,message:a("required")}],children:(0,B.jsx)(u.Z,{disabled:!0})})}),(0,B.jsx)(r.Z,{span:12,children:(0,B.jsx)(m.Z.Item,{label:a("rate"),name:"rate",rules:[{required:!0,message:a("required")},{type:"number",min:0,message:a("must.be.positive")}],children:(0,B.jsx)(c.Z,{className:"w-100"})})}),(0,B.jsx)(r.Z,{span:12,children:(0,B.jsx)(m.Z.Item,{label:a("symbol_position"),name:"position",rules:[{required:!0,message:a("required")}],children:(0,B.jsx)(t.Z,{onChange:function(a){return K.setFieldsValue({position:a})},options:[{label:a("after"),value:"after"},{label:a("before"),value:"before"}]})})}),(0,B.jsx)(r.Z,{span:12,children:(0,B.jsx)(m.Z.Item,{label:a("active"),name:"active",valuePropName:"checked",children:(0,B.jsx)(_.Z,{})})})]}),(0,B.jsx)(b.Z,{type:"primary",htmlType:"submit",loading:L,children:a("submit")})]})})}},35305:function(a){a.exports=JSON.parse('[{"symbol":"$","name":"US Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"USD","name_plural":"US dollars"},{"symbol":"CA$","name":"Canadian Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"CAD","name_plural":"Canadian dollars"},{"symbol":"\u20ac","name":"Euro","symbol_native":"\u20ac","decimal_digits":2,"rounding":0,"code":"EUR","name_plural":"euros"},{"symbol":"AED","name":"United Arab Emirates Dirham","symbol_native":"\u062f.\u0625.\u200f","decimal_digits":2,"rounding":0,"code":"AED","name_plural":"UAE dirhams"},{"symbol":"Af","name":"Afghan Afghani","symbol_native":"\u060b","decimal_digits":0,"rounding":0,"code":"AFN","name_plural":"Afghan Afghanis"},{"symbol":"ALL","name":"Albanian Lek","symbol_native":"Lek","decimal_digits":0,"rounding":0,"code":"ALL","name_plural":"Albanian lek\xeb"},{"symbol":"AMD","name":"Armenian Dram","symbol_native":"\u0564\u0580","decimal_digits":0,"rounding":0,"code":"AMD","name_plural":"Armenian drams"},{"symbol":"AR$","name":"Argentine Peso","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"ARS","name_plural":"Argentine pesos"},{"symbol":"AU$","name":"Australian Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"AUD","name_plural":"Australian dollars"},{"symbol":"man.","name":"Azerbaijani Manat","symbol_native":"\u043c\u0430\u043d","decimal_digits":2,"rounding":0,"code":"AZN","name_plural":"Azerbaijani manats"},{"symbol":"KM","name":"Bosnia-Herzegovina Convertible Mark","symbol_native":"KM","decimal_digits":2,"rounding":0,"code":"BAM","name_plural":"Bosnia-Herzegovina convertible marks"},{"symbol":"Tk","name":"Bangladeshi Taka","symbol_native":"\u09f3","decimal_digits":2,"rounding":0,"code":"BDT","name_plural":"Bangladeshi takas"},{"symbol":"BGN","name":"Bulgarian Lev","symbol_native":"\u043b\u0432","decimal_digits":2,"rounding":0,"code":"BGN","name_plural":"Bulgarian leva"},{"symbol":"BD","name":"Bahraini Dinar","symbol_native":"\u062f.\u0628.\u200f","decimal_digits":3,"rounding":0,"code":"BHD","name_plural":"Bahraini dinars"},{"symbol":"FBu","name":"Burundian Franc","symbol_native":"FBu","decimal_digits":0,"rounding":0,"code":"BIF","name_plural":"Burundian francs"},{"symbol":"BN$","name":"Brunei Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"BND","name_plural":"Brunei dollars"},{"symbol":"Bs","name":"Bolivian Boliviano","symbol_native":"Bs","decimal_digits":2,"rounding":0,"code":"BOB","name_plural":"Bolivian bolivianos"},{"symbol":"R$","name":"Brazilian Real","symbol_native":"R$","decimal_digits":2,"rounding":0,"code":"BRL","name_plural":"Brazilian reals"},{"symbol":"BWP","name":"Botswanan Pula","symbol_native":"P","decimal_digits":2,"rounding":0,"code":"BWP","name_plural":"Botswanan pulas"},{"symbol":"Br","name":"Belarusian Ruble","symbol_native":"\u0440\u0443\u0431","decimal_digits":2,"rounding":0,"code":"BYN","name_plural":"Belarusian rubles"},{"symbol":"BZ$","name":"Belize Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"BZD","name_plural":"Belize dollars"},{"symbol":"CDF","name":"Congolese Franc","symbol_native":"FrCD","decimal_digits":2,"rounding":0,"code":"CDF","name_plural":"Congolese francs"},{"symbol":"CHF","name":"Swiss Franc","symbol_native":"CHF","decimal_digits":2,"rounding":0.05,"code":"CHF","name_plural":"Swiss francs"},{"symbol":"CL$","name":"Chilean Peso","symbol_native":"$","decimal_digits":0,"rounding":0,"code":"CLP","name_plural":"Chilean pesos"},{"symbol":"CN\xa5","name":"Chinese Yuan","symbol_native":"CN\xa5","decimal_digits":2,"rounding":0,"code":"CNY","name_plural":"Chinese yuan"},{"symbol":"CO$","name":"Colombian Peso","symbol_native":"$","decimal_digits":0,"rounding":0,"code":"COP","name_plural":"Colombian pesos"},{"symbol":"\u20a1","name":"Costa Rican Col\xf3n","symbol_native":"\u20a1","decimal_digits":0,"rounding":0,"code":"CRC","name_plural":"Costa Rican col\xf3ns"},{"symbol":"CV$","name":"Cape Verdean Escudo","symbol_native":"CV$","decimal_digits":2,"rounding":0,"code":"CVE","name_plural":"Cape Verdean escudos"},{"symbol":"K\u010d","name":"Czech Republic Koruna","symbol_native":"K\u010d","decimal_digits":2,"rounding":0,"code":"CZK","name_plural":"Czech Republic korunas"},{"symbol":"Fdj","name":"Djiboutian Franc","symbol_native":"Fdj","decimal_digits":0,"rounding":0,"code":"DJF","name_plural":"Djiboutian francs"},{"symbol":"Dkr","name":"Danish Krone","symbol_native":"kr","decimal_digits":2,"rounding":0,"code":"DKK","name_plural":"Danish kroner"},{"symbol":"RD$","name":"Dominican Peso","symbol_native":"RD$","decimal_digits":2,"rounding":0,"code":"DOP","name_plural":"Dominican pesos"},{"symbol":"DA","name":"Algerian Dinar","symbol_native":"\u062f.\u062c.\u200f","decimal_digits":2,"rounding":0,"code":"DZD","name_plural":"Algerian dinars"},{"symbol":"Ekr","name":"Estonian Kroon","symbol_native":"kr","decimal_digits":2,"rounding":0,"code":"EEK","name_plural":"Estonian kroons"},{"symbol":"EGP","name":"Egyptian Pound","symbol_native":"\u062c.\u0645.\u200f","decimal_digits":2,"rounding":0,"code":"EGP","name_plural":"Egyptian pounds"},{"symbol":"Nfk","name":"Eritrean Nakfa","symbol_native":"Nfk","decimal_digits":2,"rounding":0,"code":"ERN","name_plural":"Eritrean nakfas"},{"symbol":"Br","name":"Ethiopian Birr","symbol_native":"Br","decimal_digits":2,"rounding":0,"code":"ETB","name_plural":"Ethiopian birrs"},{"symbol":"\xa3","name":"British Pound Sterling","symbol_native":"\xa3","decimal_digits":2,"rounding":0,"code":"GBP","name_plural":"British pounds sterling"},{"symbol":"GEL","name":"Georgian Lari","symbol_native":"GEL","decimal_digits":2,"rounding":0,"code":"GEL","name_plural":"Georgian laris"},{"symbol":"GH\u20b5","name":"Ghanaian Cedi","symbol_native":"GH\u20b5","decimal_digits":2,"rounding":0,"code":"GHS","name_plural":"Ghanaian cedis"},{"symbol":"FG","name":"Guinean Franc","symbol_native":"FG","decimal_digits":0,"rounding":0,"code":"GNF","name_plural":"Guinean francs"},{"symbol":"GTQ","name":"Guatemalan Quetzal","symbol_native":"Q","decimal_digits":2,"rounding":0,"code":"GTQ","name_plural":"Guatemalan quetzals"},{"symbol":"HK$","name":"Hong Kong Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"HKD","name_plural":"Hong Kong dollars"},{"symbol":"HNL","name":"Honduran Lempira","symbol_native":"L","decimal_digits":2,"rounding":0,"code":"HNL","name_plural":"Honduran lempiras"},{"symbol":"kn","name":"Croatian Kuna","symbol_native":"kn","decimal_digits":2,"rounding":0,"code":"HRK","name_plural":"Croatian kunas"},{"symbol":"Ft","name":"Hungarian Forint","symbol_native":"Ft","decimal_digits":0,"rounding":0,"code":"HUF","name_plural":"Hungarian forints"},{"symbol":"Rp","name":"Indonesian Rupiah","symbol_native":"Rp","decimal_digits":0,"rounding":0,"code":"IDR","name_plural":"Indonesian rupiahs"},{"symbol":"\u20aa","name":"Israeli New Sheqel","symbol_native":"\u20aa","decimal_digits":2,"rounding":0,"code":"ILS","name_plural":"Israeli new sheqels"},{"symbol":"Rs","name":"Indian Rupee","symbol_native":"\u20b9","decimal_digits":2,"rounding":0,"code":"INR","name_plural":"Indian rupees"},{"symbol":"IQD","name":"Iraqi Dinar","symbol_native":"\u062f.\u0639.\u200f","decimal_digits":0,"rounding":0,"code":"IQD","name_plural":"Iraqi dinars"},{"symbol":"IRR","name":"Iranian Rial","symbol_native":"\ufdfc","decimal_digits":0,"rounding":0,"code":"IRR","name_plural":"Iranian rials"},{"symbol":"Ikr","name":"Icelandic Kr\xf3na","symbol_native":"kr","decimal_digits":0,"rounding":0,"code":"ISK","name_plural":"Icelandic kr\xf3nur"},{"symbol":"J$","name":"Jamaican Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"JMD","name_plural":"Jamaican dollars"},{"symbol":"JD","name":"Jordanian Dinar","symbol_native":"\u062f.\u0623.\u200f","decimal_digits":3,"rounding":0,"code":"JOD","name_plural":"Jordanian dinars"},{"symbol":"\xa5","name":"Japanese Yen","symbol_native":"\uffe5","decimal_digits":0,"rounding":0,"code":"JPY","name_plural":"Japanese yen"},{"symbol":"Ksh","name":"Kenyan Shilling","symbol_native":"Ksh","decimal_digits":2,"rounding":0,"code":"KES","name_plural":"Kenyan shillings"},{"symbol":"KHR","name":"Cambodian Riel","symbol_native":"\u17db","decimal_digits":2,"rounding":0,"code":"KHR","name_plural":"Cambodian riels"},{"symbol":"CF","name":"Comorian Franc","symbol_native":"FC","decimal_digits":0,"rounding":0,"code":"KMF","name_plural":"Comorian francs"},{"symbol":"\u20a9","name":"South Korean Won","symbol_native":"\u20a9","decimal_digits":0,"rounding":0,"code":"KRW","name_plural":"South Korean won"},{"symbol":"KD","name":"Kuwaiti Dinar","symbol_native":"\u062f.\u0643.\u200f","decimal_digits":3,"rounding":0,"code":"KWD","name_plural":"Kuwaiti dinars"},{"symbol":"KZT","name":"Kazakhstani Tenge","symbol_native":"\u0442\u04a3\u0433","decimal_digits":2,"rounding":0,"code":"KZT","name_plural":"Kazakhstani tenges"},{"symbol":"L.L.","name":"Lebanese Pound","symbol_native":"\u0644.\u0644.\u200f","decimal_digits":0,"rounding":0,"code":"LBP","name_plural":"Lebanese pounds"},{"symbol":"SLRs","name":"Sri Lankan Rupee","symbol_native":"SL Re","decimal_digits":2,"rounding":0,"code":"LKR","name_plural":"Sri Lankan rupees"},{"symbol":"Lt","name":"Lithuanian Litas","symbol_native":"Lt","decimal_digits":2,"rounding":0,"code":"LTL","name_plural":"Lithuanian litai"},{"symbol":"Ls","name":"Latvian Lats","symbol_native":"Ls","decimal_digits":2,"rounding":0,"code":"LVL","name_plural":"Latvian lati"},{"symbol":"LD","name":"Libyan Dinar","symbol_native":"\u062f.\u0644.\u200f","decimal_digits":3,"rounding":0,"code":"LYD","name_plural":"Libyan dinars"},{"symbol":"MAD","name":"Moroccan Dirham","symbol_native":"\u062f.\u0645.\u200f","decimal_digits":2,"rounding":0,"code":"MAD","name_plural":"Moroccan dirhams"},{"symbol":"MDL","name":"Moldovan Leu","symbol_native":"MDL","decimal_digits":2,"rounding":0,"code":"MDL","name_plural":"Moldovan lei"},{"symbol":"MGA","name":"Malagasy Ariary","symbol_native":"MGA","decimal_digits":0,"rounding":0,"code":"MGA","name_plural":"Malagasy Ariaries"},{"symbol":"MKD","name":"Macedonian Denar","symbol_native":"MKD","decimal_digits":2,"rounding":0,"code":"MKD","name_plural":"Macedonian denari"},{"symbol":"MMK","name":"Myanma Kyat","symbol_native":"K","decimal_digits":0,"rounding":0,"code":"MMK","name_plural":"Myanma kyats"},{"symbol":"MOP$","name":"Macanese Pataca","symbol_native":"MOP$","decimal_digits":2,"rounding":0,"code":"MOP","name_plural":"Macanese patacas"},{"symbol":"MURs","name":"Mauritian Rupee","symbol_native":"MURs","decimal_digits":0,"rounding":0,"code":"MUR","name_plural":"Mauritian rupees"},{"symbol":"MX$","name":"Mexican Peso","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"MXN","name_plural":"Mexican pesos"},{"symbol":"RM","name":"Malaysian Ringgit","symbol_native":"RM","decimal_digits":2,"rounding":0,"code":"MYR","name_plural":"Malaysian ringgits"},{"symbol":"MTn","name":"Mozambican Metical","symbol_native":"MTn","decimal_digits":2,"rounding":0,"code":"MZN","name_plural":"Mozambican meticals"},{"symbol":"N$","name":"Namibian Dollar","symbol_native":"N$","decimal_digits":2,"rounding":0,"code":"NAD","name_plural":"Namibian dollars"},{"symbol":"\u20a6","name":"Nigerian Naira","symbol_native":"\u20a6","decimal_digits":2,"rounding":0,"code":"NGN","name_plural":"Nigerian nairas"},{"symbol":"C$","name":"Nicaraguan C\xf3rdoba","symbol_native":"C$","decimal_digits":2,"rounding":0,"code":"NIO","name_plural":"Nicaraguan c\xf3rdobas"},{"symbol":"Nkr","name":"Norwegian Krone","symbol_native":"kr","decimal_digits":2,"rounding":0,"code":"NOK","name_plural":"Norwegian kroner"},{"symbol":"NPRs","name":"Nepalese Rupee","symbol_native":"\u0928\u0947\u0930\u0942","decimal_digits":2,"rounding":0,"code":"NPR","name_plural":"Nepalese rupees"},{"symbol":"NZ$","name":"New Zealand Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"NZD","name_plural":"New Zealand dollars"},{"symbol":"OMR","name":"Omani Rial","symbol_native":"\u0631.\u0639.\u200f","decimal_digits":3,"rounding":0,"code":"OMR","name_plural":"Omani rials"},{"symbol":"B/.","name":"Panamanian Balboa","symbol_native":"B/","decimal_digits":2,"rounding":0,"code":"PAB","name_plural":"Panamanian balboas"},{"symbol":"S/.","name":"Peruvian Nuevo Sol","symbol_native":"S/.","decimal_digits":2,"rounding":0,"code":"PEN","name_plural":"Peruvian nuevos soles"},{"symbol":"\u20b1","name":"Philippine Peso","symbol_native":"\u20b1","decimal_digits":2,"rounding":0,"code":"PHP","name_plural":"Philippine pesos"},{"symbol":"PKRs","name":"Pakistani Rupee","symbol_native":"\u20a8","decimal_digits":0,"rounding":0,"code":"PKR","name_plural":"Pakistani rupees"},{"symbol":"z\u0142","name":"Polish Zloty","symbol_native":"z\u0142","decimal_digits":2,"rounding":0,"code":"PLN","name_plural":"Polish zlotys"},{"symbol":"\u20b2","name":"Paraguayan Guarani","symbol_native":"\u20b2","decimal_digits":0,"rounding":0,"code":"PYG","name_plural":"Paraguayan guaranis"},{"symbol":"QR","name":"Qatari Rial","symbol_native":"\u0631.\u0642.\u200f","decimal_digits":2,"rounding":0,"code":"QAR","name_plural":"Qatari rials"},{"symbol":"RON","name":"Romanian Leu","symbol_native":"RON","decimal_digits":2,"rounding":0,"code":"RON","name_plural":"Romanian lei"},{"symbol":"din.","name":"Serbian Dinar","symbol_native":"\u0434\u0438\u043d","decimal_digits":0,"rounding":0,"code":"RSD","name_plural":"Serbian dinars"},{"symbol":"RUB","name":"Russian Ruble","symbol_native":"\u20bd","decimal_digits":2,"rounding":0,"code":"RUB","name_plural":"Russian rubles"},{"symbol":"RWF","name":"Rwandan Franc","symbol_native":"FR","decimal_digits":0,"rounding":0,"code":"RWF","name_plural":"Rwandan francs"},{"symbol":"SR","name":"Saudi Riyal","symbol_native":"\u0631.\u0633.\u200f","decimal_digits":2,"rounding":0,"code":"SAR","name_plural":"Saudi riyals"},{"symbol":"SDG","name":"Sudanese Pound","symbol_native":"SDG","decimal_digits":2,"rounding":0,"code":"SDG","name_plural":"Sudanese pounds"},{"symbol":"Skr","name":"Swedish Krona","symbol_native":"kr","decimal_digits":2,"rounding":0,"code":"SEK","name_plural":"Swedish kronor"},{"symbol":"S$","name":"Singapore Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"SGD","name_plural":"Singapore dollars"},{"symbol":"Ssh","name":"Somali Shilling","symbol_native":"Ssh","decimal_digits":0,"rounding":0,"code":"SOS","name_plural":"Somali shillings"},{"symbol":"SY\xa3","name":"Syrian Pound","symbol_native":"\u0644.\u0633.\u200f","decimal_digits":0,"rounding":0,"code":"SYP","name_plural":"Syrian pounds"},{"symbol":"\u0e3f","name":"Thai Baht","symbol_native":"\u0e3f","decimal_digits":2,"rounding":0,"code":"THB","name_plural":"Thai baht"},{"symbol":"DT","name":"Tunisian Dinar","symbol_native":"\u062f.\u062a.\u200f","decimal_digits":3,"rounding":0,"code":"TND","name_plural":"Tunisian dinars"},{"symbol":"T$","name":"Tongan Pa\u02bbanga","symbol_native":"T$","decimal_digits":2,"rounding":0,"code":"TOP","name_plural":"Tongan pa\u02bbanga"},{"symbol":"TL","name":"Turkish Lira","symbol_native":"TL","decimal_digits":2,"rounding":0,"code":"TRY","name_plural":"Turkish Lira"},{"symbol":"TT$","name":"Trinidad and Tobago Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"TTD","name_plural":"Trinidad and Tobago dollars"},{"symbol":"NT$","name":"New Taiwan Dollar","symbol_native":"NT$","decimal_digits":2,"rounding":0,"code":"TWD","name_plural":"New Taiwan dollars"},{"symbol":"TSh","name":"Tanzanian Shilling","symbol_native":"TSh","decimal_digits":0,"rounding":0,"code":"TZS","name_plural":"Tanzanian shillings"},{"symbol":"\u20b4","name":"Ukrainian Hryvnia","symbol_native":"\u20b4","decimal_digits":2,"rounding":0,"code":"UAH","name_plural":"Ukrainian hryvnias"},{"symbol":"USh","name":"Ugandan Shilling","symbol_native":"USh","decimal_digits":0,"rounding":0,"code":"UGX","name_plural":"Ugandan shillings"},{"symbol":"$U","name":"Uruguayan Peso","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"UYU","name_plural":"Uruguayan pesos"},{"symbol":"UZS","name":"Uzbekistan Som","symbol_native":"UZS","decimal_digits":0,"rounding":0,"code":"UZS","name_plural":"Uzbekistan som"},{"symbol":"Bs.F.","name":"Venezuelan Bol\xedvar","symbol_native":"Bs.F.","decimal_digits":2,"rounding":0,"code":"VEF","name_plural":"Venezuelan bol\xedvars"},{"symbol":"\u20ab","name":"Vietnamese Dong","symbol_native":"\u20ab","decimal_digits":0,"rounding":0,"code":"VND","name_plural":"Vietnamese dong"},{"symbol":"FCFA","name":"CFA Franc BEAC","symbol_native":"FCFA","decimal_digits":0,"rounding":0,"code":"XAF","name_plural":"CFA francs BEAC"},{"symbol":"CFA","name":"CFA Franc BCEAO","symbol_native":"CFA","decimal_digits":0,"rounding":0,"code":"XOF","name_plural":"CFA francs BCEAO"},{"symbol":"YR","name":"Yemeni Rial","symbol_native":"\u0631.\u064a.\u200f","decimal_digits":0,"rounding":0,"code":"YER","name_plural":"Yemeni rials"},{"symbol":"R","name":"South African Rand","symbol_native":"R","decimal_digits":2,"rounding":0,"code":"ZAR","name_plural":"South African rand"},{"symbol":"ZK","name":"Zambian Kwacha","symbol_native":"ZK","decimal_digits":0,"rounding":0,"code":"ZMK","name_plural":"Zambian kwachas"},{"symbol":"ZWL$","name":"Zimbabwean Dollar","symbol_native":"ZWL$","decimal_digits":0,"rounding":0,"code":"ZWL","name_plural":"Zimbabwean Dollar"},{"symbol":"\u0405M","name":"Tajikistani Somoni","symbol_native":"\u0405M","decimal_digits":2,"rounding":0,"code":"TJS","name_plural":"Tajikistani Somoni"}]')}}]);
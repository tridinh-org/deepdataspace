(self.webpackChunkapp=self.webpackChunkapp||[]).push([[845],{64693:function(q,O){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};O.default=u},27003:function(q,O){"use strict";Object.defineProperty(O,"__esModule",{value:!0});var u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};O.default=u},2252:function(q,O,u){"use strict";Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;const l=Z(u(28215));function Z(N){return N&&N.__esModule?N:{default:N}}const o=l;O.default=o,q.exports=o},8258:function(q,O,u){"use strict";Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;const l=Z(u(33574));function Z(N){return N&&N.__esModule?N:{default:N}}const o=l;O.default=o,q.exports=o},70649:function(q,O,u){"use client";"use strict";Object.defineProperty(O,"__esModule",{value:!0}),Object.defineProperty(O,"default",{enumerable:!0,get:function(){return ye}});var l=t(u(58757)),Z=b(u(87608)),o=u(26134),N=b(u(8295)),Y=b(u(39888)),X=u(81561),V=u(96757);function ee(a,v){(v==null||v>a.length)&&(v=a.length);for(var m=0,P=new Array(v);m<v;m++)P[m]=a[m];return P}function G(a){if(Array.isArray(a))return a}function z(a,v,m){return v in a?Object.defineProperty(a,v,{value:m,enumerable:!0,configurable:!0,writable:!0}):a[v]=m,a}function b(a){return a&&a.__esModule?a:{default:a}}function Q(a){if(typeof WeakMap!="function")return null;var v=new WeakMap,m=new WeakMap;return(Q=function(P){return P?m:v})(a)}function t(a,v){if(!v&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var m=Q(v);if(m&&m.has(a))return m.get(a);var P={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in a)if(A!=="default"&&Object.prototype.hasOwnProperty.call(a,A)){var ne=E?Object.getOwnPropertyDescriptor(a,A):null;ne&&(ne.get||ne.set)?Object.defineProperty(P,A,ne):P[A]=a[A]}return P.default=a,m&&m.set(a,P),P}function i(a,v){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var P=[],E=!0,A=!1,ne,ve;try{for(m=m.call(a);!(E=(ne=m.next()).done)&&(P.push(ne.value),!(v&&P.length===v));E=!0);}catch(Pe){A=!0,ve=Pe}finally{try{!E&&m.return!=null&&m.return()}finally{if(A)throw ve}}return P}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(a){for(var v=1;v<arguments.length;v++){var m=arguments[v]!=null?arguments[v]:{},P=Object.keys(m);typeof Object.getOwnPropertySymbols=="function"&&(P=P.concat(Object.getOwnPropertySymbols(m).filter(function(E){return Object.getOwnPropertyDescriptor(m,E).enumerable}))),P.forEach(function(E){z(a,E,m[E])})}return a}function f(a,v){var m=Object.keys(a);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);v&&(P=P.filter(function(E){return Object.getOwnPropertyDescriptor(a,E).enumerable})),m.push.apply(m,P)}return m}function g(a,v){return v=v!=null?v:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(v)):f(Object(v)).forEach(function(m){Object.defineProperty(a,m,Object.getOwnPropertyDescriptor(v,m))}),a}function p(a,v){if(a==null)return{};var m=d(a,v),P,E;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(a);for(E=0;E<A.length;E++)P=A[E],!(v.indexOf(P)>=0)&&Object.prototype.propertyIsEnumerable.call(a,P)&&(m[P]=a[P])}return m}function d(a,v){if(a==null)return{};var m={},P=Object.keys(a),E,A;for(A=0;A<P.length;A++)E=P[A],!(v.indexOf(E)>=0)&&(m[E]=a[E]);return m}function $(a,v){return G(a)||i(a,v)||ae(a,v)||c()}function ae(a,v){if(a){if(typeof a=="string")return ee(a,v);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(m);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return ee(a,v)}}(0,X.setTwoToneColor)(o.blue.primary);var se=l.forwardRef(function(a,v){var m=a.className,P=a.icon,E=a.spin,A=a.rotate,ne=a.tabIndex,ve=a.onClick,Pe=a.twoToneColor,Re=p(a,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),xe=l.useContext(N.default),je=xe.prefixCls,Oe=je===void 0?"anticon":je,Be=xe.rootClassName,pe,Me=(0,Z.default)(Be,Oe,(pe={},z(pe,"".concat(Oe,"-").concat(P.name),!!P.name),z(pe,"".concat(Oe,"-spin"),!!E||P.name==="loading"),pe),m),we=ne;we===void 0&&ve&&(we=-1);var Ne=A?{msTransform:"rotate(".concat(A,"deg)"),transform:"rotate(".concat(A,"deg)")}:void 0,Te=$((0,V.normalizeTwoToneColors)(Pe),2),De=Te[0],Ee=Te[1];return l.createElement("span",g(r({role:"img","aria-label":P.name},Re),{ref:v,tabIndex:we,onClick:ve,className:Me}),l.createElement(Y.default,{icon:P,primaryColor:De,secondaryColor:Ee,style:Ne}))});se.displayName="AntdIcon",se.getTwoToneColor=X.getTwoToneColor,se.setTwoToneColor=X.setTwoToneColor;var ye=se},39888:function(q,O,u){"use strict";Object.defineProperty(O,"__esModule",{value:!0}),Object.defineProperty(O,"default",{enumerable:!0,get:function(){return c}});var l=Y(u(58757)),Z=u(96757);function o(r,f,g){return f in r?Object.defineProperty(r,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):r[f]=g,r}function N(r){if(typeof WeakMap!="function")return null;var f=new WeakMap,g=new WeakMap;return(N=function(p){return p?g:f})(r)}function Y(r,f){if(!f&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var g=N(f);if(g&&g.has(r))return g.get(r);var p={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in r)if($!=="default"&&Object.prototype.hasOwnProperty.call(r,$)){var ae=d?Object.getOwnPropertyDescriptor(r,$):null;ae&&(ae.get||ae.set)?Object.defineProperty(p,$,ae):p[$]=r[$]}return p.default=r,g&&g.set(r,p),p}function X(r){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{},p=Object.keys(g);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(g).filter(function(d){return Object.getOwnPropertyDescriptor(g,d).enumerable}))),p.forEach(function(d){o(r,d,g[d])})}return r}function V(r,f){var g=Object.keys(r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);f&&(p=p.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),g.push.apply(g,p)}return g}function ee(r,f){return f=f!=null?f:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(f)):V(Object(f)).forEach(function(g){Object.defineProperty(r,g,Object.getOwnPropertyDescriptor(f,g))}),r}function G(r,f){if(r==null)return{};var g=z(r,f),p,d;if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(r);for(d=0;d<$.length;d++)p=$[d],!(f.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(r,p)&&(g[p]=r[p])}return g}function z(r,f){if(r==null)return{};var g={},p=Object.keys(r),d,$;for($=0;$<p.length;$++)d=p[$],!(f.indexOf(d)>=0)&&(g[d]=r[d]);return g}var b={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Q(r){var f=r.primaryColor,g=r.secondaryColor;b.primaryColor=f,b.secondaryColor=g||(0,Z.getSecondaryColor)(f),b.calculated=!!g}function t(){return X({},b)}var i=function(r){var f=r.icon,g=r.className,p=r.onClick,d=r.style,$=r.primaryColor,ae=r.secondaryColor,se=G(r,["icon","className","onClick","style","primaryColor","secondaryColor"]),ye=l.useRef(),a=b;if($&&(a={primaryColor:$,secondaryColor:ae||(0,Z.getSecondaryColor)($)}),(0,Z.useInsertStyles)(ye),(0,Z.warning)((0,Z.isIconDefinition)(f),"icon should be icon definiton, but got ".concat(f)),!(0,Z.isIconDefinition)(f))return null;var v=f;return v&&typeof v.icon=="function"&&(v=ee(X({},v),{icon:v.icon(a.primaryColor,a.secondaryColor)})),(0,Z.generate)(v.icon,"svg-".concat(v.name),ee(X({className:g,onClick:p,style:d,"data-icon":v.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},se),{ref:ye}))};i.displayName="IconReact",i.getTwoToneColors=t,i.setTwoToneColors=Q;var c=i},81561:function(q,O,u){"use strict";Object.defineProperty(O,"__esModule",{value:!0});function l(t,i){for(var c in i)Object.defineProperty(t,c,{enumerable:!0,get:i[c]})}l(O,{setTwoToneColor:function(){return b},getTwoToneColor:function(){return Q}});var Z=X(u(39888)),o=u(96757);function N(t,i){(i==null||i>t.length)&&(i=t.length);for(var c=0,r=new Array(i);c<i;c++)r[c]=t[c];return r}function Y(t){if(Array.isArray(t))return t}function X(t){return t&&t.__esModule?t:{default:t}}function V(t,i){var c=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var r=[],f=!0,g=!1,p,d;try{for(c=c.call(t);!(f=(p=c.next()).done)&&(r.push(p.value),!(i&&r.length===i));f=!0);}catch($){g=!0,d=$}finally{try{!f&&c.return!=null&&c.return()}finally{if(g)throw d}}return r}}function ee(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function G(t,i){return Y(t)||V(t,i)||z(t,i)||ee()}function z(t,i){if(t){if(typeof t=="string")return N(t,i);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(c);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return N(t,i)}}function b(t){var i=G((0,o.normalizeTwoToneColors)(t),2),c=i[0],r=i[1];return Z.default.setTwoToneColors({primaryColor:c,secondaryColor:r})}function Q(){var t=Z.default.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}},28215:function(q,O,u){"use strict";Object.defineProperty(O,"__esModule",{value:!0}),Object.defineProperty(O,"default",{enumerable:!0,get:function(){return Q}});var l=V(u(58757)),Z=Y(u(64693)),o=Y(u(70649));function N(t,i,c){return i in t?Object.defineProperty(t,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[i]=c,t}function Y(t){return t&&t.__esModule?t:{default:t}}function X(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,c=new WeakMap;return(X=function(r){return r?c:i})(t)}function V(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=X(i);if(c&&c.has(t))return c.get(t);var r={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in t)if(g!=="default"&&Object.prototype.hasOwnProperty.call(t,g)){var p=f?Object.getOwnPropertyDescriptor(t,g):null;p&&(p.get||p.set)?Object.defineProperty(r,g,p):r[g]=t[g]}return r.default=t,c&&c.set(t,r),r}function ee(t){for(var i=1;i<arguments.length;i++){var c=arguments[i]!=null?arguments[i]:{},r=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(c).filter(function(f){return Object.getOwnPropertyDescriptor(c,f).enumerable}))),r.forEach(function(f){N(t,f,c[f])})}return t}function G(t,i){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter(function(f){return Object.getOwnPropertyDescriptor(t,f).enumerable})),c.push.apply(c,r)}return c}function z(t,i){return i=i!=null?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(i,c))}),t}var b=function(t,i){return l.createElement(o.default,z(ee({},t),{ref:i,icon:Z.default}))},Q=l.forwardRef(b)},33574:function(q,O,u){"use strict";Object.defineProperty(O,"__esModule",{value:!0}),Object.defineProperty(O,"default",{enumerable:!0,get:function(){return Q}});var l=V(u(58757)),Z=Y(u(27003)),o=Y(u(70649));function N(t,i,c){return i in t?Object.defineProperty(t,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[i]=c,t}function Y(t){return t&&t.__esModule?t:{default:t}}function X(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,c=new WeakMap;return(X=function(r){return r?c:i})(t)}function V(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=X(i);if(c&&c.has(t))return c.get(t);var r={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in t)if(g!=="default"&&Object.prototype.hasOwnProperty.call(t,g)){var p=f?Object.getOwnPropertyDescriptor(t,g):null;p&&(p.get||p.set)?Object.defineProperty(r,g,p):r[g]=t[g]}return r.default=t,c&&c.set(t,r),r}function ee(t){for(var i=1;i<arguments.length;i++){var c=arguments[i]!=null?arguments[i]:{},r=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(c).filter(function(f){return Object.getOwnPropertyDescriptor(c,f).enumerable}))),r.forEach(function(f){N(t,f,c[f])})}return t}function G(t,i){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter(function(f){return Object.getOwnPropertyDescriptor(t,f).enumerable})),c.push.apply(c,r)}return c}function z(t,i){return i=i!=null?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(i,c))}),t}var b=function(t,i){return l.createElement(o.default,z(ee({},t),{ref:i,icon:Z.default}))},Q=l.forwardRef(b)},61845:function(q,O,u){"use strict";u.d(O,{_z:function(){return it}});var l=u(37734),Z=u(47075),o=u(57370),N=u(38790),Y=u(25846),X=u(16951),V=u(42505),ee=u(76152),G=u(87608),z=u.n(G),b=u(58757),Q=u(77895),t=u(30288),i=u(36490),c=u(26736),r=u(70260),f=function(e){return(0,l.Z)({},e.componentCls,{position:"fixed",insetInlineEnd:0,bottom:0,zIndex:99,display:"flex",alignItems:"center",width:"100%",paddingInline:24,paddingBlock:0,boxSizing:"border-box",lineHeight:"64px",backgroundColor:(0,r.uK)(e.colorBgElevated,.6),borderBlockStart:"1px solid ".concat(e.colorSplit),"-webkit-backdrop-filter":"blur(8px)",backdropFilter:"blur(8px)",color:e.colorText,transition:"all 0.2s ease 0s","&-left":{flex:1,color:e.colorText},"&-right":{color:e.colorText,"> *":{marginInlineEnd:8,"&:last-child":{marginBlock:0,marginInline:0}}}})};function g(C){return(0,r.Xj)("ProLayoutFooterToolbar",function(e){var n=(0,o.Z)((0,o.Z)({},e),{},{componentCls:".".concat(C)});return[f(n)]})}function p(C,e){var n=e.stylish;return(0,r.Xj)("ProLayoutFooterToolbarStylish",function(s){var y=(0,o.Z)((0,o.Z)({},s),{},{componentCls:".".concat(C)});return n?[(0,l.Z)({},"".concat(y.componentCls),n==null?void 0:n(y))]:[]})}var d=u(35667),$=["children","className","extra","portalDom","style","renderContent"],ae=function(e){var n=e.children,s=e.className,y=e.extra,j=e.portalDom,T=j===void 0?!0:j,D=e.style,B=e.renderContent,I=(0,Z.Z)(e,$),M=(0,b.useContext)(V.ZP.ConfigContext),S=M.getPrefixCls,H=M.getTargetContainer,F=e.prefixCls||S("pro"),w="".concat(F,"-footer-bar"),L=g(w),R=L.wrapSSR,U=L.hashId,h=(0,b.useContext)(Q.X),_=(0,b.useMemo)(function(){var W=h.hasSiderMenu,le=h.isMobile,ce=h.siderWidth;if(W)return ce?le?"100%":"calc(100% - ".concat(ce,"px)"):"100%"},[h.collapsed,h.hasSiderMenu,h.isMobile,h.siderWidth]),x=(0,b.useMemo)(function(){return(typeof window=="undefined"?"undefined":(0,N.Z)(window))===void 0||(typeof document=="undefined"?"undefined":(0,N.Z)(document))===void 0?null:(H==null?void 0:H())||document.body},[]),K=p("".concat(w,".").concat(w,"-stylish"),{stylish:e.stylish}),k=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"".concat(w,"-left ").concat(U).trim(),children:y}),(0,d.jsx)("div",{className:"".concat(w,"-right ").concat(U).trim(),children:n})]});(0,b.useEffect)(function(){return!h||!(h!=null&&h.setHasFooterToolbar)?function(){}:(h==null||h.setHasFooterToolbar(!0),function(){var W;h==null||(W=h.setHasFooterToolbar)===null||W===void 0||W.call(h,!1)})},[]);var re=(0,d.jsx)("div",(0,o.Z)((0,o.Z)({className:z()(s,U,w,(0,l.Z)({},"".concat(w,"-stylish"),!!e.stylish)),style:(0,o.Z)({width:_},D)},(0,i.Z)(I,["prefixCls"])),{},{children:B?B((0,o.Z)((0,o.Z)((0,o.Z)({},e),h),{},{leftWidth:_}),k):k})),ie=!(0,t.j)()||!T||!x?re:(0,c.createPortal)(re,x,w);return K.wrapSSR(R((0,d.jsx)(b.Fragment,{children:ie},w)))},se=function(e){return(0,l.Z)({},e.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function ye(C){return(0,r.Xj)("ProLayoutGridContent",function(e){var n=(0,o.Z)((0,o.Z)({},e),{},{componentCls:".".concat(C)});return[se(n)]})}var a=function(e){var n=(0,b.useContext)(Q.X),s=e.children,y=e.contentWidth,j=e.className,T=e.style,D=(0,b.useContext)(V.ZP.ConfigContext),B=D.getPrefixCls,I=e.prefixCls||B("pro"),M=y||n.contentWidth,S="".concat(I,"-grid-content"),H=ye(S),F=H.wrapSSR,w=H.hashId,L=M==="Fixed";return F((0,d.jsx)("div",{className:z()(S,w,j,(0,l.Z)({},"".concat(S,"-wide"),L)),style:T,children:(0,d.jsx)("div",{className:"".concat(I,"-grid-content-children ").concat(w).trim(),children:s})}))},v=u(28314),m=u(2252),P=u.n(m),E=u(8258),A=u.n(E),ne=u(73695),ve=u(9466),Pe=u(57414),Re=u(19425),xe=function(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},je=function(e){var n,s;return(0,l.Z)({},e.componentCls,(0,o.Z)((0,o.Z)({},r.Wf===null||r.Wf===void 0?void 0:(0,r.Wf)(e)),{},(s={position:"relative",backgroundColor:e.pageHeaderBgGhost,paddingBlock:e.pageHeaderPaddingVertical+2,paddingInline:e.pageHeaderPadding,"& &-has-breadcrumb":{paddingBlockStart:e.pageHeaderPaddingBreadCrumb},"& &-has-footer":{paddingBlockEnd:0},"& &-back":(0,l.Z)({marginInlineEnd:e.margin,fontSize:16,lineHeight:1,"&-button":(0,o.Z)((0,o.Z)({fontSize:16},r.Nd===null||r.Nd===void 0?void 0:(0,r.Nd)(e)),{},{color:e.pageHeaderColorBack,cursor:"pointer"})},"".concat(e.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:0})},(0,l.Z)(s,"& ".concat("ant","-divider-vertical"),{height:14,marginBlock:0,marginInline:e.marginSM,verticalAlign:"middle"}),(0,l.Z)(s,"& &-breadcrumb + &-heading",{marginBlockStart:e.marginXS}),(0,l.Z)(s,"& &-heading",{display:"flex",justifyContent:"space-between","&-left":{display:"flex",alignItems:"center",marginBlock:e.marginXS/2,marginInlineEnd:0,marginInlineStart:0,overflow:"hidden"},"&-title":(0,o.Z)((0,o.Z)({marginInlineEnd:e.marginSM,marginBlockEnd:0,color:e.colorTextHeading,fontWeight:600,fontSize:e.pageHeaderFontSizeHeaderTitle,lineHeight:e.controlHeight+"px"},xe()),{},(0,l.Z)({},"".concat(e.componentCls,"-rlt &"),{marginInlineEnd:0,marginInlineStart:e.marginSM})),"&-avatar":(0,l.Z)({marginInlineEnd:e.marginSM},"".concat(e.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:e.marginSM}),"&-tags":(0,l.Z)({},"".concat(e.componentCls,"-rlt &"),{float:"right"}),"&-sub-title":(0,o.Z)((0,o.Z)({marginInlineEnd:e.marginSM,color:e.colorTextSecondary,fontSize:e.pageHeaderFontSizeHeaderSubTitle,lineHeight:e.lineHeight},xe()),{},(0,l.Z)({},"".concat(e.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:12})),"&-extra":(n={marginBlock:e.marginXS/2,marginInlineEnd:0,marginInlineStart:0,whiteSpace:"nowrap","> *":(0,l.Z)({"white-space":"unset"},"".concat(e.componentCls,"-rlt &"),{marginInlineEnd:e.marginSM,marginInlineStart:0})},(0,l.Z)(n,"".concat(e.componentCls,"-rlt &"),{float:"left"}),(0,l.Z)(n,"*:first-child",(0,l.Z)({},"".concat(e.componentCls,"-rlt &"),{marginInlineEnd:0})),n)}),(0,l.Z)(s,"&-content",{paddingBlockStart:e.pageHeaderPaddingContentPadding}),(0,l.Z)(s,"&-footer",{marginBlockStart:e.margin}),(0,l.Z)(s,"&-compact &-heading",{flexWrap:"wrap"}),(0,l.Z)(s,"&-wide",{maxWidth:1152,margin:"0 auto"}),(0,l.Z)(s,"&-rtl",{direction:"rtl"}),s)))};function Oe(C){return(0,r.Xj)("ProLayoutPageHeader",function(e){var n=(0,o.Z)((0,o.Z)({},e),{},{componentCls:".".concat(C),pageHeaderBgGhost:"transparent",pageHeaderPadding:16,pageHeaderPaddingVertical:4,pageHeaderPaddingBreadCrumb:e.paddingSM,pageHeaderColorBack:e.colorTextHeading,pageHeaderFontSizeHeaderTitle:e.fontSizeHeading4,pageHeaderFontSizeHeaderSubTitle:14,pageHeaderPaddingContentPadding:e.paddingSM});return[je(n)]})}var Be=function(e,n,s,y){return!s||!y?null:(0,d.jsx)("div",{className:"".concat(e,"-back ").concat(n).trim(),children:(0,d.jsx)("div",{role:"button",onClick:function(T){y==null||y(T)},className:"".concat(e,"-back-button ").concat(n).trim(),"aria-label":"back",children:s})})},pe=function(e,n){var s;return(s=e.items)!==null&&s!==void 0&&s.length?(0,d.jsx)(ne.Z,(0,o.Z)((0,o.Z)({},e),{},{className:z()("".concat(n,"-breadcrumb"),e.className)})):null},Me=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:n==="rtl"?(0,d.jsx)(A(),{}):(0,d.jsx)(P(),{})},we=function(e,n){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",y=arguments.length>3?arguments[3]:void 0,j=n.title,T=n.avatar,D=n.subTitle,B=n.tags,I=n.extra,M=n.onBack,S="".concat(e,"-heading"),H=j||D||B||I;if(!H)return null;var F=Me(n,s),w=Be(e,y,F,M),L=w||T||H;return(0,d.jsxs)("div",{className:S+" "+y,children:[L&&(0,d.jsxs)("div",{className:"".concat(S,"-left ").concat(y).trim(),children:[w,T&&(0,d.jsx)(ve.C,(0,o.Z)({className:z()("".concat(S,"-avatar"),y,T.className)},T)),j&&(0,d.jsx)("span",{className:"".concat(S,"-title ").concat(y).trim(),title:typeof j=="string"?j:void 0,children:j}),D&&(0,d.jsx)("span",{className:"".concat(S,"-sub-title ").concat(y).trim(),title:typeof D=="string"?D:void 0,children:D}),B&&(0,d.jsx)("span",{className:"".concat(S,"-tags ").concat(y).trim(),children:B})]}),I&&(0,d.jsx)("span",{className:"".concat(S,"-extra ").concat(y).trim(),children:(0,d.jsx)(Pe.Z,{children:I})})]})},Ne=function(e,n,s){return n?(0,d.jsx)("div",{className:"".concat(e,"-footer ").concat(s).trim(),children:n}):null},Te=function(e,n,s){return(0,d.jsx)("div",{className:"".concat(e,"-content ").concat(s).trim(),children:n})},De=function(e){var n,s,y=b.useState(!1),j=(0,v.Z)(y,2),T=j[0],D=j[1],B=function(be){var Se=be.width;return D(Se<768)},I=b.useContext(V.ZP.ConfigContext),M=I.getPrefixCls,S=I.direction,H=e.prefixCls,F=e.style,w=e.footer,L=e.children,R=e.breadcrumb,U=e.breadcrumbRender,h=e.className,_=e.contentWidth,x=M("page-header",H),K=Oe(x),k=K.wrapSSR,re=K.hashId,ie=function(){return R&&!(R!=null&&R.items)&&R!==null&&R!==void 0&&R.routes&&(R.items=R.routes),R!=null&&R.items?pe(R,x):null},W=ie(),le=R&&"props"in R,ce=(n=U==null?void 0:U((0,o.Z)((0,o.Z)({},e),{},{prefixCls:x}),W))!==null&&n!==void 0?n:W,te=le?R:ce,he=z()(x,re,h,(s={},(0,l.Z)(s,"".concat(x,"-has-breadcrumb"),!!te),(0,l.Z)(s,"".concat(x,"-has-footer"),!!w),(0,l.Z)(s,"".concat(x,"-rtl"),S==="rtl"),(0,l.Z)(s,"".concat(x,"-compact"),T),(0,l.Z)(s,"".concat(x,"-wide"),_==="Fixed"),(0,l.Z)(s,"".concat(x,"-ghost"),!0),s)),ge=we(x,e,S,re),oe=L&&Te(x,L,re),fe=Ne(x,w,re);return!te&&!ge&&!fe&&!oe?null:k((0,d.jsx)(Re.Z,{onResize:B,children:(0,d.jsxs)("div",{className:he,style:F,children:[te,ge,oe,fe]})}))},Ee=u(20202),Ue=function(e){if(!e)return 1;var n=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/n},Ge=function(e){var n=e.children,s=e.style,y=e.className,j=e.markStyle,T=e.markClassName,D=e.zIndex,B=D===void 0?9:D,I=e.gapX,M=I===void 0?212:I,S=e.gapY,H=S===void 0?222:S,F=e.width,w=F===void 0?120:F,L=e.height,R=L===void 0?64:L,U=e.rotate,h=U===void 0?-22:U,_=e.image,x=e.content,K=e.offsetLeft,k=e.offsetTop,re=e.fontStyle,ie=re===void 0?"normal":re,W=e.fontWeight,le=W===void 0?"normal":W,ce=e.fontColor,te=ce===void 0?"rgba(0,0,0,.15)":ce,he=e.fontSize,ge=he===void 0?16:he,oe=e.fontFamily,fe=oe===void 0?"sans-serif":oe,Ce=e.prefixCls,be=(0,b.useContext)(V.ZP.ConfigContext),Se=be.getPrefixCls,J=Se("pro-layout-watermark",Ce),de=z()("".concat(J,"-wrapper"),y),He=z()(J,T),lt=(0,b.useState)(""),Le=(0,v.Z)(lt,2),ze=Le[0],Fe=Le[1];return(0,b.useEffect)(function(){var _e=document.createElement("canvas"),ue=_e.getContext("2d"),me=Ue(ue),ct="".concat((M+w)*me,"px"),dt="".concat((H+R)*me,"px"),ut=K||M/2,st=k||H/2;if(_e.setAttribute("width",ct),_e.setAttribute("height",dt),ue){ue.translate(ut*me,st*me),ue.rotate(Math.PI/180*Number(h));var ft=w*me,ke=R*me;if(_){var Ze=new Image;Ze.crossOrigin="anonymous",Ze.referrerPolicy="no-referrer",Ze.src=_,Ze.onload=function(){ue.drawImage(Ze,0,0,ft,ke),Fe(_e.toDataURL())}}else if(x){var Xe=Number(ge)*me;ue.font="".concat(ie," normal ").concat(le," ").concat(Xe,"px/").concat(ke,"px ").concat(fe),ue.fillStyle=te,Array.isArray(x)?x==null||x.forEach(function(vt,gt){return ue.fillText(vt,0,gt*Xe)}):ue.fillText(x,0,0),Fe(_e.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[M,H,K,k,h,ie,le,w,R,fe,te,_,x,ge]),(0,d.jsxs)("div",{style:(0,o.Z)({position:"relative"},s),className:de,children:[n,(0,d.jsx)("div",{className:He,style:(0,o.Z)((0,o.Z)({zIndex:B,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(M+w,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},ze?{backgroundImage:"url('".concat(ze,"')")}:{}),j)})]})},Ke=[576,768,992,1200].map(function(C){return"@media (max-width: ".concat(C,"px)")}),Ie=(0,v.Z)(Ke,4),$e=Ie[0],We=Ie[1],Ye=Ie[2],Ve=Ie[3],Je=function(e){var n,s,y,j,T,D,B,I,M,S,H,F,w,L,R,U,h,_,x,K,k;return(0,l.Z)({},e.componentCls,(k={position:"relative","&-children-container":{paddingBlock:(n=e.layout)===null||n===void 0||(s=n.pageContainer)===null||s===void 0?void 0:s.paddingBlockPageContainerContent,paddingInline:(y=e.layout)===null||y===void 0||(j=y.pageContainer)===null||j===void 0?void 0:j.paddingInlinePageContainerContent},"&-affix":(0,l.Z)({},"".concat(e.antCls,"-affix"),(0,l.Z)({},"".concat(e.componentCls,"-warp"),{backgroundColor:(T=e.layout)===null||T===void 0||(D=T.pageContainer)===null||D===void 0?void 0:D.colorBgPageContainerFixed,transition:"background-color 0.3s",boxShadow:"0 2px 8px #f0f1f2"}))},(0,l.Z)(k,"& &-warp-page-header",(0,l.Z)({paddingBlockStart:((B=(I=e.layout)===null||I===void 0||(M=I.pageContainer)===null||M===void 0?void 0:M.paddingBlockPageContainerContent)!==null&&B!==void 0?B:40)/3,paddingBlockEnd:((S=(H=e.layout)===null||H===void 0||(F=H.pageContainer)===null||F===void 0?void 0:F.paddingBlockPageContainerContent)!==null&&S!==void 0?S:40)/2,paddingInlineStart:(w=e.layout)===null||w===void 0||(L=w.pageContainer)===null||L===void 0?void 0:L.paddingInlinePageContainerContent,paddingInlineEnd:(R=e.layout)===null||R===void 0||(U=R.pageContainer)===null||U===void 0?void 0:U.paddingInlinePageContainerContent},"& ~ ".concat(e.proComponentsCls,"-grid-content"),(0,l.Z)({},"".concat(e.proComponentsCls,"-page-container-children-content"),{paddingBlock:((h=(_=e.layout)===null||_===void 0||(x=_.pageContainer)===null||x===void 0?void 0:x.paddingBlockPageContainerContent)!==null&&h!==void 0?h:24)/3}))),(0,l.Z)(k,"&-detail",(0,l.Z)({display:"flex"},$e,{display:"block"})),(0,l.Z)(k,"&-main",{width:"100%"}),(0,l.Z)(k,"&-row",(0,l.Z)({display:"flex",width:"100%"},We,{display:"block"})),(0,l.Z)(k,"&-content",{flex:"auto",width:"100%"}),(0,l.Z)(k,"&-extraContent",(K={flex:"0 1 auto",minWidth:"242px",marginInlineStart:88,textAlign:"end"},(0,l.Z)(K,Ve,{marginInlineStart:44}),(0,l.Z)(K,Ye,{marginInlineStart:20}),(0,l.Z)(K,We,{marginInlineStart:0,textAlign:"start"}),(0,l.Z)(K,$e,{marginInlineStart:0}),K)),k))};function Qe(C,e){return(0,r.Xj)("ProLayoutPageContainer",function(n){var s,y=(0,o.Z)((0,o.Z)({},n),{},{componentCls:".".concat(C),layout:(0,o.Z)((0,o.Z)({},n==null?void 0:n.layout),{},{pageContainer:(0,o.Z)((0,o.Z)({},n==null||(s=n.layout)===null||s===void 0?void 0:s.pageContainer),e)})});return[Je(y)]})}function qe(C,e){var n=e.stylish;return(0,r.Xj)("ProLayoutPageContainerStylish",function(s){var y=(0,o.Z)((0,o.Z)({},s),{},{componentCls:".".concat(C)});return n?[(0,l.Z)({},"div".concat(y.componentCls),n==null?void 0:n(y))]:[]})}var et=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","childrenContentStyle","style","prefixCls","hashId","value","breadcrumbRender"],tt=["children","loading","className","style","footer","affixProps","token","fixedHeader","breadcrumbRender","footerToolBarProps","childrenContentStyle"];function rt(C){return(0,N.Z)(C)==="object"?C:{spinning:C}}var nt=function(e){var n=e.tabList,s=e.tabActiveKey,y=e.onTabChange,j=e.hashId,T=e.tabBarExtraContent,D=e.tabProps,B=e.prefixedClassName;return Array.isArray(n)||T?(0,d.jsx)(X.Z,(0,o.Z)((0,o.Z)({className:"".concat(B,"-tabs ").concat(j).trim(),activeKey:s,onChange:function(M){y&&y(M)},tabBarExtraContent:T,items:n==null?void 0:n.map(function(I,M){var S;return(0,o.Z)((0,o.Z)({label:I.tab},I),{},{key:((S=I.key)===null||S===void 0?void 0:S.toString())||(M==null?void 0:M.toString())})})},D),{},{children:n==null?void 0:n.map(function(I,M){return(0,d.jsx)(X.Z.TabPane,(0,o.Z)({tab:I.tab},I),I.key||M)})})):null},at=function(e,n,s,y){return!e&&!n?null:(0,d.jsx)("div",{className:"".concat(s,"-detail ").concat(y).trim(),children:(0,d.jsx)("div",{className:"".concat(s,"-main ").concat(y).trim(),children:(0,d.jsxs)("div",{className:"".concat(s,"-row ").concat(y).trim(),children:[e&&(0,d.jsx)("div",{className:"".concat(s,"-content ").concat(y).trim(),children:e}),n&&(0,d.jsx)("div",{className:"".concat(s,"-extraContent ").concat(y).trim(),children:n})]})})})},mt=function(e){var n=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},n==null?void 0:n.breadcrumb),n==null?void 0:n.breadcrumbProps),e))})},Ae=function(e){var n,s=e.title,y=e.content,j=e.pageHeaderRender,T=e.header,D=e.prefixedClassName,B=e.extraContent,I=e.childrenContentStyle,M=e.style,S=e.prefixCls,H=e.hashId,F=e.value,w=e.breadcrumbRender,L=(0,Z.Z)(e,et),R=function(){if(w)return w};if(j===!1)return null;if(j)return(0,d.jsxs)(d.Fragment,{children:[" ",j((0,o.Z)((0,o.Z)({},e),F))]});var U=s;!s&&s!==!1&&(U=F.title);var h=(0,o.Z)((0,o.Z)((0,o.Z)({},F),{},{title:U},L),{},{footer:nt((0,o.Z)((0,o.Z)({},L),{},{hashId:H,breadcrumbRender:w,prefixedClassName:D}))},T),_=h,x=_.breadcrumb,K=(!x||!(x!=null&&x.itemRender)&&!(x!=null&&(n=x.items)!==null&&n!==void 0&&n.length))&&!w;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(k){return!h[k]})&&K&&!y&&!B?null:(0,d.jsx)(De,(0,o.Z)((0,o.Z)({},h),{},{className:"".concat(D,"-warp-page-header ").concat(H).trim(),breadcrumb:w===!1?void 0:(0,o.Z)((0,o.Z)({},h.breadcrumb),F.breadcrumbProps),breadcrumbRender:R(),prefixCls:S,children:(T==null?void 0:T.children)||at(y,B,D,H)}))},ot=function(e){var n,s,y,j,T=e.children,D=e.loading,B=D===void 0?!1:D,I=e.className,M=e.style,S=e.footer,H=e.affixProps,F=e.token,w=e.fixedHeader,L=e.breadcrumbRender,R=e.footerToolBarProps,U=e.childrenContentStyle,h=(0,Z.Z)(e,tt),_=(0,b.useContext)(Q.X);(0,b.useEffect)(function(){var J;return!_||!(_!=null&&_.setHasPageContainer)?function(){}:(_==null||(J=_.setHasPageContainer)===null||J===void 0||J.call(_,function(de){return de+1}),function(){var de;_==null||(de=_.setHasPageContainer)===null||de===void 0||de.call(_,function(He){return He-1})})},[]);var x=(0,b.useContext)(Y.L_),K=x.token,k=(0,b.useContext)(V.ZP.ConfigContext),re=k.getPrefixCls,ie=e.prefixCls||re("pro"),W="".concat(ie,"-page-container"),le=Qe(W,F),ce=le.wrapSSR,te=le.hashId,he=qe("".concat(W,".").concat(W,"-stylish"),{stylish:e.stylish}),ge=(0,b.useMemo)(function(){var J;return L==!1?!1:L||(h==null||(J=h.header)===null||J===void 0?void 0:J.breadcrumbRender)},[L,h==null||(n=h.header)===null||n===void 0?void 0:n.breadcrumbRender]),oe=Ae((0,o.Z)((0,o.Z)({},h),{},{breadcrumbRender:ge,ghost:!0,hashId:te,prefixCls:void 0,prefixedClassName:W,value:_})),fe=(0,b.useMemo)(function(){if(b.isValidElement(B))return B;if(typeof B=="boolean"&&!B)return null;var J=rt(B);return J.spinning?(0,d.jsx)(Ee.S,(0,o.Z)({},J)):null},[B]),Ce=(0,b.useMemo)(function(){return T?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:z()("".concat(W,"-children-container ").concat(te).trim()),style:U,children:T})}):null},[T,W,U,te]),be=(0,b.useMemo)(function(){var J=fe||Ce;if(e.waterMarkProps||_.waterMarkProps){var de=(0,o.Z)((0,o.Z)({},_.waterMarkProps),e.waterMarkProps);return(0,d.jsx)(Ge,(0,o.Z)((0,o.Z)({},de),{},{children:J}))}return J},[e.waterMarkProps,_.waterMarkProps,fe,Ce]),Se=z()(W,te,I,(s={},(0,l.Z)(s,"".concat(W,"-with-footer"),S),(0,l.Z)(s,"".concat(W,"-with-affix"),w&&oe),(0,l.Z)(s,"".concat(W,"-stylish"),!!h.stylish),s));return ce(he.wrapSSR((0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{style:M,className:Se,children:[w&&oe?(0,d.jsx)(ee.Z,(0,o.Z)((0,o.Z)({offsetTop:_.hasHeader&&_.fixedHeader?(y=K.layout)===null||y===void 0||(j=y.header)===null||j===void 0?void 0:j.heightLayoutHeader:1},H),{},{className:"".concat(W,"-affix ").concat(te).trim(),children:(0,d.jsx)("div",{className:"".concat(W,"-warp ").concat(te).trim(),children:oe})})):oe,be&&(0,d.jsx)(a,{children:be})]}),S&&(0,d.jsx)(ae,(0,o.Z)((0,o.Z)({stylish:h.footerStylish,prefixCls:ie},R),{},{children:S}))]})))},it=function(e){return(0,d.jsx)(Y._Y,{needDeps:!0,children:(0,d.jsx)(ot,(0,o.Z)({},e))})},yt=function(e){var n=useContext(RouteContext);return Ae(_objectSpread(_objectSpread({},e),{},{hashId:"",value:n}))}},20202:function(q,O,u){"use strict";u.d(O,{S:function(){return V}});var l=u(57370),Z=u(47075),o=u(79233),N=u(58757),Y=u(35667),X=["isLoading","pastDelay","timedOut","error","retry"],V=function(G){var z=G.isLoading,b=G.pastDelay,Q=G.timedOut,t=G.error,i=G.retry,c=(0,Z.Z)(G,X);return(0,Y.jsx)("div",{style:{paddingBlockStart:100,textAlign:"center"},children:(0,Y.jsx)(o.Z,(0,l.Z)({size:"large"},c))})}},77895:function(q,O,u){"use strict";u.d(O,{X:function(){return Z}});var l=u(58757),Z=(0,l.createContext)({})},30288:function(q,O,u){"use strict";u.d(O,{j:function(){return o}});var l=u(73656),Z=typeof l!="undefined"&&l.versions!=null&&l.versions.node!=null,o=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.matchMedia!="undefined"&&!Z}}}]);
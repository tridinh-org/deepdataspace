"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[358],{69622:function(P,u,o){o.r(u),o.d(u,{default:function(){return D}});var W=o(52983),$=o(40852),O=o(17212),i=o(77470),y=o(52994),E=o(7818),p={page:"page___Lcm4P",list:"list___ohS5i",card:"card___Dbi0J",content:"content___kIUmq",title:"title___y_wsO",subTitle:"subTitle___bu4U_"},c=o(97458),N=function(){var L=(0,E.bU)(),j=L.localeText,g=j("lab.card.title"),B=j("lab.card.subTitle"),I=[{title:g,subTitle:B,image:o(62122),link:"/lab/datasets?type=flagtool"}];return(0,c.jsx)($._z,{className:p.page,fixedHeader:!0,children:(0,c.jsx)(O.ZP,{className:p.list,dataSource:I,renderItem:function(f){return(0,c.jsx)(O.ZP.Item,{children:(0,c.jsxs)(i.Z,{hoverable:!0,className:p.card,onClick:function(){return y.history.push(f.link)},bodyStyle:{padding:0},children:[(0,c.jsx)("img",{src:f.image,alt:f.title}),(0,c.jsxs)("div",{className:p.content,children:[(0,c.jsx)("div",{className:p.title,children:f.title}),(0,c.jsx)("div",{className:p.subTitle,children:f.subTitle})]})]})})}})})},D=N},77470:function(P,u,o){o.d(u,{Z:function(){return oe}});var W=o(83849),$=o.n(W),O=o(98288),i=o(52983),y=o(6453),E=o(91143),p=o(26401),c=o(5670),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},H=e=>{var{prefixCls:t,className:n,hoverable:a=!0}=e,r=N(e,["prefixCls","className","hoverable"]);const{getPrefixCls:l}=i.useContext(y.E_),b=l("card",t),v=$()(`${b}-grid`,n,{[`${b}-grid-hoverable`]:a});return i.createElement("div",Object.assign({},r,{className:v}))},L=o(93411),j=o(19573),g=o(26554);const B=e=>{const{antCls:t,componentCls:n,cardHeadHeight:a,cardPaddingBase:r,cardHeadTabsMarginBottom:l}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,background:"transparent",borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,g.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},g.vS),{[`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:l,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},I=e=>{const{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${r}px 0 0 0 ${n},
      0 ${r}px 0 0 ${n},
      ${r}px ${r}px 0 0 ${n},
      ${r}px 0 0 0 ${n} inset,
      0 ${r}px 0 0 ${n} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},R=e=>{const{componentCls:t,iconCls:n,cardActionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:l}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:e.colorBgContainer,borderTop:`${e.lineWidth}px ${e.lineType} ${l}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,g.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${n}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${n}`]:{fontSize:r,lineHeight:`${r*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${l}`}}})},f=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,g.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},g.vS),"&-description":{color:e.colorTextDescription}}),A=e=>{const{componentCls:t,cardPaddingBase:n,colorFillAlter:a}=e;return{[`${t}-head`]:{padding:`0 ${n}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${n}px`}}},q=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},_=e=>{const{componentCls:t,cardShadow:n,cardHeadPadding:a,colorBorderSecondary:r,boxShadowTertiary:l,cardPaddingBase:b}=e;return{[t]:Object.assign(Object.assign({},(0,g.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:l},[`${t}-head`]:B(e),[`${t}-extra`]:{marginInlineStart:"auto",color:"",fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:b,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,g.dF)()),[`${t}-grid`]:I(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},img:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:R(e),[`${t}-meta`]:f(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${r}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:n}},[`${t}-contain-grid`]:{[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:a}}},[`${t}-type-inner`]:A(e),[`${t}-loading`]:q(e),[`${t}-rtl`]:{direction:"rtl"}}},k=e=>{const{componentCls:t,cardPaddingSM:n,cardHeadHeightSM:a}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:a,padding:`0 ${n}px`,fontSize:e.fontSize,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:n}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{minHeight:a,paddingTop:0,display:"flex",alignItems:"center"}}}}};var ee=(0,L.Z)("Card",e=>{const t=(0,j.TS)(e,{cardShadow:e.boxShadowCard,cardHeadHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,cardHeadHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardHeadTabsMarginBottom:-e.padding-e.lineWidth,cardActionsLiMargin:`${e.paddingSM}px 0`,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[_(t),k(t)]}),te=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function ae(e){return e.map((n,a)=>i.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${a}`},i.createElement("span",null,n)))}var re=i.forwardRef((e,t)=>{const{getPrefixCls:n,direction:a}=i.useContext(y.E_),r=i.useContext(E.Z),l=m=>{var s;(s=e.onTabChange)===null||s===void 0||s.call(e,m)},b=()=>{let m;return i.Children.forEach(e.children,s=>{s&&s.type&&s.type===H&&(m=!0)}),m},{prefixCls:v,className:h,rootClassName:M,extra:x,headStyle:T={},bodyStyle:z={},title:S,loading:Z,bordered:de=!0,size:le,type:K,cover:F,actions:w,tabList:C,children:X,activeTabKey:U,defaultActiveTabKey:se,tabBarExtraContent:ce,hoverable:ge,tabProps:pe={}}=e,be=te(e,["prefixCls","className","rootClassName","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),d=n("card",v),[me,fe]=ee(d),he=i.createElement(p.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},X),J=U!==void 0,ue=Object.assign(Object.assign({},pe),{[J?"activeKey":"defaultActiveKey"]:J?U:se,tabBarExtraContent:ce});let Q;const V=C&&C.length?i.createElement(c.Z,Object.assign({size:"large"},ue,{className:`${d}-head-tabs`,onChange:l,items:C.map(m=>{var s;return{label:m.tab,key:m.key,disabled:(s=m.disabled)!==null&&s!==void 0?s:!1}})})):null;(S||x||V)&&(Q=i.createElement("div",{className:`${d}-head`,style:T},i.createElement("div",{className:`${d}-head-wrapper`},S&&i.createElement("div",{className:`${d}-head-title`},S),x&&i.createElement("div",{className:`${d}-extra`},x)),V));const $e=F?i.createElement("div",{className:`${d}-cover`},F):null,ye=i.createElement("div",{className:`${d}-body`,style:z},Z?he:X),ve=w&&w.length?i.createElement("ul",{className:`${d}-actions`},ae(w)):null,xe=(0,O.Z)(be,["onTabChange"]),Y=le||r,Se=$()(d,{[`${d}-loading`]:Z,[`${d}-bordered`]:de,[`${d}-hoverable`]:ge,[`${d}-contain-grid`]:b(),[`${d}-contain-tabs`]:C&&C.length,[`${d}-${Y}`]:Y,[`${d}-type-${K}`]:!!K,[`${d}-rtl`]:a==="rtl"},h,M,fe);return me(i.createElement("div",Object.assign({ref:t},xe,{className:Se}),Q,$e,ye,ve))}),ne=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},ie=e=>{const{prefixCls:t,className:n,avatar:a,title:r,description:l}=e,b=ne(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:v}=i.useContext(y.E_),h=v("card",t),M=$()(`${h}-meta`,n),x=a?i.createElement("div",{className:`${h}-meta-avatar`},a):null,T=r?i.createElement("div",{className:`${h}-meta-title`},r):null,z=l?i.createElement("div",{className:`${h}-meta-description`},l):null,S=T||z?i.createElement("div",{className:`${h}-meta-detail`},T,z):null;return i.createElement("div",Object.assign({},b,{className:M}),x,S)};const G=re;G.Grid=H,G.Meta=ie;var oe=G},62122:function(P,u,o){P.exports=o.p+"static/flagtool.a991e5bd.png"}}]);

//# sourceMappingURL=p__Lab__index.ec0eb336.async.js.map
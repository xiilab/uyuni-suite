"use strict";(self.webpackChunkuyuni_suite_menual=self.webpackChunkuyuni_suite_menual||[]).push([[576],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58036:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:2},i="\uc2ac\ub7fc \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30 (\uc791\uc131\uc804)",u={unversionedId:"tutorial-manager-user/create-slurm-project",id:"version-release-0.5/tutorial-manager-user/create-slurm-project",title:"\uc2ac\ub7fc \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30 (\uc791\uc131\uc804)",description:"\uc11c\ubc84\ub0b4\uc758 GPU\uc744 \ud560\ub2f9\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/versioned_docs/version-release-0.5/tutorial-manager-user/create-slurm-project.mdx",sourceDirName:"tutorial-manager-user",slug:"/tutorial-manager-user/create-slurm-project",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager-user/create-slurm-project",draft:!1,tags:[],version:"release-0.5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager-user/create-project"},next:{title:"\ud504\ub85c\uc81d\ud2b8 \uc0c1\uc138\ubcf4\uae30",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager-user/project-info"}},l={},c=[{value:"1. \ud504\ub85c\uc81d\ud2b8 \ud398\uc774\uc9c0 \uc774\ub3d9",id:"1-\ud504\ub85c\uc81d\ud2b8-\ud398\uc774\uc9c0-\uc774\ub3d9",level:2}],s={toc:c};function p(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc2ac\ub7fc-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131\ud558\uae30-\uc791\uc131\uc804"},"\uc2ac\ub7fc \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30 (\uc791\uc131\uc804)"),(0,a.kt)("p",null,"\uc11c\ubc84\ub0b4\uc758 GPU\uc744 \ud560\ub2f9\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"1-\ud504\ub85c\uc81d\ud2b8-\ud398\uc774\uc9c0-\uc774\ub3d9"},"1. \ud504\ub85c\uc81d\ud2b8 \ud398\uc774\uc9c0 \uc774\ub3d9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc88c\uce21 \uba54\ub274\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \ud074\ub9ad"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Untitled",src:t(68526).Z,width:"1919",height:"879"})))))}p.isMDXComponent=!0},68526:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/1-4f2288be7533c0ba415cf73c5f78fa96.png"}}]);
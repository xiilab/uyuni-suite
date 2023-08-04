"use strict";(self.webpackChunkuyuni_suite_menual=self.webpackChunkuyuni_suite_menual||[]).push([[7340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),A=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=A(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=A(n),c=r,s=u["".concat(p,".").concat(c)]||u[c]||k[c]||a;return n?l.createElement(s,i(i({ref:t},m),{},{components:n})):l.createElement(s,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var A=2;A<a;A++)i[A]=n[A];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>A});var l=n(87462),r=(n(67294),n(3905));const a={},i="kubernetes",o={unversionedId:"tutorial-manager/cluster/kubernetes/kubernetes-cluster",id:"version-release-0.5/tutorial-manager/cluster/kubernetes/kubernetes-cluster",title:"kubernetes",description:"1. \ub178\ub4dc \ucd94\uac00",source:"@site/versioned_docs/version-release-0.5/tutorial-manager/cluster/kubernetes/kubernetes-cluster.mdx",sourceDirName:"tutorial-manager/cluster/kubernetes",slug:"/tutorial-manager/cluster/kubernetes/kubernetes-cluster",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager/cluster/kubernetes/kubernetes-cluster",draft:!1,tags:[],version:"release-0.5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud504\ub85c\uc81d\ud2b8 \uc0ad\uc81c",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager/project/k8s/delete-project"},next:{title:"slurm",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager/cluster/slurm/slurm-cluster"}},p={},A=[{value:"1. \ub178\ub4dc \ucd94\uac00",id:"1-\ub178\ub4dc-\ucd94\uac00",level:2},{value:"2. \ub178\ub4dc \uc870\ud68c",id:"2-\ub178\ub4dc-\uc870\ud68c",level:2},{value:"3. MIG \uc124\uc815\ud558\uae30",id:"3-mig-\uc124\uc815\ud558\uae30",level:2},{value:"4. \ub178\ub4dc \uc6b0\uc120 \uc21c\uc704 \uc124\uc815",id:"4-\ub178\ub4dc-\uc6b0\uc120-\uc21c\uc704-\uc124\uc815",level:2},{value:"5. \ub178\ub4dc\ubcc4 \uadf8\ub8f9 \uc124\uc815",id:"5-\ub178\ub4dc\ubcc4-\uadf8\ub8f9-\uc124\uc815",level:2}],m={toc:A};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes"},"kubernetes"),(0,r.kt)("h2",{id:"1-\ub178\ub4dc-\ucd94\uac00"},"1. \ub178\ub4dc \ucd94\uac00"),(0,r.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130 \u25b7 \uc88c\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4")," \ud0ed \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f \uc6b0\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"+ \ub178\ub4dc")," \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucd94\uac00")," \ubc84\ud2bc \ud074\ub9ad"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud604\uc7ac \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0 \ucd94\uac00 \ub418\uc5b4 \uc788\ub294 \ubaa8\ub4e0 \ub178\ub4dc\ub97c \uc6b0\uc720\ub2c8\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"2-\ub178\ub4dc-\uc870\ud68c"},"2. \ub178\ub4dc \uc870\ud68c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc6b0\uc720\ub2c8\uc5d0 \ucd94\uac00\ub41c \ub178\ub4dc\ub97c \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub178\ub4dc \uc6b0\uc120 \uc21c\uc704")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub178\ub4dc IP, \ub178\ub4dc\uba85")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MIG \ud0dc\uadf8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIG \uae30\ub2a5\uc774 \uc124\uc815\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub9cc \ucd9c\ub825\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(41597).Z,width:"149",height:"98"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud574\ub2f9 \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uadf8\ub8f9")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub178\ub4dc\uc758 \ub9ac\uc18c\uc2a4 \ud3c9\uade0 \uac12 "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPU, GPU Memory, GPU \uc628\ub3c4, CPU, Memory, Disk")))),(0,r.kt)("h2",{id:"3-mig-\uc124\uc815\ud558\uae30"},"3. MIG \uc124\uc815\ud558\uae30"),(0,r.kt)("p",{style:{color:"red",fontWeight:"bold"}},"\u2713 MIG \uc124\uc815 \uae30\ub2a5\uc740 \ud558\ub2e8 NVIDA GPU \ubaa8\ub378\ub9cc \uc9c0\uc6d0\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A100 40G"),(0,r.kt)("li",{parentName:"ul"},"A100 80G"),(0,r.kt)("li",{parentName:"ul"},"A30 "),(0,r.kt)("li",{parentName:"ul"},"H100")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MIG \ud65c\uc131\ud654 \ud558\uae30 "),(0,r.kt)("p",{parentName:"li"},"\ud074\ub7ec\uc2a4\ud130 \u25b7 \uc88c\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4")," \ud0ed \ubc84\ud2bc \ud074\ub9ad \u25b7 \uc6d0\ud558\ub294 \ub178\ub4dc \uc120\ud0dd \u25b6\ufe0f \uc6b0\uce21 ",(0,r.kt)("inlineCode",{parentName:"p"},"MIG")," \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f \uc88c\uce21 ",(0,r.kt)("inlineCode",{parentName:"p"},"profile \uc870\ud569 \ubc29\ubc95")," \uc140\ub809\ud2b8 \ubc15\uc2a4 \ud074\ub9ad \u25b6\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"single")," \uc635\uc158 \uc120\ud0dd \u25b6\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," \uc140\ub809\ud2b8 \ubc15\uc2a4 \ud074\ub9ad \u25b6\ufe0f \uc6d0\ud558\ub294 profile \ud074\ub9ad \u25b6\ufe0f \uc6b0\uce21 \ud558\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud655\uc778")," \ubc84\ud2bc \ud074\ub9ad"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(53095).Z,width:"1204",height:"878"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MIG \ube44\ud65c\uc131\ud654 \ud558\uae30"),(0,r.kt)("p",{parentName:"li"},"\ud074\ub7ec\uc2a4\ud130 \u25b7 \uc88c\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4")," \ud0ed \ubc84\ud2bc \ud074\ub9ad \u25b7 \uc6d0\ud558\ub294 \ub178\ub4dc \uc120\ud0dd \u25b6\ufe0f \uc6b0\uce21 ",(0,r.kt)("inlineCode",{parentName:"p"},"MIG")," \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f \uc88c\uce21 ",(0,r.kt)("inlineCode",{parentName:"p"},"profile \uc870\ud569 \ubc29\ubc95")," \uc140\ub809\ud2b8 \ubc15\uc2a4 \ud074\ub9ad \u25b6\ufe0f MIG ",(0,r.kt)("inlineCode",{parentName:"p"},"\ube44\ud65c\uc131\ud654")," \uc635\uc158 \uc120\ud0dd \u25b6\ufe0f \uc6b0\uce21 \ud558\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud655\uc778")," \ubc84\ud2bc \ud074\ub9ad"))),(0,r.kt)("h2",{id:"4-\ub178\ub4dc-\uc6b0\uc120-\uc21c\uc704-\uc124\uc815"},"4. \ub178\ub4dc \uc6b0\uc120 \uc21c\uc704 \uc124\uc815"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \uc2dc \uc124\uc815\ud55c \ub178\ub4dc \uc6b0\uc120\uc21c\uc704 \uc815\ubcf4\ub97c \ubc14\ud0d5\uc73c\ub85c GPU\ub97c \ud560\ub2f9\ud574\uc90d\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130 \u25b7 \uc88c\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4")," \ud0ed \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f \uc6b0\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub178\ub4dc \uc6b0\uc120\uc21c\uc704")," \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f drag&drop \ud639\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc6b0\uce21 \ud654\uc0b4\ud45c")," \ubc84\ud2bc \ud074\ub9ad\uc73c\ub85c \uc21c\uc704 \ubcc0\uacbd \u25b6\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubcc0\uacbd")," \ubc84\ud2bc \ud074\ub9ad"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(16302).Z,width:"603",height:"429"})),(0,r.kt)("h2",{id:"5-\ub178\ub4dc\ubcc4-\uadf8\ub8f9-\uc124\uc815"},"5. \ub178\ub4dc\ubcc4 \uadf8\ub8f9 \uc124\uc815"),(0,r.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130 \u25b7 \uc88c\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4")," \ud0ed \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f \uc6b0\uce21 \uc0c1\ub2e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub178\ub4dc\ubcc4 \uadf8\ub8f9 \uc124\uc815")," \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubcc0\uacbd")," \ubc84\ud2bc \ud074\ub9ad"),(0,r.kt)("p",{style:{color:"red",fontWeight:"bold"}},"\u2713 \uadf8\ub8f9 \uc124\uc815\uc5d0 \uc5b4\ub290 \uadf8\ub8f9\ub3c4 \uc124\uc815 \ub418\uc5b4\uc788\uc9c0 \uc54a\uc73c\uba74 \ubaa8\ub4e0 \uadf8\ub8f9\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\uac01 \ub178\ub4dc\uc5d0 \uc811\uadfc \uac00\ub2a5\ud55c \uadf8\ub8f9\uc744 \uc81c\ud55c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("li",{parentName:"ul"},"\uc124\uc815\ub41c \uadf8\ub8f9 \uc678 \ub2e4\ub978 \uadf8\ub8f9\uc740 \ud574\ub2f9 \ub178\ub4dc\uc758 \uc790\uc6d0(GPU, Memory, CPU, Disk \ub4f1)\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. "))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(73612).Z,width:"904",height:"361"})))}k.isMDXComponent=!0},41597:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"},53095:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/2-cfa8cd3c7fab28ddfc6710cc0a04ade3.png"},16302:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/3-150930e151e0114849202a63bdc7ad54.png"},73612:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/4-401b9d0e366b834be739a2a2ac8be8c7.png"}}]);
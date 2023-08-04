"use strict";(self.webpackChunkuyuni_suite_menual=self.webpackChunkuyuni_suite_menual||[]).push([[2923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},i="Slurm \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",o={unversionedId:"tutorial-manager/project/slurm/create-slurm",id:"version-release-0.5/tutorial-manager/project/slurm/create-slurm",title:"Slurm \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",description:"\ud504\ub85c\uc81d\ud2b8 \u25b7 \uc0c1\ub2e8 \uc2ac\ub7fc \ud0ed \ubc84\ud2bc \ud074\ub9ad \u2a01\ud504\ub85c\uc81d\ud2b8 \ubc84\ud2bc \ud074\ub9ad",source:"@site/versioned_docs/version-release-0.5/tutorial-manager/project/slurm/create-slurm.mdx",sourceDirName:"tutorial-manager/project/slurm",slug:"/tutorial-manager/project/slurm/create-slurm",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager/project/slurm/create-slurm",draft:!1,tags:[],version:"release-0.5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager/project/k8s/create-project"},next:{title:"\ud504\ub85c\uc81d\ud2b8 \uc2e4\ud589 \uc2b9\uc778",permalink:"/uyuni-suite/docs/release-0.5/tutorial-manager/project/k8s/approve-project"}},u={},p=[{value:"1. \ud504\ub85c\uc81d\ud2b8 \uba85 \uc785\ub825",id:"1-\ud504\ub85c\uc81d\ud2b8-\uba85-\uc785\ub825",level:2},{value:"2. GPU \uc608\uc57d\ud558\uae30",id:"2-gpu-\uc608\uc57d\ud558\uae30",level:2},{value:"3. \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0 \uc120\ud0dd",id:"3-\ucee8\ud14c\uc774\ub108-\uc774\ubbf8\uc9c0-\uc120\ud0dd",level:2},{value:"4. \ub370\uc774\ud130\uc14b \uc120\ud0dd (\uc635\uc158)",id:"4-\ub370\uc774\ud130\uc14b-\uc120\ud0dd-\uc635\uc158",level:2},{value:"5. \uc18c\uc2a4\ucf54\ub4dc \uc120\ud0dd",id:"5-\uc18c\uc2a4\ucf54\ub4dc-\uc120\ud0dd",level:2},{value:"6. \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \ucee4\uba58\ub4dc",id:"6-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131-\ucee4\uba58\ub4dc",level:2},{value:"6-1 srun",id:"6-1-srun",level:3},{value:"6-2 sbatch",id:"6-2-sbatch",level:3}],s={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"slurm-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"Slurm \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,n.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \u25b7 \uc0c1\ub2e8 ",(0,n.kt)("inlineCode",{parentName:"p"},"\uc2ac\ub7fc")," \ud0ed \ubc84\ud2bc \ud074\ub9ad \u25b6\ufe0f ",(0,n.kt)("inlineCode",{parentName:"p"},"\u2a01\ud504\ub85c\uc81d\ud2b8")," \ubc84\ud2bc \ud074\ub9ad"),(0,n.kt)("h2",{id:"1-\ud504\ub85c\uc81d\ud2b8-\uba85-\uc785\ub825"},"1. \ud504\ub85c\uc81d\ud2b8 \uba85 \uc785\ub825"),(0,n.kt)("h2",{id:"2-gpu-\uc608\uc57d\ud558\uae30"},"2. GPU \uc608\uc57d\ud558\uae30"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uae30\uac04 \uc785\ub825"),(0,n.kt)("li",{parentName:"ol"},"GPU \uac1c\uc218 \uc785\ub825")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(54028).Z,width:"1408",height:"582"})),(0,n.kt)("h2",{id:"3-\ucee8\ud14c\uc774\ub108-\uc774\ubbf8\uc9c0-\uc120\ud0dd"},"3. \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0 \uc120\ud0dd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \uc774\ubbf8\uc9c0 \uc120\ud0dd")),(0,n.kt)("h2",{id:"4-\ub370\uc774\ud130\uc14b-\uc120\ud0dd-\uc635\uc158"},"4. \ub370\uc774\ud130\uc14b \uc120\ud0dd (\uc635\uc158)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(17806).Z,width:"678",height:"288"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \ub370\uc774\ud130\uc14b \uc120\ud0dd (\uc5ec\ub7ec \uac1c \uc120\ud0dd \uac00\ub2a5)"),(0,n.kt)("li",{parentName:"ul"},"\ub9c8\uc6b4\ud2b8 \uacbd\ub85c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pod \ub0b4\ubd80\uc758 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud2b9\uc815 \uacbd\ub85c \uc785\ub2c8\ub2e4. (\uacbd\ub85c \ubcc0\uacbd \uac00\ub2a5)"),(0,n.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108 \ub0b4\uc5d0\uc11c \ud574\ub2f9 \uacbd\ub85c\ub85c \uc811\uadfc\ud558\uc5ec \ub370\uc774\ud130\uc14b\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"default \uacbd\ub85c",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"/root/uyuni/","[\uc720\uc800\ub124\uc784]","/dataset/","[\ub370\uc774\ud130\uc14b \ub124\uc784]"))))))),(0,n.kt)("h2",{id:"5-\uc18c\uc2a4\ucf54\ub4dc-\uc120\ud0dd"},"5. \uc18c\uc2a4\ucf54\ub4dc \uc120\ud0dd"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uc18c\uc2a4\ucf54\ub4dc \uc120\ud0dd"),(0,n.kt)("li",{parentName:"ol"},"\uae30\ubcf8 \ub9c8\uc6b4\ud2b8 \uc704\uce58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pod \ub0b4\ubd80\uc758 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud2b9\uc815 \uacbd\ub85c\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108 \ub0b4\uc5d0\uc11c \ud574\ub2f9 \uacbd\ub85c\ub85c \uc811\uadfc\ud558\uc5ec \uc18c\uc2a4\ucf54\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},"\uc2e4\ud589 \uba85\ub839\uc5b4 \uc785\ub825",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub420 \ub54c \uc2e4\ud589\ub418\ub294 \uba85\ub839\uc5b4 \uc785\ub825 (\ubcc0\uacbd \uac00\ub2a5)",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"ex) ",(0,n.kt)("inlineCode",{parentName:"p"},"python <file_name> --key1=value1 --key2=value2")))))),(0,n.kt)("li",{parentName:"ol"},"\uc2e4\ud589 \uba85\ub839\uc5b4 \ub514\ub809\ud1a0\ub9ac \uacbd\ub85c (\ubcc0\uacbd \uac00\ub2a5)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0dd\uc131\ub41c \uacb0\uacfc\ubb3c\uc774 \uc800\uc7a5\ub418\ub294 \ub514\ub809\ud1a0\ub9ac")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(74287).Z,width:"1770",height:"878"})),(0,n.kt)("h2",{id:"6-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131-\ucee4\uba58\ub4dc"},"6. \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \ucee4\uba58\ub4dc"),(0,n.kt)("h3",{id:"6-1-srun"},"6-1 srun"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"srun\uc740 Slurm\uc5d0 \uc9c1\uc811 \uba85\ub839\uc5b4\ub97c \uc804\ub2ec\ud558\uc5ec \uc791\uc5c5 \ud560\ub2f9\uc744 \ubc1b\uace0 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"key")," : srun \uc2e4\ud589\uc2dc \uc804\ub2ec\ud560 \uc635\uc158\uc758 \ud0a4 \uac12 \uc774\uba70 \uac80\uc0c9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"value")," : srun \uc2e4\ud589\uc2dc \uc804\ub2ec\ud560 \uc635\uc158\uc758 \uac12 \uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"add")," : \uc2e4\ud589 \uc635\uc158\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(92520).Z,width:"1314",height:"762"}),"\n",(0,n.kt)("img",{alt:"image",src:r(76291).Z,width:"1314",height:"681"})),(0,n.kt)("h3",{id:"6-2-sbatch"},"6-2 sbatch"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"sbatch\ub294 Slurm\uc5d0 \uc791\uc131\ud55c \ubc30\uce58 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc804\ub2ec\ud558\uace0 \uc791\uc5c5 \ud560\ub2f9\uc744 \ubc1b\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Script")," : \ubc30\uce58 \uc2a4\ud06c\ub9bd\ud2b8\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reset")," : \uc791\uc131\uc911\uc778 \ub0b4\uc6a9\uc744 \uc9c0\uc6b0\uace0 \uae30\ubcf8 \ub0b4\uc6a9\uc73c\ub85c \uc804\ud658\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\ubd88\ub7ec\uc624\uae30")," : \uc800\uc7a5\ub41c \uc2a4\ud06c\ub9bd\ud2b8 \ub0b4\uc6a9\uc744 \ubd88\ub824\uc635\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(70506).Z,width:"1319",height:"909"})))}c.isMDXComponent=!0},17806:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/5-a45e3e5769f40835f8df0414a182a841.png"},54028:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/1-d8dc96237ab7e60d6504941561cab89a.png"},74287:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2-ccf3d1127ce9b2f73894426b374771cb.png"},92520:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3-6741ba447ea55a087aba7340922ad5e4.png"},76291:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/4-28d063690932eab3c7374e0094910e61.png"},70506:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/5-8728a22c7221e2ed06e14ccf51637583.png"}}]);
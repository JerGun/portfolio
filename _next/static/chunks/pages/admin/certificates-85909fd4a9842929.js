(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{3011:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/certificates",function(){return t(6414)}])},2077:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var a=t(5893);t(7294);function r(e){var n=e.title,t=e.onClick,r=e.isLoading,s=e.isDisable;return(0,a.jsx)("button",{className:"".concat(s?"bg-customGrayLight":"bg-primary"," h-12 w-56 flex items-center justify-center font-bold transition-all duration-500 ease-in-out rounded-lg px-10 text-black shadow-md"),onClick:t,disabled:r||s,children:r?(0,a.jsxs)("svg",{className:"animate-spin h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):n})}},1121:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(5893),r=t(7814),s=t(1436),i=t(7294);function l(e){var n=e.h,t=e.w,l=e.type,c=e.placeholder,o=e.value,u=e.onChange,d=e.icon,f=e.isDisable,p=(0,i.useState)(!1),h=p[0],x=p[1];return(0,a.jsxs)("div",{className:"".concat(n||"h-12"," ").concat(t," flex items-center p-2 px-5 rounded-xl border border-customGrayLight shadow-md dark:bg-input"),children:[(0,a.jsx)("input",{type:"password"!=l?l:"password"!=l||h?"text":"password",placeholder:c,className:"w-full bg-transparent outline-none",onChange:u,disabled:f,value:o}),d&&(0,a.jsx)(r.G,{icon:d}),"password"==l&&(0,a.jsx)("div",{onClick:function(e){e.preventDefault(),x(!h)},children:(0,a.jsx)(r.G,{icon:h?s.Aq:s.Mdf,className:"opacity-70"})})]})}},7644:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(7568),r=t(1799),s=t(9396),i=t(4051),l=t.n(i),c=t(5893),o=t(7814),u=t(1436),d=t(7294),f=t(307),p=t(9552),h=t.n(p),x=t(9669),m=t.n(x),v=(t(1121),t(2077),t(3454)),w=t(8764).lW,g=v.env.INFURA_PROJECT_ID,j=v.env.INFURA_API_KEY;console.log(g),console.log(j);var b=(0,f.Ue)({host:"infura-ipfs.io",port:5001,protocol:"https",headers:{authorization:"Basic "+w.from(g+":"+j).toString("base64")}});function N(e){var n=e.type,t=(0,d.useState)(""),i=t[0],f=t[1],p=(0,d.useState)({preview:"",raw:""}),x=p[0],v=p[1],w=(0,d.useState)(0),g=w[0],j=w[1],N=(0,d.useState)(!1),y=(N[0],N[1]),k=function(){var e=(0,a.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.files[0],e.prev=1,e.next=4,b.add(t,{progress:function(e){j(e/t.size*100)}}).then((function(e){var n="https://infura-ipfs.io/ipfs/".concat(e.path);console.log(n),v((0,s.Z)((0,r.Z)({},x),{preview:n,raw:t})),j(0)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Error uploading file: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();!function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.length||!x.preview.length){e.next=11;break}return e.prev=1,e.next=4,m().post("/api/".concat(n),{title:i,img:x.preview},{headers:{authorization:h().get("accessToken")}}).then((function(e){f(""),v({preview:"",raw:""}),console.log(e)})).catch((function(e){console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Error uploading file: ",e.t0);case 9:e.next=12;break;case 11:y(!0);case 12:case"end":return e.stop()}}),e,null,[[1,6]])})))}();return(0,c.jsxs)("div",{className:"h-fit w-full flex flex-col items-center space-y-10",children:[(0,c.jsx)("div",{className:"h-[300px] w-full",children:(0,c.jsxs)("div",{className:"relative h-full w-full",children:[(0,c.jsx)("label",{htmlFor:"upload-button",className:"absolute h-full w-full rounded-xl hover:cursor-pointer",children:x.preview?(0,c.jsxs)("div",{className:"relative h-full w-full group rounded-xl",children:[(0,c.jsx)("div",{className:"absolute z-10 h-full w-full flex justify-center items-center rounded-xl text-white opacity-0 group-hover:opacity-100",children:(0,c.jsx)(o.G,{icon:u.IwR})}),(0,c.jsx)("div",{className:"h-full w-full rounded-xl group-hover:opacity-50",children:(0,c.jsx)("img",{src:x.preview,alt:"Profile",className:"h-full w-full rounded-xl object-contain"})})]}):(0,c.jsxs)("div",{className:"relative h-full w-full group rounded-xl outline-dashed outline-offset-4",children:[(0,c.jsx)("div",{className:"absolute h-full w-full rounded-xl bg-input group-hover:opacity-50"}),(0,c.jsx)("div",{className:"absolute z-10 h-full w-full flex justify-center items-center rounded-xl text-white",children:(0,c.jsx)(o.G,{icon:u.IwR})})]})}),(0,c.jsx)("input",{type:"file",id:"upload-button",className:"hidden",onChange:k})]})}),(0,c.jsx)("div",{className:"w-3/4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700",children:(0,c.jsx)("div",{className:"bg-primary h-2.5 rounded-full",style:{width:"".concat(g,"%")}})})]})}},8949:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(7568),r=t(4051),s=t.n(r),i=t(5893),l=t(7814),c=t(1436),o=t(1163),u=t(9552),d=t.n(u),f=t(1664),p=t.n(f),h=[{name:"Dashboard",path:"/admin",icon:c.wp6},{name:"Bio",path:"/admin/bio",icon:c.ILF},{name:"Experiences",path:"/admin/experiences",icon:c.tMT},{name:"Skills",path:"/admin/skills",icon:c.X8G},{name:"Awards",path:"/admin/awards",icon:c.O7Q},{name:"Certificates",path:"/admin/certificates",icon:c.Ua$},{name:"Education",path:"/admin/education",icon:c.Xf_},{name:"Projects",path:"/admin/projects",icon:c.HXv},{name:"Highlight",path:"/admin/highlight",icon:c.O7Q}];function x(){var e=(0,o.useRouter)(),n=function(){var n=(0,a.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,d().set("accessToken","",{expires:new Date(0)});case 3:e.push({pathname:"/admin/login"});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"h-full w-2/12 flex flex-col justify-between p-5",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center space-y-3",children:[(0,i.jsx)(p(),{href:"/admin",children:(0,i.jsx)("img",{src:"/images/logo.png",alt:"pawaret.dev",className:"h-20 w-20 cursor-pointer"})}),h.map((function(n,t){return(0,i.jsx)(p(),{href:n.path,children:(0,i.jsxs)("div",{className:"".concat(e.pathname==n.path&&"bg-primary text-black font-bold"," h-12 w-full flex items-center space-x-3 rounded-xl pl-5 cursor-pointer"),children:[(0,i.jsx)(l.G,{icon:n.icon}),(0,i.jsx)("p",{children:n.name})]})},t)}))]}),(0,i.jsx)("button",{className:"h-12 w-full flex items-center justify-center font-bold space-x-3 rounded-xl bg-red-500 text-black",onClick:n,children:"Logout"})]})}},6414:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var a=t(7568),r=t(1799),s=t(9396),i=t(4051),l=t.n(i),c=t(5893),o=t(9008),u=t.n(o),d=t(1163),f=t(7294),p=t(8949),h=t(2077),x=t(1121),m=t(9669),v=t.n(m),w=t(7644);function g(){var e=(0,d.useRouter)(),n=(0,f.useState)({}),t=n[0],i=n[1],o=(0,f.useState)(!1),m=o[0],g=o[1],j=function(){var n=(0,a.Z)(l().mark((function n(a){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,g(!0),n.next=5,v().post("/api/certificate",t).then((function(n){g(!1),e.push({pathname:"/admin"})})).catch((function(e){console.log(e)}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log("Error uploading file: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,c.jsxs)("div",{className:"h-screen w-full flex bg-background opacity-90",children:[(0,c.jsxs)(u(),{children:[(0,c.jsx)("title",{children:"Portfolio | Admin - Certificates"}),(0,c.jsx)("meta",{name:"description",content:"pawaret.dev"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)(p.Z,{}),(0,c.jsx)("span",{className:"h-full w-0.5 bg-black"}),(0,c.jsxs)("div",{className:"h-full w-full flex flex-col items-center p-10 space-y-10",children:[(0,c.jsx)("p",{className:"text-xl font-bold",children:"Add Certificate"}),(0,c.jsxs)("form",{className:"h-full w-1/2 flex flex-col items-center space-y-10",onSubmit:j,children:[(0,c.jsx)(x.Z,{placeholder:"Title",w:"w-full",onChange:function(e){return i((0,s.Z)((0,r.Z)({},t),{title:e.target.value}))}}),(0,c.jsx)(w.Z,{}),(0,c.jsx)(h.Z,{title:"Save",isLoading:m})]})]})]})}},3897:function(){}},function(e){e.O(0,[523,558,269,307,774,888,179],(function(){return n=3011,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
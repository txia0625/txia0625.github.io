"use strict";(self.webpackChunktxia0625=self.webpackChunktxia0625||[]).push([[390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={},r="Why do we use JWT?",s={unversionedId:"Backend General/Why JWT",id:"Backend General/Why JWT",title:"Why do we use JWT?",description:"JWT, or JSON Web Token, is a widely adopted cross-origin authentication solution. This article aims to provide a comprehensive understanding of its pros and cons.",source:"@site/docs/Backend General/Why JWT.md",sourceDirName:"Backend General",slug:"/Backend General/Why JWT",permalink:"/docs/Backend General/Why JWT",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Backend General/Why JWT.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"General Discuss of MD5",permalink:"/docs/Backend General/MD5 General"}},l={},d=[{value:"Structrue of JWT",id:"structrue-of-jwt",level:2},{value:"Header",id:"header",level:3},{value:"Payload",id:"payload",level:3},{value:"Signature",id:"signature",level:3},{value:"Concatenation",id:"concatenation",level:3},{value:"Why is JWT popular?",id:"why-is-jwt-popular",level:2},{value:"In the Past",id:"in-the-past",level:3},{value:"Front-End and Back-End Separation",id:"front-end-and-back-end-separation",level:3},{value:"Mobile Platform",id:"mobile-platform",level:3},{value:"Stateless, Easier Server Load",id:"stateless-easier-server-load",level:3},{value:"Downside of JWT",id:"downside-of-jwt",level:2},{value:"More Bandwidth",id:"more-bandwidth",level:3},{value:"Invalid Token need something extra",id:"invalid-token-need-something-extra",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-do-we-use-jwt"},"Why do we use JWT?"),(0,o.kt)("p",null,"JWT, or JSON Web Token, is a widely adopted cross-origin authentication solution. This article aims to provide a comprehensive understanding of its pros and cons."),(0,o.kt)("h2",{id:"structrue-of-jwt"},"Structrue of JWT"),(0,o.kt)("p",null,"The structure of JWT has 3 parts. Headers, Payload and Signature."),(0,o.kt)("h3",{id:"header"},"Header"),(0,o.kt)("p",null,"The header is a JSON object that records metadata such as the signature algorithm and token type. This information is then encoded into a string using the Base64 algorithm."),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"The Payload is also a JSON object, recording data exchanged with the server, including expiration time, issued time, and JWT ID. It can also accommodate business data such as name and birthday. "),(0,o.kt)("p",null,"However, it's essential to note that this section is not encrypted, so sensitive information should not be placed here."),(0,o.kt)("h3",{id:"signature"},"Signature"),(0,o.kt)("p",null,"The Signature ensures data integrity and prevents malicious modifications. The server assigns a secret known only to itself, using a signature algorithm to sign the header, payload, and secret. The resulting output is referred to as the Signature."),(0,o.kt)("h3",{id:"concatenation"},"Concatenation"),(0,o.kt)("p",null,"The final step is to concatenate with the following format:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Header.Payload.Signature")),(0,o.kt)("p",null,"Notice, the Header and Payload part is encoded with the Base64 algorithm."),(0,o.kt)("h2",{id:"why-is-jwt-popular"},"Why is JWT popular?"),(0,o.kt)("h3",{id:"in-the-past"},"In the Past"),(0,o.kt)("p",null,"Traditional authentication procedures are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Client send username and password to the server"),(0,o.kt)("li",{parentName:"ol"},"If it could be authenticated, save user authentication data into current ",(0,o.kt)("strong",{parentName:"li"},"session")),(0,o.kt)("li",{parentName:"ol"},"Server return a ",(0,o.kt)("strong",{parentName:"li"},"session id")," to the client's cookie."),(0,o.kt)("li",{parentName:"ol"},"After that, user will send cookie which contains session id to the server for each request."),(0,o.kt)("li",{parentName:"ol"},"The server use session id from the cookie to distinguish who the user is.")),(0,o.kt)("p",null,"This worked well for single-server authentication.  "),(0,o.kt)("p",null,"However, if the business has two websites and require you implement a feature, which is login on one of website so that we don't need to login again on the other website. "),(0,o.kt)("p",null,"An important thing to notice is, since we save the session id in the cookie, we cannot send the cookie to the other website. Why so? Because cookie does not support cross origin."),(0,o.kt)("p",null,"JWT is a solution saves all the data on the client side. Every time a user send a request to the server, it comes with the token. We don't need to store anything in the persistent layer. The only thing we need to do is just to redo the structure process, and compare with the token passed along with the request."),(0,o.kt)("h3",{id:"front-end-and-back-end-separation"},"Front-End and Back-End Separation"),(0,o.kt)("p",null,"Modern architectures often separate front-end and back-end components."),(0,o.kt)("p",null,"It's a simple, clear architecture. Because the back-end part only need to provide APIs, and the front-end part only need to invoke those APIs and convert response into proper view for the users."),(0,o.kt)("p",null,"We have to understand this separation means we have to run front-end and back-end in two different servers. This will cross origin. "),(0,o.kt)("p",null,"However, using JWT we simply need to attach the token along with the request header to invoke API."),(0,o.kt)("h3",{id:"mobile-platform"},"Mobile Platform"),(0,o.kt)("p",null,"As we might know, cookies are not supported in mobile platforms like iOS/Android. In contrast, JWT is just a token that passed with http request. JWT works well with mobile platforms. "),(0,o.kt)("h3",{id:"stateless-easier-server-load"},"Stateless, Easier Server Load"),(0,o.kt)("p",null,"Like I said before, we don't need to store anything in the persistent layer like normal session does. JWT is stateless. The query to the persistent layer takes time, it definitely lower the performance. No extra query to the database make JWT a more efficient choice in some circumstances. "),(0,o.kt)("h2",{id:"downside-of-jwt"},"Downside of JWT"),(0,o.kt)("h3",{id:"more-bandwidth"},"More Bandwidth"),(0,o.kt)("p",null,"Recall that to verify who you are, we only need to pass session_id to the server if we use traditional procedure. Sending data along with the JWT is more than just an id. It takes more bandwidth(resources). Does it worth if we are under large volume of requests?"),(0,o.kt)("h3",{id:"invalid-token-need-something-extra"},"Invalid Token need something extra"),(0,o.kt)("p",null,"Invalid a token is impossible if we don't save any relative to the persistent layer. Without saving any data, we can only wait until the token expires. It means if we login on two devices at the same time, we could not invalid the token if we only want one to stay alive. If someone use your valid token(before it expires), he can do anything he want by using your identity! "),(0,o.kt)("p",null,"However, if we save data to the persistent layer, it loses the advantage that JWT is stateless. First, we need to spend some storage space to save data. In addition, it will spend the time to query the database everytime we want to invalid a token. It sounds just like session..."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"JWT is a light-weight, mobile friendly, stateless technology. In development we still need to make some trade off to implement all the features we want. Thank you for reading!"),(0,o.kt)("p",null,"Happy coding again,"),(0,o.kt)("p",null,"Tong"))}h.isMDXComponent=!0}}]);
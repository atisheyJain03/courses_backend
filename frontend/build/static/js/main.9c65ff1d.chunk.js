(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{115:function(e,t,i){},116:function(e,t,i){},145:function(e,t,i){},146:function(e,t,i){},177:function(e,t){},195:function(e,t,i){},198:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(21),s=i.n(o),r=(i(115),i(116),i(16)),c=i(11),l=i(13),d=i(49),h=i.n(d),u=h.a.create({baseURL:"https://www.inqueue.co.in/api/v1/"}),b=i(228),j=i(230),p=i(231),m=i(235),x=i(233),g=i(232),f=i(234),O=i(92),w=i.n(O),y=i(242),v=i(51),k=i.n(v),N=i(1),W=Object(b.a)({root:{maxWidth:320,minWidth:320,textAlign:"start",marginBottom:30,"& .MuiCardActionArea-root":{height:"90%"},"& .MuiCardContent-root":{height:200,overflow:"hidden"},"& .MuiChip-root":{marginRight:"10px",minWidth:"50px",marginBottom:"10px"}},media:{height:140},heading:{height:96,overflow:"hidden"},cardArea:{},expired:{color:"black",background:"#f8433f",letterSpacing:1},available:{color:"black",background:"#adff2f",letterSpacing:1},category:{background:"#8710D8",color:"white"},a:{display:"block",maxWidth:"fit-content",transition:"all 0.3s","&:hover":{textDecoration:"none",boxShadow:"0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",transform:"scale(0.99)"}}});function I(e){var t,i=e.image,a=e.title,n=e.heading,o=e.status,s=e.id,r=e.createdAt,c=e.clicks,l=e.primaryCategory,d=W();return Object(N.jsx)("a",{href:"/course/".concat(s),className:d.a,target:"_blank",children:Object(N.jsxs)(j.a,{className:d.root,elevation:20,children:[Object(N.jsxs)(p.a,{className:d.actionArea,disableRipple:!0,children:[Object(N.jsx)(g.a,{className:d.media,image:i,title:a}),Object(N.jsxs)(x.a,{children:[Object(N.jsx)(y.a,{size:"small",className:d.category,label:l}),Object(N.jsx)(y.a,{size:"small",label:"active"===o?"Active":"Expired",className:"active"===o?d.available:d.expired}),Object(N.jsx)(y.a,{variant:"outlined",size:"small",icon:Object(N.jsx)(k.a,{}),label:c}),Object(N.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(N.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",className:d.heading,children:n.length<=120?n:n.substring(0,117)+"..."})]})]}),Object(N.jsx)(m.a,{children:Object(N.jsxs)(f.a,{variant:"caption",align:"right",display:"block",children:["Added ",(t=r,w()(t).fromNow())]})})]})})}var T=i(236);i(145);var C=function(){return Object(N.jsxs)("div",{className:"mainbox",children:[Object(N.jsx)("div",{className:"err",children:"4"}),Object(N.jsx)("i",{className:"far fa-question-circle fa-spin"}),Object(N.jsx)("div",{className:"err2",children:"4"}),Object(N.jsxs)("div",{className:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(N.jsxs)("p",{children:["Let's go ",Object(N.jsx)("a",{href:"/",children:"home"})," and try from there."]})]})]})};i(146);var S=function(){return Object(N.jsx)("div",{className:"loader",children:"loading..."})},A=i(52),R=i.n(A),F=i(241),L=i(97),B=i(27),Q=Object(b.a)({root:{background:"#050A30",color:"white",padding:"15px","& .MuiGrid-root":{justifyContent:"center",textAlign:"center"}}});var M,q=function(){var e=Q();return Object(N.jsx)("div",{className:e.root,children:Object(N.jsxs)(T.a,{container:!0,alignItems:"center",direction:"row",children:[Object(N.jsx)(T.a,{item:!0,xs:12,md:2,children:Object(N.jsx)(B.b,{to:"/term-and-condition",children:"Terms and Conditions"})}),Object(N.jsx)(T.a,{item:!0,xs:12,md:2,children:Object(N.jsx)(B.b,{to:"/privacy-policy",children:"Privacy Policy"})}),Object(N.jsx)(T.a,{item:!0,xs:12,md:1,children:Object(N.jsx)(B.b,{to:"/about",children:"About"})}),Object(N.jsx)(T.a,{item:!0,xs:12,md:2,children:Object(N.jsx)(B.b,{to:"/contact",children:"Contact Us"})})]})})},z=Object(b.a)((function(e){return{root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"},search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#050a30",zIndex:"9999",marginTop:3},inputRoot:{color:"#050a30",background:"#dddee0",borderRadius:"50px",marginTop:"5px"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"24ch","&:focus":{width:"40ch"}}),searchBar:{maxWidth:"fit-content",margin:"auto",marginBottom:"61px"},result:{marginTop:"0px",color:"#050a30",letterSpacing:"2px"},loader:{transform:"translateY(-20px)",marginBottom:20},seenAll:{fontWeight:"500",letterSpacing:"2px",lineHeight:"20px"}}}));var P=function(){var e=z(),t=Object(a.useState)([]),i=Object(c.a)(t,2),n=i[0],s=i[1],l=Object(a.useState)(!0),d=Object(c.a)(l,2),b=d[0],j=d[1],p=Object(a.useState)(!1),m=Object(c.a)(p,2),x=m[0],g=m[1],f=Object(a.useState)(""),O=Object(c.a)(f,2),w=O[0],y=O[1],v=Object(a.useState)(1),k=Object(c.a)(v,2),W=k[0],A=k[1],B=Object(a.useState)([]),Q=Object(c.a)(B,2),P=Q[0],_=Q[1],D=Object(a.useState)(!0),U=Object(c.a)(D,2),E=U[0],H=U[1];return Object(a.useEffect)((function(){u.get("/courses/allCourses/1").then((function(e){Object(o.unstable_batchedUpdates)((function(){s((function(t){return Object(r.a)(e.data.data)})),_((function(t){return Object(r.a)(e.data.data)})),j(!1)}))})).catch((function(e){Object(o.unstable_batchedUpdates)((function(){g(!0),j(!1)}))}))}),[]),x?Object(N.jsx)(C,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:e.searchBar,children:Object(N.jsxs)("div",{className:e.search,children:[Object(N.jsx)("div",{className:e.searchIcon,children:Object(N.jsx)(R.a,{})}),Object(N.jsx)(F.a,{placeholder:"Search\u2026",value:w,onChange:function(e){var t=e.target.value;if(!t)return s(P),void y(t);y(t),j(!0),s([]),"undefined"!=typeof M&&M.cancel("cancelling previous search"),M=h.a.CancelToken.source();var i={title:t};u.post("/courses/searchCourse/search",i,{cancelToken:M.token}).then((function(e){Object(o.unstable_batchedUpdates)((function(){s((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.data.data))})),j(!1)}))})).catch((function(e){"cancelling previous search"!=e.message&&Object(o.unstable_batchedUpdates)((function(){g(!0),j(!1)}))}))},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),b&&Object(N.jsx)(S,{}),Object(N.jsxs)(L.a,{dataLength:n.length,next:function(){u.get("/courses/allCourses/".concat(W+1)).then((function(e){0==e.data.data.length&&H(!1),Object(o.unstable_batchedUpdates)((function(){s((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.data.data))})),_((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.data.data))})),A((function(e){return e+1}))}))})).catch((function(e){Object(o.unstable_batchedUpdates)((function(){g(!0)}))}))},endMessage:!w.length&&Object(N.jsx)("h3",{className:e.seenAll,children:"Yay! You have seen it all"}),scrollThreshold:.8,hasMore:!w.length&&E,loader:Object(N.jsx)("div",{className:e.loader,children:Object(N.jsx)(S,{})}),children:[Object(N.jsx)(N.Fragment,{children:w.length>0&&!b&&Object(N.jsxs)("h4",{className:e.result,children:["result - ",n.length]})}),Object(N.jsx)(T.a,{container:!0,alignItems:"center",justify:"center",children:n.map((function(t,i){return Object(N.jsx)(a.Fragment,{children:Object(N.jsx)(T.a,{item:!0,xs:12,sm:6,lg:4,className:e.card,children:Object(N.jsx)(I,{title:t.title,image:t.image,heading:t.heading,status:t.status,id:t.slug,createdAt:t.createdAt,clicks:t.clicks,primaryCategory:t.primaryCategory})})},t._id)}))})]})]}),b?null:Object(N.jsx)(q,{})]})},_=i(237),D=i(99),U=i(100),E=i.n(U),H=Object(b.a)({root:{width:"80%",margin:"auto","& .MuiChip-root":{marginRight:"10px",minWidth:"50px",marginBottom:"10px"}},img:{maxWidth:"100%",display:"block",margin:"auto",marginBottom:"30px !important"},btn:{margin:"20px auto",maxWidth:"fit-content",background:"#111e6c","& a":{background:"#111e6c"}},expired:{color:"black",background:"#f8433f"},available:{color:"black",background:"#adff2f"},otherCourses:{textTransform:"uppercase",borderBottom:"3px solid #050a30",marginBottom:"20px",paddingBottom:"10px"},link:{color:"red"},category:{background:"#8710D8",color:"white"},details:{letterSpacing:".5px",lineHeight:"24px",color:"#212121",fontWeight:"400"},warning:{width:"80%",display:"block",margin:"auto",padding:"20px",color:"white",fontWeight:"600",background:"#8710d8",marginBottom:"10px"}});var Y=function(){var e=H(),t=Object(a.useState)({}),i=Object(c.a)(t,2),n=i[0],o=i[1],s=Object(a.useState)(!1),r=Object(c.a)(s,2),l=r[0],d=r[1],h=Object(a.useState)(!0),b=Object(c.a)(h,2),p=b[0],m=b[1],x=Object(a.useState)([]),g=Object(c.a)(x,2),O=g[0],w=g[1];return Object(a.useEffect)((function(){u.post("/courses/".concat(window.location.href.split("/")[4])),u.get("/courses/clicks/topSix").then((function(e){return w(e.data.data)})).catch((function(e){return d(!0)})),u.get("/courses/".concat(window.location.href.split("/")[4])).then((function(e){o(e.data.data),m(!1)})).catch((function(e){d(!0),m(!1)}))}),[]),l?Object(N.jsx)(C,{}):p?Object(N.jsx)(S,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(j.a,{className:e.warning,children:[Object(N.jsx)("p",{children:"Some coupons might not work for indian accounts.To avail those courses please follow these steps"}),Object(N.jsxs)("ol",{children:[Object(N.jsx)("li",{children:"Use VPN and select any foreign country other than India"}),Object(N.jsx)("li",{children:"Open link in incognito mode"}),Object(N.jsx)("li",{children:"Create new udemy account "}),Object(N.jsx)("li",{children:"At checkout , choose location which you have selected for VPN."})]})]}),Object(N.jsx)("div",{className:e.root,children:n?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(f.a,{variant:"h3",gutterBottom:!0,children:n.title}),Object(N.jsx)("img",{src:n.image,alt:n.title,className:e.img}),Object(N.jsx)(y.a,{label:n.primaryCategory,className:e.category}),Object(N.jsx)(y.a,{label:"active"===n.status?"Active":"Expired",className:"active"===n.status?e.available:e.expired}),Object(N.jsx)(y.a,{icon:Object(N.jsx)(k.a,{}),label:n.clicks,variant:"outlined"}),Object(N.jsx)(f.a,{variant:"h6",children:n.heading}),Object(N.jsxs)("div",{className:e.details,children:[Object(N.jsx)("h3",{children:"What you will Learn"}),Object(N.jsx)("ul",{children:n.whatYouWillLearn.map((function(e,t){return Object(N.jsx)("li",{children:e},e.split(" ")[0]+t)}))}),Object(N.jsx)("h3",{children:"Requirements"}),Object(N.jsx)("ul",{children:n.requirements.map((function(e,t){return Object(N.jsx)("li",{children:e},e.split(" ")[0]+t)}))}),Object(N.jsx)("h3",{children:"Description"}),E()(Object(D.decode)(n.description))||null,Object(N.jsx)("h3",{children:"Who this course is for:"}),Object(N.jsx)("ul",{children:n.whoShouldAttend.map((function(e,t){return Object(N.jsx)("li",{children:e},e.split(" ")[0]+t)}))})]}),Object(N.jsxs)("p",{className:e.link,children:[Object(N.jsxs)("span",{style:{textTransform:"uppercase",fontWeight:"600"},children:["link -"," "]})," ",n.url]}),Object(N.jsx)("div",{className:e.btn,style:{background:"#11136c"},children:Object(N.jsx)(_.a,{variant:"contained",color:"secondary",href:n.url,size:"large",children:"Enroll Now"})}),Object(N.jsxs)("div",{children:[Object(N.jsx)(f.a,{variant:"h5",gutterBottom:!0,className:e.otherCourses,children:"other top courses"}),Object(N.jsx)(T.a,{container:!0,alignItems:"center",justify:"center",children:O.map((function(t,i){return Object(N.jsx)(a.Fragment,{children:Object(N.jsx)(T.a,{item:!0,xs:12,sm:6,lg:4,className:e.card,children:Object(N.jsx)(I,{title:t.title,image:t.image,heading:t.heading,status:t.status,id:t.slug,createdAt:t.createdAt,clicks:t.clicks,primaryCategory:t.primaryCategory})})},t._id)}))})]})]}):Object(N.jsx)(C,{})}),Object(N.jsx)(q,{})]})},G=i(12),X=i(105),J=i(238),V=i.p+"static/media/inqueue_full.c68e8736.png",$=i(24),K=i.n($),Z=Object(b.a)((function(e){return{par:{padding:"30px 70px",paddingTop:"40px"},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{width:"200px",height:"auto",cursor:"pointer",maxWidth:"fit-content"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30"},search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#050a30",zIndex:"9999",marginTop:3},inputRoot:{color:"#050a30",background:"#dddee0",borderRadius:"50px",marginTop:"5px"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"24ch","&:focus":{width:"40ch"}})}}));var ee=function(){var e=Z();return Object(N.jsx)("div",{className:e.par,children:Object(N.jsx)(X.a,{elevation:0,children:Object(N.jsxs)(T.a,{container:!0,children:[Object(N.jsx)(T.a,{item:!0,xs:12,md:9,children:Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("img",{src:V,className:e.img})})}),Object(N.jsx)(T.a,{item:!0,xs:4,md:2,children:Object(N.jsx)(B.b,{to:"/add-a-course",className:e.link,children:"Add a Course"})}),Object(N.jsx)(T.a,{item:!0,xs:2,sm:1,children:Object(N.jsx)(J.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(N.jsx)(K.a,{className:e.fbIcon})})})]})})})},te=Object(b.a)({par:{paddingTop:"40px",paddingLeft:"10vw",paddingRight:"10vw",color:"#050a30",minHeight:"80vh"},about:{fontWeight:600},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{maxWidth:"80vw"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30",fontSize:96}});var ie=function(){var e=te();return Object(N.jsx)("div",{className:e.par,children:Object(N.jsxs)(T.a,{container:!0,children:[Object(N.jsx)(T.a,{item:!0,xs:12,md:5,children:Object(N.jsx)("img",{src:V,className:e.img})}),Object(N.jsxs)(T.a,{item:!0,xs:12,md:7,children:[Object(N.jsx)("div",{className:e.about,children:"inQueue is a Free platform . which is used to promote free courses for a limited period of time. offered by various platforms and organizations. By doing these courses you can early a certificate and lot of Knowledge"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Follow us on"}),Object(N.jsx)(J.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(N.jsx)(K.a,{className:e.fbIcon})})]})]})]})})},ae=(i(239),i(240),i(7));Object(b.a)((function(e){return{root:{flexGrow:1},search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ae.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ae.d)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var ne=Object(b.a)({root:{maxWidth:"80%",margin:"auto",fontFamily:"Montserrat, sans-serif",color:"#576d96",letterSpacing:".5px",wordSpacing:"2px",lineHeight:"1.3",fontSize:"16px",marginBottom:"50px","& a":{fontFamily:"Montserrat, sans-serif",color:"#050a30"},"& h2,h3":{fontFamily:"Montserrat, sans-serif",color:"#050a30"}},media:{height:140},card:{textAlign:"-webkit-center"}});var oe=function(){var e=ne();return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)("h2",{children:"Privacy Policy"}),Object(N.jsxs)("p",{children:[" ","Your privacy is important to us. It is ",Object(N.jsx)("strong",{children:"inQueue's"})," policy to respect your privacy regarding any information we may collect from you across our website, ",Object(N.jsx)("a",{href:"https://www.inqueue.co.in",children:"inQueue"}),", and other sites we own and operate."]}),Object(N.jsxs)("p",{children:[" ","We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we\u2019re collecting it and how it will be used."," "]}),Object(N.jsxs)("p",{children:[" ","We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we\u2019ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification."]}),Object(N.jsxs)("p",{children:[" ","We don\u2019t share any personally identifying information publicly or with third-parties, except when required to by law."," "]}),Object(N.jsxs)("p",{children:[" ","Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies."," "]}),Object(N.jsxs)("p",{children:[" ","You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services."," "]}),Object(N.jsxs)("p",{children:["Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."," "]}),Object(N.jsxs)("h2",{children:[Object(N.jsx)("strong",{children:"Cookie Policy"})," for ",Object(N.jsx)("strong",{children:"inQueue"})," "]}),Object(N.jsxs)("p",{children:[" ","This is the Cookie Policy for ",Object(N.jsx)("strong",{children:"inQueue"}),", accessible from URL"," "]}),Object(N.jsx)("h3",{children:"What Are Cookies"}),Object(N.jsxs)("p",{children:[" ","As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality."]}),Object(N.jsx)("h3",{children:"How We Use Cookies"}),Object(N.jsxs)("p",{children:[" ","We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use."," "]}),Object(N.jsx)("h3",{children:"Disabling Cookies"}),Object(N.jsxs)("p",{children:[" ","You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies."," "]}),Object(N.jsx)("h3",{children:"The Cookies We Set"}),Object(N.jsxs)("ul",{children:[Object(N.jsxs)("li",{children:["Account related cookies ",Object(N.jsx)("brm",{}),"If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out."]}),Object(N.jsxs)("li",{children:["Login related cookies ",Object(N.jsx)("br",{}),"We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in."]}),Object(N.jsxs)("li",{children:["Email newsletters related cookies ",Object(N.jsx)("br",{}),"This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users."]}),Object(N.jsxs)("li",{children:["Surveys related cookies ",Object(N.jsx)("br",{}),"From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages."]}),Object(N.jsxs)("li",{children:["Site preferences cookies ",Object(N.jsx)("br",{}),"In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences."]})]}),Object(N.jsx)("h3",{children:"Third Party Cookies"}),Object(N.jsxs)("p",{children:[" ","In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site."," "]}),Object(N.jsx)("ul",{children:Object(N.jsxs)("li",{children:["This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.",Object(N.jsx)("li",{children:"Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you."}),Object(N.jsx)("li",{children:"From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most."}),Object(N.jsx)("li",{children:"As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price."})]})}),Object(N.jsx)("h2",{children:"More Information"}),Object(N.jsxs)("p",{children:[" ","Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site."," "]}),Object(N.jsxs)("p",{children:[" ","This policy is effective as of ",Object(N.jsx)("strong",{children:"Jul"})," ",Object(N.jsx)("strong",{children:"2021"}),"."," "]})]})},se=Object(b.a)({root:{maxWidth:"80%",margin:"auto",fontFamily:"Montserrat, sans-serif",color:"#576d96",letterSpacing:".5px",wordSpacing:"2px",lineHeight:"1.3",fontSize:"16px",marginBottom:"50px","& a":{fontFamily:"Montserrat, sans-serif",color:"#050a30"},"& h2,h3":{fontFamily:"Montserrat, sans-serif",color:"#050a30"}},media:{height:140},card:{textAlign:"-webkit-center"}});var re=function(){var e=se();return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)("h2",{children:"1.Terms of Service"})," ",Object(N.jsx)("h3",{children:"1. Terms"})," ",Object(N.jsxs)("p",{children:["By accessing the website at"," ",Object(N.jsx)("a",{href:"https://www.inqueue.co.in",children:"inQueue"})," you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law."]})," ",Object(N.jsx)("h3",{children:"2. Disclaimer"})," ",Object(N.jsxs)("ol",{children:[" ",Object(N.jsx)("li",{children:"1. The materials on inQueue's website are provided on an 'as is' basis. inQueue makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."})," ",Object(N.jsx)("li",{children:"2. Further, inQueue does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."})," "]})," ",Object(N.jsx)("h3",{children:"3. Limitations"})," ",Object(N.jsx)("p",{children:"In no event shall inQueue or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on inQueue's website, even if inQueue or a inQueue authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."})," ",Object(N.jsx)("h3",{children:"4. Accuracy of materials"})," ",Object(N.jsx)("p",{children:"The materials appearing on inQueue's website could include technical, typographical, or photographic errors. inQueue does not warrant that any of the materials on its website are accurate, complete or current. inQueue may make changes to the materials contained on its website at any time without notice. However inQueue does not make any commitment to update the materials."})," ",Object(N.jsx)("h3",{children:"5. Links"})," ",Object(N.jsx)("p",{children:"inQueue has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by inQueue of the site. Use of any such linked website is at the user's own risk."})," ",Object(N.jsx)("h3",{children:"6. Modifications"})," ",Object(N.jsx)("p",{children:"inQueue may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."})," ",Object(N.jsx)("h3",{children:"7. Governing Law"})," ",Object(N.jsx)("p",{children:"These terms and conditions are governed by and construed in accordance with the laws of inQueue and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."})]})},ce=Object(b.a)({par:{paddingTop:"40px",paddingLeft:"10vw",paddingRight:"10vw",color:"#050a30",minHeight:"80vh","& a":{color:"#050a30",textDecoration:"underline"}},about:{fontWeight:600},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{maxWidth:"80vw"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30",fontSize:96}});var le=function(){var e=ce();return Object(N.jsx)("div",{className:e.par,children:Object(N.jsxs)(T.a,{container:!0,children:[Object(N.jsx)(T.a,{item:!0,xs:12,md:5,children:Object(N.jsx)("img",{src:V,className:e.img})}),Object(N.jsxs)(T.a,{item:!0,xs:12,md:7,children:[Object(N.jsxs)("div",{className:e.about,children:["You can contact us through facebook, by contacting us through facebook group mentioned below .OR you can mail us at"," ",Object(N.jsx)("a",{href:"mailto:inqueue.courses@gmail.com",children:"inqueue.courses@gmail.com"})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Follow us on"}),Object(N.jsx)(J.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(N.jsx)(K.a,{className:e.fbIcon})})]})]})]})})},de=Object(b.a)({par:{paddingTop:"40px",paddingLeft:"10vw",paddingRight:"10vw",color:"#050a30",minHeight:"80vh"},about:{fontWeight:600},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{maxWidth:"80vw"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30",fontSize:96}});var he=function(){var e=de();return Object(N.jsx)("div",{className:e.par,children:Object(N.jsxs)(T.a,{container:!0,children:[Object(N.jsx)(T.a,{item:!0,xs:12,md:5,children:Object(N.jsx)("img",{src:V,className:e.img})}),Object(N.jsxs)(T.a,{item:!0,xs:12,md:7,children:[Object(N.jsx)("div",{className:e.about,children:"To Add/Promote your udemy course on this website .Please click on Plus (+) button (this would be appearing at bottom right of the page),please paste the complete udemy link of the course . We will review and upload it on this website"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Follow us on"}),Object(N.jsx)(J.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(N.jsx)(K.a,{className:e.fbIcon})})]})]})]})})},ue=Object(b.a)({root:{background:"#050A30",color:"white",padding:"0px",justifyContent:"center",textAlign:"center","& .MuiGrid-root":{justifyContent:"center",textAlign:"center"},"& .MuiIconButton-root":{padding:0,margin:"10px"}},fbIcon:{color:"white"}});var be=function(){var e=ue();return Object(N.jsxs)("div",{className:e.root,children:["To receive Notifications . please join us on"," ",Object(N.jsx)("a",{href:"https://www.facebook.com/groups/548558866554350",target:"_blank",children:Object(N.jsx)(J.a,{disableRipple:!0,disableFocusRipple:!0,children:Object(N.jsx)(K.a,{className:e.fbIcon})})})]})},je=i(102),pe=i.n(je),me=i(103),xe=i.n(me),ge=(i(195),i(101)),fe=i.n(ge),Oe=Object(b.a)((function(e){return{"@keyframes rightIn":{"0%":{opacity:0,transform:"translateX(100%)"},"80%":{opacity:.95,transform:"translateX(-3%)"},"100%":{opacity:1,transform:"translateX(0%)"}},"@keyframes leftIn":{"0%":{opacity:0,transform:"translateX(-100%)"},"80%":{opacity:.95,transform:"translateX(3%)"},"100%":{opacity:1,transform:"translateX(0%)"}},root:{zIndex:"10000","& button":{zIndex:"10000",position:"fixed",right:"20px",bottom:"20px",background:"#050A30",color:"#FFFFFF","&:hover":{background:"#050A30"}}},inputBlock:{overflow:"hidden",position:"fixed",width:"80%",bottom:"25px",zIndex:"1000",margin:"auto",transform:"translateX(-50%)",left:"50%",padding:"0px 20px",borderRadius:"20px",flexGrow:1},inputFlex:{display:"flex",background:"#dddee0",borderRadius:"20px",padding:"5px 10px",animation:"$rightIn 600ms ".concat(e.transitions.easing.easeInOut)},input:{width:"95%",background:"transparent",border:"none",color:"#050a30",padding:"5px",fontWeight:"500","&:focus-visible":{border:"none",outline:"none"}},para:{animation:"$leftIn 600ms ".concat(e.transitions.easing.easeInOut),background:"#ad0000",color:"white",margin:"5px 0px",borderRadius:"32px",fontWeight:"500",padding:"5px",paddingLeft:"18px",fontSize:"smaller"},sendIcon:{cursor:"pointer"},form:{display:"flex",width:"100%"}}}));var we=function(){var e=Oe(),t=n.a.useState(!1),i=Object(c.a)(t,2),a=i[0],o=i[1],s=n.a.useState(""),r=Object(c.a)(s,2),l=r[0],d=r[1],h=function(e){e.preventDefault();var t=l;0===(t=t.trim()).length?alert("Please enter a course link"):"www.udemy.com"!==t.split("/")[2]?alert("Please enter a valid udemy course link"):(console.log(t),u.post("/waitingList",{link:t},{}).then((function(e){alert("Course added to review list.We will post it as soon as possible.")})).catch((function(e){alert("Something went wrong"),console.log(e)})))};return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)(J.a,{onClick:function(){return o((function(e){return!e}))},children:a?Object(N.jsx)(fe.a,{}):Object(N.jsx)(pe.a,{})}),a&&Object(N.jsxs)("div",{className:e.inputBlock,children:[Object(N.jsx)("div",{className:e.inputFlex,children:Object(N.jsxs)("form",{onSubmit:h,className:e.form,children:[Object(N.jsx)("input",{value:l,onChange:function(e){return d(e.target.value)},type:"text",placeholder:"https://www.udemy.com/course/learn-front-end-development/?couponCode=TRY10FREE92108",className:e.input}),Object(N.jsx)(xe.a,{className:e.sendIcon,onClick:h})]})}),Object(N.jsx)("p",{className:e.para,children:"Note: Only paste link of udemy course . It will not work for any other website's link and paste conplete link as shown"})]})]})};Object(b.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});var ye=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(B.a,{children:[Object(N.jsx)(we,{}),Object(N.jsx)(G.a,{path:"/",exact:!0,children:Object(N.jsx)(be,{})}),Object(N.jsx)(ee,{}),Object(N.jsxs)(G.c,{children:[Object(N.jsx)(G.a,{path:"/",exact:!0,children:Object(N.jsx)(P,{})}),Object(N.jsx)(G.a,{path:"/course/:id",exact:!0,children:Object(N.jsx)(Y,{})}),Object(N.jsxs)(G.a,{path:"/about",exact:!0,children:[Object(N.jsx)(ie,{}),Object(N.jsx)(q,{})]}),Object(N.jsxs)(G.a,{path:"/privacy-policy",exact:!0,children:[Object(N.jsx)(oe,{}),Object(N.jsx)(q,{})]}),Object(N.jsxs)(G.a,{path:"/term-and-condition",exact:!0,children:[Object(N.jsx)(re,{}),Object(N.jsx)(q,{})]}),Object(N.jsxs)(G.a,{path:"/contact",exact:!0,children:[Object(N.jsx)(le,{}),Object(N.jsx)(q,{})]}),Object(N.jsxs)(G.a,{path:"/add-a-course",children:[Object(N.jsx)(he,{}),Object(N.jsx)(q,{})]}),Object(N.jsxs)(G.a,{path:"*",children:[Object(N.jsx)(C,{}),Object(N.jsx)(q,{})]})]})]})})};s.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(ye,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.9c65ff1d.chunk.js.map
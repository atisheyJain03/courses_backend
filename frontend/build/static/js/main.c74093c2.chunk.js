(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(22),r=a.n(c),s=(a(78),a(79),a(17)),o=a(20),d=a(58),l=a.n(d).a.create({baseURL:"https://www.inqueue.co.in/api/v1/"}),j=a(136),h=a(138),b=a(139),u=a(143),p=a(141),m=a(140),g=a(142),x=(a(98),a(59)),O=a.n(x),f=a(2),v=Object(j.a)({root:{maxWidth:320,textAlign:"start",marginBottom:30,"& .MuiCardActionArea-root":{height:"90%"},"& .MuiCardContent-root":{height:200,overflowY:"hidden"}},media:{height:140},heading:{height:96},cardArea:{}});function w(e){var t,a=e.image,i=e.title,n=e.heading,c=e.status,r=e.id,s=e.createdAt,o=v();return Object(f.jsxs)(h.a,{className:o.root,onClick:function(){return window.open("/course/".concat(r),"_blank")},children:[Object(f.jsxs)(b.a,{className:o.actionArea,children:[Object(f.jsx)("span",{className:"active"===c?"ribbonGreen":"ribbonRed",children:Object(f.jsx)("span",{children:"active"===c?"Available":"Expired"})}),Object(f.jsx)(m.a,{className:o.media,image:a,title:i}),Object(f.jsxs)(p.a,{children:[Object(f.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:i}),Object(f.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",className:o.heading,children:n.length<=120?n:n.substring(0,117)+"..."})]})]}),Object(f.jsx)(u.a,{children:Object(f.jsxs)(g.a,{variant:"caption",align:"right",display:"block",children:["Added ",(t=s,O()(t).fromNow())]})})]})}var k=a(144);a(106);var N=function(){return Object(f.jsxs)("div",{className:"mainbox",children:[Object(f.jsx)("div",{className:"err",children:"4"}),Object(f.jsx)("i",{className:"far fa-question-circle fa-spin"}),Object(f.jsx)("div",{className:"err2",children:"4"}),Object(f.jsxs)("div",{className:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(f.jsxs)("p",{children:["Let's go ",Object(f.jsx)("a",{href:"/",children:"home"})," and try from there."]})]})]})};a(107);var y=function(){return Object(f.jsx)("div",{className:"loader",children:"loading..."})},I=a(27),R=a.n(I),L=a(149),A=Object(j.a)((function(e){return{root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#050a30",zIndex:"9999",marginTop:3},inputRoot:{color:"#050a30",background:"#dddee0",borderRadius:"50px",marginTop:"5px"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"24ch","&:focus":{width:"40ch"}}),searchBar:{maxWidth:"fit-content",margin:"auto",marginBottom:"61px"},result:{marginTop:"0px",color:"#050a30",letterSpacing:"2px"}}}));var S=function(){var e=A(),t=Object(i.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)([]),o=Object(s.a)(r,2),d=o[0],j=o[1],h=Object(i.useState)(!0),b=Object(s.a)(h,2),u=b[0],p=b[1],m=Object(i.useState)(!1),g=Object(s.a)(m,2),x=g[0],O=g[1],v=Object(i.useState)(""),I=Object(s.a)(v,2),S=I[0],W=I[1];return Object(i.useEffect)((function(){l.get("/courses").then((function(e){c(e.data.data),j(e.data.data),p(!1)})).catch((function(e){console.log("\ud83d\ude80 ~ file: Homepage.js ~ line 35 ~ useEffect ~ err",e),O(!0),p(!1)}))}),[]),x?Object(f.jsx)(N,{}):u?Object(f.jsx)(y,{}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:e.searchBar,children:Object(f.jsxs)("div",{className:e.search,children:[Object(f.jsx)("div",{className:e.searchIcon,children:Object(f.jsx)(R.a,{})}),Object(f.jsx)(L.a,{placeholder:"Search\u2026",const:!0,value:S,onChange:function(e){var t=e.target.value;W(t);var a=n.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));j(a)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(f.jsxs)("h4",{className:e.result,children:["result - ",d.length]}),Object(f.jsx)(k.a,{container:!0,alignItems:"center",justify:"center",children:d.map((function(t,a){return Object(f.jsx)(i.Fragment,{children:Object(f.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,className:e.card,children:Object(f.jsx)(w,{title:t.title,image:t.image,heading:t.heading,status:t.status,time:t.createdAt,url:t.url,id:t._id,createdAt:t.createdAt})})},t._id)}))})]})},W=a(64);function C(e){e.title,e.heading,e.time,e.image,e.id;return Object(f.jsx)(W.a,{})}var T=a(145),E=Object(j.a)({root:{width:"80%",margin:"auto"},img:{width:"100%",height:"70vh",display:"block",margin:"auto",marginBottom:"30px !important"},btn:{margin:"20px auto",background:"#111e6c","& a":{background:"#111e6c"}}});var B=function(){var e=E(),t=Object(i.useState)({}),a=Object(s.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)(!1),o=Object(s.a)(r,2),d=o[0],j=o[1],h=Object(i.useState)(!0),b=Object(s.a)(h,2),u=b[0],p=b[1];return Object(i.useEffect)((function(){l.get("/courses/".concat(window.location.href.split("/")[4])).then((function(e){c(e.data.data),p(!1)})).catch((function(e){console.error(e),j(!0),p(!1)}))}),[]),d?Object(f.jsx)(N,{}):u?Object(f.jsx)(y,{}):Object(f.jsx)("div",{className:e.root,children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C,{title:n.title,heading:n.heading,image:n.image,url:n.url,time:n.time}),Object(f.jsx)("img",{src:n.image,alt:n.title,className:e.img}),Object(f.jsx)(g.a,{variant:"h3",gutterBottom:!0,children:n.title}),Object(f.jsx)(g.a,{variant:"h6",children:n.heading}),Object(f.jsx)("div",{className:e.btn,style:{background:"#11136c"},children:Object(f.jsx)(T.a,{variant:"contained",color:"secondary",fullWidth:!0,href:n.url,size:"large",children:"Enroll Now"})})]}):Object(f.jsx)("h1",{children:"Loading..."})})},_=a(30),q=a(8),F=a(68),z=a(146),M=a.p+"static/media/inqueue_full.c68e8736.png",G=a(36),H=a.n(G),D=Object(j.a)((function(e){return{par:{padding:"30px 70px",paddingTop:"40px"},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{width:"200px",cursor:"pointer",maxWidth:"fit-content"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#050a30",zIndex:"9999",marginTop:3},inputRoot:{color:"#050a30",background:"#dddee0",borderRadius:"50px",marginTop:"5px"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"24ch","&:focus":{width:"40ch"}})}}));var J=function(){var e=D();return Object(f.jsx)("div",{className:e.par,children:Object(f.jsx)(F.a,{elevation:0,children:Object(f.jsxs)(k.a,{container:!0,children:[Object(f.jsx)(k.a,{item:!0,xs:12,sm:8,md:10,children:Object(f.jsx)(_.b,{to:"/",children:Object(f.jsx)("img",{src:M,className:e.img})})}),Object(f.jsx)(k.a,{item:!0,xs:4,sm:2,md:1,children:Object(f.jsx)(_.b,{to:"/about",className:e.link,children:"about us"})}),Object(f.jsx)(k.a,{item:!0,xs:2,sm:1,children:Object(f.jsx)(z.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(f.jsx)(H.a,{className:e.fbIcon})})})]})})})},U=Object(j.a)({par:{paddingTop:"40px",paddingLeft:"10vw",paddingRight:"10vw",color:"#050a30"},about:{fontWeight:600},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{maxWidth:"80vw"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30",fontSize:96}});var P=function(){var e=U();return Object(f.jsx)("div",{className:e.par,children:Object(f.jsxs)(k.a,{container:!0,children:[Object(f.jsx)(k.a,{item:!0,xs:12,md:5,children:Object(f.jsx)("img",{src:M,className:e.img})}),Object(f.jsxs)(k.a,{item:!0,xs:12,md:7,children:[Object(f.jsx)("div",{className:e.about,children:"Here at inqueue.co.in we provide you the discount coupon codes for the paid Udemy courses.We update our data daily Hence the chances of getting the expired coupon code is very low.To get the daily updates follow us on our facebook group"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Follow us on"}),Object(f.jsx)(z.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(f.jsx)(H.a,{className:e.fbIcon})})]})]})]})})},Y=(a(147),a(148),a(11));Object(j.a)((function(e){return{root:{flexGrow:1},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));Object(j.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});var K=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(_.a,{children:[Object(f.jsx)(J,{}),Object(f.jsxs)(q.c,{children:[Object(f.jsx)(q.a,{path:"/",exact:!0,children:Object(f.jsx)(S,{})}),Object(f.jsx)(q.a,{path:"/course/:id",exact:!0,children:Object(f.jsx)(B,{})}),Object(f.jsx)(q.a,{path:"/about",children:Object(f.jsx)(P,{})}),Object(f.jsx)(q.a,{path:"*",children:Object(f.jsx)(N,{})})]})]})})};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(K,{})}),document.getElementById("root"))},78:function(e,t,a){},79:function(e,t,a){},98:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.c74093c2.chunk.js.map
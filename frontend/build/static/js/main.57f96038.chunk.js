(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{101:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(21),r=a.n(n),s=(a(81),a(82),a(17)),o=a(20),d=a(61),l=a.n(d).a.create({baseURL:"https://www.inqueue.co.in/api/v1/"}),j=a(139),b=a(141),h=a(142),u=a(146),p=a(144),x=a(143),m=a(145),g=(a(101),a(62)),O=a.n(g),f=a(153),v=a(37),w=a.n(v),k=a(2),N=Object(j.a)({root:{maxWidth:320,textAlign:"start",marginBottom:30,"& .MuiCardActionArea-root":{height:"90%"},"& .MuiCardContent-root":{height:200,overflow:"hidden"},"& .MuiChip-root":{marginRight:"10px",minWidth:"50px",marginBottom:"10px"}},media:{height:140},heading:{height:96,overflow:"hidden"},cardArea:{},expired:{color:"black",background:"#f8433f",letterSpacing:1},available:{color:"black",background:"#adff2f",letterSpacing:1}});function y(e){var t,a=e.image,i=e.title,c=e.heading,n=e.status,r=e.id,s=e.createdAt,o=e.clicks,d=N();return Object(k.jsxs)(b.a,{className:d.root,onClick:function(){return window.open("/course/".concat(r),"_blank")},children:[Object(k.jsxs)(h.a,{className:d.actionArea,children:[Object(k.jsx)(x.a,{className:d.media,image:a,title:i}),Object(k.jsxs)(p.a,{children:[Object(k.jsx)(f.a,{size:"small",label:"active"===n?"Active":"Expired",className:"active"===n?d.available:d.expired}),Object(k.jsx)(f.a,{size:"small",icon:Object(k.jsx)(w.a,{}),label:o}),Object(k.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:i}),Object(k.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",className:d.heading,children:c.length<=120?c:c.substring(0,117)+"..."})]})]}),Object(k.jsx)(u.a,{children:Object(k.jsxs)(m.a,{variant:"caption",align:"right",display:"block",children:["Added ",(t=s,O()(t).fromNow())]})})]})}var I=a(147);a(110);var R=function(){return Object(k.jsxs)("div",{className:"mainbox",children:[Object(k.jsx)("div",{className:"err",children:"4"}),Object(k.jsx)("i",{className:"far fa-question-circle fa-spin"}),Object(k.jsx)("div",{className:"err2",children:"4"}),Object(k.jsxs)("div",{className:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(k.jsxs)("p",{children:["Let's go ",Object(k.jsx)("a",{href:"/",children:"home"})," and try from there."]})]})]})};a(111);var S=function(){return Object(k.jsx)("div",{className:"loader",children:"loading..."})},W=a(28),A=a.n(W),C=a(152),L=Object(j.a)((function(e){return{root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#050a30",zIndex:"9999",marginTop:3},inputRoot:{color:"#050a30",background:"#dddee0",borderRadius:"50px",marginTop:"5px"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"24ch","&:focus":{width:"40ch"}}),searchBar:{maxWidth:"fit-content",margin:"auto",marginBottom:"61px"},result:{marginTop:"0px",color:"#050a30",letterSpacing:"2px"}}}));var T=function(){var e=L(),t=Object(i.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(i.useState)([]),d=Object(s.a)(o,2),j=d[0],b=d[1],h=Object(i.useState)([]),u=Object(s.a)(h,2),p=u[0],x=u[1],m=Object(i.useState)(!0),g=Object(s.a)(m,2),O=g[0],f=g[1],v=Object(i.useState)(!1),w=Object(s.a)(v,2),N=w[0],W=w[1],T=Object(i.useState)(""),B=Object(s.a)(T,2),E=B[0],_=B[1];return Object(i.useEffect)((function(){l.get("/courses").then((function(e){var t=e.data.data.filter((function(e){return"active"===e.status}));console.log(e.data.data),Object(n.unstable_batchedUpdates)((function(){r(e.data.data),x(e.data.data),b(t),f(!1)}))})).catch((function(e){W(!0),f(!1)}))}),[]),N?Object(k.jsx)(R,{}):O?Object(k.jsx)(S,{}):Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("div",{className:e.searchBar,children:Object(k.jsxs)("div",{className:e.search,children:[Object(k.jsx)("div",{className:e.searchIcon,children:Object(k.jsx)(A.a,{})}),Object(k.jsx)(C.a,{placeholder:"Search\u2026",const:!0,value:E,onChange:function(e){var t=e.target.value;if(_(t),t){var a=j.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));x(a)}else x(c)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(k.jsxs)("h4",{className:e.result,children:["result - ",p.length]}),Object(k.jsx)(I.a,{container:!0,alignItems:"center",justify:"center",children:p.map((function(t,a){return Object(k.jsx)(i.Fragment,{children:Object(k.jsx)(I.a,{item:!0,xs:12,sm:6,lg:4,className:e.card,children:Object(k.jsx)(y,{title:t.title,image:t.image,heading:t.heading,status:t.status,id:t._id,createdAt:t.createdAt,clicks:t.clicks})})},t._id)}))})]})},B=a(67);function E(e){e.title,e.heading,e.time,e.image,e.id;return Object(k.jsx)(B.a,{})}var _=a(148),z=Object(j.a)({root:{width:"80%",margin:"auto","& .MuiChip-root":{marginRight:"10px",minWidth:"50px",marginBottom:"10px"}},img:{width:"100%",height:"70vh",display:"block",margin:"auto",marginBottom:"30px !important"},btn:{margin:"20px auto",background:"#111e6c","& a":{background:"#111e6c"}},expired:{color:"black",background:"#f8433f"},available:{color:"black",background:"#adff2f"}});var M=function(){var e=z(),t=Object(i.useState)({}),a=Object(s.a)(t,2),c=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(s.a)(r,2),d=o[0],j=o[1],b=Object(i.useState)(!0),h=Object(s.a)(b,2),u=h[0],p=h[1];return Object(i.useEffect)((function(){l.get("/courses/".concat(window.location.href.split("/")[4])).then((function(e){n(e.data.data),p(!1)})).catch((function(e){j(!0),p(!1)}))}),[]),d?Object(k.jsx)(R,{}):u?Object(k.jsx)(S,{}):Object(k.jsx)("div",{className:e.root,children:c?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(E,{title:c.title,heading:c.heading,image:c.image,url:c.url,time:c.time}),Object(k.jsx)("img",{src:c.image,alt:c.title,className:e.img}),Object(k.jsx)(f.a,{label:"active"===c.status?"Active":"Expired",className:"active"===c.status?e.available:e.expired}),Object(k.jsx)(f.a,{icon:Object(k.jsx)(w.a,{}),label:c.clicks}),Object(k.jsx)(m.a,{variant:"h3",gutterBottom:!0,children:c.title}),Object(k.jsx)(m.a,{variant:"h6",children:c.heading}),Object(k.jsx)("div",{className:e.btn,style:{background:"#11136c"},children:Object(k.jsx)(_.a,{variant:"contained",color:"secondary",fullWidth:!0,href:c.url,size:"large",children:"Enroll Now"})})]}):Object(k.jsx)(R,{})})},q=a(31),F=a(9),U=a(71),D=a(149),G=a.p+"static/media/inqueue_full.c68e8736.png",H=a(38),J=a.n(H),P=Object(j.a)((function(e){return{par:{padding:"30px 70px",paddingTop:"40px"},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{width:"200px",cursor:"pointer",maxWidth:"fit-content"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"#050a30",zIndex:"9999",marginTop:3},inputRoot:{color:"#050a30",background:"#dddee0",borderRadius:"50px",marginTop:"5px"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"24ch","&:focus":{width:"40ch"}})}}));var K=function(){var e=P();return Object(k.jsx)("div",{className:e.par,children:Object(k.jsx)(U.a,{elevation:0,children:Object(k.jsxs)(I.a,{container:!0,children:[Object(k.jsx)(I.a,{item:!0,xs:12,sm:8,md:10,children:Object(k.jsx)(q.b,{to:"/",children:Object(k.jsx)("img",{src:G,className:e.img})})}),Object(k.jsx)(I.a,{item:!0,xs:4,sm:2,md:1,children:Object(k.jsx)(q.b,{to:"/about",className:e.link,children:"about us"})}),Object(k.jsx)(I.a,{item:!0,xs:2,sm:1,children:Object(k.jsx)(D.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(k.jsx)(J.a,{className:e.fbIcon})})})]})})})},Q=Object(j.a)({par:{paddingTop:"40px",paddingLeft:"10vw",paddingRight:"10vw",color:"#050a30"},about:{fontWeight:600},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{maxWidth:"80vw"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30",fontSize:96}});var V=function(){var e=Q();return Object(k.jsx)("div",{className:e.par,children:Object(k.jsxs)(I.a,{container:!0,children:[Object(k.jsx)(I.a,{item:!0,xs:12,md:5,children:Object(k.jsx)("img",{src:G,className:e.img})}),Object(k.jsxs)(I.a,{item:!0,xs:12,md:7,children:[Object(k.jsx)("div",{className:e.about,children:"Here at inqueue.co.in we provide you the discount coupon codes for the paid Udemy courses.We update our data daily Hence the chances of getting the expired coupon code is very low.To get the daily updates follow us on our facebook group"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Follow us on"}),Object(k.jsx)(D.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(k.jsx)(J.a,{className:e.fbIcon})})]})]})]})})},X=(a(150),a(151),a(7));Object(j.a)((function(e){return{root:{flexGrow:1},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(X.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));Object(j.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});console.log("&&");var Y=function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(q.a,{children:[Object(k.jsx)(K,{}),Object(k.jsxs)(F.c,{children:[Object(k.jsx)(F.a,{path:"/",exact:!0,children:Object(k.jsx)(T,{})}),Object(k.jsx)(F.a,{path:"/course/:id",exact:!0,children:Object(k.jsx)(M,{})}),Object(k.jsx)(F.a,{path:"/about",children:Object(k.jsx)(V,{})}),Object(k.jsx)(F.a,{path:"*",children:Object(k.jsx)(R,{})})]})]})})};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root"))},81:function(e,t,a){},82:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.57f96038.chunk.js.map
(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),n=c(19),r=c.n(n),s=(c(66),c(67),c(18)),o=c(50),d=c.n(o).a.create({baseURL:"http://localhost:8000/api/v1/"}),l=c(126),j=c(128),b=c(129),h=c(133),x=c(131),u=c(130),m=c(132),g=(c(86),c(51)),O=c.n(g),p=c(2),f=Object(l.a)({root:{maxWidth:320,textAlign:"start",marginBottom:30,"& .MuiCardActionArea-root":{height:"90%"},"& .MuiCardContent-root":{height:200,overflowY:"hidden"}},media:{height:140},heading:{height:96},cardArea:{}});function v(e){var t,c=e.image,a=e.title,i=e.heading,n=e.status,r=e.id,s=e.createdAt,o=f();return Object(p.jsxs)(j.a,{className:o.root,onClick:function(){return window.open("/course/".concat(r),"_blank")},children:[Object(p.jsxs)(b.a,{className:o.actionArea,children:[Object(p.jsx)("span",{className:"active"===n?"ribbonGreen":"ribbonRed",children:Object(p.jsx)("span",{children:"active"===n?"Available":"Expired"})}),Object(p.jsx)(u.a,{className:o.media,image:c,title:a}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(p.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",className:o.heading,children:i.length<=120?i:i.substring(0,117)+"..."})]})]}),Object(p.jsx)(h.a,{children:Object(p.jsxs)(m.a,{variant:"caption",align:"right",display:"block",children:["Added ",(t=s,O()(t).fromNow())]})})]})}var w=c(134);c(94);var N=function(){return Object(p.jsxs)("div",{className:"mainbox",children:[Object(p.jsx)("div",{className:"err",children:"4"}),Object(p.jsx)("i",{className:"far fa-question-circle fa-spin"}),Object(p.jsx)("div",{className:"err2",children:"4"}),Object(p.jsxs)("div",{className:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(p.jsxs)("p",{children:["Let's go ",Object(p.jsx)("a",{href:"/",children:"home"})," and try from there."]})]})]})};c(95);var k=function(){return Object(p.jsx)("div",{className:"loader",children:"loading..."})},y=Object(l.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});var A=function(){var e=y(),t=Object(a.useState)([]),c=Object(s.a)(t,2),i=c[0],n=c[1],r=Object(a.useState)(!0),o=Object(s.a)(r,2),l=o[0],j=o[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),x=h[0],u=h[1];return Object(a.useEffect)((function(){d.get("/courses").then((function(e){n(e.data.data),j(!1)})).catch((function(e){console.log("\ud83d\ude80 ~ file: Homepage.js ~ line 35 ~ useEffect ~ err",e),u(!0),j(!1)}))}),[]),console.log(i),x?Object(p.jsx)(N,{}):l?Object(p.jsx)(k,{}):Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(w.a,{container:!0,alignItems:"center",justify:"center",children:i.map((function(t,c){return Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(w.a,{item:!0,xs:12,sm:6,lg:4,className:e.card,children:Object(p.jsx)(v,{title:t.title,image:t.image,heading:t.heading,status:t.status,time:t.createdAt,url:t.url,id:t._id,createdAt:t.createdAt})})},t._id)}))})})},W=c(56);function S(e){e.title,e.heading,e.time,e.image,e.id;return Object(p.jsx)(W.a,{})}var I=c(135),R=Object(l.a)({root:{width:"80%",margin:"auto"},img:{width:"100%",height:"70vh",display:"block",margin:"auto",marginBottom:"30px !important"},btn:{margin:"20px auto",background:"#111e6c","& a":{background:"#111e6c"}}});var T=function(){var e=R(),t=Object(a.useState)({}),c=Object(s.a)(t,2),i=c[0],n=c[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],j=o[1],b=Object(a.useState)(!0),h=Object(s.a)(b,2),x=h[0],u=h[1];return Object(a.useEffect)((function(){d.get("/courses/".concat(window.location.href.split("/")[4])).then((function(e){n(e.data.data),u(!1)})).catch((function(e){console.error(e),j(!0),u(!1)}))}),[]),l?Object(p.jsx)(N,{}):x?Object(p.jsx)(k,{}):Object(p.jsx)("div",{className:e.root,children:i?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{title:i.title,heading:i.heading,image:i.image,url:i.url,time:i.time}),Object(p.jsx)("img",{src:i.image,alt:i.title,className:e.img}),Object(p.jsx)(m.a,{variant:"h3",gutterBottom:!0,children:i.title}),Object(p.jsx)(m.a,{variant:"h6",children:i.heading}),Object(p.jsx)("div",{className:e.btn,style:{background:"#11136c"},children:Object(p.jsx)(I.a,{variant:"contained",color:"secondary",fullWidth:!0,href:i.url,size:"large",children:"Enroll Now"})})]}):Object(p.jsx)("h1",{children:"Loading..."})})},C=c(27),E=c(7),L=c(103),_=c(136),B=c.p+"static/media/inqueue_full.c68e8736.png",F=c(32),q=c.n(F),M=Object(l.a)({par:{paddingTop:"40px",padding:"70px"},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{width:"200px",cursor:"pointer",maxWidth:"fit-content"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30"}});var H=function(){var e=M();return Object(p.jsx)("div",{className:e.par,children:Object(p.jsx)(L.a,{elevation:0,children:Object(p.jsxs)(w.a,{container:!0,children:[Object(p.jsx)(w.a,{item:!0,xs:12,md:10,children:Object(p.jsx)(C.b,{to:"/",children:Object(p.jsx)("img",{src:B,className:e.img})})}),Object(p.jsx)(w.a,{item:!0,xs:12,md:1,children:Object(p.jsx)(C.b,{to:"/about",className:e.link,children:"about us"})}),Object(p.jsx)(w.a,{item:!0,xs:12,md:1,children:Object(p.jsx)(_.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(p.jsx)(q.a,{className:e.fbIcon})})})]})})})},z=Object(l.a)({par:{paddingTop:"40px",paddingLeft:"10vw",paddingRight:"10vw",color:"#050a30"},about:{fontWeight:600},root:{maxWidth:345},media:{height:140},link:{textDecoration:"underline",textTransform:"lowercase",letterSpacing:"1px",color:"#050a30",fontWeight:"700",display:"block",marginTop:"10px",marginLeft:"8px",maxWidth:"fit-content"},img:{maxWidth:"80vw"},card:{textAlign:"-webkit-center",cursor:"pointer"},fbIcon:{color:"#050a30",fontSize:96}});var D=function(){var e=z();return Object(p.jsx)("div",{className:e.par,children:Object(p.jsxs)(w.a,{container:!0,children:[Object(p.jsx)(w.a,{item:!0,xs:12,md:5,children:Object(p.jsx)("img",{src:B,className:e.img})}),Object(p.jsxs)(w.a,{item:!0,xs:12,md:7,children:[Object(p.jsx)("div",{className:e.about,children:"Here at inqueue.co.in we provide you the discount coupon codes for the paid Udemy courses.We update our data daily Hence the chances of getting the expired coupon code is very low.To get the daily updates follow us on our facebook group"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Follow us on"}),Object(p.jsx)(_.a,{onClick:function(){return window.open("https://www.facebook.com/groups/548558866554350","_blank")},disableRipple:!0,disableFocusRipple:!0,children:Object(p.jsx)(q.a,{className:e.fbIcon})})]})]})]})})};Object(l.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});var G=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(C.a,{children:[Object(p.jsx)(H,{}),Object(p.jsxs)(E.c,{children:[Object(p.jsx)(E.a,{path:"/",exact:!0,children:Object(p.jsx)(A,{})}),Object(p.jsx)(E.a,{path:"/course/:id",exact:!0,children:Object(p.jsx)(T,{})}),Object(p.jsx)(E.a,{path:"/about",children:Object(p.jsx)(D,{})}),Object(p.jsx)(E.a,{path:"*",children:Object(p.jsx)(N,{})})]})]})})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root"))},66:function(e,t,c){},67:function(e,t,c){},86:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.0fbe1f3f.chunk.js.map
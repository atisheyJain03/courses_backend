(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(18),r=a.n(n),s=(a(61),a(62),a(17)),j=a(42),o=a.n(j).a.create({baseURL:"http://localhost:8000/api/v1/"}),d=a(113),l=a(115),h=a(116),b=a(118),u=a(117),m=a(91),x=(a(81),a(2)),O=Object(d.a)({root:{maxWidth:320,textAlign:"start",height:360,marginBottom:30,"& .MuiCardActionArea-root":{height:"100%"}},media:{height:140},heading:{},cardArea:{height:"100%"}});function g(e){var t=e.image,a=e.title,c=e.heading,i=e.status,n=e.id,r=O();return Object(x.jsx)(l.a,{className:r.root,onClick:function(){return window.open("/course/".concat(n),"_blank")},children:Object(x.jsxs)(h.a,{className:r.actionArea,children:[Object(x.jsx)("span",{className:"active"===i?"ribbonGreen":"ribbonRed",children:Object(x.jsx)("span",{children:"active"===i?"Available":"Expired"})}),Object(x.jsx)(u.a,{className:r.media,image:t,title:a}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(x.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",className:r.heading,children:c.length<=120?c:c.substring(0,117)+"..."})]})]})})}var f=a(119);a(86);var p=function(){return Object(x.jsxs)("div",{className:"mainbox",children:[Object(x.jsx)("div",{className:"err",children:"4"}),Object(x.jsx)("i",{className:"far fa-question-circle fa-spin"}),Object(x.jsx)("div",{className:"err2",children:"4"}),Object(x.jsxs)("div",{className:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(x.jsxs)("p",{children:["Let's go ",Object(x.jsx)("a",{href:"/",children:"home"})," and try from there."]})]})]})};a(87);var v=function(){return Object(x.jsx)("div",{className:"loader",children:"loading..."})},N=Object(d.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});var w=function(){var e=N(),t=Object(c.useState)([]),a=Object(s.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)(!0),j=Object(s.a)(r,2),d=j[0],l=j[1],h=Object(c.useState)(!1),b=Object(s.a)(h,2),u=b[0],m=b[1];return Object(c.useEffect)((function(){o.get("/courses").then((function(e){n(e.data.data),l(!1)})).catch((function(e){console.log("\ud83d\ude80 ~ file: Homepage.js ~ line 35 ~ useEffect ~ err",e),m(!0),l(!1)}))}),[]),u?Object(x.jsx)(p,{}):d?Object(x.jsx)(v,{}):Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(f.a,{container:!0,alignItems:"center",justify:"center",children:i.map((function(t,a){return Object(x.jsx)(c.Fragment,{children:Object(x.jsx)(f.a,{item:!0,xs:12,sm:6,lg:4,className:e.card,children:Object(x.jsx)(g,{title:t.title,image:t.image,heading:t.heading,status:t.status,time:t.createdAt,url:t.url,id:t._id})})},t._id)}))})})},k=a(47);function A(e){e.title,e.heading,e.time,e.image,e.id;return Object(x.jsx)(k.a,{})}var y=a(120),S=Object(d.a)({root:{width:"80%",margin:"auto"},img:{width:"100%",height:"70vh",display:"block",margin:"auto",marginBottom:"30px !important"},btn:{margin:"20px auto",background:"#111e6c","& a":{background:"#111e6c"}}});var E=function(){var e=S(),t=Object(c.useState)({}),a=Object(s.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)(!1),j=Object(s.a)(r,2),d=j[0],l=j[1],h=Object(c.useState)(!0),b=Object(s.a)(h,2),u=b[0],O=b[1];return Object(c.useEffect)((function(){o.get("/courses/".concat(window.location.href.split("/")[4])).then((function(e){n(e.data.data),O(!1)})).catch((function(e){console.error(e),l(!0),O(!1)}))}),[]),d?Object(x.jsx)(p,{}):u?Object(x.jsx)(v,{}):Object(x.jsx)("div",{className:e.root,children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A,{title:i.title,heading:i.heading,image:i.image,url:i.url,time:i.time}),Object(x.jsx)("img",{src:i.image,alt:i.title,className:e.img}),Object(x.jsx)(m.a,{variant:"h3",gutterBottom:!0,children:i.title}),Object(x.jsx)(m.a,{variant:"h6",children:i.heading}),Object(x.jsx)("div",{className:e.btn,style:{background:"#11136c"},children:Object(x.jsx)(y.a,{variant:"contained",color:"secondary",fullWidth:!0,href:i.url,size:"large",children:"Enroll Now"})})]}):Object(x.jsx)("h1",{children:"Loading..."})})},B=a(50),W=a(7),L=a(90),_=a(121),q=a.p+"static/media/inqueue_full.c68e8736.png",I=Object(d.a)({root:{maxWidth:345},media:{height:140},img:{display:"block",width:"200px",cursor:"pointer",margin:"30px",marginLeft:"7%"},card:{textAlign:"-webkit-center"}});var M=function(){var e=I();return Object(x.jsx)(L.a,{elevation:0,children:Object(x.jsx)(_.a,{href:"/",children:Object(x.jsx)("img",{src:q,className:e.img})})})};Object(d.a)({root:{maxWidth:345},media:{height:140},card:{textAlign:"-webkit-center"}});var C=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(B.a,{children:[Object(x.jsx)(M,{}),Object(x.jsxs)(W.c,{children:[Object(x.jsx)(W.a,{path:"/",exact:!0,children:Object(x.jsx)(w,{})}),Object(x.jsx)(W.a,{path:"/course/:id",exact:!0,children:Object(x.jsx)(E,{})}),Object(x.jsx)(W.a,{path:"*",children:Object(x.jsx)(p,{})})]})]})})};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.6df7333d.chunk.js.map
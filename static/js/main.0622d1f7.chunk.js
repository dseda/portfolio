(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),s=c(8),r=c.n(s),a=(c(13),c.p,c(14),c(2)),j=c(3),o=c(6),l=c(5),d=c(4),b=(c(15),c(0)),h=function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"Navigation",children:[Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)("a",{href:"#projects",children:Object(b.jsx)("li",{children:"Projects"})}),Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("li",{children:"About"})})]})})}}]),c}(n.Component),u=h,O=(c(17),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).state={rotating:!1},n.toggleRotate=n.toggleRotate.bind(Object(o.a)(n)),n}return Object(j.a)(c,[{key:"toggleRotate",value:function(t){this.setState((function(t){return{rotating:!t.rotating}})),console.log("start")}},{key:"rotateEnd",value:function(){}},{key:"render",value:function(){var t=this.state.rotating;return Object(b.jsxs)("header",{onMouseEnter:this.toggleRotate,onMouseLeave:this.toggleRotate,children:[Object(b.jsxs)("div",{className:"Logo",children:[Object(b.jsx)("div",{children:Object(b.jsx)("i",{className:"fab fa-stripe-s ".concat(t?"rotating":"")})}),Object(b.jsx)("span",{children:"eda."})]}),Object(b.jsx)(u,{})]})}}]),c}(n.Component)),f=(c(18),c.p+"static/media/coding.066b074d.jpeg"),p=function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Intro",children:[Object(b.jsxs)("div",{className:"Intro-info",children:[Object(b.jsx)("p",{children:"Hi! My name is Seda."}),Object(b.jsx)("p",{children:"I am a software developer."}),Object(b.jsx)("p",{children:"I used React to build this portfolio"})]}),Object(b.jsx)("div",{className:"Intro-photo",children:Object(b.jsx)("img",{src:f,alt:"author-coding"})})]})}}]),c}(n.Component),x=p,g=(c(19),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var t=this.props.techs.join(", ");return Object(b.jsxs)("div",{className:"Project",children:[Object(b.jsx)("div",{className:"Project-image",children:Object(b.jsx)("img",{src:f})}),Object(b.jsx)("h3",{children:this.props.title}),Object(b.jsx)("p",{children:"Project details"}),Object(b.jsx)("footer",{children:t})]},this.props.id)}}]),c}(n.Component)),m=g,v=(c(20),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).state={projects:[{id:1,imgSrc:"",title:"Contacts App",details:"",techsUsed:["JS","React.js","CSS","HTML"]},{id:2,imgSrc:"",title:"Roll Dice",details:"",techsUsed:["JS","React.js","CSS","HTML"]},{id:3,imgSrc:"",title:"Coin Flipper",details:"",techsUsed:["JS","React.js","CSS","HTML"]}]},n}return Object(j.a)(c,[{key:"render",value:function(){var t=this.state.projects.map((function(t){return Object(b.jsx)(m,{id:t.id,details:t.details,title:t.title,imgSrc:t.imgSrc,techs:t.techsUsed})}));return Object(b.jsxs)("div",{id:"projects",className:"Projects",children:[Object(b.jsx)("h2",{children:"My Projects"}),Object(b.jsx)("div",{className:"ProjectList",children:t})]})}}]),c}(n.Component)),S=(c(21),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("footer",{className:"Footer",children:[Object(b.jsx)("p",{children:"\xa9 2021 Seda Demir"}),Object(b.jsxs)("div",{className:"Socials",children:[Object(b.jsx)("a",{href:"https://github.com/dseda",target:"_blank",children:Object(b.jsx)("i",{class:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/seda-d-02743b185/",target:"_blank",children:Object(b.jsx)("i",{class:"fab fa-linkedin"})})]})]})}}]),c}(n.Component)),y=S;var k=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(x,{}),Object(b.jsx)(v,{}),Object(b.jsx)(y,{})]})},C=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),C()}],[[22,1,2]]]);
//# sourceMappingURL=main.0622d1f7.chunk.js.map
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),s=c(8),r=c.n(s),a=(c(13),c.p,c(14),c(2)),o=c(3),j=c(6),l=c(5),d=c(4),u=(c(15),c(0)),b=function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"Navigation",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)("a",{href:"#projects",children:Object(u.jsx)("li",{children:"Projects"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("li",{children:"About"})})]})})}}]),c}(n.Component),h=b,O=(c(17),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).state={rotating:!1},n.toggleRotate=n.toggleRotate.bind(Object(j.a)(n)),n}return Object(o.a)(c,[{key:"toggleRotate",value:function(t){this.setState((function(t){return{rotating:!t.rotating}})),console.log("start")}},{key:"rotateEnd",value:function(){}},{key:"render",value:function(){var t=this.state.rotating;return Object(u.jsxs)("header",{onMouseEnter:this.toggleRotate,onMouseLeave:this.toggleRotate,children:[Object(u.jsxs)("div",{className:"Logo",children:[Object(u.jsx)("div",{children:Object(u.jsx)("i",{className:"fab fa-stripe-s ".concat(t?"rotating":"")})}),Object(u.jsx)("span",{children:"eda."})]}),Object(u.jsx)(h,{})]})}}]),c}(n.Component)),p=(c(18),c.p+"static/media/coding.066b074d.jpeg"),f=function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Intro",children:[Object(u.jsxs)("div",{className:"Intro-info",children:[Object(u.jsx)("p",{children:"Hi! My name is Seda."}),Object(u.jsx)("p",{children:"I am a software developer."}),Object(u.jsx)("p",{children:"I used React to build this portfolio"})]}),Object(u.jsx)("div",{className:"Intro-photo",children:Object(u.jsx)("img",{src:p,alt:"author-coding"})})]})}}]),c}(n.Component),x=f,g=(c(19),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this.props.techs.join(", ");return Object(u.jsxs)("div",{className:"Project",children:[Object(u.jsx)("div",{className:"Project-image",children:Object(u.jsx)("img",{src:p})}),Object(u.jsx)("h3",{children:this.props.title}),Object(u.jsx)("p",{children:"Project details"}),Object(u.jsx)("footer",{children:t})]},this.props.id)}}]),c}(n.Component)),v=g,m=(c(20),function(t){Object(l.a)(c,t);var e=Object(d.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).state={projects:[{id:1,imgSrc:"",title:"Contacts App",details:"",techsUsed:["JS","React.js","CSS","HTML"]},{id:2,imgSrc:"",title:"Roll Dice",details:"",techsUsed:["JS","React.js","CSS","HTML"]},{id:3,imgSrc:"",title:"Coin Flipper",details:"",techsUsed:["JS","React.js","CSS","HTML"]}]},n}return Object(o.a)(c,[{key:"render",value:function(){var t=this.state.projects.map((function(t){return Object(u.jsx)(v,{id:t.id,details:t.details,title:t.title,imgSrc:t.imgSrc,techs:t.techsUsed})}));return Object(u.jsxs)("div",{id:"projects",className:"Projects",children:[Object(u.jsx)("h2",{children:"My Projects"}),Object(u.jsx)("div",{className:"ProjectList",children:t})]})}}]),c}(n.Component));var S=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsx)(x,{}),Object(u.jsx)(m,{})]})},y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),s(t),r(t)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.7396171d.chunk.js.map
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(8),i=c.n(a),r=(c(13),c.p,c(14),c(2)),j=c(3),o=c(6),l=c(5),b=c(4),d=(c(15),c(0)),u=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return this.props.menuOpen?Object(d.jsxs)("nav",{className:"Nav-cross",children:[Object(d.jsx)("button",{className:"Hamburger",onClick:this.props.toggleMenu,children:Object(d.jsx)("i",{class:"fas fa-times"})}),Object(d.jsxs)("ul",{className:"Site-nav",children:[Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)("a",{href:"#projects",children:Object(d.jsx)("li",{children:"Projects"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("li",{children:"About"})})]})]}):Object(d.jsx)("nav",{className:"Nav-ham",children:Object(d.jsx)("button",{className:"Hamburger",onClick:this.props.toggleMenu,children:Object(d.jsx)("i",{className:"fas fa-bars"})})})}}]),c}(s.Component),h=u,O=(c(17),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={rotating:!1,menuOpen:!1},s.toggleRotate=s.toggleRotate.bind(Object(o.a)(s)),s.toggleMenu=s.toggleMenu.bind(Object(o.a)(s)),s}return Object(j.a)(c,[{key:"toggleRotate",value:function(e){this.setState((function(e){return{rotating:!e.rotating}}))}},{key:"toggleMenu",value:function(){this.setState((function(e){return{menuOpen:!e.menuOpen}}))}},{key:"render",value:function(){var e=this,t=this.state.rotating;return Object(d.jsxs)("header",{onMouseEnter:this.toggleRotate,onMouseLeave:this.toggleRotate,children:[Object(d.jsx)("a",{className:"Logo-link",children:Object(d.jsxs)("div",{className:"Logo",children:[Object(d.jsx)("i",{className:"fab fa-stripe-s ".concat(t?"rotating":"")}),Object(d.jsx)("span",{children:"eda."})]})}),Object(d.jsx)(h,{menuOpen:this.state.menuOpen,toggleMenu:function(){return e.toggleMenu()}})]})}}]),c}(s.Component)),p=(c(18),c.p+"static/media/coding.066b074d.jpeg"),m=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Intro",children:[Object(d.jsxs)("div",{className:"Intro-info",children:[Object(d.jsx)("p",{children:"Hi! My name is Seda."}),Object(d.jsx)("p",{children:"I am a software developer."}),Object(d.jsx)("p",{children:"I used React to build this portfolio"})]}),Object(d.jsx)("div",{className:"Intro-photo",children:Object(d.jsx)("img",{src:p,alt:"author-coding"})})]})}}]),c}(s.Component),f=m,g=(c(19),c.p+"static/media/jquery.94cc202b.png"),x=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){console.log(g);var e=this.props.techs.map((function(e){return"js"===e?Object(d.jsx)("i",{className:"fab fa-js-square"}):"react"===e?Object(d.jsx)("i",{className:"fab fa-react"}):"css"===e?Object(d.jsx)("i",{className:"fab fa-css3-alt"}):"html"===e?Object(d.jsx)("i",{className:"fab fa-html5"}):"jquery"===e?Object(d.jsx)("img",{className:"tech",src:g}):void 0}));console.log(this.props.techs);var t=this.props,c=t.id,s=t.imgSrc,n=t.title,a=(t.details,t.src);return Object(d.jsxs)("section",{className:"Project",children:[Object(d.jsx)("div",{className:"Project-image",children:Object(d.jsx)("img",{src:s})}),Object(d.jsxs)("div",{className:"Project-details",children:[Object(d.jsx)("h3",{children:n}),Object(d.jsxs)("div",{className:"Tech-stack",children:[Object(d.jsx)("p",{children:"Tech Stack: "}),Object(d.jsx)("p",{children:e})]}),Object(d.jsx)("p",{children:"Project details"}),Object(d.jsx)("footer",{children:Object(d.jsx)("a",{href:a,className:"Project-demo-link",target:"_blank",children:Object(d.jsx)("p",{children:"View live demo"})})})]})]},c)}}]),c}(s.Component),v=x,N=(c(20),c.p+"static/media/address-book.a092a34e.png"),k=c.p+"static/media/todoapp.95b167f3.png",y=c.p+"static/media/coinflipper.21ac91ff.png",S=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={projects:[{id:1,imgSrc:N,title:"Contacts App",details:"",techsUsed:["js","css","html","jquery"],src:"https://dseda.github.io/address-book/"},{id:2,imgSrc:k,title:"Todo App",details:"",techsUsed:["js","react","css","html"],src:"https://dseda.github.io/react-todo-app/"},{id:3,imgSrc:y,title:"Coin Flipper",details:"",techsUsed:["js","react","css","html"],src:"https://dseda.github.io/coin-flipper/"}]},s}return Object(j.a)(c,[{key:"render",value:function(){var e=this.state.projects.map((function(e){return Object(d.jsx)(v,{id:e.id,details:e.details,title:e.title,imgSrc:e.imgSrc,techs:e.techsUsed,src:e.src})}));return Object(d.jsxs)("section",{id:"projects",className:"Projects",children:[Object(d.jsx)("h2",{children:"My Projects"}),Object(d.jsx)("div",{className:"ProjectList",children:e})]})}}]),c}(s.Component),C=(c(21),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"About",children:[Object(d.jsx)("h4",{children:"About Me"}),Object(d.jsx)("div",{className:"Timeline"})]})}}]),c}(s.Component)),M=C,P=(c(22),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("footer",{className:"Footer",children:[Object(d.jsx)("p",{children:"\xa9 2021 Seda Demir"}),Object(d.jsxs)("div",{className:"Socials",children:[Object(d.jsx)("a",{href:"https://github.com/dseda",target:"_blank",children:Object(d.jsx)("i",{class:"fab fa-github"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/seda-d-02743b185/",target:"_blank",children:Object(d.jsx)("i",{class:"fab fa-linkedin"})})]})]})}}]),c}(s.Component)),w=P;var I=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)(f,{}),Object(d.jsx)(S,{}),Object(d.jsx)(M,{}),Object(d.jsx)(w,{})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),A()}],[[23,1,2]]]);
//# sourceMappingURL=main.d1228829.chunk.js.map
(this["webpackJsonpreact-sandbox"]=this["webpackJsonpreact-sandbox"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),h=(n(13),n(5)),i=n(6),o=n(2),l=n(8),u=n(7),d=(n(14),n(15),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(e.character.id,"?set=set2&size=180x180"),alt:"Character img"}),Object(d.jsx)("h2",{children:e.character.name}),Object(d.jsx)("p",{children:e.character.email})]})},b=(n(17),function(e){return Object(d.jsx)("div",{className:"card-list",children:e.characters.map((function(e){return Object(d.jsx)(j,{character:e},e.id)}))})}),f=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({searchField:e.target.value})},a.state={characters:[],searchField:""},a.handleChangeNonArrow=a.handleChangeNonArrow.bind(Object(o.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({characters:t})}))}},{key:"handleChangeNonArrow",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.characters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Characters"}),Object(d.jsx)(f,{placeholder:"Search for Characters",handleChange:this.handleChange}),Object(d.jsx)(b,{characters:a})]})}}]),n}(a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}],[[19,1,2]]]);
//# sourceMappingURL=main.59ae623e.chunk.js.map
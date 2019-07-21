(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(196),i=n(202),c=n(200);function l(){var e=m(["\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0.2em;\n  text-decoration: none;\n  color: black;\n  width: 250px;\n  margin: 0.3em;\n  \n  &:hover {\n    background-color: silver;\n  }\n"]);return l=function(){return e},e}function u(){var e=m(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return u=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var s=o.a.div(u()),p=o.a.a(l());t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Packages"}),r.a.createElement("h2",null,"Packages maintained by Meteor Community Packages organization"),r.a.createElement(s,null,r.a.createElement(p,{href:"https://github.com/Meteor-Community-Packages/meteor-link-accounts"},r.a.createElement("h4",null,"Meteor link accounts"),r.a.createElement("p",null,"Link multiple third-party logins to one account.")),r.a.createElement(p,{href:"https://github.com/Meteor-Community-Packages/stratosphere"},r.a.createElement("h4",null,"Stratosphere"),r.a.createElement("p",null,"Meteor private package server")),r.a.createElement(p,{href:"https://github.com/Meteor-Community-Packages/meteor-scss"},r.a.createElement("h4",null,"Meteor scss"),r.a.createElement("p",null,"Node-sass wrapped to work with meteor. ")),r.a.createElement(p,{href:"https://github.com/Meteor-Community-Packages/react-router-ssr"},r.a.createElement("h4",null,"React Router SSR"),r.a.createElement("p",null,"Simple Isomorphic SSR for Meteor ")),r.a.createElement(p,{href:"https://github.com/Meteor-Community-Packages/meteor-method-hooks"},r.a.createElement("h4",null,"Meteor Method Hooks"),r.a.createElement("p",null,"Before/after hooks for Meteor methods"))))}},195:function(e,t,n){var a;e.exports=(a=n(199))&&a.default||a},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(195),n(9).default.enqueue,r.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Meteor.js Community"}}}}},199:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(94);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},200:function(e,t,n){"use strict";var a=n(201),r=n(0),o=n.n(r),i=n(204),c=n.n(i);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Meteor.js Community",description:"A central repository for everything around the Meteor community.",author:"Meteor Community"}}}}},202:function(e,t,n){"use strict";var a=n(198),r=n(0),o=n.n(r),i=n(196),c=n(197);function l(){var e=s(["\n  text-decoration: none;\n"]);return l=function(){return e},e}function u(){var e=s(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0.5rem;\n"]);return u=function(){return e},e}function m(){var e=s(["\n  background: transparent;\n  margin-bottom: 1.45rem;\n  color: #0f0f0f;\n  padding: 1.45rem 1.0875rem;\n  \n  & a {\n    text-decoration: none;\n  }\n"]);return m=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),e.raw=t,e}var p=i.a.header(m()),f=i.a.nav(u()),d=Object(i.a)(c.a)(l()),h=function(e){var t=e.siteTitle;return o.a.createElement(p,null,o.a.createElement(d,{to:"/"}),o.a.createElement("h1",{style:{margin:0,textAlign:"center"}},o.a.createElement(c.a,{to:"/"},t)),o.a.createElement(f,null,o.a.createElement(c.a,{to:"/packages"},"Packages"),o.a.createElement(c.a,{to:"/projects"},"Projects"),o.a.createElement("a",{href:"https://github.com/Meteor-Community-Packages",title:"Github organization"},"Github"),o.a.createElement("a",{href:"https://forums.meteor.com",title:"Official Meteor forums"},"Forums"),o.a.createElement("a",{href:"https://docs.meteor.com",title:"Official Meteor documentation"},"Documentation"),o.a.createElement("a",{href:"https://guide.meteor.com",title:"Official Meteor guide"},"Guide"),o.a.createElement("a",{href:"https://www.meteor.com",title:"Official Meteor website"},"Meteor")))};h.defaultProps={siteTitle:""};var g=h;n(203);function E(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin: 0 auto;\n  max-width: 960px;\n  padding: 0px 1.0875rem 1.45rem;\n"]);return E=function(){return e},e}var w=i.a.div(E());t.a=function(e){var t=e.children,n=a.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{siteTitle:n.site.siteMetadata.title}),o.a.createElement(w,null,o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}}}]);
//# sourceMappingURL=component---src-pages-packages-js-69b246645c7ca50753e7.js.map
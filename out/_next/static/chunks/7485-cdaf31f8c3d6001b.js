(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7485],{7942:function(e,s,a){"use strict";var t=a(63038);s.default=void 0;var l,i=(l=a(67294))&&l.__esModule?l:{default:l},n=a(64957),r=a(69898),c=a(90639);var o={};function d(e,s,a,t){if(e&&n.isLocalURL(s)){e.prefetch(s,a,t).catch((function(e){0}));var l=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;o[s+"%"+a+(l?"%"+l:"")]=!0}}var h=function(e){var s,a=!1!==e.prefetch,l=r.useRouter(),h=i.default.useMemo((function(){var s=n.resolveHref(l,e.href,!0),a=t(s,2),i=a[0],r=a[1];return{href:i,as:e.as?n.resolveHref(l,e.as):r||i}}),[l,e.href,e.as]),u=h.href,f=h.as,m=e.children,p=e.replace,j=e.shallow,x=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var v=(s=i.default.Children.only(m))&&"object"===typeof s&&s.ref,b=c.useIntersection({rootMargin:"200px"}),N=t(b,2),k=N[0],y=N[1],w=i.default.useCallback((function(e){k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,k]);i.default.useEffect((function(){var e=y&&a&&n.isLocalURL(u),s="undefined"!==typeof g?g:l&&l.locale,t=o[u+"%"+f+(s?"%"+s:"")];e&&!t&&d(l,u,f,{locale:s})}),[f,u,y,g,a,l]);var E={ref:w,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,t,l,i,r,c){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&n.isLocalURL(a))&&(e.preventDefault(),null==r&&t.indexOf("#")>=0&&(r=!1),s[l?"replace":"push"](a,t,{shallow:i,locale:c,scroll:r}))}(e,l,u,f,p,j,x,g)},onMouseEnter:function(e){n.isLocalURL(u)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),d(l,u,f,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var L="undefined"!==typeof g?g:l&&l.locale,C=l&&l.isLocaleDomain&&n.getDomainLocale(f,L,l&&l.locales,l&&l.domainLocales);E.href=C||n.addBasePath(n.addLocale(f,L,l&&l.defaultLocale))}return i.default.cloneElement(s,E)};s.default=h},90639:function(e,s,a){"use strict";var t=a(63038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,a=e.disabled||!n,c=l.useRef(),o=l.useState(!1),d=t(o,2),h=d[0],u=d[1],f=l.useCallback((function(e){c.current&&(c.current(),c.current=void 0),a||h||e&&e.tagName&&(c.current=function(e,s,a){var t=function(e){var s=e.rootMargin||"",a=r.get(s);if(a)return a;var t=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var s=t.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return r.set(s,a={id:s,observer:l,elements:t}),a}(a),l=t.id,i=t.observer,n=t.elements;return n.set(e,s),i.observe(e),function(){n.delete(e),i.unobserve(e),0===n.size&&(i.disconnect(),r.delete(l))}}(e,(function(e){return e&&u(e)}),{rootMargin:s}))}),[a,s,h]);return l.useEffect((function(){if(!n&&!h){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),[f,h]};var l=a(67294),i=a(26286),n="undefined"!==typeof IntersectionObserver;var r=new Map},57420:function(e,s){"use strict";s.Z=function(e){var s=[];if(!e.parentNode)return s;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&s.push(a),a=a.nextSibling;return s}},81108:function(e,s,a){"use strict";a.d(s,{z:function(){return l},_:function(){return i}});var t=a(57420),l=function(e){(0,t.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},i=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},62067:function(e,s,a){"use strict";a(67294);var t=a(41664),l=a(85893);s.Z=function(e){var s=e.blogs;return(0,l.jsx)("section",{className:"blog-pg section-padding pt-0",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-11",children:(0,l.jsxs)("div",{className:"posts",children:[s.map((function(e,a){return(0,l.jsxs)("div",{className:"item ".concat(a===s.length-1?"":"mb-80"),children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:e.image,alt:""})})})}),(0,l.jsx)("div",{className:"content",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsxs)("div",{className:"col-10",children:[(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:(0,l.jsxs)("a",{className:"date",children:[(0,l.jsx)("span",{className:"num",children:e.date.day}),(0,l.jsx)("span",{children:e.date.month})]})}),(0,l.jsx)("div",{className:"tags",children:e.tags.map((function(e,s){return(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:e},s)}))}),(0,l.jsx)("h4",{className:"title",children:(0,l.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:e.title})}),(0,l.jsx)("p",{children:e.content}),(0,l.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{className:"butn bord curve mt-30",children:"Read More"})})]})})})]},e.id)})),(0,l.jsxs)("div",{className:"pagination",children:[(0,l.jsx)("span",{className:"active",children:(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:"1"})}),(0,l.jsx)("span",{children:(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:"2"})}),(0,l.jsx)("span",{children:(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("i",{className:"fas fa-angle-right"})})})})]})]})})})})})}},25914:function(e,s,a){"use strict";a(67294);var t=a(41664),l=a(82806),i=a(85893);s.Z=function(e){var s=e.hideBGCOLOR;return(0,i.jsx)("footer",{className:"".concat(s?"":"sub-bg"),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item md-mb50",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h5",{children:"Contact Us"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"official Address"}),(0,i.jsx)("p",{children:"153B Babar Town. Khanpur , Punjab , Pakistan"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-mail"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Email Us"}),(0,i.jsx)("p",{children:"info@xicreatives.com"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-call"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Whatsapp or Call Us"}),(0,i.jsx)("p",{children:"+92 313 6266347"})]})]})]})]})}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item md-mb50",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h5",{children:"Recent News"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/img/blog/1.jpg",alt:""})})})}),(0,i.jsxs)("div",{className:"sm-post",children:[(0,i.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,i.jsx)(t.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/img/blog/2.jpg",alt:""})})})}),(0,i.jsxs)("div",{className:"sm-post",children:[(0,i.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,i.jsx)(t.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"subscribe",children:[(0,i.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,i.jsx)("span",{className:"subs pe-7s-paper-plane"})]})})]})]})}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:l.E8,alt:""})}),(0,i.jsxs)("div",{className:"social",children:[(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-youtube"})})]}),(0,i.jsx)("div",{className:"copy-right",children:(0,i.jsxs)("p",{children:["\xa9 2022,Made with \u2764\ufe0f by",(0,i.jsx)(t.default,{href:"https://xicreatives.com/",children:(0,i.jsx)("a",{target:"_blank",children:"xi-creatives"})}),"."]})})]})})]})})})}},30015:function(e,s,a){"use strict";a(67294);var t=a(41664),l=a(82806),i=a(81108),n=a(85893);s.Z=function(e){var s=e.lr,a=e.nr,r=e.theme;return(0,n.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===r?"light":""),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(t.default,{href:"/",children:(0,n.jsx)("a",{className:"logo",children:r&&"themeL"===r?(0,n.jsx)("img",{ref:s,src:l.Q1,alt:"logo"}):(0,n.jsx)("img",{ref:s,src:l.E8,alt:"logo"})})}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button",onClick:i._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"icon-bar",children:(0,n.jsx)("i",{className:"fas fa-bars"})})}),(0,n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.default,{href:"/homepage/home5-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.default,{href:"/about/about-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"About"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.default,{href:"/works2/works2-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"Work"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.default,{href:"/blog-grid/blog-grid-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"Blog"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.default,{href:"/contact/contact-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},21527:function(e,s,a){"use strict";a(67294);var t=a(85893);s.Z=function(e){var s=e.title,a=e.paragraph,l=e.className;return(0,t.jsx)("section",{className:"page-header ".concat(l&&l),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,t.jsxs)("div",{className:"cont text-center",children:[(0,t.jsx)("h1",{className:"mb-10 color-font",children:s}),(0,t.jsx)("p",{children:a})]})})})})})}},41664:function(e,s,a){e.exports=a(7942)},29577:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b2.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')}}]);
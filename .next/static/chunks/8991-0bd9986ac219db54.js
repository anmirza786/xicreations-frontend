(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8991],{7942:function(e,a,t){"use strict";var s=t(63038);a.default=void 0;var i,l=(i=t(67294))&&i.__esModule?i:{default:i},r=t(64957),n=t(69898),c=t(90639);var o={};function d(e,a,t,s){if(e&&r.isLocalURL(a)){e.prefetch(a,t,s).catch((function(e){0}));var i=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;o[a+"%"+t+(i?"%"+i:"")]=!0}}var u=function(e){var a,t=!1!==e.prefetch,i=n.useRouter(),u=l.default.useMemo((function(){var a=r.resolveHref(i,e.href,!0),t=s(a,2),l=t[0],n=t[1];return{href:l,as:e.as?r.resolveHref(i,e.as):n||l}}),[i,e.href,e.as]),h=u.href,f=u.as,m=e.children,p=e.replace,j=e.shallow,x=e.scroll,v=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var g=(a=l.default.Children.only(m))&&"object"===typeof a&&a.ref,N=c.useIntersection({rootMargin:"200px"}),b=s(N,2),k=b[0],y=b[1],w=l.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);l.default.useEffect((function(){var e=y&&t&&r.isLocalURL(h),a="undefined"!==typeof v?v:i&&i.locale,s=o[h+"%"+f+(a?"%"+a:"")];e&&!s&&d(i,h,f,{locale:a})}),[f,h,y,v,t,i]);var E={ref:w,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,t,s,i,l,n,c){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(t))&&(e.preventDefault(),null==n&&s.indexOf("#")>=0&&(n=!1),a[i?"replace":"push"](t,s,{shallow:l,locale:c,scroll:n}))}(e,i,h,f,p,j,x,v)},onMouseEnter:function(e){r.isLocalURL(h)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(i,h,f,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var L="undefined"!==typeof v?v:i&&i.locale,C=i&&i.isLocaleDomain&&r.getDomainLocale(f,L,i&&i.locales,i&&i.domainLocales);E.href=C||r.addBasePath(r.addLocale(f,L,i&&i.defaultLocale))}return l.default.cloneElement(a,E)};a.default=u},90639:function(e,a,t){"use strict";var s=t(63038);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,t=e.disabled||!r,c=i.useRef(),o=i.useState(!1),d=s(o,2),u=d[0],h=d[1],f=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,a,t){var s=function(e){var a=e.rootMargin||"",t=n.get(a);if(t)return t;var s=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var a=s.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;a&&t&&a(t)}))}),e);return n.set(a,t={id:a,observer:i,elements:s}),t}(t),i=s.id,l=s.observer,r=s.elements;return r.set(e,a),l.observe(e),function(){r.delete(e),l.unobserve(e),0===r.size&&(l.disconnect(),n.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:a}))}),[t,a,u]);return i.useEffect((function(){if(!r&&!u){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=t(67294),l=t(26286),r="undefined"!==typeof IntersectionObserver;var n=new Map},57420:function(e,a){"use strict";a.Z=function(e){var a=[];if(!e.parentNode)return a;for(var t=e.parentNode.firstChild;t;)1===t.nodeType&&t!==e&&a.push(t),t=t.nextSibling;return a}},81108:function(e,a,t){"use strict";t.d(a,{z:function(){return i},_:function(){return l}});var s=t(57420),i=function(e){(0,s.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},l=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},90850:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var s=0,i=function(e,a){setInterval(function(e){(s=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(s+=1,e.style.opacity=s):clearInterval(0)}(e),a)};var l=function(e,a){setInterval(function(e){(s=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(s=0,e.style.opacity=s):clearInterval(0)}(e),a)};var r=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var a=document.createElement("div");a.classList.add("div-tooltip-sub"),document.body.appendChild(a),document.querySelectorAll("[data-tooltip-tit]").forEach((function(a){e=document.querySelector(".div-tooltip-tit"),a.addEventListener("mouseover",(function(){e.innerText=a.getAttribute("data-tooltip-tit")})),a.addEventListener("mousemove",(function(a){i(e,800),e.style.top=a.pageY+10+"px",e.style.left=a.pageX+20+"px",e.style.padding="0px 10px"})),a.addEventListener("mouseleave",(function(){l(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){a=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){a.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){i(a,800),a.style.top=e.pageY-15+"px",a.style.left=e.pageX+30+"px",a.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){l(a,800),a.style.padding=0}))}))}},25914:function(e,a,t){"use strict";t(67294);var s=t(41664),i=t(82806),l=t(85893);a.Z=function(e){var a=e.hideBGCOLOR;return(0,l.jsx)("footer",{className:"".concat(a?"":"sub-bg"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Contact Us"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"official Address"}),(0,l.jsx)("p",{children:"153B Babar Town. Khanpur , Punjab , Pakistan"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-mail"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Email Us"}),(0,l.jsx)("p",{children:"info@xicreatives.com"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-call"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Whatsapp or Call Us"}),(0,l.jsx)("p",{children:"+92 313 6266347"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Recent News"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/blog/1.jpg",alt:""})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,l.jsx)(s.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/blog/2.jpg",alt:""})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,l.jsx)(s.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"subscribe",children:[(0,l.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,l.jsx)("span",{className:"subs pe-7s-paper-plane"})]})})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("img",{src:i.E8,alt:""})}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-youtube"})})]}),(0,l.jsx)("div",{className:"copy-right",children:(0,l.jsxs)("p",{children:["\xa9 2022,Made with \u2764\ufe0f by",(0,l.jsx)(s.default,{href:"https://xicreatives.com/",children:(0,l.jsx)("a",{target:"_blank",children:"xi-creatives"})}),"."]})})]})})]})})})}},30015:function(e,a,t){"use strict";t(67294);var s=t(41664),i=t(82806),l=t(81108),r=t(85893);a.Z=function(e){var a=e.lr,t=e.nr,n=e.theme;return(0,r.jsx)("nav",{ref:t,className:"navbar navbar-expand-lg change ".concat("themeL"===n?"light":""),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:n&&"themeL"===n?(0,r.jsx)("img",{ref:a,src:i.Q1,alt:"logo"}):(0,r.jsx)("img",{ref:a,src:i.E8,alt:"logo"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button",onClick:l._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"icon-bar",children:(0,r.jsx)("i",{className:"fas fa-bars"})})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(s.default,{href:"/homepage/home5-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(s.default,{href:"/about/about-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"About"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(s.default,{href:"/works2/works2-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Work"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(s.default,{href:"/blog-grid/blog-grid-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Blog"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(s.default,{href:"/contact/contact-dark",children:(0,r.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},36413:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var s=t(67294),i=function(e){window.addEventListener("scroll",(function(){var a=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*a+"px, 0)",e.style.opacity=1-a/600}))}))},l=t(85893),r=function(e){var a=e.sliderRef;return s.useEffect((function(){i(document.querySelectorAll(".fixed-slider .capt .parlx"))}),[]),(0,l.jsx)("header",{ref:a,className:"works-header fixed-slider hfixd valign sub-bg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-7 col-md-9 static",children:(0,l.jsxs)("div",{className:"capt mt-50",children:[(0,l.jsxs)("div",{className:"parlx text-center",children:[(0,l.jsx)("h1",{className:"color-font",children:"amazing works"}),(0,l.jsx)("p",{children:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."})]}),(0,l.jsx)("div",{className:"bactxt custom-font valign",children:(0,l.jsx)("span",{className:"full-width",children:"Works"})})]})})})})})}},86273:function(e,a,t){"use strict";var s=t(67294),i=t(41664),l=t(90850),r=t(85893);a.Z=function(){return s.useEffect((function(){setTimeout((function(){(0,l.Z)()}),1e3)}),[]),(0,r.jsxs)("section",{className:"works section-padding pb-70",children:[(0,r.jsx)("h2",{style:{display:"none"},children:"\xa0"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row lg-space",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/1.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/2/1.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/2.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/2/3.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/3.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/2/4.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/4.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/2/5.jpg",alt:""})})})})})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(i.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/5.jpg",alt:""})})})})})})]})})]})}},41664:function(e,a,t){e.exports=t(7942)}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4322],{90850:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=0,s=function(e,t){setInterval(function(e){(i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(i+=1,e.style.opacity=i):clearInterval(0)}(e),t)};var r=function(e,t){setInterval(function(e){(i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(i=0,e.style.opacity=i):clearInterval(0)}(e),t)};var a=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach((function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-tit")})),t.addEventListener("mousemove",(function(t){s(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"})),t.addEventListener("mouseleave",(function(){r(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){s(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){r(t,800),t.style.padding=0}))}))}},73048:function(e,t,n){"use strict";var i=n(77625),s=n(67294),r=n(41664),a=n(72873),o=n(265),l=n(88116),c=(n(53481),n(9320),n(30687),n(43434),n(90850)),d=n(85893);l.ZP.use([l.W_,l.tl,l.VS,l.Gk]);t.Z=function(){var e=s.useState(!0),t=(0,i.Z)(e,2),n=t[0],l=t[1];s.useEffect((function(){setTimeout((function(){l(!1),(0,c.Z)()}),1e3)}),[]);var u=s.useRef(null),p=s.useRef(null),f=s.useRef(null);return(0,d.jsxs)("header",{className:"slider showcase-grid",children:[(0,d.jsx)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:n?null:(0,d.jsx)(a.t,{speed:1e3,mousewheel:!0,autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,spaceBetween:30,navigation:{prevEl:u.current,nextEl:p.current},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},onBeforeInit:function(e){e.params.navigation.prevEl=u.current,e.params.navigation.nextEl=p.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=u.current,e.params.navigation.nextEl=p.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:4,children:o.map((function(e){return(0,d.jsx)(a.o,{className:"swiper-slide",children:(0,d.jsx)(r.default,{passHref:!0,href:"/project-details2/project-details2-dark",children:(0,d.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-tooltip-tit":e.title.first+" "+e.title.second,"data-tooltip-sub":e.sub})})},e.id)}))})}),(0,d.jsxs)("div",{className:"txt-botm",children:[(0,d.jsxs)("div",{ref:p,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:"Next Slide"})}),(0,d.jsx)("div",{children:(0,d.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,d.jsxs)("div",{ref:u,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,d.jsx)("div",{children:(0,d.jsx)("i",{className:"fas fa-chevron-left"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:"Prev Slide"})})]}),(0,d.jsx)("div",{className:"swiper-pagination dots",ref:f})]})]})}},49516:function(e,t,n){"use strict";var i=n(67294),s=n(9008),r=n(85893);t.Z=function(e){var t=e.children,n=e.useSkin,a=e.mobileappstyle;return i.useEffect((function(){window.theme="dark"}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"/css/dark.css"}),n?(0,r.jsx)("link",{rel:"stylesheet",href:"/css/arch-skin-dark.css"}):"",a?(0,r.jsx)("link",{href:"/css/mobile-app-dark.css",rel:"stylesheet"}):""]}),t]})}},69469:function(e,t,n){"use strict";n.r(t);n(67294);var i=n(52767),s=n(73048),r=n(49516),a=n(85893);t.default=function(){return(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(s.Z,{})]})}},57671:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase4/showcase4-dark",function(){return n(69469)}])},9320:function(){}},function(e){e.O(0,[8782,5854,9774,2888,179],(function(){return t=57671,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
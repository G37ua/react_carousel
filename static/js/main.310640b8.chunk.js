(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(2),s=n(1),r=(n(9),n(10),n(11),n(0)),o=function(e){var t=e.label,n=e.onClick,a=e.disabled,i=void 0!==a&&a,c=e["data-cy"];return Object(r.jsx)("button",{type:"button",className:"button",onClick:n,disabled:i,"data-cy":c,children:t})},l=(n(13),function(e){var t=e.images,n=e.animationDuration,a=e.frameSize,i=e.itemWidth,c=e.currentIndex;return Object(r.jsx)("div",{style:{width:"".concat(a*i,"px")},className:"gallery",children:Object(r.jsx)("ul",{className:"gallery__list",children:t.map((function(e){return Object(r.jsx)("li",{style:{transform:"translateX(".concat(-c*i,"px)"),transition:"".concat(n,"ms")},children:Object(r.jsx)("img",{style:{width:"".concat(i,"px")},src:"/img/".concat(e),alt:"Imagin-".concat(e)})},e)}))})})}),u=function(e){var t=e.images,n=e.step,a=void 0===n?3:n,i=e.frameSize,u=void 0===i?3:i,j=e.itemWidth,b=void 0===j?130:j,d=e.animationDuration,m=void 0===d?1e3:d,h=e.infinite,g=void 0!==h&&h,p=Object(s.useState)(0),O=Object(c.a)(p,2),f=O[0],x=O[1];return Object(r.jsxs)("div",{className:"carousel",children:[Object(r.jsx)("h1",{"data-cy":"title",className:"carousel__title",children:"Carousel with ".concat(t.length," images")}),Object(r.jsx)(l,{images:t,itemWidth:b,frameSize:u,currentIndex:f,animationDuration:m}),Object(r.jsxs)("div",{className:"carousel__buttons",children:[Object(r.jsx)(o,{label:"<<",onClick:function(){f>0&&x(f-a)},disabled:0===f,"data-cy":"prev-button"}),Object(r.jsx)(o,{label:">>",onClick:function(){f<t.length-u?x(f+a):g&&x(0)},disabled:f>=t.length-u&&!g,"data-cy":"next-button"})]})]})};u.defaultProps={step:3,frameSize:3,infinite:!1,itemWidth:130,animationDuration:1e3};var j=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"],b=(n(14),function(e){var t=e.itemWidth,n=e.frameSize,a=e.step,i=e.animationDuration,c=e.infinite,s=e.onItemWidthChange,o=e.onFrameSizeChange,l=e.onStepChange,u=e.onAnimationDurationChange,j=e.onInfiniteChange;return Object(r.jsxs)("div",{className:"settings",children:[Object(r.jsx)("h2",{children:"Carousel Settings"}),Object(r.jsxs)("div",{className:"grid",children:[Object(r.jsxs)("label",{children:["Item Width:",Object(r.jsx)("input",{type:"number",value:t,onChange:s})]}),Object(r.jsxs)("label",{children:["Frame Size:",Object(r.jsx)("input",{type:"number",value:n,onChange:o})]}),Object(r.jsxs)("label",{children:["Step:",Object(r.jsx)("input",{type:"number",value:a,onChange:l})]}),Object(r.jsxs)("label",{children:["Animation Duration (ms):",Object(r.jsx)("input",{type:"number",value:i,onChange:u})]}),Object(r.jsxs)("label",{children:["Infinite:",Object(r.jsx)("input",{type:"checkbox",checked:c,onChange:j})]})]})]})});b.defaultProps={itemWidth:130};var d=function(){var e=Object(s.useState)(130),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(3),o=Object(c.a)(i,2),l=o[0],d=o[1],m=Object(s.useState)(3),h=Object(c.a)(m,2),g=h[0],p=h[1],O=Object(s.useState)(1e3),f=Object(c.a)(O,2),x=f[0],v=f[1],C=Object(s.useState)(!1),S=Object(c.a)(C,2),y=S[0],I=S[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{itemWidth:n,frameSize:l,step:g,animationDuration:x,infinite:y,onItemWidthChange:function(e){return a(parseInt(e.target.value,10))},onFrameSizeChange:function(e){return d(parseInt(e.target.value,10))},onStepChange:function(e){return p(parseInt(e.target.value,10))},onAnimationDurationChange:function(e){return v(parseInt(e.target.value,10))},onInfiniteChange:function(e){return I(e.target.checked)}}),Object(r.jsx)(u,{images:j,step:g,frameSize:l,itemWidth:n,animationDuration:x,infinite:y})]})};i.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.310640b8.chunk.js.map
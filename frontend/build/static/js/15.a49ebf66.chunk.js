(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[15],{5684:function(e,r,t){"use strict";var n=t(184);r.Z=function(e){var r=e.error,t=e.resetErrorBoundary;return(0,n.jsxs)("div",{role:"alert",children:[(0,n.jsx)("p",{children:"Something went wrong:"}),(0,n.jsx)("pre",{children:r.message}),(0,n.jsx)("button",{onClick:t,children:"Try again"})]})}},4015:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return A}});var n=t(5861),o=t(885),i=t(1413),a=t(7757),c=t.n(a),u=t(9201),s=t(184),l=(0,u.Z)((0,s.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite"),d=(0,u.Z)((0,s.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder"),f=t(7630),p=t(703),h=t(1889),v=t(2169),y=t(5093),m=t(6151),g=t(4569),x=t.n(g),j=t(2791),C=t(6030),b=t(6871),E=t(6960),_=t(602),S=t(7343),k=t(5816),w=t(6742),O=t(5684),Z=(0,j.lazy)((function(){return Promise.all([t.e(376),t.e(767),t.e(594)]).then(t.bind(t,3594))})),T=(0,f.ZP)(p.Z)((function(e){var r=e.theme;return(0,i.Z)((0,i.Z)({},r.typography.body2),{},{padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary})})),A=function(){var e,r,t,a,u,f,p=(0,j.useState)(0),g=(0,o.Z)(p,2),A=g[0],M=g[1],P=(0,j.useState)(1),R=(0,o.Z)(P,2),B=R[0],D=R[1],N=(0,j.useState)(!1),I=(0,o.Z)(N,2),F=I[0],K=I[1],z=(0,j.useState)(!1),L=(0,o.Z)(z,2),q=L[0],J=(L[1],(0,C.I0)()),U=(0,b.UO)().id,X=(0,C.v9)((function(e){return{product:e.product.product,user:e.auth.user}})),H=X.product,W=X.user;(0,j.useEffect)((function(){x().get("/api/products/getallproducts").then((function(e){J((0,k.R)(e.data.data))}))}),[F]);var V=H.filter((function(e){return e._id.toString()===U})),Y=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===W.id){e.next=4;break}return e.next=3,x().get("/api/users/".concat(V[0]._id,"/addtofavorite"),{withCredentials:!0}).then((function(e){K(!F);var r=JSON.parse(localStorage.getItem("user")||"{}");r.fav.push(V[0]._id),localStorage.setItem("user",JSON.stringify(r)),J((0,_.Xq)(r.fav))})).catch((function(e){e&&E.Am.error(e.response.data.message)}));case 3:console.log(q);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{children:(0,s.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,s.jsxs)(h.ZP,{item:!0,xs:6,children:[(0,s.jsxs)(T,{className:"slideshow-container",children:[(0,s.jsx)(v.Z,{className:"fade",sx:{objectFit:"cover"},component:"img",height:"450",src:null===(e=V[0])||void 0===e?void 0:e.img[A]}),(0,s.jsx)("a",{className:"prev",onClick:function(){M(0===A?V[0].img.length-1:A-1)},children:"\u276e"}),(0,s.jsx)("a",{className:"next",onClick:function(){A===V[0].img.length-1?M(0):M(A+1)},children:"\u276f"})]}),0!==V.length?(0,s.jsx)(w.ErrorBoundary,{FallbackComponent:O.Z,onReset:function(){},children:(0,s.jsx)(j.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading.."}),children:(0,s.jsx)(Z,{product:V[0]})})}):null]}),(0,s.jsx)(h.ZP,{item:!0,xs:6,children:(0,s.jsxs)(T,{style:{maxWidth:"100vh"},children:[(0,s.jsx)("h3",{children:null===(r=V[0])||void 0===r?void 0:r.title}),(0,s.jsx)("h6",{children:null===(t=V[0])||void 0===t?void 0:t.category}),(0,s.jsx)("p",{style:{textAlign:"justify",wordWrap:"break-word"},children:null===(a=V[0])||void 0===a?void 0:a.desc}),(0,s.jsxs)("p",{children:["\u20ba",null===(u=V[0])||void 0===u?void 0:u.cost]}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,s.jsx)(y.Z,{type:"number",size:"small",sx:{width:"4rem"},onChange:function(e){return D(e.target.value)},InputProps:{inputProps:{min:1,max:12}}}),(0,s.jsx)(m.Z,{onClick:function(){J((0,S.Xq)([(0,i.Z)((0,i.Z)({},V[0]),{},{amount:+B})]))},children:"Add to Cart"}),W.fav.includes(null===(f=V[0])||void 0===f?void 0:f._id.toString())?(0,s.jsx)(l,{onClick:function(){x().get("/api/users/".concat(V[0]._id,"/removefromfavorite"),{withCredentials:!0}).then((function(e){return e.data})),K(!F);var e=JSON.parse(localStorage.getItem("user")||"{}"),r=e.fav.filter((function(e){return e.toString()!==V[0]._id.toString()}));e.fav=r,localStorage.setItem("user",JSON.stringify(e)),J((0,_.Xq)(r))},color:"error"}):(0,s.jsx)(d,{onClick:Y,color:"error"})]})]})})]})})}},7343:function(e,r,t){"use strict";t.d(r,{Xq:function(){return o},kx:function(){return i},dm:function(){return a},yy:function(){return c},vs:function(){return u}});var n=t(6562),o=function(e){return function(r){r({type:n.M.ADD_TO_CART,payload:e})}},i=function(e){return function(r){r({type:n.M.DELETE_ITEM_FROM_CART,payload:e})}},a=function(e){return function(r){r({type:n.M.ADD_ITEM_TO_CART,payload:e})}},c=function(e){return function(r){r({type:n.M.CHECK_STOCK,payload:e})}},u=function(){return function(e){e({type:n.M.EMPTY_BASKET})}}},5816:function(e,r,t){"use strict";t.d(r,{R:function(){return o}});var n=t(6562),o=function(e){return function(r){r({type:n.M.SET_ALL_PRODUCTS,payload:e})}}},6742:function(e,r,t){!function(e,r){"use strict";function t(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var n=t(r);function o(e,r){return o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},o(e,r)}function i(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r)}var a=function(e,r){return void 0===e&&(e=[]),void 0===r&&(r=[]),e.length!==r.length||e.some((function(e,t){return!Object.is(e,r[t])}))},c={error:null},u=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=e.call.apply(e,[this].concat(n))||this).state=c,r.resetErrorBoundary=function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];null==r.props.onReset||(e=r.props).onReset.apply(e,n),r.reset()},r}i(r,e),r.getDerivedStateFromError=function(e){return{error:e}};var t=r.prototype;return t.reset=function(){this.setState(c)},t.componentDidCatch=function(e,r){var t,n;null==(t=(n=this.props).onError)||t.call(n,e,r)},t.componentDidUpdate=function(e,r){var t,n,o=this.state.error,i=this.props.resetKeys;null!==o&&null!==r.error&&a(e.resetKeys,i)&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,e.resetKeys,i),this.reset())},t.render=function(){var e=this.state.error,r=this.props,t=r.fallbackRender,o=r.FallbackComponent,i=r.fallback;if(null!==e){var a={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(i))return i;if("function"===typeof t)return t(a);if(o)return n.createElement(o,a);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},r}(n.Component);function s(e,r){var t=function(t){return n.createElement(u,r,n.createElement(e,t))},o=e.displayName||e.name||"Unknown";return t.displayName="withErrorBoundary("+o+")",t}function l(e){var r=n.useState(null),t=r[0],o=r[1];if(null!=e)throw e;if(null!=t)throw t;return o}e.ErrorBoundary=u,e.useErrorHandler=l,e.withErrorBoundary=s,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(2791))}}]);
//# sourceMappingURL=15.a49ebf66.chunk.js.map
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[260],{5684:function(e,r,t){"use strict";var n=t(184);r.Z=function(e){var r=e.error,t=e.resetErrorBoundary;return(0,n.jsxs)("div",{role:"alert",children:[(0,n.jsx)("p",{children:"Something went wrong:"}),(0,n.jsx)("pre",{children:r.message}),(0,n.jsx)("button",{onClick:t,children:"Try again"})]})}},260:function(e,r,t){"use strict";t.r(r);var n=t(5861),o=t(885),a=t(7757),i=t.n(a),s=t(4569),u=t.n(s),c=t(2791),l=t(6030),d=t(6960),f=t(2864),p=t(7111),h=t.n(p),g=t(6742),y=t(5684),m=t(2338),v=t(184),b=(0,c.lazy)((function(){return t.e(300).then(t.bind(t,5300))})),x=(0,c.lazy)((function(){return Promise.all([t.e(93),t.e(673)]).then(t.bind(t,9673))}));r.default=function(){var e=(0,c.useState)([]),r=(0,o.Z)(e,2),t=r[0],a=r[1],s=(0,c.useState)(!1),p=(0,o.Z)(s,2),w=p[0],j=p[1],k=(0,c.useState)(!1),C=(0,o.Z)(k,2),E=C[0],S=C[1],Z=(0,c.useState)(-1),O=(0,o.Z)(Z,2),I=O[0],_=O[1],B=(0,c.useState)(-1),R=(0,o.Z)(B,2),P=R[0],A=R[1],z=(0,c.useState)(),N=(0,o.Z)(z,2),D=N[0],F=N[1],K=(0,c.useState)(),U=(0,o.Z)(K,2),M=U[0],T=U[1],q=(0,c.useState)(0),H=(0,o.Z)(q,2),V=H[0],G=H[1],J=(0,c.useState)(0),L=(0,o.Z)(J,2),Q=L[0],W=L[1],X=(0,c.useRef)(),Y=(0,l.v9)((function(e){return e.auth})).user,$=(0,c.useState)(!1),ee=(0,o.Z)($,2),re=ee[0],te=ee[1],ne=(0,c.useRef)(0),oe=function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return _(r),W(t.length-1-r),e.next=5,u().post("/api/orders/myorders/changepreparing",{orderId:t[r].orderId,productId:t[r].product._id,index:t.length-1-r},{withCredentials:!0}).then((function(e){F(e.data.preparing),_(-1)})).catch((function(e){d.Am.warn(e.response.data.message),S(!0),_(-1)}));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),ae=function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||isNaN(ne.current)||0===ne.current){e.next=7;break}return A(r),W(t.length-1-r),e.next=5,u().post("/api/orders/myorders/changesentbycargo",{orderId:t[r].orderId,productId:t[r].product._id,trackNo:ne.current,i:t.length-1-r},{withCredentials:!0}).then((function(e){T(e.data.sentbycargo),A(-1)})).catch((function(e){d.Am.warn(e.response.data.message),S(!0),A(-1)}));case 5:e.next=8;break;case 7:d.Am.warn("Please provide a valid track Number");case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){X.current=(0,f.io)("https://web-shop-socketio.herokuapp.com/")}),[]),(0,c.useEffect)((function(){X.current&&""!==Y.id&&(null===X||void 0===X||X.current.on("getUsers",(function(e){e.userId===Y.id&&G(e.user.incomingOrders.length)})))}),[Y]),(0,c.useEffect)((function(){X.current&&X.current.emit("changeState",{i:Q,userId:Y.id})}),[D,M]),(0,c.useEffect)((function(){var e=new AbortController,r=function(){var r=(0,n.Z)(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""===Y.id){r.next=4;break}return 0===t.length&&j(!0),r.next=4,u().get("/api/users/admin/incomingorders",{withCredentials:!0,signal:e.signal}).then((function(e){a(e.data.incomingOrders.reverse()),j(!1)})).catch((function(e){"canceled"===e.message?console.log("axios aborted"):(d.Am.warn(e.response.data.message),S(!0),j(!1))}));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return r(),function(){return e.abort()}}),[Y.id,V,D,M]);var ie=(0,c.useCallback)((function(e){var r=e.index,n=e.style;return(0,v.jsx)("div",{style:n,children:(0,v.jsx)(x,{ordr:t[r],index:r,data:t,loadingCargo:P,loadingPrep:I,changePrep:oe,changeSentByCargo:ae,TrackRef:ne})})}),[t]);return(0,v.jsx)("div",{children:(0,v.jsx)(g.ErrorBoundary,{FallbackComponent:y.Z,onReset:function(){},children:(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:(0,v.jsx)(h(),{size:30,color:"#c67c03"})}),children:w||E?E?(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"70vh"},children:(0,v.jsx)(b,{open:re,handleClose:function(){return te(!1)},handleOpen:function(){return te(!0)}})}):(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:(0,v.jsx)(h(),{size:30,color:"#c67c03"})}):(0,v.jsx)(m.t7,{height:550,width:1e3,itemSize:205,itemCount:t.length,children:ie})})})})}},6742:function(e,r,t){!function(e,r){"use strict";function t(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var n=t(r);function o(e,r){return o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},o(e,r)}function a(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r)}var i=function(e,r){return void 0===e&&(e=[]),void 0===r&&(r=[]),e.length!==r.length||e.some((function(e,t){return!Object.is(e,r[t])}))},s={error:null},u=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=e.call.apply(e,[this].concat(n))||this).state=s,r.resetErrorBoundary=function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];null==r.props.onReset||(e=r.props).onReset.apply(e,n),r.reset()},r}a(r,e),r.getDerivedStateFromError=function(e){return{error:e}};var t=r.prototype;return t.reset=function(){this.setState(s)},t.componentDidCatch=function(e,r){var t,n;null==(t=(n=this.props).onError)||t.call(n,e,r)},t.componentDidUpdate=function(e,r){var t,n,o=this.state.error,a=this.props.resetKeys;null!==o&&null!==r.error&&i(e.resetKeys,a)&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,e.resetKeys,a),this.reset())},t.render=function(){var e=this.state.error,r=this.props,t=r.fallbackRender,o=r.FallbackComponent,a=r.fallback;if(null!==e){var i={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(a))return a;if("function"===typeof t)return t(i);if(o)return n.createElement(o,i);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},r}(n.Component);function c(e,r){var t=function(t){return n.createElement(u,r,n.createElement(e,t))},o=e.displayName||e.name||"Unknown";return t.displayName="withErrorBoundary("+o+")",t}function l(e){var r=n.useState(null),t=r[0],o=r[1];if(null!=e)throw e;if(null!=t)throw t;return o}e.ErrorBoundary=u,e.useErrorHandler=l,e.withErrorBoundary=c,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(2791))}}]);
//# sourceMappingURL=260.2d37cbe6.chunk.js.map
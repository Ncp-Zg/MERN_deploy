"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[107],{7107:function(e,n,t){t.r(n);var a=t(1413),i=t(5861),r=t(885),s=t(7757),o=t.n(s),l=t(8870),u=t(5093),d=t(6151),c=t(4569),m=t.n(c),p=t(2791),f=t(6030),x=t(6871),h=t(6960),g=t(602),v=t(184);n.default=function(){var e=(0,f.I0)(),n=(0,x.s0)(),t=(0,f.v9)((function(e){return e.auth})).user,s=(0,p.useState)({email:"".concat(t.email),password:""}),c=(0,r.Z)(s,2),y=c[0],Z=c[1],b=function(){var t=(0,i.Z)(o().mark((function t(a){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m().post("/api/users/login",{email:y.email,password:y.password},{withCredentials:!0}).then((function(t){e((0,g.pH)({name:t.data.name,email:t.data.email,isAdmin:t.data.isAdmin,id:t.data._id,fav:t.data.fav})),h.Am.success("You logged in successfully!"),n(-1)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:(0,v.jsx)("form",{onSubmit:b,children:(0,v.jsxs)(l.Z,{sx:{border:1,borderColor:"gray",borderRadius:"10px",padding:"10px"},children:[(0,v.jsx)("h3",{style:{display:"flex",justifyContent:"center"},children:"LOGIN"}),(0,v.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"5%",marginTop:"5%",marginLeft:"2%",marginRight:"2%"},children:[(0,v.jsx)(u.Z,{autoComplete:"on",onChange:function(e){return Z((0,a.Z)((0,a.Z)({},y),{},{email:e.target.value}))},id:"outlined-basic",label:"Email",variant:"outlined",value:y.email,sx:{marginBottom:"10px"}}),(0,v.jsx)(u.Z,{autoComplete:"on",onChange:function(e){return Z((0,a.Z)((0,a.Z)({},y),{},{password:e.target.value}))},type:"password",id:"outlined-basic1",label:"Password",variant:"outlined",sx:{marginBottom:"20px"}}),(0,v.jsx)(d.Z,{variant:"contained",color:"primary",type:"submit",children:"LOGIN"})]})]})})})}}}]);
//# sourceMappingURL=107.fe411f88.chunk.js.map
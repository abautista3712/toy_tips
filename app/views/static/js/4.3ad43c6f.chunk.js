(this.webpackJsonptoy_tips=this.webpackJsonptoy_tips||[]).push([[4],{98:function(e,s,n){"use strict";n.r(s);var i=n(15),t=n(0),c=n(89),a=n(90),o=n(51),r=n(99),l=n(95),d=n.n(l),g=n(97),h=n(1);s.default=function(e){var s=Object(t.useState)(!1),n=Object(i.a)(s,2),l=n[0],p=n[1],j=Object(t.useState)([{}]),_=Object(i.a)(j,2),m=_[0],x=_[1],b=Object(t.useState)([{}]),f=Object(i.a)(b,2),O=f[0],y=f[1],w=Object(t.useState)([{}]),v=Object(i.a)(w,2),u=v[0],C=v[1],R=Object(t.useState)(!0),N=Object(i.a)(R,2),S=N[0],T=N[1],D=Object(t.useState)({prev:0,next:15}),M=Object(i.a)(D,2),E=M[0],k=M[1],H=Object(t.useState)(0),I=Object(i.a)(H,2),A=I[0],L=I[1],z=Object(t.useState)(""),K=Object(i.a)(z,2),P=K[0],F=K[1],J=Object(t.useState)([]),W=Object(i.a)(J,2),X=W[0],q=W[1];Object(t.useEffect)((function(){var e=O.map((function(e,s){if(e.ToyName&&e.ToyName.toLowerCase().includes(G.toLowerCase()))return e})).sort((function(e,s){return e.ToyName<s.ToyName?-1:e.ToyName>s.ToyName?1:0})).filter((function(e){return void 0!==e}));e.length&&q(e)}),[P]),Object(t.useEffect)((function(){p(!1)}),[X]),Object(t.useEffect)((function(){Q()}),[l]);var B=e.toyData,G=e.search,Q=function(){if(B.length>0&&0==l){var e=B;X.length&&(e=X);var s=Object.entries(e).map((function(e,s){var n=0;e[1].ToyTipsRating<2|e[1].ToyTipsRating>5|void 0==e[1].ToyTipsRating&&n++,e[1].Kids_Rating<2|e[1].Kids_Rating>5|void 0==e[1].Kids_Rating&&n++,e[1].Motor_Movement<2|e[1].Motor_Movement>5|void 0==e[1].Motor_Movement&&n++,e[1].Thinking_Skills<2|e[1].Thinking_Skills>5|void 0==e[1].Thinking_Skills&&n++,e[1].Character_Development<2|e[1].Character_Development>5|void 0==e[1].Character_Development&&n++,e[1].Social_Interaction<2|e[1].Social_Interaction>5|void 0==e[1].Social_Interaction&&n++;var i="flex",t=6,c=3,a=6,o=7,r="100%";return 6==n&&(i="none",t=12,c=0,a=0,o=10,r="65%"),e[1].handleDisplay_RC=i,e[1].handleNoRC_imgSpacing=t,e[1].handleNoRC_RCSpacing=c,e[1].handleNoRC_RCSpacing_mobile=a,e[1].handleNoRC_textSpacing=o,e[1].handleNoRC_toyImgSize=r,e[1]}));if(x(s),1==O.length&&y(s),C(s.slice(E.prev=0,E.next=15)),window.screen.availHeight!=window.screen.height?window.screen.availHeight<window.screen.height?L(Math.floor(window.screen.availHeight-185)):L(Math.floor(window.screen.height-185)):L(Math.floor(window.screen.availHeight-185)),window.screen.availWidth<=540|window.screen.width<=540&&(window.screen.availHeight!=window.screen.height?window.screen.availHeight<window.screen.height?L(Math.floor(window.screen.availHeight-175)):L(Math.floor(window.screen.height-175)):L(Math.floor(window.screen.availHeight-175))),window.screen.availWidth>=1024|window.screen.width>=1024&&(window.screen.availHeight!=window.screen.height?window.screen.availHeight<window.screen.height?L(Math.floor(window.screen.availHeight-178)):L(Math.floor(window.screen.height-178)):L(Math.floor(window.screen.availHeight-178))),p(!0),console.log("---Data successfully initialized---"),s)return s}else console.log("No props loaded yet...")};if(0==l)return Object(h.jsx)(h.Fragment,{children:Q()});setTimeout((function(){F(G)}),100);return Object(h.jsx)("div",{children:Object(h.jsx)(g.a,{dataLength:u.length,hasMore:S,next:function(){console.log("getMoreData has been called"),u.length!==m.length?(setTimeout((function(){C(u.concat(m.slice(E.prev+15,E.next+15)))}),2e3),k((function(e){return{prev:e.prev+15,next:e.next+15}}))):T(!1)},height:A,loader:Object(h.jsx)("h4",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading more toys..."}),style:{margin:0,padding:0,width:"100%",overflowX:"hidden"},children:Object(h.jsx)("div",{children:u&&u.map((function(e,s){return Object(h.jsx)("div",{children:Object(h.jsx)(c.a,{children:Object(h.jsxs)(a.a,{className:"m-3 p-2 card_Row box_Shadow",children:[Object(h.jsx)(o.a,{md:2,lg:2,xl:2,className:"d-none d-md-flex flexCenter_center",children:Object(h.jsx)(r.a,{src:"./assets/images/original/TTT_logo_hiRes.png",thumbnail:!0})}),Object(h.jsx)(o.a,{xs:e.handleNoRC_imgSpacing,sm:e.handleNoRC_imgSpacing,className:"d-flex d-md-none flexCenter_center",children:Object(h.jsx)(r.a,{src:"./assets/images/original/TTT_logo_hiRes.png",thumbnail:!0,style:{width:e.handleNoRC_toyImgSize}})}),Object(h.jsxs)(o.a,{xs:e.handleNoRC_RCSpacing_mobile,sm:e.handleNoRC_RCSpacing_mobile,className:"d-flex d-md-none",style:{alignItems:"center",display:e.handleDisplay_RC},children:[Object(h.jsx)(r.a,{src:"./assets/icons/scoring_icons/report_card.png",style:{width:"100%",display:e.handleDisplay_RC}}),Object(h.jsxs)("div",{className:"scores_mobileTransform",children:[Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.ToyTipsRating,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:-39,right:30,height:28,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Kids_Rating,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:-13,right:58,height:28,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Motor_Movement,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:37,right:82,height:20,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Thinking_Skills,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:56,right:102,height:20,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Character_Development,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:75,right:122,height:20,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Social_Interaction,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:94,right:142,height:20,display:e.handleDisplay_RC}})]})]}),Object(h.jsxs)(o.a,{xs:12,sm:12,md:e.handleNoRC_textSpacing,lg:e.handleNoRC_textSpacing,xl:e.handleNoRC_textSpacing,children:[Object(h.jsx)(a.a,{className:"flexCenter",children:Object(h.jsxs)(o.a,{className:"p-0",children:[Object(h.jsx)("h2",{className:"d-none d-md-flex",children:e.ToyName}),Object(h.jsx)("h4",{className:"d-flex d-md-none flexCenter_center_textAlign",children:e.ToyName})]})}),Object(h.jsxs)(a.a,{className:"flexCenter",children:[Object(h.jsxs)(o.a,{className:"d-none d-md-flex p-0",children:["by ",e.company_name]}),Object(h.jsxs)(o.a,{className:"d-flex d-md-none flexCenter_center_textAlign",children:["by ",e.company_name]})]}),Object(h.jsxs)(a.a,{className:"flexCenter",children:[Object(h.jsxs)(o.a,{className:"d-none d-md-flex p-0",children:[Object(h.jsx)("b",{className:"age_price_margin",children:"For Ages: "}),e.AgeRange1]}),Object(h.jsxs)(o.a,{className:"d-none d-md-flex p-0",children:[Object(h.jsx)("b",{className:"age_price_margin",children:"Price: "}),e.Low_Price]}),Object(h.jsxs)(o.a,{className:"d-flex d-md-none flexCenter_center",children:[Object(h.jsx)("b",{className:"age_price_margin",children:"For Ages: "}),e.AgeRange1]}),Object(h.jsxs)(o.a,{className:"d-flex d-md-none flexCenter_center_textAlign",children:[Object(h.jsx)("b",{className:"age_price_margin",children:"Price: "}),e.Low_Price]})]}),Object(h.jsxs)(a.a,{className:"flexCenter",children:[Object(h.jsx)(o.a,{className:"d-none d-md-flex p-0",style:{fontSize:"small"},children:Object(h.jsx)("b",{children:e.categories})}),Object(h.jsx)(o.a,{className:"d-flex d-md-none flexCenter_center_textAlign",style:{fontSize:"small"},children:Object(h.jsx)("b",{children:e.categories})})]}),Object(h.jsx)(a.a,{className:"flexCenter",children:Object(h.jsxs)(o.a,{className:"p-0",children:[Object(h.jsx)("b",{children:"Manufacturer's Description"}),Object(h.jsx)(d.a,{lines:3,children:Object(h.jsx)("p",{children:e.mfg_desc})})]})}),Object(h.jsx)(a.a,{className:"flexCenter",children:Object(h.jsxs)(o.a,{className:"p-0",children:[Object(h.jsx)("b",{children:"Expert Review"}),Object(h.jsx)(d.a,{lines:3,children:Object(h.jsx)("p",{children:e.Long_Review})})]})})]}),Object(h.jsxs)(o.a,{md:e.handleNoRC_RCSpacing,lg:e.handleNoRC_RCSpacing,xl:e.handleNoRC_RCSpacing,className:"d-none d-md-flex",style:{alignItems:"center",display:e.handleDisplay_RC},children:[Object(h.jsx)(r.a,{src:"./assets/icons/scoring_icons/report_card.png",style:{width:"100%",display:e.handleDisplay_RC}}),Object(h.jsxs)("div",{className:"scores_mobileTransform",children:[Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.ToyTipsRating,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:-39,right:30,height:28,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Kids_Rating,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:-13,right:58,height:28,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Motor_Movement,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:36,right:82,height:20,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Thinking_Skills,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:55,right:102,height:20,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Character_Development,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:74,right:122,height:20,display:e.handleDisplay_RC}}),Object(h.jsx)("img",{src:"./assets/icons/scoring_icons/".concat(e.Social_Interaction,".png"),onError:function(e){e.target.src="./assets/icons/scoring_icons/0.png"},style:{position:"relative",top:93,right:142,height:20,display:e.handleDisplay_RC}})]})]})]})})})}))})})})}}}]);
//# sourceMappingURL=4.3ad43c6f.chunk.js.map
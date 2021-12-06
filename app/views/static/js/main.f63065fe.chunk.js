(this.webpackJsonptoy_tips=this.webpackJsonptoy_tips||[]).push([[0],{66:function(e,t,s){},68:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),o=s(21),c=s.n(o),i=(s(66),s(67),s(12)),r=(s(68),s(60)),l=s(7),d=s(107),h=s(106),j=s(104),b=s(100),m=s(58),u=s(103),g=s(27),x=s.n(g),p=s(1),f=function(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),n=(s[0],s[1]),o=Object(a.useState)(0),c=Object(i.a)(o,2),r=c[0],l=c[1],g=Object(a.useState)("Search by Toy Name"),f=Object(i.a)(g,2),O=f[0],y=f[1],w=Object(a.useState)(""),T=Object(i.a)(w,2),k=T[0],v=T[1];Object(a.useEffect)((function(){_()}),[]);var N=function(){v("")},_=function(){x.a.get("/api/get").then((function(e){n(e.data)})).catch((function(e){return console.error("Error: ".concat(e))}))},C=function(){window.open("https://www.amazon.com/Im-Toy-Tester%C2%AE-Shirt-Shorts/dp/B000UFUXJI/ref=sr_1_2?keywords=im+a+toy+tester&qid=1557453165&s=gateway&sr=8-2","_blank")};return Object(p.jsxs)("div",{children:[Object(p.jsxs)(d.a,{expand:"md",variant:"dark",className:"my-auto py-1 bgColor_nav",children:[Object(p.jsxs)(d.a.Brand,{href:"/",children:[Object(p.jsx)("img",{src:"./assets/images/original/TTT_logo_hiRes.png",width:"75",height:"75",alt:"Toy Tips Trusted Logo",className:"d-none d-sm-block"}),Object(p.jsx)("img",{src:"./assets/images/original/TTT_logo_hiRes.png",width:"45",height:"45",alt:"Toy Tips Trusted Logo",className:"d-block d-sm-none"})]}),Object(p.jsx)(d.a.Brand,{href:"/",className:"flexCenter_flexStart",children:Object(p.jsx)("h1",{children:"Toy Tips"})}),Object(p.jsx)("container",{className:"d-none d-sm-block mr-auto",children:Object(p.jsx)(d.a.Text,{children:"The Independent Voice on Toys"})}),Object(p.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsxs)(h.a,{variant:"pills",className:"ml-auto",children:[Object(p.jsx)(h.a.Link,{href:"/about",className:"my-auto px-2 mobile_navLink",children:"About"}),Object(p.jsx)(d.a.Text,{className:"d-none d-sm-block",children:"|"}),Object(p.jsx)(h.a.Link,{href:"/search",className:"d-none d-lg-block my-auto",children:"Browse All"}),Object(p.jsx)(h.a.Link,{href:"/search",className:"d-lg-none my-auto px-2 mobile_navLink",children:"Browse"})]}),Object(p.jsx)(j.a,{inline:!0,children:Object(p.jsx)(b.a,{className:"",children:Object(p.jsx)(m.a,{type:"text",placeholder:O,value:k,onKeyPress:function(e){13===e.charCode&&e.preventDefault()},onChange:function(t){v(t.target.value),r&&clearTimeout(r),l(setTimeout((function(){e.onChange(t.target.value)}),400))},className:"d-none d-md-block mr-sm-2"})})}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(u.a.Toggle,{style:{backgroundColor:"#deb887",borderColor:"#ffebcd",padding:"7px",borderRadius:"5px"},className:"d-none d-md-block dropdown-toggle flexCenter_center",align:"end",id:"dropdown-basic",children:Object(p.jsx)("img",{src:"./assets/icons/filter/filter.png",width:"15",height:"15",alt:"Filter Button",className:"flexCenter_center"})}),Object(p.jsxs)(u.a.Menu,{className:"dropdown-menu",children:[Object(p.jsx)(u.a.Header,{children:"Search by..."}),Object(p.jsx)(u.a.Divider,{}),Object(p.jsx)(u.a.Item,{onClick:function(){console.log("filter by toy name selected"),e.onClick("ToyName"),y("Search Toy Name"),N()},children:"Toy Name"}),Object(p.jsx)(u.a.Item,{onClick:function(){console.log("filter by company name selected"),e.onClick("company_name"),y("Search Company"),N()},children:"Company Name"}),Object(p.jsx)(u.a.Item,{onClick:function(){console.log("filter by age range selected"),e.onClick("AgeRange1"),y("Search Age Range"),N()},children:"Age Range"}),Object(p.jsx)(u.a.Item,{onClick:function(){console.log("filter by category selected"),e.onClick("categories"),y("Search Category"),N()},children:"Category"})]})]})]})]}),Object(p.jsx)("div",{className:"d-none d-md-block py-1 px-2 bgColor_playware alignText_playware click_playware",onClick:C,children:'Check out our "I\'m a Toy Tester\xae" Playwear! Exclusive to Amazon'}),Object(p.jsx)("div",{className:"d-block d-md-none py-1 px-2 bgColor_playware alignText_playware click_playware",style:{fontSize:"smaller",textAlign:"center"},onClick:C,children:'Check out our "I\'m a Toy Tester\xae" Playwear!'})]})},O=function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsxs)("div",{style:{width:"100%"},children:[Object(p.jsx)("img",{src:"./assets/icons/social_icons/Facebook/color/f_logo_RGB-Blue_1024.png",alt:"Facebook Logo",className:"social_icons click_socials",onClick:function(){window.open("https://www.facebook.com/ToyTipswithMarianneSzymanski/","_blank")}}),Object(p.jsx)("img",{src:"./assets/icons/social_icons/Instagram/insta_logo_gradient.png",alt:"Instagram Logo",className:"social_icons click_socials",onClick:function(){window.open("https://www.instagram.com/toytips/","_blank")}}),Object(p.jsx)("img",{src:"./assets/icons/social_icons/Twitter/logo_fill/circle/twtr_logo_circle_blue.png",alt:"Twitter Logo",className:"social_icons click_socials",onClick:function(){window.open("https://twitter.com/toytips/","_blank")}}),Object(p.jsx)("img",{src:"./assets/icons/social_icons/YouTube/full_color/yt_icon_rgb.png",alt:"YouTube Logo",className:"social_icons click_socials",onClick:function(){window.open("https://www.youtube.com/user/toytips","_blank")}}),Object(p.jsx)("div",{style:{width:"100%",fontSize:"small"},className:"d-block d-md-none",children:"\xa9 2021 Toy Tips Inc."})]}),Object(p.jsx)("div",{style:{width:"100%"},className:"d-none d-md-flex flexCenter_flexEnd",children:Object(p.jsx)("div",{children:"\xa9 2021 Toy Tips Inc."})})]})},y=s(105),w=n.a.lazy((function(){return Promise.all([s.e(3),s.e(4)]).then(s.bind(null,111))})),T=function(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),n=s[0],o=s[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){x.a.get("/api/get").then((function(e){o(e.data)})).catch((function(e){return console.error("Error: ".concat(e))}))};return Object(p.jsx)("div",{children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("h3",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"Grading report cards..."}),children:Object(p.jsx)(w,{toyData:n,search:e.search,filterOption:e.filterOption})})})},k=function(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),n=s[0],o=s[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),l=r[0],d=r[1],h=Object(a.useState)(""),j=Object(i.a)(h,2),b=j[0],m=j[1],u=Object(a.useState)(Math.floor(2654*Math.random())),g=Object(i.a)(u,2),f=g[0];g[1];Object(a.useEffect)((function(){O()}),[]),Object(a.useEffect)((function(){n&&m(n[f].ToyName)}),[n]),Object(a.useEffect)((function(){}),[f],[b]);var O=function(){x.a.get("/api/get").then((function(e){o(e.data)})).catch((function(e){return console.error("Error: ".concat(e))}))},w=function(){window.location.replace("/about")},k=function(){window.location.replace("/search")},v=function(){n&&d(n[f].ToyName)};return Object(p.jsx)("div",{children:""!==l?Object(p.jsx)(T,{search:l,filterOption:"ToyName"}):Object(p.jsxs)(y.a,{fade:!0,children:[Object(p.jsxs)(y.a.Item,{children:[Object(p.jsx)("img",{className:"carouselImage_mobileSizing",src:"./assets/images/original/stock_toys1.jpeg",alt:"First slide",onClick:k}),Object(p.jsxs)(y.a.Caption,{className:"caption_Slide1",onClick:k,children:[Object(p.jsx)("h1",{className:"d-none d-md-block",children:"Thousands of Vintage Toy Reviews"}),Object(p.jsx)("h3",{className:"d-block d-md-none",children:"Thousands of Vintage Toy Reviews"}),Object(p.jsx)("p",{children:"Browse our entire collection from the 1990s and 2000s!"})]})]}),Object(p.jsxs)(y.a.Item,{children:[Object(p.jsx)("img",{className:"carouselImage_mobileSizing",src:"./assets/images/resized/stock_toys2_shortHeight_large.jpeg",alt:"Second slide",onClick:w}),Object(p.jsxs)(y.a.Caption,{className:"caption_Slide2",onClick:w,children:[Object(p.jsxs)("h1",{className:"d-none d-md-block",children:["30 Years of Independent Research"," "]}),Object(p.jsxs)("h3",{className:"d-block d-md-none",children:["30 Years of Independent Research"," "]}),Object(p.jsx)("h1",{className:"d-none d-lg-block",children:"on Smart Consumer Choices"}),Object(p.jsx)("p",{children:"Click here to learn more about Toy Tips"})]})]}),Object(p.jsxs)(y.a.Item,{children:[Object(p.jsx)("img",{className:"carouselImage_mobileSizing",src:"./assets/images/resized/stock_toys3_short_wide.png",alt:"Third slide",onClick:v}),Object(p.jsxs)(y.a.Caption,{className:"caption_Slide3",onClick:v,children:[Object(p.jsx)("h1",{className:"d-none d-md-block",children:b}),Object(p.jsx)("h3",{className:"d-block d-md-none",children:b}),Object(p.jsx)("h4",{className:"d-none d-lg-block",children:"Check out our Highlighted Toy!"}),Object(p.jsx)("p",{className:"d-none d-lg-block",children:"Click here to read more"}),Object(p.jsx)("p",{className:"d-block d-lg-none",children:"Check out our Highlighted Toy!"})]})]})]})})},v=s(101),N=s(102),_=s(59),C=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)(v.a,{className:"paddingBot_about",children:[Object(p.jsxs)(N.a,{children:[Object(p.jsx)(_.a,{className:"mt-3 d-none d-md-block",children:Object(p.jsx)("h1",{className:"font-weight-bold",children:"Frequently Asked Questions"})}),Object(p.jsx)(_.a,{className:"mt-3 d-block d-md-none",children:Object(p.jsx)("h2",{className:"font-weight-bold",children:"FAQs"})})]}),Object(p.jsxs)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:[Object(p.jsx)(_.a,{md:4,lg:4,xl:4,className:"mt-3 d-none d-md-flex flexCenter_flexEnd",children:Object(p.jsx)("img",{src:"./assets/images/original/TTT_logo_hiRes.png",width:"100%",alt:"Toy Tips Trusted Mark of Excellence"})}),Object(p.jsx)(_.a,{xs:12,sm:12,className:"mt-3 d-flex d-md-none flexCenter_center",children:Object(p.jsx)("img",{src:"./assets/images/original/TTT_logo_hiRes.png",width:"50%",alt:"Toy Tips Trusted Mark of Excellence"})}),Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{className:"d-none d-md-flex",children:"What is Toy Tips?"}),Object(p.jsx)("h4",{className:"d-flex d-md-none",children:"What is Toy Tips?"}),Object(p.jsxs)("p",{children:["Toy Tips is the testing group for the 'TTT' mark of excellence. A 'TTT' rating means that a toy exceeds our standards to deliver a fun play experience that also stimulates developmental learning skills. Our information is independent and conducted in an ethical and academic research manner. We do NOT accept toy entry fees or publish awards that are used for marketing purposes. Toy manufacturer or toy trade employees make no decision in our toy testing process.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The involvement of thousands of children as official 'Toy Tips\xae Testers' throughout the year provide real in-market data. Our research survey methods are independent of manufacturer conflict of interest and personal opinion."]})]})]}),Object(p.jsx)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{className:"d-none d-md-flex",children:"Can you tell me more about the research process?"}),Object(p.jsx)("h4",{className:"d-flex d-md-none",children:"Can you tell me more about the research process?"}),Object(p.jsx)("p",{children:"Celebrating 3 decades of research, our product reviews assist consumers in making appropriate purchases. Our advisory team is comprised of medical doctors, psychologists, teachers, occupational therapists and research analysts who facilitate our testing based on qualitative and quantitative research. We focus on the intellectual, social, physical, and individual character and personality development of the child."})]})}),Object(p.jsx)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{style:{textAlign:"right"},className:"d-none d-md-flex",children:"What do you do with toys that have been tested?"}),Object(p.jsx)("h4",{style:{textAlign:"right"},className:"d-flex d-md-none",children:"What do you do with toys that have been tested?"}),Object(p.jsx)("p",{children:"It is our strict policy that after toys are 'Toy Tips\xae' tested, they are donated to children through a variety of programs we have set in place with not-for-profit groups nationwide. To date, we service 32 groups. It is our way to assist those who need the toys more than us and make their playtime a little brighter."})]})}),Object(p.jsx)(N.a,{children:Object(p.jsxs)(_.a,{className:"mt-3",children:[Object(p.jsx)("h1",{className:"d-none d-md-flex font-weight-bold",children:"Our Rating System"}),Object(p.jsx)("h2",{className:"d-flex d-md-none font-weight-bold",children:"Our Rating System"})]})}),Object(p.jsxs)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:[Object(p.jsx)(_.a,{xs:12,sm:12,className:"d-flex d-md-none flexCenter_center",children:Object(p.jsx)("img",{src:"./assets/images/original/TT_reportCard2.PNG",width:"40%",alt:"Toy Tips Report Card"})}),Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{className:"d-none d-md-flex",children:"How do you come up with your scoring?"}),Object(p.jsx)("h4",{className:"d-flex d-md-none",children:"How do you come up with your scoring?"}),Object(p.jsx)("p",{children:"Our Toy Report Cards include basic information about the toy and all the research we have found out. Factual information includes the the manufacturer and website, average retail price, toy image and suggested starting age. A snapshot review describing what the product does and what a child can learn by playing with it is written based on our review. You will notice this is very straight forward as we do NOT use adjectives so our reviews stay objective. The scores of A through C- indicate how strong a particiular skill is used during play. A score of A indicates the highest score and a score of C- is the lowest. Any toy that scored less than a C- in any of the 4 skill categories (movement, thinking, personality and social interaction) does not pass and will not appear on toytips.com. Our testing methods are strict and for a toy to be listed on toytips.com means it must surpass our strict standards of durability, ease of use, sensibility and value to the consumer. All 4 skills are met with a rating of C- or above. However, keep in mind not all toys utilize the same skills so do not use this as a key to evaluate the toy overall. The Toy Tips rating score is a bettter indication of this. Click on any skill for a complete explanation of what that skill means. Not every toy can stimulate each skill. So, C- does not necessarily indicate that the score is bad, just below average for that particualr skill."})]}),Object(p.jsx)(_.a,{md:4,lg:3,xl:2,className:"d-none d-md-flex flexCenter_flexEnd",children:Object(p.jsx)("img",{src:"./assets/images/original/TT_reportCard2.PNG",width:"100%",alt:"Toy Tips Report Card"})})]}),Object(p.jsx)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{style:{textAlign:"right"},className:"d-none d-md-flex",children:"What is Toy Tips\xae Cumulative Research Score?"}),Object(p.jsx)("h4",{style:{textAlign:"right"},className:"d-flex d-md-none",children:"What is Toy Tips\xae Cumulative Research Score?"}),Object(p.jsx)("p",{children:"This score is a combination of our researchers' observation of enjoyment and development skills. Each researcher uses an original survey written by psychologists so results are accurate, independent and academic. The total score is weighted and calculated into an A through C- rating scale and Toy Tips only reports on toys with these ratings. These observations are independent of the testers rating score which is determined by the children who actually test the toys."})]})}),Object(p.jsx)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{className:"d-none d-md-flex",children:"How about the Testers' Fun Score?"}),Object(p.jsx)("h4",{className:"d-flex d-md-none",children:"How about the Testers' Fun Score?"}),Object(p.jsx)("p",{children:"This 'Fun' rating score is solely based on subjective evaluations and interviews with the actual children testing the toy. The children \"score\" each toy on a rating scale of A through C-. We do not publish toys if they rate below this score. If a toy does not score high on the fun scale, there is a reasonably good chance a child will not learn from the play experience. These scores are reported by the thousands of children we test toys with. NOTE: The fun score for toys in the infant and toddler category are based on our researcher's observation since the children are too young to speak. Also note that the researchers and kids opinions and observations differ quite a bit. Don't be surprised if a researcher reports a high score and kids may not like it as much. Researchers look for educational and skill-based learning value. Kids mostly just look for fun!"})]})}),Object(p.jsx)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)("h2",{style:{textAlign:"right"},className:"d-none d-md-flex",children:"Can you tell me more about Toy Tips\xae Skill Scores?"}),Object(p.jsx)("h4",{style:{textAlign:"right"},className:"d-flex d-md-none",children:"Can you tell me more about Toy Tips\xae Skill Scores?"}),Object(p.jsx)("h4",{children:"Movement"}),Object(p.jsx)("p",{children:"These skills can be fine motor skills, gross motor skills or both. Fine motor skills prepare children for coloring, buttoning, zippering, and other daily tasks. Using the fingers to hold, pinch and move help indicate success for basic developmental learning skills. Gross motor skills are using large muscle groups while throwing, running, crawling and climbing and are needed for a sense of balance and muscle tone. These are needed for deveopmental growth and reaching milestones."}),Object(p.jsx)("h4",{children:"Thinking"}),Object(p.jsx)("p",{children:"Intellectual thinking skills encourage imagination, concentration and creativity. Using the mind fosters deductive reasoning, logic and cognitive development."}),Object(p.jsx)("h4",{children:"Personality"}),Object(p.jsx)("p",{children:"Skills that facilitate a child to do their best, share, work with others and to be responsible are important to overall growth and help to shape whoe your child becomes. Honesty, integrity, telling the truth and doing the right thing all contribute to teaching children needed skills for later in life."}),Object(p.jsx)("h4",{children:"Social Interaction"}),Object(p.jsx)("p",{children:"Promoting interaction with other children and family members or encouraging a child to voice an opinion enhances participation, group activties, team-building and seeking new friendships.Whether a child interacts through speech or movement, this score incorporates how a toy can foster participation and action with another playmate, parent or caregiver."})]})}),Object(p.jsx)(N.a,{children:Object(p.jsxs)(_.a,{className:"mt-3",children:[Object(p.jsx)("h1",{className:"d-none d-md-flex font-weight-bold",children:"Meet the Team"}),Object(p.jsx)("h2",{className:"d-flex d-md-none font-weight-bold",children:"Meet the Team"})]})}),Object(p.jsxs)(N.a,{className:"mb-3 p-2 card_Row box_Shadow",children:[Object(p.jsx)(_.a,{xs:12,sm:12,className:"d-flex d-md-none flexCenter_center",children:Object(p.jsx)("img",{src:"./assets/images/original/profilePic_Marianne.jpg",width:"100%",alt:"Marianne Profile Pic"})}),Object(p.jsxs)(_.a,{md:8,lg:8,xl:8,children:[Object(p.jsx)("h2",{className:"d-none d-md-flex",children:"Our Founder"}),Object(p.jsx)("h4",{className:"d-flex d-md-none",children:"Our Founder"}),Object(p.jsxs)("p",{children:["Marianne M. Szymanski created Toy Tips and has been an active media personality for close to three decades!",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Appearing on Oprah, CNN, FOX and hundreds of television stations, she was a cast member on Good Morning America for eight years. Currently she is a regular guest on FOX News in Chicago offering viewers Toy Tips research results on the latest toys.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Co-Author of Toy Tips: A Parent\u2019s Essential Guide to Smart Toy Choices (Wiley/Jossey Bass), Marianne also teaches three entrepreneurship courses at the University of Southern California and is a writer of entrepreneurial case studies for Harvard Business Publishing.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Questions? Comments?",Object(p.jsx)("br",{}),"marianne@toytips.com"]})]}),Object(p.jsx)(_.a,{md:4,lg:4,xl:4,className:"d-none d-md-flex flexCenter_flexEnd",children:Object(p.jsx)("img",{src:"./assets/images/original/profilePic_Marianne.jpg",width:"100%",alt:"Marianne Profile Pic"})})]})]})})};var S=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],o=Object(a.useState)(!1),c=Object(i.a)(o,2),d=c[0],h=c[1],j=Object(a.useState)("ToyName"),b=Object(i.a)(j,2),m=b[0],u=b[1];return""!==s&&0==d&&h(!0),Object(p.jsxs)(r.a,{children:[Object(p.jsx)(f,{onChange:function(e){n(e)},search:s,onClick:function(e){u(e)},filterOption:m}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",render:function(){return d?Object(p.jsx)(T,{search:s,filterOption:m}):Object(p.jsx)(k,{})}}),Object(p.jsx)(l.a,{path:"/about",render:function(){return d?Object(p.jsx)(T,{search:s,filterOption:m}):Object(p.jsx)(C,{})}}),Object(p.jsx)(l.a,{path:"/search",render:function(){return Object(p.jsx)(T,{search:s,filterOption:m})}})]}),Object(p.jsx)(O,{})]})};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.f63065fe.chunk.js.map
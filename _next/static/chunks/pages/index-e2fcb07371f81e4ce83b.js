(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4088:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return M},default:function(){return B}});var t=i(589),a=i(2642),r=i(4691),l=i(163),o=i(6628),s=i(1481),c=i(5537),m=i(7294),d=i(8049),_=i(9954),u=i.n(_),h=function(e){var n=Date.now()-new Date(e).getTime(),i=new Date(n);return Math.abs(i.getUTCFullYear()-1970)},j=i(8692),x=i(4962),g=i(9970),p=i.n(g),f=i(5893),k=function(e){var n=e.project,i=e.onClick,a=(0,m.useCallback)((function(){return i(n)}),[i,n]);return(0,f.jsx)(t.ZP,{className:p().project,item:!0,md:6,component:"article","aria-label":n.shortDesc||n.name,role:"button",onClick:a,children:(0,f.jsx)(j.Z,{elevation:0,className:p().card,children:(0,f.jsx)(x.Z,{component:"img",classes:{img:p().portfolioImg},image:n.imageUrl,height:175})})})},N=i(9041),C=i(2981),Z=i(4975),b=i(1714),v=i(326),P=i.n(v),w=function(e){var n=e.skill,i=e.isShowCert,r=e.onDetailClick,l=(0,m.useCallback)((function(){r(i?"":n.name)}),[i,r,n.name]);return(0,f.jsxs)("article",{className:P().skill,children:[(0,f.jsxs)(t.ZP,{container:!0,spacing:1,children:[(0,f.jsxs)(t.ZP,{item:!0,flexGrow:1,children:[(0,f.jsxs)("div",{className:P().skillDesc,children:[(0,f.jsx)("img",{src:"/".concat(n.logoUrl),alt:"",width:20,height:20}),n.name]}),(0,f.jsxs)("div",{className:P().years,children:[n.experience," years"]}),(0,f.jsx)("div",{className:P().clearfix}),(0,f.jsx)(N.Z,{variant:"determinate",value:Math.min(n.experience/4*100,100)})]}),(0,f.jsx)(t.ZP,{className:P().actionContainer,item:!0,children:(0,f.jsx)(a.Z,{className:P().neutralBtn,onClick:l,children:(0,f.jsx)(Z.Z,{titleAccess:"tests and certifications"})})})]}),(0,f.jsx)(C.Z,{in:i,className:P().certList,children:(0,f.jsx)("div",{className:P().container,children:n.tests.map((function(e){return(0,f.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(b.Z,{}),(0,f.jsx)("span",{className:P().testName,children:e.name})]},e.name)}))})})]})},S=function(e,n){var i=e.slice(),t=Math.ceil(e.length/n);return Array.from({length:t},(function(){return i.splice(0,n)}))},H=i(9702),T=i(3630),A=i(3147),D=i(3132),I=i(9446),y=i.n(I),E=function(e){var n=(0,m.useCallback)((function(){window.open("/Resume - Rama Jakaria.pdf","_blank")}),[]);return(0,f.jsxs)(t.ZP,{className:y().intro,container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[(0,f.jsx)("nav",{className:y().nav,children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.Z,{onClick:e.goToAboutMe,children:"# about me"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.Z,{onClick:e.goToExperience,children:"# experience"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.Z,{onClick:e.goToPortfolio,children:"# portfolio"})})]})}),(0,f.jsxs)(t.ZP,{item:!0,className:y().headline,children:[(0,f.jsx)("h1",{children:"< Rama Jakaria />"}),(0,f.jsx)("p",{children:"A Web Developer"}),(0,f.jsxs)(a.Z,{variant:"outlined",className:y().download,onClick:n,children:["Resume \xa0 ",(0,f.jsx)(H.Z,{})]})]}),(0,f.jsxs)("section",{className:y().contacts,"aria-label":"contacts",children:[(0,f.jsxs)("a",{href:"https://www.linkedin.com/in/ramjak/",target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(T.Z,{})," ramjak"]}),(0,f.jsxs)("a",{href:"https://github.com/ramjak",target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(A.Z,{})," ramjak"]}),(0,f.jsxs)("a",{href:"mailto:rama.jakaria@gmail.com",target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(D.Z,{})," rama.jakaria@gmail.com"]})]})]})},M=!0,B=function(e){var n=e.projects,i=e.skills,_=(0,m.useState)(null),j=_[0],x=_[1],g=(0,m.useCallback)((function(){x(null)}),[]),p=(0,m.useState)(""),N=p[0],C=p[1],Z=(0,m.useState)(0),b=Z[0],v=Z[1],P=(0,m.useState)(0),H=P[0],T=P[1];(0,m.useEffect)((function(){T(window.innerWidth)}),[]);var A=(0,m.useMemo)((function(){return H<900}),[H]),D=(0,m.useCallback)((function(){return v(A?1:0)}),[A]),I=(0,m.useCallback)((function(){return v(A?2:1)}),[A]),y=(0,m.useCallback)((function(){return v(A?3:2)}),[A]),M=(0,m.useState)(1),B=M[0],R=M[1],U=(0,m.useCallback)((function(e,n){R(n)}),[]);return(0,f.jsxs)(t.ZP,{container:!0,className:u().container,children:[!A&&(0,f.jsx)(t.ZP,{item:!0,md:6,component:"header",children:(0,f.jsx)(E,{goToAboutMe:D,goToExperience:I,goToPortfolio:y})}),(0,f.jsx)(t.ZP,{item:!0,md:6,component:"main",className:u().main,children:(0,f.jsxs)(d.Z,{pageOnChange:v,containerWidth:A?H:H/2,customPageNumber:b,children:[A&&(0,f.jsx)("section",{"aria-label":"intro",children:(0,f.jsx)(E,{goToAboutMe:D,goToExperience:I,goToPortfolio:y})}),(0,f.jsxs)(t.ZP,{className:"".concat(u().aboutMe," ").concat(u().page),id:"aboutMe","aria-label":"about me",container:!0,component:"section",alignItems:"center",justifyContent:"center",direction:"column",children:[(0,f.jsx)("div",{className:u().imgContainer,children:(0,f.jsx)("img",{src:"/photo.webp",alt:"",width:"200",height:"200"})}),(0,f.jsx)("p",{className:u().greetings,children:"Hello, there! \ud83d\udc4b"}),(0,f.jsxs)("p",{className:u().desc,children:["I'm a Web developer based in Jakarta with more than"," ",h("1 April 2016")," years of experience in front-end and back-end."]}),(0,f.jsxs)(a.Z,{onClick:I,children:[(0,f.jsx)("p",{children:"Scroll to see more about me"}),(0,f.jsx)(s.Z,{})]})]}),(0,f.jsxs)(t.ZP,{className:"".concat(u().skills," ").concat(u().page),container:!0,component:"section",justifyContent:"center",direction:"column",id:"skills",children:[(0,f.jsx)("h2",{className:u().title,children:"Experience"}),i.map((function(e){return(0,f.jsx)(w,{isShowCert:e.name===N,skill:e,onDetailClick:C},e.name)}))]}),(0,f.jsxs)(t.ZP,{component:"section",className:"".concat(u().portfolio," ").concat(u().page),container:!0,alignItems:"center",justifyContent:"center",direction:"column",spacing:4,id:"portfolio",children:[(0,f.jsx)(t.ZP,{item:!0,component:"h2",className:u().title,children:"Portfolio"}),(0,f.jsx)(t.ZP,{item:!0,className:u().group,children:(0,f.jsx)("div",{className:u().slider,style:{left:"".concat(-100*(B-1),"%")},children:S(n,4).map((function(e){return(0,f.jsx)(t.ZP,{className:u().projectsPage,container:!0,spacing:4,children:e.map((function(e){return(0,f.jsx)(k,{project:e,onClick:x},e.name)}))},e[0].name)}))})}),(0,f.jsx)(r.Z,{className:u().pagination,count:2,boundaryCount:0,page:B,onChange:U})]})]})}),(0,f.jsx)(l.Z,{open:!!j,onClose:g,className:u().highlight,"aria-label":"Project highlight",children:(0,f.jsx)(o.Z,{in:!!j,timeout:100,children:(0,f.jsxs)(t.ZP,{container:!0,justifyContent:"center",spacing:4,onClick:g,children:[(0,f.jsxs)(t.ZP,{item:!0,lg:5,className:u().meta,children:[(0,f.jsx)("h2",{children:null===j||void 0===j?void 0:j.name}),(null===j||void 0===j?void 0:j.date)&&(0,f.jsxs)("p",{className:u().date,children:["created: ",j.date]}),(0,f.jsx)("p",{className:u().desc,children:null===j||void 0===j?void 0:j.description})]}),(0,f.jsx)(t.ZP,{item:!0,lg:7,children:(0,f.jsx)("img",{src:(null===j||void 0===j?void 0:j.imageUrl)||"",alt:""})}),(0,f.jsx)(a.Z,{className:u().closeButton,onClick:g,"aria-label":"close modal",children:(0,f.jsx)(c.Z,{fontSize:"large"})})]})})})]})}},5301:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4088)}])},9446:function(e){e.exports={intro:"Intro_intro__cYsBS",headline:"Intro_headline__12BNN",download:"Intro_download__23TMX",contacts:"Intro_contacts__3DI4e",nav:"Intro_nav__2fugt"}},9970:function(e){e.exports={project:"ProjectCard_project__3HJD3",card:"ProjectCard_card__1UseB",portfolioImg:"ProjectCard_portfolioImg__1aDw2"}},326:function(e){e.exports={skill:"SkillArticle_skill__31K_H",skillDesc:"SkillArticle_skillDesc__1_Rd_",years:"SkillArticle_years__2iptz",actionContainer:"SkillArticle_actionContainer__98bQB",neutralBtn:"SkillArticle_neutralBtn__3fj9b",certList:"SkillArticle_certList__3KSff",container:"SkillArticle_container__knC4f",testName:"SkillArticle_testName__21iuZ",clearfix:"SkillArticle_clearfix__2TSKQ"}},9954:function(e){e.exports={container:"Home_container__3sao-",main:"Home_main__1Z1aG",page:"Home_page__2T0Rp",aboutMe:"Home_aboutMe__1K3fE",greetings:"Home_greetings__arhKa",desc:"Home_desc__39DIh",imgContainer:"Home_imgContainer__br8O4",title:"Home_title__28pEg",skills:"Home_skills__11BTZ",portfolio:"Home_portfolio__3pn-G",group:"Home_group__2D3X3",slider:"Home_slider__HxGZU",projectsPage:"Home_projectsPage__2WnON",pagination:"Home_pagination__1RgwT",highlight:"Home_highlight__20CI6",meta:"Home_meta__1w0Sg",date:"Home_date__j2jzN",closeButton:"Home_closeButton__25Hfd"}}},function(e){e.O(0,[546,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
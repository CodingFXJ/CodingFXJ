import{u as z,_ as D}from"./WrapperPost.vue_vue_type_script_setup_true_lang--BKp8TXH.js";import{d as P,u as C,e as F,f as L,o as n,g as a,h as c,i as s,F as g,r as N,n as u,a as r,t as i,c as x,w as y,j as S,m as R,k as V,l as W}from"./app-CswduMFc.js";const Y={key:0,py2:"",op50:""},$={"text-8em":"","color-transparent":"",absolute:"","left--3rem":"","top--2rem":"","font-bold":"","text-stroke-2":"","text-stroke-hex-aaa":"",op10:""},E={class:"no-underline",flex:"~ col md:row gap-2 md:items-center"},G={class:"title text-lg leading-1.2em",flex:"~ gap-2 wrap"},b={key:0,"align-middle":"","flex-none":"",class:"text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--12 mr2 my-auto hidden md:block"},j={"align-middle":""},H={key:1,"align-middle":"",op50:"","flex-none":"","text-xs":"","ml--1.5":"","i-carbon-arrow-up-right":"",title:"External"},I={flex:"~ gap-2 items-center"},O={key:0,"align-middle":"",op50:"","flex-none":"","i-ri:group-2-line":"",title:"In person"},U={key:1,"align-middle":"",op50:"","flex-none":"","i-ri:film-line":"",title:"Provided in video"},q={key:2,"align-middle":"",op50:"","flex-none":"","i-ri:radio-line":"",title:"Provided in radio"},A={"text-sm":"",op50:"","ws-nowrap":""},J={key:3,"text-sm":"",op40:"","ws-nowrap":""},K={key:4,"text-sm":"",op40:"","ws-nowrap":""},M={key:5,"text-sm":"",op40:"","ws-nowrap":"","md:hidden":""},Q={key:6,"align-middle":"","flex-none":"",class:"text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"},T={key:0,op50:"","text-sm":"",hidden:"","mt--2":"","md:block":""},X=P({__name:"ListPosts",props:{type:{},posts:{},extra:{}},setup(f){const p=f,h=C().getRoutes().filter(e=>e.path.startsWith("/posts")&&e.meta.frontmatter.date&&!e.meta.frontmatter.draft).filter(e=>!e.path.endsWith(".html")).map(e=>({path:e.meta.frontmatter.redirect||e.path,title:e.meta.frontmatter.title,date:e.meta.frontmatter.date,lang:e.meta.frontmatter.lang,duration:e.meta.frontmatter.duration,recording:e.meta.frontmatter.recording,upcoming:e.meta.frontmatter.upcoming,redirect:e.meta.frontmatter.redirect,place:e.meta.frontmatter.place})),m=F(()=>[...p.posts||h,...p.extra||[]].sort((e,o)=>+new Date(o.date)-+new Date(e.date)).filter(e=>!L.value||e.lang!=="zh")),l=e=>new Date(e).getFullYear(),d=e=>e&&new Date(e)>new Date,w=(e,o)=>e&&o&&l(e)===l(o);function v(e,o){return d(e.date)===d(o==null?void 0:o.date)&&w(e.date,o==null?void 0:o.date)}function B(e){return d(e.date)?"Upcoming":l(e.date)}return(e,o)=>(n(),a("ul",null,[c(m).length?s("",!0):(n(),a("div",Y," { nothing here yet } ")),(n(!0),a(g,null,N(c(m),(t,_)=>(n(),a(g,{key:t.path},[v(t,c(m)[_-1])?s("",!0):(n(),a("div",{key:0,"select-none":"",relative:"",h20:"","pointer-events-none":"","slide-enter":"",style:u({"--enter-stage":_-2,"--enter-step":"60ms"})},[r("span",$,i(B(t)),1)],4)),r("div",{class:"slide-enter",style:u({"--enter-stage":_,"--enter-step":"60ms"})},[(n(),x(V(t.path.includes("://")?"a":"RouterLink"),R({ref_for:!0},t.path.includes("://")?{href:t.path,target:"_blank",rel:"noopener noreferrer"}:{to:t.path},{class:"item block font-normal mb-6 mt-2 no-underline"}),{default:y(()=>[r("li",E,[r("div",G,[t.lang==="zh"?(n(),a("span",b,"中文")):s("",!0),r("span",j,i(t.title),1),t.redirect?(n(),a("span",H)):s("",!0)]),r("div",I,[t.inperson?(n(),a("span",O)):s("",!0),t.recording||t.video?(n(),a("span",U)):s("",!0),t.radio?(n(),a("span",q)):s("",!0),r("span",A,i(c(S)(t.date,!0)),1),t.duration?(n(),a("span",J,"· "+i(t.duration),1)):s("",!0),t.platform?(n(),a("span",K,"· "+i(t.platform),1)):s("",!0),t.place?(n(),a("span",M,"· "+i(t.place),1)):s("",!0),t.lang==="zh"?(n(),a("span",Q,"中文")):s("",!0)])]),t.place?(n(),a("div",T,i(t.place),1)):s("",!0)]),_:2},1040))],4)],64))),128))]))}}),Z={class:"prose m-auto slide-enter-content"},ne={__name:"index",setup(f){const p={title:"Blogs",display:"",art:"plum",meta:[{property:"og:title",content:"Blogs"},{name:"twitter:title",content:"Blogs"}]};return z({title:"Blogs",meta:[{property:"og:title",content:"Blogs"},{name:"twitter:title",content:"Blogs"}]}),(h,m)=>{const l=X,d=D;return n(),x(d,{frontmatter:p},{default:y(()=>[r("div",Z,[W(l,{"only-date":"",type:"blog"})])]),_:1})}}};export{ne as default};

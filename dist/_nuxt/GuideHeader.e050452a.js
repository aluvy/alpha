import{_ as u}from"./nuxt-link.ac5f26dd.js";import{_ as m,o,c as l,a as e,b as i,w as p,d as s,t,F as g,r as h,I as f,p as v,e as I}from"./entry.c8fdadf4.js";const x=""+globalThis.__publicAssetsURL("images/common/logo_plusalpha.png");const b={name:"GuideHeader",props:{page:Object,pageOn:Number,pageInfo:Object}},c=n=>(v("data-v-a5044c3e"),n=n(),I(),n),k={class:"cont_area"},N=c(()=>e("img",{src:x,alt:"+알파"},null,-1)),O=c(()=>e("p",{class:"info"},[e("span",null,"2023.05.26"),s(" Last updata")],-1)),w={class:"proc_wrap"},y={class:"proc"},L={class:"tab_nav"},S=c(()=>e("div",{class:"marker"},[e("ul",null,[e("li",{class:"com"},"컨펌 진행중"),e("li",{class:"end"},"퍼블완료"),e("li",{class:"mod"},"수정")])],-1));function B(n,G,a,H,V,j){const _=u;return o(),l("header",null,[e("div",k,[e("h1",null,[i(_,{to:"/"},{default:p(()=>[N]),_:1}),s(" : "+t(a.page[a.pageOn].name),1)]),O,e("div",w,[e("div",y,[e("p",null,[s("페이지 수 : "),e("strong",null,t(a.pageInfo.total),1)]),e("p",null,[s("완료된 페이지 수 : "),e("strong",null,t(a.pageInfo.end),1)]),e("p",null,[s("진행율 : "),e("strong",null,t(a.pageInfo.per)+"%",1)])])]),e("ul",L,[(o(!0),l(g,null,h(a.page,(d,r)=>(o(),l("li",{key:r,class:f({on:a.pageOn==r})},[i(_,{to:`${d.path}`},{default:p(()=>[s(t(d.name),1)]),_:2},1032,["to"])],2))),128))]),S])])}const T=m(b,[["render",B],["__scopeId","data-v-a5044c3e"]]);export{T as default};